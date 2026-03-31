# Handoff Deliverables — Reference Guide

## Purpose

The Website Brief is the single compiled document that downstream skills and developers work from. This reference defines its structure, what goes in each section, and how to format it for maximum usability. The brief must be complete enough that someone who wasn't in discovery can understand every decision.

## The Website Brief — Master Template

```markdown
# Website Brief — [Client/Project Name]

**Date:** [Date compiled]
**Prepared by:** [Strategist]
**Client maturity mode:** [Solo/Startup | Established | Agency | Enterprise]
**Site type:** [Primary template used]
**Status:** [Draft | Approved | Final]

---

## 1. Executive Summary

### Business Context
[2-3 sentences: what the business does, who it serves, what the website needs to accomplish]

### Primary Goal
[One sentence: the single most important thing the website must achieve]

### Target Audience
[2-4 audience segments with one-line descriptions]

### Key Decisions
[Bullet list: the 3-5 most important strategic decisions made during planning]

---

## 2. Sitemap

[Full annotated sitemap as nested list]

### Annotations
[Table: Page | Purpose | Priority (Must/Should/Could)]

### Taxonomy
[If applicable: blog categories, portfolio tags, product categories, etc.]

---

## 3. Navigation Model

### Primary Navigation
[Ordered list of primary nav items with any dropdowns]

### Footer Navigation
[Grouped footer links]

### Utility Navigation
[Top-right items: Login, Cart, Search, Language, etc.]

### Mobile Navigation
[How nav adapts on mobile — which items are prioritized]

---

## 4. User Journeys

### Journey 1: [Segment Name]
[Step-by-step flow from entry to conversion]

### Journey 2: [Segment Name]
[Step-by-step flow]

### Journey 3: [Segment Name] (if applicable)
[Step-by-step flow]

---

## 5. Conversion Strategy

### Primary Conversion
[What is it? On which pages? What's the CTA text?]

### Secondary Conversions
[Lower-commitment actions: newsletter, resource download, etc.]

### CTA Map
[Table: Page | Primary CTA | Secondary CTA]

---

## 6. Page Briefs

[All page briefs, one per page. Use the template from references/page-briefs.md]

---

## 7. Technical Requirements

### CMS Requirements
[Content types, fields, editing experience needs]

### Forms
[What forms exist, what fields, where submissions go]

### Integrations
[Third-party tools: analytics, CRM, email marketing, booking, payment, etc.]

### Performance Requirements
[Page load targets, hosting considerations, CDN needs]

### Accessibility Requirements
[WCAG level, specific requirements, testing plan]

---

## 8. Migration Plan (Redesigns Only)

### Content Migration
[Table: Current Page | Decision (Keep/Revise/Merge/Cut) | New Location | Notes]

### URL Redirects
[Table: Old URL | New URL | Redirect Type (301)]

### SEO Preservation
[Key pages to monitor, expected timeline for ranking recovery]

### Migration Phases
[Phase 1: Core pages | Phase 2: Supporting content | Phase 3: Archives]

---

## 9. Governance (Enterprise Only)

### RACI Matrix
[Table: Decision Area | Responsible | Accountable | Consulted | Informed]

### Approval Process
[How each phase gate is approved, by whom, with what timeline]

### Content Ownership
[Table: Section | Content Owner | Update Cadence | Approval Required]

### Phased Rollout
[Phase 1 scope, Phase 2 scope, Phase 3 scope, with timelines]
```

## Section-by-Section Guidance

### Executive Summary
- Write this last, after everything else is compiled
- Should be readable in 2 minutes by someone who missed all discovery
- The "Key Decisions" list is critical — it captures trade-offs made during planning
- Examples of key decisions: "We prioritized lead generation over brand storytelling", "The blog will launch in Phase 2, not Phase 1", "Services are organized by industry, not by capability"

### Sitemap Section
- Use annotated nested lists with clear indentation
- Include every page, even utility pages (404, Privacy Policy, Terms)
- Mark priority: Must (launch), Should (soon after), Could (Phase 2+)
- If the sitemap exceeds 30 pages, include a visual summary (simple HTML tree) alongside the full list

**Example annotated sitemap:**
```
- Home (Must) — Orient visitors, route by need
  - About (Must) — Build trust, tell the story
    - Team (Should) — Humanize the company
  - Services (Must) — Explain offerings
    - Service A (Must) — Detail + proof for primary offering
    - Service B (Must) — Detail + proof for secondary offering
    - Service C (Should) — Detail for tertiary offering
  - Work (Must) — Prove capability with real examples
    - Case Study 1 (Must) — Flagship project
    - Case Study 2 (Should) — Different industry/capability
    - Case Study 3 (Could) — Additional proof
  - Blog (Should) — Thought leadership, SEO
  - Contact (Must) — Convert prospects to conversations
  - Privacy Policy (Must) — Legal requirement
  - 404 (Must) — Error handling with navigation
```

### Navigation Model
- Primary nav: 5-7 items maximum. Include the primary CTA as a styled button
- Footer: Full sitemap or near-complete. Organized in 3-4 columns by topic
- Utility: Top-right items (Login, Search, Language). Usually not in primary nav
- Mobile: Prioritize. Which 4-5 items appear first in the hamburger menu?

**Example navigation model:**
```
Primary:   Services | Work | About | Blog | [Contact — button]
Footer:    Col 1: Services (all), Col 2: Company (About, Team, Careers), Col 3: Resources (Blog, FAQ), Col 4: Contact + Social
Utility:   Search | Login (if applicable)
Mobile:    Services | Work | Blog | About | Contact (bottom sticky)
```

### Technical Requirements
- Be specific enough for a developer to understand scope, not so detailed as to make architecture decisions
- List integrations with purpose, not implementation: "Email marketing: collect newsletter signups and deliver automated welcome sequence" not "Integrate Mailchimp API v3"
- Note form requirements: fields, validation, where submissions go, any conditional logic
- Accessibility: default to WCAG 2.1 AA unless the client specifies otherwise

**Technical requirements template:**
```markdown
### CMS Content Types Needed
| Content Type | Fields | Notes |
|-------------|--------|-------|
| Page (generic) | Title, body, SEO | For About, Contact, etc. |
| Service | Title, description, features, CTA, SEO | Individual service pages |
| Case Study | Title, client, challenge, solution, results, images, SEO | Portfolio items |
| Blog Post | Title, body, category, author, date, SEO | Blog content |

### Forms
| Form | Location | Fields | Destination |
|------|----------|--------|-------------|
| Contact | /contact | Name, email, message | Email to team@... |
| Newsletter | Footer, blog | Email | Email marketing platform |

### Third-Party Integrations
| Service | Purpose | Pages Affected |
|---------|---------|----------------|
| Google Analytics 4 | Traffic and conversion tracking | All pages |
| Email marketing (e.g., Mailchimp) | Newsletter, automated sequences | Footer signup, blog |
| Calendly | Appointment booking | Contact page |

### Performance Targets
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Core Web Vitals: all green
- Lighthouse Performance: > 90

### Accessibility
- WCAG 2.1 AA compliance
- Keyboard navigation for all interactive elements
- Alt text for all images
- Color contrast ratios: 4.5:1 (normal text), 3:1 (large text)
```

### Migration Plan (Redesigns)
- The content migration table is the most labor-intensive deliverable — it covers every existing page
- Decision framework for each page:
  - **Keep:** High traffic, still relevant, good quality → migrate as-is to new structure
  - **Revise:** Good topic but outdated/poor quality → migrate with content rewrite
  - **Merge:** Multiple thin pages on similar topics → combine into one stronger page
  - **Cut:** Low traffic, outdated, irrelevant → remove with 301 redirect to nearest relevant page
- URL redirect map must be exhaustive — every old URL needs a destination
- Flag high-traffic URLs that are changing — these need monitoring post-launch

## Handoff to Downstream Skills

### To `plume-brand-system`
The website brief tells the design skill:
- How many unique page templates are needed (homepage, service page, case study, blog post, etc.)
- What content patterns exist across pages (hero types, proof blocks, CTA styles)
- How much content density each page has (a text-heavy about page vs a visual portfolio page)
- What navigation patterns need to be designed (mega menu vs simple dropdown)

### To `plume-copywriter`
The page briefs tell the copywriter:
- What each page is for and who it's for
- What content blocks are needed, in what order
- What CTAs to write and where they appear
- What tone to use on each page
- What success looks like (so the copy can be optimized toward it)

**Quality test:** A copywriter should be able to pick up any page brief and write the page without asking a single strategic question. If they need to ask "who's the audience?" or "what's the goal?" the brief is incomplete.

### To Development
The technical requirements tell developers:
- What CMS content types are needed (from the page templates)
- What forms exist and where
- What third-party integrations are required
- What the URL structure looks like (from the sitemap)
- What's dynamic vs static

## File Organization

For larger projects, the Website Brief can be split into separate files:

```
strategy/
├── website-brief.md          (Executive summary + navigation + conversion strategy)
├── sitemap.md                (Full annotated sitemap)
├── user-journeys.md          (All journey maps)
├── page-briefs/
│   ├── homepage.md
│   ├── about.md
│   ├── services.md
│   ├── services-a.md
│   ├── work.md
│   ├── case-study-template.md
│   ├── blog.md
│   └── contact.md
├── technical-requirements.md  (CMS, forms, integrations)
└── migration-plan.md          (Redesigns only)
```

For Solo/Startup projects, a single `website-brief.md` file is sufficient.

## Sources & Further Reading

- GatherContent — "Website Content Planning": https://gathercontent.com/blog/website-content-planning
- Orbit Media — "Website Planning Guide: 10 Steps to a Better Website": https://www.orbitmedia.com/blog/website-planning-guide/
- UX Planet — "How to Write a Design Brief": https://uxplanet.org/
- A List Apart — "Content Strategy at Work": https://alistapart.com/
- Brain Traffic — "Content Strategy Toolkit": https://www.contentstrategy.com/
- WebAIM — "WCAG 2 Checklist": https://webaim.org/standards/wcag/checklist
- Moz — "URL Structure Best Practices": https://moz.com/learn/seo/url
- Screaming Frog — "How to Plan URL Redirects for a Website Migration": https://www.screamingfrog.co.uk/url-redirect-mapping/
