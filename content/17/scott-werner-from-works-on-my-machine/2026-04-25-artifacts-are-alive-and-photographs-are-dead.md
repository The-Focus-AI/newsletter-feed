---
id: 19dc4e865e11bdf4
newsletter: scott-werner-from-works-on-my-machine
newsletter_name: "Scott Werner from Works on My Machine"
week: 17
subject: "Artifacts Are Alive (And Photographs are Dead)"
date: Sat, 25 Apr 2026 13:50:51 +0000
source_url: "https://worksonmymachine.ai/p/artifacts-are-alive-and-photographs"
---

# Artifacts Are Alive (And Photographs are Dead)

**From:** Scott Werner from Works on My Machine <worksonmymachine@substack.com>
**Date:** Sat, 25 Apr 2026 13:50:51 +0000
**Source:** [View original](https://worksonmymachine.ai/p/artifacts-are-alive-and-photographs)

---

View this post on the web at https://worksonmymachine.ai/p/artifacts-are-alive-and-photographs

There is a photograph of a coral reef on the wall of my dentist’s office.
It’s a good photograph. Technically impressive, the fish are crisp. I’ve stared at it and imagined I was snorkeling with them at basically every cleaning since he put it up.
But as my jaw starts to ache, I’m reminded of the core feature that makes it a photograph. I cannot swim into it. I cannot change the angle. I cannot wait for the fish to move and see where they go. I cannot go over to the strange thing in the bottom-left corner that might be a sea slug or might just be a rock or might be something I’ve never seen before and would like to learn about. I can look. I cannot explore.
The photograph is a document. The reef is not.
Ideas are Reefs
For the longest time, whenever we needed to communicate an idea, we’d reach for whatever tool was available and make a static artifact: a blog post, a slide deck, a PDF, a README, a Confluence page, a Notion document. We capture the idea at a moment in time, from one angle, at one level of detail, and then we hand it to someone and say “here, understand this.”
And they read it. And they understand some of it. And they forget most of it. And if they want to understand the part they’re confused about, they read it again, linearly, from the beginning, because that’s what the format allows.
This is the problem with that container. The container is a photograph. The idea, almost always, is a reef.
Bret Victor Has Been Yelling About This For Years
Bret Victor has been quietly furious about this for a long time. (Or maybe loudly furious. Or maybe not furious at all and I’m projecting. I’ve only seen videos of him which are extremely composed and thoughtful, but if you pay attention you can sense he is a person who is very tired of slide decks.)
He spent years giving us variations on a thesis: software should think with you, not at you. His explorable explanations, which are interactive documents where you can drag a slider and watch the concept change in real time, or click on a number and see where it came from, are the closest we’ve been able to come to handing someone a reef instead of a photograph.
The insight is simple but the implications are enormous. A document you can explore is a completely different thing. In the same way an aquarium is a different category of experience than a photograph.
We’ve had the technology to build explorable explanations for decades. What we haven’t had is a fast, cheap, easy enough way to build them that they become as natural a unit of communication as a blog post or a slide.
Until, sort of, now.
What An Artifact Actually Is
I’ve been pretty obsessed lately with artifacts. (The name comes from what Anthropic is calling the HTML+JavaScript mini-apps Claude generates beside conversations, and I kind of just kept using it to refer to them. But an artifact is something made. Evidence of a thought having occurred.)
An artifact is a self-contained HTML and JavaScript file. It runs in a browser. It might have sliders, or buttons, or animations, or a small canvas where something happens. It probably doesn’t have a database or a backend or a deployment pipeline or a pricing page.
Not just a mini-app. Not just a prototype of a product. Not just a demo. It doesn’t really have to be any particular shape really, it’s still very new.
Sometimes it’s an explorable explanation. A piece of software content . A reef instead of a photograph.
Here is what becomes possible when you stop thinking about software as a product and start thinking about it as a medium:
You can make a PR review artifact . Instead of reading 400 lines of diff and trying to build a mental model of what changed, someone generates an artifact that shows you the algorithm before and after. You can step through the execution. You can drag a slider to move from old behavior to new behavior. You can click on the edge case you’re worried about and watch what happens to it. The artifact is the explorable explanation that sits alongside the code.
You can make an explorable explanation of anything. Compound interest. A sorting algorithm. How to understand gravity and particle effects in games . The logic of a business rule that your team argues about every quarter because nobody has ever seen it visualized. How a colony of two-line-of-code ants can find food around a maze . Bret Victor has been building these by hand, painstakingly, as one-of-a-kind objects. The artifact pattern makes them the kind of thing you can make in twenty minutes.
You can make a game prototype before you have a game.  The core mechanic. The feel of the controls. The thing you’re trying to understand about whether the idea is actually fun. Not a pitch deck about the game. The game, in embryonic form, as a standalone file you can drop in a Discord and say “is this interesting?”
You can make a piece of interactive writing. An essay where the example is the example, not a description of the example. Where the reader can change the parameters and see how the argument holds up. Where the piece teaches the same way a good teacher teaches, which is by letting you poke the thing and see what happens.
None of these things were impossible before, but the cost of building them has fallen to almost nothing. They are a form factor tailor made for vibe coding. Software as a content medium.
New Medium, New Social Medium
Every time a medium gets cheap enough to be abundant, somebody builds the village square for it. Check out this artifact about it. 
Photography was expensive and you hired a professional for your portraits. Then cameras got cheap and suddenly everyone was taking pictures. Then the internet got fast and suddenly you could share pictures. And then someone built Flickr, and then Instagram, and the medium became social.
Blogging was expensive in the sense of requiring technical knowledge and a server. Then Blogger and then WordPress made it cheap. Then someone built Twitter, and the unit of the medium got even smaller, and the social layer ate the world.
Video was expensive. Then YouTube was cheap. Then TikTok was cheaper.
The pattern: new medium → democratized production → social layer emerges around the new unit of the medium.
I think we are at the beginning of that pattern for artifacts.
The medium is cheap now. Genuinely, shockingly cheap. Twenty minutes and a conversation with Claude and you have something that would have taken a skilled frontend developer a week to build two years ago. (I know because I’ve been building them for this newsletter for months, as the companion experiments to the core software in these posts, and even I’m surprised by how fast it goes.)
So: what’s the social layer?
Artifact Land
If you clicked any of the links above, you’ll already know, but I’m building something to find out. It’s called Artifact Land .
The idea is this: a place where you can share, discover, and remix artifacts. I’m looking at it as more than simply a deployment platform. It’s a place where the artifact is the unit of content the same way a photo is the unit of Instagram or a video is the unit of TikTok.
A place where a teacher can share the artifact they made to help their students learn a tricky concept, and someone else can fork it and make it work for what they’re learning. A place people can share small utilities they found useful. A place where someone can create an explorable explanation about a machine learning algorithm and it can be found by someone who has been struggling with the idea for years. A place where the game prototype can find the person who wants to build it into a game. Maybe someday a place where a team has their CI job post interactive explanations of a PR for their reviewer to play with.
The artifact is alive. Artifact Land is where it lives.
But Who Pays For The AI?
As I’ve been building this, I’ve been thinking a lot about how to make it work cost-wise.
The traditional model for AI-powered apps goes like this: you pay a monthly fee, you get a bucket of AI credits, the credits expire at the end of the month because the company has to pay its inference bills regardless of whether you used them, and if you need more you pay more. The company is in the AI business whether they want to be or not.
There’s another popular option, usually called Bring Your Own Key where you enter your own API key, the app passes your requests through to the model provider using your credentials, you pay for your own usage directly. No credits, no expiration. The company gets out of the AI inference business entirely.
But I think there’s a new model forming. I’ve been calling it Bring Your Own Claude Code (or, ok, bring your own agent). Paper.design  is the closest example of it I could find. Are there others out there?
The idea is that instead of the app doing the AI inference, the app exposes a CLI and an API and an MCP server. You connect your own Claude Code, or your own agent, or whatever agentic tool you prefer. The agent does the work. The service just provides the tools, the storage, and the surface. The intelligence is yours.
For Artifact Land, this means: you connect your own agent, it builds artifacts using your own inference budget, and Artifact Land stores and surfaces them. The site doesn’t need to be in the AI business at all. It’s a gallery. You bring your own brushes.
I think this pattern is interesting for a few reasons.
The app never touches inference. There are no credits to expire, no usage limits to hit, no surprise overage bills. Your AI budget is your business.
More importantly your agent knows things about you that the app doesn’t. Your agent can build artifacts that reference your codebase, your design system, your conventions, your data, your context. It can make a PR review artifact that actually understands your PR because it has access to your repo. The artifact becomes yours in a way that a generic tool can’t make it.
And the app gets to focus on what only the app can do. The discovery layer, the sharing mechanics, the social graph, the remix infrastructure. The part that isn’t commoditizable.
BYOK is the model when you wanted to pay for your own AI usage. BYOCC is the model when you want your own agent to do your own work and the app to just get out of the way.
Social Coding 2.0?
Will a social network around software-as-a-medium take off? I don’t know, but I really hope so, even if it doesn’t end up being Artifact Land. Maybe this is the real manifestation of social coding that GitHub gave up on.
What I do know though, is that I really find these artifacts interesting. The ones I’ve made for this newsletter have been some of the most fun things I’ve made. The ones I’ve seen other people make have shown me possibilities I hadn’t thought of. Something is forming here.
Every couple days I’m surprised with a new idea of what’s possible. But the reef is real and we can do more than just photograph it now.
Come swim around. Artifact Land  is live. Bring your own Claude.

Unsubscribe https://substack.com/redirect/2/eyJlIjoiaHR0cHM6Ly93b3Jrc29ubXltYWNoaW5lLmFpL2FjdGlvbi9kaXNhYmxlX2VtYWlsP3Rva2VuPWV5SjFjMlZ5WDJsa0lqb3lOVE00TVRReUxDSndiM04wWDJsa0lqb3hPVFUwTURjM01EUXNJbWxoZENJNk1UYzNOekV5TlRBMU5pd2laWGh3SWpveE9EQTROall4TURVMkxDSnBjM01pT2lKd2RXSXRNamcyTnpNeUlpd2ljM1ZpSWpvaVpHbHpZV0pzWlY5bGJXRnBiQ0o5LlRBQnhCckFUWHh2ZUhscE9yMmZwUGpQLXBzUlJzVkQ5MmxOQUNRbHNBS1UiLCJwIjoxOTU0MDc3MDQsInMiOjI4NjczMiwiZiI6dHJ1ZSwidSI6MjUzODE0MiwiaWF0IjoxNzc3MTI1MDU2LCJleHAiOjIwOTI3MDEwNTYsImlzcyI6InB1Yi0wIiwic3ViIjoibGluay1yZWRpcmVjdCJ9.VXDlerKY7WL_CoL4I8mhIiYMGCYavYbJPa7E5Ktgw7Q?
