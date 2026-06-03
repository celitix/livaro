# LIVARO Next Website — V2 Enhanced Hybrid Build

Production-quality luxury interiors website built with Next.js App Router, TypeScript, Tailwind CSS v4, Framer Motion, Lucide and Next/Image.

## What's improved in V2

- Stronger luxury/editorial visual design
- Hybrid image mode: premium remote visuals now + local `/public/images` folders for easy replacement
- Tailwind v4 fixed with `@import "tailwindcss"` and `@tailwindcss/postcss`
- Lucide social icon export issue removed by using safe inline SVG marks
- Better hero, gallery, cards, spacing, typography, shadows and CTA design
- SEO metadata on pages
- Responsive mobile-first layouts

## Install

```bash
npm install
npm run dev
```

If `.next` cache creates old errors, run:

```bash
rmdir /s /q .next
npm run dev
```

Mac/Linux:

```bash
rm -rf .next
npm run dev
```

## Replace images locally

Open `lib/constants.ts` and replace any URL with local paths, for example:

```ts
hero: '/images/hero/hero-main.jpg'
```

Then add the image file inside:

```txt
public/images/hero/hero-main.jpg
```

## Folder structure

```txt
app/
components/
lib/
public/images/
```
