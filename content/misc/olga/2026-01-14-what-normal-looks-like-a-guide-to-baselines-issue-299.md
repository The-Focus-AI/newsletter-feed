---
id: 19bbc9b5d8fd9b4d
newsletter: olga
newsletter_name: "Olga"
category: misc
subject: "What “Normal” Looks Like: A Guide to Baselines - Issue 299"
date: Wed, 14 Jan 2026 12:03:03 +0000
---

# What “Normal” Looks Like: A Guide to Baselines - Issue 299

**From:** Olga <dataanalysis@substack.com>
**Date:** Wed, 14 Jan 2026 12:03:03 +0000

---

View this post on the web at https://dataanalysis.substack.com/p/what-normal-looks-like-a-guide-to

Welcome to a subscriber-only issue of my Data Analytics Journal , where I write about data science and analytics.
I use the word baseline every day, more often than data, but I’ve never written a dedicated piece on it.
Baseline is the threshold, milestone, or benchmark we use to define the “truth,” or starting point, in analysis.
Is a metric lift meaningful?
Is a drop alarming or just normal variance?
What if you don’t have historical data?
What exactly are you measuring performance against?
Without a baseline, you don’t really know if something is good or bad.
This article breaks down what a baseline is, how to choose and calculate one, the main types (static, rolling, seasonal, cohort-based), and the common mistakes that make teams measure the wrong thing with high confidence.
Everything in analytics starts with a baseline
Baselines are critical and underrated. Even senior analysts often don’t define them explicitly or maintain them consistently. And we still don’t have good tooling for it. They often exist implicitly - in someone’s head, in a spreadsheet, or worse, hard-coded inside dashboards.
But your definition of “good” or “bad” performance comes directly from your baseline. You can’t do trend analysis, forecasting, experimentation, machine learning, or alerting without first agreeing on what “normal” looks like.
Baselines are the first step of any analysis. Yet most teams manage them manually, inconsistently, and without versioning. Then they wonder why results are inconsistent or why stakeholders replicate their own versions.
What is baseline?
A baseline is an expected value for a metric at a given point in time, under “known” conditions.
It is not:
Last week’s number
Last year’s number
A gut feeling
An arbitrary target
Your competitor benchmark
A good baseline answers one question clearly: “What should this metric look like if nothing unusual is happening?” Only after that question is answered can you say whether a change matters.
Baselines in SaaS and B2B
In SaaS and B2B, baselines are usually finance-driven. Finance teams run forecasts and define monthly or quarterly milestones - expected ARR, revenue, churn, or else. These milestones act as baselines.
They are based on historical trends, adjusted using industry benchmarks, and reviewed and reset regularly.
For example, “Is a +10% ARR increase from April to May good or bad?”
To answer that, they compare the forecasted value, the historical growth rates, and Industry benchmarks.
This is exactly how I work in B2B contexts:
I run a time-series forecast.
Overlay it with a simple average growth projection.
Set an expected value for week X or month Y - this value becomes a baseline.
Read more - Forecasts Part 1: Choosing the Right Approach .
This works well when growth is relatively stable and driven by product or sales cycles. But this approach breaks down outside of B2B.
Baselines in B2C transactional, ads, or subscription products
In B2C, baselines are much harder. Often, it’s the wild west.
When leadership comes from a SaaS background, they bring SaaS frameworks with them. They try to apply forecast-based baselines to products where growth is driven by marketing, experimentation, and short-term dynamics.
The same happens when venture capital or private equity gets involved. They import old-school B2B thinking, sometimes even enterprise thinking, into these new, cool fast-moving consumer products. But growth today is driven by different mechanics than the MBA case studies from 20 years ago.
User acquisition, attribution, pricing tests, channel mix, and platform algorithms dominate outcomes. Case studies about Starbucks or early YouTube growth are no longer good templates.
As a result, traditional forecasting-based baselines often become irrelevant rather than helpful.
The hard case: new and fast-growing B2C products
If you work with early-stage or newish products, you probably already know that you can’t “normalize” growth rates:
Annualized averages don’t mean much when marketing spend changes week to week, channels are constantly tested, funnels are being rebuilt, or pricing and onboarding are in flux. Revenue, MAU, or even retention - everything becomes a direct output of marketing decisions.
To add that there is often no clean historical data. There’s no stable “organic” baseline to compare against. Even so-called organic traffic is usually contaminated by paid efforts, brand effects, or platform boosts.
For many products, everything before the first ~100K users is mostly noise that you can’t measure right. This is also why many products stall around that milestone. They burn capital to get there, but the data they collect usually is “synthetic” and doesn’t represent their natural movements, and isn’t strong enough to support forecasting, ML, or long-term planning.
How I build baselines in these cases
When clean history doesn’t exist, I build baselines bottom-up...

Unsubscribe https://substack.com/redirect/2/eyJlIjoiaHR0cHM6Ly9kYXRhYW5hbHlzaXMuc3Vic3RhY2suY29tL2FjdGlvbi9kaXNhYmxlX2VtYWlsP3Rva2VuPWV5SjFjMlZ5WDJsa0lqb3lOVE00TVRReUxDSndiM04wWDJsa0lqb3hPRFExTURRMU16Y3NJbWxoZENJNk1UYzJPRE01TlRnMU5Td2laWGh3SWpveE56azVPVE14T0RVMUxDSnBjM01pT2lKd2RXSXROVFkyTnpFaUxDSnpkV0lpT2lKa2FYTmhZbXhsWDJWdFlXbHNJbjAuT05OVHF3V0swSk1sc0pFVTJpdFhaNzJNTm1mQV9OQWlUeTM0TF9BcjlQSSIsInAiOjE4NDUwNDUzNywicyI6NTY2NzEsImYiOnRydWUsInUiOjI1MzgxNDIsImlhdCI6MTc2ODM5NTg1NSwiZXhwIjoyMDgzOTcxODU1LCJpc3MiOiJwdWItMCIsInN1YiI6ImxpbmstcmVkaXJlY3QifQ.HZ58pI4yy7RJNqOqjsMJJcOnzoyI4xIbkbUmZlqQdjY?
