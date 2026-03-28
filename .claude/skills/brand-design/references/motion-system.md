# Motion & Interaction Design — Reference Guide

## Purpose

Motion is the personality of a digital interface in time. Where color and typography define how a brand looks still, motion defines how it *feels* in use — responsive, deliberate, playful, or restrained. A motion system ensures animations are consistent, purposeful, and performant.

## Motion Personality

### Mapping Brand Attributes to Motion

| Brand Attribute | Motion Expression |
|----------------|-------------------|
| **Precise** | Crisp easing, exact durations, no overshoot, mechanical precision |
| **Warm** | Gentle easing, slightly longer durations, organic curves |
| **Playful** | Spring physics, overshoot, bounce, elastic deceleration |
| **Minimal** | Very subtle or no animation. Instant transitions. Let content lead. |
| **Premium/Luxury** | Slow, deliberate reveals. Long durations. Ease-out with slow decay. |
| **Technical** | Linear or near-linear easing. Grid-snapping. Data-driven motion. |
| **Bold/Energetic** | Fast entrances, exaggerated scale changes, strong easing curves |
| **Editorial** | Slow, elegant fades. Cross-dissolves. Parallax at low intensity. |

### The Motion Scale

Define a "volume knob" for the overall motion intensity:

```
Level 0: No motion      — prefers-reduced-motion or ultra-minimal brands
Level 1: Micro only     — hover states, focus rings, button presses
Level 2: Subtle         — Page transitions, scroll reveals (gentle fade/slide)
Level 3: Moderate       — Staggered entrances, parallax, hover transforms
Level 4: Expressive     — Spring physics, scroll-driven animations, 3D effects
Level 5: Maximal        — Full page takeovers, morphing elements, particle effects
```

Most professional portfolio sites operate at Level 2-3. Going to 4-5 requires exceptional craft to avoid feeling gratuitous.

## Duration System

### Duration Tokens

| Token | Value | Use Case |
|-------|-------|----------|
| `instant` | 0ms | Immediate state changes (no visible transition) |
| `fast` | 100ms | Button presses, checkbox toggles, focus rings |
| `normal` | 200ms | Standard transitions: color changes, opacity, small movements |
| `moderate` | 300ms | Expanding panels, card hovers, navigation transitions |
| `slow` | 400ms-500ms | Page transitions, modal entrances, larger movements |
| `deliberate` | 600ms-800ms | Hero reveals, staggered animations, dramatic entrances |
| `dramatic` | 1000ms+ | Full-page transitions, loading sequences (use sparingly) |

**Rules:**
- User-initiated actions should respond within 100ms (fast) to feel instant
- System-initiated animations (scroll reveals, page transitions) can be slower
- Duration scales with distance — a 50px slide needs less time than a 200px slide
- Never exceed 1000ms for a single animation unless it's a deliberate creative statement

### Stagger Timing

For sequenced animations (e.g., cards revealing one by one):

```
stagger-delay: 50ms-100ms between items
max-total-duration: First item + (n × stagger) should not exceed 800ms total
```

Example: 5 cards with 75ms stagger = 300ms total stagger + 300ms animation = 600ms total. Acceptable.

## Easing System

### Core Easing Curves

| Token | CSS Value | Character | Use Case |
|-------|-----------|-----------|----------|
| `ease-standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | Smooth, natural | Default for most transitions |
| `ease-enter` | `cubic-bezier(0, 0, 0.2, 1)` | Decelerating into view | Elements appearing (fade in, slide in) |
| `ease-exit` | `cubic-bezier(0.4, 0, 1, 1)` | Accelerating out | Elements disappearing (fade out, slide out) |
| `ease-emphasis` | `cubic-bezier(0.4, 0, 0, 1)` | Sharp start, gentle land | Attention-grabbing, important transitions |
| `ease-spring` | Custom (see below) | Bouncy, organic | Playful brands, interactive elements |
| `ease-linear` | `linear` | Mechanical, constant | Progress bars, loading indicators only |

### Spring Physics (for playful/organic brands)

Spring animations feel more natural than cubic-bezier because they respond to "physical" properties:

```
Framer Motion spring config:
- Gentle:   { stiffness: 100, damping: 20 }
- Snappy:   { stiffness: 300, damping: 25 }
- Bouncy:   { stiffness: 400, damping: 15 }
- Stiff:    { stiffness: 500, damping: 30 }
```

CSS equivalent (approximation):
```css
/* Bouncy */
transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);

/* Gentle spring */
transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
```

## Interaction Pattern Catalog

### 1. Hover States

**Purpose:** Indicate interactivity, provide feedback.

| Element | Hover Effect | Properties |
|---------|-------------|------------|
| Links | Color shift + optional underline animation | `color`, `text-decoration` |
| Buttons | Subtle lift + shadow increase OR color darken | `transform: translateY(-1px)`, `box-shadow` |
| Cards | Lift + shadow + optional border color | `transform: translateY(-4px)`, `box-shadow` |
| Images | Subtle zoom or brightness shift | `transform: scale(1.02)`, `filter: brightness(1.05)` |
| Navigation | Underline slide-in or background fill | Custom underline animation |

**Timing:** 150ms-200ms, ease-standard

### 2. Scroll-Triggered Reveals

**Purpose:** Progressive content disclosure, create narrative rhythm.

**Patterns:**
- **Fade up:** Element fades in while sliding up 20-40px. The workhorse.
- **Fade in:** Simple opacity 0→1. Gentlest option.
- **Staggered fade up:** Multiple elements fade up in sequence (50-100ms stagger).
- **Scale in:** Element grows from 0.95→1 with fade. Subtle but effective.
- **Slide from side:** Element slides in from left/right. Use for asymmetric layouts.

**Implementation:**
- Use `IntersectionObserver` (native) or a library
- Trigger when element is ~20% visible (threshold: 0.2)
- Animate once only — don't re-trigger on scroll back up (unless intentional)
- Keep the transform small (20-40px translate, 0.95-1 scale) — large movements feel dated

**Libraries:**
- **CSS only:** `@starting-style` + `transition` (modern browsers)
- **Lightweight JS:** Custom IntersectionObserver (no library needed for basics)
- **Astro:** Built-in View Transitions API
- **React:** `motion` (formerly Framer Motion) — the standard
- **GSAP + ScrollTrigger:** For complex, timeline-based scroll animations
- **Lenis:** Smooth scroll library for buttery scroll feel

### 3. Page Transitions

**Purpose:** Smooth navigation between pages, maintain spatial awareness.

**Patterns:**
- **Cross-fade:** Old page fades out, new fades in (simplest, always safe)
- **Slide:** Pages slide horizontally (implies lateral navigation)
- **Morph:** Shared elements morph position between pages (hero image, headline)
- **Swipe up:** New page rises over old (implies depth)

**Implementation:**
- **Astro:** Built-in View Transitions API with `<ClientRouter />`
- **React SPA:** `motion` layout animations or `react-router` + animation library
- Keep transitions under 400ms total

### 4. Loading & Skeleton States

**Purpose:** Maintain perceived performance and prevent layout shift.

**Patterns:**
- **Skeleton screens:** Gray shapes matching content layout, with shimmer animation
- **Progressive loading:** Content fades in as it loads (images, data)
- **Spinner:** Simple rotation for short waits (< 2s) — avoid for longer loads

**Skeleton shimmer:**
```css
background: linear-gradient(90deg, var(--surface) 25%, var(--surface-elevated) 50%, var(--surface) 75%);
background-size: 200% 100%;
animation: shimmer 1.5s ease-in-out infinite;

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
```

### 5. Micro-interactions

**Purpose:** Provide tactile feedback for user actions.

| Interaction | Animation |
|------------|-----------|
| Button press | Scale to 0.97, then back to 1 (50ms down, 100ms up) |
| Toggle switch | Slide with slight overshoot |
| Checkbox | Check mark draws in (SVG path animation) |
| Copy to clipboard | Brief flash of "Copied!" text swap |
| Form submit | Button text → spinner → success check |
| Accordion expand | Height animation with content fade-in |

## Performance Guidelines

### Prefer GPU-Accelerated Properties

**Animate these** (composited, GPU-accelerated):
- `transform` (translate, scale, rotate)
- `opacity`
- `filter` (blur, brightness — use sparingly)

**Avoid animating** (triggers layout/paint):
- `width`, `height` (use `transform: scale` instead)
- `top`, `left` (use `transform: translate` instead)
- `margin`, `padding`
- `border-width`
- `font-size`

### `will-change` Usage

- Add `will-change: transform, opacity` to elements that WILL animate
- Don't add it to everything — it consumes GPU memory
- Remove it after animation completes (if possible)

### Reduced Motion

**Non-negotiable.** Always respect `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

**Or, better — opt-in to motion rather than opt-out:**
```css
/* Base: no motion */
.reveal { opacity: 1; }

/* Enhanced: add motion for users who want it */
@media (prefers-reduced-motion: no-preference) {
  .reveal {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 400ms ease-out, transform 400ms ease-out;
  }
  .reveal.visible {
    opacity: 1;
    transform: none;
  }
}
```

## Animation Libraries Reference

| Library | Size | Best For | Notes |
|---------|------|----------|-------|
| **CSS Transitions/Animations** | 0kb | Simple hover states, reveals | Always prefer when sufficient |
| **View Transitions API** | 0kb (native) | Page transitions (Astro) | Built into modern browsers |
| **motion** (Framer Motion) | ~30kb | React: complex, spring-based | Industry standard for React |
| **GSAP** | ~25kb | Timeline animations, scroll-driven | Most powerful, good for complex sequences |
| **GSAP ScrollTrigger** | +8kb | Scroll-linked animations | Pairs with GSAP for scroll-driven |
| **Lenis** | ~10kb | Smooth scrolling | Creates buttery smooth scroll feel |
| **auto-animate** | ~4kb | List reordering, layout shifts | Automatic with minimal config |
| **Anime.js** | ~17kb | Multi-property, timeline | Alternative to GSAP, lighter |

**Recommendation for Astro sites:** CSS transitions for hover/focus, View Transitions for page navigation, IntersectionObserver for scroll reveals. Add `motion` only for React islands that need complex animation.

## Sources & Further Reading

- **Material Design 3: Motion** — m3.material.io/styles/motion — The most comprehensive motion design system documentation available. Essential reading.
- **Apple HIG: Motion** — developer.apple.com/design/human-interface-guidelines/motion — Apple's principles for purposeful animation.
- **Creating Usability with Motion (UX in Motion)** — The 12 UX in Motion principles. Foundational framework.
- **An Animated Guide to Easing (Josh Comeau)** — joshwcomeau.com — Excellent interactive guide to understanding easing curves.
- **Framer Motion Documentation** — motion.dev — Best-in-class React animation library docs.
- **GSAP Documentation** — gsap.com — The most powerful web animation library.
- **View Transitions API (MDN)** — developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API
- **Lenis** — lenis.darkroom.engineering — Smooth scroll library.
- **Cubic Bezier** — cubic-bezier.com — Interactive easing curve tool.
- **"Animation at Work" by Rachel Nabors** — A book on web animation principles and practice.
- **Reduced Motion (web.dev)** — web.dev/prefers-reduced-motion — Google's guide to accessible motion.
