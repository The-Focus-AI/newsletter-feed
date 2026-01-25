---
id: 19be29417b70ef3b
newsletter: turing-post
newsletter_name: "🔳 Turing Post"
category: tech-ai
subject: "AI 101: An Insightful Guide to VLA/VLA+ models"
date: Wed, 21 Jan 2026 22:01:52 +0000 (UTC)
---

# AI 101: An Insightful Guide to VLA/VLA+ models

**From:** "🔳 Turing Post" <turingpost@mail.beehiiv.com>
**Date:** Wed, 21 Jan 2026 22:01:52 +0000 (UTC)

---

Long ago, robots started to work in structured settings, mostly in industry, where they took on the role of ambassadors of automation, following a clear program of action with a defined starting point and outcome. There was no need for flexibility, because everything had to follow strict rules. Now, robots are entering the real world, full of chaos and constant change. In this new age, they are starting to learn how to perceive, think, and act continuously, and that's why everyone is talking about **Physical AI **now – it's what makes this robotic shift possible.

**And today, we're witnessing the next evolution: VLA+ models.**

Just this morning, _Microsoft Research_ released **Rho-alpha (ρα) **– their first robotics model, **built on the Phi family**, and it's doing something fundamentally different. While most Vision-Language-Action (VLA) models stop at vision and language, Rho-alpha **adds tactile sensing** to feel objects during manipulation, and **online learning** that lets it improve from human corrections in real-time, even after deployment. Microsoft is calling this a VLA+ model, positioning it as an extension beyond what current VLA systems support. But to understand why this "plus" matters, we need to understand what came before.

**Vision-Language-Action models (VLAs) are the core of Physical AI,** they are bridges between the real world and robots that translate unstructured human language and sensory input into executable robotic actions, keeping this explicit connection of** vision → language → action constant. **How did we get to VLA+?

The VLA journey reveals strikingly different visions. _Google_ bet on massive scale and embodied reasoning (**Gemini Robotics**). _Physical Intelligence_ built general policies through flow-based action modeling (**π0**). _Hugging Face_ went the opposite direction, making VLAs tiny enough for consumer GPUs (**SmolVLA**). _Figure_ gave humanoid robots a dual-system brain inspired by human cognition (**Helix**). Chinese researchers used mixture-of-experts to prevent knowledge loss (**ChatVLA-2**). One team moved reasoning into action space itself (**ACoT-VLA**). And NVIDIA proved you could reach state-of-the-art by treating actions as simple text (**VLA-0**).

Each approach opens up a different secret about connecting vision, language, and action. Together, they created the foundation that makes VLA+ possible. Today, we're taking you through this entire landscape – so you'll understand not just what these models do, but _how_ to build them and where robotics is heading next.

Follow us on 🎥 YouTube (https://www.youtube.com/@RealTuringPost)

**In today’s episode, we will cover:**

* _What are Vision-Language-Action models?_

* _Gemini Robotics: Embodied reasoning is the key_

* _π0: Building one general robot policy_

* _SmolVLA: A VLA accessible on any device_

* _Helix system for humanoid robots_

* _Mixture-of-Experts as a VLA backbone_

* _Action Chain-of-Thought: Moving reasoning to the action space_

* _VLA-0: How to create a VLA by doing less_

* _Microsoft's Rho-alpha (ρα): From VLA to VLA+_

* _Conclusion _

* _Sources and further reading_

## What are Vision-Language-Action models?

Before we dive into the competing approaches that led to VLA+, let's first understand **what makes a Vision-Language-Action model work** in the first place.

The idea of VLA is to help robots interpret what they see, understand instructions, and act in the physical world. To do this, **VLAs combine perception, language understanding, and control in a single system**. They push robot learning toward foundation-model-style control, where just one model can handle many tasks by leveraging pretrained multimodal knowledge.

Most VLA models are built around three core components:

* **Vision-Language backbone:** VLAs typically start from a large Vision-Language Model (VLM) pretrained on image–text data. VLMs already know how to recognize objects, understand text, reason spatially, and even solve math problems.

* **Action interface:** On top of the VLM, VLAs add a mechanism to produce robot actions. Depending on the design, this can be direct action prediction (continuous control), action chunks or trajectories, or structured action representations learned from demonstrations.

* **Multimodal inputs:** VLAs usually condition on camera images, natural language instructions, and often robot state like joint positions, gripper state, and others.

A good VLA model should accomplish two missions well: **preserve open-world reasoning** from the VLM, and correctly **turn that reasoning** – what a robot sees and is told –** into actions.**

Now let's see the most illustrative ways teams have solved this challenge, each demonstrating a different architectural insight →

----------
## Gemini Robotics: Embodied reasoning is the key

One of the most talked-about VLAs comes from Google DeepMind, and their bet was on reasoning itself. They started with **Gemini 2.0** – a VLM that could see, describe, and reason about images, including spatial and physical relationships, but couldn't act.

With additional training focused on embodied reasoning, they extended it into **Gemini Robotics-ER**. This version can reason about the physical structure of the world and understand how actions would play out. It understands where objects are in space, infers relationships like distance, orientation, and containment, tracks objects across multiple camera views, predicts simple motion paths based on task descriptions, and reasons about how an action would change the scene.

This already makes the **Gemini model applicable for basic robot control, without any robot-specific training. **It does this** through zero-shot control **by generating code that uses perception and control APIs, and **few-shot control** by imitating a small number of example trajectories provided in the prompt.

The key insight from Google here is that **embodied reasoning can emerge inside general multimodal models like Gemini 2.0**, and that this reasoning can be reused across tasks, environments, and robots. But Gemini 2.0 itself is not a full robotics system.

As the next step, **Gemini Robotics** appeared, built on top of Gemini Robotics-ER, turning its reasoning ability into a full VLA model that takes images of the scene plus a text instruction and turns them directly into robot actions.

From such models, we need minimal latency and maximum efficiency for physical control, while still benefiting from a large, general-purpose model. DeepMind split Google Gemini into two parts for this:

* A **cloud-based model** which handles vision, language, and high-level reasoning to understand what's going on and what needs to be done.

* A **local action decoder** on the robot that turns the decisions into concrete real-time movements the robot can execute.

View image: (https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/uploads/asset/file/90085c84-e228-41d7-a12d-9712773c1401/image.png?t=1768906212)
Caption: Image Credit: Gemini Robotics original paper

Out of the box, Gemini Robotics can solve many short-horizon dexterous tasks, such as opening containers and drawers, pouring and placing objects, manipulating deformable items like cloth or cables, and coordinating two hands in cluttered environments.

It also follows natural-language instructions, even in scenes with unseen objects or new layouts, and Gemini Robotics bets on generalization. But it doesn't fully solve robotics. Long-horizon planning and extreme dexterity are still challenging. In any case, this is Google DeepMind's important statement in foundational physical AI.

View image: (https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/uploads/asset/file/8f7d4a7b-eac2-4b68-b65f-fa751d67246c/image.png?t=1768907204)
Caption: Image Credit: Gemini Robotics original paper

———————————————————————————

## π0: Building one general robot policy

While Gemini Robotics turns large multimodal models into general robot policies through embodied reasoning extended with a cloud-to-robot architecture, Physical Intelligence proposed a different path entirely – one that** treats action generation as a first-class modeling problem.**

They take a pre-trained VLM (in their case, PaliGemma) and pair it more tightly with continuous action modeling via a dedicated flow-matching action expert to create **π0** – **a generalist robot control model.**

Its separate action expert module is trained jointly with a single transformer backbone for both perception and action. Training happens on many robot configurations like single-arm and dual-arm robots and mobile manipulators, with different action spaces (this is also called cross-embodiment training) to achieve the needed level of generalization.

View image: (https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/uploads/asset/file/ba01114a-e43a-4761-9f0b-04cad45901ba/image.png?t=1768944314)
Caption: Image Credit: π0 original paper

So, π0's **main difference** from Gemini Robotics is that **it directly encodes continuous motion distributions rather than relying on discrete decoding or planning modules**. Thanks to this, and by using a diffusion-style mechanism, it predicts chunks of future actions, like a 50-step action sequence.

This matters because robots move continuously through space, and predicting trajectories rather than single timesteps lets the model capture smooth, coordinated motion. It's the difference between telling a robot "move your arm here" versus "here's the path your arm should follow."

Most VLAs like Gemini Robotics and π0 are really large models, increasing their capabilities with scaling. **But how small can we make a VLA without breaking usefulness?**

———————————————————————————

## SmolVLA: A VLA accessible on any device

Hugging Face found the answer, and it involves rethinking what "necessary" means. They're working on making AI technologies accessible for everyone, through open source and by leaning into "smallness" and practicality of the models. Their VLA is no exception.

**SmolVLA** starts from a compact pretrained vision-language model, and to make it even lighter, the last layers of the VLM are removed, only a small number of visual tokens are kept, and the remaining layers embed three inputs: the language instruction, one or more RGB images, and the robot's sensorimotor state.

View image: (https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/uploads/asset/file/179c6190-a9ab-4fb4-9454-508b8d9746fa/image.png?t=1768947558)
Caption: Image Credit: SmolVLA original paper

These combined representations are then passed to a small action expert responsible for producing robot actions. The architecture of SmolVLA and its working style is similar to π0, except for one special feature – it uses an asynchronous inference setup to make very fast responses. Perception and action prediction run separately from action execution. While the robot is executing one chunk of actions, the model can already process the next observation and predict future actions. That's why control rates stay high even on limited hardware.

There are many advantages to pursuing efficiency instead of scale:

* SmolVLA can be trained on a single GPU, and also on consumer GPUs or even CPUs;

* It performs competitively with VLA models that are roughly 10× larger;

* It works both in simulation and on real, low-cost robots.

So SmolVLA indeed lowers the barrier to entry, making it possible for more researchers, labs, and hobbyists to experiment with VLA models using open code, open data, and affordable robots.

———————————————————————————

## Helix system for humanoid robots

While some models aim for universality, others **narrow their specialization to a particular type of embodied AI **– and sometimes that focus unlocks capabilities that general models can't reach.

Figure, the creators of Figure 03 robot, developed a **VLA specifically for humanoid robots **with a focus on controlling the entire upper body in real time. They followed an idea: **general reasoning and fast control do not have to live in the same model, but they must be tightly connected.**

Their VLA is called **Helix** and it turns language understanding directly into coordinated humanoid motion to master the control of robots that have many joints, move continuously, and operate in messy environments like homes.

Helix uses **a two-system architecture**, inspired by the idea that different parts of intelligence operate at different timescales:

View image: (https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/uploads/asset/file/f068fd58-6e1e-4f42-aa47-6e092cedae19/image.png?t=1768979841)
Caption: Image Credit: Helix: A Vision-Language-Action Model for Generalist Humanoid Control blog post

* **System 2** (slow and semantic) is a large VLA (about 7B parameters), pretrained on internet-scale data. It runs at a low frequency of ~7–9 Hz in the background, updating the semantic intent, and handles tasks like understanding the scene, interpreting language instructions, and reasoning about objects and goals. System 2 compresses all of this into a single continuous latent vector that represents "what the robot is trying to do."

* **System 1** (fast and reactive) is a much smaller model (about 80M parameters) that runs at 200 Hz. It runs continuously in a tight real-time control loop. System 1 takes current camera images, robot state (hands, fingers, torso, head), the latent vector from System 2, and turns them into continuous control commands for the humanoid's full upper body.

Using this separate architecture, Helix **can "think slowly"** about goals but **still react quickly** to physical changes. Unfortunately, Helix **still depends on high-quality teleoperation data and lacks explicit long-term world models**, but it is the reason why Figure 03 robots can pick up thousands of unseen household objects using only language, perform long-horizon tasks without predefined scripts, and work in collaborations of two robots with the same model weights, adapting motions in real time.

The next approach makes an interesting addition to the classic VLA architecture from a different angle – what if the VLM backbone itself needs restructuring?

———————————————————————————

## Mixture-of-Experts as a VLA backbone

All variants of VLAs we've discussed share one general feature – they're based on VLMs as a straightforward way to obtain the vision and language understanding so needed for VLAs. However, researchers from **Midea Group and East China Normal University** noticed that after training specifically for robot control, VLMs tend to forget part of their original knowledge.

Sometimes this backfires on simple tasks, like solving a basic equation written on a whiteboard, just because that exact case never appeared in the robot training data. It appears that VLM general capabilities and the new action component in VLAs may compete for the same parameters, which is the very cause of knowledge loss during fine-tuning.

That's why the researchers created their own VLA, called **ChatVLA-2**, which **uses a Mixture-of-Experts (MoE) design inside the VLM backbone:**

* One expert **focuses on multimodal understanding and reasoning** (vision, language, math, spatial logic).

* Another expert **focuses on robot action generation**.

View image: (https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/uploads/asset/file/6d185e8e-c25b-4dd5-bcae-6cd692942824/image.png?t=1768982745)
Caption: Image Credit: ChatVLA-2 original paper

This MoE architecture **prevents hard competition for parameters **and, at the same time, the model **keeps shared representations **where reasoning and action need to connect!

ChatVLA-2 also **adds a lightweight reasoning-alignment mechanism** to ensure that the action expert's outputs are consistent with the model's internal reasoning and don't drift to mimicking demonstrations blindly. The secret is in two-stage training: 

* **joint training**, where reasoning and action are learned together, 

* **action-only fine-tuning**, where the VLM backbone is frozen and only the action expert is updated.

The second stage encourages the action module to rely on preserved reasoning and not overwrite it when it is already correct.

With ChatVLA-2 as a "brain" preserving fundamental VLM knowledge, robots can do things like read and solve a math problem from a whiteboard and pick the right card, or follow new spatial instructions to place unfamiliar objects correctly.

As a result, **ChatVLA-2's approach focuses on preserving correct reasoning and spreading its effect on the action part**. But there are also some uncovered secrets in the action space itself.

———————————————————————————

## Action Chain-of-Thought: Moving reasoning to the action space

A recent approach from **Beihang University and AgiBot** argues that many previous methods reason in the wrong space. **If the goal is better actions, then reasoning itself should happen in action space.**

For this, the researchers replace language or visual chain-of-thought with a chain of action-level reasoning, which they called **Action Chain-of-Thought (ACoT)**.

Guidance like "move to object → grasp → lift" (language), or "this is what the goal image looks like" (vision), is too semantic and abstract for robot actions that are continuous, high-dimensional, and kinematic. ACoT brings back that kinematic meaning with coarse action intents, such as approximate trajectories or motion patterns, that already live in the same space as the final control commands.

**ACoT-VLA** has two complementary components:

* **Explicit Action Reasoner (EAR)** – generates coarse reference trajectories in action space. These are rough motion sketches (similar to demonstrations) that indicate how the robot should move. EAR is a lightweight transformer that takes multimodal input (images + language) and outputs these coarse action plans.

* **Implicit Action Reasoner (IAR)** – extracts latent action priors from the multimodal inputs. It infers what kinds of actions are plausible given phrases like "reach toward" or visual cues like object orientation. This is done through cross-attention between multimodal features and learnable queries, producing soft constraints over the action space.

View image: (https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/uploads/asset/file/557ed720-d71e-4567-ac18-797c11dfc136/image.png?t=1768992737)
Caption: Image Credit: ACoT-VLA original paper

So while** EAR provides explicit motion guidance, IAR gives implicit behavioral bias.** This is how they form the Action Chain-of-Thought, which conditions the final action policy and guides low-level control in a grounded way.

But what if we don't add any of these additional architectural tricks to VLMs at all?

———————————————————————————

## VLA-0: How to create a VLA by doing less

NVIDIA researchers explored an intriguing idea: **what's the minimal way to turn a VLM into a robot controller? **The key design choice is what _not_ to change – no new tokens, no new layers, no changes to the vocabulary.

This **VLA-0** model represents robot actions as plain text and generates them with its normal text output. Here's how it works:

View image: (https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/uploads/asset/file/20441175-2211-4e27-b453-dd9acfe09a3e/image.png?t=1768993001)
Caption: Image Credit: VLA-0 original paper

* Continuous robot actions are first normalized to a fixed integer range (for example, 0–1000).

* Each action dimension becomes an integer.

* The VLM generates a long sequence of integers representing multiple future timesteps.

Resolution can be increased just by changing the numeric range, without touching the model.

VLA-0 also includes an interesting training feature: **Masked Action Augmentation** randomly hides parts of the target action sequence during training, so the model won't simply continue numeric patterns mechanically. Just as intended, **VLA-0 keeps relying on the image and instruction to infer actions**, improving robustness and reducing overfitting.

To prove that this straightforward approach works, here are the results: 

* On the LIBERO benchmark, VLA-0 reaches a 94.7% average success rate, outperforming all VLA models that do not use large-scale action pretraining, and also beating several well-known pretrained models like π0. 

* In real-world tests, it also outperforms SmolVLA by 12.5 percentage points, despite using no large robot pretraining data.

Sometimes the simplest path forward is the one that changes the least.

And now, with this landscape mapped, we can return to where we started: Microsoft's leap to VLA+. 

———————————————————————————

## Microsoft's Rho-alpha (ρα): From VLA to VLA+

Just today, **Microsoft** introduced its first robotics model derived from their famous [Phi family of vision-language models](https://www.turingpost.com/p/phi3). Еhey called it **Rho-alpha (ρα)** and it **targets bimanual manipulation under natural-language control. **It takes language instructions and turns them into low-level control signals for dual-arm robotic systems.

The main thing is that this model is positioned as a step toward a **VLA+ model**. Let's see why.

Rho-alpha extends perception and learning beyond what most VLA systems support today.

* **On the perception side**, Rho-alpha** integrates tactile sensing** in addition to vision and language. The model **starts to reason about how objects feel** during interaction, which is essential for tasks like plug insertion, packing, or manipulating objects with tight tolerances. These capabilities will be extended further to other narrow modalities like force sensing.

* **On the learning side**, this new VLA+ model** keeps improving during deployment**. When a robot makes a mistake or gets stuck, a human operator can intervene via teleoperation or a 3D mouse or other tools, and Rho-alpha learns from this corrective feedback online.

Both these sides make adaptability central rather than incidental. With tactile sensing, the model can detect mismatches between intended and actual outcomes during interaction, plus update its behavior while deployed. Adaptation to errors and changing conditions becomes a primary expression of intelligence and not something that is fixed after the fact.

We should remember though** that one of the biggest bottlenecks in robotics is data. If we talk about tactile sensing, there is no web-scale corpus** of such tactile embodied interaction.

Rho-alpha addresses this problem through a hybrid training pipeline: 

* physical demonstrations collected from real robots, 

* large-scale simulated trajectories generated with reinforcement learning,  

* web-scale visual question answering data used to ground perception and language.

**Simulation plays a central role here**. Microsoft Research uses **NVIDIA Isaac Sim** to generate physically accurate synthetic data, including interactions that are difficult or impractical to collect via teleoperation alone. This simulated data is combined with real-world robot datasets (commercial and open) to make up for the lack of tactile data.

**So, what can this model do today?**

In demonstrations, Rho-alpha controls dual-arm robot setups to perform tasks such as:

* **Manipulating the BusyBox** (a physical interaction benchmark introduced by Microsoft Research) following natural-language instructions.

Youtube: Microsoft's Rho demonstrating dealing with Busy Box (https://youtu.be/eARdWFQRE2I)

* **Plug insertion**, where tactile feedback is the core thing and human guidance can correct failures in real time.

Youtube: Mocrosoft's Rho demonstrates plugging in power outlet (https://youtu.be/6mAxFsg4P9M)

* **Toolbox packing and object arrangement** with bimanual coordination.

So, Rho-alpha is currently being evaluated on dual-arm systems and humanoid robots, with ongoing work focused on end-to-end optimization of the training pipeline and data efficiency. This is a part of **Microsoft’s longer-term push toward foundational physical AI**, and Rho-alpha is a scalable blueprint for adaptable, learning physical systems with a more extended loop, where language, perception, touch, and human feedback stay all together.

A full technical description is expected in the coming months, and we hope there will be much more to explore then.

———————————————————————————

## Conclusion

In this episode, we've walked through a landscape of VLA models, each presenting their own path from VLM perception, understanding, and reasoning to what robots can execute in the real world. To make it clear how to choose a model or an idea for building a VLA model for your purpose, here is a summary of the exclusive features:

* **Gemini Robotics'** strengths lie in large pre-trained vision and specially developed embodied reasoning of Gemini 2.0, paired with cloud-to-robot control latencies, real-world robot fine-tuning, and language grounding.

* **π0's** unique claims are continuous action modeling via flow matching, chunked action sequences, and a unified transformer with an explicit action expert – all trained on a large, cross-robot pre-training mixture. Everything for high generalization.

* **SmolVLA** makes VLAs accessible for everyone and every device. It's a mixture of a small VLM and a solid training strategy. Start with it if you have limited resources.

* **Helix** is the brain for humanoid robots. It doesn't spread itself thin. It's clearly focused on upper-body robot control, allowing different parts of intelligence to operate at different suitable timescales.

* **ChatVLA-2** shows that VLA models don't have to sacrifice reasoning to gain control. With the right architectural separation (like in MoE) and training strategy, a robot can keep all its previous knowledge in place while still acting effectively.

* **ACoT-VLA** reframes "reasoning" for robotics, moving from semantic to kinematic guidance. Instead of asking models to think in words or images and hope that turns into good actions, it asks them to think in actions space first and then act.

* **VLA-0** avoids unnecessary complexity on VLMs and represents robot actions as plain text, generating them through its normal text output.

* **Rho-alpha** extends VLAs into VLA+, treating adaptability as intelligence: tactile perception plus online learning let the robot keep improving after deployment.

VLAs help robots do things, acting as an "interface" between perception, language, and action, and you can define the rules of how this interface works. But VLAs don't fully solve robotics – there are many more pieces needed to complete the puzzle: world models, memory systems, long-horizon planning, data engines, prediction, and safety. The real challenge now is making all these components work together for the upcoming age of Physical AI.

Share the newsletter (https://www.turingpost.com/subscribe/948d33f5-1efe-47e9-a00b-5385c4aacdad/referrals?_bhlid=1a0c30b1d1c828aa8b4c44d5069ae964f39996f9)

## Sources and further reading

* [Gemini Robotics: Bringing AI into the Physical World](https://arxiv.org/abs/2503.20020)

* [π0: A Vision-Language-Action Flow Model for General Robot Control](https://arxiv.org/abs/2410.24164)

* [SmolVLA: A vision-language-action model for affordable and efficient robotics](https://arxiv.org/abs/2506.01844v1)

* [Helix: A Vision-Language-Action Model for Generalist Humanoid Control](https://www.figure.ai/news/helix)

* [VLA-R1: Enhancing Reasoning in Vision-Language-Action Models](https://arxiv.org/abs/2510.01623)

* [VLA-0: Building State-of-the-Art VLAs with Zero Modification](https://arxiv.org/abs/2510.13054)

* [ChatVLA-2: Vision-Language-Action Model with Open-World Embodied Reasoning from Pretrained Knowledge](https://arxiv.org/pdf/2505.21906)

* [ACoT-VLA: Action Chain-of-Thought for Vision-Language-Action Models](https://arxiv.org/abs/2601.11404)

* [Action100M: A Large-scale Video Action Dataset](https://arxiv.org/abs/2601.10592)

* [VLA-Adapter: An Effective Paradigm for Tiny-Scale Vision-Language-Action Model](https://arxiv.org/abs/2509.09372)

* [CogVLA: Cognition-Aligned Vision-Language-Action Model via Instruction-Driven Routing & Sparsification](https://arxiv.org/abs/2508.21046)

**Resources from Turing Post**

* [AI 101: Inside Robotics](https://www.turingpost.com/p/insiderobotics)

* [Small Language Models: The Future of AI? Insights from Microsoft's Phi-3 Creators](https://www.turingpost.com/p/phi3)

--------------------

----------
———

You are reading a plain text version of this post. For the best experience, copy and paste this link in your browser to view the post online:
https://www.turingpost.com/p/vlaplus
