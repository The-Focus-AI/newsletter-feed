# Week 03 Uncategorized Newsletter Analysis (January 12-17, 2026)

## Overview

This week's uncategorized newsletters span a remarkably diverse set of topics: extensive investigative journalism on surveillance technology and its abuses (404 Media), sharp critiques of wealth inequality and tech industry layoffs (Chris Ferdinandi at Go Make Things), anti-imperialist geopolitical commentary (Everything is Political), AI and cryptocurrency creator economy developments (Geoffrey Huntley), health optimization and lifestyle content (Tim Ferriss), deep analysis of AI business models (Kevin Xu at Interconnected), protocol governance insights (Connected Places), technical programming news (Golang Weekly), and cultural/entertainment items. The dominant themes are the dangers of unchecked surveillance technology, the intersection of technology with social justice issues, AI's transformation of work and business models, and the human consequences of technological disruption.

---

## Surveillance Technology and Police Overreach

### The Flock Surveillance System Scandal

**Jason Koebler at 404 Media** dominated this week with an extensive multi-day investigation into Flock, a license plate surveillance system used by police departments nationwide.

#### Police Departments Leak Millions of Surveillance Records (January 13)

Koebler reported that multiple police departments accidentally leaked the license plates of millions of surveillance targets due to failed redaction of public records requests. The data was compiled into a searchable website called HaveIBeenFlocked.com.

The scale is staggering:

> "The data has been turned into a searchable tool on a website called HaveIBeenFlocked.com, which says it has data on more than 2.3 million license plates and tens of millions of Flock searches."

Koebler explains the fundamental architectural problem:

> "When a police officer runs a search seeking the locations of a specific license plate, they are usually not just searching cameras owned by their own jurisdiction, they are usually searching all Flock cameras in that state or in the country. Each individual search creates a record of that search on as many as 80,000 different cameras around the country."

This means any single police department's failure to redact properly exposes surveillance targets nationwide. The leaked data revealed disturbing search patterns including:

> "hundreds of searches of 'No Kings' protesters, audit log reasons that included 'possible gypsy,' and the search for a woman who had a self-administered abortion."

Flock's response has been to threaten the transparency website rather than fix the underlying problem. Koebler reports:

> "Flock has threatened Cris van Pelt, the creator of HaveIBeenFlocked, by going after his web hosts and claiming that he has violated their intellectual property rights and is posting information that 'poses an immediate threat to public safety and exposes law enforcement officers to danger.'"

Chris Gilliard, privacy expert, offered a sharp critique:

> "Flock is doing their best to have it both ways where they have no responsibility and also no accountability to the communities where their cameras are placed. Shoddy data hygiene by law enforcement is not seen as a threat or danger but accountability and transparency are."

Flock's CEO Garrett Langley characterized public records requests as "coordinated attack" by activists who "want to defund the police, weaken public safety, and normalize lawlessness." But Staunton, Virginia Police Chief Jim Williams pushed back forcefully:

> "What we are seeing here is a group of local citizens who are raising concerns that we could be potentially surveilling private citizens, residents and visitors and using the data for nefarious purposes. These citizens have been exercising their rights to receive answers from me, my staff, and city officials, to include our elected leaders. In short, it is democracy in action."

Staunton subsequently cancelled its Flock contract.

#### Innocent Woman Wrongfully Accused by Flock (January 14)

Koebler followed up with a powerful case study showing how Flock surveillance can go catastrophically wrong.

Christina Elser was accused of package theft based on Flock camera evidence. A police sergeant told her:

> "You know we have cameras in that town. You can't get a breath of fresh air in or out of that place without us knowing... Like I said, nothing gets in or out of the town without us knowing about it... I have you on camera walking up, ringing the doorbell, taking the package, and literally running away."

But Elser was innocent - she had been at her tailor's home for a dress fitting. When she offered to show exonerating evidence from her Ring camera and her Rivian vehicle's cameras, the officer refused:

> "'Why don't you come on down and look at the video?' Elser said. Milliman refused to look at the video, and said 'The next person you can tell is the judge or your lawyer. This is how this works. The judge or your lawyer.'"

The officer's arrogance was breathtaking:

> "I have been doing this for 27 years. I have probable cause because I saw you. You can laugh and giggle all you want, but I have video of you."

Elser reflected on how this changed her perspective:

> "Honestly, I was one of those people that believed, 'well, if you're not doing anything wrong, what's the big deal?' But here's a situation where I was doing absolutely nothing wrong, and I almost lost my entire career over this... The overreach of this technology is the biggest concern. Just having it out there is scary, it's too much. It's changed my mind immensely."

#### ICE's ELITE Palantir Targeting System (January 15)

**Joseph Cox at 404 Media** reported on ELITE (Enhanced Leads Identification & Targeting for Enforcement), a Palantir-built tool that lets ICE identify neighborhoods to raid.

Cox explains the system:

> "Palantir is working on a tool for Immigration and Customs Enforcement (ICE) that populates a map with potential deportation targets, brings up a dossier on each person, and provides a 'confidence score' on the person's current address."

The tool draws from multiple data sources including Health and Human Services and commercial data brokers:

> "Those sources can include HHS, U.S. Citizenship and Immigration Services (USCIS), and 'CLEAR.'"

An ICE official testified about using ELITE for targeted raids:

> "It tells you how many people are living in this area and what's the likelihood of them actually being there... You're going to go to a more dense population rather than... like, if there's one pin at a house and the likelihood of them actually living there is like 10 percent... you're not going to go there."

Senator Ron Wyden condemned the system:

> "This app allows ICE to find the closest person to arrest and disappear, using government and commercial data, with the help of Palantir and Trump's Big Brother databases. It makes a mockery of the idea that ICE is trying to make our country safer. Rather, agents are reportedly picking people to deport from our country the same way you'd choose a nearby coffee shop."

#### Weekly Roundup and Behind-the-Scenes (January 16)

**Samantha Cole at 404 Media** provided a weekly roundup highlighting additional stories including AI-generated influencers defaming celebrities with fake sex scandal images, and the dashcam crowdsourcing effort in Minneapolis to document ICE activity.

Jason Koebler reflected on the sustained interest in Flock coverage:

> "I've been writing about surveillance technologies for a long time, and it's rare for a specific company or specific type of technology to hold people's interest and attention for too long. With Flock, if anything, I have noticed that there is more awareness and more concern about what this company is doing."

Joseph Cox shared the behind-the-scenes challenge of piecing together Palantir's work:

> "It feels like we're all trying to put a jigsaw puzzle together, but I have one corner piece, CNN has another, another outlet has another. But it's not necessarily clear what the jigsaw actually is."

Cox also revealed he paid over $650 to a court reporter to obtain ICE testimony transcripts about ELITE:

> "at VICE, one of the catalysts for me wanting to leave was that I couldn't even pull up a 10 cents court record because VICE wasn't paying its bills. Here, because we own the company and we have the support of our paying subscribers like you, I was able to make an immediate decision of 'this is a lot of money, but it is worth it for this story.'"

---

## AI, Technology, and Society

### AI Porn Chatbots and Isolation

**Noelle Perdue, writing for 404 Media** (January 12), offered a thoughtful historical analysis of how AI porn chatbots represent a dangerous new frontier in human isolation.

Perdue traces the evolution from communal pornography consumption to total isolation:

> "Even before desktop computers, pornography was unavoidably communal whether or not you were into that kind of thing. Part of the difficulty in getting ahold of porn was the embarrassment of having to interact with others along the way; whether it was the movie store clerk showing you the back of the store or the gas station cashier reaching for a dirty magazine, it was nearly impossible to access explicit material without interacting with someone else."

Now with AI chatbots:

> "From the user's perspective, there are no humans at any point in this interaction. The consumer is in their room, requesting a machine, and the machine spits out a product. You are entirely alone at every step of this process."

Perdue argues this total isolation is psychologically dangerous:

> "Sexual dysfunction thrives in shame, and shame thrives in seclusion. Often, people who talk to me about their issues with sex and pornography worry that what they want isn't 'normal.' One thing that pornography teaches is that there is no normal - chances are, if you like something, someone else does, too."

She warns of the disconnection between desire and personhood:

> "The dehumanization of sexual imagery by literally removing the human allows people to disconnect personhood from desire, a practice it serves us well to avoid. Compartmentalization of inner sexuality so far as to have it be completely disconnected from what another person can offer you (or what you can offer another person) can lead to sexual frustration at best and genuine harm at worst."

### Tailwind Layoffs and Tech Industry Critique

**Chris Ferdinandi at Go Make Things** (January 15) offered a scathing take on Adam Wathan's announcement that Tailwind had laid off 75% of its engineering team due to AI's impact on their business.

Ferdinandi notes the irony:

> "The first is that Adam has spent about the last decade talking about how much CSS sucks and how broken it is. His entire product - Tailwind - exists to devalue the skills and expertise of CSS professionals. It has played a huge role in the decline in pay and career opportunities for CSS experts, as more and more companies lean on backend devs to do frontend work and 'just use Tailwind.'"

He calls it "poetic":

> "A new technology coming out - one that he himself uses and enjoys - and devaluing his life's work is less tragic and more poetic."

Ferdinandi also criticizes how the announcement was framed:

> "Actually, that's not true. He announced that... '75% of the people on our engineering team lost their jobs here yesterday.' He's the head of the company, but you wouldn't know that from this comment. Gotta love that passive voice!"

He further criticizes Vercel CEO Guillermo Rauch for stepping in to sponsor Tailwind:

> "Fascist-sympathizer and Vercel CEO Guillermo Rauch swooped in to sponsor Tailwind... No word on all those employees that were fired, though."

### AI-Funded Research via Cryptocurrency

**Geoffrey Huntley** (January 15) describes his unexpected journey into being funded by cryptocurrency speculators on the Solana network.

Huntley's framing is striking - he describes himself as having become "a walking, talking, financial instrument":

> "I am now a walking, talking, financial instrument, an underlying. You see when Ralph started to cross the chasm a whole bunch of people started speculating on me on the Solana crypto currency network."

He's received significant funding:

> "maybe, just maybe perhaps this creator economy on the Solana network is real as I'm now staring at $300,000 in my physical bank account in under seven days which is enough of a safety net in case things ever go balls up."

Huntley sees potential for independent research:

> "What if instead we have the perfect recipe in the making for truly independent research that's published open/freely in the making and all I needed to was open up and communicate with you? I've already got venture capitalists chasing me left right and center for meetings but heading down that path would likely result in the same scenario that I'm in right now: conflicted. I am an old-school hippie hacker that deeply believes that knowledge should be free."

### The "Everything is a Ralph Loop" Philosophy (January 17)

Huntley continued his AI development thesis with two additional posts on January 17.

In "everything is a ralph loop," he makes bold claims:

> "Software development is dead - I killed it. Software can now be developed cheaper than the wage of a burger flipper at maccas and it can be built autonomously whilst you are AFK."

He describes a fundamental shift in software development approach:

> "Standard software practices is to build it vertically brick by brick - like Jenga but these days I approach everything as a loop... Software is now clay on the pottery wheel and if something isn't right then i just throw it back on the wheel to address items that need resolving."

Huntley is building what he calls "The Weaving Loom" - infrastructure for "evolutionary software":

> "I'm going for a level 9 where autonomous loops evolve products and optimise automatically for revenue generation. Evolutionary software - also known as a software factory."

In "don't waste your back pressure," he discusses the importance of feedback loops in AI-driven development:

> "Back-pressure is part art, part engineering and a whole bunch of performance engineering as you need 'just enough' to reject invalid generations (aka 'hallunications') but if the wheel spins too slow ('tests take a long time to run or for the application to compile') then it's too much resistance."

### DeepSeek's No-Business-Model Advantage

**Kevin Xu at Interconnected** (January 16) provided deep analysis of why DeepSeek's unusual funding structure gives it competitive advantages.

Approaching the first anniversary of the "DeepSeek Moment," Xu argues the company's enduring advantage isn't technological but organizational:

> "We should pay attention to DeepSeek because it has no business model - a unique and counterintuitive feature (not bug) among all frontier labs in China, the US, and elsewhere."

He contrasts DeepSeek's self-funded approach with the broader industry:

> "Liang Wenfeng has raised zero outside funding. The lab does generate some revenue from its API service but continues to reduce its pricing. Liang is content to fund DeepSeek R&D from the earnings of his quant fund, High Flyer Capital, that incubated DeepSeek initially."

Even Elon Musk couldn't resist outside capital:

> "Even one of the richest men in the world couldn't say 'no' to more money! Meanwhile Liang Wenfeng continues to self-fund his secretive shop and his AGI dream."

The organizational benefits of no outside funding:

> "First, there is no internal resource competition even though the resource is more limited. There is no bureaucracy, infighting, power struggle, and horse trading to determine whether the GPUs should support a new product launch, scale the inference demand of an existing popular service, or be allocated to a new research idea."

Xu offers a paradoxical conclusion:

> "I'm not even sure if I believe in AGI. But as an investor and a capitalist, I would love to get on DeepSeek's cap table. That being said, if DeepSeek ever lets me or any outside investor in, what made DeepSeek DeepSeek would be ruined for good."

---

## Protocol Governance and Decentralization

### ActivityPub's Governance Challenges

**Laurens Hof at Connected Places** (January 16) provided detailed analysis of the W3C's new ActivityPub Working Group and what it reveals about decentralized protocol governance.

The W3C announced a new Social Web Working Group to maintain and update the ActivityPub protocol:

> "The aim of the Working Group is to release updates to ActivityPub, and its specifications such as Activity Streams and Activity Vocabulary. Most of the work on the protocol is scheduled to be done by Q3 2026."

Hof explains the significance:

> "ActivityPub became a W3C Recommendation in January 2018, and the protocol work was done by a Working Group. After ActivityPub became an official W3C specification, this Working Group disbanded... Since then, the specification has not been formally updated, despite significant implementation experience revealing ambiguities and missing features."

The governance structure reveals an ironic power concentration:

> "There are only two organisations that are active in the fediverse that are a paid member of the W3C: Meta and the Social Web Foundation. With the Social Web Foundation also receiving funding from Meta, the company that built Threads now has more institutional standing in ActivityPub governance than any of the organisations actually building open fediverse software."

Hof notes the "extremely funny outcome":

> "This is by all accounts an extremely funny outcome for a network that aims to be independent of Big Tech's power."

He offers a broader insight about decentralization:

> "What this situation reveals is that using network architecture to solve issues of power distribution simply shifts bottlenecks rather than eliminating them. A decentralised protocol does not automatically produce decentralised governance, it also moves power to different, less visible places."

---

## Technical Programming News

### Go Language Updates

**Golang Weekly** (January 16) covered significant Go programming language releases and ecosystem news.

Go 1.26 Release Candidate 2 was released with security fixes:

> "Go 1.26 gets a little closer to its final release in a few weeks with a fresh release candidate including several security fixes in areas like archive/zip and Request.ParseForm. 'Run it in dev! Run it in prod! File bugs!' says the Go team."

Notable technical articles included:
- Analysis of when atomic operations are faster than mutexes
- Writing mutexes from scratch in Go
- Fixing a 50,000 goroutine leak

The most surprising item was a Go runtime for the Sega Dreamcast:

> "The Dreamcast, released in 1999, was Sega's last truly innovative console (with a whole 16MB of RAM and a 200MHz CPU!) and, amazingly, you can now build things for it with Go, complete with support for goroutines, channels, garbage collection, etc."

Also noted: "Even Linus Torvalds is 'vibe coding' now" using Google's Antigravity tool.

---

## Wealth Inequality and Class Solidarity

### "Who Stole Your Cookie?" - Billionaire Critique

**Chris Ferdinandi at Go Make Things** (January 14) wrote a passionate critique of wealth inequality, using Taylor Swift's charitable donation as a springboard.

He provides stark mathematical context:

> "Taylor Swift made $190 [million] after taxes from her last tour. The median income in the US in 2021 was $37,586.03... Let's say you make $100k a year. It would take you 10 years to make $1 million. It would take you 10,000 years to make $1 billion."

On Taylor Swift's $1 million donation to Feeding America:

> "It's also 0.0625 percent of Taylor's wealth. If you make $100,000 a year, it'd be like you donating $62, but makes an even smaller impact on her life than it would yours."

Ferdinandi argues philanthropy is fundamentally a PR exercise:

> "When the rich do philanthropy, it's brand sanitization. It's PR. It's what allows Taylor to pollute the planet with her jets and hoard empty houses like a dragon does gold. By throwing a few crumbs to the masses every now and then."

Drawing from "A Bug's Life," he emphasizes class solidarity:

> "Those puny little ants outnumber us 100-to-1. And if they ever figure that out, there goes our way of life... Nearly every system of oppression that exists today is designed to pit people who share the same struggles against each other so that we fight among ourselves instead of uniting to dismantle systems of power."

### Mutual Aid in Practice

**Chris Ferdinandi** (January 12) offered a personal account of practicing mutual aid with homeless individuals.

He shares practical wisdom about helping:

> "Often, people begging on corners don't want to ask for big essentials like that because they're worried it will scare people off. And if you offer, they'll often say 'no' at first. If I had to guess, it might feel like a trick, or be hard to trust people."

He critiques "poverty porn" content:

> "Filming the unhoused for content robs them of privacy and dignity. Asking, 'What's your story? How did you become homeless?' without it being offered up voluntarily first forces people to relive and share traumatic experiences."

And emphasizes non-judgmental giving:

> "Give without judgement. A phone, for example, may seem like a 'luxury item,' but it also helps unhoused folks keep in touch with support networks, locate help, and have a way to get contacted if applying for jobs."

---

## Geopolitics and U.S. Foreign Policy

### U.S. Intervention in Venezuela

**Everything is Political** (by Slow Factory) ran two issues this week focused on U.S. intervention in Venezuela.

The January 13 issue provides context (author not specified in email):

> "Ever since the United States launched strikes in Venezuela and abducted president Nicolas Maduro and his wife Cecilia Flores on 3 January, many of us, including myself, looked on in shock as Trump, yet again, appeared to have done the unexpected."

The January 15 issue titled "Sanctions are a Tool of Empire" promotes an article by Simon Rodriguez:

> "After four months of maritime siege in which the US military killed more than 100 people in alleged anti-drug trafficking operations and seized oil tankers, as well as the bombing of a small dock in northwestern Venezuela, Trump launched a large-scale attack and kidnapped de facto ruler Nicolas Maduro and his wife Cilia Flores, who were in Fuerte Tiuna, the country's main military complex in Caracas."

The newsletter also highlights articles on ecological resistance in Armenia by Taguhi Torosyan and dissent in Japan by Yumiko Sakuma.

---

## Health, Wellness, and Lifestyle

### Ketosis for Brain Health

**Tim Ferriss** (January 14) promoted a podcast episode with Dr. Dominic D'Agostino on using ketosis for cognitive enhancement.

The episode covers:

> "How to Use Ketosis for Enhanced Mood, Cognition, and Long-Term Brain Protection - A Practical and Tactical Guide with Dr. Dominic D'Agostino (Plus: Deconstructing Tim's Latest Keto Experiment)"

Ferriss also promoted a meditation series with Zen Master Henry Shukman:

> "I've been using it daily, often twice a day, and it's lowered my anxiety more than I thought possible."

### 5-Bullet Friday: Prediction Markets and Language Learning

**Tim Ferriss** (January 17) published his weekly 5-Bullet Friday newsletter covering:

- **Prediction Markets:** "Wall Street groups hire traders to wade into prediction markets" - noting the secondary and tertiary effects on seemingly unrelated fields
- **Movie Recommendation:** The Secret Life of Walter Mitty as January inspiration
- **Language Learning:** Michel Thomas method for learning languages in a week
- **Quote:** "The universe is not only stranger than we suppose, but stranger than we can suppose." - J.B.S. Haldane
- **Data Privacy:** Incogni for removing personal data from data brokers

Ferriss shared a personal note on data privacy:

> "I've had stalkers show up at my house, people scrape my private email out of nowhere, and crazy people send death threats over nothing but an innocuous blog post. You don't need to be well-known for this to happen - you just need your personal information exposed in the wrong databases."

---

## Arts and Entertainment

### Metropolitan Opera's Season Highlights

**The Met Opera** (January 12) promoted encore screenings of Bellini's "I Puritani," described by The Financial Times as representing "a new golden age of bel canto singing."

**The Met Opera** (January 16) promoted final performances of Porgy and Bess:

> "With its fusion of opera, jazz, and Broadway, the Gershwins' timeless masterpiece about the joys and struggles of a Black community in Charleston features tunes whose popularity has transcended the opera house, including the classics 'Summertime,' 'My Man's Gone Now,' and 'It Ain't Necessarily So.'"

### Kirby Ferguson Joins Sam Harris

**Kirby Ferguson** (January 15) announced he's been hired as producer of Sam Harris's "Making Sense" podcast:

> "Folks, I am happy to announce that my time at the mid-career crossroads has come to an end. In October of 2025 I began working as the producer of Sam Harris's podcast, Making Sense, and have since been hired."

---

## Cross-Newsletter Themes

### Surveillance and Power

The most striking thematic overlap this week is between **404 Media's** investigative journalism on Flock/Palantir surveillance systems and **Chris Ferdinandi's** critiques of power structures. Both highlight how technology can be weaponized against ordinary people, and how those in power resist accountability.

Jason Koebler's reporting shows police dismissing legitimate concerns as "coordinated attacks," while Ferdinandi frames this as part of a broader pattern where "nearly every system of oppression that exists today is designed to pit people who share the same struggles against each other."

### Technology's Human Costs

Multiple newsletters touched on how technology disrupts human connection and employment:
- **Noelle Perdue** on AI porn chatbots increasing isolation
- **Chris Ferdinandi** on Tailwind layoffs due to AI
- **Geoffrey Huntley** on AI fundamentally changing software development ("software development is now dead")
- **Sam Cole at 404 Media** on screen fatigue and the need for forced breaks

### Self-Funding as Competitive Advantage

Both **Geoffrey Huntley** (via Solana crypto funding) and **DeepSeek** (via quant fund profits, as analyzed by Kevin Xu) demonstrate how avoiding traditional venture capital creates strategic freedom:
- DeepSeek's "no business model" lets it focus purely on AGI research
- Huntley's crypto-funded research enables independent AI work without VC conflicts

### Decentralization Doesn't Automatically Solve Power

Both **Laurens Hof** (on ActivityPub governance) and **404 Media** (on surveillance data leaks) demonstrate that decentralized systems don't automatically produce better outcomes:
- Decentralized Flock data led to nationwide exposure through single-point failures
- Decentralized ActivityPub governance concentrated power in unexpected places

### Individual Agency vs. Systemic Forces

The newsletters present contrasting approaches to systemic problems:
- **Ferdinandi** emphasizes direct mutual aid and class solidarity
- **404 Media** emphasizes investigative journalism and transparency
- **Everything is Political** emphasizes anti-imperialist structural analysis
- **Huntley** experiments with new economic models (crypto-funded research)
- **Kevin Xu** analyzes how organizational structure shapes technological outcomes

---

## Surprising Insights

1. **A police chief sided with transparency advocates against Flock** - Staunton Police Chief Jim Williams called citizen concerns "democracy in action" and cancelled the department's Flock contract.

2. **An innocent woman was converted from surveillance supporter to skeptic** - Christina Elser's experience being wrongfully accused via Flock surveillance changed her from believing "if you're not doing anything wrong, what's the big deal?" to "the overreach of this technology is the biggest concern."

3. **Geoffrey Huntley received $300,000 in 7 days from crypto speculators** - This suggests a new model for funding independent research outside traditional VC/corporate structures.

4. **ICE uses a tool that picks deportation targets "the same way you'd choose a nearby coffee shop"** - Senator Wyden's characterization of the ELITE system is both memorable and disturbing.

5. **Taylor Swift's $1 million donation equals 0.0625% of her wealth** - Ferdinandi's mathematical framing makes philanthropy look very different from how it's typically covered.

6. **404 Media paid $650 via Venmo for court transcripts** - Joseph Cox's note about independent media enables accountability journalism that larger outlets can't afford or won't pursue.

7. **Meta has more institutional standing in ActivityPub governance than Mastodon** - The irony of a "decentralized" network where the biggest corporate player has the most formal power in protocol development.

8. **Go now runs on the Sega Dreamcast** - A 1999 console with 16MB RAM can now run Go programs with goroutines and garbage collection.

9. **Even Linus Torvalds is "vibe coding" now** - The Linux creator using AI tools for digital sound effects.

10. **xAI raised $20 billion despite Musk being one of the world's richest people** - While DeepSeek's founder continues to self-fund, demonstrating alternative models for AI development.

---

## References

### 404 Media (Jason Koebler / Joseph Cox / Noelle Perdue / Samantha Cole)
- [AI Porn Chatbots Isolate Us All](https://www.404media.co/shame-thrives-in-seclusion-how-ai-porn-chatbots-isolate-us-all/) by Noelle Perdue (January 12)
- [Police Unmask Millions of Surveillance Targets Because of Flock Redaction Error](https://www.404media.co/police-unmask-millions-of-surveillance-targets-because-of-flock-redaction-error/) by Jason Koebler (January 13)
- [Cop Used Flock to Wrongfully Accuse a Woman Then Refused to Look at Evidence That Exonerated Her](https://www.404media.co/cop-used-flock-to-wrongfully-accuse-a-woman-then-refused-to-look-at-evidence-that-exonerated-her/) by Jason Koebler (January 14)
- ['ELITE': The Palantir App ICE Uses to Find Neighborhoods to Raid](https://www.404media.co/elite-the-palantir-app-ice-uses-to-find-neighborhoods-to-raid/) by Joseph Cox (January 15)
- [AI-Generated Maduro and Palantir's ICE Tool - Weekly Roundup](https://www.404media.co/ai-generated-maduro-and-palantirs-ice-tool/) by Samantha Cole (January 16)

### Go Make Things (Chris Ferdinandi)
- [Mutual aid and asking people what they need](https://gomakethings.com/mutual-aid-and-asking-people-what-they-need/) by Chris Ferdinandi (January 12)
- [Who stole your cookie?](https://gomakethings.com/who-stole-your-cookie/) by Chris Ferdinandi (January 14)
- [When the tech leopard eats your face](https://gomakethings.com/when-the-tech-leopard-eats-your-face/) by Chris Ferdinandi (January 15)

### Everything is Political (Slow Factory)
- [We are not Living in Unprecedented Times](http://r.mail.slowfactory.foundation/) (January 13)
- [Sanctions are a Tool of Empire](http://r.mail.slowfactory.foundation/) (January 15)

### Geoffrey Huntley
- [Two AI researchers are now funded by Solana](https://ghuntley.com/two-ai-researchers-are-now-funded-by-solana/) by Geoffrey Huntley (January 15)
- [Everything is a ralph loop](https://ghuntley.com/everything-is-a-ralph-loop/) by Geoffrey Huntley (January 17)
- [Don't waste your back pressure](https://ghuntley.com/dont-waste-your-back-pressure/) by Geoffrey Huntley (January 17)

### Tim Ferriss
- [How to Use Ketosis for Enhanced Mood, Cognition, and Long-Term Brain Protection](https://tim.blog/2026/01/06/ketosis-practical-guide-dom-dagostino/) by Tim Ferriss featuring Dr. Dominic D'Agostino (January 14)
- [5-Bullet Friday - Prediction Markets, Language Learning, January Inspiration](https://tim.blog/) by Tim Ferriss (January 17)

### Kevin Xu @ Interconnected
- [No Business Model: DeepSeek's Enduring Advantage](https://interconnected.blog/no-business-model-deepseeks-enduring-advantage/) by Kevin Xu (January 16)

### Connected Places by Laurens Hof
- [Fediverse Report #149 - On Protocol Governance](https://connectedplaces.online/reports/fediverse-report-148-on-protocol-governance/) by Laurens Hof (January 16)

### Golang Weekly
- [Go 1.26 RC2, Go 1.25.6, and Go 1.24.12 released](https://golangweekly.com/issues/585) (January 16)

### Kirby Ferguson
- [The Exciting Conclusion of The Midlife Remix](https://www.everythingisaremix.info/) by Kirby Ferguson (January 15)

### Met Opera
- [I Puritani Encore in Cinemas](https://www.metopera.org/season/in-cinemas/2025-26-season/i-puritani/) by Met Opera (January 12)
- [Final Performances! Porgy and Bess](https://www.metopera.org/season/2025-26-season/porgy-and-bess/) by Met Opera (January 16)

### Hyperfixed
- [New Hyperfixed Premium Episode: Brainsquatch](https://www.hyperfixed.fm/) (January 15) - Brief podcast announcement only

---

*Analysis generated January 17, 2026. This report covers newsletters received January 12-17, 2026 (Week 03).*
