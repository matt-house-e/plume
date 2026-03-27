# Plume

> A reusable foundation for building static portfolio sites with Astro, Sanity, and modern tooling.

---

## 1. Overview

### What is Plume?

Plume is an agency starter template for building static portfolio and marketing sites. It defines the technical foundation, patterns, and workflows for taking a client project from approved design to deployed site.

### The Handoff Model

```
Figma Designs + Content + Branding
            ↓
      Claude Code + Plume
            ↓
    Deployed Site on Cloudflare
            ↓
   Client edits content in Sanity
```

The input is non-technical: Figma files, written content, brand assets. The output is a live site where clients manage their own content.

### Core Principles

| Principle | What it means |
|-----------|---------------|
| **Design-first** | Great design is the goal, not speed micro-optimizations. These are static sites - they're already fast. |
| **Client autonomy** | Clients edit their own content in Sanity without developer involvement. |
| **Separation of concerns** | Design lives in Figma, content in Sanity, code in the repo. Clear boundaries. |
| **Convention over configuration** | Same patterns across all client projects. Predictable for AI and humans. |
| **Content-first architecture** | Sanity schemas define what the site can do. Content structure drives development. |
| **Type safety everywhere** | TypeScript end-to-end. Fewer runtime surprises. |
| **Portable components** | Build once, reuse across clients. |
| **Progressive complexity** | Start simple. Add forms, booking, integrations only when the client needs them. |
| **Self-documenting patterns** | Code structure that AI assistants and future developers can follow without extensive onboarding. |
| **AI-assisted development** | Claude Code is the primary development tool. The stack is chosen to work well with AI. |

### What Plume is NOT

- **Not a performance-obsessed micro-optimization stack.** Static sites are already fast. We optimize for design quality and developer velocity.
- **Not a rigid template.** It's a foundation that flexes per client.
- **Not a no-code solution.** Developers build the site. Clients edit content.

### Who is this for?

- Primary: Our agency, for client portfolio and marketing sites
- Secondary: Freelancers or agencies with similar workflows

---

## 2. Tech Stack

### Core Framework

| Layer | Choice | Rationale |
|-------|--------|-----------|
| **Web Framework** | Astro (latest stable) | Static-first, islands architecture, ships minimal JS. Perfect for content sites. |
| **UI Components** | React | For interactive islands within Astro. Largest ecosystem, best AI support. |
| **Language** | TypeScript | Type safety across frontend and Sanity schemas. Catches errors early. |
| **Styling** | Tailwind CSS | Utility-first, rapid iteration. Claude Code excels here. |

### Content Management

| Layer | Choice | Rationale |
|-------|--------|-----------|
| **Headless CMS** | Sanity | Real-time editing, visual studio, generous free tier. Clients can self-manage content. |
| **Studio Hosting** | Sanity-hosted | Deploy via `sanity deploy` to `clientname.sanity.studio`. Zero hosting overhead, free. |
| **Rich Text** | Portable Text | Sanity's native format. Flexible rendering, structured content. |
| **Image Pipeline** | Sanity Image URL | Automatic optimization, cropping, hotspots. No separate image service needed. |

**Sanity Free Tier Limits (per project):**
- 3 non-admin users
- 500k API requests/month
- 10GB bandwidth, 5GB assets
- Sufficient for most portfolio/marketing sites

### Animation & Interaction

| Layer | Choice | Status |
|-------|--------|--------|
| **Animation Engine** | GSAP | Industry standard. Timelines, complex sequences. |
| **Scroll Animations** | ScrollTrigger | GSAP plugin for scroll-linked effects. |
| **Smooth Scroll** | Lenis | Lightweight, smooth scroll feel. |

> **Note:** Animation stack is flexible. Add libraries per-project as design requires. These are defaults, not mandates.

### Infrastructure

| Layer | Choice | Rationale |
|-------|--------|-----------|
| **Hosting** | Cloudflare Pages | Unlimited bandwidth free, global CDN, fast builds. |
| **DNS** | Cloudflare | Paired with hosting, fast propagation. |
| **SSL** | Cloudflare (automatic) | Free, auto-renewing. Zero configuration. |

### Developer Tooling

| Tool | Purpose | Why essential |
|------|---------|---------------|
| **pnpm** | Package manager | Fast, disk efficient, great monorepo support. |
| **Turborepo** | Monorepo orchestration | Caches builds, runs tasks in parallel. |
| **ESLint** | Code quality | Catches bugs, enforces patterns. AI writes more consistent code. |
| **Prettier** | Code formatting | Consistent style. Keeps diffs clean when AI edits code. |
| **.editorconfig** | Editor consistency | Ensures tabs/spaces/line endings match across any editor. |

**Not included (YAGNI):**
- Husky, Commitlint, Lint-staged - add when team grows or release process demands it

### Version Strategy

| Dependency | Strategy |
|------------|----------|
| **Astro** | Latest stable. Update quarterly or when features needed. |
| **React** | Match Astro's peer dependency. |
| **Sanity** | Latest stable. Studio and client libraries. |
| **Tailwind** | Latest stable. v4 when stable. |
| **GSAP** | Latest. Check license for client work. |

### AI Development Support

| Layer | AI Capability |
|-------|---------------|
| Astro | Excellent - well-documented, Claude knows it well |
| React/TypeScript | Excellent - massive training data |
| Tailwind | Excellent - Claude excels at utility classes |
| Sanity Schemas | Good - TypeScript-based, predictable patterns |
| GSAP | Moderate - more niche, but manageable |

The entire stack is TypeScript-based, which means strong AI support and type checking catches mistakes before runtime.

---

## 3. Project Structure

### Monorepo Layout

```
plume/
├── apps/
│   ├── web/                    # Astro site
│   │   ├── src/
│   │   │   ├── assets/         # Processed images
│   │   │   ├── components/     # React components (see below)
│   │   │   ├── layouts/        # Astro layouts
│   │   │   ├── pages/          # Astro pages/routes
│   │   │   ├── lib/            # Utilities, Sanity client, helpers
│   │   │   └── styles/         # Global styles, Tailwind config
│   │   ├── public/             # Static assets (fonts, favicon)
│   │   ├── astro.config.mjs
│   │   ├── tailwind.config.mjs
│   │   └── package.json
│   │
│   └── studio/                 # Sanity Studio
│       ├── schemas/            # Content type definitions
│       ├── sanity.config.ts
│       └── package.json
│
├── packages/
│   └── config/                 # Shared tooling configs
│       ├── eslint/
│       ├── prettier/
│       ├── tsconfig/
│       └── package.json
│
├── turbo.json                  # Turborepo configuration
├── pnpm-workspace.yaml         # Workspace definition
├── package.json                # Root scripts
└── README.md
```

### Component Organization (Hybrid)

```
src/components/
├── primitives/                 # Reusable building blocks
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Text.tsx
│   ├── Image.tsx
│   └── Link.tsx
│
├── sections/                   # Page sections (map to Sanity blocks)
│   ├── Hero.tsx
│   ├── ProjectGrid.tsx
│   ├── Services.tsx
│   ├── About.tsx
│   ├── Testimonials.tsx
│   └── ContactForm.tsx
│
└── layout/                     # Site-wide structure
    ├── Header.tsx
    ├── Footer.tsx
    ├── Container.tsx
    ├── Navigation.tsx
    └── MobileMenu.tsx
```

**Why this structure:**
- **Primitives** = design system building blocks, reused everywhere
- **Sections** = composed components that map directly to Sanity content blocks
- **Layout** = structural components, typically one instance per page

### Sanity Schema Organization

```
apps/studio/schemas/
├── documents/                  # Top-level content types
│   ├── page.ts
│   ├── project.ts
│   ├── post.ts
│   └── settings.ts
│
├── objects/                    # Reusable nested types
│   ├── seo.ts
│   ├── link.ts
│   ├── richText.ts
│   └── image.ts
│
├── blocks/                     # Page builder blocks
│   ├── hero.ts
│   ├── projectGrid.ts
│   ├── textSection.ts
│   └── contactForm.ts
│
└── index.ts                    # Schema export
```

**Naming convention:** Schema files match their content type name. `hero.ts` defines the `hero` block type.

### Assets Strategy

| Asset Type | Location | Reason |
|------------|----------|--------|
| Fonts | `public/fonts/` | No processing needed, direct URL access |
| Favicon, robots.txt | `public/` | Static, never changes |
| Local images | `src/assets/images/` | Astro optimizes and hashes for caching |
| Content images | Sanity CDN | Already optimized, hotspot cropping |

> **Note:** Most images come from Sanity. Local images are rare—typically fallbacks, decorative SVGs, or placeholders.

### Shared Config Package

```
packages/config/
├── eslint/
│   └── index.js               # Shared ESLint rules
├── prettier/
│   └── index.js               # Shared Prettier config
├── tsconfig/
│   ├── base.json              # Base TypeScript config
│   ├── astro.json             # Astro-specific extends base
│   └── sanity.json            # Sanity-specific extends base
└── package.json
```

Apps reference shared configs:
```json
// apps/web/.eslintrc
{
  "extends": ["@plume/eslint-config"]
}
```

### Naming Conventions

| Item | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `ProjectCard.tsx` |
| Utilities | camelCase | `formatDate.ts` |
| Sanity schemas | camelCase | `projectGrid.ts` |
| CSS/styles | kebab-case | `global-styles.css` |
| Routes/pages | kebab-case | `about-us.astro` |
| Environment vars | SCREAMING_SNAKE | `SANITY_PROJECT_ID` |

### File Colocation Rules

1. **Component-specific styles** → Same folder as component (if needed, though prefer Tailwind)
2. **Component-specific types** → Same file or `ComponentName.types.ts`
3. **Component-specific utils** → `lib/` folder, not colocated
4. **Tests** → `__tests__/` folder at project root (when added)

---

## 4. Development Workflow

### Figma → Code Workflow

```
1. Screenshot section/component in Figma (1x scale)
2. Paste into Claude Code
3. Provide specs from Figma Dev Mode:
   - Key colors, fonts, spacing values
   - Responsive behavior notes
   - Interaction descriptions
4. Claude generates Tailwind + React code
5. Iterate visually in browser
```

**Tips:**
- Screenshot at 1x scale for accurate pixel values
- Include mobile + desktop views when responsive behavior matters
- Capture color palette and typography scale once upfront, reference throughout project
- Export SVGs/icons from Figma, place in `src/assets/`

### Local Development Environment

**Required tools:**

| Tool | Version | Purpose |
|------|---------|---------|
| Node.js | 20 LTS | Runtime |
| pnpm | Latest | Package manager |
| Cursor | Latest | IDE with AI integration |
| Claude Code | Latest | Primary development tool |

**Cursor extensions:**

| Extension | Purpose |
|-----------|---------|
| Astro | Syntax highlighting, IntelliSense for `.astro` files |
| Tailwind CSS IntelliSense | Class autocomplete, hover preview |
| Prettier | Format on save |
| ESLint | Inline error highlighting |
| Sanity | Schema IntelliSense (optional) |

**MCP servers (as needed):**
- Sanity MCP (when available/stable)
- Figma MCP (when available/stable)
- File system access configured for Claude Code

### Dev Commands

```bash
# From monorepo root
pnpm install              # Install all dependencies
pnpm dev                  # Start Astro dev server (localhost:4321)
pnpm dev:studio           # Start Sanity Studio locally (localhost:3333)
pnpm build                # Production build
pnpm preview              # Preview production build locally

# From apps/studio
pnpm sanity deploy        # Deploy studio to Sanity hosting
```

### Content Workflow

```
┌─────────────────────────────────────────────────────────────┐
│  DURING BUILD                                               │
│  Developer adds placeholder content in Sanity               │
│  - Enables testing layouts and components                   │
│  - Uses realistic structure, lorem ipsum text               │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│  PRE-LAUNCH                                                 │
│  Client provides content (Google Doc / Notion)              │
│  Developer migrates content to Sanity                       │
│  - Replace placeholders with real copy                      │
│  - Upload final images                                      │
│  - Review with client on staging                            │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│  POST-LAUNCH                                                │
│  Client makes tweaks directly in Sanity Studio              │
│  - Minor copy changes                                       │
│  - Image swaps                                              │
│  - New blog posts / projects                                │
└─────────────────────────────────────────────────────────────┘
```

### Branching & Staging Strategy

```
main branch        → clientsite.com (production)
staging branch     → staging.clientsite.com (client review)
feature branches   → random-hash.pages.dev (dev preview)
```

**How it works:**
- Cloudflare Pages auto-deploys every branch
- `main` is configured as production branch
- `staging` gets a custom domain for client review
- Feature branches get temporary preview URLs (useful for dev testing)

**Workflow:**
```
feature/hero-section → PR → staging → client approval → merge to main → live
```

### Client Handoff Package

#### Required

| Item | Format | Notes |
|------|--------|-------|
| Figma link | URL with Dev Mode access | Full design for all pages/breakpoints |
| Brand assets | Folder (ZIP/Drive) | Logo (SVG), favicon, any fixed images |
| Color palette | Hex codes | If not clearly defined in Figma |
| Typography | Font files or names | Google Fonts preferred, or provide .woff2 files |
| Content document | Google Doc / Notion | All page copy, structured by page/section |
| Navigation structure | In content doc | What links where |
| Meta descriptions | In content doc | SEO descriptions for each page |

#### Optional

| Item | Format | Notes |
|------|--------|-------|
| Domain name | Already purchased | Or indicate if we're purchasing |
| Existing analytics | Account access | If migrating from existing site |
| Social media links | List | For footer/contact |
| Integration requirements | Description | Forms, booking, newsletter, etc. |
| Competitor/inspiration sites | URLs | "We like the feel of X" |
| Timeline constraints | Date | Hard deadlines if any |

---

## 5. Sanity Schema Patterns

### Core Principles

| Principle | What it means |
|-----------|---------------|
| **Model for meaning, not presentation** | Schema defines what content IS, not how it looks. No `backgroundColor`, `fontSize` fields. |
| **COPE: Create Once, Publish Everywhere** | Structured content can be reused across pages, channels, redesigns. |
| **Objects for unique, References for reusable** | Embed content that's unique to a page. Reference content that appears in multiple places. |
| **Singular naming** | Document types use singular names: `project` not `projects`. |
| **Icons on everything** | Every document and block type gets an icon for better Studio UX. |

### Document Types

Top-level content that editors create and manage.

| Document | Purpose | Structure |
|----------|---------|-----------|
| `page` | Flexible landing pages | title, slug, sections (page builder), seo |
| `project` | Portfolio case studies | title, slug, client, categories (ref), content (fixed), seo |
| `post` | Blog articles | title, slug, author (ref), date, content (fixed), categories (ref), seo |
| `category` | Taxonomy for projects/posts | title, slug, description |
| `testimonial` | Client quotes (reusable) | quote, author, role, company, image |
| `teamMember` | Team bios (reusable) | name, role, bio, image, socialLinks |
| `settings` | Global site config | siteName, logo, navigation, footer, socialLinks, defaultSeo |

### Page Builder Pattern

Flexible pages use an array of section blocks:

```typescript
// In page.ts
defineField({
  name: 'sections',
  title: 'Page Sections',
  type: 'array',
  of: [
    { type: 'hero' },
    { type: 'textSection' },
    { type: 'projectGrid' },
    { type: 'testimonialSection' },
    { type: 'imageGallery' },
    { type: 'ctaBanner' },
    { type: 'contactForm' },
  ]
})
```

**Block types (objects):**

| Block | Fields | Notes |
|-------|--------|-------|
| `hero` | headline, subheadline, image, cta | Usually first section |
| `textSection` | heading, richText, alignment | Portable Text content |
| `projectGrid` | heading, projects (ref[]), columns | References to project documents |
| `testimonialSection` | heading, testimonials (ref[]), layout | References to testimonial documents |
| `imageGallery` | heading, images[], layout | Array of imageWithAlt objects |
| `ctaBanner` | heading, text, cta, background | Call-to-action strip |
| `contactForm` | heading, text, formFields, submitLabel | Form configuration |

### Fixed Content Types

Projects and posts have fixed structure (not page builder):

```typescript
// project.ts - Fixed structure
defineType({
  name: 'project',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string' }),
    defineField({ name: 'slug', type: 'slug' }),
    defineField({ name: 'client', type: 'string' }),
    defineField({ name: 'categories', type: 'array', of: [{ type: 'reference', to: [{ type: 'category' }] }] }),
    defineField({ name: 'featuredImage', type: 'imageWithAlt' }),
    defineField({ name: 'summary', type: 'text' }),
    defineField({ name: 'content', type: 'richText' }),
    defineField({ name: 'gallery', type: 'array', of: [{ type: 'imageWithAlt' }] }),
    defineField({ name: 'seo', type: 'seo' }),
  ]
})
```

### Reusable Object Types

Embedded objects used across multiple schemas:

| Object | Fields | Used in |
|--------|--------|---------|
| `seo` | metaTitle, metaDescription, ogImage | All documents |
| `link` | text, linkType (internal/external), internalRef, externalUrl | CTAs, navigation |
| `imageWithAlt` | image, alt, caption | Everywhere images appear |
| `richText` | Portable Text blocks + marks | Posts, text sections |
| `cta` | text, link, style (primary/secondary) | Heroes, banners |

### Category Taxonomy

Default pattern uses references for consistency:

```typescript
// category.ts
defineType({
  name: 'category',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string' }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'description', type: 'text' }),
  ]
})

// In project.ts
defineField({
  name: 'categories',
  type: 'array',
  of: [{ type: 'reference', to: [{ type: 'category' }] }]
})
```

**Benefits:**
- Editors pick from predefined list (no typos)
- Enables `/work/[category]` pages
- Categories can have descriptions, images if needed

**When to use simple tags instead:**
- Very simple sites without category pages
- Internal-only organization

### Schema Organization

```
apps/studio/schemas/
├── documents/           # Top-level content types
│   ├── page.ts
│   ├── project.ts
│   ├── post.ts
│   ├── category.ts
│   ├── testimonial.ts
│   ├── teamMember.ts
│   └── settings.ts
│
├── objects/             # Reusable embedded types
│   ├── seo.ts
│   ├── link.ts
│   ├── cta.ts
│   ├── richText.ts
│   └── imageWithAlt.ts
│
├── blocks/              # Page builder sections
│   ├── hero.ts
│   ├── textSection.ts
│   ├── projectGrid.ts
│   ├── testimonialSection.ts
│   ├── imageGallery.ts
│   ├── ctaBanner.ts
│   └── contactForm.ts
│
└── index.ts             # Exports all schemas
```

### Schema Helpers

Always use Sanity's helper functions for TypeScript support:

```typescript
import { defineType, defineField, defineArrayMember } from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'object',
  icon: StarIcon,
  fields: [
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    // ...
  ],
  preview: {
    select: { title: 'headline' },
    prepare: ({ title }) => ({ title: title || 'Hero Section' }),
  },
})
```

### Validation Patterns

| Pattern | Example |
|---------|---------|
| Required field | `validation: (Rule) => Rule.required()` |
| Max length | `validation: (Rule) => Rule.max(160)` |
| Slug from title | `options: { source: 'title', maxLength: 96 }` |
| Unique slug | `validation: (Rule) => Rule.required().unique()` |
| Image required | `validation: (Rule) => Rule.required().assetRequired()` |

### AI Tooling: Sanity MCP Server

Configure Claude Code to access Sanity's best practices:

```bash
npx sanity@latest mcp configure
```

This provides:
- 20+ context rules for schema design
- GROQ query assistance
- Visual Editing setup guidance
- Real-time docs lookup

Point Claude to `/docs/llms.txt` for comprehensive context when needed.

### References

- [Sanity Schema Types](https://www.sanity.io/docs/studio/schema-types)
- [Structured Content for Page Building](https://www.sanity.io/docs/developer-guides/how-to-use-structured-content-for-page-building)
- [Content Modeling Guide](https://www.sanity.io/content-modeling)
- [AI Best Practices for Sanity](https://www.sanity.io/docs/developer-guides/ai-best-practices)
- [Structured Content Framework](https://www.sanity.io/learn/course/hello-structured-content/structured-content-framework-lesson)
- [Sanity Learn: Page Building](https://www.sanity.io/learn/course/page-building/create-page-builder-schema-types)

---

## 6. Component Architecture

### Core Concept: Islands Architecture

Astro renders pages as static HTML by default. Interactive "islands" of JavaScript are added only where needed.

```
┌─────────────────────────────────────────────────────────────┐
│  Static HTML (no JS)                                        │
│  ┌─────────────┐                    ┌─────────────┐        │
│  │   Island    │                    │   Island    │        │
│  │   (React)   │                    │   (React)   │        │
│  │   Interactive                    │   Interactive        │
│  └─────────────┘                    └─────────────┘        │
│                                                             │
│  Static HTML continues...                                   │
└─────────────────────────────────────────────────────────────┘
```

**Key principle:** Start static. Add JavaScript only where interactivity is required.

### Component Types in Plume

| Type | File Extension | Use Case | Ships JS? |
|------|----------------|----------|-----------|
| **Astro components** | `.astro` | Layouts, static sections, page structure | No |
| **React islands** | `.tsx` | Interactive UI (menus, forms, carousels) | Yes (when hydrated) |

**Rule of thumb:**
- If it doesn't need clicks, hovers, or state → Astro component
- If it needs interactivity → React island with client directive

### Client Directives

Control when React components hydrate (load JavaScript):

| Directive | When JS Loads | Use For |
|-----------|---------------|---------|
| `client:load` | Immediately on page load | Above-the-fold interactivity (nav, hero animations) |
| `client:idle` | When browser is idle | Below-the-fold but soon needed (forms) |
| `client:visible` | When component enters viewport | Far down the page (footer forms, carousels) |
| `client:media="(max-width: 768px)"` | When media query matches | Mobile-only components (hamburger menu) |
| `client:only="react"` | Client-side only, no SSR | Components that can't server-render |

**Usage in `.astro` files:**

```astro
---
import Header from '../components/layout/Header.tsx'
import ContactForm from '../components/sections/ContactForm.tsx'
---

<!-- Hydrate immediately - navigation needs to work right away -->
<Header client:load />

<!-- Hydrate when visible - form is below the fold -->
<ContactForm client:visible />
```

### When to Hydrate (Decision Tree)

```
Is it interactive (clicks, state, animations)?
├── No  → Use .astro component (zero JS)
└── Yes → Is it above the fold?
          ├── Yes → client:load
          └── No  → Is it critical when visible?
                    ├── Yes → client:visible
                    └── No  → client:idle
```

### Component Patterns

**Pattern 1: Static wrapper, interactive island**

```astro
---
// Hero.astro - static structure
import HeroAnimation from './HeroAnimation.tsx'
---

<section class="hero">
  <h1>{title}</h1>
  <p>{subtitle}</p>
  <!-- Only the animation needs JS -->
  <HeroAnimation client:load />
</section>
```

**Pattern 2: Passing Sanity data to React**

```astro
---
// ProjectGrid.astro
import { getProjects } from '../lib/sanity'
import ProjectCarousel from './ProjectCarousel.tsx'

const projects = await getProjects()
---

<!-- Data fetched at build time, passed to React -->
<ProjectCarousel projects={projects} client:visible />
```

**Pattern 3: Shared data via props (not context)**

```astro
---
// Layout.astro
import Navigation from './Navigation.tsx'
const navItems = await getNavigation()
---

<!-- Pass data as props, avoid React context for simple data -->
<Navigation items={navItems} client:load />
```

### Props Serialization

When passing data to hydrated React components, only serializable types work:

| Works | Doesn't Work |
|-------|--------------|
| Strings, numbers, booleans | Functions |
| Arrays, objects | Class instances |
| Dates, URLs | Symbols |
| Maps, Sets | Circular references |

**If you need functions:** Keep the logic in React, pass only data from Astro.

### File Organization Recap

```
src/components/
├── primitives/        # .tsx - Design system (Button, Card, Text)
│                      # May or may not need hydration
│
├── sections/          # .astro wrapper + .tsx island
│   ├── Hero.astro           # Static structure
│   ├── HeroAnimation.tsx    # Interactive part (if needed)
│   ├── ContactForm.astro    # Static wrapper
│   └── ContactFormClient.tsx # Form logic
│
└── layout/            # Mostly .astro, some .tsx islands
    ├── Header.astro         # Static header structure
    ├── Navigation.tsx       # Interactive nav (dropdown, mobile)
    └── Footer.astro         # Fully static
```

### Common Mistakes to Avoid

| Mistake | Why it's bad | Instead |
|---------|--------------|---------|
| `client:load` on everything | Defeats the purpose of Astro | Use `client:visible` or `client:idle` |
| Wrapping entire layouts in React | Massive JS bundle | Keep layouts in `.astro` |
| Using React context for simple data | Unnecessary complexity | Pass props from Astro |
| Creating islands for non-interactive UI | Wasted JS | Use `.astro` components |

### References

- [Astro Islands Architecture](https://docs.astro.build/en/concepts/islands/)
- [Framework Components (React)](https://docs.astro.build/en/guides/framework-components/)
- [Client Directives Reference](https://docs.astro.build/en/reference/directives-reference/)
- [React Integration Guide](https://docs.astro.build/en/guides/integrations-guide/react/)
- [Project Structure](https://docs.astro.build/en/basics/project-structure/)

---

## 7. Deployment

### Cloudflare Pages Setup

```
GitHub repo → Cloudflare Pages → Auto-deploy on push
```

**Build configuration:**

| Setting | Value |
|---------|-------|
| Build command | `pnpm build` |
| Build output directory | `apps/web/dist` |
| Root directory | `/` (monorepo root) |
| Node version | `20` |

### Branch Deployments

| Branch | URL | Purpose |
|--------|-----|---------|
| `main` | `clientsite.com` | Production |
| `staging` | `staging.clientsite.com` | Client review |
| Feature branches | `abc123.pages.dev` | Dev preview |

### Sanity Webhook → Rebuild

When content changes in Sanity, trigger a Cloudflare rebuild:

1. In Sanity: **Settings → API → Webhooks → Add**
2. URL: Cloudflare deploy hook URL
3. Trigger on: Create, Update, Delete
4. Filter: `_type in ["page", "project", "post", "settings"]`

This ensures content updates go live within ~30 seconds.

### Environment Variables

| Variable | Where | Purpose |
|----------|-------|---------|
| `SANITY_PROJECT_ID` | Cloudflare Pages | Sanity project identifier |
| `SANITY_DATASET` | Cloudflare Pages | Usually `production` |
| `SANITY_API_TOKEN` | Cloudflare Pages | Read token for fetching content |

**Note:** Never commit tokens. Use Cloudflare's environment variables UI.

### DNS Setup

1. Add site to Cloudflare Pages
2. Add custom domain in Pages settings
3. Cloudflare auto-configures DNS if domain is on Cloudflare
4. SSL is automatic

---

## 8. Future Considerations

Parking lot for features to add when needed. Do not over-engineer upfront.

### Forms

| Option | Notes |
|--------|-------|
| Formspree | Simple, no backend, generous free tier |
| Resend | If programmatic email needed |
| Cloudflare Workers | Custom form handling if complex |

### Booking/Scheduling

| Option | Notes |
|--------|-------|
| Cal.com embed | Open source, customizable |
| Calendly | More polished, paid |

### Analytics

| Option | Notes |
|--------|-------|
| Plausible | Privacy-friendly, no cookie banner |
| Cloudflare Analytics | Free with hosting, basic |
| Fathom | Privacy-friendly alternative |

### Animation (when needed)

| Tool | Use case |
|------|----------|
| GSAP | Complex timelines, scroll animations |
| ScrollTrigger | GSAP plugin for scroll-linked effects |
| Lenis | Smooth scroll feel |
| Framer Motion | React-native animations (heavier) |

**Approach:** Add animation libraries per-project based on design requirements. Don't include by default.

### Blog Features

- RSS feed generation
- Reading time estimates
- Related posts
- Author pages

### SEO Enhancements

- Structured data (JSON-LD)
- Dynamic OG images
- Sitemap generation (`@astrojs/sitemap`)

### Multi-language (i18n)

Research Sanity's localization patterns and Astro's i18n routing when a client needs it.

---

## Appendix: CLAUDE.md

Create a `CLAUDE.md` file in the project root. Claude Code reads this automatically for project context.

```markdown
# Plume - Project Context for Claude Code

## What is this?
Agency starter template: Astro + Sanity + Tailwind + Cloudflare Pages.

## Key commands
- `pnpm dev` - Start Astro dev server
- `pnpm dev:studio` - Start Sanity Studio locally
- `pnpm build` - Production build

## Architecture
- Static-first: Use .astro components by default
- React islands: Only for interactive UI (use client:visible, client:idle)
- Sanity: Content comes from CMS, fetched at build time

## Component patterns
- primitives/ - Reusable UI (Button, Card, Text)
- sections/ - Page builder blocks (Hero, ProjectGrid)
- layout/ - Site structure (Header, Footer)

## Schema patterns
- Model for meaning, not presentation
- Objects for unique content, References for reusable
- All documents get SEO object

## Don't do
- Don't add client:load to everything
- Don't wrap layouts in React
- Don't add styling fields to Sanity schemas
- Don't over-engineer - this is for portfolio sites
```

This file should evolve as you build and learn what guidance Claude needs.
