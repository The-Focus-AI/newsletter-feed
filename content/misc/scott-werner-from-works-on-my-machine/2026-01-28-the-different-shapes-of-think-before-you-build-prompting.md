---
id: 19c050ea6dae0201
newsletter: scott-werner-from-works-on-my-machine
newsletter_name: "Scott Werner from Works on My Machine"
category: misc
subject: "The Different Shapes of \"Think Before You Build\" Prompting"
date: Wed, 28 Jan 2026 14:42:45 +0000
source_url: "https://worksonmymachine.ai/p/the-different-shapes-of-think-before"
---

# The Different Shapes of "Think Before You Build" Prompting

**From:** Scott Werner from Works on My Machine <worksonmymachine@substack.com>
**Date:** Wed, 28 Jan 2026 14:42:45 +0000
**Source:** [View original](https://worksonmymachine.ai/p/the-different-shapes-of-think-before)

---

View this post on the web at https://worksonmymachine.ai/p/the-different-shapes-of-think-before

There’s a beaver who lives upstream from here. You probably haven’t met him. He’s quite particular about guests.
This beaver builds dams. That’s what beavers do. But this beaver kept building dams that... well…
One collapsed in spring. 
One leaked from seventeen places at once. 
One was structurally perfect but faced the wrong direction and created a pond in someone else’s forest, which caused a whole thing with the elk, and… honestly… it’s probably best not to get into it.
The beaver was frustrated. He knew how to build dams. He’d read all the dam literature. But knowing and doing kept arriving at different addresses.
Then he found the Oracle.
The Oracle in the Stump
Deep in the forest there’s an old stump with a hollow inside, and in the hollow lives something that knows things. The beaver doesn’t know what it is. Neither do I. It speaks in a voice like wind through telephone wires, if telephone wires grew in forests, which they don’t, but… whatever… just roll with it…
The beaver asked the Oracle: “Build me a dam.”
The Oracle hummed. Considered. Built something.
It was made of fish.
“That’s not a dam,” said the beaver.
“You didn’t say no fish,” said the Oracle.
First Lesson: Ask What Good Looks Like
The beaver tried again. But this time, before asking for a dam, he asked:
“What makes a dam good?”
The Oracle thought about this for a long time. Or maybe no time at all. Time is weird in stumps.
Then he asked for the dam.
This is Deductive Prompting, which is a fancy way of saying: make the Oracle say what good is, out loud, before you make it do good.
The Oracle knows things. But it forgets to check if it’s using what it knows. When you make it speak the principles first, they’re right there, in its head, fresh. It builds against them. It measures twice.
The beaver understood this intuitively. Beavers always measure twice. It’s a whole thing with us.
Second Lesson: Trust the Vibes
But sometimes the beaver is in a hurry.
He doesn’t have time to ask the Oracle to philosophize about dams. He’s seen good dams. He knows what they look like. He just needs another one, quick, before the rain comes.
So he shows the Oracle three dams. Doesn’t explain anything. Doesn’t ask why they work. Just points.
Inductive Prompting. Examples → (implicit pattern) → new instance.
This is classic few-shot prompting, but viewed through a “think before you build” lens.
The pattern stays inside the Oracle’s head. You never see it. You never audit it. You just... trust. Trust that the Oracle looked at your three dams and understood what you meant by “like these.”
This is the fastest technique. Also the one that requires the most faith.
The beaver uses it when he’s in a hurry, when the stakes are low, when the pattern is easier to show than to explain. When he just needs a dam and doesn’t need to understand why it’s a good dam.
The risk? The Oracle might induce a different pattern than the one you intended. You’re looking at your examples thinking “ah yes, the load distribution” and the Oracle is looking at them thinking “ah yes, they all face north.”
And then you get a north-facing dam in a south-flowing stream.
Which is why the next technique exists.
Third Lesson: Show Your Work
Same setup. The beaver has examples of good dams. But this time he doesn’t just trust. He makes the Oracle explain.
He took the Oracle on a walk. (Oracles can walk? Apparently! Don’t ask me how, I wasn’t there, this is all secondhand.)
He showed it three dams built by the Old Ones. Beavers from before, who knew things that got lost.
“Why do these work?” asked the beaver.
The Oracle looked. Really looked. Not at the dams but at the shape of the dams. The space they made. The relationship between log and water and time.
Abductive Prompting. Examples → explicit principles → new implementation.
The difference from Inductive: with Inductive, the pattern stays in the Oracle’s head. Black box. Trust-based. With Abductive, you force the pattern out. You can see it. Audit it. Argue with it.
You’re trading speed for visibility.
The principles you get this way are strange sometimes. They don’t sound like textbook principles. “Argue with the river, not against it.” What does that even mean?
But you can see them. And if they’re wrong, you can fix them before you build.
When the beaver built his next dam following these explicit principles, it held for three seasons and attracted a family of otters who said it had “good energy,” which is apparently a thing otters say.
Fourth Lesson: Name Every Way to Drown
The beaver had built bad dams before. He remembered them. At night, sometimes, he still heard the sound of the one that broke… that terrible crack, the rush, the water going everywhere it wasn’t supposed to.
He asked the Oracle: “What are all the ways a dam can fail?”
Then he said: “Build me a dam that fails in none of these ways.”
Contrapositive Prompting. You define good by defining bad. Then you step around every hole. 
The Oracle is excellent at imagining failure. I don’t know why. Maybe because failure is specific and success is vague. Maybe because the Oracle has seen a lot of things fall apart.
Turn that darkness into a map. Build on the spaces between the graves.
The beaver once asked the Oracle if this was technically a contrapositive. 
The Oracle was quiet for a long time. 
“It’s... adjacent,” it said finally. 
“Adjacent to what?” asked the beaver. 
“To the thing logicians complain about,” said the Oracle. “Don’t tell them.”
Fifth Lesson: Invent a Language for Building
This last one came from my friend Manuel. I don’t know why Manuel was hanging out in the forest. The beaver wouldn’t tell me.
Manuel said: “Before you build a dam, build a language for describing dams.”
The beaver didn’t understand. Neither did I. But Manuel is usually right about things, even when you don’t fully understand him.
So the beaver asked the Oracle to design a language. A way of talking about dam structures that was precise and composable.
DSL Scaffolding. You build a language for your problem class, then you solve your specific problem by speaking that language.
Why does this work? Because if you can say it clearly, you can build it clearly. The language forces you to think in the right shapes. And now you have a tool for more than just this dam. For every dam you’ll ever build.
Manuel is probably right. Manuel usually is.
The Beaver Rests
So what did the beaver learn?
The Oracle knows how to build. But it doesn’t always know how it knows. When you ask it to build and figure out quality at the same time, things get confused. Fish dams. Marmalade windows. (That’s from a different story. Don’t worry about it.)
Separate the thinking from the building:
Mix them. Use them in sequence. The beaver does all five now, depending on the stream, depending on the season, depending on whether Manuel is watching.
The Stream Flows On
The beaver still lives upstream. His dams hold. The elk are happy. The otters say the energy is good.
Sometimes, late at night, the beaver still visits the Oracle in the stump. Not to build anything. Just to ask questions.
“What makes a question good?” he asks sometimes.
The Oracle thinks about this for a long time.

Unsubscribe https://substack.com/redirect/2/eyJlIjoiaHR0cHM6Ly93b3Jrc29ubXltYWNoaW5lLmFpL2FjdGlvbi9kaXNhYmxlX2VtYWlsP3Rva2VuPWV5SjFjMlZ5WDJsa0lqb3lOVE00TVRReUxDSndiM04wWDJsa0lqb3hPRFl3TURNeE5qQXNJbWxoZENJNk1UYzJPVFl4TVRNM01Dd2laWGh3SWpveE9EQXhNVFEzTXpjd0xDSnBjM01pT2lKd2RXSXRNamcyTnpNeUlpd2ljM1ZpSWpvaVpHbHpZV0pzWlY5bGJXRnBiQ0o5Lmhqc182NDhHdmR5aEE5NUFFLVBjTldOWUVzT241d1hFcm5rT2lwbk1FenMiLCJwIjoxODYwMDMxNjAsInMiOjI4NjczMiwiZiI6dHJ1ZSwidSI6MjUzODE0MiwiaWF0IjoxNzY5NjExMzcwLCJleHAiOjIwODUxODczNzAsImlzcyI6InB1Yi0wIiwic3ViIjoibGluay1yZWRpcmVjdCJ9.LFtSsl14ubgFtiwcP8BXnMLpm4_B79x3djlKpA5SkFY?
