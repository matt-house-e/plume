# Layout, Spacing & Composition — Reference Guide

## Purpose

Layout is the invisible architecture of a design. It determines reading order, visual hierarchy, rhythm, and breathing room. A systematic approach to spacing and grid ensures every page feels intentional and every component sits in its right place — without requiring per-page design decisions.

## Spacing Scale

### The 4px/8px Base Unit System

All spacing derives from a base unit. The industry standard is 4px (with 8px as the practical minimum for most spacing). This creates a predictable rhythm and prevents "eyeballing."

**Recommended spacing scale:**

| Token | Value | Use Case |
|-------|-------|----------|
| `space-0` | 0px | Reset, collapse |
| `space-0.5` | 2px | Hairline gaps, borders |
| `space-1` | 4px | Tight inline gaps, icon padding |
| `space-2` | 8px | Compact element spacing, small padding |
| `space-3` | 12px | Default gap between related elements |
| `space-4` | 16px | Standard padding, paragraph spacing |
| `space-5` | 20px | Medium component padding |
| `space-6` | 24px | Card padding, larger gaps |
| `space-8` | 32px | Section sub-spacing |
| `space-10` | 40px | Component separation |
| `space-12` | 48px | Major section padding (mobile) |
| `space-16` | 64px | Section padding (tablet) |
| `space-20` | 80px | Section padding (desktop) |
| `space-24` | 96px | Large section padding |
| `space-32` | 128px | Hero/major section spacing |
| `space-40` | 160px | Maximum breathing room |

**Rule:** Use smaller values within components and larger values between components and sections. The hierarchy should be:

```
Within element < Between related elements < Between components < Between sections
    4-8px              12-16px                    24-48px            64-160px
```

### Fluid Spacing

Like fluid typography, spacing can scale with viewport. Use CSS `clamp()`:

```css
/* Section padding: 48px at 375px → 128px at 1440px */
--section-padding: clamp(3rem, 1.5rem + 4.5vw, 8rem);
```

**Tool:** utopia.fyi provides fluid space scale generators paired with fluid type.

## Grid System

### Column Grid

**Standard approach:**
- 12-column grid (divides evenly into 2, 3, 4, 6 — maximum flexibility)
- 16-column for complex data-heavy layouts
- 4-column on mobile, 8 on tablet, 12 on desktop

**Key dimensions:**

| Parameter | Mobile (375px) | Tablet (768px) | Desktop (1280px) | Wide (1440px+) |
|-----------|---------------|----------------|------------------|----------------|
| Columns | 4 | 8 | 12 | 12 |
| Gutter | 16px | 24px | 24px-32px | 32px |
| Margin | 16px-20px | 32px-40px | 40px-80px | Auto (centered) |
| Max width | 100% | 100% | 1200px-1280px | 1200px-1440px |

### Content Width

Define maximum widths for different content types:

| Content Type | Max Width | Rationale |
|-------------|-----------|-----------|
| Prose/body text | 65ch (~680px) | Optimal line length for reading |
| Content area | 768px-960px | Wide enough for media, narrow enough to read |
| Page container | 1200px-1440px | Standard desktop max-width |
| Full-bleed | 100vw | Edge-to-edge sections (heroes, backgrounds) |

### CSS Grid Implementation

```css
/* Base page grid */
.page-grid {
  display: grid;
  grid-template-columns:
    [full-start] minmax(var(--margin), 1fr)
    [content-start] min(var(--content-max), 100% - var(--margin) * 2)
    [content-end] minmax(var(--margin), 1fr)
    [full-end];
}

/* Named grid areas for breakout content */
.page-grid > * { grid-column: content; }
.page-grid > .full-bleed { grid-column: full; }
```

## Breakpoint Strategy

### Recommended Breakpoints

| Name | Value | Target |
|------|-------|--------|
| `sm` | 640px | Large phones (landscape) |
| `md` | 768px | Tablets (portrait) |
| `lg` | 1024px | Tablets (landscape), small laptops |
| `xl` | 1280px | Desktop |
| `2xl` | 1536px | Large desktop |

**Approach:** Mobile-first. Write base styles for mobile, add complexity at larger breakpoints.

**Principle:** Breakpoints should respond to content needs, not device widths. If a layout breaks at 920px, add a breakpoint at 920px — don't force it to wait until 1024px.

### Layout Shift Behaviors

Define what changes at each breakpoint:

| Element | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| Navigation | Hamburger menu | Hamburger or horizontal | Horizontal |
| Hero text | 2.25rem, centered | 3rem, left-aligned | 4rem, left-aligned |
| Card grid | 1 column, stacked | 2 columns | 3 columns |
| Section padding | 48px vertical | 80px vertical | 128px vertical |
| Sidebar | Hidden/collapsed | Below content | Alongside content |

## Compositional Principles

### Visual Hierarchy Tools

Hierarchy is created through the combination of:

1. **Size** — Larger = more important. The single most powerful tool.
2. **Weight** — Bolder = more important. Use font-weight to differentiate.
3. **Color** — Higher contrast = more important. Muted = supporting.
4. **Position** — Top-left reads first (F-pattern). Top = primary.
5. **Spacing** — More space around an element = more importance.
6. **Density** — Less cluttered areas draw the eye.

**The squint test:** Squint at the page until you can't read text. The visual hierarchy should still be clear — you should see 3 distinct levels of importance.

### Reading Patterns

**F-Pattern** (content-heavy pages):
- Eye tracks horizontally across the top
- Drops down, scans a shorter horizontal line
- Continues scanning left edge vertically
- **Implication:** Put key info in first two lines, use strong left-aligned headings

**Z-Pattern** (minimal pages, landing pages):
- Eye tracks top-left → top-right → bottom-left → bottom-right
- **Implication:** Logo top-left, CTA top-right or bottom-right

**Gutenberg Diagram** (evenly distributed content):
- Primary optical area: top-left
- Strong fallow area: top-right
- Weak fallow area: bottom-left
- Terminal area: bottom-right (where CTAs go)

### White Space Philosophy

White space is not "empty" — it's an active design element.

**Functions of white space:**
- **Grouping:** Elements close together are perceived as related (Gestalt proximity)
- **Separation:** Space between groups signals different concepts
- **Emphasis:** Generous space around an element signals importance
- **Luxury:** More white space = more premium/editorial feeling
- **Readability:** Dense pages exhaust readers; space provides cognitive rest

**Practical rules:**
- Section spacing should be at least 2× the spacing between elements within a section
- Hero sections benefit from generous vertical padding (120-200px desktop)
- Don't fill every gap — resist the urge to add more content to "use the space"
- Edge margins should feel generous, not cramped

### Alignment & Rhythm

- **Vertical rhythm:** All elements should sit on a consistent baseline grid (typically based on the body line-height)
- **Alignment axes:** Minimize the number of alignment points. Ideally, content aligns to 2-3 vertical axes max.
- **Consistency:** If cards have 24px padding, all cards have 24px padding. No exceptions without reason.

## Page Template Patterns

### Hero Section Variants

| Pattern | Description | Best For |
|---------|-------------|----------|
| **Centered headline** | Large text, centered, minimal | Bold statements, name-forward portfolios |
| **Left-aligned with visual** | Headline left, image/illustration right | Product/feature pages, case studies |
| **Full-bleed background** | Text over image/gradient/video | Atmospheric, immersive introductions |
| **Split screen** | Content left, visual right (50/50) | Showing duality, portfolio + headshot |
| **Stacked minimal** | Small overline, large headline, description, CTA | Clean, scannable, content-forward |

### Section Layout Patterns

| Pattern | Description |
|---------|-------------|
| **Alternating** | Image-left/text-right, then text-left/image-right |
| **Card grid** | 2-3 columns of equal cards |
| **Feature list** | Vertical stack of feature blocks with icons |
| **Bento grid** | Mixed-size cards in a masonry-like arrangement |
| **Full-width statement** | Single centered text block, large type, generous padding |
| **Testimonial strip** | Horizontal scroll or centered quote |
| **Stats row** | 3-4 large numbers with labels |

## Design Token Export

```css
@theme {
  /* Spacing */
  --space-0: 0;
  --space-0-5: 0.125rem;   /* 2px */
  --space-1: 0.25rem;      /* 4px */
  --space-2: 0.5rem;       /* 8px */
  --space-3: 0.75rem;      /* 12px */
  --space-4: 1rem;         /* 16px */
  --space-5: 1.25rem;      /* 20px */
  --space-6: 1.5rem;       /* 24px */
  --space-8: 2rem;         /* 32px */
  --space-10: 2.5rem;      /* 40px */
  --space-12: 3rem;        /* 48px */
  --space-16: 4rem;        /* 64px */
  --space-20: 5rem;        /* 80px */
  --space-24: 6rem;        /* 96px */
  --space-32: 8rem;        /* 128px */

  /* Content widths */
  --width-prose: 65ch;
  --width-content: 960px;
  --width-page: 1280px;

  /* Breakpoints (for reference — Tailwind v4 handles these) */
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1536px;
}
```

## Sources & Further Reading

- **Utopia** — utopia.fyi — Fluid space and type calculator. The essential tool for responsive spacing.
- **Material Design 3: Layout** — m3.material.io/foundations/layout — Comprehensive grid and spacing documentation.
- **Every Layout (Heydon Pickering & Andy Bell)** — every-layout.dev — CSS layout patterns using intrinsic web design principles. Avoids arbitrary breakpoints.
- **Refactoring UI** — Chapters on spacing, hierarchy, and layout. The "spacing and sizing" section is essential. refactoringui.com.
- **Nathan Curtis / EightShapes: Space in Design Systems** — medium.com/eightshapes-llc — Deep writing on spacing tokens and scales.
- **Smashing Magazine: Whitespace** — Extensive articles on the role of negative space in web design.
- **Brad Frost: Atomic Design** — atomicdesign.bradfrost.com — Component composition methodology that informs layout structure.
- **Tailwind CSS v4: Spacing** — tailwindcss.com/docs — Default spacing scale and breakpoint reference.
- **1-Line Layouts (Una Kravets)** — 1linelayouts.glitch.me — 10 powerful CSS layout patterns in a single line each.
