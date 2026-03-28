# Imagery & Visual Elements — Reference Guide

## Purpose

Imagery bridges the gap between abstract brand identity and visceral emotional response. While typography and color define the structural feel, imagery — photography, illustration, iconography, patterns, and graphic devices — provides the texture, warmth, and specificity that makes a brand feel real. Every visual element must feel like it belongs to the same world.

## Photography Direction

### Art Direction Framework

Define a photography style through five dimensions:

**1. Subject Matter**
- What/who is shown? (People, objects, environments, abstract)
- What context? (Working, relaxed, in-motion, contemplative)
- What is NEVER shown? (Stock-photo handshakes, forced smiles, cluttered desks)

**2. Composition**
- Cropping style: tight crops (intimate), wide shots (environmental), macro (detail)
- Rule of thirds vs. centered vs. asymmetric
- Foreground/background relationship: shallow DOF, deep focus, layered
- Negative space allocation: minimal or generous

**3. Lighting**
- Natural vs. studio
- Direction: front-lit (flat, editorial), side-lit (dramatic), backlit (atmospheric)
- Quality: hard light (sharp shadows) vs. soft light (diffused, gentle)
- Color temperature: warm (golden hour) vs. cool (blue hour, overcast)

**4. Color Treatment**
- Saturated vs. desaturated
- High contrast vs. low contrast
- Color grading: warm shift, cool shift, split-toned, monochromatic
- Consistency: all photos should feel like they were shot in the same session

**5. Mood**
- The emotional quality: calm, energetic, contemplative, confident, intimate
- Movement: static/posed vs. caught mid-action
- Eye contact: direct (engaging), averted (narrative), no people

### Photography for AI/Tech Portfolios Specifically

- Avoid: generic tech imagery (glowing circuits, abstract data visualizations, stock AI art)
- Prefer: real workspace environments, genuine tools, architectural details, abstract textures from the physical world
- Consider: whether photography is even needed — some of the best tech portfolio sites use zero photography and rely entirely on typography, color, and interactive elements

## Illustration Style

### When to Use Illustration

- When photography feels too literal or too stock
- To explain complex concepts visually (process diagrams, technical architecture)
- To add personality and warmth that photography can't provide
- To maintain consistency (you control every pixel)
- When the brand is more conceptual than physical

### Illustration Style Parameters

| Parameter | Options |
|-----------|---------|
| **Line weight** | Thin/hairline, medium, bold/chunky |
| **Color usage** | Monochrome, limited palette (2-3 colors), full color |
| **Level of detail** | Minimal/geometric, moderate, highly detailed |
| **Perspective** | Flat/2D, isometric, 3D |
| **Style** | Geometric, organic, hand-drawn, technical/diagrammatic |
| **Fill** | Outlined only, flat fill, gradient, textured |

### Consistency Rules

- Define stroke width as a fixed value (e.g., 2px for web icons, 1.5px for small)
- Use brand colors only — no outside-palette colors in illustrations
- Maintain consistent perspective across all illustrations
- Define a corner radius standard (sharp, slightly rounded, fully rounded)

## Iconography

### Icon System Design

**Style decision matrix:**

| Attribute | Option A | Option B |
|-----------|----------|----------|
| Fill | Outlined (modern, lighter) | Filled (bolder, faster recognition) |
| Corners | Rounded (friendly) | Sharp (precise) |
| Weight | Light/1px (elegant) | Medium/1.5-2px (balanced) |
| Grid | 24×24 (standard) | 20×20 or 16×16 (compact) |
| Detail | Minimal (faster scanning) | Detailed (more expressive) |

**Icon sizing system:**
- xs: 16×16px — inline with text, simple shapes only
- sm: 20×20px — form inputs, compact UI
- md: 24×24px — standard navigation, buttons (default)
- lg: 32×32px — feature highlights, cards
- xl: 48×48px — hero sections, feature grids

**Recommended icon libraries** (customize to match brand):
- Lucide Icons — lucide.dev — Clean, consistent, MIT licensed, good defaults
- Phosphor Icons — phosphoricons.com — Six weights per icon, very flexible
- Heroicons — heroicons.com — By Tailwind team, outline and solid variants
- Tabler Icons — tabler.io/icons — Large set, consistent 24px grid
- Remix Icon — remixicon.com — Extensive set with neutral style

### Custom vs. Library Icons

- **Use a library** for standard UI icons (arrows, menus, search, settings)
- **Create custom** for brand-specific concepts (your logo mark, specialized domain icons)
- **Modify a library** by adjusting stroke weight, corner radius, or adding brand-specific details

## Graphic Devices & Patterns

### Types of Graphic Devices

**Background treatments:**
- Subtle dot grid or line grid (adds texture without competing)
- Noise/grain overlay (adds analog warmth to digital surfaces)
- Gradient meshes (complex multi-point gradients for organic feel)
- Geometric patterns (repeating shapes for structure)
- Topographic/contour lines (popular in tech, conveys complexity)

**Dividers and separators:**
- Geometric lines (horizontal rules with brand-specific style)
- Wave/curve dividers between sections (organic, flowing)
- Angle/diagonal cuts (dynamic, energetic)
- Simple whitespace (minimal, let content breathe)

**Accent elements:**
- Corner decorations (geometric marks in page corners)
- Pull-quote marks (oversized quotation marks in brand typeface)
- Section numbering (large, muted numbers for wayfinding)
- Highlight/underline treatments (hand-drawn, gradient, animated)

### Texture Application

Define how textures layer onto the design:

```
Base layer:     Solid background color
Texture layer:  Subtle noise at 3-8% opacity (adds depth without distraction)
Content layer:  Text and interactive elements
Accent layer:   Brand graphic devices (geometric shapes, gradients)
```

## OG Images & Social Sharing

### OG Image Template System

- Design a reusable template: brand background + content zone for dynamic text
- Size: 1200×630px (standard OG image dimensions)
- Include: logo/mark, page title, optional description, brand color
- Keep text large (readable in tiny Twitter/LinkedIn preview)
- Test at small sizes — OG images are often shown at ~300px wide

### Favicon System

- favicon.ico: 32×32, 16×16 multi-size ICO (legacy support)
- apple-touch-icon: 180×180 PNG
- manifest icons: 192×192, 512×512 PNG
- SVG favicon: scalable, supports dark mode via `prefers-color-scheme`
- Keep it simple — favicons are tiny. A single letter or symbol works best.

## Sources & Further Reading

- **Shopify Polaris: Illustrations** — polaris.shopify.com — Excellent illustration style guide with principles and dos/don'ts
- **Atlassian Design System: Illustration** — atlassian.design/foundations/illustrations — How to build a scalable illustration system
- **Material Design: Iconography** — m3.material.io/styles/icons — Comprehensive icon design guidelines
- **Lucide Icons** — lucide.dev — Open-source icon library, well-structured
- **The Noun Project** — thenounproject.com — When you need a specific icon that libraries don't cover
- **Refactoring UI** — Chapters on imagery, shadows, and depth. Practical and opinionated.
- **Unsplash** — unsplash.com — Free photography, but curate carefully to avoid stock-photo feel
- **Open Graph Protocol** — ogp.me — Specification for OG tags
- **RealFaviconGenerator** — realfavicongenerator.net — Generates all favicon variants from a single source
