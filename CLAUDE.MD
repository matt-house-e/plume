# Plume

Agency starter template for static portfolio sites.

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

## Component Structure

```
src/components/
├── primitives/   # Button, Card, Text (reusable)
├── sections/     # Hero, ProjectGrid (map to Sanity blocks)
└── layout/       # Header, Footer, Navigation
```

## Sanity Patterns

- Model for meaning, not presentation. No `backgroundColor`, `fontSize` in schemas.
- Objects for unique content, References for reusable (testimonials, team).
- All documents include `seo` object.
- See `apps/studio/schemas/` for schema definitions.

## Constraints

- Do NOT add `client:load` to everything
- Do NOT wrap layouts in React
- Do NOT add styling fields to Sanity schemas
- Do NOT over-engineer - these are portfolio sites
- Do NOT create new files when editing existing ones suffices

## Project Structure

- `apps/web/` - Astro site
- `apps/studio/` - Sanity Studio
- `packages/config/` - Shared ESLint, Prettier, TypeScript configs

## References

For detailed patterns, rationale, and examples, see **SPEC.MD** in the project root.

- Sanity schema patterns: SPEC.MD Section 5
- Component architecture: SPEC.MD Section 6
- Development workflow: SPEC.MD Section 4
