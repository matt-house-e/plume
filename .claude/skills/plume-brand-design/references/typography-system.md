# Typography System — Reference Guide

## Purpose

Typography carries more brand personality than any other design element. The choice of typeface, scale, spacing, and hierarchy determines whether a brand feels technical or approachable, premium or accessible, traditional or cutting-edge. A typography system must be both expressive and rigorous — beautiful at headline size and readable at 14px.

## Typeface Selection

### The Three Roles

Most web brand systems need typefaces for three roles:

| Role | Purpose | Common Choices |
|------|---------|---------------|
| **Display** | Headlines, hero text, feature callouts | Distinctive, characterful — the "brand voice" face |
| **Body** | Paragraphs, descriptions, long-form content | Highly readable, generous x-height, clean |
| **Mono** | Code snippets, data, technical content | Clean monospace with good character distinction |

**One face can fill multiple roles** — a well-designed variable font with multiple weights can serve as both display and body. This is often the simplest approach.

### Personality Mapping

Map brand attributes to type characteristics:

| Brand Attribute | Type Characteristics |
|----------------|---------------------|
| **Precise** | Geometric sans-serif, consistent stroke width, tight tracking |
| **Warm** | Humanist sans-serif, slightly rounded terminals, open counters |
| **Sophisticated** | Modern serif, high contrast, refined details |
| **Technical** | Grotesque sans-serif, monospace influences, clean geometry |
| **Playful** | Rounded forms, varied weight distribution, distinctive characters |
| **Authoritative** | Transitional serif, strong vertical stress, sturdy construction |
| **Forward-thinking** | Variable font with unusual axis ranges, geometric, distinctive |
| **Craft-oriented** | Slight humanist qualities, visible construction logic, ink traps |

### Notable Typefaces by Category

**Geometric Sans-Serif** (precision, modernity):
- Inter — The benchmark. Excellent at small sizes. Risks looking generic.
- General Sans — Slightly warmer than Inter, good personality.
- Satoshi — Modern geometric with character in italic forms.
- Outfit — Geometric with rounded qualities, friendly precision.
- Plus Jakarta Sans — Slightly playful geometry, good for friendly tech.

**Humanist Sans-Serif** (warmth, approachability):
- Source Sans 3 — Adobe's workhorse, excellent readability.
- Lato — Warm, stable, good at all sizes.
- Nunito — Rounded terminals add softness without losing professionalism.
- DM Sans — Clean with subtle optical size adjustments.

**Grotesque/Neo-Grotesque** (neutral, professional):
- Instrument Sans — Contemporary grotesque, sharp and clean.
- Hanken Grotesk — Classic grotesque with modern refinement.
- Switzer — Tight, editorial feel, excellent for large text.
- Geist — Vercel's typeface. Clean, technical, code-friendly.

**Serif** (sophistication, editorial):
- Fraunces — Variable serif with personality. Optical size axis is extraordinary.
- Playfair Display — High-contrast didone for dramatic headlines.
- Source Serif 4 — Clean, readable serif for long-form.
- Lora — Balanced calligraphic serif, good for body.
- Newsreader — Designed for long reading, traditional news aesthetic.

**Monospace** (technical, code):
- JetBrains Mono — Excellent character distinction, ligatures.
- Fira Code — Ligatures, good for code display.
- IBM Plex Mono — Clean, part of a multi-script superfamily.
- Geist Mono — Pairs naturally with Geist Sans.
- Source Code Pro — Adobe's mono, reliable and clean.

**Display/Distinctive** (headlines, brand moments):
- Space Grotesk — Geometric with quirky `g` and `6`. (Note: widely used in AI/tech — may feel generic in that context.)
- Bricolage Grotesque — Variable with wacky alternate glyphs, enormous personality.
- Cabinet Grotesk — Tight, bold, great for large text.
- Clash Display — High-contrast grotesque, very editorial.
- General Sans — Versatile enough for display and body.

### Pairing Rules

**Safe pairing strategies:**
1. **Superfamily** — Display and body from the same type family (e.g., Source Sans + Source Serif). Zero risk.
2. **Contrast of structure** — Serif headlines + sans body, or vice versa. Classic, reliable.
3. **Contrast of weight** — Same family, heavy display + light body. Unified but hierarchical.
4. **Shared skeleton** — Different faces that share similar proportions (x-height, cap height, width). They harmonize despite different details.

**Pairing anti-patterns:**
- Two fonts that look almost-but-not-quite the same (creates cognitive tension)
- More than 3 typefaces total (creates visual chaos)
- Display font at body size (readability disaster)
- Two heavy/ornate faces competing for attention

## Type Scale

### Modular Scale Ratios

A type scale provides consistent, harmonious size progression. Pick a base size and a ratio:

| Ratio | Name | Feel |
|-------|------|------|
| 1.125 | Major Second | Tight, compact — dense UIs, dashboards |
| 1.200 | Minor Third | Balanced — good default for most sites |
| 1.250 | Major Third | Clear hierarchy — general purpose, editorial |
| 1.333 | Perfect Fourth | Dramatic — bold headlines, marketing sites |
| 1.414 | Augmented Fourth | Very dramatic — limited heading levels |
| 1.500 | Perfect Fifth | Maximum drama — 1-2 heading levels only |
| 1.618 | Golden Ratio | Classical proportion — use sparingly |

**Recommended default:** 1.200 or 1.250 ratio with 16px (1rem) base.

### Scale Example (1.250 ratio, 16px base)

```
Step -2:  10.24px  (0.64rem)  — fine print, legal
Step -1:  12.80px  (0.80rem)  — captions, labels
Step  0:  16.00px  (1.00rem)  — body text (base)
Step  1:  20.00px  (1.25rem)  — large body, lead text
Step  2:  25.00px  (1.563rem) — H5
Step  3:  31.25px  (1.953rem) — H4
Step  4:  39.06px  (2.441rem) — H3
Step  5:  48.83px  (3.052rem) — H2
Step  6:  61.04px  (3.815rem) — H1
Step  7:  76.29px  (4.768rem) — Display/Hero
```

### Fluid Typography

Use CSS `clamp()` to scale type fluidly between breakpoints:

```css
/* Fluid base: 16px at 375px viewport → 18px at 1440px viewport */
font-size: clamp(1rem, 0.929rem + 0.357vw, 1.125rem);

/* Fluid H1: 36px at 375px → 64px at 1440px */
font-size: clamp(2.25rem, 1.429rem + 2.632vw, 4rem);
```

**Tool:** utopia.fyi generates fluid type scales with clamp() values. Highly recommended.

## Hierarchy Definition

Define each level with all properties:

```
Level       | Face          | Weight | Size    | Line-Height | Letter-Spacing | Color
------------|---------------|--------|---------|-------------|----------------|-------
Display     | Display face  | 700    | Step 7  | 1.1         | -0.02em        | foreground
H1          | Display face  | 700    | Step 6  | 1.15        | -0.015em       | foreground
H2          | Display face  | 600    | Step 5  | 1.2         | -0.01em        | foreground
H3          | Display face  | 600    | Step 4  | 1.25        | -0.005em       | foreground
H4          | Body face     | 600    | Step 3  | 1.3         | 0              | foreground
H5          | Body face     | 600    | Step 2  | 1.35        | 0              | foreground
H6          | Body face     | 600    | Step 1  | 1.4         | 0.01em         | foreground
Body        | Body face     | 400    | Step 0  | 1.6         | 0              | foreground
Body Large  | Body face     | 400    | Step 1  | 1.6         | 0              | foreground
Small       | Body face     | 400    | Step -1 | 1.5         | 0.01em         | muted
Caption     | Body face     | 500    | Step -2 | 1.4         | 0.02em         | muted
Label       | Body face     | 500    | Step -1 | 1.0         | 0.05em         | muted
Overline    | Body face     | 600    | Step -2 | 1.0         | 0.1em          | muted
Code        | Mono face     | 400    | 0.9em   | 1.6         | 0              | foreground
```

### Line Height Rules

- **Headlines** (display → H3): 1.1 – 1.25 (tight, because large text has natural whitespace)
- **Body text**: 1.5 – 1.7 (generous, for comfortable reading)
- **Small text**: 1.4 – 1.5
- **Labels/overlines**: 1.0 – 1.2 (single-line, no wrapping expected)

### Letter Spacing Rules

- **Large headlines**: Negative tracking (-0.01em to -0.03em) — large type looks loose at default spacing
- **Body text**: Default (0) — the type designer optimized for this
- **Small text**: Slight positive tracking (+0.01em to +0.02em) — aids legibility at small sizes
- **Uppercase text**: Positive tracking (+0.05em to +0.1em) — uppercase needs room to breathe

## Web Font Loading

### Performance Strategy

1. **Self-host fonts** — Avoid third-party CDN round trips (Google Fonts). Download WOFF2 files and serve from same origin. Use fontsource.org for easy self-hosting packages.
2. **Use WOFF2 exclusively** — 30% better compression than WOFF via Brotli. Universal browser support. No need for other formats.
3. **Prefer variable fonts** — One file serves all weights/widths. Smaller total download than multiple static files.
4. **Use `font-display: swap`** — Shows fallback immediately, swaps when loaded. Prevents invisible text. (Use `optional` for maximum performance if a brief fallback flash is acceptable.)
5. **Subset fonts** — Strip unused character ranges (Latin only for English sites). Use `glyphhanger` or `subfont` tools.
6. **Preload the primary font** — `<link rel="preload" href="font.woff2" as="font" type="font/woff2" crossorigin>`
7. **Limit total font files** — 2-3 font files maximum. Each file is a blocking resource.
8. **Define a good fallback stack** — Match fallback metrics to minimize layout shift (CLS).

### Fallback Stack Pattern

```css
--font-display: "Fraunces", "Georgia", "Times New Roman", serif;
--font-body: "General Sans", "Helvetica Neue", "Arial", sans-serif;
--font-mono: "JetBrains Mono", "Fira Code", "Consolas", monospace;
```

Use `size-adjust`, `ascent-override`, `descent-override` in `@font-face` to match fallback metrics.

## Accessibility

- **Minimum body text size:** 16px (1rem). Never smaller for primary content.
- **Minimum touch target text:** Labels for buttons/links must be legible at their rendered size.
- **Line length:** 45-75 characters per line for body text. Use `max-width: 65ch` on prose containers.
- **Contrast:** WCAG AA requires 4.5:1 for normal text, 3:1 for large text (≥18px bold or ≥24px).
- **Don't disable zoom:** Never set `maximum-scale=1` or `user-scalable=no`.
- **Respect user preferences:** Use relative units (rem/em), not px for font sizes.

## Sources & Further Reading

- **Utopia** — utopia.fyi — Fluid type and space calculator. Essential tool for responsive typography.
- **Typescale** — typescale.com — Quick type scale generator with visual preview.
- **Material Design 3: Typography** — m3.material.io/styles/typography — Comprehensive type system documentation.
- **Refactoring UI** — "Typography" chapters. Practical advice on hierarchy, size, weight, color as tools. refactoringui.com.
- **Typewolf** — typewolf.com — Curated font recommendations, pairings, and real-world usage examples.
- **Google Fonts Knowledge** — fonts.google.com/knowledge — Articles on type selection, pairing, variable fonts, and accessibility.
- **Practical Typography (Butterick)** — practicaltypography.com — Opinionated, excellent guide to making type look professional.
- **The Elements of Typographic Style (Bringhurst)** — The canonical reference on typography principles.
- **Variable Fonts guide** — variablefonts.io — Understanding and using variable font axes.
- **Font Style Matcher** — meowni.ca/font-style-matcher/ — Tool for matching fallback font metrics.
