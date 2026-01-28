---
id: 19c05e3e565596ca
newsletter: the-pragmatic-engineer
newsletter_name: "The Pragmatic Engineer"
category: business
subject: "The creator of Clawd: \"I ship code I don't read\""
date: Wed, 28 Jan 2026 18:28:31 +0000
source_url: "https://newsletter.pragmaticengineer.com/p/the-creator-of-clawd-i-ship-code"
---

# The creator of Clawd: "I ship code I don't read"

**From:** The Pragmatic Engineer <pragmaticengineer@substack.com>
**Date:** Wed, 28 Jan 2026 18:28:31 +0000
**Source:** [View original](https://newsletter.pragmaticengineer.com/p/the-creator-of-clawd-i-ship-code)

---

View this post on the web at https://newsletter.pragmaticengineer.com/p/the-creator-of-clawd-i-ship-code

Stream the latest episode
Listen and watch now on YouTube , Spotify , and Apple . See the episode transcript at the top of this page, and timestamps for the episode at the bottom.
Brought to You by
• Statsig  — ⁠The unified platform for flags, analytics, experiments, and more. There are a few more seats left for The Pragmatic Summit  I’m hosting with Statsig, on 11 February, in San Francisco. Join me on this one-day event: speakers include folks like Laura Tacho, Simon Willison, Chip Huyen, Martin Fowler, and engineering teams from Cursor, Linear Ramp, and many more. Check out the agenda  and apply here  — while we still have space!
• Sonar  – The makers of SonarQube, the industry standard for automated code review. Generative AI promises high-speed “vibing,” but it’s created a massive verification bottleneck. Sonar solves this by providing independent verification for all code. Join me online  at the Sonar Summit, on 3rd March. We will share practical strategies for the AI era. Register here for free. 
• WorkOS  – Everything you need to make your app enterprise ready. Join me in-person , on 9 February in San Francisco, for a fireside chat at the WorkOS HQ on the WorkOS AI Nigth with The Pragmatic Engineer. It’s free to register , but seats are limited.
In this episode
Peter Steinberger ships more code than I’ve seen a single person ship: in January, he made more than 6,600 commits alone (!!). As he puts it: 
“From the commits, it might appear like it’s a company. But it’s not. This is one dude [me] sitting at home having fun.”
How does he do it?
Peter Steinberger  is the creator of Clawdbot  (as of yesterday: renamed to Moltbot ) and founder of PSPDFKit . Moltbot – a work-in-progress AI agent that shows what the future of Siri could be like – is currently the hottest AI project in the tech industry, with more searches  on Google than Claude Code or Codex. I sat down with Peter in London to talk about what building software looks like when you go all-in with AI tools like Claude and Codex.
Peter’s background is fascinating. He built and scaled PSPDFKit into a global developer tools business. Then, after a three-year break, he returned to building. This time, LLMs and AI agents sit at the center of his workflow. We discuss what changes when one person can operate like a team and why closing the loop between code, tests, and feedback becomes a prerequisite for working effectively with AI.
We also go into how engineering judgment shifts with AI, how testing and planning evolve when agents are involved, and which skills and habits are needed to work effectively. This is a grounded conversation about real workflows and real tradeoffs, and about designing systems that can test and improve themselves.
How Clawd Molt bot went viral the last week
Last week, usage of Peter’s hobby project, Clawd — as of yesterday, Molt — has skyrocketed. It is the fastest-ever growing repository on GitHub, by the number of stars. Here’s how it compares to the also very popular Tailwind CSS in this dimension:
Clawdbot has also been more searched on Google than Claude Code or Codex — which is truly remarkable: 
I sat down with Peter in London two weeks ago, when Clawd’s popularity was just starting to take off: the project had 2,000 GitHub stars, and a core group of people were enthusiastic, but the project had not yet gone as mainstream. Thanks to this, we got to talk to Peter’s varied background that all led to Molt bot, and how he threw away traditional software engineering approaches for building this project.
Interesting learnings from thow Peter builds software
Ten learnings I noted from our conversation:
Managing a dev team teaches you to let go of perfectionism: a skill important when working with AI agents. Running PSPDFKit with 70+ people forced Peter to accept that code wouldn't always match his exact preferences. This makes him more efficient when working with agents today.
Close the loop: AI agents must be able to verify their own work. Peter designs systems so agents can compile, lint, execute, and validate output themselves.
Pull requests are dead, long live “promot requests.” Peter now views PRs as “prompt requests” and is more interested in seeing the prompts that generated code than the code itself. Interestingly, this is exactly what my brother, Balint Orosz said when he explained that they reject almost all external pull requests  from Craft Agents, but take the core idea and use them as prompts later.
Code reviews are dead for this workflow—architecture discussions replace them. Even in Discord, he doesn’t talk code with his core team: they only talk about architecture and big decisions.
Runs 5-10 agents and stays in the “flow” state. Peter queues up multiple agents working on different features simultaneously. 
Spend a lot of time planning out the work the agent will do, and prefers using Codex. Peter spent a surprisingly long time going back-and-forth with an agent to come up with a solid plan. He challenges the agent, tweaks it, pushed back. When he is satisfied with the plan, he kicks it off, and moves on to the next one. He likes using Codex because Codex goes off and does long-running tasks: Claude Code comes back for clarifications, which he finds distracting — given he fleshed out a plan already.
Under-prompt intentionally to discover unexpected solutions. Peter sometimes gives vague prompts to let the AI explore directions he hadn't considered. 
Local CI beats remote CI for agent-driven development. Peter runs tests locally through his agents rather than waiting for remote CI pipelines. He does this because he doesn’t want to wait an extra 10-ish minutes for a remote CI to run, when his agents can run tests locally.
Most code is boring data transformation—focus energy on system design instead. Peter argues that the majority of application code is just “massaging data in different forms” and doesn’t warrant obsessive attention.
Engineers who thrive with AI care about outcomes over implementation details. Peter observes engineers who love to solve algorithmic puzzles to struggling going “AI-native” like he has. People who love shipping products, on the other hand, excel.
I don’t think software engineering is dead with AI: in fact, quite the opposite. Peter strikes me as a software architect who keeps the high-level structure of his project in his head, deeply cares about architecture, tech debt, extensibility, modularity, and so on. One of the reasons Molt bot is so successful is because it is so extensible: and Peter spends a good chunk of his energy making it both easy to add new capabilities to the bot, and also acting as the “benevolent dictator” of the project, ensuring the project follows the direction and style that he has in mind.
As always, take Peter’s context into account as you consider what works for him: Peter is building an experimental project, which is heavily work-in-progress, and “move fast and break things” is the only way such a project will succeed. Even so, it is remarkable how fast Peter is moving, and how he’s built a tool that found demand that took even major AI labs by surprise!
The Pragmatic Engineer deepdives relevant for this episode
Inside a five-year-old startup’s rapid AI makeover 
When AI writes almost all code, what happens to software engineering? 
Why it’s so dramatic that “writing code by hand is dead” 
AI Engineering in the real world 
The AI Engineering stack 
Timestamps
(00:00 ) Intro
(01:07 ) How Peter got into tech
(08:27 ) PSPDFKit
(19:14 ) PSPDFKit’s tech stack and culture
(22:33 ) Enterprise pricing
(29:42 ) Burnout
(34:54 ) Peter finding his spark again
(43:02 ) Peter’s workflow
(49:10 ) Managing agents
(54:08 ) Agentic engineering
(59:01 ) Testing and debugging
(1:03:49 ) Why devs struggle with LLM coding
(1:07:20 ) How PSPDFkit would look if built today
(1:11:10 ) How planning has changed with AI
(1:21:14 ) Building Clawdbot (now: Moltbot)
(1:34:22 ) AI’s impact on large companies
(1:38:38 ) “I don’t care about CI”
(1:40:01 ) Peter’s process for new features
(1:44:48 ) Advice for new grads
(1:50:18 ) Rapid fire round
References
Where to find Peter Steinberger:
• X: https://x.com/steipete 
• LinkedIn: https://www.linkedin.com/in/steipete 
• Website: https://steipete.me 
• Moltbot: https://www.molt.bot 
Mentions during the episode:
• Moltbot (formerly Clawdbot): https://clawd.bot 
• .Net: https://dotnet.microsoft.com 
• Worldwide Developers Conference: https://en.wikipedia.org/wiki/Worldwide_Developers_Conference 
• PSPDFKit: Powering digital transformation since 2011: https://www.nutrient.io/company/about/pspdfkit 
• Hiring a distributed team: https://www.nutrient.io/blog/hiring-a-distributed-team 
• Claude Code: https://code.claude.com 
• Shipping at Inference-Speed: https://steipete.me/posts/2025/shipping-at-inference-speed 
• Cursor: https://cursor.com 
• Gemini 2.5: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/models/gemini/2-5-pro 
• Claude Opus 4.5: https://www.anthropic.com/news/claude-opus-4-5 
• Codex: https://openai.com/codex 
• Antigravity: https://antigravity.google 
• TDD, AI agents and coding with Kent Beck: https://newsletter.pragmaticengineer.com/p/tdd-ai-agents-and-coding-with-kent 
• AI tools for software engineers, but without the hype – with Simon Willison (co-creator of Django): https://newsletter.pragmaticengineer.com/p/ai-tools-for-software-engineers-simon-willison 
• Ralph Wiggum Claude Code plugin: https://github.com/anthropics/claude-code/tree/main/plugins/ralph-wiggum 
• Amantus Machina: https://www.amantus.ai 
• Dr. Who: https://en.wikipedia.org/wiki/Doctor_Who 
• McPorter: https://github.com/steipete/mcporter 
• Black Mirror: “Plaything”: https://www.imdb.com/title/tt31215636 
• Vibe Meter: Monitor Your AI Costs: https://steipete.me/posts/2025/vibe-meter-monitor-your-ai-costs 
• Aura Frames: https://auraframes.com 
• When AI writes almost all code, what happens to software engineering?: https://newsletter.pragmaticengineer.com/p/when-ai-writes-almost-all-code-what 
• Software engineering with LLMs in 2025: reality check: https://newsletter.pragmaticengineer.com/p/software-engineering-with-llms-in-2025 
—
Production and marketing by Pen Name .

Unsubscribe https://substack.com/redirect/2/eyJlIjoiaHR0cHM6Ly9uZXdzbGV0dGVyLnByYWdtYXRpY2VuZ2luZWVyLmNvbS9hY3Rpb24vZGlzYWJsZV9lbWFpbD90b2tlbj1leUoxYzJWeVgybGtJam95TlRNNE1UUXlMQ0p3YjNOMFgybGtJam94T0RVNU1qSTVPRE1zSW1saGRDSTZNVGMyT1RZeU5UTTBOaXdpWlhod0lqb3hPREF4TVRZeE16UTJMQ0pwYzNNaU9pSndkV0l0TkRVNE56QTVJaXdpYzNWaUlqb2laR2x6WVdKc1pWOWxiV0ZwYkNKOS4wenFWSkV4ZXFJUF9USVFqd281S1NpS0xKaGxOdGJpZXpaWDZpZ0lrR0M4IiwicCI6MTg1OTIyOTgzLCJzIjo0NTg3MDksImYiOnRydWUsInUiOjI1MzgxNDIsImlhdCI6MTc2OTYyNTM0NiwiZXhwIjoyMDg1MjAxMzQ2LCJpc3MiOiJwdWItMCIsInN1YiI6ImxpbmstcmVkaXJlY3QifQ.-0NYNUIS7tVjA3FnQzF0KznABiwWanPlVh0lOpwPkmk?
