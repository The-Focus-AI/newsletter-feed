---
id: 19be0763a48b7694
newsletter: thesequence
newsletter_name: "TheSequence"
category: tech-ai
subject: "The Sequence AI of the Week #793: DeepSeek's New Paper: Storing 100B Parameters on CPU RAM"
date: Wed, 21 Jan 2026 12:03:23 +0000
---

# The Sequence AI of the Week #793: DeepSeek's New Paper: Storing 100B Parameters on CPU RAM

**From:** TheSequence <thesequence@substack.com>
**Date:** Wed, 21 Jan 2026 12:03:23 +0000

---

View this post on the web at https://thesequence.substack.com/p/the-sequence-ai-of-the-week-deepseeks

If you’ve been following the LLM space, you know the current meta is dominated by two things: scaling up and sparsifying everything. We are obsessed with Mixture-of-Experts (MoE), tossing trillions of parameters at a problem but only activating a tiny fraction per token to keep the FLOPs manageable. It’s a beautiful hack that has allowed us to break past dense model limitations.
But sometimes, in our rush to build ever-larger differentiable computers, we forget our roots. We forget that not every problem requires a massive matrix multiplication.
I recently finished reading a fascinating paper out of DeepSeek AI, titled “Conditional Memory via Scalable Lookup.”  It’s one of those papers that makes you slap your forehead and say, “Of course, why weren’t we doing this already?”
The core insight is blindingly simple: Large Language Models are terribly inefficient because we are forcing them to simulate static lookup tables using expensive neural computation...

Unsubscribe https://substack.com/redirect/2/eyJlIjoiaHR0cHM6Ly90aGVzZXF1ZW5jZS5zdWJzdGFjay5jb20vYWN0aW9uL2Rpc2FibGVfZW1haWw_dG9rZW49ZXlKMWMyVnlYMmxrSWpveU5UTTRNVFF5TENKd2IzTjBYMmxrSWpveE9EVXhOek0yTnpjc0ltbGhkQ0k2TVRjMk9EazVOelF3TWl3aVpYaHdJam94T0RBd05UTXpOREF5TENKcGMzTWlPaUp3ZFdJdE5UUXpNRGtpTENKemRXSWlPaUprYVhOaFlteGxYMlZ0WVdsc0luMC5PRzlJeE9ZdDA3Y2pTUFI4U2plUjFNekZ1VVJKUFFFRklBUVpSai1tQ0RzIiwicCI6MTg1MTczNjc3LCJzIjo1NDMwOSwiZiI6dHJ1ZSwidSI6MjUzODE0MiwiaWF0IjoxNzY4OTk3NDAyLCJleHAiOjIwODQ1NzM0MDIsImlzcyI6InB1Yi0wIiwic3ViIjoibGluay1yZWRpcmVjdCJ9.R7gp4YdabLC7LmF6BHmYFvH6pfu3_YxL8qngkiD_Mbc?
