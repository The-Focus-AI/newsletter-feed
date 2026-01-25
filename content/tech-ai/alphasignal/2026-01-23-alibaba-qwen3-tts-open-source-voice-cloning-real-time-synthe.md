---
id: 19bec28f0d273f36
newsletter: alphasignal
newsletter_name: "AlphaSignal"
category: tech-ai
subject: "🎙️ Alibaba Qwen3-TTS: Open-source voice cloning + real-time synthesis"
date: Fri, 23 Jan 2026 18:41:04 +0000
---

# 🎙️ Alibaba Qwen3-TTS: Open-source voice cloning + real-time synthesis

**From:** AlphaSignal <news@alphasignal.ai>
**Date:** Fri, 23 Jan 2026 18:41:04 +0000

---

🚨 Alibaba open-sources Qwen3-TTS with voice design and cloning
Google advances video-to-4D models, Cursor adds subagents, GitHub's Copilot SDK, Anthropic upgrades coding workflows.
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
Read time: 4 min 27 sec
Top News
▸ Alibaba
open-sources Qwen3-TTS
enabling real-time voice creation, and cloning
ElevenLabs
▸ Learn architectural changes that
cut RAG latency
by over 50%
Top News
▸ Anthropic replaces Todos with durable Tasks for
multi-session coding
Top Paper
▸ Google introduces AI model that recovers full
4D scene geometry from video
Signals
▸ Cursor adds
subagent parallelism
and built-in image generation in its IDE
▸ Google expands Personal Intelligence to AI Mode for
deeply tailored search
▸ Runway confirms over 90% of participants
misidentify Gen-4.5 videos as real
▸ GitHub launches
Copilot SDK
to embed agentic workflows in any app
▸ Anthropic upgrades its open-source
alignment audit tool
with realism checks
Today's Author
Lior Alexander. Founder of AlphaSignal and former ML Engineer.
Previously built ML systems at Iguazio, Guesty, Enphase, Mila.
Top News
Alibaba ships open-source Qwen3-TTS enabling real-time multilingual speech, voice design, and quick cloning
3,317 Likes
Qwen just open-sources
Qwen3-TTS
, a full text-to-speech model family that handles voice design, voice cloning, and instruction-controlled speech generation. Until now, these capabilities usually lived behind closed APIs.
Qwen releases the full stack, models, tokenizer, code, and paper, so you can run, inspect, and fine-tune everything yourself.
At the core sits a
12 Hz speech tokenizer
, which turns audio into compact discrete tokens. Lower frequency means fewer tokens per second, which cuts latency and compute while preserving speaker identity and acoustic detail.
On top of that tokenizer, Qwen builds a discrete multi-codebook language-model architecture, not an LM-plus-vocoder pipeline, so the model predicts speech directly.
You can pick a model based on what you need:
VoiceDesign
creates new voices from natural-language descriptions
CustomVoice
applies instruction control over predefined or fine-tuned timbres
Base
supports
3-second
voice cloning and full fine-tuning
Key technical features:
Five models
at
0.6B and 1.7B parameters
Streaming synthesis
with first audio after one character, ~
97 ms latency
10-language support
across all checkpoints
Reported results:
1.835% average WER
and
0.789 speaker similarity
in multilingual cloning
PESQ 3.21 / 3.68
,
STOI 0.96
,
UTMOS 4.16
for tokenizer reconstruction
You use it by loading the open weights, running inference locally or via the Qwen API, and fine-tuning the Base model when you need a custom voice.
TRY QWEN3-TTS
Presented by ElevenLabs
Mastering Low-Latency Architecture in AI Voice
Milliseconds make the difference between magic and frustration.
This new
ElevenLabs guide
breaks down how low-latency architecture shapes real-time conversational AI performance.
Learn how top engineering teams are achieving humanlike responsiveness through optimized inference pipelines, streaming synthesis, and speech orchestration.
DOWNLOAD THE GUIDE
partner with us
Top News
Anthropic replaces Todos with disk-backed Tasks that maintain shared state for agents and workflows
3,982 Likes
Claude no longer struggles to remember small steps, but larger projects break when work spans sessions, agents, and context windows. Tasks fix that by moving project state out of prompts and into durable, shared files.
Opus 4.5
handles short plans internally and runs autonomously for longer. That makes Todos redundant for small work and insufficient for large work. Anthropic responds by introducing Tasks as a coordination layer for multi-step projects.
Tasks act like a lightweight project graph. Each task records state and dependencies, meaning which task blocks another. Claude reads this metadata to decide what to do next.
Key features and behavior
Persistent task state stored under ~/.claude/tasks, independent of prompt context.
Explicit dependencies encode ordering and blockers between tasks.
Live synchronization broadcasts task updates across parallel sessions.
Subagents coordinate through shared Tasks instead of prompt handoffs.
How you use it
Ask Claude to create Tasks directly when starting complex work.
Share a task list by launching with CLAUDE_CODE_TASK_LIST_ID=name.
Read or edit task files to build custom tooling or automation.
TRY TASKS NOW
Top Paper
Google DeepMind releases D4RT, a unified Transformer that reconstructs fast 4D geometry and motion from video
2,629 Likes
Google DeepMind introduces
D4RT
, a model built to answer a hard perception problem: how do you recover a moving 3D world from flat video?
Humans do this automatically. Machines usually need several models stitched together, each slow and fragile. D4RT replaces that pipeline with a single model that understands
space and time together
and runs far faster than earlier systems.
At its core, D4RT treats video as a question-answering problem. The model first compresses the entire video into a shared internal map of geometry and motion.
A lightweight decoder then answers simple questions like:
where is this pixel in 3D at time t, from camera view c?
Each question runs independently, which explains the speed.
Key capabilities
Tracks 3D point trajectories across time, including occlusions and frame exits
Generates dense 3D point clouds by fixing time and camera viewpoint
Estimates camera motion by aligning 3D snapshots from different views
Performance results
Runs
18×–300× faster
than prior 4D reconstruction methods
Processes
1-minute video in ~5 seconds
on a single TPU
Achieves top accuracy on MPI Sintel, Aria Digital Twin, and RE10k benchmarks
READ THE PAPER
Signals
1
Cursor now supports parallel subagents and native image generation directly inside active coding sessions
2,243 Likes
2
Google enhances its Search with Personal Intelligence for context-aware recommendations
1,157 Likes
3
Runway shows Gen-4.5 image-to-video realism exceeds human detection accuracy across content categories
2,213 Likes
4
GitHub introduces Copilot SDK so apps can use the same agent runtime as Copilot CLI
1,198 Likes
5
Anthropic updates Petri, its open-source audit system with stronger realism and improved model evaluation
1,036 Likes
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

Stop receiving emails here: https://app.alphasignal.ai/unsubscribe/u/K1bzInIJROI8zvHA?cid=3abe303dcc011e28
