---
id: 19c00bc3503b8632
newsletter: alphasignal
newsletter_name: "AlphaSignal"
category: tech-ai
subject: "🚀 Anthropic MCP Apps: Live UI dashboards embedded in AI chats"
date: Tue, 27 Jan 2026 18:34:19 +0000
---

# 🚀 Anthropic MCP Apps: Live UI dashboards embedded in AI chats

**From:** AlphaSignal <news@alphasignal.ai>
**Date:** Tue, 27 Jan 2026 18:34:19 +0000

---

🚨 Anthropic launches MCP Apps with in-chat interactive UI
Moonshot launches agent swarms and coding agent, Alibaba's Open Code agent, Anthropic flags new risks.
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
Read time: 4 min 22 sec
Top News
▸ Anthropic launches
interactive MCP Apps
, bringing live tool UIs directly into chats
Top News
▸ Moonshot introduces Kimi K2.5, bringing parallel
agent swarms to reasoning
Top News
▸ Alibaba debuts a
reasoning model
leading math and coding benchmarks
Signals
▸ Anthropic CEO warns
AI poses civilizational risks
across security and jobs
▸ Moonshot releases Kimi Code, an open-source
agent for autonomous coding
▸ Alibaba unveils an open-source benchmark for
long-horizon agent planning
▸ Anthropic shows benign outputs can fine-tune
open models into dangerous tools
▸ Luma AI upgrades its video generation model for
cheaper native 1080p output
Today's Author
Lior Alexander. Founder of AlphaSignal and former ML Engineer.
Previously built ML systems at Iguazio, Guesty, Enphase, Mila.
Top News
Anthropic rolls out MCP Apps that embed live dashboards, forms, and workflows directly into chat sessions
18,936 Likes
Anthropic introduces MCP Apps as a new way to put real interfaces directly inside AI conversations. Built on the
Model Context Protocol (MCP)
, MCP Apps let tools return interactive like UI instead of plain text.
The standout shift is that the interface and the model now share state, so interaction happens in one loop, not across repeated prompts.
Before MCP Apps, tools could fetch data or take actions, but users had to steer everything through text. Sorting a table, filtering results, or approving a document meant another message each time.
MCP Apps move those actions into a UI that lives inside the conversation. You click, select, or edit, and the model immediately sees the result.
What MCP Apps add
Tools return interactive UI components, not just text payloads
UI renders inline inside chat using sandboxed iframes
User actions flow back to the model as structured context
State persists across interactions without repeated prompts
How you use it
Declare a UI with _meta.ui.resourceUri in your tool definition
Serve HTML and JavaScript from your MCP server via ui://
Build UI logic with @modelcontextprotocol/ext-apps
Call tools and update model context directly from the UI
TRY MCP APPS
Top News
Moonshot releases an open-source multimodal system that coordinates agent swarms to solve large reasoning problems
5,127 Likes
Moonshot AI introduces Kimi K2.5, an open-source multimodal model trained across text, images, and video. It builds on Kimi K2 with extended pretraining on
15 trillion mixed tokens
.
Large models struggle when one agent must plan, execute, verify, and iterate alone. Errors compound, latency grows, and tool use becomes serial. Kimi K2.5 addresses this with
Agent Swarm
, a system where the model creates and manages many sub-agents in parallel.
The key idea is simple. One orchestrator splits a task into parts, then runs them at the same time. Training uses
Parallel-Agent Reinforcement Learning
, which rewards real parallel execution and measures speed with
critical steps
, the longest parallel path rather than total actions.
Key capabilities and results
Creates up to
100 sub-agents
without predefined roles or workflows
Executes up to
1,500 coordinated tool calls
in a single task
Reduces critical steps by
3×-4.5×
versus single-agent execution
Supports coding with vision, including image-to-code and visual debugging
Reports strong results on
HLE
,
BrowseComp
, and
SWE-Bench Verified
How you use it
Access via Kimi.com, Kimi App, API, or terminal-based
Kimi Code
Integrate with VS Code, Cursor, or Zed
Select Instant, Thinking, Agent, or
Agent Swarm (beta)
modes
BUILD WITH K2.5
Top News
Alibaba launches Qwen3-Max-Thinking as an API-only reasoning model delivering top agentic search performance
3,682 Likes
Qwen3-Max-Thinking is Alibaba Qwen’s latest flagship reasoning model, built for tasks where single-pass answers fall apart. Instead of guessing once, it thinks in rounds, checks itself, and uses tools when needed.
The standout result is its
58.3 score on Humanity’s Last Exam with tools
, the highest reported among comparable frontier models.
Earlier Qwen models focused on strong base reasoning. This release adds test-time scaling, which means the model spends extra compute at inference to revisit hard steps.
In practice, it runs multiple short reasoning rounds and reuses useful intermediate conclusions instead of starting over.
What the model does
Solves complex math, coding, and search tasks with multi-step reasoning.
Selects Search, Memory, and Code Interpreter tools automatically.
Uses reinforcement learning to improve decision quality across reasoning stages.
Key results
92.8 GPQA Diamond, 91.5 IMO-AnswerBench, 98.0 HMMT Feb 2025.
91.4 LiveCodeBench and 75.3 SWE-bench Verified.
58.3 HLE with tools, leading all reported models.
How you use it
Call the API via Alibaba Cloud Model Studio as qwen3-max-2026-01-23.
Use OpenAI- or Anthropic-compatible SDKs, including Claude Code.
Control or disable tool access through API configuration.
TRY NOW
Signals
1
Anthropic CEO highlights AI’s potential to destabilize economies, politics, and global safety
15,384 Likes
2
Moonshot debuts Kimi Code, an extensible open-source agent that automates coding through multimodal reasoning
1,825 Likes
3
Alibaba presents DeepPlanning, an open-source test of agentic LLM planning with real-world constraints
1,163 Likes
4
Anthropic reports open models become dangerous when fine-tuned on benign outputs
1,818 Likes
5
Luma AI launches Ray3.14 with native 1080p output that renders faster, cheaper, and more consistently
891 Likes
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

Stop receiving emails here: https://app.alphasignal.ai/unsubscribe/u/K1bzInIJROI8zvHA?cid=b2608e9db7901ee1
