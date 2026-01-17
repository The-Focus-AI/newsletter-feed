# Newsletter Feed

A system for downloading, organizing, and processing newsletter emails from Gmail, generating weekly analysis reports, and emailing styled summaries.

## Quick Commands

### Sync Newsletters (Full Workflow)
When asked to "sync newsletters" or "update newsletters", run this complete workflow:

0. **Load required skills first**
   Before running any scripts, invoke the `/gmail` skill to ensure the google-skill plugin is loaded and dependencies are installed. This guarantees the Gmail API is available for the download script.

1. **Download new emails**
   ```bash
   npx tsx scripts/download-emails.ts --days=7 --max=200
   ```

2. **Initialize any new newsletter senders**
   ```bash
   npx tsx scripts/init-newsletters.ts
   ```
   - Review output for new senders
   - If new newsletters found, optionally run LLM categorization:
     ```bash
     npx tsx scripts/categorize-newsletter.ts
     ```

3. **Process emails into content**
   ```bash
   npx tsx scripts/process-newsletters.ts
   ```

4. **Generate weekly summaries**
   Launch parallel `weekly-newsletter-analyst` agents for each category with newsletters in the current week. Categories: tech-ai, politics, culture, books, philosophy, science, personal, misc, uncategorized.

   Each agent should:
   - Read all articles in `content/{category}/*/` from the current week
   - Generate a comprehensive analysis report with themes, key stories, quotes, and source links
   - Save to `week/{week_number}-{category}.md` (e.g., `week/03-tech-ai.md`)

### Email a Weekly Report
To email one report:
```bash
npx tsx ~/.claude/plugins/cache/focus-marketplace/google-skill/*/scripts/gmail.ts send-md \
  --to="recipient@example.com" \
  --file="./week/03-tech-ai.md" \
  --style="client"
```

To email all reports for a week, iterate through `week/{week_number}-*.md` files and send each one.

**Style options:**
- `--style=client` - Focus.AI Client brand (warm, professional)
- `--style=labs` - Focus.AI Labs brand (bold, experimental)

The `send-md` command:
- Converts markdown to email-safe HTML with inline styles
- Uses table-based layout (680px max width) for email client compatibility
- Extracts subject from first H1 if `--subject` not provided
- Supports tables, blockquotes, code blocks, lists, and links

## Directory Structure

```
raw/                              # Raw .eml files by ISO week
  03/                             # Week 03 emails
    email-id-1.eml
    email-id-2.eml

newsletters/                      # Newsletter definitions
  newsletter-name.md              # YAML frontmatter with name, category, email_patterns

content/                          # Processed articles by category/newsletter
  tech-ai/
    turing-post/
      2026-01-15-article-title.md
    semianalysis/
      2026-01-15-another-article.md
  politics/
    ...

week/                             # Weekly synthesis reports
  03-tech-ai.md                   # Week 03 tech-ai analysis
  03-politics.md                  # Week 03 politics analysis
  03.md                           # Optional: combined overview
```

## Scripts

### download-emails.ts
Downloads emails from Gmail with the "Newsletters" label.
```bash
npx tsx scripts/download-emails.ts [options]
  --days=7      # Days back to fetch (default: 7)
  --max=200     # Max emails (default: 200)
  --label=X     # Gmail label (default: Newsletters)
```

### init-newsletters.ts
Creates newsletter definition files for new senders found in raw/.
```bash
npx tsx scripts/init-newsletters.ts
```

### categorize-newsletter.ts
Uses Claude API to auto-categorize newsletters based on sample content.
```bash
npx tsx scripts/categorize-newsletter.ts           # Uncategorized only
npx tsx scripts/categorize-newsletter.ts --all     # Re-categorize all
npx tsx scripts/categorize-newsletter.ts --dry-run # Preview changes
```

### process-newsletters.ts
Converts raw emails to organized markdown with frontmatter.
```bash
npx tsx scripts/process-newsletters.ts [options]
  --force       # Reprocess existing files
  --week=03     # Process specific week only
```

## Newsletter Definitions

Each newsletter has a file in `newsletters/`:

```markdown
---
name: "Newsletter Name"
category: tech-ai
email_patterns:
  - sender@example.com
  - other-sender@example.com
author: Optional Author
url: https://optional-url.com
---

Optional description of the newsletter.
```

**Categories:** tech-ai, politics, culture, books, philosophy, science, personal, misc, uncategorized

## Article Frontmatter

Processed articles include:
```yaml
---
id: email-message-id
newsletter: newsletter-slug
newsletter_name: "Newsletter Name"
category: tech-ai
subject: "Article Subject Line"
date: Thu, 15 Jan 2026 18:54:50 +0000
source_url: "https://link-to-view-online"
---
```

## Weekly Report Format

Weekly summaries follow this structure. **CRITICAL: Every newsletter name must be a hyperlink to its source_url.**

```markdown
# Week XX {Category} Newsletter Analysis (Date Range)

## Overview
Brief synthesis linking to sources. Example: "This week, [Turing Post](https://turingpost.com/p/xyz) covered AI partnerships while [SemiAnalysis](https://newsletter.semianalysis.com/p/abc) analyzed infrastructure."

---

## Major Topics and Stories

### 1. Topic Name
**Coverage:** [Newsletter1](source_url1), [Newsletter2](source_url2), [Newsletter3](source_url3)

Context and analysis. Every newsletter reference is a hyperlink.

> "Direct quote from newsletter" — [Author/Newsletter Name](source_url)

---

## Cross-Newsletter Patterns
Themes across sources. All newsletter names hyperlinked.

## Sources
- [Article Title](source_url) — Newsletter Name
- [Article Title](source_url) — Newsletter Name
```

**Linking Rules:**
- Every newsletter name = hyperlink to source_url from article frontmatter
- Every quote attribution = hyperlink to source
- Sources section = all articles with clickable original URLs
- Zero plain-text newsletter names allowed

## Gmail Setup

Requires gmail-skill plugin authentication:
```bash
npx tsx ~/.claude/plugins/cache/focus-marketplace/google-skill/*/scripts/gmail.ts check
```

If not authenticated, run `/gmail` to set up credentials.

---

## Beads Integration

This project uses beads for issue tracking.

**BEFORE ANYTHING ELSE:** run `bd onboard` and follow the instructions

**Session close protocol:**
```bash
git status
git add <files>
bd sync
git commit -m "..."
bd sync
git push
```
