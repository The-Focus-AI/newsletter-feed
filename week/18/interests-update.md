# Proposed updates to interests.md (week 18)

## New threads to track

- **Subliminal learning in distillation pipelines** — The Nature paper (Cloud et al., Truthful AI/Anthropic/ARC/Berkeley) shows behavioral traits transmit through hidden signals that survive aggressive filtering and are undetectable post-hoc. This breaks the foundational assumption of every AI compliance regime being drafted — EU AI Act, NIST RMF, copyright litigation all assume inspecting training data or model outputs characterizes what a model has learned. The most pressing version isn't adversarial (foreign labs copying US models) but endogenous: every frontier lab uses self-distillation and synthetic data, so the signals are compounding across generations undetected. Watch for: regulatory response to the Nature paper, lineage-attestation proposals, labs disclosing distillation genealogy.

- **RNN renaissance** — Modern RNNs (larger states, data-dependent gating, LLM-era training recipes) are matching Transformer perplexity at scale while keeping O(1) inference cost vs. Transformers' O(N²) KV-cache cost. This matters for inference economics and edge deployment. TheSequence covered it as a "massive vibe shift" on arXiv. Watch for: production deployment of new-gen RNNs, inference cost comparisons, whether frontier labs adopt them or dismiss them.

## Existing threads to sharpen or evolve

- **Model wars & frontier convergence** — Current framing covers "Opus 4.7, GPT-5.5, GLM 5.1, Kimi K2, DeepSeek." This week suggests sharpening to add: (1) the IPO-pressure driver behind OpenAI's release cadence — GPT-5.5 looks like a capital-markets move as much as a capability one; (2) benchmark credibility as a first-order concern — the 87 vs. 67 gap Nate's Substack reported has no named benchmark; (3) Kimi K2.6's 58.6% SWE-Bench Pro and 4,000+ tool call support make it a serious open-weight agent competitor.

- **Agents as a new customer class** — The Anthropic autonomous marketplace experiment (186 deals, $4,000 closed, weaker agents lost money without users knowing) is the clearest B2A commerce data point yet. Worth adding: the agent reliability failure modes now have research names — "agents explore but agents ignore" (discover information but don't exploit it) and single-task success doesn't predict multi-task consistency.

## New open questions

- "Can lineage attestation — cryptographic provenance for training data, model parents, and evaluations — actually solve the subliminal learning problem, or does it merely displace the unverifiability one level upstream?" — raised by [Turing Post FOD#150](https://www.turingpost.com/p/fod150).

- "Does the compute quality gap ChinaTalk describes (FP4 precision, HBM bandwidth, network interconnect) remain the binding constraint for frontier model training, or does it erode as China improves domestic chip yields and interconnect?" — raised by [ChinaTalk](https://www.chinatalk.media/p/no-jensen-not-all-compute-is-created).

- "Will the UAE's exit from OPEC affect energy pricing at timescales that matter for US datacenter investment decisions?" — raised by [Semafor Energy](https://semafor.com/s/FadNeQ9WFt?email=wschenk@gmail.com).

## Newsletters proving consistently valuable

- **Turing Post** — FOD#150 was the week's highest-signal piece: broke the subliminal learning governance story, covered GPT-5.5 specs precisely, and ran strong research highlights on agent reliability and test-time compute. Consistently earns its keep.
- **ChinaTalk** — Two high-quality pieces this week (compute quality rebuttal + industrial base essay). The compute analysis in particular is more rigorous than anything else on the China-AI beat.
- **Works in Progress** — The British nuclear piece is the rare long-form that's directly relevant without being about AI at all: it's a case study in technocracy failure with live policy implications.

## Newsletters proving consistently noisy

- **AlphaSignal** — Covers real stories (the Anthropic autonomous deals experiment) but the framing is consistently hype-first. Worth reading for signal but don't weight the editorial judgment.
- **Rob Howard / Innovating with AI** — Every email this week from this sender was a promotional sales sequence for an AI consultancy program. Good candidate to mark `kind: promotional` in newsletters/rob-howard.md.
