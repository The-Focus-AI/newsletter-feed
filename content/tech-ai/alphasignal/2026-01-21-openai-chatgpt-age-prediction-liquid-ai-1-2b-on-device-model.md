---
id: 19be1dda717d27dc
newsletter: alphasignal
newsletter_name: "AlphaSignal"
category: tech-ai
subject: "🔞 OpenAI ChatGPT Age Prediction, Liquid AI 1.2B On-Device Model"
date: Wed, 21 Jan 2026 18:42:38 +0000
---

# 🔞 OpenAI ChatGPT Age Prediction, Liquid AI 1.2B On-Device Model

**From:** AlphaSignal <news@alphasignal.ai>
**Date:** Wed, 21 Jan 2026 18:42:38 +0000

---

🔞 OpenAI launches age prediction layer in ChatGPT
Liquid AI ships open 1.2B on-device model, Nous speeds MoE, Claude Code in VS Code, Gemini in 23 languages
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
▸ OpenAI deploys continuous age prediction to adjust
ChatGPT safety behavior
QA.tech
▸ Replace brittle QA scripts with
adaptive AI testing agents
today
Top News
▸ Liquid AI releases open-source 1.2B reasoning model running
fully on-device
Top Paper
▸ Nous Research
improves MoE throughput
with kernel, CPU, and routing fixes
Signals
▸ Anthropic makes
Claude Code VS Code
extension fully available to all
▸ Google broadens Gemini access with
23 added languages
across regions
▸ Anthropic partners with Teach For All to
train educators
in global AI use
▸ Lightricks launches
audio-driven video generation
that builds visuals from sound
▸ Anthropic adds Apple Health and Android connectors for
Claude’s health analysis
Today's Author
Lior Alexander. Founder of AlphaSignal and former ML Engineer.
Previously built ML systems at Iguazio, Guesty, Enphase, Mila.
Top News
OpenAI rolls out continuous age prediction that switches runtime behavior without relying on signup age
4,538 Likes
Instead of relying only on signup data, ChatGPT now estimates whether an account likely belongs to someone under 18 and switches runtime behavior automatically. The key shift is that this decision updates over time as usage changes, not at a single moment.
Self-reported age stays static, while real usage patterns do not. Age prediction adds a classifier layer that evaluates account history and behavior signals and selects a stricter runtime configuration when needed.
This matters because it lets the same underlying models serve different policy regimes without duplication.
How it works
Uses account age, activity timing, usage patterns, and stated age as inputs
Runs continuously and updates classification as new signals appear
Defaults to a stricter configuration when confidence stays low
What changes at runtime
Keeps the same base models and weights
Applies different prompt handling and output filtering rules
Disables entire interaction classes such as sexual or violent role play
How you interact with it
View account status in Settings > Account
Verify age through Persona if misclassified
Restore full access after confirmation, without changing models or tools
VERIFY AGE
Presented by QA.tech
Keep QA from Slowing Down AI Development
Your team ships faster with AI, but testing can’t keep up. Scripted QA breaks as outputs change, and manual checks become the bottleneck.
QA.tech replaces brittle test suites with adaptive AI testing agents. Teams like Pricer and Upsales already save hundreds of hours each month, matching testing speed to development speed and catching regressions before production.
See how you can:
Match testing velocity to AI-powered coding velocity
Eliminate flaky scripts with self-healing, adaptive tests
Reduce manual QA effort while increasing coverage and reliability
The first 20 Alpha Signal teams entering a PoC can get up to $20,000 in credits.
START POC NOW
partner with us
Top News
Liquid AI debuts an open-source 1.2B reasoning model running fully offline with sub-1 GB memory use
2,137 Likes
Two years ago, strong reasoning models required servers. Liquid AI now runs that workload on a phone. The company releases LFM2.5-1.2B-Thinking, a 1.2B parameter model that fits in ~900 MB and runs fully offline, which marks the most notable shift in this release.
Small models struggle with multi-step reasoning. Liquid AI trains this model to reason first and answer second. “Thinking traces” mean the model works through steps internally, then outputs a short answer. That design reduces token count and keeps latency low on-device.
What the model does
Targets math, tool use, and instruction-following rather than chat or creative writing
Uses internal reasoning traces without exposing long chains of thought
Prioritizes concise outputs to control memory and decode cost
Measured results
MATH-500:
88, up from 63 in the instruct variant
Multi-IF:
69, up from 61
BFCLv3 tool use:
57, up from 49
Matches or exceeds Qwen3-1.7B with 40% fewer parameters
How you use it
Run locally with llama.cpp, MLX, vLLM, or ONNX Runtime
Fine-tune with TRL or Unsloth on supported hardware
Deploy on Apple, AMD, Qualcomm, or NVIDIA CPUs and NPUs
RUN ON-DEVICE
Top Paper
Nous Research documents kernel, CPU, and routing fixes enabling high-throughput MoE expert parallelism
1,036 Likes
Nous Research publishes a field report that shows how it scales
Mixture-of-Experts (MoE)
training with
DeepEP
inside a modified
Torchtitan
stack on NVIDIA B200 GPUs.
MoE routes tokens to specialized sub-networks called experts, which promises efficiency but often breaks down at scale. The most notable outcome is sustained high throughput with near-linear scaling to large GPU counts.
Increasing expert parallelism slowed training. Profiling exposed intranode kernels that serialized work as expert count rose. Kernel launch tuning fixed that, then CPU launch overhead surfaced as the next bottleneck.
As throughput increased, silent routing and gradient bugs appeared.
What Nous changed
Tune DeepEP intranode kernels by raising num_sms from 24 to 128
Fix cached routing metadata that blocks kernel tuning
Identify CPU launch overhead in scatter_add and fused dispatch paths
Correct router initialization that routed 100% of tokens to rank 0
Patch grouped GEMM backward for zero-token experts
Results
15,057 tokens/sec per GPU
, exceeding the 14,796 baseline
57% of theoretical NVLink bandwidth
, up from ~34% reference
Near-linear scaling maintained up to
128 GPUs
EXPLORE THE CODE
Signals
1
Anthropic announces Claude Code VS Code extension now generally available worldwide
6,012 Likes
2
Google expands Gemini to 23 new languages, bringing support to over seventy worldwide
2,532 Likes
3
Anthropic supports a worldwide educator collective shaping practical, responsible AI use in real classrooms
1,036 Likes
4
Lightricks introduces audio-led video synthesis generating structure directly from audio
1,263 Likes
5
Anthropic releases secure health data connectors, enabling Claude to analyze user medical and fitness information
6,127 Likes
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

Stop receiving emails here: https://app.alphasignal.ai/unsubscribe/u/K1bzInIJROI8zvHA?cid=435825cc8bc14060
