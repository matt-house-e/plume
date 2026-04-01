# Goals & Metrics — Reference Guide

## Purpose

Define what success looks like and how to measure it. Without clear goals and the right metrics, marketing becomes a cost center that cannot demonstrate value. This reference covers North Star metrics, funnel models, revenue reverse-engineering, OKRs, attribution, and the critical distinction between vanity and actionable metrics.

## North Star Metric

The single metric that best captures the core value delivered to customers. All teams align around it.

### Criteria for Choosing

A strong NSM must:
1. Define the customer success moment
2. Be measurable and trackable
3. Include a time frequency (weekly, monthly)
4. Be influenceable by the team's actions
5. Correlate with revenue growth

### Examples by Business Type

| Business Type | North Star Metric | Examples |
|---|---|---|
| **B2B SaaS** | Monthly Recurring Revenue (MRR) or active usage | Salesforce: records/account. Slack: paid teams. |
| **Marketplace** | Transactions or bookings per period | Airbnb: nights booked. Uber: rides/week. |
| **E-commerce** | Repeat purchase rate or AOV | Amazon: purchases/month. |
| **Streaming/Content** | Time consumed or paid subscribers | Netflix: hours streamed. Spotify: paid subscribers. |
| **Services/Agency** | Qualified leads per month or projects delivered | — |
| **Freemium** | Free-to-paid conversion rate | Spotify, Duolingo, Tinder. |
| **Communication** | Messages/interactions sent | Twilio: messages sent. Zoom: weekly meetings hosted. |

## Marketing Funnel Models

### AARRR Pirate Metrics (Dave McClure)

| Stage | Question | Key Metric |
|-------|----------|-----------|
| **Acquisition** | How do people find us? | Traffic by channel, signups |
| **Activation** | Do they have a great first experience? | Onboarding completion, first value moment |
| **Retention** | Do they come back? | DAU/MAU, repeat usage rate |
| **Referral** | Do they tell others? | Viral coefficient, NPS |
| **Revenue** | Do they pay? | Conversion rate, ARPU, LTV |

**Key insight:** Focus on retention and activation first. If people do not stick around, acquisition spend is wasted.

### TOFU / MOFU / BOFU

| Stage | Goal | Content Types | Metrics |
|---|---|---|---|
| **TOFU** (Awareness) | Attract strangers | Blog, social, videos, SEO | Traffic, impressions, reach |
| **MOFU** (Consideration) | Nurture leads | Email, case studies, webinars | Downloads, email engagement |
| **BOFU** (Decision) | Convert to customers | Trials, demos, testimonials, pricing | Conversion rate, deals closed |

### The Dark Funnel

70-80% of B2B buyer evaluation happens in channels invisible to analytics: word of mouth, DMs, Slack communities, podcast mentions, offline conversations.

**How to measure it:**
- Add self-reported attribution ("How did you hear about us?") to conversion forms
- Track which dark funnel signals were active before closed deals
- Survey closed customers about pre-contact research sources

## Revenue Reverse-Engineering

Work backward from revenue target through each funnel stage.

### The Formula

Required Volume = Target Number / Conversion Rate at Each Stage

### Worked Example

**Goal:** $500K annual revenue. Average deal: $5,000. Need 100 customers.

| Stage | Conversion Rate | Calculation | Required Volume |
|---|---|---|---|
| Opportunity → Customer | 25% | 100 / 0.25 | **400 opportunities** |
| SQL → Opportunity | 45% | 400 / 0.45 | **889 SQLs** (74/month) |
| MQL → SQL | 38% | 889 / 0.38 | **2,339 MQLs** (195/month) |
| Visitor → MQL | 3% | 2,339 / 0.03 | **77,967 visitors** (6,497/month) |

### Conversion Rate Benchmarks (2025-2026)

| Stage | B2B SaaS | E-commerce | Professional Services |
|---|---|---|---|
| Visitor → Lead | 2-5% | 1.5-3% | 3-7% |
| Lead → MQL | 39% | 23% | — |
| MQL → SQL | 38% | 58% | — |
| SQL → Opportunity | 42% | 66% | — |
| SQL → Closed Won | 37% | 60% | — |
| Overall visitor → customer | 1-3% | 2-3% | 6-10% |

Source: First Page Sage 2025/2026 Conversion Benchmarks.

**Key insight:** A modest revenue increase often requires exponential top-of-funnel growth. This math reveals whether a growth target is realistic.

## Leading vs Lagging Indicators

### Leading Indicators (Predict Future)

| Indicator | What It Predicts |
|---|---|
| Website traffic volume | Future lead volume |
| Time on site / engagement depth | Conversion likelihood |
| Social engagement rate | Brand awareness trajectory |
| Email list growth rate | Future nurture pipeline |
| Pipeline volume (weighted) | Future revenue |
| Demo/trial signups | Near-term conversions |
| Content downloads | MQL generation |

### Lagging Indicators (Confirm Past)

| Indicator | What It Confirms |
|---|---|
| Revenue / MRR | Business health |
| Customer churn rate | Product/service quality |
| CAC | Marketing efficiency |
| LTV:CAC ratio | Unit economics viability (target: 3:1+) |
| Marketing ROI | Campaign effectiveness |
| NPS | Customer satisfaction |

### Dashboard Layout

Track both in one dashboard, arranged top-to-bottom:
1. **Top:** Traffic, impressions (leading)
2. **Middle:** Leads, MQLs, SQLs (hybrid)
3. **Bottom:** Revenue, CAC, LTV:CAC (lagging)

## Marketing OKRs

### Framework

OKRs = **Objective** (qualitative goal) + **Key Results** (2-4 measurable outcomes)

### First-Year Examples

**Objective: Establish brand awareness in target market**
- KR1: Grow organic traffic from 0 to 5,000 monthly visitors
- KR2: Publish 12 thought leadership articles
- KR3: Get featured in 3 industry publications
- KR4: Grow email list to 500 subscribers

**Objective: Build repeatable lead generation**
- KR1: Achieve 2% visitor-to-lead conversion rate
- KR2: Generate 50 qualified leads per month by Q4
- KR3: Establish baseline CAC and reduce 15% quarter-over-quarter

**Objective: Validate product-market fit through marketing**
- KR1: Achieve 20% MQL-to-SQL conversion rate
- KR2: Reach NPS score of 40+
- KR3: Acquire 1,000 active users

### Setting Goals Without Baseline Data

- Use industry benchmarks as starting points
- Set 90-day sprints, not annual goals — adjust frequently
- First quarter: focus on establishing baselines, not hitting targets
- Track weekly — OKRs without continuous reflection are just KPIs

## Attribution Models

| Model | How It Works | Best For |
|---|---|---|
| **First-touch** | 100% credit to first interaction | Measuring awareness channels |
| **Last-touch** | 100% credit to final interaction | Measuring closing channels |
| **Linear** | Equal credit to all touchpoints | Simple multi-touch |
| **U-shaped** | 40% first, 40% last, 20% middle | B2B with clear discovery + conversion |
| **Self-reported** | Ask "How did you hear about us?" | Dark funnel, word of mouth, podcasts |

### Recommended Approach

Use a layered system:
1. **Software attribution** (GA4, CRM) for demand capture channels
2. **Self-reported attribution** for demand creation channels
3. **Dark funnel correlation** for offline/community signals

**Implementation:** Add "How did you hear about us?" as an open-text field on high-intent forms (demo requests, contact forms). Combine with software data. Neither alone tells the full story.

## Vanity vs Actionable Metrics

| Vanity Metric | Why It's Misleading | Actionable Alternative |
|---|---|---|
| Page views | No quality context | **Conversion rate per page** |
| Social followers | No buying intent | **Engagement rate**, click-through |
| Total impressions | Volume without meaning | **Cost per qualified lead** |
| Email open rate | Unreliable post-iOS 15 | **Revenue per email sent** |
| Total signups | Includes inactive users | **Activation rate** |
| Total leads | Includes unqualified | **MQL-to-SQL conversion rate** |
| Time on site (alone) | Could mean confusion | **Pages per session + conversion** |

### The Test

Ask: "Can this metric lead to a course of action?" If no, it is a vanity metric.

### What to Track Instead

- **CAC** — what you actually pay per customer
- **LTV and LTV:CAC ratio** — unit economics (target 3:1+)
- **Conversion rates at each funnel stage** — where the funnel leaks
- **Revenue per channel** — which channels make money
- **Payback period** — how fast you recoup CAC

## Minimum Viable Analytics Stack

### Phase 1: Day One (Free)
1. **Google Analytics 4** — baseline website analytics
2. **Google Tag Manager** — manage tracking scripts
3. **UTM parameter system** — shared naming convention for campaign URLs

### Phase 2: Before First Campaign
4. **Conversion event tracking** in GA4
5. **Self-reported attribution field** on conversion forms
6. **Goal setup** tied to business outcomes

### Phase 3: When Running Paid
7. **Platform pixels** (Meta, LinkedIn, Google Ads)
8. **CRM integration** (HubSpot free tier or similar)

### UTM Rules
- Always lowercase
- Never tag internal links
- Always include source, medium, and campaign
- Maintain one shared naming convention document

## Goals & Metrics Document Template

```markdown
# Goals & Metrics

## North Star Metric
[Metric]: [Current value] → [Target value] by [date]

## Revenue Model
- Target revenue: $[amount] by [date]
- Average deal/purchase: $[amount]
- Customers needed: [number]
- Leads needed: [number] (based on [X]% conversion)
- Traffic needed: [number] (based on [X]% conversion)

## Quarterly OKRs
### Objective: [Qualitative goal]
- KR1: [Measurable outcome]
- KR2: [Measurable outcome]
- KR3: [Measurable outcome]

## Measurement Dashboard
### Leading Indicators
- [Metric 1]: Track [frequency]
- [Metric 2]: Track [frequency]

### Lagging Indicators
- [Metric 1]: Track [frequency]
- [Metric 2]: Track [frequency]

## Attribution Approach
- Software: [Tool]
- Self-reported: [Implementation]
- Review cadence: [Frequency]

## Metrics We Will NOT Track
- [Vanity metric]: [Why it's misleading for us]
```

## Sources & Further Reading

- [Amplitude: Every Product Needs a North Star Metric](https://amplitude.com/blog/product-north-star-metric) — Framework and examples
- [Finmark: North Star Metric Guide with 80+ Examples](https://finmark.com/north-star-metric/)
- [PostHog: The AARRR Pirate Funnel Explained](https://posthog.com/product-engineers/aarrr-pirate-funnel)
- [First Page Sage: Conversion Rate Benchmarks 2026](https://firstpagesage.com/seo-blog/sales-funnel-conversion-rate-benchmarks-2025-report/)
- [Kaya: Minimum Viable Analytics Stack](https://www.usekaya.com/blog/minimum-viable-marketing-analytics-stack)
- [Ruler Analytics: Vanity vs Actionable Metrics](https://www.ruleranalytics.com/blog/analytics/vanity-metrics-actionable-metrics/)
- [HockeyStack: B2B Dark Funnel](https://www.hockeystack.com/blog-posts/b2b-dark-funnel) — Dark funnel measurement
- [Cognism: Illuminating the Dark Funnel](https://www.cognism.com/blog/illuminating-the-dark-funnel-of-b2b-marketing)
- Sean Ellis & Morgan Brown, *Hacking Growth* — Growth experimentation framework
- Alistair Croll & Benjamin Yoskovitz, *Lean Analytics* — Metrics for startups
