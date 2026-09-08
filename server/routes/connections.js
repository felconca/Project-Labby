const express = require('express');
const crypto = require('crypto');
const db = require('../db');
const { encrypt, decrypt } = require('../crypto');
const driverManager = require('../driverManager');

const router = express.Router();

function toPublic(row) {
  return {
    id: row.id,
    name: row.name,
    type: row.type,
    host: row.host,
    port: row.port,
    username: row.username,
    defaultDatabase: row.default_database,
    createdAt: row.created_at,
  };
}

function toInternal(row) {
  return {
    id: row.id,
    name: row.name,
    type: row.type,
    host: row.host,
    port: row.port,
    username: row.username,
    password: decrypt(row.password_encrypted),
    defaultDatabase: row.default_database,
  };
}

function loadConnectionOr404(req, res) {
  const row = db.prepare('SELECT * FROM connections WHERE id = ?').get(req.params.id);
  if (!row) {
    res.status(404).json({ error: `No connection with id "${req.params.id}"` });
    return null;
  }
  return row;
}

function validateBody(body) {
  const errors = [];
  if (!body.name || !body.name.trim()) errors.push('Name is required.');
  if (!['mysql', 'postgres'].includes(body.type)) errors.push('Type must be "mysql" or "postgres".');
  if (!body.host || !body.host.trim()) errors.push('Host is required.');
  if (!body.port || isNaN(Number(body.port))) errors.push('Port must be a number.');
  return errors;
}

// GET /api/connections — list, passwords never included
router.get('/', (req, res) => {
  const rows = db.prepare('SELECT * FROM connections ORDER BY created_at ASC').all();
  res.json(rows.map(toPublic));
});

// POST /api/connections/test — try connecting without saving anything
router.post('/test', async (req, res) => {
  const errors = validateBody(req.body);
  if (errors.length) return res.status(400).json({ error: errors.join(' ') });
  try {
    await driverManager.testConnection({
      id: 'test',
      type: req.body.type,
      host: req.body.host,
      port: Number(req.body.port),
      username: req.body.username,
      password: req.body.password,
      defaultDatabase: req.body.defaultDatabase,
    });
    res.json({ ok: true });
  } catch (err) {
    res.status(400).json({ ok: false, error: err.message });
  }
});

// POST /api/connections — create + persist (password encrypted)
router.post('/', (req, res) => {
  const errors = validateBody(req.body);
  if (errors.length) return res.status(400).json({ error: errors.join(' ') });

  let passwordEncrypted;
  try {
    passwordEncrypted = encrypt(req.body.password || '');
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }

  const row = {
    id: crypto.randomUUID(),
    name: req.body.name.trim(),
    type: req.body.type,
    host: req.body.host.trim(),
    port: Number(req.body.port),
    username: req.body.username || '',
    password_encrypted: passwordEncrypted,
    default_database: req.body.defaultDatabase || null,
  };

  db.prepare(`
    INSERT INTO connections (id, name, type, host, port, username, password_encrypted, default_database)
    VALUES (@id, @name, @type, @host, @port, @username, @password_encrypted, @default_database)
  `).run(row);

  res.status(201).json(toPublic({ ...row, created_at: new Date().toISOString() }));
});

// DELETE /api/connections/:id
router.delete('/:id', (req, res) => {
  const row = loadConnectionOr404(req, res);
  if (!row) return;
  driverManager.closePools(toInternal(row));
  db.prepare('DELETE FROM connections WHERE id = ?').run(req.params.id);
  res.json({ ok: true });
});

// GET /api/connections/:id/databases
router.get('/:id/databases', async (req, res) => {
  const row = loadConnectionOr404(req, res);
  if (!row) return;
  try {
    const databases = await driverManager.listDatabases(toInternal(row));
    res.json(databases);
  } catch (err) {
    res.status(502).json({ error: `Could not list databases: ${err.message}` });
  }
});

// GET /api/connections/:id/databases/:database/tables
router.get('/:id/databases/:database/tables', async (req, res) => {
  const row = loadConnectionOr404(req, res);
  if (!row) return;
  try {
    const tables = await driverManager.listTables(toInternal(row), req.params.database);
    res.json(tables);
  } catch (err) {
    res.status(502).json({ error: `Could not list tables: ${err.message}` });
  }
});

// GET /api/connections/:id/databases/:database/tables/:table/columns
router.get('/:id/databases/:database/tables/:table/columns', async (req, res) => {
  const row = loadConnectionOr404(req, res);
  if (!row) return;
  try {
    const columns = await driverManager.listColumns(toInternal(row), req.params.database, req.params.table);
    res.json(columns);
  } catch (err) {
    res.status(502).json({ error: `Could not list columns: ${err.message}` });
  }
});

module.exports = router;
