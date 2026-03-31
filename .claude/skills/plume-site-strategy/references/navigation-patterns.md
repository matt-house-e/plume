# Navigation Patterns — Reference Guide

## Purpose

Navigation is wayfinding. It determines whether visitors find what they need or leave frustrated. This reference covers navigation models, best practices by site type, mobile patterns, accessibility requirements, and labeling conventions.

## Navigation Models

Every website uses a combination of these navigation types:

### Primary Navigation

The main menu, typically horizontal across the top. This is the most important navigation element.

**Guidelines:**
- **5-7 items maximum.** Research consistently shows that 7±2 items is the cognitive limit. More than 7 creates scanning fatigue.
- **Order matters.** Items at the beginning and end of a list are most noticed (serial position effect). Place the most important items first and the CTA last.
- **Include a CTA button.** The primary conversion action (Contact, Get Started, Book a Call) should appear as a styled button in the nav, visually distinct from other items.
- **No more than 1 level of dropdown** for most sites. If a dropdown has sub-dropdowns, the architecture needs simplification.

**Recommended ordering pattern:**
```
[What We Do] [Proof] [Who We Are] [Content] [CTA Button]
Services | Work | About | Blog | Contact
```

Logic: Lead with what visitors came for (services/product), then proof (work/case studies), then context (about), then content (blog), then conversion (contact).

### Secondary Navigation

Supplemental navigation for less-critical but still important pages. Typically appears below primary nav or as a sub-section nav.

**Common uses:**
- Sub-navigation within a section (e.g., individual services within the Services section)
- "In this section" sidebar navigation for deep content
- Breadcrumb trails showing hierarchical position

### Footer Navigation

The full-site navigation safety net. Visitors who scroll to the bottom without finding what they need should find comprehensive navigation.

**Guidelines:**
- **Organize in 3-5 columns** by topic (Services, Company, Resources, Connect)
- **Include all primary nav items** plus additional pages not in the main menu
- **Include legal links** (Privacy Policy, Terms, Cookie Policy)
- **Include contact info** (address, phone, email) — especially for local businesses
- **Include social media links**
- **Include a brief description** of the business (1-2 sentences) for SEO and clarity

**Example footer structure:**
```
Column 1: Services          Column 2: Company       Column 3: Resources
- Service A                 - About                 - Blog
- Service B                 - Team                  - FAQ
- Service C                 - Careers               - Guides
                            - Press                 - Newsletter

Column 4: Connect
- Contact
- Address
- Phone
- Social icons

Bottom: © 2024 Company | Privacy Policy | Terms | Cookie Policy
```

### Utility Navigation

Small, top-right items for utility functions. Not part of the main content navigation.

**Common utility nav items:**
- Login / My Account (for products with auth)
- Cart (for e-commerce)
- Search
- Language/region selector
- Phone number (for local businesses — mobile tap-to-call)

### Breadcrumb Navigation

Shows hierarchical position: Home > Services > Service A. Helps visitors understand where they are and navigate up.

**When to use breadcrumbs:**
- Sites with 3+ levels of hierarchy
- E-commerce sites (always — critical for category navigation)
- Documentation sites (always)
- Blog posts with category structure

**When breadcrumbs are unnecessary:**
- Flat sites (2 levels or fewer)
- Single-page sites
- Landing pages (focused conversion — no escape paths)

**Breadcrumb rules:**
- Use `>` or `/` as separators
- Every item except the current page should be a link
- The current page is the last item, displayed as text (not linked)
- Use schema.org BreadcrumbList markup for SEO

## Navigation by Site Type

| Site Type | Primary Nav | Notes |
|-----------|------------|-------|
| **Portfolio** | Work, About, Services, Blog, Contact | Work first — it's what visitors came for |
| **Agency** | Services, Work, About, Blog, Contact | Services first — prospects evaluate offerings |
| **SaaS** | Product/Features, Pricing, Resources, About, Login, [CTA] | Pricing in main nav — evaluators need it immediately |
| **E-commerce** | Shop, Categories, Sale, About, Cart | Shop/categories dominate, utility nav for cart |
| **Local Business** | Services, About, Reviews, Contact | Simple, focused. Phone number in utility nav |
| **Blog/Content** | Categories (3-5), About, Newsletter | Categories as primary nav for content-first sites |
| **Non-profit** | Programs, Impact, Get Involved, About, [Donate button] | Donate as persistent CTA button |
| **SaaS with docs** | Product, Pricing, Docs, Blog, [Get Started] | Docs in main nav — developers expect it |

## Mobile Navigation Patterns

### Hamburger Menu

The default mobile pattern. A three-line icon that reveals the full menu.

**Best practices:**
- **Position top-right** (or top-left — be consistent with industry convention)
- **Label it "Menu"** next to the icon — labels increase discoverability by 20-50% (NNg research)
- **Full-screen overlay** works better than slide-out panels for complex menus
- **Prioritize items** — put the most important 4-5 items at the top of the expanded menu
- **Include the CTA button** prominently within the expanded menu, not hidden at the bottom

### Bottom Navigation (Mobile)

A fixed bar at the bottom of the screen with 3-5 icons. Common in apps, increasingly used in mobile web.

**When to use:**
- Sites that function like apps (SaaS products, dashboards)
- E-commerce (Shop, Search, Cart, Account)
- High-frequency-use sites where speed of navigation matters

**When NOT to use:**
- Content sites (blog, portfolio) — content consumption doesn't need persistent nav
- Simple marketing sites (5-15 pages) — hamburger menu is sufficient

### Sticky Mobile Header

A fixed header that stays visible as the user scrolls. Contains logo, hamburger icon, and optionally a CTA.

**Best practices:**
- **Keep it thin** — 48-56px height maximum, to preserve screen real estate
- **Auto-hide on scroll down, reappear on scroll up** — this pattern (used by most native apps) saves space while keeping nav accessible
- **Include a CTA** if the primary conversion is always relevant (e.g., "Book Now" for restaurants)
- **Include tap-to-call** for local businesses on mobile

## Navigation Accessibility

### ARIA Roles and Landmarks

```html
<nav aria-label="Main navigation">
  <ul>
    <li><a href="/services">Services</a></li>
    <li><a href="/work">Work</a></li>
    <li>
      <button aria-expanded="false" aria-controls="about-submenu">About</button>
      <ul id="about-submenu">
        <li><a href="/about">Our Story</a></li>
        <li><a href="/team">Team</a></li>
      </ul>
    </li>
  </ul>
</nav>
```

**Important:** Do NOT use `role="menubar"` or `role="menuitem"` on site navigation links. These ARIA roles are for application menus (like a desktop app's File/Edit/View menu) and create confusing screen reader behavior where users expect arrow-key navigation instead of Tab. Site navigation should use semantic HTML: `<nav>`, `<ul>`, `<li>`, `<a>` — no menu roles needed.

- Use `<nav>` element for all navigation regions
- Add `aria-label` to distinguish between multiple `<nav>` elements ("Main navigation", "Footer navigation", "Breadcrumb")
- Dropdowns: use `<button>` with `aria-expanded="true/false"` as the trigger, not links

### Keyboard Navigation

- All navigation items must be reachable via Tab key
- Dropdowns must open with Enter/Space, navigate with arrow keys, close with Escape
- Skip link ("Skip to main content") must be the first focusable element on every page
- Focus states must be visible (never `outline: none` without a replacement)

### Screen Reader Considerations

- Current page indicator: `aria-current="page"` on the active navigation item
- Navigation landmarks must be labeled to distinguish them
- Mega menus must be navigable without requiring sight — clear heading structure within the menu
- Mobile menu toggle must announce state: "Menu, collapsed" / "Menu, expanded"

## Mega Menus

Mega menus are large, multi-column dropdowns. They're appropriate for sites with 50+ pages and complex taxonomies.

### When to Use Mega Menus

| Appropriate | Not Appropriate |
|------------|-----------------|
| E-commerce with 10+ categories | Portfolio site with 5 pages |
| Enterprise site with multiple divisions | Simple service business |
| Documentation with many sections | Blog with 3 categories |
| University/institution with many departments | Startup landing page |

### Mega Menu Best Practices

- **Group items by category** with clear column headings
- **2-4 columns maximum** — more columns require horizontal scanning that confuses users
- **Include brief descriptions** for ambiguous items (1 line, not paragraphs)
- **Use icons sparingly** — they should aid recognition, not decorate
- **Show on hover with delay** (200-300ms) to prevent accidental triggers
- **Mobile: convert to expandable accordion** — don't try to replicate the desktop mega menu on mobile
- **Include a "See All [Category]" link** at the bottom of each column for full exploration
- **Keep load time under 100ms** — don't load heavy images or animations in mega menus

## Search Navigation

### When to Add Site Search

| Site Size | Search Needed? | Reasoning |
|-----------|---------------|-----------|
| < 20 pages | No | Navigation alone is sufficient |
| 20-50 pages | Optional | Depends on content depth and user behavior |
| 50-200 pages | Yes | Visitors can't find content through browsing alone |
| 200+ pages | Essential | Search becomes the primary navigation method |
| Documentation | Always | Developers search, they don't browse |
| E-commerce | Always | Product search is a core interaction |

### Search UI Patterns

- **Icon + expand:** Magnifying glass that expands into a search field on click. Best for sites where search is secondary to navigation.
- **Persistent search bar:** Always-visible input field in the header. Best for search-dominant sites (e-commerce, documentation).
- **Full-screen search overlay:** Clicking search opens a full-screen input with suggestions. Best for content-heavy sites with smart search.

## Sticky/Fixed Headers

### Performance Guidelines

Fixed headers consume vertical space and can cause scroll performance issues.

| Guideline | Value |
|-----------|-------|
| Desktop header height | 60-80px (fixed) |
| Mobile header height | 48-56px (fixed) |
| Show/hide behavior | Hide on scroll down, reappear on scroll up |
| Background | Semi-transparent or solid with shadow to separate from content |
| Z-index | High enough to overlay content, but below modals/overlays |

### When NOT to Use Sticky Headers

- **Long-form content pages** — the reader needs maximum vertical space
- **Full-screen immersive experiences** — galleries, portfolios, presentations
- **Pages with very little scroll** — the header never leaves the viewport anyway

## Sources & Further Reading

- Nielsen Norman Group — "Hamburger Menus and Hidden Navigation": https://www.nngroup.com/articles/hamburger-menus/
- Nielsen Norman Group — "Mega Menus Work Well for Site Navigation": https://www.nngroup.com/articles/mega-menus-work-well/
- Nielsen Norman Group — "Breadcrumbs: 11 Design Guidelines for Desktop and Mobile": https://www.nngroup.com/articles/breadcrumbs/
- WebAIM — "Skip Navigation Links": https://webaim.org/techniques/skipnav/
- W3C WAI — "ARIA Authoring Practices: Navigation Menubar": https://www.w3.org/WAI/ARIA/apg/patterns/menubar/
- Baymard Institute — "E-Commerce Navigation Usability": https://baymard.com/blog/ecommerce-navigation-categories
- Smashing Magazine — "The Definitive Guide to Responsive Navigation": https://www.smashingmagazine.com/
- Luke Wroblewski — "Obvious Always Wins" (navigation clarity): https://www.lukew.com/ff/entry.asp?1945
- A List Apart — "Responsive Navigation Patterns": https://alistapart.com/
- Vitaly Friedman — "Designing Better Navigation for Complex Websites": https://www.smashingmagazine.com/2022/04/designing-better-navigation-ux-large-websites/
