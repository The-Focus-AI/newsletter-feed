# Extract and Process Newsletters

Download newsletters from Gmail, process them into organized content, and generate weekly analysis reports.

## Full Workflow

Run these steps in order:

### 1. Download new emails from Gmail
```bash
npx tsx scripts/download-emails.ts --days=7 --max=200
```

### 2. Initialize definitions for any new senders
```bash
npx tsx scripts/init-newsletters.ts
```

### 2b. (Optional) Use LLM to fix categories
```bash
# Auto-categorize uncategorized newsletters
npx tsx scripts/categorize-newsletter.ts

# Re-categorize all newsletters
npx tsx scripts/categorize-newsletter.ts --all

# Dry run to preview changes
npx tsx scripts/categorize-newsletter.ts --all --dry-run
```

### 3. Process emails into organized content
```bash
npx tsx scripts/process-newsletters.ts
```

### 4. Generate weekly analysis reports
Use the `weekly-newsletter-analyst` agent to analyze the current week's newsletters by category. Generate reports for each category with:
- Overview of major themes
- Key stories with quotes and attribution
- Cross-newsletter patterns
- Source links

Save reports to `week/XX-{category}.md` (e.g., `week/03-tech-ai.md`).

## Directory Structure

- `raw/XX/` - Raw .eml files organized by ISO week number
- `newsletters/` - Newsletter definitions (name, category, email patterns)
- `content/{category}/{newsletter}/` - Processed individual articles with frontmatter
- `week/XX-{category}.md` - Weekly synthesis reports by category

## Options

### download-emails.ts
- `--days=N` - How many days back to fetch (default: 7)
- `--max=N` - Maximum emails to download (default: 200)
- `--label=NAME` - Gmail label to filter by (default: Newsletters)

### process-newsletters.ts
- `--force` - Reprocess even if output exists
- `--week=XX` - Process specific week only

## Categories

Newsletters are organized into: tech-ai, politics, culture, books, philosophy, science, personal, misc, uncategorized

## Sending Weekly Reports

To send a weekly report as a styled email:
```bash
npx tsx ~/.claude/plugins/cache/focus-marketplace/google-skill/0.3.0/scripts/gmail.ts send-md \
  --to="recipient@example.com" \
  --file="./week/03-tech-ai.md" \
  --style="client"  # or "labs"
```
