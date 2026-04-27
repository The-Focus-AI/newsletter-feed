---
id: 19dafc113be97292
newsletter: will-schenk
newsletter_name: "Will Schenk"
week: 17
subject: "AIE Miami, Day One: The Forces Have Moved"
date: Tue, 21 Apr 2026 11:15:58 +0000
---

# AIE Miami, Day One: The Forces Have Moved

**From:** Will Schenk <thefocusai@buttondown.email>
**Date:** Tue, 21 Apr 2026 11:15:58 +0000

---

Welcome to the [thefocus.ai](https://thefocus.ai).  Send us an [email](hey@thefocus.ai)!

I'm down in Miami for the AI Engineering conference.  Come on down, the water's great!  Here are my morning thoughts on yesterday's session.

<img alt="forces-have-moved-davinci.png" class="newsletter-image" src="https://assets.buttondown.email/images/81b9272a-d641-4c43-a6cf-f6878ae4e5e3.png?w=960&amp;fit=max" style="width: 100%; max-width: 600px;" width="600"/>

The one thing I keep thinking about is [Geoffrey Huntley](https://x.com/geoffreyhuntley?utm_source=thefocusai&utm_medium=email&utm_campaign=aie-miami-day-one-the-forces-have-moved)'s collapse of the identity function. We used to have tribes — Ruby developer, Rust developer — and sub-tribes — Emacs vs. Vim — and all of that is getting thrown away and melded into one larger thing. There's a bigger shift underneath it. Being a software developer, and the software industry itself, is unsettling right now, and hearing about it from an unhinged New Zealand farmer in overalls really sticks with you. Some big psychological journey is going to have to happen.

In the old Christopher Alexander design-patterns days, patterns were established ways of resolving forces in tension. There's no right answer; there are a handful of stable configurations, and naming them was how we talked about architecture. What it feels like now is that all of those stable configurations are getting shifted. Not a trauma response exactly — more like a formative moment. We can see the readjustment playing out in real time, and it's not settled. It's still swinging around.

One force that's shifting is scarce knowledge and scarce intelligence. From Huntley's point of view, what's collapsing is a kind of *specialness* — if being the only one who knew how to do this was key to your identity, you have some adjusting to do.

[Dax Raad](https://x.com/thdxr?utm_source=thefocusai&utm_medium=email&utm_campaign=aie-miami-day-one-the-forces-have-moved) from OpenCode had a freestyling "You Have No Good Ideas" talk — rawdogging his 15 minutes with no slides, strong opener to the conference. His argument: the difficulty of software engineering used to serve as a gating function that kept bad ideas from getting built. People perceived they had lots of good ideas, but they had to fight engineers to ship them, and that fight was an implicit filter. Now the filter is gone, and it's uncovering the fact that maybe people didn't have that many great ideas to begin with. We've got a lot more software. We are not especially better at figuring out what we want to build. So we're building more of it. The real question: are we producing good stuff, or are we just cleaning up the mess that was so easy to make yesterday?

[Dex Horthy](https://x.com/dexhorthy?utm_source=thefocusai&utm_medium=email&utm_campaign=aie-miami-day-one-the-forces-have-moved) of HumanLayer is, in my mind, pushing the state of the art on how to build AI software. He's originally known for "context engineering," and his last talk introduced the idea of the *dumb zone* — that around 40% of context capacity, the model's attention is spread too thin across the window and the agent starts making worse choices. This time he added two more ideas. First: there's an *instruction budget*, roughly 100–200 before a thinking model stops reliably following all of them. That's the answer to "why doesn't it follow my CLAUDE.md, why doesn't it do this, why doesn't it do that" — you've given it too many conflicting instructions and it's forgotten half of them. Second: he's walking back a lot of his own RPI (research-plan-implement) advice. His old line was "source code is the new machine code, don't read the code" — something I've basically subscribed to for the last four months. But in practice, reviewing the plan is equivalent to reviewing the code, which means you end up doing both. So the new advice is: don't review the plan, review the output. This talk made me feel how differently the forces resolve when they move. He ping-ponged from his own prior position. We're circling the answer. It isn't settled.

<p>The other force that's shifting is the skills-vs-MCP question. MCPs are great in theory, but they eat too much of the context window. [Rita Kozlov](https://x.com/ritakozlov?utm_source=thefocusai&amp;utm_medium=email&amp;utm_campaign=aie-miami-day-one-the-forces-have-moved) at Cloudflare showed a third path: models are extremely good at writing and running code, so just let them. Give the agent two primitives — <code>search</code>, which returns type signatures for relevant APIs, and <code>execute</code>, which runs generated code either client-side or server-side inside an isolate. Instead of wrapping the model around a set of tool calls and using the LLM for flow control, the LLM writes source code and the control loop is just a control loop. This harkens back to Dex: giving the pieces to the model and letting it run wild is too loose; giving it some structure is what's coming back.</p>
I've personally moved away from MCPs toward skills, and now I'm moving back toward MCPs as a wrapper around skills — using MCPs as a security boundary. [Kent Dodds](https://x.com/kentcdodds?utm_source=thefocusai&utm_medium=email&utm_campaign=aie-miami-day-one-the-forces-have-moved)' Kody demo made this concrete: inside an execution environment you only hand the agent functions you control, and in a service-worker-like pattern you can intercept every fetch to check whether a secret is being exfiltrated to a domain it shouldn't be. That's not "let the agent write anything" — it's "let the agent write code inside a sandbox we can audit at the syscall." A third way between skills, MCPs, and tool calls. The shape of that is still forming.

On taste: we're starting to see software that's written for agents, which means understanding what agents want, what they like, what they respond well to. A code-execution playground is a shift in that direction. It's not what you'd hand a human — here's a bunch of method calls, go execute — but it is the kind of interface an agent likes.

The final talk of the day was one I had sideways anticipation about — partly dreading, partly wanting to see. [Ben Davis](https://x.com/davis7?utm_source=thefocusai&utm_medium=email&utm_campaign=aie-miami-day-one-the-forces-have-moved) on "You're Using the Wrong AI SDK." I've built a lot of stuff on top of the Vercel AI SDK, so I was paying close attention. His frame: three generations. **Gen 1** is the wrapper generation — the raw OpenAI SDK, BAML. **Gen 2** is the tool-call generation — Vercel AI SDK style, wrap the agent loop around typed tool schemas. **Gen 3** is the coding-agent SDKs — Pi, OpenCode, the Claude Code SDK — where the primitives aren't tool schemas anymore, they're a whole coding agent: a filesystem, shell access, artifacts, code it can download and run. The interesting claim is that the unit of shipping is increasingly Gen 3. Your "program" isn't code plus tools anymore; it's a directory of markdown skill files, a few helper shell functions, and a coding agent as the runtime. That's worth going deeper into.

Ben didn't connect this back, but I kept thinking about Amp Code, which is aggressive about *feature pruning* — they remove features from their product, they refuse to let past work constrain current shape. There's a reason that's the right instinct now. We have an explosion of code, which is an explosion of complexity. Most of what comes out is a first draft. And humans have always had a cognitive-load budget and a complexity budget, and we're getting past it. Instructions in CLAUDE.md, instructions in the agentic wrapper around MCPs, skills being injected per task — best practices are getting invented, but they aren't frozen yet. It does feel like something like Pi or OpenCode is becoming the new application framework. Pi is the new app server. We'll see.

What the day felt like, overall, was a room full of practitioners reporting back on which forces moved and what got uncovered when they did. Dax's uncovering: we never had that many good ideas; engineering was doing the filtering. Dex's uncovering: instruction budget is a real resource, and plans that are as long as the code they produce aren't buying you anything. Cloudflare and Kent's uncovering: tool-calling isn't the primitive; code-writing is, and the right sandbox makes it safe. Ben Davis's uncovering: the unit of the program is moving up a layer from code to markdown-describing-what-code-should-do. Huntley's uncovering: the identity of "software engineer" was propped up by a scarcity that's now gone.

The patterns haven't refrozen. That's the whole point. The most credible thing a speaker could do on that stage was change their mind out loud, and plenty of them did.

–––
<p style="text-align: center"><br/>Check out [thefocus.ai/blog](https://thefocus.ai/blog) for more writing<br/> or<br/> [contact us by email](mailto:hey@thefocus.ai)</p>

This was issue #49 of The Focus AI.

You can [subscribe](https://newsletter.thefocus.ai/), [unsubscribe](https://buttondown.com/unsubscribe/04bd65ee-de71-4c1f-b0a6-9789ab32aa03?email=7e3b26eb-4be9-4161-bf00-b5e6600f983c), or [view this email online](https://newsletter.thefocus.ai/archive/aie-miami-day-one-the-forces-have-moved/).

–––
Powered by Buttondown, the easiest way to
start and grow your newsletter: https://buttondown.com
