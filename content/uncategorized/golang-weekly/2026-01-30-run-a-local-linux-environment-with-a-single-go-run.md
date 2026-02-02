---
id: 19c0f83e89b7e074
newsletter: golang-weekly
newsletter_name: "Golang Weekly"
category: uncategorized
subject: "Run a local Linux environment with a single `go run`"
date: Fri, 30 Jan 2026 15:27:08 +0000 (UTC)
---

# Run a local Linux environment with a single `go run`

**From:** Golang Weekly <peter@golangweekly.com>
**Date:** Fri, 30 Jan 2026 15:27:08 +0000 (UTC)

---

Plus the GopherCon 2026 CFP is open, a Go chess engine, Crush
gets even more Charming, and detecting goroutine leaks in Go
1.26. |

#587 — January 30, 2026

Read the Web Version ( https://golangweekly.com/issues/587 )

Together with

( https://frontendmasters.com/courses/backend-system-design/?utm_source=email&utm_medium=golangweekly&utm_content=backendsystemdesign )

------------------
GO WEEKLY
------------------

* A 'PURE GO' LINUX ENVIRONMENT, INSPIRED BY FABRICE BELLARD 
( https://www.jtolio.com/2026/01/tinyemu-go/ ) — With a single 'go
run' you can get a Linux environment up and running using JT’s
new project. JT used Claude Code to port Fabrice Bellard’s RISC-V
system emulator to Go (not Linux itself, which runs from a
special image). He tells the story (and shares the code) behind
how it came together and shares lots of advice (and some of the
downsides) for using LLMs in porting projects.
  -- JT Olio

* NEW COURSE: BACKEND SYSTEM DESIGN 
( https://frontendmasters.com/courses/backend-system-design/?utm_source=email&utm_medium=golangweekly&utm_content=backendsystemdesign )
 — Join Jem Young for this detailed video course and develop the
system-thinking skills to solve complex backend design challenges
related to scaling, data storage, reliability, performance,
and more.
  -- Frontend Masters (SPONSOR)

🗣️ * GOPHERCON 2026 CALL FOR SPEAKERS NOW OPEN 
( https://sessionize.com/gophercon-2026 ) — The Call for Speakers
for GopherCon ( https://www.gophercon.com/ ), taking place this
August 3-6 in Seattle, is now open and runs through March 4. A
limited number of 'Early Gopher' tickets are also available for
the event (28 remain at the time of publication) – see the footer
of the homepage ( https://www.gophercon.com/ ) for those.
  -- GopherCon

IN BRIEF:

* Last week we featured Robert Griesemer's proposal for bringing
generic methods to Go ( https://github.com/golang/go/issues/77273 )  and there's been a lot of discussion over the past week to
catch up on.

* Damien Neil has written a proposal for adding in-memory
implementations of net.Listener, net.Conn, and net.PacketConn 
( https://github.com/golang/go/issues/77362 ) to Go. Why? No port
exhaustion or other potential 'flakiness' during testing and the
ability to inject errors and other behavior.

* Nolen Royalty discovered that ssh's keystroke timing
obfuscation was flooding his Wish-based game server with ~100
chaff packets per keypress. 
( https://eieio.games/blog/ssh-sends-100-packets-per-keystroke/ )
The fix was forking Go's x/crypto/ssh to stop advertising
ping@openssh.com support.

* YOUR GO TESTS PROBABLY DON'T NEED A MOCKING LIBRARY 
( https://rednafi.com/go/mocking-libraries-bleh/ ) — Redowan
explores the argument that many Go testing scenarios can be
handled effectively without resorting to full-fledged mocking
libraries. He outlines several alternative strategies for
isolating code under test, thereby promoting simpler and more
idiomatic Go.
  -- Redowan Delowar

* DETECTING GOROUTINE LEAKS WITH SYNCTEST/PPROF IN GO 1.26 
( https://antonz.org/detecting-goroutine-leaks/ ) — Go 1.26 is
adding a new experimental goroutineleak profile that reports
leaked goroutines.
  -- Anton Zhiyanov

📄 Goodbye Java, Hello Go! 
( https://wso2.com/library/blogs/goodbye-java-hello-go ) – An
enterprise development company explains why Go is their future.
Jayasoma and Weerawarana (WSO2)

📄 Forcing a Generic Type to Be a Pointer Type (And Some
Challenges) 
( https://utcc.utoronto.ca/~cks/space/blog/programming/GoGenericTypeIsPointer )
  Chris Siebenmann

📄 How We Built Go-Native Durable Execution 
( https://www.dbos.dev/blog/how-we-built-golang-native-durable-execution )
  Henri Maxime Demoulin (DBOS)

📄 Writing a Go SQL database/sql Driver 
( https://www.dolthub.com/blog/2026-01-23-golang-sql-drivers/ )
Zach Musgrave (DoltHub)

📄 How Tigris Backfilled Its Discord Forum with Go 
( https://www.tigrisdata.com/blog/discord-backfill/ )  Xe Iaso

------------------
🛠 CODE & TOOLS
------------------

♟️ * CHESS 3: A CHESS ENGINE WRITTEN IN GO 
( https://github.com/paulsonkoly/chess-3 ) — A heavily-optimized
UCI-compatible chess engine, focusing on hand-crafted evaluation

( https://en.wikipedia.org/wiki/Evaluation_function#Handcrafted_evaluation_functions )
. The author’s goal is to create “the strongest golang chess
engine in the world”! CLI only but will work with various chess
GUIs, and apparently even plays on Lichess ( https://lichess.org/ )  sometimes..
  -- Paul Sonkoly

* THE #1 TIME-SERIES DATABASE BUILT ON POSTGRES 
( https://www.tigerdata.com/timescaledb?utm_source=cooperpress&utm_medium=referral&utm_campaign=golang-weekly-newsletter )
 — TimescaleDB extends Postgres with hypertables, 95%
compression, and continuous aggregates. Start building for free 
( https://www.tigerdata.com/timescaledb?utm_source=cooperpress&utm_medium=referral&utm_campaign=golang-weekly-newsletter )
.
  -- Tiger Data (SPONSOR)

🤖 * CRUSH V0.36: CHARM'S ELEGANT GO AGENTIC DEVELOPMENT TOOL 
( https://github.com/charmbracelet/crush/releases/tag/v0.36.0 ) —
Charm continues at full steam ahead with more Crush releases
adding Vercel AI Gateway support and a 'crush stats' command to
see what's going on with info about token usage, cost, an
activity heatmap, and more. If you want a Go-powered Claude
Code-a-like that's aesthetically pleasing, give it a spin.
  -- Charm

* REGRESQL 1.5: REGRESSION TESTING FOR SQL QUERIES 
( https://boringsql.com/products/regresql/ ) — The idea is simple:
take your queries, run them, capture expected results, then on
future runs compare when their cost, I/O or other characteristics
change. “When a query’s result changes unexpectedly, you’ll know
immediately.” GitHub repo. 
( https://github.com/boringsql/regresql )
  -- boringSQL

* MERMAID ASCII: RENDER MERMAID GRAPHS IN YOUR TERMINAL 
( https://github.com/AlexanderGrooff/mermaid-ascii ) — If you want
to render Mermaid diagrams like flowcharts and sequence diagrams
without having to lean on the JavaScript ecosystem.
  -- Alexander Grooff

* RISTRETTO: A HIGH PERFORMANCE MEMORY-BOUND GO CACHE 
( https://github.com/dgraph-io/ristretto ) — Used as part of Dgraph
( https://github.com/dgraph-io/dgraph ) (native GraphQL graph
database) but you can use it at a lower level. Think caching
database query results, rate limiting, etc.
  -- Dgraph

🤖 * BIFROST: GO-POWERED LLM GATEWAY SERVER 
( https://github.com/maximhq/bifrost ) — An open-source LLM gateway
optimized for low latency and high throughput, unifying 15+ AI
providers behind an OpenAI-compatible API. Think OpenRouter 
( https://openrouter.ai/ ), but on your own infra.
  -- Maxim AI

* 🤖 Agent Development Kit (ADK) for Go v0.4 
( https://github.com/google/adk-go ) – Google's official Go toolkit
for building, evaluating, and deploying AI agents.

* 🤖 Anthropic Go API v1.20.0 
( https://github.com/anthropics/anthropic-sdk-go/releases/tag/v1.20.0 )
 – Official library for using Anthropic's REST API.

* fp-go 2.2 ( https://github.com/IBM/fp-go ) – Functional
programming primitives and monads.

* go-github v82.0 ( https://github.com/google/go-github ) – Go
client library for the GitHub API v3.

* xsync 4.4 ( https://github.com/puzpuzpuz/xsync ) – Concurrent
data structures for Go.

* MongoDB Go Driver v2.5.0 
( https://github.com/mongodb/mongo-go-driver/releases/tag/v2.5.0 )

------------------
📢 ELSEWHERE IN THE ECOSYSTEM
------------------

Some other interesting stories in the broader landscape:

* Christopher Chedeau explains how he ported 100k lines of
TypeScript to Rust 
( https://blog.vjeux.com/2026/analysis/porting-100k-lines-from-typescript-to-rust-using-claude-code-in-a-month.html )
 using Claude Code. The languages aren't important here, it's
more about the insights in nudging agentic tools to get through
such mammoth tasks.

* LLM whisperer Simon Willison has discovered ChatGPT can run Go
programs 
( https://simonwillison.net/2026/Jan/26/chatgpt-containers/ )
(among many other languages) in a sort-of containerized sandbox.

* OpenAI shares the story of how it's scaled Postgres to serve
800+ million users. 
( https://openai.com/index/scaling-postgresql/ ) The interesting
technical point is they're only using a single primary (coupled
with many read replicas) to do so.

* Apple silicon users might be excited to learn Fedora Asahi
Remix is now working on the M3. 
( https://bsky.app/profile/did:plc:okydh7e54e2nok65kjxdklvd/post/3mdd55paffk2o )
 Apple silicon support has been limited 
( https://asahilinux.org/fedora/ ) to M1s and M2s for some
time now.

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
