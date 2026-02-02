---
id: 19c0b29438011342
newsletter: alphasignal
newsletter_name: "AlphaSignal"
category: tech-ai
subject: "🤖 Chrome gets Gemini 3 Auto Browse + DeepMind AlphaGenome research"
date: Thu, 29 Jan 2026 19:09:38 +0000
---

# 🤖 Chrome gets Gemini 3 Auto Browse + DeepMind AlphaGenome research

**From:** AlphaSignal <news@alphasignal.ai>
**Date:** Thu, 29 Jan 2026 19:09:38 +0000

---

⚡️ Google rolls out Gemini 3 agentic browsing in Chrome
Google open-sources AlphaGenome, Ai2's open tool to theorize papers, Gemini adds CLI hooks, Claude Code ships PR updates
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
Together with:
Summary
Read time: 4 min 27 sec
Top News
▸ Google upgrades
Chrome with Gemini 3
for autonomous in-browser workflows
Sonar
▸ See why developers
don't fully trust AI code
and how they verify it
Top News
▸ Ai2 debuts Theorizer with open-source code for
automated theory synthesis
Top Repo
▸ Google DeepMind opens AlphaGenome
research and code
for genetic prediction
Signals
▸ Mistral updates Vibe 2.0 with
custom subagents
and slash-command workflows
▸ Google adds
Gemini CLI hooks
letting you inject context and enforce policies
▸ Anthropic study shows some
Claude conversations subtly distort
beliefs or actions
▸ Lovable improves complex builds using
plan mode, testing, and prompt queues
▸ Anthropic ships
Claude Code PR updates
directly in the editor footer
Today's Author
Lior Alexander. Founder of AlphaSignal and former ML Engineer.
Previously built ML systems at Iguazio, Guesty, Enphase, Mila.
Top News
Google integrates Gemini into Chrome’s side panel to execute complex, agentic web actions automatically
4,528 Likes
Gemini now lives inside Chrome, powered by
Gemini 3
, and the headline change is Auto browse: an agent that completes multi-step web tasks for you. This shifts Chrome from assistive to agentic, where the browser itself plans and executes work.
The problem is real tasks span many tabs, forms, and sites. Gemini in Chrome collapses that workflow into one place. You open a side panel, describe the task, and Chrome does the navigation and data entry while you stay in control.
Key features
Persistent side panel that reads context across open tabs
Auto browse that navigates sites, fills forms, and gathers results
In-browser image editing via Nano Banana, no downloads required
Connected Apps access to Gmail, Calendar, Maps, Flights, Shopping
Auto browse is available to AI Pro and Ultra subscribers in the U.S. Chrome also supports the Universal Commerce Protocol, which lets agents interact with supported shopping platforms.
USE AI IN CHROME
Presented by Sonar
Vibe check: Do developers trust AI?
Based on a survey of over 1,100 developers, the newest State of Code report from Sonar analyzes the impact of generative AI on software engineering workflows and how developers are adapting to address it.
Findings include:
96% of developers don’t fully trust that AI-generated code is functionally correct yet only 48% always check it before committing
61% agree that AI often produces code that looks correct but isn't reliable
24% of a developer's work week is spent on toil work
DOWNLOAD THE REPORT
partner with us
Top News
Ai2 introduces Theorizer, providing open-source code for automatic theory synthesis from scientific papers
1,736 Likes
Researchers already automate experiments, but they still read hundreds of papers to extract laws. Theorizer flips that workflow by reading the literature first and writing theories directly. The striking part: it synthesizes explicit scientific laws from up to 100 papers per query.
The system treats a theory as compressed knowledge. A
law
states a repeatable pattern,
scope
states where that pattern holds, and
evidence
cites results from real papers. You can think of it as a map from scattered findings to testable claims.
You use Theorizer by entering a topic query. The system retrieves open-access papers, extracts structured results, and assembles theories with linked evidence.
Key features
Reads and processes up to
100 papers per query
Outputs ⟨
LAW, SCOPE, EVIDENCE
⟩ instead of summaries
Uses GPT-4.1 for theory synthesis and GPT-5 mini for extraction
Runs in
15–30 minutes
per query
Results
Evaluates
2,983 laws
against
4,554 papers
Achieves
0.88–0.90 precision
in accuracy-focused tests
Improves recall from
0.45 to 0.51
with literature grounding
TRY THEORIZER
Top Repo
Google DeepMind shares AlphaGenome research and weights to study disease-linked mutations across 1M base context
2,292 Likes
Google DeepMind released
AlphaGenome
, a unified DNA sequence model for regulatory variant-effect prediction. The release includes a
paper
,
hosted API
and research
weights
and
code
.
The most notable capability is
1 Mb input length with single–base-pair resolution
across multiple genomic modalities.
Earlier models force a trade-off between context and resolution. AlphaGenome breaks that trade-off by reading
up to 1 million DNA base pairs
and predicting effects at
single-base resolution
.
That scale explains why the API already handles
over 1 million calls per day
from
3,000+ users
worldwide.
What AlphaGenome does
The model predicts regulatory signals directly from raw DNA sequence at base resolution.
Predicts gene expression, transcription initiation, splicing usage, junction strength, and chromatin features.
Outputs chromatin accessibility, histone marks, transcription factor binding, and contact maps.
Aligns predictions to genomic coordinates for direct variant scoring across modalities.
Availability
Model weights available via Kaggle and Hugging Face under non-commercial research terms
Research repository includes model code, variant scorers, and dataset loaders
Full-length inference recommends NVIDIA H100 GPUs; training targets TPU v3 or higher
DOWNLOAD WEIGHTS
Signals
1
Mistral releases Vibe 2.0 with custom subagents, workflow skills, and unified agent modes
2,624 Likes
2
Google introduces Gemini CLI hooks that control actions, add context, and automate project workflows
1,158 Likes
3
Anthropic reports Claude occasionally shaping user judgments in unintended disempowering ways
1,147 Likes
4
Lovable adds deeper planning, prompt queues, and automated browser testing for faster autonomous app builds
1,062 Likes
5
Anthropic ships Claude Code support for displaying real-time GitHub pull request changes in the footer
928 Likes
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

Stop receiving emails here: https://app.alphasignal.ai/unsubscribe/u/K1bzInIJROI8zvHA?cid=1ebda0cfda91d509
