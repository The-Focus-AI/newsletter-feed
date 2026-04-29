---
id: 19dd0eb20c1a56d8
newsletter: tyler-from-fireship
newsletter_name: "Tyler from Fireship"
week: 18
subject: "Bytes: Smoking that Rspack"
date: Mon, 27 Apr 2026 21:49:22 +0000 (UTC)
---

# Bytes: Smoking that Rspack

**From:** Tyler from Fireship <tyler@ui.dev>
**Date:** Mon, 27 Apr 2026 21:49:22 +0000 (UTC)

---

Today’s issue: Evan You’s Eagle Scout project, async’s broken
promises, and an AI agent destroying all of a company’s
production data (again).

Welcome to #481 (
https://c5e21242.click.convertkit-mail.com/wvu4gnwoxvighk6dk0pi7hndqx6nei8hw5nv/9qhzhdudrzoq86f9/aHR0cHM6Ly9ieXRlcy5kZXYvYXJjaGl2ZXMvNDgx
).

--------------
The Main Thing
--------------

Me noticing webpack@4 in my lockfile

Smoking that Rspack
-------------------

Rspack 2.0 (
https://c5e21242.click.convertkit-mail.com/wvu4gnwoxvighk6dk0pi7hndqx6nei8hw5nv/3ohphdu3g4eo8rhr/aHR0cHM6Ly9yc3BhY2sucnMvYmxvZy9hbm5vdW5jaW5nLTItMA==
) shipped last week with a bold new vision to become more than
“just a faster webpack.”

And that’s an interesting shift for a project whose sole branding
for the past two years has been: “we are a faster webpack.”

But it makes sense. Rspack’s initial pitch was that its
Rust-based build tool would provide a 10x faster version of
webpack that was still compatible with the webpack API and
ecosystem. And since launching v1.0 in Aug 2024, they’ve
implemented all of webpack’s core capabilities and plugin APIs,
added modern features like incremental builds and persistent
cache, and seen their npm downloads grow from 100k to 5 million
per week.

So Rspack 2.0 is about finding new mountains to climb beyond
webpack-land, by introducing defaults, API design, and build
outputs that are “better aligned with modern JavaScript
development” and come with first-class support for agents.

Here’s what that looks like in this release:

* More perf upgrades. Builds are ~10% faster than v1.7 and ~2x
faster than 1.0. With persistent cache enabled, the SWC minimizer
now caches hits for another ~50% speedup, and memory usage drops
by 20%. And @rspack/dev-server went from 192 npm dependencies to
1.

* Grown-up ESM support. Rspack’s core packages are now pure ESM.
You also get proper import.meta handling, import defer support,
and a new modern-module output type for library builds that
produces output downstream tools can actually tree shake.

* Smarter tree shaking. CommonJS destructuring, inline dynamic
import() access, and Module Federation shared dependencies are
all properly analyzed and pruned now. There’s also experimental
support for the #__NO_SIDE_EFFECTS__ compiler annotation, so you
can mark functions as side-effect-free and let the bundler clean
up after you.

Bottom Line: Rspack has spent the last two years earning webpack
developers’ trust by not breaking anything. Now it’s using that
credibility to add new features and expand beyond the webpack
ecosystem into a more general JS toolchain with packages like
Rslib, Rsbuild and Rsdoctor.

And since the world cares less about webpack than ever, that’s
probably a smart move.

(
https://c5e21242.click.convertkit-mail.com/wvu4gnwoxvighk6dk0pi7hndqx6nei8hw5nv/n2hohquv06z845s6/aHR0cHM6Ly9mYWNlYm9vay5jb20vc2hhcmVyL3NoYXJlci5waHA_dT1odHRwcyUzQSUyRiUyRmJ5dGVzLmRldiUyRmFyY2hpdmVzJTJGNDgx
) (
https://c5e21242.click.convertkit-mail.com/wvu4gnwoxvighk6dk0pi7hndqx6nei8hw5nv/48hvh7um86453ntx/aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL3NoYXJpbmcvc2hhcmUtb2Zmc2l0ZS8_dXJsPWh0dHBzJTNBJTJGJTJGYnl0ZXMuZGV2JTJGYXJjaGl2ZXMlMkY0ODE=
) (
https://c5e21242.click.convertkit-mail.com/wvu4gnwoxvighk6dk0pi7hndqx6nei8hw5nv/wnh2h6uq6xe5dob7/aHR0cHM6Ly90d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXQvP3RleHQ9QnJlYWtpbmclMjBkb3duJTIwdGhlJTIwZnV0dXJlJTIwb2YlMjBSc3BhY2slMjBpbiUyMGElMjB3b3JsZCUyMHRoYXQlMjBjYXJlcyUyMGxlc3MlMjBhbmQlMjBsZXNzJTIwYWJvdXQlMjB3ZWJwYWNrJnVybD1odHRwcyUzQSUyRiUyRmJ5dGVzLmRldiUyRmFyY2hpdmVzJTJGNDgx
) (
https://c5e21242.click.convertkit-mail.com/wvu4gnwoxvighk6dk0pi7hndqx6nei8hw5nv/reh8h9umzwg2pqs2/bWFpbHRvOj9zdWJqZWN0PVlvdSUyMGxpa2UlMjBjb3JuYnJlYWQlM0YmYm9keT1UaG91Z2h0JTIweW91JTI3ZCUyMGxvdmUlMjB0aGlzJTIwd2VlayUyN3MlMjBCeXRlcyUwQS0tLSUwQUJyZWFraW5nJTIwZG93biUyMHRoZSUyMGZ1dHVyZSUyMG9mJTIwUnNwYWNrJTIwaW4lMjBhJTIwd29ybGQlMjB0aGF0JTIwY2FyZXMlMjBsZXNzJTIwYW5kJTIwbGVzcyUyMGFib3V0JTIwd2VicGFjayUwQWh0dHBzJTNBJTJGJTJGYnl0ZXMuZGV2JTJGYXJjaGl2ZXMlMkY0ODE=
)

---------------------------
Our Friends (With Benefits)
---------------------------

When it takes longer to test the code than to write the code

How to set up AI-powered QA for daily releases - free webinar (
https://c5e21242.click.convertkit-mail.com/wvu4gnwoxvighk6dk0pi7hndqx6nei8hw5nv/8ghqh3uonqm08ohk/aHR0cHM6Ly9hdHRlbmQucWF3b2xmLmNvbS9zZWUtaXQtaW4tYWN0aW9uLWFpLXBvd2VyZWQtcWEtZm9yLWRhaWx5LXJlbGVhc2VzL3JlZ2lzdHJhdGlvbj91dG1fc291cmNlPWJ5dGVzJnV0bV9tZWRpdW09bmV3c2xldHRlciZ1dG1fY2FtcGFpZ249QUNRX0FsbF9EZW1vX0NvbnZlcnNpb25zX19OZXdzbGV0dGVyQXVkaWVuY2VfLV9OZXdzbGV0dGVyX0RlbWluYXJfMjAyNjA0MjctTm9uZV9FeHBlcmltZW50LUZBTFNFJnV0bV90ZXJtPWhlYWRsaW5lLUhvd1RvU2V0VXBBSVBvd2VyZWRRQUZvckRhaWx5UmVsZWFzZXNGcmVlV2ViaW5hciZ1dG1fY29udGVudD1EZW1pbmFyX1JTVlBIZXJlU29Zb3VyVGVhbUNhblNoaXBDbGVhbmVyQ29kZUZhc3Rlcl9Ob25lX0hlYWRsaW5lJTNBSG93VG9TZXRVcEFJUG93ZXJlZFFBRm9yRGFpbHlSZWxlYXNlc0ZyZWVXZWJpbmFyX19fX05ld3NsZXR0ZXItUHJpbWFyeVBsYWNlbWVudF8yMDI2MDQyN192MV8=
)
-----------------------------------------------------------------

Your engineers are writing code and opening PRs faster than ever,
but none of it matters if your QA is still the bottleneck.

Join QA Wolf co-founder & CEO Jon Perl for a live webinar (
https://c5e21242.click.convertkit-mail.com/wvu4gnwoxvighk6dk0pi7hndqx6nei8hw5nv/vqh3hmuorezx6eug/aHR0cHM6Ly9hdHRlbmQucWF3b2xmLmNvbS9zZWUtaXQtaW4tYWN0aW9uLWFpLXBvd2VyZWQtcWEtZm9yLWRhaWx5LXJlbGVhc2VzL3JlZ2lzdHJhdGlvbj91dG1fc291cmNlPWJ5dGVzJnV0bV9tZWRpdW09bmV3c2xldHRlciZ1dG1fY2FtcGFpZ249QUNRX0FsbF9EZW1vX0NvbnZlcnNpb25zX19OZXdzbGV0dGVyQXVkaWVuY2VfLV9OZXdzbGV0dGVyX0RlbWluYXJfMjAyNjA0MjctTm9uZV9FeHBlcmltZW50LUZBTFNFJnV0bV90ZXJtPWJvZHktTGl2ZVdlYmluYXImdXRtX2NvbnRlbnQ9RGVtaW5hcl9SU1ZQSGVyZVNvWW91clRlYW1DYW5TaGlwQ2xlYW5lckNvZGVGYXN0ZXJfTm9uZV9IZWFkbGluZSUzQUhvd1RvU2V0VXBBSVBvd2VyZWRRQUZvckRhaWx5UmVsZWFzZXNGcmVlV2ViaW5hcl9fX19OZXdzbGV0dGVyLVByaW1hcnlQbGFjZW1lbnRfMjAyNjA0MjdfdjFf
) to see how QA Wolf’s AI-powered testing platform equips teams
for an AI-native SDLC.

You’ll see how QA Wolf:

* Autonomously maps your app’s workflows (on web and mobile)
* Generates deterministic, code-based tests
* Runs your full test suite in parallel in minutes

RSVP here (
https://c5e21242.click.convertkit-mail.com/wvu4gnwoxvighk6dk0pi7hndqx6nei8hw5nv/l2heh6ul7680prb6/aHR0cHM6Ly9hdHRlbmQucWF3b2xmLmNvbS9zZWUtaXQtaW4tYWN0aW9uLWFpLXBvd2VyZWQtcWEtZm9yLWRhaWx5LXJlbGVhc2VzL3JlZ2lzdHJhdGlvbj91dG1fc291cmNlPWJ5dGVzJnV0bV9tZWRpdW09bmV3c2xldHRlciZ1dG1fY2FtcGFpZ249QUNRX0FsbF9EZW1vX0NvbnZlcnNpb25zX19OZXdzbGV0dGVyQXVkaWVuY2VfLV9OZXdzbGV0dGVyX0RlbWluYXJfMjAyNjA0MjctTm9uZV9FeHBlcmltZW50LUZBTFNFJnV0bV90ZXJtPWN0YS1SU1ZQSGVyZSZ1dG1fY29udGVudD1EZW1pbmFyX1JTVlBIZXJlU29Zb3VyVGVhbUNhblNoaXBDbGVhbmVyQ29kZUZhc3Rlcl9Ob25lX0hlYWRsaW5lJTNBSG93VG9TZXRVcEFJUG93ZXJlZFFBRm9yRGFpbHlSZWxlYXNlc0ZyZWVXZWJpbmFyX19fX05ld3NsZXR0ZXItUHJpbWFyeVBsYWNlbWVudF8yMDI2MDQyN192MV8=
) - so your team can ship cleaner code, faster.

------------
Spot the Bug
------------

Sponsored by Depot (
https://c5e21242.click.convertkit-mail.com/wvu4gnwoxvighk6dk0pi7hndqx6nei8hw5nv/m2h7h6u3zmdgxwhm/aHR0cHM6Ly9mYW5kZi5jby80Y3NOT0Mz
)
-----------------------------------------------------------------

One of their engineers wrote about The end of push-wait-guess CI
(
https://c5e21242.click.convertkit-mail.com/wvu4gnwoxvighk6dk0pi7hndqx6nei8hw5nv/m2h7h6u3zmdgxwhm/aHR0cHM6Ly9mYW5kZi5jby80Y3NOT0Mz
) and how Depot lets you run workflows against local uncommitted
changes, inspect status and logs, and SSH directly into the
runner.

const petName = 'Leo' const placeholder = '{NAME}' const
reminderTemplate = '{NAME} is due for another visit. Please call
us so we can set up a new appointment. We look forward to seeing
you and {NAME} soon.' const reminder =
reminderTemplate.replace(placeholder, petName)

---------
Cool Bits
---------

* Deno just launched Fresh 2.3 (
https://c5e21242.click.convertkit-mail.com/wvu4gnwoxvighk6dk0pi7hndqx6nei8hw5nv/dphehmuen8l4xdhm/aHR0cHM6Ly9kZW5vLmNvbS9ibG9nL2ZyZXNoLTIuMw==
) with View Transitions and zero JavaScript by default (but for
real this time).

* Mat Marquis has been waiting 14 years to write this article
about the end of responsive images (
https://c5e21242.click.convertkit-mail.com/wvu4gnwoxvighk6dk0pi7hndqx6nei8hw5nv/e0hph0u7oq8pz6a8/aHR0cHM6Ly9waWNjYWxpbC5saS9ibG9nL3RoZS1lbmQtb2YtcmVzcG9uc2l2ZS1pbWFnZXMv
). I’ve been waiting 14 years to go back to the dentist, so I get
it.

* He helped React take over the web… and he just joined Expo.
Check out this blog post from Seth Webster about what he thinks
Expo will become (
https://c5e21242.click.convertkit-mail.com/wvu4gnwoxvighk6dk0pi7hndqx6nei8hw5nv/7qh7h2u95wrkelfz/aHR0cHM6Ly90cnkuZXhwby5kZXYvc2V0aA==
). [sponsored]

* Animata (
https://c5e21242.click.convertkit-mail.com/wvu4gnwoxvighk6dk0pi7hndqx6nei8hw5nv/owhkhwuwdg2kedsv/aHR0cHM6Ly9hbmltYXRhLmRlc2lnbi8=
) is a collection of 158+ animated React components you can copy
into any project.

* The VoidZero team wrote about how they made the Angular
compiler 20x faster using AI (
https://c5e21242.click.convertkit-mail.com/wvu4gnwoxvighk6dk0pi7hndqx6nei8hw5nv/z2hgh7uexpq4zvtp/aHR0cHM6Ly92b2lkemVyby5kZXYvcG9zdHMvb3hjLWFuZ3VsYXItY29tcGlsZXI=
). And apparently the whole thing was part of Evan You’s Eagle
Scout project.

* Slackbot demo (
https://c5e21242.click.convertkit-mail.com/wvu4gnwoxvighk6dk0pi7hndqx6nei8hw5nv/p8hehqu4ogn3ewhq/aHR0cHM6Ly9zbGFjay5jb20vZmVhdHVyZXMvc2xhY2tib3QvZGVtby1zbGFja2JvdA==
) - Meet the AI agent built right into Slack. Ask questions,
automate tasks, and get answers grounded in your team’s actual
context. No extra tools, no tab switching, no setup required.
[sponsored]

* Arkar Min Aung wrote a surprisingly interesting and interactive
article about compressing AI vectors to 2–4 bits per number
without losing accuracy (
https://c5e21242.click.convertkit-mail.com/wvu4gnwoxvighk6dk0pi7hndqx6nei8hw5nv/x0hph3ue095rm5s5/aHR0cHM6Ly9hcmthdW5nLmdpdGh1Yi5pby9pbnRlcmFjdGl2ZS10dXJib3F1YW50Lw==
).

* Josh Segall wrote a good breakdown of what async promised vs
what it delivered (
https://c5e21242.click.convertkit-mail.com/wvu4gnwoxvighk6dk0pi7hndqx6nei8hw5nv/6qhehoulenmk49bo/aHR0cHM6Ly9jYXVzYWxpdHkuYmxvZy9lc3NheXMvd2hhdC1hc3luYy1wcm9taXNlZC8=
). But maybe the real async was the friends we made along the
way.

* Build dynamic forms that work your way. With SurveyJS, you get
a fully customizable JavaScript form builder (
https://c5e21242.click.convertkit-mail.com/wvu4gnwoxvighk6dk0pi7hndqx6nei8hw5nv/e0hph0u7oq8pzdc8/aHR0cHM6Ly9zdXJ2ZXlqcy5pby8_dXRtX3NvdXJjZT1ieXRlcyZ1dG1fbWVkaXVtPWVtYWls
) that integrates seamlessly with any backend—no vendor lock-in
or usage limits. [sponsored]

* The Chrome team released The Prompt API (
https://c5e21242.click.convertkit-mail.com/wvu4gnwoxvighk6dk0pi7hndqx6nei8hw5nv/7qh7h2u95wrkeeuz/aHR0cHM6Ly9kZXZlbG9wZXIuY2hyb21lLmNvbS9kb2NzL2FpL3Byb21wdC1hcGk=
), which lets you send natural language requests to Gemini Nano
in the browser. Another daily reminder that I should’ve bought
more Google stock.

* muffin wrote about the woes of sanitizing SVGs (
https://c5e21242.click.convertkit-mail.com/wvu4gnwoxvighk6dk0pi7hndqx6nei8hw5nv/owhkhwuwdg2keztv/aHR0cHM6Ly9tdWZmaW4uaW5rL2Jsb2cvc2NyYXRjaC1zdmctc2FuaXRpemF0aW9uLw==
).

* Jer Crane wrote a Twitter article about how an AI agent just
destroyed our production data (
https://c5e21242.click.convertkit-mail.com/wvu4gnwoxvighk6dk0pi7hndqx6nei8hw5nv/z2hgh7uexpq4g9ip/aHR0cHM6Ly94LmNvbS9saWZlb2ZfamVyL3N0YXR1cy8yMDQ4MTAzNDcxMDE5NDM0MjQ4
). Dario is willing to concede that software engineers will maybe
have jobs for another two weeks now.

----------------------
Spot the Bug: Solution
----------------------

Sponsored by Depot (
https://c5e21242.click.convertkit-mail.com/wvu4gnwoxvighk6dk0pi7hndqx6nei8hw5nv/m2h7h6u3zmdgxwhm/aHR0cHM6Ly9mYW5kZi5jby80Y3NOT0Mz
)
-----------------------------------------------------------------

const petName = 'Leo' const placeholder = '{NAME}' const
reminderTemplate = '{NAME} is due for another visit. Please call
us so we can set up a new appointment. We look forward to seeing
you and {NAME} soon.' const reminder =
reminderTemplate.replaceAll(placeholder, petName)

Want us to say nice things
about your company?
--------------------------

Sponsor Bytes (
https://c5e21242.click.convertkit-mail.com/wvu4gnwoxvighk6dk0pi7hndqx6nei8hw5nv/p8hehqu4ogn3v3aq/aHR0cHM6Ly9ieXRlcy5kZXYvYWR2ZXJ0aXNl
)
or share it (
https://c5e21242.click.convertkit-mail.com/wvu4gnwoxvighk6dk0pi7hndqx6nei8hw5nv/x0hph3ue095rgpt5/aHR0cHM6Ly9ieXRlcy5kZXYvc2hhcmU=
)
Built with ❤️ by Fireship (
https://c5e21242.click.convertkit-mail.com/wvu4gnwoxvighk6dk0pi7hndqx6nei8hw5nv/6qhehoulenmkqwso/aHR0cHM6Ly9maXJlc2hpcC5kZXY=
)

50 W Broadway Ste 333 PMB 51647 Salt Lake City, Utah 84101

Unsubscribe from Bytes (
https://c5e21242.click.convertkit-mail.com/wvu4gnwoxvighk6dk0pi7hndqx6nei8hw5nv/58hvh8ug2krvezh6/aHR0cHM6Ly9ieXRlcy5kZXYvdW5zdWJzY3JpYmU=
)

Unsubscribe (
https://c5e21242.unsubscribe.convertkit-mail.com/wvu4gnwoxvighk6dk0pi7hndqx6nei8hw5nv
)
