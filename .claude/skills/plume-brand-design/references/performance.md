# Performance & Technical Quality — Reference Guide

## Purpose

Performance is a design choice. A beautiful site that loads in 8 seconds communicates "I don't respect your time." A fast site communicates craft and competence. For a portfolio site, performance IS the product — it demonstrates engineering quality before the visitor reads a single word.

## Core Web Vitals Targets

Google's Core Web Vitals measure real-world user experience. These are the "good" thresholds (measured at the 75th percentile of all page views):

| Metric | What It Measures | Target | Design Impact |
|--------|-----------------|--------|---------------|
| **LCP** (Largest Contentful Paint) | Time for the largest visible element to render | ≤ 2.5s | Hero images, web fonts, above-the-fold content |
| **CLS** (Cumulative Layout Shift) | Visual stability — how much the page shifts during load | ≤ 0.1 | Font loading, image dimensions, dynamic content |
| **INP** (Interaction to Next Paint) | Responsiveness to user input | ≤ 200ms | JavaScript execution, animation performance |

### Industry Pass Rates (2025 Web Almanac)

- Only **48% of mobile pages** and **56% of desktop pages** pass all three CWV
- **LCP** is the hardest to pass: only 62% of mobile pages achieve "good"
- **INP**: 77% of mobile pages pass
- **CLS**: 81% of mobile pages pass
- E-commerce sites passing all three see **15-30% conversion improvements**
- Google's March 2026 core update strengthened performance weight in ranking

Sources: [NitroPack CWV 2026](https://nitropack.io/blog/most-important-core-web-vitals-metrics/), [Mewa Studio CWV 2026](https://www.mewastudio.com/en/blog/seo-core-web-vitals-2026)

### How Design Choices Affect CWV

**LCP killers:**
- Unoptimized hero images (largest element on page)
- Web fonts that block rendering (FOIT — Flash of Invisible Text)
- Render-blocking CSS with unused styles — 85% of mobile pages still fail the render-blocking resources audit; on slow mobile, render delay accounts for up to 69% of total LCP time
- Large JavaScript bundles that delay hydration

**CLS killers:**
- Images without explicit width/height attributes
- Fonts that swap with different metrics (fallback → web font shift)
- Dynamically injected content above the fold
- Ads or embeds without reserved space

**INP killers:**
- Heavy JavaScript on the main thread
- Non-composited animations (animating layout properties)
- Long event handlers on interactive elements

## Performance Budget

Set a performance budget before starting development. Key distinction: **budgets prevent regression** (set to worst acceptable); **goals are aspirational** (set to best desired). Review budgets every 2-4 weeks.

| Resource | Budget | Notes |
|----------|--------|-------|
| **Total page weight** | ≤ 500KB (initial load) | Compressed transfer size. Industry guidance: mobile pages ideally under 1MB, but for a portfolio, aim much lower. |
| **JavaScript** | ≤ 100KB (compressed) | For a static portfolio, aim for ≤ 50KB. Industry standard for interactive pages: ≤ 400KB gzipped. |
| **CSS** | ≤ 50KB (compressed) | Tailwind purging helps enormously. Critical CSS (above-the-fold) should be inlined and stay under 14KB compressed with HTML. |
| **Fonts** | ≤ 100KB total | 2-3 WOFF2 files max |
| **Hero image** | ≤ 200KB | Compressed WebP/AVIF |
| **LCP** | ≤ 2.5s | On 4G connection |
| **Time to Interactive** | ≤ 3.5s | On 4G connection |

### How to Set Budgets (SpeedCurve methodology)
1. Examine 2-4 weeks of historical data for a given metric
2. Identify the worst performance number in that period
3. Set your budget at that number — the budget is a ceiling to prevent regression
4. Set aspirational goals separately (e.g., LCP ≤ 1.0s)
5. Track: Backend/TTFB, Start Render, LCP, Image size, Long Tasks time

**For an Astro static site:** These budgets are very achievable. Astro ships zero JS by default.

Sources: [SpeedCurve Performance Budgets](https://www.speedcurve.com/blog/performance-budgets/), [InMotion 2026 Standards](https://www.inmotionhosting.com/blog/web-performance-benchmarks/)

## Font Performance

### The Font Loading Problem

Web fonts create a loading dilemma:
- **FOIT** (Flash of Invisible Text): Text is hidden until the font loads. Prevents reading.
- **FOUT** (Flash of Unstyled Text): Text shows in fallback font, then swaps. Causes layout shift.

### Optimal Strategy

1. **Self-host in WOFF2** — No third-party DNS lookup, no CORS, cached on your domain. WOFF2 uses Brotli compression, delivering ~30% better compression than WOFF.
2. **Choose the right `font-display` value:**
   - `swap` (0ms block, infinite swap) — best for branding/heading fonts where you want the custom font
   - `optional` (100ms block, no swap) — best for body text; eliminates CLS entirely (CLS = 0 from fonts); uses web font only if it loads in ~100ms
   - `fallback` (100ms block, 3s swap) — balanced middle ground
3. **Preload the primary font** (only when font is declared inline, not in external stylesheet):
   ```html
   <link rel="preload" href="/fonts/body.woff2" as="font" type="font/woff2" crossorigin>
   ```
4. **Inline @font-face declarations** in `<head>` `<style>` tags rather than external stylesheets — browser discovers fonts earlier
5. **Match fallback metrics** to minimize CLS using font face override descriptors:
   ```css
   @font-face {
     font-family: "Body Fallback";
     src: local("Helvetica Neue"), local("Arial");
     size-adjust: 105%;
     ascent-override: 95%;
     descent-override: 22%;
     line-gap-override: 0%;
   }
   ```
   Use [Capsize](https://seek-oss.github.io/capsize/) or [Fallback Font Generator](https://screenspan.net/fallback) to calculate override values for your specific font pairing.
6. **Use variable fonts** — One file instead of multiple weight files
7. **Subset** — Strip unused character ranges (Latin only for English sites). Latin fonts typically contain 100-1,000 glyphs; subsetting can dramatically reduce file size.

### Browser Default Block Periods
- Chromium/Firefox: 2-3 second block period before showing fallback
- Safari: Indefinite block period (text stays invisible until font loads)
- This is why `font-display` is critical — it overrides these unhelpful defaults

Sources: [web.dev Font Best Practices](https://web.dev/articles/font-best-practices), [DebugBear Font Layout Shift](https://www.debugbear.com/blog/web-font-layout-shift), [FontFYI font-display strategies](https://fontfyi.com/blog/font-display-strategies/)

### Font File Size Reference

| Approach | Typical Size |
|----------|-------------|
| Single variable font (Latin subset) | 20-40KB |
| Single static weight (Latin subset) | 10-20KB |
| Google Fonts CDN (2 families) | 30-60KB + DNS/connection overhead |
| Self-hosted WOFF2 (2 families, 3 weights) | 40-80KB |

## Image Optimization

### Format Selection

| Format | Use Case | Browser Support | Savings vs JPEG |
|--------|----------|----------------|-----------------|
| **WebP** | Default for all images | 97%+ (use as primary) | 25-34% smaller (lossy), 26% smaller (lossless vs PNG) |
| **AVIF** | Best compression, highest quality | 90%+ (use with fallback) | Up to 50-60% smaller |
| **SVG** | Icons, logos, illustrations | Universal | N/A (vector) |
| **PNG** | Screenshots with text, transparency needs | Universal (fallback) | N/A |
| **JPEG** | Photography (if WebP/AVIF not available) | Universal (fallback) | Baseline |

Combined optimization (modern formats + compression + lazy loading + CDN) can reduce image payload by **50-80%**.

### Responsive Images

```html
<!-- Hero / LCP image — eager, high priority -->
<img
  src="hero-800.webp"
  srcset="hero-400.webp 400w, hero-800.webp 800w, hero-1600.webp 1600w"
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
  width="1600"
  height="900"
  alt="Description"
  loading="eager"
  fetchpriority="high"
  decoding="async"
>

<!-- Below-the-fold image — lazy loaded -->
<img
  src="project-800.webp"
  srcset="project-400.webp 400w, project-800.webp 800w, project-1600.webp 1600w"
  sizes="(max-width: 700px) 100vw, 700px"
  width="1600"
  height="900"
  alt="Description"
  loading="lazy"
  decoding="async"
>
```

**Recommended responsive breakpoints:** 400w, 500w, 700w (mobile), 700w, 1200w, 1600w (desktop), with a media query threshold around 700px.

**Rules:**
- Always include `width` and `height` attributes (prevents CLS)
- Use `loading="lazy"` for below-the-fold images — **never lazy-load the LCP image**
- Use `loading="eager"` + `fetchpriority="high"` for above-the-fold hero/LCP images
- Preload the hero image: `<link rel="preload" as="image" href="hero.webp">`
- Use `decoding="async"` to prevent image decode from blocking main thread
- Generate multiple sizes at build time (Astro `<Image>` component does this)

Sources: [Request Metrics Image Guide 2026](https://requestmetrics.com/web-performance/high-performance-images/), [MDN Fix Image LCP](https://developer.mozilla.org/en-US/blog/fix-image-lcp/), [FrontendTools Image Optimization 2025](https://www.frontendtools.tech/blog/modern-image-optimization-techniques-2025)

### Image Compression Targets

| Type | Quality Setting | Typical Savings |
|------|----------------|----------------|
| Hero/feature images | WebP quality 80-85 | 60-70% vs JPEG |
| Thumbnails | WebP quality 75-80 | 65-75% vs JPEG |
| OG images | WebP quality 80, 1200x630px min | Target ≤ 100KB |
| AVIF hero images | Quality 50-80 | Up to 50% smaller than JPEG |
| AVIF thumbnails | Quality 50-70 | Up to 60% smaller than JPEG |

**Recommended quality ranges for visually lossless results:**
- WebP: 70-85% quality
- AVIF: 50-80% quality

## CSS Performance

### Critical CSS

Inline the CSS needed for above-the-fold content directly in `<style>` tags. Load the rest asynchronously. Astro handles this well by default.

### Tailwind v4 Purging

Tailwind v4 with the Vite plugin automatically tree-shakes unused styles. The output CSS typically ships at **5-15KB compressed** — far better than most CSS frameworks. However, the utility-first nature can still result in a significant amount of code the browser must parse before first paint.

**Common pitfalls that cause CSS bloat:** improper content path configuration, excessive use of arbitrary values (`[123px]`), redundant framework mixing, and `@import` chains that create sequential downloads.

Source: [Medium: Tailwind and Critical CSS (2026)](https://medium.com/@linz07m/tailwind-and-critical-css-a96080949539)

### Minimize Custom CSS

- Prefer Tailwind utilities over custom CSS where possible
- Use CSS custom properties for dynamic values, Tailwind utilities for static ones
- Avoid `@import` chains — they create sequential downloads

## Animation Performance

### GPU-Accelerated Properties (Composited)

**Animate these — they don't trigger layout or paint:**
- `transform` (translate, scale, rotate, skew)
- `opacity`
- `filter` (blur, brightness — use sparingly)
- `clip-path`

### Properties That Trigger Reflow (Avoid Animating)

- `width`, `height` → Use `transform: scale()` instead
- `top`, `left`, `bottom`, `right` → Use `transform: translate()` instead
- `margin`, `padding` → Pre-allocate space, animate `transform`
- `border-width` → Animate `box-shadow` or `outline` instead
- `font-size` → Animate `transform: scale()` instead

### `will-change` Usage

```css
/* Apply BEFORE the animation starts */
.will-animate {
  will-change: transform, opacity;
}

/* Remove after animation if possible */
```

**Rules:**
- Don't apply `will-change` to everything (wastes GPU memory)
- Apply it to elements you KNOW will animate
- The browser already optimizes for `:hover` — don't add `will-change` for simple hover effects

## SEO as Brand

In 2025-2026, meta tags are the bridge between your content, Google's AI, and user intent. Schema markup has moved from "technical nice-to-have" to **core infrastructure for AI-driven discovery** — visibility is now negotiated across Google rich results, AI Overviews, and generative platforms that summarize, recommend, and cite sources.

### Essential Meta Tags

```html
<head>
  <!-- Title: under 60 chars, main keywords toward the beginning -->
  <title>Page Title — Brand Name</title>
  <!-- Description: 150-160 chars, unique per page, acts as mini-preview -->
  <meta name="description" content="Concise description (150-160 chars)">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- Open Graph — minimum 1200x630px image -->
  <meta property="og:title" content="Page Title">
  <meta property="og:description" content="Description for social sharing">
  <meta property="og:image" content="https://site.com/og-image.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:url" content="https://site.com/page">
  <meta property="og:type" content="website">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Page Title">
  <meta name="twitter:description" content="Description">
  <meta name="twitter:image" content="https://site.com/og-image.png">

  <!-- Canonical -->
  <link rel="canonical" href="https://site.com/page">

  <!-- Favicon -->
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">
</head>
```

### Structured Data (JSON-LD)

For a portfolio/personal site, use **ProfilePage + Person** schemas. ProfilePage tells search engines "this is a profile page about this specific person," enabling stronger entity recognition, clearer authorship signals, and a more consistent presence in search results.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "mainEntity": {
    "@type": "Person",
    "name": "Your Name",
    "url": "https://yoursite.com",
    "jobTitle": "AI Engineer",
    "description": "Brief professional bio",
    "image": "https://yoursite.com/headshot.webp",
    "sameAs": [
      "https://github.com/username",
      "https://linkedin.com/in/username",
      "https://twitter.com/username"
    ],
    "knowsAbout": ["AI Engineering", "LLM Pipelines", "Full-Stack Development"]
  }
}
</script>
```

For case study pages, consider adding **CreativeWork** schema:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": "Project Title",
  "description": "Brief project description",
  "author": {
    "@type": "Person",
    "name": "Your Name"
  },
  "dateCreated": "2025-01-15"
}
</script>
```

### Portfolio-Specific SEO Tips

- **Project descriptions** should cover: client objectives/challenges, your process/solutions, tangible outcomes
- **About page** is a key SEO asset — include professional bio, skills, and industry keywords
- **Alt text** on every image — describe the content, not just "screenshot"
- **FAQ sections** with accordion format can target long-tail keywords and featured snippets
- Validate structured data with [Google Rich Results Test](https://search.google.com/test/rich-results)

Sources: [Pixpa Portfolio SEO Guide](https://www.pixpa.com/blog/how-to-optimize-your-portfolio-website-for-seo), [OptimizeUp Person Schema 2025](https://optimizeup.com/schema-org-person-markup-identity-branding-2025/), [Google ProfilePage Docs](https://developers.google.com/search/docs/appearance/structured-data/profile-page)

### Sitemap & Robots

- Generate a sitemap.xml (Astro has `@astrojs/sitemap` integration)
- Include a robots.txt allowing all crawling
- Submit sitemap to Google Search Console

## Testing Tools

| Tool | URL | Purpose |
|------|-----|---------|
| **Lighthouse** | Built into Chrome DevTools | Full CWV audit, accessibility, SEO, best practices |
| **PageSpeed Insights** | pagespeed.web.dev | Real-world CWV data from Chrome User Experience Report |
| **WebPageTest** | webpagetest.org | Detailed waterfall analysis, filmstrip view |
| **Bundlephobia** | bundlephobia.com | Check npm package sizes before adding |
| **Squoosh** | squoosh.app | Image compression comparison tool |
| **SVGOMG** | jakearchibald.github.io/svgomg | SVG optimization tool |

## Sources & Further Reading

### Core Web Vitals & Performance
- **web.dev: Core Web Vitals** — [web.dev/vitals](https://web.dev/vitals) — Google's performance metrics guide
- **web.dev: CWV Thresholds** — [web.dev/articles/defining-core-web-vitals-thresholds](https://web.dev/articles/defining-core-web-vitals-thresholds) — How thresholds were defined
- **NitroPack: CWV 2026** — [nitropack.io/blog/most-important-core-web-vitals-metrics](https://nitropack.io/blog/most-important-core-web-vitals-metrics/) — Current pass rates and industry data
- **Mewa Studio: CWV 2026** — [mewastudio.com/en/blog/seo-core-web-vitals-2026](https://www.mewastudio.com/en/blog/seo-core-web-vitals-2026) — Google March 2026 update impact

### Font Loading
- **web.dev: Font Best Practices** — [web.dev/articles/font-best-practices](https://web.dev/articles/font-best-practices) — Optimal font loading strategies
- **DebugBear: Font Layout Shift** — [debugbear.com/blog/web-font-layout-shift](https://www.debugbear.com/blog/web-font-layout-shift) — CLS from font loading fixes
- **FontFYI: font-display strategies** — [fontfyi.com/blog/font-display-strategies](https://fontfyi.com/blog/font-display-strategies/) — swap vs fallback vs optional comparison

### Image Optimization
- **Request Metrics: Image Guide 2026** — [requestmetrics.com/web-performance/high-performance-images](https://requestmetrics.com/web-performance/high-performance-images/) — Format comparisons and responsive images
- **FrontendTools: Image Optimization 2025** — [frontendtools.tech](https://www.frontendtools.tech/blog/modern-image-optimization-techniques-2025) — WebP/AVIF compression ratios
- **MDN: Fix Image LCP** — [developer.mozilla.org/en-US/blog/fix-image-lcp](https://developer.mozilla.org/en-US/blog/fix-image-lcp/) — fetchpriority and loading strategies

### CSS & Performance Budgets
- **SpeedCurve: Performance Budgets** — [speedcurve.com/blog/performance-budgets](https://www.speedcurve.com/blog/performance-budgets/) — How to set and enforce budgets
- **MDN: Performance Budgets** — [developer.mozilla.org/en-US/docs/Web/Performance/Guides/Performance_budgets](https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/Performance_budgets) — Budget methodology
- **Medium: Tailwind + Critical CSS** — [medium.com/@linz07m](https://medium.com/@linz07m/tailwind-and-critical-css-a96080949539) — Tailwind v4 critical CSS extraction

### SEO & Structured Data
- **Google: ProfilePage Structured Data** — [developers.google.com](https://developers.google.com/search/docs/appearance/structured-data/profile-page) — Official ProfilePage schema docs
- **OptimizeUp: Person Schema 2025** — [optimizeup.com](https://optimizeup.com/schema-org-person-markup-identity-branding-2025/) — Identity branding with Person markup
- **Pixpa: Portfolio SEO Guide** — [pixpa.com/blog](https://www.pixpa.com/blog/how-to-optimize-your-portfolio-website-for-seo) — Portfolio-specific SEO strategies

### General
- **Astro Performance** — [docs.astro.build](https://docs.astro.build) — Static-first architecture for optimal performance
- **DebugBear: 2025 in Web Performance** — [debugbear.com/blog/2025-in-web-performance](https://www.debugbear.com/blog/2025-in-web-performance) — Year in review
- **Chrome User Experience Report (CrUX)** — [developer.chrome.com/docs/crux](https://developer.chrome.com/docs/crux) — Real-world performance data
