---
id: 19be6f9f3acfb894
newsletter: alphasignal
newsletter_name: "AlphaSignal"
category: tech-ai
subject: "🧠 Anthropic publishes Claude Constitution framework + NVIDIA voice AI"
date: Thu, 22 Jan 2026 18:31:38 +0000
---

# 🧠 Anthropic publishes Claude Constitution framework + NVIDIA voice AI

**From:** AlphaSignal <news@alphasignal.ai>
**Date:** Thu, 22 Jan 2026 18:31:38 +0000

---

🚨 Anthropic publishes Claude constitution shaping model reasoning
NVIDIA ships open-source live voice model; Google links Stitch to MCP; Anthropic designs constrained puzzles.
Stay updated with today’s top AI news, papers, and repos.
Signup
|
Work With Us
|
Follow on X
Hey Will,
Your daily briefing is ready. You can finally take a break from the AI firehose.
Our algos spent the night splitting signal from noise and pulled the top news, models, papers, and repos.
Here’s the must-read:
Summary
Read time: 4 min 23 sec
Top News
▸ Anthropic publishes a new framework defining
Claude’s behavior and reasoning
Top Repo
▸ Remotion releases open-source Claude Code skill to
build videos using code
Top Repo
▸ NVIDIA ships an open-source model for live
voice interaction with personas
Signals
▸ Google connects
Stitch to MCP
, letting agents read and generate UI
▸ Anthropic creates
unusual constrained puzzles
to stay ahead of Claude
▸ Google explains how internal conversations
improve reasoning accuracy
▸ Runway adds
Image-to-Video for Gen-4.5
enabling coherent video generation
▸ Google rolls out
SAT practice exams
in Gemini to support student readiness
Today's Author
Lior Alexander. Founder of AlphaSignal and former ML Engineer.
Previously built ML systems at Iguazio, Guesty, Enphase, Mila.
Top News
Anthropic unveils a detailed behavior spec that governs Claude’s training signals and inference decisions
6,725 Likes
Claude follows many instructions, but rules alone do not explain how to choose when they conflict. Earlier versions relied on short principle lists, which worked in narrow cases but broke down in edge cases. Anthropic now publishes a new constitution for
Claude
to fix that gap.
The constitution reads like a long design spec written for the model itself. Instead of only saying what to do, it explains why certain priorities exist and how to reason across tradeoffs.
Anthropic uses it directly during training, not as documentation. Claude reads it, generates synthetic examples from it, and uses it to rank its own answers.
This matters because it turns values into executable input rather than static policy. Anyone building or studying models can now inspect and reuse that input.
Key features
Narrative constitution replaces standalone rules with explicit reasoning and priority explanations
Used during training for synthetic data generation and response ranking
Defines a fixed instruction priority order applied during inference
Released under Creative Commons
CC0 1.0
for unrestricted reuse
READ CONSTITUTION
Top Repo
Remotion releases an open-source Claude Code skill that generates fully editable React-based videos locally
15,632 Likes
Traditional video tools hide logic and break reproducibility. Remotion exposes everything as code, and the agent skill removes manual setup by letting an AI generate and iterate on that code.
Remotion starts as a developer-first idea: treat video like software. You describe frames with React components, control motion with JavaScript, and render deterministically with Node.js instead of editing timelines by hand.
That approach now extends into agent workflows with a new skill that lets Claude Code write, edit, and render videos directly from prompts.
How it works
React components define scenes, layouts, and reusable visual structure
JavaScript controls timing, animation math, and data-driven visuals
Claude Code iterates on code and fixes render-time errors
Local MP4 rendering produces deterministic, reproducible outputs
Accessibility and licensing
Free for individuals, non-profits, and small for-profit teams up to three employees
CODE A VIDEO
Top Repo
NVIDIA ships PersonaPlex-7B, an open model for simultaneous listening and speaking with persona control
7,143 Likes
Conversational voice systems usually force a pause-and-reply rhythm. Audio flows through ASR, then an LLM, then TTS, which adds delay and blocks interruptions. PersonaPlex-7B changes this by listening and speaking inside one model at the same time, while still letting you define voice and role.
PersonaPlex is an open-source 7B-parameter model built on the Moshi architecture. It works directly on audio tokens instead of passing text between components. You describe behavior with a text prompt and provide a short voice sample to set vocal style. The model keeps both consistent across the conversation.
Key features
Full-duplex audio that supports interruptions, pauses, and backchannels during user speech
Zero-shot persona control using text prompts and voice embeddings
Single-model design with Mimi audio codec and dual transformer streams
Continuous 24 kHz audio generation with low response latency
Training and results
Trained on 1,217 hours of real Fisher conversations plus 2,250 hours synthetic dialogues
Outperforms Moshi and Gemini Live on FullDuplexBench conversational dynamics
Shows higher task adherence on ServiceDuplexBench customer service scenarios
Accessibility
Code released under the MIT License for unrestricted development use
Model weights released under the NVIDIA Open Model License
Available on Hugging Face and GitHub
RUN LIVE AUDIO
Signals
1
Google launches Stitch MCP server giving coding agents direct access to generate, inspect, and modify UI designs
2,013 Likes
2
Anthropic shows how constrained, unusual puzzles help separate human reasoning from Claude’s optimization abilities
1,357 Likes
3
Google integrates Gemini directly into Chrome with multi-tab context, AI Mode, and safer browsing
1,062 Likes
4
Runway expands Gen-4.5 with Image-to-Video, improving realism, consistency, and multi-step scene control
2,323 Likes
5
Google introduces full-length, no-cost SAT practice exams in Gemini with instant, detailed feedback
19,428 Likes
At Alpha Signal, our mission is to build a sharp, engaged community focused on AI, machine learning, and cutting-edge language models, helping over 200,000 developers stay informed and ahead. We’re passionate about curating the best in AI, from top research and trending technical blogs to expert insights and tailored job opportunities. We keep you connected to the breakthroughs and discussions that matter, so you can stay in the loop without endless searching. We also work closely with partners who value the future of AI, including employers and advertisers who want to reach an audience as passionate about AI as we are.
Our partnerships are based on shared values of ethics, responsibility, and a commitment to building a better world through technology.Privacy is a priority at Alpha Signal. Our Privacy Policy clearly explains how we collect, store, and use your personal and non-personal information. By using our website, you accept these terms, which you can review on our website. This policy applies across all Alpha Signal pages, outlining your rights and how to contact us if you want to adjust the use of your information. We’re based in the United States. By using our site, you agree to be governed by U.S. laws.
Looking to promote your company, product, service, or event to 250,000+ AI developers?
WORK WITH US
How was today’s email?
Awesome
Decent
Not Great
unsubscribe_me(): return True
{"AlphaSignal": "214 Barton Springs Rd, Austin, USA"}

Stop receiving emails here: https://app.alphasignal.ai/unsubscribe/u/K1bzInIJROI8zvHA?cid=05552e8f400b5d69
