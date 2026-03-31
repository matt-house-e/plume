# Content Audit — Reference Guide

## Purpose

For website redesigns, the content audit determines what existing content migrates to the new site, what gets revised, what gets merged, and what gets cut. This is often the most politically charged deliverable — people are attached to their content. This reference covers content inventory methodology, quality scoring, migration decision frameworks, and URL redirect mapping.

## When to Conduct a Content Audit

| Scenario | Content Audit Needed? | Depth |
|----------|----------------------|-------|
| New site from scratch | No | N/A |
| Redesign of existing site | Yes — full | Every page inventoried and scored |
| Redesign with existing content that "mostly works" | Yes — targeted | Focus on problematic sections |
| Adding new sections to existing site | Partial | Audit only the affected sections |
| Platform migration (same content, new CMS) | Yes — inventory only | No quality scoring, just migration mapping |

## Content Inventory

### The Inventory Spreadsheet

Create a row for every page on the existing site. Columns:

| Column | Description | How to Get It |
|--------|-------------|---------------|
| **URL** | Full URL of the existing page | Screaming Frog crawl or manual |
| **Page Title** | Title tag content | From HTML or Screaming Frog |
| **Content Type** | Blog post, service page, about, landing page, etc. | Manual classification |
| **Section** | Which section of the site it belongs to | From URL path or manual |
| **Word Count** | Approximate content length | Screaming Frog or manual |
| **Last Updated** | When the content was last modified | CMS or manual check |
| **Author/Owner** | Who created or maintains this content | CMS or stakeholder input |
| **Monthly Traffic** | Page views per month (last 3-6 months average) | Google Analytics |
| **Bounce Rate** | Single-page session rate | Google Analytics |
| **Conversion Contribution** | Does this page contribute to conversions? | Google Analytics goals/events |
| **Inbound Links** | External sites linking to this page | Ahrefs, Moz, or Search Console |
| **Quality Score** | Red / Amber / Green (see scoring below) | Manual assessment |
| **Decision** | Keep / Revise / Merge / Cut | Based on scoring |
| **New Location** | Where this content lives in the new site | From new sitemap |
| **Redirect** | Old URL → New URL mapping | Derived from new location |
| **Notes** | Any relevant context | Manual |

### Building the Inventory

**For small sites (< 50 pages):** Manual inventory. Visit every page, fill in the spreadsheet.

**For medium sites (50-200 pages):** Ask the user to run Screaming Frog SEO Spider (free for up to 500 URLs) or provide a sitemap export. Use the exported data (URLs, titles, word counts) as the inventory base. Supplement with Google Analytics data the user shares.

**For large sites (200+ pages):** Ask the user to provide a Screaming Frog export + Google Analytics data + Google Search Console data. Claude cannot run these tools directly — the user runs them and shares the output. Focus Claude's effort on analysis and scoring, not data collection.

## Content Quality Scoring

### Red / Amber / Green Framework

Score every page in the inventory:

| Score | Criteria | Action |
|-------|----------|--------|
| **Green** | Accurate, relevant, good traffic, well-written, serves a clear purpose | Keep — migrate as-is or with minor updates |
| **Amber** | Relevant topic but outdated, poorly written, or underperforming | Revise — migrate with significant content updates |
| **Red** | Outdated, irrelevant, no traffic, no purpose, duplicate | Cut — remove and redirect, or merge with a related page |

### Detailed Scoring Dimensions

For each page, evaluate on these dimensions (each scored 1-3):

| Dimension | Score 1 (Poor) | Score 2 (Adequate) | Score 3 (Good) |
|-----------|----------------|-------------------|-----------------|
| **Accuracy** | Contains outdated or incorrect info | Mostly accurate, minor updates needed | Current and accurate |
| **Relevance** | Doesn't serve current business goals | Partially relevant | Directly serves a business goal |
| **Traffic** | < 10 visits/month | 10-100 visits/month | > 100 visits/month |
| **Quality** | Poorly written, no structure | Acceptable but not compelling | Well-written, scannable, engaging |
| **SEO Value** | No rankings, no backlinks | Some rankings or backlinks | Good rankings and/or backlinks |
| **Conversion** | No path to conversion | Indirect conversion contribution | Direct conversion contribution |

**Overall scoring:**
- Total 15-18: Green (keep)
- Total 10-14: Amber (revise)
- Total 6-9: Red (cut or merge)

### The ROI Test

For borderline decisions, apply the ROI test: "Does the traffic and conversion value of this page justify the cost of migrating and maintaining it?"

- **High ROI:** Top 20 pages by traffic, pages in the conversion funnel, pages with external backlinks
- **Low ROI:** Pages with < 5 monthly visits, pages last updated 2+ years ago, pages with no clear purpose, duplicate content

## Migration Decision Framework

### Keep

Page is green-scored. Content is accurate, relevant, performing well.

**Migration process:**
1. Map to new URL in the new sitemap
2. Review for minor updates (dates, broken links, outdated references)
3. Set up 301 redirect from old URL to new URL (even if the URL doesn't change — the CMS may assign different paths)

### Revise

Page covers a relevant topic but needs significant updates.

**Migration process:**
1. Map to new URL in the new sitemap
2. Flag for content rewrite — add to copywriter brief
3. Preserve the URL slug if it has SEO value (backlinks, rankings)
4. Set up 301 redirect
5. Assign a content owner and deadline for the rewrite

### Merge

Multiple pages cover similar topics and would be stronger as one page.

**Migration process:**
1. Identify the "winner" — the page with the most traffic/backlinks/authority
2. Consolidate the best content from all pages into the winner
3. Set up 301 redirects from all "loser" URLs to the winner URL
4. The merged page should be better than any individual page was

**Common merge candidates:**
- Multiple blog posts on the same topic → one comprehensive guide
- Separate pages for closely related services → one services page with sections
- "About Us" and "Our Mission" and "Our Values" → one About page

### Cut

Page is red-scored. No traffic, no relevance, no SEO value.

**Migration process:**
1. Set up 301 redirect to the most relevant existing page (not the homepage — that dilutes signals)
2. If no relevant page exists, redirect to the parent section page
3. Last resort: let it 404 with a helpful error page (only for truly orphan content)

## URL Redirect Mapping

### Why Redirects Matter

- **SEO preservation:** Backlinks to old URLs pass authority through 301 redirects
- **User experience:** Bookmarks, shared links, and search results pointing to old URLs must still work
- **Google recovery timeline:** After a well-executed redirect, ranking recovery typically takes 2-4 weeks. Poorly executed redirects can take months.

### Redirect Rules

| Rule | Why |
|------|-----|
| Always use 301 (permanent), not 302 (temporary) | 301 passes ~90-99% of link equity; 302 passes less |
| Map every old URL to a specific new URL | Blanket redirects to the homepage waste SEO equity and frustrate users |
| Prioritize high-traffic and high-backlink URLs | These carry the most SEO value |
| Test redirects before and after launch | Broken redirects are the #1 SEO disaster in redesigns |
| Keep redirect chains to 1 hop maximum | A → B is fine. A → B → C degrades SEO and speed |
| Maintain redirects for at least 1 year | Search engines need time to update their index |

### Redirect Mapping Table

```markdown
| Old URL | New URL | Redirect Type | Priority | Notes |
|---------|---------|---------------|----------|-------|
| /about-us | /about | 301 | High | Top 10 page by traffic |
| /services/branding | /services/brand-design | 301 | High | Has 15 backlinks |
| /blog/old-post-title | /blog/updated-post-title | 301 | Medium | Content revised |
| /team | /about#team | 301 | Low | Merged into About page |
| /old-landing-page | /services | 301 | Low | Page cut, redirect to nearest relevant |
```

## Analytics Audit (Pre-Redesign)

Before redesigning, pull these analytics reports:

### Essential Reports

| Report | What It Reveals | Action |
|--------|----------------|--------|
| **Top 20 pages by traffic** | What visitors actually use | Protect these pages — maintain or improve them |
| **Top entry pages** | Where visitors arrive (not just the homepage) | These pages must work well standalone (many visitors never see the homepage) |
| **Top exit pages** | Where visitors leave | Investigate — is the content bad, or is the page a natural endpoint? |
| **Conversion paths** | Multi-page paths that lead to conversions | Preserve these paths in the new structure |
| **Search queries (Search Console)** | What people search to find the site | Informs page topics and labeling |
| **Internal search queries** | What people search within the site | Reveals content gaps — what visitors want but can't find |
| **Device breakdown** | Desktop vs mobile vs tablet | Informs navigation priorities (mobile-first if 60%+ mobile) |
| **Traffic sources** | Organic, direct, referral, social, paid | Informs which entry points to optimize |

### Key Metrics by Page

For each page in the top 50 by traffic, note:

- **Pageviews / month** (average over last 6 months)
- **Bounce rate** (high = page may not match visitor intent)
- **Average time on page** (low = content isn't engaging or is thin)
- **Exit rate** (high on non-conversion pages = potential problem)
- **Conversion contribution** (does this page appear in conversion paths?)

## Dealing with Content Hoarding

Stakeholders who resist cutting content:

### The "Every Page Costs Money" Argument
"Every page on the site costs money to maintain — it needs to be accurate, it needs to be designed, it needs to work on mobile. Pages that don't earn their place dilute the pages that do."

### The "Findability" Argument
"When visitors see 50 pages in navigation, they can't find anything. When they see 15 focused pages, they find exactly what they need. Cutting low-value pages makes high-value pages more visible."

### The "Archive" Compromise
For content that stakeholders won't let go of but that doesn't deserve primary navigation: "We'll archive these pages. They'll still exist at their URLs, but they won't be in the navigation. If someone searches for them or has a direct link, they'll find them. But we won't send new visitors to outdated content."

### The Data Argument
"This page received 3 visits in the last 6 months. Two of those might have been our own team. The cost of migrating, redesigning, and maintaining this page exceeds its value."

## Sources & Further Reading

- Kristina Halvorson — *Content Strategy for the Web* (content audit methodology): https://www.contentstrategy.com/content-strategy-for-the-web
- GatherContent — "How to Do a Content Audit": https://gathercontent.com/blog/content-audit
- Moz — "How to Preserve SEO During a Website Redesign": https://moz.com/blog/how-to-preserve-seo-during-website-redesign
- Screaming Frog — "SEO Spider" (site crawling tool): https://www.screamingfrog.co.uk/seo-spider/
- Google — "Change page URLs with 301 redirects": https://developers.google.com/search/docs/crawling-indexing/301-redirects
- Ahrefs — "Content Audit: How to Audit Your Website Content": https://ahrefs.com/blog/content-audit/
- Brain Traffic — "Content Audit Toolkit": https://www.contentstrategy.com/
- Nielsen Norman Group — "Content Inventory and Auditing": https://www.nngroup.com/articles/content-inventory/
- Search Engine Journal — "Website Migration SEO Checklist": https://www.searchenginejournal.com/website-migration-seo-checklist/
- Paula Ladenburg Land — "The Content Audit" (A List Apart): https://alistapart.com/article/content-audit/
