---
id: 19bf50fe3731553d
newsletter: thesequence
newsletter_name: "TheSequence"
category: tech-ai
subject: "The Sequence Radar #795: The New Inference Kids"
date: Sun, 25 Jan 2026 12:03:14 +0000
---

# The Sequence Radar #795: The New Inference Kids

**From:** TheSequence <thesequence@substack.com>
**Date:** Sun, 25 Jan 2026 12:03:14 +0000

---

View this post on the web at https://thesequence.substack.com/p/the-sequence-radar-795-the-new-inference

Next Week in The Sequence:
We are starting a series about world models. Can’t miss that one , its going to be hot! 
In the AI of the week section, we are going to discuss vLLM and SGLang given the funding news of the week. 
The opinion section dives into agentic reasoning in LLMs based on a groundbreaking paper that came out this week. 
Subscribe and don’t miss out:
TheSequence is a reader-supported publication. To receive new posts and support my work, consider becoming a free or paid subscriber.
📝 Editorial: The New Inference Kids 
Last week was all about inference in AI and new players emerging as forces to be reckoned with in the space. For the last few years, the entire industry has been obsessed with training—stacking thousands of H100s to teach a ghost how to speak. But this week, the vibe shifted. We are moving from a world where we spend billions to create intelligence, to one where we spend billions to serve it.
The race is no longer just about who has the smartest model; it’s about who can actually run the thing without bankrupting the company. The “Inference Race” just went vertical.
Leading the charge is BaseTen, who just announced a monster $300M round at a ~$5B valuation. Interestingly, NVIDIA is writing the check. BaseTen isn’t trying to build the model; they are building the plumbing. Their bet is that inference is the new “cloud computing”—a utility that needs to be boring, reliable, and infinitely scalable. They are effectively saying: “You bring the weights, we’ll handle the nightmare of GPU orchestration.” While BaseTen handles the macro-infrastructure, two other players emerged this week to handle the micro-optimization.
First up, we have RadixArk. If you’ve been hacking on SGLang, you know it’s magic for complex workflows. The team coming out of Berkeley just spun this out with a $400M valuation. Their secret sauce is RadixAttention. In a standard inference engine, when a user sends a prompt, you compute the Key-Value (KV) cache from scratch. RadixArk changes the game by treating the KV cache like a classic LRU cache. It automatically reuses the KV blocks from previous requests if they share a prefix. This is massive for agentic workflows where you have a long system prompt or few-shot examples that never change. You aren’t recomputing the same tokens over and over; you’re just mapping to existing memory.
Then there is Inferact, the new commercial face of vLLM, which just raised $150M at an $800M valuation. If RadixArk is about smart caching, Inferact is about brute-force memory efficiency through PagedAttention. Before vLLM, serving a model meant pre-allocating a massive contiguous block of VRAM. It was wasteful; you’d end up with “internal fragmentation” where gigabytes of precious GPU memory sat empty. Inferact applies the operating system concept of “paging” to GPU memory. It breaks the KV cache into non-contiguous blocks that can be scattered anywhere in VRAM. This allows them to batch way more requests together because they aren’t bottlenecked by memory fragmentation.
Why is this happening now? Because inference quality is product quality. In the training era, latency didn’t matter—you could wait weeks for a run to finish. In the inference era, latency is everything. If your agent takes 5 seconds to think, it feels broken. If it costs $0.10 per turn, your business model is dead.
We are seeing a bifurcation in the stack. On one end, BaseTen manages the hardware abstraction. On the other, RadixArk and Inferact are down in the kernels, squeezing every last FLOP out of the silicon. Strap in. We spent a decade teaching computers to think. Now we have to figure out how to make them think fast.
🔎 AI Research
Agentic Reasoning for Large Language Models  
AI Lab: University of Illinois Urbana-Champaign, Meta, Amazon, Google DeepMind, UC San Diego, Yale University 
Summary: This survey formalizes "Agentic Reasoning" as a paradigm shift that transforms Large Language Models from static processors into autonomous agents capable of planning, acting, and self-evolving through interaction. The authors structure the field into foundational, self-evolving, and collective reasoning layers, providing a unified roadmap for optimizing agentic systems via both in-context orchestration and post-training reinforcement learning across domains like science and robotics.
Building Production-Ready Probes For Gemini  
AI Lab: Google DeepMind
 Summary: This paper introduces the MultiMax probe architecture and utilizes automated architecture search to address the failure of existing activation probes on long-context inputs. The authors demonstrate that these improved probes, especially when paired with cascading classifiers, provide a robust and efficient misuse mitigation system for the Gemini model.
Reasoning Models Generate Societies of Thought  
AI Lab: Google, University of Chicago, Santa Fe Institute Summary: This research argues that advanced reasoning in models like DeepSeek-R1 emerges from the implicit simulation of a multi-agent "society of thought" containing diverse perspectives and conversational dynamics. The authors show that reinforcement learning naturally encourages these social behaviors, and that explicitly fine-tuning for conversational structure further accelerates reasoning performance.
Multimodal Reinforcement Learning with Agentic Verifier for AI Agents  
AI Lab: Microsoft Research 
Summary: This paper introduces Argos, a verifier that provides granular, multi-objective rewards for training multimodal agents by assessing spatial grounding, reasoning quality, and final accuracy. This approach enables models to achieve state-of-the-art performance on spatial and embodied AI tasks while significantly reducing visual hallucinations through verifiable reinforcement learning.
Multiplex Thinking: Reasoning via Token-wise Branch-and-Merge  
AI Lab: University of Pennsylvania, Microsoft Research 
Summary: This work presents a “Multiplex Thinking” mechanism that aggregates multiple sampled tokens into a single continuous representation at each step to enable efficient exploration of reasoning paths. This approach facilitates on-policy reinforcement learning without the high cost of long discrete rollouts, leading to superior performance on complex math reasoning benchmarks.
ToolPRMBench: Evaluating and Advancing Process Reward Models for Tool-using Agents  
AI Lab: Arizona State University, Intuit AI Research 
Summary: This paper introduces ToolPRMBench, a specialized benchmark for evaluating Process Reward Models (PRMs) in the context of long-horizon tool-use tasks by focusing on step-level correctness. The study highlights that specialized PRMs and reinforcement learning significantly enhance the ability to detect intermediate errors in agent trajectories compared to general-purpose models.
🤖 AI Tech Releases
GLM 4.7-Flash
Z.ai open sourced GLM-4.7-Flash , a new coding and agentic assistant. 
LFM2.5 Thinking
Liquidi released a new model for on-device reasoning . 
📡AI Radar
Inference & Infrastructure
BaseTen raises $300M at $5B valuation : The inference platform confirmed a massive Series B co-led by IVP and CapitalG, with NVIDIA contributing half the round ($150M) to cement BaseTen as the default orchestration layer for enterprise model serving.
Inferact launches with $150M to commercialize vLLM  Spinning out of UC Berkeley’s Sky Computing Lab, the team behind the popular vLLM library secured $150M from a16z and Lightspeed to build the “Red Hat of inference,” focusing on enterprise-grade support for PagedAttention and kernel optimizations.
RadixArk spins out of SGLang with $400M valuation  Another Berkeley spinout hits the market as the creators of SGLang launch RadixArk to commercialize RadixAttention, aiming to solve the KV-cache bottleneck for complex agentic workflows and long-context reasoning.
Quadric raises $30M for on-device inference   Riding the “Edge AI” wave, Quadric secured Series C funding to push its GPNPU architecture, which allows developers to run high-performance inference on local devices (laptops, autos) rather than the cloud.
Funding & Ventures
Sequoia to invest in Anthropic   Breaking a long-standing VC taboo against backing direct rivals, Sequoia is reportedly finalizing a stake in Anthropic, signaling that the firm views the OpenAI vs. Anthropic battle as a “winner-take-most” duopoly rather than a Highlander scenario.
Bolna secures $6.3M for voice orchestration   General Catalyst led the seed round for Bolna, an India-first voice AI platform that provides the orchestration layer for managing complex, multilingual telephony agents at scale.
LiveKit raises $100M  The infrastructure provider behind OpenAI’s advanced voice mode has raised a fresh $100M Series B to expand its real-time audio/video capabilities for the next generation of multimodal agents.
World Labs in talks for $5B valuation  Fei-Fei Li’s spatial intelligence startup is reportedly negotiating a new funding round that would value the company at $5B, as investors bet heavily on “Large World Models” that understand 3D physics and environments.
Big Tech & Policy
Google launches Gemini-powered SAT practice  In a direct play for the education market, Google has integrated a free, personalized SAT tutor into Gemini, utilizing the model’s reasoning capabilities to offer real-time feedback on practice exams.
China prepares for NVIDIA H200 orders  Beijing has reportedly instructed Alibaba and other tech giants to prepare substantial orders for NVIDIA’s downgraded H200 chips, signaling a continued reliance on CUDA ecosystems despite domestic chip manufacturing efforts.
Google invests in Sakana AI  Deepening its foothold in Japan, Google has invested in Tokyo-based Sakana AI to co-develop smaller, nature-inspired foundation models optimized for Japanese language and culture.

Unsubscribe https://substack.com/redirect/2/eyJlIjoiaHR0cHM6Ly90aGVzZXF1ZW5jZS5zdWJzdGFjay5jb20vYWN0aW9uL2Rpc2FibGVfZW1haWw_dG9rZW49ZXlKMWMyVnlYMmxrSWpveU5UTTRNVFF5TENKd2IzTjBYMmxrSWpveE9EVTBNRFV6TnpNc0ltbGhkQ0k2TVRjMk9UTTBNekF4Tml3aVpYaHdJam94T0RBd09EYzVNREUyTENKcGMzTWlPaUp3ZFdJdE5UUXpNRGtpTENKemRXSWlPaUprYVhOaFlteGxYMlZ0WVdsc0luMC5JYTFBWWpfREg0STNCY1oxcmtrUC1fdTRiNmE0dC1JWFlfNzRZR3ozVXZnIiwicCI6MTg1NDA1MzczLCJzIjo1NDMwOSwiZiI6dHJ1ZSwidSI6MjUzODE0MiwiaWF0IjoxNzY5MzQzMDE2LCJleHAiOjIwODQ5MTkwMTYsImlzcyI6InB1Yi0wIiwic3ViIjoibGluay1yZWRpcmVjdCJ9.IgzBESXCiA79-7iiRx_mJCE-_g6uH8H8lcSy_dcs7vM?
