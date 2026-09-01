# Concrete Season — landing page

Landing page for **Concrete Season**, a fictional three-day electronic music and installation art
festival held in a decommissioned water treatment works. Built as a design-engineering portfolio
piece: the festival, the site and every act on the bill are invented, and no tickets are for sale.

- **Style family:** Brutalism — concrete greys, 2px black rules, zero radius, no shadows,
  monospace throughout, tight negative tracking. One signal orange (`#ff3b00`) with exactly three
  jobs: the tickets button, sold-out marks, and the text selection colour.
- **Type:** Martian Mono (display) + Roboto Mono (body).
- **Motion:** photography is greyscale until you hover it, which is the page's one reward and the
  reason the imagery does not need colour to hold the layout together. Lineup ticker is CSS
  (constant motion, linear, off the main thread); everything else is
  [Motion](https://github.com/motiondivision/motion) scroll reveals at 380 ms.
- **Interactive:** a live countdown to gates, and a three-day bill switcher. The FAQ is native
  `<details>` — no accordion library, no JavaScript.

## Stack

Next.js 16 · React 19 · Tailwind CSS v4 · Motion. No backend.

## Imagery

Unsplash: Stefan Spassov, Julian Schultz, Danny Howe, Yvette de Wit, Tijs van Leur, the blowup.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```
