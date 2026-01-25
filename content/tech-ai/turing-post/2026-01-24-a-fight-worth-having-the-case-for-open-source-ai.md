---
id: 19bf16ef27f191b0
newsletter: turing-post
newsletter_name: "🔳 Turing Post"
category: tech-ai
subject: "🎙️A Fight Worth Having: The Case for Open Source AI"
date: Sat, 24 Jan 2026 19:15:38 +0000 (UTC)
---

# 🎙️A Fight Worth Having: The Case for Open Source AI

**From:** "🔳 Turing Post" <turingpost@mail.beehiiv.com>
**Date:** Sat, 24 Jan 2026 19:15:38 +0000 (UTC)

---

_**Note:**__ We planned to publish Week 2 of our Open Source AI series, “The Real Math – when open source saves money, when it doesn’t”, but the flu took over our house. We did manage to publish this interview though, which aligns with the series. Watch it, it’s very interesting and gives you a great sense of where open source AI is right now. Next week, we’ll publish the real math. Let’s use this moment to learn what will be most useful to you →_

Upgrade (https://www.turingpost.com/upgrade)

**Now to the show: **In the first episode of _Inference_’s quarterly series on Open Source AI, we talk to **Raffi Krikorian, CTO of Mozilla**, about **when open source AI stops being aspirational and becomes an operational choice.**

We explore why stories like Pinterest saving $10 million by moving to open models are real, but often misunderstood, and why timing and maturity matter more than ideology. Raffi lays out his view of a missing “LAMP stack for AI” and explains why the hardest problem to solve isn’t models or data, but the connective glue that makes it easier for developers to use open source.

Along the way, he shares how Mozilla is navigating these tradeoffs in practice, why even open-source-first organizations still rely on closed tools during experimentation, and what the browser era taught Mozilla about defaults, user choice, and long-term control.

Raffi is passionate about open source, but grounded in its real economics. In this episode, he **shares practical recommendations that apply even if you are still experimenting. **Listen closely.

----------
_Subscribe to our __[YouTube channel](https://www.youtube.com/@RealTuringPost)__, or listen the interview on __[Spotify](https://open.spotify.com/show/2SQxCURLX8tKzv7IarPhYM)__ / __[Apple](https://podcasts.apple.com/us/podcast/inference-by-turing-post/id1811089330)_

----------**In this episode of Inference, we get into: **

* Why experimentation favors closed APIs and production favors open systems

* How company maturity matters more than company size for cost savings

* What a real “LAMP stack for AI” could look like, layer by layer

* Why choice and portability matter more than model loyalty

* Mozilla’s bet on small, specialized models over one giant model

* Why data ownership and user context are the real long-term battleground

* Concrete steps companies can take today to keep an exit door open

**This is a conversation about choice, cost, and control in the AI stack.** [Watch it](https://www.youtube.com/watch?v=3ohQX-oYndI)!

_We prepared a transcript for your convenience. But as always – __[watch the full ](https://youtu.be/5P8kgRcLF5Q)__video, subscribe, like and__** leave your feedback**__. It __**helps us grow on YouTube**__ and bring you more insights_ ⬇️

Youtube: This Is a Fight Worth Having: The Case for Open Source AI | Raffi Krikorian, Mozilla CTO (https://www.youtube.com/watch?v=3ohQX-oYndI)

**Ksenia Se:** Hello, everyone. We're doing something different with Inference by Turing Post this year. Starting with this episode, we're dedicating each quarter to one topic explored through multiple conversations. And this quarter's topic is open source AI. I'm starting with someone who is reorganizing his whole company around this bet: Raffi Krikorian, CTO at Mozilla. Welcome, Raffi.

**Raffi Krikorian:** It is such a pleasure. Thanks for having me.

———————————————————————————

## When Values Meet Economics

**Ksenia: Absolutely. But let me be honest with you about open source. I had one problem recently with it. All the conversations sound very aspirational. It's about freedom, it's about transparency, it's about ownership – but that's not how companies do business, right? So from what you are seeing, when does open source AI become an operational choice rather than an ideological one?**

**Raffi:** Well, on one hand, I'm actually kind of glad that you only have one problem with it, because I think there are a billion problems in the grand scheme of things. But no, I mean, I think you're exactly right. I think it is an unfair thing to assume that open source wins because of values. It needs to be this combination of **values and economics** that really work out in order for it to make sense.

I mean, one shining hope right now – well, there are many shining hopes – but one concrete example is at the end of last year, **Pinterest put out a report that they've saved $10 million by moving to open source** rather than relying on closed-source providers. And we're starting to see a bunch of people have very similar comments. They've passed through the prototyping stage and gotten into the steady-state utilization phase. Therefore, they now know how to provision properly. They've figured out which models actually perform quite well. So they're no longer paying a per-token cost and instead absorbing that into the infrastructure.

If I were to make a prediction for **2026**, we're going to start to see a lot more of those types of stories starting to show up – that **the economics and the values are starting to align**, or maybe just even the economics are starting to align. And therefore these big companies are starting to make that choice.

You know, another thing I've been thinking a lot about is this notion of how to enable that choice to happen in the future in the first place. Things like what we're building at Mozilla on the Mozilla AI team – for example, this thing we call the **Choice Suite** (aka any-suite) – how things like the Choice Suite can actually enable enterprises to be more flexible in how they even negotiate.

I remember the days when everyone built directly on AWS. No one does that anymore, right? They build on Terraform and all the other things. And what that provides them is negotiating opportunities. When AWS says, "Well, it's now going to cost $50,000," you can be like, "Well, Azure says it's only going to cost me $30,000, and I have a Terraform script. I can just move over very quickly."

I think those types of moments are going to start to show up this year. The economics are going to start to work out.

———————————————————————————

## The Maturity Threshold

**Ksenia: I heard this case of Pinterest. But if you think about Pinterest, it's a huge company with a lot of ML engineers that can be dedicated to the switch. So when do you think it makes sense to switch – does company size matter? Technical capabilities? Spend level? When is open source cheaper for them, not just a principle again?**

**Raffi:** Before we have the dollar sign or euro sign conversation, I think it really goes to **how fast can people move**?

In the Pinterest case, when you read between the lines, what you implicitly see is that **they went past experimentation.** They actually now know what their use case looks like. **They now know exactly the kind of application they want to build and deploy**. And now they can actually codify it and fine-tune – fine-tune is overloaded – but build the exact infrastructure they need in order to achieve their goals.

I think a version of that does play out on every single level. The reason why it's about more than just a dollar sign is: **when you go to a small company, small companies by definition are still in the iteration phase.** They're still trying to experiment to see what works best for them. What's the actual application they're trying to build?

And right now, I can't with an honest face say that they should be experimenting with open source AI. The **OpenAI API is kind of lovely**, right? It's one API call and it abstracts away all the stuff behind the scenes. Whereas if you try to use open source software, you're cobbling together all these different pieces, trying to figure out which evaluation provider, which traceability provider...

So once they get past experimenting on what they want to build, and then they want to get into production or they want to get into some form of cost optimization or cost savings, then I think open source is positioned to be a valid part of that conversation. So I don't think it's a dollar sign. I actually think it's **the maturity of the application** that you want to build.

**Ksenia: When did it happen at Mozilla? I'm sure you were iterating and experimenting a lot with both closed and open source tools and models. When was this moment? **

**Raffi:** I mean, we're actually still going through this moment right now. I'm not sure I would say that Firefox is fully locked into exactly what their AI-powered user experience really looks like. And I would also say that things like the Mozilla AI team and other teams are still very deep into using things like OpenAI API, Claude Code, et cetera.

Only a few of them have even started switching to things like Codex or open alternatives. So we are actually still as part of this journey, trying to figure out what we're going to do.

But I would say – you know, part of my job at Mozilla is to think about the broader AI ecosystem. How can we do for the AI ecosystem what Mozilla did for the web? How can we actually bring user choice? How can we actually give credible alternatives that force openness in different parts of the stack?

So my goal and the work that I'm trying to do is try to make it so that the open source choice can happen earlier and earlier in that experimentation process. For me, I think about Mozilla as a **testing ground** of the different things we can be experimenting with as early as possible, even while we're still trying to figure out what we want to do.

So we're not quite there yet, but that's maybe our North Star of what we're trying to get done this year.

———————————————————————————

## The Open Source Stack: A LAMP Moment

**Ksenia: Let's talk more about the open source stack then, because – again, another problem with open source – it's kind of one thing in theory. In practice, it's multilayered. First of all, even the understanding of what open source is is multilayered. So what is the stack? What are we looking at?**

**Raffi:** The thing that we need is a sort of **LAMP stack definition**. Right now there isn't a good definition of what that looks like. But what I would propose is that we should look at it on four different layers:

1. **The compute layer**

2. **The model layer**

3. **The data layer** (maybe we can argue which is lower – data or models)

4. **The developer experience layer**

And I think this replicates itself both on training and on the inference side.

The conversation we need to have is: **What do APIs look like? Or what do standards look like between those layers so that we as an open source ecosystem can start coalescing around this LAMP-like stack metaphor that can make it really easy to deploy?**

I'll note that one of the things we're trying to do with our **Choice Suite** is provide maybe that top-of-the-stack opening. If you use the Choice Suite, you get one API call that abstracts away a lot of things below it. So if you use **AnyLLM**, which is one part of the Choice Suite, you call the AnyLLM API, and then you can rapidly switch between different LLM providers – both local, both remote, open, closed, et cetera.

So we're trying to embed choice into that conversation. And we think that can apply for almost everything inside that developer tool suite layer, that developer experience layer on the top of that LAMP-like stack. But we need to do this over and over and over again across all the different parts of the stack.

I want to live in a world where we have **interchangeable components** that people can really choose what their LAMP stack looks like, and they can assemble it rapidly. Maybe there's a set of blueprints that make it really easy for small businesses to do it. Maybe there's a different set of blueprints for enterprises, a different set for governments even. But I want to figure out how to make that LAMP stack coalesce.

**Ksenia: Is anyone building something like this?**

**Raffi:** Lots of people are building parts of it. I think **OpenRouter** is a good example. Things like **MCP** (Model Context Protocol), which allows calling from the model layer, is part of this conversation.

I'm not saying that Mozilla needs to go build this all ourselves. **My real goal is to try to articulate: What are the things that developers are looking for when you think about it as a full-stack component? And how do we motivate and drive the community toward what are the standardization opportunities?**

Mozilla probably will only show up in that developer experience layer, maybe in the data layer. But I want that ethos. I dream of a time when that ethos goes through that entire stack.

WATCH THE FULL VIDEO (https://www.youtube.com/watch?v=3ohQX-oYndI)

———————————————————————————

## The Vibrant Ecosystem

**Ksenia: What are the companies that serve your ideal currently?**

**Raffi:** There's a bunch of them. I think **OpenRouter** and **Mozilla AI** are good examples when it comes to that top of the stack.

But I'm really excited about the work that people like **AI2** (Allen Institute for AI) are doing at the model layer, or **ETH Zurich** is doing at the model layer, and others to try to figure out what really open models look like.

I also think that there's going to be a lot of innovation in that model layer, especially as we're coming to grips with the fact that it's impossible for anyone to play in it. The Transformer architecture makes it literally computationally and financially impossible. But at the same time, there's a lot of evidence that these **smaller language models** or smaller fine-tuned models from the pre-Transformer days might actually be the path forward.

I'm intrigued by a lot of companies who are starting to build the infrastructure for faster fine-tuning or model composability or things like that on that layer.

On the data side, I'm of course really interested in things like what **Databricks** is up to. Mozilla has a play with the **Mozilla Data Collective** where we're creating a two-sided marketplace to make it really easy to have provenance-related data that you can then license to any model trainer out there in the world.

The Mozilla Data Collective folks are literally in conversation with every radio station on the planet. They're like, "How do we license audio data from every single language with a transcription of it?" And how do we scrub it just good enough that model trainers can then use it?

So I'm intrigued by the people playing in that data licensing space and others. And of course, that top of the stack – there are just so many companies doing interesting work there. I'm really a big fan of what the **LangChain** folks are doing. I'm a really big fan of what all the orchestration layers are doing, the **deepset **people are doing on the RAG layer.

I think there's so much – **if there's anything people should take away, it's that there's actually a lot of vibrancy in the open source ecosystem.** I think what's **missing is a connective glue layer to just make it easier for developers.**

I want to live in a world where a developer finds it just as easy to use an open stack as it is to use the OpenAI API. That's the world I want to live in.

The one thing I didn't mention is that compute layer – that's going to be the hardest for us to make a dent in. There are companies like **Flower AI** that I'm intrigued by for federated learning across heterogeneous data sets, heterogeneous hardware. That could be a way. Imagine a world where compute was not a scarcity mindset, but it was an abundance mindset. That would be a really interesting AI world for us to live in. So I'm intrigued by what that federated space might be able to do there.

———————————————————————————

## Specialization and the Twitter Analogy

**Ksenia: I'm a big fan of federated learning. I think we still haven't yet seen what it's capable of. And if we think about small models again, and when they go to all the devices, how cool would that be if it all can be connected and we're not dependent on GPUs or whatever big compute we need?**

**Raffi: **Exactly.

**Ksenia: But if we talk about small language models, which I read in your blog post you're betting on them as well – and that's what I noticed about open source models when I was writing about it last week – is that we are moving to specialization. It's not one big model for everything, but you know, one for coding, one for this, one for that.**

**Again, if you talk about companies adopting it, when does it make sense to connect three models, or again, use one big one? Because specialization is great, but also it adds complexity. I'm just trying to build this decision-making process for companies to be able to use open source.**

**Raffi:** I look at it almost in the exact same way that I look at it from my previous jobs. You know, when I was at Twitter a decade and a half ago at this point, Twitter was written in Ruby on Rails. And then once we fully understood what the application stack looked like, we started moving parts of it to the JVM to harden it, to make it more efficient, to make it faster, more performant, et cetera.

I think **the exact same thing is playing out in this space right now**. Like, you know, I have a rack full of computers next to me right now that I hack on on the weekends. And even I use the OpenAI API to do a lot of my work, just to help me form an idea, to rapidly prototype, et cetera.

But then when I get to a place that I want to deploy it, I start looking at it and think, "Oh, should I do this part in Qwen? Should I do this part in something else?" So I think it's part of that **maturity curve of ideas** right now.

You start in a place where you don't exactly know what you're doing. So you need a general-purpose tool to help you sort that out. And as you start to get more solidification in the kinds of things you want to build, that's when you can start to really optimize and find the right model at the right time.

Now there are also **different constraints that you might want to take into account,** right? I might want to run things in a disconnected environment. I might want to run things on-device versus not. I do a lot of work with open source in an African context where the connectivity is not so great and you actually want it to run on-device.

But again, you might build that experimental application in a really good Wi-Fi environment. And then once you're actually ready to deploy it, then you start either fine-tuning or you figure out what's the right model you can run on-device so you can go into a disconnected environment.

Another example might be autocomplete on a web browser. You can imagine a world – there's no reason for us to be sending all that information to a large model remotely. Then you've added latency, you've added all these things. You want to do that kind of work as close to the user as possible so you can be really, really sensitive to keystrokes, really sensitive to timing, really sensitive to battery power. If you're running it locally, why hit the network for every single keystroke?

So I think **those constraints might be part of the driving factor.** But I think the overall thing is still: a**s you go from experimentation to production, somewhere along that line is the right time to think about making those transitions**. And my job is to move that line as close as I can to experimentation.

WATCH THE FULL VIDEO (https://www.youtube.com/watch?v=3ohQX-oYndI)

———————————————————————————

## Why Data Matters

**Ksenia: Why does Mozilla focus so much on data?**

**Raffi:** In the sense of user data and user privacy and things like that? Well, I feel that **data, especially in the AI world, is one of the biggest tipping points. **Besides the paradigm that most of the AI providers are thinking about right now – which is "data is free, we just scraped it from the web" – that might also just be last year's battle.

But I do think two things. One is there are a bunch of data sets that haven't been on the web that could be really useful. And if we can change the dynamics around them – whether it be indigenous languages or whether it be genetic data of different communities, things like that – people might deserve some form of either recognition or compensation for it. I find those to be the **human-centered version of data collection**.

And so how can Mozilla enable that? I think it's a very important thing. I'm excited by the work the Mozilla Data Collective is doing on making those really easy to license, having one-click licensing mechanisms, one-click purchasing mechanisms. We as Mozilla don't intend to make a lot of money off that. We want to enable people to do it. We'll just maybe do a small transaction cost, but we want to enable more interesting experiences to happen on the web. But I want to do it in such a way that actually truly respects the people that were part of that value chain to get you to that experience.

But then there's the other question, which is: I really care – I feel that if these big model providers have already treated data on the web as free for them to use, they're coming after yours and my data next. They're going to try to get to my private data and stuff that's near and dear to me.

So I'm really interested in data in the sense of: How do we start thinking about **protections for user context**? How do we make user context **portable** across different sets of model providers so that we can invert that ownership paradigm? It's not that the model provider owns my context – **I own my context** and I can make it portable and I can expose different aspects of it depending on what we're trying to do at any given moment.

So that's the thing that I find interesting. I think it's very compatible with how Mozilla thinks about the **user agent**. Right now, the web browser is my agent. It's supposed to protect me. It gives me privacy. It protects me from ads, et cetera.

But now in this new agentic world, this Layer 8 world where intelligence is starting to mediate, that mediation is starting to not be my user agent anymore. So I think that having my data be secure and private in that interaction is going to be incredibly important.

**Ksenia: This is a race so hard to win, considering that you can just push a button and everything in your iPhone becomes connected to Google services and then it's personalized AI, but also your data is out there in the air. So I don't know how to win this race for open source.**

**Raffi:** Yeah, I mean, I don't know the answer either, but I think **this is a fight worth having**. And I think it starts with having some credible experiences that we can really talk about and how we want to show up to users.

So my canonical example here is **Signal**. Signal showed up in the sense that it drove privacy as part of the communications conversation. It wasn't even needed for every single user to use Signal. But the fact that Signal existed forces people like WhatsApp, Telegram, iMessage – now RCS is starting to think about having to have encryption on it because it's being driven by that conversation.

So if Mozilla or people aligned with the Mozilla Manifesto and our values can start building what these interfaces could look like where my context stays with me and doesn't move and can still be useful in a lot of ways, I think that could be something that could just drag the ecosystem a little more toward user privacy than where we are today.

**Ksenia: Conversations matter.**

**Raffi:** Correct. Conversations matter.

———————————————————————————

## The Firefox Lesson

**Ksenia: Here's a little tricky question. Mozilla has a fascinating history. What you're saying is that what you did with the web, you want to do with AI. At one point, Firefox indeed challenged Microsoft, brought it down to 55%. But then Chrome came and brought Firefox to 5%. So how can we make sure that the world of AI, even if we disrupt it first, will not be consolidated again?**

**Raffi:** I think these are all pendulum swings. And so I would note that even though Firefox's usage has gone down, **Google had to release an open source browser**. We had to still maintain web standards. We still had to do all the things.

So the battle that we were trying to win by releasing Firefox – we won it. We might not be that big pillar that everyone's using anymore, but it's because of us that **the web is open**. It's distributed, et cetera.

And so yes, there's some consolidation that occurred, but the important thing is **web standards**. The important thing was **open source as part of the conversation**. The important thing is that anyone can still participate in the web.

That's not the direction AI is going in right now. And so that's why I'm trying to drag Mozilla into that fight. Because if we can start to **drive the conversation through credible alternatives, web standards, more people using it because of open source** – I think that exact same playbook might work again in this space.

And sure, we're not going to be the model provider. There's not enough money in the world for us to compete on the model side. But I think if we can just get the other pieces in place, we can get an entire ecosystem speaking the same language. And I think it's kind of like a **rebel alliance**, almost, that we can start to give credible alternatives and drive the conversation. We're all part of the rebel alliance for different reasons.

But in the end, if it means that user data is secure, context is ours not someone else's, there's choice in the ecosystem, I can trust the outputs of the LLMs and trust the outputs of the chatbots, if I can surf the web without being worried – then Mozilla will have won that fight. And that's the fight that I'm trying to take.

———————————————————————————

## Practical Steps for Companies

**Ksenia: It's a very important fight. I'm just trying to see from a company's perspective how to showcase to them that they should try. And if you can give advice to a company that is still in the experimentation mode, what will be your one, two, three steps for them to start thinking about it? How to implement open source for their company?**

**Raffi:** What I would say for a company is: **Try to** **instrument choice into your engineering stack as early as you can**.

This is the reason why we built things at Mozilla AI like the Choice Suite. It's really easy to do. It's just a small shim. Put those things into your application as early as you can. You don't know when you might want to switch to open source. You don't know when you're going to exit your experimentation stage. But **give yourself the exit door as early as you can** so that you can then do it later when the time is right.

Don't make it a massive Herculean engineering effort later. Make it super small. It's like an NPM install or a UV install and you just do one line of code or five lines of code. You just do that at the beginning, and that investment gives you the exit door later.

So try to do those types of things as early as you can. Just like any good engineer would – engineers are usually thinking about: How can I refactor this later? How can I test this later? How can I do all those things later? So just think about those things as early as you can in the process.

And Cursor and others also take those prompts really quite well. You'd just be like, "I want to integrate AnyLLM into this," and it just happens. It might not even be five lines of code. It might just be one prompt you do at the beginning of your project that gives you that flexibility later. So that's, I think, the biggest piece of advice.

And then the second one is: **Just be open and see what's going on in the ecosystem**. Like I said before, the vibrancy in the open source ecosystem is quite amazing. It's quite lovely. So go read your favorite blogs. Listen to people like you to understand what's going on out there. Because maybe one of those things you'll be like, "Oh, I should swap that for that," and it could show up as part of that conversation.

WATCH THE FULL VIDEO (https://www.youtube.com/watch?v=3ohQX-oYndI)

———————————————————————————

## Making It Simple

**Ksenia: I would like to have a clear understanding: How can a child or a non-technical person just install an open source model and just use it for whatever, for their phone? That should be easier.**

**Raffi:** I would love to get to that world! That world is not the world we live in yet, but I think we can get there. 

**Ksenia: This year, right?**

**Raffi: **100% this year! I mean, like right now, any person on a Mac who can pull up a terminal can install a local open source model with just `brew install ollama`, right? It's already a one-liner, but you need to know how to use a terminal.

So we can just eliminate that this year. That would be amazing, right? I feel like we can get there. I feel like this is a slam dunk. We just got to do it.

———————————————————————————

## Einstein's Dreams

**Ksenia: Well, that's been a very fascinating conversation. And I like to finish all my conversations with a question about a book. A book that recently or long ago influenced how you think about life and how you think about your work, your values. What was that book?**

**Raffi:** Oh, that's such a great question. And I'm not prepared for this question.

I would say that one of the books that probably has most impacted me is a book by Alan Lightman called [_Einstein's Dreams_](https://www.amazon.com/Einsteins-Dreams-Alan-Lightman/dp/140007780X). And so what it is is a set of vignettes – I want to say it's 20, I could be wrong on the number – which are all different versions of how time could flow differently.

What if we lived in a world where time moved slower the higher altitude you were? Or what if we lived in a world where time went in a circle over and over and over again? And what would that mean as implications to life, love, friendship, et cetera?

And so that was literally the first book I ever gave the woman I was dating, who then became my wife. So if you were looking for one book that changed my life, that was probably the book.

**Ksenia: That's amazing. I would love to read this book. It sounds very interesting. Thank you so much. Thank you for this conversation. Let's hope this year will make a lot of progress in open source.**

**Raffi:** Thank you for having me. This was such a pleasure.

Leave a comment (https://www.turingpost.com/p/krikorian?_bhlid=4eaa234680798ad3bdb45514b5705f029891f88c?comments=true)

———

You are reading a plain text version of this post. For the best experience, copy and paste this link in your browser to view the post online:
https://www.turingpost.com/p/krikorian
