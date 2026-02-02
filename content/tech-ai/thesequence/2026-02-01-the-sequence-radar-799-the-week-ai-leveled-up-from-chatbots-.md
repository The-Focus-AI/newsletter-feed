---
id: 19c19168e73803e8
newsletter: thesequence
newsletter_name: "TheSequence"
category: tech-ai
subject: "The Sequence Radar #799: The Week AI Leveled Up: From Chatbots to World Builders"
date: Sun, 1 Feb 2026 12:01:32 +0000
source_url: "https://thesequence.substack.com/p/the-sequence-radar-799-the-week-ai"
---

# The Sequence Radar #799: The Week AI Leveled Up: From Chatbots to World Builders

**From:** TheSequence <thesequence@substack.com>
**Date:** Sun, 1 Feb 2026 12:01:32 +0000
**Source:** [View original](https://thesequence.substack.com/p/the-sequence-radar-799-the-week-ai)

---

View this post on the web at https://thesequence.substack.com/p/the-sequence-radar-799-the-week-ai

Next Week in The Sequence:
Our series about world models dives into the different types of world models. 
Our AI of the week section dives into the amazing Kimi 2.5.
Our opinion section dives into the test time compute technique and its impact in the next generation of frontier AI models.
Subscribe and don’t miss out:
TheSequence is a reader-supported publication. To receive new posts and support my work, consider becoming a free or paid subscriber.
📝 Editorial: The Week AI Leveled Up: From Chatbots to World Builders
If there is a single thread connecting this week’s barrage of AI releases, it is the decisive shift from passive generation to active simulation and agency. The era of the “chatbot” that simply retrieves information is rapidly fading. In its place, we are seeing the rise of models that can reason through complex problems, coordinate swarms of agents, generate playable worlds, and fundamentally restructure scientific workflows.
Moonshot AI’s Kimi K2.5: The Agent Swarm Arrives China’s Moonshot AI has arguably delivered the week’s most significant technical leap with Kimi K2.5. While the version number might suggest a standard iterative update, the architecture tells a different story. K2.5 is built as a native multimodal model, but its standout feature is the “self-directed agent swarm” paradigm.
Unlike previous models that handle tasks linearly, K2.5 can reportedly orchestrate up to 100 sub-agents to execute parallel workflows, managing up to 1,500 tool calls in a single session. This moves the model from a conversational interface to a true “operator,” capable of handling complex, multi-step workflows like full-stack coding or comprehensive research without constant human hand-holding.
Google’s Project Genie: From Video to Virtual Worlds While Moonshot focused on agency, Google DeepMind focused on simulation. The release of Project Genie (previewed earlier as Genie 3) to US subscribers marks a pivotal moment for generative media. Genie allows users to prompt not just videos, but interactive, playable worlds.
This is a “world model” in the truest sense—it understands physics, collision, and navigation well enough to let users control characters inside the generated environment. While currently a research prototype with limitations in realism, Genie represents the first real step toward the “Holodeck” promise of generative AI, moving beyond static pixel prediction to dynamic state simulation.
Qwen3-Max Thinking: The Reasoning Race Goes Global Alibaba Cloud has firmly entered the “System 2” reasoning arena with Qwen3-Max Thinking. Following the path blazed by OpenAI’s o1, this trillion-parameter model introduces a dedicated “thinking” mode that exposes its step-by-step reasoning process.
Benchmarks suggest Qwen3-Max is not just catching up but rivaling frontier models in hard math and coding tasks. This confirms that “test-time compute”—the ability to spend more time thinking to produce better answers—is no longer a moat for Western labs, but a standard feature for flagship models globally. The release is bolstered by the new Qwen3-ASR family , which brings this level of intelligence to speech, offering state-of-the-art multilingual recognition and novel forced alignment capabilities.
OpenAI Prism: The “Google Docs” for Science While models get smarter, OpenAI is moving to own the interface where that intelligence is applied. On Tuesday, the company launched Prism, a free, AI-native workspace powered by its latest GPT-5.2 model. Described as a “LaTeX-native workspace,” Prism integrates drafting, citation management, and equation solving into a single cloud platform.
By allowing researchers to turn whiteboard photos into formatted diagrams and auto-generate bibliographies, OpenAI is executing a classic platform play: commoditizing the scientific workflow to secure the training data and user base for its reasoning models. It is a clear bid to do for science in 2026 what AI copilots did for software engineering in 2025.
The War Chest: SoftBank and OpenAI Underpinning these technical leaps is the capital required to sustain them. Reports surfaced this week that SoftBank is in advanced talks to invest up to $30 billion in OpenAI as part of a larger $100 billion round. If realized, this would be one of the largest single investments in tech history, giving OpenAI a terrifying amount of dry powder to scale infrastructure and compute. It signals that the “AI War” is moving into a phase where capital requirements may essentially gatekeep the frontier, forcing smaller players to consolidate or specialize.
🔎 AI Research
Teaching Models to Teach Themselves: Reasoning at the Edge of Learnability  
AI Lab: MIT, Meta FAIR, New York University
Summary: This paper introduces SOAR, a meta-RL framework that enables models to escape reasoning plateaus by using a teacher model to generate synthetic “stepping stone” problems. By grounding rewards in a student’s actual progress on hard mathematical tasks rather than intrinsic proxies, the authors demonstrate that generating useful problem structures is more critical for unlocking learning than solution correctness.
Paying Less Generalization Tax: A Cross-Domain Generalization Study of RL Training for LLM Agents 
 AI Lab: Meta Superintelligence Labs, FAIR at Meta, Northwestern University, The Ohio State University, University of Pennsylvania
Summary: This study identifies state information richness and planning complexity as the primary environmental factors that correlate with an RL-trained agent’s ability to generalize to unseen domains. To improve robustness, the authors propose a state randomization technique that injects goal-irrelevant noise into training observations, demonstrating that this intervention—alongside explicit reasoning—effectively preserves cross-domain performance.
DSGym: A Holistic Framework for Evaluating and Training Data Science Agents  
AI Lab: Stanford University, Together AI, Duke University, Harvard University
Summary: Addressing the issue where existing benchmarks allow agents to solve tasks without accessing actual data, this paper presents DSGym, a standardized framework for evaluating and training agents in isolated, reproducible execution environments. The work introduces new task suites for bioinformatics and predictive modeling, showing that finetuning on synthetic, execution-verified trajectories within this framework allows smaller models to compete with frontier models like GPT-4o.
ATLAS: Adaptive Transfer Scaling Laws for Multilingual Pretraining, Finetuning, and Decoding the Curse of Multilinguality 
AI Lab: MIT, University of Washington, Stanford University, Google Cloud AI, Google DeepMind 
Summary: This paper introduces ATLAS, a new scaling law framework that explicitly accounts for cross-lingual transfer and data repetition to optimize multilingual model training better than existing laws like Chinchilla. The study also provides a comprehensive language transfer matrix to quantify the "curse of multilinguality," deriving formulas that help practitioners decide whether to pretrain from scratch or finetune based on available compute and language synergy.
Advancing regulatory variant effect prediction with AlphaGenome  
AI Lab: Google DeepMind 
Summary: This paper introduces AlphaGenome, a unified deep learning model that overcomes the trade-off between sequence length and resolution by processing 1 Mb DNA inputs to predict thousands of functional genomic tracks at single-base-pair accuracy. Trained on human and mouse genomes, the model captures diverse regulatory modalities—including gene expression and chromatin accessibility—to significantly improve the prediction of functional effects for non-coding variants.
Qwen3-ASR Technical Report  
AI Lab: Qwen Team 
Summary: This report introduces the Qwen3-ASR family, comprising two all-in-one speech recognition models and a novel non-autoregressive forced aligner that leverage the Qwen3-Omni foundation to deliver state-of-the-art multilingual performance and precise timestamp prediction . The study demonstrates that the 1.7B model rivals top proprietary APIs in accuracy while the compact 0.6B version offers exceptional efficiency for on-device deployment, supporting over 50 languages and dialects.
🤖 AI Tech Releases
Kimi 2.5
Moonshot AI released Kimi 2.5 , a new model for agentic visual intelligence. 
Qwen3-Max-Thinking
Alibaba open sourced Qwen3-Max-Thinking , its marquee reasoning model 
Prism
OpenAI released Prism , a workspace for scientific collaboration. 
Project Genie
Google released Project Genie , an interactive experience for creating virtual environments using Genie3.
📡AI Radar
SpaceX & xAI Merger Talks SpaceX is reportedly in discussions to acquire xAI  in a merger that would consolidate Elon Musk’s ventures ahead of a planned IPO, according to exclusive reporting by Reuters. 
Amazon’s Potential OpenAI Investment Amazon is negotiating a deal to invest up to $50 billion in OpenAI , a move that would significantly deepen ties between the ecommerce giant and the ChatGPT maker. 
Flapping Airplanes Launch New AI research lab Flapping Airplanes emerged from stealth with $180 million  in seed funding to pursue efficiency-focused, research-driven AI architectures. 
Tesla’s xAI Investment Tesla confirmed in a regulatory filing that it has invested $2 billion into Elon Musk’s xAI  to accelerate the development of autonomous driving capabilities. 
Handshake Acquires Cleanlab Data labeling platform Handshake has acquired Cleanlab  to integrate its automated data curation tools, as announced in a letter from Cleanlab’s CEO. 
Modelence Raises $13M:  Y Combinator-backed Modelence secured $13 million in Series A  funding to build standardized infrastructure for the emerging “vibe-coding” development stack. 
Risotto’s Seed Round Risotto raised $10 million  to build an autonomous “AI help desk” that resolves IT and HR tickets instantly, as detailed in their funding announcement. 
CVector Seed Funding Industrial AI startup CVector raised $5 million to deploy a “nervous system” for manufacturing plants  that optimizes operations in real-time. 
Waymo’s Massive Raise Alphabet’s Waymo is seeking to raise approximately $16 billion in a new funding round that would value the autonomous driving company at over $100 billion. Source: Bloomberg 
Perplexity & Microsoft Deal Perplexity inked a $750 million cloud partnership  with Microsoft Azure to diversify its infrastructure, despite its existing relationship with AWS. Source: 
Nvidia Invests in CoreWeave Nvidia has invested $2 billion into specialized cloud provider CoreWeave  to help finance the construction of new large-scale AI data centers. 
Synthesia Hits $4B Valuation AI video generation platform Synthesia doubled its valuation to $4 billion  in a Series E round and announced a liquidity program for employees.

Unsubscribe https://substack.com/redirect/2/eyJlIjoiaHR0cHM6Ly90aGVzZXF1ZW5jZS5zdWJzdGFjay5jb20vYWN0aW9uL2Rpc2FibGVfZW1haWw_dG9rZW49ZXlKMWMyVnlYMmxrSWpveU5UTTRNVFF5TENKd2IzTjBYMmxrSWpveE9EWXdOemd6TlRVc0ltbGhkQ0k2TVRjMk9UazBOelF6TkN3aVpYaHdJam94T0RBeE5EZ3pORE0wTENKcGMzTWlPaUp3ZFdJdE5UUXpNRGtpTENKemRXSWlPaUprYVhOaFlteGxYMlZ0WVdsc0luMC5EdWJQU2FxR2w5aDZYWHlKNE5IdXZRcC1qdzRvT01vTGlaZU9acjZUaEgwIiwicCI6MTg2MDc4MzU1LCJzIjo1NDMwOSwiZiI6dHJ1ZSwidSI6MjUzODE0MiwiaWF0IjoxNzY5OTQ3NDM0LCJleHAiOjIwODU1MjM0MzQsImlzcyI6InB1Yi0wIiwic3ViIjoibGluay1yZWRpcmVjdCJ9.-n_y9jPB9AoBNk-ltVqktbWI2HwuD4T4lkzBlozppok?
