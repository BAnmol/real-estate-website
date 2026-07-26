# ARIS Estates

A luxury real-estate marketing site built with Next.js (App Router), featuring a
drag-to-rotate `react-three-fiber` hero scene, `framer-motion` scroll/interaction
animations, and a live-feeling property browsing experience — property tour
modals with draggable 360°/3D room previews, a cinematic showcase reel, an
elevator-style "floor" scroll indicator, and city-filtered neighborhood browsing.

## Getting started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run lint    # eslint
```

## Project structure

```
src/
  app/                  Route entry: layout, page, global styles, icon,
                        opengraph-image, apple-icon, sitemap.ts, robots.ts
  components/
    layout/              Nav, Footer — persistent page chrome
    sections/             Hero, Stats, Properties, Statement, Features,
                          Process, Neighborhoods, FAQ, Testimonials, CTA
    property/             PropertyCard, PropertyModal, TourStage —
                          the grid card, its detail modal, and the
                          draggable 360°/3D room viewer inside it
    three/                HeroScene — the react-three-fiber hero scene
    ui/                    Logo, Reveal (scroll-in wrapper), Preloader,
                          ScrollProgress, FloorIndicator, ShowcaseModal,
                          LiveActivity
  data/                  Static content: properties, neighborhoods,
                        testimonials, faq, activity feed
  hooks/                 useCountUp (animated stat counters)
  lib/                   site.ts (SITE_URL/SITE_NAME config), events.ts
                        (cross-component signals for city-filter deep links)
  types/                 Shared cross-component types (e.g. hero drag state)
```

`page.tsx` composes the sections in order; each section owns its own content,
styling hooks into `src/app/globals.css` via plain class names (no CSS modules).

## Notes

- Property, neighborhood, testimonial, FAQ, and activity-feed content lives in
  `src/data/` — edit those files to change listings/copy without touching
  components.
- The hero 3D scene is dynamically imported with `ssr: false` since it needs
  a browser canvas; see `components/sections/Hero.tsx`.
- Images are loaded from `images.unsplash.com` via `next/image`, allowed in
  `next.config.ts` under `images.remotePatterns`.
- Set `NEXT_PUBLIC_SITE_URL` in your deployment environment once you have a
  real domain — `src/lib/site.ts` reads it for metadata, the sitemap, robots,
  and JSON-LD; it falls back to a placeholder otherwise.
# real-estate-website
