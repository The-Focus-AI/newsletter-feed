---
id: 19bc885715d6e18f
newsletter: connected-places-by-laurens-hof
newsletter_name: "Connected Places by Laurens Hof"
category: uncategorized
subject: "Fediverse Report #149 - On Protocol Governance"
date: Fri, 16 Jan 2026 20:35:16 +0000
source_url: "https://connectedplaces.online/wp-admin/admin-ajax.php?action=tnptr&nltr=ODI7NjU4O2h0dHBzOi8vY29ubmVjdGVkcGxhY2VzLm9ubGluZS93cC1hZG1pbi9hZG1pbi1hamF4LnBocD9hY3Rpb249dG5wJm5hPXYmbms9NjU4LTNmNmU2NDBmZjImaWQ9ODI7O2Y5MjVkZDBhZThjMWNjMzI2YzM0MDEyYWY5ZTJiNTIy"
---

# Fediverse Report #149 - On Protocol Governance

**From:** Connected Places by Laurens Hof <info@connectedplaces.online>
**Date:** Fri, 16 Jan 2026 20:35:16 +0000
**Source:** [View original](https://connectedplaces.online/wp-admin/admin-ajax.php?action=tnptr&nltr=ODI7NjU4O2h0dHBzOi8vY29ubmVjdGVkcGxhY2VzLm9ubGluZS93cC1hZG1pbi9hZG1pbi1hamF4LnBocD9hY3Rpb249dG5wJm5hPXYmbms9NjU4LTNmNmU2NDBmZjImaWQ9ODI7O2Y5MjVkZDBhZThjMWNjMzI2YzM0MDEyYWY5ZTJiNTIy)

---

Connected Places 
by Laurens Hof 

Understanding how the new social web works 

Hi Will, 

For this week's news I'm taking a closer look at how ActivityPub's governance actually works in practice. The descriptions of being an open protocol governed by the W3C sounds nice in theory, but as with any system, it does come with its share of messy politics. 

Thanks for reading! 

  

Fediverse Report – #149 – On Protocol Governance  (https://connectedplaces.online/reports/fediverse-report-148-on-protocol-governance/) 

January 16, 2026 - Laurens Hof 

The W3C has announced  (https://lists.w3.org/Archives/Public/public-socialweb/2026Jan/0000.html) a new Social Web Working Group, starting January 15, 2026, to maintain and update the ActivityPub protoocol. The group will be chaired by Darius Kazemi, who created Hometown  (https://github.com/hometown-fork/hometown) Mastodon fork and the Fediverse Schema Observatory  (https://asml.cyber.harvard.edu/fediverse-schema-observatory/) . The aim of the Working Group is to release updates to ActivityPub, and its specifications such as Activity Streams and Activity Vocabulary. Most of the work on the protocol is scheduled to be done by Q3 2026, with the Working Group running until January 2028. 

To understand why this matters, some context on how the W3C operates is necessary. The standards organisation distinguishes between Community Groups and Working Groups. Community Groups are open to anyone and serve as incubation spaces for ideas. Since 2018, the Social Web Incubator Community Group (SocialCG) has been the steward of ActivityPub. While Community Groups serve as a grass-roots place, they are very limited in publishing official documentations and formal updates to protocol standards. Working Groups, by contrast, are the bodies that can actually publish official W3C Recommendations, meaning formal standards. Participation in Working Groups is restricted to representatives of W3C member organisations (which pay membership fees on a sliding scale) and invited experts approved by the chair. 

ActivityPub became a W3C Recommendation in January 2018, and the protocol work was done by a Working Group. After ActivityPub became an official W3C specification, this Working Group disbanded, and the SocialCG was formed. Since then, the specification has not been formally updated, despite significant implementation experience revealing ambiguities and missing features. The SocialCG has maintained an errata document and developed extensions through the Fediverse Enhancement Proposal process, but these carry no official W3C status. The new Working Group changes this by providing a formal path to update the core specification. 

Fediverse advocates regularly point to ActivityPub being a W3C standard as a mark of legitimacy, but for the past seven years the organisational structure that created the protocol has also prevented necessary updates to it. The W3C has done a massive service to the community by holding space for the creation of the protocol in 2018. But since then, the same organisational structure that allowed the protocol to be created also slowed down necessary further work on ActivityPub. This shows up both in errata documents not becoming part of the formal documentation, but also larger work on the Client-To-Server part of the ActivityPub needing more work in order to be suitable for larger adoption. 

The new Working Group for ActivityPub changes this situation, and there now a formal path to update the core specification, incorporate errata, and potentially advance new work like LOLA (Live Online Account Portability) to official status. LOLA is a proposal for server-to-server account migration that would allow users to move between ActivityPub servers while retaining both their posts and their social graph. Unlike the current Move activity that only migrates followers, LOLA would enable full content portability. The charter includes LOLA as a potential deliverable, which means it could become an official W3C specification rather than remaining a community proposal. 

The are some major complicating factor however, and that is about who actually gets to make decisions. The Community Group lacked power to make official chances to ActivityPub, but it did provide an open place for anyone to participate. In contrast, the Working Group requires participants to either be a paid W3C member or to be an Invited Expert. There are only two organisations that are active in the fediverse that are a paid member of the W3C: Meta and the Social Web Foundation. With the Social Web Foundation also receiving funding from Meta, the company that built Threads now has more institutional standing in ActivityPub governance than any of the organisations actually building open fediverse software. Mastodon gGmbH, Framasoft, and others are not W3C members and cannot participate in the Working Group unless they are invited. 

This is by all accounts an extremely funny outcome for a network that aims to be independent of Big Tech's power. 

A few nuances to this. It is unclear if Meta will actually participate in the Working Group, and considering they recently put their Threadsfediverse integration on maintenance mode  (https://connectedplaces.online/reports/fediverse-report-147/) , there is a good change that Meta has no interest in actually participating. The Working Group also has yet to communicate who the Invited Experts will be. It could theoretically be that Meta is absent from the group, while Mastodon and Framasoft employees are invited to be part of the Working Group. 

Another challenge for the W3C Working Group is that there has long been a disconnect between ActivityPub protocol development and the people creating ActivityPub software. While the above makes it sound that fediverse developers are excluded from the protocol development process, the practical reality is also that the developers of the main fediverse platforms like Mastodon, PeerTube and Lemmy have shown very little interest in engaging with the process when it was openly accessible under the SocialCG. This is illustrated by the meeting  (https://github.com/swicg/meetings/tree/main/2025-02-07) last year in which the SocialCG voted to charter a Working Group, where no member of any of the fediverse platform developers was actually present. There has long been a disconnect between the people who develop ActivityPub software and the people who maintain the ActivityPub protocol, with only a few notable exceptions. 

This matters because of how W3C standards work. The charter's success criteria states that updating the Recommendation requires "at least two independent implementations of every feature defined in the specification, where interoperability can be verified by passing open test suites." The Working Group can propose whatever changes it wants, but for those proposals to become part of the official ActivityPub standard, they need to be implemented in actual software. 

LOLA, the proposal to improve account portability, is a clear example of this challenge. Already in fall 2024, Lisa Dusseault, the author of the proposal, said that the specification was ready for developers to start testing implementations. The main bottleneck since then has been getting organisations like Mastodon interested in actually building it. The protocol work is largely done, but what remains is the persuasion and coordination to get implementers interested in using it. 

The importance of protocol maintenance and further development of ActivityPub points towards responsibilities for software implementors, especially Mastodon as the dominant ActivityPub implementation. Mastodon's choices become de facto standards whether or not the project engages with formal standardisation processes. The most clear example is how the Mastodon API has effectively taken over from ActivityPub's Client-to-Server as the dominant protocol that other softwares have to implement. That position comes with obligations, and when Mastodon doesn't participate in protocol governance, it creates a vacuum where the largest implementer (in this case also Mastodon) is able to set standards for the rest of the network, but without the governance or formal documentation. When protocol development and maintenance in the Working Group happens disconnected from the largest implementations, the specifications that may not reflect implementation realities. 

What this situation reveals is that using network architecture to solve issues of power distribution simply shifts bottlenecks rather than eliminating them. A decentralised protocol does not automatically produce decentralised governance, it also moves power to different, less visible places. The W3C membership structure concentrates formal power in ways that don't reflect the fediverse's values, while the implementers who could counterbalance that power have largely opted out of the process. The new Working Group creates an opportunity to address both problems, but who gets to shape the specifications of ActivityPub depends on both who is allowed to participate, as well as who is willing show up and do the work. 

Read more...  (https://connectedplaces.online/reports/fediverse-report-148-on-protocol-governance/) 

QR code for donation to Connected Places  (https://connectedplaces.online//qr-donate-news) Liked this newsletter? Help keep it alive! 

If this newsletter adds value to your week, consider supporting its creation. Your contribution keeps the ideas flowing. Click  (https://connectedplaces.online//qr-donate-news) or scan the QR to donate securely. 

Unsubscribe  (https://connectedplaces.online/wp-admin/admin-ajax.php?action=tnp&na=u&nk=658-3f6e640ff2&nek=82-)    |    Manage your subscription  (https://connectedplaces.online/wp-admin/admin-ajax.php?action=tnp&na=p&nk=658-3f6e640ff2&nek=82-)    |    View online  (https://connectedplaces.online/wp-admin/admin-ajax.php?action=tnp&na=v&nk=658-3f6e640ff2&id=82)
