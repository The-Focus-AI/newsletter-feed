---
id: 19bbe6b3f73add10
newsletter: tyler-from-ui-dev
newsletter_name: "Tyler from ui.dev"
category: tech-ai
subject: "Bytes: Practice safe npx with Deno"
date: Wed, 14 Jan 2026 21:30:57 +0000 (UTC)
---

# Bytes: Practice safe npx with Deno

**From:** "Tyler from ui.dev" <tyler@ui.dev>
**Date:** Wed, 14 Jan 2026 21:30:57 +0000 (UTC)

---

Big news: ui.dev is merging with Fireship to create fireship.dev
(
https://click.kit-mail6.com/xmu7em63vwa6hpke25mb5h2q34zllfnhlemx/vqh3hmuomxg25rag/aHR0cHM6Ly9maXJlc2hpcC5kZXYv
) 🔥.

Jeff and I have talked about teaming up for years now, and we’re
excited to start making more content together across YouTube,
newsletters, and courses.

Bytes isn’t changing. I’ll still be writing it, and it’ll still
be the main place for me to work through my childhood trauma in
meme form. The only difference now is that it will come from
tyler@fireship.dev (
https://click.kit-mail6.com/xmu7em63vwa6hpke25mb5h2q34zllfnhlemx/m2h7h6u32gekr6fm/bWFpbHRvOnR5bGVyQGZpcmVzaGlwLmRldg==
).

bytes.dev, react.gg, and query.gg will continue to live on their
own landing pages, but the ui.dev brand has officially been
sunset and folded into fireship.dev (I will remember you…)

If you’re a ui.dev course subscriber, you’ll get a separate email
later today (or probably tomorrow at this point), but the TL;DR
is you now get all the Fireship PRO content too, for the same
price.

Really excited to show you what we’re working on and as always,
thanks for reading ❤️

Today’s issue: Pretending to like Zig, pretending to have
hobbies, and pretending to have strong opinions about garbage
collection.

Welcome to #454 (
https://click.kit-mail6.com/xmu7em63vwa6hpke25mb5h2q34zllfnhlemx/e0hph0u7mp49xrt8/aHR0cHM6Ly9ieXRlcy5kZXYvYXJjaGl2ZXMvNDU0
).

--------------
The Main Thing
--------------

When the intern asks me how I know this random npm package is
safe

Practice safe npx with Deno
---------------------------

Like much of the npm ecosystem, npx has always felt a little
sketchy from a security perspective. But at this point, most of
us have gotten very good at ignoring that quiet voice in our head
as we type new commands and hope for the best.

But Ryan Dahl & friends aren’t most developers. That’s why Deno
2.6 (
https://click.kit-mail6.com/xmu7em63vwa6hpke25mb5h2q34zllfnhlemx/7qh7h2u9dkzvgxhz/aHR0cHM6Ly9kZW5vLmNvbS9ibG9nL3YyLjY=
) shipped with dx – a new way to run package binaries from npm
and JSR without installing them globally.

Isn’t that just what npx does? Yes, but under the hood it’s safer
and more opinionated. dx asks you before downloading packages,
then prompts you again before running lifecycle scripts. And it
keeps execution inside Deno’s permission system instead of
blindly trusting arbitrary third-party code at runtime.

Everything else is the same as npx, but that small pause before
execution is the point.

By design, dx only runs package binaries (not local files), which
keeps it focused on the same use case as npx, instead of trying
to become a generic escape hatch. It defaults to npm packages,
but pairs naturally with Deno’s JSR registry too. And while it
runs with full permissions by default, all of those permissions
are explicitly surfaced instead of just assumed.

Bottom Line: dx is like when my wife asks me, “are you sure you
want to do this,” every time I try to complete the 72-ounce Steak
Challenge (
https://click.kit-mail6.com/xmu7em63vwa6hpke25mb5h2q34zllfnhlemx/owhkhwuwxko3zeiv/aHR0cHM6Ly9iaWd0ZXhhbi5jb20vcGFnZXMvNzItb3otc3RlYWs=
) at The Big Texan Steak Ranch. She’s not really changing my
workflow, but she’s giving me a chance to reconsider my choices.

Hopefully Deno developers will actually listen to dx though.

(
https://click.kit-mail6.com/xmu7em63vwa6hpke25mb5h2q34zllfnhlemx/z2hgh7ue54w9ggfp/aHR0cHM6Ly9mYWNlYm9vay5jb20vc2hhcmVyL3NoYXJlci5waHA_dT1odHRwcyUzQSUyRiUyRmJ5dGVzLmRldiUyRmFyY2hpdmVzJTJGNDU0
) (
https://click.kit-mail6.com/xmu7em63vwa6hpke25mb5h2q34zllfnhlemx/p8hehqu4r3x3kktq/aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL3NoYXJpbmcvc2hhcmUtb2Zmc2l0ZS8_dXJsPWh0dHBzJTNBJTJGJTJGYnl0ZXMuZGV2JTJGYXJjaGl2ZXMlMkY0NTQ=
) (
https://click.kit-mail6.com/xmu7em63vwa6hpke25mb5h2q34zllfnhlemx/x0hph3uekr3r8rc5/aHR0cHM6Ly90d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXQvP3RleHQ9V2h5JTIwZGlkJTIwJTQwZGVub19sYW5kJTIwYnVpbGQlMjBhJTIwbmV3JTIwYW5kJTIwaW1wcm92ZWQlMjB2ZXJzaW9uJTIwb2YlMjBucHglM0YlMjBMZXQlMjdzJTIwdGFrZSUyMGElMjBsb29rJnVybD1odHRwcyUzQSUyRiUyRmJ5dGVzLmRldiUyRmFyY2hpdmVzJTJGNDU0
) (
https://click.kit-mail6.com/xmu7em63vwa6hpke25mb5h2q34zllfnhlemx/6qhehoulxkokv5io/bWFpbHRvOj9ib2R5PVRob3VnaHQlMjB5b3UlMjdkJTIwbG92ZSUyMHRoaXMlMjB3ZWVrJTI3cyUyMEJ5dGVzJTBBLS0tJTBBV2h5JTIwZGlkJTIwJTQwZGVub19sYW5kJTIwYnVpbGQlMjBhJTIwbmV3JTIwYW5kJTIwaW1wcm92ZWQlMjB2ZXJzaW9uJTIwb2YlMjBucHglM0YlMjBMZXQlMjdzJTIwdGFrZSUyMGElMjBsb29rJTBBaHR0cHMlM0ElMkYlMkZieXRlcy5kZXYlMkZhcmNoaXZlcyUyRjQ1NCZzdWJqZWN0PVlvdSUyMGxpa2UlMjBjb3JuYnJlYWQlM0Y=
)

---------------------------
Our Friends (With Benefits)
---------------------------

Watching my users pay all my AI and cloud bills

Build apps without building infrastructure (
https://click.kit-mail6.com/xmu7em63vwa6hpke25mb5h2q34zllfnhlemx/kkhmh2unzdmdgetl/aHR0cHM6Ly9kZXZlbG9wZXIucHV0ZXIuY29tLw==
)
-----------------------------------------------------------------

Puter.js is a frontend-only JavaScript SDK that gives you
everything you’d normally duct-tape together with five services,
three dashboards, and a mild existential crisis.

* The Everything SDK™ – Access 500+ AI models, cloud storage,
databases, auth, networking, and more, all from a single JS SDK.
Just import and ship. No more juggling vendors.

* Actually serverless – Puter.js runs entirely in the frontend.
There’s no backend, no API keys, and no account required. Npm
install @heyputer/puter.js or use one of the starter templates to
start building (see quickstart guide (
https://click.kit-mail6.com/xmu7em63vwa6hpke25mb5h2q34zllfnhlemx/58hvh8ug3v7vpou6/aHR0cHM6Ly9kb2NzLnB1dGVyLmNvbS9nZXR0aW5nLXN0YXJ0ZWQv
)).

* User-Pays scaling – Your users cover their own AI and cloud
costs, so you as the developer don’t pay for anything.

Check it out for free (
https://click.kit-mail6.com/xmu7em63vwa6hpke25mb5h2q34zllfnhlemx/kkhmh2unzdmdgetl/aHR0cHM6Ly9kZXZlbG9wZXIucHV0ZXIuY29tLw==
) – there’s no billing and it’s simple to set up.

---------
Cool Bits
---------

* Cam Pederson took a ceramics class and wrote a cool article
about how code is clay (
https://click.kit-mail6.com/xmu7em63vwa6hpke25mb5h2q34zllfnhlemx/25h2h9u3lvdvrec3/aHR0cHM6Ly9jYW1wZWRlcnNlbi5jb20vY29kZS1pcy1jbGF5
). We love to see a man with hobbies.

* Astro 6.0 beta (
https://click.kit-mail6.com/xmu7em63vwa6hpke25mb5h2q34zllfnhlemx/qvh8h8ude7n7g6ul/aHR0cHM6Ly9hc3Ryby5idWlsZC9ibG9nL2FzdHJvLTYtYmV0YS8=
) just dropped yesterday with a redesigned dev server and more
reasons to regret using RSC for your company’s landing page.

* AppSignal gives you full observability without complexity (
https://click.kit-mail6.com/xmu7em63vwa6hpke25mb5h2q34zllfnhlemx/g3hnhwumgdpd7eur/aHR0cHM6Ly9zcnYuYnV5c2VsbGFkcy5jb20vYWRzL2xvbmcveC9UQ1JUUEVaUVRUVFRUVEhYSlI2Q0xUVFRUVFRHREM0UDI2VFRUVFRUS0RaNjRCVlRUVFRUVEVCRFZSV0lLV0RVVjdRRktPTEhLNzRNUDVERUNSSzZOSjRJUEo3VA==
). Your team gets logs, metrics, and traces in one simple UI
that’s easy to use. Try it for free. [sponsored]

* antirez warned against falling into the anti-AI hype (
https://click.kit-mail6.com/xmu7em63vwa6hpke25mb5h2q34zllfnhlemx/9qhzhdud4q9qkpf9/aHR0cHM6Ly9hbnRpcmV6LmNvbS9uZXdzLzE1OA==
), even if it’s fun to be a hater sometimes.

* Speaking of which, David Loker shared a report on how AI code
creates 1.7x more problems (
https://click.kit-mail6.com/xmu7em63vwa6hpke25mb5h2q34zllfnhlemx/n2hohquv28r8w6f6/aHR0cHM6Ly93d3cuY29kZXJhYmJpdC5haS9ibG9nL3N0YXRlLW9mLWFpLXZzLWh1bWFuLWNvZGUtZ2VuZXJhdGlvbi1yZXBvcnQ=
). But there’s good news too.

* Aapo Alasuutari wrote a completely non-contrarian article about
how garbage collection is contrarian (
https://click.kit-mail6.com/xmu7em63vwa6hpke25mb5h2q34zllfnhlemx/48hvh7umw5g5zgcx/aHR0cHM6Ly90cnlub3ZhLmRldi9ibG9nL2dhcmJhZ2UtY29sbGVjdGlvbi1pcy1jb250cmFyaWFu
).

* Only idiots write manual tests – modern engineering teams like
Notion, Dropbox and LaunchDarkly use Meticulous to maintain e2e
UI tests that cover every edge case (
https://click.kit-mail6.com/xmu7em63vwa6hpke25mb5h2q34zllfnhlemx/wnh2h6uqm5g598i7/aHR0cHM6Ly93d3cubWV0aWN1bG91cy5haS8_dXRtX2NhbXBhaWduPTI2cTEmdXRtX2NvbnRlbnQ9c2Vjb25kYXJ5JnV0bV9tZWRpdW09bmV3c2xldHRlciZ1dG1fc291cmNlPWJ5dGVz
) of your web app. [sponsored]

* Dave Rupert concluded his four-part blog series on
contrast-colour() with this playful focus rings explainer (
https://click.kit-mail6.com/xmu7em63vwa6hpke25mb5h2q34zllfnhlemx/reh8h9umk2x29ka2/aHR0cHM6Ly9kYXZlcnVwZXJ0LmNvbS8yMDI2LzAxL25lc3RlZC1jb250cmFzdC1jb2xvci1mb2N1cy1yaW5ncy8=
).

* Harrison Chase wrote a good post on why good observability is
crucial to understanding code written by AI agents (
https://click.kit-mail6.com/xmu7em63vwa6hpke25mb5h2q34zllfnhlemx/08hwhgu2nozo0vfl/aHR0cHM6Ly94LmNvbS9od2NoYXNlMTcvc3RhdHVzLzIwMTAwNDQ3NzkyMjUzMjk2ODg=
).

* Mike Cann made this video on how he spent 10 months making the
best Christmas lights display & simulator (
https://click.kit-mail6.com/xmu7em63vwa6hpke25mb5h2q34zllfnhlemx/8ghqh3uow090edfk/aHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g_dj1seld6WTc0Sk91SQ==
) using Convex. Now this is the kind of unhinged sponsored
content I can respect, especially if Mike was able to expense all
those lights. [sponsored]

* Addy Osmani gave his advice on navigating the next two years of
software engineering (
https://click.kit-mail6.com/xmu7em63vwa6hpke25mb5h2q34zllfnhlemx/vqh3hmuomxgx2rtg/aHR0cHM6Ly9hZGR5b3NtYW5pLmNvbS9ibG9nL25leHQtdHdvLXllYXJzLw==
) as a developer. Tip #1: Work at Google from 2010-2025.

* Karl Sguin explained why the Lightpanda team migrated their DOM
to Zig (
https://click.kit-mail6.com/xmu7em63vwa6hpke25mb5h2q34zllfnhlemx/l2heh6ulq0r059b6/aHR0cHM6Ly9saWdodHBhbmRhLmlvL2Jsb2cvcG9zdHMvbWlncmF0aW5nLW91ci1kb20tdG8temln
). But we all know the real reason is because they’re trying to
become friends with Jarred and get acquired by Anthropic.

Want us to say nice things
about your company?
--------------------------

Sponsor Bytes (
https://click.kit-mail6.com/xmu7em63vwa6hpke25mb5h2q34zllfnhlemx/dphehmued454zlcm/aHR0cHM6Ly9ieXRlcy5kZXYvYWR2ZXJ0aXNl
)
or share it (
https://click.kit-mail6.com/xmu7em63vwa6hpke25mb5h2q34zllfnhlemx/e0hph0u7mp4p9ru8/aHR0cHM6Ly9ieXRlcy5kZXYvc2hhcmU=
)
Built with ❤️ by ui.dev (
https://click.kit-mail6.com/xmu7em63vwa6hpke25mb5h2q34zllfnhlemx/7qh7h2u9dkzkvxsz/aHR0cHM6Ly91aS5kZXY=
)

50 W Broadway Ste 333 PMB 51647 Salt Lake City, Utah 84101

Unsubscribe from Bytes (
https://click.kit-mail6.com/xmu7em63vwa6hpke25mb5h2q34zllfnhlemx/owhkhwuwxkok3ebv/aHR0cHM6Ly9ieXRlcy5kZXYvdW5zdWJzY3JpYmU=
)

Unsubscribe (
https://unsubscribe.kit-mail6.com/xmu7em63vwa6hpke25mb5h2q34zllfnhlemx
)
