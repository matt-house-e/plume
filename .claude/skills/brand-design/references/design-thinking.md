# Design Thinking & Intent — Reference Guide

## Purpose

This reference captures the cognitive principles, mental models, and design knowledge that separates intentional design from decoration. These are the things trained designers internalize over years of practice — the invisible layer of "why" behind every decision. When executing the brand design process, apply these principles at every phase.

## The Designer's Mindset

### What World-Class Designers Do Differently

1. **They start with constraints, not freedom.** Constraints create focus. A blank canvas is paralyzing; a brief that says "dark, technical, for senior engineers, no illustration" is liberating. Every constraint eliminates options and moves toward a solution.

2. **They make decisions, not options.** A junior designer presents 10 options and asks "which one?". A senior designer presents 1 recommendation with rationale and says "here's why." When presenting alternatives, they explain the trade-offs, not just the differences.

3. **They design the system, not the page.** A great designer doesn't make a beautiful homepage — they create a visual language that makes every page inevitable. If the system is right, the pages design themselves.

4. **They subtract before adding.** The first instinct should always be "what can I remove?" not "what can I add?". Every element on the page must earn its place. If removing something doesn't hurt, it shouldn't have been there.

5. **They sweat the invisible details.** The spacing between a heading and its paragraph. The easing curve on a hover state. The line-height of a caption. Users can't articulate why a design feels "professional" — it's because these micro-decisions are all correct.

6. **They steal like artists.** Every great design is informed by prior work. The skill is knowing what to reference, what to adapt, and what to make original. Build an extensive reference library and study it actively.

> "Good artists copy; great artists steal." — Often attributed to Picasso
> "Immature poets imitate; mature poets steal." — T.S. Eliot (the actual source)

## Foundational Design Principles

### Dieter Rams: 10 Principles of Good Design

These were written for industrial design but apply directly to web:

1. **Good design is innovative** — Don't default to what everyone else is doing.
2. **Good design makes a product useful** — Aesthetic choices must serve usability.
3. **Good design is aesthetic** — Beauty matters. It's not decoration — it's communication.
4. **Good design makes a product understandable** — The interface should be self-explanatory.
5. **Good design is unobtrusive** — Design should not dominate; it should enable.
6. **Good design is honest** — Don't make something appear more capable than it is.
7. **Good design is long-lasting** — Avoid trends that will date quickly.
8. **Good design is thorough down to the last detail** — Nothing is arbitrary.
9. **Good design is environmentally friendly** — In web: performant, efficient, respectful of resources.
10. **Good design is as little design as possible** — Concentrate on the essential.

> Source: Vitsoe — vitsoe.com/us/about/good-design

### Gestalt Principles (How Humans Perceive Visual Groups)

These are hardwired into human perception. Violating them creates confusion; using them intentionally creates clarity.

**Proximity:** Elements close together are perceived as a group.
- **Application:** Space related elements tightly (8-16px), separate unrelated groups widely (32-64px). The ratio between inner and outer spacing is what creates visual grouping — not lines or boxes.

**Similarity:** Elements that look alike are perceived as related.
- **Application:** Use consistent styling (color, size, shape) for elements of the same type. All navigation items should look the same. All section headings should look the same.

**Continuity:** The eye follows smooth paths and lines.
- **Application:** Align elements along consistent axes. The fewer alignment lines on a page, the calmer and more professional it feels.

**Closure:** The brain completes incomplete shapes.
- **Application:** You don't need to draw every border. A partial frame, an implied grid line, or a cropped image lets the viewer's brain fill in the rest — creating elegance.

**Figure/Ground:** The brain separates foreground from background.
- **Application:** Ensure clear visual layers. Text should clearly "sit on top of" its background. Use contrast, shadows, or whitespace to establish the layer hierarchy.

**Common Region:** Elements within a shared boundary are perceived as grouped.
- **Application:** Cards, panels, and containers create visual groups. But use them sparingly — too many boxes create visual noise. Sometimes proximity alone is enough.

### C.R.A.P. Principles (Robin Williams, "The Non-Designer's Design Book")

Four principles that solve 80% of layout problems:

**Contrast:** If two elements are different, make them VERY different. Don't use font-size 16 and 18 — use 16 and 28. Timid contrast creates confusion; bold contrast creates hierarchy.

**Repetition:** Repeat visual elements throughout the design. Same heading style, same card pattern, same button style. Repetition creates unity and predictability.

**Alignment:** Every element should be visually connected to something else on the page. Nothing should be placed arbitrarily. Align to a grid, to other elements, or to an invisible axis.

**Proximity:** Group related items together. Move unrelated items apart. This is the single most powerful organizing principle.

### The Von Restorff Effect (Isolation Effect)

The element that is visually different from its surroundings is the one that gets remembered. This is why:
- CTAs should be a different color from everything else
- The most important number in a stats row should be larger
- Breaking the grid intentionally for one element creates emphasis

### Hick's Law

Decision time increases logarithmically with the number of choices. Applied to web design:
- Limit navigation to 5-7 items
- Present one primary CTA per section, not three
- Use progressive disclosure — show essential info first, details on demand

### Fitts's Law

The time to reach a target depends on distance and target size. Applied to web:
- Make clickable areas generous (minimum 44×44px touch target)
- Place primary CTAs in easy-to-reach positions
- Edge-anchored elements (full-width buttons, sticky navs) are faster to target

### Miller's Law

People can hold ~7 (±2) items in working memory. Applied to web:
- Chunk information into groups of 3-5 items
- Don't show more than 7 navigation items
- Break long forms into steps

## Design Intent Framework

Every design decision should answer three questions:

### 1. What is the user trying to do?
The design should serve the user's goal, not the designer's ego. On a portfolio site, the user wants to:
- Understand what this person does (within 5 seconds)
- See evidence of competence (projects, metrics, process)
- Decide whether to get in touch (and find an easy way to do so)

### 2. What should the user feel?
The emotional response is designed, not accidental. Map feelings to design choices:
- "This person is competent" → Clean layout, precise spacing, polished details
- "This person is creative" → Unexpected visual choices, bold typography, distinctive color
- "I can trust this person" → Consistent system, professional tone, real metrics
- "I want to work with them" → Warmth in voice, easy contact, human touch

### 3. What is the hierarchy of importance?
Not everything can be loud. Rank every element:
1. **Primary:** The one thing that must be seen (e.g., headline value proposition)
2. **Secondary:** Supporting context (e.g., project thumbnails, subheadline)
3. **Tertiary:** Available but not prominent (e.g., navigation, footer links)
4. **Ambient:** Felt but not consciously noticed (e.g., background texture, spacing rhythm)

## Cognitive Load & Simplicity

### Types of Cognitive Load

**Intrinsic load:** The inherent complexity of the content. Can't be reduced — the subject is what it is.

**Extraneous load:** Complexity added by poor design. This is what designers eliminate. Every confusing layout, inconsistent pattern, or unclear label adds extraneous load.

**Germane load:** Effort spent building mental models. Good design facilitates this — consistent patterns help users learn the system.

**Design implication:** Minimize extraneous load ruthlessly. Consistent patterns, clear hierarchy, and predictable navigation reduce the effort of using the site so the user can focus on the content.

### The 5-Second Test

Show someone the homepage for exactly 5 seconds, then take it away. Ask:
- What does this person/company do?
- What was the overall feeling?
- What do you remember?

If they can't answer the first question, the hierarchy is wrong. This is the single most important usability test for a brand.

## Progressive Disclosure

Show only what's needed at each level of engagement:

```
Level 1 (Scanning):    Headline + visual impression (0-5 seconds)
Level 2 (Browsing):    Section headers + key visuals (5-30 seconds)
Level 3 (Reading):     Body text + detail content (30+ seconds)
Level 4 (Deep dive):   Case studies, blog posts, technical detail
```

Design the visual hierarchy to serve all four levels simultaneously. The scanner should get value without reading. The deep diver should find richness when they look closer.

## Emotional Design (Don Norman's Three Levels)

### Visceral Level
The immediate, gut reaction to visual appearance. Before any conscious thought:
- Is it beautiful?
- Does it feel trustworthy?
- Is the craft evident?

**Design lever:** Color, typography, imagery, whitespace, polish.

### Behavioral Level
The experience of using the interface:
- Is it easy to navigate?
- Do things work as expected?
- Is it responsive and performant?

**Design lever:** Layout, interaction design, loading speed, clear affordances.

### Reflective Level
The story the user tells themselves about the experience:
- "This person really knows what they're doing"
- "This was one of the best portfolio sites I've seen"
- "I should bookmark this / share this"

**Design lever:** Unique details, personality, memorable moments, overall coherence.

**Great design operates on all three levels simultaneously.** A site that's beautiful but confusing fails at the behavioral level. A site that's usable but generic fails at the visceral and reflective levels.

## The Taste Gap

> "Nobody tells this to people who are beginners. All of us who do creative work, we get into it because we have good taste. But there is this gap. For the first couple years you make stuff, it's just not that good... your taste is still killer. And your taste is why your work disappoints you." — Ira Glass

**Applied to AI-assisted design:** Claude has knowledge of design principles and can generate technically correct systems. But closing the taste gap requires:
- **Studying great work extensively** (see inspiration bank)
- **Making opinionated choices** (not safe, middle-of-the-road ones)
- **Iterating based on visual judgment** (render, look, adjust, repeat)
- **Knowing when to break rules** (every principle has exceptions)

## Sources & Further Reading

- **Dieter Rams: 10 Principles** — vitsoe.com/us/about/good-design
- **Don Norman, "The Design of Everyday Things"** — Affordances, signifiers, cognitive load
- **"Refactoring UI" (Wathan & Schoger)** — The most practical bridge from developer to designer thinking
- **Robin Williams, "The Non-Designer's Design Book"** — C.R.A.P. principles, accessible to non-designers
- **Laws of UX** — lawsofux.com — Interactive collection of UX principles with explanations
- **Nielsen Norman Group** — nngroup.com — Research-backed UX principles and guidelines
- **"Thinking, Fast and Slow" (Daniel Kahneman)** — The cognitive science behind System 1/System 2 thinking that governs user behavior
- **Ira Glass on "The Gap"** — Widely shared video/transcript on creative taste development
- **"Steal Like an Artist" (Austin Kleon)** — On creative influence and finding your voice through reference
- **Gestalt Principles of Visual Perception** — interaction-design.org/literature/topics/gestalt-principles
