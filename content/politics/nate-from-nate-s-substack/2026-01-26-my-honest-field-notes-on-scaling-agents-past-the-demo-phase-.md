---
id: 19bfad67281f0a5a
newsletter: nate-from-nate-s-substack
newsletter_name: "Nate from Nate’s Substack"
category: politics
subject: "My honest field notes on scaling agents past the demo phase + 6 rules from teams running hundreds"
date: Mon, 26 Jan 2026 14:03:32 +0000
source_url: "https://natesnewsletter.substack.com/p/why-dumb-agents-mean-smart-orchestration"
---

# My honest field notes on scaling agents past the demo phase + 6 rules from teams running hundreds

**From:** "Nate from Nate’s Substack" <natesnewsletter@substack.com>
**Date:** Mon, 26 Jan 2026 14:03:32 +0000
**Source:** [View original](https://natesnewsletter.substack.com/p/why-dumb-agents-mean-smart-orchestration)

---

View this post on the web at https://natesnewsletter.substack.com/p/why-dumb-agents-mean-smart-orchestration

A December 2025 study from Google and MIT found something I wasn’t expecting: adding more agents to a system can make it perform worse. Not diminishing returns—actual degradation. The researchers documented configurations where more agents produced worse outcomes than fewer—a finding that directly challenges the field’s working assumption that adding agents means adding capability.
I’d been operating on that assumption. The whole pitch for multi-agent systems is parallelism: more workers grinding on your problem means faster results. That’s how compute has always worked. But agents aren’t GPUs. They’re entities that need to coordinate, and coordination creates overhead that grows faster than capability. Past some threshold, most of your agents are effectively standing in line.
What got me digging deeper was noticing that the teams who’ve actually scaled past the prototype phase—Cursor running hundreds of agents on week-long autonomous coding, Steve Yegge orchestrating 20-30 simultaneously in Gas Town—weren’t comparing notes. They solved the same problem independently and landed on the same counterintuitive patterns. That kind of convergence usually means something real is going on underneath.
So I spent a couple weeks sorting through what they actually built versus what the frameworks recommend. The gap is uncomfortable. The industry consensus says agents should collaborate like human teams, share context, coordinate dynamically, operate continuously. The architectures that actually scale do almost none of that. They look too simple to work—until you understand why simplicity is the point.
Here’s what’s inside:
The scaling problem the frameworks don’t warn you about — Why coordination overhead compounds, and the research quantifying when it starts hurting more than helping.
Six rules from the teams running hundreds of agents — The specific patterns Cursor and Yegge converged on independently, from strict two-tier hierarchies to treating agent endings as a feature rather than a bug.
Where complexity should actually live — The case for dumb agents and smart orchestration, and why that inversion determines whether your system absorbs compute or chokes on it.
What this means if you’re making bets in 2026 — The questions that reveal whether a project or vendor has figured this out, and why Gartner’s prediction that over 40% of agentic AI projects will be canceled by the end of 2027 is probably right.
Let me start with what the Google-MIT researchers actually found, because the numbers are more specific—and more uncomfortable—than the headline suggests.
Subscribers get all posts like these!...

Unsubscribe https://substack.com/redirect/2/eyJlIjoiaHR0cHM6Ly9uYXRlc25ld3NsZXR0ZXIuc3Vic3RhY2suY29tL2FjdGlvbi9kaXNhYmxlX2VtYWlsP3Rva2VuPWV5SjFjMlZ5WDJsa0lqb3lOVE00TVRReUxDSndiM04wWDJsa0lqb3hPRFUwTWpFNE9ESXNJbWxoZENJNk1UYzJPVFF6T1RreE5pd2laWGh3SWpveE9EQXdPVGMxT1RFMkxDSnBjM01pT2lKd2RXSXRNVE0zTXpJek1TSXNJbk4xWWlJNkltUnBjMkZpYkdWZlpXMWhhV3dpZlEuczB6Nzl2SE9tMXFGN213cExqUWZIVlFjWlJ6N3NxWnA0cEludTdwRzk5byIsInAiOjE4NTQyMTg4MiwicyI6MTM3MzIzMSwiZiI6dHJ1ZSwidSI6MjUzODE0MiwiaWF0IjoxNzY5NDM5OTE2LCJleHAiOjIwODUwMTU5MTYsImlzcyI6InB1Yi0wIiwic3ViIjoibGluay1yZWRpcmVjdCJ9.-ZyZ29KY4i8UdMH8KolHZ9hwbEzzKCy-yX2lYpnNrXM?
