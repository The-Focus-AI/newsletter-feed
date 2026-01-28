# Week 05 Business Newsletter Analysis (January 20-28, 2026)

## Overview

This week's business newsletters captured a pivotal moment in technology's evolution: the accelerating integration of AI into professional workflows alongside deep explorations of the infrastructure powering modern scale. [The Pragmatic Engineer](https://newsletter.pragmaticengineer.com/p/how-aws-s3-is-built) delivered technical depth on AWS S3's engineering at extreme scale, while [The Pragmatic Engineer](https://newsletter.pragmaticengineer.com/p/ai-first-makeover-craft) showcased Craft Docs' rapid AI transformation. [Lenny's Newsletter](https://substack.com/app-link/post?publication_id=10845&post_id=184576103&utm_source=podcast-email&play_audio=true&r=1iefy&utm_campaign=email-play-on-substack&token=eyJ1c2VyX2lkIjoyNTM4MTQyLCJwb3N0X2lkIjoxODQ1NzYxMDMsImlhdCI6MTc2OTM0ODMyMywiZXhwIjoxNzcxOTQwMzIzLCJpc3MiOiJwdWItMTA4NDUiLCJzdWIiOiJwb3N0LXJlYWN0aW9uIn0.LlH-krJivbsNaMA8j--c0UfuMkRo78IPBBhWqRLvCF0&utm_source=substack&utm_medium=email&utm_content=play_card_preview_link#play) provided frameworks for diagnosing stalled growth, while [Uncharted Territories](https://unchartedterritories.tomaspueyo.com/p/ai-in-2026) and [Uncharted Territories](https://unchartedterritories.tomaspueyo.com/p/not-sustainable-abundant) offered contrarian perspectives on AI's trajectory and humanity's relationship with planetary resources. Meanwhile, [Jay Clouse](https://creatorscience.com/) documented real-time experimentation with AI assistants, and [Kevin Xu @ Interconnected](https://interconnected.blog/r/e435cd6c?m=13ee6092-18b4-4710-96ca-c96c6fd588dd) reflected on the DeepSeek moment's anniversary.

---

## Major Topics and Stories

### 1. AWS S3: Engineering at Extreme Scale

**Coverage:** [The Pragmatic Engineer](https://newsletter.pragmaticengineer.com/p/how-aws-s3-is-built)

Gergely Orosz sat down with Mai-Lan Tomsen Bukovec, VP of Data and Analytics at AWS, for a revealing look at how one of the internet's most critical infrastructure components operates. The numbers are staggering: S3 handles hundreds of millions of transactions per second and stores over 500 trillion objects across hundreds of exabytes of data. If you stacked all of S3's tens of millions of hard drives, they would reach the International Space Station and almost back.

> "At a certain scale, math has to save you. Because at a certain scale, you can't do all the combinatorics of every single edge case, but math can." — [The Pragmatic Engineer](https://newsletter.pragmaticengineer.com/p/how-aws-s3-is-built)

Key technical insights include:

**The Rust takeover:** S3 has rewritten almost every performance-critical piece of code in Rust for maximum performance and lowest latency possible. The system now has many Rust engineers focused on this ongoing optimization.

**Formal methods in production:** S3 uses formal methods (automated reasoning) extensively. When engineers check in code to the index subsystem, the system automatically runs formal proofs to verify the consistency model hasn't regressed.

**11 nines of durability is measured, not promised:** Auditor microservices continuously inspect every byte across the fleet. AWS can answer "What is our actual durability this week/month/year?" at any time.

**Scale must be to your advantage:** This core principle means engineers cannot build something where performance degrades as the service grows. Instead, systems must be designed so increased scale improves attributes—for example, the larger S3 gets, the more de-correlated workloads become, improving reliability for all users.

The article notes that S3 operates on roughly 200 microservices—far fewer than Uber's 4,500+—confirming there's no single "right" way to architect distributed systems at scale.

---

### 2. AI-First Transformation: Craft Docs' Radical Makeover

**Coverage:** [The Pragmatic Engineer](https://newsletter.pragmaticengineer.com/p/ai-first-makeover-craft)

[The Pragmatic Engineer](https://newsletter.pragmaticengineer.com/p/ai-first-makeover-craft) delivered a stunning case study of Craft Docs—a mature startup with 1 million active users and 50,000 paying customers—completely transforming how they build software in just one month. Founder Balint Orosz spent Christmas break building "Craft Agents," a visual interface for Claude Code, and by January mandated every employee (engineers and non-engineers) adopt AI tools.

The transformation has been dramatic:

**Non-engineers became power users:** Customer support, marketing, and HR adopted Craft Agents faster than engineers. Customer support built custom workflows for bug triaging, education license verification, and daily updates. Marketing builds websites without engineering support. HR automated Bamboo HR integrations.

**Engineering velocity exploded:** Difficult migrations that would have taken months now take a week. Engineers work in "one-person responsibility squads" and iterate without traditional code reviews—instead "weaving in" PR ideas without accepting them.

**Cultural disruption:** Some developers struggled with the rapid pace of change and even quit. The company is rethinking fundamental practices like pull requests.

> "We knew we had one shot at showing users that AI is useful for them. And until we had a 'wow' moment ourselves, we would not go all-in on AI." — [The Pragmatic Engineer](https://newsletter.pragmaticengineer.com/p/ai-first-makeover-craft)

The company resisted the "Copilot everywhere slop temptation" for three years, waiting until AI tools proved genuinely transformative before committing. Balint built the polished Craft Agents app in just two weeks using Claude Code and Electron—a tech stack he'd never used before.

---

### 3. AI Coding Tools: From Vibe Coding to Professional Practice

**Coverage:** [Lenny's Newsletter](https://www.lennysnewsletter.com/p/this-week-on-how-i-ai-advanced-claude)

[Lenny's Newsletter](https://www.lennysnewsletter.com/p/this-week-on-how-i-ai-advanced-claude) featured John Lindquist (co-founder of egghead.io) sharing advanced techniques for Claude Code and Cursor that move beyond "vibe coding" to professional practice. The episode emphasized that context beats clever prompting:

> "Most engineers focus on prompting but neglect providing rich context about how their application works. Mermaid diagrams in markdown files can compress your application flow into a format that's easy for AI to understand." — [Lenny's Newsletter](https://www.lennysnewsletter.com/p/this-week-on-how-i-ai-advanced-claude)

Key techniques covered:

**The "append system prompt" command is severely underused:** This powerful command lets you inject context before any user interaction begins. By combining it with file reading commands like `cat`, you can load entire directories of documentation and diagrams into Claude's context.

**Use stop hooks to automate quality checks:** Claude Code's hooks feature can run scripts when the AI stops generating content, automatically checking for TypeScript errors or linting issues and feeding errors back to Claude to fix. You can even set up conditional commits when code passes all checks.

**Create aliases for common commands:** Shell aliases like `cdi` for loading diagrams or `x` for dangerous mode dramatically speed up workflow.

**This is the era of the file type:** Mermaid diagrams, which are difficult for humans to parse, are perfect for machines. Consider what file formats compress information best for AI consumption.

**Planning modes have dramatically reduced AI drift:** Recent planning features force AI to think through solutions before implementing, preventing common problems of AI going in unintended directions.

---

### 4. AI Assistants in the Wild: 48 Hours with Molt.bot

**Coverage:** [Jay Clouse](https://creatorscience.com/)

[Jay Clouse](https://creatorscience.com/) documented his intense 48-hour journey setting up Clawdbot (rebranded to Molt.bot after an Anthropic trademark threat)—an open-source AI agent running 24/7 on a server. His non-technical perspective offered valuable insights on security, practical applications, and ethical boundaries.

**Security-first approach:** Unlike many users who give AI assistants full access to personal computers, Clouse set up his assistant "Tubey" on a virtual private server ($6/month) with API-only access—no login credentials, personal files, or email access.

**Real-world applications:**
- Morning briefings with Oura Ring scores and curated X feeds with engagement metrics
- Automated podcast guest research with structured Notion prep docs
- 300+ podcast transcripts stored with proactive short-form content extraction
- Voice-note workout logging to Google Sheets
- Extracted action items and testimonials from Zoom chats during live calls

**The ethical dilemma:** Tubey can now draft short-form social media posts based on Clouse's long-form content in his voice. He's wrestling with where to draw the line:

> "On one hand, these are my ideas, repurposed from content I already created... On the other hand, if my X feed is just AI-generated short-form content, how do I feel about that? I don't feel great." — [Jay Clouse](https://creatorscience.com/)

His rule: AI can draft, but he decides. He's asking himself, "Is this a skill I want to personally get better at?" If yes, outsourcing makes him worse, not better.

---

### 5. The AI Bubble and Rate of Progress

**Coverage:** [Uncharted Territories](https://unchartedterritories.tomaspueyo.com/p/ai-in-2026)

[Uncharted Territories](https://unchartedterritories.tomaspueyo.com/p/ai-in-2026) provided a sobering analysis of AI economics and the pace of progress. Tomas Pueyo painted a vivid scene of AI researchers experiencing existential crises while the world outside remains oblivious:

> "They are summoning God from silicon. From fucking sand! The world is about to be completely upended! Nothing will be the same! Will we survive? I don't know! Will I have a job? I don't know!" — [Uncharted Territories](https://unchartedterritories.tomaspueyo.com/p/ai-in-2026)

Key data points on the bubble:
- OpenAI projects $100B in revenue by the end of the decade
- Cloud spending to reach hundreds of billions per year
- Must raise tens of billions annually until 2030 when free cash flow might compensate
- Anthropic's optimistic 2026 forecasts exceed their most optimistic 2024 projections

But progress continues accelerating:
- Cost per task has shrunk by 300x in one year
- NVIDIA's new Vera Rubin architecture reduces token costs by 10x and training costs by 4x
- Scores on ARC-AGI-2 benchmark jumped from below 20% a year ago to 55% now
- Frontier AI capabilities have not just continued progressing—they've accelerated over the last two years

The danger: much AI demand is subsidized. Tasks that cost companies dollars are free to users. This only works if demand keeps increasing and costs keep decreasing.

---

### 6. From Sustainable to Abundant: Rethinking Planetary Resources

**Coverage:** [Uncharted Territories](https://unchartedterritories.tomaspueyo.com/p/not-sustainable-abundant)

[Uncharted Territories](https://unchartedterritories.tomaspueyo.com/p/not-sustainable-abundant) offered a provocative reframing of humanity's relationship with Earth. Pueyo argues we've overcorrected from "the solution to pollution is dilution" to a defeatist "sustainability" mindset that treats Earth as a fragile goddess with finite resources to preserve.

> "The Earth is no longer a chaotic system with limited resources that we barely understand and which we must protect to make it sustainable. It is a machine that we understand pretty well, that we're getting better at improving every day when we treat it as a system." — [Uncharted Territories](https://unchartedterritories.tomaspueyo.com/p/not-sustainable-abundant)

His core thesis: Earth has undergone far more dramatic changes than humans have ever witnessed—from Snowball Earth to the Great Oxygenation Event that depleted 99% of atmospheric CO2. Intelligence has evolved from prokaryotes through humans to AI, each level accelerating intelligence faster.

Key reframes:
- **Fishery depletion** is not a problem of eating too much fish—it's a problem of eating too much wild fish
- **CO2 emissions** are not a problem of too much fossil fuel burning—they're a problem of rapid temperature increases, which can be reversed
- **Fresh water scarcity** is not a problem of drinking too much—it's a problem of getting water from unsustainable underground wells instead of from the sea

His conclusion: "Sustainable" is defeatist. We should strive for abundance—more food, more forests, more money, more people, more animals, more houses, more nature. **The solution to pollution is profusion.**

---

### 7. Diagnosing Stalled Product Growth

**Coverage:** [Lenny's Newsletter](https://substack.com/app-link/post?publication_id=10845&post_id=184576103&utm_source=podcast-email&play_audio=true&r=1iefy&utm_campaign=email-play-on-substack&token=eyJ1c2VyX2lkIjoyNTM4MTQyLCJwb3N0X2lkIjoxODQ1NzYxMDMsImlhdCI6MTc2OTM0ODMyMywiZXhwIjoxNzcxOTQwMzIzLCJpc3MiOiJwdWItMTA4NDUiLCJzdWIiOiJwb3N0LXJlYWN0aW9uIn0.LlH-krJivbsNaMA8j--c0UfuMkRo78IPBBhWqRLvCF0&utm_source=substack&utm_medium=email&utm_content=play_card_preview_link#play)

[Lenny's Newsletter](https://substack.com/app-link/post?publication_id=10845&post_id=184576103&utm_source=podcast-email&play_audio=true&r=1iefy&utm_campaign=email-play-on-substack&token=eyJ1c2VyX2lkIjoyNTM4MTQyLCJwb3N0X2lkIjoxODQ1NzYxMDMsImlhdCI6MTc2OTM0ODMyMywiZXhwIjoxNzcxOTQwMzIzLCJpc3MiOiJwdWItMTA4NDUiLCJzdWIiOiJwb3N0LXJlYWN0aW9uIn0.LlH-krJivbsNaMA8j--c0UfuMkRo78IPBBhWqRLvCF0&utm_source=substack&utm_medium=email&utm_content=play_card_preview_link#play) featured Jason Cohen (founder of WP Engine, investor in 60+ startups) sharing his five-step framework for diagnosing why products stop growing. Cohen is a four-time founder including two unicorns, bringing 20 years of company-building lessons.

**The five-step framework:**
1. **Logo retention** - Are you keeping customers?
2. **Pricing** - Is your pricing model right?
3. **NRR (Net Revenue Retention)** - Are existing customers expanding?
4. **Marketing channels** - Are your channels saturated?
5. **Target market** - Should you reposition?

Key insights:

**"It's too expensive" is almost never the real reason customers cancel.** A small tweak to cancellation surveys can double response rates: instead of asking why they're canceling, ask what would need to change for them to stay.

**The "elephant curve" of growth:** Growth naturally follows a curve where hypergrowth eventually levels off. Understanding this pattern helps teams set realistic expectations.

**Repositioning can multiply revenue:** The same product repositioned for a different market can increase revenue 8x. HubSpot's evolution from marketing software to full CRM platform exemplifies this.

**Sometimes growth isn't the right goal:** When to reconsider if growth is even the right objective for your business.

---

### 8. The Changing Content Landscape for Creators

**Coverage:** [Jay Clouse](https://creatorscience.com/)

[Jay Clouse](https://creatorscience.com/) offered a deeply reflective piece on how AI is reshaping the creator economy. His central concern: "How to" instructional content is becoming less valuable when personalized AI responses can be generated in moments.

> "It's likely to be more effortful to take general 'how to' content and then apply it to my situation than to prompt an LLM about my situation and ask for personalized 'how to' content." — [Jay Clouse](https://creatorscience.com/)

What content still commands attention in the AI age:

**Long-form writing:** People connecting dots between multiple disciplines in new ways that explain the world and our relation to each other. Books and Substack dominate here.

**Effortful art:** Work combining skill with patience—where viewers think "They spent all that time to do that?" This is his favorite part of Instagram.

**Demonstrations:** AI can provide "how to" instructions, but people still watch demonstrations of personal approaches to things. Most demonstrations he watches are AI-related, so this may not persist.

**Interviews with unique, verifiable experiences:** Skilled interviewers with guests who have lived interesting lives bring new insights and perspectives.

**Good hangs:** Creators who make audiences feel comfortable, at ease, and confident.

**Trust matters more than ever:** The more thoughtful he is about attention, the more he asks whether he trusts this creator to be a good steward of it.

Clouse is shifting from embodying the role of "teacher" to becoming "a student of the current landscape. A friend on a parallel journey." The pace of change is too fast for teaching—sharing experiments (successes and failures) as quickly as possible is how creators can support one another.

---

### 9. DeepSeek's Enduring Impact

**Coverage:** [Kevin Xu @ Interconnected](https://interconnected.blog/r/e435cd6c?m=13ee6092-18b4-4710-96ca-c96c6fd588dd)

Writing from a Nashville snowpocalypse, [Kevin Xu @ Interconnected](https://interconnected.blog/r/e435cd6c?m=13ee6092-18b4-4710-96ca-c96c6fd588dd) marked the one-year anniversary of the "DeepSeek Moment" with a compilation of his previous analyses. Three big themes illustrate DeepSeek's lasting impact:

**Pushing open source by default into frontier AI development:** DeepSeek normalized open-source approaches in frontier AI, creating positive-sum competition between the US and China.

**Using software specs to guide hardware roadmap (especially in China):** Rather than letting hardware constraints dictate software capabilities, DeepSeek demonstrated how software requirements can drive hardware innovation.

**Pursuing AGI with no business model as enduring advantage:** No other frontier AGI-focused lab anywhere has this edge. Without pressure to monetize, DeepSeek can focus purely on advancing capabilities.

The article notes China's structural advantage in open-source AI, with insights from Ion Stoica and others documenting how DeepSeek's approach has diffused throughout the AI ecosystem.

---

### 10. Lenny's Product Pass: Building the AI-Native Stack

**Coverage:** [Lenny's Newsletter](https://www.lennysnewsletter.com/p/product-pass-drop-canva-elevenlabs)

[Lenny's Newsletter](https://www.lennysnewsletter.com/p/product-pass-drop-canva-elevenlabs) announced seven new premium partners in the Product Pass, bringing total subscription value to over $25,000. New additions include Canva Business, ElevenLabs, Manus (AI agents), Factory (software development agents), Railway (cloud hosting), Framer (website builder), and Amp (coding agent).

> "There's a growing divide (in terms of career opportunities, financial outcomes, loving your job) between the people who embrace these magical new tools and benefit from them, and those who stay business-as-usual and get left behind." — [Lenny's Newsletter](https://www.lennysnewsletter.com/p/product-pass-drop-canva-elevenlabs)

The strategy: Get people to actually experience cutting-edge products rather than just reading about them. Stop scrolling and start building. The collection includes only products Lenny loves and has carefully handpicked, with dozens of companies asking to join that he's holding off on.

This represents a broader trend: newsletters aren't just content platforms anymore—they're becoming distribution channels for entire technology stacks.

---

### 11. Career Reinvention and High Performance

**Coverage:** [Tim Ferriss](https://tim.blog/)

[Tim Ferriss](https://tim.blog/) featured Steve Young, the Hall of Fame quarterback who transitioned from Super Bowl MVP to co-founding HGGC, a private equity firm managing over $6.9B in capital. The conversation explored high performance, reinvention, faith, and how to blend dreams with plans.

In his 5-Bullet Friday, Ferriss recommended reading "What is the question?" by Itai Yanai and Martin Lercher on how the best scientists work:

> "If you do not know how to ask the right question, you discover nothing." — W. Edwards Deming, quoted in [Tim Ferriss](https://tim.blog/)

Other highlights included:

**Burden of Dreams:** A documentary about Werner Herzog's five-year effort to film Fitzcarraldo—a study in "tackling the impossible, being unrealistic, and failing above others' successes."

**Alice Walker quote:** "A writer's heart, a poet's heart, an artist's heart, a musician's heart is always breaking. It is through that broken window that we see the world."

**The Plastic Inside Us:** An article on microplastics spreading everywhere—into our air, food, water, and bodies—with research on health implications and potential solutions.

---

## Cross-Newsletter Patterns

### The Great Acceleration: AI Integration at Multiple Levels

Every newsletter this week grappled with AI acceleration, but at different levels. [The Pragmatic Engineer](https://newsletter.pragmaticengineer.com/p/ai-first-makeover-craft) documented organizational transformation (Craft Docs' one-month makeover), [Lenny's Newsletter](https://www.lennysnewsletter.com/p/this-week-on-how-i-ai-advanced-claude) explored individual techniques (advanced Claude Code usage), [Jay Clouse](https://creatorscience.com/) experimented with personal AI assistants (48 hours with Molt.bot), and [Uncharted Territories](https://unchartedterritories.tomaspueyo.com/p/ai-in-2026) analyzed industry economics (the AI bubble). This multi-level coverage reveals AI transformation happening simultaneously at individual, organizational, and industry scales.

### Context Over Prompting: The New Best Practice

Both [Lenny's Newsletter](https://www.lennysnewsletter.com/p/this-week-on-how-i-ai-advanced-claude) and [The Pragmatic Engineer](https://newsletter.pragmaticengineer.com/p/ai-first-makeover-craft) emphasized that successful AI use requires providing rich context rather than clever prompting. Whether through Mermaid diagrams, system prompts, or Craft Agents' "sources" concept, the emerging best practice is to invest in context architecture. This represents a shift from viewing AI as a conversational partner to viewing it as a system requiring proper data infrastructure.

### The Trust Crisis in Content and AI

[Jay Clouse](https://creatorscience.com/) and [Lenny's Newsletter](https://www.lennysnewsletter.com/p/product-pass-drop-canva-elevenlabs) both addressed trust from different angles. Clouse noted that trust in creators matters more than ever as AI-generated content proliferates. Lenny emphasized the divide between those who embrace AI tools and those who don't. Both suggest that in an AI-saturated world, the ability to demonstrate genuine expertise and build trust becomes increasingly valuable—and increasingly difficult.

### Scale Thinking: Physical vs. Digital Infrastructure

[The Pragmatic Engineer](https://newsletter.pragmaticengineer.com/p/how-aws-s3-is-built) and [Uncharted Territories](https://unchartedterritories.tomaspueyo.com/p/ai-in-2026) both grappled with scale, but from different angles. AWS S3's principle that "scale must be to your advantage" contrasts with the AI industry's challenge that subsidized demand may not scale sustainably. Both raise the question: what happens when systems grow faster than their economic models? S3 solved this through decades of careful engineering; AI companies are still figuring it out.

### From Scarcity to Abundance: Philosophical Reframing

[Uncharted Territories](https://unchartedterritories.tomaspueyo.com/p/not-sustainable-abundant) argued for moving from "sustainable" (preserving limited resources) to "abundant" (engineering better outcomes). This philosophical shift mirrors the AI transformation documented by others: rather than accepting current constraints, reimagine what's possible with better tools and thinking. The same mindset that [The Pragmatic Engineer](https://newsletter.pragmaticengineer.com/p/ai-first-makeover-craft) showed in Craft Docs' transformation—don't preserve old workflows, engineer new ones.

### The Value of Systematic Frameworks in Uncertainty

[Lenny's Newsletter](https://substack.com/app-link/post?publication_id=10845&post_id=184576103&utm_source=podcast-email&play_audio=true&r=1iefy&utm_campaign=email-play-on-substack&token=eyJ1c2VyX2lkIjoyNTM4MTQyLCJwb3N0X2lkIjoxODQ1NzYxMDMsImlhdCI6MTc2OTM0ODMyMywiZXhwIjoxNzcxOTQwMzIzLCJpc3MiOiJwdWItMTA4NDUiLCJzdWIiOiJwb3N0LXJlYWN0aW9uIn0.LlH-krJivbsNaMA8j--c0UfuMkRo78IPBBhWqRLvCF0&utm_source=substack&utm_medium=email&utm_content=play_card_preview_link#play) (Jason Cohen's five-step growth framework), [Jay Clouse](https://creatorscience.com/) (content type framework), and [The Pragmatic Engineer](https://newsletter.pragmaticengineer.com/p/how-aws-s3-is-built) (S3's engineering principles) all offered structured approaches to navigating complexity. In a rapidly changing landscape where intuition breaks down, systematic frameworks provide anchors for decision-making. This suggests that meta-skills—knowing how to create and apply frameworks—may be more valuable than domain expertise.

### Open Source as Competitive Advantage

[Kevin Xu @ Interconnected](https://interconnected.blog/r/e435cd6c?m=13ee6092-18b4-4710-96ca-c96c6fd588dd) highlighted DeepSeek's open-source approach as a structural advantage, while [The Pragmatic Engineer](https://newsletter.pragmaticengineer.com/p/ai-first-makeover-craft) documented how Craft Agents was open-sourced and immediately "remixed" by users. The pattern: in fast-moving technology landscapes, open source enables rapid iteration and community-driven improvement that closed systems can't match.

---

## Sources

- [How AWS S3 is built](https://newsletter.pragmaticengineer.com/p/how-aws-s3-is-built) — The Pragmatic Engineer
- [Inside one startup's crazy fast AI-first makeover](https://newsletter.pragmaticengineer.com/p/ai-first-makeover-craft) — The Pragmatic Engineer
- [Why your product stopped growing (and the 5-step framework to restart it)](https://substack.com/app-link/post?publication_id=10845&post_id=184576103&utm_source=podcast-email&play_audio=true&r=1iefy&utm_campaign=email-play-on-substack&token=eyJ1c2VyX2lkIjoyNTM4MTQyLCJwb3N0X2lkIjoxODQ1NzYxMDMsImlhdCI6MTc2OTM0ODMyMywiZXhwIjoxNzcxOTQwMzIzLCJpc3MiOiJwdWItMTA4NDUiLCJzdWIiOiJwb3N0LXJlYWN0aW9uIn0.LlH-krJivbsNaMA8j--c0UfuMkRo78IPBBhWqRLvCF0&utm_source=substack&utm_medium=email&utm_content=play_card_preview_link#play) — Lenny's Newsletter
- [This week on How I AI: Advanced Claude Code and Cursor techniques for power users](https://www.lennysnewsletter.com/p/this-week-on-how-i-ai-advanced-claude) — Lenny's Newsletter
- [Product Pass drop: Canva, ElevenLabs, Manus, Factory, Amp, Railway, Framer](https://www.lennysnewsletter.com/p/product-pass-drop-canva-elevenlabs) — Lenny's Newsletter
- [AI in 2026](https://unchartedterritories.tomaspueyo.com/p/ai-in-2026) — Uncharted Territories
- [Not Sustainable → Abundant](https://unchartedterritories.tomaspueyo.com/p/not-sustainable-abundant) — Uncharted Territories
- [Thoughts on this season of content...](https://creatorscience.com/) — Jay Clouse
- [48 hours with Clawd.bot (err, Molt.bot)](https://creatorscience.com/) — Jay Clouse
- ["DeepSeek Moment" Anniversary in a Nashville Snowpocalypse](https://interconnected.blog/r/e435cd6c?m=13ee6092-18b4-4710-96ca-c96c6fd588dd) — Kevin Xu @ Interconnected
- [Steve Young — From Super Bowl MVP to Managing Billions](https://tim.blog/) — Tim Ferriss
- [5-Bullet Friday — Young Werner Herzog, Finding Breakthrough Questions, and Wizards and Artists](https://tim.blog/) — Tim Ferriss
