const express = require('express');
const crypto = require('crypto');
const db = require('../db');
const { decrypt } = require('../crypto');
const driverManager = require('../driverManager');

const router = express.Router();

const MAX_ROWS = Math.min(Number(process.env.MAX_ROWS) || 1000, 10000);

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

function recordHistory({ connRow, database, sql, status, errorMessage, rowCount, ms }) {
  db.prepare(`
    INSERT INTO history (id, connection_id, connection_name, connection_type, database_name, query_text, status, error_message, row_count, duration_ms)
    VALUES (@id, @connection_id, @connection_name, @connection_type, @database_name, @query_text, @status, @error_message, @row_count, @duration_ms)
  `).run({
    id: crypto.randomUUID(),
    connection_id: connRow ? connRow.id : null,
    connection_name: connRow ? connRow.name : null,
    connection_type: connRow ? connRow.type : null,
    database_name: database || null,
    query_text: sql,
    status,
    error_message: errorMessage || null,
    row_count: rowCount ?? null,
    duration_ms: ms ?? null,
  });
}

// POST /api/query  { connectionId, database, sql }
router.post('/', async (req, res) => {
  const { connectionId, database, sql } = req.body;

  if (!sql || !sql.trim()) {
    return res.status(400).json({ status: 'error', message: 'Query text is empty.' });
  }
  if (!connectionId) {
    return res.status(400).json({ status: 'error', message: 'No connection selected.' });
  }

  const connRow = db.prepare('SELECT * FROM connections WHERE id = ?').get(connectionId);
  if (!connRow) {
    return res.status(404).json({ status: 'error', message: `No connection with id "${connectionId}".` });
  }

  try {
    const result = await driverManager.runQuery(toInternal(connRow), database, sql, MAX_ROWS);
    recordHistory({
      connRow, database, sql,
      status: 'success',
      rowCount: result.rowCount,
      ms: result.ms,
    });
    res.json({
      status: 'success',
      columns: result.columns,
      rows: result.rows,
      rowCount: result.rowCount,
      truncated: result.truncated,
      ms: result.ms,
    });
  } catch (err) {
    recordHistory({ connRow, database, sql, status: 'error', errorMessage: err.message });
    res.status(400).json({ status: 'error', message: err.message });
  }
});

module.exports = router;
