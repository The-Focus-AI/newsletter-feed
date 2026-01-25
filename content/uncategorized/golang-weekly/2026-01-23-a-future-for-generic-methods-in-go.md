---
id: 19bec11f53c0f6ca
newsletter: golang-weekly
newsletter_name: "Golang Weekly"
category: uncategorized
subject: "A future for generic methods in Go?"
date: Fri, 23 Jan 2026 18:15:57 +0000 (UTC)
---

# A future for generic methods in Go?

**From:** Golang Weekly <peter@golangweekly.com>
**Date:** Fri, 23 Jan 2026 18:15:57 +0000 (UTC)

---

Plus the results of the latest Go developer survey are in. |

#586 — January 23, 2026

Read the Web Version ( https://golangweekly.com/issues/586 )

Together with

( https://www.tigerdata.com/timescaledb?utm_source=cooperpress&utm_medium=referral&utm_campaign=golang-weekly-newsletter )

------------------
GO WEEKLY
------------------

* RESULTS FROM THE LATEST GO DEVELOPER SURVEY 
( https://go.dev/blog/survey2025 ) — Over 5,000 Go developers
responded to the latest official survey, broadly reporting a high
level of satisfaction with the language and tooling. Frustrations
include difficulty following best practices, missing or disliked
features, and trouble finding trustworthy third-party modules. We
also learn a little about developers' AI usage.
  -- Todd Kulesza and the Go Team

* QUERY BILLIONS OF ROWS IN MILLISECONDS 
( https://www.tigerdata.com/timescaledb?utm_source=cooperpress&utm_medium=referral&utm_campaign=golang-weekly-newsletter )
 — Hypertables, 95% compression, continuous aggregates, and 100%
Postgres. Query billions of rows in milliseconds. No new query
language to learn, no extra infrastructure to manage. Start
building for free 
( https://www.tigerdata.com/timescaledb?utm_source=cooperpress&utm_medium=referral&utm_campaign=golang-weekly-newsletter )
.
  -- Tiger Data (creators of TimescaleDB) (SPONSOR)

* A PROPOSAL TO ADD GENERIC METHODS TO GO 
( https://github.com/golang/go/issues/77273 ) — It’s early days,
but when a proposal arises from one of Go’s co-creators, it’s
worth listening! In Go, functions can be generic, but methods
cannot, and while generic methods were never intended to be added
to Go, “perhaps a change of view is in order”.
  -- Robert Griesemer et al.

IN BRIEF:

* 🕹️ Playdate ( https://play.date/ ) is an indie, handheld,
monochrome gaming device and Roman Bielyi has created Pdgo, 
( https://devforum.play.date/t/golang-support-for-playdate-compiler-sdk-bindings-tools-and-examples/24919 )
 an SDK for building Playdate apps in Go.

* Nature ( https://nature-lang.org/ ) is a general-purpose
systems language, heavily inspired by Go and they've released
some Nature vs Go performance benchmarks. 
( https://nature-lang.org/news/20260115 )

* Microsoft has released its custom builds of Go 1.25.6-1 and
1.24.12-1. 
( https://devblogs.microsoft.com/go/go-1-25-6-1-and-1-24-12-1-microsoft-builds-now-available/ )

* FLOATING-POINT PRINTING AND PARSING CAN BE SIMPLE AND FAST 
( https://research.swtch.com/fp ) — A fantastically deep and
technical tour of implementing some modern floating point number
manipulation algorithms in Go. It’s not just academic, either: “I
expect some form of this Go code to ship in Go 1.27.”
  -- Russ Cox

😱 * PANIC RECOVERY 
( https://www.dolthub.com/blog/2026-01-09-golang-panic-recovery/ )
— Even if you never use panic directly, you still need to know
how to recover from panics as they can arise in many ways. Jason
covers the basics and shares some gotchas the DoltHub team
has encountered.
  -- Jason Fulghum

* DANCING BACKWARDS WITH GO 
( https://blog.jetbrains.com/go/2026/01/12/dancing-backwards-with-go/ )
 — “Dancing backwards” in this context is a playful framing for
TDD, and John skips through this example with the grace of
Ginger Rogers.
  -- John Arundel

📄 Patching the Wii News Channel to Serve Local News in 2025 
( https://raulnegron.me/2025/wii-news-pr/ ) – Delightfully niche
and a fun use for Go. Raúl Negrón

📄 A Rust Developer's Honest Review of Go 
( https://benraz.dev/blog/golang_review.html ) – A developer who
has been using Go for a few months shares what he does and
doesn’t like. Ben Raz

📄 Writing a Time Series Database from Scratch in Go 
( https://docs.google.com/presentation/d/1b5mGL6e0lkXGx2kZxpveoMCv5m93Tx2-hEsePBsGAzI/view?slide=id.p#slide=id.p )
 – A slide deck. Aliaksandr Valialkin (VictoriaMetrics)

📄 On Starting to Write a Compiler in Go 
( https://popovicu.com/posts/writing-your-first-compiler/ )  Uros
Popovic

------------------
🛠 CODE & TOOLS
------------------

* GOOGLE'S JSON SCHEMA PACKAGE FOR GO 
( https://opensource.googleblog.com/2026/01/a-json-schema-package-for-go.html )
 — Two members of the Go team introduce us to a comprehensive
JSON Schema package Google uses in the official Go SDK for MCP.
JSON Schema provides a way to describe the shape of JSON values,
so values can be generated or validated to the spec. GitHub repo.
( https://github.com/google/jsonschema-go )
  -- Amsterdam and Thanawalla

* DEPLOY YOUR SERVICES ANYWHERE WITH CLOUD 66 
( https://www.cloud66.com/products/deploy/ ) — Run APIs on your
cloud of choice with Kubernetes orchestration and full control
over builds & clusters.
  -- Cloud 66 (SPONSOR)

* GO-QUICKJS-WASI-REACTOR: RUN QUICKJS EFFICIENTLY UNDER GO 
( https://github.com/aperturerobotics/go-quickjs-wasi-reactor ) —
Run the WASM-based NG fork 
( https://github.com/quickjs-ng/quickjs ) of the embeddable QuickJS
( https://bellard.org/quickjs/ ) JavaScript engine directly
within your Go app. Uses an approach that lets you step through
the JS event loop manually, if you like, and poll for
IO yourself.
  -- Aperture Robotics

* GOPHERJS 1.20: A GO TO JAVASCRIPT TRANSPILER 
( https://github.com/gopherjs/gopherjs ) — Provides the opportunity
to write front-end code in Go and run it in the browser sans
WebAssembly. There’s an online playground 
( https://gopherjs.github.io/playground/ ) if you want to have a
quick play. v1.20 
( https://github.com/gopherjs/gopherjs/releases/tag/v1.20.0 )
brings things up to Go 1.20.14 standards.
  -- GopherJS

* MACTOP: A TERMINAL BASED MONITORING TOOL FOR APPLE SILICON 
( https://github.com/metaspartan/mactop ) — A Mac-specific
top-a-like that shows off real-time CPU and GPU usage, along with
metrics about power and memory usage.
  -- Carsen Klock

* Echo 5.0 ( https://github.com/labstack/echo/releases/tag/v5.0.0 )  – Popular extensible high performance web framework. A
maintenance release but with major breaking changes.

* ✉️ Notifuse v26 ( https://github.com/Notifuse/notifuse ) –
Self-hosted emailing platform for sending and designing
newsletters and transactional emails. AGPL licensed.

* 🤖 grepai 0.21.0 ( https://github.com/yoanbernabeu/grepai ) –
Index code using vector embeddings and use natural language
queries to find conceptually related code.

* Google API Linter v2.2 
( https://github.com/googleapis/api-linter ) – Real-time checks for
compliance with Google's API standards on protocol buffer-defined
API surfaces.

* Sonic 1.15 ( https://github.com/bytedance/sonic ) – High
performance JSON serialization and deserialization library
accelerated by JIT and SIMD.

* 🤖 Crush v0.34.0 
( https://github.com/charmbracelet/crush/releases/tag/v0.34.0 ) –
The Charm team's terminal-based AI coding assistant.

* GoProxy 1.8 ( https://github.com/elazarl/goproxy ) – Library
for creating custom HTTP/HTTPS proxy servers.

* Postgresus 3.5 ( https://github.com/databasus/databasus ) –
Backup tool for Postgres, MySQL and MongoDB.

* pgmetrics v1.19 ( https://pgmetrics.io/ ) – Collect and display
metrics from Postgres servers.

* Telego 1.5 ( https://github.com/mymmrac/telego ) – Telegram Bot
API library.

------------------
📢 ELSEWHERE IN THE ECOSYSTEM
------------------

Some other interesting stories in the broader landscape:

* 🤖 Esteemed coder Steve Yegge is up to some interesting stuff
with Gas Town 
( https://steve-yegge.medium.com/welcome-to-gas-town-4f25ee16dd04 )
, a sort of large scale, multi-agent orchestration system for
Claude Code, all built in Go. Tim Sehn has written a bit more
about it here. 
( https://www.dolthub.com/blog/2026-01-15-a-day-in-gas-town/ )

* 🔎 The VS Code team explains how they implemented a new, fast
client-side docs search system 
( https://code.visualstudio.com/blogs/2026/01/15/docfind ) for the
VS Code site using WebAssembly. You can use their docfind engine
( https://github.com/microsoft/docfind ) for yourself too, and
there's a live demo ( https://microsoft.github.io/docfind/ )
showing off how fast it is over an index of 50,000 articles.

* 🐘 Postgres users might enjoy this article about alternatives to
'soft delete' ( https://atlas9.dev/blog/soft-delete.html ) where
rather than use a boolean or datetime flag, you could use a
trigger to move a row to an archive table or capture deleted rows
from the WAL for archival.

* A look at the state of WebAssembly in 2025 and 2026. 
( https://platform.uno/blog/the-state-of-webassembly-2025-2026/ )

------------------

Curated by Peter Cooper and Glenn Goodrich 
( https://twitter.com/ruprict ).
Go is a trademark of Google 
( https://go.dev/brand ).
The Go gopher 
( https://go.dev/blog/gopher ), whenever used, is an original
creation by Renée French.

Change your email 
( https://golangweekly.com/edit_subscription/e83a6623e0 )
Stop
getting this newsletter ( https://golangweekly.com/leave/e83a6623e0 ) 

© Cooper Press Ltd · Fairfield Enterprise Centre, Louth,
LN11 0LS, United Kingdom
