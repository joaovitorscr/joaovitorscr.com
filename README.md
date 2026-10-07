# joaovitorscr.com

Personal site of João Vitor, frontend developer. A single static page in three languages, built with Astro and Tailwind, deployed on Vercel.

## Stack

- [Astro](https://astro.build) for static output, routing and self-hosted fonts
- [Tailwind CSS v4](https://tailwindcss.com) through the Vite plugin
- TypeScript, checked with `tsc`
- [oxlint](https://oxc.rs) and [oxfmt](https://oxc.rs) for linting and formatting
- pnpm, Node 22+

## Structure

```
src/
  i18n/content.ts        all copy (en, pt, es), links, skills and projects
  layouts/Layout.astro   head, meta, Open Graph, JSON-LD, fonts
  pages/
    index.astro          picks a locale from the browser and redirects
    [locale]/index.astro the page, one build per locale
    404.astro
    sitemap.xml.ts
  styles/global.css      theme tokens and the hero box-model animation
public/                  favicons, app icons, OG images, manifest, robots
scripts/brand.mjs        regenerates the icons and OG images from HTML
```

## Development

```bash
pnpm install
pnpm dev          # http://localhost:4173
pnpm build
pnpm preview
pnpm typecheck
pnpm lint
pnpm fmt
```

## Editing content

Everything shown on the page lives in `src/i18n/content.ts`. The English dictionary defines the shape, and the Portuguese and Spanish ones are typed against it, so a missing translation fails typecheck.

To add a locale, append it to `locales`, add a dictionary, and add an entry to `ogLocales` in the layout. Then run `pnpm brand` to render its OG image.

## Brand assets

`pnpm brand` screenshots small HTML documents in headless Chrome to produce the favicon, app icons and the OG image for each locale. It expects Google Chrome at the default macOS path, or set `CHROME` to another binary.

## Deployment

Vercel builds the `astro` preset from `vercel.json`, which also sends `/` to `/pt` or `/es` based on the `Accept-Language` header, falling back to `/en`, and sets security and cache headers. On any other static host the output in `dist/` still works: the root page redirects client-side using the browser language.

CI on GitHub runs typecheck, lint, format check and build on every pull request.
