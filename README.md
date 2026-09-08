# Project-Labby

A self-hostable, SQL runner for MySQL and PostgreSQL. One Node.js
process serves the web UI and the API on a single port — clone it, `npm start`,
open the URL.

## Features

- Connect to multiple MySQL and PostgreSQL servers
- Browse databases → tables in a sidebar tree
- Click a table to instantly preview it, or write raw SQL in the editor
- Results view as a table or JSON, with CSV/JSON export
- Every run is saved to history (connection, database, query, status, timing)
- Saved connections persist in a local SQLite file; passwords are encrypted at rest

## Requirements

- Node.js 18+
- Network access to MySQL/Postgres servers you want to query (the
  app itself has no database dependency beyond the bundled SQLite file)

## Setup

```bash
npm install
cp .env.example .env
```

Open `.env` and set a real `ENCRYPTION_KEY` (used to encrypt saved connection
passwords). Generate one with:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Then start it:

```bash
npm start
```

Open the URL printed in the terminal (default `http://localhost:4000`). Use
"+ Add connection" in the sidebar, or the connection dropdown in the top bar,
to add your first MySQL or Postgres server.

## Configuration (`.env`)

| Variable         | Default                     | Description                                             |
| ---------------- | --------------------------- | ------------------------------------------------------- |
| `PORT`           | `4000`                      | Port the web UI + API are served on                     |
| `ENCRYPTION_KEY` | _(must be set)_             | Key used to encrypt saved connection passwords          |
| `DB_FILE`        | `./data/query-bench.sqlite` | Where connections + history are stored                  |
| `MAX_ROWS`       | `1000`                      | Max rows returned to the browser per query (safety cap) |

## How it works

- `server/index.js` — Express app; serves `public/` as static files and mounts the API under `/api`
- `server/db.js` — SQLite schema (via `better-sqlite3`): `connections`, `history`
- `server/crypto.js` — AES-256-GCM encryption for stored passwords
- `server/driverManager.js` + `server/drivers/{mysql,postgres}.js` — connection pooling and query execution per database type
- `server/routes/` — REST endpoints for connections, query execution, and history
- `public/index.html` — the whole frontend (vanilla JS, no build step)

### API surface

| Method | Path                                              | Purpose                                    |
| ------ | ------------------------------------------------- | ------------------------------------------ |
| GET    | `/api/connections`                                | List saved connections (no passwords)      |
| POST   | `/api/connections`                                | Save a new connection                      |
| POST   | `/api/connections/test`                           | Test credentials without saving            |
| DELETE | `/api/connections/:id`                            | Remove a connection                        |
| GET    | `/api/connections/:id/databases`                  | List databases visible to a connection     |
| GET    | `/api/connections/:id/databases/:database/tables` | List tables in a database                  |
| POST   | `/api/query`                                      | Run SQL: `{ connectionId, database, sql }` |
| GET    | `/api/history?limit=200`                          | List recent query runs                     |
| DELETE | `/api/history`                                    | Clear history                              |

## Known limitations (contributions welcome)

- No authentication on the web UI itself — put it behind a reverse proxy with
  auth (or a VPN) if you're exposing it beyond your own machine.
- No SSL/TLS options for the database connections yet.
- Query results are capped at `MAX_ROWS`; very large `SELECT *` queries are
  still fetched from the database in full before being truncated for display,
  so keep an eye on memory for huge tables.
- Single SQLite file — fine for personal/small-team use, not built for
  concurrent multi-writer workloads.

## License

MIT
