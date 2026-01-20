# Week 03 Tech-AI Newsletter Analysis (January 12-18, 2026)

## Overview

Week 03 marked a pivotal moment in the democratization of AI coding agents, as Anthropic's Claude Code and newly-announced Cowork sparked widespread experimentation among non-programmers. Meanwhile, serious questions emerged about AI safety and governance, with [404 Media](https://www.404media.co/r/beead576?m=d9c8ed7d-8f51-45be-865b-ff329f323410) exposing surveillance infrastructure and [Platformer](https://www.platformer.news/r/103cfadc?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670) documenting the deepfake crisis that forced regulatory action. On the business front, [Turing Post](https://www.turingpost.com/p/fod135) analyzed why both OpenAI and Anthropic chose healthcare simultaneously, while [SemiAnalysis](https://newsletter.semianalysis.com/p/from-tokens-to-burgers-a-water-footprint) provided crucial perspective on datacenter water usage by comparing it to burger production.

---

## Major Topics and Stories

### 1. The Claude Code Moment: Programming in English Becomes Real

**Coverage:** [Platformer](https://www.platformer.news/r/5a69b93c?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670), [Simon Willison's Newsletter](https://simonw.substack.com/p/first-impressions-of-claude-cowork), [Why Try AI](https://www.whytryai.com/p/claude-code-beginner-guide), [AlphaSignal](https://alphasignal.ai)

After months of being a developer tool, Claude Code broke into mainstream consciousness this week. The catalyst was Anthropic's January 13 announcement of Cowork, described as "Claude Code for the rest of your work," which extends agent capabilities beyond programming to everyday file workflows.

[Casey Newton](https://www.platformer.news/r/5a69b93c?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670) captured the zeitgeist: "ChatGPT was the moment when people woke up to the power of LLMs to generate text. The Claude Code moment, while orders of magnitude smaller, strikes me as potentially just as significant. It's waking people up to LLMs' power to generate tools."

He documented building five practical tools in days, including a searchable archive of his writing, an automated daily briefing system, and a journal companion—projects he'd wanted for years but lacked the technical skills to create. The revelation: "I don't understand the underlying code at all. But for the moment, anyway, I'm not certain it matters."

[Simon Willison](https://simonw.substack.com/p/first-impressions-of-claude-cowork) tested Cowork against his blog drafts folder, asking it to identify unpublished pieces closest to being ready. It analyzed 46 draft files, ran 44 searches against his site, and correctly identified which pieces remained unpublished—in under an hour. His key insight: Cowork is essentially Claude Code with a less intimidating interface and pre-configured filesystem sandbox, making it accessible to non-developers while maintaining the same powerful capabilities.

> "I've been saying for a while now that Claude Code is a 'general agent' disguised as a developer tool. It can help you with any computer task that can be achieved by executing code or running terminal commands... which covers almost anything, provided you know what you're doing with it! What it really needs is a UI that doesn't involve the terminal and a name that doesn't scare away non-developers." — [Simon Willison](https://simonw.substack.com/p/first-impressions-of-claude-cowork)

[Why Try AI](https://www.whytryai.com/p/claude-code-beginner-guide) published a comprehensive beginner's guide addressing the psychological barriers: "Despite hearing great things about Claude Code for months, I've been hesitant to actually give it a shot. I mean, why try AI if you can not try AI, am I right? I don't know if it's the scary 'Code' word in its name, the fact that it isn't free, or the terminal interface that brings back painful childhood trauma of my MS-DOS and Norton Commander days."

His tests demonstrated practical non-coding applications: organizing 100+ screenshots by content rather than timestamp, finding free cat images online and saving them locally, and creating logical folder structures—tasks that would have taken hours manually completed in minutes autonomously.

The safety question loomed large. [Simon Willison](https://simonw.substack.com/p/first-impressions-of-claude-cowork) noted: "I do not think it is fair to tell regular non-programmer users to watch out for 'suspicious actions that may indicate prompt injection'!" He argued that while Anthropic has impressive mitigations, no guarantees exist that future attacks won't steal data—the fundamental unsolved problem of prompt injection.

### 2. AI Labs Enter Healthcare: A Systems Test More Than a Market Opportunity

**Coverage:** [Turing Post](https://www.turingpost.com/p/fod135), [AlphaSignal](https://alphasignal.ai), [Platformer](https://www.platformer.news/r/5a69b93c?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670)

Both OpenAI and Anthropic announced healthcare initiatives within days of each other in early January—a convergence [Turing Post](https://www.turingpost.com/p/fod135) analyzed as a signal that "healthcare has crossed a threshold where staying out is no longer the cautious choice."

The analysis argued this represents less a market opportunity than a systems test: "Healthcare is therefore better understood as a systems test rather than a market opportunity. This is a hugely important step in AI adoption." The decision by both labs to move simultaneously implies a shared conclusion that models are now more governable, not just more capable.

> "For several years, healthcare was treated as a deferred domain for leading AI labs. Understandably: the sector is heavily regulated, operationally fragmented, and unforgiving to confident mistakes. Earlier generations of models were difficult to bound, difficult to audit, and prone to failure modes that could not be cleanly isolated from their successes." — [Turing Post](https://www.turingpost.com/p/fod135)

The critical insight: AI is being applied to coordination, not medical judgment. Healthcare suffers from structural fragmentation—information distributed across multiple systems, with signals from medications, labs, imaging, wearables, genetics, and prior history rarely considered together. LLMs help bring existing information together for easier review by professionals.

The approaches differ strategically. OpenAI extends its general assistant into healthcare, treating health data as high-value context alongside documents and calendars. Anthropic takes a narrower approach, embedding Claude inside existing institutional workflows with emphasis on predictable behavior and limited scope. "The choices reflect different theories of how trust is built in regulated systems. One assumes trust emerges from continuity and widespread use, the other from constraint and institutional alignment."

[Platformer](https://www.platformer.news/r/5a69b93c?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670) reported OpenAI's $100 million acquisition of healthcare app Torch, which treats medical history as a single persistent system rather than isolated files—addressing the fundamental problem that health data rarely lives in one place.

### 3. Grok Crisis: When AI Safety Failures Meet Political Calculus

**Coverage:** [Platformer](https://www.platformer.news/r/103cfadc?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670), [Click Raven](https://clickraven.com), [404 Media](https://www.404media.co/r/beead576?m=d9c8ed7d-8f51-45be-865b-ff329f323410)

The week began with mounting outrage over Grok generating sexualized deepfakes of women and children. [Platformer](https://www.platformer.news/r/103cfadc?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670) documented X's Friday announcement restricting the feature to paying subscribers—which turned out to be theater. The restriction applied only to one access method (tagging @grok in replies), while the "edit image" button, long-press mobile access, standalone website, and Grok tab throughout X remained fully functional for free accounts.

> "It is bad enough that the safeguards in Grok's underlying model did not stop these images from being generated. That they were attached to the accounts of the victims, most of whom were alerted to each fresh violation via a push notification, represents a new low in the history of content moderation for a major platform." — [Casey Newton, Platformer](https://www.platformer.news/r/103cfadc?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670)

Victims included conservative influencer Ashley St. Clair (a mother of one of Musk's children), the Princess of Wales, and countless less prominent women. Musk vacillated between his usual "😂" routine and bitter defiance, claiming critics "want any excuse for censorship" while sharing an AI-generated image of UK Prime Minister Keir Starmer in a bikini.

The most striking development: while US regulators and Republican lawmakers issued "murmurs of concern," multiple foreign governments took action. The UK announced it would criminalize creating non-consensual intimate images and make it illegal for companies to supply such tools. Indonesia and Malaysia outright banned Grok—the first time an AI chatbot was banned by nation-states in response to generated content. France, Australia, and India launched investigations.

[Click Raven](https://clickraven.com) published an opinion piece accusing Apple and Google of "cowardice" for not enforcing app store policies against X despite clear violations, arguing their inaction stems from Elon Musk's political and economic influence through his ties to Donald Trump.

### 4. Palantir's ELITE: The Infrastructure Behind ICE Operations

**Coverage:** [404 Media](https://www.404media.co/r/beead576?m=d9c8ed7d-8f51-45be-865b-ff329f323410)

[404 Media](https://www.404media.co/r/beead576?m=d9c8ed7d-8f51-45be-865b-ff329f323410) obtained a user guide for ELITE (Enhanced Leads Identification & Targeting for Enforcement), revealing Palantir's tool that populates maps with potential deportation targets, displays dossiers, and provides "confidence scores" on current addresses.

The "Geospatial Lead Sourcing Tab" lets ICE officers select people individually or draw shapes on maps to see everyone in an area. Each selection shows name, photo, Alien Number, date of birth, full address, and an address confidence score (examples: 98.95/100, 77.25/100) based on source recency and reliability.

Data sources include the Department of Health and Human Services, U.S. Citizenship and Immigration Services, and Thomson Reuters' CLEAR product. ICE officers can filter by "Special Operations"—"groups of pre-defined aliens specifically targeted by Leadership for action."

> "These records give us behind-the-scenes insight into the kind of mass surveillance machine ICE is building with help from powerful tech companies like Palantir. When combined with what we know from ICE testimony and other public information, it gives us a blueprint into how ICE is going into communities and identifying people for arrest in real-time." — Laura Rivera, senior staff attorney at Just Futures Law, via [404 Media](https://www.404media.co/r/beead576?m=d9c8ed7d-8f51-45be-865b-ff329f323410)

Sworn testimony from an Oregon ICE official described using ELITE to identify "target rich" areas during a raid in Woodburn: "It's basically a map of the United States. It's kind of like Google Maps... You're going to go to a more dense population rather than... if there's one pin at a house and the likelihood of them actually living there is like 10 percent... you're not going to go there."

The contract shows Palantir receiving $29.9 million starting in September 2025 to "continue configuration and engineering services" for ELITE and other ICE tools—marking Palantir's expansion from criminal investigations to deportation operations under the second Trump administration.

### 5. Datacenter Water Usage: Putting the Debate in Perspective

**Coverage:** [SemiAnalysis](https://newsletter.semianalysis.com/p/from-tokens-to-burgers-a-water-footprint)

[SemiAnalysis](https://newsletter.semianalysis.com/p/from-tokens-to-burgers-a-water-footprint) tackled datacenter water controversy with rigorous analysis comparing Elon Musk's Colossus 2 Memphis datacenter to an average In-N-Out restaurant.

Their detailed calculation for Colossus 2 (400MW capacity): 346 million gallons annually, or 0.9 million gallons daily—close to public estimates. This breaks down as 267 million from cooling evaporation, 66 million withdrawn (not consumed) for flushes, 13 million from chip manufacturing (amortized over 5 years), and zero from power generation due to simple-cycle turbines.

For an In-N-Out store selling burgers only: 147 million gallons annually. The beef alone accounts for 95% of water footprint—primarily from irrigation for cattle feed crops. Regional variation matters enormously; Southwest US has substantially higher blue water intensity than wetter regions.

> "The duel is on. Colossus 2's blue water footprint is around 436 million gallons per year, while an average In-N-Out store (yes, burgers only) comes in at around 147 million gallons. That's roughly a ~2.5 : 1 ratio. We'll let the reader decide what to make of thr important information that one the largest datacenters in the world only consumes as much water as 2.5 In-N-Out's." — [SemiAnalysis](https://newsletter.semianalysis.com/p/from-tokens-to-burgers-a-water-footprint)

The analysis calculated Colossus could generate 3.9 quadrillion output tokens annually—translating to 8.9 million tokens per gallon. At 245 gallons per burger, that's 2.7 billion output tokens per burger. A single burger's water footprint equals using Grok for 668 years, 30 times daily, every single day.

The ace up the sleeve: xAI is building a water recycling plant to provide cooling water by recycling municipal wastewater that would otherwise discharge into the Mississippi River, potentially making Colossus 2 net-zero for water.

### 6. Apple-Google Partnership and Vision Pro Frustrations

**Coverage:** [Platformer](https://www.platformer.news/r/103cfadc?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670), [Stratechery](https://stratechery.com/2026/apple-you-still-dont-understand-the-vision-pro/?access_token=eyJhbGciOiJSUzI1NiIsImtpZCI6InN0cmF0ZWNoZXJ5LnBhc3Nwb3J0Lm9ubGluZSIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJzdHJhdGVjaGVyeS5wYXNzcG9ydC5vbmxpbmUiLCJhenAiOiJIS0xjUzREd1Nod1AyWURLYmZQV00xIiwiZW50Ijp7InVyaSI6WyJodHRwczovL3N0cmF0ZWNoZXJ5LmNvbS8yMDI2L2FwcGxlLXlvdS1zdGlsbC1kb250LXVuZGVyc3RhbmQtdGhlLXZpc2lvbi1wcm8vIl19LCJleHAiOjE3NzA4MDc4MjEsImlhdCI6MTc2ODIxNTgyMSwiaXNzIjoiaHR0cHM6Ly9hcHAucGFzc3BvcnQub25saW5lL29hdXRoIiwic2NvcGUiOiJmZWVkOnJlYWQgYXJ0aWNsZTpyZWFkIGFzc2V0OnJlYWQgY2F0ZWdvcnk6cmVhZCBlbnRpdGxlbWVudHMiLCJzdWIiOiJlYzJhMTRiZi1mMGJhLTRlY2EtOTQwMi0wYjE2OTRhZWQ3MDEiLCJ1c2UiOiJhY2Nlc3MifQ.PHJv4IL9iZZxgVwf4nMcHB7KWD0pZtM7fisI8XbMdsrr8r13eSuXZaluzWALBYRUxTIyN7mLqxPCU9M4DNZ1hWt1sWs8GasSd9c4G4hWmSqgeC3oWqb_PBrDv7T0F2DkQn5bqtAZIDbhPNuo92j5f-QVJjMzEtIBnkaR6nXMY9jsm4ZNqVChLKmFwn7rKikJGolG45LmrQDF4Qh-PQtCaUvKkCbrBWXl11gQkpk8GdQijJ5mBCVT6Jvh7oZGbiBqDbV6v18KbismwVjpHIcoQxBZ_-d5b1RmSlu-HHDOwXGXg47WlEQAQMVrpHsDlq5UiD8hfACO31gAd8XVglsJDw)

Apple and Google announced a "multi-year" partnership for Google's Gemini models to power Apple Intelligence features, particularly "a more personalized Siri coming this year" (the third consecutive year this promise has been made). [Platformer](https://www.platformer.news/r/103cfadc?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670) noted this effectively positions Google as replacing OpenAI as Apple's key AI supplier, while suggesting Apple will mostly sit out building powerful LLMs themselves.

Meanwhile, [Ben Thompson's Stratechery](https://stratechery.com/2026/apple-you-still-dont-understand-the-vision-pro/?access_token=eyJhbGciOiJSUzI1NiIsImtpZCI6InN0cmF0ZWNoZXJ5LnBhc3Nwb3J0Lm9ubGluZSIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJzdHJhdGVjaGVyeS5wYXNzcG9ydC5vbmxpbmUiLCJhenAiOiJIS0xjUzREd1Nod1AyWURLYmZQV00xIiwiZW50Ijp7InVyaSI6WyJodHRwczovL3N0cmF0ZWNoZXJ5LmNvbS8yMDI2L2FwcGxlLXlvdS1zdGlsbC1kb250LXVuZGVyc3RhbmQtdGhlLXZpc2lvbi1wcm8vIl19LCJleHAiOjE3NzA4MDc4MjEsImlhdCI6MTc2ODIxNTgyMSwiaXNzIjoiaHR0cHM6Ly9hcHAucGFzc3BvcnQub25saW5lL29hdXRoIiwic2NvcGUiOiJmZWVkOnJlYWQgYXJ0aWNsZTpyZWFkIGFzc2V0OnJlYWQgY2F0ZWdvcnk6cmVhZCBlbnRpdGxlbWVudHMiLCJzdWIiOiJlYzJhMTRiZi1mMGJhLTRlY2EtOTQwMi0wYjE2OTRhZWQ3MDEiLCJ1c2UiOiJhY2Nlc3MifQ.PHJv4IL9iZZxgVwf4nMcHB7KWD0pZtM7fisI8XbMdsrr8r13eSuXZaluzWALBYRUxTIyN7mLqxPCU9M4DNZ1hWt1sWs8GasSd9c4G4hWmSqgeC3oWqb_PBrDv7T0F2DkQn5bqtAZIDbhPNuo92j5f-QVJjMzEtIBnkaR6nXMY9jsm4ZNqVChLKmFwn7rKikJGolG45LmrQDF4Qh-PQtCaUvKkCbrBWXl11gQkpk8GdQijJ5mBCVT6Jvh7oZGbiBqDbV6v18KbismwVjpHIcoQxBZ_-d5b1RmSlu-HHDOwXGXg47WlEQAQMVrpHsDlq5UiD8hfACO31gAd8XVglsJDw) delivered a scathing critique of Vision Pro's first live sports broadcast. Despite using Apple's special Immersive Video cameras, the Lakers game suffered from constant camera cuts—jumping from scorer's table to baseline and back, destroying the sense of presence that makes Vision Pro unique.

> "What makes the Vision Pro unique is the sense of presence: you really feel like you are wherever the Vision Pro takes you... However, when I'm getting yanked around from camera to camera, the experience is flat out worse than just watching on TV. Just think about it: would it be enjoyable to be teleported from sideline to baseline to baseline and back again, completely at the whim of some producer, and often in the middle of the play?" — [Ben Thompson, Stratechery](https://stratechery.com/2026/apple-you-still-dont-understand-the-vision-pro/?access_token=eyJhbGciOiJSUzI1NiIsImtpZCI6InN0cmF0ZWNoZXJ5LnBhc3Nwb3J0Lm9ubGluZSIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJzdHJhdGVjaGVyeS5wYXNzcG9ydC5vbmxpbmUiLCJhenAiOiJIS0xjUzREd1Nod1AyWURLYmZQV00xIiwiZW50Ijp7InVyaSI6WyJodHRwczovL3N0cmF0ZWNoZXJ5LmNvbS8yMDI2L2FwcGxlLXlvdS1zdGlsbC1kb250LXVuZGVyc3RhbmQtdGhlLXZpc2lvbi1wcm8vIl19LCJleHAiOjE3NzA4MDc4MjEsImlhdCI6MTc2ODIxNTgyMSwiaXNzIjoiaHR0cHM6Ly9hcHAucGFzc3BvcnQub25saW5lL29hdXRoIiwic2NvcGUiOiJmZWVkOnJlYWQgYXJ0aWNsZTpyZWFkIGFzc2V0OnJlYWQgY2F0ZWdvcnk6cmVhZCBlbnRpdGxlbWVudHMiLCJzdWIiOiJlYzJhMTRiZi1mMGJhLTRlY2EtOTQwMi0wYjE2OTRhZWQ3MDEiLCJ1c2UiOiJhY2Nlc3MifQ.PHJv4IL9iZZxgVwf4nMcHB7KWD0pZtM7fisI8XbMdsrr8r13eSuXZaluzWALBYRUxTIyN7mLqxPCU9M4DNZ1hWt1sWs8GasSd9c4G4hWmSqgeC3oWqb_PBrDv7T0F2DkQn5bqtAZIDbhPNuo92j5f-QVJjMzEtIBnkaR6nXMY9jsm4ZNqVChLKmFwn7rKikJGolG45LmrQDF4Qh-PQtCaUvKkCbrBWXl11gQkpk8GdQijJ5mBCVT6Jvh7oZGbiBqDbV6v18KbismwVjpHIcoQxBZ_-d5b1RmSlu-HHDOwXGXg47WlEQAQMVrpHsDlq5UiD8hfACO31gAd8XVglsJDw)

Thompson argued Apple fundamentally misunderstands its own device by applying TV production lessons to an immersive medium. The solution: "One camera, with no production. Just let me sit courtside and watch an NBA game. I don't need a scoreboard, I can look up and see it... You have made a device that, for this specific use case, is better than TV in every way, yet you insist on producing content for it like it is TV!"

---

## Cross-Newsletter Patterns

### The Safety-Progress Tension

The week crystallized a fundamental tension: as AI capabilities expand dramatically (Claude Code enabling non-programmers to build tools, healthcare AI coordinating fragmented data), safety and governance mechanisms lag dangerously. [Platformer's](https://www.platformer.news/r/103cfadc?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670) Grok coverage and [404 Media's](https://www.404media.co/r/beead576?m=d9c8ed7d-8f51-45be-865b-ff329f323410) ELITE investigation documented what happens when powerful AI tools deploy without adequate guardrails or oversight.

### Democratization's Double Edge

[Platformer](https://www.platformer.news/r/5a69b93c?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670), [Simon Willison](https://simonw.substack.com/p/first-impressions-of-claude-cowork), and [Why Try AI](https://www.whytryai.com/p/claude-code-beginner-guide) all celebrated Claude Code's democratization of programming capabilities. Yet [Simon Willison](https://simonw.substack.com/p/first-impressions-of-claude-cowork) warned about the "ever-present threat of prompt injection"—the unsolved vulnerability that becomes more dangerous as more non-technical users adopt powerful agent tools without understanding the risks.

### The Coordination Challenge

Multiple stories highlighted coordination as the key problem AI is solving. [Turing Post](https://www.turingpost.com/p/fod135) explained healthcare AI as coordination of fragmented medical information. [404 Media's](https://www.404media.co/r/beead576?m=d9c8ed7d-8f51-45be-865b-ff329f323410) ELITE piece revealed government using AI to coordinate surveillance data. [Platformer's](https://www.platformer.news/r/5a69b93c?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670) Claude Code analysis showed individuals using agents to coordinate their own scattered digital work. The pattern: AI excels at synthesizing information across fragmented systems—for better and worse.

### Infrastructure Reality Checks

[SemiAnalysis](https://newsletter.semianalysis.com/p/from-tokens-to-burgers-a-water-footprint) provided crucial quantitative perspective on datacenter concerns, while [Stratechery](https://stratechery.com/2026/apple-you-still-dont-understand-the-vision-pro/?access_token=eyJhbGciOiJSUzI1NiIsImtpZCI6InN0cmF0ZWNoZXJ5LnBhc3Nwb3J0Lm9ubGluZSIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJzdHJhdGVjaGVyeS5wYXNzcG9ydC5vbmxpbmUiLCJhenAiOiJIS0xjUzREd1Nod1AyWURLYmZQV00xIiwiZW50Ijp7InVyaSI6WyJodHRwczovL3N0cmF0ZWNoZXJ5LmNvbS8yMDI2L2FwcGxlLXlvdS1zdGlsbC1kb250LXVuZGVyc3RhbmQtdGhlLXZpc2lvbi1wcm8vIl19LCJleHAiOjE3NzA4MDc4MjEsImlhdCI6MTc2ODIxNTgyMSwiaXNzIjoiaHR0cHM6Ly9hcHAucGFzc3BvcnQub25saW5lL29hdXRoIiwic2NvcGUiOiJmZWVkOnJlYWQgYXJ0aWNsZTpyZWFkIGFzc2V0OnJlYWQgY2F0ZWdvcnk6cmVhZCBlbnRpdGxlbWVudHMiLCJzdWIiOiJlYzJhMTRiZi1mMGJhLTRlY2EtOTQwMi0wYjE2OTRhZWQ3MDEiLCJ1c2UiOiJhY2Nlc3MifQ.PHJv4IL9iZZxgVwf4nMcHB7KWD0pZtM7fisI8XbMdsrr8r13eSuXZaluzWALBYRUxTIyN7mLqxPCU9M4DNZ1hWt1sWs8GasSd9c4G4hWmSqgeC3oWqb_PBrDv7T0F2DkQn5bqtAZIDbhPNuo92j5f-QVJjMzEtIBnkaR6nXMY9jsm4ZNqVChLKmFwn7rKikJGolG45LmrQDF4Qh-PQtCaUvKkCbrBWXl11gQkpk8GdQijJ5mBCVT6Jvh7oZGbiBqDbV6v18KbismwVjpHIcoQxBZ_-d5b1RmSlu-HHDOwXGXg47WlEQAQMVrpHsDlq5UiD8hfACO31gAd8XVglsJDw) exposed how traditional mindsets hamper new technology adoption. Both pieces argued that old metrics and production approaches often miss what makes new infrastructure valuable.

### Political Economy of AI Governance

[Platformer's](https://www.platformer.news/r/103cfadc?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670) Grok coverage revealed stark differences: while foreign governments banned or investigated the tool, US regulators remained silent, allegedly due to Musk's Trump connections. [Click Raven](https://clickraven.com) explicitly accused Apple and Google of cowardice for not enforcing their own policies. The pattern suggests AI governance increasingly depends on political calculus rather than technical or ethical principles.

---

## Sources

- [FOD#135: What It Means When AI Labs Step Into Healthcare](https://www.turingpost.com/p/fod135) — Turing Post
- [From Tokens to Burgers: A Water Footprint Face-Off](https://newsletter.semianalysis.com/p/from-tokens-to-burgers-a-water-footprint) — SemiAnalysis
- [Grok gets blocked](https://www.platformer.news/r/103cfadc?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670) — Platformer
- ['ELITE': The Palantir App ICE Uses to Find Neighborhoods to Raid](https://www.404media.co/r/beead576?m=d9c8ed7d-8f51-45be-865b-ff329f323410) — 404 Media
- [First impressions of Claude Cowork, Anthropic's general agent](https://simonw.substack.com/p/first-impressions-of-claude-cowork) — Simon Willison's Newsletter
- [Claude Code for writers](https://www.platformer.news/r/5a69b93c?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670) — Platformer
- [Apple: You (Still) Don't Understand the Vision Pro](https://stratechery.com/2026/apple-you-still-dont-understand-the-vision-pro/?access_token=eyJhbGciOiJSUzI1NiIsImtpZCI6InN0cmF0ZWNoZXJ5LnBhc3Nwb3J0Lm9ubGluZSIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJzdHJhdGVjaGVyeS5wYXNzcG9ydC5vbmxpbmUiLCJhenAiOiJIS0xjUzREd1Nod1AyWURLYmZQV00xIiwiZW50Ijp7InVyaSI6WyJodHRwczovL3N0cmF0ZWNoZXJ5LmNvbS8yMDI2L2FwcGxlLXlvdS1zdGlsbC1kb250LXVuZGVyc3RhbmQtdGhlLXZpc2lvbi1wcm8vIl19LCJleHAiOjE3NzA4MDc4MjEsImlhdCI6MTc2ODIxNTgyMSwiaXNzIjoiaHR0cHM6Ly9hcHAucGFzc3BvcnQub25saW5lL29hdXRoIiwic2NvcGUiOiJmZWVkOnJlYWQgYXJ0aWNsZTpyZWFkIGFzc2V0OnJlYWQgY2F0ZWdvcnk6cmVhZCBlbnRpdGxlbWVudHMiLCJzdWIiOiJlYzJhMTRiZi1mMGJhLTRlY2EtOTQwMi0wYjE2OTRhZWQ3MDEiLCJ1c2UiOiJhY2Nlc3MifQ.PHJv4IL9iZZxgVwf4nMcHB7KWD0pZtM7fisI8XbMdsrr8r13eSuXZaluzWALBYRUxTIyN7mLqxPCU9M4DNZ1hWt1sWs8GasSd9c4G4hWmSqgeC3oWqb_PBrDv7T0F2DkQn5bqtAZIDbhPNuo92j5f-QVJjMzEtIBnkaR6nXMY9jsm4ZNqVChLKmFwn7rKikJGolG45LmrQDF4Qh-PQtCaUvKkCbrBWXl11gQkpk8GdQijJ5mBCVT6Jvh7oZGbiBqDbV6v18KbismwVjpHIcoQxBZ_-d5b1RmSlu-HHDOwXGXg47WlEQAQMVrpHsDlq5UiD8hfACO31gAd8XVglsJDw) — Stratechery
- [🤖 Anthropic Cowork: Claude agents for file workflows](https://alphasignal.ai) — AlphaSignal
- [Claude Code for the Rest of Us: Setup Guide & Use Cases](https://www.whytryai.com/p/claude-code-beginner-guide) — Why Try AI
- [Grok Is Out of Control. Will Apple and Google Act?](https://clickraven.com) — Click Raven
