---
id: 19dd0cbce85494df
newsletter: turing-post
newsletter_name: "🔳 Turing Post"
week: 18
subject: "FOD#150: Ghosts in the Distillation Pipeline"
date: Mon, 27 Apr 2026 21:15:09 +0000
source_url: "https://link.mail.beehiiv.com/v1/c/XeMQJi4TLklu7iHs25bMCi13iybocOEblIFWCJjIq1EuP%2FJ8BD925eonR5Mh%0A%2ByWqrwrc8C1hWCn2poD%2BqEFYOWhSl3tHZqh9K%2B66SPslor3B7tVoLOqV7U9Z%0A%2FOjTQnAPzMee4xFJU6%2FOk7c4vJzAacDdyCeKLJk7IMjgzCk%2FDsLACv7dLJOK%0AxYyr83eNLiD36bOrfVQPqNP6bPds0bKhMA%3D%3D%0A/1f3ea4ee5021ce9e"
---

# FOD#150: Ghosts in the Distillation Pipeline

**From:** "🔳 Turing Post" <turingpost@mail.beehiiv.com>
**Date:** Mon, 27 Apr 2026 21:15:09 +0000
**Source:** [View original](https://link.mail.beehiiv.com/v1/c/XeMQJi4TLklu7iHs25bMCi13iybocOEblIFWCJjIq1EuP%2FJ8BD925eonR5Mh%0A%2ByWqrwrc8C1hWCn2poD%2BqEFYOWhSl3tHZqh9K%2B66SPslor3B7tVoLOqV7U9Z%0A%2FOjTQnAPzMee4xFJU6%2FOk7c4vJzAacDdyCeKLJk7IMjgzCk%2FDsLACv7dLJOK%0AxYyr83eNLiD36bOrfVQPqNP6bPds0bKhMA%3D%3D%0A/1f3ea4ee5021ce9e)

---

----------
_Share Turing Post with one person. You will help us grow _

----------## This Week in Turing Post:

* **Wednesday** / AI 101 series: **What’s so magical about embeddings?  **

* **Friday** / Interview: **Clem Delangue from Hugging Face **

Upgrade today (https://www.turingpost.com/upgrade)

———————————————————————————

**To the main topic → Models have ancestry and what it means for the world**

This week, OSTP Director Michael Kratsios issued a memo titled _Adversarial Distillation of American AI Models_, framing the practice of foreign labs distilling US frontier models as a form of IP theft – the foreign lab as thief, the US developer as victim. A few days before that, _Nature_ published a paper from Truthful AI, Anthropic, ARC and Berkeley that shows **distilled student models can inherit behavioral traits from their teachers through hidden signals in the training data **– signals that survive aggressive filtering and aren't detectable by inspecting the data after the fact. They call it _subliminal learning._

Eric Bonabeau (author of _Swarm Intelligence_) connected the two in his LinkedIn post. He drew out the **operational implication** – if the theft framing is right, the original can be seeded with signals to shape what the thief's distilled model does – and the **structural one**: distillation isn't unilateral, every distilled model in production may be carrying things its operators can't see, and "open source" releases that publish only weights aren't really transparent. Both points are legit. But I'd like to take the reading of that paper further.

If the paper is correct, **subliminal learning has consequences for governance that go beyond safety evals.**

The EU AI Act assumes training data can be audited. NIST's Risk Management Framework assumes evaluations can characterize what a model has learned. The copyright cases against OpenAI, Anthropic and Meta assume that inspecting a corpus tells you what is in the model. Every consent regime being negotiated in Brussels and Washington rests on a version of the same premise: what isn't visible in the data isn't in the model.

Cloud et al. paper complicates that premise. If signals can pass through aggressive filtering and transmit traits no one explicitly named, then a **"clean" dataset isn't a verifiable category **– because you can't prove the absence of a trait you haven't yet articulated.

I told Eric his post sounded less like natural language processing and more like neuro-linguistic programming — the 1970s pop-psychology framework about embedding behavioral suggestions through linguistic cues. The joke was that **LLMs program LLMs**. The serious version is that natural language processing has produced an artifact that behaves, regulatorily, the way neuro-linguistic programming claimed to: it shapes what you cannot see, and it resists the tools you would use to find it.

There's more to that. Most distillation in 2026 isn't adversarial across borders. It's endogenous: labs training new models on synthetic data from their own prior models. Teacher and student in the same lab, sometimes the same week. Cloud et al. shows the effect is strongest exactly here – subliminal learning requires teacher and student to share the same base model or a closely matched one. Across generations of self-distillation, traits are compounding – not because anyone intends it, but because nothing was ever in place to catch them. The signals don't require a foreign adversary to appear. They appear because distillation pipelines transmit them, and every frontier lab uses distillation.

For governance, this is awkward. Lineage attestation – cryptographic provenance for training data, model parents, evaluations – is necessary, but it isn't sufficient. Known-provenance data may still carry signals from upstream, and proving it doesn't requires naming the trait first. **The compliance regimes being drafted right now are built around testable claims. Subliminal learning is a category of harm that's hard to define in advance, and the architecture doesn't have a clear slot for it.**

What concerns me is that significant money and effort is going into inspection regimes that assume you can find out what's in a model by looking. Cloud et al. suggests you often can't. For labs, it means treating synthetic data and distilled outputs as a supply chain — tracked even when no regulator is asking. **For policymakers, it means designing compliance regimes around lineage and disclosure rather than inspection and certification**, and accepting that the honest output is "this model has known parents and the following caveats," not "this model is clean." Both are harder than what's being built now. 

I have to add that none of this is an argument against distillation. Distillation is how modern AI works – small models, cheap inference, knowledge transfer between generations, the entire synthetic-data pipeline. Restricting it would gut most of what is productive about current AI development. Cloud et al. doesn't show distillation is illegitimate. It shows distillation has a property we didn't know about, and that the regulatory pretense of certifying a distilled model as clean by inspecting its data and outputs cannot survive that property. 

This is bad news for closed development, not for open source. Closed models are auditable to no one but the lab that built them. Open models are the only ones the rest of us can probe. Most carrier-detection work will happen on open weights, because closed labs won't hand outside researchers the access they need to find traits they themselves never named. Does open source solve subliminal learning? It doesn’t but it's the precondition for solving it. A world running on three closed models concentrates every unknown carrier in three places. A world running on a diverse ecosystem of open ones distributes the risk and creates the conditions for the work to happen. Without open source, nothing about this problem can be worked on at all. 

We live in very interesting times we know so little about. 

_**If any of those thoughts resonate with you – share them across your social networks. Let’s keep the conversation going. **_

———————————————————————————

_Topic 2: _We’re experimenting with explanatory videos. What do you think? Share your feedback on how our channel should look and what it should be about.

Youtube: Tokens: The 100-Year Journey to AI's Fundamental Unit (https://www.youtube.com/watch?v=JK6QnFKv080&t=1s)

Leave a Comment (https://www.turingpost.com/p/fod150?_bhlid=4eaa234680798ad3bdb45514b5705f029891f88c&jwt_token={{jwt_token}}?comments=true)

Materials mentioned in the editorial or related for deeper understanding:

* _Adversarial Distillation of American AI Models_ [memo](https://whitehouse.gov/wp-content/uploads/2026/04/NSTM-4.pdf)

* Eric’s [post](https://www.linkedin.com/posts/eric-bonabeau-9a1a476_ostp-memo-activity-7453468047706722305-OmAz?utm_source=share&utm_medium=member_desktop&rcm=ACoAADH9ZIUB3jRblWckr7qIS-1uibOwglr0KJ8) on LinkedIn

* Language models transmit behavioural traits through hidden signals in data [paper](https://www.nature.com/articles/s41586-026-10319-8)

* Nathan Lambert’s [tweet](https://x.com/natolambert/status/2047454390601306207) about distillation memo

* Matthew Berman’s [tweet](https://x.com/MatthewBerman/status/2047843625510609373) about important of open source

----------
_**Follow us on **__            _🎥_[ YouTube](https://www.youtube.com/@RealTuringPost)__              __[Twitter](https://x.com/TheTuringPost)__             __[ Hugging Face ](https://huggingface.co/Kseniase)_🤗

----------———————————————————————————

## Twitter Library 

The Evolution of LoRA: 15+ Variants You Should Know: (https://www.turingpost.com/p/loraevolution)

———————————————————————————

## We are reading/watching/learning:

* [You and Your Research](https://paulgraham.com/hamming.html) by Richard Hamming (1986)

* [John Ternus and Apple’s Hardware-Defined Future, SpaceXAI and Cursor](https://stratechery.com/2026/john-ternus-and-apples-hardware-defined-future-spacexai-and-cursor/) by Stratechery

* [The Man Behind AlphaGo Thinks AI Is Taking the Wrong Path](https://www.wired.com/story/david-silver-ai-ineffable-intelligence-reinforcement-learning/) by WIRED

## News from the usual suspects ™ (rivals rivals rivals)

* **Whoa!**

Tweet:  (https://twitter.com/sama/status/2048755148361707946)

* **Cursor shoots for orbit with SpaceX**
Cursor has found its rocket fuel. A new partnership with SpaceX (via xAI’s Colossus infrastructure) [promises](https://cursor.com/blog/spacex-model-training) to smash its compute ceiling and supercharge model training. After rapid-fire upgrades from Composer to Composer 2, Cursor is betting that more compute still equals more intelligence. In the AI arms race, they’ve just upgraded from a fast car to something with escape velocity.

* **Hugging Face hires an “intern” that doesn’t sleep**
Hugging Face [unveils](https://x.com/akseljoonas/status/2046543093856412100) _ml-intern_, an open-source agent that automates the gritty post-training loop – reading papers, tracing citations, curating datasets, running experiments, and iterating like a seasoned researcher. Early demos show eyebrow-raising gains across science, healthcare, and math benchmarks. If it holds up, the humble ML workflow may soon need fewer humans – and far more GPUs.

## 🔦 Benchamark Highlight

**Mathnet: A global multimodal benchmark for mathematical reasoning and retrieval introduced by MIT Researchers**

View image: (https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/uploads/asset/file/df02cd79-3711-4c0b-97c1-66ed9bd37e80/Screenshot_2026-04-27_at_12.35.23_PM.png?t=1777307739)
Caption: 

MATHNET is a dataset of 30,676 Olympiad-level problems from 47 countries, 17 languages, and 143 competitions over four decades, with expert solutions. It defines three tasks: problem solving, math-aware retrieval, and RAG. Top models achieve 78.4% accuracy, while retrieval Recall@1 is ~5%. RAG improves performance up to 12%, highlighting retrieval quality limitations and shows embedding models struggle [→read the paper](https://arxiv.org/abs/2604.18584)

## Research highlight

* **Image generators are generalist vision learners**

“We could be witnessing a major paradigm shift for computer vision, where generative vision pretraining takes a central role in building Foundational Vision Models for both generation and understanding.“ — Google Team and Vision Banana

Researchers from Google show generative image models learn strong visual representations enabling vision tasks via RGB output reformulation. They introduce Vision Banana by instruction-tuning Nano Banana Pro with minimal vision data. It achieves SOTA or near-SOTA on segmentation (mIoU 0.699 vs 0.652 SAM3), depth (δ1 0.929 vs 0.918), and normals (15.5° error), while retaining generation (53.5% win rate). Results indicate generative pretraining forms unified vision foundation [→read the paper](https://arxiv.org/abs/2604.20329)

* **There Will Be a Scientific Theory of Deep Learning**

View image: (https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/uploads/asset/file/a346c2fe-1a39-4b94-9a34-caa757290ed5/Screenshot_2026-04-27_at_4.58.41_PM.png?t=1777323562)
Caption: [→read the paper](https://arxiv.org/pdf/2604.21691)

## Models (a lot of great open weights models last week)

* Whale is here: **Deepseek-v4: Towards highly efficient million-token context intelligence **

Researchers from DeepSeek [introduce](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) MoE LLMs with 1.6T parameters (49B active) and 1M-token context, trained on 32T tokens. Hybrid attention reduces FLOPs to 27% and KV cache to 10%. It uses Muon optimizer and two-stage post-training. Achieves 90.1% MMLU, 76.8% HumanEval, 92.6% GSM8K, and competitive agentic and long-context benchmarks, approaching frontier proprietary models.

* **Kimi k2.6: Advancing open-source coding** 

Researchers from Moonshot AI [introduce](https://x.com/Kimi_Moonshot/status/2046249571882500354) Kimi K2.6, a 1T-parameter MoE model (32B active) achieving SOTA on coding/agent benchmarks (SWE-Bench Pro 58.6, Toolathlon 50.0, BrowseComp 83.2). It supports long-horizon coding with 4,000+ tool calls over 12+ hours, scales to 300 parallel agents × 4,000 steps, enables autonomous workflows, and generalizes across languages and complex full-stack tasks.

* **Openai privacy filter – Open Sourced**

Researchers from OpenAI [present](https://huggingface.co/openai/privacy-filter) a 1.5B-parameter bidirectional token-classification model for PII detection with 50M active parameters, 128k context, and 33 BIOES labels across 8 categories (e.g., email, phone, address). It uses autoregressive pretraining followed by supervised classification and Viterbi decoding for coherent spans. Designed for high-throughput, it runs on-device, is fine-tunable, and allows precision–recall control, but may miss rare patterns or misclassify ambiguous entities.

* **Llada2.0-uni: Unifying multimodal understanding and generation with diffusion LLMs**

Researchers from Inclusion AI [propose](https://arxiv.org/pdf/2604.20796) a 16B MoE diffusion LLM combining a semantic SigLIP-VQ tokenizer and diffusion decoder for unified text-image tasks. It achieves strong multimodal performance (e.g., MMStar 64.1, GenEval 0.89, DPG 87.76) and supports interleaved reasoning/generation. Efficiency gains include 8-step decoding (11.4× speedup) and 1.6× inference acceleration with minimal quality loss.

* Not open but great: **GPT-5.5** 

Researchers from OpenAI [present](https://openai.com/index/introducing-gpt-5-5/) GPT-5.5, an advanced agentic model improving coding, knowledge work, and scientific research while maintaining GPT-5.4 latency and using fewer tokens. It achieves 82.7% on Terminal-Bench, 58.6% SWE-Bench Pro, 84.9% GDPval, and 93.6% GPQA. With 1M-token context, strong tool use, and improved autonomy, it supports long-horizon tasks, real-world workflows, and research discovery, alongside enhanced cybersecurity safeguards.

## Research 

Trends we see looking at every paper related to AI and ML published last week: 

* **Agents are the main story**

* **RL is everywhere again**

* **Test-time compute is becoming a product lever**

* **World models are moving into video and robotics**

* **Multimodal is becoming default**

* **Benchmarks are getting more suspicious**

* **Efficiency is a major pressure point**

**Evidence, retrieval, and long-context reasoning**

* 🌟 **Learning Evidence Highlighting for Frozen LLMs** – Shows how a small highlighting policy can guide frozen models toward decisive evidence without rewriting or compressing the context [→read the paper](https://arxiv.org/abs/2604.22565)

* 🌟 **Contexts are Never Long Enough** – Reframes long-context QA as structured reasoning over persistent databases instead of endless text concatenation. [→read the paper](https://arxiv.org/abs/2604.22294)

* **Dual-View Training for Instruction-Following Information Retrieval** – Trains retrievers to obey user constraints, not only semantic relevance, by flipping document labels under complementary instructions [→read the paper](https://arxiv.org/abs/2604.18845)

* 🌟 **Memanto** – Proposes a typed memory layer for agents that avoids heavy knowledge-graph machinery while improving long-horizon retrieval accuracy and latency [→read the paper](https://arxiv.org/abs/2604.22085)

**Agent reliability, autonomy, and real-world behavior**

* 🌟 **Knowing When to STOP, RECOVER, and SEARCH** – Tackles GUI-agent failure modes directly by adding verification, loop-breaking, and search as modular control mechanisms [→read the paper](https://arxiv.org/abs/2604.21375)

* 🌟 **On the Reliability of Computer Use Agents** – Studies why agents that succeed once may fail on the same task again, which is exactly the reliability problem benchmarks tend to hide [→read the paper](https://arxiv.org/abs/2604.17849)

* 🌟**Agents Explore but Agents Ignore** – Reveals that agents often discover useful environmental information but fail to exploit it, exposing a serious gap between tool use and adaptive behavior [→read the paper](https://arxiv.org/abs/2604.17609)

* **Training LLM Agents for Spontaneous, Reward-Free Self-Evolution via World Knowledge Exploration** – Trains agents to explore unfamiliar environments before acting, aiming for adaptation without external rewards at inference time [→read the paper](https://arxiv.org/abs/2604.18131)

* **DR-Venus** – Shows that small open-data research agents can become surprisingly capable when training emphasizes trajectory quality, turn-level rewards, and long-horizon execution [→read the paper](https://arxiv.org/abs/2604.19859)

* 🌟**SWE-chat** – Provides real-world coding-agent interaction data, making it possible to study how much agent-written code actually survives developer workflows [→read the paper](https://arxiv.org/abs/2604.20779)

**Training better reasoning and optimization behavior**

* 🌟**AI Scientists Produce Results Without Reasoning Scientifically** – Warns that scientific agents can produce correct-looking outputs while ignoring evidence, rarely revising beliefs, and failing epistemic norms [→read the paper](https://arxiv.org/abs/2604.18805)

* 🌟**When Can LLMs Learn to Reason with Weak Supervision?** – Identifies when RLVR generalizes under scarce, noisy, or proxy rewards, with reasoning faithfulness emerging as the key predictor [→read the paper](https://arxiv.org/abs/2604.18574)

* 🌟 **TEMPO** – Scales test-time training for reasoning models by periodically recalibrating the critic, preventing reward drift and diversity collapse [→read the paper](https://arxiv.org/abs/2604.19295)

* **Near-Future Policy Optimization** – Uses a model’s own later checkpoint as a guide, giving RL training a source of trajectories that are stronger but still distributionally close [→read the paper](https://arxiv.org/abs/2604.20733)

* **What Makes an LLM a Good Optimizer?** – Analyzes optimization trajectories and shows that strong LLM optimizers refine locally instead of drifting widely through solution space [→read the paper](https://arxiv.org/abs/2604.19440)

* **SAVOIR** – Applies Shapley-based reward attribution to social dialogue, arguing that social intelligence needs different training signals from analytical reasoning [→read the paper](https://arxiv.org/abs/2604.18982)

**World models, spatial intelligence, and scientific agents**

* 🌟 **Agentic World Modeling** – Builds a broad taxonomy for predictive environment models across physical, digital, social, and scientific domains [→read the paper](https://arxiv.org/abs/2604.22748)

* **Exploring Spatial Intelligence from a Generative Perspective** – Tests whether image-generation systems can respect 3D spatial constraints and shows generative training can improve spatial understanding [→read the paper](https://arxiv.org/abs/2604.20570)

**Model internals and sequence architecture**

* **Sessa** – Places attention inside a recurrent feedback path to improve long-context memory and selective retrieval [→read the paper](https://arxiv.org/abs/2604.18580)

* **Convergent Evolution** – Shows that very different models learn similar periodic number representations, giving a useful window into feature formation [→read the paper](https://arxiv.org/abs/2604.20817)

**Efficient adaptation, distillation, and model scaling**

* **Expert Upcycling** – Expands MoE capacity by duplicating and specializing experts during continued pre-training, reducing the cost of scaling sparse models [→read the paper](https://arxiv.org/abs/2604.19835)

* **ShadowPEFT** – Replaces local LoRA-style perturbations with a reusable shadow module that refines hidden states across layers [→read the paper](https://arxiv.org/abs/2604.19254)

* **RDP LoRA** – Uses representation geometry to choose which layers to adapt, turning PEFT layer selection into an interpretable, training-free decision [→read the paper](https://arxiv.org/abs/2604.19321)

* **Hybrid Policy Distillation** – Unifies distillation choices and combines forward and reverse KL to improve stability, coverage, and efficiency across reasoning and dialogue tasks [→read the paper](https://arxiv.org/abs/2604.20244)

_That’s all for today. Thank you for reading! Please __**send this newsletter to colleagues**__ if it can help them enhance their understanding of AI and stay ahead of the curve._

———————————————————————————

Share Turing Post

You currently have <strong>0</strong> referrals, only <strong>3</strong> away from receiving <strong>1 Month of Premium Subscription</strong>.

Or copy and paste this link to others: https://www.turingpost.com/subscribe?ref=LYY3SYS432

———————————————————————————

———

You are reading a plain text version of this post. For the best experience, copy and paste this link in your browser to view the post online:
https://www.turingpost.com/p/fod150
