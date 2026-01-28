---
id: 19be1bdaec8c55c9
newsletter: the-pragmatic-engineer
newsletter_name: "The Pragmatic Engineer"
category: business
subject: "How AWS S3 is built"
date: Wed, 21 Jan 2026 18:00:17 +0000
source_url: "https://newsletter.pragmaticengineer.com/p/how-aws-s3-is-built"
---

# How AWS S3 is built

**From:** The Pragmatic Engineer <pragmaticengineer@substack.com>
**Date:** Wed, 21 Jan 2026 18:00:17 +0000
**Source:** [View original](https://newsletter.pragmaticengineer.com/p/how-aws-s3-is-built)

---

View this post on the web at https://newsletter.pragmaticengineer.com/p/how-aws-s3-is-built

Stream the latest episode
Listen and watch now on YouTube , Spotify , and Apple . See the episode transcript at the top of this page, and timestamps for the episode at the bottom.
Brought to You by
• Statsig  — ⁠ The unified platform for flags, analytics, experiments, and more. I’m hosting The Pragmatic Summit with Statsig. 11 February, San Francisco. Join us there .
• Sonar  – The makers of SonarQube, the industry standard for automated code review. Sonar’s latest State of Code Developer Survey report  found how the surge in output with AI is creating a new bottleneck for devs with code review. SonarQube helps with just this: it’s the automated layer for code quality verification. More than 7 million developers trust it – see why .
• WorkOS  – Everything you need to make your app enterprise ready. WorkOS is a collection of primitives like single sign-on, authentication, directory sync, MCP authentication, and more. Focus on your product, not building enterprise complexity. Check out WorkOS. 
In this episode
Amazon S3 is one of the largest distributed systems ever built, storing and serving data for a significant portion of the internet. Behind its simple interfaces hides an enormous amount of engineering work, careful tradeoffs, and long-term thinking.
In this episode, I sit down with Mai-Lan Tomsen Bukovec, VP of Data and Analytics at AWS, who has been running Amazon S3 for more than a decade. Mai-Lan shares how S3 operates at extreme scale, what it takes to design for durability and availability across millions of servers, and why building for failure is a core principle.
We also go deep into how AWS approaches correctness using formal methods, how storage tiers and limits shape system design, and why simplicity remains one of the hardest and most important goals at S3’s scale.
Interesting learnings from the episode
Ten things I learned from talking with Mai-Lan:
1. The mind-boggling scale of S3. S3 handles hundreds of millions of transactions per second (!!) worldwide and stores over 500 trillion objects across hundreds of exabytes of data (one exabyte is 1,000 petabytes or 1 million terabytes). To visualize the hardware: if you stacked all of S3’s tens of millions of hard drives on top of each other, they would reach the International Space Station and almost back.
2. The ridiculous engineering feat of rolling out strong consistency practically overnight. When S3 launched in 2006, it was designed with eventual consistency  (also called optimized replication) to optimize for high availability, but relaxing data consistency promises. The engineering team later achieved strong consistency without compromising availability or increasing costs to customers — a very difficult feat! A key innovation was a replicated journal — a distributed data structure where nodes are chained together so writes flow sequentially through all nodes. This was combined with a new cache coherency protocol that provides a “failure allowance” — allowing multiple servers to receive requests while tolerating some failures.
3. The quiet Rust takeover. S3 was not written in Rust in 2006, but the team has rewritten almost every performance-critical piece of code in the request path to Rust. The motivation: achieving the highest performance and lowest latency possible. S3 now has a lot of Rust engineers focused on this ongoing optimization work.
4. The 11 nines of durability is measured, not just promised. One claim S3 has is 11 nines of durability  (99.999999999%) — which was something I had to take a double check on, as it is such a high target. The system has auditor microservices that continuously inspect every single byte across the entire fleet. When signs of needed repair are detected, separate repair systems automatically kick in. At any given moment, servers are failing, and the system is designed with the assumption that failure is constant. 
As Mai-Lan confirmed to me, the AWS team can answer this question any time:
“What is our actual durability this week/month/year?”
5. Formal methods are practice, not theory at S3. S3 uses formal methods (automated reasoning) extensively in production. When engineers check in code to the index subsystem that handles consistency, the system automatically runs formal proofs to verify that the consistency model hasn't regressed. As Mai-Lan put it:
“At a certain scale, math has to save you. Because at a certain scale, you can’t do all the combinatorics of every single edge case, but math can.”
Formal methods are also used to prove correctness in cross-region replication. See also the AWS paper Formally verified cloud-scale authorization .
6. Correlated failures cause most problems these days at S3. Individual failures are expected and handled. The real threat is correlated failures — when multiple components fail together because they share a fault domain (same rack, same availability zone, same power source). As Mai-Lan explained, S3’s architecture is designed around preventing correlated failures with approaches like:
Data is replicated across multiple availability zones
Quorum -based algorithms tolerate individual node failures
Physical and logical infrastructure are designed to avoid correlation
Every object is stored multiple times across different fault domains
7. S3 operates on 200+ services. It’s not too surprising to learn that S3 has several (micro)services behind each regional endpoint — but it was interesting to learn that the number of services in the range of ~200. This is much smaller than Uber’s 4,500+ microservices  — and to me it’s yet another confirmation that there’s no one “right” way to slice and dice your services. If anything, it proves that there’s not much correlation between the number of services and the scale a system handles!
Mai-Lan explained that a significant portion of the AWS microservices are dedicated solely to durability — health checks, repair systems, and auditors. The philosophy is that complexity must be managed through simplification: each microservice must remain focused, or the system becomes unmaintainable.
8. S3 Vectors: the challenges of building a completely new data primitive. Unlike S3 Tables (which builds on objects via Parquet  files), S3 Vectors is a completely new data structure. The challenge team had when building these: searching for nearest neighbors in high-dimensional vector space is expensive. S3’s solution:
Precompute “vector neighborhoods” — clusters of similar vectors computed asynchronously offline
When a new vector is inserted, it’s added to one or more neighborhoods based on similarity
Queries first find the nearest neighborhoods, then load only those vectors into fast memory for the nearest neighbor algorithm
Result: sub-100ms warm query times with support for 2 billion vectors per index (!) and 20 trillion vectors per bucket (!!)
9. Crash consistency as a design philosophy. Mai-Lan told me how S3 engineers think deeply about crash consistency — the property that a system should always return to a consistent state after a fail-stop failure. Their approach: reason about all possible states a system can reach in the presence of failure, then design microservices to work together, assuming failure is always present.
10. The “Scale Is to Your Advantage” design principle. One of S3’s core philosophies that I really liked was this:
Scale must be to your advantage. 
This means that engineers at S3 cannot build something where performance degrades as the service grows. Instead, systems must be designed so that increased scale improves attributes. For example: the larger S3 gets, the more de-correlated workloads become, which ends up improving reliability for all users.
A reading recommendation from Mai-Lan: research papers! Mai-Lan reads a lot of research papers. For curious folks, she recommends following research on multimodal embedding models — the next frontier for understanding data across different formats (text, images, audio) through semantic vectors. As she put it:
"If you think about the future of data lakes, I think it's actually going to about metadata and the semantic understanding of our data. We will need to understand it through vectors, and search will need to be done across multiple modalities."
Watch the episode
If you’re interested in how one of the largest systems in the world is built, and keeps evolving: this episode is for you.
The Pragmatic Engineer deepdives relevant for this episode
Inside Amazon’s engineering culture 
How AWS deals with a major outage 
A Day in the Life of a Senior Manager at Amazon 
What is a Principal Engineer at Amazon?  – with Steve Huynh
Working at Amazon as a software engineer  – with Dave Anderson
Amazon papers recommended by Mai-Lan:
Using lightweight formal methods to validate a key-value storage node in Amazon S3 
Formally verified cloud-scale authorization 
Analyzing metastable failures 
Amazon’s engineering tenets 
Timestamps
(00:00 ) Intro
(01:03 ) S3’s scale
(03:58 ) How S3 started
(07:25 ) Parquet, Iceberg, and S3 tables
(09:46 ) S3 for developers
(13:37 ) Why AWS keeps S3 prices low
(17:10 ) AWS pricing tiers
(19:38 ) Availability and durability
(26:21 ) The cost of S3’s consistency
(31:22 ) Automated reasoning and proof of correctness
(35:14 ) Durability at AWS scale
(39:58 ) Correlated failure and crash consistency
(43:22 ) Failure allowances
(46:04 ) Two opposing principles in S3 design
(49:09 ) S3’s evolution
(52:21 ) S3 Vectors
(1:01:16 ) The 50 TB limit on AWS
(1:07:54 ) The simplicity principle
(1:10:10 ) Types of engineers working on S3
(1:14:15 ) Closing recommendations
References
Where to find Mai-Lan Tomsen Bukovec:
• LinkedIn: https://www.linkedin.com/in/mailan 
Mentions during the episode:
• Amazon S3: https://aws.amazon.com/s3 
• Exabyte: https://simple.wikipedia.org/wiki/Exabyte 
• Apache: https://www.apache.org 
• Netflix: https://www.netflix.com 
• Pinterest: https://www.pinterest.com 
• AWS tenets: https://www.amazon.jobs/content/en/teams/principal-engineering/tenets 
• Using lightweight formal methods to validate a key-value storage node in Amazon S3: https://www.amazon.science/publications/using-lightweight-formal-methods-to-validate-a-key-value-storage-node-in-amazon-s3 
• Apache Parquet: https://aws.amazon.com/blogs/big-data/tag/apache-parquet 
• What is Apache Iceberg?: https://aws.amazon.com/what-is/apache-iceberg 
• S3 Tables: https://aws.amazon.com/s3/features/tables 
• Amazon S3 Intelligent-Tiering storage class: https://aws.amazon.com/s3/storage-classes/intelligent-tiering 
• S3 Glacier: https://aws.amazon.com/s3/storage-classes/glacier 
• Quorum: https://en.wikipedia.org/wiki/Quorum_(distributed_computing) 
• What is Automated Reasoning?: https://aws.amazon.com/what-is/automated-reasoning 
• An unexpected discovery: Automated reasoning often makes systems more efficient and easier to maintain: https://aws.amazon.com/blogs/security/an-unexpected-discovery-automated-reasoning-often-makes-systems-more-efficient-and-easier-to-maintain 
• How automated reasoning helps Amazon S3 innovate at scale: https://aws.amazon.com/blogs/storage/how-automated-reasoning-helps-us-innovate-at-s3-scale 
• AWS research on automated reasoning: https://www.amazon.science/research-areas/automated-reasoning 
• The Pragmatic Summit: https://www.pragmaticsummit.com 
• Andy Warfield on X: https://x.com/andywarfield 
• What is SQL?: https://aws.amazon.com/what-is/sql/ 
• Amazon S3 Vectors: https://aws.amazon.com/s3/features/vectors 
• Turbopuffer: https://turbopuffer.com 
• Amazon Nova Multimodal Embeddings: State-of-the-art embedding model for agentic RAG and semantic search: https://aws.amazon.com/blogs/aws/amazon-nova-multimodal-embeddings-now-available-in-amazon-bedrock/ 
• How AWS deals with a major outage: https://newsletter.pragmaticengineer.com/p/how-aws-deals-with-a-major-outage 
• Inside Amazon’s Engineering Culture: https://newsletter.pragmaticengineer.com/p/amazon 
• Working at Amazon as a software engineer – with Dave Anderson: https://newsletter.pragmaticengineer.com/p/working-at-amazon-as-a-software-engineer 
• The Pulse #144: Rare look into AWS’s PR/FAQ process: https://newsletter.pragmaticengineer.com/p/the-pulse-144 
—
Production and marketing by Pen Name .

Unsubscribe https://substack.com/redirect/2/eyJlIjoiaHR0cHM6Ly9uZXdzbGV0dGVyLnByYWdtYXRpY2VuZ2luZWVyLmNvbS9hY3Rpb24vZGlzYWJsZV9lbWFpbD90b2tlbj1leUoxYzJWeVgybGtJam95TlRNNE1UUXlMQ0p3YjNOMFgybGtJam94T0RVd09UUTFNelFzSW1saGRDSTZNVGMyT1RBeE9EZzJNQ3dpWlhod0lqb3hPREF3TlRVME9EWXdMQ0pwYzNNaU9pSndkV0l0TkRVNE56QTVJaXdpYzNWaUlqb2laR2x6WVdKc1pWOWxiV0ZwYkNKOS5NZzFHY3hGWDVsYWY3Rm5PYmE5YnViSm1PeW5qTlplTy1mX1cwS1VneGNZIiwicCI6MTg1MDk0NTM0LCJzIjo0NTg3MDksImYiOnRydWUsInUiOjI1MzgxNDIsImlhdCI6MTc2OTAxODg2MCwiZXhwIjoyMDg0NTk0ODYwLCJpc3MiOiJwdWItMCIsInN1YiI6ImxpbmstcmVkaXJlY3QifQ.6aq7jrZ32iXgTo7bo9ThMghrjnb2BTFOic8iTcG79RU?
