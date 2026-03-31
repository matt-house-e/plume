# Page Briefs — Reference Guide

## Purpose

A page brief is the atomic unit of website strategy. It defines everything a copywriter, designer, and developer need to know about a page — without writing actual copy or making visual decisions. A well-written page brief should enable a copywriter to write the page without asking any strategic questions.

## The Page Brief Template

Use this template for every page. For Solo/Startup mode, use only the fields marked (core). For Agency/Enterprise, use all fields.

```markdown
## [Page Name]

**URL:** /[slug]
**Purpose:** (core) [One sentence — why this page exists]
**Target audience:** (core) [Who visits this page, and what's their intent?]
**Entry points:** [How do visitors reach this page? Nav, CTA from another page, search, direct?]

### Content Blocks (ordered by priority)

(core) [List each content block with its type and requirements]

1. **[Block Name]** — [Block Type]
   - Content: [What this block must contain]
   - Requirements: [Assets needed — photos, testimonials, data, etc.]
   - Notes: [Anything the copywriter/designer should know]

2. **[Block Name]** — [Block Type]
   ...

### Calls to Action

**Primary CTA:** (core) [The one thing you most want the visitor to do]
**Secondary CTA:** [Optional fallback for visitors not ready for the primary]

### Success Metric
(core) [How do we know this page is working? Use engagement rate (GA4) rather than bounce rate. Examples: "Engagement rate > 60%", "15% click-through to Services", "Form submissions > 5/week"]

### Copywriter Notes
[Tone guidance, key messages to hit, what to avoid, word count guidance]

### Designer Notes
[Content density, special layout needs, interactive elements, image requirements]

### SEO Notes
[Target topic, meta title/description guidance, internal linking opportunities]
```

## Content Block Library

Standard content block types that appear across page types. Use these names consistently in page briefs.

### Hero Blocks

| Block Type | Contains | Used On |
|-----------|----------|---------|
| **Hero — Headline** | Headline, sub-headline, primary CTA, optional background image/video | Homepage, landing pages |
| **Hero — Split** | Headline + CTA on one side, image/illustration on the other | Product pages, feature pages |
| **Hero — Video** | Headline with auto-playing background video, CTA overlay | Brand-forward homepages |
| **Hero — Minimal** | Headline only, no image, clean and typographic | About pages, blog listings |

### Proof Blocks

| Block Type | Contains | Used On |
|-----------|----------|---------|
| **Client Logos** | 4-8 recognizable client/partner logos in a row | Homepage, about, services |
| **Testimonial — Single** | One featured testimonial with photo, name, role, quote | Near CTAs, services pages |
| **Testimonial — Carousel** | 3-5 testimonials rotating | Homepage, dedicated testimonials page |
| **Testimonial — Grid** | 4-8 testimonials in a grid layout | Testimonials page, landing pages |
| **Case Study Preview** | Project image, client name, one-line result, link to full case study | Homepage, work page |
| **Metrics / Stats** | 3-4 key numbers with labels (e.g., "500+ clients", "98% retention") | Homepage, about, impact page |
| **Awards / Press** | Award badges, press logos, "As seen in" | Homepage, about |

### Content Blocks

| Block Type | Contains | Used On |
|-----------|----------|---------|
| **Features Grid** | 3-6 features with icon, title, and 1-2 sentence description | Product pages, services overview |
| **Features — Alternating** | Feature sections alternating image-left/image-right with text | Feature deep-dive pages |
| **Process / How It Works** | 3-5 numbered steps explaining a process | Services, about, how-it-works pages |
| **FAQ Accordion** | 5-10 questions with expandable answers | FAQ page, pricing page, service pages |
| **Pricing Table** | 2-4 tiers with features, prices, and CTA per tier | Pricing page |
| **Comparison Table** | Feature-by-feature comparison (us vs them, or tier vs tier) | Pricing, product pages |
| **Team Grid** | Team member photos, names, roles, optional bios/links | About, team page |
| **Blog Preview** | 3-4 recent/featured blog posts with image, title, excerpt | Homepage, blog listing |
| **Resource Cards** | Downloadable resources with thumbnail, title, description, CTA | Resources page, sidebar |
| **Timeline** | Chronological milestones with dates and descriptions | About (company history), project case studies |
| **Gallery / Portfolio Grid** | Image grid with optional filtering by category | Work/portfolio page, gallery |

### Conversion Blocks

| Block Type | Contains | Used On |
|-----------|----------|---------|
| **CTA Banner** | Headline, sub-text, and primary CTA button — full-width, high-contrast | Bottom of content pages, between sections |
| **Newsletter Signup** | Headline, value proposition, email field, submit button | Footer, sidebar, dedicated page |
| **Contact Form** | Name, email, message fields at minimum. Add fields only if they affect routing | Contact page |
| **Booking Widget** | Calendar/scheduling integration (Calendly, etc.) | Contact, services pages |
| **Lead Magnet** | Free resource offer with email capture form | Landing pages, blog sidebar, popup |

### Navigation / Structural Blocks

| Block Type | Contains | Used On |
|-----------|----------|---------|
| **Sub-navigation** | Links to child pages or sections within a parent | Services parent page, resource center |
| **Breadcrumb** | Hierarchical path showing page location | All pages 2+ levels deep |
| **Related Content** | 2-4 related pages or articles | Blog posts, case studies, service pages |
| **Next/Previous** | Sequential navigation between items in a collection | Blog posts, case studies, projects |
| **Category Filter** | Tags or categories for filtering a collection | Blog listing, portfolio, product catalog |

## Page-Specific Brief Examples

### Homepage Brief

```markdown
## Homepage

**URL:** /
**Purpose:** Orient first-time visitors and route them to the right next step based on their need.
**Target audience:** All segments — this is the front door.
**Entry points:** Direct traffic, organic search (brand queries), referrals, social.

### Content Blocks

1. **Hero — Headline**
   - Content: Value proposition headline, supporting sub-headline, primary CTA
   - Requirements: One strong headline that communicates what the business does and for whom
   - Notes: Must communicate value in < 6 seconds. No jargon.

2. **Client Logos**
   - Content: 5-6 recognizable client logos
   - Requirements: Logo files from clients (SVG preferred)
   - Notes: Social proof early. If no notable clients yet, skip this block.

3. **Features Grid** (or Services Overview)
   - Content: 3-4 key services/offerings with icon, title, 1-sentence description, link to detail page
   - Notes: This section routes visitors by need. Labels must be instantly clear.

4. **Case Study Preview**
   - Content: 2-3 featured projects with image, client name, one-line result
   - Requirements: Project photos, client approval for naming
   - Notes: Proves capability. Link each to full case study.

5. **Testimonial — Single**
   - Content: One compelling client testimonial with photo, name, role
   - Requirements: Client-approved quote
   - Notes: Place near the CTA. Best testimonial addresses a common objection.

6. **CTA Banner**
   - Content: Final conversion prompt with headline and primary CTA
   - Notes: Repeat the primary CTA for visitors who scrolled the full page.

### Calls to Action
**Primary CTA:** "Get in Touch" / "Book a Call" / "Start Your Project"
**Secondary CTA:** "See Our Work" (for visitors not ready to convert)

### Success Metric
Engagement rate > 55%. Click-through to Services or Work > 25%.
```

### Services Page Brief

```markdown
## Services (Overview)

**URL:** /services
**Purpose:** Help visitors understand what the business offers and find the right service for their need.
**Target audience:** Prospects evaluating whether this business can help them.
**Entry points:** Homepage CTA, primary nav, organic search.

### Content Blocks

1. **Hero — Minimal**
   - Content: Headline ("What We Do" or more specific), brief intro paragraph
   - Notes: Set expectations, not sell. The individual service pages sell.

2. **Services Grid**
   - Content: Each service with icon/image, title, 2-3 sentence description, "Learn More" link
   - Requirements: Final list of services from discovery
   - Notes: Each card must answer: "Is this what I need?" Link to individual service pages.

3. **Process / How It Works**
   - Content: 3-5 steps showing the typical engagement process
   - Notes: Reduces anxiety about what happens after they reach out.

4. **Testimonial — Single**
   - Content: One testimonial relevant to services overall
   - Notes: Pick a testimonial that speaks to the quality of the process, not just results.

5. **CTA Banner**
   - Content: "Not sure which service? Let's talk." with contact CTA
   - Notes: Catch visitors who didn't find an exact match.

### Calls to Action
**Primary CTA:** Navigate to individual service page (distributed across service cards)
**Secondary CTA:** Contact for guidance

### Success Metric
Click-through to individual service pages > 40%.
```

### About Page Brief

```markdown
## About

**URL:** /about
**Purpose:** Build trust and connection. Answer "Who are these people, and can I trust them?"
**Target audience:** Prospects doing due diligence before reaching out.
**Entry points:** Primary nav, homepage, organic search (brand queries).

### Content Blocks

1. **Hero — Minimal or Split**
   - Content: Headline + authentic photo of the founder/team
   - Requirements: Professional but not corporate photo
   - Notes: Show real people. Avoid stock photos.

2. **Story / Origin**
   - Content: 2-3 paragraphs about how the business started and why it exists
   - Notes: Focus on the "why", not a chronological history. What problem did the founder see?

3. **Values or Approach**
   - Content: 3-4 values or principles that guide the work
   - Notes: Only include if they're genuinely distinctive. "Quality" and "Integrity" are table stakes.

4. **Team Grid** (if applicable)
   - Content: Team photos, names, roles, optional 1-line bios
   - Requirements: Consistent team photos (same style/background)
   - Notes: For solo businesses, skip this and lean into the personal story.

5. **Metrics / Stats**
   - Content: 3-4 key numbers (years in business, projects completed, clients served)
   - Notes: Only include if the numbers are impressive. "2 years, 5 clients" is worse than no numbers.

6. **CTA Banner**
   - Content: "Ready to work together?" with contact CTA

### Calls to Action
**Primary CTA:** Contact / Get in Touch
**Secondary CTA:** See Our Work

### Success Metric
Engagement rate > 65%. Click-through to Contact or Work > 20%.
```

## Content Block Ordering Principles

1. **Most important content highest.** The first screen (above the fold) determines whether visitors stay or leave. Lead with the strongest value proposition.
2. **Proof follows claims.** After stating what the business does, show evidence (testimonials, case studies, metrics).
3. **Objection handling before CTA.** Place FAQ or trust signals before the final conversion ask.
4. **Progressive detail.** Start with the overview, let visitors drill into detail by choice. Don't front-load everything.
5. **End with action.** Every page should end with a clear next step — either a CTA or navigation to related content.

## Writing Effective Page Briefs

### Do:
- Specify content blocks by type and priority order
- Include specific requirements (number of testimonials, types of images needed)
- Note which content already exists vs. needs to be created
- Include tone guidance specific to this page (the About page is warmer than the Pricing page)
- Define one clear success metric per page

### Don't:
- Write the actual copy (that's the copywriter's job)
- Specify visual design (colors, fonts, spacing — that's the designer's job)
- Include more than 2 CTAs per page
- Leave the purpose vague ("This page tells visitors about us")
- Skip the success metric (unmeasured pages become vanity pages)

## Sources & Further Reading

- Nielsen Norman Group — "Page Content Design for Scanning": https://www.nngroup.com/articles/how-users-read-on-the-web/
- Orbit Media — "Web Page Anatomy": https://www.orbitmedia.com/blog/web-page-anatomy/
- GatherContent — "Content Brief Templates": https://gathercontent.com/blog/content-brief-template
- Copyblogger — "Landing Page Content Strategy": https://copyblogger.com/
- HubSpot — "Website Redesign Checklist": https://blog.hubspot.com/marketing/redesign-checklist
- ConversionXL — "Above the Fold Content": https://cxl.com/blog/above-the-fold/
- Baymard Institute — "Product Page UX Guidelines": https://baymard.com/blog
- UX Collective — "Content Hierarchy for Web": https://uxdesign.cc/
