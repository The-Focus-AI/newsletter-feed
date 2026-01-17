---
id: 19bc2dd161ab1bf0
newsletter: ruby-weekly
newsletter_name: "Ruby Weekly"
category: tech-ai
subject: "TruffleRuby 33, Ruby 4.0.1, and Ruby 3.2.10"
date: Thu, 15 Jan 2026 18:13:46 +0000 (UTC)
source_url: "https://rubyweekly.com/issues/783"
---

# TruffleRuby 33, Ruby 4.0.1, and Ruby 3.2.10

**From:** Ruby Weekly <rw@peterc.org>
**Date:** Thu, 15 Jan 2026 18:13:46 +0000 (UTC)
**Source:** [View original](https://rubyweekly.com/issues/783)

---

Plus drawing cities with Ruby, how Ruby is an efficient language
for LLMs, and more. |

#783 — January 15, 2026

Read on the Web ( https://rubyweekly.com/issues/783 )

Together with

( https://www.appsignal.com/?utm_source=newsletter&utm_medium=paid&utm_campaign=rubyweekly&utm_term=1-15&utm_content=primary )

------------------
RUBY WEEKLY
------------------

* TRUFFLERUBY 33: THE HIGH PERFORMANCE, GRAALVM-BASED RUBY
IMPLEMENTATION 
( https://truffleruby.dev/blog/truffleruby-33-is-released ) —
Healthy languages have multiple implementations, and TruffleRuby,
originally created by the late Chris Seaton 
( https://chrisseaton.com/ ), is celebrating its 13th birthday with
both a major release and new web site ( https://truffleruby.dev/ ) . v33 boasts it's ‘the fastest and easiest Ruby to install' – a
claim I just successfully tested.
  -- The TruffleRuby Team

* START FIXING BUGS FASTER WITH APPSIGNAL 
( https://www.appsignal.com/?utm_source=newsletter&utm_medium=paid&utm_campaign=rubyweekly&utm_term=1-15&utm_content=primary )
 — AppSignal gives Ruby developers the tools they need to fix
bugs, track performance issues, and ship with confidence. Easy to
set up, a joy to use, and built for teams that care about their
code. Start your free trial today, no credit card required 
( https://www.appsignal.com/?utm_source=newsletter&utm_medium=paid&utm_campaign=rubyweekly&utm_term=1-15&utm_content=primary )
.
  -- AppSignal (SPONSOR)

* RUBY 4.0.1 RELEASED 
( https://www.ruby-lang.org/en/news/2026/01/13/ruby-4-0-1-released/ )
 — A minor update to Ruby 4.0, including a fix to a regression
in Kernel#sleep, as well as a few smaller bugfixes. 
( https://github.com/ruby/ruby/releases/tag/v4.0.1 ) Future
releases (4.0.2, 4.0.3, etc.) are expected every two months from
here on.
  -- Takashi Kokubun

💡 Ruby 3.2.10 
( https://www.ruby-lang.org/en/news/2026/01/14/ruby-3-2-10-released/ )
 has also been released applying CVE fixes and resolving some
OpenSSL 3.6.0 related issues. 3.2 will go 'end of life' in March,
however, so you're recommended to upgrade to Ruby 3.3/3.4 soon.

⚡️ IN BRIEF:

* Ruby Central released a substantial 'annual report' 
( https://rubycentral.org/support/ ) covering its work across
2022-2024. It goes into a lot of depth and paints a good picture
of what Ruby Central actually does.

* Charles Nutter reports 
( https://bsky.app/profile/headius.bsky.social/post/3mcdp7cufzy2r )
JRuby 10.1 is 'just a few dozen tests away' from being Ruby 4.0
compatible – fantastic news!

* 🇯🇵 RubyKaigi 2026 ( https://rubykaigi.org/2026/ ), taking place
in Japan this April 22-24, has extended its call for papers 
( https://cfp.rubykaigi.org/events/2026 ) by a week – it closes
this Sunday.

* PORTABLE MRUBY BINARIES WITH COSMOPOLITAN 
( https://katafrakt.me/2026/01/04/mruby-cosmo-compilation/ ) —
Let’s say you want to use mruby as a way to create standalone
executables and have them run across numerous systems: mruby 3.5
( https://github.com/mruby/mruby/blob/master/NEWS.md )’s new
Cosmopolitan Libc support comes to the rescue!
  -- Paweł Świątkowski

🌐 * RUBY CAN DRAW CITIES NOW 
( https://rubystacknews.com/2026/01/09/ruby-can-draw-cities-now/ )
— An initial look at using libgd-gis 
( https://github.com/ggerman/libgd-gis ), a libgd-powered way to
render maps and GeoJSON layers from Ruby.
  -- Giménez Silva Germán Alberto

* BUILD A FEATURE FLAG SYSTEM IN 50 LINES WITH RAILS.APP.CREDS
( https://codewithrails.com/blog/rails-feature-flags-credentials/ )  — Feature flags that are version-controlled, easy to override
in development, and don’t require another service to manage.
  -- Code with Rails

* 🤖 PLAN YOUR RAILS UPGRADE WITH FASTRUBY’S AI-POWERED TOOL
IN MINUTES ( https://go.fastruby.io/mq8 ) — In a few clicks, know
what it takes to upgrade your Rails app. Low on time? Ship your
upgrade with FastRuby’s Bonsai team ( https://go.fastruby.io/ugu ) .
  -- FastRuby.io  | AI-Powered Roadmap (SPONSOR)

📄 Find the Last Matching Element with rfind 
( https://andycroll.com/ruby/find-the-last-matching-element-with-rfind/ )
 – One of Ruby 4.0’s new features. Andy Croll

📄 Nested Forms Without accepts_nested_attributes_for in Rails 
( https://railsdesigner.com/nested-forms-without-accepts-nested-attributes/ )
  Rails Designer

📄 Monitoring LLM Usage in Rails with RubyLLM::Monitoring 
( https://sinaptia.dev/posts/monitoring-llm-usage-in-rails-with-rubyllm-monitoring )
  Patricio Mac Adden

📄 Building a File Deduplication System with Active Storage 
( https://codewithrails.com/blog/activestorage-deduplication/ )
Code with Rails

------------------
🛠 CODE & TOOLS
------------------

* PROTOCOL::URL A NEW WAY TO PARSE, MANIPULATE AND CONSTRUCT
URLS 
( https://socketry.github.io/protocol-url/guides/getting-started/index.html )
 — A modern clean, standards-compliant API for working with URLs
according to RFC 3986. Tidy and well documented.
  -- Samuel Williams

🖼️ * FASTRESIZE: A HIGH PERFORMANCE IMAGE RESIZING LIBRARY 
( https://github.com/tranhuucanh/fast_resize ) — With the boast of
being ‘the fastest image resizing library on the planet’, I had
to give this a try. It supports resizing JPEG, PNG, WebP and BMP
in a variety of ways and worked well in my own testing.
  -- Tran Huu Canh

* YOUR 90% TEST COVERAGE IS HIDING UNTESTED METHODS 
( https://undercover-ci.com ) — Shipping AI code? Undercover warns
you which methods lack tests, right in your Ruby PRs. Free for
open source.
  -- Undercover CI (SPONSOR)

🤖 * RUBYLLM 1.10.0: THE CROSS-PROVIDER LLM API FOR RUBY 
( https://github.com/crmne/ruby_llm/releases/tag/1.10.0 ) — A
significant release for the popular cross-provider LLM API that
brings first-class extended thinking across providers, Ruby 4.0
support, full Gemini 3 thinking-signature support, and more.
  -- Carmine Paolino et al.

* HTTPLOG 1.8.0: LOG OUTGOING HTTP REQUESTS IN RUBY 
( https://github.com/trusche/httplog ) — Handy for debugging API
integrations or just to get a feel for what’s going on under the
hood. Hooks into HTTP, HTTParty, Net::HTTP, OpenURI and others.
  -- Thilo Rusche

* ⏩ Ruby Next v1.2 ( https://github.com/ruby-next/ruby-next ) –
Transpiler and polyfills to use modern Ruby syntax and APIs on
older versions and alternative implementations. Now with more
Ruby 4.0 feature support.

* rbspy v0.42.0 ( https://github.com/rbspy/rbspy ) – Sampling
profiler for Ruby processes that can be used without restarting
them. Adds support for this week's Ruby releases.

* Typelizer 0.7 ( https://github.com/skryukov/typelizer ) –
Automatically generates TypeScript interfaces from Ruby
serializers for type consistency.

* The Git Gem v4.3 ( https://github.com/ruby-git/ruby-git ) –
Ruby interface for interacting with Git repos using the
command line.

* Haml 7.2 ( https://github.com/haml/haml ) – The long-standing
HTML Abstraction Markup Language template engine.

* Thor 1.5 ( https://github.com/rails/thor ) – Simple tool for
building self-documenting command line utilities.

* RQRCode v3.2 ( https://github.com/whomwah/rqrcode ) – Library
for creating and rendering QR codes.

* Resque 3.0 ( https://github.com/resque/resque ) – The
Redis-backed background job library.

* RubyGems 4.0.4 
( https://blog.rubygems.org/2026/01/15/4.0.4-released.html )

* RDoc 7.1 ( https://github.com/ruby/rdoc/releases/tag/v7.1.0 )

📰 Classifieds

💰We’ll save you 33% on your hosting bill – or YOU DON’T PAY. Try
the ONLY autoscaler 
( https://judoscale.com/ruby-weekly-33?utm_source=ruby-weekly&utm_medium=newsletter&utm_campaign=ruby-weekly-33 )
 with a savings guarantee.

🚀 Auth0 for AI Agents is the complete auth solution for building
AI agents more securely. Start building today 
( https://auth0.com/signup?onboard_app=auth_for_aa&ocid=701KZ000000cXXxYAM_aPA4z0000008OZeGAM?utm_source=cooperpress&utm_campaign=amer_namer_usa_all_ciam_dev_dg_plg_auth0_native_cooperpress_native_aud_jan_2026_placements_utm2&utm_medium=cpc&utm_id=aNKWR000002m8zp4AA )
.

------------------
📢 ELSEWHERE IN THE ECOSYSTEM
------------------

Some other interesting stories in the broader landscape:

* Martin Alderson looked into which programming languages are
most 'token efficient' 
( https://martinalderson.com/posts/which-programming-languages-are-most-token-efficient/ )
 when used with LLMs (above). Ruby came in third place, barely
pipped by Clojure and Julia.

* Last week we featured Marco Roth's efforts with Charm Ruby 
( https://charm-ruby.dev/ ) to bring a lot of extra flair to Ruby's
TUI story but somehow missed his fantastic in-depth blog post
about the whole project 
( https://marcoroth.dev/posts/glamorous-christmas ) that's also
packed with screenshots.

* The team at 37signals shared an hour-long video ▶️ about how
they moved billions of files off of Amazon S3. 
( https://dev.37signals.com/moving-mountains-of-data-off-s3/ )

* Hiroshi Shibata suggests unbundling net-ftp, net-pop, and
prime. ( https://bugs.ruby-lang.org/issues/21835 )

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
