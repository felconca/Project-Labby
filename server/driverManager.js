const mysqlDriver = require('./drivers/mysql');
const postgresDriver = require('./drivers/postgres');

function getDriver(type) {
  if (type === 'mysql') return mysqlDriver;
  if (type === 'postgres') return postgresDriver;
  throw new Error(`Unsupported connection type: ${type}`);
}

async function testConnection(conn) {
  return getDriver(conn.type).testConnection(conn);
}

async function listDatabases(conn) {
  return getDriver(conn.type).listDatabases(conn);
}

async function listTables(conn, database) {
  return getDriver(conn.type).listTables(conn, database);
}

async function listColumns(conn, database, table) {
  return getDriver(conn.type).listColumns(conn, database, table);
}

async function runQuery(conn, database, sql, maxRows) {
  return getDriver(conn.type).runQuery(conn, database, sql, maxRows);
}

function closePools(conn) {
  getDriver(conn.type).closePools(conn.id);
}

module.exports = { testConnection, listDatabases, listTables, listColumns, runQuery, closePools };
