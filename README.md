# bean-bag

Production-ready marketing website for **bean-bag** — a design, technology, and systems platform.

Built with React, TypeScript, Vite, and Tailwind CSS v4. Design inspired by the [Figma Make reference](https://www.figma.com/make/w25ne4tIbYOU94l6CyeZzr/Premium-Technology-Website-Design).

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |

## Structure

```
src/
├── components/
│   ├── layout/     Header, Footer
│   ├── sections/   Page sections (Hero, Features, Pricing, etc.)
│   └── ui/         Reusable UI (Button, Card, Badge, Accordion)
├── hooks/          useScrollReveal
└── lib/            Utilities (cn)
```

## Sections

1. Sticky header with mobile hamburger menu
2. Hero with product dashboard mockup
3. Trust strip
4. Value proposition
5. Feature grid
6. How it works (3-step workflow)
7. Use cases by segment
8. Integrations, security & stats
9. Testimonials
10. Pricing with annual/monthly toggle
11. FAQ accordion
12. Contact / demo request form
13. Footer with final CTA

## Design tokens

- **Background:** `#000000` with subtle grid pattern
- **Primary CTA:** White on black (inverted)
- **Accent glow:** Indigo/purple radial gradients
- **Typography:** Inter
- **Icons:** Lucide React
