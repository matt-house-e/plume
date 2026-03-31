# User Journeys & Conversion — Reference Guide

## Purpose

User journey mapping connects website structure to visitor behavior. It answers: "How does someone arrive, what do they need, how do they move through the site, and where do they convert?" This reference covers journey mapping methodology, conversion funnel design, CTA strategy, and the Jobs-to-be-Done framework applied to websites.

## Journey Mapping Methodology

Journey maps apply the Jobs-to-be-Done framework (see `references/strategic-thinking.md`) to concrete visitor paths through the site.

### What a Website Journey Map Contains

A journey map for a website is simpler than a full customer journey map. It focuses on the website interaction, not the entire customer relationship.

**Structure per journey:**

```markdown
### Journey: [Segment Name] — [Job to be Done]

**Who:** [1-sentence persona description]
**Goal:** [What they want to accomplish]
**Entry point:** [How they arrive — organic search, referral, direct, ad]
**Mindset on arrival:** [What they're thinking/feeling]

**Steps:**
1. **Lands on [page]** → Sees [content]. Thinks: "[internal monologue]"
   - Needs: [what they're looking for]
   - Action: [what they click/do]

2. **Moves to [page]** → Sees [content]. Thinks: "[internal monologue]"
   - Needs: [what they're looking for]
   - Action: [what they click/do]

3. **Reaches [conversion page]** → Sees [content]. Thinks: "[internal monologue]"
   - Friction: [what might stop them]
   - Motivation: [what pushes them forward]
   - Action: [converts / bounces]

**Conversion point:** [The specific action — form submit, purchase, signup]
**Post-conversion:** [What happens next — confirmation page, email, follow-up]
**Drop-off risks:** [Where they might leave and why]
```

### How Many Journeys to Map

| Client Maturity | Number of Journeys | Depth |
|----------------|-------------------|-------|
| Solo/Startup | 1-2 | 3-5 steps each |
| Established | 2-3 | 5-7 steps each |
| Agency | 3-4 | 5-8 steps each |
| Enterprise | 4-6 | 5-10 steps each |

### Identifying Key Journeys

Select journeys based on business value and frequency:

1. **The Primary Buyer** — The person most likely to convert. This journey is mandatory for every site.
2. **The Researcher** — Arrives to learn, not buy yet. Needs nurturing toward eventual conversion.
3. **The Referral** — Sent by someone else ("Check out this company"). Has social proof but no context.
4. **The Returner** — Has visited before, coming back to take action or check for updates.
5. **The Talent** — Looking for jobs/collaboration. Important if hiring is a business goal.

Select 2-4 of these based on which are most relevant to the business.

## Conversion Funnel Design

### The Website Conversion Funnel

```
Awareness          → "I found this site" (via search, ad, referral, social)
    ↓
Interest           → "This looks relevant to me" (homepage, landing page)
    ↓
Evaluation         → "Can they actually help me?" (services, case studies, pricing)
    ↓
Decision           → "I want to move forward" (CTA click, form page)
    ↓
Action             → "I'm committing" (form submit, purchase, signup)
    ↓
Confirmation       → "It worked, what's next?" (thank you page, email)
```

### Mapping Funnel Stages to Pages

| Funnel Stage | Typical Pages | Visitor Mindset | Design Priority |
|-------------|--------------|-----------------|-----------------|
| **Awareness** | Homepage, blog posts, landing pages | "What is this?" | Clear value prop, fast load |
| **Interest** | Services overview, features, about | "Tell me more" | Compelling content, easy navigation |
| **Evaluation** | Case studies, pricing, testimonials, comparison | "Prove it" | Social proof, specifics, objection handling |
| **Decision** | Contact, sign up, book a call, pricing | "How do I start?" | Minimal friction, clear CTA, trust signals |
| **Action** | Form submission, checkout, registration | "I'm doing this" | Simple form, progress indicator, security signals |
| **Confirmation** | Thank you page, confirmation email | "What happens now?" | Next steps, expectations, cross-sell |

### Funnel Design by Site Type

**Portfolio/Services site funnel:**
```
Blog/Search → Homepage → Services → Case Study → Contact → Thank You
```

**SaaS funnel:**
```
Blog/Ad → Landing Page → Features → Pricing → Sign Up → Onboarding
```

**E-commerce funnel:**
```
Search/Social → Product Category → Product Page → Cart → Checkout → Confirmation
```

**Lead generation funnel:**
```
Search/Ad → Landing Page → Resource Download (email capture) → Nurture Email → Service Page → Contact
```

## CTA Strategy

CTAs connect user journeys to conversion. Every page brief (see `references/page-briefs.md`) must specify primary and secondary CTAs.

### CTA Hierarchy

Every page should have at most one primary CTA and one secondary CTA:

| CTA Type | Purpose | Design Treatment | Examples |
|----------|---------|-----------------|----------|
| **Primary** | The action you most want the visitor to take | Prominent button, contrasting color, clear label | "Get Started", "Book a Call", "Buy Now" |
| **Secondary** | Fallback for visitors not ready for primary | Text link, ghost button, less prominent | "Learn More", "See Examples", "Read the Guide" |
| **Tertiary** | Catch-all for exploration (not a formal CTA) | In-text link, navigation | "Browse our blog", "Meet the team" |

### CTA Mapping by Page Type

| Page Type | Primary CTA | Secondary CTA | Rationale |
|-----------|------------|---------------|-----------|
| Homepage | "Get in Touch" / "Get Started" | "See Our Work" | Route to conversion or let them evaluate first |
| Services overview | Navigate to individual service | "Contact Us" | Help them find the right service |
| Service detail | "Get a Quote" / "Book a Call" | "See Related Work" | They've evaluated — now convert |
| Case study | "Start Your Project" | "See More Work" | Proof creates momentum — capture it |
| About | "Work With Us" / "Get in Touch" | "See Our Work" | Trust is built — route to conversion or proof |
| Blog post | "Subscribe" / related resource | "Read Related Posts" | Capture interest, nurture toward conversion |
| Pricing | "Choose Plan" / "Get Started" | "Talk to Sales" | Self-service or human-assisted conversion |
| Contact | Submit form (this IS the primary CTA) | Phone/email (alternative) | Minimize friction to completion |
| FAQ | "Contact Us" (for unresolved questions) | Navigate to relevant service | Handle remaining objections |

### CTA Copywriting Principles

| Principle | Bad Example | Good Example |
|-----------|------------|--------------|
| **Action-oriented** | "Submit" | "Send My Message" |
| **Value-focused** | "Sign Up" | "Start Free Trial" |
| **Specific** | "Learn More" | "See Our Case Studies" |
| **Low-friction** | "Buy Now" (on first visit) | "See Pricing" (then "Start Free Trial" on pricing page) |
| **Specific** | "Start your trial" | "Start free trial" |
| **Urgency when appropriate** | "Limited offer" (always) | "Spots fill up — book this week" (when true) |

## Conversion Rate Benchmarks

Reference benchmarks to contextualize success metrics (vary significantly by industry):

| Context | Benchmark |
|---------|-----------|
| Global e-commerce | ~2.5% |
| Landing pages (median) | ~6.6% |
| Top-performing sites | >11% |
| Desktop vs mobile | 4.8% vs 2.9% |
| B2B average | ~1.8% |
| B2B average | ~2.1% |
| Each additional second of load time | -4.42% conversion |
| 5 or fewer form fields vs more | ~120% improvement |
| Personalized CTAs vs generic | ~202% improvement |

Use these as directional guidance, not targets — actual benchmarks depend on industry, traffic quality, and offer type.

## Drop-Off Analysis

### Common Drop-Off Points

| Drop-Off Point | Why Visitors Leave | Mitigation |
|---------------|-------------------|------------|
| **Homepage (high bounce)** | Value proposition unclear, slow load, wrong audience | Clearer headline, faster page, better targeting |
| **After homepage** | Can't find what they need, nav is confusing | Improve navigation labels, add clear paths |
| **Services page** | Too generic, no proof, no clear next step | Add specifics, testimonials near content, clear CTA |
| **Pricing page** | Too expensive, confusing tiers, hidden costs | Transparent pricing, value framing, FAQ section |
| **Contact form** | Too many fields, no trust signals, unclear expectations | Reduce fields, add testimonial nearby, "We respond within 24 hours" |
| **Checkout** | Unexpected costs, forced account creation, security concerns | Transparent totals, guest checkout, trust badges |

### Designing Around Friction

For each identified friction point in a journey:

1. **Acknowledge the concern** — Address it in the content ("Wondering about pricing? Here's how it works")
2. **Provide proof** — Place a relevant testimonial or case study result nearby
3. **Reduce commitment** — Offer a lower-commitment alternative ("Not ready? Download our free guide first")
4. **Set expectations** — Tell them what happens next ("We'll respond within 24 hours with a custom proposal")

## Micro-Conversions

Not every visitor is ready for the primary conversion. Micro-conversions capture interest for later nurturing:

| Micro-Conversion | Commitment Level | Best Placement | Nurture Path |
|-----------------|-----------------|----------------|-------------|
| Newsletter signup | Very low | Blog posts, footer, resource pages | Email → content → awareness → primary conversion |
| Resource download | Low | Blog sidebar, dedicated landing page | Email sequence → case study → contact offer |
| Social media follow | Very low | Footer, about page, blog posts | Social content → site revisit → conversion |
| Webinar/event registration | Medium | Homepage, blog, email | Event → follow-up → demo/consultation offer |
| Free trial/freemium | Medium-high | Pricing page, homepage, product pages | Product experience → upgrade prompt → paid |
| Demo request | High | Pricing page, feature pages, comparison pages | Demo → follow-up → proposal → close |

### Building a Conversion Ladder

For sites where the primary conversion is high-commitment (expensive service, enterprise software), build a ladder of increasing commitment:

```
Read a blog post (free, no commitment)
    ↓
Download a guide (email required)
    ↓
Attend a webinar (time commitment)
    ↓
Book a discovery call (relationship commitment)
    ↓
Receive a proposal (evaluation commitment)
    ↓
Become a client (financial commitment)
```

Map each step to specific pages and CTAs in the sitemap.

## Multi-Segment Journey Design

When a site serves 2-4 distinct audience segments, the architecture must support multiple journeys without creating confusion.

### Strategies for Multi-Segment Sites

| Strategy | How It Works | Best For |
|----------|-------------|----------|
| **Self-segmenting homepage** | "I'm a [type A] / I'm a [type B]" routing on homepage | 2-3 clearly distinct segments |
| **Use-case navigation** | "For Startups / For Enterprise / For Agencies" in nav | SaaS products with different tiers |
| **Content-level segmentation** | All segments share pages, but content speaks to each | Similar segments with overlapping needs |
| **Dedicated landing pages** | Each segment has its own entry point (from ads or campaigns) | Paid acquisition with different audiences |
| **Solution pages** | "Industries" or "Use Cases" section alongside features | When the same product serves different verticals |

### Rules for Multi-Segment Design

1. **Don't force segmentation.** If segments overlap heavily, one set of pages with inclusive language works better than separate paths.
2. **Shared evaluation, different entry.** Most visitors evaluate the same things (pricing, proof, features). Different entry points can route to shared evaluation pages.
3. **Test navigation labels.** "For Developers" is clear. "Enterprise Solutions" is jargon. Test with real users when possible.
4. **Maximum 4 segments in navigation.** More than 4 "For X" items in nav creates choice paralysis.

## Sources & Further Reading

- Nielsen Norman Group — "Customer Journey Mapping 101": https://www.nngroup.com/articles/customer-journey-mapping/
- Nielsen Norman Group — "Journey Mapping for Websites": https://www.nngroup.com/articles/journey-mapping-ux/
- Baymard Institute — "Checkout Usability Research": https://baymard.com/blog/current-state-of-checkout-ux
- ConversionXL — "Conversion Funnel Analysis": https://cxl.com/blog/conversion-funnel/
- Copyhackers — "CTA Best Practices": https://copyhackers.com/
- HubSpot — "The Anatomy of a Perfect CTA": https://blog.hubspot.com/marketing/call-to-action-examples
- Intercom — "Jobs-to-be-Done for Product Design": https://www.intercom.com/blog/using-job-stories/
- Alan Klement — *When Coffee and Kale Compete* (JTBD): https://www.whencoffeeandkalecompete.com/
- Flint McGlaughlin, MECLABS — "Conversion Heuristic Framework": https://meclabs.com/
- Hotjar — "User Journey Mapping Guide": https://www.hotjar.com/blog/customer-journey-map/
- UX Collective — "Designing Multi-Audience Websites": https://uxdesign.cc/
