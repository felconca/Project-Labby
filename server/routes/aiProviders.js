const express = require("express");
const db = require("../db");
const { encrypt } = require("../crypto");

const router = express.Router();
const VALID_PROVIDERS = ["anthropic", "openai", "xai"];

// GET /api/ai-providers — never returns the actual key, just whether one is set
router.get("/", (req, res) => {
  const rows = db.prepare("SELECT provider, updated_at FROM ai_providers").all();
  const byProvider = new Map(rows.map((r) => [r.provider, r]));
  res.json(
    VALID_PROVIDERS.map((provider) => ({
      provider,
      configured: byProvider.has(provider),
      updatedAt: byProvider.get(provider)?.updated_at || null,
    })),
  );
});

// PUT /api/ai-providers/:provider  { apiKey }
router.put("/:provider", (req, res) => {
  const { provider } = req.params;
  if (!VALID_PROVIDERS.includes(provider)) {
    return res.status(400).json({ error: `Unknown provider "${provider}".` });
  }
  const apiKey = (req.body.apiKey || "").trim();
  if (!apiKey) return res.status(400).json({ error: "API key is required." });

  let encrypted;
  try {
    encrypted = encrypt(apiKey);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }

  db.prepare(
    `
    INSERT INTO ai_providers (provider, api_key_encrypted, updated_at)
    VALUES (@provider, @key, datetime('now'))
    ON CONFLICT(provider) DO UPDATE SET api_key_encrypted = @key, updated_at = datetime('now')
  `,
  ).run({ provider, key: encrypted });

  res.json({ ok: true });
});

// DELETE /api/ai-providers/:provider
router.delete("/:provider", (req, res) => {
  const { provider } = req.params;
  if (!VALID_PROVIDERS.includes(provider)) {
    return res.status(400).json({ error: `Unknown provider "${provider}".` });
  }
  db.prepare("DELETE FROM ai_providers WHERE provider = ?").run(provider);
  res.json({ ok: true });
});

module.exports = router;
