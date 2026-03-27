# Plume

> Starter template for building static portfolio sites with Astro, Sanity, and Tailwind on Cloudflare Pages.

---

## 1. Overview

### What is Plume?

Plume is a starter template for building static portfolio and marketing sites. It provides a clean foundation with Astro, Sanity CMS, and Tailwind — ready to customize per project.

### Core Principles

| Principle | What it means |
|-----------|---------------|
| **Design-first** | Great design is the goal. Static sites are already fast. |
| **Static-first** | Default to `.astro` components. Zero JS unless needed. |
| **Content-first** | Sanity schemas define what the site can do. Content structure drives development. |
| **Type safety** | TypeScript end-to-end. |
| **AI-assisted** | Claude Code is the primary development tool. The stack is chosen to work well with AI. |
| **Progressive complexity** | Start simple. Add forms, booking, animations only when needed. |

---

## 2. Tech Stack

| Layer | Choice | Rationale |
|-------|--------|-----------|
| **Web Framework** | Astro | Static-first, islands architecture, ships minimal JS. |
| **UI Components** | React | For interactive islands. Largest ecosystem, best AI support. |
| **Language** | TypeScript | Type safety across frontend and Sanity schemas. |
| **Styling** | Tailwind CSS | Utility-first, rapid iteration. Claude Code excels here. |
| **CMS** | Sanity | Real-time editing, visual studio, generous free tier. |
| **Studio Hosting** | Sanity-hosted | Deploy via `sanity deploy`. Zero hosting overhead, free. |
| **Hosting** | Cloudflare Pages | Unlimited bandwidth free, global CDN, fast builds. |
| **Package Manager** | pnpm | Fast, disk efficient. |

---

## 3. Project Structure

```
plume/
├── src/
│   ├── components/
│   │   └── layout/          # Header, Footer
│   ├── layouts/             # BaseLayout
│   ├── lib/                 # Sanity client, utilities
│   ├── pages/               # Astro pages
│   └── styles/              # Global CSS
├── sanity/
│   ├── schemas/
│   │   ├── documents/       # Page templates, project, settings
│   │   └── objects/         # Reusable types (seo)
│   └── sanity.config.ts
├── public/                  # Static assets (favicon, fonts)
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

### Naming Conventions

| Item | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `ProjectCard.tsx` |
| Utilities | camelCase | `formatDate.ts` |
| Sanity schemas | camelCase | `homePage.ts` |
| Routes/pages | kebab-case | `about.astro` |
| Environment vars | SCREAMING_SNAKE | `SANITY_PROJECT_ID` |

---

## 4. Sanity Schema Patterns

### Page Templates (not page blocks)

Each page gets its own Sanity document type with exactly the fields that page needs. No generic `page` document with composable blocks.

```typescript
// Example: homePage.ts
defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({ name: 'headline', type: 'string' }),
    defineField({ name: 'subheadline', type: 'text' }),
    // ... fields specific to the home page
    defineField({ name: 'seo', type: 'seo' }),
  ],
})
```

**Benefits:**
- 1:1 mapping between Sanity documents and Astro pages
- Simple GROQ queries, strong types
- No block resolver or conditional rendering

**Add page templates one at a time** as each page is designed and built.

### Core Principles

| Principle | What it means |
|-----------|---------------|
| **Model for meaning, not presentation** | No `backgroundColor`, `fontSize` fields. |
| **Objects for unique, References for reusable** | Embed unique content, reference shared content. |
| **Singular naming** | `project` not `projects`. |
| **Icons on everything** | Every document type gets an icon. |

### Current Document Types

| Document | Purpose |
|----------|---------|
| `project` | Portfolio case studies |
| `settings` | Global site config |

### Reusable Objects

| Object | Fields | Used in |
|--------|--------|---------|
| `seo` | metaTitle, metaDescription, ogImage | All documents |

### Validation Patterns

| Pattern | Example |
|---------|---------|
| Required field | `validation: (Rule) => Rule.required()` |
| Max length | `validation: (Rule) => Rule.max(160)` |
| Slug from title | `options: { source: 'title', maxLength: 96 }` |

---

## 5. Component Architecture

### Islands Architecture

Astro renders pages as static HTML by default. Interactive "islands" of JavaScript are added only where needed.

- If it doesn't need clicks, hovers, or state -> `.astro` component (zero JS)
- If it needs interactivity -> React island with client directive

### Client Directives

| Directive | When JS Loads | Use For |
|-----------|---------------|---------|
| `client:load` | Immediately | Above-the-fold interactivity (nav) |
| `client:idle` | When browser is idle | Below-the-fold but soon needed (forms) |
| `client:visible` | When enters viewport | Far down the page (carousels) |

### Pattern: Passing Sanity data to React

```astro
---
import { client } from '../lib/sanity'
import InteractiveComponent from './InteractiveComponent.tsx'

const data = await client.fetch('*[_type == "project"]')
---

<InteractiveComponent data={data} client:visible />
```

### Common Mistakes to Avoid

| Mistake | Instead |
|---------|---------|
| `client:load` on everything | Use `client:visible` or `client:idle` |
| Wrapping layouts in React | Keep layouts in `.astro` |
| React context for simple data | Pass props from Astro |
| Islands for non-interactive UI | Use `.astro` components |

---

## 6. Deployment

### Cloudflare Pages

| Setting | Value |
|---------|-------|
| Build command | `pnpm build` |
| Build output directory | `dist` |
| Node version | `20` |

### Environment Variables

| Variable | Purpose |
|----------|---------|
| `SANITY_PROJECT_ID` | Sanity project identifier |
| `SANITY_DATASET` | Usually `production` |
| `SANITY_API_TOKEN` | Read token for fetching content |

Never commit tokens. Use Cloudflare's environment variables UI.

### Sanity Webhook -> Rebuild

When content changes in Sanity, trigger a Cloudflare rebuild via deploy hook. Content updates go live within ~30 seconds.

---

## 7. Future Considerations

Add when needed, not before:

- **Forms**: Formspree, Resend, or Cloudflare Workers
- **Analytics**: Plausible or Cloudflare Analytics
- **Animation**: GSAP, Framer Motion (add per-page as design requires)
- **SEO**: Structured data (JSON-LD), sitemap (`@astrojs/sitemap`)
- **Blog**: RSS feed, reading time, related posts
