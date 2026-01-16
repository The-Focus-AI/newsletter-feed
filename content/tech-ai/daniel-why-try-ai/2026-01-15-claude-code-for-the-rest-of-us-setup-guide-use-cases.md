---
id: 19bc24add8e8b508
newsletter: daniel-why-try-ai
newsletter_name: "Daniel (Why Try AI)"
category: tech-ai
subject: "Claude Code for the Rest of Us: Setup Guide & Use Cases"
date: Thu, 15 Jan 2026 14:33:54 +0000
---

# Claude Code for the Rest of Us: Setup Guide & Use Cases

**From:** "Daniel (Why Try AI)" <whytryai@substack.com>
**Date:** Thu, 15 Jan 2026 14:33:54 +0000

---

View this post on the web at https://www.whytryai.com/p/claude-code-beginner-guide

As I was drafting this post, Anthropic announced Cowork , positioned as “Claude Code for the rest of your work.” It’s a more user-friendly way to experience some of the Claude Code functionality for non-coding tasks. But it’s currently limited to $200 Max accounts and MacOS users. So Claude Code is still the best way to learn the ropes.
I have a shameful confession to make.
Despite hearing great things about Claude Code  for months, I’ve been hesitant to actually give it a shot. I mean, why try AI if you can not try AI, am I right?
I don’t know if it’s the scary “Code” word in its name, the fact that it isn’t free, or the terminal interface that brings back painful childhood trauma of my MS-DOS and Norton Commander  days.
The point is, I kept reading about Claude Code without taking any action.
But Claude Code chatter wouldn’t stop. Substack included.
Charlie Guo  kept suggesting I try something like Claude Code or OpenAI’s Codex  since late last year. Alex McFarland  has built his entire writing system around Claude Code.
The final straw came last week, when Ethan Mollick  wrote “Claude Code and What Comes Next .”
So I caved.
“Fine, Claude Code. You win! I give up! Happy now?!” I screamed at the wall, startling both of my cats, who already view me with suspicion on the best of days.
That is the story all about how I finally installed Claude Code on my Windows laptop and took it for a spin.
And, yes, Claude Code truly just…does things. Whether you work with code or not, there are likely a bunch of practical tasks Claude Code can help you with.
If you’re in the same boat as I was, you’re in luck.
Let me show you how to get Claude Code running and what it can do for you.
What exactly is Claude Code?
In simple terms, Claude Code is “Claude that can take action.”
In slightly less simple terms, it’s a Claude-powered agent that runs in your computer terminal and can see and modify files and folders (within reason, relax!).
That may sound minor, but it’s the difference between simply discussing your work with Claude and having Claude actually work on…your work? 
Shut up, you know what I mean.
Why Claude Code and not “just” Claude?
Here’s a quick comparison:
Here’s what that means in practice:
Context scope: With Claude Code, you don’t have to manually upload files or paste text to provide context. It just sees everything within the designated folder.
Task horizon: Like any chatbot, Claude is built for back-and-forth interaction, one turn at a time. Claude Code, on the other hand, can create a multistep plan and run with it until it’s finished.
Help style: Claude is great for talking about things, while Claude Code is an agent that can go out and do things.
Works with: Claude Code can directly manipulate items and create new ones, unlike Claude that sticks primarily to text-based chat.
Best for: Claude Code is for when you need to actually make stuff happen.
The bottom line is that with Claude Code, you chat and take action in one place, without having to switch windows, copy-paste text back and forth, or upload separate files to work on.
Claude Code is an all-in-one interface.
It’s just too bad that it’s not a particularly inviting interface.
But we won’t let that deter us, will we? 
Let’s get to work!
Setting things up
You can use Claude Code in many different environments:
On the web  (mostly for working with code repositories)
Inside the Claude Desktop app  (user-friendly but more limited)
Within an integrated development environment  (IDE) like Cursor
…even in your Slack messages .
But for today’s post, I’ll stick to the purest, vanilla-est implementation: Running Claude Code in your computer’s terminal window.
It’s the most flexible version of Claude Code, works directly with your local files and folders, and gives you the best baseline understanding.
1. Prerequisites
First off, check that your computer and operating system are up to scratch by going to: code.claude.com/docs/en/setup 
In the case of my Windows laptop, I also had to install the “Bash” above. 
The fix was very straightforward: I followed the error message to git-scm.com/install/win  and grabbed the relevant installer:
I then ran the file and installed it as any other Windows software:
You’ll see about a dozen selection screens during installation, but you can just leave all checkmarks at default and click “Next” on every screen.
Now you’re ready to get Claude Code running.
2. Installing Claude Code itself
The setup page  tells you exactly which commands to run depending on your OS:’
Windows PowerShell is what you’d typically want on a Windows PC.
Start the terminal by…opening the “Terminal” app from the start menu:
I recommend right-clicking on the app and selecting “Run as administrator” as above to avoid additional authorization checks.
You should now see this inviting, beautiful terminal window:
Now you simply copy-paste the relevant string from the setup page. In our case:
irm https://claude.ai/install.ps1 | iex
Hit “Enter,” and the setup should start:
If all goes well, Claude Code will be installed in less than a minute:
That’s it!
You’re ready to run Claude Code.
Mandatory disclaimer box: Depending on your system, you may run into some errors and dependencies, like I first did with git-bash:
The good news is, AI can help here, too. 
I solved every issue using my no-prompt prompting  concept and pasting error screenshots without additional commentary:
See? Simples.
3. Running Claude Code
⚠️ Important: Claude Code will have access to any files and subfolders within its working folder. Since it can modify and delete stuff, you don’t want to give it access to your entire drive.
I therefore strongly recommend running Claude Code within a dedicated, sandboxed folder of your choosing. In my case, I made one literally called “Claude Code.”
Navigate to that folder in your file explorer, then start the terminal from there by right-clicking within the folder and picking “Open in Terminal,” like so:
Now, Claude Code will only be able to see and work within that folder. 
To start Claude Code, simply type “claude” and hit Enter:
If it’s the first time you do this, Claude Code will ask you to log in with a paid account:
There are two ways to pay for running Claude Code:
Use a paid Claude subscription  (Pro or higher).
Use a pay-per-token Claude Console account  with pre-purchased credits.
Unless you only want to run a quick test on a minimum budget, I recommend going with the paid monthly subscription.
First, it’s much more cost-efficient and you won’t have to fiddle with APIs and credits.
Second, the more user-friendly UI for Claude Code in the Claude Desktop app only works with subscription accounts.
Finally, even if you decide that Claude Code isn’t for you, a paid subscription gives you many unrelated benefits (including access to the strongest Opus 4.5 model):
Once you log in with your paid account, you should see this message:
That’s Claude Code informing you of the risks and making sure it’s working in the right folder. If that’s the case, hit “Yes, proceed.”
You can now start chatting with Claude Code!
What to use Claude Code for…other than coding?
The short answer is: Pretty much anything related to the files (including their content) and subfolders in your working folder.
But that’s not very concrete, is it?
Let me suggest a fun way to dive in. Throw some stuff into your working folder, and type this:
Prompt: I’m new to Claude Code and I want to use it for things other than coding.  Look into the working folder, analyze its content, and suggest a few ways you can do something with it to demonstrate the benefits of Claude Code.
In my case, the only thing in the test folder was a “Screenshots” subfolder with 100+ unorganized screenshots, yet Claude managed to come up with several ideas after analyzing them:
As you can see, Claude Code even offers up its own coding skills to create useful mini-apps based on your content.
Let me show you two things I ended up doing just to test the waters.
Example #1: Finding and saving stuff from the web
First off, I wanted to see how Claude Code could handle the combined task of web search and local storage. So I asked the following:
Prompt: Find three public domain or otherwise free-to-use cat images online and save them in a “Cat” folder.
Claude Code gets to work and reports on its progress:
What’s really cool is that Claude Code picks its own tools for the job, independently self-corrects, and tries alternative approaches whenever it runs into issues.
None of this work required any involvement from my side whatsoever. I only had to occasionally approve proposed changes to local folders/files:
Very soon, Claude Code was done:
I now have a new “Cat” folder…
..and there are three cat pictures in it, as requested:
Success!
Note: There might be better ways to use the powers of web search and folder organization than finding random cat images, but I don’t know what those are.
Example #2: Renaming and organizing screenshots
For this test, I duplicated my “Screenshots” folder with 100+ images and placed it into the working “Claude Code” folder.
As you may know, default screenshot names aren’t that helpful, unless all you care about is the date and time they were taken:
So I asked Claude for help with a slightly more involved prompt:
Prompt: I want you to review all the pictures in the “Screenshots” folder, rename them according to their content, group them into several logical categories, create relevant subfolders for each group, and move all images belonging to that category into the corresponding subfolder.
Once again, Claude Code set off on its own, creating a plan, using its vision capabilities to see and understand the images, fixing roadblocks, and even making decisions about which files to rename or leave alone:
Claude understood the naming pattern and decided when to modify or avoid touching files with existing non-”Screenshot” filenames, including the infamous “Butt Nugget .”
After working for over seven minutes, Claude Code reported back with a helpful summary of its decisions and actions taken:
Behold! I now have a logical sub-folder structure for my screenshots…
…along with easy-to-parse filenames:
If I had to do something like this manually, I’d be looking at hours of work.
You could rightfully ask what kind of lunatic renames and organizes their screenshots like this in the first place, but to that I say: No, you’re crazy!
So…what now?
If I have done my job, then you know how to get Claude Code running on your computer and have at least a vague idea of what you can use it for.
Here are a few potential things to try with your own projects:
Research a topic online and organize findings in a local Excel sheet
Extract insights from local documents and turn them into a slide deck
Reorganize your messy files and folders
Set Claude Code loose on simple yet tedious or time-consuming file-related tasks
Ask Claude Code to code up a helpful mini-app or tool you can run locally
For instance, I have a few bigger plans of my own:
Export my Substack data, save it locally, and have Claude Code analyze it to come up with insights and recommendations
Export my chat history with every chatbot and see what learnings Claude Code can extract from such a massive context dump
Create a local app that automatically turns a standard Substack .zip export of multiple posts into a single text file to use as context for chatbots
This post was mostly just about getting Claude Code up and running, but there are many related topics I could dive into. Let me know what you’d find interesting:
A few safety tips
Unlike web-based chatbots, Claude Code runs directly on your computer and can make real changes to files and folders. Limit your risks by doing this:
Always start Claude Code in the intended working folder, as I’ve shown. Claude Code can edit or delete things inside that folders but not the rest of your drive.
Manually manage which files and subfolders you add to your working folder.
Keep backups of any critical files or documents.
Avoid adding any personal or otherwise sensitive info into the working folder. (Passwords, private docs or details, etc.)
Consider manually approving download requests. You don’t want Claude Code to accidentally grab a virus or, worse, an ugly cat picture.
Now go out there and Claude Code some things!
Why Try AI is a reader-supported publication. To receive new posts and support my work, consider becoming a free or paid subscriber.
🫵 Over to you…
The poll tells me what. A comment tells me why. Let me know what works or doesn’t.
Thanks for reading!
If you enjoy my work, here’s how you can help:
❤️Like this post if it resonates with you.
🔄Share it to help others discover this newsletter.
🗣️Comment below—I love hearing your opinions.
Why Try AI is a passion project, and I’m grateful to those who help keep it going. If you’d like to support me and unlock cool perks , consider a paid subscription:

Unsubscribe https://substack.com/redirect/2/eyJlIjoiaHR0cHM6Ly93d3cud2h5dHJ5YWkuY29tL2FjdGlvbi9kaXNhYmxlX2VtYWlsP3Rva2VuPWV5SjFjMlZ5WDJsa0lqb3lOVE00TVRReUxDSndiM04wWDJsa0lqb3hPRFF6TWpJMU9ETXNJbWxoZENJNk1UYzJPRFE1TVRJME1Dd2laWGh3SWpveE9EQXdNREkzTWpRd0xDSnBjM01pT2lKd2RXSXRNVEEzTnpRMk1pSXNJbk4xWWlJNkltUnBjMkZpYkdWZlpXMWhhV3dpZlEuVTE3ZHJEakM5ZnFuY1liSUVReEttQVd0ZFhzZXdFYnFUcTUyMVk3QjdpYyIsInAiOjE4NDMyMjU4MywicyI6MTA3NzQ2MiwiZiI6dHJ1ZSwidSI6MjUzODE0MiwiaWF0IjoxNzY4NDkxMjQwLCJleHAiOjIwODQwNjcyNDAsImlzcyI6InB1Yi0wIiwic3ViIjoibGluay1yZWRpcmVjdCJ9.mSkxABaJDYeouTDXlbSWt8gzZLlKgsPi_1OBi6CSB68?
