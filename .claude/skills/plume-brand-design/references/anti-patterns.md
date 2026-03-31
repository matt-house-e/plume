# Anti-Patterns & Common Mistakes — Reference Guide

## Purpose

This reference catalogs the most common design failures — the things that make a site look "AI-generated", amateur, or generic. Avoiding these is as important as following best practices. A design that avoids all anti-patterns is already better than 80% of the web.

## The "AI Slop" Problem

AI-generated designs converge on a recognizable aesthetic. Avoiding this requires deliberate, opinionated choices.

### Visual Tells of AI-Generated Design

| Tell | Why It Happens | Fix |
|------|---------------|-----|
| **Purple-to-blue gradient on white** | Default "tech" palette, safe choice | Pick a distinctive primary color. Study the competitive landscape and go where they aren't. |
| **Inter, Roboto, or system fonts** | Default, "safe" choices | Choose a typeface with personality. Even Google Fonts has hundreds of distinctive options. |
| **Space Grotesk everywhere** | It's the first "interesting" font AI reaches for | Browse Typewolf or Google Fonts filtered by style. Pick something that matches the brand, not the trend. |
| **Generic hero with gradient blob** | Decoration instead of design intent | Every visual element should serve the brand attributes. Ask "why this shape?" |
| **Uniform card grids** | Path of least resistance layout | Vary card sizes, use asymmetric grids, create visual rhythm |
| **"Welcome to my portfolio"** | Generic, says nothing | Lead with what you do and for whom. No welcomes, no introductions. |
| **Overuse of blur/glow effects** | Easy to generate, hard to critique | Use blur purposefully (1-2 spots max). Not everything needs a glow. |
| **Every section has the same padding** | Mechanical, unthinking spacing | Vary section weight. Hero gets more space. Dense sections get less. Rhythm > uniformity. |
| **Perfectly centered everything** | Centering is safe but boring | Mix alignment. Left-align body text. Use asymmetry for visual interest. |
| **Cookie-cutter component library look** | Looks like shadcn/ui out of the box | Customize extensively. Change radii, shadows, colors, spacing. Make it unrecognizable as a library. |

### Anti-Pattern Categories

#### 1. Typography Anti-Patterns

| Anti-Pattern | Why It's Wrong | Better Approach |
|-------------|---------------|-----------------|
| Using 1 font weight for everything | Creates flat, undifferentiated hierarchy | Use at least 3 weights (400, 500/600, 700) for clear hierarchy |
| Body text below 16px | Accessibility violation, readability issue | 16px minimum for body, 14px minimum for secondary text |
| Identical line-height everywhere | Headlines look loose, body looks tight | Headlines: 1.1-1.25, Body: 1.5-1.7, adjust per size |
| No letter-spacing variation | Large text looks too loose, small text too tight | Negative tracking for headlines, positive for small/uppercase text |
| Too many typefaces (4+) | Visual chaos, no system | Maximum 3 typefaces (display, body, mono) |
| Justified text on the web | Creates uneven word spacing, readability issue | Use left-aligned text. Always. |
| All caps without increased tracking | Letters collide, hard to read | Add 0.05-0.1em letter-spacing to any uppercase text |

#### 2. Color Anti-Patterns

| Anti-Pattern | Why It's Wrong | Better Approach |
|-------------|---------------|-----------------|
| Pure black (#000) on pure white (#FFF) | Harsh contrast, causes eye strain | Use near-black (e.g., #1a1a1a) on near-white (e.g., #fafafa) |
| Too many accent colors | Confused hierarchy, carnival feel | 1 primary, 1 accent. That's usually enough. |
| Pure gray neutrals | Feels sterile, lifeless | Tint neutrals with the primary hue for warmth |
| Same saturation for all colors | Flat, no depth | Vary saturation: vivid for accents, muted for backgrounds |
| Ignoring dark mode contrast | Colors that work on white fail on dark backgrounds | Test every color pair in both modes |
| Color as the only differentiator | Excludes color-blind users | Supplement color with icons, labels, or patterns |
| Neon on dark background | Causes eye strain, looks garish | Desaturate slightly for dark mode. WCAG compliance is the test. |

#### 3. Layout Anti-Patterns

| Anti-Pattern | Why It's Wrong | Better Approach |
|-------------|---------------|-----------------|
| Everything in a box/card | Visual noise, over-containment | Use whitespace for grouping (Gestalt proximity). Cards only where elevation is meaningful. |
| Zero whitespace between sections | Suffocating, no rhythm | Generous section spacing (64-128px desktop). Let the design breathe. |
| Content touching container edges | Feels cramped | Maintain consistent margins and padding. Never zero. |
| Full-width text on large screens | Lines too long, unreadable (100+ chars/line) | Max prose width of 65ch (~680px). Always. |
| Identical spacing for everything | Mechanical, no hierarchy | Space within groups < space between groups < space between sections |
| Single-column everything | Wastes screen space, monotonous | Use multi-column for content that benefits (cards, features, stats) |
| Grid with no rhythm | Every row is the same height, predictable | Vary grid item sizes, create visual interest points |

#### 4. Motion Anti-Patterns

| Anti-Pattern | Why It's Wrong | Better Approach |
|-------------|---------------|-----------------|
| Everything animates at once | Overwhelming, no focus | Stagger animations. Lead with the most important element. |
| Animations over 1 second | Feels sluggish, blocks the user | 200-400ms for most transitions. 600ms max for dramatic reveals. |
| Scroll-jacking (hijacking scroll) | Disorienting, accessibility nightmare | Use scroll-triggered animations, not scroll-locked ones |
| Decorative-only animation | Motion without purpose wastes attention budget | Every animation should either provide feedback, reveal content, or orient the user |
| No reduced-motion support | Accessibility violation, can trigger vestibular disorders | Always implement `prefers-reduced-motion` fallbacks |
| Bouncy springs everywhere | Becomes cartoonish quickly | Reserve spring physics for 1-2 signature interactions. The rest should be standard easing. |
| Animations that repeat on scroll-back | Distracting on repeated scroll | Trigger once only (use IntersectionObserver with `once` option) |
| Entrance animations that delay content | User waits to read the content | Content should be visible within 200-400ms of entering viewport |

#### 5. Content Anti-Patterns

| Anti-Pattern | Why It's Wrong | Better Approach |
|-------------|---------------|-----------------|
| "Welcome to my website" | Says nothing, wastes prime real estate | Lead with what you do: "I build AI systems that work." |
| Lorem ipsum in production | Signals unfinished work | Always use real or realistic placeholder content |
| "Click here" or "Learn more" | Vague, inaccessible | Use specific CTAs: "See the case study", "View my work" |
| Walls of text | Nobody reads them on the web | Short paragraphs (2-3 sentences), bullet lists, bold key phrases |
| Generic stock photos | Signals "I didn't care enough to choose carefully" | Use real photos, high-quality illustrations, or no imagery at all |
| Tech buzzword salad | "Leveraging cutting-edge AI solutions" = empty | Be specific: what you built, for whom, with what result |

#### 6. Component Anti-Patterns

| Anti-Pattern | Why It's Wrong | Better Approach |
|-------------|---------------|-----------------|
| Buttons with no hover state | Feels dead, no feedback | Every interactive element needs a clear hover/focus/active state |
| Inconsistent border radius | Some elements rounded, some sharp = messy | Pick ONE radius philosophy and apply consistently (all sharp, all 4px, all 8px, all fully rounded) |
| Shadows that don't match | Mixed shadow directions or intensities | Define 2-3 shadow levels as tokens. Use consistently. |
| Links indistinguishable from text | Accessibility violation | Links must be visually distinct (color + underline, or color with hover underline) |
| Form inputs with no focus style | Can't tell what's selected | Clear, visible focus ring or border change |
| Invisible scrollbars | User doesn't know content is scrollable | Either show scrollbars or provide clear visual cues (gradient fade, scroll indicator) |

## The Taste Test

After completing any design phase, run these checks:

### The Squint Test
Squint at the page until you can't read text. Can you still see 3 distinct levels of visual hierarchy? If everything blurs into the same weight, the hierarchy needs work.

### The Comparison Test
Open the design next to 3 sites from the inspiration bank. Does it feel like it belongs in that company? If it feels amateur by comparison, identify the specific gaps (spacing? type? color depth?).

### The "Why" Test
Point to any element and ask "why is this here? why this color? why this size?" If the answer is "I don't know" or "it's the default", the design isn't intentional enough.

### The Remove Test
Try removing each decorative element one at a time. If the design is better without it, it shouldn't have been there. Only keep what actively contributes.

### The Context Test
Does this design serve its audience and purpose, or does it just look nice in isolation? A portfolio for senior engineering leaders needs different signals than one for creative agencies.

## Sources

- **"Refactoring UI" (Wathan & Schoger)** — The entire book is essentially a catalog of design anti-patterns and their fixes. refactoringui.com.
- **Nielsen Norman Group** — nngroup.com — Research-backed identification of UX anti-patterns.
- **"Don't Make Me Think" (Steve Krug)** — Usability anti-patterns and heuristics.
- **A11y Project Checklist** — a11yproject.com/checklist — Accessibility anti-patterns.
