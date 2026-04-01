---
name: marketing-strategy
description: This skill should be used when the user asks to "create marketing strategy", "define positioning", "build messaging framework", "marketing plan", "go-to-market strategy", "define ICP", "ideal customer profile", "channel strategy", "marketing brief", "positioning exercise", "competitive analysis for marketing", or needs to go from zero marketing to a complete strategic foundation that drives all downstream marketing execution.
---

# Marketing Strategy

A structured workflow for building a complete marketing strategy from scratch — from "I have a business but no marketing" to a comprehensive Marketing Strategy Brief that drives all downstream execution. This skill produces the root strategic document that content strategy, SEO, email marketing, paid acquisition, and every other marketing skill references.

It adapts from a solo founder spending 5 hours/week on marketing to a funded startup building a marketing team, scaling its process by business maturity.

## How This Skill Works

This skill orchestrates an 8-phase marketing strategy process. Each phase produces strategic deliverables that feed the next. The process is collaborative — the user makes strategic decisions at key gates, while Claude handles research, analysis, framework application, and systematic documentation.

**The user provides:** A business to market — what it does, who it serves, and what success looks like (even rough answers).
**Claude produces:** A complete Marketing Strategy Brief — positioning, ICP, messaging framework, competitive landscape, goals/metrics, channel strategy, and resource plan.

### Minimum Required Inputs

Do NOT proceed without at minimum:
1. **What the business does** — Product, service, or offering (even a rough description)
2. **Who it serves** — Target audience or customer type (even a guess)
3. **What success looks like** — Revenue target, customer count, or growth goal

If any are missing, ask for them. If the user cannot articulate them, use the discovery framework in `references/discovery-framework.md` to extract them through structured questioning.

### Business Maturity Detection

Before beginning, determine which mode to operate in. Ask directly if unclear, or infer from context:

| Mode | Signal | Process Style | Deliverable Scale |
|------|--------|---------------|-------------------|
| **Pre-PMF** | No paying customers, validating idea | Hypothesis-driven, lean, validation-focused | Lightweight brief, 1 channel bet |
| **Post-PMF / Early Revenue** | <$1M ARR, founder doing marketing | Founder-led, focused, 1-2 channel depth | Full brief, clear channel strategy |
| **Growth Stage** | $1M-$10M, hiring first marketers | Scalable systems, team-ready documentation | Comprehensive brief, multi-channel |
| **Scaling** | $10M+, established marketing team | Optimization-focused, data-informed | Full brief with budget allocation model |

See `references/business-maturity.md` for detailed process adaptations per mode.

### Fast-Track Mode

If the user already has partial strategy work, skip or compress phases:
- **Has clear positioning and ICP:** Skip Phases 1-3, start at Phase 4 (Messaging)
- **Has messaging, needs channels:** Skip to Phase 7 (Channel Strategy)
- **Has everything, needs it compiled:** Skip to Phase 8 (Brief Compilation)
- **Needs to reposition:** Start at Phase 2 (Competitive Landscape) with existing context
- **Needs just one component:** Jump directly to the relevant phase

Read any existing project documentation, CLAUDE.md, brand guidelines, and previous strategy work before starting.

### Output Protocol

All deliverables are **structured markdown documents** saved to the project:
- Positioning canvas as a structured template
- ICP profiles as detailed documents
- Messaging framework as a hierarchical document
- Competitive landscape as annotated maps and tables
- Channel strategy as a prioritized plan with rationale
- Marketing Strategy Brief as a single compiled document

Save deliverables to `marketing/` in the project root by default:

```
marketing/
├── discovery.md          # Phase 1 output
├── competitive.md        # Phase 2 output
├── positioning.md        # Phase 3 output
├── icp.md                # Phase 4 output
├── messaging.md          # Phase 5 output
├── goals.md              # Phase 6 output
├── channels.md           # Phase 7 output
└── marketing-brief.md    # Phase 8 — compiled master document
```

Ask the user if they prefer a different location.

### Quality Checkpoints

At every gate, before presenting to the user, verify against `references/anti-patterns.md`:
- Every strategic decision traces back to evidence (customer data, competitive insight, or market signal)
- No "me too" positioning — the strategy must pass the "could a competitor say this?" test
- Channel choices are justified by ICP watering holes, not trends
- Goals are specific, measurable, and reverse-engineered from revenue
- No vanity metrics in the measurement framework
- The strategy is executable with the user's actual resources (time, money, team)

### User Feedback Protocol

At every gate:
1. Present the deliverable with brief rationale for key decisions
2. Ask specific questions: "Does this positioning match how your best customers describe you?" or "Which of these channels do you already have traction in?"
3. If feedback is vague ("this doesn't feel right"), probe: "Is it the audience definition, the competitive framing, the messaging, or the channel choice that's off?"

### Handling Iteration

- **"Our positioning isn't unique enough"** → Revisit competitive alternatives. Find a more specific subsegment (Big Fish, Small Pond). Refer to `references/positioning-framework.md`.
- **"I don't know my ICP well enough"** → Use the structured interview questions in `references/icp-definition.md` to extract what the user does know. Flag gaps for validation.
- **"This is too ambitious"** → Scale down to minimum viable marketing. One channel, one message, one metric. Refer to `references/business-maturity.md` for pre-PMF mode.
- **"Go back to Phase X"** → Re-enter that phase with current context intact. Do not discard downstream work unnecessarily.
- **Partial approvals** → "The positioning is right but the channel strategy needs work" is valid. Lock the approved deliverable and iterate the rest.

### Context Management

This skill produces significant output across 8 phases. Context management is critical:

- **RULE: Read only the reference file for the current phase**, not all 12 at once. Loading multiple references wastes context.
- **For Growth/Scaling mode: work one phase per conversation.** Save each phase's deliverable to a file before moving on.
- **For Pre-PMF/Early Revenue mode:** Phases 1-5 can often fit in one conversation. Phases 6-8 should be a separate conversation.
- **The Marketing Strategy Brief** (Phase 8 output) serves as the master handoff artifact — it carries all decisions forward without needing full conversation context.

### Pre-PMF Express Path

For pre-PMF businesses, run a compressed 4-step process instead of the full 8 phases:

1. **Discovery + Positioning** (Phases 1+3 combined): 5-8 discovery questions, lightweight competitive scan of 3 competitors, draft positioning hypothesis using Dunford framework
2. **ICP Hypothesis** (Phase 4 compressed): Best-guess ICP based on founder conversations, watering holes, one key buying trigger
3. **Core Message + One Channel** (Phases 5+7 combined): One-liner, elevator pitch, value proposition. Pick ONE channel based on ICP watering holes. Define 90-day test.
4. **Lean Brief** (Phase 8 compressed): One-page strategy brief with positioning, ICP, message, channel, and 30-day action plan

This produces a testable strategy in one conversation. Revisit and expand to full phases after PMF validation.

**Session Resume Protocol:** When starting a new conversation to continue work:
1. Read the most recent deliverable files saved from previous phases
2. Briefly summarize to the user: "Based on Phase [N], here's where we are: [key decisions]. Ready to proceed to Phase [N+1]?"
3. Load only the reference file for the current phase

### Relationship with Downstream Skills

```
Business (user input)
        |
  marketing-strategy     ->  Positioning, ICP, messaging, channels, goals
        |
  ┌─────┼──────────────┐
  |     |              |
  plume-brand-design   plume-copywriter   plume-site-strategy
  (visual identity)    (website copy)     (site architecture)
```

- **With `plume-brand-design`:** Marketing strategy provides positioning, audience, and voice direction that brand design translates into visual identity. Strategy should run FIRST or IN PARALLEL.
- **With `plume-copywriter`:** The messaging framework from Phase 5 feeds directly into copywriting. Value propositions, proof points, and awareness levels guide all copy.
- **With `plume-site-strategy`:** Marketing strategy informs which pages the site needs, what conversion goals to design for, and how user journeys should flow.

As additional downstream execution skills are built (content strategy, SEO, email marketing, paid acquisition), the marketing strategy brief serves as their root input.

## The Eight Phases

Execute phases in order. Each phase has a **gate** — a decision point where the user reviews deliverables and approves before proceeding.

---

### Phase 1: Discovery & Business Context

**Goal:** Understand the business deeply enough to make informed strategic decisions.

**Process:**
1. Determine business maturity mode (Pre-PMF, Post-PMF, Growth, Scaling) — refer to `references/business-maturity.md`
2. Ask discovery questions scaled to maturity level — refer to `references/discovery-framework.md`
3. Gather key inputs:
   - What the business does (product/service, delivery model, pricing)
   - Who it serves today (current customers, if any)
   - What has been tried in marketing (what worked, what failed, what was never measured)
   - Revenue model and current numbers (even rough)
   - Available resources (time per week, budget per month, team size)
   - Competitive context (who they lose to, who they admire)
4. For businesses with existing marketing: audit current efforts — what channels are active, what metrics are tracked, what is the current CAC/LTV
5. Synthesize into a Discovery Summary

**Deliverable:** Discovery Summary document — business context, current state, resources, constraints, and initial hypotheses.

**Gate:** User confirms the Discovery Summary accurately reflects their business and situation.

---

### Phase 2: Competitive Landscape

**Goal:** Map the competitive environment to identify positioning opportunities and white space.

**Process:**
1. Identify 5-8 competitors/alternatives (direct competitors, indirect alternatives, aspirational references, and the "do nothing" option)
2. For each competitor, analyze: positioning, messaging, target audience, pricing, primary channels, content strategy, strengths, weaknesses
3. Ask the user to describe each competitor's positioning, pricing, and target audience. Supplement with WebFetch to review competitor homepages where possible — extract positioning, not features
4. Follow methodology in `references/competitive-analysis.md`
5. Create a 2x2 positioning map using axes that reflect buyer decision-making criteria
6. Identify white space — underserved segments, unaddressed pain points, positioning gaps
7. Apply the Blue Ocean ERRC grid: what to Eliminate, Reduce, Raise, Create

**Deliverable:** Competitive Landscape document — competitor profiles table, 2x2 positioning map, white space analysis, ERRC grid, strategic implications.

**Gate:** User reviews competitive findings and confirms the landscape is accurately mapped.

**Note for Pre-PMF mode:** Compress to 3-4 competitors and a lighter analysis. The goal is pattern recognition, not exhaustive research.

---

### Phase 3: Positioning

**Goal:** Define a clear, differentiated position in the market using April Dunford's framework.

**Process:**
1. Apply the 5-component positioning framework from `references/positioning-framework.md`:
   - **Competitive alternatives:** What would customers use if this business did not exist?
   - **Unique attributes:** What does this business have that alternatives do not?
   - **Value (and proof):** What do those unique attributes enable for customers?
   - **Target customer characteristics:** Who cares most about this value?
   - **Market category:** What frame of reference makes this value obvious?
2. Choose a positioning style:
   - **Big Fish, Small Pond** (recommended for most startups) — dominate a specific subsegment
   - **Head-to-Head** — compete directly in an existing category (requires significant resources)
   - **Create a New Category** — only if the offering genuinely cannot be understood in any existing frame
3. Draft a positioning canvas documenting all 5 components
4. Test the positioning with the "30-second stranger test" — could someone unfamiliar with the business understand what it does and why it matters in 30 seconds?
5. For service businesses: apply the specialist positioning framework from `references/positioning-framework.md`

**Deliverable:** Positioning Canvas — all 5 components documented, positioning style chosen, positioning statement drafted, rationale for key decisions.

**Gate:** User confirms the positioning feels right and passes the stranger test. This is the most important gate — all downstream work depends on clear positioning.

---

### Phase 4: Ideal Customer Profile (ICP)

**Goal:** Define exactly who the business should target with enough specificity to guide all marketing decisions.

**Process:**
1. Build the ICP using the framework in `references/icp-definition.md`
2. For B2B: define firmographics (industry, size, revenue, tech stack), buying committee roles, budget authority, decision process
3. For B2C: define demographics, psychographics (values, fears, aspirations), behavioral patterns, purchase triggers
4. For services/freelancers: define dream client characteristics AND red flag indicators
5. Map watering holes — where does this ICP spend time? Communities, publications, events, social platforms, podcasts, influencers
6. Identify buying triggers — what events cause this ICP to actively look for a solution?
7. If multiple segments exist, prioritize using the SCALE framework (Size, Currency, Access, Love, Early Adopter Data)
8. Define the anti-ICP — who should the business NOT pursue?

**Deliverable:** ICP Document — detailed profile(s) with firmographics/demographics, psychographics, watering holes, buying triggers, anti-ICP. Prioritized if multiple segments.

**Gate:** User confirms the ICP matches their best customers (or best hypothesis for pre-PMF).

---

### Phase 5: Messaging Framework

**Goal:** Define what to say before deciding how to say it. This determines whether all downstream marketing will be generic or differentiated.

**Process:**
1. Choose a narrative framework based on business type — refer to `references/messaging-framework.md`:
   - **StoryBrand SB7** (recommended for services, B2C, simple B2B): Customer as hero, problem (external/internal/philosophical), guide, plan, CTA, failure, success
   - **Value Proposition Canvas** (recommended for complex B2B, technical products): Jobs-to-be-done, pains, gains → pain relievers, gain creators
   - Either framework produces the same outputs; choose based on audience sophistication
2. Build the messaging hierarchy:
   - **Tier 1:** One-liner / tagline (10 words or fewer)
   - **Tier 2:** Elevator pitch (2-3 sentences)
   - **Tier 3:** Full value narrative (one paragraph)
3. Draft the value proposition using the "Only We" test: "Only we [verb] [what] for [whom] by [how]." If a competitor could say the same thing, it is not specific enough.
4. Identify 3-5 supporting message pillars with 2-3 proof points each
5. Build the objection-handling map: top 3-5 objections → counter-messages with proof
6. Develop the point of view / contrarian narrative: "The way everyone does [X] is broken because [Y]. We believe [Z]."
7. Determine audience awareness level (Schwartz's 5 levels) to calibrate headline sophistication and copy structure
8. Create a terminology guide: preferred terms, banned terms, brand-specific language

**Deliverable:** Messaging Framework document — StoryBrand BrandScript, messaging hierarchy (3 tiers), value proposition, message pillars with proof, objection map, POV statement, awareness level assessment, terminology guide.

**Gate:** User confirms the core message is right. Test: can the user read the value proposition to someone unfamiliar with the business and have them understand what is offered?

---

### Phase 6: Goals & Metrics

**Goal:** Define what success looks like and how to measure it.

**Process (refer to `references/goals-and-metrics.md`):**
1. Choose a North Star Metric based on business type
2. Reverse-engineer from revenue target: Revenue → Customers needed → Leads needed → Traffic needed (use conversion rate benchmarks from reference file)
3. Set 2-3 quarterly OKRs (Objective + Key Results)
4. Define the measurement dashboard: 3-5 leading indicators + 3-5 lagging indicators
5. Specify attribution approach: software attribution + self-reported ("How did you hear about us?")
6. Flag vanity metrics to ignore

**Deliverable:** Goals & Metrics document — North Star Metric, revenue model, OKRs, measurement dashboard, attribution approach.

**Gate:** User confirms goals are realistic and metrics connect to revenue.

---

### Phase 7: Channel Strategy & Resource Plan

**Goal:** Decide where to invest time and money to reach the ICP.

**Process (refer to `references/channel-strategy.md` and `references/budget-and-resources.md`):**
1. Apply the Bullseye Framework: brainstorm all channels, narrow to 3-6 promising, test to find the ONE primary channel
2. Score top candidates using ICE (Impact, Confidence, Ease)
3. Match channels to ICP watering holes — where does the ICP actually spend time?
4. Choose 1 primary channel (80% of effort) and 1 secondary channel (20%)
5. For each chosen channel: define the specific play, expected timeline to results, success metric, and kill criteria
6. Apply the 70/20/10 budget rule: 70% proven, 20% emerging, 10% experimental
7. Define the minimum viable tool stack based on budget tier
8. Create a 30/60/90 day action plan: what to do in the first week, first month, first quarter

**Deliverable:** Channel Strategy & Resource Plan — channel choices with rationale, plays per channel, budget/time allocation, tool stack, 30/60/90 day launch plan.

**Gate:** User confirms channel choices align with where they can actually invest time/money, and the 30/60/90 plan is actionable.

---

### Phase 8: Marketing Strategy Brief & Handoff

**Goal:** Compile everything into a single master document that drives all downstream marketing execution.

**Process:**
1. Compile the Marketing Strategy Brief — a single structured document containing:
   - Executive summary (business context, maturity stage, key strategic decisions)
   - Positioning canvas (all 5 components + positioning style)
   - ICP profile(s) with watering holes and buying triggers
   - Messaging framework (hierarchy, value prop, pillars, objection map, POV)
   - Competitive landscape summary (positioning map, white space, ERRC)
   - Goals and metrics (North Star, OKRs, dashboard, attribution)
   - Channel strategy and resource plan (channels, plays, budget, tools, from Phase 7)
   - 30/60/90 day action plan (from Phase 7)
   - Review cadence (quarterly tactical review, annual strategic refresh)
2. Verify completeness: every section references evidence from earlier phases
3. Save the Marketing Strategy Brief as a single markdown file

**Deliverable:** Complete Marketing Strategy Brief document.

**Gate:** User gives final approval. The Marketing Strategy Brief is now the source of truth for all downstream marketing work.

**Handoff:**
- **To content strategy:** Messaging pillars and ICP define content topics, audience, and voice
- **To SEO:** ICP search behavior and channel strategy inform keyword targeting
- **To email marketing:** ICP, messaging hierarchy, and awareness levels drive sequence design
- **To paid acquisition:** ICP, messaging, and channel strategy define targeting and creative
- **To `plume-brand-design`:** Positioning and voice direction inform visual identity
- **To `plume-copywriter`:** Messaging framework is the direct input for all website copy
- **To `plume-site-strategy`:** Goals, ICP journeys, and conversion strategy inform site architecture

## Core Principles

1. **Positioning is the root of everything.** Without clear positioning, every downstream activity is guesswork. Do not skip to tactics. Refer to `references/positioning-framework.md`.
2. **Strategy before tactics.** A marketing strategy should remain stable for 12-24 months. Tactics change quarterly. Do not confuse the two. Refer to `references/strategic-thinking.md`.
3. **Specificity over generality.** "Small businesses" is not an ICP. "B2B SaaS companies with 10-50 employees that use HubSpot and have no dedicated marketer" is an ICP. Refer to `references/icp-definition.md`.
4. **Depth beats breadth.** One channel mastered beats five channels dabbled in. 80% effort on one channel, 20% on a second. Refer to `references/channel-strategy.md`.
5. **Measure what matters.** Vanity metrics (followers, impressions, page views) create false confidence. Track metrics that connect to revenue. Refer to `references/goals-and-metrics.md`.
6. **Adapt to maturity.** Pre-PMF marketing is validation. Post-PMF marketing is repeatability. Growth marketing is scalability. The strategy must match the stage. Refer to `references/business-maturity.md`.
7. **Executable with actual resources.** A strategy the user cannot execute is worthless. Every recommendation must fit their real time, budget, and team constraints. Refer to `references/budget-and-resources.md`.
8. **Revisit, do not set and forget.** Strategy should be reviewed quarterly (tactics) and annually (positioning). Watch for signals that the strategy needs to change. Refer to `references/strategic-thinking.md`.

## Additional Resources

### Reference Files

| File | Purpose |
|------|---------|
| `references/discovery-framework.md` | Discovery questions by maturity stage, extracting strategy from founders, input checklists |
| `references/positioning-framework.md` | April Dunford's 5-component framework, positioning styles, templates, testing, services positioning |
| `references/icp-definition.md` | ICP construction for B2B/B2C/services, watering holes, buying triggers, validation, prioritization |
| `references/messaging-framework.md` | StoryBrand SB7, messaging hierarchy, value propositions, proof points, objections, POV, awareness levels |
| `references/competitive-analysis.md` | Landscape mapping, 2x2 positioning maps, Blue Ocean canvas, white space identification, monitoring |
| `references/goals-and-metrics.md` | North Star metrics, funnel models, revenue reverse-engineering, OKRs, attribution, vanity vs actionable |
| `references/channel-strategy.md` | Bullseye framework, ICE scoring, channel-audience fit, organic/paid deep dives, sequencing, PESO |
| `references/business-maturity.md` | Pre-PMF, post-PMF, growth, scaling — process adaptations, founder-led marketing, hiring triggers |
| `references/budget-and-resources.md` | Budget benchmarks, time-as-budget allocation, tool stack by tier, hire vs agency vs DIY |
| `references/strategic-thinking.md` | First principles, strategy vs tactics, common mistakes, strategy document format, review cadence |
| `references/anti-patterns.md` | Common marketing strategy mistakes, vanity metrics, premature scaling, quality tests |
| `references/inspiration-bank.md` | Notable startup marketing strategies (Basecamp, Notion, Linear, Figma), thought leaders, books |
