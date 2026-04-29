---
id: 19dd4007e042d2cc
newsletter: thesequence
newsletter_name: "TheSequence"
week: 18
subject: "The Sequence Knowledge #850: The Unexpected Comeback of RNNs"
date: Tue, 28 Apr 2026 12:03:20 +0000
source_url: "https://thesequence.substack.com/p/the-sequence-knowledge-850-the-unexpected"
---

# The Sequence Knowledge #850: The Unexpected Comeback of RNNs

**From:** TheSequence <thesequence@substack.com>
**Date:** Tue, 28 Apr 2026 12:03:20 +0000
**Source:** [View original](https://thesequence.substack.com/p/the-sequence-knowledge-850-the-unexpected)

---

View this post on the web at https://thesequence.substack.com/p/the-sequence-knowledge-850-the-unexpected

💡 AI Concept of the Day: The Unexpected Comeback of RNNs
If you were building sequence models circa 2015, your mental model of the world was entirely shaped by Recurrent Neural Networks (RNNs). There was a deep, architectural elegance to them. You feed the network a token, it updates a fixed-size hidden state, and it throws the token away. During inference, the memory footprint was beautifully constant—an $O(1)$ operation that could run efficiently on almost any hardware.
Then came 2017. “Attention Is All You Need” dropped, and the entire AI ecosystem pivoted. We traded the elegance of the RNN for the brute-force parallelizability of the Transformer. The Transformer won the hardware lottery because it allowed us to map the entire sequence onto a GPU grid and train it all at once. But we made a devil’s bargain: the Key-Value (KV) cache.
In a Transformer, the model must explicitly hold the high-dimensional representations of every previous token in memory to generate the next one. This is an O(N^2) operation. As we push models to 100K, 1M, and now multi-million token context windows, the compute graph becomes mathematically offensive. We are burning vast amounts of high-bandwidth memory simply doing memory reads.
This is why, if you watch the arXiv firehose closely right now, you will notice a massive vibe shift. We are witnessing the comeback of the RNN. But this is not a nostalgic return to the classic Long Short-Term Memory (LSTM) networks of the 2010s. The new generation of RNNs features larger states, data-dependent gating, and LLM-era training recipes. They are matching Transformer perplexity at scale, but keeping that sweet $O(1)$ inference cost.
Here is a look at the architectures driving the recurrent renaissance...

Unsubscribe https://substack.com/redirect/2/eyJlIjoiaHR0cHM6Ly90aGVzZXF1ZW5jZS5zdWJzdGFjay5jb20vYWN0aW9uL2Rpc2FibGVfZW1haWw_dG9rZW49ZXlKMWMyVnlYMmxrSWpveU5UTTRNVFF5TENKd2IzTjBYMmxrSWpveE9UVTJOell6T0Rrc0ltbGhkQ0k2TVRjM056TTNPREk1TlN3aVpYaHdJam94T0RBNE9URTBNamsxTENKcGMzTWlPaUp3ZFdJdE5UUXpNRGtpTENKemRXSWlPaUprYVhOaFlteGxYMlZ0WVdsc0luMC5LR21qMzktNDFpck1fNFN4YWNZQ1FKRHdFR1o3OFVpWDdNajZzTVpIWG1NIiwicCI6MTk1Njc2Mzg5LCJzIjo1NDMwOSwiZiI6dHJ1ZSwidSI6MjUzODE0MiwiaWF0IjoxNzc3Mzc4Mjk1LCJleHAiOjIwOTI5NTQyOTUsImlzcyI6InB1Yi0wIiwic3ViIjoibGluay1yZWRpcmVjdCJ9.3ek-MjXJ1a8Cr1nMtuziGlxHWD-OR7iHBIMFZkwvXoU?
