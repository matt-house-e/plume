---
name: plume-site-strategy
description: This skill should be used when the user asks to "plan a website", "create site strategy", "build a sitemap", "plan site structure", "website architecture", "create page briefs", "website brief", "plan website pages", "user journey mapping", "site redesign plan", "content audit", or needs to go from business goals to a complete website blueprint before design or copy work begins.
---

# Website Strategy & Architecture

A structured workflow for planning what a website should contain, how it should be organized, and how visitors should move through it — before any design or copy work begins. This skill produces the blueprint that `plume-brand-system` designs to and `plume-copywriter` writes to.

It scales from a solo freelancer's 5-page portfolio to an enterprise's 50-page redesign, adapting its process by client maturity.

## How This Skill Works

This skill orchestrates a 6-phase website planning process. Each phase produces structural deliverables that feed the next. The process is collaborative — the user makes strategic decisions at key gates, while Claude handles research, analysis, and systematic documentation.

**The user provides:** Business goals, target audience, core offering, and competitive context (even rough).
**Claude produces:** A complete website brief — sitemap, page briefs, user journeys, conversion funnels, navigation model, and technical requirements.

### Minimum Required Inputs

Do NOT proceed without at minimum:
1. **Business goals** — What does success look like? (leads, sales, authority, hiring, bookings)
2. **Target audience** — Who visits, why, what do they need?
3. **Core offering** — What does the business sell or do?

If any of these are missing, ask for them. If the user can't articulate them, use the discovery framework in `references/discovery-framework.md` to extract them through structured questioning.

### Client Maturity Detection

Before beginning, determine which mode to operate in. Ask directly if unclear, or infer from context:

| Mode | Signal | Process Style | Deliverable Scale |
|------|--------|--------------|-------------------|
| **Solo/Startup** | No existing site, founder's vision only | Fast, opinionated, template-driven | 5-15 pages, 1 funnel |
| **Established Business** | Existing site, analytics, content library | Audit-driven, data-informed | Revised structure, migration plan |
| **Agency Client** | Brand guidelines, clear business goals | Balanced, collaborative | Full sitemap, journeys, briefs |
| **Enterprise** | Multiple stakeholders, conflicting requirements | Governance-heavy, phased | Everything + RACI, phased rollout |

See `references/client-maturity.md` for detailed process adaptations, deliverable scaling, and risk management per mode.

### Fast-Track Mode

If the user already has partial strategy work, skip or compress phases:
- **Has clear goals + audience, needs structure:** Skip Phase 1, start at Phase 2 (Architecture)
- **Has a sitemap, needs page briefs:** Skip to Phase 4 (Page Briefs)
- **Redesign with analytics:** Start at Phase 1 but pull content audit forward
- **Has everything, needs it compiled:** Skip to Phase 6 (Handoff)

Read any existing project documentation, CLAUDE.md, and brand guidelines before starting.

### Output Protocol

All deliverables are **structured markdown documents** saved to the project:
- Sitemap as annotated nested lists
- Page briefs as structured templates (one per page or compiled)
- User journeys as step-by-step flows
- Website brief as a single compiled document

Save deliverables to a logical project path (e.g., `strategy/sitemap.md`, `strategy/page-briefs/`, `strategy/website-brief.md`). Ask the user where they want files if no convention exists.

When the user wants to visualize the sitemap, render a self-contained HTML file showing the structure as a visual tree diagram using inline CSS. This is secondary to the markdown deliverables.

### Quality Checkpoints

At every gate, before presenting to the user, verify against `references/anti-patterns.md`:
- Every page in the sitemap has a clear purpose and audience
- Navigation reflects visitor mental models, not org-chart structure
- No orphan pages (unreachable from navigation)
- No dead-end pages (no onward CTA or next step)
- Content hierarchy within pages follows the inverted pyramid
- The "So What?" test: can every page answer "why does this exist?"

### User Feedback Protocol

At every gate:
1. Present the deliverable with a brief rationale for key decisions
2. Ask specific questions: "Does this structure match how your customers think about your services?" or "Which of these user journeys is most important to get right?"
3. If feedback is vague ("this doesn't feel right"), probe: "Is it the page structure, the navigation labels, the user flow, or the overall scope that's off?"

### Handling Iteration

- **"I need more pages"** → Evaluate against business goals. If justified, add them. If scope creep, flag it: "Adding these 8 pages would dilute focus. Here's what I'd prioritize instead."
- **"Cut this down"** → Identify which pages serve the primary conversion goal. Propose a minimum viable sitemap.
- **"Go back to Phase X"** → Re-enter that phase with current context intact. Don't discard downstream work unnecessarily.
- **"I don't like the structure"** → Ask what's wrong. Propose an alternative based on a different site type template from `references/site-type-templates.md`.
- **Partial approvals** → "The sitemap is right but the journeys need work" is valid. Lock the approved deliverable and iterate the rest.

### Context Management

This skill produces significant output across 6 phases. Context management is critical:

- **RULE: Read only the reference file for the current phase**, not all 14 at once. Loading multiple references wastes context.
- **For Agency/Enterprise mode: work one phase per conversation.** Save each phase's deliverable to a file before moving on. Start the next conversation by reading the saved deliverables.
- **For Solo/Startup mode:** phases 1-4 can often fit in one conversation. Phase 5 should be a separate conversation for sites with 10+ pages.
- **The Website Brief** (Phase 6 output) serves as the master handoff artifact — it carries all decisions forward without needing full conversation context.

**Session Resume Protocol:** When starting a new conversation to continue work:
1. Read the most recent deliverable files saved from previous phases
2. Briefly summarize to the user: "Based on Phase [N], here's where we are: [key decisions]. Ready to proceed to Phase [N+1]?"
3. Load only the reference file for the current phase

### Relationship with Other Plume Skills

```
Business Goals (user input)
        |
  plume-site-strategy    ->  Sitemap, page briefs, user journeys, conversion funnels
        |
  plume-brand-system     ->  Visual identity, design tokens, voice & tone
        |
  plume-copywriter       ->  All page copy, case studies, blog posts, microcopy
        |
  Development            ->  Astro components, content collections, deployment
```

- **With `plume-brand-system`:** Site strategy can run BEFORE or IN PARALLEL with brand design. If brand exists, consume its positioning and audience profile. If it doesn't, ask whether to define brand first.
- **With `plume-copywriter`:** Page briefs from this skill feed directly to the copywriter. Each brief should contain enough context that the copywriter needs no further strategic questions.

## The Six Phases

Execute phases in order. Each phase has a **gate** — a decision point where the user reviews deliverables and approves before proceeding.

---

### Phase 1: Discovery & Inputs

**Goal:** Gather enough business context to make informed structural decisions.

**Process:**
1. Determine client maturity mode (Solo/Startup, Established, Agency, Enterprise)
2. Ask discovery questions scaled to maturity level — refer to `references/discovery-framework.md`
3. Collect and review any existing assets: brand guidelines, analytics, current site, content inventory
4. For redesigns: conduct a content audit per `references/content-audit.md` — inventory existing pages, score content quality, identify what migrates
5. For redesigns: review analytics data — top pages, traffic sources, conversion paths, drop-off points
6. Synthesize inputs into a Discovery Summary: business goals, audience segments, core offering, competitive context, constraints

**Deliverable:** Discovery Summary document — a structured brief capturing all inputs.

**Gate:** User confirms the Discovery Summary accurately reflects their business and goals.

---

### Phase 2: Competitive & Landscape Audit

**Goal:** Understand what competitors and peers are doing structurally to identify patterns and opportunities.

**Process:**
1. Identify 5-8 competitor/peer sites (direct competitors, indirect competitors, aspirational references)
2. Use WebFetch to retrieve homepage and key pages from each competitor — extract structure, not content. If WebFetch fails (SPA rendering, blocking), ask the user to describe the competitor's structure or share screenshots
3. Analyze each site for: page count, sitemap structure, navigation model, content patterns, conversion approach, differentiation
4. Follow methodology in `references/competitive-audit.md`
5. Identify structural patterns across competitors (what everyone does) and gaps (what no one does well)
6. Note navigation labels, page types, and conversion mechanisms that appear repeatedly

**Deliverable:** Competitive Audit Summary — table comparing competitors across key dimensions, with structural insights and opportunities.

**Gate:** User reviews competitive findings and confirms strategic direction.

**Note for Solo/Startup mode:** Compress this to 3-4 competitors and a lighter analysis. The goal is pattern recognition, not exhaustive research.

---

### Phase 3: Site Architecture

**Goal:** Define what pages the site needs and how they relate to each other.

**Process:**
1. Select a site type template from `references/site-type-templates.md` as a starting point
2. Customize the template based on discovery findings — add pages that serve business goals, remove ones that don't
3. Construct a hierarchical sitemap as annotated nested lists — refer to `references/site-architecture.md`
4. Define the navigation model: primary nav, secondary nav, footer nav, utility nav — refer to `references/navigation-patterns.md`
5. If the site has structured content (blog, portfolio, products): define taxonomy — categories, tags, grouping logic
6. Establish labeling conventions — navigation labels should use visitor language, not internal jargon
7. Validate: every page is reachable from navigation, no orphans, most content reachable in 3 clicks (but prioritize clear information scent over rigid click-count rules — see `references/site-architecture.md`)

**Deliverable:**
- Annotated sitemap (nested list with purpose annotation per page)
- Navigation model (what appears where)
- Taxonomy plan (if applicable)

**Gate:** User approves the site structure and navigation model.

---

### Phase 4: User Journeys & Conversion

**Goal:** Map how visitors move through the site to accomplish their goals and the business's goals.

**Process:**
1. Define 2-4 key audience segments from discovery
2. For each segment, map the primary journey: entry point → pages visited → desired action → confirmation — refer to `references/user-journeys.md`
3. Design the conversion funnel: what is the primary conversion action? What intermediate steps lead there?
4. Identify potential drop-off points and design mitigation (compelling CTAs, social proof, reduced friction)
5. Assign primary and secondary CTAs to every page in the sitemap
6. Map jobs-to-be-done: what motivations bring visitors, and which pages fulfill each job?
7. For multi-segment sites: ensure navigation supports different entry paths without confusion

**Deliverable:**
- User journey maps (2-4 segments, as step-by-step flows)
- Conversion funnel diagram (as nested list or ASCII flow)
- CTA map (table: page → primary CTA → secondary CTA)
- JTBD mapping (table: job → pages that fulfill it)

**Gate:** User confirms the journeys reflect how their customers actually behave.

---

### Phase 5: Page Briefs

**Goal:** Define exactly what each page must contain — purpose, audience, content blocks, CTAs, success metric — without writing actual copy.

**Process:**
1. For each page in the approved sitemap, create a structured brief using the template in `references/page-briefs.md`
2. Order content blocks within each page by priority — most important content highest
3. Specify content requirements: what must be written, what format, what assets are needed (photos, testimonials, case studies)
4. Include notes for the copywriter (tone, key messages to hit, what to avoid)
5. Include notes for the designer (content density, interactive elements, special layout needs)
6. Define the success metric for each page (what would indicate this page is working?)
7. For redesigns: note which content migrates from the existing site and what needs to be created fresh

**Deliverable:** Page briefs for every page in the sitemap. Each brief contains: purpose, target audience, content blocks (ordered), primary CTA, secondary CTA, success metric, copywriter notes, designer notes.

**Gate:** User reviews page briefs and confirms content requirements. This is the most detail-heavy gate — allow iterating individual briefs without re-approving the whole set.

---

### Phase 6: Website Brief & Handoff

**Goal:** Compile everything into a single master document that downstream skills and developers can work from.

**Process:**
1. Compile the Website Brief — a single structured document containing:
   - Executive summary (business goals, audience, site type, key decisions)
   - Approved sitemap with annotations
   - Navigation model
   - User journey maps
   - Conversion funnel and CTA strategy
   - All page briefs
   - Taxonomy plan (if applicable)
   - Technical requirements (CMS needs, forms, integrations, third-party tools)
   - For redesigns: migration plan, redirect map, content carry-over decisions
2. Follow the compilation format in `references/handoff-deliverables.md`
3. Verify completeness: every page in the sitemap has a brief, every brief has a CTA, every journey connects to real pages
4. Save the Website Brief as a single markdown file in the project

**Deliverable:** Complete Website Brief document.

**Gate:** User gives final approval. The Website Brief is now the source of truth for all downstream work.

**Handoff:**
- **To `plume-brand-system`:** The sitemap and page briefs inform visual design decisions — how many page templates are needed, what content patterns to design for
- **To `plume-copywriter`:** Page briefs are the direct input — one brief per page, ready to write
- **To development:** Technical requirements inform stack decisions, CMS modeling, and component planning

## Core Principles

1. **Plan for visitors, not the org chart.** Structure the site around what visitors need, not how the business is organized internally. Refer to `references/strategic-thinking.md`.
2. **Every page earns its place.** Every page must have a purpose, an audience, and a measurable outcome. If it can't answer "why does this exist?", it doesn't belong.
3. **Start with a template, then customize.** Don't architect from scratch — start with a proven structure for the site type, then adapt based on discovery. Refer to `references/site-type-templates.md`.
4. **The homepage is not a dumping ground.** The homepage has one job: orient visitors and route them to the right next step. It should not try to say everything.
5. **Navigation is wayfinding.** Labels should be instantly clear to a first-time visitor. If someone has to think about what a nav item means, it's wrong. Refer to `references/navigation-patterns.md`.
6. **Depth kills conversion.** Every additional click between a visitor and their goal reduces completion. Design for the fewest steps possible.
7. **Content blocks, not copy.** Page briefs specify what content is needed, not the words. "3 client testimonials with photo, name, role, and 1-2 sentence quote" — not the actual testimonials.
8. **Scope is a feature.** A focused 8-page site that works is better than a sprawling 30-page site where half the pages are thin. Resist scope creep. Refer to `references/anti-patterns.md`.

## Additional Resources

### Reference Files

| File | Purpose |
|------|---------|
| `references/discovery-framework.md` | Interview questions by client maturity, input checklists, extracting strategy from inarticulate clients |
| `references/competitive-audit.md` | How to analyze competitor sites for structure, navigation, content, and conversion patterns |
| `references/content-audit.md` | Content inventory methodology for redesigns, quality scoring, migration decisions, redirect mapping |
| `references/client-maturity.md` | The 4 client maturity modes with detailed process adaptations, deliverable scaling, and risk management |
| `references/site-architecture.md` | Sitemap construction, page hierarchy, taxonomy design, labeling systems, information architecture |
| `references/page-briefs.md` | Page brief template, content block library, examples for every common page type |
| `references/user-journeys.md` | Journey mapping methodology, conversion funnels, JTBD framework, CTA strategy, drop-off mitigation |
| `references/site-type-templates.md` | Default page structures for 10+ site types with rationale and customization guidance |
| `references/navigation-patterns.md` | Navigation models, mega menus, mobile nav, breadcrumbs, labeling, accessibility |
| `references/handoff-deliverables.md` | Website brief compilation format, technical requirements template, migration plan structure |
| `references/anti-patterns.md` | Common site architecture mistakes, quality tests, scope creep signals |
| `references/strategic-thinking.md` | JTBD framework, visitor-first principle, mental models, managing client politics, prioritization |
| `references/inspiration-bank.md` | Well-structured sites by category, analyzed for effective architecture |
| `references/best-practices.md` | Master source list — books, tools, research organizations, cited URLs |
