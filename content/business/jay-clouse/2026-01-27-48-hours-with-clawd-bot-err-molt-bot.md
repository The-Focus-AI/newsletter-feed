---
id: 19c00700c18283b2
newsletter: jay-clouse
newsletter_name: "Jay Clouse"
category: business
subject: "48 hours with Clawd.bot (err, Molt.bot)"
date: Tue, 27 Jan 2026 17:11:09 +0000 (UTC)
---

# 48 hours with Clawd.bot (err, Molt.bot)

**From:** Jay Clouse <jay@creatorscience.com>
**Date:** Tue, 27 Jan 2026 17:11:09 +0000 (UTC)

---

(
https://400c164b.click.convertkit-mail2.com/o8u28n77vwcqh6x2q3pcvhqzd58rraohredo6/reh8hohmknlk8ms2/aHR0cHM6Ly9jcmVhdG9yc2NpZW5jZS5jb20v
)

This issue presented by:
Google AdSense (
https://400c164b.click.convertkit-mail2.com/o8u28n77vwcqh6x2q3pcvhqzd58rraohredo6/08hwh9h2nq6n8gal/aHR0cHM6Ly9jcmVhdG9yc2NpZW5jZS5jby9nb29nbGUtMS0yNy0yNg==
)

Hey Will,

I saw this video (
https://400c164b.click.convertkit-mail2.com/o8u28n77vwcqh6x2q3pcvhqzd58rraohredo6/p8heh9h4r8wreriq/aHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g_dj1Ra3FlLXVSaFFKRQ==
) about a tool called "Clawd.bot (
https://400c164b.click.convertkit-mail2.com/o8u28n77vwcqh6x2q3pcvhqzd58rraohredo6/x0hph6hekxvkmot5/aHR0cHM6Ly9jbGF3ZC5ib3Qv
)" at 8pm on Saturday night. A 24/7 virtual assistant running
tasks in the background? Interesting...

I found some setup videos, built my confidence, and decided to
give it a shot.

By 1:30am Sunday, I had my own version of Clawdbot running on its
own server. After a (brief) night's sleep, I spent all day Sunday
(and then also Monday) developing processes and skills with my
Clawdbot.

I had a full episode planned for this week—I was going to tell
you how I’m thinking about content in 2026. But over the last 48
to 72 hours, I fell so deep into a rabbit hole that I scrapped
the whole thing to tell you about this instead.

Clawdbot (actually now rebranded to Moltbot due to an Anthropic
trademark threat (
https://400c164b.click.convertkit-mail2.com/o8u28n77vwcqh6x2q3pcvhqzd58rraohredo6/dpheh0hedr9dx6cm/aHR0cHM6Ly94LmNvbS9zdGVpcGV0ZS9zdGF0dXMvMjAxNjA2ODI2NTM5MTM1NDE4MQ==
)) is an open-source AI agent that connects to your messaging
apps and tools, runs on a server, and acts as an always-on
assistant you can just…text. Like texting a very smart friend who
never sleeps and has access to your Notion, your calendar, your
podcast transcripts—whatever you give it access to.

I’m non-technical. I want to be clear about that. I’ve used
Terminal before, but I’ve never built applications or set up
servers. And yet, something about the videos I watched made this
feel more achievable than the hodgepodge of other automation
setups that have been popular in the recent past.

A lot of people are buying Mac Minis to do this, but that's not
at all necessary—especially if you're not planning to do any
heavy coding. Instead, I dug out an old 2016 MacBook Pro that’s
been sitting on my desk for years, formatted it, and spent the
next 24 hours getting this thing running.

Here’s what I’ve learned so far—and what I think it means for us
as creators.

---------------------
The security question
---------------------

A lot of people are setting up AI assistants on their personal
computers and giving them access to everything. Credentials,
email, banking, documents—all of it.

I keep coming back to this question: Would you give a brand-new
human assistant—someone you just hired with no background
check—full access to your personal computer?

For me, the answer was no. So I set mine up on a virtual private
server (Hetzner (
https://400c164b.click.convertkit-mail2.com/o8u28n77vwcqh6x2q3pcvhqzd58rraohredo6/e0hph7h7m53mzob8/aHR0cHM6Ly9oZXR6bmVyLmNvbS8=
), $6/month) that’s completely separate from my personal machine.
It only has access to what I explicitly give it through APIs; not
my login credentials, not my personal files, not my email.

Is this extra work? Yes. Was it worth it? Absolutely.

---------------------------------
What it actually does (right now)
---------------------------------

Let me be honest—the learning curve is real. There's a lot of
breaking, fixing, learning, and trying again. The assumption is
that we're getting a little better all the time, and this will
become more reliable as I get better at using it.

I named my assistant Tubey (after our little Creator Science
mascot). Here’s what Tubey does for me today:

* Every morning, sends me a briefing with my Oura Ring scores and
a curated X feed: threads from people I follow in the creator
economy and AI, with engagement metrics so I can jump in and
reply
* Researches upcoming podcast guests and creates structured prep
docs in Notion with career timelines, source links, and interview
angles
* Stores all 300+ of my podcast transcripts and proactively
extracts short-form content ideas whenever I publish a new
episode
* Logs my workouts via voice note—I just say what I did, and it
fills in my Google Sheet and adjusts my weekly program
* Pulled action items and testimonials from a Zoom chat during
our community town hall that I completely missed while leading
the call

Total cost: my existing $200/month Claude subscription* +
$6/month for the server.

*It seems like (
https://400c164b.click.convertkit-mail2.com/o8u28n77vwcqh6x2q3pcvhqzd58rraohredo6/owhkhqhwx5mxemiv/aHR0cHM6Ly94LmNvbS9QaGlsaXBwU3BpZXNzL3N0YXR1cy8yMDE1NzczODI3MjM0NDcyNDEw
) this may technically be against their ToS

--------------------------------------------
"Is this better than [other tool/solution]?"
--------------------------------------------

Maybe, maybe not! I think a lot of this was possible through
other means, but I hadn't really figured it out. Clawdbot, Claude
Code, Claude Cowork, N8N, Manus...they're all tools. They're what
you make of them.

The excitement around Clawdbot may die down in a week. Certainly,
more user-friendly tools will become even more user-friendly
(it's already happening (
https://400c164b.click.convertkit-mail2.com/o8u28n77vwcqh6x2q3pcvhqzd58rraohredo6/z2hghnhe5025zqhp/aHR0cHM6Ly94LmNvbS9jbGF1ZGVhaS9zdGF0dXMvMjAxNTg1MTc4MzY1NTE5NDY0MA==
)). I don't want you to rush out and do something time-consuming
with security implications if you're not interested or
comfortable doing so.

----------------------------------------
The question I can’t stop thinking about
----------------------------------------

Here’s where it gets even more complicated for me.

Tubey now reads all of my long-form content (essays, transcripts,
Kit broadcasts) and drafts short-form ideas based on my writing,
in my voice, scored by how interesting it thinks they are. It
gives me a pile of short-form content ideas from each one of them
that I can just post if I want to.

Am I okay with that?

Honestly? I’m still on the fence.

On one hand, these are my ideas, repurposed from content I
already created. If AI gives me more time to read, write
long-form, and be present with my family, and the tradeoff is
that some of my social posts are AI-assisted drafts of my own
thinking… I don’t hate that.

On the other hand, if my X feed is just AI-generated short-form
content, how do I feel about that?

I don’t feel great.

The line I’m drawing for now: AI can draft, but I decide. It’s my
IP, my voice, my ideas. And I’m always asking myself, "Is this a
skill I want to personally get better at?" Because if the answer
is yes, outsourcing it to AI makes me worse, not better.

I go much deeper on all of this—the full setup, the security
approach, the specific tools, and especially how I’m thinking
about the role of content in a world where AI can create it for
us—in this week’s podcast episode (links below).

I’d love to hear how you’re thinking about this. Are you using AI
tools like this? Where do you draw the line?



SPONSORED

You create. We'll help you earn.

(
https://400c164b.click.convertkit-mail2.com/o8u28n77vwcqh6x2q3pcvhqzd58rraohredo6/x0hph6hekxvkm4i5/aHR0cHM6Ly9jcmVhdG9yc2NpZW5jZS5jby9nb29nbGUtMS0yNy0yNg==
)
"I can be hands off and trust the ads being shown are making me
money with Google AdSense" DIY Eule, one of Germany's largest
sewing content creators.

Google AI takes the guesswork out of ad placement, saving you
time and effort so you can focus on what you do best: creating
content. Google AdSense gives you a simple set up and makes it
the better way for you to earn from your content.

-->Get started now and turn your content into revenue. (
https://400c164b.click.convertkit-mail2.com/o8u28n77vwcqh6x2q3pcvhqzd58rraohredo6/x0hph6hekxvkm4i5/aHR0cHM6Ly9jcmVhdG9yc2NpZW5jZS5jby9nb29nbGUtMS0yNy0yNg==
)
Get started now and turn your content into revenue. (
https://creatorscience.co/google-1-27-26 )



NEW EPISODE 🎧

#291: 48 Hours With Clawdbot: How I’m Using It and Initial
Reactions

(
https://400c164b.click.convertkit-mail2.com/o8u28n77vwcqh6x2q3pcvhqzd58rraohredo6/kkhmh6hnz40zp7al/aHR0cHM6Ly9wb2RjYXN0LmNyZWF0b3JzY2llbmNlLmNvbS9jbGF3ZGJvdC1tb2x0Ym90Lw==
)
Over the last 48-72 hours, I completely fell down the rabbit hole
with a new AI tool called Clawdbot (rebranded TODAY to Moltbot).
Instead of my planned episode about what's on my mind in January
2026, I decided to share my raw, unfiltered experience setting up
this AI assistant that runs 24/7 and integrates with all my
tools. This isn't your typical AI chat interface—it's an
always-on assistant I can text through Telegram that proactively
handles research, automates workflows, and maintains
institutional memory of all my content.

I'll walk you through exactly how I discovered it, my
security-first setup approach using a virtual private server, the
learning curve (spoiler: it took me until 1:30 AM), and the
specific ways I'm using it now. From automated guest research and
fitness tracking to content ideation from my 300+ podcast
transcripts, this tool is changing how I think about AI
assistance. But I'm also wrestling with bigger questions about
what this means for content creation, human creativity, and where
we draw the line on AI-generated work.

→ Alex Finn video (
https://400c164b.click.convertkit-mail2.com/o8u28n77vwcqh6x2q3pcvhqzd58rraohredo6/p8heh9h4r8wreriq/aHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g_dj1Ra3FlLXVSaFFKRQ==
)

→ Learn about Clawdbot (
https://400c164b.click.convertkit-mail2.com/o8u28n77vwcqh6x2q3pcvhqzd58rraohredo6/x0hph6hekxvkmot5/aHR0cHM6Ly9jbGF3ZC5ib3Qv
)

→ Setup video from Neil Stephenson (
https://400c164b.click.convertkit-mail2.com/o8u28n77vwcqh6x2q3pcvhqzd58rraohredo6/25h2hoh3lnpl5vt3/aHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g_dj01a2tJSk5VR0Zobw==
)

→ Setup video from VelvetShark (
https://400c164b.click.convertkit-mail2.com/o8u28n77vwcqh6x2q3pcvhqzd58rraohredo6/qvh8h7hdeqmex4il/aHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g_dj1TYVdTUFpvUFgzNA==
)

-->Listen now ↗ (
https://400c164b.click.convertkit-mail2.com/o8u28n77vwcqh6x2q3pcvhqzd58rraohredo6/kkhmh6hnz40zp7al/aHR0cHM6Ly9wb2RjYXN0LmNyZWF0b3JzY2llbmNlLmNvbS9jbGF3ZGJvdC1tb2x0Ym90Lw==
)
Listen now ↗ (
https://podcast.creatorscience.com/clawdbot-moltbot/ )Keep going,
Jay

PS: We're about to do a new round of Mastermind matching in The
Lab (Standard/VIP). It's a great time to join us (
https://400c164b.click.convertkit-mail2.com/o8u28n77vwcqh6x2q3pcvhqzd58rraohredo6/wnhne049tghqm82mz3f7/aHR0cHM6Ly9qb2luLmNyZWF0b3JzY2llbmNlLmNvbQ==
)!

(
https://400c164b.click.convertkit-mail2.com/o8u28n77vwcqh6x2q3pcvhqzd58rraohredo6/8ghqhohowk6w49ik/aHR0cHM6Ly9qYXkuYmxvZw==
)

Jay Clouse

Say hi 👋 on Instagram (
https://400c164b.click.convertkit-mail2.com/o8u28n77vwcqh6x2q3pcvhqzd58rraohredo6/vqh3hrhom89m58fg/aHR0cHM6Ly9pbnN0YWdyYW0uY29tL2pheWNsb3VzZQ==
), X (
https://400c164b.click.convertkit-mail2.com/o8u28n77vwcqh6x2q3pcvhqzd58rraohredo6/l2hehmhlqwmqgqu6/aHR0cHM6Ly93d3cueC5jb20vamF5Y2xvdXNlLw==
), or LinkedIn (
https://400c164b.click.convertkit-mail2.com/o8u28n77vwcqh6x2q3pcvhqzd58rraohredo6/m2h7h5h32w62rvbm/aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2pheWNsb3VzZS8=
)

▶️ Watch my latest YouTube video (
https://400c164b.click.convertkit-mail2.com/o8u28n77vwcqh6x2q3pcvhqzd58rraohredo6/dpheh0hedr9d36im/aHR0cHM6Ly9jcmVhdG9yc2NpZW5jZS5jby95b3V0dWJlLXNpZ25hdHVyZQ==
)

🚀 Partner with Creator Science (
https://400c164b.click.convertkit-mail2.com/o8u28n77vwcqh6x2q3pcvhqzd58rraohredo6/e0hph7h7m53mxoc8/aHR0cHM6Ly9jcmVhdG9yc2NpZW5jZS5jby9zcG9uc29yLXNpZ25hdHVyZQ==
)

🧞♂️ For a Limited Time: 20% off CreatorHQ

CreatorHQ is a complete operating system for creators. It’s built
to help you save time, publish more, and drive more revenue.

I’ve spent over three years building this system to run Creator
Science. More than 700 creators use it to make running their
businesses easier, and I would be completely lost without it.

→ Claim this limited-time offer (and save 20%) (
https://400c164b.click.convertkit-mail2.com/o8u28n77vwcqh6x2q3pcvhqzd58rraohredo6/vqh3hrhom89l28hg/aHR0cHM6Ly9saW5rcy5wYWxsYWRpby5kZXYvZW5yaWNoLzE4NTIwMTI1MTM_cmVkaXJlY3Q9aHR0cHMlM0ElMkYlMkZzdG9yZS5jcmVhdG9yc2NpZW5jZS5jb20lMkZidXklMkYyOGFlYWI4ZC01YjUzLTQ4NDAtOTA1NS0wODA3OTQwMTRlOGIlM0ZjaGVja291dCUyNTVCZGlzY291bnRfY29kZSUyNTVEJTNERFlORlQxMTEwMjQmdGFnX2lkPTQ1NDQzNjY=
)

Your Email Preferences:

Your email address is wschenk@gmail.com.

Change your account details ↗ (
https://preferences.convertkit-mail2.com/o8u28n77vwcqh6x2q3pcvhqzd58rraohredo6
)

Unsubscribe from all emails ↗ (
https://400c164b.unsubscribe.convertkit-mail2.com/o8u28n77vwcqh6x2q3pcvhqzd58rraohredo6
)

Send mail to 600 1st Ave, Ste 330 PMB 92768, Seattle, WA
98104-2246.

Was this forwarded to you? Subscribe here (
https://400c164b.click.convertkit-mail2.com/o8u28n77vwcqh6x2q3pcvhqzd58rraohredo6/g3hnh5hmgx8rdnfr/aHR0cHM6Ly9jcmVhdG9yc2NpZW5jZS5jb20vc3Vic2NyaWJl
).
