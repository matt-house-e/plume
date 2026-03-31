# Web Accessibility for Design Systems — Comprehensive Reference

## Purpose

Practical, implementable accessibility guidance for brand and design system work. Covers WCAG 2.2 AA requirements with specific CSS/HTML patterns. All guidance targets the current standard (WCAG 2.2, published October 2023, updated December 2024).

---

## 1. Focus Management

### WCAG Criteria
- **2.4.7 Focus Visible** (Level A): Keyboard focus indicator must be visible
- **2.4.11 Focus Not Obscured (Minimum)** (Level AA): Focused item not fully hidden by other content
- **2.4.13 Focus Appearance** (Level AAA): Focus indicator must meet minimum area and contrast

### CSS Patterns

**Universal focus indicator (works on any background):**
```css
:focus-visible {
  outline: 3px solid black;
  box-shadow: 0 0 0 6px white;
}
```

**Inverted for dark surfaces:**
```css
:focus-visible {
  outline: 3px solid white;
  box-shadow: 0 0 0 6px black;
}
```

**Double-outline "Oreo" pattern (maximum visibility):**
```css
:focus-visible {
  outline: 9px double black;
  box-shadow: 0 0 0 6px white;
}
```

**Offset outline (breathing room between element and ring):**
```css
:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}
```

**Inner outline (useful for buttons):**
```css
:focus-visible {
  outline: 4px solid var(--accent);
  outline-offset: -4px;
}
```

**Backward-compatible keyboard-only focus:**
```css
button:focus {
  /* fallback focus styles */
  outline: 2px solid var(--accent);
}

button:focus:not(:focus-visible) {
  /* undo for mouse/touch users */
  outline: none;
}

button:focus-visible {
  /* keyboard-only styles */
  outline: 3px solid var(--accent);
  outline-offset: 2px;
}
```

### Requirements
- Minimum contrast: **3:1** between focused and unfocused states (SC 1.4.11)
- Minimum area: at least as large as a **2px thick perimeter** around the element
- Once you override browser defaults, **you own the contrast requirement**
- Modern browsers already apply `:focus-visible` only on keyboard navigation
- Never use `outline: none` without providing a replacement indicator

### Focus Trapping in Modals
- When a modal opens, move focus to the first focusable element (or the cancel button)
- Tab/Shift+Tab must cycle through focusable elements **within the modal only**
- Escape key must close the modal
- On close, return focus to the element that triggered the modal
- Use `tabindex="-1"` to make non-interactive containers programmatically focusable
- Use `inert` attribute on background content to prevent screen reader access

**Source:** [Sara Soueidan — Focus Indicators](https://www.sarasoueidan.com/blog/focus-indicators/) | [W3C Understanding Focus Visible](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html) | [W3C Focus Appearance](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html)

---

## 2. Screen Reader Considerations

### Semantic HTML (Always First)
```html
<header>   <!-- landmark: banner -->
<nav>      <!-- landmark: navigation -->
<main>     <!-- landmark: main -->
<aside>    <!-- landmark: complementary -->
<footer>   <!-- landmark: contentinfo -->
<section>  <!-- landmark: region (when labeled) -->
```

### ARIA Rules
1. **First rule of ARIA:** If you can use a native HTML element with built-in semantics, do so instead of adding ARIA
2. Pages with ARIA average **57 errors** vs 27 without — misuse is rampant
3. Label duplicate landmarks: `<nav aria-label="Primary">` and `<nav aria-label="Footer">`

### ARIA Live Regions
```html
<!-- Polite: announces when screen reader is idle -->
<div aria-live="polite" aria-atomic="true">
  Status message here
</div>

<!-- Assertive: interrupts current announcement -->
<div aria-live="assertive" role="alert">
  Error message here
</div>
```

### Common Patterns
- Every `<img>` needs `alt` text (or `alt=""` for decorative images)
- Every form input needs a `<label>` with matching `for`/`id`
- Links must have discernible text (never empty `<a>` tags)
- Buttons must have discernible text (never empty `<button>` tags)
- Use `aria-describedby` for supplementary help text on form fields
- Use `aria-current="page"` on navigation links for the current page
- Use `role="status"` for live region updates that are not urgent

**Source:** [W3C ARIA Landmark Regions](https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/) | [MDN ARIA Landmark Roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/landmark_role) | [W3C First Rule of ARIA](https://www.w3.org/TR/using-aria/#firstrule)

---

## 3. Keyboard Navigation

### Tab Order
- Default order follows DOM source order — keep DOM order logical (left to right, top to bottom)
- Never use `tabindex` values greater than 0 (creates unpredictable order)
- `tabindex="0"`: element is focusable in natural DOM order
- `tabindex="-1"`: element is focusable programmatically only (via `.focus()`)

### Skip Links
```html
<body>
  <a href="#main-content" class="skip-link">Skip to main content</a>
  <header>...</header>
  <nav>...</nav>
  <main id="main-content" tabindex="-1">...</main>
</body>
```

```css
.skip-link {
  position: absolute;
  top: -100%;
  left: 0;
  z-index: 100;
  padding: 0.75rem 1.5rem;
  background: var(--foreground);
  color: var(--background);
  text-decoration: none;
  font-weight: 600;
}

.skip-link:focus {
  top: 0;
}
```

### Required Keyboard Interactions
| Element | Expected Keys |
|---------|--------------|
| Links | Enter to activate |
| Buttons | Enter or Space to activate |
| Checkboxes | Space to toggle |
| Radio groups | Arrow keys to move, Space to select |
| Tabs | Arrow keys to navigate, Enter/Space to activate |
| Dropdowns | Arrow keys to navigate, Enter to select, Escape to close |
| Modals | Tab to cycle, Escape to close |

**Source:** [WebAIM Keyboard Accessibility](https://webaim.org/techniques/keyboard/) | [WebAIM Skip Navigation](https://webaim.org/techniques/skipnav/)

---

## 4. Color Accessibility

### Contrast Ratios (WCAG 1.4.3, 1.4.6, 1.4.11)
| Element | AA Minimum | AAA Target |
|---------|-----------|------------|
| Normal text (<18px / <14px bold) | 4.5:1 | 7:1 |
| Large text (>=18px / >=14px bold) | 3:1 | 4.5:1 |
| UI components & graphical objects | 3:1 | — |
| Focus indicators | 3:1 | — |

### Beyond Contrast: SC 1.4.1 Use of Color (Level A)
**Never use color alone to convey meaning.** Always pair with:
- **Text labels** (e.g., "Required" not just a red asterisk)
- **Icons/symbols** (e.g., checkmark + green, X + red)
- **Patterns/textures** (e.g., striped vs solid in charts)
- **Underlines** (for links within body text)
- **Shape differences** (e.g., different marker shapes in data viz)

### Practical Patterns
```css
/* Links: underline + color, not color alone */
a {
  color: var(--accent);
  text-decoration: underline;
  text-underline-offset: 0.15em;
  text-decoration-thickness: 1px;
}

/* Error states: icon + color + text */
.field-error {
  color: var(--error);
  border-color: var(--error);
  /* Also add error icon and error message text */
}
```

### Color Blindness Considerations
- Avoid red/green as the only differentiator (affects ~8% of males)
- Test designs with color blindness simulators
- Use blue/orange as a more universally distinguishable pair
- In data visualization, use patterns in addition to colors

**Source:** [WebAIM Contrast and Color](https://webaim.org/articles/contrast/) | [W3C Non-text Contrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html) | [W3C Use of Color](https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html)

---

## 5. Motion Accessibility

### WCAG Criteria
- **2.2.2 Pause, Stop, Hide** (Level A): Auto-playing animation >5s needs pause/stop/hide
- **2.3.1 Three Flashes** (Level A): No content flashes more than 3 times per second
- **2.3.3 Animation from Interactions** (Level AAA): Motion triggered by interaction can be disabled

### CSS Patterns

**Remove all animation for users who prefer reduced motion:**
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

**Progressive enhancement approach (add motion only when allowed):**
```css
/* Default: no motion */
.element {
  opacity: 1;
}

/* Add motion only for users who haven't requested reduction */
@media (prefers-reduced-motion: no-preference) {
  .element {
    animation: fadeSlideIn 0.6s ease-out both;
  }
}
```

**Replace vestibular-triggering animation with safer alternative:**
```css
.animation {
  animation: pulse 1s linear infinite both;
}

@media (prefers-reduced-motion: reduce) {
  .animation {
    /* Replace scale/translate with opacity (not a vestibular trigger) */
    animation: dissolve 4s linear infinite both;
  }
}

@keyframes dissolve {
  0% { opacity: 1; }
  50% { opacity: 0.3; }
  100% { opacity: 1; }
}
```

**JavaScript detection:**
```js
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
  // disable JS-driven animations
}

// Listen for changes
prefersReducedMotion.addEventListener('change', (e) => {
  if (e.matches) { /* disable */ }
  else { /* enable */ }
});
```

### Vestibular Disorder Guidelines
- 35% of adults experience vestibular dysfunction by age 40
- **High-risk motions:** parallax scrolling, large scaling, zooming, spinning, bouncing
- **Lower-risk alternatives:** opacity fades, color transitions, subtle transforms
- Provide on-page toggle for animation independent of OS setting
- Never auto-play video with motion; require user initiation

**Source:** [MDN prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) | [web.dev Motion Accessibility](https://web.dev/learn/accessibility/motion) | [W3C Animation from Interactions](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions.html)

---

## 6. Text Accessibility

### WCAG 1.4.12 Text Spacing (Level AA)
Content must not break when users override these values:
```css
/* Minimum values users must be able to apply */
body {
  line-height: 1.5;            /* >= 1.5x font size */
  letter-spacing: 0.12em;      /* >= 0.12x font size */
  word-spacing: 0.16em;        /* >= 0.16x font size */
}

p + p {
  margin-top: 2em;             /* >= 2x font size paragraph spacing */
}
```

**Implementation:** You do not need to set these values yourself. You need to ensure your layout does not break when a user applies them via browser extension or custom stylesheet. Avoid fixed-height containers that clip text.

### WCAG 1.4.4 Resize Text (Level AA)
- Text must be zoomable to **200%** without loss of content or functionality
- Use relative units (`rem`, `em`, `%`) not `px` for font sizes
- Test at 200% browser zoom — no overlap, no truncation, no horizontal scroll on main content

### Dyslexia-Friendly Design
- **Font choice:** Sans-serif fonts with distinct letterforms (avoid fonts where b/d/p/q are mirrors)
- **Letter spacing:** 0.12em minimum; 0.35x average letter width is ideal per British Dyslexia Association
- **Word spacing:** At least 3.5x the inter-letter spacing
- **Line height:** 1.5 minimum; 1.8 is more comfortable
- **Line length:** 45-75 characters per line (use `max-width: 65ch` on text containers)
- **Alignment:** Left-aligned (never justified — uneven word spacing impairs reading)
- **Background:** Slight off-white or cream can reduce glare (avoid pure white #fff)

### Practical CSS
```css
/* Readable text defaults */
.prose {
  font-size: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);
  line-height: 1.6;
  max-width: 65ch;
  letter-spacing: 0.01em;
  word-spacing: 0.05em;
  text-align: left;
}

/* Ensure no clipping on text spacing override */
.card,
.container {
  overflow: visible; /* or use min-height instead of fixed height */
}
```

**Source:** [W3C Text Spacing](https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html) | [Smashing Magazine Dyslexia-Friendly Mode](https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/) | [Deque Text Spacing](https://dequeuniversity.com/resources/wcag2.1/1.4.12-text-spacing)

---

## 7. Touch Targets

### WCAG 2.5.8 Target Size (Minimum) (Level AA) — New in WCAG 2.2
- **Minimum:** 24x24 CSS pixels
- **Recommended:** 44x44 CSS pixels (Apple HIG) / 48x48dp (Material Design)

### Exceptions
1. **Spacing:** Undersized target is OK if a 24px-diameter circle centered on it does not intersect adjacent targets
2. **Equivalent:** Another target on the page performs the same function and meets size requirements
3. **Inline:** Target is within a sentence or text block
4. **User Agent:** Size is determined by the browser (e.g., native date picker)
5. **Essential:** Specific presentation is legally or informationally required

### CSS Implementation
```css
/* Minimum touch target */
.btn,
.link-icon,
.nav-link {
  min-width: 44px;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

/* Expand tap area without changing visual size (for icon buttons) */
.icon-btn {
  position: relative;
  /* Visual size can be smaller */
}

.icon-btn::after {
  content: '';
  position: absolute;
  inset: -8px; /* expand clickable area */
  /* Adjust inset to reach 44x44 minimum */
}

/* Spacing between adjacent targets */
.nav-list {
  gap: 0.5rem; /* ensure targets don't touch */
}
```

### WCAG 2.5.5 Target Size (Enhanced) (Level AAA)
- Targets must be at least **44x44 CSS pixels** (no exceptions except inline and user agent)

**Source:** [W3C Target Size Minimum](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html) | [AllAccessible Target Size Guide](https://www.allaccessible.org/blog/wcag-258-target-size-minimum-implementation-guide)

---

## 8. Dark Mode Accessibility

### Key Challenges
- **Halation:** Light text on dark backgrounds creates a "halo" effect, especially for users with astigmatism
- **Pure black (#000) is harsh:** Causes eye strain and exaggerates halation
- **Anti-aliasing renders differently:** Text appears thinner/lighter on dark backgrounds
- **Focus indicators may not be visible:** Must adapt to both themes
- **Bright accent colors may overpower:** Can cause glare on dark backgrounds

### Best Practices

**Use dark gray, not pure black:**
```css
:root {
  --background: #0a0a0a;    /* near-black, not #000 */
  --surface: #141414;        /* slightly lighter */
  --surface-elevated: #1e1e1e; /* elevation = lighter */
}
```

**Elevation = lightness in dark mode:**
Higher surfaces should be lighter. This creates visual hierarchy without shadows (which are invisible on dark backgrounds).

**Adjust text rendering:**
```css
@media (prefers-color-scheme: dark) {
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* Text appears thinner on dark backgrounds;
       consider bumping weight or using slightly
       off-white text (#e0e0e0) instead of pure white */
  }
}
```

**Adapt focus indicators per theme:**
```css
@media (prefers-color-scheme: light) {
  :focus-visible {
    outline: 3px solid #0066ff;
    outline-offset: 2px;
  }
}

@media (prefers-color-scheme: dark) {
  :focus-visible {
    outline: 3px solid #66b3ff;
    outline-offset: 2px;
  }
}
```

**Avoid pure white text on dark backgrounds:**
```css
/* Reduce eye strain */
--foreground: #e4e4e7;  /* not #ffffff */
--muted: #a1a1aa;
```

### Testing Checklist
- [ ] All text meets 4.5:1 contrast in both themes
- [ ] Focus indicators visible in both themes (3:1 minimum)
- [ ] UI component borders visible (3:1 against background)
- [ ] No information lost when switching themes
- [ ] Images/icons remain visible (consider adding subtle borders or backgrounds)
- [ ] User can toggle between modes (respect `prefers-color-scheme` AND provide manual toggle)
- [ ] Test in bright ambient light — dark mode can be harder to read outdoors

**Source:** [Smashing Magazine Inclusive Dark Mode](https://www.smashingmagazine.com/2025/04/inclusive-dark-mode-designing-accessible-dark-themes/) | [Stephanie Walter Dark Mode Myth](https://stephaniewalter.design/blog/dark-mode-accessibility-myth-debunked/) | [DubBot Dark Mode A11y](https://dubbot.com/dubblog/2023/dark-mode-a11y.html)

---

## 9. Most Common WCAG Failures (WebAIM Million 2025)

94.8% of the top 1,000,000 home pages fail WCAG 2. Average: 51 errors per page.

| Rank | Failure | % of Pages | WCAG Criterion | Fix |
|------|---------|-----------|----------------|-----|
| 1 | **Low contrast text** | 79.1% | 1.4.3 | Use contrast checker; minimum 4.5:1 for text |
| 2 | **Missing alt text** | 55.5% | 1.1.1 | Add `alt` to every `<img>`; use `alt=""` for decorative |
| 3 | **Missing form labels** | 48.2% | 1.3.1, 4.1.2 | Add `<label for="id">` to every input |
| 4 | **Empty links** | 45.4% | 2.4.4, 4.1.2 | Add text content or `aria-label` to links |
| 5 | **Empty buttons** | 29.6% | 4.1.2 | Add text content or `aria-label` to buttons |
| 6 | **Missing document language** | 15.8% | 3.1.1 | Add `<html lang="en">` |

### ARIA Misuse Warning
- 105.5 million ARIA attributes detected across the million pages (avg 106/page)
- Pages with ARIA average **57 errors** — more than double pages without (27 errors)
- 35% of ARIA menus create accessibility barriers
- **Lesson:** Use semantic HTML first. ARIA is a supplement, not a replacement.

**Source:** [WebAIM Million 2025](https://webaim.org/projects/million/) | [Equalize Digital Top Issues 2024](https://equalizedigital.com/top-accessibility-issues-found-in-2024-infographic/)

---

## Quick-Reference: Design System Accessibility Checklist

### Colors & Contrast
- [ ] All text meets 4.5:1 (AA) or 7:1 (AAA) contrast
- [ ] Large text (>=18px) meets 3:1 minimum
- [ ] UI components meet 3:1 against adjacent colors
- [ ] Color is never the sole indicator of meaning
- [ ] Dark mode tested separately for all contrast requirements

### Focus & Keyboard
- [ ] All interactive elements have visible focus indicators
- [ ] Focus indicators have 3:1 contrast against adjacent colors
- [ ] Tab order follows logical reading flow
- [ ] Skip link provided to bypass navigation
- [ ] Modals trap focus and return it on close
- [ ] All functionality operable by keyboard alone

### Typography & Text
- [ ] Font sizes use relative units (rem/em)
- [ ] Content survives 200% browser zoom without loss
- [ ] Layout does not break with WCAG text spacing overrides
- [ ] Line length capped at ~65ch for body text
- [ ] Body text is left-aligned, not justified

### Touch & Interaction
- [ ] Touch targets are at least 24x24px (44x44px preferred)
- [ ] Adjacent targets have sufficient spacing
- [ ] Form inputs have visible labels (not placeholder-only)

### Motion
- [ ] `prefers-reduced-motion` is respected
- [ ] Auto-playing animations have pause/stop controls
- [ ] No content flashes more than 3 times per second
- [ ] Parallax and large-scale motion can be disabled

### Screen Readers
- [ ] Page uses semantic HTML landmarks
- [ ] All images have appropriate alt text
- [ ] All links and buttons have discernible names
- [ ] Dynamic content uses `aria-live` regions
- [ ] `<html lang>` is set correctly
- [ ] Page has a meaningful `<title>`

---

## Tools for Testing

| Tool | Purpose | URL |
|------|---------|-----|
| axe DevTools | Automated WCAG testing | deque.com/axe |
| WAVE | Visual overlay of issues | wave.webaim.org |
| Lighthouse | Automated auditing | Built into Chrome DevTools |
| Colour Contrast Analyser | Eyedropper contrast checker | tpgi.com/color-contrast-checker |
| NVDA | Free Windows screen reader | nvaccess.org |
| VoiceOver | macOS built-in screen reader | Built into macOS |
| Stark | Figma/Sketch a11y plugin | getstark.co |
| Text Spacing Bookmarklet | Test SC 1.4.12 | github.com/alastc/text-spacing-bookmarklet |
