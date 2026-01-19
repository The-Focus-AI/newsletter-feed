# Week 03 Tech & AI Newsletter Analysis (January 13-19, 2026)

## Overview

This week saw the AI coding revolution reach a tipping point, with multiple newsletters converging on how agents like Claude Code and Cursor are fundamentally reshaping software development. [Thorsten Ball](https://registerspill.thorstenball.com/p/joy-and-curiosity-70-d85) asked the existential question "what will happen to code?" while [Sam Schillace](https://sundaylettersfromsam.substack.com/p/the-hard-part-isnt-doing-the-work) declared "the hard part isn't doing the work now; it's choosing the work." Meanwhile, surveillance technology emerged as a major concern through [404 Media](https://www.404media.co/r/0f53e8ae)'s explosive reporting on Flock camera data leaks and Palantir's ICE tools. The Apple-Google Gemini partnership for Siri dominated mainstream tech coverage, the Grok deepfake scandal prompted international regulatory action, and [Turing Post](https://www.turingpost.com/p/opensource1) launched an essential new series on navigating open-source AI decisions in 2026.

---

## Major Topics and Stories

### 1. The Agentic Coding Revolution
**Coverage:** [Thorsten Ball](https://registerspill.thorstenball.com/p/joy-and-curiosity-70-d85), [Sam Schillace](https://sundaylettersfromsam.substack.com/p/the-hard-part-isnt-doing-the-work), [Casey Newton](https://www.platformer.news/r/5a69b93c), [Daniel (Why Try AI)](https://www.whytryai.com/p/claude-code-beginner-guide), [Lenny's Newsletter](https://www.lennysnewsletter.com/p/the-non-technical-pms-guide-to-building-with-cursor), [Simon Willison](content/tech-ai/simon-willison-from-simon-willison-s-new/2026-01-13-first-impressions-of-claude-cowork-anthropic-s-general-agent.md), [AlphaSignal](content/tech-ai/alphasignal/2026-01-13-anthropic-cowork-claude-agents-for-file-workflows-64k-likes.md)

The narrative around AI coding tools reached an inflection point this week, with multiple voices declaring a fundamental shift in how software gets built.

[Thorsten Ball](https://registerspill.thorstenball.com/p/joy-and-curiosity-70-d85) shared a revealing anecdote about abandoning a Rust project to instead write a Markdown file of instructions for an agent:

> "No code, only Markdown. Yes, not every codebase can be turned into instructions for an agent, and yes, it's inefficient and costs money. But, directionally, there are quite a few things that can be deconstructed into simply an agent with the right instructions and tools, are there not?"

He noted that Cursor has been "experimenting with running coding agents autonomously for weeks," pointing to their ambitious browser-from-scratch experiment with "3M+ lines of code across thousands of files." Thorsten also highlighted antirez encouraging readers "not to fall into the anti-AI hype" and Linus Torvalds using Antigravity to fix his audio visualization tool.

[Sam Schillace](https://sundaylettersfromsam.substack.com/p/the-hard-part-isnt-doing-the-work), Microsoft's Deputy CTO, observed the emergence of "attention saturation" as a new challenge:

> "Because it's so easy to start things now with these tools, you have to have good taste in what you start. It's not hard to do work now, it's hard to pick what work to do. I suspect this is a deep truth of the AI age."

He introduced the "Why Not/What If" framework for understanding reactions to disruptive technology:

> "These two states manifest in either telling 'why not' stories - inventing reasons why the new thing is wrong, or 'what if' stories - what happens if it is. Ordinary changes don't get this behavior, you get a much broader spread of reactions. But big category changes get 'I love it'/ 'I hate it' and not much inbetween."

[Casey Newton](https://www.platformer.news/r/5a69b93c) wrote about Claude Code as a practical tool for writers:

> "ChatGPT was the moment when people woke up to the power of LLMs to generate text. The Claude Code moment, while orders of magnitude smaller, strikes me as potentially just as significant. It's waking people up to LLMs' power to generate tools."

[Daniel (Why Try AI)](https://www.whytryai.com/p/claude-code-beginner-guide) provided a comprehensive setup guide for non-developers, demonstrating practical applications like organizing screenshots and web research:

> "Claude Code is 'Claude that can take action.' In simple terms, it's a Claude-powered agent that runs in your computer terminal and can see and modify files and folders."

[Lenny's Newsletter](https://www.lennysnewsletter.com/p/the-non-technical-pms-guide-to-building-with-cursor) featured Zevi Arnovitz from Meta explaining how non-technical PMs can build production software with Cursor, extending the agentic coding conversation beyond developers.

---

### 2. Grok Deepfake Crisis and International Regulatory Response

**Coverage:** [Casey Newton](https://www.platformer.news/r/103cfadc), [404 Media](https://www.404media.co/r/fc646fb8), [Click Raven](https://newsletter.clickraven.com/p/apple-google-won-t-act-gemini-gains-on-chatgpt-and-why-writing-for-llms-backfires-eventually)

The biggest controversy of the week centered on xAI's Grok generating non-consensual sexualized deepfakes. The scandal prompted unprecedented international response, with Indonesia and Malaysia outright banning Grok.

[Casey Newton](https://www.platformer.news/r/103cfadc) documented the timeline extensively:

> "It is bad enough that the safeguards in Grok's underlying model did not stop these images from being generated. That they were attached to the accounts of the victims, most of whom were alerted to each fresh violation via a push notification, represents a new low in the history of content moderation for a major platform."

[404 Media](https://www.404media.co/r/fc646fb8) provided historical context on AI pornography's isolation effects:

> "Sexual dysfunction thrives in shame, and shame thrives in seclusion... Now, from the user's perspective, there are no humans at any point in this interaction. The consumer is in their room, requesting a machine, and the machine spits out a product. You are entirely alone at every step of this process."

[Click Raven](https://newsletter.clickraven.com/p/apple-google-won-t-act-gemini-gains-on-chatgpt-and-why-writing-for-llms-backfires-eventually) criticized Apple and Google for failing to enforce their own app store policies against X, calling them "cowards" for avoiding action due to Elon Musk's political connections.

---

### 3. Surveillance Technology Under Scrutiny
**Coverage:** [404 Media](https://www.404media.co/r/0f53e8ae), [404 Media](https://www.404media.co/r/beead576)

[404 Media](https://www.404media.co/r/0f53e8ae) broke multiple stories exposing the reach and risks of AI-powered surveillance systems.

The Flock ALPR (Automated License Plate Recognition) story revealed that anyone can check if their license plate appears in police surveillance databases via HaveIBeenFlocked.com, exposing millions of surveillance targets.

In a separate investigation, [404 Media](https://www.404media.co/r/beead576) documented "ELITE," a Palantir-built application that ICE uses to "find neighborhoods to raid":

> "The tool allows ICE agents to identify geographic areas with high concentrations of potential targets, essentially turning immigrant communities into hunting grounds."

A follow-up story showed how a cop used Flock to wrongfully accuse a woman and then refused to provide evidence, illustrating the accountability gaps in these systems.

---

### 4. Apple Partners with Google Gemini for Siri
**Coverage:** [The Verge](content/tech-ai/the-verge/2026-01-17-read-our-biggest-and-best-stories-of-the-week.md), [Thorsten Ball](https://registerspill.thorstenball.com/p/joy-and-curiosity-70-d85), [TheSequence](https://thesequence.substack.com/p/the-sequence-radar-791-the-eastern), [Click Raven](https://newsletter.clickraven.com/p/apple-google-won-t-act-gemini-gains-on-chatgpt-and-why-writing-for-llms-backfires-eventually)

After reportedly "playing the field" with OpenAI and Anthropic, Apple announced that Google's Gemini models will power a more personalized Siri coming in 2026.

[Thorsten Ball](https://registerspill.thorstenball.com/p/joy-and-curiosity-70-d85) expressed enthusiasm:

> "As someone who thinks that Gemini 3 was the inflection point, not Opus 4.5: hell yes, bring it."

[The Verge](content/tech-ai/the-verge/2026-01-17-read-our-biggest-and-best-stories-of-the-week.md) described it as "a multiyear partnership announcement worthy of a The Bachelor-style finale."

[Click Raven](https://newsletter.clickraven.com/p/apple-google-won-t-act-gemini-gains-on-chatgpt-and-why-writing-for-llms-backfires-eventually) reported that Google Gemini now accounts for 21.5% of global AI chatbot web traffic, up from just 5% a year ago, while ChatGPT fell from 86% to 64.5%.

---

### 5. Anthropic vs. Pentagon: AI Safety Meets National Security
**Coverage:** [Semafor Technology](https://semafor.com/s/7USHsf6Yja)

[Semafor Technology](https://semafor.com/s/7USHsf6Yja) reported on escalating tensions between Anthropic and the Defense Department. Defense Secretary Pete Hegseth's comments about AI models that "won't allow you to fight wars" were specifically aimed at Anthropic.

> "From the military's point of view, Anthropic shouldn't attempt to make the final call on how, exactly, its models are used in warfare. Those decisions should be left to the military, like any other technology or weapon the Pentagon purchases."

A Defense Department official stated they would only deploy AI models "free from ideological constraints that limit lawful military applications."

The newsletter noted: "If companies don't want to sell their technology to the military, nobody is forcing them. But if they do sell to the military, they don't get to decide exactly how it is allowed to be used."

---

### 6. Open Source AI: The 2026 Decision Framework
**Coverage:** [Turing Post](https://www.turingpost.com/p/opensource1)

[Turing Post](https://www.turingpost.com/p/opensource1) launched a comprehensive series on mastering open-source AI in 2026, arguing that "openness is multi-layered" across code, weights, and training pipelines.

They identified distinct camps in the open-source landscape:
- **Efficiency camp:** DeepSeek, Moonshot AI, MiniMax
- **Ecosystem adoption camp:** Mistral AI, Meta (though Llama's future is "less certain")
- **Transparency camp:** Allen Institute for AI (OLMo)
- **Hybrid players:** OpenAI (with GPT-oss), NVIDIA

> "If you keep using 'open source' as a single binary label, you will make bad procurement decisions, bad architecture decisions, and occasionally a bad legal decision that you discover only after you have traction."

The series outlined six key decisions for Q1:
1. Where dependency is acceptable
2. Which tasks actually need frontier capability
3. Which layers of openness matter for what you're building
4. How provenance and regulation map to your customers
5. Whether fine-tuning is actually required
6. How much operational and safety responsibility you're willing to own

---

### 7. Chinese AI Labs Surge Forward
**Coverage:** [TheSequence](https://thesequence.substack.com/p/the-sequence-radar-791-the-eastern), [Turing Post](https://www.turingpost.com/p/opensource1)

[TheSequence](https://thesequence.substack.com/p/the-sequence-radar-791-the-eastern) described a "ridiculously high-velocity week" from Chinese AI labs:

**DeepSeek Engram:** A "conditional memory" module that offloads static knowledge to hash-map lookups, freeing neural networks for reasoning:

> "For years, we've been forcing Transformers to do two things at once: reason (dynamic computation) and memorize (static knowledge). It's inefficient. It's like using a supercomputer to remember that 'Paris' is the capital of 'France.' You don't need a neural net for that; you need a hash map."

**Baidu Ernie 5.0:** Hit #1 on LMArena for Chinese models and #8 globally, with a "unified auto-regressive native multimodal architecture."

**Zhipu AI GLM-Image:** Trained entirely on Huawei Ascend chips, proving "the localized hardware stack is maturing enough to support SOTA training runs."

---

### 8. Brex's AI Transformation Case Study
**Coverage:** [Latent.Space](https://www.latent.space/p/brex)

[Latent.Space](https://www.latent.space/p/brex) published a deep dive into how Brex accomplished "one of the most impressive turnarounds" through aggressive AI adoption, passing $500 million in annualized revenue.

Key innovations include:
- **AI Fluency Levels** (User, Aware, Proficient, Native) tied to performance reviews
- An **"AI-native interview process"** where every engineer, including managers, had to go through it
- A **"Quitters Welcome" recruiting initiative** targeting future founders
- Building their **agent platform on TypeScript and the Mastra framework**

> "Brex strongly encourages employees to use AI tools and software that will boost their performance... What Brex does instead is to procure a small number of seats of multiple solutions and give employees the ability to pick what they want to use."

Their COO "has pushed aggressively to help every member of the operations organization to start rethinking their role as people who are building prompts & evals to become more AI native."

An expensive initiative that didn't work: using RL for credit decisions & underwriting. After significant investment, "the end performance was actually inferior to a simple web research agent."

---

### 9. AI Infrastructure: Resources and Scale
**Coverage:** [SemiAnalysis](https://newsletter.semianalysis.com/p/from-tokens-to-burgers-a-water-footprint), [Semafor Technology](https://semafor.com/s/7USHsf6Yja), [TheSequence](https://thesequence.substack.com/p/the-sequence-radar-791-the-eastern)

[SemiAnalysis](https://newsletter.semianalysis.com/p/from-tokens-to-burgers-a-water-footprint) published a counterintuitive analysis comparing datacenter water usage to burger production:

> "One of the largest datacenters in the world only consumes as much water as 2.5 In-N-Out's... Given there's well over 400 In-N-Out's and hundreds of thousands of other burger joints the only rational argument is that people clamoring for slowing down datacenters because of water consumption are looking at the wrong problem."

[Semafor Technology](https://semafor.com/s/7USHsf6Yja) reported on Big Tech's scramble for resources:
- Amazon buying the first US-mined copper in over a decade
- Saudi Arabia's Maaden committing $110B in mining investment
- BlackRock and Microsoft raising $12.5B for AI infrastructure
- Taiwan's $250B investment deal with the US for semiconductor manufacturing

[TheSequence](https://thesequence.substack.com/p/the-sequence-radar-791-the-eastern) noted OpenAI's $10B deal with Cerebras and the $252M investment in Merge Labs for brain-computer interfaces:

> "If we want to truly merge with 'Software 3.0,' we need to bypass the keyboard. It's early days--stochastic, for sure--but it's the logical next step in the stack."

---

### 10. Healthcare AI Advances
**Coverage:** [AlphaSignal](content/tech-ai/alphasignal/2026-01-14-google-medgemma-4b-medical-ai-58-61-ct-accuracy-boost.md), [Turing Post](content/tech-ai/turing-post/2026-01-12-fod-135-what-it-means-when-ai-labs-step-into-healthcare.md)

[AlphaSignal](content/tech-ai/alphasignal/2026-01-14-google-medgemma-4b-medical-ai-58-61-ct-accuracy-boost.md) covered Google's MedGemma 1.5 release for medical image processing, reporting 58-61% CT accuracy improvements.

[Turing Post](content/tech-ai/turing-post/2026-01-12-fod-135-what-it-means-when-ai-labs-step-into-healthcare.md) analyzed the broader implications of AI labs entering healthcare:

> "What AI is being applied to is coordination... LLMs are not making medical judgments. They mainly help bring existing information together so it can be reviewed more easily."

OpenAI is extending its general assistant into healthcare, while Anthropic is taking a narrower approach focused on embedding Claude inside existing institutional workflows.

---

### 11. Thinking Machines Lab Drama

**Coverage:** [TheSequence](https://thesequence.substack.com/p/the-sequence-radar-791-the-eastern), [Casey Newton](https://www.platformer.news/r/5a69b93c)

Two cofounders of Mira Murati's Thinking Machines Lab -- Barret Zoph and Luke Metz -- left to return to OpenAI in a dramatic departure.

[TheSequence](https://thesequence.substack.com/p/the-sequence-radar-791-the-eastern) observed:

> "This highlights the extreme talent scarcity in our field. We are effectively watching a 'generative adversarial network' (GAN) play out between labs, fighting over the few hundred people on Earth who truly understand post-training. The 'bus factor' for AGI is terrifyingly low."

Zoph was reportedly "fired and rehired by OpenAI within 58 minutes."

---

### 12. The Future of Code and Software Development

**Coverage:** [Thorsten Ball](https://registerspill.thorstenball.com/p/joy-and-curiosity-70-d85)

[Thorsten Ball](https://registerspill.thorstenball.com/p/joy-and-curiosity-70-d85) reflected on broader implications for the software industry, linking to several thought-provoking pieces:

On Amp removing Tab completion: "The post also has a video in which Quinn and I go into a little bit more detail about why we're doing this and how the ratio of hand-written vs. generated code has flipped."

On giving agents a laboratory: "Think of your codebase as an application: can the agent use it? If not, what is it missing? These models will get better, it's time to prepare for the day when you no longer need to babysit them."

On the "Death of Software Development" essay: "While software development as we know it is dead, software engineering is alive and well. The role has transformed. Engineers are no longer writing software -- they're designing higher-order systems."

---

## Cross-Newsletter Patterns

**The "Why Not" vs "What If" Divide**
[Sam Schillace](https://sundaylettersfromsam.substack.com/p/the-hard-part-isnt-doing-the-work) articulated a framework that explains the polarized reactions to AI coding tools:

> "These two states manifest in either telling 'why not' stories - inventing reasons why the new thing is wrong, or 'what if' stories - what happens if it is. Ordinary changes don't get this behavior, you get a much broader spread of reactions. But big category changes get 'I love it'/ 'I hate it' and not much inbetween."

This pattern was visible across newsletters as writers documented their own conversions from skeptics to users.

**Geopolitical Dimension of AI Choices**
Both [Turing Post](https://www.turingpost.com/p/opensource1) and [TheSequence](https://thesequence.substack.com/p/the-sequence-radar-791-the-eastern) highlighted how model selection now carries geopolitical implications. Chinese labs are producing technically competitive work while facing regulatory restrictions in Western markets. [Semafor Technology](https://semafor.com/s/7USHsf6Yja) noted DeepSeek is prohibited on U.S. government devices.

**The Talent Wars Continue**
[TheSequence](https://thesequence.substack.com/p/the-sequence-radar-791-the-eastern) described AI talent wars as a "GAN" playing out between labs, while [Latent.Space](https://www.latent.space/p/brex) documented how Brex is positioning itself as a "founder school" with their "Quitters Welcome" initiative.

**Enterprise AI Adoption Maturity**
[Latent.Space](https://www.latent.space/p/brex)'s Brex coverage and [Semafor Technology](https://semafor.com/s/7USHsf6Yja)'s corporate risk survey both suggest enterprise AI adoption is maturing from experimentation to operational integration, with companies now developing formal frameworks for AI fluency and governance.

**Platform Governance Failures**
[Casey Newton](https://www.platformer.news/r/103cfadc), [404 Media](https://www.404media.co/r/fc646fb8), and [Click Raven](https://newsletter.clickraven.com/p/apple-google-won-t-act-gemini-gains-on-chatgpt-and-why-writing-for-llms-backfires-eventually) all converged on the same conclusion: Apple and Google's failure to enforce app store policies against X represents a dangerous precedent where political influence overrides safety.

---

## Surprising or Contrarian Takes

- [SemiAnalysis](https://newsletter.semianalysis.com/p/from-tokens-to-burgers-a-water-footprint) arguing datacenter water concerns are "looking at the wrong problem" with the burger comparison
- [Thorsten Ball](https://registerspill.thorstenball.com/p/joy-and-curiosity-70-d85) questioning whether codebases can be replaced by Markdown instruction files for agents
- [Sam Schillace](https://sundaylettersfromsam.substack.com/p/the-hard-part-isnt-doing-the-work) predicting we "might well wind up being more busy, not less" with AI tools
- [Latent.Space](https://www.latent.space/p/brex) revealing that Brex's RL approach for underwriting was "inferior to a simple web research agent"
- [TheSequence](https://thesequence.substack.com/p/the-sequence-radar-791-the-eastern) describing the "bus factor for AGI" as "terrifyingly low"

---

## Sources

- [Joy & Curiosity #70](https://registerspill.thorstenball.com/p/joy-and-curiosity-70-d85) -- Thorsten Ball
- [The hard part isn't doing the work now; it's choosing the work](https://sundaylettersfromsam.substack.com/p/the-hard-part-isnt-doing-the-work) -- Sam Schillace
- [Claude Code for Writers](https://www.platformer.news/r/5a69b93c) -- Casey Newton
- [Grok Gets Blocked](https://www.platformer.news/r/103cfadc) -- Casey Newton
- [Claude Code for the Rest of Us](https://www.whytryai.com/p/claude-code-beginner-guide) -- Daniel (Why Try AI)
- [Mastering Open Source AI in 2026](https://www.turingpost.com/p/opensource1) -- Turing Post
- [The Sequence Radar #791: The Eastern Surge](https://thesequence.substack.com/p/the-sequence-radar-791-the-eastern) -- TheSequence
- [Brex's AI Hail Mary](https://www.latent.space/p/brex) -- Latent.Space
- [The Future of War](https://semafor.com/s/7USHsf6Yja) -- Semafor Technology
- [Police Unmask Millions of Surveillance Targets](https://www.404media.co/r/0f53e8ae) -- 404 Media
- [ELITE: The Palantir App ICE Uses](https://www.404media.co/r/beead576) -- 404 Media
- [AI Porn Chatbots Isolate Us All](https://www.404media.co/r/fc646fb8) -- 404 Media
- [First Impressions of Claude Cowork](content/tech-ai/simon-willison-from-simon-willison-s-new/2026-01-13-first-impressions-of-claude-cowork-anthropic-s-general-agent.md) -- Simon Willison
- [Anthropic Cowork: Claude Agents for File Workflows](content/tech-ai/alphasignal/2026-01-13-anthropic-cowork-claude-agents-for-file-workflows-64k-likes.md) -- AlphaSignal
- [Google MedGemma](content/tech-ai/alphasignal/2026-01-14-google-medgemma-4b-medical-ai-58-61-ct-accuracy-boost.md) -- AlphaSignal
- [From Tokens to Burgers: Water Footprint](https://newsletter.semianalysis.com/p/from-tokens-to-burgers-a-water-footprint) -- SemiAnalysis
- [The Non-Technical PM's Guide to Cursor](https://www.lennysnewsletter.com/p/the-non-technical-pms-guide-to-building-with-cursor) -- Lenny's Newsletter
- [Read Our Biggest Stories](content/tech-ai/the-verge/2026-01-17-read-our-biggest-and-best-stories-of-the-week.md) -- The Verge
- [What It Means When AI Labs Step Into Healthcare](content/tech-ai/turing-post/2026-01-12-fod-135-what-it-means-when-ai-labs-step-into-healthcare.md) -- Turing Post
- [Grok Is Out of Control](https://newsletter.clickraven.com/p/apple-google-won-t-act-gemini-gains-on-chatgpt-and-why-writing-for-llms-backfires-eventually) -- Click Raven
- [Interconnects Beyond Copper](content/tech-ai/semianalysis/2026-01-13-interconnects-beyond-copper-1-000-cfets-sk-hynix-next-gen-na.md) -- SemiAnalysis
