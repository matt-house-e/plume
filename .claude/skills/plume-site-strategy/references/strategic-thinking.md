# Strategic Thinking for Website Planning — Reference Guide

## Purpose

This reference captures the mental models, frameworks, and principles that separate expert website strategists from template-fillers. It's the "invisible knowledge" — the thinking that informs every structural decision but rarely gets documented. Read this before starting any strategy engagement. Return to it when facing difficult trade-offs.

## The Visitor-First Principle

The single most important principle in website strategy: **organize the site around what visitors need, not how the business is organized.**

This sounds obvious. It's violated constantly:

| Org-Chart Thinking | Visitor-First Thinking |
|-------------------|----------------------|
| "We have 4 departments, so we need 4 sections" | "Visitors have 3 main needs, so we need 3 paths" |
| "Marketing wants their own page" | "Where would a visitor look for this information?" |
| "We call it 'Integrated Solutions'" | "Visitors search for 'services' or 'what we do'" |
| "The CEO wants a welcome message" | "The visitor needs to know what we do in 6 seconds" |
| Primary nav: About / Divisions / News / Careers / Contact | Primary nav: Services / Work / Pricing / Blog / Contact |

**How to apply:** At every structural decision, ask: "Is this organized for us or for them?" The answer should always be "for them."

## Jobs-to-Be-Done (JTBD) for Websites

Visitors don't arrive at a website randomly. They arrive with a job to get done. JTBD maps these motivations to pages that fulfill them. For applied JTBD in user journey mapping, see `references/user-journeys.md`.

### The Framework

Every website visitor has one or more of these jobs:

| Job Type | Visitor Thinking | What They Need |
|----------|-----------------|----------------|
| **Evaluate** | "Can this company/person solve my problem?" | Services, case studies, testimonials, pricing |
| **Learn** | "I need to understand this topic better" | Blog, resources, guides, FAQ |
| **Compare** | "Is this better than the alternatives?" | Pricing, features, comparison pages, testimonials |
| **Act** | "I'm ready — how do I start?" | Contact form, booking, purchase, signup |
| **Verify** | "I've heard of them — are they legit?" | About, team, press, client logos, reviews |
| **Support** | "I'm already a customer — I need help" | Docs, FAQ, contact, account login |
| **Recruit** | "Is this a place I'd want to work?" | Careers, culture, team, benefits |

### Applying JTBD to Site Architecture

1. During discovery, identify which jobs are most common for this business's visitors
2. Rank them by frequency and business value
3. Ensure the top 3-4 jobs have clear, short paths from the homepage
4. Map every page to at least one job — pages that don't serve a job are candidates for removal

**JTBD mapping table (create this for every project):**

| Visitor Job | Primary Pages | Entry Points | Success Metric |
|-------------|--------------|--------------|----------------|
| Evaluate our services | Services, Case Studies | Homepage hero, nav | Click to Contact |
| Compare with alternatives | Pricing, Testimonials | Organic search, nav | Time on page > 2 min |
| Get in touch | Contact | Every page CTA | Form submission |
| Learn about [topic] | Blog, Resources | Organic search, social | Email signup |

## Progressive Disclosure

Websites communicate through layers. The homepage communicates the broadest message. Each level deeper gets more specific. This is progressive disclosure:

```
Layer 1: Homepage     → "We do X for Y"
Layer 2: Section      → "Here's how we do X" (Services, Work)
Layer 3: Detail       → "Here's a specific example" (Case Study, Service Detail)
Layer 4: Action       → "Ready? Here's how to start" (Contact, Pricing)
```

**Rules:**
- Each layer should be self-sufficient — a visitor who enters at Layer 2 should still understand the context
- Never force visitors through Layer 1 to reach Layer 3 (deep linking must work)
- Each layer should provide enough information to either satisfy or motivate deeper exploration
- Don't put Layer 3 content on Layer 1 pages (the homepage shouldn't have full case studies)

## The "Why" Behind Every Page

Every page in a sitemap must answer four questions:

1. **Why does this page exist?** (Purpose)
2. **Who is this page for?** (Audience)
3. **What should someone do after reading it?** (Next step)
4. **How do we know it's working?** (Metric)

If any answer is "I don't know" or "because we've always had it," the page needs justification or removal.

**The "So What?" escalation:**
- Level 1: "This is our About page." → So what?
- Level 2: "It tells people about our company." → So what?
- Level 3: "It builds trust so prospects feel comfortable reaching out." → Now we have a purpose.
- Level 4: "We measure it by click-through to Contact." → Now we have accountability.

## Prioritization Frameworks

### MoSCoW for Website Pages

| Category | Definition | Example |
|----------|-----------|---------|
| **Must have** | The site doesn't function without it | Homepage, core service pages, contact |
| **Should have** | Important but not launch-blocking | Blog, case studies, FAQ |
| **Could have** | Nice to have, adds value incrementally | Resource center, newsletter, careers |
| **Won't have (now)** | Agreed out of scope for this phase | Community, course platform, e-commerce |

### ICE Scoring for Page Prioritization

Score each proposed page 1-10 on three dimensions:

- **Impact:** How much does this page contribute to the primary business goal?
- **Confidence:** How sure are we that visitors need this page?
- **Ease:** How easy is it to create the content for this page?

ICE Score = Impact × Confidence × Ease. Prioritize by score. Build high-scoring pages first.

## Managing Client Politics

Website strategy is organizational strategy. Pages represent departments. Navigation represents priority. Homepage real estate represents power. This is political.

### Common Political Challenges

| Challenge | What They Say | What It Means | How to Navigate |
|-----------|--------------|--------------|-----------------|
| **Homepage territorial** | "Our department needs to be on the homepage" | "We want visible importance" | Use analytics to show which content visitors actually engage with. Data depoliticizes |
| **Content hoarding** | "We need to keep all our pages" | "My work is being devalued" | Frame as modernizing, not deleting. "We're making your content more findable, not removing it" |
| **Feature creep** | "Can we also add a podcast/course/community?" | "I have ideas beyond the scope" | Acknowledge the idea, add to "Phase 2" backlog, keep the current scope focused |
| **Design by committee** | 6 people reviewing the sitemap with conflicting feedback | No one has decision authority | Establish a RACI matrix. One person approves. Others consult |
| **The HiPPO** | "The Highest Paid Person's Opinion" overrides research | Authority trumps evidence | Present data first, recommendations second. "Analytics show X. Based on this, we recommend Y" |

### Framework for Pushing Back

When a stakeholder requests something that would harm the site:

1. **Acknowledge:** "I understand why that feels important."
2. **Reframe with data:** "The analytics show that visitors actually [behavior]."
3. **Propose an alternative:** "Instead of [their request], what if we [better approach]?"
4. **Tie to their goal:** "This approach better serves [their stated goal] because [reason]."
5. **Document the decision:** Write it down. "We decided X because Y. [Stakeholder] agreed on [date]."

## Content-First Strategy

Design the content structure before the visual design. Content-first means:

1. **Know what content exists** before deciding where it goes
2. **Know what content is needed** before designing containers for it
3. **Structure content by meaning** (what is it?) not by appearance (where does it go?)
4. **Content determines layout**, not the other way around

**In practice:** Page briefs should define what content blocks are needed before any wireframing happens. A designer should receive a page brief that says "this page needs a hero, 3 service cards, a testimonial, and a CTA" — not a wireframe that says "put something here."

## The Website as Sales Tool

The strategic shift that separates effective sites from brochures:

| Brochure Mindset | Sales Tool Mindset |
|-----------------|-------------------|
| "Our website tells people about us" | "Our website persuades people to act" |
| Homepage lists everything we do | Homepage routes visitors to the right conversation |
| About page is company history | About page builds the trust needed to buy |
| Contact page is a form | Contact page reduces friction and anxiety |
| Blog posts are "content marketing" | Blog posts answer questions prospects actually ask |
| Success = "we launched a new site" | Success = "conversion rate increased 40%" |

**How to apply:** For every page, ask: "What would a salesperson say to someone who asked about this?" That's what the page content should accomplish.

## When to Say No

The most valuable strategic skill is knowing what to leave out.

**Say no to:**
- Pages that don't serve the top 3 visitor jobs
- Sections that exist because "our competitors have them" without validating need
- Features that require ongoing maintenance without a maintenance plan
- Content types the client can't sustain (a blog they won't write, a podcast they won't record)
- Complexity that doesn't serve the primary conversion goal

**How to say no:**
- "This is a great idea for Phase 2. For launch, let's focus on [primary goal]."
- "This page would need [X content] updated [Y frequently]. Is that sustainable?"
- "Adding this section dilutes the message. Visitors would see [competing priorities] instead of [clear path]."

## Mental Models Summary

| Model | Core Idea | When to Apply |
|-------|-----------|---------------|
| **Visitor-first** | Organize for visitors, not the org chart | Every structural decision |
| **JTBD** | Map visitor motivations to pages | Phase 3 (Architecture) and Phase 4 (Journeys) |
| **Progressive disclosure** | Layer information by depth | Phase 3 and Phase 5 (Page Briefs) |
| **Content-first** | Define content before containers | Phase 5 (Page Briefs) |
| **MoSCoW / ICE** | Prioritize pages by value | Phase 3 when scoping the sitemap |
| **Sales tool mindset** | Every page should persuade | Phase 5 when writing page briefs |

## Sources & Further Reading

- Steve Krug — *Don't Make Me Think, Revisited* (visitor-first design): https://sensible.com/dont-make-me-think/
- Abby Covert — *How to Make Sense of Any Mess* (information architecture thinking): https://www.howtomakesenseofanymess.com/
- Clayton Christensen — *Competing Against Luck* (JTBD theory): https://www.hbs.edu/faculty/Pages/item.aspx?num=51812
- Gerry McGovern — *Top Tasks* (identifying what visitors actually want): https://gerrymcgovern.com/books/top-tasks-a-how-to-guide/
- Indi Young — *Mental Models* (aligning with user thinking): https://indiyoung.com/mental-models/
- A List Apart — "The Core Model: Designing Inside Out for Better Results": https://alistapart.com/article/the-core-model-designing-inside-out-for-better-results/
- Kim Goodwin — *Designing for the Digital Age* (strategic thinking in design): https://www.wiley.com/en-us/Designing+for+the+Digital+Age-p-9780470229101
- Mike Monteiro — *Design Is a Job* (managing clients and stakeholders): https://abookapart.com/products/design-is-a-job
- Nielsen Norman Group — "The Definition of Information Architecture": https://www.nngroup.com/articles/ia-definition/
- Luke Wroblewski — *Mobile First* (constraint-driven design thinking): https://www.lukew.com/ff/entry.asp?933
- Kristina Halvorson — *Content Strategy for the Web* (content-first approach): https://www.contentstrategy.com/content-strategy-for-the-web
