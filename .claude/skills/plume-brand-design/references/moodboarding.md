# Moodboarding & Art Direction — Reference Guide

## Purpose

Moodboarding bridges strategy and execution. It translates abstract brand attributes ("precise, warm, forward-thinking") into concrete visual directions the user can see and react to. The critical rule: **show, don't describe.** Render actual HTML pages, not text descriptions of what a design might look like.

## Art Direction Vocabulary

Before generating moodboards, understand the visual language options available. Each brand attribute can be expressed through many different aesthetic territories.

### Aesthetic Territories (Non-Exhaustive)

| Territory | Characteristics | Signals |
|-----------|----------------|---------|
| **Swiss/International** | Grid precision, clean sans-serif, high contrast, structured whitespace | Precision, clarity, authority |
| **Brutalist** | Raw HTML aesthetics, monospaced type, exposed structure, stark contrast | Authenticity, technical credibility, anti-corporate |
| **Editorial/Magazine** | Serif headlines, generous whitespace, asymmetric layouts, large type | Sophistication, depth, storytelling |
| **Warm Minimal** | Soft neutrals, rounded forms, ample breathing room, subtle warmth | Approachability, calm, trust |
| **Dark Luxury** | Dark backgrounds, refined type, metallic accents, restrained motion | Premium, exclusive, polished |
| **Retro-Futuristic** | Mono type, terminal aesthetics, neon accents, scanline effects | Technical depth, hacker culture, forward-thinking |
| **Organic/Natural** | Earth tones, flowing shapes, handwritten elements, textured surfaces | Human, sustainable, grounded |
| **Geometric/Constructivist** | Bold shapes, primary colors, diagonal composition, strong rhythm | Energy, innovation, boldness |
| **Soft/Pastel** | Muted colors, rounded UI, gentle gradients, playful icons | Friendly, accessible, modern |
| **Industrial/Utilitarian** | Monochrome, dense information, small type, data-forward | Serious, functional, no-nonsense |
| **Neo-Grotesque** | Clean sans-serif, neutral palette, systematic spacing, understated | Professional, scalable, timeless |
| **Maximalist** | Layered textures, mixed media, dense composition, bold color | Creative, energetic, memorable |

### Mapping Attributes to Territories

Use the brand attributes from Phase 1 to narrow the territory:

- "Precise + Warm" → Swiss with warm neutrals, or Warm Minimal with structured grid
- "Technical + Bold" → Brutalist with accent color, or Retro-Futuristic
- "Sophisticated + Accessible" → Editorial with modern type, or Neo-Grotesque with personality

Generate 2-3 directions that interpret the attributes differently. Diversity of interpretation is the point — if all 3 moodboards look similar, the exploration is too narrow.

## Moodboard Construction

### What Each Moodboard Page Must Include

Render each moodboard as a single HTML page containing:

1. **Color palette strip** — 5-8 swatches showing primary, accent, neutrals, and background. Display hex values.

2. **Typography showcase** —
   - A large headline in the proposed display typeface
   - A subheadline in the proposed secondary typeface
   - A paragraph of body text at intended size
   - A caption/small text sample
   - Show the typeface names

3. **Hero section mockup** — A rough layout showing how a homepage hero might feel:
   - Headline text (can be placeholder but tone-appropriate)
   - Spatial arrangement (centered, left-aligned, asymmetric)
   - Background treatment (solid, gradient, texture, image)

4. **Component samples** — 2-3 small UI elements:
   - A button (primary and secondary variants)
   - A card or content block
   - A navigation bar sketch

5. **Texture/pattern swatch** — Show the background treatment, any grain/noise/gradient/pattern that contributes to atmosphere

6. **Motion description** — A short text note describing the motion personality:
   - "Animations are slow, smooth, and deliberate — long fades, gentle parallax"
   - "Snappy, instant transitions — no decorative motion, pure function"
   - "Playful springs with overshoot — things bounce and settle"

7. **Mood keywords** — 3-5 words that capture the overall feeling

### Moodboard Rendering Guidelines

- Use Google Fonts CDN for moodboards (fast iteration, no setup). For production, self-host as WOFF2 — see `references/typography-system.md` and `references/performance.md`.
- Load fonts via `<link>` tags from fonts.google.com in moodboard files
- Use inline CSS for self-contained pages
- Target 1200px viewport width as the reference size
- Make it look intentional and designed, not wireframe-rough
- Each moodboard should feel like a different designer made it
- Save to a moodboard directory in the project (e.g., `src/pages/moodboard/`)

### Moodboard HTML Structure

Use this as a structural starting point (the actual styling should be radically different per direction):

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Moodboard: [Direction Name]</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=[Font1]&family=[Font2]&display=swap" rel="stylesheet">
  <style>
    /* ALL styles inline — self-contained */
    :root {
      --primary: hsl(...);
      --accent: hsl(...);
      --bg: hsl(...);
      --surface: hsl(...);
      --fg: hsl(...);
      --muted: hsl(...);
      --border: hsl(...);
      --font-display: '...', sans-serif;
      --font-body: '...', sans-serif;
    }
    /* Reset + base styles + all component styles */
  </style>
</head>
<body>
  <!-- Section 1: Direction Name + Mood Keywords -->
  <header>
    <h1>[Direction Name]</h1>
    <p class="keywords">keyword / keyword / keyword / keyword</p>
  </header>

  <!-- Section 2: Color Palette -->
  <section class="palette">
    <div class="swatch" style="background: var(--primary)">
      <span>Primary<br>#hex</span>
    </div>
    <!-- ... more swatches ... -->
  </section>

  <!-- Section 3: Typography Showcase -->
  <section class="typography">
    <h2 class="display">Display Headline — [Font Name]</h2>
    <h3 class="heading">Section Heading Example</h3>
    <p class="body">Body text paragraph showing the intended reading experience...</p>
    <p class="caption">Caption text — [Font Name], 14px</p>
  </section>

  <!-- Section 4: Hero Section Mockup -->
  <section class="hero-mockup">
    <!-- This should look like a real hero section, not a wireframe -->
  </section>

  <!-- Section 5: Component Samples -->
  <section class="components">
    <button class="btn-primary">Primary Action</button>
    <button class="btn-secondary">Secondary</button>
    <!-- A card, a nav snippet, etc. -->
  </section>

  <!-- Section 6: Texture/Pattern Showcase -->
  <section class="texture">
    <!-- Show background treatments, grain, gradients, patterns -->
  </section>

  <!-- Section 7: Motion Description -->
  <section class="motion-note">
    <p>"[Description of how things move in this direction]"</p>
  </section>
</body>
</html>
```

**Critical:** This template is structural only. The actual implementation must be heavily customized to match the aesthetic direction. A "Brutalist" moodboard should use raw, unstyled HTML elements and monospace type. A "Dark Luxury" moodboard should use refined spacing, subtle animations, and a completely different visual treatment. The template should be unrecognizable across different directions.

### Naming Convention

Give each direction a memorable 2-3 word name that the user can reference:
- "Swiss Warmth"
- "Terminal Poetics"
- "Quiet Editorial"
- "Dark Precision"

This name becomes shorthand for all subsequent creative discussions.

## The Selection Gate

After presenting moodboards, facilitate the user's selection:

1. Ask which direction resonates most (or which elements from different boards)
2. If mixing: identify the primary direction and which specific elements transfer from others
3. Document the selection with rationale
4. This becomes the "Art Direction Brief" that governs all Phase 3 decisions

**Common user responses and how to handle them:**
- "I like the colors from A but the typography from B" → Valid. Create a hybrid.
- "None of these feel right" → Ask what's missing. Generate 2 more directions informed by the feedback.
- "I like this one but less [adjective]" → Dial the specific quality. "Less dark" = raise background lightness. "Less rigid" = add organic elements.
- "Can you combine all three?" → Gently push back. Combining everything creates visual noise. Help them prioritize.

## Sources & Further Reading

- **Collins case studies** (wearecollins.com) — See how they present multiple creative directions with distinct conceptual labels
- **It's Nice That** (itsnicethat.com) — Contemporary design inspiration across illustration, typography, branding
- **Dribbble & Behance** — Real-world brand identity projects showing moodboard-to-final pipelines
- **The Brand Identity** (the-brandidentity.com) — Curated branding projects with detailed process documentation
- **Typewolf** (typewolf.com) — Font pairing inspiration organized by aesthetic direction
- **Muzli by InVision** (muz.li) — Curated design inspiration, good for identifying trending aesthetic territories
