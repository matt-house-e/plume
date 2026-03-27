# Plume

Starter template for static portfolio sites.

## Stack

Astro + React + TypeScript + Tailwind + Sanity + Cloudflare Pages

## Commands

```bash
pnpm dev          # Astro dev server (localhost:4321)
pnpm dev:studio   # Sanity Studio (localhost:3333)
pnpm build        # Production build
pnpm preview      # Preview production build
```

## Architecture Rules

- **Static-first**: Default to `.astro` components. Zero JS unless needed.
- **Islands for interactivity**: React (`.tsx`) only when clicks/state required.
- **Hydration budget**: Use `client:visible` or `client:idle`. Avoid `client:load` except navigation.
- **Data at build time**: Fetch from Sanity in `.astro` files, pass as props to React.

## Project Structure

```
src/
├── components/layout/   # Header, Footer
├── layouts/             # BaseLayout
├── lib/                 # Sanity client, utilities
├── pages/               # Astro pages (index, about, services, work, contact)
└── styles/              # Global CSS, Tailwind

sanity/
├── schemas/documents/   # Page templates (added per-page), project, settings
├── schemas/objects/     # Reusable types (seo)
└── sanity.config.ts     # Studio config
```

## Sanity Patterns

- **Page templates, not page blocks**: Each page gets its own document type with specific fields.
- Model for meaning, not presentation. No `backgroundColor`, `fontSize` in schemas.
- All documents include `seo` object.
- Add page template schemas one at a time as each page is designed.

## Constraints

- Do NOT add `client:load` to everything
- Do NOT wrap layouts in React
- Do NOT add styling fields to Sanity schemas
- Do NOT over-engineer - these are portfolio sites
- Do NOT create new files when editing existing ones suffices

## References

For detailed patterns, rationale, and examples, see **SPEC.MD** in the project root.
