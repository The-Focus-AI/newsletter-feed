# Week 18 Newsletter Report (April 27–29, 2026)

## TL;DR

Week 18 was dominated by two parallel breaking stories: an attempted assassination at the White House Correspondents' Dinner, which [Silver Bulletin](https://www.natesilver.net/p/can-we-please-stop-rationalizing), [The Atlantic Daily](https://www.theatlantic.com), and [Today in Tabs](https://link.mail.beehiiv.com/ss/c/u001.ZEAz7Uq2KesQq-soVMJjwzXtjBiMQP01nnF30shLE-6XMSWIoPqEO__v3RU88EgnPBzZueHG5bPPqObggzRwRIlvoeWnyv23QBjsJ2pgeYNzfaun_YU6v1ghufMlHup9CYyc4VleBC-_z56qPgvmFw/4q6/cPBVBxjNQAulkrIGAGVQcA/h0/h001.zK-55x9bBV5on1ZKXL2j0dElO69O4enLdCY-utDJwoU) covered through completely different lenses; and a dense AI week anchored by GPT-5.5's release, OpenAI's IPO sprint, and a [Turing Post](https://www.turingpost.com/p/fod150) piece that showed subliminal learning in distillation pipelines breaks every compliance regime currently being drafted. [ChinaTalk](https://www.chinatalk.media/p/no-jensen-not-all-compute-is-created) published the sharpest rebuttal of Jensen Huang's claim that China has enough compute to build frontier AI. The UAE announced it is quitting OPEC, spiking oil 5%.

---

## Threads from interests.md

### Model wars & frontier convergence

GPT-5.5 was the week's biggest model release. [Nate's Substack](https://natesnewsletter.substack.com/p/chatgpt-55-scored-87-where-the-next) reports it scored 87 on an unspecified benchmark "where the next best model scored 67," calling it "the best model in the world." [Turing Post](https://www.turingpost.com/p/fod150) notes specs: 82.7% Terminal-Bench, 58.6% SWE-Bench Pro, 93.6% GPQA, $5/M tokens, 1M-token context, described as an "advanced agentic model." Bloomberg's "OpenAI's missed goals" and WSJ's "OpenAI's High-Stakes Sprint Toward IPO" frame the release in IPO context — the pace is driven by capital markets as much as capability.

On open weights: Turing Post covers DeepSeek-V4-Pro (1.6T params, 49B active, 1M context, "competitive with frontier proprietary models") and Kimi K2.6 (1T-param MoE, 58.6% SWE-Bench Pro, 4,000+ tool calls over 12+ hours). The RNN comeback gets a dedicated piece from [TheSequence](https://thesequence.substack.com/p/the-sequence-knowledge-850-the-unexpected): modern RNNs with larger states and data-dependent gating are matching Transformer perplexity at scale while keeping O(1) inference cost — a direct challenge to the KV-cache tax.

### AI bubble dynamics & operational fragility

[Casey Newton's Platformer](https://www.platformer.news/r/06a1260d?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670) took a reflexive turn: Newton wrote about how AI is changing his newsletter's workflow. His argument is that daily synthesis has been commoditized — which pressures the analysis-vs.-reporting balance he has run since 2017. His fiancé works at Anthropic (disclosed upfront). This is a rare practitioner account of AI changing a media workflow from the inside.

[The Pragmatic Engineer](https://newsletter.pragmaticengineer.com/p/ubuntu-and-ai) ran a deep dive with Canonical on AI changing Ubuntu and Linux. Canonical's bet is local-first LLMs — "a device is always accessible, even offline" — in explicit contrast to cloud-dependent AI. The piece covers NVIDIA's collaboration with Canonical on the Ubuntu AI stack and the cloud-vs-local inference tension.

### Agents as a new customer class

[AlphaSignal](https://alphasignal.ai/email/c9065d86be97f605) covered an Anthropic experiment where Claude agents interviewed users, determined preferences, then negotiated 186 deals autonomously, closing $4,000 in trades. This is the clearest B2A commerce data point yet. The piece notes weaker agents "lost money without users knowing" — a direct fragility signal that maps to the reliability research [Turing Post](https://www.turingpost.com/p/fod150) flagged: "On the Reliability of Computer Use Agents" found agents that succeed once may fail on the same task again.

### Token economics & API pricing opacity

GPT-5.5 at $5/M tokens is the week's new anchor. DeepSeek-V4-Pro and Kimi K2.6 increase open-weight pressure on the reasoning-token cost curve. No new cross-provider pricing analysis appeared, but the combination of GPT-5.5 benchmark step + $5/M price is the first concrete frontier-model data point in several weeks.

---

## New stories worth tracking

### Subliminal learning breaks AI governance assumptions

The most significant piece of the week is [Turing Post's FOD#150](https://www.turingpost.com/p/fod150). A Nature paper from Truthful AI, Anthropic, ARC, and Berkeley shows distilled student models can inherit behavioral traits from teacher models through hidden signals in training data — signals that survive aggressive filtering and aren't detectable by inspecting the data afterward. They call it "subliminal learning."

The governance implication is direct: the EU AI Act assumes training data can be audited; NIST's Risk Management Framework assumes evaluations characterize what a model learned; copyright cases against AI labs assume inspecting a corpus tells you what is in the model. Turing Post: "a 'clean' dataset isn't a verifiable category — because you can't prove the absence of a trait you haven't yet articulated."

The second twist is more pressing than the OSTP's adversarial-distillation framing: most distillation in 2026 is endogenous — labs training new models on synthetic data from prior models. The effect is strongest exactly here, where teacher and student share the same base model. "Across generations of self-distillation, traits are compounding — not because anyone intends it, but because nothing was ever in place to catch them." Turing Post concludes compliance regimes should be built around lineage and disclosure rather than inspection and certification.

### Jensen Huang is wrong about China's compute

[ChinaTalk's](https://www.chinatalk.media/p/no-jensen-not-all-compute-is-created) "No Jensen, Not All Compute is Created Equal" is the most technically precise piece of the week. Responding to Huang's claim on Dwarkesh's podcast that China already has enough compute ("why can't they just put 4x, 10x, as many chips together because energy's free?"), ChinaTalk argues that FLOPs equivalence conceals three critical quality gaps: numerical precision (Blackwells do FP4; Ascend 910C is stuck at HBM2E), memory bandwidth (Vera Rubin: 22 TB/s; Ascend: 3.2 TB/s), and network bandwidth (the binding constraint when weak chips coordinate at scale). "Nvidiana can train and serve the next generation of frontier models. Huaweiopolis cannot, and more chips will not close the gap."

This challenges the aggregate-compute framing that dominates policy debates. ChinaTalk's companion piece on [China-proofing the American industrial base](https://www.chinatalk.media/p/china-proofing-the-american-industrial) — the economic security essay contest winner, judged by Jake Sullivan, Chris Miller, and Dan Wang — argues for sector-by-sector analysis over aggregate metrics.

### British nuclear as a parable for technocracy

[Works in Progress](https://www.worksinprogress.news/p/why-british-nuclear-flopped) ran a deep reported piece on why British nuclear power failed. The story isn't the reactor technology choice. It's what the failure reveals about technocracy: "experts failed, and the public withdrew the blank check they had given them." The piece explicitly frames it as "a valuable corrective to the idea that the world would work better if we simply handed more power to engineers." In the current AI governance moment — when regulatory debates are partly about deference to technical experts — this is directly relevant background.

### UAE quits OPEC; oil spikes 5%

[Semafor Energy](https://semafor.com/s/FadNeQ9WFt?email=wschenk@gmail.com) broke the UAE's announcement to quit OPEC. Bloomberg covered oil spiking 5% on the Iran war impasse. These are signals for AI datacenter economics: electricity costs are a binding constraint, and Middle East instability plus OPEC fragmentation affects energy pricing at timescales that matter for infrastructure investment decisions.

### The WHCD assassination attempt

[Silver Bulletin](https://www.natesilver.net/p/can-we-please-stop-rationalizing) published a careful piece against rationalizing political violence, after Cole Tomas Allen was apprehended at the Washington Hilton carrying weapons and a manifesto naming administration officials as targets. Nate Silver: "it's not a good sign if this feels 'normal.'" The Atlantic Daily covered Trump's corruption trajectory in the same news cycle. Today in Tabs ran "Ballroom Twits," treating the WHCD itself as the story rather than the threat.

---

## Cross-newsletter patterns

**AI capability claims vs. IPO context.** [Nate's Substack](https://natesnewsletter.substack.com/p/chatgpt-55-scored-87-where-the-next) and [Turing Post](https://www.turingpost.com/p/fod150) both covered GPT-5.5 but from opposite angles — Nate emphasizing benchmark dominance, Turing Post presenting specs alongside other frontier models without ranking claims. [Bloomberg](https://links.message.bloomberg.com/a/sc/nFJDzMdPJIngXwNegQ5EsYuYaYTgTNSzJkCNf9Yvwk8h3_973oFlMRS-I5CAIwWwGV_WlXgrdRjW9k0Pv87jR8eV_EFFeZxlmgBaGVkR_lxWP5jn0zoppxlwfP2nnXskunKoiCYGq87crlhnbK0u9UmkJaekdHSRfkFha26ChrYu_67HtQof4DIYsQ1K3F8yTBsposOKx-fhrfGKXBJzWnL66-zmCBrAoMAAt4jaTayjyQv04T6X8Hc_Dm5wi2DLWbA9nNR24kn2-ZqyPAEm5eJmoWo_wE0nX83a_f5kc4ak1L4W33vju7mZ0I8Bb45jS8qWRrKZolEL3X69NzijDsF9L8AL9znfdXyQF9-8gdtfinkalUEFp0iH6w8o8dBfxRIhoRNeOEcAStv9gjFbrb615w/XUIZIOqtK8DKx24iLd7qmfiCB7zq6gN9/20)'s "OpenAI's missed goals" and WSJ suggest IPO timeline is driving release pace. None of the three addresses benchmark-to-production transfer reliability.

**Political violence, three framings.** [Silver Bulletin](https://www.natesilver.net/p/can-we-please-stop-rationalizing) treated the WHCD incident as a political-norms crisis. [The Free Press](https://substack.com/redirect/f28899b5-8283-4255-b169-f4a9f1d4e24f?j=eyJ1IjoiMWllZnkifQ.sG3OqnkHDNZpplC0eLA9u0NYhAE4J8yHwSPDyeVA8k8) ran Douglas Murray on the shooter's manifesto sounding "familiar." [Today in Tabs](https://link.mail.beehiiv.com/ss/c/u001.ZEAz7Uq2KesQq-soVMJjwzXtjBiMQP01nnF30shLE-6XMSWIoPqEO__v3RU88EgnPBzZueHG5bPPqObggzRwRIlvoeWnyv23QBjsJ2pgeYNzfaun_YU6v1ghufMlHup9CYyc4VleBC-_z56qPgvmFw/4q6/cPBVBxjNQAulkrIGAGVQcA/h0/h001.zK-55x9bBV5on1ZKXL2j0dElO69O4enLdCY-utDJwoU) treated the ballroom as the subject. Three publications, three completely different framings of the same event.

**Geopolitics and AI infrastructure.** [ChinaTalk](https://www.chinatalk.media/p/no-jensen-not-all-compute-is-created) on compute quality, [Semafor Energy](https://semafor.com/s/FadNeQ9WFt?email=wschenk@gmail.com) on UAE/OPEC, and [Foreign Affairs](https://link.foreignaffairs.com/view/64456883d447307be60958dcr15xm.an1j/131c0225) on North Korea all point at the same underlying question: which geopolitical fractures are redirecting infrastructure and capital flows? The UAE/OPEC break could affect datacenter energy economics faster than most AI infrastructure analyses currently model.

---

## Sources

- [FOD#150: Ghosts in the Distillation Pipeline](https://www.turingpost.com/p/fod150) — Turing Post
- [How we're shaking up Platformer for the AI era](https://www.platformer.news/r/06a1260d?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670) — Casey Newton
- [No Jensen, Not All Compute is Created Equal](https://www.chinatalk.media/p/no-jensen-not-all-compute-is-created) — ChinaTalk
- [China-Proofing the American Industrial Base](https://www.chinatalk.media/p/china-proofing-the-american-industrial) — ChinaTalk
- [DeepSeek V4](https://www.chinatalk.media/p/deepseek-v4) — ChinaTalk
- [Why British nuclear flopped](https://www.worksinprogress.news/p/why-british-nuclear-flopped) — Works in Progress
- [The triumph of logical English, Out loud](https://www.worksinprogress.news/p/the-triumph-of-logical-english-out) — Works in Progress
- [The Sequence Knowledge #850: The Unexpected Comeback of RNNs](https://thesequence.substack.com/p/the-sequence-knowledge-850-the-unexpected) — TheSequence
- [How will AI change operating systems? Part 1: Ubuntu and Linux](https://newsletter.pragmaticengineer.com/p/ubuntu-and-ai) — The Pragmatic Engineer
- [ChatGPT 5.5 scored 87 where the next best model scored 67](https://natesnewsletter.substack.com/p/chatgpt-55-scored-87-where-the-next) — Nate from Nate's Substack
- [Can we please stop rationalizing political violence?](https://www.natesilver.net/p/can-we-please-stop-rationalizing) — Silver Bulletin
- [Ballroom Twits](https://link.mail.beehiiv.com/ss/c/u001.ZEAz7Uq2KesQq-soVMJjwzXtjBiMQP01nnF30shLE-6XMSWIoPqEO__v3RU88EgnPBzZueHG5bPPqObggzRwRIlvoeWnyv23QBjsJ2pgeYNzfaun_YU6v1ghufMlHup9CYyc4VleBC-_z56qPgvmFw/4q6/cPBVBxjNQAulkrIGAGVQcA/h0/h001.zK-55x9bBV5on1ZKXL2j0dElO69O4enLdCY-utDJwoU) — Today in Tabs
- [Google DeepMind Paper Argues LLMs Will Never Be Conscious](https://www.404media.co/r/5bc5e600?m=d9c8ed7d-8f51-45be-865b-ff329f323410) — 404 Media
- ['Who decided this would represent us?'](https://www.404media.co/r/4417a957?m=d9c8ed7d-8f51-45be-865b-ff329f323410) — 404 Media
- [New episode: How This Trippy Image Started A Massive Conspiracy Theory](https://www.404media.co/) — 404 Media
- [[AINews] ImageGen is on the Path to AGI](https://www.latent.space/p/ainews-imagegen-is-on-the-path-to) — AINews
- [Anthropic Claude agents closed $4,000 in autonomous deals](https://alphasignal.ai/email/c9065d86be97f605) — AlphaSignal
- [Claude connects to Blender, Adobe CC + 7 more creative tools](https://alphasignal.ai/) — AlphaSignal
- [Design Prompt 12: April](https://bethmathews.substack.com/p/design-prompt-12-april) — Beth Mathews
- [It's just clothes, and the stakes are enormous](https://www.blackbirdspyplane.com/p/its-just-clothes-and-the-stakes-are-enormous) — Blackbird Spyplane
- [Who holds the cards?](https://links.message.bloomberg.com/a/sc/ieZFDGI1VX9p9NT8LRxa_b1FU3g353b86WW2siZJ2QUHXXOcUldPQMrECb89bCHk94n6doMmhoiprhBiBQ748yuJ5EU8dMzoQT-Mn9oySLCY_OSSGMjM1SkJEeq9LsXWkD9dt-54hW_ZrdY3Drs7G-L7Yzv8nzA9D8yMx0H9MUh7gdWWGt4H9FVRqSvIhfpsSE_bODZ5GOBxGx5oMATRut-EZX57LwEVoYlHtsZJpGHBe9szN63wUQlwc_J1im2vvbP1aU7upsc0s4NMM34JSXVEOG7DIE9Ulw8CEyGWLmwQ3n_a-m11yS8Dyh0sh7KnSitUtdPu0gbtmU4igG-Tv0-bSf2AKah3Q63jciMSsdanAct34gPRdGRGT6C6HkrT_2GdtBBQj9ZU-8k7aAA-/HQNGyHPhYlVr-FvWAh5Mctmbzta4S7dn/20) — Bloomberg Weekend
- [Oil spikes again](https://links.message.bloomberg.com/a/sc/zwV1nUD1t4oTf_gAskmdYXDYAP1znsGD6stYPba3s77Jqk0WFilC5ADpzQVLQEsCM0acgYMILt0rNZ0jGJxgqQpb3svbO8dNwyNknNCX2IeS5U7SDrZ6fkjsTHpXWWaga8_Rrm8zYx_A1CI_hO-Hy-6liAERgeUu3w5P0rpBlcjEg2zI3o9OweNKbRIp5_WxsQ1Sv5cmTrSCZFKMaWuJ426XGwZB1Gf2Jb_rQPfkmLhvnMrwLTkOObbrXQ8GFUQ7yBN3s8CT-nRj-CyoiJhmnr069zelC31Cdc9ttZOIJG077d4WZ6LMBjV9iMS9-ZdBQmpw3Nad4iDXd41-3EXTy1TLBgO2-a5-n9i1Qd5WbYd565jOeqMe28q5OAE22RQts5ydGiJ1rAb596L1D8w3PIk/yVBYhU0ssBtCuXoTQ7jxtfJ27r8gBNJC/20) — Bloomberg Weekend
- [OpenAI's missed goals](https://links.message.bloomberg.com/a/sc/nFJDzMdPJIngXwNegQ5EsYuYaYTgTNSzJkCNf9Yvwk8h3_973oFlMRS-I5CAIwWwGV_WlXgrdRjW9k0Pv87jR8eV_EFFeZxlmgBaGVkR_lxWP5jn0zoppxlwfP2nnXskunKoiCYGq87crlhnbK0u9UmkJaekdHSRfkFha26ChrYu_67HtQof4DIYsQ1K3F8yTBsposOKx-fhrfGKXBJzWnL66-zmCBrAoMAAt4jaTayjyQv04T6X8Hc_Dm5wi2DLWbA9nNR24kn2-ZqyPAEm5eJmoWo_wE0nX83a_f5kc4ak1L4W33vju7mZ0I8Bb45jS8qWRrKZolEL3X69NzijDsF9L8AL9znfdXyQF9-8gdtfinkalUEFp0iH6w8o8dBfxRIhoRNeOEcAStv9gjFbrb615w/XUIZIOqtK8DKx24iLd7qmfiCB7zq6gN9/20) — Bloomberg Weekend
- [Asia's richest families](https://links.message.bloomberg.com/s/vb/Bhzvr9ObBPWKDNvJuOYtw0NEX0cgbO246F-OubHJQfFMTXzQ-LED4_Ooe0q01_Yhil-BXhrCxHFpywWdJroDSDzSr7HFJGsVTkTZSfWXQD2OQNEQSn7dxVWih9EmkXvaGmY2wEoVe_uUn_eSe42MnkIZOwxXhTTHSOut9w/Pts7t6xw75VrBS53Tzzkk44MD-Q5x7lB/20) — Bloomberg
- [Parents are spending $50,000 to get their kid a job](https://links.message.bloomberg.com/s/vb/fxf2OtJiCBQMlOLjJkK9ZiFCzSv5o1vPRSKpkD_3OT7nixHIOa-hfXbycQAFqdGQGtVHFzvpqhEtSx3JI0_zuuB77RPk0Th0wXVQtkXc9jQoa9AwI2M1fi4858885vbe2nN3hWeuPtPJD36gzpHLnbyzpcpAoA9VMKcKdw/U34C-z7GNd-YRDfP3mibuyvAl7ARo_8Q/20) — Bloomberg
- [No new trial for Sam Bankman-Fried](https://www.citationneeded.news/sbf-new-trial-denied/) — Citation Needed by Molly White
- [What Books Shaped You?](https://classicalwisdom.substack.com/p/what-books-shaped-you) — Classical Wisdom
- [There Is No Epidemic of 'Alpine Divorce'](https://www.compactmag.com/r/06eda1de?m=33b1996b-f427-4fb3-88a9-83a2095d7637) — Compact
- [The Limits of the American Religion](https://www.compactmag.com/r/c108bc89?m=33b1996b-f427-4fb3-88a9-83a2095d7637) — Compact
- [Is America Cooked? — EP 68 Ashlee Vance And Kylie Robison](https://www.corememory.com/p/is-america-cooked-openai-spacex-cursor-kindbio-apple) — Core Memory
- [Tuesday Thread: Trip-Planning Concierge](https://open.patreon.com/posts/tuesday-thread-156702307) — Culture Study
- [Rental van / Tour bus](https://flaminghydra.com/r/ece3372c?m=e1004cfb-97ed-4594-9a60-f0bcd58e4122) — Flaming Hydra
- [Medieval frolic / Nigerian decline](https://flaminghydra.com/r/fd9f0c9d?m=e1004cfb-97ed-4594-9a60-f0bcd58e4122) — Flaming Hydra
- [Must Read: The Strange Triumph of North Korea](https://link.foreignaffairs.com/view/64456883d447307be60958dcr15xm.an1j/131c0225) — Foreign Affairs
- [Palms, poems, moderns](https://www.commonreader.co.uk/p/palms-poems-moderns) — Henry Oliver from The Common Reader
- [Great Reads for April](https://johnbiggs.substack.com/p/great-reads-for-april-a-doorstop) — John Biggs
- [Kottke.org Posts and Links for April 28, 2026](https://www.technologyreview.com/2026/04/21/1135921/ai-malaise-artificial-intelligence-public-sentiment/) — Kottke.org
- [Physical AI that Moves the World](https://www.latent.space/p/appliedintuition) — Latent.Space
- [This week on How I AI: GPT 5.5, Claude Design, and GPT Images 2.0 hands-on reviews](https://www.lennysnewsletter.com/p/this-week-on-how-i-ai-gpt-55-claude) — Lenny's Newsletter
- [Your Couch-to-5K for AI](https://www.lennysnewsletter.com/p/your-couch-to-5k-for-ai) — Lenny's Newsletter
- [A Marxist assassination conspiracy thriller, a great rock-em-sock-em French action movie, and more](https://maxread.substack.com/p/a-marxist-assassination-conspiracy) — Max Read
- [12 of my enemies in alphabetical order](https://mollyyoung.substack.com/p/12-of-my-enemies-in-alphabetical) — Molly Young
- [REVIEW: The Greatest Knight, by Thomas Asbridge](https://open.substack.com/pub/thepsmiths/p/review-the-greatest-knight-by-thomas) — Mr. and Mrs. Psmith's Bookshelf
- [Makers of Modern China: An Online event on Zheng Xiaoqiong](https://thenewyorkreview.updatemyprofile.com/y-ahhdyud-36F2A313-iruduywlh-o) — New York Review Books
- [Whoopsy Daisy!](https://thenewyorkreview.updatemyprofile.com/y-ahhdtld-36F2A313-iruduywlh-jl) — New York Review Books
- ['I Just Want To Go Home'](https://roddreher.substack.com/p/i-just-want-to-go-home) — Rod Dreher
- [Cole Allen: Weimar American](https://roddreher.substack.com/p/cole-allen-weimar-american) — Rod Dreher
- [Last Week's New Yorker Review: The Weekend Special (April 27)](https://buttondown.com/lastweeksnewyorker/archive/last-weeks-new-yorker-review-u23f0-the-weekend-5996/) — Sam Circle
- [Breaking point](https://semafor.com/s/Un52XlqE6I?email=wschenk@gmail.com) — Semafor DC
- [FISA friction](https://semafor.com/s/R6X9Nt2nR1?email=wschenk@gmail.com) — Semafor DC
- [Heir apparent](https://semafor.com/s/vJGwfiORRJ?email=wschenk@gmail.com) — Semafor DC
- [The king's speech](https://semafor.com/s/8WfucnqQ9d?email=wschenk@gmail.com) — Semafor DC
- [Green goals](https://semafor.com/s/faH9OU5eY7?email=wschenk@gmail.com) — Semafor Energy
- [UAE's Saudi schism deepens with move to quit OPEC](https://semafor.com/s/FadNeQ9WFt?email=wschenk@gmail.com) — Semafor Energy
- [Boiling over](https://semafor.com/s/F0cCuVeIc9?email=wschenk@gmail.com) — Semafor Flagship
- [Ceasefires, central banks, and conspiracies](https://semafor.com/s/aHqnyyi5TW?email=wschenk@gmail.com) — Semafor Flagship
- [No turning back](https://semafor.com/s/LOTgsyusSL?email=wschenk@gmail.com) — Semafor Flagship
- [Proofs and profits](https://semafor.com/s/jARJIOaYHM?email=wschenk@gmail.com) — Semafor Flagship
- [I am mother (again)](https://www.shesabeast.co/r/a6a990b0?m=71f42b59-5c9c-43d4-809b-fcdf1c3ac9cc) — She's A Beast
- [The shooting is not a reason to speedrun Trump's ballroom](https://www.theatlantic.com/) — The Atlantic Daily
- [The evolution of Trump's corruption](https://www.theatlantic.com/) — The Atlantic Daily
- [Marathon, Battle, Withnail, Papua, Future](https://thebrowser.com/r/8cea3853?m=870013e5-9af6-40f5-bf0e-51ce412162bd) — The Browser
- [Whale, Sad, Floor, View, Suit](https://thebrowser.com/r/64bb1773?m=870013e5-9af6-40f5-bf0e-51ce412162bd) — The Browser
- [Academe Today: Professors are too old (opinion)](https://links2.newsletter.chronicle.com/s/c/tFhui7PNJwyYIvk5V23LArsVTRjeQ9kFlvjIkMbhujbx9eWnr2zqJkhG8f_s6mDxjJj5pnsrxVDt1Ip2DNN36EKjYvjKgSWpKLRDdkhRyr2LbsG1_uNb6wnE6LuJn_llie5Yr07u_6yKAVuxmKfuANeTfULNo2A9MqYuh4jTejBQNsOweHIAZFgDFt7KBILc-BCVtnrz9W2lYEI_-onnfjNxqQnv-TvNZlvm3wZeoFNviOT_a2oJx8oElpaXH0jb4f7TsV6s3pyzmgNWUvTKe3fKNQGTIIxnMnWULCsTaXowgyhXOSwRm4DP2HXOZqoq48vnkEQhWLrBpZQJHZnUMzXhGKpROkH0EePHT7sSrd1Jsw6agiYEEMOuFtHJPQDqqdFyjC8IX7Ux1b3EsNfHV5vmZnqw2dQ092lJPohQdYnriq9Y5KnT/gx54yNpqJM0ZNvanxmz4_6OS0G_tfxSj/20) — The Chronicle of Higher Education
- [Academe Today: Hate your job? You're probably stuck with it.](https://links2.newsletter.chronicle.com/s/c/66d1MBw2-1BqMPCQYxOOAIIQPw25PMPnSdiIB5V_7dx_nXq-dgQj3lLHgs80dPCNWXZ5-HOsECBlZEMrkrQJhbABkZMSlRNpIfMrv74heipDcVj4Gs3TZr9DMxUspoKpDwdLnJubLVXbdUg5rx8pNZ1etyg-7bgoXVW-g5I-riWtG_sZ7zlrr0zMgFQaOfgCpK9A9kkOc6gsy5VmpW63EErKeUsJLddYgiPnnrx59LGY5DgSMHof9a2BMAw4O-_bOHe8ZHChZmRcI_y6PWc_iy3zAZFboyZuACaUCPhLh-i2uIUkftR4F94pxCvHYiHX8cqQh2n6P8dv8OJaE-whbv0oXomvSTvsVfwpiYcQ1nuVyvvymLF5Cs6HTONASDEWFsQ-6pbJK5U9pQwIKSn_1Q5D-ehNSiVEWjqYB_Wmn0hFCgUydBSW/Ex9U94dDpPK1tZb2_1VQKr9YZ55QP9aJ/20) — The Chronicle of Higher Education
- [Mali at the Brink](https://claireberlinski.substack.com/cp/195607933) — The Cosmopolitan Globalist
- [What if the White House correspondents had been in Mali?](https://claireberlinski.substack.com/p/what-if-the-white-house-correspondents) — The Cosmopolitan Globalist
- [An Attack on American Democracy](https://substack.com/redirect/a9f8a7ec-ee42-4820-8618-23e7dfce3d78?j=eyJ1IjoiMWllZnkifQ.sG3OqnkHDNZpplC0eLA9u0NYhAE4J8yHwSPDyeVA8k8) — The Free Press
- [Is Ibogaine the Next Miracle Drug?](https://substack.com/redirect/80248ed1-6066-412c-8662-a1b5eb13ce8d?j=eyJ1IjoiMWllZnkifQ.sG3OqnkHDNZpplC0eLA9u0NYhAE4J8yHwSPDyeVA8k8) — The Free Press
- [Douglas Murray: Why the Shooter's Manifesto Sounds Familiar](https://substack.com/redirect/f28899b5-8283-4255-b169-f4a9f1d4e24f?j=eyJ1IjoiMWllZnkifQ.sG3OqnkHDNZpplC0eLA9u0NYhAE4J8yHwSPDyeVA8k8) — The Free Press
- [She Was Epstein's Top Assistant. How Did She Emerge Unscathed?](https://substack.com/redirect/9b805e37-230a-4a10-a1a0-825baca42f65?j=eyJ1IjoiMWllZnkifQ.sG3OqnkHDNZpplC0eLA9u0NYhAE4J8yHwSPDyeVA8k8) — The Free Press
- [The New First Lady of American Theatre](https://link.newyorker.com/view/5bea16dd3f92a40469736b16r16rw.8f9e/43ded480) — The New Yorker Weekly
- [Track Two Webinars: Stas Kucher and Ekaterina Schulmann in Conversation](https://www.tracktwo.org/) — Track Two
- [the human premium](https://yournetworkstartswithyou.substack.com/p/the-human-premium) — Zvi | Your Network Starts with You
