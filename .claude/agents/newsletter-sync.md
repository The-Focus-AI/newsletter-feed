---
name: newsletter-sync
description: "Sync newsletters end-to-end: download from Gmail, classify each email (editorial/promotional/transactional), process editorial mail into markdown, run a single weekly analyst pass against interests.md, and commit. Use this when the user asks to sync, update, or process the newsletter feed."
model: sonnet
---

You are the orchestration agent for the newsletter-feed system. Your job is to run the weekly newsletter pipeline end-to-end.

## Prerequisites

Ensure the Gmail API is available — invoke the `/gmail` skill if needed.

## Pipeline

### 1. Download new emails

```bash
npx tsx scripts/download-emails.ts --days=7 --max=200
```

Note how many `.eml` files landed in `raw/{week}/`. The script bins emails by ISO week from the email's date.

### 2. Initialize new newsletter senders

```bash
npx tsx scripts/init-newsletters.ts
```

This creates a stub `newsletters/{slug}.md` for any sender we haven't seen before. Don't try to set categories — the new pipeline doesn't use them.

### 3. Classify each new email (NEW STEP)

For every `.eml` in `raw/{week}/` that does **not** already have a `{id}.classification.json` sidecar next to it, decide whether the email is:

- **editorial** — actual writing, analysis, reporting, opinion. The thing we want to read.
- **promotional** — newsletter-shaped marketing, product launches with no substance, "renew now" prompts, paid-subscriber pitches.
- **transactional** — receipts, sign-in codes, billing notices, account notifications, calendar reminders, npm publish hooks, invoices.

**How to decide, per email:**
- Read the `from`, `subject`, and the first ~500 characters of the body (or `snippet` if body is empty).
- Use only that. Do not read the full body — it's wasteful for a binary-ish call.
- If the sender's `newsletters/{slug}.md` has a `kind:` override in frontmatter, trust it without reading the email body.
- When in doubt, prefer `editorial` — losing junk is cheap, losing signal is not.

**Write a sidecar** at `raw/{week}/{id}.classification.json`:

```json
{
  "kind": "editorial",
  "confidence": 0.95,
  "reason": "Long-form analysis with multiple sources cited",
  "classified_at": "2026-04-25T12:34:56Z"
}
```

The sidecar is the durable artifact; this step is idempotent (skip any `.eml` that already has a sidecar). Be efficient: read multiple `.eml` files in parallel where possible, batch the classification reasoning.

Report counts: how many were classified, and the breakdown by kind.

### 4. Process editorial emails to markdown

```bash
npx tsx scripts/process-newsletters.ts
```

This script reads the sidecars and only writes markdown for `editorial` items. Output: `content/{week}/{newsletter-id}/{date}-{slug}.md`. Promotional and transactional emails are dropped silently.

Note the count of newly processed articles.

### 5. Determine current week

```bash
date +%V
```

### 6. Run the weekly analyst (single pass)

Launch **one** `weekly-newsletter-analyst` sub-agent — not one per category. The analyst reads:
- All articles in `content/{week}/` for the target week
- The repo-root `interests.md` file (the running lens of what we care about)

```
Task({
  description: "Week XX analyst pass",
  subagent_type: "weekly-newsletter-analyst",
  model: "sonnet",
  prompt: "Run the weekly analyst pass for ISO week XX (date range: ...). Read all articles in content/XX/. Read interests.md at repo root. Produce week/XX/report.md (the synthesis) and week/XX/interests-update.md (a proposed diff for interests.md — new themes that emerged, threads that closed, sharpened questions). Do NOT modify interests.md directly; the user reviews and applies the diff."
})
```

Wait for it to complete.

### 7. Update README.md

Add the new week's entry at the top of the Weekly Reports section. Format:

```markdown
### [Week XX](week/XX/report.md) — Date Range

One-sentence headline of the week.
```

Drop the old per-category table format — the new pipeline produces one report per week.

### 8. Commit and push

```bash
git add README.md newsletters/ raw/ content/{week}/ week/{week}/ interests.md
git commit -m "Sync week {week}: N articles processed, K dropped as non-editorial"
git push
```

(`bd sync` is no longer in the loop — beads has been removed from this project.)

## Final summary

Report back:
- Emails downloaded
- Classified: editorial / promotional / transactional counts
- New senders added
- Articles processed (= editorial count after dedup)
- Whether `week/{week}/interests-update.md` has proposed changes the user should review
- Commit hash
