# Anti-Patterns — Reference Guide

## Purpose

Common website architecture mistakes that make sites harder to use, harder to maintain, and less effective at converting visitors. Review this at every phase gate. These anti-patterns appear constantly — catching them early prevents expensive restructuring later.

## Site Architecture Anti-Patterns

| Anti-Pattern | Why It's Wrong | Better Approach |
|-------------|----------------|-----------------|
| **Org-chart navigation** | "About > Our Divisions > Marketing Division > Services" mirrors the company structure, not the visitor's mental model | Organize by what visitors need, not how the business is structured internally |
| **Homepage as dumping ground** | Every department wants homepage real estate, so it becomes an unfocused wall of content | Homepage has one job: orient and route. 3-5 clear paths, not 15 competing sections |
| **Too deep** | 4+ levels of nesting (Home > Services > Category > Sub-category > Item) means visitors get lost and give up | Maximum 3 levels for most sites. If deeper, use search or filtering instead |
| **Too flat** | 30 items in the primary nav creates choice paralysis | 5-7 primary nav items. Group related pages under parent items |
| **Orphan pages** | Pages that exist but aren't reachable from navigation — discovered only through search or direct links | Every page must be reachable within 3 clicks from the homepage |
| **Dead-end pages** | Pages with no onward CTA — the visitor reads the content and has nowhere to go | Every page needs at least one clear next step (CTA, related content, navigation) |
| **Vanity pages** | Pages that exist because someone important wants them, not because visitors need them ("CEO's Welcome", "Our Philosophy") | Every page must answer: "Who visits this, why, and what do they do next?" |
| **Duplicate intent pages** | Multiple pages that serve the same purpose ("Get in Touch", "Contact Us", "Request a Quote" as separate pages) | One page per intent, with multiple CTAs routing there |
| **Blog without commitment** | A blog section with 3 posts from 2 years ago | Either commit to regular publishing (2+/month) or don't add a blog. A stale blog signals neglect |
| **Features as navigation** | Using product features as primary nav items ("AI-Powered", "Real-Time", "Scalable") instead of user goals | Navigate by what visitors want to DO, not what the product IS |

## Navigation Anti-Patterns

| Anti-Pattern | Why It's Wrong | Better Approach |
|-------------|----------------|-----------------|
| **Jargon labels** | "Solutions", "Platform", "Ecosystem" mean nothing to a first-time visitor | Use plain language: "Services", "Products", "Resources", "Pricing" |
| **Clever labels** | "The Lab", "The Vault", "HQ" — creative but confusing | Navigation is wayfinding, not branding. Clarity over cleverness |
| **Too many nav items** | 10+ items in primary nav creates cognitive overload | 5-7 items maximum. Use dropdowns or secondary nav for additional pages |
| **Hidden primary actions** | The main conversion action (Contact, Buy, Sign Up) is buried in a dropdown or footer | Primary CTA belongs in the header, always visible, styled as a button |
| **Inconsistent labeling** | Header says "Our Work", breadcrumb says "Portfolio", footer says "Case Studies" | Same page = same label everywhere. Pick one term and use it consistently |
| **Mobile nav as afterthought** | Desktop nav squeezed into a hamburger menu without rethinking priority | Design mobile nav separately. Prioritize the 4-5 most important items |
| **Mega menu for small sites** | A sprawling dropdown for a 15-page site that doesn't need it | Mega menus are for sites with 50+ pages. For smaller sites, use simple dropdowns |
| **No footer nav** | Footer is just a copyright line | Footer is a safety net — visitors who scroll to the bottom without finding what they need should find full navigation |

## Content Strategy Anti-Patterns

| Anti-Pattern | Why It's Wrong | Better Approach |
|-------------|----------------|-----------------|
| **Content hoarding** | Keeping every page from the old site "just in case" | Audit every page against traffic + business goals. Low-traffic + low-value = cut or merge |
| **One-size-fits-all pages** | The same page structure for every page type | Different page types need different structures: service pages need proof, about pages need story, product pages need specs |
| **Wall of text** | Long, unbroken paragraphs with no structure | Scannable content: headers, bullet points, callouts, images every 300-500 words |
| **Missing the fold** | The most important content is below the scroll line | Key value proposition and primary CTA must be visible without scrolling on desktop and mobile |
| **CTA confusion** | 5 different CTAs competing on one page | One primary CTA per page (the thing you most want visitors to do). Maximum one secondary CTA |
| **Testimonials without context** | "Great company!" — Jane D. | Every testimonial needs: full name, role/company, specific result or detail. Photo if possible |
| **Stock photo overload** | Generic handshakes, diverse-team-in-meeting, laptop-on-desk | Real photos > custom illustrations > no photos > stock photos. Stock photos erode trust |

## Conversion Anti-Patterns

| Anti-Pattern | Why It's Wrong | Better Approach |
|-------------|----------------|-----------------|
| **No clear conversion goal** | The site exists but doesn't ask visitors to DO anything | Define 1 primary conversion per site. Every page should move visitors toward it |
| **Contact as only conversion** | "Contact Us" is the only CTA, and it's a generic form | Offer a spectrum: newsletter (low commitment) → resource download → consultation → purchase |
| **Hidden pricing** | Visitors can't find pricing without contacting sales | If pricing exists, show it. "Contact for pricing" loses price-sensitive visitors |
| **Form overload** | 15-field contact form asking for company size, budget, timeline, blood type | Minimum viable form: name, email, message. Add fields only if they directly affect routing |
| **No social proof near CTAs** | Asking visitors to commit without evidence others have | Place testimonials, client logos, or metrics near conversion points |
| **Conversion too early** | Popup asking for email before the visitor has read anything | Let visitors consume value before asking them to commit. No popups before 30 seconds or 50% scroll |

## Scope Anti-Patterns

| Anti-Pattern | Why It's Wrong | Better Approach |
|-------------|----------------|-----------------|
| **"We need everything on day one"** | Blog + podcast + course platform + community + e-commerce before validating the core offering | Launch with the minimum pages that serve the primary conversion goal. Add features in phases |
| **Keeping up with competitors** | "Competitor X has a resource center, so we need one" — without the content to fill it | Only add sections you can meaningfully populate. An empty resource center is worse than none |
| **Page proliferation** | Creating a new page for every minor variation (each city, each minor service, each team member) | Use templates and dynamic content instead of hundreds of thin pages |
| **The kitchen sink homepage** | Trying to address every audience, every service, every value prop above the fold | The homepage routes — it doesn't replace all other pages |

## Quality Tests

Apply these tests at every phase gate:

### The "So What?" Test
For every page in the sitemap, ask: "A visitor lands on this page. So what? What do they learn, feel, or do?" If the answer is unclear, the page needs a stronger purpose or should be cut.

### The "First Visit" Test
Imagine a visitor who has never heard of this business. Can they understand what the business does, who it's for, and what to do next within 10 seconds of landing on the homepage? If not, the homepage structure needs work.

### The "3-Click" Test
Can a visitor reach any page on the site within 3 clicks from the homepage? If not, the architecture is too deep or the navigation is missing paths.

### The "Squint" Test (for Sitemaps)
Squint at the sitemap. Does the shape make sense? A top-heavy sitemap (too much under Home) suggests missing categories. A bottom-heavy one (deep nesting) suggests over-classification.

### The "Remove" Test
For every page, ask: "If we removed this page, would anyone notice? Would conversion be affected?" If the answer is no, question whether the page earns its place.

### The "Explain It to a Stranger" Test
Can you explain the site structure to someone unfamiliar with the business in 30 seconds? "There's a homepage, services pages, case studies, a blog, and a contact page." If the explanation takes 2 minutes and involves caveats, the structure is too complex.

### The "Mobile Nav" Test
Does the site structure work when collapsed into a mobile hamburger menu with 5-7 top-level items? If not, the architecture needs simplification.

## AI-Generated Strategy Tells

Watch for these signals that the strategy output feels generic or AI-generated:

| Tell | Example | Fix |
|------|---------|-----|
| **Generic labels** | Every site gets "Solutions", "Resources", "Insights" | Use specific, business-relevant labels |
| **Template-matching without customization** | Portfolio template applied verbatim to a service business | Customize the template — add, remove, and relabel based on discovery |
| **Buzzword page names** | "Innovation Hub", "Knowledge Center", "Experience" | Plain language. What would a visitor call this? |
| **Missing the obvious** | A restaurant site plan without Menu page | Cross-reference against the specific business type |
| **Over-structured** | 30-page sitemap for a solopreneur who needs 5 pages | Match scope to business maturity and content capacity |
| **Cookie-cutter journeys** | "Visitor lands on Home → browses Services → contacts" for every client | Map real behaviors based on how the specific audience actually shops for this offering |

## Sources & Further Reading

- Steve Krug — *Don't Make Me Think* (usability anti-patterns): https://sensible.com/dont-make-me-think/
- Nielsen Norman Group — "Top 10 Information Architecture Mistakes": https://www.nngroup.com/articles/top-10-ia-mistakes/
- Nielsen Norman Group — "Killing Off Ideas": https://www.nngroup.com/articles/killing-off-ideas/
- Baymard Institute — "E-Commerce UX: 665 Research-Based Design Guidelines": https://baymard.com/
- Gerry McGovern — *Top Tasks* (identifying what visitors actually want): https://gerrymcgovern.com/books/top-tasks-a-how-to-guide/
- A List Apart — "The Core Model": https://alistapart.com/article/the-core-model-designing-inside-out-for-better-results/
- Luke Wroblewski — *Mobile First*: https://www.lukew.com/ff/entry.asp?933
- Information Architecture Institute — "What is Information Architecture?": https://www.iainstitute.org/
