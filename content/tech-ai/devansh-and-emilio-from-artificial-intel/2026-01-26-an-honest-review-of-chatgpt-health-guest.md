---
id: 19bf885da26e790a
newsletter: devansh-and-emilio-from-artificial-intel
newsletter_name: "Devansh and Emilio from Artificial Intelligence Made Simple"
category: tech-ai
subject: "An honest review of ChatGPT Health [Guest]"
date: Mon, 26 Jan 2026 04:15:58 +0000
source_url: "https://open.substack.com/pub/artificialintelligencemadesimple/p/an-honest-review-of-chatgpt-health?utm_source=email&redirect=app-store&utm_campaign=email-read-in-app"
---

# An honest review of ChatGPT Health [Guest]

**From:** Devansh from Artificial Intelligence Made Simple <artificialintelligencemadesimple@substack.com>
**Date:** Mon, 26 Jan 2026 04:15:58 +0000
**Source:** [View original](https://open.substack.com/pub/artificialintelligencemadesimple/p/an-honest-review-of-chatgpt-health?utm_source=email&redirect=app-store&utm_campaign=email-read-in-app)

---

View this post on the web at https://www.artificialintelligencemadesimple.com/p/an-honest-review-of-chatgpt-health

It takes time to create work that’s clear, independent, and genuinely useful. If you’ve found value in this newsletter, consider becoming a paid subscriber . It helps me dive deeper into research, reach more people, stay free from ads/hidden agendas, and supports my crippling chocolate milk addiction. We run on a “pay what you can” model —so if you believe in the mission, there’s likely a plan that fits (over here) .
Every subscription helps me stay independent, avoid clickbait, and focus on depth over noise, and I deeply appreciate everyone who chooses to support our cult.
PS – Supporting this work doesn’t have to come out of your pocket. If you read this as part of your professional development, you can use this email template  to request reimbursement for your subscription.
Every month, the Chocolate Milk Cult reaches over a million Builders, Investors, Policy Makers, Leaders, and more.  If you’d like to meet other members of our community, please fill out this contact form here ( I will never sell your data nor will I make intros w/o your explicit permission ) - https://forms.gle/Pi1pGLuS1FmzXoLr6 
Today’s guest author is Sergei Polevikov . Sergei is a Ph.D.-trained mathematician, data scientist, AI entrepreneur, economist, and researcher with over 30 academic manuscripts. He co-founded WellAI, a digital health startup, and is a member of the IFCC’s Working Group on Artificial Intelligence and Genomic Diagnostics (WG-AIGD). Sergei also authors the popular and provocative Substack newsletter “AI Health Uncut ” (how I found his work), where he offers “brutally honest insights from a healthcare AI founder, based on his experiences, mistakes, successes, and perspectives.” His lessons often transcend Healthcare, and are to anyone building safety-focused AI. You might remember from his extremely thorough and well-done take down of the misinformation surrounding OpenAI’s o1 model, which we covered here.  
Sergei is back with a bang. This article is a first-person, ground-truth teardown of ChatGPT Health that combines product testing, workflow friction, and incentive analysis to show why consumer-facing healthcare AI is structurally broken in its current form. It documents the end-to-end experience of onboarding, data ingestion via b.well and MyChart, context-window failure modes and hallucinations, and the resulting unusability for real patients; then zooms out to analyze why direct-to-consumer healthcare fails economically and psychologically, why enterprise healthcare adoption is constrained by HIPAA, consent asymmetry, and conservative hospital behavior, and why most “AI innovation” in health is misplaced.
Sergei is one of the few critics online who provides genuine insight, instead of simply player hating for clicks and attention. In a world where OpenAI pays creators to post nice things about them, and Anthropic pays for negative PR against Sam Altman,  Sergei is one of the few genuine signals of truth. I’m sure you will find this deep-dive as meaningful as I did. Subscribe to his work below—
You know, I was thinking. Sam Altman is right. We only live once. F*ck HIPAA.  So what if the world knows I have bad knees? (Well, except now the healthcare mafia  knows exactly where to aim. 😉)
The only way to get to the truth was to test this thing.
So I uploaded my entire medical history to ChatGPT Health…
But first, I want to take a moment to thank all of my supporters. I’m often very critical of certain things happening in AI and healthcare. But I promise you, it’s only because I genuinely care and want to make things better for all of us. So, thank you for your understanding.
Whether you’re a skeptic or a supporter of AI in medicine, hear me out. I went through this over the weekend, and I think I’m onto something. Or more precisely, the industry may be onto something.
TL;DR:
1. Signing Up for ChatGPT Health
2. Connecting to Health Systems
3. Letting b.well Access All My MyChart Data
4. Uploading the Remaining Medical Files to ChatGPT Health
5. Once I Finished Uploading My Medical History, ChatGPT Started Hallucinating
6. So the Original Context Window Got “Filled” Pretty Quickly. What About Just Starting Another Chat?
7. ChatGPT Health Final Reports
8. Direct-to-Consumer Is Hard in Healthcare Because Patients Don’t Want AI to Tell Them What Already Happened to Them
9. Direct-to-Consumer Healthcare Can Also Be Outright Dangerous. Just Ask 23andMe.
10. OK. Direct-to-Consumer Healthcare Is Dead. So How Do You Sell ChatGPT to Businesses?
11. So, As a Health Organization, Are You HIPAA-Compliant When You Work With OpenAI’s API?
12. The Most Impressive Thing About ChatGPT Health
13. So Why ChatGPT Health Is Excellent News for Google (and Anthropic)
14. Conclusion: ChatGPT Health Ain’t About AI. It’s About a Better Way to Do APIs (i.e. Data is King).
1. Signing Up for ChatGPT Health
First, I had to click “Yes” through a bunch of introductory screens.
So happy about ChatGPT’s promise not to replace my doctor. I always totally trust a fox who promises not to eat my chickens. 😉
Here I’m consenting to a third party, b.well, having access to my medical records, which may or may not follow the same privacy standards as OpenAI. As I said before, we only live once. F*ck it.
2. Connecting to Health Systems
Now I’m giving my name and date of birth so b.well can search for potential health systems where my records could be stored.
Nice try. But I haven’t been a patient at over 90% of the health orgs on this list. I have no idea what this list is.
Now b.well makes a bunch of promises that I’m sure will be “up for modification” when we look back five years from now. 🙄 Whatever.
Honestly, I’ve been a patient at NYU Langone for most of the past several years. And most importantly, I had my password to NYU Langone’s MyChart. (Remember, Epic has made it really f*cking easy for patients. I need a separate login for every f*cking hospital. Welcome to 21st Century Epic, where a fax machine operator is still one of the best paying jobs. 🙄)
So I basically took b.well by the hand and literally handed it the key to my NYU Langone MyChart account. No APIs. Nothing. I literally let someone open the front door to my medical data and walked right through that door, ladies and gentlemen.
You would think that handing them my MyChart login info would make the connection easier. Maybe in the future. But for now, I had to sit and wait for more than an hour(!) to connect to my MyChart account via b.well. Welcome to the age of AI. 🙄
Finally, after a one hour plus wait, the connection happened, and it was a beautiful and emotional moment between a man and the machine. 😢
Yes, I see you, NYU Langone Health. 👍
3. Letting b.well Access All My MyChart Data
There were a lot of data points. These two screens capture only a few of them. I checked every single one. What the heck. 🤷♂️
4. Uploading the Remaining Medical Files to ChatGPT Health
In addition to myChart history, I uploaded around 50 medical files I saved over many years.
And guess what. It took five attempts because ChatGPT still does not let you upload more than 10 documents at a time. 🤦
5. Once I Finished Uploading My Medical History, ChatGPT Started Hallucinating
Every true coder knows that LLM companies’ claims of 1M or 2M token context windows are complete bullshit. After about 64K, hallucination rates spike. I believe that was a factor in some of the suicide lawsuits against OpenAI. People who received “Kill yourself” advice may have been deep into long conversations, not realizing that by the end the model was hallucinating uncontrollably.
Many of us have encountered this during vibe coding. You ask the LLM to do something, and it says it did it. But then you check the codebase and the files are not there. You feel awful. You try again and again until you finally decide it’s not worth it. And by the way, you’re paying for tokens on every question and every request.
That’s exactly how I feel. Frustrated and helpless, fast. Repeating my questions to ChatGPT multiple times and going nowhere.
6. So the Original Context Window Got “Filled” Pretty Quickly. What About Just Starting Another Chat?
Starting another chat is a swell idea. Unfortunately, to start another chat, I would have to do the same exercise all over again because OpenAI claims they only retain the data for the duration of one chat.
So, in the next chat we would have to repeat the exact same excruciating circus:
Waiting for over an hour to connect to MyChart.
Uploading my medical files.
Risking hallucinations because, by that time, I have already used up over 100K tokens.
It’s a bummer, and it’s completely on OpenAI.
It’s a shitty app. There is no other way to put it. OpenAI just didn’t bother testing it. I’m sorry to say that.
For this reason alone, I don’t see how patients would use it in its current form.
7. ChatGPT Health Final Reports
In theory, at your own risk, you can try generating the following reports that ChatGPT Health advertises. These are the kinds of reports a user can run:
Create a single consolidated patient summary.
I will pull demographics, active problems, past diagnoses, key visits, and a short timeline so you have one clean snapshot to work from.
Extract medications, doses, and allergies.
I will list current and recent meds, dosing schedules, and documented allergies. This helps with medication reconciliation and prevents dangerous interactions.
Pull out immunizations and procedures.
I will compile vaccines, dates, and any surgeries or implanted devices so you have authoritative records to share with new clinicians.
Parse and timeline all lab results.
I will extract lab names, values, units, and dates. I can present trends for key labs like HbA1c, creatinine, lipids, and thyroid tests so you can see whether things are stable, improving, or drifting.
Summarize clinical notes and visit conclusions.
I will give short, plain-English summaries of visit notes, problem lists, and specialist recommendations so you don’t have to wade through long notes yourself.
Highlight red flags and abnormal results.
I will point out recent out-of-range labs, new diagnoses, or medication changes that look clinically important and suggest what to discuss with your clinician next.
Create a clinician-ready bundle or message.
If you want, I’ll build a tidy one-page summary or a PDF you can send to a doctor, specialist, or new practice that includes meds, allergies, top labs, and a short history.
Make an appointment prep checklist and script.
I can draft key questions to ask your clinician, a prioritized agenda for the visit, and short phrasing you can paste into a message or say during the appointment.
Reconcile duplicates and fill gaps.
I will flag conflicting entries, missing dates, or labs that need context and suggest follow-up items like missing vaccination records or unclear med doses.
Create follow-up reminders and trackers.
I can make a simple plan for what to recheck and when, for example repeat labs in 3 months or a medication review in 6 weeks.
Export and privacy steps.
I will prepare shareable exports if you need them. Remember that I cannot push data into a hospital’s official EHR for you. Keep any sensitive files safe and only share what you need.
Caveats about uploads.
Pdfs with embedded text are read accurately. Scanned images get OCRed and may contain errors. I will note uncertainty whenever data looks unclear or incomplete.
I tried a few of them. But what I really wanted was the Medical Word Cloud chart.
And voilà. After about 15 tries, I kinda got what I wanted. Hallucinations are a bitch. 🤦
8. Direct-to-Consumer Is Hard in Healthcare Because Patients Don’t Want AI to Tell Them What Already Happened to Them
Despite what digital health companies are trying to make you believe, patients don’t want to stare at their medical records and waste time dissecting them. They do it once, then move on with their lives.
As Dr. Ezekiel Emanuel bluntly put it on a recent The Heart of Healthcare podcast episode , “If I get up in the morning and I feel refreshed and I feel focused, great. That tells me how well I slept. The [Oura] ring isn’t adding anything and it certainly isn’t a therapy. It just makes me more anxious.”
If patients really want something preventive, they schedule an MRI, a full-body exam, or a colonoscopy. Patients don’t need AI to summarize their medical histories. They need something, and it doesn’t necessarily have to be AI, that helps them be proactive about their health.
Interestingly, while I was writing this, I came across a sharp piece by Gene Vestal , aka the “FHIR Data guy [ https://open.substack.com/users/63485889-fhir-data-guy?utm_source=mentions ],” who made the same argument with zero fluff.
9. Direct-to-Consumer Healthcare Can Also Be Outright Dangerous. Just Ask 23andMe.
Why could DTC in healthcare be dangerous? Well, because every startup, every company, every corporation eventually has to face the same question. “How are you actually going to make money.”
Yes, they can bullshit LPs (Limited Partners) for months and even years, via their VC overlords, with the usual script. “Don’t look at the bottom line. Look at the growth potential. The market is billions or trillions. We’re going to be the main play.”
But eventually, sometimes after tens of billions in burned cash, reality shows up with a baseball bat. The company is against the wall and has to make decisions that were never part of the “mission.” Decisions that are often unexpected and unplanned.
And what do they call it. A “pivot.”
Translation: Doing whatever it takes to keep the lights on, extend cushy bonuses, and preserve golden parachutes.
Meanwhile, customers are the ones who get screwed.
Case in point: 23andMe. 
When I first learned about 23andMe years ago, I told friends and family. “This is so cool. But how the hell are they going to make money? Why on Earth would a user want to learn about their ancestry and genetic predispositions more than once?”
Sure enough, when the financial pressure kicked in, 23andMe quietly moved the goalposts. Customers got some bland, unassuming email. And who the hell opens those emails? The Terms and Conditions changed. The business model “evolved.” And suddenly you are not the customer. You are the product, with the DNA data of millions of Americans being sold to the highest bidder.
Trusting corporations whose only goal is maximizing profit with your personal data is dangerous. Especially corporations like OpenAI that may not see profits for years, and therefore have even more pressure to find them wherever they can.
They can throw words at you like “HIPAA-aligned” and “Healthcare Addendum.” But when the choice is between forgoing a chance to make billions and paying “peanuts” in legal settlements while still making those billions off customer data, I am 100% sure which way a corporation will lean.
Now add the cumbersomeness and sluggishness of ChatGPT Health in its current form, as I described above. There is no way most patients use it more than once.
10. OK. Direct-to-Consumer Healthcare Is Dead. So How Do You Sell ChatGPT to Businesses?
OK. One announcement by OpenAI was for patients, with a product called ChatGPT Health, which I covered in my previous piece .
The next day, there was a separate announcement  called OpenAI for Healthcare. (Don’t these two sound almost exactly the same. Try not to get confused. 🤦)
Anyway, this one is a product for enterprise use.
It is definitely more promising than ChatGPT Health because, of course, doctors, at least those who are true to their Hippocratic oath, want as many tools as possible to help them treat patients.
OpenAI talks about their APIs, which is an extremely important issue. Probably the most important one. But there are still a lot of IFs:
11. So, As a Health Organization, Are You HIPAA-Compliant When You Work With OpenAI’s API?
Short answer: Nobody knows.
OpenAI does talk in the announcement  about embedding OpenAI’s API into a healthcare system workflow.
And that’s an important message to the industry. What I’m still unclear about is whether health organizations can pass PHI (Protected Health Information) through OpenAI’s API.
The announcement doesn’t touch on that. It mentions that OpenAI’s APIs can help with clinical workflows. They talk about building things like ambient listening, automated clinical documentation, and appointment scheduling. But that still does not address the privacy question around patients’ data.
If you dig deeper, you can find information on how to be (more) HIPAA compliant.
So. You can be HIPAA compliant using OpenAI’s API with a BAA, if all of the following is true:
Your organization signs a BAA (Business Associate Agreement) with OpenAI.
You sign the Healthcare Addendum with OpenAI. OpenAI’s Services Agreement says you cannot process PHI unless you have signed the Healthcare Addendum. It also warns that if you use a service not designed for PHI, you may not store, transmit, or process PHI in it.
Under no circumstances does the digital health tool vendor have access to PHI, and there is sufficient proof of that. Only so-called “covered entities” ((such as medical providers, health plans, and yes, OpenAI) )and their business associates can retain, process, or transmit PHI.
Your use is permitted under HIPAA and follows “minimum necessary.” You should only send the parts of the record required to do the task. “Dump the entire chart because we can” is where teams get sloppy.
You use only in-scope OpenAI services and endpoints. OpenAI’s own materials make clear there are exceptions and that not all services are PHI-ready.
You configure retention correctly for PHI workflows. OpenAI’s API docs show default abuse monitoring retention of 30 days for common endpoints like “/v1/chat/completions” and “/v1/responses”. They also describe “Zero Data Retention” and “Modified Abuse Monitoring” as controls that can exclude customer content from abuse monitoring logs, but they require approval. If you accidentally build your product around endpoints that store application state “until deleted” and are not Zero Data Retention eligible, that is not automatically noncompliant. But it is a bigger compliance burden and risk surface that you must actively manage.
You do your side of HIPAA. Policies, access controls, audit trails, workforce training, breach response, vendor management, and making sure the PHI is not copied into places you do not control like app logs, analytics tools, ticketing systems, or debugging traces.
That’s a whole lot of IFs.
Also, aren’t we forgetting something? Oh yes. Patients. Don’t we need their consent as well? 😉
Imagine the following practical situation, which is, surprise surprise, my everyday situation. Let’s say we (a digital health developer) serve a hospital. Say, 90% of patients opt in to outsourcing our AI to OpenAI’s models. Not because these patients are big fans of AI, but because opt-in was the default and they never bothered to uncheck it. And 10% of patients did not give their consent. Because they, rightfully so, do not know what the hell OpenAI is going to do with their medical data.
So what do we do as a digital health developer who wants to be maximally law-abiding? We go with the minority because it is still more efficient to have our own dedicated server for all patients, as opposed to essentially having two very different services for the two groups of patients.
In other words, we ALWAYS go conservative when it comes to PHI. Because that’s what our client, the hospital, wants.
We’re all great philosophers and HIPAA experts, until we get punched in the face in the actual medical trenches…
12. The Most Impressive Thing About ChatGPT Health
The most impressive thing about ChatGPT Health ain’t ChatGPT Health. It’s b.well Connected Health.
Any AI (even my local neighborhood RAG) can summarize data and extract whatever you want. But how do you get the data in the first place, when Epic is guarding it like its livelihood depends on it. (Well, it kinda does. 😉)
And that’s why services like b.well are so impressive. They pull my medical data right in front of my eyes, straight from the frontend. It’s basically saying “F*ck you, Epic,” and bypassing the whole impossible maze of API, FHIR, HTI-5, HTI-6 protocols. Pure genius. (And yes, the connection is slow at this stage. But the idea is awesome.)
“The patient will let us in through the front door. And will flip the middle finger to all you “gatekeeper” security.” (Thank you, 21st Century Cures Act. 🙏)
Yes, I know, I know. The tech nerds will tell me this approach is “more unstable.” And it took me more than an hour to establish the connection. But honestly, I don’t care. All I need is to fetch my medical history and run with it.
I don’t give a damn about Epic’s shitty API. I don’t give a damn about Epic’s “analytics.” I certainly don’t give a damn about its glitchy telehealth. All I need is my OWN data.
Is that so much to ask?
13. So Why ChatGPT Health Is Excellent News for Google (and Anthropic)
Microsoft’s partnership with Epic may kill OpenAI’s hopes for healthcare.
I know you guys may be big fans of Epic. But in reality, Epic hasn’t invented anything for healthcare since MUMPS (oh wait, it wasn’t even them 🙂).
All Epic has is their wildly outdated EHR system. And Judy is going to do absolutely everything in her power not to give that up, even if it means giving in to Microsoft’s partnership demands, as Microsoft will get more and more leverage over time.
It also means dragging down OpenAI and a lot of its potential innovations in healthcare.
OpenAI and Microsoft’s friendship is a double-edged sword when it comes to healthcare.
Microsoft is betting that crazy money can still be generated with legacy systems like Epic. And OpenAI has to go along with that story.
But if you’re a competitor like Google, or Anthropic, take note. Health orgs that actually care about patients will jump on any opportunity to remove the bureaucracy of the Epic EHR system.
Any innovation in APIs, or anything that goes around Epic’s bureaucracy and the bullshit FHIR and “interoperability” conversations, should be taken very seriously by anyone who wants to win in healthcare.
Just look at what b.well and other API-layer services are doing, and take note.
For OpenAI, partnering with b.well feels like “completeness.” “We have an enterprise story with traditional APIs. Now let’s try something crazy for the patient app.”
I don’t think OpenAI is serious about investing in direct access to patient data through the front end the way b.well does. And I’m not even saying that approach is definitely the future. But whatever innovation avoids inefficiency (God, it’s time we get rid of inefficiency in healthcare), up to and including building a modern EHR with seamless HIPAA-compliant APIs, that’s the future! And that’s how you break Epic’s monopoly.
Take note, Google.
14. Conclusion: ChatGPT Health Ain’t About AI. It’s About a Better Way to Do APIs (i.e. Data is King).
The most impressive thing about ChatGPT Health ain’t ChatGPT Health. It is b.well Connected Health.
Any AI (even my local neighborhood RAG) can summarize data and extract whatever you want. The real question is how you get the data in the first place, when Epic guards it like its livelihood depends on it. (Well, it kinda does. 😉)
That is why services like b.well are so impressive, even if they are painfully slow at this stage. Watching it pull my medical data right in front of my eyes, straight from the frontend, basically saying “F*ck you, Epic,” and bypassing the crazy maze of API protocols. Pure genius.
All I need is to fetch my medical history and run with it. I do not give a damn about Epic’s shitty API. I do not give a damn about Epic’s “analytics.” I definitely do not give a damn about its glitchy telehealth. All I want is my own data. Is that so much to ask?
I have been saying this for years. Data is king, not AI. And it looks like Sam Altman finally got it too. He got to the point that was obvious to the rest of us. AI will be commoditized. It is stupid to bet that OpenAI will be a monopoly in AI. Probably not. But if you build strategic data partnerships, you will absolutely succeed, at least financially.
Bravo, Sam Altman, for being smart enough to partner with entrepreneurs like b.well. Data is where the profits are, not AI. I think you are starting to figure it out, Sam. Good for you.
However, Epic is probably going to pull OpenAI down, through Microsoft’s influence. That is good news for Google.
Either way, the future of health tech is exciting. I have my popcorn ready. 🍿
And yes, now the world knows everything about my medical history. That’s OK. I still think this is the future. 😉
Thank you for being here, and I hope you have a wonderful day.
Dev <3
I provide various consulting and advisory services. If you‘d like to explore how we can work together, reach out to me through any of my socials over here  or reply to this email.
I put a lot of work into writing this newsletter. To do so, I rely on you for support. If a few more people choose to become paid subscribers, the Chocolate Milk Cult can continue to provide high-quality and accessible education and opportunities to anyone who needs it. If you think this mission is worth contributing to, please consider a premium subscription. You can do so for less than the cost of a Netflix Subscription (pay what you want here) .
If you liked this article and wish to share it, please refer to the following guidelines. 
That is it for this piece. I appreciate your time. As always, if you’re interested in working with me or checking out my other work, my links will be at the end of this email/post. And if you found value in this write-up, I would appreciate you sharing it with more people. It is word-of-mouth referrals like yours that help me grow. The best way to share testimonials is to share articles and tag me in your post so I can see/share it.
Reach out to me
Use the links below to check out my other content, learn more about tutoring, reach out to me about projects, or just to say hi.
Small Snippets about Tech, AI and Machine Learning over here 
AI Newsletter- https://artificialintelligencemadesimple.substack.com/ 
My grandma’s favorite Tech Newsletter- https://codinginterviewsmadesimple.substack.com/ 
My (imaginary) sister’s favorite MLOps Podcast- 
https://machine-learning-made-simple.medium.com/
My YouTube: https://www.youtube.com/@ChocolateMilkCultLeader/ 
Reach out to me on LinkedIn. Let’s connect: https://www.linkedin.com/in/devansh-devansh-516004168/ 
My Instagram: https://www.instagram.com/iseethings404/ 
My Twitter: https://twitter.com/Machine01776819 

Unsubscribe https://substack.com/redirect/2/eyJlIjoiaHR0cHM6Ly93d3cuYXJ0aWZpY2lhbGludGVsbGlnZW5jZW1hZGVzaW1wbGUuY29tL2FjdGlvbi9kaXNhYmxlX2VtYWlsP3Rva2VuPWV5SjFjMlZ5WDJsa0lqb3lOVE00TVRReUxDSndiM04wWDJsa0lqb3hPRFUzT1RZeU56WXNJbWxoZENJNk1UYzJPVFF3TVRBM09Td2laWGh3SWpveE9EQXdPVE0zTURjNUxDSnBjM01pT2lKd2RXSXRNVE14TlRBM05DSXNJbk4xWWlJNkltUnBjMkZpYkdWZlpXMWhhV3dpZlEuVWJ5SHJqSWxrbUZfWmRpSFZFYjdtVkptblZhX1JNYndtS29mSEdtNHpCdyIsInAiOjE4NTc5NjI3NiwicyI6MTMxNTA3NCwiZiI6dHJ1ZSwidSI6MjUzODE0MiwiaWF0IjoxNzY5NDAxMDc5LCJleHAiOjIwODQ5NzcwNzksImlzcyI6InB1Yi0wIiwic3ViIjoibGluay1yZWRpcmVjdCJ9.kDzlDovwfaIidfqlMwMDuF-TZGxbVZ8TNkOd4e1T51Q?
