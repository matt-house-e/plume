# Design Token Export — Reference Guide

## Purpose

Design tokens are the atomic units of a design system — named values that encode every design decision. This reference defines how to export all brand design decisions as tokens compatible with Tailwind CSS v4 and CSS custom properties. The token file becomes the single source of truth that bridges design and code.

## Token Architecture

### Token Layers

```
Primitive Tokens     → Raw values (colors, sizes, durations)
Semantic Tokens      → Purposeful mappings (--color-background, --color-foreground)
Component Tokens     → Specific applications (--button-bg, --card-padding)
```

**For most sites, primitive + semantic tokens are sufficient.** Component tokens are for large design systems with many contributors.

## Complete Token Template

This is the target output format. Every value should be populated by the end of the brand design process.

```css
/* ============================================
   BRAND DESIGN SYSTEM TOKENS
   Generated from Brand Design Skill
   ============================================ */

@theme {

  /* ----------------------------------------
     COLOR SYSTEM
     ---------------------------------------- */

  /* Brand Colors */
  --color-primary: hsl(/* H */ /* S% */ /* L% */);
  --color-primary-light: hsl(/* lighter variant */);
  --color-primary-dark: hsl(/* darker variant */);
  --color-accent: hsl(/* accent hue */);
  --color-accent-light: hsl(/* lighter variant */);
  --color-accent-dark: hsl(/* darker variant */);

  /* Neutral Scale (tinted with brand hue) */
  --color-neutral-50: hsl(/* near white */);
  --color-neutral-100: hsl(/* */);
  --color-neutral-200: hsl(/* */);
  --color-neutral-300: hsl(/* */);
  --color-neutral-400: hsl(/* */);
  --color-neutral-500: hsl(/* */);
  --color-neutral-600: hsl(/* */);
  --color-neutral-700: hsl(/* */);
  --color-neutral-800: hsl(/* */);
  --color-neutral-900: hsl(/* */);
  --color-neutral-950: hsl(/* near black */);

  /* Semantic Surfaces (Light Mode) */
  --color-background: var(--color-neutral-50);
  --color-surface: white;
  --color-surface-elevated: white;
  --color-foreground: var(--color-neutral-900);
  --color-muted: var(--color-neutral-500);
  --color-border: var(--color-neutral-200);

  /* Semantic Colors */
  --color-success: hsl(/* green */);
  --color-warning: hsl(/* amber */);
  --color-error: hsl(/* red */);
  --color-info: hsl(/* blue */);

  /* ----------------------------------------
     TYPOGRAPHY SYSTEM
     ---------------------------------------- */

  /* Font Families */
  --font-display: "/* Display Face */", /* fallback stack */;
  --font-body: "/* Body Face */", /* fallback stack */;
  --font-mono: "/* Mono Face */", /* fallback stack */;

  /* Type Scale (using modular ratio) */
  --text-xs: /* Step -2, e.g., 0.64rem */;
  --text-sm: /* Step -1, e.g., 0.8rem */;
  --text-base: /* Step 0, e.g., 1rem (16px) */;
  --text-lg: /* Step 1, e.g., 1.25rem */;
  --text-xl: /* Step 2, e.g., 1.563rem */;
  --text-2xl: /* Step 3, e.g., 1.953rem */;
  --text-3xl: /* Step 4, e.g., 2.441rem */;
  --text-4xl: /* Step 5, e.g., 3.052rem */;
  --text-5xl: /* Step 6, e.g., 3.815rem */;
  --text-6xl: /* Step 7, e.g., 4.768rem */;

  /* Fluid Type (optional — use these OR the static scale above) */
  /* --text-fluid-base: clamp(1rem, 0.929rem + 0.357vw, 1.125rem); */
  /* --text-fluid-hero: clamp(2.5rem, 1.5rem + 3vw, 5rem); */

  /* Line Heights */
  --leading-none: 1;
  --leading-tight: 1.15;
  --leading-snug: 1.3;
  --leading-normal: 1.6;
  --leading-relaxed: 1.7;

  /* Letter Spacing */
  --tracking-tighter: -0.03em;
  --tracking-tight: -0.015em;
  --tracking-normal: 0;
  --tracking-wide: 0.025em;
  --tracking-wider: 0.05em;
  --tracking-widest: 0.1em;

  /* Font Weights */
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;

  /* ----------------------------------------
     SPACING SYSTEM
     ---------------------------------------- */

  --space-0: 0;
  --space-px: 1px;
  --space-0-5: 0.125rem;    /* 2px */
  --space-1: 0.25rem;       /* 4px */
  --space-1-5: 0.375rem;    /* 6px */
  --space-2: 0.5rem;        /* 8px */
  --space-3: 0.75rem;       /* 12px */
  --space-4: 1rem;          /* 16px */
  --space-5: 1.25rem;       /* 20px */
  --space-6: 1.5rem;        /* 24px */
  --space-8: 2rem;          /* 32px */
  --space-10: 2.5rem;       /* 40px */
  --space-12: 3rem;         /* 48px */
  --space-16: 4rem;         /* 64px */
  --space-20: 5rem;         /* 80px */
  --space-24: 6rem;         /* 96px */
  --space-32: 8rem;         /* 128px */
  --space-40: 10rem;        /* 160px */

  /* Fluid Section Spacing */
  --space-section-sm: clamp(2rem, 1rem + 3vw, 4rem);
  --space-section: clamp(4rem, 2rem + 6vw, 8rem);
  --space-section-lg: clamp(6rem, 3rem + 8vw, 12rem);

  /* ----------------------------------------
     LAYOUT SYSTEM
     ---------------------------------------- */

  /* Content Widths */
  --width-prose: 65ch;
  --width-content: 960px;
  --width-wide: 1200px;
  --width-page: 1280px;

  /* Border Radius */
  --radius-none: 0;
  --radius-sm: 0.25rem;     /* 4px */
  --radius-md: 0.5rem;      /* 8px */
  --radius-lg: 0.75rem;     /* 12px */
  --radius-xl: 1rem;        /* 16px */
  --radius-2xl: 1.5rem;     /* 24px */
  --radius-full: 9999px;

  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);

  /* ----------------------------------------
     MOTION SYSTEM
     ---------------------------------------- */

  /* Durations */
  --duration-fast: 100ms;
  --duration-normal: 200ms;
  --duration-moderate: 300ms;
  --duration-slow: 500ms;
  --duration-deliberate: 800ms;

  /* Easing Curves */
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-enter: cubic-bezier(0, 0, 0.2, 1);
  --ease-exit: cubic-bezier(0.4, 0, 1, 1);
  --ease-emphasis: cubic-bezier(0.4, 0, 0, 1);

  /* Composed Transitions (convenience) */
  --transition-colors: color var(--duration-normal) var(--ease-standard),
                       background-color var(--duration-normal) var(--ease-standard),
                       border-color var(--duration-normal) var(--ease-standard);
  --transition-transform: transform var(--duration-normal) var(--ease-standard);
  --transition-opacity: opacity var(--duration-moderate) var(--ease-enter);
  --transition-all: all var(--duration-normal) var(--ease-standard);
}

/* ============================================
   DARK MODE OVERRIDES
   ============================================ */

@media (prefers-color-scheme: dark) {
  :root {
    /* Surface overrides */
    --color-background: var(--color-neutral-950);
    --color-surface: var(--color-neutral-900);
    --color-surface-elevated: var(--color-neutral-800);
    --color-foreground: var(--color-neutral-50);
    --color-muted: var(--color-neutral-400);
    --color-border: var(--color-neutral-800);

    /* Brand color adjustments (desaturate for dark mode) */
    /* --color-primary: hsl(H, S-10%, L+5%); */
    /* --color-accent: hsl(H, S-10%, L+5%); */
  }
}

/* ============================================
   REDUCED MOTION
   ============================================ */

@media (prefers-reduced-motion: reduce) {
  :root {
    --duration-fast: 0ms;
    --duration-normal: 0ms;
    --duration-moderate: 0ms;
    --duration-slow: 0ms;
    --duration-deliberate: 0ms;
  }
}
```

## Tailwind v4 Integration

In Tailwind CSS v4, all tokens defined in `@theme {}` blocks within CSS files automatically become utility classes:

```css
/* In src/styles/global.css */
@import "tailwindcss";

@theme {
  --color-primary: hsl(220, 80%, 55%);
  /* ... all tokens from above */
}
```

This generates utilities like:
- `text-primary`, `bg-primary`, `border-primary`
- `text-xs` through `text-6xl`
- `gap-4`, `p-6`, `m-8` (from spacing scale)
- `rounded-md`, `rounded-lg`
- `shadow-md`, `shadow-lg`
- `duration-normal`, `duration-slow`
- `ease-standard`, `ease-enter`

## Token Naming Conventions

| Category | Pattern | Example |
|----------|---------|---------|
| Colors | `--color-{name}` | `--color-primary`, `--color-neutral-500` |
| Typography | `--font-{role}`, `--text-{size}` | `--font-display`, `--text-2xl` |
| Spacing | `--space-{scale}` | `--space-4`, `--space-section` |
| Sizing | `--width-{name}` | `--width-prose`, `--width-page` |
| Radius | `--radius-{size}` | `--radius-md`, `--radius-full` |
| Shadows | `--shadow-{size}` | `--shadow-md`, `--shadow-lg` |
| Motion | `--duration-{speed}`, `--ease-{name}` | `--duration-fast`, `--ease-enter` |

## Checklist Before Token Export

- [ ] Every color has been tested for WCAG AA contrast against its intended background
- [ ] Dark mode overrides are defined for all semantic color tokens
- [ ] Type scale has been visually verified at each step
- [ ] Spacing scale covers all needs from 2px to 160px+
- [ ] Easing curves match the brand's motion personality
- [ ] Duration values feel right when applied to real transitions
- [ ] Reduced motion fallback zeros out all durations
- [ ] Font families include proper fallback stacks
- [ ] All values use consistent units (rem for type/space, px for borders/shadows)

## Sources

- **Tailwind CSS v4: Theme Configuration** — tailwindcss.com/docs — Native CSS @theme block documentation
- **Design Tokens W3C Community Group** — designtokens.org — Emerging standard for design token interchange format
- **Nathan Curtis: Tokens in Design Systems** — medium.com/eightshapes-llc — Deep writing on token architecture
- **Style Dictionary (Amazon)** — amzn.github.io/style-dictionary — Tool for transforming tokens across platforms
