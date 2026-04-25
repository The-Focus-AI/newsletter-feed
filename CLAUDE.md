# Newsletter Feed

Download newsletters from Gmail, classify each email (drop the junk), process editorial mail into markdown, and run a weekly analyst pass that synthesizes through `interests.md` — the user's evolving lens of what matters.

## Quick Commands

### Sync newsletters

When the user asks to "sync newsletters" or "update newsletters", launch the `newsletter-sync` agent:

```
Task({
  subagent_type: "newsletter-sync",
  prompt: "Sync newsletters for this week",
  run_in_background: true
})
```

The agent runs the full pipeline:

1. Download new emails from Gmail
2. Initialize new newsletter senders
3. **Classify** each new `.eml` as `editorial` / `promotional` / `transactional` (writes a `.classification.json` sidecar)
4. Process editorial emails into markdown
5. Run a single `weekly-newsletter-analyst` pass
6. Update README.md
7. Commit and push

### Manual workflow

```
1. /gmail                                            # ensure Gmail auth
2. npx tsx scripts/download-emails.ts --days=7
3. npx tsx scripts/init-newsletters.ts
4. <classify each .eml — see "Classification" below>
5. npx tsx scripts/process-newsletters.ts
6. Launch weekly-newsletter-analyst for the week
7. git add … && git commit && git push
```

## Directory Structure

```
raw/                                # Raw emails by ISO week
  17/
    {message-id}.eml                # email source
    {message-id}.classification.json # editorial | promotional | transactional

newsletters/                        # Newsletter definitions (sender → identity)
  turing-post.md
  every.md

content/                            # Editorial articles (post-filter), by week
  17/
    turing-post/
      2026-04-22-token-taxonomy.md
    every/
      2026-04-21-the-model-got-stranger.md

week/                               # Weekly synthesis
  17/
    report.md                       # The synthesis (one per week)
    interests-update.md             # Proposed updates to interests.md (review by hand)

interests.md                        # The user's evolving lens — read by analyst, never auto-edited
```

Older weeks (pre-rewrite) used a `content/{category}/{newsletter}/` layout. That history is preserved as-is; new weeks land under `content/{week}/{newsletter}/`.

## Classification

Every `.eml` gets a one-time classification. The sidecar lives next to the email:

```json
{
  "kind": "editorial",
  "confidence": 0.95,
  "reason": "Long-form analysis with multiple sources cited",
  "classified_at": "2026-04-25T12:34:56Z"
}
```

**Three kinds:**
- `editorial` — actual writing, analysis, reporting. Goes into `content/`.
- `promotional` — newsletter-shaped marketing, product launches, "renew now". Dropped.
- `transactional` — receipts, sign-in codes, billing, calendar reminders, npm hooks. Dropped.

The sync agent does the classification by reading `from`, `subject`, and the first ~500 chars of the body. When in doubt, prefer `editorial` — losing junk is cheap, losing signal is not.

**Per-sender override.** Add `kind:` to a newsletter's frontmatter to skip the per-email decision:

```yaml
---
name: "iProyal Billing"
email_patterns:
  - billing@iproyal.com
kind: transactional
---
```

## Newsletter Definitions

```yaml
---
name: "Turing Post"
email_patterns:
  - "@mail.beehiiv.com"
  - turingpost@substack.com
author: Ksenia Se
url: https://turingpost.com
kind: editorial            # optional override — bypasses per-email classification
---
```

No `category:` field anymore. Categories are gone.

## Article Frontmatter

```yaml
---
id: <email-message-id>
newsletter: turing-post
newsletter_name: "Turing Post"
week: "17"
subject: "How Token Taxonomy Affects Your Bill"
date: Wed, 22 Apr 2026 13:11:00 +0000
source_url: "https://turingpost.com/p/token-taxonomy"
---
```

## Weekly Report Format

The analyst produces `week/{week}/report.md` with this shape:

```markdown
# Week NN Newsletter Report (Date Range)

## TL;DR
2–4 sentences. Every newsletter mention is a hyperlink to its source_url.

## Threads from interests.md
For each running thread that moved this week, one section. Skip threads with no movement.

## New stories worth tracking
Stories outside existing threads. Each gets 1–3 paragraphs.

## Cross-newsletter patterns
When 2+ newsletters cover the same beat, note the convergence/divergence.

## Sources
- [Article Title](source_url) — Newsletter Name
```

And `week/{week}/interests-update.md` — a proposed diff to `interests.md` (new threads, sharpened questions, newsletters proving valuable or noisy). The user reviews and applies it; the analyst never edits `interests.md` directly.

**Linking rules (non-negotiable):**
- Every newsletter mention is `[Newsletter Name](source_url)`.
- Every quote attribution links to its source article.
- Sources section lists every editorial article from `content/{week}/`, even if not cited.
- If `source_url` is missing, use plain text — never invent a URL.

## Scripts

### download-emails.ts
```bash
npx tsx scripts/download-emails.ts --days=7 --max=200 --label=Newsletters
```

### init-newsletters.ts
Creates stub `newsletters/{slug}.md` for each new sender found in `raw/`.
```bash
npx tsx scripts/init-newsletters.ts
```

### process-newsletters.ts
Reads `.classification.json` sidecars, writes markdown for editorial-only.
```bash
npx tsx scripts/process-newsletters.ts [--force] [--week=17]
```

## Agents

`.claude/agents/newsletter-sync.md` — orchestration (download, classify, process, analyst, commit).
`.claude/agents/weekly-newsletter-analyst.md` — single weekly synthesis pass through `interests.md`.

Both default to Sonnet. Override with `model: "opus"` for deeper reasoning.

## Gmail Setup

```bash
npx tsx ~/.claude/plugins/cache/focus-marketplace/google-skill/*/scripts/gmail.ts check
```

If not authenticated, run `/gmail`.

## Email a Report

```bash
npx tsx ~/.claude/plugins/cache/focus-marketplace/google-skill/*/scripts/gmail.ts send-md \
  --to="recipient@example.com" \
  --file="./week/17/report.md" \
  --style=client
```

Style: `client` (Focus.AI Client) or `labs` (Focus.AI Labs).
