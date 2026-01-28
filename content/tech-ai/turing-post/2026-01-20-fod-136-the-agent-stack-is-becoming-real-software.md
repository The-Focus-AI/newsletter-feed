---
id: 19bdd3fa5ea2016a
newsletter: turing-post
newsletter_name: "🔳 Turing Post"
category: tech-ai
subject: "FOD#136: The Agent Stack Is Becoming Real Software"
date: Tue, 20 Jan 2026 21:11:32 +0000 (UTC)
source_url: "https://www.turingpost.com/p/fod136"
---

# FOD#136: The Agent Stack Is Becoming Real Software

**From:** "🔳 Turing Post" <turingpost@mail.beehiiv.com>
**Date:** Tue, 20 Jan 2026 21:11:32 +0000 (UTC)
**Source:** [View original](https://www.turingpost.com/p/fod136)

---

## This Week in Turing Post:

* **Wednesday **/ AI 101 series: **New model under embargo + other VLM models**

* **Friday** / Open Source AI series:** ****The Real Math – when open source saves money, when it doesn't**

To the main topic: **The Agent Stack Is Becoming Real Software** 

For most of the past two years, the story of agentic AI has been told as a story about reasoning. Better chain-of-thought. Better planning. More tools. More tokens. My context is longer than yours! etc

That framing is starting to change.

If you think about it, what breaks first in real agent deployments is not at all intelligence. It is endurance, consistent persistence. Agents just lose coherence over time. They repeat work and drown in their own traces. Or they become verbose when they should be decisive, or brittle when they should adapt.

It becomes clear that the limiting factor is no longer how well models reason, but whether **agent systems can hold themselves together over long horizons**. Last week gave us a few papers that make this shift explicit. That’s why I like to every Monday’s research analysis: read together, the recent papers tell a wholesome story about where agentic AI is heading. Away from prompt-level cleverness. Toward software architecture. Let’s observe these papers together:

#### Long-horizon work breaks language models by default

Language models are optimized for short bursts of cognition. Even strong reasoning assumes that everything relevant is conveniently present in context.

Real work does not look like that.

Real work unfolds over hours, days, sometimes weeks. It involves partial progress, failed attempts, forgotten constraints, and delayed feedback. When agents attempt this today, they fail in predictable ways: context bloat, logical drift, or compensatory verbosity that masks uncertainty rather than resolving it.

**The ML-Master 2.0** paper (→[read the paper](https://arxiv.org/abs/2601.10402)) reframes this failure precisely. Instead of treating long-horizon reasoning as a prompting problem, it treats it as a **cognitive accumulation problem**. The key move is to actively distill experience over time, separating transient execution details from stable knowledge and strategy. Their solution, hierarchical cognitive caching, looks less like NLP and more like operating systems design. And this is not accidental: ultra-long-horizon agency turns out to be a systems problem.

#### Memory stops being recall and becomes executive control

Early agent memory systems focused on recall: vector stores, episodic logs, better retrieval heuristics. These help, but they do not address the real failure mode. Agents rarely fail because they cannot retrieve a fact. They fail because they lose the thread of reasoning, keep dead branches alive, or contaminate future decisions with obsolete context.

**MemoBrain** (→ [read the paper](https://arxiv.org/abs/2601.08079)) makes this explicit by treating memory as an executive function. It prunes invalid steps, folds completed sub-trajectories, and preserves only the dependency structure that still matters. Memory becomes a control layer over reasoning, not a passive archive. **MemGovern** (→[read the paper](https://arxiv.org/abs/2601.08079)) extends the same logic to the open world. Instead of letting agents scrape raw GitHub history, it governs human experience into structured, agent-consumable units. This is a meaningful shift.  At this point, “agent memory” starts to resemble v**ersion control and execution tracing** more than semantic search.

#### Tools cannot remain static in an open-ended world

Tool use has mostly been framed as selection. The agent chooses among predefined APIs. This works in constrained demos. It fails in science, engineering, and any domain where the right tool often does not exist yet.

**Test-Time Tool Evolution** (→[read the paper](https://arxiv.org/abs/2601.07641)) confronts this directly. Instead of treating tools as fixed resources, it allows agents to synthesize, verify, and evolve executable tools during inference. Tools become problem-driven artifacts. This is a conceptual shift with real consequences. Evaluation can no longer ask whether the agent chose the correct tool. It must ask whether the agent was able to **create one when none existed**.

Once again, the pattern repeats. Progress comes not from better reasoning tokens, but from expanding what the system is allowed to build while it reasons.

#### Reasoning efficiency matters more than raw reasoning

As reasoning models improve, they also become wasteful. Reinforcement learning with verifiable rewards (RLVR) has produced agents that reason by brute force, relying on long, trial-and-error traces to stumble into correct answers.

**JudgeRLVR** (→[read the paper](https://arxiv.org/abs/2601.08468)) addresses this by flipping the order. Train discrimination first. Teach the model to recognize good solutions before asking it to generate them. The result is shorter, cleaner reasoning with better generalization. **Rewarding the Rare** (→[read the paper](https://arxiv.org/abs/2601.08763)) pushes in the same direction, but at the level of exploration. By rewarding rare high-level strategies rather than redundant ones, it prevents rollout-level collapse and preserves diversity where it matters. **PRL** (→[read the paper](https://arxiv.org/abs/2601.10201)) adds another piece, converting outcome rewards into principled process-level signals without heavy scaffolding. Together, these papers point to a future where reasoning is not just powerful, but disciplined.

#### None of this works without infrastructure

The least glamorous papers in this set may be the most important.

**MegaFlow** (→[read the paper](https://arxiv.org/abs/2601.07526))  treats agent training as a distributed systems problem, separating models, agents, and environments so they can scale independently. **OpenTinker** (→[read the paper](https://arxiv.org/abs/2601.07376)) enforces the same separation at the algorithmic level, making agentic reinforcement learning modular and auditable.

These contributions are easy to underestimate because they do not produce flashy demos. But without this layer, agent research does not scale, does not reproduce, and does not mature.

And the thing is that **infrastructure is where agentic AI either becomes software, or remains a collection of clever prototypes.**

#### What this adds up to

Taken together, these papers describe a transition that is easy to miss if you read them in isolation: we are moving from agents as prompt-driven generators to agents as **long-running systems** that must manage memory, invent tools, regulate exploration, and scale operationally over time.

The most valuable practitioners won't be (necessarily) software engineers, prompt engineers, or ML engineers – they'll be **systems thinkers** who recognize that agent failures look less like “wrong answer” and more like "memory leak,” “circular dependency,” or “state corruption.”

Because this discipline is still forming, **experimentation and pattern recognition matter more than pedigree.** And this is good news. You build intuition by running agents until they break, recognizing architectural patterns across failures, and internalizing what makes systems resilient versus brittle. **The frontier is wide open, and hands-on iteration beats credentials.**

I’m excited for everyone out there, constantly iterating and connecting the dots.

----------
_**Follow us on **__            _🎥_[ YouTube](https://www.youtube.com/@RealTuringPost)__              __[Twitter](https://x.com/TheTuringPost)__             __[ Hugging Face ](https://huggingface.co/Kseniase)_🤗

----------———————————————————————————

## Twitter Library 

9 Notable Advancements in Robotics that We Can't Miss: (https://www.turingpost.com/p/roboticsupdates)

Upgrade (https://www.turingpost.com/upgrade)

———————————————————————————

### We are reading

* [My agents are working, are yours?](https://importai.substack.com/p/import-ai-441-my-agents-are-working?) By Jack Clark

* [AI is hitting a measurement wall](https://www.artificialintelligencemadesimple.com/p/ai-is-hitting-a-measurement-wall?) by Devansh

* Andrew Ng on [carbon emissions, electricity prices and water use by data centers](https://www.deeplearning.ai/the-batch/issue-336/)

* [On Evaluating Cognitive Capabilities in Machines (and Other "Alien" Intelligences)](https://aiguide.substack.com/p/on-evaluating-cognitive-capabilities) by Melanie Mitchell

### News from the usual suspects

* **Merge Labs enters the chat**
Merge Labs, a new brainchild backed by Sam Altman and a dream team of neuro-tinkerers, just [launched](https://merge.io/blog) with a bold mission: merging biology and AI to level up human agency. Think molecular BCIs (not implants), high-bandwidth brain links, and ultrasound-powered mind melding. BTW, one of the job openings is Head of Vivarium. 

* **humans& launches with a pulse**
Need more startups valued in the billions without a product? Enter [_humans&_](https://humansand.ai/), a new AI lab with a stance: the next wave of frontier AI should be deeply human-centric. Ex-OpenAI, xAI, DeepMind, Stanford in founding team, supported by heavyweights like Bezos, NVIDIA, and GV, they're out to rethink large-scale training, memory, and multi-agent systems – not just for better models, but for better human connection. Touching. Raised $480m at $4.5b valuation.

* **X spills the (For You) tea**
The algorithm behind X's “For You” feed is now [open source](https://github.com/xai-org/x-algorithm). Built on xAI’s Grok-based transformer, the system ditches hand-crafted features in favor of raw ML muscle. It blends content from accounts you follow (Thunder) and global posts (Phoenix), scoring engagement predictions across 13+ actions. Transparent? Yes. Opinionated? Absolutely. Prepare for fewer surprises – but no fewer opinions.

* **OpenAI finds a new stream**
OpenAI will [begin](https://openai.com/index/our-approach-to-advertising-and-expanding-access/) testing targeted ads in ChatGPT for U.S. users on its free and $8/month “Go” plans – an anticipated pivot from Sam Altman’s prior aversion to ads. The move aims to diversify revenue and support its trillion-dollar AI ambitions. Ads will be clearly labeled and steered clear of sensitive topics. Trust, meet monetization – carefully introduced with a smile and a footnote.

———————————————————————————

### 🔦 Research highlight

🌟 **Stem: Scaling transformers with embedding modules**

View image: (https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/uploads/asset/file/10ae748e-e9b4-4780-bcf8-d104f521fc43/Screenshot_2026-01-20_at_1.49.25_PM.png?t=1768934979)
Caption: 

* Researchers from **Carnegie Mellon** and **Meta AI** proposed STEM, a fine-grained sparse transformer that replaces FFN up-projection with token-indexed, layer-local embeddings. This design reduces per-token FLOPs by up to one-third, increases interpretability, and enables knowledge editing via embedding swaps. It achieves 3–4% accuracy gains at 350M and 1B scales, with up to 13% improvement on long-context benchmarks. STEM scales capacity with context length and improves knowledge-intensive tasks like ARC-Challenge and OpenBookQA. It’s significant because **it scales model capacity and interpretability without increasing per-token compute**, enabling more efficient, controllable, and knowledge-rich LLMs →[read the paper](https://arxiv.org/abs/2601.10639)

🌟 **Reasoning models generate societies of thought**

* Researchers from **Google, University of Chicago, and Santa Fe Institute** show that LLMs like DeepSeek-R1 and QwQ-32B improve reasoning not by length alone but by simulating internal dialogues among diverse, persona-like perspectives. These models display more question-answering, disagreement, and reconciliation than instruction-tuned baselines. Steering a “surprise” discourse feature doubled reasoning accuracy, increasing activation of personality and expertise features. Reinforcement learning reinforced these behaviors, especially when models were fine-tuned on multi-agent dialogues, accelerating reasoning improvements. In short, the model is** forming an internal committee to solve problems**, echoing human cognition and group collaboration. That’s a leap in understanding both AI and possibly the nature of reasoning itself →[read the paper](https://arxiv.org/abs/2601.10825)

🌟 **Multiplex thinking: Reasoning via token-wise branch-and-merge**

* Researchers from the** University of Pennsylvania and Microsoft Research** propose Multiplex Thinking, a stochastic reasoning method where, at each step, an LLM samples K discrete tokens and merges them into one continuous multiplex token. This enables exploration without increasing sequence length. Using reinforcement learning, it consistently outperforms discrete Chain-of-Thought and continuous baselines across six math benchmarks, achieving up to 50.7% Pass@1 and superior Pass@1024, while generating shorter, denser outputs →[read the paper](https://arxiv.org/abs/2601.08808)

**The Assistant axis: Situating and stabilizing the default persona of language models**

View image: (https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/uploads/asset/file/f0b2f161-b2d2-4837-9104-0c8b6cd61694/Screenshot_2026-01-20_at_3.21.02_PM.png?t=1768940473)
Caption: 

* Researchers from **MATS, Anthropic, and the University of Oxford **identify an “Assistant Axis” in LLM activation space that captures how closely a model aligns with its default helpful Assistant persona. Steering along this axis controls persona expression and affects susceptibility to jailbreaks and harmful behavior. In emotionally vulnerable or philosophical contexts, models drift from the Assistant persona, leading to inappropriate responses. Activation capping along this axis reduces such risks by 60% without degrading capabilities across Llama 3.3 70B, Qwen 3 32B, and Gemma 2 27B →[read the paper](https://arxiv.org/abs/2601.10387)

## Models

Last week’s batch alone includes **5 open-source (**🦋**) model releases** out of **8 model or model-suite entries** here, spanning vision-language, translation, and even music generation. The volume proves how important it is to understand [how exactly open source can be useful to you](https://www.turingpost.com/p/opensource1)

* 🌟 **Molmo2: Open Weights and Data for Vision-Language Models with Video Understanding and Grounding **🦋
Release open weights plus disclosed training data and recipes to enable video understanding and pixel-level grounding without relying on distillation from proprietary VLMs [→read the paper](https://arxiv.org/abs/2601.10611)

* **Ministral 3 **🦋
Deliver parameter-efficient dense models in multiple sizes and variants by using cascade distillation to target compute and memory constrained applications while keeping strong general utility [→read the paper](https://arxiv.org/abs/2601.08584)

* **TranslateGemma Technical Report **🦋
Specialize a foundation model for machine translation by applying staged fine-tuning and reinforcement learning with translation-specific reward models while retaining multimodal competence [→read the paper](https://arxiv.org/abs/2601.09012)

* **STEP3-VL-10B Technical Report **🦋
Push compact multimodal performance by combining large-scale unified pretraining with reinforcement learning and test-time perceptual reasoning to compete with much larger VLMs [→read the paper](https://arxiv.org/abs/2601.09668)

* 🌟 **HeartMuLa: A Family of Open Sourced Music Foundation Models **🦋
Provide an open stack for music understanding and generation by combining audio-text alignment, lyric recognition, codec tokenization, and controllable song synthesis [→read the paper](https://arxiv.org/abs/2601.10547)

* **OpenDecoder: Open Large Language Model Decoding to Incorporate Document Quality in RAG **
Condition generation on explicit retrieval-quality signals to make RAG more robust to noisy or uneven evidence rather than assuming all retrieved context is equally useful [→read the paper](https://arxiv.org/abs/2601.09028)

* **UM-Text: A Unified Multimodal Model for Image Understanding**
Generate style-consistent visual text edits by using a VLM to interpret instructions and a unified conditioning encoder to control layout and glyph rendering end-to-end [→read the paper](https://arxiv.org/abs/2601.08321)

* **Solar Open Technical Report **
Build a large bilingual MoE model for underserved language performance by synthesizing high-quality data, coordinating it with a progressive curriculum, and scaling reinforcement learning with an efficient optimizer [→read the paper](https://arxiv.org/abs/2601.07022)

———————————————————————————

_That’s all for today. Thank you for reading! Please __**send this newsletter to colleagues**__ if it can help them enhance their understanding of AI and stay ahead of the curve._

———————————————————————————

Share Turing Post

You currently have <strong>0</strong> referrals, only <strong>3</strong> away from receiving <strong>1 Month of Premium Subscription</strong>.

Or copy and paste this link to others: https://www.turingpost.com/subscribe?ref=LYY3SYS432

———————————————————————————

———

You are reading a plain text version of this post. For the best experience, copy and paste this link in your browser to view the post online:
https://www.turingpost.com/p/fod136
