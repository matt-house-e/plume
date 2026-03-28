---
name: Brand Design
description: This skill should be used when the user asks to "design a brand", "create brand identity", "build a design system", "define visual identity", "create brand guidelines", "design a website from scratch", "moodboard", or needs to go from zero brand to finished website design. Orchestrates the full brand design pipeline from discovery through to coded design system.
---

# Brand Design System

A comprehensive, phased workflow for designing a complete brand identity and website — from blank canvas to production-ready design system. This skill distills professional brand design practice into an AI-executable pipeline.

## How This Skill Works

This skill orchestrates a multi-phase brand design process. Each phase produces concrete deliverables that feed the next. The process is collaborative — the user makes creative decisions at key gates, while Claude handles research, generation, and systematic application.

**The user provides:** A project brief (even a rough one), their role/audience, and creative preferences.
**Claude produces:** A complete brand identity system with all tokens, guidelines, and rationale needed to build a website.

### Fast-Track Mode

If the user already has partial brand elements (colors, fonts, a logo, existing site), skip or compress phases accordingly:
- **Has brand attributes but no visuals:** Skip Phase 1, start at Phase 2 (Moodboarding)
- **Has a moodboard direction:** Skip Phases 1-2, start at Phase 3 (Visual Identity)
- **Has a design system, needs refinement:** Jump to the relevant sub-phase
- **Has everything, needs full-fidelity pages:** Skip to Phase 7 (Application)

Read the project's existing code, CLAUDE.md, and CSS to understand what's already established before starting.

### Rendering Protocol

When this skill says "render" it means: **write a self-contained HTML file** that the user can open in a browser. Every moodboard, wireframe, and mockup should be a real file at a project path (e.g., `src/pages/moodboard/direction-a.html`). Use inline CSS and Google Fonts `<link>` tags for zero dependencies. Target 1200px viewport. The user should never need to imagine what a design looks like — they should see it.

### Anti-Pattern Checkpoints

At every gate, before presenting to the user, systematically review the rendered HTML against the checks in `references/anti-patterns.md`:
- Review all typography for hierarchy problems (insufficient contrast between heading levels?)
- Review color usage against anti-pattern tables (pure black on white? too many accent colors?)
- Review spacing for mechanical uniformity (is every section identical?)
- Compare against 2-3 inspiration bank references (does it hold up?)
- Check: can a user articulate "why" for every visible element?

### User Feedback Protocol

At every gate, explicitly instruct the user:
1. "Open this file in your browser: `[path]`"
2. Ask specific questions: "Does this feel [brand attribute]? What would you change?"
3. If feedback is vague ("I don't like it"), probe: "Is it the colors, the typography, the layout, or the overall mood that's off?"

### Handling Iteration & Backtracking

- **"I don't like any of these"** → Ask what's missing. Generate 2 more directions incorporating the feedback. Don't start from zero — refine.
- **"Go back to Phase X"** → Valid. Re-enter that phase with current context intact. Don't discard downstream work unnecessarily.
- **"Change just this one thing"** → Make the targeted change and propagate to dependent elements (e.g., changing the primary color means updating all surfaces, dark mode, and rendered pages).
- **Partial approvals** → "I like the type but not the color" is a valid gate response. Lock the approved element and iterate the rejected one.

### Context Management

This skill produces significant output across 7 phases. For practical use:
- **Work one phase per conversation** if context gets tight. Save the Brand Design System document as a file between sessions.
- **Read only the reference file for the current phase**, not all 16 at once.
- **The token export file** (`references/token-export.md`) and the Brand Design System document serve as the handoff artifacts — they carry all decisions forward without needing full conversation context.

## The Seven Phases

Execute phases in order. Each phase has a **gate** — a decision point where the user reviews options and selects a direction before proceeding.

---

### Phase 1: Discovery & Positioning

**Goal:** Understand the project deeply enough to make informed creative decisions.

**Process:**
1. Gather inputs from the user (or infer from project context):
   - What does the brand/person/product do?
   - Who is the audience? What do they value?
   - What is the competitive landscape? Who are the peers and aspirational references?
   - What feeling should someone have after visiting the site?
   - Any existing brand elements to preserve or explicitly reject?
2. Run a competitive audit — research 5-8 comparable sites/brands
3. Identify the positioning gap — where this brand can stand apart
4. Define 3-5 brand attributes (adjectives that describe the brand personality)

**Deliverable:** Brand Brief document containing:
- Purpose statement (1 sentence)
- Audience profile
- Competitive positioning map
- Brand attributes (e.g., "precise, warm, forward-thinking, grounded, craft-oriented")
- Anti-attributes (what the brand is NOT — e.g., "not corporate, not playful, not flashy")

**Gate:** User confirms the brand attributes and positioning before visual work begins.

Refer to `references/discovery-phase.md` for detailed discovery frameworks and questioning techniques.

---

### Phase 2: Moodboarding & Art Direction

**Goal:** Translate brand attributes into a visual direction through rendered explorations.

**Process:**
1. For each brand attribute set, generate 2-3 distinct moodboard directions, each with a clear conceptual label (e.g., "Swiss Precision", "Warm Brutalism", "Digital Naturalism")
2. Each moodboard direction should be rendered as an actual HTML page (not described in text) showing:
   - Color palette (swatches with hex values)
   - Typography samples (headings, body, captions in proposed typefaces)
   - Layout feel (a rough hero section or card arrangement)
   - Texture/pattern direction (gradients, grain, geometric, organic)
   - Motion personality (described: "slow fades" vs "snappy springs" vs "no motion")
   - Reference images or descriptions of photographic/illustration style
3. Present 2-3 moodboard pages side by side for the user to react to

**Deliverable:** 2-3 rendered moodboard HTML pages, each representing a distinct art direction.

**Gate:** User selects a direction (or mixes elements from multiple). This sets the creative foundation for all subsequent phases.

Refer to `references/moodboarding.md` for moodboard construction techniques and art direction principles.

---

### Phase 3: Visual Identity System

**Goal:** Define every element of the visual language with precision and rationale.

Execute each sub-system in order. For detailed best practices on each, refer to the corresponding reference file.

#### 3A. Color System
Refer to `references/color-system.md` and `references/accessibility.md` for contrast requirements.

Define a complete color architecture:
- **Brand colors** (1-2 primary, 1-2 accent) with emotional rationale
- **Neutral scale** (8-12 steps from near-white to near-black, tinted with brand hue)
- **Semantic colors** (success, warning, error, info)
- **Surface system** (background, surface, surface-elevated, overlay)
- **Dark mode mapping** (every color must have a dark mode counterpart — desaturate 10-20%)
- All colors specified as HSL with CSS custom properties
- WCAG AA contrast ratios verified for every text/background combination
- Follow the 60-30-10 rule: 60% neutrals, 30% secondary, 10% accent

#### 3B. Typography System
Refer to `references/typography-system.md`

Define the complete type system:
- **Typeface selection** (display, body, mono — with personality rationale)
- **Type scale** (using a modular scale ratio — e.g., 1.25 major third)
- **Responsive type** (fluid sizing with clamp() or step-based breakpoints)
- **Hierarchy** (H1-H6, body, small, caption, label, overline — with weight, size, line-height, letter-spacing)
- **Pairing rules** (which faces pair with which, and where each is used)
- Font loading strategy (variable fonts, font-display: swap, fallback stack)

#### 3C. Imagery & Visual Elements
Refer to `references/imagery-system.md`

Define the visual content language:
- **Photography direction** (subjects, mood, lighting, color treatment, cropping)
- **Illustration style** (if applicable — line weight, color usage, level of abstraction)
- **Iconography** (style: outlined/filled/duotone, size grid, stroke width)
- **Graphic devices** (patterns, textures, gradients, shapes, dividers)
- **Data visualization** (chart styling aligned with brand)
- **OG images and favicons** (template approach)

#### 3D. Wordmark & Brand Mark
Define text-based brand marks (Claude can generate CSS/SVG text marks, not vector logo design):
- **Wordmark** (styled text in the brand typeface — the primary mark for most personal brands)
- **Monogram/initials** (1-2 letter mark in CSS/SVG for favicons and compact uses)
- **Typographic treatment** (letter-spacing, weight, case, optional ligature or custom detail)
- Clear space rules and minimum sizes
- Color variations (full color, mono, reversed)
- Export as SVG for scalability

**Note:** If the user needs a complex illustrated logo or icon mark, recommend a dedicated design tool (Figma, Illustrator) or designer. Focus here on what can be systematically defined and rendered as code.

**Deliverable:** Visual Identity Specification — a structured document with every design token, example, and rationale.

**Gate:** User approves the visual identity system before it gets applied to layouts.

---

### Phase 4: Voice, Tone & Verbal Identity

**Goal:** Define how the brand speaks and writes.

Refer to `references/voice-and-tone.md`

**Process:**
1. Define 3-4 voice attributes on spectrums (e.g., "casual ←→ formal", "playful ←→ serious")
2. Show how tone shifts by context (homepage hero vs error message vs blog post)
3. Create do/don't writing examples for each attribute
4. Define microcopy patterns (CTAs, navigation labels, empty states, form labels)
5. Establish messaging hierarchy (primary value prop → supporting messages → proof points)

**Deliverable:** Voice & Tone Guide with:
- Voice attribute spectrums with markers
- Tone variation matrix (context × attribute)
- Do/don't writing examples
- Microcopy pattern library
- Terminology guide (preferred terms, banned terms)

**Gate:** User confirms the voice feels right before it's applied to page copy frameworks.

---

### Phase 5: Layout, Spacing & Composition

**Goal:** Define the spatial system that governs all page layouts.

Refer to `references/layout-system.md`

**Process:**
1. Define the spatial scale (base unit, scale multipliers — e.g., 4px base with 4/8/12/16/24/32/48/64/96/128)
2. Establish the grid system (column count, gutter width, max content width, breakpoints)
3. Define component spacing patterns (section padding, card padding, element gaps)
4. Set responsive breakpoints with layout shift behaviors
5. Define compositional principles (alignment, rhythm, density, white space philosophy)
6. Create a page template system (hero patterns, section layouts, card grids)
7. Define core component patterns (buttons, cards, navigation, forms) — refer to `references/component-patterns.md`

**Deliverable:** Layout Specification with:
- Spacing scale (as design tokens)
- Grid definition
- Breakpoint map
- Page template wireframes (rendered as simple HTML)
- Component spacing tokens

**Gate:** User reviews page template wireframes before full-fidelity mockups.

---

### Phase 6: Motion & Interaction Design

**Goal:** Define how things move and respond to interaction.

Refer to `references/motion-system.md`

**Process:**
1. Define the motion personality (maps to brand attributes — e.g., "precise" = crisp easing, short durations)
2. Establish duration scale (instant/fast/normal/slow/deliberate — in ms)
3. Define easing curves (standard, entrance, exit, emphasis)
4. Catalog interaction patterns:
   - Page transitions (route changes)
   - Scroll-triggered reveals (intersection observer patterns)
   - Hover/focus states
   - Loading states (skeleton screens, shimmer)
   - Micro-interactions (button press, toggle, expand/collapse)
5. Set performance boundaries (prefer CSS transitions, use JS animation only for orchestration)
6. Define reduced-motion fallbacks (respect `prefers-reduced-motion`)

**Deliverable:** Motion Specification with:
- Duration tokens
- Easing curve definitions (cubic-bezier values)
- Interaction pattern catalog with examples
- Reduced-motion strategy
- Performance guidelines

**Gate:** User reviews key animation examples (can be shown as rendered components) before finalizing.

---

### Phase 7: Full-Fidelity Application

**Goal:** Render 2-3 complete pages at full visual fidelity, applying every token and guideline from Phases 1-6.

**Process:**
1. Select 2-3 key pages to render (typically: homepage, a case study/project page, and one other — about or contact)
2. For each page, build a complete self-contained HTML file applying:
   - All color tokens (backgrounds, text colors, accents, borders)
   - Full typography hierarchy (display type, headings, body, captions, labels)
   - The spacing and layout system (grid, section padding, component spacing)
   - Imagery approach (icons, patterns, textures, graphic devices)
   - Voice and tone (real or near-real copy, not lorem ipsum)
   - Motion personality (CSS transitions for hover states, scroll reveals with IntersectionObserver)
   - Dark mode support (via `prefers-color-scheme` media query)
   - Reduced motion support (via `prefers-reduced-motion` media query)
   - Responsive behavior (at least mobile and desktop breakpoints)
3. Run the anti-pattern checklist and taste tests on every rendered page
4. Present pages to the user for feedback

**Deliverable:** 2-3 full-fidelity HTML pages that represent the final intended look and feel.

**Gate:** User approves the visual direction. These pages become the reference for production implementation — the development team (or Claude in a coding session) uses them as the visual source of truth.

---

## Output: The Brand Design System Document

After all seven phases, compile the complete Brand Design System — a single structured document containing:

1. **Brand Brief** (from Phase 1)
2. **Art Direction** (selected moodboard direction + rationale, from Phase 2)
3. **Visual Identity** (color, type, imagery, symbols — from Phase 3)
4. **Voice & Tone** (from Phase 4)
5. **Layout & Spacing** (from Phase 5)
6. **Motion & Interaction** (from Phase 6)
7. **Design Token Export** (all values as CSS custom properties / Tailwind v4 @theme tokens — see `references/token-export.md` for complete template)
8. **Full-Fidelity Pages** (2-3 rendered HTML pages from Phase 7)

This document becomes the source of truth for all subsequent development work.

## Production Handoff

The skill outputs design artifacts (HTML mockups, token specifications). Translating these to production code requires:

1. **Design tokens → Tailwind v4 @theme block** — Copy all CSS custom properties from the token export into the project's `src/styles/global.css` `@theme {}` block. Match existing naming conventions (the project may already use names like `background`, `surface`, `accent` — preserve those).

2. **HTML mockups → Astro components** — The full-fidelity HTML pages from Phase 7 are reference implementations, not production code. Extract repeated patterns into `.astro` components (Header, Footer, Hero, Card, etc.). Move inline CSS to Tailwind utility classes.

3. **Fonts → Self-hosted WOFF2** — Download fonts used in moodboards from Google Fonts as WOFF2 files. Place in `public/fonts/`. Replace CDN `<link>` tags with local `@font-face` declarations. Add preload hints.

4. **Motion → CSS transitions + View Transitions** — Translate motion specifications into CSS transitions on Astro components. Use Astro's built-in View Transitions API for page transitions. Add React islands with `motion` library only where spring physics are needed.

5. **Content → MDX in content collections** — Transfer case study content into MDX files in `src/content/projects/`. Match the content collection schema.

6. **Images → Astro `<Image>` component** — Replace placeholder images with real assets processed through Astro's image optimization pipeline.

The design artifacts (moodboard HTML files, mockup pages) should live in a dedicated directory (e.g., `src/pages/moodboard/`) and can be excluded from the production build or deleted after development is complete.

## Core Principles

Apply these at every phase. For the full design thinking framework (Gestalt laws, Dieter Rams principles, cognitive load, emotional design), refer to `references/design-thinking.md`. For what to avoid, refer to `references/anti-patterns.md`.

**Design mindset:**
- Design the system, not the page. If the system is right, the pages design themselves.
- Subtract before adding. Every element must earn its place.
- Steal like an artist. Study the inspiration bank (`references/inspiration-bank.md`) extensively.

**Workflow:**
- **Show, don't describe.** Render actual HTML/CSS at every phase. The user should see and react to visuals.
- **Decisions over options.** Lead with a recommended direction and rationale. Present alternatives, but have a point of view.
- **Rationale is required.** Every choice must trace back to brand attributes or user needs.
- **Accessibility is non-negotiable.** WCAG AA minimum. Built in from the start. See `references/accessibility.md`.
- **Iterate visually.** Render, look, adjust, repeat. Never finalize based on token values alone.

## Additional Resources

### Reference Files

For detailed best practices and methodologies on each phase, consult:

- **`references/discovery-phase.md`** — Discovery frameworks, competitive audit methodology, brand attribute exercises
- **`references/moodboarding.md`** — Art direction techniques, moodboard construction, style exploration methods
- **`references/color-system.md`** — Color theory, palette construction, dark mode, accessibility, design tokens
- **`references/typography-system.md`** — Type selection, scales, hierarchy, pairing, web font strategy
- **`references/imagery-system.md`** — Photography direction, illustration, iconography, graphic devices
- **`references/voice-and-tone.md`** — Brand voice definition, tone variation, microcopy patterns, UX writing
- **`references/layout-system.md`** — Grid systems, spacing scales, responsive strategy, composition
- **`references/motion-system.md`** — Animation principles, duration/easing tokens, interaction patterns, performance
- **`references/design-thinking.md`** — Core design principles, Gestalt laws, cognitive load, emotional design, the designer's mindset
- **`references/inspiration-bank.md`** — Curated gallery of world-class sites, animation libraries, signature techniques, aesthetic lanes
- **`references/component-patterns.md`** — Buttons, cards, navigation, forms, heroes, social proof — states, sizing, spacing
- **`references/accessibility.md`** — WCAG compliance, contrast, keyboard, focus, motion, touch targets, semantic HTML
- **`references/anti-patterns.md`** — Common design mistakes, "AI slop" tells, the taste tests, what NOT to do
- **`references/token-export.md`** — Complete CSS/Tailwind v4 token template, naming conventions, dark mode, reduced motion
- **`references/performance.md`** — Core Web Vitals, font loading, image optimization, performance budgets, SEO
- **`references/best-practices.md`** — Cited sources, further reading, industry-standard references
