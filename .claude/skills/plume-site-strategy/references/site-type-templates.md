# Site Type Templates — Reference Guide

## Purpose

Every website starts from a proven pattern. Rather than architecting from scratch, start with the right template for the site type, then customize based on discovery findings. This reference provides default page structures for 12 common site types — complete with actual sitemaps, rationale for each page, and customization guidance.

## How to Use These Templates

1. Identify the site type during discovery (often a hybrid — pick the closest primary type)
2. Present the template to the user: "Most [type] sites need these pages. Here's why."
3. Add pages that serve specific business goals discovered in Phase 1
4. Remove pages that don't serve the primary conversion goal
5. Customize labels, combine or split pages based on content volume

---

## Template 1: Portfolio / Personal Brand

**Typical client:** Freelancer, creative professional, consultant, speaker, author.
**Primary goal:** Establish credibility, attract clients/opportunities.
**Primary conversion:** Contact form, booking link, or email signup.

```
Home
├── About
├── Work
│   ├── [Case Study 1]
│   ├── [Case Study 2]
│   └── [Case Study 3+]
├── Services (optional — if selling specific packages)
├── Blog (optional — if actively publishing)
│   └── [Individual Posts]
└── Contact
```

**Page rationale:**
| Page | Why It Exists | Can Be Cut If... |
|------|--------------|-------------------|
| Home | Orients visitors, routes to Work or About | Never cut |
| About | Builds trust, tells the personal story | Never cut for personal brands |
| Work | Proves capability through real examples | Never cut |
| Case Studies | Deep proof — shows process and results | Can be combined into Work page if < 3 projects |
| Services | Clarifies what's offered and pricing | Cut if the goal is "hire me" generally, not specific services |
| Blog | Demonstrates expertise, aids SEO | Cut if not committed to publishing 2+/month |
| Contact | Converts visitors to conversations | Never cut |

**Common variations:**
- **Speaker:** Add Speaking page (topics, past events, testimonial video, booking CTA)
- **Author:** Add Books page, replace Work with Writing
- **Photographer/Artist:** Work becomes Gallery, case studies become Projects
- **Coach/Consultant:** Add Testimonials as standalone page, add Resources/Free Guide

**Customization notes:**
- Portfolio sites should have 3-6 case studies. Fewer than 3 looks thin. More than 8 becomes a catalog — curate.
- The About page is often the second-most-visited page on portfolio sites. Invest in it.
- If the blog won't be updated regularly, don't add it. A blog with 3 posts from 2 years ago hurts credibility.

---

## Template 2: Agency / Consultancy

**Typical client:** Design agency, marketing firm, consulting practice, law firm, accounting firm.
**Primary goal:** Attract qualified leads, demonstrate expertise and differentiation.
**Primary conversion:** Contact form, discovery call booking, RFP submission.

```
Home
├── About
│   └── Team (sub-page or section)
├── Services
│   ├── [Service Category 1]
│   ├── [Service Category 2]
│   └── [Service Category 3+]
├── Work / Case Studies
│   ├── [Case Study 1]
│   ├── [Case Study 2]
│   └── [Case Study 3+]
├── Blog / Insights
│   ├── [Category 1]
│   └── [Category 2]
├── Careers (optional)
└── Contact
```

**Page rationale:**
| Page | Why It Exists | Can Be Cut If... |
|------|--------------|-------------------|
| Home | Positions the agency, routes by need | Never cut |
| About | Differentiates — culture, values, approach | Never cut |
| Team | Humanizes the agency, shows depth | Can be a section on About for < 5 people |
| Services | Explains what the agency does and for whom | Never cut |
| Service sub-pages | SEO + depth for each capability | Cut if only 1-2 services |
| Work / Case Studies | Proves results with real client stories | Never cut |
| Blog / Insights | Thought leadership, SEO, nurturing | Cut if no content commitment |
| Careers | Attracts talent, shows culture | Cut if not actively hiring |
| Contact | Converts prospects to conversations | Never cut |

**Common variations:**
- **Industry-specific pages:** "Services for Healthcare", "Services for SaaS" — add when the agency serves distinct verticals
- **Process page:** Explains the engagement model — useful for agencies selling methodology
- **Resources / Guides:** Lead magnet hub for email capture
- **Partners page:** For agencies with technology partnerships (e.g., Shopify Partner, HubSpot Agency)

---

## Template 3: SaaS / Product

**Typical client:** Software company, app, platform, tool.
**Primary goal:** Convert visitors to free trials or demo requests.
**Primary conversion:** Free trial signup, demo request, or pricing page conversion.

```
Home
├── Features (or Product)
│   ├── [Feature Area 1]
│   ├── [Feature Area 2]
│   └── [Feature Area 3]
├── Pricing
├── Solutions (optional — by use case or industry)
│   ├── [Use Case 1]
│   └── [Use Case 2]
├── Resources
│   ├── Blog
│   ├── Documentation / Help Center
│   ├── Guides / Ebooks
│   └── Webinars / Videos
├── About
│   └── Careers
├── Contact / Support
└── Login
```

**Page rationale:**
| Page | Why It Exists | Can Be Cut If... |
|------|--------------|-------------------|
| Home | Value proposition, routes by intent | Never cut |
| Features | Shows what the product does | Never cut |
| Feature sub-pages | Deep dives for evaluation-stage visitors | Cut if product is simple (< 5 features) |
| Pricing | Enables self-service evaluation | Cut only if enterprise-only (custom pricing) |
| Solutions | Speaks to specific audiences in their language | Cut if single-audience product |
| Resources | SEO, nurturing, support | Blog is near-essential; others scale with maturity |
| Documentation | Reduces support load, helps evaluation | Essential for developer tools, optional for simple SaaS |
| About | Builds trust for B2B purchasing decisions | Never cut for B2B |
| Contact / Support | Captures leads, provides support access | Never cut |
| Login | Utility nav item for existing users | Required if product has auth |

**Common variations:**
- **Comparison pages:** "[Product] vs [Competitor]" — high-intent SEO content
- **Integrations page:** For products with an ecosystem
- **Security / Compliance page:** Required for enterprise SaaS selling to regulated industries
- **Changelog:** Signals active development, aids retention
- **API documentation:** For developer-facing products

---

## Template 4: E-commerce

**Typical client:** Online store, DTC brand, marketplace.
**Primary goal:** Drive product purchases.
**Primary conversion:** Add to cart → checkout → purchase.

```
Home
├── Shop / Collections
│   ├── [Category 1]
│   │   ├── [Sub-category] (if needed)
│   │   └── [Product Pages]
│   ├── [Category 2]
│   └── [Category 3+]
├── About / Our Story
├── Blog / Journal (optional)
├── FAQ / Help
│   ├── Shipping & Returns
│   ├── Sizing Guide (if applicable)
│   └── Contact / Support
├── Cart
└── Checkout
```

**Key structural decisions:**
- **Category depth:** 2 levels max for most stores. 3 levels only if 200+ products.
- **Filtering vs categories:** For 50+ products, faceted filtering (size, color, price) is more useful than deep category trees.
- **Product page is the most important page.** It's where the buying decision happens. Every page should eventually route here.

**Common variations:**
- **Lookbook / Editorial:** For fashion and lifestyle brands — shoppable content
- **Wholesale / B2B portal:** Separate pricing, minimum quantities, account-based access
- **Subscription model:** Add "How it works" explainer, subscription management
- **Gift guide pages:** Seasonal content hubs that drive discovery

---

## Template 5: Local Business / Services

**Typical client:** Restaurant, dental practice, plumber, salon, gym, real estate agent.
**Primary goal:** Drive phone calls, bookings, or foot traffic.
**Primary conversion:** Phone call, appointment booking, direction request.

```
Home
├── Services
│   ├── [Service 1]
│   ├── [Service 2]
│   └── [Service 3+]
├── About
├── Testimonials / Reviews
├── Gallery (if visual — salon, restaurant, contractor)
├── FAQ
├── Service Areas (if multi-location or service-area business)
│   ├── [City/Area 1]
│   └── [City/Area 2]
└── Contact
    ├── Location info, map, hours
    └── Booking/appointment form
```

**Critical local-specific requirements:**
- **NAP consistency:** Name, Address, Phone must match Google Business Profile exactly
- **Schema markup:** LocalBusiness structured data for search visibility
- **Mobile-first:** 60-70% of local searches are mobile — phone number must be tap-to-call
- **Service area pages:** Each page targets "[service] in [city]" for local SEO. Only create these if the business genuinely serves those areas.
- **Reviews integration:** Pull from Google, Yelp, or industry-specific review sites

---

## Template 6: Startup Landing Page

**Typical client:** Pre-launch startup, product launch, campaign.
**Primary goal:** Convert visitors to signups, waitlist, or early adopters.
**Primary conversion:** Email signup, waitlist registration, or free trial.

```
[Single Page — Sections]
├── Hero (headline, sub-headline, primary CTA)
├── Problem (what pain exists)
├── Solution (how the product solves it)
├── Features / How It Works (3-5 key features)
├── Social Proof (testimonials, logos, metrics)
├── Pricing (if applicable — or "coming soon")
├── FAQ (3-5 common questions)
└── Final CTA (repeat primary CTA)
```

**Section ordering principles:**
- Hero must communicate the value proposition in < 6 seconds
- Problem before Solution — establish pain before offering relief
- Social proof after features — prove the claims just made
- FAQ after pricing — answer objections that prevent conversion
- Final CTA is a repeat of the hero CTA — catch visitors who scrolled to evaluate

**When to expand beyond single-page:**
- When the product is complex enough that features need individual pages
- When targeting multiple distinct audiences
- When content marketing is a growth channel (add blog)
- When the product has shipped and needs documentation

---

## Template 7: Blog / Content Site

**Typical client:** Media company, thought leader, content-first business.
**Primary goal:** Build audience, drive subscriptions, monetize attention.
**Primary conversion:** Newsletter signup, membership, or ad impressions.

```
Home (latest content + featured)
├── Categories
│   ├── [Category 1]
│   ├── [Category 2]
│   └── [Category 3]
├── [Individual Articles]
├── About
├── Newsletter / Subscribe
└── Contact
```

**Taxonomy decisions:**
- **3-7 categories** is the sweet spot. Fewer than 3 means the site doesn't need categories. More than 7 means categories are too granular — merge or use tags.
- **Tags vs categories:** Categories are structural (appear in navigation). Tags are supplemental (appear on articles for discovery). Don't use both unless the site has 100+ articles.
- **Content hubs:** Group related articles into topic hubs with a pillar page. Better for SEO than flat category archives.

---

## Template 8: Non-Profit / Organization

**Typical client:** Charity, foundation, association, advocacy organization.
**Primary goal:** Drive donations, volunteer signups, and awareness.
**Primary conversion:** Donate button, volunteer signup, or event registration.

```
Home
├── About / Mission
│   ├── Our Story
│   ├── Team / Board
│   └── Financial Transparency / Annual Report
├── Programs / What We Do
│   ├── [Program 1]
│   ├── [Program 2]
│   └── [Program 3]
├── Impact / Results
│   └── [Impact Stories / Case Studies]
├── Get Involved
│   ├── Volunteer
│   ├── Events
│   └── Partner With Us
├── Donate (prominent — often in utility nav)
├── Blog / News
└── Contact
```

**Non-profit-specific considerations:**
- **Donate button:** Always visible in the header/utility nav. Not buried in a sub-page.
- **Impact storytelling:** Non-profits must show results, not just activities. "We served 10,000 meals" > "We run a food program."
- **Transparency:** Donors want to see how money is used. Financial reports, annual reports, and impact metrics build trust.
- **Emotional + rational:** The homepage should hit emotionally (impact story, compelling photo) then support rationally (stats, financials, team).

---

## Template 9: Event / Conference

**Typical client:** Conference, summit, workshop series, festival.
**Primary goal:** Drive ticket sales / registrations.
**Primary conversion:** Register / Buy Tickets.

```
Home
├── Speakers
│   └── [Individual Speaker Bios]
├── Schedule / Agenda
├── Venue / Location
│   ├── Getting There (travel, parking, transit)
│   └── Accommodation (nearby hotels)
├── Sponsors / Partners
├── FAQ
├── Register / Tickets
└── Past Events (optional — builds credibility for recurring events)
```

**Temporal consideration:** Event sites have a lifecycle — pre-event (build hype, sell tickets), during-event (schedule, logistics), post-event (recordings, recap, next year). Plan for content that changes.

---

## Template 10: Membership / Community

**Typical client:** Online community, membership site, course platform, professional association.
**Primary goal:** Convert free visitors to paid members.
**Primary conversion:** Membership signup, free trial, or course enrollment.

```
Home
├── About / Why Join
├── Membership Tiers / Pricing
├── What's Included
│   ├── Resources / Library
│   ├── Community / Forum
│   ├── Events / Workshops
│   └── Courses (if applicable)
├── Member Stories / Testimonials
├── Blog / Free Content (taste of what members get)
├── FAQ
├── Join / Sign Up
└── Member Login
```

**Key structural decisions:**
- **Free vs gated content:** Show enough free content to demonstrate value, gate enough to justify membership. A common ratio: 20% free, 80% gated.
- **Tier comparison:** If multiple tiers, a comparison table is essential. Place it on the pricing page, not buried in FAQ.
- **Onboarding flow:** After signup, what happens? Plan the first-login experience as part of the site architecture.

---

## Template 11: Documentation Site

**Typical client:** Software product, API, open-source project, complex product.
**Primary goal:** Enable self-service learning, reduce support load.
**Primary conversion:** Product adoption, reduced support tickets.

```
Home (Getting Started)
├── Quick Start Guide
├── Guides / Tutorials
│   ├── [Guide 1]
│   ├── [Guide 2]
│   └── [Guide 3]
├── API Reference (if applicable)
├── Concepts / Architecture
├── Examples / Recipes
├── Changelog / Release Notes
├── FAQ / Troubleshooting
└── Community / Support
```

**Documentation-specific considerations:**
- **Search is critical.** Users don't browse docs — they search. Add full-text search.
- **Versioning:** If the product has versions, docs need version switching.
- **Progressive disclosure:** Getting Started → Guides → Reference. Don't start with the API reference.

---

## Template 12: Hybrid / Multi-Purpose

Many real sites are hybrids. Common combinations:

| Hybrid | Primary Template | Additions From |
|--------|-----------------|----------------|
| Agency + Blog | Agency | Blog/Content |
| SaaS + Documentation | SaaS | Documentation |
| E-commerce + Content | E-commerce | Blog/Content |
| Portfolio + Services | Portfolio | Local Business (services structure) |
| Non-profit + Events | Non-profit | Event |
| Membership + E-commerce | Membership | E-commerce (for one-time purchases alongside membership) |

When building a hybrid, pick the primary template (based on the main conversion goal), then graft pages from the secondary template. Don't create a Frankenstein site — one template should dominate.

## Sources & Further Reading

- HubSpot — "Website Structure: How to Organize Your Site": https://blog.hubspot.com/website/website-structure
- Nielsen Norman Group — "Information Architecture: Study Guide": https://www.nngroup.com/articles/ia-study-guide/
- Orbit Media — "Website Planning Guide": https://www.orbitmedia.com/blog/website-planning-guide/
- ConvertKit — "Landing Page Structure": https://convertkit.com/resources/blog
- Shopify — "E-commerce Site Structure": https://www.shopify.com/blog/site-structure
- Moz — "Site Architecture for SEO": https://moz.com/learn/seo/site-architecture
- Smashing Magazine — "Information Architecture for the Web": https://www.smashingmagazine.com/
- GatherContent — "Content Strategy Templates": https://gathercontent.com/
- Andy Crestodina, Orbit Media — "Website Goals: How to Plan a Website": https://www.orbitmedia.com/blog/website-goals/
