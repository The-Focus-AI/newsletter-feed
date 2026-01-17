---
id: 19bc999204860b4b
newsletter: latent-space
newsletter_name: "Latent.Space"
category: tech-ai
subject: "Brex’s AI Hail Mary — With CTO James Reggio"
date: Sat, 17 Jan 2026 01:35:29 +0000
---

# Brex’s AI Hail Mary — With CTO James Reggio

**From:** "Latent.Space" <swyx@substack.com>
**Date:** Sat, 17 Jan 2026 01:35:29 +0000

---

View this post on the web at https://www.latent.space/p/brex

In 2024, there was a big question mark around the future of Brex as they cut 20% of staff among stalled growth  with the space becoming increasingly competitive. Fast forward to 2025, Brex has accomplished one of the most impressive turnarounds , accelerating sales and passing $500 million in annualized revenue with European expansion  in sight, dissipating concerns of a dying business. Among the internal changes that led to this successful turnaround was an aggressive shift towards AI adoption and utilization in every aspect of Brex’s business.
In this episode, we sit down with Brex CTO James Reggio to discuss Brex’s culture and how they facilitated an aggressive shift towards a culture of AI fluency in addition to how Brex modernized their tech stack and apply AI agents to streamline their business.
This Substack is reader-supported. To receive new posts and support my work, consider becoming a free or paid subscriber.
Culture
Team
Heading into 2024, Brex showed natural signs of a startup scaling up as they continued increasing headcount and expanded org layers to accommodate. However, Brex realized the rate they were scaling the company didn’t match their speed of execution. Addressing this scary truth head on, Brex laid off 282 people (~20% of the company) , flattened their org structure, and reduced layers of management with the goal of having leaders “operate closer to the metal” and be less siloed with only a few important cross-company priorities.
Brex realized that speed and execution shouldn’t come at the cost of increasing headcount. Even as Brex scaled up, it can still operate similar to a startup with high-velocity.
In March 2024, Franceschi described this as Brex 3.0: a new operating model designed to increase intensity and execution quality  by making fewer bets, consolidating to one roadmap, and maintaining a release cadence. They doubled down on fostering a high trust and high performance team by promoting from within, bringing employees back in-person to work, and expecting leaders to operate at all levels .
Brex’s team now consists of ~300 engineers and ~350 across EPD (Engineering, Product, & Design). Their team is split across product domains in addition to infrastructure. Their core product domains are the following:
Corporate Card
Corporate Bank Account
Expense Management
Travel
Accounting
In addition to these product teams, Brex has formed smaller specialized teams like their most recent team of ~10 focused on LLMs . This has been one of their key initiatives to keep up with and innovate with AI progress. This team was actually formed by the Brex team asking themselves, “What would a company that was founded today to disrupt Brex look like?” and the answers to this question were used to decide what to work on. Currently the team is still very lean with a mix of talented AI native 20 year olds who grew up with the tech and older more experienced staff engineers who are veterans in the industry and space that Brex operates in. This team operates like a startup working 996 (9AM to 9PM, 6 days a week) and growing the team very slowly like a pre-seed startup (i.e. only hire or add people to the team when absolutely necessary)
AI Adoption
This specialized team isn’t the only one using AI as Brex has engineering wide adoption for AI tools and coding agents. Oddly enough, the top Cursor user is actually an engineering manager. Brex strongly encourages employees to use AI tools and software that will boost their performance.
This sentiment is echoed by their bold decision to not pick winners between foundational model providers or agentic coding tools, etc. What Brex does instead is to procure a small number of seats of multiple solutions and give employees the ability to pick what they want to use through ConductorOne . For example, an employee can get a ChatGPT, Claude, and Gemini license to build their own stack or even get credits to try Cursor, Windsurf, or Claude Code.
This push for AI adoption doesn’t stop at engineering. Camilla Matias, Brex’s COO, has pushed aggressively to help every member of the operations organization to start rethinking their role as people who are building prompts & evals to become more AI native.
To make it even easier and accessible for non-technical employees, Brex’s Agent Platform is built in Retool  which has enabled the operations org to do prompt refinement themselves instead of needing engineers to do it.
While many startups and larger companies discuss how to use AI internally, Brex actually executed on it by making the barrier to entry for any AI tool very low instead of sending a company wide email to “use more AI”.
AI Training & Fluency
Brex has also implemented a tangible and definable approach for AI adoption with their org-wide AI training program & AI Fluency Levels which are below:
At the end of the AI training program, every employee must categorize themselves into one of the four groups which will then help managers assign them to relevant projects to upskill their AI fluency. These fluency levels are also used in quarterly assessment to gauge their progress. While this approach may sound excessive, it is not enforced as a metric to fire employees but rather as a tangible way to encourage current employees to utilize powerful AI tools available today.
Brex’s success in upskilling their employees’ AI competence comes down to two things they executed very well on: 1. Make it extremely easy for employees to use (i.e. Retool platform) and adopt AI tools (i.e. open access to any tool through ConductorOne) 2. Implementing a forcing function that aligns employee incentives (i.e. promotions, performance reviews, etc.) with AI fluency.
AI Fluency in Hiring
Even the hiring process has been adapted to align with Brex’s culture of being AI fluent. Previously, Brex had a straightforward coding & system design question for potential hires but that has been revamped to a project you work on-site that requires agentic coding or else it’s impossible to finish. Candidates are then evaluated on the candidates’s fluency and competence with AI tools, how the candidate works, whether the candidate understands the AI generated code, etc.
Making Brex’s culture even more clear, when this new AI native interview process was created, every employee in engineering including managers had to go through the interview. It wasn’t to fire or keep score but so that employees would also realize how they could uplevel their skills using AI which eventually pushed their AI fluent culture further.
By keeping a very high bar and holding everyone to the same standard, Brex ensures every employee is treated fairly while not sacrificing on talent density. The standard that new hires are held to are the same ones current employees are held to, establishing a truly meritocratic culture.
“Quitters Welcome” Recruiting Initiative 
Many Brex employees have gone off to start enduring companies. Surprisingly, Brex actually encourages and celebrates it which they’ve leaned into more recently with their “Quitters Welcome” recruiting initiative focused on attracting talent that want to quit and start their own company one day. Brex has had success hiring former and future founders and have doubled down since many of their smaller, specialized teams, like the one focused on LLMs, operate like a startup. They hope to be the best “founder school” with the value proposition that future founders can learn the best by solving interesting problems with instant distribution under Brex. For example, you could build financial AI applications that are instantly deployed to thousands of customers from Fortune 100 to startups, expediting the feedback loop and learning from high quality customers.
Modernizing the Stack
Complementing Brex’s aggressive push towards a culture of employees becoming very AI fluent was a culture of trying and adopting the most modern tools and frameworks in the age of AI. Both were critical in Brex’s turnaround and acted like a feedback loop where AI fluency would enable easier adoption for the best modern tools and frameworks which in turn would increase AI fluency.
But this modernization and adaptation didn’t happen all at once. It started in January 2023 when the team created simple internal infrastructure that made it possible to deploy, manage, & evaluate prompts and route to different models. As more models and technologies were launched, Brex kept up with adoption, eventually building out an entire agent platform. This platform is actually powered by the current version of the internal infrastructure built out in 2023.
Agent Platform
Fall of 2025, Brex finally introduced their finance agents that learn, reason, and act on your behalf  that is part of their Agent Platform below:
Below are some tangible ways Brex’s Agent Platform have streamlined operations:
Automating pipeline for evaluating customer applications to get them instantly onboarded.
Previously, human intervention was required for underwriting or KYC (Know Your Customer) but now a bunch of research agents can first handle all the research and then go do the work on behalf of humans to instantly onboard qualified customers.
Maintaining thorough, up-to-date, and accurate knowledge about Brex’s business.
Previously a big challenge Brex faced was outdated knowledge being baked into models during pre-training which would lead to very costly hallucinations and incorrect information that would pollute context for agents. As a result, Brex decided to manage this knowledge base so that every detail about the business is up-to-date and correct.
Evaluations
To ensure the quality of their agents and to prevent regressions during future updates, Brex implemented multi-turn evals where an AI agent would basically embody the end user and be given an objective to accomplish. Sometimes they’ll also pre-set an initial preamble to the conversation (i.e. couple turns will be hand written) then begin the eval in order to isolate certain behaviors and make the eval a bit more deterministic.
Here are some modern technologies and tools Brex uses:
Mastra
Surprisingly, Brex’s AI agents are built with Typescript and the Mastra framework, using pgvector & Pinecone as the data stores. Their eventual adoption of Mastra goes back 3 years when Brex built their own internal LLM framework after being dissatisfied with Langchain’s lack of support for key use cases. With the hope to eventually churn off their own framework which needed constant maintenance, Brex was drawn to Mastra because its ergonomics were very similar to the one they built and it also aligned with a key motivating question they asked themselves, “What languages and technology would we use if we started Brex today?”. Brex’s existing backend code is still written in either Elixir or Kotlin, but they are always reevaluating framework and tech choices because the half life of code has declined so much with agentic coding.
Greptile 
Another modern tool in Brex’s stack is the AI code review software Greptile. According to James, what is most impressive about Greptile is their signal to noise ratio of comments left on a PR, “I never regret going through all 65 comments [Greptile] leaves on my diffs because it catches so many things.”
Sierra 
When deciding whether to build or buy, Brex focuses on whether the solution is only possible with the context they have or can be built by others. When it came to CX (customer experience), Sierra already had alignment with Brex’s primary concern: having a UI/UX (i.e. low-code & more workflow oriented) that makes it extremely easy and accessible for operations and CX strategy teams to administer agents.
Brex’s Job to Be Done
There are 2 demographics that Brex primarily serves:
Finance teams: they interact with agents very specific for their roles
Employees of companies that use Brex: goal is for Brex to disappear for employees (i.e. the only thing they have to do is just use the card)
The way Brex believes this problem is best solved is by giving every employee an AI agent(s) that embodies an executive assistant. In the same way that an EA has all the context and can take relevant and correct actions on your behalf, Brex wants AI agents to do that for finance teams.
Brex also views their AI Strategy through 3 Pillars:
Corporate AI Strategy: How are we going to adopt and buy AI tooling across the business and in every single function to 10x workflows
Operational AI Strategy: How are we going to buy and build solutions that enable Brex to lower their cost of operations as a financial institution (i.e. fraud detection, handle disputes, etc.)
Product AI Strategy: How are we going to introduce new features that enable Brex to be part of the Corporate AI strategy for our customers. We want to be a solution where other companies are saying they adopted Brex for their corporate AI strategy
Initial Faulty Approaches
Brex’s Initial attempt to implement this solution of an EA for every employee was the naive approach of having an agent with a variety of tools, using RAG to fetch the appropriate context.
It soon became apparent that the wide range of Brex’s product lines made it extremely difficult for one agent to perform well when being responsible for everything from expense management to finding travel to answering procurement questions.
Other initial attempts that didn’t work were overloading the agent with tools and context switching (i.e. “this conversation seems more about X topic so lets update the prompt to have the relevant topic in context”)
Without these failed attempts, Brex would not have come to their fleshed out final approach of using subagents. In an era when technology and innovation moves very fast, the optimal path to discover the best approach is actually by trying many hypotheses to learn why an approach doesn’t work.
Final Successful Approach
Brex eventually broke the problem down to using many subagents that sit behind an orchestrator. They built this orchestrator themselves since there are no great solutions on the market right now.
What Brex realized was that there is significant value in multi turn conversations from the orchestrator, assistant, and sub-agent vs. a single tool call. The mental model they use is an agent org chart: sub-agents are specialists and they are conversing with each other so if more context is required, the sub-agents pass it along and then ask the user. (like how a human org chart would work)
Something That Didn’t Work
Among the many investments and experiments Brex has tried, one expensive initiative that didn’t work at all was using RL for credit decisions & underwriting. Initially, Brex thought that it would be the proper approach to building a model that effectively decides like a human underwriter, but after working with outside experts and investing significant time, the end performance was actually inferior to a simple web research agent.
What Brex realized was that in operations, the thing that matters most is being able to granularly break down problems and form SOPs (Standard Operating Procedure) that humans can repeatedly follow. These repeatable processes can then be audited and done in a compliant manner. Since then, Brex has seen great success using simpler approaches with LLMs for many ops use cases but wouldn’t have known its effectiveness without trying alternative approaches.
Links to James & Brex
X: https://x.com/jamesreggio
LinkedIn: https://www.linkedin.com/in/jamesreggio
Company Website: https://www.brex.com
Full Episode on YouTube
Timestamps
00:00:00 Introduction
00:01:24 From Mobile Engineer to CTO: The Founder's Path
00:03:00 Quitters Welcome: Building a Founder-Friendly Culture
00:05:13 The AI Team Structure: 10-Person Startup Within Brex
00:11:55 Building the Brex Agent Platform: Multi-Agent Networks
00:13:45 Tech Stack Decisions: TypeScript, Mastra, and MCP
00:24:32 Operational AI: Automating Underwriting, KYC, and Fraud
00:16:40 The Brex Assistant: Executive Assistant for Every Employee
00:40:26 Evaluation Strategy: From Simple SOPs to Multi-Turn Evals
00:37:11 Agentic Coding Adoption: Cursor, Windsurf, and the Engineering Interview
00:58:51 AI Fluency Levels: From User to Native
01:09:14 The Audit Agent Network: Finance Team Agents in Action
01:03:33 The Future of Engineering Headcount and AI Leverage
This Substack is reader-supported. To receive new posts and support my work, consider becoming a free or paid subscriber.

Unsubscribe https://substack.com/redirect/2/eyJlIjoiaHR0cHM6Ly93d3cubGF0ZW50LnNwYWNlL2FjdGlvbi9kaXNhYmxlX2VtYWlsP3Rva2VuPWV5SjFjMlZ5WDJsa0lqb3lOVE00TVRReUxDSndiM04wWDJsa0lqb3hPRFE0TWprek5UZ3NJbWxoZENJNk1UYzJPRFl4TXpneE1pd2laWGh3SWpveE9EQXdNVFE1T0RFeUxDSnBjM01pT2lKd2RXSXRNVEE0TkRBNE9TSXNJbk4xWWlJNkltUnBjMkZpYkdWZlpXMWhhV3dpZlEuNnE1RGRDdHlCQ2Nrb0lTYnZzLUowcWFUSURyZUg1NWY0b2lmSk5MbXdLTSIsInAiOjE4NDgyOTM1OCwicyI6MTA4NDA4OSwiZiI6dHJ1ZSwidSI6MjUzODE0MiwiaWF0IjoxNzY4NjEzODEyLCJleHAiOjIwODQxODk4MTIsImlzcyI6InB1Yi0wIiwic3ViIjoibGluay1yZWRpcmVjdCJ9.hw1zOAI4epByQIRMdzIBSfHLYMdsvhFmB4R45ijfrKw?
