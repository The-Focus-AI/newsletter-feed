---
id: 19dbfda2b6ae0437
newsletter: golang-weekly
newsletter_name: "Golang Weekly"
week: 17
subject: "TinyGo can now compile the TypeScript compiler"
date: Fri, 24 Apr 2026 14:17:18 +0000 (UTC)
---

# TinyGo can now compile the TypeScript compiler

**From:** Golang Weekly <peter@golangweekly.com>
**Date:** Fri, 24 Apr 2026 14:17:18 +0000 (UTC)

---

Plus a deep dive into Go's network poller, running Go on bare
metal, and progress with Go's native `uuid` package.

#598 — April 24, 2026

Read the Web Version ( https://golangweekly.com/issues/598 )

Together with

( https://frontendmasters.com/courses/prompt-engineering/?utm_source=email&utm_medium=golangweekly&utm_content=promptengineering )

------------------
GO WEEKLY
------------------

* TINYGO 0.41: GO 1.26 SUPPORT, ESP32 WIRELESS, AND MORE 
( https://tinygo.org/blog/2026/tinygo-0-41-the-big-release/ ) — A
huge release 
( https://github.com/tinygo-org/tinygo/releases/tag/v0.41.0 ) for
the “Go compiler for small places”! Go 1.26 support arrives,
along with wireless support for ESP32 
( https://en.wikipedia.org/wiki/ESP32 ) devices, so you can create
and run networked services with Go on these tiny devices. There’s
also Arduino UNO Q support, and TinyGo can now even compile the
TypeScript 7 compiler. 
( https://github.com/microsoft/typescript-go )
  -- The TinyGo Team

* WRITE BETTER PROMPTS 
( https://frontendmasters.com/courses/prompt-engineering/?utm_source=email&utm_medium=golangweekly&utm_content=promptengineering )
 — Join GitHub's Sabrina Goldfarb for this detailed video course
on generating higher quality code with AI. Learn practical
prompting techniques that work consistently across tools and
transform your project ideas into reality.
  -- Frontend Masters (SPONSOR)

* THE STANDARD UUID PACKAGE PROPOSAL HAS BEEN ACCEPTED;
POSSIBLY COMING IN GO 1.27 
( https://github.com/golang/go/issues/62026 ) —
The proposal for a native uuid package has been accepted and the
first commit 
( https://github.com/golang/go/commit/2fb2b98da3d7d529e11a94b79372c0309aa05e21 )
 is already in. UUIDs v4 and v7 are supported. Damien Neil's
explainer 
( https://github.com/golang/go/issues/62026#issuecomment-4209523935 )
 provides a good read on the rationale and design, or you might
prefer Redowan Delowar's higher level look 
( https://rednafi.com/shards/2026/04/go-uuid/ ).
  -- Damien Neil / Go Proposal Review

IN BRIEF:

* A proposal for a new goroutine leak detector profile 
( https://github.com/golang/go/issues/74609 ) has been accepted.

* Discussion about supporting dependency cooldowns 
( https://github.com/golang/go/issues/76485 ) in Go is ongoing.

* Go 1.27 will drop support for macOS 12 (Monterey) 
( https://github.com/golang/go/issues/75836 ).

* BUILDING A CONTAINER FROM SCRATCH IN GO 
( https://blog.iamvedant.in/containers-are-not-magic-namespaces-from-scratch )
 — A developer wanted to understand how Docker containers work
under the hood and set out to build a minimal one in Go from
scratch, starting with Linux namespaces.
  -- Vedant Gandhi

* UNDERSTANDING THE GO RUNTIME: THE NETWORK POLLER 
( https://internals-for-interns.com/posts/go-netpoller/ ) — One of
Jesús’s typical deep dives, this time on how Go makes blocking
network code not actually block a thread. Covers the parking
protocol, epoll/kqueue/IOCP, and the observation that “waiting
for goroutines and waiting for I/O are the same waiting.”
  -- Jesús Espino

* YOUR AGENT HIT THE 2-PROJECT LIMIT BY LUNCH 
( https://ghost.build/?utm_source=content-syndication&utm_medium=referral&utm_campaign=golang-weekly-newsletter )
 — ghost gives your agent unlimited free Postgres. No 2-project
cap, no credit card, one CLI. 1TB storage. Try for free 
( https://ghost.build/?utm_source=content-syndication&utm_medium=referral&utm_campaign=golang-weekly-newsletter )
.
  -- ghost (SPONSOR)

📄 Go and Rust Programs Appear to Start Equally Fast (on Some
Machines) 
( https://utcc.utoronto.ca/~cks/space/blog/programming/GoVsRustStartupDelays )
 – The startup difference is on the order of sub-milliseconds.
Chris Siebenmann

📄 Raftly: Building a Production-Grade Raft Implementation from
Scratch 
( https://anirudhology.com/blog/building-raftly-reproducing-production-failures )
 – With the curious goal of being designed to fail. Anirudh
Sharma

📄 Tracing Goroutines in Realtime with eBPF 
( https://sazak.io/articles/tracing-goroutines-in-realtime-with-ebpf-2026-03-31 )
 – A beautifully presented article. Ozan Sazak

------------------
🛠 CODE & TOOLS
------------------

* GOSHS 2.0: FOR WHEN PYTHON3 -M HTTP.SERVER DOESN'T CUT IT 
( https://goshs.de/en/index.html ) — A Go-powered, single-binary
file server you can rapidly deploy not only to get a quick HTTP/S
server running, but WebDAV, SFTP, SMB, DNS, and other protocols
too. It can also send notifications via webhooks 
( https://goshs.de/en/usage/webhook-notifications/index.html ).
(GitHub repo. ( https://github.com/patrickhener/goshs ))
  -- Patrick Hener

* TAMAGO: WHERE THE GO RUNTIME IS THE KERNEL 
( https://github.com/usbarmory/tamago ) — A framework for compiling
and executing Go apps on bare metal processors (AMD64, ARM,
ARM64, and RISCV64). Former Go core team member Brad Fitzpatrick
has just used this to get Tailscale running on UEFI. 
( https://bsky.app/profile/bradfitz.com/post/3mk4ujxkmws2n )
  -- The TamaGo Authors

* TYPESCRIPT 7.0 BETA: A 10X FASTER COMPILER, THANKS TO GO 
( https://devblogs.microsoft.com/typescript/announcing-typescript-7-0-beta/ )
 — TypeScript 7.0 is a Go-powered native port of TypeScript's
compiler boasting “about 10 times faster” performance. Curiously,
Microsoft collaborated with the TinyGo team so it can also be
compiled with TinyGo 0.41 
( https://tinygo.org/blog/2026/tinygo-0-41-the-big-release/ )
(featured above).
  -- Microsoft

🤖 * KRONK: HARDWARE-ACCELERATED LOCAL LLM INFERENCE FOR GO 
( https://github.com/ardanlabs/kronk ) —
A local-inference runtime for Go apps, wrapping llama.cpp through
yzma ( https://github.com/hybridgroup/yzma ) bindings and
exposing an OpenAI-compatible API. Check out the code 
( https://github.com/ardanlabs/kronk#sample-api-program---question-example )
 for wiring up a simple chat mechanism with it.
  -- Bill Kennedy (Ardan Labs)

* RabbitMQ Stream Go Client 1.8 
( https://github.com/rabbitmq/rabbitmq-stream-go-client ) –
Official Go client library for RabbitMQ's stream queues. 
( https://github.com/rabbitmq/rabbitmq-server/tree/main/deps/rabbitmq_stream )

* go-github 85.0 ( https://github.com/google/go-github ) – Client
library for the GitHub API v3.

* 📄 pdfcpu 0.12 ( https://github.com/pdfcpu/pdfcpu ) – Go-based
PDF processing library.

* linodego 1.68.0 ( https://github.com/linode/linodego ) – Go
client for Linode's REST API.

* 💬 slack-go 0.23 ( https://github.com/slack-go/slack ) –
Official Slack API library.

📰 Classifieds

⚙️ Go finally has an AI agent framework that isn't a Python port

( https://agentfield.ai/github/?utm_source=golang&utm_medium=newsletter&utm_campaign=golang-0604&utm_id=golang-060424-github-cta&utm_content=github-cta )
. Agents as http.Handlers, orchestrate LLMs & Claude Code. Open
source. agentfield.ai 
( https://agentfield.ai/?utm_source=golang&utm_medium=newsletter&utm_campaign=golang-0604&utm_id=golang-060424-home-cta&utm_content=home-cta )
.

------------------
📢 ELSEWHERE IN THE ECOSYSTEM
------------------

* Git 2.54 has been released 
( https://github.blog/open-source/git/highlights-from-git-2-54/ )
with two headline features:

* git history offers a new, easier way to edit commit messages or
interactively split a commit.

* You can now define hooks in config files (at repo, user, or
system level) rather than only in .git/hooks. You can also run
multiple hooks for the same event.

* Ben Hoyt (creator of GoAWK ( https://github.com/benhoyt/goawk ) ) is having fun with an indecisive AI coding agent. 
( https://benhoyt.com/writings/indecisive-ai-agent/ ) Ben gives us
a real-world example of taking back the reins.

* Sanghee Son's friend unplugged his Raspberry Pi so he built a
homelab manager in Go 
( https://dev.to/higangssh/my-friend-unplugged-my-raspberry-pi-so-i-built-a-homelab-manager-401g )
 called homebutler ( https://github.com/Higangssh/homebutler )
which provides a CLI and MCP server to monitor and control his
homelab's servers and network.

* Cloudflare has released a preview of its new cf CLI tool 
( https://blog.cloudflare.com/cf-cli-local-explorer/ ) for working
with its various services.

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
