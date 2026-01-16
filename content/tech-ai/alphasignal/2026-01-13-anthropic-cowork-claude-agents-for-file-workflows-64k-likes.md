---
id: 19bb8a188b31edc7
newsletter: alphasignal
newsletter_name: "AlphaSignal"
category: tech-ai
subject: "🤖 Anthropic Cowork: Claude agents for file workflows (64k likes)"
date: Tue, 13 Jan 2026 18:32:32 +0000
---

# 🤖 Anthropic Cowork: Claude agents for file workflows (64k likes)

**From:** AlphaSignal <news@alphasignal.ai>
**Date:** Tue, 13 Jan 2026 18:32:32 +0000

---

🚨 Anthropic launches Cowork, Claude Code for the rest of office work
DeepSeek speeds Transformer memory, OpenAI acquires Torch, Anthropic's Claude Healthcare, and Gemini expands API limits.
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
Read time: 4 min 32 sec
Top News
▸ Anthropic debuts Cowork enabling
Claude to manage folders
and documents
Top Paper
▸ DeepSeek introduces Engram to speed
Transformer memory access
Top News
▸ OpenAI acquires Torch to add persistent
medical memory to ChatGPT
Health
Signals
▸ Anthropic launches
Claude Healthcare
with new HIPAA connectors
▸ Manus adds
Meeting Minutes
for summaries and actionable post-meeting tasks
▸ Google upgrades Gemini API to
accept external URLs
and bigger files
▸ Apple and Google agree to use
Gemini for future Siri
upgrades
▸ Cursor publishes a
detailed guide on structuring tasks
to improve agent reliability
Today's Author
Lior Alexander. Founder of AlphaSignal and former ML Engineer.
Previously built ML systems at Iguazio, Guesty, Enphase, Mila.
Top News
Anthropic introduces Cowork to bring Claude Code like agent execution to everyday file-based workflow
64,283 Likes
Anthropic built Claude Code for developers, but users quickly pushed it beyond code. They used it for notes, files, spreadsheets, and reports. This led to
Cowork
, which applies the same agent system to everyday work.
The problem is not intelligence but friction. Chat-based assistants require constant prompting, manual context setup, and copy-paste across files.
Cowork changes the interaction model. You give Claude access to a specific local folder, assign a task once, and let it execute autonomously across real files.
Cowork works like an agent rather than a chat. An agent plans steps, performs actions, and reports progress while it works. This matters because many knowledge tasks span dozens of files and require consistent state.
Key capabilities
Reads, creates, edits, renames, and deletes files inside an approved local folder
Plans and executes multi-step tasks without repeated prompts
Queues and runs multiple tasks in parallel
Uses existing Claude connectors for external data
Pairs with Claude in Chrome for browser-dependent workflows
How you use it
Select a folder in the Claude macOS app
Describe the outcome, not the steps
Review progress updates and approvals during execution
Cowork ships as a research preview for Claude Max users on macOS.
TEST COWORK
Top Paper
DeepSeek adds constant-time memory lookup to Transformers using the new Engram module
3,532 Likes
DeepSeek presents a new idea for large language models:
Engram
, a built-in memory module that gives Transformers direct access to stored patterns instead of forcing them to recompute everything from scratch.
Modern LLMs spend early layers rebuilding common token patterns with compute. That approach works, but it consumes depth that later layers need for reasoning. Engram changes that balance by adding constant-time memory lookup inside the model itself.
The key insight is simple. Some information stays static and repeatable. The model should fetch it, not relearn it every time.
Engram stores frequent token
N-grams,
short token sequences, in a hash table and retrieves them in
O(1)
time during the forward pass. The model then fuses this memory with normal hidden states.
Key features
Deterministic hashed N-gram lookup integrated into early and middle Transformer layers
Separate sparsity axis from MoE, with memory capacity independent of compute
Host-memory offloading with negligible inference overhead
Results
Improves factual recall on knowledge benchmarks, with
+3.4 MMLU
and
+4.0 CMMLU
Raises multi-step reasoning accuracy, scoring
+5.0 on BBH
and
+3.7 on ARC-Challenge
Increases code and math correctness, with
+3.0 HumanEval
and
+2.4 MATH
Strengthens long-context retrieval, lifting
Multi-Query NIAH from 84.2 to 97.0
The released code from DeepSeek shows how to integrate it alongside standard Transformer blocks.
READ THE PAPER
Top News
OpenAI incorporates Torch technology so ChatGPT Health can reference long-term medical data during queries
7,294 Likes
OpenAI adds a new piece to ChatGPT Health by acquiring Torch Health. The move targets a common failure mode in health AI: fragmented data.
The most striking part is scope is Torch treats medical history as a single, persistent system rather than isolated files.
Health data rarely lives in one place. Labs, medications, visit notes, wearables, and consumer apps all sit in separate systems. Models see only snapshots, so reasoning stops at the document boundary.
Torch addresses this by acting as a
medical memory for AI
. In simple terms, it collects health records from many sources and stores them as one continuous timeline a model can query.
Key features
Unifies records from hospitals, labs, wearables, and consumer health services
Maintains longitudinal context across visits, tests, and medication changes
Feeds consolidated health history into ChatGPT Health as structured context
This integration shifts ChatGPT Health from stateless Q&A to history-aware reasoning.
EXPLORE TORCH
Signals
1
Anthropic expands Claude with HIPAA-ready healthcare tools, medical data connectors, and trial operations support
2,473 Likes
2
Manus launches Meeting Minutes to summarize meetings, identify speakers, and generate execution-ready outputs
1,047 Likes
3
Google expands Gemini API with GCS registration, signed URL ingestion, and 100MB inline uploads
732 Likes
4
Apple and Google announce collaboration bringing Gemini’s capabilities into upcoming Apple Intelligence features
49,275 Likes
5
Cursor provides a guide explaining workflows and patterns for effective, long-running coding agents
623 Likes
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

Stop receiving emails here: https://app.alphasignal.ai/unsubscribe/u/K1bzInIJROI8zvHA?cid=7139cec86f731805
