---
id: 19db6ffb2433266c
newsletter: turing-post
newsletter_name: "🔳 Turing Post"
week: 17
subject: "AI 101: How Token Taxonomy Affects Your Bill"
date: Wed, 22 Apr 2026 21:01:43 +0000
source_url: "https://link.mail.beehiiv.com/v1/c/XbbxUCr929CCQHgKWeye7FkS5u3HHoWhe%2BAy0HB8U9eYGfk6GjwDngNaeeJN%0AsDYicYOf7XS2LnadT02h3uUdFpqGCTuyisdIRrljTxfsPm9gzRiYgbO7QjLi%0AJts5uMMgTWs5DSJWvNcD5TyHkQyX6pIyWPy8rPKG8v6anMMOOG1%2BzGx4S1o%2F%0AXZ06ZS3B4490baawCx2JdmecDOhj4BY%2Fng%3D%3D%0A/f6c76c3d7792b056"
---

# AI 101: How Token Taxonomy Affects Your Bill

**From:** "🔳 Turing Post" <turingpost@mail.beehiiv.com>
**Date:** Wed, 22 Apr 2026 21:01:43 +0000
**Source:** [View original](https://link.mail.beehiiv.com/v1/c/XbbxUCr929CCQHgKWeye7FkS5u3HHoWhe%2BAy0HB8U9eYGfk6GjwDngNaeeJN%0AsDYicYOf7XS2LnadT02h3uUdFpqGCTuyisdIRrljTxfsPm9gzRiYgbO7QjLi%0AJts5uMMgTWs5DSJWvNcD5TyHkQyX6pIyWPy8rPKG8v6anMMOOG1%2BzGx4S1o%2F%0AXZ06ZS3B4490baawCx2JdmecDOhj4BY%2Fng%3D%3D%0A/f6c76c3d7792b056)

---

Last time (_[AI 101: What is a Token?](https://www.turingpost.com/p/token)_) we covered what a token is and how tokenization turns text/video/audio into something a model can process. That was the foundation. Now let's talk about what actually happens in production – because in production, there is no such thing as just "a token" anymore.

Jensen Huang recently said that the AI business is about transforming electrons into tokens. That framing is exactly right – but it is incomplete. Because "tokens" is no longer one thing. A single API call can now involve input tokens, output tokens, reasoning tokens, cached tokens, tool-use tokens, and vision tokens – each billed differently, each consuming compute in a different way. If you want to make good decisions about AI systems and how you are spending your electrons, you need a taxonomy: a clear map of what all these tokens actually are and why they behave so differently.

So thank you, Jensen, for the inspiration. **Here is my taxonomy.** Let me walk all of you through the full token zoo, species by species. I’m pretty sure you’ll find some you’ve never heard before (and still, you are paying for them).

**Surprising result:** you'll never look at an API pricing page the same way.

Follow us on YouTube (https://www.youtube.com/@RealTuringPost)

**In today’s episode**:

* _The basic split: input vs. output tokens_

* _Reasoning tokens: the thinking tax_

* _Speculative tokens: the ones born to be discarded_

* _Cached tokens: the reuse discount_

* _Tool-use, system, and retrieval tokens: the hidden overhead_

* _Multimodal tokens: when images, audio, and video enter the pipeline_

* _Structural tokens: the scaffolding you never see_

* _Why the token zoo matters: economics and architecture_

* _Sources and further reading_

## The basic split: input vs. output tokens

Every API call has two sides: what you send in (input tokens) and what comes back (output tokens). And as you might guess, generating text is computationally harder than reading it.

When the model processes your **input**, it can do it in parallel. All the tokens in your prompt get processed more or less at once, in what is called the _prefill phase_. The model builds up its internal representation of everything you said in a single forward pass.

**Output** is different. The model generates tokens one at a time, each one depending on the one before it. This is autoregressive generation, and it is inherently sequential. Each new token requires a separate forward pass through the model – or at least through the decoder layers. That is why output tokens are more expensive. They require more compute per token.

This is also why you see the price difference on every API pricing page. As of mid-2026, **output tokens typically cost 2x to 6x more than input tokens**, depending on the provider and model. That ratio reflects a real difference in how the hardware is used.

View image: (https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/uploads/asset/file/e8f6d282-be72-4be7-9e93-eeb8d37c2a8e/1F7BDFAC-F09C-4375-8EA9-EFE5B1CBB4A1.png?t=1776890029)
Caption: Created with ChatGP

**A practical implication:** if you can restructure a task to reduce output length without losing quality – for example, by asking for structured JSON instead of verbose explanations – you are already saving.

## Reasoning tokens: the thinking tax

This is the category that has emerged most dramatically since 2024. Reasoning tokens – also called thinking tokens – are tokens the model generates internally as part of a chain-of-thought process before producing its final answer.

When you use models with extended thinking, the model does not jump directly to the answer. It first "thinks through" the problem, producing an internal monologue that may be partially or fully hidden from you. Those intermediate tokens still consume compute. They still cost money. And they can massively inflate the total token count of a response.

Here is what makes reasoning tokens interesting from an economic standpoint:

* **They can dominate total token usage.** A math problem that produces a 200-token answer might generate 3,000 reasoning tokens internally. Your bill reflects the 3,200, not the 200.

* **They create a new optimization problem.** With standard generation, you optimize for prompt efficiency and output conciseness. With reasoning models, you also have to think about whether the task actually benefits from extended reasoning. Simple tasks routed to a reasoning model are pure waste.

Some providers are now exposing reasoning token counts as a separate line item in their API responses. Others fold them into the output token price. This lack of standardization makes cost comparison between providers much harder.

Jensen Huang explicitly named reasoning tokens as a distinct pricing category in a recent conversation with Dwarkesh Patel. And the interesting thing here is that the token has become a segmented product, not a single commodity.

Here is some practical tips from Boris Cherny who builds Claude Code:

Tweet:  (https://twitter.com/bcherny/status/2044847856872546639)

## Speculative tokens: the ones born to be discarded

If reasoning tokens are expensive because they add thinking, speculative tokens are strange for the opposite reason: they are generated specifically so that most of them can be thrown away.

This is one of the most counterintuitive ideas in the token zoo, and by 2026 it has become production-standard at most major inference providers.

Here is the problem it solves →

----------
_Don’t settle for shallow articles. __**Learn the basics and go deeper with us. **_Truly understanding things is deeply satisfying.  

UPGRADE TO READ THE REST (https://www.turingpost.com/upgrade)

_[Join](https://www.turingpost.com/upgrade)__ Premium members from top companies like Microsoft, NVIDIA, Google, Hugging Face, OpenAI, a16z, plus AI labs such as Ai2, MIT, Berkeley, .gov, and thousands of others to really understand what’s going on in AI.__** **_

----------
———

You are reading a plain text version of this post. For the best experience, copy and paste this link in your browser to view the post online:
https://www.turingpost.com/p/tokentaxonomy
