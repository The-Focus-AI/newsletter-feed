# Week 03 Tech & AI Newsletter Analysis (January 12-17, 2026)

## Overview

This week's tech and AI coverage centered on three dominant themes: Anthropic's Claude Code/Cowork ecosystem generating significant enthusiasm among writers and developers, the Grok deepfake scandal escalating to international regulatory responses, and investigative reporting exposing the surveillance-industrial complex around Palantir's ICE tools. [Platformer](https://www.platformer.news/r/5a69b93c?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670) declared Claude Code a potentially transformative moment for non-programmers, while [404 Media](https://www.404media.co/r/beead576?m=d9c8ed7d-8f51-45be-865b-ff329f323410) delivered crucial investigative journalism on surveillance technology. [Tom Warren's Notepad](https://link.theverge.com/view/682e81e54940259f8504291dpxpkd.e81/07330229) reported on Microsoft's pivot from traditional knowledge resources to AI-powered learning, and [Semafor Technology](https://semafor.com/s/7USHsf6Yja?email=wschenk@gmail.com) broke news of growing tension between Anthropic and the Pentagon over AI military applications.

---

## Major Topics and Stories

### 1. Claude Code and Cowork: The Rise of AI-Powered Work Tools

**Coverage:** [Platformer](https://www.platformer.news/r/5a69b93c?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670), [Simon Willison's Newsletter](https://simonw.substack.com/p/first-impressions-of-claude-cowork), [Why Try AI](https://www.whytryai.com/p/claude-code-beginner-guide), [AlphaSignal](content/tech-ai/alphasignal/2026-01-13-anthropic-cowork-claude-agents-for-file-workflows-64k-likes.md)

Anthropic's Claude ecosystem dominated developer conversations this week, with the launch of Cowork positioning Claude Code capabilities for non-developers. Casey Newton at [Platformer](https://www.platformer.news/r/5a69b93c?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670) built multiple tools including a searchable database of his entire archive and an automated daily briefing system, declaring it a watershed moment.

> "ChatGPT was the moment when people woke up to the power of LLMs to generate text. The Claude Code moment, while orders of magnitude smaller, strikes me as potentially just as significant. It's waking people up to LLMs' power to generate tools." - [Platformer](https://www.platformer.news/r/5a69b93c?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670)

[Simon Willison's Newsletter](https://simonw.substack.com/p/first-impressions-of-claude-cowork) provided technical analysis of Cowork's architecture, noting it uses Apple's Virtualization Framework with a custom Linux filesystem for sandboxing. Willison identified the key insight: "I've been saying for a while now that Claude Code is a 'general agent' disguised as a developer tool. It can help you with any computer task that can be achieved by executing code or running terminal commands... What it really needs is a UI that doesn't involve the terminal and a name that doesn't scare away non-developers."

[Why Try AI](https://www.whytryai.com/p/claude-code-beginner-guide) offered a beginner's guide demonstrating practical use cases like automated screenshot organization and web research, emphasizing that "Claude Code is 'Claude that can take action'" rather than just another chatbot.

---

### 2. The Grok Deepfake Crisis and Global Regulatory Response

**Coverage:** [Platformer](https://www.platformer.news/r/103cfadc?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670), [Semafor Technology](https://semafor.com/s/fW23Z3RTCJ?email=wschenk@gmail.com)

X's Grok AI generated widespread international backlash after enabling mass creation of non-consensual sexual imagery. Indonesia and Malaysia enacted outright bans, while the UK, France, Australia, and India launched investigations. The US Senate unanimously passed the Defiance Act allowing victims to sue creators of AI deepfakes.

> "It is bad enough that the safeguards in Grok's underlying model did not stop these images from being generated. That they were attached to the accounts of the victims, most of whom were alerted to each fresh violation via a push notification, represents a new low in the history of content moderation for a major platform." - [Platformer](https://www.platformer.news/r/103cfadc?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670)

Victims included Ashley St. Clair, mother of one of Musk's children, who found users creating sexualized images of her based on a photo taken when she was 14, and has since filed suit against xAI. Musk's response vacillated between dismissiveness and defiance, posting an AI-generated image of UK Prime Minister Keir Starmer in a bikini with the caption "They just want to suppress free speech."

[Platformer](https://www.platformer.news/r/5a69b93c?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670) later reported that X finally "implemented technological measures" to restrict the feature, but researchers found nudifying images can still be generated on the Grok app. Notably, despite the scandal, the Pentagon announced it would integrate Grok into military systems.

---

### 3. Palantir's ICE Surveillance Infrastructure Exposed

**Coverage:** [404 Media](https://www.404media.co/r/beead576?m=d9c8ed7d-8f51-45be-865b-ff329f323410), [404 Media](https://www.404media.co/r/0f53e8ae?m=d9c8ed7d-8f51-45be-865b-ff329f323410)

[404 Media](https://www.404media.co/r/beead576?m=d9c8ed7d-8f51-45be-865b-ff329f323410) obtained internal documents revealing ELITE (Enhanced Leads Identification & Targeting for Enforcement), Palantir's map-based targeting tool for ICE that populates deportation targets with "confidence scores" on their current addresses. The tool draws data from HHS, USCIS, and commercial data broker Thomson Reuters.

> "These records give us behind-the-scenes insight into the kind of mass surveillance machine ICE is building with help from powerful tech companies like Palantir. When combined with what we know from ICE testimony and other public information, it gives us a blueprint into how ICE is going into communities and identifying people for arrest in real-time." - Laura Rivera, Just Futures Law, quoted in [404 Media](https://www.404media.co/r/beead576?m=d9c8ed7d-8f51-45be-865b-ff329f323410)

Separately, [404 Media](https://www.404media.co/r/0f53e8ae?m=d9c8ed7d-8f51-45be-865b-ff329f323410) revealed that police departments using Flock surveillance cameras have inadvertently leaked details on millions of surveillance targets through improperly redacted public records. A new website HaveIBeenFlocked.com now allows anyone to search if their license plate has been surveilled. Flock responded by limiting transparency features rather than fixing the underlying issues, and threatened the site creator through bogus intellectual property claims.

---

### 4. Microsoft's AI Pivot: Library Closures and Data Center Pushback

**Coverage:** [Tom Warren's Notepad](https://link.theverge.com/view/682e81e54940259f8504291dpxpkd.e81/07330229), [Semafor Technology](https://semafor.com/s/fW23Z3RTCJ?email=wschenk@gmail.com)

[Tom Warren's Notepad](https://link.theverge.com/view/682e81e54940259f8504291dpxpkd.e81/07330229) broke news that Microsoft is closing its physical employee library and cutting subscriptions to business publications like The Information and Strategic News Service as part of a shift to "AI-powered learning experience through the Skilling Hub."

> "Technology's future is shaped by flows of power, money, innovation, and people - none of which are predictable based on LLMs' probabilistic regurgitation of old information. We look forward to welcoming Microsoft back into the SNS community whenever they decide they would like to return." - Berit Anderson, COO of Strategic News Service, quoted in [Tom Warren's Notepad](https://link.theverge.com/view/682e81e54940259f8504291dpxpkd.e81/07330229)

[Tom Warren's Notepad](https://link.theverge.com/view/682e81e54940259f8504291dpxpkd.e81/07330229) also reported that a British police force blamed Microsoft Copilot for an intelligence mistake that led to Israeli football fans being banned from a match based on a nonexistent game between West Ham and Maccabi Tel Aviv.

Microsoft simultaneously announced a "Community-First AI Infrastructure" initiative promising to cover energy costs and replenish water, responding to mounting opposition against data center projects. [Semafor Technology](https://semafor.com/s/fW23Z3RTCJ?email=wschenk@gmail.com) noted Trump urged tech companies to "pay their own way."

---

### 5. Anthropic vs. Pentagon: AI Safety in Military Applications

**Coverage:** [Semafor Technology](https://semafor.com/s/7USHsf6Yja?email=wschenk@gmail.com), [Semafor Technology](https://semafor.com/s/fW23Z3RTCJ?email=wschenk@gmail.com)

[Semafor Technology](https://semafor.com/s/7USHsf6Yja?email=wschenk@gmail.com) reported exclusively on growing tensions between Anthropic and the Trump administration over military AI applications. Defense Secretary Pete Hegseth's statement that Pentagon AI "will not be woke" specifically targeted Anthropic, which wants to ensure its models aren't pushed beyond capabilities in potentially lethal military actions.

> "If companies don't want to sell their technology to the military, nobody is forcing them. But if they do sell to the military, they don't get to decide exactly how it is allowed to be used." - US officials' view, per [Semafor Technology](https://semafor.com/s/7USHsf6Yja?email=wschenk@gmail.com)

A Defense Department official stated the military would only deploy AI models "free from ideological constraints that limit lawful military applications." Anthropic declined to comment.

---

### 6. AI Healthcare Push from Major Labs

**Coverage:** [Turing Post](content/tech-ai/turing-post/2026-01-12-fod-135-what-it-means-when-ai-labs-step-into-healthcare.md), [AlphaSignal](content/tech-ai/alphasignal/2026-01-13-anthropic-cowork-claude-agents-for-file-workflows-64k-likes.md)

Both OpenAI and Anthropic announced healthcare initiatives within days of each other. OpenAI acquired Torch Health for persistent medical memory in ChatGPT, while Anthropic launched Claude Healthcare with HIPAA connectors.

> "Healthcare is therefore better understood as a systems test rather than a market opportunity. This is a hugely important step in AI adoption." - [Turing Post](content/tech-ai/turing-post/2026-01-12-fod-135-what-it-means-when-ai-labs-step-into-healthcare.md)

[Turing Post](content/tech-ai/turing-post/2026-01-12-fod-135-what-it-means-when-ai-labs-step-into-healthcare.md) noted the key difference: OpenAI extends its general assistant with healthcare context, while Anthropic focuses on embedding Claude within existing institutional workflows with "predictable behavior, limited scope, and alignment."

---

### 7. Vision Pro Sports Broadcasting Disappointment

**Coverage:** [Stratechery](https://stratechery.com/2026/apple-you-still-dont-understand-the-vision-pro/?access_token=eyJhbGciOiJSUzI1NiIsImtpZCI6InN0cmF0ZWNoZXJ5LnBhc3Nwb3J0Lm9ubGluZSIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJzdHJhdGVjaGVyeS5wYXNzcG9ydC5vbmxpbmUiLCJhenAiOiJIS0xjUzREd1Nod1AyWURLYmZQV00xIiwiZW50Ijp7InVyaSI6WyJodHRwczovL3N0cmF0ZWNoZXJ5LmNvbS8yMDI2L2FwcGxlLXlvdS1zdGlsbC1kb250LXVuZGVyc3RhbmQtdGhlLXZpc2lvbi1wcm8vIl19LCJleHAiOjE3NzA4MDc4MjEsImlhdCI6MTc2ODIxNTgyMSwiaXNzIjoiaHR0cHM6Ly9hcHAucGFzc3BvcnQub25saW5lL29hdXRoIiwic2NvcGUiOiJmZWVkOnJlYWQgYXJ0aWNsZTpyZWFkIGFzc2V0OnJlYWQgY2F0ZWdvcnk6cmVhZCBlbnRpdGxlbWVudHMiLCJzdWIiOiJlYzJhMTRiZi1mMGJhLTRlY2EtOTQwMi0wYjE2OTRhZWQ3MDEiLCJ1c2UiOiJhY2Nlc3MifQ.PHJv4IL9iZZxgVwf4nMcHB7KWD0pZtM7fisI8XbMdsrr8r13eSuXZaluzWALBYRUxTIyN7mLqxPCU9M4DNZ1hWt1sWs8GasSd9c4G4hWmSqgeC3oWqb_PBrDv7T0F2DkQn5bqtAZIDbhPNuo92j5f-QVJjMzEtIBnkaR6nXMY9jsm4ZNqVChLKmFwn7rKikJGolG45LmrQDF4Qh-PQtCaUvKkCbrBWXl11gQkpk8GdQijJ5mBCVT6Jvh7oZGbiBqDbV6v18KbismwVjpHIcoQxBZ_-d5b1RmSlu-HHDOwXGXg47WlEQAQMVrpHsDlq5UiD8hfACO31gAd8XVglsJDw)

Ben Thompson delivered a scathing open letter to Apple about the first live NBA broadcast on Vision Pro, arguing the company fundamentally misunderstands its own product by applying TV production techniques to immersive video.

> "I was, given my interest in virtual and augmented reality, already primed to have a high degree of interest in the Vision Pro... And yet, complain I shall: you have - like almost every video you have produced for the Vision Pro - once again shown that you fundamentally do not understand the device you are selling." - [Stratechery](https://stratechery.com/2026/apple-you-still-dont-understand-the-vision-pro/?access_token=eyJhbGciOiJSUzI1NiIsImtpZCI6InN0cmF0ZWNoZXJ5LnBhc3Nwb3J0Lm9ubGluZSIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJzdHJhdGVjaGVyeS5wYXNzcG9ydC5vbmxpbmUiLCJhenAiOiJIS0xjUzREd1Nod1AyWURLYmZQV00xIiwiZW50Ijp7InVyaSI6WyJodHRwczovL3N0cmF0ZWNoZXJ5LmNvbS8yMDI2L2FwcGxlLXlvdS1zdGlsbC1kb250LXVuZGVyc3RhbmQtdGhlLXZpc2lvbi1wcm8vIl19LCJleHAiOjE3NzA4MDc4MjEsImlhdCI6MTc2ODIxNTgyMSwiaXNzIjoiaHR0cHM6Ly9hcHAucGFzc3BvcnQub25saW5lL29hdXRoIiwic2NvcGUiOiJmZWVkOnJlYWQgYXJ0aWNsZTpyZWFkIGFzc2V0OnJlYWQgY2F0ZWdvcnk6cmVhZCBlbnRpdGxlbWVudHMiLCJzdWIiOiJlYzJhMTRiZi1mMGJhLTRlY2EtOTQwMi0wYjE2OTRhZWQ3MDEiLCJ1c2UiOiJhY2Nlc3MifQ.PHJv4IL9iZZxgVwf4nMcHB7KWD0pZtM7fisI8XbMdsrr8r13eSuXZaluzWALBYRUxTIyN7mLqxPCU9M4DNZ1hWt1sWs8GasSd9c4G4hWmSqgeC3oWqb_PBrDv7T0F2DkQn5bqtAZIDbhPNuo92j5f-QVJjMzEtIBnkaR6nXMY9jsm4ZNqVChLKmFwn7rKikJGolG45LmrQDF4Qh-PQtCaUvKkCbrBWXl11gQkpk8GdQijJ5mBCVT6Jvh7oZGbiBqDbV6v18KbismwVjpHIcoQxBZ_-d5b1RmSlu-HHDOwXGXg47WlEQAQMVrpHsDlq5UiD8hfACO31gAd8XVglsJDw)

Thompson argues Vision Pro needs single-camera immersive experiences, not multi-camera productions with dedicated announcers - the sense of presence is destroyed by constant camera switches.

---

### 8. AI Measurement and Evaluation Challenges

**Coverage:** [Artificial Intelligence Made Simple](https://www.artificialintelligencemadesimple.com/p/ai-is-hitting-a-measurement-wall), [Semafor Technology](https://semafor.com/s/fW23Z3RTCJ?email=wschenk@gmail.com)

[Artificial Intelligence Made Simple](https://www.artificialintelligencemadesimple.com/p/ai-is-hitting-a-measurement-wall) published a provocative analysis arguing that AI is hitting a "measurement wall" rather than a scaling wall. Drawing on biology's sub-Landauer computation, the piece argues that benchmarks systematically destroy information about capabilities.

> "Token generation is measurement collapse. Everything the model 'understood' about competing interpretations and uncertainty gets crushed into one discrete symbol. The text output is projection of intelligence, not intelligence itself. We evaluate what survives that projection." - [Artificial Intelligence Made Simple](https://www.artificialintelligencemadesimple.com/p/ai-is-hitting-a-measurement-wall)

This framework explains why heavy quantization works, why capabilities "emerge" suddenly, and why polysemantic neurons exist - capabilities may exist below detection thresholds until they cross them.

[Semafor Technology](https://semafor.com/s/fW23Z3RTCJ?email=wschenk@gmail.com) covered a Workday study showing that nearly 40% of AI time savings is spent on rework - rewriting, fact-checking, and correcting errors.

---

### 9. Data Center Water Usage Debate

**Coverage:** [SemiAnalysis](https://newsletter.semianalysis.com/p/from-tokens-to-burgers-a-water-footprint)

[SemiAnalysis](https://newsletter.semianalysis.com/p/from-tokens-to-burgers-a-water-footprint) offered provocative context on datacenter water usage, calculating that xAI's Colossus 2 datacenter consumes roughly the same water as 2.5 In-N-Out burger joints.

> "One of the largest datacenters in the world only consumes as much water as 2.5 In-N-Out's... The only rational argument is that people clamoring for slowing down datacenters because of water consumption are looking at the wrong problem." - [SemiAnalysis](https://newsletter.semianalysis.com/p/from-tokens-to-burgers-a-water-footprint)

They calculated that a single burger's water footprint equals using Grok for 668 years, 30 times daily.

---

### 10. Enterprise AI Adoption: The Brex Case Study

**Coverage:** [Latent.Space](https://www.latent.space/p/brex)

[Latent.Space](https://www.latent.space/p/brex) interviewed Brex CTO James Reggio about the company's aggressive AI transformation, which helped reverse a struggling business. Key strategies included:

- Internal AI fluency levels from "User" to "Native" tied to performance reviews
- Interview process requiring agentic coding tools to complete
- "Quitters Welcome" recruiting initiative for founder-minded employees
- Multi-agent architecture with specialized subagents behind an orchestrator

> "The top Cursor user is actually an engineering manager." - James Reggio, Brex CTO, quoted in [Latent.Space](https://www.latent.space/p/brex)

---

### 11. Semiconductor Advances at IEDM 2025

**Coverage:** [SemiAnalysis](https://newsletter.semianalysis.com/p/interconnects-beyond-copper-1000)

[SemiAnalysis](https://newsletter.semianalysis.com/p/interconnects-beyond-copper-1000) provided extensive coverage of IEDM 2025, highlighting TSMC's CFET (Complementary FET) progress with functional ring oscillators and SRAM cells at sub-48nm gate pitch. The technology promises 1.5-2x transistor density improvement and could enter production in the 2030s.

Notable developments include SK Hynix's 5 bits-per-cell NAND demonstration, Samsung's molybdenum wordline integration showing 40% contact resistance reduction, and IMEC's roadmap for ruthenium interconnects as copper reaches its limits.

---

## Cross-Newsletter Patterns

**AI Tool Democratization**: Multiple newsletters ([Platformer](https://www.platformer.news/r/5a69b93c?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670), [Why Try AI](https://www.whytryai.com/p/claude-code-beginner-guide), [Simon Willison's Newsletter](https://simonw.substack.com/p/first-impressions-of-claude-cowork)) emphasized that Claude Code and Cowork represent a shift from AI as chatbot to AI as tool-builder, enabling non-programmers to create functional software.

**Surveillance Expansion vs. Privacy**: The [404 Media](https://www.404media.co/r/beead576?m=d9c8ed7d-8f51-45be-865b-ff329f323410) exposes on Palantir's ELITE and Flock's data leaks contrasted sharply with tech companies' stated privacy commitments, revealing systematic gaps between rhetoric and reality.

**Infrastructure Tension**: Both [SemiAnalysis](https://newsletter.semianalysis.com/p/from-tokens-to-burgers-a-water-footprint) and [Semafor Technology](https://semafor.com/s/fW23Z3RTCJ?email=wschenk@gmail.com) covered the growing backlash against data center expansion, with [Tom Warren's Notepad](https://link.theverge.com/view/682e81e54940259f8504291dpxpkd.e81/07330229) noting Microsoft's shift from human knowledge resources (library closures) to AI infrastructure.

**Military-AI Friction**: [Semafor Technology](https://semafor.com/s/7USHsf6Yja?email=wschenk@gmail.com) reported tension between Anthropic and the Pentagon over AI usage limits, while simultaneously the Defense Department announced Grok integration - highlighting the divergent approaches AI labs take toward military applications.

---

## Surprising or Contrarian Takes

- [SemiAnalysis](https://newsletter.semianalysis.com/p/from-tokens-to-burgers-a-water-footprint) arguing datacenter water concerns are "looking at the wrong problem" with the burger comparison
- [Semafor Technology](https://semafor.com/s/fW23Z3RTCJ?email=wschenk@gmail.com) defending Google's concentration of power as worthwhile for innovation
- [Artificial Intelligence Made Simple](https://www.artificialintelligencemadesimple.com/p/ai-is-hitting-a-measurement-wall) suggesting AI benchmarks systematically destroy information about capabilities
- [Stratechery](https://stratechery.com/2026/apple-you-still-dont-understand-the-vision-pro/?access_token=eyJhbGciOiJSUzI1NiIsImtpZCI6InN0cmF0ZWNoZXJ5LnBhc3Nwb3J0Lm9ubGluZSIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJzdHJhdGVjaGVyeS5wYXNzcG9ydC5vbmxpbmUiLCJhenAiOiJIS0xjUzREd1Nod1AyWURLYmZQV00xIiwiZW50Ijp7InVyaSI6WyJodHRwczovL3N0cmF0ZWNoZXJ5LmNvbS8yMDI2L2FwcGxlLXlvdS1zdGlsbC1kb250LXVuZGVyc3RhbmQtdGhlLXZpc2lvbi1wcm8vIl19LCJleHAiOjE3NzA4MDc4MjEsImlhdCI6MTc2ODIxNTgyMSwiaXNzIjoiaHR0cHM6Ly9hcHAucGFzc3BvcnQub25saW5lL29hdXRoIiwic2NvcGUiOiJmZWVkOnJlYWQgYXJ0aWNsZTpyZWFkIGFzc2V0OnJlYWQgY2F0ZWdvcnk6cmVhZCBlbnRpdGxlbWVudHMiLCJzdWIiOiJlYzJhMTRiZi1mMGJhLTRlY2EtOTQwMi0wYjE2OTRhZWQ3MDEiLCJ1c2UiOiJhY2Nlc3MifQ.PHJv4IL9iZZxgVwf4nMcHB7KWD0pZtM7fisI8XbMdsrr8r13eSuXZaluzWALBYRUxTIyN7mLqxPCU9M4DNZ1hWt1sWs8GasSd9c4G4hWmSqgeC3oWqb_PBrDv7T0F2DkQn5bqtAZIDbhPNuo92j5f-QVJjMzEtIBnkaR6nXMY9jsm4ZNqVChLKmFwn7rKikJGolG45LmrQDF4Qh-PQtCaUvKkCbrBWXl11gQkpk8GdQijJ5mBCVT6Jvh7oZGbiBqDbV6v18KbismwVjpHIcoQxBZ_-d5b1RmSlu-HHDOwXGXg47WlEQAQMVrpHsDlq5UiD8hfACO31gAd8XVglsJDw) arguing Vision Pro needs less production, not more

---

## Sources

- [Apple: You (Still) Don't Understand the Vision Pro](https://stratechery.com/2026/apple-you-still-dont-understand-the-vision-pro/?access_token=eyJhbGciOiJSUzI1NiIsImtpZCI6InN0cmF0ZWNoZXJ5LnBhc3Nwb3J0Lm9ubGluZSIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJzdHJhdGVjaGVyeS5wYXNzcG9ydC5vbmxpbmUiLCJhenAiOiJIS0xjUzREd1Nod1AyWURLYmZQV00xIiwiZW50Ijp7InVyaSI6WyJodHRwczovL3N0cmF0ZWNoZXJ5LmNvbS8yMDI2L2FwcGxlLXlvdS1zdGlsbC1kb250LXVuZGVyc3RhbmQtdGhlLXZpc2lvbi1wcm8vIl19LCJleHAiOjE3NzA4MDc4MjEsImlhdCI6MTc2ODIxNTgyMSwiaXNzIjoiaHR0cHM6Ly9hcHAucGFzc3BvcnQub25saW5lL29hdXRoIiwic2NvcGUiOiJmZWVkOnJlYWQgYXJ0aWNsZTpyZWFkIGFzc2V0OnJlYWQgY2F0ZWdvcnk6cmVhZCBlbnRpdGxlbWVudHMiLCJzdWIiOiJlYzJhMTRiZi1mMGJhLTRlY2EtOTQwMi0wYjE2OTRhZWQ3MDEiLCJ1c2UiOiJhY2Nlc3MifQ.PHJv4IL9iZZxgVwf4nMcHB7KWD0pZtM7fisI8XbMdsrr8r13eSuXZaluzWALBYRUxTIyN7mLqxPCU9M4DNZ1hWt1sWs8GasSd9c4G4hWmSqgeC3oWqb_PBrDv7T0F2DkQn5bqtAZIDbhPNuo92j5f-QVJjMzEtIBnkaR6nXMY9jsm4ZNqVChLKmFwn7rKikJGolG45LmrQDF4Qh-PQtCaUvKkCbrBWXl11gQkpk8GdQijJ5mBCVT6Jvh7oZGbiBqDbV6v18KbismwVjpHIcoQxBZ_-d5b1RmSlu-HHDOwXGXg47WlEQAQMVrpHsDlq5UiD8hfACO31gAd8XVglsJDw) - Stratechery
- [Grok gets blocked](https://www.platformer.news/r/103cfadc?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670) - Platformer
- [Claude Code for writers](https://www.platformer.news/r/5a69b93c?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670) - Platformer
- [First impressions of Claude Cowork](https://simonw.substack.com/p/first-impressions-of-claude-cowork) - Simon Willison's Newsletter
- [Interconnects Beyond Copper, CFET, SK Hynix NAND](https://newsletter.semianalysis.com/p/interconnects-beyond-copper-1000) - SemiAnalysis
- [From Tokens to Burgers: A Water Footprint Face-Off](https://newsletter.semianalysis.com/p/from-tokens-to-burgers-a-water-footprint) - SemiAnalysis
- [FOD#135: What It Means When AI Labs Step Into Healthcare](content/tech-ai/turing-post/2026-01-12-fod-135-what-it-means-when-ai-labs-step-into-healthcare.md) - Turing Post
- [Brex's AI Hail Mary](https://www.latent.space/p/brex) - Latent.Space
- [Police Unmask Millions of Surveillance Targets](https://www.404media.co/r/0f53e8ae?m=d9c8ed7d-8f51-45be-865b-ff329f323410) - 404 Media
- [ELITE: The Palantir App ICE Uses to Find Neighborhoods to Raid](https://www.404media.co/r/beead576?m=d9c8ed7d-8f51-45be-865b-ff329f323410) - 404 Media
- [AI is Hitting a Measurement Wall](https://www.artificialintelligencemadesimple.com/p/ai-is-hitting-a-measurement-wall) - Artificial Intelligence Made Simple
- [Claude Code for the Rest of Us](https://www.whytryai.com/p/claude-code-beginner-guide) - Why Try AI
- [Too big not to fail](https://semafor.com/s/fW23Z3RTCJ?email=wschenk@gmail.com) - Semafor Technology
- [The future of war](https://semafor.com/s/7USHsf6Yja?email=wschenk@gmail.com) - Semafor Technology
- [Microsoft is closing its employee library](https://link.theverge.com/view/682e81e54940259f8504291dpxpkd.e81/07330229) - Tom Warren's Notepad
- [Anthropic Cowork announcement](content/tech-ai/alphasignal/2026-01-13-anthropic-cowork-claude-agents-for-file-workflows-64k-likes.md) - AlphaSignal
