---
name: plume-copywriter
description: This skill should be used when the user asks to "write website copy", "write headlines", "create landing page copy", "draft page copy", "write product descriptions", "write a case study", "write blog post copy", "write SEO meta tags", "create website content", "write microcopy", or needs to produce professional conversion-focused written content for any type of website.
---

# Plume Copywriter

Write conversion-focused copy for every page and element of a website — from hero headlines to 404 pages. This skill treats copywriting as a persuasion discipline, not just filling in text. Every word earns its place by moving the reader toward a decision.

## How This Skill Works

**Input:** A business, product, or project that needs website copy. Optionally, existing brand guidelines from `plume-brand-design`.

**Output:** Structured markdown documents containing all copy organized by page and section, plus SEO meta content and microcopy. Optionally, self-contained HTML wireframe pages showing copy in layout context.

The workflow moves through 7 phases: Brief & Discovery → Site Architecture → Messaging Foundation → Page-by-Page Drafting → Long-Form Content → Microcopy & Meta → Edit & Polish. Each phase produces a deliverable that feeds the next.

### Fast-Track Mode

Skip phases when the user already has partial work:

| User Has... | Skip To... |
|---|---|
| Brand guidelines + site map | Phase 3 (Messaging Foundation) |
| Messaging hierarchy already defined | Phase 4 (Page Drafting) |
| Draft copy needing revision | Phase 7 (Edit & Polish) |
| Existing site needing new pages only | Phase 4 for those pages |
| Blog/case study brief only | Phase 5 (Long-Form Content) |

Always confirm what exists before skipping. Read any existing documents to absorb voice and messaging context.

### Brand Voice Integration

Before writing any copy, check for brand voice input:

1. Look for existing brand guidelines in the project (output from `plume-brand-design` or similar)
2. If found → read and absorb: voice spectrums, tone variation matrix, terminology guide, messaging hierarchy, microcopy patterns. Apply throughout all copy.
3. If not found → ask the user: *"No brand voice guidelines found. Should I invoke `plume-brand-design` first for a full brand identity, or define voice quickly here with a few questions?"*
4. If doing inline voice definition, ask 5-8 targeted questions:
   - What 3 adjectives describe how you want to sound?
   - Who is your audience? (role, sophistication, pain points)
   - Name a brand whose voice you admire. What about it?
   - What words/phrases should we never use?
   - Formal or casual? Technical or plain?
   - Funny or serious? Bold or measured?

### Rendering Protocol

**Primary output:** Markdown documents, one per page, structured with section headers matching the page layout:

```markdown
# Homepage Copy

## Hero Section
**Headline:** [H1 text]
**Subheadline:** [Supporting text]
**CTA:** [Button text]

## Value Proposition Section
**Section Headline:** [H2 text]
**Body:** [Paragraph copy]
...
```

**Optional HTML wireframes:** When the user asks to "render", "preview", or "see it in context," produce a self-contained HTML file with:
- System font stack (`-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`)
- Neutral palette (white background, `#1a1a1a` text, `#666` secondary text, `#2563eb` CTA buttons)
- Max-width container (720px), generous section padding (80px vertical)
- Each page section as a distinct `<section>` with visible borders or background alternation
- Actual copy in place — headlines as `<h1>`/`<h2>`, body as `<p>`, CTAs as styled `<button>`
- This is a copy wireframe — real words in rough layout — not a design comp.

**SEO document:** A separate markdown file with all meta content:

```markdown
# SEO & Meta Content

## Homepage
- **Title tag:** [60 chars max]
- **Meta description:** [155 chars max]
- **OG title:** [text]
- **OG description:** [text]
- **H1:** [confirmed from page copy]
- **URL slug:** /

## About
...
```

### Quality Checkpoints

Run at every phase gate (full methodology in `references/editing-and-polish.md`):

- **Specificity test:** Could a competitor say this exact sentence? If yes → rewrite with specifics.
- **"So what?" test:** Read each claim and ask "so what?" — cut or strengthen if no answer.
- **Benefit check:** Every feature connects to a benefit. No orphan features.
- **Voice consistency:** Sample 3 random sections — do they sound like the same brand?
- **Jargon scan:** Flag banned words from `references/anti-patterns.md`.
- **CTA strength:** Every page has a clear primary CTA. No "Submit" or "Click here."

### User Feedback Protocol

Present copy in digestible chunks — one page or section at a time, not the entire site at once.

For each deliverable:
1. Present the copy with brief rationale for key decisions
2. Highlight 2-3 specific choices where alternatives exist ("I went with X because Y — want to try Z instead?")
3. Ask for approval or revision direction before proceeding

When presenting options, show 2 (not 3+). Too many options causes decision fatigue.

### Handling Iteration

- **"I don't like it"** → Ask: "What specifically isn't working — the tone, the message, or the structure?" Then revise only that dimension.
- **"Make it shorter"** → Cut weak sentences first. Then compress strong ones. Never cut proof points or specifics — cut abstractions.
- **"Make it more [adjective]"** → Map the adjective to concrete copy moves (e.g., "bolder" = shorter sentences, more direct claims, stronger verbs, imperative voice).
- **"Start over"** → Don't discard everything. Ask what to keep (voice? structure? specific lines?) and rebuild around those anchors.
- **Partial approval** → Lock approved sections. Revise only flagged sections. Track approved vs. in-progress.

### Context Management

**Reference loading:** Load only the reference files relevant to the current phase. Do not load all references simultaneously — they are too large for efficient context use. Each phase section below lists which references to consult.

**Multi-session work:**
- Save all completed copy to markdown files in the project directory
- Name files by page: `copy/homepage.md`, `copy/about.md`, `copy/seo-meta.md`
- Include a `copy/README.md` manifest listing all files, their status (draft/approved/final), and the messaging foundation
- On session resume, read the manifest and all existing files before continuing

## The 7 Phases

### Phase 1: Brief & Discovery

**Goal:** Understand the business, audience, goals, and voice deeply enough to write copy that converts.

**Process:**
1. Ask discovery questions (adapt based on what's already known):
   - What does the business do, in one sentence?
   - Who is the primary audience? Secondary?
   - What is the single most important action a visitor should take?
   - What are the top 3 objections prospects have?
   - What proof points exist? (metrics, testimonials, case studies, credentials)
   - Who are the competitors? (URLs if available)
   - Any existing copy to audit or draw from?
2. If brand guidelines exist, read and summarize the voice/tone/messaging parameters
3. If no brand guidelines, run the lightweight voice definition (see Brand Voice Integration above)
4. Document the brief as a structured summary

**Deliverable:** Copy brief document with: business summary, audience profiles, site goal, proof inventory, voice parameters, competitor notes.

**Gate:** User confirms the brief captures their business and audience accurately.

Refer to `references/brief-and-discovery.md` for detailed methodology.

### Phase 2: Site Architecture

**Goal:** Define what pages the site needs and in what priority order.

**Process:**
1. Identify the site type from the brief (see table below)
2. Recommend a page structure based on the type
3. Prioritize pages: homepage first, then primary conversion pages, then supporting pages
4. Define the user journey: entry → consideration → conversion → confirmation

| Site Type | Recommended Pages |
|---|---|
| Portfolio / personal brand | Home, About, Work, Contact, Blog (optional) |
| Agency / consultancy | Home, About, Services, Work/Case Studies, Blog, Contact |
| SaaS / product | Home, Features, Pricing, About, Blog, Contact, Docs landing |
| E-commerce | Home, Category pages, Product pages, About, FAQ, Contact, Blog |
| Local business / services | Home, Services, About, Testimonials, FAQ, Contact |
| Startup / landing page | Single landing page (hero, features, social proof, pricing, CTA) |
| Blog / content site | Home, Category pages, About, Contact, individual posts |

**Deliverable:** Prioritized page list with one-line description of each page's purpose and primary CTA.

**Gate:** User approves the page structure before any copy is written.

Refer to `references/site-architecture.md` for information architecture patterns and user flow considerations.

### Phase 3: Messaging Foundation

**Goal:** Define what to say before deciding how to say it. This is the most critical creative phase — it determines whether the copy will be generic or differentiated.

**Process:**
1. **Draft the value proposition** using the "Only We" test:
   - Complete this sentence: "Only we [verb] [what] for [whom] by [how]."
   - If a competitor could say the same thing, it's not specific enough. Add differentiators until the statement is uniquely true.
   - Compress the result into one sentence (≤25 words) that answers: "Why should I choose you?"
2. **Identify 3-5 supporting messages** (pillars that prove the value prop):
   - Each pillar should be a distinct reason to believe the value prop
   - Test each pillar: does it support the main claim, or is it an unrelated feature? Cut if unrelated.
3. **Map proof points** to each supporting message (2-3 per pillar):
   - Metrics, testimonials, credentials, case study references
   - If proof is thin, flag it — the user may need to provide more evidence, or the claim should be softened
4. **Build the objection-handling map:** Top 3-5 objections → counter-messages with proof
5. **Write the messaging hierarchy:**
   - **Level 1:** Tagline / one-liner (≤10 words)
   - **Level 2:** Elevator pitch (2-3 sentences)
   - **Level 3:** Full value narrative (one paragraph)
6. **Determine awareness level** using Schwartz's framework (see `references/best-practices.md`): Is the audience Most Aware, Product-Aware, Solution-Aware, Problem-Aware, or Unaware? This determines headline sophistication and copy structure for every page.

**Deliverable:** Messaging foundation document (~300-500 words) with: value proposition, supporting messages with proof points, objection map, audience awareness level, and messaging hierarchy at all three levels.

**Gate:** User confirms the core message is right before it gets distributed across pages. Test: can the user read the value proposition to someone unfamiliar with the business and have them understand what's offered?

Refer to `references/copy-craft.md` for storytelling frameworks and `references/conversion-psychology.md` for persuasion architecture.

### Phase 4: Page-by-Page Drafting

**Goal:** Write copy for every page, starting with the highest-priority pages.

**Process:**
1. For each page, refer to the template in `references/page-templates.md`
2. Open with the page's primary job (what must this page accomplish?)
3. Write section by section, applying the messaging foundation
4. Each section includes: headline, body copy, CTA (where applicable)
5. Apply storytelling frameworks from `references/copy-craft.md` (PAS for problem-aware audiences, AIDA for cold traffic, BAB for aspirational messaging)
6. Weave in proof points at natural integration points
7. Handle objections inline where they naturally arise
8. Present each page for feedback before proceeding to the next

**Drafting order:**
1. Homepage (sets the voice and messaging standard)
2. Primary conversion page (services, pricing, or product — depends on site type)
3. About page (establishes credibility)
4. Remaining pages in priority order from Phase 2

**Deliverable:** One markdown file per page with all section copy.

**Gate:** User approves each page (or marks sections for revision) before proceeding.

Refer to `references/page-templates.md`, `references/copy-craft.md`, `references/conversion-psychology.md`.

### Phase 5: Long-Form Content

**Goal:** Write case studies, blog posts, or other narrative content that requires deeper craft.

**Process:**
1. Identify which long-form content the site needs (case studies, blog posts, articles)
2. For case studies: gather the story elements (client, problem, process, outcome, metrics), then write using narrative frameworks from `references/case-studies.md`
3. For blog posts: determine the article type (how-to, listicle, opinion, tutorial), then write using structures from `references/blog-and-longform.md`
4. Apply SEO targeting for blog content (primary keyword, header structure, internal linking opportunities)
5. Each piece gets its own markdown file

**Deliverable:** Completed long-form content pieces as individual markdown files.

**Gate:** User reviews each piece for accuracy and voice alignment.

Refer to `references/case-studies.md` and `references/blog-and-longform.md`.

### Phase 6: Microcopy & Meta

**Goal:** Write all the small text that holds the site together — navigation, CTAs, form copy, error messages, meta tags.

**Process:**
1. **Navigation:** Write all nav labels (main nav, footer nav, breadcrumbs) — refer to `references/microcopy.md`
2. **CTAs:** Audit every CTA across all pages. Ensure each is specific, action-oriented, and benefit-driven.
3. **Form copy:** Labels, placeholders, helper text, validation errors, success messages — refer to `references/microcopy.md`
4. **Utility pages:** 404, thank-you/confirmation, coming soon (if applicable)
5. **SEO meta content:** Title tags, meta descriptions, OG text, alt text recommendations — refer to `references/seo-copy.md`. **Keyword protocol:** If the user provided target keywords in the brief, use them. If not, ask: "Do you have target keywords for SEO, or should I suggest keywords based on the business and audience?" If suggesting, propose keywords based on the business offering, audience language, and common search intent — but flag that these should be validated with a keyword research tool (Ahrefs, Semrush, etc.) before committing.
6. **Extended microcopy** (if applicable): Cookie banner, announcement bar, exit-intent popup, empty states, email sequences (welcome, nurture), social media captions, video scripts, category/tag descriptions

**Deliverable:** Microcopy document + SEO meta document.

**Gate:** User reviews navigation labels and meta content for accuracy.

### Phase 7: Edit & Polish

**Goal:** Elevate every piece of copy from draft to final through systematic editing.

**Process:** Run the 7-pass editing sequence defined in `references/editing-and-polish.md`:
1. Readability pass (target Grade 6-8 consumer, 8-10 B2B — estimate readability by sentence length and word complexity; suggest the user run final copy through Hemingway Editor for precise scoring)
2. Voice consistency pass
3. Specificity pass (the "could a competitor say this?" test)
4. Banned word elimination (scan against the full lists in `references/anti-patterns.md`)
5. CTA audit
6. Proof point check
7. Rhythm check

**Deliverable:** Final polished copy files with an edit summary noting key changes.

**Gate:** User gives final approval.

Refer to `references/editing-and-polish.md` and `references/anti-patterns.md`.

## Output

The complete deliverable includes:

```
copy/
├── README.md              # Manifest: file list, status, messaging summary
├── brief.md               # Copy brief from Phase 1
├── messaging.md           # Messaging foundation from Phase 3
├── homepage.md            # Page copy files (one per page)
├── about.md
├── services.md
├── [other-pages].md
├── case-studies/          # Long-form content
│   └── [client-name].md
├── blog/
│   └── [post-slug].md
├── microcopy.md           # Navigation, CTAs, form copy, utility pages
└── seo-meta.md            # All meta titles, descriptions, OG text
```

## Production Handoff

This skill writes copy, not code. The output is structured markdown documents. To turn copy into a live site:

1. Use the page copy files as the source of truth for all text content
2. Map markdown sections to page components/sections
3. Use `seo-meta.md` to populate `<title>`, `<meta>`, and OG tags
4. Use `microcopy.md` for navigation, form elements, and utility pages
5. If using a CMS (e.g., Sanity), map copy sections to document fields

When the user asks to "render" or "preview" copy in context, produce a self-contained HTML file that lays out the copy in a basic wireframe format — real words in approximate page structure, not a designed comp.

## Core Principles

1. **Specificity over abstraction.** "We saved 847 restaurants $2.3M in food waste last year" beats "We help businesses reduce waste." Refer to `references/anti-patterns.md` for the specificity test.

2. **Benefits before features.** Lead with what the reader gains. Features are proof, not the pitch. Refer to `references/copy-craft.md`.

3. **One job per page.** Every page has a primary action. All copy on that page should move the reader toward that action. Refer to `references/page-templates.md`.

4. **Proof everything.** Every claim needs evidence — a number, a name, a testimonial, a credential. Unproven claims are noise. Refer to `references/conversion-psychology.md`.

5. **Write for scanners.** Most visitors scan, not read. Front-load value in headlines, use short paragraphs, deploy subheadings as a standalone narrative. Refer to `references/cognitive-principles.md`.

6. **Voice is a system, not a vibe.** Consistent voice comes from specific rules (sentence length, vocabulary, punctuation patterns), not a mood board. Refer to brand guidelines when available.

7. **Cut, then cut again.** First drafts are always too long. Every sentence must earn its place. If removing a sentence doesn't weaken the argument, it was noise.

8. **Write for humans, optimize for search.** SEO copy that reads like keyword soup fails both humans and algorithms. Write naturally, then verify keyword presence. Refer to `references/seo-copy.md`.

9. **Sound human in the AI era.** In 2025+, the internet is flooded with AI-generated content that is competent but indistinguishable. Copy that converts now requires what AI struggles with: first-hand experience, genuine opinion, specific client stories, imperfect honesty ("this isn't for everyone"), and a voice that couldn't belong to anyone else. Refer to `references/anti-patterns.md` for AI-era copy tells to avoid.

## Additional Resources

### Reference Files

| File | Purpose |
|---|---|
| `references/brief-and-discovery.md` | Discovery questions, copy audit methodology, lightweight voice definition |
| `references/site-architecture.md` | Page structures by site type, information architecture, user flows |
| `references/copy-craft.md` | Headline formulas, body copy patterns, storytelling frameworks, power words |
| `references/conversion-psychology.md` | Cialdini principles, social proof, urgency, objection handling, CTA optimization |
| `references/page-templates.md` | Section-by-section copy frameworks for every common page type |
| `references/case-studies.md` | Case study structure, narrative techniques, metric presentation, interview questions |
| `references/blog-and-longform.md` | Article types, blog structures, hooks, SEO-aware writing, content depth |
| `references/microcopy.md` | Nav labels, CTA formulas, form copy, empty states, error messages, cookie banners |
| `references/seo-copy.md` | Meta titles, descriptions, OG text, alt text, header hierarchy, URL slugs |
| `references/editing-and-polish.md` | Revision process, readability targets, voice checks, banned word elimination |
| `references/anti-patterns.md` | AI-copy tells, corporate jargon, weasel words, quality tests |
| `references/cognitive-principles.md` | Reading behavior, decision psychology, cognitive biases, scanning patterns |
| `references/inspiration-bank.md` | Best-in-class copy examples by site type and page type with analysis |
| `references/best-practices.md` | Cited sources, books, tools, style guides, newsletters |
