# Newsletter Feed

A system for downloading, organizing, and processing newsletter emails from Gmail.

## Quick Start

```bash
# Download recent newsletters (last 7 days)
npx tsx scripts/download-emails.ts

# Process into organized markdown
npx tsx scripts/process-newsletters.ts
```

## Directory Structure

- `raw/` - Raw .eml files organized by ISO week number (e.g., `raw/03/`)
- `newsletters/` - Newsletter definitions (one .md file per newsletter with YAML frontmatter)
- `content/{category}/{newsletter}/` - Processed markdown articles

## Scripts

### download-emails.ts
Downloads emails from Gmail with the "Newsletters" label.

```bash
npx tsx scripts/download-emails.ts [options]
  --days=7      # How many days back to fetch (default: 7)
  --max=200     # Maximum emails to fetch (default: 200)
  --label=X     # Gmail label to use (default: Newsletters)
```

### init-newsletters.ts
Scans raw emails and creates newsletter definition files for new senders.

```bash
npx tsx scripts/init-newsletters.ts
```

Creates files in `newsletters/` with auto-guessed categories. Review and edit as needed.

### process-newsletters.ts
Converts raw emails to organized markdown with frontmatter.

```bash
npx tsx scripts/process-newsletters.ts [options]
  --force       # Reprocess even if output exists
  --week=03     # Process specific week only
```

## Newsletter Definitions

Each newsletter has a definition file in `newsletters/`:

```markdown
---
name: "Newsletter Name"
category: tech-ai
email_patterns:
  - sender@example.com
author: Optional Author
url: https://optional-url.com
---

Optional description of the newsletter.
```

Categories: tech-ai, politics, culture, books, philosophy, science, personal, misc, uncategorized

## Workflow

1. **Download**: `npx tsx scripts/download-emails.ts` - fetches new emails
2. **Init** (if new senders): `npx tsx scripts/init-newsletters.ts` - creates definitions
3. **Process**: `npx tsx scripts/process-newsletters.ts` - organizes into content/

## Gmail Setup

Requires gmail-skill plugin authentication. Run `/gmail` to check auth status.

---

BEFORE ANYTHING ELSE: run 'bd onboard' and follow the instructions
