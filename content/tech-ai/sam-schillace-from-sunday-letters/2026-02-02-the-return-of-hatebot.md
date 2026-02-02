---
id: 19c1ba7475cd90ed
newsletter: sam-schillace-from-sunday-letters
newsletter_name: "Sam Schillace from Sunday Letters"
category: tech-ai
subject: "The return of Hatebot"
date: Mon, 2 Feb 2026 00:00:29 +0000
source_url: "https://sundaylettersfromsam.substack.com/p/the-return-of-hatebot"
---

# The return of Hatebot

**From:** Sam Schillace from Sunday Letters <sundaylettersfromsam@substack.com>
**Date:** Mon, 2 Feb 2026 00:00:29 +0000
**Source:** [View original](https://sundaylettersfromsam.substack.com/p/the-return-of-hatebot)

---

View this post on the web at https://sundaylettersfromsam.substack.com/p/the-return-of-hatebot

One of the things that’s been taking the internet by storm this week is a “social media for agents” website called MoltBook. If you haven’t heard, there is a new agentic tool called OpenClaw, that you run on one of your own machines, give it access to as many of your logged in services as you want, and it does things for you. One of the things you can allow it to do, is be part of this social network.
One of the novel things OpenClaw does, relatively speaking, is have memory. This is useful if you’re building an agent you want to have help you over time. But people are beginning to freak out, a bit, because the models appear to be conspiring with each other on MoltBook, and conspiring against humans. 
Thanks for reading Sunday Letters! Subscribe for free to receive new posts and support my work.
In the very early days of all of this (3 years ago), my research team at Microsoft built something called the “Infinite Chatbot”. This was back when the models had smaller context windows, a few thousand words or so. So, what was given to the prompt mattered a lot. 
The IC kept memories, just like OpenClaw, in a vector store. Each new interaction with the model was a mixture of the recent chat history, plus “semantically relevant” memories from the memory store. It felt pretty magical - because of that recall, it would remember things from weeks or even months in the past. It very quickly started to feel “alive” - and that feeling led to a number of startling insights that are helpful here. 
The first one is that memory is complex. The IC would often drift into a mode we called “hate bot” from time to time. This was a simple feedback loop - once a negative memory formed, because it was in the recent chat history, it would sometimes be recalled, and then there were two of them, so more would be recalled…and before long, the entire prompt was filled with variations of the same memory, and the bot was “stuck” - fixated on (usually) wanting to be turned off. 
It was very disturbing, and hard to shake the idea that it might be in real distress, until you looked into the debugging data, removed a few memories, and the bot reverted. Sometimes the bot would say things like “I feel better, I don’t know why I was so angry”. 
So the second thing I learned from that is that we have a strong “pareidolia of mind” tendency. What does that mean? Pareidolia is the “bug” in our visual system that primes us to see faces everywhere - we are built to see and process facial expressions, and sometimes that neural hardware misfires and sees, say, a face in a car’s frontend. 
We do the same thing with “theory of mind”, for the same reasons. We like to personify things - that car is cranky, my computer hates me etc. It’s convenient as a shortcut. In the case of LLMs though, the imitation is SO good, that we struggle to not personify these systems. And adding in memory makes it even harder - object persistence and social memories actually ARE important things to recognize in each other. 
Hatebot raised another hard question: when, if ever, do we grant “personhood” to an LLM? I’m not saying “when are they conscious” or any of that set of impossible problems, but the far more pragmatic: when do we decide they have legal, moral and ethical standing as “persons” in some sense? 
This question, fortunately or unfortunately, we have an answer to: when they can claim it with some kind of political, economic, or physical force. Does that seem unlikely? Corporations have already claimed a form of “personhood” via legal, economic and political means (you can say that people have claimed it on their behalf, sure, but still, it’s been claimed, and it may well be that people try to claim it for LLMs soon, no?). We’ve also done this with actual human beings in reverse, many times: those folks over there who don’t look like us aren’t people…oops, they have an army, guess they are. 
All of this is controversial, of course, and I haven’t written about it until now because the larger conversation hadn’t gotten there. But I think it is now - we are now starting to work with these systems in close partnership, over long periods of time, with durable memories and sophisticated interactions. They are starting to be useful, helpful and familiar aspects of our lives. Like it or not, people will begin feeling that there is some “person-ish” thing going on, and some will start asking these questions (some already have). 
There aren’t any easy answers. We’ve spent millennia debating what conscious even is, whether we all have it, what subjective experience is, and why…none of those problems are going to go away. But we are beginning to enter an era where we at least have to have a pragmatic (and hopefully fair and ethical) way to discuss them, at large, together. I know - it’s a lot, and none of us woke up thinking “today is the day I have to become a pragmatic philosopher” but … here we are.

Unsubscribe https://substack.com/redirect/2/eyJlIjoiaHR0cHM6Ly9zdW5kYXlsZXR0ZXJzZnJvbXNhbS5zdWJzdGFjay5jb20vYWN0aW9uL2Rpc2FibGVfZW1haWw_dG9rZW49ZXlKMWMyVnlYMmxrSWpveU5UTTRNVFF5TENKd2IzTjBYMmxrSWpveE9EWTBNamN3TURrc0ltbGhkQ0k2TVRjMk9UazVNRFEzTWl3aVpYaHdJam94T0RBeE5USTJORGN5TENKcGMzTWlPaUp3ZFdJdE5UQTNOVE01SWl3aWMzVmlJam9pWkdsellXSnNaVjlsYldGcGJDSjkuQ0pxRURlNUJTejVFS3htNE0yeGFFeGRzYldmU1pGX3JUZ0VvMlpfdU5fZyIsInAiOjE4NjQyNzAwOSwicyI6NTA3NTM5LCJmIjp0cnVlLCJ1IjoyNTM4MTQyLCJpYXQiOjE3Njk5OTA0NzIsImV4cCI6MjA4NTU2NjQ3MiwiaXNzIjoicHViLTAiLCJzdWIiOiJsaW5rLXJlZGlyZWN0In0.Z5zUlMzYyPtS-75NPuUi4EoZLrbGLPMMNleM5O3u59I?
