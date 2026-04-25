# Interests

This file is the lens the weekly analyst reads at the start of every run. It captures running threads, named entities to surface, open questions, and confirmed-noise topics. The analyst proposes updates here at the end of each weekly pass — review and apply by hand.

## Threads I track

### AI bubble dynamics & operational fragility
The gap between AI capability narrative and AI operational reality. Capacity issues, uptime, model regressions, enterprise customers switching providers. Particular interest when the same story reads as "calibration" in tech press and "bubble indicator" in critical press — that gap is the signal.

### The instruction budget & complex system prompts
Dex Horthy's claim (AIE Miami) that thinking models stop reliably following instructions past ~100–200. Directly relevant to anyone writing CLAUDE.md files or layered prompts. Watch for: empirical confirmation/refutation, mitigation patterns, related findings on context degradation.

### Agents as a new customer class
B2B, B2C, B2A. Per-seat pricing dies when the seat is an agent. `/pricing.md` alongside `/pricing`. Outcome-based pricing. Error messages with `next_actions`. Companies designing for agent customers explicitly.

### Software engineering identity after knowledge scarcity collapse
The argument (Geoffrey Huntley, Dax Raad, others at AIE Miami) that engineering's "specialness" rested on artificial scarcity of knowledge — now collapsing. What is engineering when the gatekeeping function is gone? Watch for: practitioner accounts, not pundit takes.

### Model wars & frontier convergence
Opus 4.7, GPT-5.5, GLM 5.1, Kimi K2, DeepSeek. Long-running autonomous tasks. Capability convergence among top frontier models. Chinese open-weight model momentum. Provider lock-in vs. portfolio strategies.

### Token economics & API pricing opacity
Reasoning tokens dominating bills, lack of cross-provider standardization, true cost of agent runs. The Turing Post token taxonomy is the canonical reference here.

### Palantir's ideological-moat strategy
Whether using explicit alignment (national security, defense) as a competitive filter actually shifts industry behavior — even from labs that publicly stay neutral. Watch the *behavioral* tells (defense pitches, recruiting, procurement), not the public statements.

### AI in education: intention over attention
Neeru Khosla's framing: previous era optimized for engagement; AI era should optimize for surfacing how the learner is thinking. CK-12, Flexi, similar projects.

### Fediverse governance & decentralized social
Connected Places / Laurens Hof's Fediverse Report. Protocol governance, ICE-related verification debates, identity and presence. Adjacent to Bluesky/ATProto if it appears.

## People & projects to surface whenever they appear

- **Will Schenk** (Focus.AI / aie-miami dispatches) — primary practitioner voice
- **Anthropic** — model releases, capacity events, leadership statements
- **Palantir** — anything beyond background mentions
- **Turing Post** — generally high signal; flag dense pieces
- **Every / Context Window** — Klaassen, Casey Newton, vibe checks
- **Ed Zitron** (Where's Your Ed At) — counter-narrative on AI economics
- **SemiAnalysis** — infrastructure, datacenter, supply chain
- **Cloudflare** (Rita Kozlov, etc.) — agent runtimes, isolates
- **HumanLayer / Dex Horthy** — instruction budget, agent control loops
- **OpenCode / Dax Raad** — coding-agent practitioner perspective
- **Andrew Ng / The Batch** — calibration on coding agent acceleration
- **Warp** — agent-tooling product moves
- **Connected Places / Laurens Hof** — fediverse beat

## Open questions

- Does Palantir's ideological-moat strategy actually shift competitor behavior, or do the others stay publicly silent and operationally unchanged?
- Is the instruction budget (~100–200) a real architectural property or an artifact of current training? Will it move with model generations?
- How much of the "Anthropic reliability crisis" narrative is real signal vs. social media amplification of normal SaaS uptime variance?
- When does outcome-based pricing actually work, and when does it just shift risk in ways customers reject?
- What does engineering hiring look like 12 months from now if the knowledge-scarcity premise is gone?

## Confirmed noise (skip in future weeks)

- Generic "5 ways AI will change X" listicles.
- Promotional emails from tools we don't use (treat as `promotional` at classify time).
- npm publish receipts, calendar reminders, billing notices, sign-in codes (treat as `transactional` at classify time).
- "AI hype roundups" with no original analysis — link aggregation without synthesis.

## Newsletters to weight up

(Populated over time by the weekly `interests-update.md` proposals. Senders that consistently produce thread-relevant content go here.)

## Newsletters to weight down or filter

(Populated over time. Senders mostly producing promotional or low-signal content. Candidates for `kind: promotional` override in `newsletters/{slug}.md`.)
