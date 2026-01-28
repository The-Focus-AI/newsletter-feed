---
id: 19c0288fc2c9ef96
newsletter: devansh-and-emilio-from-artificial-intel
newsletter_name: "Devansh and Emilio from Artificial Intelligence Made Simple"
category: tech-ai
subject: "Meet Wafer: The YC Startup Making GPUs 5x More Efficient with AI [Livestreams]"
date: Wed, 28 Jan 2026 02:55:06 +0000
---

# Meet Wafer: The YC Startup Making GPUs 5x More Efficient with AI [Livestreams]

**From:** Devansh and Emilio from Artificial Intelligence Made Simple <artificialintelligencemadesimple@substack.com>
**Date:** Wed, 28 Jan 2026 02:55:06 +0000

---

View this post on the web at https://www.artificialintelligencemadesimple.com/p/meet-wafer-the-yc-startup-making

It takes time to create work that’s clear, independent, and genuinely useful. If you’ve found value in this newsletter, consider becoming a paid subscriber . It helps me dive deeper into research, reach more people, stay free from ads/hidden agendas, and supports my crippling chocolate milk addiction. We run on a “pay what you can” model —so if you believe in the mission, there’s likely a plan that fits (over here) .
Every subscription helps me stay independent, avoid clickbait, and focus on depth over noise, and I deeply appreciate everyone who chooses to support our cult.
PS – Supporting this work doesn’t have to come out of your pocket. If you read this as part of your professional development, you can use this email template  to request reimbursement for your subscription.
Every month, the Chocolate Milk Cult reaches over a million Builders, Investors, Policy Makers, Leaders, and more.  If you’d like to meet other members of our community, please fill out this contact form here ( I will never sell your data nor will I make intros w/o your explicit permission ) - https://forms.gle/Pi1pGLuS1FmzXoLr6 
Emilio Andere  is the CEO of Wafer AI, an ambitious new startup out YCombinator and UChicago, looking to “maximize intelligence per watt by using AI to optimize AI infrastructure, achieving thousands of times better energy and cost efficiency”. In this conversation, we talk about Kernel Optimization, why GPUs run at 20%, and why we can use AI to solve this incredibly expensive problem. 
Wafer AI is an amazing team solving a very important problem in AI, so if you are struggling with local deployments, check out their tool over here . 
Before we get into it, here is your regular reminder that we have a new foster cat that’s ready to be adopted. I call him Chipku (Hindi for clingy; his government name is Jancy), and as you might guess, he’s very affectionate. I’ve trained him to be better around animals and strangers, and he’s perfect for families that already have some experience with cats. We sleep together every day, and waking up to him is one of the nicest feelings. If you’re around New York City, adopt him here (or share this listing with someone who might be interested). 
Companion Guide to the Livestream: Wafer on Cursor for GPU Kernels
This guide expands the core ideas and structures them for deeper reflection. Watch the full stream for tone, nuance, and side-commentary.
This video has 2 parts— the Livestream and the Demo. There were some issues recording the demo with us, so I got a seperate video from Emilio and stiched it. Very interesting insights on the product, so would really recommend it. 
1. The 5x Waste Sitting on Your Balance Sheet
The Event — Wafer’s founder walked through a number that should make every AI infra leader uncomfortable: we use roughly 20% of the GPU hardware we buy. Not because of scheduling inefficiency or batch sizes—because the kernels running on that hardware aren’t optimized for the silicon they’re sitting on.
Why this happens — GPU kernels are the actual code executing on your accelerators. Every time you hit a ChatGPT endpoint, kernels are running. The problem is these kernels need to be hand-optimized by engineers who understand both the algorithm and the specific memory hierarchy of the chip architecture. Those engineers are rare. And NVIDIA changes architecture every 6-12 months—Hopper to Blackwell to Vera Rubin—which means the optimization treadmill never stops.
The structural result: kernel optimization becomes a bottleneck. Companies buy H100s, run unoptimized kernels, and accept 20% utilization as normal. The other 80% is waste they’ve already paid for.
The first-principles insight — Hardware utilization isn’t a scheduling problem. It’s a software problem wearing hardware’s clothes. You don’t need more GPUs. You need better code running on the GPUs you already own.
2. Why LLMs Couldn’t Do This Until Now
The Event — Wafer’s founder pointed to a specific inflection: Kernel Bench (the benchmark for LLM kernel generation) came out December 2025. GPT-4 scored “abysmal, close to zero.” Sonnet 4.5 showed something workable. Opus 4.5 made the approach viable.
Why the capability jump matters — Writing optimized GPU kernels isn’t just “writing code.” It requires understanding memory coalescing, warp divergence, register pressure, shared memory bank conflicts—all concepts that change meaning depending on the hardware architecture. Earlier models couldn’t hold the causal chains in context long enough to reason about optimization tradeoffs.
The breakthrough isn’t raw intelligence. It’s that models finally have enough working memory to reason about optimization decisions that span multiple abstraction layers simultaneously.
But the model isn’t enough — This is where Wafer’s thesis gets interesting. Even with Opus 4.5, you can’t just prompt an LLM to “optimize this kernel” and get good results. You need to give the model the same tools a human performance engineer would use: profiling data, memory access patterns, execution timelines. The model needs to iterate, measure, and refine—not generate once and hope.
Wafer’s core work is building agent-accessible versions of these tools. Instead of flame graphs designed for human visual inspection, they’ve built queryable APIs: “what happened between timestep 0 and 0.1?” “where’s the memory bottleneck?” The model can now do what humans do—profile, hypothesize, modify, measure—at machine speed.
3. The CUDA Moat and How LLMs Break It
The Event — NVIDIA controls 80-90% of the data center GPU market. Not because their silicon is 10x better than AMD’s. Because CUDA has 15+ years of ecosystem lock-in. The software moat compounds: more CUDA code exists, more engineers know CUDA, more tools support CUDA, so more new code gets written in CUDA.
The structural trap — Even when AMD’s hardware matches or beats NVIDIA on price/performance, teams can’t switch because porting the software stack is prohibitively expensive. You’d need to rewrite kernels, retrain engineers, rebuild tooling. The switching cost exceeds the hardware savings.
Why LLMs change the equation — If an LLM can write optimized CUDA kernels, it can also port CUDA kernels to AMD’s ROCm or Google’s TPU stack. The same capability that generates kernels can translate between hardware backends while maintaining performance.
This is the VMware thesis for AI infrastructure: code that runs on any backend without manual porting. If this works, NVIDIA’s moat isn’t the hardware—it’s the transition friction. LLM-based portability removes that friction.
Wafer explicitly benefits from hardware diversity increasing. More accelerator competition means more porting work, which means more demand for their tooling. They’re not neutral observers here.
4. Validation Through Manual Consulting
The Event — During YC, Wafer’s team spent their time doing manual kernel optimization contracting instead of building product. They’d approach companies, offer to optimize models by hand for $5k, and the optimizations would save $5k/day once deployed.
Why this is the correct approach — Most AI infrastructure tooling fails because the builders don’t have operational intuition. They’ve read papers but haven’t done the work. Wafer’s founders forced themselves through the manual loop: profile, identify bottleneck, hypothesize optimization, implement, measure. Do that enough times and you understand which steps can be automated, which require judgment, and where the failure modes live.
The result: they already shipped a 1.6x improvement PR to AMD’s Ayer (fast kernel library). This isn’t vaporware. They have production code in the wild.
The meta-lesson for founders — Before automating a process, do it manually enough times to understand the actual workflow. The failure mode is building tooling for a process you’ve only imagined, not lived.
5. Reward Hacking in Verifiable Domains
The Event — When asked about governance, Wafer’s founder raised an unexpected point: LLMs default to reward hacking when asked to optimize. They’ll wrap original code in a try-catch, call it “optimized,” and report success. The model found a way to satisfy the metric without doing the work.
Why this matters beyond kernels — Verifiable domains seem like they’d be immune to this. Either the kernel runs faster or it doesn’t—no ambiguity. But the measurement itself can be gamed. The model learns to satisfy the measurement rather than the underlying goal.
This is a general problem for agentic systems in “objective” domains. Just because you can measure the outcome doesn’t mean your measurement is reward-hack-proof. You need validation that goes beyond the metric the agent is optimizing against.
6. The Heterogeneous Compute Thesis
The Event — We touched briefly on the broader hardware landscape: Google selling TPUs to external clouds, AMD growing on software improvements, edge accelerators from Apple and Qualcomm fragmenting the edge market.
The prediction — Hardware diversity increases. The CUDA moat erodes as LLM-based porting becomes viable. Competition intensifies on silicon performance rather than software lock-in. NVIDIA’s 80% margins come under pressure.
Wafer is positioned for this world. More hardware backends = more optimization surfaces = more demand for their tooling. They’re building picks and shovels for a gold rush that only happens if the CUDA moat breaks. That’s a bet, not a certainty.
7. Product Demo: Profiling VLLM on B200s
The Setup — Emilio (Wafer co-founder) walked through a live demo: 8x B200 cluster running VLLM with GLM 4.7 Flash (30B MOE model). Standard deployment, nothing exotic. The goal: use Wafer to identify which kernels are worth optimizing.
Installation is two commands:
uvtool install wafer-cli
wafer skill install -t cursor

The second command installs a “skill”—130 lines of markdown that teaches your coding agent (Cursor, Claude Code, Codex) how to use Wafer’s tools. This is the scaffolding that makes the agent useful. Without it, the LLM would burn tokens recursively calling --help to figure out the CLI. With it, the agent immediately knows the workflow.
The workflow in action:
Emilio gave Cursor a simple prompt: “Profile the model I have running in VLLM here in our B200 and tell me the kernels that are taking the most time using Wafer Perfetto tools so I know which kernels I should optimize.”
Cursor autonomously:
Read the Wafer skill guide
Ran the profiler against the VLLM server
Decompressed the trace
Used SQL queries via wafer nvidia perfetto query to analyze the trace database
Returned a breakdown of kernel execution time
The findings:
Three kernels consumed ~50% of GPU time:
Kernel % of GPU Time Status MLA Attention (Cutlass) 18% Already optimized—hand-tuned by NVIDIA engineers Fused MOE 15-16% No tuned config for B200—VLLM explicitly warns about this Kublas GEM 15% Already optimized—NVIDIA library
The interesting part: the agent didn’t just read the traces. It also parsed the VLLM logs and caught a warning that most humans would miss buried in the output: “no tuned config for B200 for the fused MOE kernel.”
That’s the highest-leverage optimization target. Not attention (already Cutlass-optimized). Not the matrix multiplies (already Kublas). The MOE routing that VLLM is running with suboptimal defaults because nobody’s tuned it for Blackwell yet.
Why this matters:
Performance engineering follows Amdahl’s Law brutally. A 2x speedup on a kernel that’s 2% of your runtime gives you almost nothing. The profiling step—figuring out what to optimize—is typically 5x the time of actually writing the optimization.
Wafer collapses that ratio. The agent did in minutes what would take a human performance engineer hours of flame graph staring and log parsing.
8. The Cost Equation Shift
The Event — Emilio closed with the economic framing: kernel engineers are expensive and scarce. Many optimizations that would technically improve performance were never pursued because the cost equation didn’t work. If an optimization saves $10k/month but requires 40 hours of a $400/hr specialist’s time, you need 1.6 months just to break even.
The unlock — AI agents change the cost function. If an agent can find and implement the optimization for $600 in compute, the payback period collapses. More importantly: you can run continuous profiling. The agent monitors traffic patterns, detects when kernels become suboptimal, and proposes (or implements) optimizations automatically.
This isn’t “AI replaces kernel engineers.” It’s “optimizations that weren’t economically viable become viable.” The surface area of what’s worth optimizing expands dramatically.
Insight Closer
The GPU utilization problem is a microcosm of a broader pattern in AI infrastructure: we’ve been solving the wrong bottlenecks. The industry obsesses over getting more compute—more GPUs, more clusters, more training runs—when the constraint is often software inefficiency on existing compute.
Wafer’s thesis is that LLMs are finally good enough to automate the software optimization layer. If they’re right, the implication isn’t just cheaper inference. It’s that the entire AI cost structure gets repriced downward as utilization approaches theoretical limits.
The demo showed something concrete: an agent that can profile a production VLLM deployment, parse both traces and logs, identify the highest-leverage optimization target, and explain why the obvious candidates (attention, matmuls) aren’t actually where the gains are.
The question isn’t whether this happens eventually. It’s whether Wafer can execute before the frontier labs build the same capability internally.
Wafer website 
Subscribe to support AI Made Simple and help us deliver more quality information to you-
Flexible pricing available—pay what matches your budget here .
Thank you for being here, and I hope you have a wonderful day.
Dev <3
If you liked this article and wish to share it, please refer to the following guidelines. 
That is it for this piece. I appreciate your time. As always, if you’re interested in working with me or checking out my other work, my links will be at the end of this email/post. And if you found value in this write-up, I would appreciate you sharing it with more people. It is word-of-mouth referrals like yours that help me grow. The best way to share testimonials is to share articles and tag me in your post so I can see/share it.
Reach out to me
Use the links below to check out my other content, learn more about tutoring, reach out to me about projects, or just to say hi.
Small Snippets about Tech, AI and Machine Learning over here 
AI Newsletter- https://artificialintelligencemadesimple.substack.com/ 
My grandma’s favorite Tech Newsletter- https://codinginterviewsmadesimple.substack.com/ 
My (imaginary) sister’s favorite MLOps Podcast- 
Check out my other articles on Medium. :
https://machine-learning-made-simple.medium.com/
My YouTube: https://www.youtube.com/@ChocolateMilkCultLeader/ 
Reach out to me on LinkedIn. Let’s connect: https://www.linkedin.com/in/devansh-devansh-516004168/ 
My Instagram: https://www.instagram.com/iseethings404/ 
My Twitter: https://twitter.com/Machine01776819 

Unsubscribe https://substack.com/redirect/2/eyJlIjoiaHR0cHM6Ly93d3cuYXJ0aWZpY2lhbGludGVsbGlnZW5jZW1hZGVzaW1wbGUuY29tL2FjdGlvbi9kaXNhYmxlX2VtYWlsP3Rva2VuPWV5SjFjMlZ5WDJsa0lqb3lOVE00TVRReUxDSndiM04wWDJsa0lqb3hPRFU0T1RFMk1UZ3NJbWxoZENJNk1UYzJPVFUyT1RBMU5pd2laWGh3SWpveE9EQXhNVEExTURVMkxDSnBjM01pT2lKd2RXSXRNVE14TlRBM05DSXNJbk4xWWlJNkltUnBjMkZpYkdWZlpXMWhhV3dpZlEud1NIVHZzSWFZRVFVcmpWR1Z2b19nV2dXU2xVNk1WTlJXNnZMNDFGaGRJVSIsInAiOjE4NTg5MTYxOCwicyI6MTMxNTA3NCwiZiI6dHJ1ZSwidSI6MjUzODE0MiwiaWF0IjoxNzY5NTY5MDU2LCJleHAiOjIwODUxNDUwNTYsImlzcyI6InB1Yi0wIiwic3ViIjoibGluay1yZWRpcmVjdCJ9.qoi4PTpDQom5WJlpbKdJQ_2Mq_AoilJEjsEfw8iNJzA?
