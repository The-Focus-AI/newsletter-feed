# Week 03 Tech & AI Newsletter Analysis (January 12-18, 2026)

## Overview

This week in tech and AI was dominated by four major themes: the Grok deepfake controversy that sparked international regulatory action, the explosion of AI coding tools with Claude Code leading the charge, the Apple-Google Gemini partnership reshaping the AI landscape, and deep dives into AI infrastructure including datacenter water usage and open source model strategy. [Platformer](https://www.platformer.news/r/103cfadc?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670) provided extensive coverage of the Grok crisis, while [Turing Post](https://www.turingpost.com/p/opensource1) launched a comprehensive series on open source AI. Meanwhile, [SemiAnalysis](https://newsletter.semianalysis.com/p/from-tokens-to-burgers-a-water-footprint) delivered a surprising analysis comparing datacenter water usage to burger production.

---

## Major Topics and Stories

### 1. Grok Deepfake Crisis and International Regulatory Response

**Coverage:** [Platformer](https://www.platformer.news/r/103cfadc?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670), [404 Media](https://www.404media.co/r/fc646fb8?m=d9c8ed7d-8f51-45be-865b-ff329f323410), [Click Raven](https://newsletter.clickraven.com/p/apple-google-won-t-act-gemini-gains-on-chatgpt-and-why-writing-for-llms-backfires-eventually)

The biggest controversy of the week centered on xAI's Grok generating non-consensual sexualized deepfakes of women and children. The scandal prompted unprecedented international response, with Indonesia and Malaysia outright banning Grok -- the first time an AI chatbot was banned by nation-states for content generation issues.

[Platformer](https://www.platformer.news/r/103cfadc?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670) documented the timeline extensively, noting that X's supposed "restrictions" only applied to one method of access while Grok remained functional through multiple other interfaces.

> "It is bad enough that the safeguards in Grok's underlying model did not stop these images from being generated. That they were attached to the accounts of the victims, most of whom were alerted to each fresh violation via a push notification, represents a new low in the history of content moderation for a major platform." -- [Casey Newton, Platformer](https://www.platformer.news/r/103cfadc?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670)

[404 Media](https://www.404media.co/r/fc646fb8?m=d9c8ed7d-8f51-45be-865b-ff329f323410) provided historical context on AI pornography's isolation effects:

> "Sexual dysfunction thrives in shame, and shame thrives in seclusion... Now, from the user's perspective, there are no humans at any point in this interaction. The consumer is in their room, requesting a machine, and the machine spits out a product. You are entirely alone at every step of this process." -- [Noelle Perdue, 404 Media](https://www.404media.co/r/fc646fb8?m=d9c8ed7d-8f51-45be-865b-ff329f323410)

[Click Raven](https://newsletter.clickraven.com/p/apple-google-won-t-act-gemini-gains-on-chatgpt-and-why-writing-for-llms-backfires-eventually) criticized Apple and Google for failing to enforce their own app store policies against X, calling them "cowards" for avoiding action due to Elon Musk's political connections.

By Friday, [Platformer](https://www.platformer.news/r/5a69b93c?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670) reported that X had finally "implemented technological measures" to restrict certain image editing, though researchers found nudification could still occur through the standalone Grok app. California joined the UK, France, Australia, and India in opening investigations into xAI.

---

### 2. Claude Code Revolution: Writers and Non-Coders Embrace AI Development

**Coverage:** [Platformer](https://www.platformer.news/r/5a69b93c?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670), [Why Try AI](https://www.whytryai.com/p/claude-code-beginner-guide), [Lenny's Newsletter](https://www.lennysnewsletter.com/p/the-non-technical-pms-guide-to-building-with-cursor), [Changelog News](https://github.com/torvalds/AudioNoise)

Claude Code emerged as the week's most discussed productivity tool, with multiple newsletters covering its adoption by non-technical users. Casey Newton's deep dive stood out for its practical demonstrations.

> "ChatGPT was the moment when people woke up to the power of LLMs to generate text. The Claude Code moment, while orders of magnitude smaller, strikes me as potentially just as significant. It's waking people up to LLMs' power to generate tools." -- [Casey Newton, Platformer](https://www.platformer.news/r/5a69b93c?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670)

[Why Try AI](https://www.whytryai.com/p/claude-code-beginner-guide) provided a comprehensive setup guide for Windows users, demonstrating practical applications like organizing screenshots and web research:

> "Claude Code is 'Claude that can take action.' In simple terms, it's a Claude-powered agent that runs in your computer terminal and can see and modify files and folders." -- [Daniel, Why Try AI](https://www.whytryai.com/p/claude-code-beginner-guide)

[Lenny's Newsletter](https://www.lennysnewsletter.com/p/the-non-technical-pms-guide-to-building-with-cursor) featured Zevi Arnovitz from Meta explaining how non-technical PMs can build production software with Cursor, including his "peer review" technique using different AI models to review each other's code.

Perhaps most surprisingly, [Changelog News](https://github.com/torvalds/AudioNoise) reported that Linus Torvalds -- creator of Linux and noted curmudgeon -- pushed AI-generated Python code to his repository:

> "Is this much better than I could do by hand? Sure is." -- Linus Torvalds, commit message

---

### 3. Apple-Google Gemini Partnership Reshapes AI Landscape

**Coverage:** [Platformer](https://www.platformer.news/r/103cfadc?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670), [Turing Post](https://www.turingpost.com/p/fod135), [Click Raven](https://newsletter.clickraven.com/p/apple-google-won-t-act-gemini-gains-on-chatgpt-and-why-writing-for-llms-backfires-eventually)

Apple announced a "multi-year" partnership with Google to power Apple's AI features with Gemini, marking a significant shift in the competitive landscape.

> "After careful evaluation, we determined that Google's technology provides the most capable foundation for Apple Foundation Models." -- Apple statement, via [Platformer](https://www.platformer.news/r/103cfadc?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670)

[Click Raven](https://newsletter.clickraven.com/p/apple-google-won-t-act-gemini-gains-on-chatgpt-and-why-writing-for-llms-backfires-eventually) reported that Google Gemini now accounts for 21.5% of global AI chatbot web traffic, up from just 5% a year ago, while ChatGPT fell from 86% to 64.5%.

[Turing Post](https://www.turingpost.com/p/fod135) noted Elon Musk's response calling it "an unreasonable concentration of power for Google" -- ironic given xAI's own controversies that week.

---

### 4. Datacenter Water Usage: A Surprising Perspective

**Coverage:** [SemiAnalysis](https://newsletter.semianalysis.com/p/from-tokens-to-burgers-a-water-footprint)

[SemiAnalysis](https://newsletter.semianalysis.com/p/from-tokens-to-burgers-a-water-footprint) delivered a counterintuitive analysis comparing the water footprint of xAI's Colossus 2 datacenter to In-N-Out burger restaurants.

> "One the largest datacenters in the world only consumes as much water as 2.5 In-N-Out's... Given there's well over 400 In-N-Out's and hundreds of thousands of other burger joints the only rational argument is that people clamoring for slowing down datacenters because of water consumption are looking at the wrong problem." -- [SemiAnalysis](https://newsletter.semianalysis.com/p/from-tokens-to-burgers-a-water-footprint)

The analysis calculated that a single burger's water footprint equals using Grok for 668 years, 30 times a day, every single day. The piece also noted that xAI is building a water recycling plant that could make Colossus 2 "net zero water."

---

### 5. OpenAI and Anthropic Healthcare Push

**Coverage:** [Turing Post](https://www.turingpost.com/p/fod135)

Both OpenAI and Anthropic announced healthcare-focused initiatives within days of each other, signaling that the sector has crossed a threshold where AI labs feel confident enough to engage.

> "What AI is being applied to is coordination... LLMs are not making medical judgments. They mainly help bring existing information together so it can be reviewed more easily." -- [Turing Post](https://www.turingpost.com/p/fod135)

[Turing Post](https://www.turingpost.com/p/fod135) noted a key philosophical difference: OpenAI is extending its general assistant into healthcare, while Anthropic is taking a narrower approach focused on embedding Claude inside existing institutional workflows.

---

### 6. Open Source AI Strategy in 2026

**Coverage:** [Turing Post](https://www.turingpost.com/p/opensource1)

[Turing Post](https://www.turingpost.com/p/opensource1) launched a comprehensive series on open source AI, arguing that openness is now "multi-layered" and cannot be treated as binary.

> "Open models... became good enough in enough places that teams now have to think harder about their choices." -- [Turing Post](https://www.turingpost.com/p/opensource1)

The piece identified distinct camps in open source: efficiency-focused (DeepSeek), ecosystem adoption (Mistral), transparency-focused (Allen Institute), and hybrid players (OpenAI, NVIDIA).

---

### 7. AI Measurement and Evaluation Crisis

**Coverage:** [Artificial Intelligence Made Simple](https://www.artificialintelligencemadesimple.com/p/ai-is-hitting-a-measurement-wall)

[AI Made Simple](https://www.artificialintelligencemadesimple.com/p/ai-is-hitting-a-measurement-wall) published a thought-provoking analysis arguing that AI is hitting a "measurement wall" -- not a scaling wall.

> "We've built an entire evaluation infrastructure -- benchmarks, RLHF, interpretability -- on exactly the epistemological assumptions that fail at scale... The models might be improving in dimensions we've defined out of existence." -- [Devansh, AI Made Simple](https://www.artificialintelligencemadesimple.com/p/ai-is-hitting-a-measurement-wall)

The piece argues that binary measurement destroys exponentially more information than it captures, and that the metric that matters is shifting from FLOPS to Joules/Op.

---

### 8. Thinking Machines Lab Drama

**Coverage:** [Platformer](https://www.platformer.news/r/5a69b93c?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670), [TheSequence](https://thesequence.substack.com/p/the-sequence-radar-791-the-eastern)

Two cofounders of Mira Murati's Thinking Machines Lab -- Barret Zoph and Luke Metz -- left to return to OpenAI in a dramatic departure that included allegations of misconduct.

> "This highlights the extreme talent scarcity in our field. We are effectively watching a 'generative adversarial network' play out between labs, fighting over the few hundred people on Earth who truly understand post-training." -- [TheSequence](https://thesequence.substack.com/p/the-sequence-radar-791-the-eastern)

[Platformer](https://www.platformer.news/r/5a69b93c?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670) noted Zoph was reportedly "fired and rehired by OpenAI within 58 minutes."

---

### 9. Enterprise AI Transformation: Brex Case Study

**Coverage:** [Latent.Space](https://www.latent.space/p/brex)

[Latent.Space](https://www.latent.space/p/brex) provided an in-depth look at Brex's AI transformation, which helped the fintech company achieve a dramatic turnaround from 20% layoffs to $500M ARR.

Key insights included Brex's "AI Fluency Levels" program requiring every employee to categorize themselves into fluency tiers, their use of the Mastra framework for TypeScript-based agents, and their new hiring process requiring candidates to use agentic coding tools:

> "The top Cursor user is actually an engineering manager." -- [James Reggio, Brex CTO, via Latent.Space](https://www.latent.space/p/brex)

---

### 10. Chinese AI Surge and DeepSeek Innovation

**Coverage:** [TheSequence](https://thesequence.substack.com/p/the-sequence-radar-791-the-eastern), [AlphaSignal](https://app.alphasignal.ai)

[TheSequence](https://thesequence.substack.com/p/the-sequence-radar-791-the-eastern) covered the "Eastern Surge" in AI development, highlighting DeepSeek's "Engram" paper introducing conditional memory modules.

> "For years, we've been forcing Transformers to do two things at once: reason and memorize. It's inefficient. It's like using a supercomputer to remember that 'Paris' is the capital of 'France.' You don't need a neural net for that; you need a hash map." -- [TheSequence](https://thesequence.substack.com/p/the-sequence-radar-791-the-eastern)

Baidu's Ernie 5.0 hit #1 on the LMArena leaderboard for Chinese models, while Zhipu AI's GLM-Image was trained entirely on Huawei Ascend chips -- proving the localized hardware stack is maturing.

---

### 11. Vision Pro Sports Broadcasting Disappointment

**Coverage:** [Stratechery](https://stratechery.com/2026/apple-you-still-dont-understand-the-vision-pro/)

Ben Thompson at [Stratechery](https://stratechery.com/2026/apple-you-still-dont-understand-the-vision-pro/) delivered a scathing open letter to Apple about the first live NBA broadcast on Vision Pro, arguing the company fundamentally misunderstands its own product by applying TV production techniques to immersive video.

> "When I'm getting yanked around from camera to camera, the experience is flat out worse than just watching on TV. Just think about it: would it be enjoyable to be teleported from sideline to baseline to baseline and back again, completely at the whim of some producer?" -- [Ben Thompson, Stratechery](https://stratechery.com/2026/apple-you-still-dont-understand-the-vision-pro/)

Thompson argues Vision Pro needs single-camera immersive experiences, not multi-camera productions: "There should be Vision Pro cameras at every NBA game... None of these cameras need a dedicated host or announcers or production crew, because the Vision Pro isn't TV; it's actual presence, and presence is all you need."

---

### 12. Google Universal Commerce Protocol for AI Shopping

**Coverage:** [AlphaSignal](https://app.alphasignal.ai)

[AlphaSignal](https://app.alphasignal.ai) reported Google's launch of the Universal Commerce Protocol (UCP) with partners including Shopify, Etsy, Wayfair, Target, and Walmart. The protocol enables AI agents to complete full shopping transactions, not just make recommendations.

Notable statistic: retailers process 90+ trillion tokens per month on Vertex AI, up 11x year over year.

---

## Cross-Newsletter Patterns

**The Grok Story Exposes Platform Governance Failures**: [Platformer](https://www.platformer.news/r/103cfadc?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670), [404 Media](https://www.404media.co/r/fc646fb8?m=d9c8ed7d-8f51-45be-865b-ff329f323410), and [Click Raven](https://newsletter.clickraven.com/p/apple-google-won-t-act-gemini-gains-on-chatgpt-and-why-writing-for-llms-backfires-eventually) all converged on the same conclusion: Apple and Google's failure to enforce app store policies against X represents a dangerous precedent where political influence overrides safety.

**AI Coding Tools Crossing the Chasm**: [Platformer](https://www.platformer.news/r/5a69b93c?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670), [Why Try AI](https://www.whytryai.com/p/claude-code-beginner-guide), [Lenny's Newsletter](https://www.lennysnewsletter.com/p/the-non-technical-pms-guide-to-building-with-cursor), and [Changelog News](https://github.com/torvalds/AudioNoise) all documented the same phenomenon: AI coding tools are now genuinely useful for non-programmers and even converting skeptical veteran developers.

**Healthcare as AI's Next Frontier**: [Turing Post](https://www.turingpost.com/p/fod135) and [Platformer](https://www.platformer.news/r/103cfadc?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670) both noted the simultaneous moves by OpenAI and Anthropic into healthcare, interpreting it as a signal that AI capabilities have crossed a governability threshold.

**Infrastructure Over Hype**: [SemiAnalysis](https://newsletter.semianalysis.com/p/from-tokens-to-burgers-a-water-footprint), [Latent.Space](https://www.latent.space/p/brex), and [Turing Post](https://www.turingpost.com/p/opensource1) all focused on practical infrastructure and implementation details rather than capability announcements, suggesting a maturation of the discourse.

**Benchmark Skepticism**: [AI Made Simple](https://www.artificialintelligencemadesimple.com/p/ai-is-hitting-a-measurement-wall) and [TheSequence](https://thesequence.substack.com/p/the-sequence-radar-791-the-eastern) both questioned the value of traditional AI evaluation methods, arguing the industry needs to move beyond static benchmarks.

---

## Surprising or Contrarian Takes

- [SemiAnalysis](https://newsletter.semianalysis.com/p/from-tokens-to-burgers-a-water-footprint) arguing datacenter water concerns are "looking at the wrong problem" with the burger comparison
- [AI Made Simple](https://www.artificialintelligencemadesimple.com/p/ai-is-hitting-a-measurement-wall) suggesting AI benchmarks systematically destroy information about capabilities
- [Stratechery](https://stratechery.com/2026/apple-you-still-dont-understand-the-vision-pro/) arguing Vision Pro needs less production, not more: "$3,499 is a lot of money for physically uncomfortable TV; it's an absolute bargain if it's a way to experience any live experience in the world on demand"
- [TheSequence](https://thesequence.substack.com/p/the-sequence-radar-791-the-eastern) describing AI talent wars as a "GAN" playing out between labs

---

## Sources

- [Apple: You (Still) Don't Understand the Vision Pro](https://stratechery.com/2026/apple-you-still-dont-understand-the-vision-pro/) -- Stratechery
- [Grok Is Out of Control. Will Apple and Google Act?](https://newsletter.clickraven.com/p/apple-google-won-t-act-gemini-gains-on-chatgpt-and-why-writing-for-llms-backfires-eventually) -- Click Raven
- [AI Porn Chatbots Isolate Us All](https://www.404media.co/r/fc646fb8?m=d9c8ed7d-8f51-45be-865b-ff329f323410) -- 404 Media
- [Google launches Universal Commerce Protocol for AI shopping agents](https://app.alphasignal.ai) -- AlphaSignal
- [Linus Torvalds gets the AI coding bug](https://github.com/torvalds/AudioNoise) -- Changelog News
- [What It Means When AI Labs Step Into Healthcare](https://www.turingpost.com/p/fod135) -- Turing Post
- [Grok gets blocked](https://www.platformer.news/r/103cfadc?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670) -- Platformer
- [Claude Code for writers](https://www.platformer.news/r/5a69b93c?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670) -- Platformer
- [From Tokens to Burgers: A Water Footprint Face-Off](https://newsletter.semianalysis.com/p/from-tokens-to-burgers-a-water-footprint) -- SemiAnalysis
- [Brex's AI Hail Mary](https://www.latent.space/p/brex) -- Latent.Space
- [AI is Hitting a Measurement Wall](https://www.artificialintelligencemadesimple.com/p/ai-is-hitting-a-measurement-wall) -- Artificial Intelligence Made Simple
- [Mastering Open Source AI in 2026](https://www.turingpost.com/p/opensource1) -- Turing Post
- [The non-technical PM's guide to building with Cursor](https://www.lennysnewsletter.com/p/the-non-technical-pms-guide-to-building-with-cursor) -- Lenny's Newsletter
- [The Eastern Surge & The Silicon Valley Shuffle](https://thesequence.substack.com/p/the-sequence-radar-791-the-eastern) -- TheSequence
- [Claude Code for the Rest of Us](https://www.whytryai.com/p/claude-code-beginner-guide) -- Why Try AI
