# Component Design Patterns — Reference Guide

## Purpose

Components are where the brand system meets the user. Every button, card, navigation bar, and form field is a brand touchpoint. This reference defines how to design core web components as expressions of the brand — with specific states, sizing systems, and spacing rules that connect back to the design tokens.

## Buttons

### Button Anatomy

```
[Icon?] [Label] [Icon?]
  ↑        ↑       ↑
Optional  Required  Optional (e.g., arrow)

Padding: horizontal (token) × vertical (token)
Border-radius: from token system
Min-width: enough for comfortable touch (min 44px height for touch targets)
```

### Button Variants

| Variant | Use Case | Visual Treatment |
|---------|----------|-----------------|
| **Primary** | Main CTA, one per section max | Filled with brand accent color, high contrast text |
| **Secondary** | Supporting actions | Outlined (border only) or subtle fill |
| **Ghost/Text** | Tertiary actions, navigation-like | No border, no fill, just text + hover state |
| **Destructive** | Delete, remove, cancel | Red/error color, used sparingly |
| **Icon-only** | Compact actions (close, menu, share) | Square aspect ratio, tooltip required for accessibility |

### Button States

Every button variant must define ALL of these states:

| State | Visual Change | Timing |
|-------|--------------|--------|
| **Default** | Base appearance | — |
| **Hover** | Slight darken/lighten + optional lift (translateY -1px) | 150ms ease-standard |
| **Focus-visible** | Visible focus ring (2px offset, accent color) | Instant |
| **Active/Pressed** | Scale to 0.97-0.98, slight darken | 50ms |
| **Disabled** | 40-50% opacity, cursor: not-allowed | — |
| **Loading** | Label → spinner or shimmer, disabled interaction | 200ms crossfade |

### Button Sizing

| Size | Height | Padding (h × v) | Font Size | Icon Size | Use Case |
|------|--------|-----------------|-----------|-----------|----------|
| **sm** | 32px | 12px × 6px | text-sm | 16px | Dense UI, inline actions |
| **md** | 40px | 16px × 8px | text-base | 20px | Standard, default |
| **lg** | 48px | 24px × 12px | text-lg | 24px | Hero CTAs, important actions |
| **xl** | 56px | 32px × 16px | text-lg | 24px | Landing page primary CTAs |

### Button Copy Rules

- Always verb + object: "View project", "Send message", "Download PDF"
- Never generic: "Click here", "Submit", "Learn more"
- Keep to 2-5 words
- Primary CTA should be the most compelling action on the page
- Specific CTAs outperform generic by 37% ("Find Her Perfect Gift" > "Shop Now")
- Single CTA per section: having one clear CTA produces 371% more clicks than multiple competing CTAs
- Icon-to-label spacing: 8px. Leading icon (left) for most cases; trailing icon (right) for directional actions.
- Horizontal padding rule: approximately 2× the vertical padding

## Cards

### Card Anatomy

```
┌─────────────────────────────┐
│  [Image/Visual]             │  ← Optional media zone
├─────────────────────────────┤
│  [Overline/Category]        │  ← Optional metadata
│  [Title]                    │  ← Required
│  [Description]              │  ← Optional, 2-3 lines max
│  [Meta: date, tags, etc.]   │  ← Optional
│  [CTA link/button]          │  ← Optional explicit CTA
└─────────────────────────────┘

Padding: space-5 to space-6 (20-24px)
Gap between elements: space-2 to space-3 (8-12px)
Border-radius: from token system (consistent across all cards)
```

### Card Variants

| Variant | Description | Best For |
|---------|-------------|----------|
| **Content card** | Image + title + excerpt + meta | Blog posts, articles |
| **Project card** | Thumbnail + project name + short description + tech tags | Portfolio/work pages |
| **Feature card** | Icon + heading + description | Services, features, capabilities |
| **Stat card** | Large number + label + optional trend | Metrics, proof points |
| **Testimonial card** | Quote + attribution + optional photo | Social proof |
| **Link card** | Title + description + arrow | Navigation, resource lists |

### Card Interaction States

| State | Effect |
|-------|--------|
| **Default** | Base appearance |
| **Hover** | Subtle lift (translateY -2 to -4px) + shadow increase, or border color shift |
| **Focus-visible** | Focus ring around entire card (if card is a link) |
| **Active** | Slight scale reduction (0.99) |

**Key rule:** If the entire card is clickable, the whole card should be the link target (use `<a>` wrapping or `::after` pseudo-element technique). Don't make only the title a link — it creates a small, hard-to-hit target.

### Card Grid Patterns

| Layout | Columns | Best For |
|--------|---------|----------|
| **Equal grid** | 2-3 columns, equal height | Portfolio projects, features |
| **Featured + grid** | 1 large + 2-3 small | Homepage with hero project |
| **Bento** | Mixed sizes, masonry-like | Visual portfolios, dashboards |
| **List** | 1 column, horizontal cards | Blog posts, job listings |

## Navigation

### Header Navigation

**Desktop pattern:**
```
[Logo/Wordmark]     [Nav Link] [Nav Link] [Nav Link] [Nav Link]     [CTA Button]
←  Left-aligned  →  ←         Centered or right-aligned          →  ← Right   →
```

**Sizing:**
- Header height: 64-80px
- Logo height: 24-32px
- Nav link spacing: 24-32px between items
- CTA button: standard md size

**Sticky behavior:**
- Sticky header on scroll (optional)
- If sticky: reduce height slightly on scroll (64px → 56px)
- Add backdrop-filter: blur(8px) with semi-transparent background
- Add subtle bottom border on scroll

**Mobile pattern:**
- Hamburger menu icon (right-aligned)
- Full-screen or slide-in overlay
- Nav items stacked vertically with generous touch targets (min 48px height)
- Animate open/close: fade + slide, 200-300ms

### Footer Navigation

```
┌────────────────────────────────────────────┐
│  [Logo/Wordmark]                           │
│                                            │
│  [Column 1]    [Column 2]    [Column 3]    │
│  Link          Link          Link          │
│  Link          Link          Link          │
│  Link          Link                        │
│                                            │
│  ─────────────────────────────────────     │
│  [Copyright]           [Social Icons]      │
└────────────────────────────────────────────┘
```

- Footer padding: generous (space-16 to space-24 vertical)
- Color treatment: often uses surface or surface-elevated background
- Smaller text size (text-sm)
- Links: muted color, brighten on hover

## Hero Sections

### What Makes a Great Hero

**The 5-second rule:** Within 5 seconds, the visitor should understand:
1. What you/the brand does
2. Who it's for (implicitly, through tone/design)
3. What action to take next (CTA)

### Hero Patterns

| Pattern | Structure | Best For |
|---------|-----------|----------|
| **Headline-first** | Large headline + subtext + CTA + optional visual | Portfolio, personal brand |
| **Split** | Text left, visual right (50/50 or 60/40) | Product pages, about |
| **Full-bleed media** | Text overlaid on image/video/gradient | Atmospheric brands |
| **Animated/Interactive** | Dynamic element as the visual focus | Creative/technical showcase |
| **Minimal** | Just a name and title, massive whitespace | Confidence, premium feel |

### Hero Sizing

- **Desktop:** Full viewport height (100vh) or large fixed (600-800px)
- **Mobile:** Auto height, generous padding (space-16+ top and bottom)
- **Headline size:** Display/H1 (text-5xl to text-6xl on desktop, text-3xl to text-4xl on mobile)
- **Subtext:** text-lg to text-xl, muted color
- **CTA:** lg or xl button size
- **Max content width within hero:** 600-900px for centered layouts

### Above-the-Fold Priorities

Everything visible without scrolling should:
1. Establish the brand (visually and verbally) — logo + colors + headline
2. Present the core value proposition — one clear sentence (6-9 words for headline)
3. Offer a clear next step — visible CTA
4. Signal quality — spacing, type, color all working together

**Performance:** The hero image is often the LCP (Largest Contentful Paint) element. Preload it with `<link rel="preload">`. Use WebP/AVIF format. The first 3 seconds of page load are critical.

**Anti-pattern:** Don't load the hero with 5 CTAs, a video, a chat widget, a notification bar, and a popup. Focus. No sliders/carousels — static heroes outperform rotating content.

## Forms

### Input Field Anatomy

```
[Label]                    ← Always visible, above field
┌─────────────────────────┐
│ [Placeholder text]      │ ← Example content, disappears on focus
└─────────────────────────┘
[Helper text or error]     ← Below field, optional
```

### Input States

| State | Visual |
|-------|--------|
| **Default** | Border: border color token |
| **Hover** | Border darkens slightly |
| **Focus** | Border: accent color, 2px width, or ring |
| **Filled** | Same as default, text replaces placeholder |
| **Error** | Border: error color, error message below, optional icon |
| **Disabled** | Reduced opacity (50%), cursor: not-allowed |
| **Success** | Border: success color, optional checkmark (for validated fields) |

### Input Sizing

| Size | Height | Padding | Font Size |
|------|--------|---------|-----------|
| **sm** | 32px | 8px × 12px | text-sm |
| **md** | 40px | 10px × 14px | text-base |
| **lg** | 48px | 12px × 16px | text-base |

### Form Best Practices

- Labels always above fields (not placeholder-as-label)
- Single column layout for forms (don't put fields side-by-side unless they're related, like first/last name)
- Error messages: specific and actionable ("Enter a valid email" not "Invalid")
- Submit button: full width on mobile, right-aligned on desktop
- Progressive disclosure: only show fields that are needed

## Social Proof Patterns

### Testimonial Display

| Pattern | When to Use |
|---------|-------------|
| **Single featured quote** | One powerful testimonial, large type, centered |
| **Carousel** | Multiple testimonials, auto-advance or manual |
| **Grid** | 3+ testimonials shown simultaneously |
| **Inline** | Quote embedded within a case study narrative |

**Required elements:** Quote text, person's name, their title/company.
**Optional:** Photo (adds significantly higher recall than text-only), company logo.

### Conversion Data on Social Proof

- Reviews visible on site: 67% more purchases
- 5+ reviews displayed: up to 270% conversion increase
- Place social proof adjacent to CTAs for maximum effect — it provides a mental shortcut for decision-making
- For portfolio/freelancer: prioritize case study teasers with measurable outcomes + client logos

### Stats/Metrics Display

```
[Large Number]    [Large Number]    [Large Number]
[Label]           [Label]           [Label]
```

- Numbers: text-4xl to text-5xl, font-bold, accent or foreground color
- Labels: text-sm, muted color
- Use 3-4 stats maximum (more dilutes impact)
- Choose numbers that are specific and impressive: "340ms p95 latency" > "Fast"

### Client Logo Bar

- 4-6 logos in a row (desktop), 2-3 (mobile)
- Monochrome (gray/muted) — don't let client logos compete with your brand colors
- All logos similar visual weight (normalize heights)
- Optional: subtle animation (slow horizontal scroll, fade in/out)

## Responsive Component Behavior

| Component | Mobile Adaptation |
|-----------|------------------|
| **Buttons** | Full-width on mobile for primary CTAs |
| **Cards** | Single column stack, maintain image aspect ratio |
| **Navigation** | Hamburger menu, full-screen overlay |
| **Hero** | Stack vertically (text above visual), reduce type size |
| **Stats** | 2×2 grid or single column |
| **Forms** | Full-width fields, single column always |
| **Footer** | Single column, sections stacked |

## Sources & Further Reading

### Design Systems & Components
- **Radix UI Primitives** — radix-ui.com — Headless, accessible component patterns
- **Shadcn/ui** — ui.shadcn.com — Well-designed component reference (customize, don't use as-is)
- **Material Design 3: Components** — m3.material.io/components — Comprehensive component specs
- **Inclusive Components (Heydon Pickering)** — inclusive-components.design — Accessible component patterns
- **GOV.UK Design System Components** — design-system.service.gov.uk/components — Accessible, well-documented
- **Apple HIG: Components** — developer.apple.com/design/human-interface-guidelines
- **Refactoring UI** — Button and card design patterns
- **Carbon Design System: Buttons** — carbondesignsystem.com/components/button/usage
- **Nathan Curtis / EightShapes: Buttons** — medium.com/eightshapes-llc — Deep writing on button systems and sizing

### Forms & Input
- **NN/g: Web Form Design** — nngroup.com/articles/web-form-design — Research-backed form patterns
- **NN/g: Error Design Guidelines** — nngroup.com/articles/errors-forms-design-guidelines
- **Smashing Magazine: Error Messages UX** — smashingmagazine.com/2022/08/error-messages-ux-design

### Navigation
- **Baymard Institute: Navigation UX** — baymard.com — Research on navigation usability (59% of sites fail mobile nav)
- **NN/g: Mobile Navigation Patterns** — nngroup.com/articles/mobile-navigation-patterns

### CTA & Conversion
- **CXL: Social Proof Research** — cxl.com/research-study/social-proof — Which types of social proof work best
- **CrazyEgg: High-Converting CTA Buttons** — crazyegg.com/blog/high-converting-cta-buttons
