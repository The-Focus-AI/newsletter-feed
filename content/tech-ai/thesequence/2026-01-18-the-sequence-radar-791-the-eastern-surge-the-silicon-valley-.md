---
id: 19bd1017bed6ed16
newsletter: thesequence
newsletter_name: "TheSequence"
category: tech-ai
subject: "The Sequence Radar #791: The Eastern Surge & The Silicon Valley Shuffle"
date: Sun, 18 Jan 2026 12:01:52 +0000
source_url: "https://thesequence.substack.com/p/the-sequence-radar-791-the-eastern"
---

# The Sequence Radar #791: The Eastern Surge & The Silicon Valley Shuffle

**From:** TheSequence <thesequence@substack.com>
**Date:** Sun, 18 Jan 2026 12:01:52 +0000
**Source:** [View original](https://thesequence.substack.com/p/the-sequence-radar-791-the-eastern)

---

View this post on the web at https://thesequence.substack.com/p/the-sequence-radar-791-the-eastern

Next Week in The Sequence:
We are wrapping up our series about synthetic data generation with a hot summary. Our opinion section is going to take the opposite view of our recent models vs. systems thesis. Can’t miss that. In our AI of the week, we dive into DeepSeek’s newest paper. 
Subscribe and don’t miss out:
TheSequence is a reader-supported publication. To receive new posts and support my work, consider becoming a free or paid subscriber.
📝 Editorial: The Eastern Surge & The Silicon Valley Shuffle
I wanted to take a moment to dump my cache on what has been a ridiculously high-velocity week in AI. If you tried to plot the gradient of progress this week, you’d probably hit a NaN error.
We have a lot to cover—from DeepSeek’s architectural “sanity check” to Baidu’s quiet ascent, and the zero-day rehiring drama in Silicon Valley.
Let’s run the forward pass.
1. DeepSeek Engram: The “Hash Map” Moment
First, the DeepSeek “Engram” paper (released Jan 12). This is a beautiful piece of engineering intuition.
For years, we’ve been forcing Transformers to do two things at once: reason (dynamic computation) and memorize (static knowledge). It’s inefficient. It’s like using a supercomputer to remember that “Paris” is the capital of “France.” You don’t need a neural net for that; you need a hash map.
DeepSeek’s solution is Engram: a “conditional memory” module. They offload static N-gram patterns to a massive, O(1) lookup table, freeing up the MoE experts to do actual reasoning.
They found a “U-shaped scaling law” where allocating ~20-25% of your sparse parameters to this memory module creates the optimal loss curve. It’s a reminder that Sparsity isn’t just about routing experts; it’s about routing types of cognition.
2. The Chinese Model Surge (Baidu & GLM)
While the West focused on scaling laws, the East had a massive week in architectural refinement.
Baidu Ernie 5.0: On Jan 15, Baidu dropped the Ernie 5.0-0110 checkpoint. It immediately hit #1 on the LMArena leaderboard for Chinese models (and #8 globally). We often underestimate the incumbents, but Baidu’s move to a “unified auto-regressive” native multimodal architecture is paying off. They are closing the gap on reasoning benchmarks faster than export controls can widen them.
Zhipu AI (GLM): Fresh off their IPO, Zhipu released GLM-Image this week (Jan 13). The critical detail here isn’t just the image quality; it’s the hardware. This model was trained entirely on Huawei Ascend chips. It’s a definitive proof-of-concept that the localized hardware stack is maturing enough to support SOTA training runs.
3. High Drama in the Loss Landscape (Thinking Machines)
Speaking of optimization difficulties, the Thinking Machines Lab drama was a massive spike in the loss landscape.
If you missed it: Co-founders Barret Zoph and Luke Metz left Mira Murati’s startup to return to OpenAI. The timeline was tighter than a CUDA kernel optimization—Zoph was reportedly “fired” and rehired by OpenAI within 58 minutes.
This highlights the extreme talent scarcity in our field. We are effectively watching a “generative adversarial network” (GAN) play out between labs, fighting over the few hundred people on Earth who truly understand post-training. The “bus factor” for AGI is terrifyingly low.
4. Brain-AI Interface (Merge Labs)
Finally, OpenAI led a massive $252M round in Merge Labs (Jan 15).
I’ve written before about the “human bottleneck.” We have high-dimensional thoughts, but we compress them into low-bandwidth text to talk to AI. Merge is building ultrasound-based BCIs (Brain-Computer Interfaces). Unlike Neuralink (which requires drilling), this is non-invasive “wetware” integration.
If we want to truly merge with “Software 3.0,” we need to bypass the keyboard. It’s early days—stochastic, for sure—but it’s the logical next step in the stack.
The ecosystem is evolving. We are seeing architectural specialization (Engram), sovereign hardware success (GLM on Huawei), and hardware integration (Merge).
It’s a great time to be building. Keep learning, keep coding.
🔎 AI Research
Conditional Memory via Scalable Lookup: A New Axis of Sparsity for Large Language Models 
AI Lab: DeepSeek-AI, Peking University
Summary: This paper proposes Engram, a conditional memory module that uses hashed N-gram lookups to offload static knowledge retrieval from the main computation of Transformers. By optimizing the allocation between neural computation and static memory, the architecture achieves superior performance in reasoning and long-context tasks compared to standard Mixture-of-Experts baselines.
ArenaRL: Scaling RL for Open-Ended Agents via Tournament-based Relative Ranking 
AI Lab: Tongyi DeepResearch (Alibaba Group)
Summary: This paper addresses the “discrimination collapse” in reinforcement learning for open-ended tasks by replacing unstable scalar rewards with a tournament-based relative ranking system. Using a cost-effective seeded single-elimination tournament, the method significantly outperforms standard RL baselines on complex reasoning and planning benchmarks like Open-Travel and Open-DeepResearch.
X-CODER: Advancing Competitive Programming with Fully Synthetic Tasks, Solutions, and Tests 
AI Lab: Tsinghua University, Microsoft, Wuhan University
Summary: This work presents SynthSmith, a pipeline that generates fully synthetic, competition-level programming tasks, solutions, and test cases to overcome data scarcity in code reasoning. The resulting X-Coder models achieve state-of-the-art performance on benchmarks like LiveCodeBench by leveraging this synthetic data for both supervised fine-tuning and reinforcement learning, effectively reducing reliance on real-world data.
TranslateGemma Technical Report 
AI Lab: Google
Summary: This paper details TranslateGemma, a suite of open machine translation models fine-tuned from Gemma 3 using a mix of synthetic and human-generated parallel data followed by reinforcement learning. The models achieve substantial quality improvements over the base Gemma 3 checkpoints across 55 language pairs, with smaller variants often matching the performance of larger baseline models.
Qwen3-VL-Embedding and Qwen3-VL-Reranker: A Unified Framework for State-of-the-Art Multimodal Retrieval and Ranking 
AI Lab: Tongyi Lab, Alibaba Group
Summary: This report introduces the Qwen3-VL-Embedding and Reranker models, which map diverse modalities—including text, image, video, and visual documents—into a unified representation space for high-precision multimodal search. The embedding model achieves top-tier results on benchmarks like MMEB-V2 by utilizing a multi-stage training process that progresses from large-scale contrastive pre-training to distillation from a cross-encoder reranker.
Ministral 3 
AI Lab: Mistral AI
Summary: This report releases the Ministral 3 family of parameter-efficient language models (3B, 8B, and 14B), which are derived via Cascade Distillation to efficiently transfer knowledge from larger parent models. The models are available in base, instruct, and reasoning variants, achieving competitive performance against similar-sized models while requiring a fraction of the training compute.
🤖 AI Tech Releases
Cowork
Anthropic introduced Claude Cowork , an agent for productivity tasks. 
MedGemma 1.5
Google released MedGemma 1.5 , a new model for medical image processing. 
GLM Image
Z.ai open sourced GLM-Image , a super hihg fidelity image generation model. 
Ernie 5
Baidu released Ernie 5 , its marquee model with impressive benchmark results. 
📡AI Radar
Thinking Machines Lab Mira Murati’s AI startup, Thinking Machines Lab, is reportedly losing two of its co-founders who are departing to join OpenAI . Source:  
OpenAI & Cerebras OpenAI has signed a deal reportedly worth $10 billion  to secure compute capacity from chipmaker Cerebras. 
Type One Energy The Bill Gates-backed stellarator fusion company, Type One Energy, has raised $87 million  in new funding as it positions itself for a $250 million Series B. 
DepthFirst AI security startup DepthFirst has announced a $40 million Series A round  to scale its “General Security Intelligence” platform for codebases. 
WitnessAI WitnessAI has raised $58 million to solve enterprise AI risk  by providing a specialized platform for visibility and governance of AI usage. 
VoiceRun VoiceRun has secured $5.5 million in funding  to build a “voice agent factory,” helping developers deploy serverless, enterprise-grade voice AI agents. 
SkyFi Satellite imagery marketplace SkyFi has raised $12.7 million to further its goal of turning earth observation data into accessible insights. Source: SkyFi 
ElevenLabs The CEO of ElevenLabs stated that the voice AI startup crossed $330 million in Annual Recurring Revenue (ARR)  during the last year. 
Deepgram Deepgram has raised $130 million at a $1.3 billion valuation  and acquired a Y Combinator AI startup to expand its voice intelligence capabilities. 
Superorganism Venture firm Superorganism has raised $25 million to back startups focused on preventing biodiversity loss and extinction. Source: Superorganism 
BlackRock & Microsoft The AI infrastructure partnership between BlackRock and Microsoft has reportedly raised $12.5 billion  so far to fund data centers and energy projects. 
TSMC TSMC reported profits that beat analyst estimates , serving as a fresh indicator of the continued strength in global AI hardware demand. 
Taiwan Ministry of Economic Affairs has announced a massive $250 billion investment plan for U.S. semiconductor manufacturing , following a new trade agreement designed to reduce tariffs and strengthen supply chain resilience between the two nations. Source: Ministry of Economic Affairs, R.O.C. 
Merge Labs OpenAI has invested in Merge Labs , a brain-computer interface (BCI) startup co-founded by Sam Altman that is developing non-invasive, ultrasound-based technology to bridge biological and artificial intelligence. 
Wikimedia Foundation The Wikimedia Foundation has announced new strategic partnerships with major AI providers —including Amazon, Meta, Microsoft, and Perplexity—to license its content and ensure AI models are grounded in reliable, free knowledge. 
Parloa Enterprise AI customer service platform Parloa has raised $350 million in a Series D round, tripling its valuation to $3 billion  in just eight months as it scales its “Agentic AI” technology. 
Replit AI-powered software development platform Replit is reportedly nearing a new funding round that would value the company at $9 billion , driven by the success of its autonomous coding agents. 
RunPod AI cloud infrastructure startup RunPod has reached $120 million in Annual Recurring Revenue (ARR ), marking rapid growth for a company that famously originated from a Reddit post.

Unsubscribe https://substack.com/redirect/2/eyJlIjoiaHR0cHM6Ly90aGVzZXF1ZW5jZS5zdWJzdGFjay5jb20vYWN0aW9uL2Rpc2FibGVfZW1haWw_dG9rZW49ZXlKMWMyVnlYMmxrSWpveU5UTTRNVFF5TENKd2IzTjBYMmxrSWpveE9EUTJORGd4TVRFc0ltbGhkQ0k2TVRjMk9EY3pPREE1TWl3aVpYaHdJam94T0RBd01qYzBNRGt5TENKcGMzTWlPaUp3ZFdJdE5UUXpNRGtpTENKemRXSWlPaUprYVhOaFlteGxYMlZ0WVdsc0luMC4wOXVFQVNZVFdnc1ZJUVVVWGV4a254dHVGMFZYTzYwNHlON3NXRGpzY1BRIiwicCI6MTg0NjQ4MTExLCJzIjo1NDMwOSwiZiI6dHJ1ZSwidSI6MjUzODE0MiwiaWF0IjoxNzY4NzM4MDkyLCJleHAiOjIwODQzMTQwOTIsImlzcyI6InB1Yi0wIiwic3ViIjoibGluay1yZWRpcmVjdCJ9.58lPoQD2vZH9oj6fPpRhFxv8fC0kbEF5V41JEY3oStA?
