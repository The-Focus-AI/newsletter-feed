---
id: 19c06862e4ed8633
newsletter: tyler-from-fireship
newsletter_name: "Tyler from Fireship"
category: tech-ai
subject: "Bytes: Firefox is cooking again"
date: Wed, 28 Jan 2026 21:32:36 +0000 (UTC)
---

# Bytes: Firefox is cooking again

**From:** Tyler from Fireship <tyler@ui.dev>
**Date:** Wed, 28 Jan 2026 21:32:36 +0000 (UTC)

---

Today’s issue: The Alexander Supertramp of git, the Baby Driver
of accessibility, and the AI-induced psychosis of Rust.

Welcome to #458 (
https://c5e21242.click.convertkit-mail.com/92uk9nlrwmtnh6457p7c9hzoxm933bwhgx86/25h2h9u3llm8qlt3/aHR0cHM6Ly9ieXRlcy5kZXYvYXJjaGl2ZXMvNDU4
).

--------------
The Main Thing
--------------

All those unused AI features getting ready to crash my browser
again

Firefox is cooking again
------------------------

Mozilla shipped Firefox 147 (
https://c5e21242.click.convertkit-mail.com/92uk9nlrwmtnh6457p7c9hzoxm933bwhgx86/qvh8h8udeek4lzul/aHR0cHM6Ly93d3cuZmlyZWZveC5jb20vZW4tVVMvZmlyZWZveC8xNDcuMC9yZWxlYXNlbm90ZXMv
) two weeks ago, and it’s easily one of their biggest
web-platform releases in years.

It’s particularly refreshing after last month, when Mozilla’s CEO
surprised everyone by announcing (
https://c5e21242.click.convertkit-mail.com/92uk9nlrwmtnh6457p7c9hzoxm933bwhgx86/g3hnhwumggql09ur/aHR0cHM6Ly9ibG9nLm1vemlsbGEub3JnL2VuL21vemlsbGEvbGVhZGVyc2hpcC9tb3ppbGxhcy1uZXh0LWNoYXB0ZXItYW50aG9ueS1lbnpvci1kZW1lby1uZXctY2VvLw==
) his threat vision for Firefox to evolve into “a modern AI
browser that will support a portfolio of new and safe software
additions.”

Turns out approximately zero Firefox users asked for this. But
thankfully, old-fashioned cyberbullying still works in our modern
times. So after taking a lot of flak from their most passionate
users, Firefox backtracked and promised (
https://c5e21242.click.convertkit-mail.com/92uk9nlrwmtnh6457p7c9hzoxm933bwhgx86/9qhzhdud4456erf9/aHR0cHM6Ly9tYXN0b2Rvbi5zb2NpYWwvQGZpcmVmb3h3ZWJkZXZzLzExNTc0MDUwMDM3MzY3Nzc4Mg==
) to build an “AI kill switch” that would let users disable all
AI features entirely.

And one month later, they shipped Firefox 147 with a bunch of
long-awaited platform features and zero mention of AI.
Coincidence? You tell me. Here are the three biggest upgrades:

* Navigation API – A modern successor to the history API that
lets apps initiate, intercept, and manage navigations without
relying on fragile popstate hacks. Great news for frameworks,
routers, and SPAs.

* CSS Anchor Positioning – This means all modern browsers now
support tethering elements like tooltips, popovers, and menus to
anchor elements, using only CSS.

* View Transition upgrades – New selectors like
:active-view-transition-type, better devtools visibility, and
APIs to introspect active transitions. It’s another big step
towards smooth, app-like UX on the web without relying on
framework magic.

Bottom Line: I know that most of this work was underway long
before the “AI browser” fallout, but it’s nice to at least
pretend that a company listened to its users, slowed down the AI
hype train, and shipped a bunch of features that developers
actually want.

Hopefully other software companies follow Firefox’s lead.

(
https://c5e21242.click.convertkit-mail.com/92uk9nlrwmtnh6457p7c9hzoxm933bwhgx86/3ohphdu3xxp2klbr/aHR0cHM6Ly9mYWNlYm9vay5jb20vc2hhcmVyL3NoYXJlci5waHA_dT1odHRwcyUzQSUyRiUyRmJ5dGVzLmRldiUyRmFyY2hpdmVzJTJGNDU4
) (
https://c5e21242.click.convertkit-mail.com/92uk9nlrwmtnh6457p7c9hzoxm933bwhgx86/n2hohquv227xl9f6/aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL3NoYXJpbmcvc2hhcmUtb2Zmc2l0ZS8_dXJsPWh0dHBzJTNBJTJGJTJGYnl0ZXMuZGV2JTJGYXJjaGl2ZXMlMkY0NTg=
) (
https://c5e21242.click.convertkit-mail.com/92uk9nlrwmtnh6457p7c9hzoxm933bwhgx86/48hvh7umwwxp74cx/aHR0cHM6Ly90d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXQvP3RleHQ9QnJlYWtpbmclMjBkb3duJTIwdGhlJTIwYmlnZ2VzdCUyMEZpcmVmb3glMjByZWxlYXNlJTIwb2YlMjB0aGUlMjBwYXN0JTIwZml2ZSUyMHllYXJzJnVybD1odHRwcyUzQSUyRiUyRmJ5dGVzLmRldiUyRmFyY2hpdmVzJTJGNDU4
) (
https://c5e21242.click.convertkit-mail.com/92uk9nlrwmtnh6457p7c9hzoxm933bwhgx86/wnh2h6uqmm0kl0a7/bWFpbHRvOj9ib2R5PVRob3VnaHQlMjB5b3UlMjdkJTIwbG92ZSUyMHRoaXMlMjB3ZWVrJTI3cyUyMEJ5dGVzJTBBLS0tJTBBQnJlYWtpbmclMjBkb3duJTIwdGhlJTIwYmlnZ2VzdCUyMEZpcmVmb3glMjByZWxlYXNlJTIwb2YlMjB0aGUlMjBwYXN0JTIwZml2ZSUyMHllYXJzJTBBaHR0cHMlM0ElMkYlMkZieXRlcy5kZXYlMkZhcmNoaXZlcyUyRjQ1OCZzdWJqZWN0PVlvdSUyMGxpa2UlMjBjb3JuYnJlYWQlM0Y=
)

---------------------------
Our Friends (With Benefits)
---------------------------

Engineering leads evaluating another AI tool

How to choose AI testing tools for large teams - free webinar (
https://c5e21242.click.convertkit-mail.com/92uk9nlrwmtnh6457p7c9hzoxm933bwhgx86/reh8h9umkk63ooa2/aHR0cHM6Ly9hdHRlbmQucWF3b2xmLmNvbS9haS10b29scy1mb3ItdGVzdGluZy1ob3ctdG8tY2hvb3NlLXRoZS1yaWdodC1hcHByb2FjaC1mb3ItcWEvcmVnaXN0cmF0aW9uP3V0bV9jYW1wYWlnbj1BQ1FfQWxsX0V2ZW50JTIwUmVnaXN0cmF0aW9uc19fTmV3c2xldHRlckF1ZGllbmNlXy1fTmV3c2xldHRlcl9BSVRvb2xzRm9yVGVzdGluZ18yMDI2MDEyOC1Ob25lX0V4cGVyaW1lbnQtRkFMU0UmdXRtX2NvbnRlbnQ9QUlUb29sc0ZvclRlc3RpbmdfUlNWUEhlcmVGb3JUaGVXb3Jrc2hvcF9Ob25lX0hlYWRsaW5lJTNBSG93VG9DaG9vc2VBSVRlc3RpbmdUT29sc0ZvckxhcmdlVGVhbXNGcmVlV2ViaW5hcl9fX19OZXdzbGV0dGVyLVByaW1hcnlQbGFjZW1lbnRfMjAyNjAxMjhfdjFfJnV0bV9tZWRpdW09bmV3c2xldHRlciZ1dG1fc291cmNlPWJ5dGVzJnV0bV90ZXJtPWhlYWRsaW5lLUhvd1RvQ2hvb3NlQUlUZXN0aW5nVG9vbHNGb3JMYXJnZVRlYW1zRnJlZVdlYmluYXI=
)
-----------------------------------------------------------------

If you’re a technical leader, how can you tell which AI tools are
actually helpful and which ones are vaporware?

It’s not easy. That’s why QA Wolf’s Staff Engineering Lead, Yurij
Mikhalevich is hosting this free workshop (
https://c5e21242.click.convertkit-mail.com/92uk9nlrwmtnh6457p7c9hzoxm933bwhgx86/08hwhgu2nnl9p4bl/aHR0cHM6Ly9hdHRlbmQucWF3b2xmLmNvbS9haS10b29scy1mb3ItdGVzdGluZy1ob3ctdG8tY2hvb3NlLXRoZS1yaWdodC1hcHByb2FjaC1mb3ItcWEvcmVnaXN0cmF0aW9uP3V0bV9jYW1wYWlnbj1BQ1FfQWxsX0V2ZW50JTIwUmVnaXN0cmF0aW9uc19fTmV3c2xldHRlckF1ZGllbmNlXy1fTmV3c2xldHRlcl9BSVRvb2xzRm9yVGVzdGluZ18yMDI2MDEyOC1Ob25lX0V4cGVyaW1lbnQtRkFMU0UmdXRtX2NvbnRlbnQ9QUlUb29sc0ZvclRlc3RpbmdfUlNWUEhlcmVGb3JUaGVXb3Jrc2hvcF9Ob25lX0hlYWRsaW5lJTNBSG93VG9DaG9vc2VBSVRlc3RpbmdUT29sc0ZvckxhcmdlVGVhbXNGcmVlV2ViaW5hcl9fX19OZXdzbGV0dGVyLVByaW1hcnlQbGFjZW1lbnRfMjAyNjAxMjhfdjFfJnV0bV9tZWRpdW09bmV3c2xldHRlciZ1dG1fc291cmNlPWJ5dGVzJnV0bV90ZXJtPWJvZHktRnJlZVdvcmtzaG9w
) breaking down the full landscape of AI testing tools.

You’ll learn:

* The 4 big categories of AI testing tools
* The real tradeoffs for coverage, reliability, and maintenance
* A practical framework you can use to evaluate AI tools for your
team

RSVP here for the workshop (
https://c5e21242.click.convertkit-mail.com/92uk9nlrwmtnh6457p7c9hzoxm933bwhgx86/8ghqh3uowwr274ck/aHR0cHM6Ly9hdHRlbmQucWF3b2xmLmNvbS9haS10b29scy1mb3ItdGVzdGluZy1ob3ctdG8tY2hvb3NlLXRoZS1yaWdodC1hcHByb2FjaC1mb3ItcWEvcmVnaXN0cmF0aW9uP3V0bV9jYW1wYWlnbj1BQ1FfQWxsX0V2ZW50JTIwUmVnaXN0cmF0aW9uc19fTmV3c2xldHRlckF1ZGllbmNlXy1fTmV3c2xldHRlcl9BSVRvb2xzRm9yVGVzdGluZ18yMDI2MDEyOC1Ob25lX0V4cGVyaW1lbnQtRkFMU0UmdXRtX2NvbnRlbnQ9QUlUb29sc0ZvclRlc3RpbmdfUlNWUEhlcmVGb3JUaGVXb3Jrc2hvcF9Ob25lX0hlYWRsaW5lJTNBSG93VG9DaG9vc2VBSVRlc3RpbmdUT29sc0ZvckxhcmdlVGVhbXNGcmVlV2ViaW5hcl9fX19OZXdzbGV0dGVyLVByaW1hcnlQbGFjZW1lbnRfMjAyNjAxMjhfdjFfJnV0bV9tZWRpdW09bmV3c2xldHRlciZ1dG1fc291cmNlPWJ5dGVzJnV0bV90ZXJtPWN0YS1SU1ZQSGVyZUZvclRoZVdvcmtzaG9w
).

------------
Spot the Bug
------------

Sponsored by Sentry Seer (
https://c5e21242.click.convertkit-mail.com/92uk9nlrwmtnh6457p7c9hzoxm933bwhgx86/vqh3hmuommwv62sg/aHR0cHM6Ly9zZW50cnkuaW8vcHJvZHVjdC9zZWVyLz91dG1fY2FtcGFpZ249c2Vlci1meTI3cTEtc2VlcmxhdW5jaCZ1dG1fY29udGVudD1uZXdzbGV0dGVyLXByb2R1Y3QtbGVhcm5tb3JlJnV0bV9tZWRpdW09cGFpZC1jb21tdW5pdHkmdXRtX3NvdXJjZT1ieXRlcw==
)
-----------------------------------------------------------------

It’s an AI debugger that uses all of Sentry’s context (
https://c5e21242.click.convertkit-mail.com/92uk9nlrwmtnh6457p7c9hzoxm933bwhgx86/vqh3hmuommwv62sg/aHR0cHM6Ly9zZW50cnkuaW8vcHJvZHVjdC9zZWVyLz91dG1fY2FtcGFpZ249c2Vlci1meTI3cTEtc2VlcmxhdW5jaCZ1dG1fY29udGVudD1uZXdzbGV0dGVyLXByb2R1Y3QtbGVhcm5tb3JlJnV0bV9tZWRpdW09cGFpZC1jb21tdW5pdHkmdXRtX3NvdXJjZT1ieXRlcw==
) to identify root causes in production and fix what you missed.

function safeUpdate(obj, key, value) { if
(!obj.hasOwnProperty(key)) {
obj.key = value; } } const user = { name: "Alice", age: 30 };
safeUpdate(user, "country", "USA");

---------
Cool Bits
---------

* Vercel just disclosed multiple high-severity vulnerabilities in
RSC (
https://c5e21242.click.convertkit-mail.com/92uk9nlrwmtnh6457p7c9hzoxm933bwhgx86/l2heh6ulqqxnp0a6/aHR0cHM6Ly92ZXJjZWwuY29tL2NoYW5nZWxvZy9zdW1tYXJ5LW9mLWN2ZS0yMDI2LTIzODY0
) that require immediate upgrades. These should not be confused
with the RSC CVEs from last month, or the RSC CVEs that will be
discovered next month.

* Puter.js (
https://c5e21242.click.convertkit-mail.com/92uk9nlrwmtnh6457p7c9hzoxm933bwhgx86/m2h7h6u3224qxqbm/aHR0cHM6Ly9kZXZlbG9wZXIucHV0ZXIuY29tLw==
) is a single JavaScript library that gives you serverless auth,
cloud storage, LLM integration, and more – no backend, no config,
and no stress required. [sponsored]

* Lead Yarn maintainer, Maël Nison shared this Yarn 6 Preview (
https://c5e21242.click.convertkit-mail.com/92uk9nlrwmtnh6457p7c9hzoxm933bwhgx86/dphehmueddpoxkum/aHR0cHM6Ly95YXJuNi5uZXRsaWZ5LmFwcC9ibG9nLzIwMjYtMDEtMjgteWFybi02LXByZXZpZXcv
). Yes, they rewrote it in Rust, which means you need to either
take a drink or put on your animal ears.

* The Turbopack team wrote about how they build faster by
building less (
https://c5e21242.click.convertkit-mail.com/92uk9nlrwmtnh6457p7c9hzoxm933bwhgx86/e0hph0u7mmrlzwi8/aHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvdHVyYm9wYWNrLWluY3JlbWVudGFsLWNvbXB1dGF0aW9u
), thanks to their “very fine-grained caching architecture.”

* Expo SDK 55 beta (
https://c5e21242.click.convertkit-mail.com/92uk9nlrwmtnh6457p7c9hzoxm933bwhgx86/7qh7h2u9ddn6emiz/aHR0cHM6Ly9leHBvLmRldi9jaGFuZ2Vsb2cvc2RrLTU1LWJldGE_dXRtX2NhbXBhaWduPTM1NjYzNjQzLVNESyUyMDU1JnV0bV9jb250ZW50PVNES181NV9jaGFuZ2Vsb2cmdXRtX21lZGl1bT1uZXdzbGV0dGVyJnV0bV9zb3VyY2U9Ynl0ZXM=
) just shipped without support for React Native’s legacy
architecture for the first time 👏. It also adds opt-in Hermes v1
support and AI agent skills for building, deploying, and
debugging complex Expo apps. [sponsored]

* Vjeux wrote about porting 100k lines from TypeScript to Rust in
a month using Claude Code (
https://c5e21242.click.convertkit-mail.com/92uk9nlrwmtnh6457p7c9hzoxm933bwhgx86/owhkhwuwxxq6e8uv/aHR0cHM6Ly9ibG9nLnZqZXV4LmNvbS8yMDI2L2FuYWx5c2lzL3BvcnRpbmctMTAway1saW5lcy1mcm9tLXR5cGVzY3JpcHQtdG8tcnVzdC11c2luZy1jbGF1ZGUtY29kZS1pbi1hLW1vbnRoLmh0bWw=
). Porting things to Rust is my favorite form of AI-induced
psychosis.

* Node.js 25.5 (
https://c5e21242.click.convertkit-mail.com/92uk9nlrwmtnh6457p7c9hzoxm933bwhgx86/z2hgh7ue55lkzocp/aHR0cHM6Ly9ub2RlanMub3JnL2VuL2Jsb2cvcmVsZWFzZS92MjUuNS4w
) blesses us all with a new --build-sea command line flag that
simplifies the process of building Single Executable Apps (SEA)
in Node.

* Our very own Lynn Fisher wrote this case study on the 2025
refresh of her personal site (
https://c5e21242.click.convertkit-mail.com/92uk9nlrwmtnh6457p7c9hzoxm933bwhgx86/x0hph3uekkqpmea5/aHR0cHM6Ly9seW5uYW5kdG9uaWMuY29tL3Rob3VnaHRzL2VudHJpZXMvY2FzZS1zdHVkeS0yMDI1LXJlZnJlc2gv
), just in case you need some proof that not every website on the
internet has been turned into AI slop.

* Only idiots write manual tests – modern engineering teams like
Notion, Dropbox and LaunchDarkly use Meticulous to maintain e2e
UI tests that cover every edge case (
https://c5e21242.click.convertkit-mail.com/92uk9nlrwmtnh6457p7c9hzoxm933bwhgx86/e0hph0u7mmrlz4h8/aHR0cHM6Ly93d3cubWV0aWN1bG91cy5haS8_dXRtX2NhbXBhaWduPTI2cTEmdXRtX2NvbnRlbnQ9c2Vjb25kYXJ5JnV0bV9tZWRpdW09bmV3c2xldHRlciZ1dG1fc291cmNlPWJ5dGVz
) of your web app. [sponsored]

* Laura Kalbag just shared her book Accessibility for Everyone (
https://c5e21242.click.convertkit-mail.com/92uk9nlrwmtnh6457p7c9hzoxm933bwhgx86/7qh7h2u9ddn6e3hz/aHR0cHM6Ly9hY2Nlc3NpYmlsaXR5Zm9yZXZlcnlvbmUuc2l0ZS8=
) for free online. Like Baby Driver it first came out back in
2017, is highly underrated, and still holds up great.

* Nuxt 4.3 (
https://c5e21242.click.convertkit-mail.com/92uk9nlrwmtnh6457p7c9hzoxm933bwhgx86/owhkhwuwxxq6exbv/aHR0cHM6Ly9udXh0LmNvbS9ibG9nL3Y0LTM=
) comes with perf upgrades and new features for layouts, caching,
and DX.

* TonyStr made his own git (
https://c5e21242.click.convertkit-mail.com/92uk9nlrwmtnh6457p7c9hzoxm933bwhgx86/z2hgh7ue55lkznfp/aHR0cHM6Ly90b255c3RyLm5ldC9ibG9nL2dpdF9pbW1pdGF0aW9u
) and finally got to experience the bliss of living off the grid,
wild and free from the shackles of modernity, like a modern day
Alexander Supertramp. Just don’t go to Alaska.

----------------------
Spot the Bug: Solution
----------------------

Sponsored by Sentry Seer (
https://c5e21242.click.convertkit-mail.com/92uk9nlrwmtnh6457p7c9hzoxm933bwhgx86/vqh3hmuommwv62sg/aHR0cHM6Ly9zZW50cnkuaW8vcHJvZHVjdC9zZWVyLz91dG1fY2FtcGFpZ249c2Vlci1meTI3cTEtc2VlcmxhdW5jaCZ1dG1fY29udGVudD1uZXdzbGV0dGVyLXByb2R1Y3QtbGVhcm5tb3JlJnV0bV9tZWRpdW09cGFpZC1jb21tdW5pdHkmdXRtX3NvdXJjZT1ieXRlcw==
)
-----------------------------------------------------------------

This one was for the beginners.

function safeUpdate(obj, key, value) { if
(!obj.hasOwnProperty(key)) {
obj.key = value; } }

Our bug is that we’re adding a literal key property to our
object.

console.log(user.key) // "USA"

In JavaScript, if you want to use a variable as the key of an
object, you need to use bracket notation instead of dot notation.

function safeUpdate(obj, key, value) { if
(!obj.hasOwnProperty(key)) {
obj[key] = value; } }

Want us to say nice things
about your company?
--------------------------

Sponsor Bytes (
https://c5e21242.click.convertkit-mail.com/92uk9nlrwmtnh6457p7c9hzoxm933bwhgx86/p8hehqu4rrq2e6uq/aHR0cHM6Ly9ieXRlcy5kZXYvYWR2ZXJ0aXNl
)
or share it (
https://c5e21242.click.convertkit-mail.com/92uk9nlrwmtnh6457p7c9hzoxm933bwhgx86/x0hph3uekkqpm0c5/aHR0cHM6Ly9ieXRlcy5kZXYvc2hhcmU=
)
Built with ❤️ by Fireship (
https://c5e21242.click.convertkit-mail.com/92uk9nlrwmtnh6457p7c9hzoxm933bwhgx86/6qhehoulxx954gco/aHR0cHM6Ly9maXJlc2hpcC5kZXY=
)

50 W Broadway Ste 333 PMB 51647 Salt Lake City, Utah 84101

Unsubscribe from Bytes (
https://c5e21242.click.convertkit-mail.com/92uk9nlrwmtnh6457p7c9hzoxm933bwhgx86/58hvh8ug336nwri6/aHR0cHM6Ly9ieXRlcy5kZXYvdW5zdWJzY3JpYmU=
)

Unsubscribe (
https://c5e21242.unsubscribe.convertkit-mail.com/92uk9nlrwmtnh6457p7c9hzoxm933bwhgx86
)
