# Client Maturity Modes — Reference Guide

## Purpose

Different clients need fundamentally different strategy processes. A solo founder building their first site needs fast, opinionated guidance. An enterprise with 6 stakeholders needs governance frameworks. This reference defines how to adapt the entire site strategy process based on client maturity — from question depth to deliverable scope to risk management.

## Detecting Client Maturity

Ask directly if unclear: "Is this a brand new site, a redesign, or a major restructuring?" Then calibrate based on signals:

| Signal | Likely Mode |
|--------|-------------|
| "I just need a simple website" | Solo/Startup |
| No existing site, pitch deck or vision doc only | Solo/Startup |
| Has an existing site, wants it redesigned | Established Business |
| Sends brand guidelines and a brief | Agency Client |
| Multiple people giving input, conflicting priorities | Enterprise |
| "Our marketing team wants X but our product team wants Y" | Enterprise |
| Has analytics data to share | Established Business or Agency |
| "We've never had a website before" with 50+ employees | Enterprise (new build, but complex stakeholders) |

## Mode 1: Solo / Startup

**Profile:** Founder, freelancer, solopreneur, early-stage startup. Building from scratch or replacing a DIY site.

**Inputs typically available:**
- Founder's vision (often verbal, rarely documented)
- Maybe a pitch deck or one-pager
- Possibly nothing written at all
- Strong opinions but unclear articulation

**Discovery approach:**
- 5-8 focused questions, not a comprehensive workshop
- Extract latent strategy through conversation, not forms
- Ask: "What do you want someone to do after visiting your site?" — the answer reveals the conversion goal
- Ask: "If you could only have 5 pages, what would they be?" — forces prioritization
- Ask: "Who's the one person you most want to reach?" — reveals primary audience

**Process adaptations:**
- Skip competitive audit or do a very lightweight version (3 competitors, structural notes only)
- Start with a site type template and customize, rather than building from scratch
- Propose an opinionated structure: "Most [your type] need these 7 pages. Here's why."
- One primary conversion funnel only — don't over-engineer
- Page briefs can be lighter (purpose, content blocks, CTA — skip designer notes and detailed metrics)

**Deliverable scope:**
- Simple sitemap: 5-15 pages
- Homepage brief (detailed)
- 3-5 key page briefs
- One primary conversion funnel
- Lightweight website brief (1-2 pages, not a full document)

**Risks to manage:**
- **Scope creep into business strategy.** The client hasn't figured out their business, and they want site strategy to solve that. Redirect: "Let's define enough to plan the site. Your business model can evolve — the site should too."
- **"I need everything."** Founders want a blog, podcast, course platform, community, and e-commerce on day one. Counter with: "Launch with 5 pages. Add features when you've validated the core offering."
- **Analysis paralysis.** Too many options overwhelm solo founders. Present 1-2 recommendations with rationale, not 5 options.

**Tone:** Confident, opinionated, encouraging. "Here's what works for [your type]. What would you change?"

---

## Mode 2: Established Business

**Profile:** Company with an existing site, some brand materials, and real traffic data. Typically a redesign or major restructuring.

**Inputs typically available:**
- Existing website (can be audited)
- Analytics data (Google Analytics, Search Console)
- Brand guidelines (possibly outdated)
- Content library (blog posts, case studies, resources)
- Internal stakeholders with opinions

**Discovery approach:**
- Start with what exists: audit the current site before asking questions
- Pull analytics: top 20 pages by traffic, top conversion paths, highest bounce rates, search queries
- Content inventory: every page, its purpose, its performance
- Then ask: "What's working? What's not? What do customers complain about?"
- Ask: "What business goals have changed since the last site was built?"

**Process adaptations:**
- Content audit is mandatory — use `references/content-audit.md` for full methodology
- Analytics drive architecture decisions: "These 5 pages get 80% of traffic. Build around them."
- Migration planning is required: what carries over, what gets cut, what gets merged
- URL redirect mapping for SEO preservation
- Compare current vs proposed: show what changes and why

**Deliverable scope:**
- Content audit summary (what exists, quality scores, keep/revise/cut decisions)
- Revised sitemap with migration annotations
- Full page briefs for new/restructured pages
- Lighter briefs for pages that carry over unchanged
- Redirect map (old URL → new URL)
- Migration plan with phases
- Complete website brief

**Risks to manage:**
- **Content hoarding.** "We can't cut any pages!" Counter with data: "This page gets 3 visits per month and hasn't been updated in 2 years. Every page costs money to maintain."
- **Politics.** "The VP of Sales insists on keeping the team page exactly as-is." Acknowledge, note as a constraint, move on. Don't fight political battles.
- **Redesign scope creep.** What starts as a redesign becomes "also add e-commerce, a learning platform, and a community." Separate the redesign from new features. Phase them.
- **SEO panic.** "We can't change any URLs!" Redirect mapping solves this. Explain 301 redirects and timeline for SEO recovery (typically 2-4 weeks).

**Tone:** Data-informed, respectful of what exists. "Your analytics show X. Here's what that suggests for the new structure."

---

## Mode 3: Agency Client

**Profile:** Business that has hired an agency (or is working with a skilled professional). Clear brief, brand guidelines exist, moderate complexity.

**Inputs typically available:**
- Brand guidelines or design system
- Defined business goals and KPIs
- Audience research or personas
- Possibly an existing site
- A project brief or scope document

**Discovery approach:**
- Structured but not exhaustive — the client has already done strategic thinking
- Fill gaps rather than start from scratch
- Focus discovery on: site-specific goals, content requirements, technical constraints, timeline
- Validate assumptions: "Your brief says the primary audience is X — is that still accurate?"
- Competitive audit at full depth (5-8 sites)

**Process adaptations:**
- All 6 phases at standard depth
- Present options with rationale at each gate (not single recommendations)
- User journey mapping for 3-4 segments
- Full page briefs with designer and copywriter notes
- Navigation model with mobile considerations

**Deliverable scope:**
- Full annotated sitemap
- Navigation model (primary, secondary, footer, utility, mobile)
- User journey maps (3-4 segments)
- Conversion funnel with CTA strategy
- Complete page briefs for every page
- Website brief (comprehensive)
- Technical requirements summary

**Risks to manage:**
- **Brief mismatch.** The brief says one thing, the stakeholders want another. Align early.
- **Over-engineering.** Agency clients sometimes want complexity to justify the engagement. Push back if simpler serves the goals.
- **Timeline pressure.** Agencies work on deadlines. Know when to deliver "good enough" vs perfect.

**Tone:** Professional, collaborative, options-oriented. "Here are two approaches with trade-offs."

---

## Mode 4: Enterprise

**Profile:** Large organization with multiple departments, stakeholders, and competing priorities. Often a major redesign or platform migration.

**Inputs typically available:**
- Too much. Conflicting requirements from departments.
- Brand guidelines (possibly multiple versions)
- Analytics data (possibly multiple properties)
- Existing site (possibly multiple sites being consolidated)
- Content from 5+ content owners
- Legal/compliance requirements
- Accessibility requirements
- Integration requirements (CRM, ERP, marketing automation)

**Discovery approach:**
- Stakeholder mapping first: who has decision authority, who has input, who needs to be informed
- Individual stakeholder interviews (30 min each, 3-5 stakeholders)
- Facilitated alignment session: present conflicting requirements, force prioritization
- Document decisions explicitly: "We decided X because Y. [Stakeholder] agreed on [date]."
- Governance model before architecture: who approves what

**Process adaptations:**
- Add RACI matrix before Phase 3 (who is Responsible, Accountable, Consulted, Informed for each decision)
- Phased rollout plan: don't try to launch everything at once
- Content governance: who owns each section, who approves changes, what's the update cadence
- Cross-departmental navigation: ensure each department's content is findable without creating nav bloat
- Compliance check: accessibility (WCAG 2.1 AA), privacy (cookie consent, data handling), legal (terms, disclaimers)

**Deliverable scope:**
- Everything from Mode 3, plus:
- RACI matrix
- Stakeholder alignment document (decisions made, by whom, rationale)
- Phased rollout plan (Phase 1: core pages, Phase 2: department sections, Phase 3: advanced features)
- Content governance model (ownership, approval, cadence)
- Defined approval process for each phase gate

**Risks to manage:**
- **Design by committee.** Everyone has opinions, no one makes decisions. The RACI matrix prevents this — one person approves, others are consulted.
- **Infinite revisions.** Set a revision limit at each gate: "2 rounds of revisions per phase, then we lock and move forward."
- **Scope explosion.** Enterprise projects grow. Document the original scope. When new requests come in, label them as "Phase 2" or "post-launch."
- **Political navigation.** Department heads fight for homepage real estate. Use data (analytics, user research) to arbitrate, not opinions.
- **Perfect is the enemy of launched.** Enterprise sites that try to be perfect never launch. Define "minimum viable launch" early.

**Tone:** Framework-driven, governance-focused. "Here's how we make decisions. Here's who approves what. Here's the timeline."

---

## Scaling the Deliverable

| Deliverable | Solo/Startup | Established | Agency | Enterprise |
|-------------|-------------|-------------|--------|------------|
| Discovery Summary | 1 page | 2-3 pages | 3-5 pages | 5-10 pages |
| Competitive Audit | 3 sites, notes | 5 sites, structured | 5-8 sites, full analysis | 8+ sites, scored matrix |
| Content Audit | N/A | Required | If existing site | Required + governance |
| Sitemap | Flat list, 5-15 pages | Annotated tree | Annotated tree + taxonomy | Multi-level tree + governance |
| Navigation Model | Primary nav only | Primary + footer | Full (primary, secondary, footer, utility) | Full + departmental + mobile |
| User Journeys | 1-2 segments | 2-3 segments | 3-4 segments | 4-6 segments |
| Page Briefs | Lightweight (5 fields) | Standard (8 fields) | Full (12 fields) | Full + compliance notes |
| Website Brief | 2-3 pages | 8-12 pages | 15-20 pages | 25-40 pages |
| Migration Plan | N/A | Required | If applicable | Required + phased |
| RACI Matrix | N/A | N/A | Optional | Required |
| Rollout Plan | N/A | Optional | Optional | Required (phased) |

## Sources & Further Reading

- Nielsen Norman Group — "Stakeholder Alignment in UX Projects": https://www.nngroup.com/articles/stakeholder-alignment/
- Content Strategy Alliance — "Scaling Content Strategy by Organization Size": https://www.contentstrategyalliance.com/
- Abby Covert — *How to Make Sense of Any Mess* (information architecture for complex organizations): https://www.howtomakesenseofanymess.com/
- A List Apart — "Responsive Content Strategy": https://alistapart.com/
- UX Collective — "Enterprise UX: Navigating Organizational Complexity": https://uxdesign.cc/
- Mike Monteiro — *Design Is a Job* (managing client relationships and scope): https://abookapart.com/products/design-is-a-job
- Steve Krug — *Don't Make Me Think* (user-centered design principles): https://sensible.com/dont-make-me-think/
