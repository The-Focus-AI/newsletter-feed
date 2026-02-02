# Week 05 Business Newsletter Analysis (January 27 - February 2, 2026)

## Overview

Week 05 marked a watershed moment in AI adoption for business and software development. The explosion of autonomous AI agents like Clawdbot (rebranded to Moltbot) dominated conversations across multiple newsletters, with [Jay Clouse](https://creatorscience.com/arbitrage), [Lenny's Newsletter](https://www.lennysnewsletter.com/p/today-on-how-i-ai-i-gave-clawdbot), and [The Pragmatic Engineer](https://newsletter.pragmaticengineer.com/p/the-creator-of-clawd-i-ship-code) all covering the phenomenon from different angles. Meanwhile, [Tomas Pueyo](https://unchartedterritories.tomaspueyo.com/p/ai-algorithms) provided technical depth on AI's algorithmic improvements and their implications for AGI timelines, while [Marc Andreessen](https://substack.com/app-link/post?publication_id=10845&post_id=185338497&utm_source=podcast-email&play_audio=true&r=1iefy&utm_campaign=email-play-on-substack&token=eyJ1c2VyX2lkIjoyNTM4MTQyLCJwb3N0X2lkIjoxODUzMzg0OTcsImlhdCI6MTc2OTY5Mzg5OCwiZXhwIjoxNzcyMjg1ODk4LCJpc3MiOiJwdWItMTA4NDUiLCJzdWIiOiJwb3N0LXJlYWN0aW9uIn0.ydSMWb4i0XAdaEP9L4mrp1e1UWc6B1N03hc6VDl2B9Y&utm_source=substack&utm_medium=email&utm_content=play_card_preview_link#play) offered a bullish long-term vision. A philosophical counterpoint came from [Tomas Pueyo](https://unchartedterritories.tomaspueyo.com/p/not-sustainable-abundant), who argued we should shift from "sustainable" to "abundant" thinking about resources and technology.

---

## Major Topics and Stories

### 1. The Clawdbot/Moltbot Revolution: Autonomous AI Agents Go Mainstream

**Coverage:** [Jay Clouse](https://creatorscience.com/arbitrage), [Lenny's Newsletter](https://www.lennysnewsletter.com/p/today-on-how-i-ai-i-gave-clawdbot), [The Pragmatic Engineer](https://newsletter.pragmaticengineer.com/p/the-creator-of-clawd-i-ship-code), [The Pragmatic Engineer](https://newsletter.pragmaticengineer.com/p/ai-first-makeover-craft)

This week witnessed explosive growth in interest around Clawdbot (hastily rebranded to Moltbot after an Anthropic trademark threat), an open-source AI agent that acts as a 24/7 virtual assistant. The tool dominated tech discourse, becoming the fastest-growing GitHub repository ever and generating more Google searches than established tools like Claude Code or Codex.

[Jay Clouse](https://creatorscience.com/arbitrage) documented his 48-hour deep dive into setting up Moltbot, emphasizing security considerations that many users were ignoring. He set up his agent on a separate virtual private server rather than his personal machine, treating it like hiring a new assistant: "Would you give a brand-new human assistant—someone you just hired with no background check—full access to your personal computer?" His use cases ranged from morning briefings with Oura Ring scores to automated podcast guest research and workout logging.

[Lenny's Newsletter](https://www.lennysnewsletter.com/p/today-on-how-i-ai-i-gave-clawdbot) featured product manager Claire Hughes Johnson's experience, highlighting critical security lessons and usability challenges. She found that Clawdbot defaulted to impersonation rather than identifying itself as an assistant, and struggled with basic time concepts like setting recurring calendar events. The latency problem—where the agent goes silent while working—created a frustrating user experience compared to real-time feedback from tools like ChatGPT.

> "Security should be your top concern. Claire created a separate user account on her laptop for Clawdbot, gave it its own email address rather than access to hers, and created a limited vault in 1Password." — [Lenny's Newsletter](https://www.lennysnewsletter.com/p/today-on-how-i-ai-i-gave-clawdbot)

The creator's perspective came from [The Pragmatic Engineer](https://newsletter.pragmaticengineer.com/p/the-creator-of-clawd-i-ship-code), which interviewed Peter Steinberger, who made over 6,600 commits in January alone. Steinberger's radical approach: "I ship code I don't read." He runs 5-10 agents simultaneously, views pull requests as "prompt requests," and has eliminated traditional code reviews in favor of architecture discussions. His workflow emphasizes planning extensively with agents before execution, then letting them run autonomously.

> "Managing a dev team teaches you to let go of perfectionism: a skill important when working with AI agents." — Peter Steinberger, [The Pragmatic Engineer](https://newsletter.pragmaticengineer.com/p/the-creator-of-clawd-i-ship-code)

### 2. Real-World AI Transformation: Craft Docs Goes AI-First

**Coverage:** [The Pragmatic Engineer](https://newsletter.pragmaticengineer.com/p/ai-first-makeover-craft)

[The Pragmatic Engineer](https://newsletter.pragmaticengineer.com/p/ai-first-makeover-craft) provided an extraordinary case study of Craft Docs, a mature startup with 1 million active users, completely transforming its development practices in January 2026. Founder Balint Orosz built "Craft Agents"—a visual interface for Claude Code—over the Christmas holidays, and mandated its use across the entire company.

The results were dramatic. Customer support became the heaviest user of the tool, processing tickets that previously took 20-30 minutes in just 2-3 minutes. Marketing began building websites without engineering support. HR automated Bamboo HR integrations independently. Non-technical staff built custom workflows, created new themes, and "remixed" the tool to suit their needs.

For engineers, the workflow changed radically:
- Fast iteration without code reviews
- Rejecting most external pull requests but "weaving in" their ideas as prompts
- One-person responsibility squads handling migrations that previously took months
- Some engineers struggled with the pace of change, with a few quitting

> "A massive win is we have to escalate so much less often than before! Tickets which used to take 20-30 minutes to process are down to 2-3 minutes." — Peter Sajevics, CX Lead at Craft Docs, [The Pragmatic Engineer](https://newsletter.pragmaticengineer.com/p/ai-first-makeover-craft)

### 3. The Economics and Technology of AI Progress

**Coverage:** [Tomas Pueyo](https://unchartedterritories.tomaspueyo.com/p/ai-algorithms), [Marc Andreessen](https://substack.com/app-link/post?publication_id=10845&post_id=185338497&utm_source=podcast-email&play_audio=true&r=1iefy&utm_campaign=email-play-on-substack&token=eyJ1c2VyX2lkIjoyNTM4MTQyLCJwb3N0X2lkIjoxODUzMzg0OTcsImlhdCI6MTc2OTY5Mzg5OCwiZXhwIjoxNzcyMjg1ODk4LCJpc3MiOiJwdWItMTA4NDUiLCJzdWIiOiJwb3N0LXJlYWN0aW9uIn0.ydSMWb4i0XAdaEP9L4mrp1e1UWc6B1N03hc6VDl2B9Y&utm_source=substack&utm_medium=email&utm_content=play_card_preview_link#play)

[Tomas Pueyo](https://unchartedterritories.tomaspueyo.com/p/ai-algorithms) delivered a comprehensive technical analysis titled "The $100M Worker," explaining why tech companies are offering nine-figure compensation packages. His analysis breaks down AI improvement into three components:

- **Hardware improvements**: 2.5x per year, leading to 100x better by 2030
- **Investment scaling**: 2x more spending annually, totaling 32x more by 2030
- **Algorithmic optimization**: 0.4-0.5 orders of magnitude improvement per year, translating to ~300x by 2030

Combined, these factors suggest AI will be 3,000x better by 2030 through compute alone, with algorithmic improvements adding another massive multiplier. Pueyo detailed major "unhobblings" like chain-of-thought reasoning, mixture of experts, reinforcement learning, and distillation that have each provided 3-100x effective compute improvements.

> "Tech companies are trying to attract workers with over $100M compensation packages. How can this make sense? It does." — [Tomas Pueyo](https://unchartedterritories.tomaspueyo.com/p/ai-algorithms)

[Marc Andreessen](https://substack.com/app-link/post?publication_id=10845&post_id=185338497&utm_source=podcast-email&play_audio=true&r=1iefy&utm_campaign=email-play-on-substack&token=eyJ1c2VyX2lkIjoyNTM4MTQyLCJwb3N0X2lkIjoxODUzMzg0OTcsImlhdCI6MTc2OTY5Mzg5OCwiZXhwIjoxNzcyMjg1ODk4LCJpc3MiOiJwdWItMTA4NDUiLCJzdWIiOiJwb3N0LXJlYWN0aW9uIn0.ydSMWb4i0XAdaEP9L4mrp1e1UWc6B1N03hc6VDl2B9Y&utm_source=substack&utm_medium=email&utm_content=play_card_preview_link#play) provided the bullish investor perspective on Lenny's podcast, arguing "the real AI boom hasn't even started yet." He emphasized AI's arrival as perfectly timed to counter demographic collapse and declining productivity, dismissed panic about job displacement as "totally off base," and advocated for continuing to learn coding despite AI capabilities. His focus on building "E-shaped" careers that combine multiple skills with AI as a force multiplier resonated with the week's practical demonstrations of AI augmentation.

### 4. DeepSeek's First Anniversary and Open Source AI

**Coverage:** [Kevin Xu @ Interconnected](https://interconnected.blog/r/e435cd6c?m=13ee6092-18b4-4710-96ca-c96c6fd588dd)

[Kevin Xu](https://interconnected.blog/r/e435cd6c?m=13ee6092-18b4-4710-96ca-c96c6fd588dd) marked the one-year anniversary of the "DeepSeek Moment" from his snowbound Nashville location, compiling previous essays on DeepSeek's impact. He identified three enduring themes:

- Pushing open source as default in frontier AI development
- Using software specs to guide hardware roadmap (especially in China)
- Pursuing AGI with no business model as an enduring advantage

The reflection came as China continued its AI momentum, with references to Qwen 3, Kimi 2.5, and Claude Code developments demonstrating the ongoing US-China AI competition playing out primarily through open versus closed models.

### 5. From Sustainability to Abundance: A Philosophical Shift

**Coverage:** [Tomas Pueyo](https://unchartedterritories.tomaspueyo.com/p/not-sustainable-abundant)

[Tomas Pueyo](https://unchartedterritories.tomaspueyo.com/p/not-sustainable-abundant) made a provocative philosophical argument for abandoning "sustainability" thinking in favor of "abundance." He argued that Earth isn't a delicate, finite ecosystem to preserve, but a complex mechanism to optimize through intelligence and engineering.

His key points:
- Earth has undergone far more dramatic changes naturally than anything humans have caused
- Intelligence allows us to engineer solutions rather than merely preserve
- "Sustainable" is defeatist: "I don't know how this works, I can't know, just don't touch it"
- We can have more food, forests, people, animals, houses, and nature simultaneously through optimization

> "The solution to pollution is profusion." — [Tomas Pueyo](https://unchartedterritories.tomaspueyo.com/p/not-sustainable-abundant)

Examples cited: Forest area increasing in Europe, China potentially reaching peak emissions, fishery depletion solvable through aquaculture, CO2 emissions reversible, and fresh water scarcity addressable through desalination. This framing connects directly to AI's potential as an abundance-generating technology.

### 6. AI Arbitrage and FOMO in the Creator Economy

**Coverage:** [Jay Clouse](https://creatorscience.com/arbitrage)

[Jay Clouse](https://creatorscience.com/arbitrage) provided a cautionary reflection on AI adoption, drawing parallels to his expensive NFT losses in 2021. He warned against chasing AI opportunities out of FOMO, noting that arbitrage windows close when markets catch up or become oversaturated.

Current AI arbitrage opportunities he observed:
- Bulk content generation with AI prompts
- Creating AI audio/video clones
- Pivoting entire strategies to talk about AI
- Building SaaS tools with coding agents

His core advice: Don't let FOMO pull you away from genuine interests. "Your actual voice is still your best competitive advantage. The shortcuts will come and go, but the trust and relationships you build can be enduring."

### 7. Leadership, Parenting, and Human Systems

**Coverage:** [Lenny's Newsletter](https://substack.com/app-link/post?publication_id=10845&post_id=184714824&utm_source=podcast-email&play_audio=true&r=1iefy&utm_campaign=email-play-on-substack&token=eyJ1c2VyX2lkIjoyNTM4MTQyLCJwb3N0X2lkIjoxODQ3MTQ4MjQsImlhdCI6MTc2OTk1MzE4MiwiZXhwIjoxNzcyNTQ1MTgyLCJpc3MiOiJwdWItMTA4NDUiLCJzdWIiOiJwb3N0LXJlYWN0aW9uIn0.xb3zQPE7na74IsyIwOlkjv-0kMNIabQx-eiq-5vxAcY&utm_source=substack&utm_medium=email&utm_content=play_card_preview_link#play)

[Lenny's Newsletter](https://substack.com/app-link/post?publication_id=10845&post_id=184714824&utm_source=podcast-email&play_audio=true&r=1iefy&utm_campaign=email-play-on-substack&token=eyJ1c2VyX2lkIjoyNTM4MTQyLCJwb3N0X2lkIjoxODQ3MTQ4MjQsImlhdCI6MTc2OTk1MzE4MiwiZXhwIjoxNzcyNTQ1MTgyLCJpc3MiOiJwdWItMTA4NDUiLCJzdWIiOiJwb3N0LXJlYWN0aW9uIn0.xb3zQPE7na74IsyIwOlkjv-0kMNIabQx-eiq-5vxAcY&utm_source=substack&utm_medium=email&utm_content=play_card_preview_link#play) featured Dr. Becky Kennedy on the overlap between parenting and leadership principles, offering a humanistic counterpoint to the week's technical focus. Key principles included connecting before correcting, the "most generous interpretation" framework, and being a "sturdy" leader. The emphasis on repair over perfection resonated with the week's discussions about iterating quickly with AI tools while maintaining trust.

### 8. Miscellaneous Coverage

**Health and Wellness:** Tim Ferriss shared his experience beating Lyme disease with a ketogenic diet, while his 5-Bullet Friday covered topics from Alzheimer's blood tests to finicky biomarkers and kidney health considerations.

**Podcast Episodes:** Tim Ferriss featured Dr. Michael Levin on reprogramming bioelectricity and treating cancer without drugs, and appeared on The Shawn Ryan Show covering topics not usually discussed publicly.

**Product Bundles:** [Lenny's Newsletter](https://www.lennysnewsletter.com/p/product-pass-drop-canva-elevenlabs) announced seven new premium partners in the Product Pass, including Canva Business, ElevenLabs, Manus, Factory, Amp, Railway, and Framer—bringing total subscription value to over $25,000.

---

## Cross-Newsletter Patterns

**The "AI Native" Workflow Revolution**: Nearly every newsletter touched on the dramatic shift in how work gets done with AI tools. Whether it was [Peter Steinberger](https://newsletter.pragmaticengineer.com/p/the-creator-of-clawd-i-ship-code) making 6,600 commits monthly, [Craft Docs](https://newsletter.pragmaticengineer.com/p/ai-first-makeover-craft) transforming their entire company workflow, or [Jay Clouse](https://creatorscience.com/arbitrage) automating his morning briefings, the pattern was clear: those embracing AI tools are achieving 10x-100x productivity gains.

**Security and Trust Tensions**: Multiple newsletters highlighted the security risks of giving AI agents broad access. [Jay Clouse](https://creatorscience.com/arbitrage) and [Lenny's Newsletter](https://www.lennysnewsletter.com/p/today-on-how-i-ai-i-gave-clawdbot) both emphasized creating separate environments, limiting permissions, and treating AI assistants with the same caution as human hires. This contrasts with the "move fast" ethos that made Moltbot successful.

**The Death of Traditional Software Engineering Practices**: [The Pragmatic Engineer](https://newsletter.pragmaticengineer.com/p/the-creator-of-clawd-i-ship-code) and [The Pragmatic Engineer](https://newsletter.pragmaticengineer.com/p/ai-first-makeover-craft) both documented teams abandoning pull requests, code reviews, and traditional CI/CD in favor of agent-driven development. The new workflow: extensive planning with agents, autonomous execution, and architectural discussions replacing code reviews.

**Non-Technical Users as Power Users**: Both [The Pragmatic Engineer](https://newsletter.pragmaticengineer.com/p/ai-first-makeover-craft) and [Lenny's Newsletter](https://www.lennysnewsletter.com/p/today-on-how-i-ai-i-gave-clawdbot) noted that customer support, marketing, and HR teams became heavier users of AI coding agents than engineers. This democratization of technical capabilities represents a fundamental shift in who can build software.

**AGI Timeline Acceleration**: [Tomas Pueyo](https://unchartedterritories.tomaspueyo.com/p/ai-algorithms) and [Marc Andreessen](https://substack.com/app-link/post?publication_id=10845&post_id=185338497&utm_source=podcast-email&play_audio=true&r=1iefy&utm_campaign=email-play-on-substack&token=eyJ1c2VyX2lkIjoyNTM4MTQyLCJwb3N0X2lkIjoxODUzMzg0OTcsImlhdCI6MTc2OTY5Mzg5OCwiZXhwIjoxNzcyMjg1ODk4LCJpc3MiOiJwdWItMTA4NDUiLCJzdWIiOiJwb3N0LXJlYWN0aW9uIn0.ydSMWb4i0XAdaEP9L4mrp1e1UWc6B1N03hc6VDl2B9Y&utm_source=substack&utm_medium=email&utm_content=play_card_preview_link#play) both conveyed optimism about near-term AI capabilities, with Pueyo's technical breakdown suggesting AGI by 2030 and Andreessen arguing "the real AI boom hasn't even started yet."

**Abundance Mindset vs. Scarcity Mindset**: [Tomas Pueyo](https://unchartedterritories.tomaspueyo.com/p/not-sustainable-abundant)'s philosophical argument for abundance thinking echoed [Marc Andreessen](https://substack.com/app-link/post?publication_id=10845&post_id=185338497&utm_source=podcast-email&play_audio=true&r=1iefy&utm_campaign=email-play-on-substack&token=eyJ1c2VyX2lkIjoyNTM4MTQyLCJwb3N0X2lkIjoxODUzMzg0OTcsImlhdCI6MTc2OTY5Mzg5OCwiZXhwIjoxNzcyMjg1ODk4LCJpc3MiOiJwdWItMTA4NDUiLCJzdWIiOiJwb3N0LXJlYWN0aW9uIn0.ydSMWb4i0XAdaEP9L4mrp1e1UWc6B1N03hc6VDl2B9Y&utm_source=substack&utm_medium=email&utm_content=play_card_preview_link#play)'s tech optimism and directly opposed [Jay Clouse](https://creatorscience.com/arbitrage)'s caution about AI arbitrage. The tension between "move fast and optimize" versus "preserve trust and relationships" ran through the week's discussions.

**Open Source as Competitive Advantage**: [Kevin Xu](https://interconnected.blog/r/e435cd6c?m=13ee6092-18b4-4710-96ca-c96c6fd588dd) on DeepSeek, Peter Steinberger's open-sourcing of Moltbot, and Craft's Apache 2.0 licensing of Craft Agents all demonstrated open source as a strategic choice in AI, not just an ideological one. The pattern: ship fast, gather feedback, improve rapidly.

---

## Sources

- [DeepSeek Moment Anniversary in a Nashville Snowpocalypse](https://interconnected.blog/r/e435cd6c?m=13ee6092-18b4-4710-96ca-c96c6fd588dd) — Kevin Xu @ Interconnected
- [Not Sustainable → Abundant](https://unchartedterritories.tomaspueyo.com/p/not-sustainable-abundant) — Tomas Pueyo from Uncharted Territories
- [The $100M Worker](https://unchartedterritories.tomaspueyo.com/p/ai-algorithms) — Tomas Pueyo from Uncharted Territories
- [5-Bullet Friday — Beating Lyme Disease, Shawn Ryan, Finicky Blood Tests, and Art De Vany](https://tim.blog/) — Tim Ferriss
- [New from Tim — Dr. Michael Levin — Reprogramming Bioelectricity](https://tim.blog/2026/01/21/dr-michael-levin/) — Tim Ferriss
- [Today on How I AI: I gave Clawdbot (aka Moltbot) full access to my computer](https://www.lennysnewsletter.com/p/today-on-how-i-ai-i-gave-clawdbot) — Lenny's Newsletter
- [Marc Andreessen: The real AI boom hasn't even started yet](https://substack.com/app-link/post?publication_id=10845&post_id=185338497&utm_source=podcast-email&play_audio=true&r=1iefy&utm_campaign=email-play-on-substack&token=eyJ1c2VyX2lkIjoyNTM4MTQyLCJwb3N0X2lkIjoxODUzMzg0OTcsImlhdCI6MTc2OTY5Mzg5OCwiZXhwIjoxNzcyMjg1ODk4LCJpc3MiOiJwdWItMTA4NDUiLCJzdWIiOiJwb3N0LXJlYWN0aW9uIn0.ydSMWb4i0XAdaEP9L4mrp1e1UWc6B1N03hc6VDl2B9Y&utm_source=substack&utm_medium=email&utm_content=play_card_preview_link#play) — Lenny's Newsletter
- [Dr. Becky on the surprising overlap between great parenting and great leadership](https://substack.com/app-link/post?publication_id=10845&post_id=184714824&utm_source=podcast-email&play_audio=true&r=1iefy&utm_campaign=email-play-on-substack&token=eyJ1c2VyX2lkIjoyNTM4MTQyLCJwb3N0X2lkIjoxODQ3MTQ4MjQsImlhdCI6MTc2OTk1MzE4MiwiZXhwIjoxNzcyNTQ1MTgyLCJpc3MiOiJwdWItMTA4NDUiLCJzdWIiOiJwb3N0LXJlYWN0aW9uIn0.xb3zQPE7na74IsyIwOlkjv-0kMNIabQx-eiq-5vxAcY&utm_source=substack&utm_medium=email&utm_content=play_card_preview_link#play) — Lenny's Newsletter
- [Product Pass drop: Canva, ElevenLabs, Manus, Factory, Amp, Railway, Framer](https://www.lennysnewsletter.com/p/product-pass-drop-canva-elevenlabs) — Lenny's Newsletter
- [48 hours with Clawd.bot (err, Molt.bot)](https://creatorscience.com/arbitrage) — Jay Clouse
- [AI-rbitrage](https://creatorscience.com/arbitrage) — Jay Clouse
- [The creator of Clawd: "I ship code I don't read"](https://newsletter.pragmaticengineer.com/p/the-creator-of-clawd-i-ship-code) — The Pragmatic Engineer
- [Inside one startup's crazy fast AI-first makeover](https://newsletter.pragmaticengineer.com/p/ai-first-makeover-craft) — The Pragmatic Engineer
