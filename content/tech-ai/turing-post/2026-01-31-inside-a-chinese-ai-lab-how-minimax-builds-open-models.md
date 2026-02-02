---
id: 19c14ca4b4a01fce
newsletter: turing-post
newsletter_name: "🔳 Turing Post"
category: tech-ai
subject: "🎙️Inside a Chinese AI Lab: How MiniMax Builds Open Models"
date: Sat, 31 Jan 2026 16:02:06 +0000 (UTC)
source_url: "https://www.turingpost.com/p/olive"
---

# 🎙️Inside a Chinese AI Lab: How MiniMax Builds Open Models

**From:** "🔳 Turing Post" <turingpost@mail.beehiiv.com>
**Date:** Sat, 31 Jan 2026 16:02:06 +0000 (UTC)
**Source:** [View original](https://www.turingpost.com/p/olive)

---

----------
_Was this email forwarded to you? __[Sign up now to receive it in your inbox](https://www.turingpost.com/subscribe)_

----------When MiniMax's RL training wouldn't converge, they debugged layer by layer until they found it: fp32 precision in the LM head. When their models learned to "hack" during training, exploiting loopholes to maximize rewards, they had to rethink alignment from scratch. When benchmarks said their models were good but production said otherwise, they discovered the problem: environment adaptation.

**Olive Song – the MiniMax’s senior researcher** – talks about working at a pace where new models drop at midnight and you test them at midnight. How they use an internal AI agent to read every new paper published overnight. Why they sit with developers during experiments to catch dangerous behaviors in real-time. What "ICU in the morning, KTV at night" means when results swing wildly. How problem-solving becomes discovery when you're debugging behaviors no one has seen before.

This is how Chinese labs are moving fast: first-principles thinking, engineering discipline, and willingness to work whenever the model in experimentation requires you to. We spoke on Sunday at 9 pm Beijing time. Olive was still working, waiting for results from new model experiments, so my first question was obvious: does everyone at the company work like this?

----------
_Subscribe to our __[YouTube channel](https://www.youtube.com/@RealTuringPost)__, or listen the interview on __[Spotify](https://open.spotify.com/show/2SQxCURLX8tKzv7IarPhYM)__ / __[Apple](https://podcasts.apple.com/us/podcast/inference-by-turing-post/id1811089330)_

----------**In this episode of Inference, we get into: **

* _Why progress in RL looks like “ICU in the morning, KTV at night”_

* _How models start hacking objectives the moment constraints loosen_

* _Why alignment means matching expert expectations, not abstract values_

* _How tiny gaps between theory and implementation derail training_

* _Why agentic RL is really about environments and infrastructure_

* _Where open models fail first when dropped into new tool setups_

* _Why coding sits at the center of general intelligence development_

* _How researchers actually evaluate, compare, and “feel” new models_

* _What staying current looks like when papers are no longer enough_

This is a conversation that lets you into how cutting-edge AI research is actually done inside a Chinese lab, from reinforcement learning failures to open-weight strategy and agentic systems in production. [Watch it](https://www.youtube.com/watch?v=GkUMqWeHn40)!

_We prepared a transcript for your convenience. But as always – __[watch the full ](https://youtu.be/5P8kgRcLF5Q)__video, subscribe, like and__** leave your feedback**__. It __**helps us grow on YouTube**__ and bring you more insights_ ⬇️

Youtube: Inside a Chinese AI Lab: How MiniMax Builds Open Models (https://www.youtube.com/watch?v=GkUMqWeHn40)

**Ksenia: Hello everyone. Today I have the pleasure of talking to Olive Song, senior researcher at MiniMax. Recently they’ve been launching very interesting open-weight models specialized in different areas. And Olive is currently working on MiniMax 2.2. Thank you for taking the time at 9 pm on Sunday night. Does everyone work like this at the company? I’m really impressed.**

**Olive:** Different people work on different schedules. We do have people who work even overnight, but they sleep during the daytime. So we have a very flexible schedule – it goes with your experiments. For example, if the experiment runs all day, the person can take a break. And then if there’s a lot of analysis to do, maybe because we’re very curious about the results and very passionate, right? We can’t really wait a very long time. So yeah, everyone has their own schedule.

## ICU in the Morning, KTV at Night

**Ksenia: You specialize in RL and model evaluation, which are two of the least forgiving parts of model development. And you also have more constraints than big American AI labs. What does a good day look like for you, and what does a bad one look like?**

**Olive:** I can share something about our recent weeks. There’s not a whole good day or a whole bad day. We were joking that during one day we have good results in the morning and then sometimes it becomes bad results at night. Sometimes we call it: we have **ICU in the morning and then KTV (**_the popular Asian style of karaoke_**) at night**.

So typically a good time would be receiving some good results, or even running into new problems is a good time. During reinforcement learning, we can see the model doing a lot of different stuff to achieve the results. And sometimes we just discover new model behaviors. And that’s really exciting, even though it might not be safe or it might not be expected. It’s exciting. So I call it a good time.

A bad time would be – see, it really isn’t a bad time, except for looking at the moment itself when you find out the bad results. That moment itself is bad, but then trying to figure out the problem and breaking it down is pretty good time.

**Ksenia: What were the recent model behaviors that you didn’t expect?**

**Olive:** During reinforcement learning, the model tries its best to hack a lot of things, right? For example, it uses bash a lot, and sometimes it might not be very safe behaviors, as our expert developers say, because sometimes the expert developers have their own expectations on how the model works, but then it doesn’t go that way if we don’t constrain it. So we do a lot of alignment to solve that issue.

WATCH THE FULL VIDEO (https://www.youtube.com/watch?v=GkUMqWeHn40)

———————————————————————————

## Role-Playing and Human Connection

**Ksenia: You just launched MiniMax Her, and that went all over Twitter. How do you come up with those ideas? Because, you know, role-playing is sort of – is it an alignment question? Is it not? How do you do that?**

**Olive:** Frankly speaking, I’m not the expert person on that part. We have a whole team on role-playing and that side of things. I’m not an expert, but we do have a lot of discussions.

We do believe that **role-playing or accompanying humans or human interactions is very important** in the life with AI, or how it would change our social life in the future. And it absolutely represents some abilities that are very superior because that’s human-like. It has emotions. It understands your emotions. It’s not just working out some exams. That’s absolutely another side of AI capability.

**Ksenia: What is the tagline – “AI with everyone,” right?**

**Olive:** It’s “Intelligence with everyone.”

**Ksenia: Right. What does it mean for you?**

**Olive:** For me personally, I feel like it’s more about how it changes my life and enables me to do more work, and then how it can connect me better to different people.

For example, before I wouldn’t be able to understand a lot of very professional coding problems or optimization problems. And now I am able to do that with AI, and so I can communicate with more people and exchange more ideas. That’s one side. And on the other side, it genuinely helps my daily life.

So it helps with my work, my daily routine, my self-care. It changes life for me, and I hope that it changes life for everybody – obviously in the good way.

———————————————————————————

## Developers and Researchers: Sitting Around Every Day

**Ksenia: Can you tell me a little bit how day-to-day work is organized in your lab? I remember from your talk at AI Engineer Summit that it’s very interconnected between developers and researchers. I would love to hear more about that.**

**Olive:** Absolutely. **We sit around every day.** We share our experiment results. For example, as I just said, during experiments – for example, reinforcement learning experiments – we see some scores going up high. We look at the model’s behaviors, and we look at the model behaviors with the developers in that area as well. We sit together, and then they will spot the issue right away. And then we’re able to come up with new ideas to fix it or build more data on it.

**Ksenia: If we can go into details like your current work on the current model, the current version – what are the biggest problems you’re trying to solve comparing to the previous version?**

**Olive:** One important thing we focus on right now and also in the future is **human alignment**, because we’re focusing on coding models for 2.1, 2.2, and the M2 series. And then what we realized is that for it to become very productive in our daily work, or for it to be productive and safe at the same time, we have to do a lot of alignment on it.

So the model can’t just grow on its own and then do some dangerous behaviors just to achieve the final goal. So for us, the important thing would be: **How do we define human alignment? How do we define expert expectation? How do we actually train the model to be more aligned with our expectations?**

WATCH THE FULL VIDEO (https://www.youtube.com/watch?v=GkUMqWeHn40)

———————————————————————————

## Small Decisions, Big Impact

**Ksenia: So I want to go into some real details here. And you’re an expert here, so correct me if I’m wrong, but I saw that there’s been a lot of interest in details like keeping the LM head in fp32 during RL training. Why do small decisions like this end up mattering more than just a clever new algorithm?**

**Olive:** It all ends up being **closer to the theoretical algorithm**. So we have the theoretical RL algorithm. But when we implement it, it could be a little bit off, and that creates a little bit of gap to the theoretical extreme of this algorithm.

So that’s how we think and approach this problem: we try to scale to the theoretical extreme. And for example, the precision part is one thing that we found that would kind of prevent us from being close to that extreme, and that’s how we solve it.

That was a very funny story, actually, when we discovered that. I talked about it when we published MiniMax-01. During our experiments, we found that the accuracy didn’t go up. We looked layer by layer. We looked at the log probs layer by layer and found it out.

Seriously speaking, it has to work, right? There has to be some gap between the theoretical and how we approached it. So we thought about the gap and analyzed it layer by layer and eventually found it.

**Ksenia: Is there anything like this happening now?**

**Olive:** Definitely. Yeah, every single day, and in every different group. I can’t actually disclose something that we haven’t had the concrete conclusion for because we want our conclusions for anything public to be very concrete and we understand it very deeply. So if we have breakthroughs, we’ll definitely publish it later.

But I’ll have to say we do encounter these problems every day. And we think – I think it’s called **first principles**, right? So we think from the very fundamental part of the problem and then approach it.

———————————————————————————

## Open Weights and Responsibility

**Ksenia: The models that you launch are open weights. And from your perspective, and from the alignment perspective, what do builders actually gain from open weights, and what responsibility do they have to take on? You don’t have to take responsibility for this.**

**Olive:** Again, I’m actually not an expert in building developments or building things with models. I feel like because it’s open weight, people can have free use with it. For example, they can deploy it on-premises by themselves, or they can even fine-tune it, and then have all the data on their properties. It is very safe.

**Ksenia: But if we talk about alignment, how do you look at that from that perspective when the model is out there in the wild? Before you launch the model, before you publish it, what tells you that it’s safe to publish?**

**Olive:** We have some internal benchmarks in terms of safety, and it has different dimensions – something that’s sensitive safety or something that’s alignment safety. We have that as our evaluation.

And then before launching, one or two weeks before launching, we do **scaled-up evaluations** and we do scaled-up alignments on the model. And that’s how we assess if the model is safe.

But then if it’s already open weight in the wild, people actually can do something on it. I guess that’s what you’re getting at, right? People can do more things on the model that we can’t control. I don’t know how we handle that, frankly speaking. There are laws on that. There are regulations where people do agree on some moral standards on that.

WATCH THE FULL VIDEO (https://www.youtube.com/watch?v=GkUMqWeHn40)

———————————————————————————

## Collecting Feedback, Building Better Models

**Ksenia: How do you collect feedback for the next versions for improving the reinforcement learning process?**

**Olive:** We collect feedbacks on the model itself first. So when we publish a model outside, many developers use it or many people use it. We collect it systematically. We analyze these problems. Some of them are fundamental. Some of them are just something that we missed and we can fix it real quick.

So there are two parts. First, we do the internal evaluation with the developers and they point out problems, and that’s how we can fix this part. But they are not enough. And more feedbacks will come to us after we officially publish the models, and then we collect it.

Because the way we organize our group is that different people work on different capabilities of a general model. If we collect some things that we think we should improve in the future, different people take their parts. They’re like, “Okay, I think I can solve this issue in the next generation.” And that’s how we collect feedbacks and then improve the model.

———————————————————————————

## Why Coding? Why Not Just General?

**Ksenia: How did you initially decide to not build one general-use model, everything for all, and go more into specialization, like coding?**

**Olive:** I think we are approaching generalized models. It’s just that we are putting more emphasis on coding. For example, our model – you can take it into any general agent scaffold, including our own agent product. And that’s for general purpose. We do work on researching, report writing, PPT, stuff like that. That’s more general.

Personally speaking, I feel like **with coding, you can structure the whole world**, or you can model a lot of stuff with code.

**Ksenia: Yeah, engineer it.**

**Olive:** Yes, so behind it, it scales up humanity for me. So it itself has a lot of intelligence with it and a lot of work to do. So that’s how we view this issue.

But we do work on generalized stuff and even more generalized stuff in later versions. For example, we can do some general workplace scenarios in the future. And that’s not just coding.

———————————————————————————

## Long Horizon: Goals, Environments, Infrastructure

**Ksenia: If we talk about coding and agentic use, it requires long horizon. How do you solve long horizon for agentic use?**

**Olive:** I think: **define your goals well and define the model behaviors well.** And also we require great and extraordinary infrastructure.

For example, for reinforcement learning, the very important issue besides algorithm, besides things that people have been working on for a very long time – what’s special for agentic stuff is how we define agents, how we define how agent models will work.

First, you need to **define the task**. You need to define the model’s goal, especially in a long-horizon task. You need goals that are actually hard and diverse.

And then the second part is that you need **environments**. You need great engineering environments, scaled-up environments, different diverse environments – not just coding, or more, for example, workplace, different kinds of tools. That’s great engineering.

And then you need great **infrastructure**. You need outstanding RL infrastructure to let the model really roll out in a very long horizon, and then with very efficient – for example, GPU use, very efficient training, rollout and training and stuff.

I feel like that’s what’s different in agentic reinforcement learning as compared to before.

**Ksenia: Are you affected by GPU constraints? How do you solve the compute problem?**

**Olive:** We do have a team that works on how we utilize the computers the most. That’s actually one of the RL scaling issues – to utilize the computer very efficiently. So their purpose would be to minimize the compute use and then train more.

Personally speaking for me, I don’t really have a GPU constraint because we have a great team who works on it to utilize the compute most while stabilizing the training most.

**Ksenia: Do you have problems that you need to solve with your expertise on how to use it more efficiently? Or is it just that team?**

**Olive:** We are actually the same team. We’re actually the reinforcement learning team. We view this issue from different perspectives. It can be implementation. You can view it as a data perspective. You can view it at different perspectives. But our goal is the same.

Upgrade today (https://www.turingpost.com/upgrade)

———————————————————————————

## Open Source: Learning from the Community

**Ksenia: We’re always looking forward to new solutions that come from Chinese labs because they’re always mind-blowing.**

**Olive:** We are actually working on some new agentic reinforcement learning stuff, but it won’t really come out with 2.2. With the next-generation model, we are still working on it. I’m not sure what I can share or not. I can share it later when I have concrete conclusions, as I said before. I can’t really say something that we don’t document yet.

**Ksenia: Will it be available when the model is out?**

**Olive:** That depends on our timeline. I’m not very confident yet, but we’re dedicatedly working on it.

**Ksenia: A lot of constraints talking to researchers! Well, if we talk about openness, this whole conversation that I’m having with people right now in this quarter is about open source. I wonder if you can talk about the company strategy. Why did the company decide to go and publish open weights of the models? What’s the benefit? What are the cons?**

**Olive:** For our team, for the researchers’ team, we always wanted to go open source because **the open source community is fantastic**. I learned that from day one when I joined the team.

So as researchers, we did want to join the open source. But then on the other hand, speaking of the cons, we are a company, and people can care about if this can sell or if this is a business. So the cost would be: if the weights are open source, fewer people will use APIs.

But then as a researcher, that really isn’t my focus that much. So I’m not very confident about the company strategy for the tech parts. We just believe that we can **build better models with the open source community**.

**Ksenia: How much do you use open source tools yourself from different other companies?**

**Olive:** A lot. For example, inference – we use, I’m not sure if I’m allowed to say specific open source branches, but we collaborate with both **vLLM** and **SGLang**. They are open source code repositories.

———————————————————————————

## The Open Source Stack

**Ksenia: How do you look at the open source stack? Because when we talk open source, sometimes it’s perceived as one thing, but actually it’s multilayered. How do you look at it?**

**Olive:** For example, there are a lot of open source agent scaffolds – both coding agents and general agent scaffolds – that we use ourselves to test our models. And then we look at their logic, we look at their code to see how they design specific scaffolds and, for example, engines.

And then we take what they worked on that was really good. And then we reflect on how we think about the problem, how we structure the problem, if we’re on the same page and stuff like that. So **we learn from each other**.

**Ksenia: Do you think teams underestimate how much engineering discipline open models require compared to using closed APIs? It always requires a lot of setting up, and it’s different compute, and you need to have talent for that to use it – engineering talent – instead of just choosing closed API, turning it on and using it. Do you have any difficulty with that, or just inside the company, is the open source stack established and working?**

**Olive:** Personally, I don’t have a problem with that. There are other open source models, and if they publish, I’ll just download it and deploy it on a machine and then work with it if I want. Personally, I don’t have that issue.

But if there are personal developers out in the wild, I understand the problem, especially when they don’t have their own compute. Then it will be easier to connect to a model through, for example, OpenRouter and stuff like that.

**Ksenia: Do you use a lot of other open models? Do you play with them?**

**Olive:** Yeah, I play with them. I would play with them day one. If they release at midnight, I play with them at midnight.

**Ksenia: And you are, like, taking notes?**

**Olive:** I don’t actually take notes, but I do have my personal evaluation stack. It lists fun questions that I like to test with every single model to see how they respond.

**Ksenia: Can you tell me about it? That’s super interesting.**

**Olive:** Yeah, I’ve been collecting a bunch of questions since I entered the company on different areas, including logical reasoning, including mathematics, proofs, including report writing, including agentic tasks and stuff like that. And some of them are – I just like to see how the model reacts to these problems and how they approach it.

And different models have different personalities when approached. That’s true. And you always need to adjust them.

WATCH THE FULL VIDEO (https://www.youtube.com/watch?v=GkUMqWeHn40)

———————————————————————————

## Evaluation: Five Questions Aren’t Enough

**Ksenia: If we want to give like a little guide to people who want to evaluate a model themselves, can you give me examples of the questions? Like, five questions you need to ask the model to understand how it works, if it works well?**

**Olive:** From the professional evaluation perspective, **five questions isn’t enough**. So if you want to do very standard and very fair comparison among models, we have to make it a very confident test. So there has to be a certain number of questions in each domain to see how the model performs. And usually you need to test it multiple times because models are not very stable themselves.

If you’re testing for fun, use the fun questions. But if we are actually assessing the model’s capabilities, we need some sets that are very fair among different models. That’s correct, because some problems are not correct. Some questions, the answers are not single, for example. And sometimes when we run the test, the environments are not fixed.

For example, the golden answer wouldn’t pass and stuff like that. So if we’re doing professional evaluation, we have to make sure the evaluations are correct. They’re diverse. They’re above a certain threshold so that the test is confident.

**Ksenia: You mentioned characters. How do you work with your model’s character?**

**Olive:** I don’t work on my model’s characters. OK, that’s how I think of this issue. A general model should have all characters, or it should be able to perform all characters. It might have a default character. If the user wants it to be a different character, it should be. If the model is injected with a system prompt, it should be. That’s how I view this issue.

**Ksenia: I find it hard to adjust to new models because they’re so different in terms of character all the time. I just don’t even understand why it happens.**

**Olive:** I think it has to be something related to the data that the model was trained on, the different patterns the models have been trained on. And also different people, different teams might have their own constitution – in the system prompt or as the model’s default behavior.

———————————————————————————

## Where Open Models Fail First

**Ksenia: If you look at open models in production today, where do they fail first? Open models specifically – like reasoning, tool use, state tracking, evaluation blind spots – there are all those risks for open models. Where does it break first?**

**Olive:** I think **open models are not very good at adjusting to different environments** from what I see right now. We can see, for example, Claude, right? People use Claude in different coding environments and then people think they perform well in all environments with different tool definitions and stuff. But I don’t feel like the current open models can achieve that accuracy or that level of understanding of the different environments.

**Ksenia: Why? Where is the problem?**

**Olive:** I don’t know how Claude does it, but for me, I think it is a solvable problem and we are working on it. We are improving it in 2.2, but it’s still not as good as, for example, Opus. But for 2.5, it might be. We do have some systematic research going on in the area that has shown some results now, but still it’s not a concrete conclusion, so I won’t say it.

**Ksenia: I’m so curious, but do you think it’s the problem of compute? Because they have this infinite amount they can just throw at it?**

**Olive:** I feel like compute is one side, but **how we structure the problem and how we approach it is another side**, and that’s where we’re more confident that we can solve the issue.

———————————————————————————

## MiniMax 2.2: Better, More Stable, Longer Horizons

**Ksenia: What can you tell me about M2.2, if it’s launched by the time this interview is out? Can you give me some overview?**

**Olive:** Better coding, obviously, and better multilingual coding, obviously, and **more stable than before**. It has better performance in the areas of 2.1 – different areas are better. More stabilized, longer horizons, and stuff like that.

And we are testing it in different environments right now, and we believe that it’s better than before. So different coding environments, even environments that we haven’t seen before, even environments that are totally out of distribution – we see some very promising scores that are higher than 2.1.

———————————————————————————

## Staying Updated: An Internal AI Researcher

**Ksenia: I wonder how do you stay updated to everything that happens, which is super hard because the pace is just insane. You said when the models are out, you’re playing with them. Do you read research papers? Can you tell me how you stay up to date and what inspires you?**

**Olive:** There are different articles, different blogs going out every single day, and a bunch – all the information. How we deal with it is that we have an **internal agent that tracks all the new articles and blogs and papers**. And then it dispatches to different subjects and then it summarizes and then it analyzes and researches.

So we have an internal researcher, if I call it, that does some filtering by itself, and then it gives what is filtered to us. And then we can improve the researcher if we think it doesn’t do well. And that’s how we filter out a lot of information first.

And then we play with new code repositories with coding agents so that we can understand it more quickly and then play with it more quickly. So we’re keeping up with all the improvements with agents and with our models for our models.

WATCH THE FULL VIDEO (https://www.youtube.com/watch?v=GkUMqWeHn40)

———————————————————————————

## From Papers to Fundamentals

**Ksenia: That’s fascinating. When you became a researcher, when you chose this path, what did you think you would be doing, and what are you actually doing? Is it close?**

**Olive:** That’s a really good question. When I joined the team, I thought I would be reading papers every day because that’s what I was doing during school, during lab. We would read papers, come up with ideas, implement ideas, run experiments. If the experiment results are good, we run it at a larger scale. I thought I was about to do that.

But then what I realized was that when joining the company and working for a couple of months, you already become pretty much **top of the area or the industry**, and you have to come up with something that’s really new, or you encounter problems that you just don’t know how to solve.

It’s not like you can read a lot of papers and then build up your thinking on the papers. It’s more like you need to really **understand the problems from the fundamental** and then think of it from the fundamental so that you can find the right solution.

And another thing would be that **engineering is very, very, very important**. I didn’t know that during school because during school or during labs, it’s more toys as compared to companies. It’s not that scaled up. But when you scale up data, you scale up compute, scale up people – you encounter engineering issues that you need to tackle very beautifully. And engineering is very important. That’s part two that was different from what I imagined. Pretty much these two, I feel like.

———————————————————————————

## Setting Goals: Collaboration with Experts

**Ksenia: When you work on the model currently, is it mostly that you’re solving problems that you see immediately from your hands-on work? Or is it that the company says, we have to achieve, let’s say, Opus results? How do you set the goals?**

**Olive:** There’s a meta goal at the company level. For example, we want to improve the AI capabilities in improving productivity, because that’s how people view it. So we have a company’s mission. As a single researcher in the team, we have our own missions that we set our own goals with.

**Ksenia: What is your goal currently?**

**Olive:** For the next generation, I would really want the model to be working elegantly with experts. So it’s more like **better collaboration with experts, with developers**. That’s my goal as well, but that’s maybe two versions away, I think. I think we’re launching one version about per month or a month and a half.

For longer horizon, we’re definitely working on it. But then for me, for the goal that I set along that path, that’s a three-months-away thing. But for the better collaboration thing, that’s a one-month or two-months-away thing.

———————————————————————————

## Toward Continual Learning

**Ksenia: I wanted to ask you a little clarification question about interleaving learning. You were talking at AI Engineer Summit also that the model doesn’t settle on one action. It’s constantly in the loop of asking more questions and trying things. How do you look at it? Is it continual learning? Is it part of it? What do we need to solve to have the model continuously doing this learning for longer and longer horizons?**

**Olive:** That has some overlaps with the defined concept of continual learning. By overlap, I mean I think both conceptually and technically, but I don’t feel like they are exactly the same, or the things that I talked about at the summit were not at the level of full continual learning. It’s more on the path to that.

**Ksenia: How do you see it being solved? Any ideas?**

**Olive:** We do think that’s a different problem definition, or that’s a different way of the model working with people. And we are working on that now with our own defined question. But if I need to say how we approach it, I would say we would approach it through experiments.

That’s a very interesting question on continual learning. And it’s still very exploratory, right? That’s definitely what we’re going at. But then it has different phases or different stages. We might approach stage one first while exploring more stages later.

**Ksenia: And they’re not yet outlined, the stages?**

**Olive:** Outlining stages – we do have our internal definitions that I didn’t prepare today. I would say first would be to be more stabilized in long-horizon tasks and what I said at the summit. And then the next thing would be optimization.

**Ksenia: If you can repeat it because people don’t know what you said.**

**Olive:** So for example, we see a model – it receives environment feedbacks in a new environment. It needs to know what to explore and what environments to see, because it’s a partially observed environment. It needs to know the actions that it takes to receive better information and better reactions and then perform harder, more complex tasks in the environments. That’s stage one, right? That’s pretty simple.

Basically, all agent models can do that to some extent, maybe not perfectly, but to some extent. And that’s how we can actually solve it with our current algorithms.

But we do see different norms of how the model improves itself in an environment that we don’t have a concrete conclusion yet. Maybe in 2.5 we will. That will be a different definition than what I said. **The model itself would be defining its own goal.** That’s something that would be different.

———————————————————————————

## AGI: We’ll Know It When We See It

**Ksenia: Thank you so much. One of my last questions is often about AGI. Do you believe in AGI? And if yes, how does it look to you?**

**Olive:** Okay, that’s a very large question. People talk about AGI and ASI every day. Actually, when I was interviewing with MiniMax, when I was interviewing with our CEO, I said the same thing, because he asked me the same thing.

And what I said was that I think people talk about AGI, people have different definitions of AGI, but **we can only know the definition of AGI when we achieve it**. Or it is still progressing so fast that the definition even changes every day and people have different comments on it.

But what I think is more important is we actually work toward it, work toward our own sense of AGI. And as long as we figure it out, it becomes true. And that’s what I said during the interview, and that’s still my view today. **The definition will become true when it becomes true.**

**Ksenia: When we see it, we know it’s AGI.**

**Olive:** Yes, exactly.

**Ksenia: But we’re not there yet.**

**Olive:** No, there can still be better AI intelligence for sure.

Upgrade today (https://www.turingpost.com/upgrade)

———————————————————————————

## The Art of Creativity

**Ksenia: Last question. What was the book that influenced you the most? And it can be a recent book or a book from your childhood.**

**Olive:** Let me just double-check the name though. Something like _The Art of Creativity_ or something that I read during undergrad. So it’s a long time. I don’t remember the exact name. Yeah, there is a book called [_The Art of Creativity_](https://www.amazon.com/Art-Creativity-Habits-Highly-Creative/dp/1409183084).

**Ksenia: How did it influence you?**

**Olive:** It opened up how I think of my own mind a lot, and then how I view the world and how I view problem-solving. For me now, **problem-solving is more of discovery**. That’s how I would summarize it in one quote.

_This interview has been edited and condensed for clarity._

Leave a comment (https://www.turingpost.com/p/olive?_bhlid=4eaa234680798ad3bdb45514b5705f029891f88c?comments=true)

———

You are reading a plain text version of this post. For the best experience, copy and paste this link in your browser to view the post online:
https://www.turingpost.com/p/olive
