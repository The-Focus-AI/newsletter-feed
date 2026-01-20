---
id: 19bd7f618ce0dbe1
newsletter: changelog-news
newsletter_name: "Changelog News"
category: tech-ai
subject: "🤪 Agent psychosis: are we going insane?"
date: Tue, 20 Jan 2026 07:33:07 +1100
---

# 🤪 Agent psychosis: are we going insane?

**From:** Changelog News <news@changelog.com>
**Date:** Tue, 20 Jan 2026 07:33:07 +1100

---

We're all trying to grapple with perhaps the most dramatic change the software world has ever undergone...

# Changelog News

##### Developer news worth your attention

**Jerod here!** 👋

After nearly ten years, the jQuery team has released a new major version ([4.0](https://blog.jquery.com/2026/01/17/jquery-4-0-0/)) of the library so good, it still runs on ~71% of all websites. Many of the breaking changes are *removing* features; more proof of its transcendence. I'm calling it: jQuery is the GOAT 🐐

Ok, let's get into this week's news.

---

## 🎧 [The GitHub problem (and other predictions)](https://changelog.am/123)

Mat Ryer is back and he brought his impromptu musical abilities with him! We discuss Rob Pike vs thankful AI, Microsoft’s GitHub monopoly (and what it means for open source), and Tom Tunguz’ 12 predictions for 2026: agent-first design, the rise of vector databases, and are we about to pay more for AI than people?! 🎥 [VIDEO HERE](https://changelog.am/123/yt) 👀

[![Art for the episode: Smiling faces. Title text. That kind of stuff.](https://cdn.changelog.com/news/177-interviews-hero.jpg)](https://changelog.am/123)

## 🤪 [Agent psychosis: are we going insane?](https://lucumr.pocoo.org/2026/1/18/agent-psychosis/)

Armin Ronacher:

> Many of us got hit by the agent coding addiction. It feels good, we barely sleep, we build amazing things. Every once in a while that interaction involves other humans, and all of a sudden we get a reality check that maybe we overdid it. The most obvious example of this is the massive degradation of quality of issue reports and pull requests. As a maintainer many PRs now look like an insult to one’s time, but when one pushes back, the other person does not see what they did wrong. They thought they helped and contributed and get agitated when you close it down.
>
> But it’s way worse than that. I see people develop parasocial relationships with their AIs, get heavily addicted to it, and create communities where people reinforce highly unhealthy behavior. How did we get here and what does it do to us?

We're all trying to grapple with perhaps the most dramatic change the software world has ever undergone. In this post, Armin grapples with it right out there in public. I appreciate him for doing that. He's been a "thought leader" for many years, and it's comforting to know that even folks like him are struggling to see this new world clearly.

## 🗄️ [A social filesystem](https://overreacted.io/a-social-filesystem/)

Dan Abramov starts this excellent article by praising the portability and effectiveness of the Files paradigm:

> Apps and formats are many-to-many. File formats let different apps work together without knowing about each other.

(This reminded me of Steph Ango's [File over app](https://stephango.com/file-over-app), which I revisit often.)

Then Dan goes on to describe how the Files paradigm could apply to social apps like Instagram, Reddit, Tumblr, GitHub, and TikTok. But this is no hypothetical. It's literally how the [AT Protocol](https://atproto.com/) works, which Dan calls a "social filesystem."

> I’ve previously written about the AT protocol in [Open Social](https://overreacted.io/open-social/), looking at its model from a web-centric perspective. But I think that looking at it from the filesystem perspective is just as intriguing, so I invite you to take a tour of how it works.
> 
> A personal filesystem starts with a file.
> 
> What does a social filesystem start with?

## 👀 [RepoBar puts GitHub at a glance from your menu bar](https://github.com/steipete/RepoBar)

> RepoBar keeps your GitHub work in view without opening a browser. Pin the repos you care about and get a clear, glanceable dashboard for CI, releases, traffic, and activity right from the macOS menu bar.

[![RepoBar in action showing a specific repos' details](https://cdn.changelog.com/news/177-repobar.png)](https://github.com/steipete/RepoBar)

RepoBar works with GitHub Enterprise, but it doesn't work with Linux or Windows. NBD. Fire up an agent and you could have this idea ported to your OS of choice in a few hours, tops. (Or have it fork and add multi-platform support?)

## 💰 [Your Agent's dependency choices are a liability](https://fandf.co/4ahP5MZ)

#### Thanks to Sonatype for sponsoring Changelog News

Coding agents are good, but they don't know when a dependency is compromised. That's a liability teams want to avoid. But how?

Agents are great at writing code that works, but they're pulling dependency recommendations from training data that's stale and outdated. That package version Copilot just suggested might have a known vulnerability that was disclosed six months after the model's knowledge cutoff. **Your code compiles. Your security posture does not.**

That's why teams are choosing [Sonatype Guide](https://fandf.co/4ahP5MZ) to select the best open source components from the start and maintain the safest dependency versions.

Sonatype Guide is an MCP server that integrates directly with your AI coding assistant, so when you're generating code, the dependency recommendations come from Sonatype's live component intelligence, not frozen training data. They've been the trusted resource behind Maven Central for over 15 million developers, and now that same component knowledge can feed directly into your AI workflow.

You can use Sonatype Guide with Claude, Cursor, and other assistants that support MCP. Explore the product for yourself. It's free to start. No credit card required.

Learn more at [sonatype.com](https://fandf.co/4ahP5MZ)

## 🆙 [Life altering Postgres patterns](https://mccue.dev/pages/3-11-25-life-altering-postgresql-patterns)

Believe it or not, Ethan McCue doesn't think that title is clickbait. He's found the set of things shared in his linked post so valuable that they have, indeed, altered he and his coworker's lives for the better. The list!

- Use UUID primary keys
- Give everything created_at and updated_at
- on update restrict on delete restrict
- Use schemas
- Enum tables
- Name your tables singularly
- Mechanically name join tables
- Almost always soft delete
- Represent statuses as a log
- Mark special rows with a system_id
- Use views sparingly
- JSON Queries

I agree with *most* of these, but plural table names FTW...

## ⛓️💥 [Web dependencies are broken. Can we fix them?](https://lea.verou.me/blog/2026/web-deps/)

Lea Verou:

> Dear JS ecosystem, I love you, but you have a dependency management problem when it comes to the Web, and the time has come for an intervention.

The topic of that intervention? We all know what it is...

> In healthy ecosystems dependencies are normal, cheap, and first-class. “Dependency-free” is not a badge of honor.
>
> And yet, **the web platform has outsourced this fundamental functionality to third-party tooling**. As a result, code reuse has become a balancing of tradeoffs that should not have existed in the first place.

She doesn't think incremental improvements can get us out of the mess we're in, suggesting one radical solution that she isn't entirely sure will work. In the end, this post is a call-to-action for the community. 

> To browser vendors, to standards groups, to individual developers. Let’s fix this! 💪🏼

---

### 🎙️ [Kaizen! Let it crash](https://changelog.am/124)

Gerhard is back for Kaizen 22! We’re diving deep into those pesky out-of-memory errors, analyzing our new Pipedream instance status checker, and trying to figure out why someone in Asia downloads a single episode so much. 🎥 [VIDEO HERE](https://changelog.am/124/yt) 👀

[![Art for the episode: Smiling faces. Title text. That kind of stuff.](https://cdn.changelog.com/news/177-friends-hero.jpg)](https://changelog.am/124)

### ☁️ [Cloudflare acquires Astro](https://astro.build/blog/joining-cloudflare/)

Astro creator, Fred Schott:

> Cloudflare has been a long-time sponsor and champion of Astro. They have a proven track record of supporting great open-source projects like Astro, TanStack, and Hono without trying to capture or lock anything down. Staying open to all was a non-negotiable requirement for both us and for Cloudflare.
>
> That is why Astro will remain free, open-source, and MIT-licensed. We will continue to run our project in the open, with an open governance model for contributors and an open community roadmap that anyone can participate in. We remain fully committed to maintaining Astro as a platform-agnostic framework, meaning we will continue to support and improve deployments for all targets—not just Cloudflare.

### 🧟♂️ [Dead internet theory (again)](https://kudmitry.com/articles/dead-internet-theory/)

Sorry (not sorry) for continuing to bring this topic up! Dmitry Kudryavtsev tells his wake-up story:

> I was sitting there, refreshing the page, seeing the author being confronted with use of AI in both their code and their comments, while the author claiming to have not used AI at all. Honestly, I was thinking I was going insane. Am I wrong to suspect them? What if people DO USE em-dashes in real life? What if English is not their native language and in their native language it’s fine to use phrases like “you are absolutely right”? Is this even a real person? Are the people who are commenting real?
>
> And then it hit me. We have reached the Dead Internet.

### 😔 [Why senior engineers let bad projects fail](https://lalitm.com/post/why-senior-engineers-let-bad-projects-fail/)

Lalit Maganti:

> In large companies, speaking up about what you see as a “bad project” is a good thing. But only in moderation. Sometimes the mark of seniority is realizing that arguing with people who won’t listen isn’t worth it; it’s better to save your counsel.

---

## 📐 Don't forget your (un)ordered list

- [Postal arbitrage](https://walzr.com/postal-arbitrage)
- [I joined the POSSE Party](https://jerodsanto.net/2026/01/i-joined-the-posse-party/)
- [Can Bundler be as fast as uv?](https://tenderlovemaking.com/2025/12/29/can-bundler-be-as-fast-as-uv/)
- [AI coding trick: how does it know?](https://jessitron.com/2026/01/10/ai-coding-trick-ask-it-how-it-knows/)
- [Can I finally start using Wayland in 2026?](https://michael.stapelberg.ch/posts/2026-01-04-wayland-sway-in-2026/)
- [An open source alternative to Claude Cowork](https://github.com/different-ai/openwork)
- [Anti-patterns in early-stage engineering teams](https://www.ablg.io/blog/no-management-needed)
- [Generate QR codes with pure SQL in Postgresql](https://tanelpoder.com/posts/generate-qr-code-with-pure-sql-in-postgres/)
- [Transform your favorite cities into beautiful, minimalist designs](https://github.com/originalankur/maptoposter)
- [Signal pres warns agentic AI insecure, unreliable, surveillance n'mare](https://coywolf.com/news/productivity/signal-president-and-vp-warn-agentic-ai-is-insecure-unreliable-and-a-surveillance-nightmare/)

---

That's the news for now, but we have some great episodes coming up! On Wednesday, Damien Tanner from [Layercode](https://layercode.com) on adding voice to your AI agents. And on Friday, [Techno Tim](https://technotim.com) catches Adam up with the state of homelab tech.

Have yourself a great week, 
please [support](https://jerodsanto.net/2026/01/please-support-our-youth-basketball-program/) my son's basketball program,
and I'll talk to you again real soon. 💚

–Jerod

Unsubscribe: https://changelog.com/~/nope/38333932347C77736368656E6B40676D61696C2E636F6D/podcast/news

(Context: you subscribed to Changelog Weekly)
