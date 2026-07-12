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

- **Design tokens** — `src/styles/global.css`. Semantic colors (`bg`, `surface`, `text-primary/secondary/tertiary`, `border`, `accent`, …) are CSS custom properties scoped to `data-theme="light" | "dark"` on `<html>`, mapped to Tailwind utilities in the `@theme inline` block (Tailwind v4 style, no `tailwind.config`). Fonts: Syne (display/headings/labels), Spectral (body, italic for pull quotes), JetBrains Mono (tags, captions, data, code). The brand gradient (`--gradient-brand`) is reserved for the hero glow, primary buttons, the nav Resume button, and card glyphs — never a full-bleed background. Theme choice persists in `localStorage` and falls back to `prefers-color-scheme`.
- **Case studies** — `src/content/case-studies/*.mdx`. Adding a project = adding one MDX file; frontmatter schema is in `src/content.config.ts`. Inside MDX you can use `<PullQuote>`, `<ImageFigure>`, and `<Compare>` without imports (they're injected in `src/pages/case-studies/[slug].astro`).
- **Placeholder images** — `ImageFigure` and `Compare` render styled placeholders until you pass a `src`; alt text and captions are already wired, so swapping in real imagery is a prop change per instance.
- **Resume** — the nav's Resume button links to `/resume.pdf`; drop the PDF into `public/` to make it live.
- **Motion** — one GSAP hero entrance (`src/scripts/hero-entrance.ts`); everything else is CSS transitions. `prefers-reduced-motion` disables all of it.

## Supabase integration point (next pass)

The contact form UI is complete; submission is stubbed in **`src/lib/contact.ts` → `submitContactForm()`**. Replace that function body with the Supabase insert (or edge-function call) — the form (`src/components/ContactSection.astro`, a section on the one-page home) already handles pending/success/error states and needs no changes.
