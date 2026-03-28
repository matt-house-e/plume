# Color System — Reference Guide

## Purpose

Color is the most immediately emotional element of a brand. A color system must be both expressive (conveying personality) and systematic (working reliably across every context — light mode, dark mode, accessible contrast, semantic meaning). Build the system once, then derive every application from tokens.

## Color Space: OKLCH vs HSL

**Prefer OKLCH for palette generation.** HSL is intuitive but perceptually non-uniform — the same lightness value produces visually different brightness across hues (yellow at L:50% looks much brighter than blue at L:50%). OKLCH is perceptually uniform, meaning equal changes in values produce equal visual changes.

```
HSL:   hsl(hue, saturation%, lightness%)         ← Non-uniform, but widely supported
OKLCH: oklch(lightness% chroma hue)               ← Perceptually uniform, modern CSS
```

**Practical approach:** Use OKLCH for generating palettes (ensuring even perceptual steps), then export as HSL for maximum browser compatibility. Tools like oklch.com and Leonardo (leonardocolor.io) work in perceptually uniform spaces.

## The 60-30-10 Rule

Distribute color by visual weight:
- **60% Dominant** — Background and neutral surfaces. The canvas.
- **30% Secondary** — Supporting colors: cards, sections, secondary text.
- **10% Accent** — CTAs, interactive elements, highlights. The smallest but most impactful.

This ratio prevents color overload and ensures the accent color has maximum impact.

## Color Architecture

### Layers of a Complete Color System

A production color system has five distinct layers:

```
1. Brand Colors     → The signature hues (1-2 primary, 1-2 accent)
2. Neutral Scale    → Gray ramp for text, borders, backgrounds (8-12 steps)
3. Semantic Colors  → Functional meanings: success, warning, error, info
4. Surface System   → Background layers: base, surface, elevated, overlay
5. Dark Mode Map    → Every color remapped for dark contexts
```

### Layer 1: Brand Colors

**Selection principles:**
- Start with 1 primary color that carries the brand's core emotion
- Add 1 accent color for emphasis, CTAs, and interactive elements
- The pair should have enough contrast to be distinguishable but enough harmony to feel intentional

**Color psychology fundamentals** (use as starting point, not gospel):

| Color Family | Common Associations | Best For |
|-------------|-------------------|----------|
| Blue | Trust, stability, intelligence | Professional services, tech, finance |
| Green | Growth, health, balance | Sustainability, health, finance |
| Red/Coral | Energy, urgency, passion | CTAs, warnings, bold brands |
| Purple | Creativity, luxury, wisdom | Creative industries, premium |
| Orange/Amber | Warmth, energy, friendliness | Approachable tech, communities |
| Yellow | Optimism, clarity, warmth | Highlights, attention, caution |
| Neutral/Gray | Sophistication, balance | Minimal brands, letting content lead |
| Black | Power, elegance, authority | Luxury, editorial, high-end |

**Choosing harmonious palettes:**
- **Monochromatic:** Variations of one hue — safest, most cohesive
- **Analogous:** Adjacent hues on the color wheel — natural, harmonious
- **Complementary:** Opposite hues — high contrast, energetic
- **Split-complementary:** One hue + two adjacent to its complement — vibrant but balanced
- **Triadic:** Three evenly spaced hues — bold, requires careful balancing

### Layer 2: Neutral Scale

Build a 10-step neutral scale from near-white to near-black. The neutrals do most of the heavy lifting in a UI.

**Approach: Tinted neutrals**
Pure gray (equal RGB) feels lifeless. Tint the neutral scale with the brand's primary hue for warmth and cohesion.

```
Example: If brand primary is blue (HSL 220, 80%, 55%)
Neutrals should carry a hint of 220° hue:

neutral-50:  hsl(220, 10%, 98%)   ← lightest background
neutral-100: hsl(220, 10%, 95%)
neutral-200: hsl(220, 8%, 88%)
neutral-300: hsl(220, 8%, 78%)
neutral-400: hsl(220, 6%, 62%)
neutral-500: hsl(220, 6%, 46%)    ← muted text
neutral-600: hsl(220, 8%, 34%)
neutral-700: hsl(220, 10%, 24%)   ← body text (dark mode bg)
neutral-800: hsl(220, 12%, 14%)
neutral-900: hsl(220, 14%, 8%)    ← near-black
neutral-950: hsl(220, 16%, 4%)    ← deepest dark
```

### Layer 3: Semantic Colors

Map functional meanings that stay consistent regardless of theme:

```
success:  green family  — confirmations, completed states
warning:  amber family  — caution, non-blocking issues
error:    red family    — errors, destructive actions, validation failures
info:     blue family   — informational, neutral highlights
```

Each semantic color needs: a main shade, a light/subtle variant (for backgrounds), and a dark/strong variant (for text on light).

### Layer 4: Surface System

Define layered backgrounds that create depth:

```
background:       → The page base (lightest in light mode, darkest in dark mode)
surface:          → Cards, panels, content containers (one step elevated)
surface-elevated: → Modals, dropdowns, popovers (two steps elevated)
overlay:          → Backdrop behind modals (semi-transparent dark)
```

In light mode, surfaces get progressively lighter or use subtle shadows.
In dark mode, surfaces get progressively lighter (not darker — this is the key insight from Material Design's dark theme guidelines).

### Layer 5: Dark Mode

**The inversion is NOT simply swapping light ↔ dark.** Key principles:

- **Reduce saturation** — Highly saturated colors on dark backgrounds cause visual vibration. Desaturate brand colors by 10-20% for dark mode.
- **Elevate with lightness, not shadow** — In dark mode, higher elements are lighter, not shadowed.
- **Maintain contrast ratios** — Every text/background pair must still meet WCAG AA.
- **Test mid-tones carefully** — Colors that work on white and on near-black may fail on mid-gray surfaces.

## Accessibility Requirements

### WCAG Contrast Ratios (AA Minimum)

| Element | Ratio Required | Tool |
|---------|---------------|------|
| Normal text (< 18px) | 4.5:1 | WebAIM Contrast Checker |
| Large text (≥ 18px bold or ≥ 24px) | 3:1 | WebAIM Contrast Checker |
| UI components & graphical objects | 3:1 | Against adjacent colors |
| Focus indicators | 3:1 | Against background |

### APCA (Advanced Perceptual Contrast Algorithm)

APCA is the successor to WCAG 2.x contrast ratios, coming with WCAG 3.0. It's more accurate for real-world readability because it accounts for font size, weight, and polarity (light-on-dark vs dark-on-light).

| Element | APCA Lc Target |
|---------|---------------|
| Body text (16px, 400 weight) | Lc 75+ |
| Large headings (24px+, 700 weight) | Lc 60+ |
| UI components, icons | Lc 45+ |
| Placeholder text, disabled | Lc 30+ |

**Tool:** apcacontrast.com

### Dark Mode Text Opacity Reference

In dark mode, text opacity controls hierarchy (from Material Design 3):
- **Primary text:** ~87% opacity (high emphasis)
- **Secondary text:** ~60% opacity (medium emphasis)
- **Disabled text:** ~38% opacity (low emphasis)

### Color Blindness Considerations

- Never use color alone to convey meaning (add icons, labels, or patterns)
- Test palette with deuteranopia (red-green, ~8% of males), protanopia, and tritanopia simulations
- Ensure error/success states are distinguishable without color (use icons: checkmark, X)

**Tools:**
- Stark plugin (Figma)
- whocanuse.com — Shows how color pairs appear to different vision types
- WebAIM Contrast Checker — webaim.org/resources/contrastchecker/

## Design Token Format

Export all colors as CSS custom properties in HSL format (allows easy manipulation):

```css
@theme {
  /* Brand */
  --color-primary: hsl(220, 80%, 55%);
  --color-primary-light: hsl(220, 80%, 70%);
  --color-primary-dark: hsl(220, 80%, 40%);
  --color-accent: hsl(350, 75%, 55%);

  /* Neutrals */
  --color-neutral-50: hsl(220, 10%, 98%);
  /* ... through 950 */

  /* Semantic */
  --color-success: hsl(145, 65%, 42%);
  --color-warning: hsl(38, 92%, 50%);
  --color-error: hsl(0, 72%, 51%);
  --color-info: hsl(210, 80%, 52%);

  /* Surfaces */
  --color-background: var(--color-neutral-50);
  --color-surface: white;
  --color-surface-elevated: white;
  --color-foreground: var(--color-neutral-900);
  --color-muted: var(--color-neutral-500);
  --color-border: var(--color-neutral-200);
}
```

## Process: Building the Palette

1. **Start with brand attributes** — "warm and precise" suggests warm neutrals + a cool structural accent
2. **Pick the primary hue** — Use the emotional mapping above, but break conventions when it serves the brand
3. **Build the neutral scale** — Tint with primary hue, 10 steps
4. **Add the accent** — Choose a complementary or split-complementary hue
5. **Define surfaces** — Assign neutral steps to background, surface, elevated
6. **Add semantics** — Green/amber/red/blue for functional states
7. **Map dark mode** — Desaturate, invert surface hierarchy, verify all contrast
8. **Test everything** — Run every text/background pair through contrast checker
9. **Export tokens** — CSS custom properties in HSL

## Sources & Further Reading

- **Material Design 3 Color System** — m3.material.io/styles/color — Gold standard for systematic color architecture. Their dark theme guidelines are essential reading.
- **Apple Human Interface Guidelines: Color** — developer.apple.com/design/human-interface-guidelines/color — Excellent on dynamic color, vibrancy, and platform-specific considerations.
- **Refactoring UI (Adam Wathan & Steve Schoger)** — "Building Your Color Palette" chapter. Practical approach to building neutral scales with personality. refactoringui.com.
- **WebAIM Contrast Checker** — webaim.org/resources/contrastchecker/ — The go-to tool for WCAG compliance.
- **Who Can Use** — whocanuse.com — Simulates color pairs across vision types and contexts.
- **Reasonable Colors** — reasonable.work/colors/ — An accessible color system designed for UI.
- **Open Color** — yeun.github.io/open-color/ — Well-designed open-source color palette optimized for UI.
- **Radix Colors** — radix-ui.com/colors — Carefully designed color scales with built-in accessibility and dark mode support.
- **Leonardo (Adobe)** — leonardocolor.io — Contrast-based color generation tool.
