---
id: 19c0c725d995dad7
newsletter: casey-newton
newsletter_name: "Casey Newton"
category: tech-ai
subject: "Falling in and out of love with Moltbot"
date: Fri, 30 Jan 2026 01:05:36 +0000
source_url: "https://www.platformer.news/r/3a8c5e1f?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670"
---

# Falling in and out of love with Moltbot

**From:** Casey Newton <casey@platformer.news>
**Date:** Fri, 30 Jan 2026 01:05:36 +0000
**Source:** [View original](https://www.platformer.news/r/3a8c5e1f?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670)

---

https://www.platformer.news/r/c23ff532?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670

Platformer [https://www.platformer.news/r/42f9bc38?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670]

Falling in and out of love with Moltbot [https://www.platformer.news/r/8fc47c8a?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670]

Maybe someday you’ll have a genie in your laptop working for you 24/7. Today is not that day

By Casey Newton • 29 Jan 2026

View in browser [https://www.platformer.news/r/3a8c5e1f?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670]

View in browser [https://www.platformer.news/r/d541a17c?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670]

(Molt.bot)

 

 

This is a column about AI. My boyfriend works at Anthropic. See my full ethics disclosure here [https://www.platformer.news/r/eb921a28?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670].

I.

One of my chief biases as a tech journalist is that I like trying new software. Show me a promising new tool and I will, at the drop of a hat, give my entire inbox and calendar over to it. Over time I have begun to rein in this tendency [https://www.platformer.news/r/34f50b2b?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670], recognizing that I typically lose more time to so-called productivity tools than I gain from them. And yet still, whenever I read about some groundbreaking widget, I find myself reaching to download it. 

And so last week, when I read a piece titled “Clawdbot Showed Me What the Future of Personal AI Assistants Looks Like [https://www.platformer.news/r/785a3463?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670],” I knew I was in trouble. The article, written by the great Federico Viticci at MacStories, described an open-source, locally running artificial intelligence that connected to all the most important services in his life. He spoke to it via voice notes and Telegram, and used it to replace (for free) automations that he previously paid for on Zapier. If he could imagine it, Viticci wrote, there was a good chance the tool — then called Clawdbot — could build it. It made him wonder what future apps would even have once AI became sufficiently powerful. 

Viticci wrote:

> Clawdbot is a boutique, nerdy project right now, but consider it as an underlying trend going forward: when the major consumer LLMs become smart and intuitive enough to adapt to you on-demand for any given functionality – when you’ll eventually be able to ask Claude or ChatGPT to do or create anything on your computer with no Terminal UI – what will become of “apps” created by professional developers? I especially worry about standalone utility apps: if Clawdbot can create a virtual remote for my LG television (something I did) or give me a personalized report with voice every morning (another cron job I set up) that work exactly the way I want, why should I even bother going to the App Store to look for pre-built solutions made by someone else? What happens to Shortcuts when any “automation” I may want to carefully create is actually just a text message to a digital assistant away? 

These are excellent questions. The more I have been using Claude Code [https://www.platformer.news/r/50608cbe?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670], the more I have found myself wondering the same things. For the moment, Claude Code has several limitations that prevent it from taking over the computer in the way that Viticci describes. And yet, reading about Clawdbot, I became curious whether that future might be closer than I imagined.

And so last Saturday, I visited the website for Clawdbot [https://www.platformer.news/r/7fd0da66?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670].

In many ways, Clawdbot resembled Claude Code. The resemblance was close enough that Anthropic asked its solo developer, Peter Steinberger, to change the name. Thus Clawdbot is now Moltbot; I’ll refer to it as such throughout the rest of this article.

Like Claude Code, Moltbot is installed via a terminal command and can then interact with the large language model of your choice. (You have to bring your own API key; I plugged in keys from Anthropic, OpenAI and Google to enable various different features.) Also like Claude, Moltbot can generate text and write code.  

But Moltbot differs from a normal LLM in a handful of ways I found appealing. 

One, it runs locally on your machine. (In my case, a 2024 M4 MacBook Pro.) Messages get sent to the AI providers, of course. But the core infrastructure, which handles Moltbot’s memory, scripts and other tools, stays on your computer.

Two, you can add it to the messaging app of your choice: Telegram, Discord, Slack and Signal among them. This is nice for several reasons, one of them being that it makes it easy to message Moltbot from your phone.

And three, Moltbot promised to have a persistent memory. Claude Code forgets much of what happens in any given session, and must constantly be reminded. Moltbot creates a series of daily notes about your interactions that it can load into the LLM’s context window, allegedly giving it improved recall compared to a standard command-line tool.

Over on YouTube, recommendations led me to several hypebeasts who promised me that Moltbot would do much more. Creators on X and YouTube said they had bought Mac minis to allow the tool then known as Clawdbot to run continuously. “Clawdbot is the most powerful AI tool I’ve ever used in my life [https://www.platformer.news/r/28375787?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670],” read the title of a representative video from Alex Finn, who assured me that Moltbot would serve as my “24/7 AI employee.” Another creator promised to tell me “How I use Clawdbot to Run My Business and Life 24/7 [https://www.platformer.news/r/485fd39a?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670].” 

By the end of the weekend, Best Buy had sold out of Mac minis in San Francisco. 

I was convinced. I installed Moltbot with that single command, and onboarding proved refreshingly simple. (It was, in hindsight, the high-water mark of my time with the tool.)

Within 10 minutes or so, I had wired up Moltbot to many of the core systems I use in my life: an email account, my calendar, Notion, Todoist, and Capacities, among others. Once that was working, I set about working on the project that would come to define the week I spent with Moltbot: a highly personalized morning briefing that would bring together all the strands of my life into a single place. 

II.   

I realize this project sounds kind of boring. 

But one, it offered me a chance to see what Moltbot could do with all of those services I had stitched together. Two, if it worked, I would create something unique to me that I wouldn’t have been able to build myself.

And finally — which I realized only at the end of the process — the specific ways in which it broke persuaded me to uninstall Moltbot from my computer.

By now, there are lots of companies that will build you a basic AI-generated briefing about your day. Some, like OpenAI’s Pulse [https://www.platformer.news/r/8784a5c4?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670], focus on the news and your recent ChatGPT queries. Others, like Google’s CC [https://www.platformer.news/r/1168add6?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670], are limited to your email inbox.

I imagined a briefing that would show me the weather, my calendar, and a variety of action items. I also wanted it to vary each day depending on my schedule. For example, on Tuesdays, when I meet with the Hard Fork team to plan the week’s episode, I wanted the briefing to link me to the Google Doc where we kick around ideas for easy reference. 

As with Claude Code, I built this in Moltbot simply by typing what I wanted into a box. Each time I hit “enter” after some new idea, Moltbot would iterate on the briefing plan. 

Once it seemed to be working, I decided to throw in some idiosyncratic items to make the briefing more fun. On Thursdays, I had it tell me which new movies were coming out, along with a short synopsis of the film and who starred in it. I asked to be alerted to new episodes of “RuPaul’s Drag Race” and new cards in the Marvel Snap mobile game. 

I felt less ambitious than the sweats on YouTube, who alleged that their Moltbots were creating enterprise value for them each night while they slept. But given the challenges Moltbot threw at me at almost every turn, I figured it was best to start small. 

And for one precious day, the briefing worked more or less as I asked it to. I set it up to trigger when I typed “good morning” to Moltbot. After a longer-than-expected delay, Moltbot spat it out. There was the San Francisco weather; my overdue action items; and a link to the document that Claude Code generates for me each day with the previous day’s big tech news. 

Satisfied, I went to bed. And unlike the YouTubers, I gave Moltbot the night off. 

By the next morning, it was clear something was wrong. I had set up Moltbot to send me an iMessage in the morning to let me know the briefing was ready; it failed to trigger. Moltbot looked into it and found a number of errors and fixed them. 

Over the next few days, though, nothing ever worked quite right. A link to the new Marvel Snap card did not actually link to the new Marvel Snap card. A link to my tech news briefing appeared clickable but was not. Movie listings appeared without the synopses and stars I had asked for. 

Worse, Moltbot’s vaunted memory proved barely more capable than Claude Code’s. Sometimes I would say “good morning” and it would fail to trigger anything at all. Other times I would attempt to edit the briefing and it would get confused as to which briefing I was referring to. 

Today, in advance of writing this column, I asked Moltbot which services I had connected it to. “Hmm,” it said. “I searched my memory but didn't find anything about you connecting specific services to Moltbot.”

It was around this time that I realized an AI employee who works for you 24/7 isn’t much use if they have no idea what they are, or what they can do, or what you are talking about. The daily briefing of my dreams had come to feel like an albatross. Asking it to do anything more complicated felt, at least in this moment, like a waste of time and tokens.

I had become the character I described here earlier this month [https://www.platformer.news/r/7437fb76?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670]: the manager who believed he was using AI to make himself more productive, while in reality I was only creating problems for my future self to solve.

And in any case, I had an arguably even larger problem on my hands: Moltbot is very likely, by a comfortable margin, the least secure piece of software I have ever installed on my computer.

III.

In fairness to Moltbot’s developer, the tool is very clear about this. During the installation process, it warns you that giving a chatbot control over the computer and connecting to third-party services puts you at risk of all sorts of things: everything from prompt injection attacks to full-scale takeovers of your computer.

I’m grateful to reader Jesse Stilwell, who noted in a comment on Monday after we posted a Following item [https://www.platformer.news/r/e60b3a8f?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670] about Clawdbot that it is highly insecure.

“Clawdbot is just sitting there doing stuff proactively, sure, but for that to work he needs to be running when you're asleep at 2AM (hopefully),” Stilwell wrote. “Then someone manages to hack your Telegram account and 2AM would be a great time for someone to post a bunch of stuff, send a bunch of emails, and then remove your digital life for funsies.”

In The Register today, Connor Jones outlined even more security risks to Moltbot [https://www.platformer.news/r/0c5e0ab8?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670]. For example, many Moltbot users install “skills” — essentially custom instructions — from a crowdsourced database [https://www.platformer.news/r/5c4a4b75?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670]. It would be trivial for an attacker to embed malicious instructions into one of those skills that could allow someone to take over your computer.

Reader, I disabled my Telegram integration. And on Thursday afternoon, after gathering everything I needed for the column, I told Moltbot I needed to uninstall it. 

“Whoa — are you serious, or just testing me?” it asked.

I was serious.

IV.

It is in the nature of being an early adopter that some of the tools you adopt will ultimately not be worth the trouble. My time with Moltbot was frustrating, but I can’t say I didn’t enjoy it. Wrangling with a brilliant but only intermittently capable assistant feels like it will be a core skill of the late 2020s, and I was glad to get some reps in. 

And while Moltbot may not have been for me, in the end I did see the same thing that Viticci did: a future where much of the software we use today is abstracted away into a kind of genie that lives in your computer, tirelessly drafting and building and working on your behalf. 

We are not there yet. But if I were an AI company, or a hardware manufacturer, I would still be looking to Moltbot for inspiration. Just as Google Glass died so that Meta Ray-Bans could live, and the Humane Ai Pin will someday be reincarnated as a wearable from Apple [https://www.platformer.news/r/dcf2e8c6?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670], in the long run I suspect we will look back on the disaster of Moltbot as but a prelude.

So by all means, read about Moltbot. Watch videos about Moltbot. Consider what a working version of Moltbot might be able to do for you. 

But for the moment, on the subject of Moltbot I must offer the advice made famous by Jackass: do not try this at home. 

On the podcast this week: The tech industry's role in the horrors in Minnesota. Plus, my Moltbot experience, and some HatGPT.

Apple [https://www.platformer.news/r/6eb249c8?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670] | Spotify [https://www.platformer.news/r/c28788fa?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670] | Stitcher [https://www.platformer.news/r/625fc839?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670] | Amazon [https://www.platformer.news/r/0cb28e07?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670] | Google [https://www.platformer.news/r/c7ac1190?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670] | YouTube [https://www.platformer.news/r/b7f51e9a?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670]

Following

This winter, AI layoffs are in the air

What happened: It’s been a week of high-profile layoffs. Amazon is cutting [https://www.platformer.news/r/27f0c715?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670] 16,000 people. The Dow Chemical Company is cutting [https://www.platformer.news/r/e3f1e5e0?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670] 4,500, and they claim the layoffs are part of a cost-cutting program that will use AI to automate some of its work. Pinterest is laying off [https://www.platformer.news/r/8ccdc89e?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670] 15% of its workforce, saying it’s “reallocating resources” to AI teams and products.

Are these AI claims just a way to make layoffs sound better to investors? Or do recent advances mean AI is actually replacing white-collar jobs?

Increasingly, we see a lot of smoke here. A Morgan Stanley report says software company stocks are sinking [https://www.platformer.news/r/8d82ebd7?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670], even as the Dow Jones continues to rise. Enterprise software is one of the biggest sectors that could be exposed to AI, given the recent success of AI coding agents. (Moltbot notwithstanding.)

Why we’re following: When analyzing such bleak portents, it’s worth it to keep in mind what counts as strong evidence about AI job loss.

We should be listening most to stuff like the Stanford [https://www.platformer.news/r/50b22f28?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670] “Canaries in the Coal Mine” paper from last year, which used a big government sample to show that young grads in AI-exposed fields including computer science are, in fact, experiencing a greater decline in employment. 

Do recent AI layoffs tell us a lot? Not really. None of the companies have made credible claims that AI is actually automating jobs, and we know it can be attractive to blame layoffs on AI. (Perhaps one reason why Pinterest stock tanked despite the layoffs; investors aren't buying the AI pivot narrative.)

We’re also likely not seeing a crazy spike of layoffs in the broader US economy, as unemployment claims [https://www.platformer.news/r/72585272?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670] are down notably this week. 

Software stocks do seem to be sinking disproportionately to other sectors, though. Given strides in AI software engineering, that could indicate that investors expect those companies to have a disadvantage as their work becomes AI-replaceable.

So while uncertainty remains, the signs for at least some businesses are not looking good.

What people are saying: Bryan Wong, portfolio manager at Osterweis Capital Management, spoke about the difficulty predicting software companies’ future with Bloomberg. “It is hard to know what multiple they should be trading at,” Wong said, “if they’re going up against AI agents that are running 24/7 and have the ability to complete tasks.”

—Ella Markianos

----------------------------------------

 

Canada might walk back its news link tax

What happened: Ottawa appears to be ready to walk back [https://www.platformer.news/r/d5ac75b9?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670] the Online News Act, a law enacted in 2023 that effectively required dominant social platforms to pay publishers to display links to news stories. 

At the time, Google continued to allow news links after it reached an agreement with the Canadian government to pay news publishers $100 million annually. Meta moved to cut off access to journalism by blocking news links [https://www.platformer.news/r/bacedcae?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670] on Facebook and Instagram. 

Government officials are now in talks with Meta as the law is freshly on the table as part of trade negotiations with the Trump administration, which has criticized the law — along with the Online Streaming Act — as unfair treatment towards US companies.

Why we’re following: When it passed, Platformer wrote about [https://www.platformer.news/r/c6508087?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670] why these laws are bad and how much they might backfire on the media. Well, they did: Canadians haven’t had access to news on two of the largest social platforms since 2023, and the journalism business continues to struggle.

We had already seen how these laws didn’t really work [https://www.platformer.news/r/1dc5609a?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670] in Australia after a similar law passed in 2021, and users on Facebook and Instagram couldn’t post links to news for six days. (Meta eventually struck an agreement with the Australian government.)

What people are saying: Marc Miller, Canada’s Identity and Culture Minister, said [https://www.platformer.news/r/dc18fe8d?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670] the country has to take into account President Trump’s views on Canada’s online safety legislations, “but it absolutely can’t dictate what Canada plans to do.”

“We’re not oblivious to the fact that large American companies do have access to the administration, and color a lot of the views coming out of the White House when it comes to the way they’re behaving,” Miller said. 

Rachel Curran, head of public policy at Meta Canada, told Canada’s Commons heritage committee last October that the company would like to bring news back to Facebook, but believes the current law “misrepresents the value exchange between publishers and our platforms.” In this case, Meta is right.

—Lindsey Choo

Side Quests

Apple CEO Tim Cook told employees [https://www.platformer.news/r/765e2710?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670] he was “heartbroken” over the ICE shooting of Alex Pretti and called for “deescalation.”

DHS is using [https://www.platformer.news/r/71c3b5b1?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670] Google and Adobe’s AI video generators to make videos. 

Acting CISA director Madhu Gottumukkala uploaded sensitive documents to ChatGPT, DHS officials said [https://www.platformer.news/r/01d6f456?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670].

The Pentagon is mad [https://www.platformer.news/r/4eac1ab6?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670] at Anthropic for restricting the use of its models to power domestic surveillance, putting a $200 million contract at risk.

Nvidia helped DeepSeek hone AI models that were later used by China’s military, a US House committee chair said [https://www.platformer.news/r/bbb6dd5a?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670]. DeepSeek is hiring [https://www.platformer.news/r/03abac6c?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670] specialists to build an AI search engine with multi-language support. ByteDance and Alibaba are reportedly preparing to launch [https://www.platformer.news/r/30645b3f?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670] their next flagship models in mid-February.

Amazon found [https://www.platformer.news/r/a0765d6b?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670] hundreds of thousands of cases of potential child sexual abuse in its AI training data, but won’t provide information about its source.

Amazon’s $35 million marketing campaign for Melania Trump’s documentary is raising questions [https://www.platformer.news/r/88fdd48a?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670] in Hollywood. (I think I can probably answer them!)

Nvidia, Microsoft, and Amazon are reportedly in talks [https://www.platformer.news/r/56c6aca1?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670] to invest up to $60 billion in OpenAI — Amazon alone is reportedly discussing [https://www.platformer.news/r/801766e1?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670] an investment of up to $50 billion. OpenAI may IPO in the fourth quarter [https://www.platformer.news/r/5e914f1d?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670].

OpenAI updated [https://www.platformer.news/r/800c37c7?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670] its whistleblower policy. (Good!) An analysis [https://www.platformer.news/r/21c229e3?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670] of the disappointing initial performance of the ChatGPT Agent.

OpenAI plans to retire GPT-4o next month [https://www.platformer.news/r/b6bb416b?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670].

OpenAI reportedly is considering biometric scanning [https://www.platformer.news/r/3da4e802?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670] to verify identities on its forthcoming social network. Sora is struggling [https://www.platformer.news/r/c46be327?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670] following its explosive launch. OpenAI has hired [https://www.platformer.news/r/8c5cef4d?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670] at least seven employees from open-source AI startup Cline.

A group of music publishers, including UMG, sued [https://www.platformer.news/r/59a2e796?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670] Anthropic over alleged copyright infringement of more than 20,000 songs. Anthropic raised [https://www.platformer.news/r/8542f619?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670] its 2026 revenue forecasts by 20 percent, but delayed its cash-flow positive timeline by a year.

Grok is the most antisemitic mainstream chatbot, a new ADL study suggests [https://www.platformer.news/r/54bb4ac8?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670]. Elon Musk reportedly proposed [https://www.platformer.news/r/0b3530a3?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670] a mid-June IPO for SpaceX to coincide with a rare planetary alignment and his birthday. Tesla will invest [https://www.platformer.news/r/a034c36b?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670] $2 billion in xAI and may merge with it — or with SpaceX [https://www.platformer.news/r/aa28138f?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670]. Whatever!

TikTok alternative UpScrolled hit [https://www.platformer.news/r/2343318f?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670] the No. 1 spot on the App Store.

Meta spent [https://www.platformer.news/r/fbb02ece?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670] more than $6 million buying TV ads to fight backlash against data centers. Improvements in Meta’s ad business are helping [https://www.platformer.news/r/84367eb0?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670] fuel its massive AI spending. Reality Labs posted [https://www.platformer.news/r/771ad290?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670] a $6.02 billion loss in the fourth quarter. Meta will rolling out new AI models and products later this year, CEO Mark Zuckerberg said [https://www.platformer.news/r/13a03785?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670] on the earnings call.

A whistleblower alleged that WhatsApp chats aren't private [https://www.platformer.news/r/185e3da9?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670], but Meta denied it and there's no detail no how Meta employees could even theoretically have broken the end-to-end encryption.

Google said [https://www.platformer.news/r/a441f3e0?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670] it’s exploring ways for sites to opt out of AI Overviews and AI Mode. The search giant will pay [https://www.platformer.news/r/df5fe668?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670] $135 million to settle a lawsuit that alleged it collected Android users’ cellular data without consent. Google removed [https://www.platformer.news/r/ffa4d3ab?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670] dozens of domains belonging to a mysterious Chinese company running malware on millions of phones.

DeepMind researchers unveiled [https://www.platformer.news/r/76b69212?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670] AlphaGenome, an AI model attempting to decode the human genome. Chrome got [https://www.platformer.news/r/6ab4b145?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670] a new Auto Browse feature. Google Maps users can now access [https://www.platformer.news/r/73db6565?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670] Gemini while walking or cycling. The Project Genie tool can make bad Nintendo knockoffs, according to this experiment [https://www.platformer.news/r/fd2a134d?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670]. YouTube appears to have taken down [https://www.platformer.news/r/7e92552f?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670] several of the top AI slop channels.

Apple acquired a secretive Israeli startup Q.AI for nearly $2 billion, sources said [https://www.platformer.news/r/1e7b7fe1?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670]. Apple told [https://www.platformer.news/r/9913eaee?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670] Patreon to move creators to in-app billing for subscriptions by November. 

Microsoft shares fell [https://www.platformer.news/r/0b7b98d4?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670] 5 percent after reporting a slow in cloud sales growth. LinkedIn topped [https://www.platformer.news/r/341a5b60?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670] $5 billion in quarterly revenue for the first time, and is now letting users [https://www.platformer.news/r/a78e301c?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670] show off their vibe coding skills directly in profiles.

Snap is spinning off [https://www.platformer.news/r/72824fb9?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670] its smart glasses team as a separate company.

Bluesky is testing [https://www.platformer.news/r/9811c4bd?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670] “live” features to take on X.

Spotify paid out [https://www.platformer.news/r/e172f07f?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670] $11 billion in royalties last year. The app’s new group chats feature allows [https://www.platformer.news/r/52960f86?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670] for up to 10 members.

Music streaming service Deezer made its AI music detection tool available [https://www.platformer.news/r/4ba996ec?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670] for businesses.

Students are turning to [https://www.platformer.news/r/8bd3e4bf?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670] AI “humanizers” to avoid accusations of AI cheating. How chatbots can automate [https://www.platformer.news/r/f0e81137?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670] shopping. How AI agents can help [https://www.platformer.news/r/94501c22?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670] the construction industry.

Those good posts

For more good posts every day, follow Casey’s Instagram stories [https://www.platformer.news/r/63d1efce?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670].

(Link [https://www.platformer.news/r/d2aab47f?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670])

(Link [https://www.platformer.news/r/7cb11fe7?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670])

(Link [https://www.platformer.news/r/ed85c564?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670])

Talk to us

Send us tips, comments, questions, and Moltbot reviews: casey@platformer.news [https://www.platformer.news/r/219cb43e?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670]. Read our ethics policy here [https://www.platformer.news/r/7fb39978?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670].

Sponsor a Newsletter [https://www.platformer.news/r/17c87667?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670]

Comment

[https://www.platformer.news/r/fb98aaee?m=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670]

Platformer © 2026 – Unsubscribe [https://www.platformer.news/unsubscribe/?uuid=5fdc9f67-a5ab-42ee-ab4f-91ba7b47c670&key=49c8fdc927a327b40d9d6bf7afc8da05cfd7aae49828fb6b2c609f6c77275e25&newsletter=77f5c760-d0b3-41c4-9bf2-a818790fe251]

https://ghost.org/?via=pbg-newsletter&ref=platformer.news
