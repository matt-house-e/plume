# Competitive Audit — Reference Guide

## Purpose

A competitive website audit reveals structural patterns in an industry — what competitors do, how they organize content, how they convert visitors, and where gaps exist. This isn't about copying competitors; it's about understanding the landscape so the new site can be better. This reference covers audit methodology, what to analyze, how to use WebFetch to extract structure, and how to present findings.

## Audit Methodology

### Step 1: Select Competitors (5-8 sites)

Choose a mix of three types:

| Type | What They Are | Why Include Them | How Many |
|------|--------------|-----------------|----------|
| **Direct competitors** | Do the same thing for the same audience | Reveals industry baseline — what visitors expect | 2-3 |
| **Indirect competitors** | Solve the same problem differently | Reveals alternative approaches and content gaps | 1-2 |
| **Aspirational references** | Best-in-class sites the client admires | Sets quality targets, reveals advanced patterns | 1-2 |

For Solo/Startup mode, audit 3-4 sites. For Agency/Enterprise, audit 5-8.

### Step 2: Extract Site Structure

Use WebFetch to retrieve competitor homepages and key pages. Extract:

1. **Primary navigation items** — What appears in the main menu?
2. **Page count estimate** — How many pages does the site have? (Check footer nav, sitemap)
3. **Content types** — Blog, case studies, resources, documentation?
4. **Navigation depth** — How deep does the hierarchy go?
5. **URL structure** — What patterns do URLs follow? (/services/branding, /blog/post-title)

**WebFetch extraction approach:**
```
Fetch the homepage: extract <nav> content, footer links, and hero content.
Fetch the services/product page: extract structure and sub-pages.
Fetch the about page: extract team size, positioning, story structure.
```

Focus on structure and content patterns, not design or visual elements (that's the design skill's territory).

### Step 3: Analyze Each Competitor

For each competitor, evaluate across these dimensions:

#### Structure Analysis

| Dimension | What to Look For |
|-----------|-----------------|
| **Page count** | How many pages total? Is it lean or sprawling? |
| **Navigation model** | How many primary nav items? Dropdowns? Mega menu? |
| **Hierarchy depth** | How many levels deep? Any orphan pages? |
| **Content types** | Blog? Case studies? Resources? Documentation? |
| **Taxonomy** | How are blog/portfolio/product items categorized? |
| **URL patterns** | Clean slugs? Category-based? Date-based? |

#### Content Analysis

| Dimension | What to Look For |
|-----------|-----------------|
| **Homepage messaging** | What's the headline? Value proposition clear? |
| **Social proof** | Client logos, testimonials, metrics, case studies? |
| **Content depth** | Long-form or thin? Detailed case studies or surface-level? |
| **Blog/content** | Active? How often? What topics? What format? |
| **Resources** | Lead magnets, guides, tools, templates? |
| **Missing content** | What would a visitor want that isn't here? |

#### Conversion Analysis

| Dimension | What to Look For |
|-----------|-----------------|
| **Primary CTA** | What action do they push? Where? |
| **CTA placement** | Header? Hero? Throughout content? |
| **Lead magnets** | Free resources in exchange for email? |
| **Pricing transparency** | Visible pricing or "contact for pricing"? |
| **Form complexity** | How many fields on the contact/signup form? |
| **Trust signals** | Certifications, guarantees, security badges? |
| **Conversion paths** | How many clicks from homepage to conversion? |

### Step 4: Cross-Competitor Comparison

After analyzing individual competitors, look across the set for patterns:

#### Pattern Identification

Create a comparison matrix:

```markdown
| Dimension | Competitor A | Competitor B | Competitor C | Competitor D | Pattern |
|-----------|-------------|-------------|-------------|-------------|---------|
| Primary nav items | 6 | 5 | 7 | 5 | 5-7 items standard |
| Has blog | Yes (weekly) | Yes (monthly) | No | Yes (sporadic) | Most have blogs |
| Case studies | 8, detailed | 12, brief | 3, detailed | 0 | Range varies widely |
| Pricing visible | No | Yes | No | Tiers shown | Split — opportunity to differentiate |
| Primary CTA | "Book a Call" | "Get Started" | "Contact Us" | "Request Demo" | Direct action CTAs |
```

#### Gap Analysis

| Gap Type | What It Means | Strategic Implication |
|----------|--------------|---------------------|
| **Everyone does X, we don't** | Industry expectation | Must include X or deliberately explain why not |
| **Nobody does Y** | Potential differentiator | Opportunity to stand out by doing Y |
| **Competitor A does Z exceptionally** | Best practice exists | Learn from their approach, adapt for our context |
| **Common weakness across all** | Industry-wide problem | Opportunity to differentiate by solving it |

### Step 5: Present Findings

Compile the audit into a structured summary:

```markdown
# Competitive Audit Summary

## Competitors Analyzed
| # | Name | URL | Type | Notable Strength |
|---|------|-----|------|-----------------|
| 1 | [Name] | [URL] | Direct | [Strength] |
| 2 | [Name] | [URL] | Direct | [Strength] |
| 3 | [Name] | [URL] | Indirect | [Strength] |
| 4 | [Name] | [URL] | Aspirational | [Strength] |

## Structural Patterns
[What most competitors do — the industry baseline]

## Content Patterns
[Common content types, depth, approach]

## Conversion Patterns
[How competitors drive conversions]

## Gaps & Opportunities
[Where the new site can differentiate]

## Recommendations
[3-5 specific structural recommendations based on findings]
```

## What NOT to Do in a Competitive Audit

| Anti-Pattern | Why It's Wrong | Better Approach |
|-------------|----------------|-----------------|
| **Copy the market leader** | Their structure evolved for their business, not yours | Extract principles, not pages |
| **Exhaustive visual analysis** | This is site strategy, not design — visual analysis is the design skill's job | Focus on structure, content, and conversion |
| **Analyzing 15+ competitors** | Diminishing returns after 8 — patterns emerge by 5 | 5-8 is sufficient for pattern identification |
| **Data dump without synthesis** | A table of features isn't useful without "so what?" | Always end with recommendations |
| **Ignoring indirect competitors** | Direct competitors show the baseline; indirect competitors show alternatives | Include 1-2 indirect competitors for fresh perspectives |
| **Auditing without a framework** | Random observations aren't actionable | Use the structured dimensions above consistently |

## Using WebFetch Effectively

### What to Fetch

| Page | What to Extract | Why |
|------|----------------|-----|
| Homepage | Nav items, hero content, section order, footer links | Reveals structure, messaging priority, navigation model |
| Services/Product page | Service list, categorization, depth of detail | Reveals how they organize their offering |
| About page | Team size, positioning, story approach | Reveals how they build trust |
| Blog/Resources | Categories, post frequency, content types | Reveals content strategy |
| Pricing (if exists) | Tier structure, feature comparison, CTA | Reveals monetization approach |
| Contact | Form fields, alternative contact methods | Reveals conversion approach |

### WebFetch Tips

- Fetch the HTML and look at the `<nav>`, `<header>`, `<footer>`, and `<main>` elements
- Look at the `<title>` and `<meta name="description">` for SEO positioning
- Check for schema.org structured data (reveals how they want search engines to understand them)
- Don't fetch more than 3-4 pages per competitor — focus on the most revealing pages

### WebFetch Limitations

- **SPA/client-rendered sites** (React, Vue, Angular): The initial HTML may be sparse — navigation and content load via JavaScript. Note this as a technical observation. For these sites, focus on the `<meta>` tags and any server-rendered content.
- **Rate limiting/blocking:** Some sites block automated fetches. If a fetch fails, skip that competitor and note "unable to fetch — manual review needed."
- **Dynamic content:** Pricing, testimonials, and CTA text may be personalized or A/B tested. What appears in a fetch may differ from what a visitor sees.
- **Fallback approach:** If WebFetch produces poor results, ask the user to share screenshots or describe the competitor's structure verbally. The structural analysis can still be done from description.

## Scored Audit Template

For systematic comparison, score each competitor on a 1-5 scale across these dimensions:

```markdown
### [Competitor Name] — [URL]
**Type:** Direct / Indirect / Aspirational

| Dimension | Score (1-5) | Notes |
|-----------|-------------|-------|
| **Navigation clarity** | | Are labels clear? Can a first-time visitor find what they need? |
| **Content depth** | | Thin marketing copy or substantive content? |
| **Social proof** | | Testimonials, case studies, metrics, client logos? |
| **Conversion design** | | Clear CTA path? Low friction? Trust signals near CTAs? |
| **Mobile experience** | | Responsive? Mobile nav usable? Tap targets adequate? |
| **Content freshness** | | Last blog post? Updated case studies? Current dates? |
| **Differentiation** | | Does this site stand apart from others in the set? |
| **Overall impression** | | Gut reaction after 30 seconds |

**Structural overview:**
- Primary nav items: [list]
- Estimated page count: [number]
- Key content types: [list]
- Primary CTA: [text + placement]
- Notable feature: [what they do that others don't]
- Weakness: [where they fall short]
```

### Interpreting Scores

| Average Score | Interpretation |
|---------------|---------------|
| 4.0-5.0 | Strong competitor — study and learn from their approach |
| 3.0-3.9 | Adequate — identify what works and what doesn't |
| 2.0-2.9 | Weak — easy to differentiate, but don't set bar here |
| 1.0-1.9 | Poor — useful only to show what NOT to do |

## Competitive Audit by Site Type

Use these focused audit criteria alongside the site type templates in `references/site-type-templates.md` to understand what's standard for each category.

### Portfolio / Agency Audit Focus

Focus on: case study depth, service categorization, proof/testimonials, conversion path from portfolio to contact.

### SaaS Audit Focus

Focus on: feature presentation, pricing structure (tiers, free tier, enterprise), documentation, onboarding flow, comparison pages.

### E-commerce Audit Focus

Focus on: category taxonomy (depth, breadth, facets), product page content, checkout friction (guest checkout, number of steps), return/shipping policies.

### Local Business Audit Focus

Focus on: Google Business Profile alignment, NAP consistency, service area pages, review integration, mobile experience (tap-to-call, directions).

## Sources & Further Reading

- ConversionXL — "How to Do a Competitive Analysis": https://cxl.com/blog/competitive-analysis/
- Moz — "Competitive Analysis for SEO": https://moz.com/blog/competitive-analysis
- Nielsen Norman Group — "Competitive Usability Evaluations": https://www.nngroup.com/articles/competitive-usability-evaluations/
- SimilarWeb — Competitive traffic analysis: https://www.similarweb.com/
- Screaming Frog — Technical site auditing: https://www.screamingfrog.co.uk/seo-spider/
- BuiltWith — Technology profiling: https://builtwith.com/
- SpyFu — Competitive keyword research: https://www.spyfu.com/
- Ahrefs — "Competitive Analysis: A Step-by-Step Guide": https://ahrefs.com/blog/competitive-analysis/
- Wayback Machine — Historical site versions: https://web.archive.org/
- UX Collective — "Competitive UX Benchmarking": https://uxdesign.cc/
