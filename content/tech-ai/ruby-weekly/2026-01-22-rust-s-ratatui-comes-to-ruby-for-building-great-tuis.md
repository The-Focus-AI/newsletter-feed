---
id: 19be6f72996e5aa9
newsletter: ruby-weekly
newsletter_name: "Ruby Weekly"
category: tech-ai
subject: "Rust's Ratatui comes to Ruby for building great TUIs"
date: Thu, 22 Jan 2026 18:28:35 +0000 (UTC)
source_url: "https://rubyweekly.com/issues/784"
---

# Rust's Ratatui comes to Ruby for building great TUIs

**From:** Ruby Weekly <rw@peterc.org>
**Date:** Thu, 22 Jan 2026 18:28:35 +0000 (UTC)
**Source:** [View original](https://rubyweekly.com/issues/784)

---

Plus a comparison of background job systems from a 2026
perspective, and a quick Pickaxe update. |

#784 — January 22, 2026

Read on the Web ( https://rubyweekly.com/issues/784 )

Together with

( https://go.fastruby.io/csw )

------------------
RUBY WEEKLY
------------------

* RATATUIRUBY: A FRESH WAY TO BUILD TERMINAL UIS IN RUBY 
( https://www.ratatui-ruby.dev/ ) — Ratatui ( https://ratatui.rs/ )
is a popular Rust library for building fast, modern terminal user
interfaces, and RatatuiRuby brings it to Ruby too. Despite being
in beta/pre-release, this is an incredibly solid effort and I had
fun playing with it (above).
  -- Kerrick Long

💡 This is an active moment for Ruby TUIs with Marco Roth's
efforts in bringing Charm's powerful TUI tooling 
( https://marcoroth.dev/posts/glamorous-christmas ) from the Go
world into Ruby too.

* STUCK ON RAILS 4.2? NEED ESTIMATES FOR BUDGET APPROVAL? 
( https://go.fastruby.io/csw ) — Stop postponing your upgrade. Get
a thorough action plan and estimates backed by 50,000 dev/hours
of historical data. CISOs and CFOs love our Rails upgrade
roadmaps. Don’t have the budget for a Roadmap 
( https://go.fastruby.io/csw )? Get our AI-enhanced Rails roadmap 
( https://go.fastruby.io/tsg ) for $0.
  -- The Rails Upgrade Roadmap (SPONSOR)

* CONSIDERING GOODJOB, SOLID QUEUE, SIDEKIQ, AND ACTIVE JOB IN
2026 
( https://island94.org/2026/01/goodjob-solid-queue-sidekiq-active-job-in-2026 )
 — The Ruby ecosystem is lucky to have many options for running
background jobs. Here, Ben, the maintainer of GoodJob 
( https://github.com/bensheldon/good_job ), shares his genuine
thoughts on choosing between the options, built upon his years of
Rails experience. He finds merits in each option, depending on
the specific scenario.
  -- Ben Sheldon

⚡️ IN BRIEF:

* 📕 The 6th edition of Programming Ruby is now in beta. 
( https://pragprog.com/titles/ruby6/programming-ruby-4-6th-edition/ )
 The Pickaxe book, as it is commonly known, is set for final
publication in March and covers Ruby 4.0 in depth.

* Saroj Maharjan, one of the coordinators of Ruby's participation
in Google Summer of Code, wrote in asking us to share the news
that the Ruby GSoC team is looking for ideas 
( https://github.com/rubygsoc/rubygsoc/wiki/Ideas-List-%282026%29 )
for projects across the Ruby ecosystem that could join in and
accept contributions from GSoC 2026 participants.

* Eileen Uchitelle ran into an odd bug in Bundler 4.0.1 
( https://github.com/ruby/rubygems/pull/9213 ) when using gems
across multiple sources. The fix, in Bundler 4.0.4, may have
caused another related issue, though. 
( https://github.com/ruby/rubygems/issues/9258 ) One to keep an eye
out for.

* 🇦🇹 RubyConf AT ( https://rubyconf.at/ ) is taking place in
Vienna, Austria this May 29-31. Ticket sales open tomorrow.

🧶 * BUILDING A RUBY PATTERN GENERATOR FOR A CROCHET CIRCLE 
( https://hashrocket.com/blog/posts/crafting-code-building-a-ruby-pattern-generator-for-a-crochet-circle )
 — A delightfully crafty use case for Ruby and a great example
of using code to enhance a hobby.
  -- Mary Lee

* RUBY 4.0'S NEW RUBY::BOX FOR IN-PROCESS ISOLATION 
( https://prateekcodes.com/ruby-4-introduces-ruby-box-for-in-process-isolation-part-1/ )
 — A quick practical look at Ruby 4.0’s highly experimental
‘Box’ ( https://docs.ruby-lang.org/en/4.0/Ruby/Box.html )
mechanism for loading libraries into isolated execution contexts.
  -- Prateek Choudhary

* THE #1 TIME-SERIES DATABASE BUILT ON POSTGRES 
( https://www.tigerdata.com/timescaledb?utm_source=cooperpress&utm_medium=referral&utm_campaign=ruby-weekly-newsletter )
 — TimescaleDB extends Postgres with hypertables, 95%
compression, and continuous aggregates. Start building for free 
( https://www.tigerdata.com/timescaledb?utm_source=cooperpress&utm_medium=referral&utm_campaign=ruby-weekly-newsletter )
.
  -- Tiger Data (creators of TimescaleDB) (SPONSOR)

📄 Beware the grpc Gem and Ruby 4.0 
( https://ryanbigg.com/2026/01/beware-grpc-gem-and-ruby-40 ) – If
you're seeing very slow bundle times with Ruby 4.0, this might
be why. Ryan Bigg

📄 Building Smart Retry Strategies in Rails with Error-Aware
Delays 
( https://codewithrails.com/blog/rails-smart-retry-strategies/ )
Code with Rails

📄 How Active Storage Variants Work to Transform Images 
( https://www.writesoftwarewell.com/transform-images-with-activestorage-variants-rails/ )
  Akshay Khot

📄 Getting Started With Vite on Rails 
( https://www.fastruby.io/blog/getting-started-with-vite-on-rails.html )
  Julio Lucero

📄 How I Read a Pull Request 
( https://kevinjmurphy.com/posts/how-i-read-a-pr/ )  Kevin Murphy

------------------
🛠 CODE & TOOLS
------------------

* PUMA 7.2: THE FAST MULTI-THREADED HTTP SERVER FOR RUBY APPS 
( https://github.com/puma/puma/releases/tag/v7.2.0 ) — You can now
set auto worker count via the DSL (workers :auto) and HTTP
parsing has been made 17% faster! 
( https://github.com/puma/puma/pull/3825 ) Plus the usual bugfixes
and refactoring.
  -- Nate Berkopec

* FROM PROMPT ENGINEERING TO LLM COST MONITORING. WHAT CAN WE
DO FOR YOU? 
( https://sinaptia.dev/services/intelligent-rails-applications?utm_source=cooperpress&utm_medium=newsletter&utm_campaign=rubyweekly-2026q1&utm_content=sponsored )
 — We identify what's worth building with AI, test prompts
against your data, optimize for cost, and ship to production.
Let's talk 
( https://sinaptia.dev/contact-us?utm_source=cooperpress&utm_medium=newsletter&utm_campaign=rubyweekly-2026q1&utm_content=sponsored )
.
  -- SINAPTIA (SPONSOR)

* POSSE PARTY: 'QUIT SOCIAL MEDIA BY POSTING MORE' 
( https://posseparty.com/ ) — A source-available (GitHub repo 
( https://github.com/searlsco/posse_party )) Ruby app enabling you
to “Publish (on your) Own Site, Syndicate Elsewhere” (a.k.a.
POSSE ( https://indieweb.org/POSSE )) which is a concept for
blogging on your own site and having the content pushed out to
social networks for you.
  -- Justin Searls

* REDIS::OBJECTS 2.0: MAP REDIS TYPES DIRECTLY TO RUBY OBJECTS
( https://github.com/nateware/redis-objects ) — An idiomatically
Ruby interface to the Redis data structure server that avoids the
usual mess of ORMs (since ORMs don’t naturally fit with the
lighter Redis approach).
  -- Nate Wiger

* 🤖 RubyLLM 1.11.0 ( https://github.com/crmne/ruby_llm ) –
Unified API for working with AI models and services. Say hello to
xAI/Grok in this version.

* Sidekiq::Throttled v2.1.0 
( https://github.com/ixti/sidekiq-throttled ) – Concurrency and
rate-limit throttling for Sidekiq. Changelog. 
( https://github.com/ixti/sidekiq-throttled/blob/main/CHANGES.md#210---2026-01-20 )

* Rage 1.20.0 
( https://github.com/rage-rb/rage/releases/tag/v1.20.0 ) – Fast web
framework for API-first apps that's compatible with Rails.

* Shoryuken 7.0 ( https://github.com/ruby-shoryuken/shoryuken ) –
Efficient thread-based message processor for Amazon SQS.

* 🎨 Color 2.2 ( https://github.com/halostatue/color ) – RGB,
CMYK, HSL, and other color space manipulation library.

* Listen v3.10 ( https://github.com/guard/listen ) – Listens to
file modifications and notifies you about changes.

* 🤖 MCP Ruby SDK v0.6 
( https://github.com/modelcontextprotocol/ruby-sdk ) – Official
Ruby SDK for the Model Context Protocol.

* resque-scheduler v5.0.0 
( https://github.com/resque/resque-scheduler ) – Job scheduling
system built on top of Resque.

* Byebug v13.0 ( https://github.com/deivid-rodriguez/byebug ) –
Long-standing feature-rich debugger for Ruby.

* Phlex 2.4.0 ( https://github.com/yippee-fun/phlex ) – Build
object-oriented web views in pure Ruby.

* Faker v3.6.0 
( https://github.com/faker-ruby/faker/releases/tag/v3.6.0 ) –
Library for generating realistic fake data.

📰 Classifieds

💸 Overpaying for hosting? Judoscale saves you 33% or your money
back. Autoscale your web and workers 
( https://judoscale.com/ruby-weekly-33?utm_source=ruby-weekly&utm_medium=newsletter&utm_campaign=ruby-weekly-33&utm_content=overpaying-for-hosting )
 on any platform in minutes.

♦️ Build Ruby apps that never lose state, even when things fail.
Learn by building an app from scratch in a free Temporal Ruby
SDK course 
( https://learn.temporal.io/getting_started/ruby/hello_world_in_ruby/?utm_source=newsletter&utm_medium=sponsorship&utm_campaign=newsletter-2026-01-22-ruby-weekly&utm_content=ruby-weekly-build-app-ruby )
.

------------------
📢 ELSEWHERE IN THE ECOSYSTEM
------------------

Some other interesting stories in the broader landscape:

* 🤖 Whether you agree or not, Ryan Dahl, the original creator of
both Node.js and Deno, drew much attention with a provocative
post on X ( https://x.com/rough__sea/status/2013280952370573666 )
where he shared a thought on the changing role of software
engineers in an agentic world, namely: "the era of humans writing
code is over." Meanwhile, though, DHH says AI isn't ready to
replace junior developers yet. 
( https://www.finalroundai.com/blog/ai-can-not-replace-junior-programmers )

* 🐘 If you're a Postgres user, you might enjoy this article on
alternatives to 'soft deleting' 
( https://atlas9.dev/blog/soft-delete.html ) where rather than use
a boolean or datetime flag, you could use a trigger to move a row
to an archive table or capture deleted rows from the WAL
for archival.

* 🔎 The VS Code team has explained how they implemented a new,
fast client-side docs search system 
( https://code.visualstudio.com/blogs/2026/01/15/docfind ) for the
VS Code site using WebAssembly. You can use their docfind engine
( https://github.com/microsoft/docfind ) yourself too, and
there's a live demo ( https://microsoft.github.io/docfind/ )
showing off its speed on an index of 50,000 articles.

* A fun read about the techniques involved in creating an ASCII
text renderer for graphics. 
( https://alexharri.com/blog/ascii-rendering )

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
