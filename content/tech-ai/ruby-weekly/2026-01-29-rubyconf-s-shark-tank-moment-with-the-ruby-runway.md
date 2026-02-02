---
id: 19c0a5c2963a85f3
newsletter: ruby-weekly
newsletter_name: "Ruby Weekly"
category: tech-ai
subject: "RubyConf’s 'Shark Tank' moment with The Ruby Runway"
date: Thu, 29 Jan 2026 15:25:37 +0000 (UTC)
source_url: "https://rubyweekly.com/issues/785"
---

# RubyConf’s 'Shark Tank' moment with The Ruby Runway

**From:** Ruby Weekly <rw@peterc.org>
**Date:** Thu, 29 Jan 2026 15:25:37 +0000 (UTC)
**Source:** [View original](https://rubyweekly.com/issues/785)

---

Plus the `rails stats` for 37signals' Basecamp, and how to scan
your Gemfile for vulnerable dependencies. |

#785 — January 29, 2026

Read on the Web ( https://rubyweekly.com/issues/785 )

Together with

( https://link.testdouble.com/5c122d )

------------------
RUBY WEEKLY
------------------

* THE RUBY RUNWAY: A RUBYCONF PITCH COMPETITION 
( https://rubycentral.teamtailor.com/jobs/6963879-rubyconf-pitch-competition-the-ruby-runway )
 — RubyConf has launched a competition for Ruby-powered startups
to take the stage at RubyConf and compete for various cash prizes
and awards. You need to represent a business using Ruby at its
core, and not have raised more than $500k so far. The submission
deadline is February 28 — and if you can't enter, RubyConf is
looking for reviewers and judges 
( https://docs.google.com/forms/d/e/1FAIpQLSeNzOxWPT9a_le_DXwVBqn8Xg4IeMMAP4nHjuwfgFWIwsWrdg/viewform )
 for the entries.
  -- Ruby Central

* ANYONE CAN CODE: SOFTWARE IS HAVING ITS RATATOUILLE MOMENT 
( https://link.testdouble.com/5c122d ) — AI tools aren't replacing
developers—they're being used to reframe who gets to build. Dave
Mosher on why hoarding technical ability is the wrong response,
and what quality really means when anyone can cook.
  -- Test Double (SPONSOR)

* OPTIMISTIC UI IN RAILS WITH OPTIMISM AND INERTIA 
( https://evilmartians.com/chronicles/optimistic-ui-in-rails-with-optimism-and-inertia )
 — Your users want expect snappy UIs and implementing a
so-called ‘optimistic’ UI can help provide that experience, even
while things are still working in the background. This post shows
off using Inertia to make implementing an optimistic UI in a
Rails app trivial in a mock Kanban board app called Izzy
(inspired by Fizzy ( https://www.fizzy.do/ ), we suspect!)
  -- Svyatoslav Kryukov (Evil Martians)

💡 We somehow missed that Fizzy ( https://www.fizzy.do/ ),
37signals’ newest app that launched last month, is also, like
Campfire, an open-source-ish project, with a Rails codebase 
( https://github.com/basecamp/fizzy ) that you can install yourself
or read to see 37signals’ in-house Rails style.

⚡️ IN BRIEF:

* 🔧 Ruby 4.0 is now available in the Microsoft Store 
( https://rubyinstaller.org/2026/01/27/ruby-4.0-available-in-microsoft-store.html )
, thanks to the efforts of the RubyInstaller for Windows 
( https://rubyinstaller.org/ ) project.

* Want to chat with other Rubyists old-school forum style? The
Ruby Users Forum ( https://www.rubyforum.org/ ) has
just launched.

* 🤖 Did you know there's a Ruby AI podcast? 
( https://www.therubyaipodcast.com/2388930 ) It's not AI generated,
but hosted by three Rubyists and usually featuring a guest, such
as this recent episode with Evan Phoenix. 
( https://www.therubyaipodcast.com/2388930/episodes/18457774-real-vs-fake-ai-with-evan-phoenix )

* Charles Nutter has been adding the ability to use a WebAssembly
build of Ruby's Prism parser to JRuby 
( https://github.com/jruby/jruby/pull/9184 ) as a way to maintain
Ruby language compatibility without a native library requirement.

* 🇹🇭 RubyConf Thailand 2026 ( https://rubyconfth.com/ ) takes
place this weekend (January 31 – February 1) in Bangkok. A few
tickets remain.

* 🇫🇮 tiny ruby conf ( https://helsinkiruby.fi/tinyruby/ ) is
headed back to Helsinki this October 1.

* RUBY::BOX: RETHINKING CODE RELOADING WITH ISOLATED NAMESPACES
( https://rubyelders.com/writings/2026-01-ruby-box-reload.html )
— A rethinking of hot reloading a Ruby app that doesn’t fight
Ruby’s global object space (thanks to 4.0’s experimental Box
feature). It only supports simple Rack apps right now, but the
author has hopes it could evolve.
  -- Josef Šimánek

* WHAT FINALLY POSTING RAILS UI TO HACKER NEWS TAUGHT ME 
( https://railsui.com/blog/what-finally-posting-rails-ui-to-hacker-news-taught-me )
 — Practical advice on what to think about when sharing a
project (in this case, a new commercial suite of components and
themes for Rails ( https://railsui.com/ )) in a popular space.
  -- Andy Leverenz

* RAILS UPGRADE PLANS BACKED BY 60,000+ DEV/HOURS, NOT AI
HALLUCINATIONS ( https://go.fastruby.io/real-human ) — Real
humans, real experience. Give your CFO a budget they can trust. A
thorough action plan delivered in 2-3 weeks.
  -- The Rails Upgrade Roadmap (SPONSOR)

📄 What 'Shoulda Matchers' Is Actually Doing For You 
( https://thoughtbot.com/blog/what-shoulda-matchers-is-actually-doing-for-you )
 – What code like it { is_expected.to ... } is actually doing
behind the scenes. Matheus Sales

📄 A Simple Tailwind CSS Setup for Jekyll 
( https://andycroll.com/ruby/simple-tailwind-css-4-setup-for-jekyll/ )
 – How to set up Tailwind with Jekyll using the jekyll-tailwind
gem. Andy Croll

📄 Rendering Seismic Observation Data with Ruby 
( https://rubystacknews.com/2026/01/27/ruby-rendering-seismic-observation-data/ )
  Giménez Silva Germán Alberto

📄 How I Actually Use AI to Write Rails Code 
( https://mariochavez.io/desarrollo/2026/01/26/how-i-actually-use-ai-to-write-ruby-on-rails-code/ )
  Mario Alberto Chávez

------------------
🛠 CODE & TOOLS
------------------

* BUNDLER-AUDIT: VULNERABILITY DETECTION FOR DEPENDENCIES 
( https://github.com/rubysec/bundler-audit ) — A tool that goes
through your Gemfile.lock and looks for vulnerable gems (using
the Ruby Advisory Database 
( https://github.com/rubysec/ruby-advisory-db )), insecure gem
sources, and provides advisory information. It even works offline
and can output JSON for CI integration.
  -- RubySec

* RUBY CLASSIFIER 2.2: TEXT CLASSIFICATION MADE SIMPLE 
( https://rubyclassifier.com/ ) — A very long-standing project gets
a major update with new classification options, better
performance, and some new guides 
( https://rubyclassifier.com/docs/guides/ ) to get you started with
k-Nearest, TF-IDF, LSI, and Bayesian classification.
  -- Lucas Carlson et al.

* RAILS DEPLOYMENTS THAT SCALE — CLOUD 66 FOR RAILS 
( https://www.cloud66.com/products/rails/ ) — Used by today's best
Rails companies, with asset pipeline, console access, ActionCable
& zero-downtime.
  -- Cloud 66 (SPONSOR)

* MUDIS: FAST, THREAD-SAFE, IN-MEMORY, SHARDED LRU CACHE 
( https://github.com/kiebor81/mudis ) — A pure Ruby in-memory cache
(with a snapshot-based ‘soft persistence’ option). Useful for
apps where a full Redis install is overkill for doing a little
caching. Can integrate with Rails and Hanami.
  -- Kieran Borsden

🤖 * CHAOSTOTHERESCUE: LLM-POWERED METHOD GENERATION AND RAILS
ERROR RESCUE SUGGESTIONS 
( https://github.com/codenamev/chaos_to_the_rescue ) — “This
experiment explores how much uncertainty Ruby code can tolerate
before it stops feeling deterministic.” Please don't put this
into prod! 😅
  -- Valentino Stoll

* XSV 1.2: FAST, LIGHTWEIGHT XLSX (EXCEL) PARSER LIBRARY 
( https://github.com/martijn/xsv ) — A spreadsheet parsing library
that sticks to the basics: “It strives to be minimal in the sense
that it provides nothing a CSV reader wouldn’t.”
  -- Martijn Storck

* Devise 5.0 
( https://github.com/heartcombo/devise/blob/v5.0.0/CHANGELOG.md#500rc---2025-12-31 )
 – Flexible authentication for Rails. A breaking release due to
removing deprecations, dropping support for old versions of Ruby
and Rails, and introducing Rails 8 support.

* ActiveType v2.8.0 ( https://github.com/makandra/active_type ) –
Rails presenter and form model library providing
ActiveRecord-like features for non-database-backed or
extended models.

* RubyCritic 5.0 ( https://github.com/whitesmith/rubycritic ) –
Get quality reports for Ruby code through static analysis.

* AcceptLanguage ( https://github.com/cyril/accept_language.rb )
– Accept-Language HTTP header parsing library.

* Grape 3.1 ( https://github.com/ruby-grape/grape ) – Opinionated
framework for building REST-like APIs.

* Dalli 4.2 ( https://github.com/petergoldstein/dalli ) –
High-performance memcached client.

* Redlock 2.1 ( https://github.com/leandromoreira/redlock-rb ) –
Redis-based distributed locking.

* ⭐ RubyGems 4.0.5 and Bundler 4.0.5 
( https://blog.rubygems.org/2026/01/29/4.0.5-released.html )

* ⭐ Rails 8.1.2 
( https://rubyonrails.org/2026/1/22/rails-version-8-1-2-has-been-released )

📰 Classifieds

🐡 Bloated jobs killing your worker memory? The “dedicated worker”
pattern might help. (It worked for Justin. 
( https://judoscale.com/blog/priced-out-of-heroku?utm_source=ruby-weekly&utm_medium=newsletter&utm_campaign=content&utm_content=it-worked-for-justin )
)

🔬 Shipping AI code? Undercover ( https://undercover-ci.com/ )
catches untested methods in your PRs before you merge. Coverage
percentages won't. Free for open source.

------------------
📢 ELSEWHERE IN THE ECOSYSTEM
------------------

Some other interesting stories in the broader landscape:

* Over on X, DHH posted the rails stats output 
( https://x.com/dhh/status/2016449600257720742 ) (see above) for
37signals' flagship Basecamp app, which is now entering
development for Basecamp 5. He says: "So that's now a 12(!)
year-old code base, and we're able to run the entire test suite
in just 45 seconds on a local 16-core AMD Linux box."

* Julia Evans (the original creator 
( https://jvns.ca/blog/2016/06/12/a-weird-system-call-process-vm-readv/ )
 of rbspy ( https://github.com/rbspy/rbspy )) wrote up her notes
on starting to use Django 
( https://jvns.ca/blog/2026/01/27/some-notes-on-starting-to-use-django/ )
 and has some reflections on how it compares to Rails. She found
Django's explicitness easier to return to after months away, but
really appreciates both the ORM and the auto-generated
admin interface.

* OpenAI shares the story of how it's scaled Postgres to serve
800+ million users. 
( https://openai.com/index/scaling-postgresql/ ) The interesting
technical point is they're only using a single primary (coupled
with many read replicas) to do so.

* A well-known JavaScript developer explained how he ported 100k
lines of TypeScript to Rust 
( https://blog.vjeux.com/2026/analysis/porting-100k-lines-from-typescript-to-rust-using-claude-code-in-a-month.html )
 using Claude Code. The languages aren't important; it's really
about the insights in nudging agentic tools to get through
such tasks.

* 🕹️ The creator of Three.js (known as mrdoob) has created a
Three.js-powered port of 1996's Quake 
( https://mrdoob.github.io/three-quake/ ) – here's the source. 
( https://github.com/mrdoob/three-quake ) You can learn more about
this project in this X thread. 
( https://x.com/mrdoob/status/2015076521531355583 )

------------------

Curated by Peter Cooper ( https://twitter.com/cooperx86 )
and Glenn Goodrich ( https://twitter.com/ruprict ) .
Published by Cooperpress ( https://cooperpress.com/ ).

Change your email 
( https://rubyweekly.com/edit_subscription/5e63e66db7 ) or
Stop getting this newsletter. 
( https://rubyweekly.com/leave/5e63e66db7 )

© Cooper Press Ltd · Fairfield Enterprise Centre, Louth,
LN11 0LS, United Kingdom

Other weekly newsletters we publish include Postgres Weekly
( https://postgresweekly.com/ ), React Status 
( https://react.statuscode.com/ ), Frontend Focus 
( https://frontendfoc.us/ ), and JavaScript Weekly 
( https://javascriptweekly.com/ ).
