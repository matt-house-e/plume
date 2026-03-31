# Inspiration Bank — Reference Guide

## Purpose

Great design is informed by great references. This file catalogs world-class websites organized by aesthetic category, notable techniques, animation libraries, and curated galleries. Use this to study what works, identify techniques worth adopting, and build moodboards with real-world precedent.

## Award-Winning & Notable Sites

### Agency & Studio Sites

| Site | URL | Notable For | Tech Stack | Aesthetic |
|------|-----|-------------|------------|-----------|
| **Lusion** | lusion.co | Physics-based WebGL interactions, creative studio showcase | Three.js, custom shaders, GSAP | Experimental / Interactive Art |
| **Metalab** | metalab.com | Buttery smooth page transitions, crisp typography | Framer Motion, Next.js | Premium Minimal |
| **Locomotive** | locomotive.ca | Pioneers of smooth scroll, grain overlays, editorial layout | Locomotive Scroll, GSAP | Editorial / Textured |
| **Cuberto** | cuberto.com | Magnetic buttons, text distortion, fluid mouse follower | GSAP, custom cursor | Playful Premium |
| **Unseen Studio** | unseen.co | Dark, moody, cinematic — massive type with reveal animations | GSAP, Barba.js | Dark Cinematic |
| **Darkroom** (fka Studio Freight) | darkroom.engineering | Open-sourced Lenis, lab experiments published publicly | Lenis, GSAP, R3F, Next.js | Engineering / Experimental |
| **Monopo London** | monopo.london | Fluid grid animations, seamless page morphing | GSAP, custom WebGL | Refined / Agency |
| **14islands** | 14islands.com | Playful scroll animations, organic shapes, warm palettes | Three.js, GSAP, R3F | Warm / Organic |
| **Wild** | wild.as | WebGL page transitions, case studies morph into each other | Three.js, custom transition engine | Fluid / Seamless |
| **Immersive Garden** | immersive-g.com | Scroll-triggered 3D scenes, particle effects | Three.js, WebGL, GSAP | Cinematic / 3D |

### Developer & Designer Portfolios

| Site | URL | Notable For | Tech Stack | Aesthetic |
|------|-----|-------------|------------|-----------|
| **Dennis Snellenberg** | dennissnellenberg.com | Custom cursor, smooth scroll, magnetic buttons | GSAP, Locomotive Scroll, Next.js | Dark Elegant |
| **Brittany Chiang** | brittanychiang.com | THE benchmark dev portfolio — clean, scannable, dark | Gatsby/Next.js, vanilla CSS | Developer / Clean Dark |
| **Aristide Benoist** | aristidebenoist.com | Minimalist, elegant case study transitions | GSAP, Barba.js | Minimal / Editorial |
| **Bruno Simon** | bruno-simon.com | 3D car you drive to explore the portfolio | Three.js, Cannon.js | 3D / Gamified |
| **Rauno Freiberg** | rauno.me | Obsessive micro-interaction craft details | Next.js, Framer Motion | Craft / Micro-detail |
| **Paco Coursey** | paco.me | Ultra-minimal, zen-like restraint | Next.js, Tailwind | Ultra Minimal / Zen |
| **Josh W. Comeau** | joshwcomeau.com | Whimsical micro-interactions, spring physics everywhere | React Spring, custom hooks | Whimsical / Educational |
| **Lee Robinson** | leerob.io | Ultra-minimal, blog-centric, fast | Next.js, Tailwind | Ultra Minimal / Blog |
| **Emil Kowalski** | emilkowal.ski | Creator of animations.dev, animated component demos inline | Next.js, Framer Motion | Component / Animation |
| **Cassie Evans** | cassie.codes | SVG animation expert — site demonstrates her skill | GSAP, SVG | SVG Art / Playful |
| **Maxime Heckel** | blog.maximeheckel.com | Shader-based hero backgrounds, technical blog + portfolio | R3F, Three.js, Next.js | Shader Art / Technical |
| **Lynn Fisher** | lynnandtonic.com | CSS-only responsive art that changes at every breakpoint | Pure HTML/CSS | CSS Art / Whimsical |
| **Delba de Oliveira** | delba.dev | Beautiful gradient blurs, smooth page transitions | Next.js, Tailwind, Framer Motion | Gradient / Soft |
| **David Hckh** | davidhckh.com | Dark minimal with magnetic hover effects | Next.js, GSAP, Framer Motion | Dark Minimal |
| **Hamish Williams** | hamishw.com | 3D interactive hero, immersive project showcases | Three.js, React Three Fiber | Immersive / Dark |
| **Adham Dannaway** | adhamdannaway.com | Split designer/developer concept, half-and-half hero | HTML/CSS | Clever Concept |

### Personal Brand Sites

| Site | URL | Notable For | Aesthetic |
|------|-----|-------------|-----------|
| **Tobias van Schneider** | vanschneider.com | Rich editorial blog, strong voice, dark/warm | Editorial / Personal Brand |
| **Maggie Appleton** | maggieappleton.com | Digital garden, illustrated essays, hand-drawn feel | Illustrated / Garden |
| **Brian Lovin** | brianlovin.com | App-like personal site with bookmarks, AMA, stack | App-like / Personal OS |
| **Kent C. Dodds** | kentcdodds.com | Bright, friendly, course-focused | Bright / Educational |

### SaaS / Product Marketing (Study for Craft)

| Site | URL | Notable For | Aesthetic |
|------|-----|-------------|-----------|
| **Stripe** | stripe.com | Gold standard developer marketing — gradient mesh, clean docs | SaaS / Developer |
| **Linear** | linear.app | Ultra-polished, glassmorphism, scroll animations | SaaS / Polished |
| **Vercel** | vercel.com | Dark theme, code-inspired, buttery animations | Developer / Premium |
| **Raycast** | raycast.com | Glassmorphism, keyboard-first aesthetic, dark mode | Developer / Tool |
| **Notion** | notion.so | Clean, illustration-driven, accessible | Friendly / SaaS |

## Signature Techniques Worth Studying

| Technique | Best Example Sites | How It Works | Difficulty |
|-----------|-------------------|--------------|------------|
| **Smooth scroll + parallax** | Locomotive, Darkroom | Lenis normalizes scroll, elements at different `data-scroll-speed` | Medium |
| **Magnetic buttons** | Cuberto, Dennis Snellenberg | Mouse proximity warps button position with spring physics | Medium |
| **Text split/reveal on scroll** | Unseen Studio, Monopo | SplitType.js splits text into chars/words, GSAP staggers them in on scroll trigger | Medium |
| **Image distortion on hover** | Tom Bogner, Wild | GLSL displacement shader on mouseenter, mapped to texture UV | Hard |
| **Custom cursor** | Cuberto, Aristide Benoist | Div follows mouse with GSAP lerp, scales/morphs on hover targets | Easy-Medium |
| **Page transition morph** | Barba.js sites, Wild | FLIP technique — measure, animate shared elements between pages | Medium-Hard |
| **Scroll-triggered video** | Apple product pages | `<video>` scrubbed frame-by-frame synced to scroll position | Medium |
| **Grain/noise overlay** | Locomotive, many agencies | CSS noise PNG at low opacity, or SVG `<feTurbulence>` filter | Easy |
| **Horizontal scroll sections** | Jacek Jeznach | GSAP ScrollTrigger `pin` + horizontal `x` tween mapped to vertical scroll | Medium |
| **View Transitions API** | Astro sites | Native browser API for cross-page morph transitions (Astro first-class support) | Easy |
| **Scroll-driven animations (CSS)** | Chrome 115+ | `animation-timeline: scroll()` — pure CSS scroll-linked, no JS | Easy |
| **Oversized typography** | Unseen, Baunfire | Headlines at 10vw+, type IS the design element, negative letter-spacing | Easy |
| **Bento grid layouts** | Apple, Linear | Card-based asymmetric grids, mixed sizes, responsive reflow | Medium |
| **Glassmorphism** | Linear, Raycast | `backdrop-filter: blur()` + semi-transparent bg + subtle border | Easy |
| **Variable font animation** | Google Fonts demos | Animate font-weight/width/slant on scroll or hover via CSS custom properties | Easy-Medium |

## Animation Library Reference

| Library | URL | Size | Best For | When To Use |
|---------|-----|------|----------|-------------|
| **CSS Transitions/Animations** | (native) | 0kb | Hover states, simple reveals | Always prefer when sufficient |
| **View Transitions API** | (native) | 0kb | Page transitions in Astro | Built into modern browsers + Astro |
| **GSAP** | gsap.com | ~25kb | Timeline animations, scroll-driven, text splits | Complex choreographed sequences |
| **GSAP ScrollTrigger** | gsap.com | +8kb | Scroll-linked animations | When scroll should drive animation |
| **Framer Motion / motion** | motion.dev | ~30kb | React: springs, layout animations, exit animations | React islands needing animation |
| **Lenis** | lenis.darkroom.engineering | ~10kb | Smooth scroll normalization | When default scroll feels janky |
| **Three.js / R3F** | threejs.org / r3f.docs.pmnd.rs | ~150kb+ | 3D in the browser | Only if 3D is core to the brand |
| **SplitType** | github.com/lukePeavey/SplitType | ~5kb | Text splitting for character animation | Animated text reveals |
| **auto-animate** | auto-animate.formkit.com | ~4kb | List reordering, layout shifts | Zero-config layout transitions |
| **Rive** | rive.app | ~50kb runtime | Interactive vector animations | Complex animated illustrations |
| **Spline** | spline.design | Varies | 3D scenes with web embed | No-code 3D, embeddable |
| **Anime.js** | animejs.com | ~17kb | Multi-property, timeline | Lighter GSAP alternative |
| **Barba.js** | barba.js.org | ~7kb | Page transitions (non-Astro) | SPA-like transitions for MPAs |

### Recommendation for Astro Stack

**Baseline (0kb added):** CSS transitions for hover/focus + View Transitions API for page navigation + IntersectionObserver for scroll reveals.

**Enhanced (+15kb):** Add Lenis for smooth scroll + SplitType for text animations. Use GSAP only for complex scroll-driven sequences.

**React Islands:** Use `motion` (Framer Motion) for any React component that needs spring physics or layout animation.

**Avoid unless necessary:** Three.js/R3F (heavy, unless 3D is core to brand), Barba.js (Astro has native View Transitions).

## Aesthetic Lanes for AI Engineer Portfolio

Based on the competitive landscape and your Astro + Tailwind stack, these lanes are most relevant:

### 1. Dark Technical
**References:** Vercel, Linear, Dennis Snellenberg, Brittany Chiang
**Characteristics:** Dark background, crisp sans-serif type, subtle glow effects, code-inspired elements, monospace accents, precise spacing
**Signal:** "I'm a serious engineer who values craft"
**Tech fit:** Excellent — lightweight, no heavy libraries needed

### 2. Minimal Craft
**References:** Paco Coursey, Rauno Freiberg, Lee Robinson
**Characteristics:** Extreme restraint, every pixel deliberate, generous whitespace, obsessive micro-interactions
**Signal:** "I have exceptional taste and attention to detail"
**Tech fit:** Excellent — Astro's static-first is ideal

### 3. Editorial + Case Study
**References:** Aristide Benoist, Locomotive, Tobias van Schneider
**Characteristics:** Magazine-like layouts, long-form project narratives, serif headlines, rich imagery, grain textures
**Signal:** "I think deeply about the work and can communicate its value"
**Tech fit:** Good — may benefit from GSAP ScrollTrigger for scroll-driven reveals

### 4. Warm Technical
**References:** 14islands, Notion, Maggie Appleton
**Characteristics:** Dark or light, warm neutrals, approachable type, human touches, illustration or organic shapes
**Signal:** "I'm technical but approachable and easy to work with"
**Tech fit:** Good — moderate animation, warm colors

### 5. Bold Typography
**References:** Unseen Studio, Baunfire
**Characteristics:** Type IS the design, oversized headlines (10vw+), strong contrast, minimal imagery
**Signal:** "I'm confident and direct"
**Tech fit:** Excellent — typography-heavy requires minimal JS

## Curated Gallery Sources

Use these to gather ongoing inspiration:

| Source | URL | Best For |
|--------|-----|----------|
| **Awwwards** | awwwards.com | Peer-reviewed, scored — filter by technology, style, color |
| **Godly** | godly.website | Curated modern web design, trending section |
| **Land-book** | land-book.com | Landing pages — hero/CTA inspiration |
| **SiteInspire** | siteinspire.com | Editorial, minimal, refined sites |
| **One Page Love** | onepagelove.com | Single-page sites and templates |
| **Bestfolios** | bestfolios.com | Portfolio-specific curation |
| **Minimal Gallery** | minimal.gallery | Strictly minimal aesthetic |
| **Dark Mode Design** | darkmodedesign.com | Exclusively dark-themed sites |
| **Screenlane** | screenlane.com | UI/UX interaction patterns |
| **Mobbin** | mobbin.com | Mobile + web UI patterns by flow type |
| **Lapa Ninja** | lapa.ninja | Landing pages with color/category filters |
| **Footer** | footer.design | Footer design patterns specifically |
| **Typewolf** | typewolf.com | Typography-focused site showcase |
| **Brand New** | underconsideration.com/brandnew | Brand identity case studies |
| **The Brand Identity** | the-brandidentity.com | Curated branding projects |
| **Dribbble** | dribbble.com | Concept work, strong for visual direction |
| **Behance** | behance.net | Full case studies with process documentation |

## Design Trends to Watch (2024-2025)

| Trend | Description | Durability |
|-------|-------------|------------|
| **Bento grids** | Apple-style asymmetric card layouts | Medium — useful pattern, may become dated |
| **Dark mode default** | Dark-first, light as secondary | High — here to stay |
| **Glassmorphism** | Frosted glass with backdrop-filter | Medium — already maturing |
| **Variable font animation** | Real-time font axis manipulation | High — native, growing support |
| **Scroll-driven CSS** | `animation-timeline: scroll()` | High — native API, no JS |
| **View Transitions** | Native page transition morphs | High — Astro first-class, growing browser support |
| **AI-themed visuals** | Gradient meshes, particle fields, neural patterns | Low — becoming cliched |
| **Oversized type** | Headlines as primary visual element | High — always effective when done well |
| **Monospace aesthetic** | Terminal-inspired UI for dev audiences | Medium — specific to tech audience |
| **Micro-interaction craft** | Considered spring animations on every interaction | High — the bar is rising |
