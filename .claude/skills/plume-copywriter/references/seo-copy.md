# SEO Copy — Reference Guide

## Purpose

SEO copy optimizes text for search engines without sacrificing readability for humans. The goal is to appear in relevant search results AND convert the visitors who arrive. This file covers meta tags, header hierarchy, keyword integration, Open Graph, alt text, URL slugs, and featured snippet targeting.

## Meta Title Tags

### Specifications

| Attribute | Guideline | Source |
|---|---|---|
| **Character limit** | 50-60 characters (Google truncates at ~580px, roughly 55-60 chars) | Moz, Google documentation |
| **Keyword placement** | Primary keyword near the beginning of the title | Moz, Backlinko |
| **Brand name** | End of title, separated by ` — ` or ` | ` | Convention |
| **Uniqueness** | Every page must have a unique title tag | Google Search Central |

### Title Tag Formulas

| Formula | Example | Best For |
|---|---|---|
| `[Primary Keyword]: [Benefit]` | "Email Marketing Software: Send Campaigns That Convert" | Product/service pages |
| `[Number] [Topic] [Promise]` | "12 Headline Formulas That Actually Work" | Blog posts |
| `How to [Action] [Qualifier]` | "How to Write Landing Page Copy That Converts" | How-to content |
| `[Brand] — [Value Prop]` | "Basecamp — The All-In-One Toolkit for Working Remotely" | Homepage |
| `[Topic] vs [Topic]: [Helpful Framing]` | "Webflow vs WordPress: Which Is Right for Your Business?" | Comparison content |
| `[Topic] for [Audience]` | "Project Management for Creative Teams" | Niche pages |

### Title Tag Anti-Patterns

- **Keyword stuffing:** "Best SEO Tools | Top SEO Software | SEO Tool Reviews" → Google may rewrite these
- **Missing keywords entirely:** "Welcome to Our Website" → tells search engines nothing
- **Duplicate titles:** Multiple pages with the same title → confuses Google about which to rank
- **ALL CAPS or excessive punctuation:** "THE BEST EMAIL TOOL!!!" → looks spammy in search results

## Meta Descriptions

### Specifications

| Attribute | Guideline |
|---|---|
| **Character limit** | 150-160 characters (Google truncates at ~920px on desktop) |
| **Must include** | Primary keyword (Google bolds matching terms), a clear value proposition, a call to action |
| **Uniqueness** | Every page must have a unique meta description |
| **Note** | Google rewrites ~63% of meta descriptions (Ahrefs study). Write them anyway — when Google uses yours, it's usually because yours was good. |

### Meta Description Formulas

| Formula | Example |
|---|---|
| `[What it is] + [Key benefit] + [CTA]` | "Free project management tool for small teams. Organize tasks, hit deadlines, and stay sane. Try it free." |
| `[Pain point] + [Solution] + [Proof]` | "Tired of homepage copy that doesn't convert? Our proven frameworks have helped 200+ SaaS companies increase signups. See how." |
| `[Question] + [Answer preview]` | "What makes a great landing page? We analyzed 500 high-converting pages to find out. Here are the 7 patterns they share." |

### Description Anti-Patterns

- No description at all (Google guesses — often poorly)
- Description that doesn't match page content (high bounce rate signals)
- Starting with "We are" or "Our company" (nobody searches for your company description)
- No CTA or value proposition (just a dry summary)

## Open Graph (OG) Tags

### Essential OG Tags for Every Page

```html
<meta property="og:title" content="[Title — can differ from title tag]">
<meta property="og:description" content="[Description — can differ from meta description]">
<meta property="og:image" content="[URL to image — 1200x630px minimum]">
<meta property="og:url" content="[Canonical URL]">
<meta property="og:type" content="website">
```

### OG Copy Rules

| Tag | Guidance |
|---|---|
| **og:title** | Can be different from the title tag. Optimize for social sharing — be more conversational or intriguing. Max 60-90 characters. |
| **og:description** | Social-optimized description. More casual than meta description. What makes someone click when they see this in a social feed? Max 200 characters. |
| **Twitter card** | Add `<meta name="twitter:card" content="summary_large_image">` for large image previews |

### OG vs. Meta: When to Differentiate

| Scenario | title tag | og:title |
|---|---|---|
| SEO-focused page | "Email Marketing Software for Small Business — Acme" | "The email tool your small business actually needs" |
| Blog post | "12 Headline Formulas That Work in 2025" | "12 headline formulas I use for everything" |
| Homepage | "Acme — Project Management for Creative Teams" | "Acme — Finally, a project tool that doesn't feel like work" |

## Header Hierarchy (H1-H6)

### Rules

| Rule | Detail |
|---|---|
| **One H1 per page** | The H1 is the page's main topic. It should include the primary keyword. |
| **H1 ≠ title tag** | They can (and often should) differ. Title tag is for search results; H1 is for the page visitor. |
| **Logical nesting** | H2 under H1, H3 under H2. Never skip levels (H1 → H3). |
| **Keyword in H2s** | Include the primary keyword or variations in 2-3 H2s naturally. |
| **H2s as scannable outline** | A reader should understand the page by reading only the H2s. |
| **Header length** | 3-8 words ideal. Max 70 characters. |
| **No styling abuse** | Don't use H2 for bold text if it's not a real section header. Screen readers and SEO tools parse headers literally. |

### Recommended Headers Per Page

| Page Type | H2 Count | H3 Count |
|---|---|---|
| Homepage | 4-8 | 0-4 |
| Service page | 3-6 | 2-4 per section |
| Blog post | 4-12 | 2-4 per section |
| Landing page | 5-10 | 1-3 per section |
| Product page | 3-5 | 2-6 (specs, details) |

## Image Alt Text

### Writing Effective Alt Text

| Rule | Example |
|---|---|
| **Describe what's in the image** | "Screenshot of the Acme dashboard showing project progress bars" |
| **Be specific, not generic** | "Bar chart showing 47% increase in conversion rate" — not "chart" |
| **Include keywords only when natural** | "Email marketing analytics dashboard" — not "best email marketing software tool dashboard analytics" |
| **Keep it under 125 characters** | Screen readers may truncate longer alt text |
| **Leave alt empty for decorative images** | `alt=""` for background textures, dividers, decorative icons |
| **Don't start with "Image of" or "Photo of"** | Screen readers already announce it as an image |

### Alt Text Formulas

| Image Type | Formula | Example |
|---|---|---|
| Screenshot | "[What it shows] + [key detail]" | "Pricing page showing three plan tiers with annual toggle" |
| Photo | "[Subject] + [action/context]" | "Team collaborating around a whiteboard in the design studio" |
| Chart/graph | "[Chart type] + [what it shows]" | "Line graph showing 3x growth in organic traffic over 12 months" |
| Icon | "[What it represents]" | "Envelope icon" (or `alt=""` if next to the word "Email") |
| Logo | "[Company name] logo" | "Stripe logo" |

## URL Slug Patterns

### Rules

| Rule | Good | Bad |
|---|---|---|
| **Short and keyword-rich** | `/headline-formulas` | `/the-ultimate-guide-to-writing-better-headline-formulas-for-2025` |
| **Hyphens as separators** | `/email-marketing-tips` | `/email_marketing_tips` or `/emailmarketingtips` |
| **No dates** (usually) | `/seo-guide` | `/2025/01/seo-guide` (dates make content look stale) |
| **Lowercase only** | `/about-us` | `/About-Us` |
| **No stop words** | `/copywriting-formulas` | `/the-best-copywriting-formulas` |
| **No file extensions** | `/contact` | `/contact.html` |
| **3-5 words max** | `/pricing` | `/our-pricing-plans-and-packages` |

### URL Hierarchy

```
/                         (homepage)
/services/                (services index)
/services/copywriting/    (individual service)
/work/                    (portfolio/case studies index)
/work/acme-corp/          (individual case study)
/blog/                    (blog index)
/blog/headline-formulas/  (individual post)
```

## Featured Snippet Targeting

### How to Win Featured Snippets

| Snippet Type | Structure Requirement | Copy Pattern |
|---|---|---|
| **Definition box** | H2 with the question → 40-60 word paragraph answer | "What is [term]? [Term] is [concise definition that fully answers the question in one paragraph]." |
| **Numbered list** | H2 with "How to" → numbered steps (H3 or ordered list) | Step-by-step instructions, each starting with a verb |
| **Bulleted list** | H2 → unordered list of items | Tips, features, examples as bullet points |
| **Table** | H2 → markdown/HTML table | Comparisons, specifications, data |

### Key Insight

Pages that already rank in positions 1-10 are eligible for featured snippets. Snippet optimization is a content structure exercise, not a ranking exercise. Write the content to rank first, then structure it for snippet capture.

### Google AI Overviews (2024-2026)

Google's AI Overviews (formerly SGE) now appear above traditional results for many informational queries. This changes SEO copy strategy:

| Change | Copy Implication |
|---|---|
| AI Overviews summarize multiple sources | Structure content so individual sections are self-contained and extractable — Google's AI pulls specific passages |
| Zero-click searches are increasing | Write copy that drives brand awareness even if users don't click — include brand name in answers |
| AI cites sources inline | Being cited in AI Overviews requires clear, authoritative, structured answers to specific questions |
| Feature snippets now coexist with AI Overviews | Well-structured FAQ/definition content can appear in both |

**How to optimize for AI Overview citations:**
- Answer specific questions directly under H2/H3 headings (40-60 words)
- Include unique data, original research, or first-hand experience — AI Overviews favor sources with information not found elsewhere
- Use structured data (FAQ schema, How-To schema) to help Google understand content structure
- Write from demonstrated expertise — Google's E-E-A-T (Experience, Expertise, Authoritativeness, Trust) is more important than ever

**Title tag rewriting (2024-2025 data):** Google rewrites ~61-76% of title tags (Zyppy/Ahrefs studies). Front-load the most important words — even if Google rewrites the title, the first 30 characters usually survive. Titles with brackets or parentheses — [Study], (2025 Guide) — get ~33% higher CTR (Backlinko, 2024).

## Internal Linking Copy

### Anchor Text Rules

| Rule | Good | Bad |
|---|---|---|
| **Descriptive of target page** | "our headline formulas guide" | "click here" |
| **Natural in context** | "See how we helped Acme Corp increase conversions" | "for more information about our case studies, please visit this page" |
| **Not over-optimized** | Varies — "case studies," "our work," "client results" | Always using the exact keyword phrase as anchor text |
| **Relevant placement** | Linked from a related paragraph | Random links in unrelated content |

## Sources & Further Reading

- Google Search Central — title tag and meta description guidelines: https://developers.google.com/search/docs/appearance/title-link
- Moz — title tag and meta description best practices: https://moz.com/learn/seo/title-tag
- Ahrefs — meta description rewrite study and SEO copywriting: https://ahrefs.com/blog/meta-description-study/
- Backlinko — on-page SEO and featured snippet research: https://backlinko.com/on-page-seo
- W3C WAI — alt text guidelines for accessibility: https://www.w3.org/WAI/tutorials/images/
- Google Search Central — URL structure best practices: https://developers.google.com/search/docs/crawling-indexing/url-structure
- Semrush — featured snippet analysis and optimization: https://www.semrush.com/blog/featured-snippet/
- WebAIM — accessible image alt text: https://webaim.org/techniques/alttext/
- John Mueller (Google) — keyword density statements: https://www.searchenginejournal.com/google-keyword-density/
