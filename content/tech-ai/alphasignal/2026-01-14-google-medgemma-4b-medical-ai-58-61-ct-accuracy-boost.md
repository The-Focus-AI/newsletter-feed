---
id: 19bbdd413ec47e0c
newsletter: alphasignal
newsletter_name: "AlphaSignal"
category: tech-ai
subject: "💊 Google MedGemma 4B Medical AI: 58%→61% CT Accuracy Boost"
date: Wed, 14 Jan 2026 18:45:50 +0000
---

# 💊 Google MedGemma 4B Medical AI: 58%→61% CT Accuracy Boost

**From:** AlphaSignal <news@alphasignal.ai>
**Date:** Wed, 14 Jan 2026 18:45:50 +0000

---

💊 Google Releases Open Medical AI with On-Device 4B Model
On Open coding agents, NVIDIA's inference-time learning, Google upgrades Veo 3, Anthropi's Labs, Meta scales AI compute.
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
▸ Google ships open-source offline
medical AI for CT
, MRI, and clinical data
Shadeform AI
▸ NVIDIA Brev
gains 3.5x GPU capacity
via Shadeform compute network
Top Repo
▸ OpenCode unveils fully
open coding agent
for terminal, desktop, and IDEs
Agent Field AI
▸ Replace DAG workflows with AI backends for
large-scale agent orchestration
Top Paper
▸ NVIDIA introduces a new method letting
LLMs learn during inference
efficiently
Signals
▸ Google's Antigravity adds
Agent Skills
for reusable agent task workflows
▸ Z.ai unveils an
open-source image
model for detailed visuals
▸ Google upgrades
Veo 3 with vertical formats
and improved realism
▸ Anthropic builds Labs to
test emerging model
abilities and shape future products
▸ Meta introduces Meta Compute to scale datacenters and
energy capacity for AI
Today's Author
Lior Alexander. Founder of AlphaSignal and former ML Engineer.
Previously built ML systems at Iguazio, Guesty, Enphase, Mila.
Top News
Google releases MedGemma 1.5 and MedASR as open medical AI models supporting CT, MRI, and speech
6,724 Likes
Medical data spans scans, reports, and dictation, but most models still focus on single images or plain text. The key update is a
4B multimodal model that runs offline and supports 3D CT and MRI volumes
.
The core problem is mismatch between real clinical data and model inputs. MedGemma 1.5 addresses this by extending a medical foundation model to high-dimensional imaging while keeping compute requirements low.
MedASR fills the speech gap by converting medical dictation into structured text that pairs with MedGemma for reasoning.
Core features
3D imaging support
for CT, MRI, and whole-slide histopathology
Offline-capable 4B model
plus 27B variant for text-heavy workloads
Medical document extraction
from lab reports and EHR-style text
Medical ASR
tuned for clinical dictation and spoken prompts
Reported results
CT accuracy improves
58% → 61%
, MRI accuracy
51% → 65%
Histopathology ROUGE-L increases
0.02 → 0.49
Chest X-ray anatomy IoU improves
3% → 38%
Medical dictation WER drops
12.5% → 5.2%
versus Whisper
Availability
Available now via
Hugging Face or Vertex AI
GET THE MODELS
Presented by Shadeform AI
NVIDIA leverages Shadeform to increase GPU capacity on the Brev platform
NVIDIA and
Shadeform
have announced a new collaboration to greatly increase GPU capacity for NVIDIA’s AI developer platform,
NVIDIA Brev
.
The collaboration integrates Shadeform’s unified API for compute into NVIDIA Brev, connecting the platform to GPU infrastructure from Shadeform’s network of over 20 vetted cloud providers.
With Shadeform acting as a unified infrastructure layer, NVIDIA Brev now offers:
Over 3.5x more capacity for the most in-demand GPUs
150+ new GPU offerings, including the new NVIDIA Blackwell Ultra B300
Significantly expanded region coverage across North America, Europe, Asia and Australia
READ ANNOUNCEMENT
partner with us
Top Repo
OpenCode debuts a fully open-source coding agent connecting to over 75 AI model providers
68,427 Stars
OpenCode starts from a familiar frustration: AI coding tools feel powerful, but each one locks you into a specific editor, workflow, or model provider.
Teams juggle terminals, IDE plugins, desktop apps, and multiple subscriptions, while context and tooling fragment across tools. OpenCode approaches this problem from the agent layer, not the model layer.
The key idea is simple. Run one local coding agent that works everywhere and talks to any model you choose. OpenCode executes locally, manages context itself, and delegates intelligence to external models only when needed.
Language Server Protocol support gives the agent structured access to code symbols and errors, not just raw text. Multi-session support lets you run parallel agents on the same repository without shared state conflicts.
Core features
Local agent process with filesystem access and isolated session context
Automatic
LSP
loading for language-aware code navigation and diagnostics
Multi-session agents running in parallel on a single project
Model-agnostic routing across
75+ providers
, including local models
How to use
Install once via a single shell command
Run in terminal, desktop app, or IDE extension with identical behavior
Connect free models or existing Claude, ChatGPT, or other provider accounts
RUN IT LOCAL
Presented by Agent Field AI
Building AI Backends for Multi-Agent Systems at Scale
Workflows chain prompts. AI backends orchestrate intelligence. 1,000 agents with identity, coordination, and audit trails need infrastructure, not pipelines.
AgentField:
Open-source Kubernetes-style control plane for production AI. Learn how we scaled deep research to thousands of agents, then build your own.
Learn more here ↗
Top Paper
NVIDIA publishes TTT-E2E, a training method allowing LLMs to train on incoming context while maintaining constant runtime
39932 Likes
Large language models now ship with huge context windows, yet they still fail to learn from what they read.
NVIDIA addresses this gap with
End-to-End Test-Time Training (TTT-E2E)
, a method that lets LLMs keep learning during inference. The most striking result is constant inference latency at very long context lengths while matching full-attention loss.
The problem starts with how memory works in today’s models. Full-attention Transformers retain every token but slow down as context grows. Constant-time alternatives run fast but forget useful information.
NVIDIA’s insight is to treat context as training data. The model updates its own weights through next-token prediction while reading, so it compresses context into parameters instead of storing tokens.
How it works
Runs gradient updates at inference using next-token prediction on the current context
Uses meta-learning during training to prepare weights for test-time updates
Updates weights continuously as new tokens arrive
Results
Constant per-token latency regardless of context length
2.7× faster at 128K tokens
and
35× faster at 2M tokens
on NVIDIA H100
Uses a
3B-parameter model trained on 164B tokens
with loss matching full attention
READ THE PAPER
Signals
1
Google Antigravity brings Agent Skills, a standard letting agents follow custom instructions across tasks
3,957 Likes
2
Z.ai presents GLM-Image, an open-source model built for precise semantics and complex visual tasks
1,357 Likes
3
Google updates Veo 3 with 4K output, vertical formats, and stronger multi-shot consistency
1,692 Likes
4
Anthropic expands Labs to prototype new Claude capabilities and advance product experimentation
2,674 Likes
5
Meta introduces Meta Compute to scale datacenters and energy capacity for AI
2,253 Likes
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

Stop receiving emails here: https://app.alphasignal.ai/unsubscribe/u/K1bzInIJROI8zvHA?cid=dea607b73011c7ad
