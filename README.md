# Adelina Sahlean — portfolio

Personal UX portfolio. Astro 5 + Tailwind CSS v4, static output, deploys to Vercel with no extra config.

## Commands

```sh
npm install
npm run dev      # local dev at localhost:4321
npm run build    # static build to dist/
npm run preview  # serve the build locally
```

## Where things live

- **Design tokens** — `src/styles/global.css`. Colors (`linen`, `ink`, `rust`, `moss`, `oat`), fonts, type scale, and the blob-crop utilities are all defined in the `@theme` block (Tailwind v4 style, no `tailwind.config`). The dusk-wash gradient is a `:root` custom property used only by the homepage hero — keep it that way.
- **Case studies** — `src/content/case-studies/*.mdx`. Adding a project = adding one MDX file; frontmatter schema is in `src/content.config.ts`. Inside MDX you can use `<PullQuote>`, `<ImageFigure>`, and `<Compare>` without imports (they're injected in `src/pages/case-studies/[slug].astro`).
- **Placeholder images** — `BlobImage`, `ImageFigure`, and `Compare` render styled placeholders until you pass a `src`; alt text and captions are already wired, so swapping in real imagery is a prop change per instance.
- **Motion** — one GSAP hero entrance (`src/scripts/hero-entrance.ts`); everything else is CSS transitions. `prefers-reduced-motion` disables all of it.

## Supabase integration point (next pass)

The contact form UI is complete; submission is stubbed in **`src/lib/contact.ts` → `submitContactForm()`**. Replace that function body with the Supabase insert (or edge-function call) — the form page (`src/pages/contact.astro`) already handles pending/success/error states and needs no changes.
