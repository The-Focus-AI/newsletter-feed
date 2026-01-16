---
id: 19bb87e13630dd08
newsletter: the-pragmatic-engineer
newsletter_name: "The Pragmatic Engineer"
category: tech-ai
subject: "Design Systems for Software Engineers"
date: Tue, 13 Jan 2026 17:46:25 +0000
---

# Design Systems for Software Engineers

**From:** The Pragmatic Engineer <pragmaticengineer+deepdives@substack.com>
**Date:** Tue, 13 Jan 2026 17:46:25 +0000

---

View this post on the web at https://newsletter.pragmaticengineer.com/p/design-systems-for-software-engineers

Before we start: the agenda of The Pragmatic Summit  is final. Here’s what to expect on 11 February, in San Francisco:
Speakers might be familiar from the podcast — and this is a rare opportunity to meet them in-person. We’ll have Laura Tacho , Simon Willison,  Chip Huyen , Kent Beck , Martin Fowler , Nicole Forsgren , Thomas Dohmke  and others join. Engineering leaders from the top AI companies and startups will talk about how exactly they build — folks from Cursor, Codex, Linear, Ramp, Vercel and Uber, and more. And in a fun crossover, Alex  and Sahn  from ByteByteGo will also take the stage.
The exact agenda:
We already have 250 confirmed attendees — experienced engineering leaders and experienced engineers — and just 150 seats left. We also have more delightful surprises planned for the event, and on the day — those who attend will learn of these. If you are thinking of joining, apply now , while there is still space.
If you want to meet in-person, meet folks who have been on the podcast or in the deepdives, and connect with an incredible group at the event: this is the event to do it at.
Talks will be recorded and shared with paid newsletter subscribers in a timely matter — and they will be published in batches for all newsletter subscribers later on as well.
At some point in the lifespan of a successful product, a member of the team decides it has become too messy, and that what it needs is some kind of system/UX library/UI organization, since what used to be creative, clever UI approaches have become chaotic. At this point, the idea of a reusable components library often starts being seen as a solution.
This usually happens long after the product has found its product-market-fit and while it’s growing in usage, with 10+ designers and frontend engineers working on it. I’ve seen this scenario play out several times: at Skype, Skyscanner, and at Uber, where the outcome was the Base Design System , which was shared externally.
But how is a design system like this created, and what are practical tips for doing so? To find out, I turned to an expert on the topic, Michael Abernethy , who’s principal frontend engineer at the data security company, Rubrik. He’s worked on user interfaces and design systems for 25+ years, and has led Rubrik’s design system engineering team for the past four.
Today, we cover:
Wake-up call. Feedback from the CTO kicked off efforts to make the UI look more professional at Rubrik.
What’s a design system? More than a style guide, it includes standardized building blocks, and becomes a unified source of truth for the design and engineering team.
Building a design system. UX researchers, designers, and design system engineers collaborate. A step-by-step guide on how the team at Rubrik did so.
Design system libraries in the AI era. The new technology can be helpful for many tasks, but generating a consistent design system isn’t one of them. A look into areas where AI has helped Rubrik’s design system, plus emerging use cases like using Figma’s MCP, or running design system subagents.
When not to build a design system library. For startups and smaller teams, using a pre-built design system library like Material UI, Chakra UI, or Base UI can be a great alternative.
Investing in a custom design system library. Advice about good engineering skills and traits for when building a design system, the timelines – and Big Tech’s different approach.
Getting started and inspiration. A five-step, practical approach for building your own design system.
At growing tech companies, a design system is almost always put in place, eventually. I hope this is a useful guide about how to contribute to it – or take the lead – as an engineer.
The bottom of this article could be cut off in some email clients. Read the full article uninterrupted, online. 
With that, it’s over to Michael:
1. Wake-up call
At Rubrik, our “design wake-up call” is still talked about. It was six years ago, when the CTO, Arvind Nithrakashyap, casually remarked during a team meeting that the product looked “like a college project”.
The UI he was talking about was this early version:
His observation hit home because it was right! The product’s user interface did indeed look like it had been thrown together by engineers trying to build features as fast as possible – because that’s exactly what happened. This feedback was enough to prompt a UI overhaul that would see us revamp the whole product’s UI/UX for the better.
Most engineers will understand the urge to build quickly and ship lots of features in order to hit seemingly-impossible deadlines. Questions about how a product looks often take a back seat behind getting people to use the product. And let’s be honest, few of us engineers are famous for our artistic sensibilities, so a user interface we deem “good enough” during the early MVP stage may not cut it when pitching to potential enterprise customers.
When we eventually completed this project at Rubrik, we were able to put a “Version 1.0” stamp on what we called the “Aura Design System Library”. It consists of 90+ React-based components, ranging from simple components (buttons, checkboxes, tabs) to complex components (page layouts or tables connected to GraphQL endpoints). Our work visibly improved the product, which went on to win awards  and achieve industry-wide recognition .
2. What’s a design system?
The best, easiest way to think of a design system is as a brand for your software. It’s the unifying source of truth for a company’s or product’s entire identity across the suite of digital assets. But it’s also much more than just a logo. It includes:
Rules and guidelines
Patterns and visual language
Colors, fonts, spacing, and image styles
Reusable code components
Style guides and documentation that define the design system’s rules
Basically, it’s all the small things that go into making a website unique, so that customers instantly recognize the software. Like any strong brand image, a great design system is an incredible asset for a business because it creates an identity for software that’s as distinctive as Nike’s swoosh, or an apple with a bite taken out. Take a look at these two screenshots from popular websites:
Without my help, you can probably identify the products in the screenshots above as Airbnb and Spotify. Chances are, you also have opinions about companies when you see their websites. That’s the power of branding – and of a great design system.
A design system is important for users, too. If they become accustomed to what a button or menu looks like in one part of the software, they know what a button or menu looks like in the rest of the application. A UX researcher might say this reduces the cognitive load of using the software.
Design system engineering
A design system engineering (DSE) team takes the concept of a design system, the branding, and the user benefits, and converts all this into code by building a design system library of reusable components that adhere to the strict standards of the design system. At Rubrik and at most Big Tech companies it works like this:
The design team creates the look and feel of the software in Figma.
The DSE team converts that into working React code (or Angular, or iOS, or Android, or the framework they use).
The design system library is the suite of reusable Frontend components that the DSE team creates. These are then bundled up into a stand-alone, JS/iOS/Android library and used across the entire product line. Using the library ensures a visually cohesive brand identity.
Smallest design system: a button
Imagine you’re a member of a Series B startup that’s just raised $20M in funding, and has found a product-market fit. Business is growing fast, but your UI is inconsistent, so you decide to standardize the design with a library and to improve the UI and UX.
Soon, you’re in the kickoff meeting of this effort with a few designers and design system engineers (with their DSE hats on) who are ready to crank out the new components. You start with the most common component of any design system library: the button. Below are some decisions to be made about this seemingly simple component:
Color. Which shade of teal is best for users, balancing readability with other colors on the page, and considering every possible background color on which the button could appear?
Text color. Which text color makes the button most readable to users on all devices, keeping in mind that not every user visits your software on a $6,000, 6k Pro Display XDR Monitor.
Height. How many pixels tall should the buttons be in order to draw attention without wasting vertical space and messing with page layout?
Border radius. What kind of curves fit best with the design aesthetic of the application?
Shadows. Do you want the design to be flat, or for the buttons to appear to rise off the page to grab attention, implying they can be pressed?
Font. Which font gives the button a modern, readable look? Should it match the rest of the site, or be slightly different to draw attention?
Answering just these six questions can take considerable time, including multiple back-and-forth discussions. The meeting may typically take an hour, and the bad news is that it will barely scratch the surface of everything that must be agreed. A proper discussion about a button will also include:
Color: Should there be extra background color options for less important actions?
Border: Should there be a color border, and if so, how thick?
Icon: Should icons in the button be allowed? If so, should they go before or after the text? What spacing should be used between icon and button?
Events: What should the button look like when the keyboard navigates to it? What about when hovering and clicking?
Animation: Should there be an animation when the button’s hovered over, should there be one when it’s clicked, and what about when something is loading?
States: What should the button look like when disabled? What about the cursor in the disabled state?
Mobile: Do you need to adjust any design decisions for iOS, Android, or both?
Accessibility: Do you need to adjust any decisions for color blind users?
Localization: Do you need to rethink decisions for different languages, or right-to-left writing systems?
All of these calls need to be made about a button – which is just one component! A simple design system usually has 15-20 components, and a complex one can have 50-100. Designing a full-fledged design system involves a lot more time and effort than many people realize because all these details add up.
Benefits of a design system
As mentioned, it’s a lot of effort to create a design system – but it brings several wins when complete. From the engineering viewpoint, common benefits are:
Faster delivery times. By creating an entire suite of reusable components, engineers eliminate the time and burden of creating the same component over and over on their own. Having a library also removes the need to “reinvent the wheel” by recreating new components. With a mature design system library, creating a page in the UI is almost as easy as dragging and dropping components onto the screen and wiring them up.
Higher quality. By utilizing skilled frontend/UI engineers to create the design system library, the quality of the entire product suite can be instantly visually upgraded. The UI’s quality can go from amateur to professional with the work of a few engineers.
More devs can contribute to the frontend. In my observation, most full-stack engineers lack expert-level skills in CSS and React. However, a well-written design system library encapsulates the difficult React/CSS/HTML code within the library, and allows full-stack engineers to contribute across the frontend without needing expertise in more niche areas like CSS.
“Premium feel” software. I have a saying that if you want to charge enterprise prices, your software needs to look like an enterprise product.
I feel many engineers don’t internalize the significance of premium interfaces. If your product charges a high price, customers expect a superior UI that goes beyond a simple and basic style. For example, it would be hard to entice an enterprise to pay $1M/year for software that looks like the image below. This site uses a standard, free, off-the-shelf Bootstrap theme with default colors and a font that doesn’t look good on the page.  It looks the same as thousands of other free websites out there, making it hard for your customers to think “premium” when they see it.
Better collaboration across teams. With a shared library and design, engineering and product management can “speak the same language”, so that when a designer references a component called a “StatBox,” everyone understands what it means, for example. Even better, a tool like Figma allows design and engineering to virtually share code between teams.
Cost savings. Time is money, and a system like this makes engineers more productive because they deliver features faster, and the company can increase revenue quicker. That’s the theory, at least!
3. Building a design system...

Unsubscribe https://substack.com/redirect/2/eyJlIjoiaHR0cHM6Ly9uZXdzbGV0dGVyLnByYWdtYXRpY2VuZ2luZWVyLmNvbS9hY3Rpb24vZGlzYWJsZV9lbWFpbD90b2tlbj1leUoxYzJWeVgybGtJam95TlRNNE1UUXlMQ0p3YjNOMFgybGtJam94T0RRek1Ea3lOemNzSW1saGRDSTZNVGMyT0RNeU5qZ3lOeXdpWlhod0lqb3hOems1T0RZeU9ESTNMQ0pwYzNNaU9pSndkV0l0TkRVNE56QTVJaXdpYzNWaUlqb2laR2x6WVdKc1pWOWxiV0ZwYkNKOS5yQUVnY0NFOFdKeWZqNUd3MXZZRHNxX2ZTbXIzeTlzaC1KZkljckNCNDFzIiwicCI6MTg0MzA5Mjc3LCJzIjo0NTg3MDksImYiOnRydWUsInUiOjI1MzgxNDIsImlhdCI6MTc2ODMyNjgyNywiZXhwIjoyMDgzOTAyODI3LCJpc3MiOiJwdWItMCIsInN1YiI6ImxpbmstcmVkaXJlY3QifQ.j2ukFE9OPNMgHgjm8RWbuBghY7itaYC5d4PODfJ40Rk?
