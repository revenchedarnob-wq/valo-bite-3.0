# VALOBITE — Multi-Seller Marketplace

A polished, multi-seller curated marketplace for premium fashion & goods. Every
surface uses a signature glassy visionOS "liquid glass" design system with
iridescent prism bevels, 60fps jelly-spring physics, ambient backlight orbs and
zero-latency Web Audio micro-haptics.

Built with:

- **React 19 + Vite 7 + TypeScript**
- **Tailwind CSS v4**
- **motion (Framer Motion)** — spring physics, scroll choreography, masked reveals
- **Lenis** — inertial smooth scrolling
- **Web Audio API** — synthesized haptic interface voices + telemetry waveform

## Pages

| Route | Description |
| --- | --- |
| `/` | Hero bloom, marquee ticker, stats island, curated sellers + product grids, trusted-atelier hub, frosted footer |
| `/studio` | Philosophy & practice |
| `/archive` | Case-study index |
| `/archive/:slug` | Case-study detail (bad slugs → branded 404) |

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173 (base /)
npm run build    # type-check + production bundle to dist/
npm run preview  # serve the production build
```

The router basename derives from the site's base path via
`import.meta.env.BASE_URL`, so it adapts automatically whether the app is
served at the root or under a subpath.

## Deployment (Vercel)

This project is deployed on [Vercel](https://vercel.com) straight from the
`main` branch of this repository:

- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Framework preset:** Vite

`vite.config.ts` defaults the asset base to `/` for a root-domain deploy. To
host the same build under a subpath (e.g. GitHub Pages), pass `VITE_BASE=/path/`.

## Accessibility & comfort

`prefers-reduced-motion` disables Lenis and ambient loops; keyboard focus uses
clay `:focus-visible` rings; all decorative motion is aria-hidden.
