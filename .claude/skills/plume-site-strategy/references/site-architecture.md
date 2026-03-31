# Site Architecture — Reference Guide

## Purpose

Site architecture is the structural skeleton of a website — what pages exist, how they relate to each other, and how they're organized into a navigable hierarchy. This reference covers sitemap construction, page hierarchy rules, taxonomy design, labeling systems, and information architecture principles.

## Sitemap Construction

### The Process

1. **Start with a site type template** from `references/site-type-templates.md`
2. **Add pages** that serve business goals discovered in Phase 1
3. **Remove pages** that don't serve the primary conversion goal or any identified visitor job
4. **Group pages** into logical sections based on visitor mental models (not org chart)
5. **Set hierarchy** — which pages are top-level, which are children
6. **Label everything** using visitor language, not internal jargon
7. **Validate** with the quality tests in `references/anti-patterns.md`

### Sitemap Format

Use annotated nested lists. Each page gets a one-line annotation explaining its purpose:

```markdown
- **Home** — Orient visitors and route by need
  - **About** — Build trust, tell the founder story
    - **Team** — Humanize the company (if 5+ people)
  - **Services** — Explain offerings, route to specific service
    - **Service A** — Detail + proof for primary offering
    - **Service B** — Detail + proof for secondary offering
  - **Work** — Prove capability with real client examples
    - **Case Study 1** — Flagship project with detailed results
    - **Case Study 2** — Different industry or capability
  - **Blog** — Thought leadership, SEO, audience building
    - **[Category 1]** — Topic grouping
    - **[Category 2]** — Topic grouping
  - **Contact** — Convert prospects to conversations
```

### Utility Pages (Always Include)

Every site needs these utility pages. They're not in the primary navigation but must exist:

| Page | Purpose | Notes |
|------|---------|-------|
| **404 Error** | Handle broken links gracefully | Include navigation, search, and a friendly message |
| **Privacy Policy** | Legal requirement (GDPR, CCPA) | Required for any site with forms or analytics |
| **Terms of Service** | Legal protection | Required for SaaS, e-commerce, membership sites |
| **Cookie Policy** | GDPR compliance | Required for EU-facing sites with cookies |
| **Sitemap (XML)** | Search engine discovery | Generated automatically by most frameworks |
| **Thank You** | Post-conversion confirmation | One per conversion type (contact, signup, purchase) |
| **Search Results** | Internal search | Only if site has 20+ pages and search functionality |

## Page Hierarchy Rules

### Depth Guidelines

| Site Size | Recommended Max Depth | Reasoning |
|----------|----------------------|-----------|
| 5-15 pages | 2 levels | Everything accessible in 1-2 clicks |
| 15-50 pages | 3 levels | Balanced findability and organization |
| 50-200 pages | 3-4 levels | Use taxonomy and filtering to supplement navigation |
| 200+ pages | 4 levels max | Must have robust search and filtering |

### The 3-Click Rule (Revised)

The original "3-click rule" (every page within 3 clicks of the homepage) is often cited but rarely tested. Research shows the number of clicks matters less than **information scent** — whether each click feels like progress toward the goal.

**Practical guideline:** Most content should be reachable in 3 clicks, but more clicks are acceptable if:
- Each click clearly narrows the options
- The visitor always knows where they are (breadcrumbs)
- The path feels productive, not confusing

### When to Use Sub-Pages vs Sections

| Consideration | Use Sub-Pages | Use Sections on One Page |
|--------------|--------------|-------------------------|
| Content length | > 800 words per topic | < 400 words per topic |
| SEO targeting | Each topic targets different keywords | All topics share a theme |
| User intent | Visitors seek specific topics | Visitors browse all topics |
| Content volume | 5+ items in the category | 2-4 items |
| Update frequency | Items updated independently | Items updated together |
| Examples | Individual service pages, case studies, blog posts | Services overview, team section, FAQ |

## Taxonomy Design

Taxonomy is the classification system for structured content — blog categories, portfolio tags, product categories, service groupings.

### Taxonomy Types

| Type | Structure | Best For | Example |
|------|-----------|----------|---------|
| **Flat** | All items at one level | Small collections (< 20 items) | Blog tags, portfolio tags |
| **Hierarchical** | Categories with sub-categories | Medium-large collections (20-200+) | Product categories, service groups |
| **Faceted** | Multiple independent dimensions | Large catalogs with varied attributes | E-commerce (size × color × price × brand) |

### Taxonomy Rules

1. **3-7 top-level categories** is the sweet spot. Fewer is underdifferentiated. More creates decision paralysis.
2. **Categories must be mutually exclusive** — an item should belong to one category, not three. If items frequently span categories, the taxonomy needs restructuring.
3. **Categories should be roughly balanced** — if one category has 50 items and another has 2, merge the small one or split the large one.
4. **Name categories for visitors** — "Case Studies" not "Portfolio" if that's what visitors search for. Test with real language.
5. **Tags supplement, not replace, categories** — Categories are structural (appear in navigation). Tags are supplemental (aid discovery within content). Don't use both unless you have 50+ content items.
6. **Plan for growth** — Will this taxonomy work with 3× the current content? If "Services" has 3 items now but could grow to 12, plan the sub-categorization now.

### Blog Category Design

| Guideline | Value |
|-----------|-------|
| Recommended categories | 3-7 |
| Maximum categories | 10 (beyond this, audiences don't scan) |
| Minimum posts per category at launch | 3 (empty categories look neglected) |
| Category naming | Topical, not clever. "Marketing" not "Growth Hacks" |
| Category descriptions | 1-2 sentences explaining what this category covers |

### Portfolio/Work Categorization

Options for organizing portfolio or case study content:

| Categorization | Best For | Example |
|---------------|----------|---------|
| **By industry** | Agencies serving distinct verticals | "Healthcare", "SaaS", "Finance" |
| **By service type** | Multi-service businesses | "Branding", "Web Design", "Content" |
| **By project type** | Creative portfolios | "Illustration", "Photography", "Video" |
| **By outcome** | Results-oriented businesses | "Lead Generation", "Brand Launches", "Redesigns" |
| **Chronological** | Artists, personal portfolios | "2024", "2023", "2022" |

Pick one primary categorization. A secondary filter (tags) can supplement.

## Labeling Systems

Labels are the words used in navigation, headings, and CTAs. Good labels are the single biggest factor in whether visitors can find what they need.

### Labeling Principles

| Principle | Bad Label | Good Label | Why |
|-----------|-----------|-----------|-----|
| **Use visitor language** | "Solutions Suite" | "Services" | Visitors search for "services" not "solutions suite" |
| **Be specific** | "Resources" | "Guides & Templates" | Specific labels set clear expectations |
| **Be consistent** | "Our Work" (nav) / "Portfolio" (page) / "Case Studies" (footer) | "Work" everywhere | Same page = same label everywhere |
| **Be short** | "Explore Our Comprehensive Service Offerings" | "Services" | Navigation labels should be 1-2 words |
| **Avoid jargon** | "Ecosystem", "Platform", "Synergies" | Plain English | If a visitor has to think about what it means, it fails |
| **Front-load keywords** | "About Our Company History" | "About" | First word is what gets scanned |

### Common Label Conflicts

| What It's Called Internally | What Visitors Call It | Recommended Label |
|---------------------------|---------------------|-------------------|
| Portfolio | Examples of our work | "Work" or "Projects" |
| Solutions | Things you can buy from us | "Services" or "Products" |
| Insights / Thought Leadership | Blog posts | "Blog" or "Articles" |
| Engagement Model | How we work | "Process" or "How We Work" |
| Resource Center | Downloads and guides | "Resources" or "Guides" |
| Talent | Job listings | "Careers" or "Jobs" |

### Label Testing

If unsure about a label, apply these tests:

1. **The 5-Second Test:** Show the navigation to someone unfamiliar with the business. Can they predict what they'll find under each label?
2. **The Search Query Test:** Would someone type this label into Google? If not, it's probably not what they'd look for on the site.
3. **The Competitor Test:** What do 3-5 competitors call the equivalent page? If they all use the same word, there's a strong convention.

## Information Architecture Principles

### Organization Schemes

Content can be organized by:

| Scheme | When to Use | Example |
|--------|-------------|---------|
| **Topical** | Content groups naturally by subject | Services, Products, Resources |
| **Task-based** | Visitors come to DO things | "Buy", "Learn", "Support", "Apply" |
| **Audience-based** | Distinct audiences with different needs | "For Developers", "For Designers", "For Teams" |
| **Chronological** | Time-based content | Blog posts, news, events, changelog |
| **Alphabetical** | Large flat lists where browsing is the goal | Directory, glossary, documentation index |
| **Geographic** | Location-based services | Office locations, service areas |

Most sites use 2-3 schemes across different sections. The primary nav is usually topical or task-based. Secondary areas may use other schemes.

### Card Sorting (If Available)

Card sorting is the gold-standard method for validating information architecture. If the engagement supports it:

1. **Open card sort:** Give participants cards with page names. Ask them to group the cards and name the groups. Reveals natural mental models.
2. **Closed card sort:** Give participants cards and pre-defined categories. Ask them to sort cards into categories. Validates a proposed structure.
3. **Tree test (reverse card sort):** Give participants a task ("Find the pricing page") and the sitemap as a text tree. Track where they navigate. Reveals navigation problems.

Tools: OptimalSort (https://www.optimalworkshop.com/optimalsort/), Treejack (https://www.optimalworkshop.com/treejack/), UserZoom, Maze.

For projects without budget for formal testing, do an informal version: ask 3-5 people to review the sitemap and predict where they'd find specific content.

## Sitemap Visualization

When the user wants to see the sitemap visually, render a self-contained HTML file with a tree layout. Here is a complete, copy-paste-ready template:

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Sitemap — [Project Name]</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: system-ui, -apple-system, sans-serif; padding: 2rem; background: #f8f9fa; color: #1a1a1a; }
  h1 { font-size: 1.5rem; margin-bottom: 2rem; }
  .tree ul { list-style: none; padding-left: 2rem; position: relative; }
  .tree > ul { padding-left: 0; }
  .tree li { position: relative; padding: 0.25rem 0; }
  .tree li::before { content: ""; position: absolute; left: -1.5rem; top: 0; border-left: 1px solid #ccc; height: 100%; }
  .tree li::after { content: ""; position: absolute; left: -1.5rem; top: 1.1rem; border-top: 1px solid #ccc; width: 1.25rem; }
  .tree li:last-child::before { height: 1.1rem; }
  .tree > ul > li::before, .tree > ul > li::after { display: none; }
  .node { display: inline-block; padding: 0.4rem 0.8rem; border: 1px solid #ddd; border-radius: 6px; background: #fff; font-size: 0.9rem; }
  .node strong { color: #333; }
  .node .annotation { color: #888; font-size: 0.8rem; margin-left: 0.5rem; }
  .node.must { border-color: #2563eb; }
  .node.should { border-color: #f59e0b; }
  .node.could { border-color: #9ca3af; border-style: dashed; }
</style>
</head>
<body>
  <h1>Sitemap — [Project Name]</h1>
  <div class="tree">
    <ul>
      <li>
        <div class="node must"><strong>Home</strong><span class="annotation">Orient and route</span></div>
        <ul>
          <li><div class="node must"><strong>About</strong><span class="annotation">Build trust</span></div></li>
          <li>
            <div class="node must"><strong>Services</strong><span class="annotation">Explain offerings</span></div>
            <ul>
              <li><div class="node must"><strong>Service A</strong></div></li>
              <li><div class="node should"><strong>Service B</strong></div></li>
            </ul>
          </li>
          <li><div class="node must"><strong>Work</strong><span class="annotation">Prove capability</span></div></li>
          <li><div class="node should"><strong>Blog</strong><span class="annotation">SEO + authority</span></div></li>
          <li><div class="node must"><strong>Contact</strong><span class="annotation">Convert</span></div></li>
        </ul>
      </li>
    </ul>
  </div>
  <p style="margin-top: 2rem; font-size: 0.8rem; color: #888;">
    <span style="border: 1px solid #2563eb; padding: 0.2rem 0.4rem; border-radius: 4px; margin-right: 0.5rem;">Must</span>
    <span style="border: 1px solid #f59e0b; padding: 0.2rem 0.4rem; border-radius: 4px; margin-right: 0.5rem;">Should</span>
    <span style="border: 1px dashed #9ca3af; padding: 0.2rem 0.4rem; border-radius: 4px;">Could</span>
  </p>
</body>
</html>
```

Customize nodes, annotations, and priority classes for each project. This template renders cleanly in any browser at any viewport width.

## Sources & Further Reading

- Abby Covert — *How to Make Sense of Any Mess* (information architecture): https://www.howtomakesenseofanymess.com/
- Peter Morville & Louis Rosenfeld — *Information Architecture for the Web and Beyond* (the definitive IA book): https://www.oreilly.com/library/view/information-architecture-4th/9781491913529/
- Nielsen Norman Group — "Information Architecture: Study Guide": https://www.nngroup.com/articles/ia-study-guide/
- Nielsen Norman Group — "Card Sorting: Uncover Users' Mental Models": https://www.nngroup.com/articles/card-sorting-definition/
- Nielsen Norman Group — "Tree Testing: Fast, Iterative Evaluation of Menu Labels and Categories": https://www.nngroup.com/articles/tree-testing/
- Optimal Workshop — "Card Sorting 101": https://www.optimalworkshop.com/learn/card-sorting-101/
- Moz — "Site Architecture for SEO": https://moz.com/learn/seo/site-architecture
- Donna Spencer — *Card Sorting: Designing Usable Categories* (card sorting methodology): https://rosenfeldmedia.com/books/card-sorting/
- A List Apart — "The Core Model": https://alistapart.com/article/the-core-model-designing-inside-out-for-better-results/
- WebAIM — "Accessible Navigation": https://webaim.org/techniques/skipnav/
