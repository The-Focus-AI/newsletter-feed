---
id: 19bbc6daf0f52ad1
newsletter: thesequence
newsletter_name: "TheSequence"
category: tech-ai
subject: "The Sequence AI of the Week #789: Recursive Language Models: Inside the MIT Research Everyone is Talking About"
date: Wed, 14 Jan 2026 12:03:09 +0000
source_url: "https://thesequence.substack.com/p/the-sequence-ai-of-the-week-789-recursive"
---

# The Sequence AI of the Week #789: Recursive Language Models: Inside the MIT Research Everyone is Talking About

**From:** TheSequence <thesequence@substack.com>
**Date:** Wed, 14 Jan 2026 12:03:09 +0000
**Source:** [View original](https://thesequence.substack.com/p/the-sequence-ai-of-the-week-789-recursive)

---

View this post on the web at https://thesequence.substack.com/p/the-sequence-ai-of-the-week-789-recursive

There’s a familiar moment anyone who has tried to use a frontier model as a serious “reader” has experienced: you paste in a long document (or a pile of documents), ask a crisp question, and the model responds with something that feels… vaguely relevant. Not wrong in a glaring way. Just washed out. Like it skimmed the whole thing with sleepy eyes and then improvised.
The usual remedy has been to fight length with length. Bigger context windows. More tokens. “Just fit the world into the prompt.” But the MIT CSAIL paper on Recursive Language Models (RLMs) pushes back on that instinct with a simple systems-level observation: for many tasks, the problem isn’t that the model can’t accept more text, it’s that stuffing more text into attention is the wrong computational shape. Past a point, the model isn’t reasoning over your input; it’s drowning in it.
The paper names the failure mode plainly: context rot. As prompts get longer, quality degrades. Not merely because we hit a hard context limit, but because even within that limit the model’s effective “working set” becomes unmanageably large. Attention gets diluted, the signal-to-noise ratio drops, and the model begins to behave like a student forced to take an exam with every textbook in the library open at once. Technically allowed. Practically useless.

Unsubscribe https://substack.com/redirect/2/eyJlIjoiaHR0cHM6Ly90aGVzZXF1ZW5jZS5zdWJzdGFjay5jb20vYWN0aW9uL2Rpc2FibGVfZW1haWw_dG9rZW49ZXlKMWMyVnlYMmxrSWpveU5UTTRNVFF5TENKd2IzTjBYMmxrSWpveE9EUTBNamMyTlRJc0ltbGhkQ0k2TVRjMk9ETTVNamcyTXl3aVpYaHdJam94TnprNU9USTRPRFl6TENKcGMzTWlPaUp3ZFdJdE5UUXpNRGtpTENKemRXSWlPaUprYVhOaFlteGxYMlZ0WVdsc0luMC5IaUh0YW5DcGhqR21iREc1OHFQN3RlSVZzak5HUUdrRHl0LWJYa1BkSi1ZIiwicCI6MTg0NDI3NjUyLCJzIjo1NDMwOSwiZiI6dHJ1ZSwidSI6MjUzODE0MiwiaWF0IjoxNzY4MzkyODYzLCJleHAiOjIwODM5Njg4NjMsImlzcyI6InB1Yi0wIiwic3ViIjoibGluay1yZWRpcmVjdCJ9.QPenhq0nghNAqfL_l9z2Jr0qusEeOPIJH7fAfUaXyX8?
