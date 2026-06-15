# Powervet Brand Guidelines

An interactive brand presentation for Powervet’s 2026 design system — a full brand revamp conceived, designed, illustrated, and built from scratch. The site documents logos, color, typography, patterns, layout, motion, and illustration so stakeholders and implementers can explore the identity in context, not just on a PDF.

## Purpose

Powervet is veterinary practice management software. This site is the living brand deck for a revamp grounded in two strategic criteria:

1. **Trust, care, and innovation** — the logo and visual language communicate reliability for clinic staff, empathy for pet owners, and a modern product that simplifies complex workflows.
2. **Trust, clarity, and innovation** — the color system, typography, and UI tokens prioritize calm hierarchy, accessible contrast, and a trustworthy periwinkle–lilac–teal palette.

Everything in this project was created from scratch: brand strategy framing, design tokens, layout grids, motion principles, decorative patterns, hero UI mockups, and the full pet illustration set (cat, dog, rabbit, clinic scenes). No stock illustration libraries — only original vector work refined in Affinity Designer and exported for the web.

## What’s inside

| Section | Description |
| --- | --- |
| Hero | Product-forward landing with GSAP-drawn animal illustrations and responsive UI cards |
| Logos | Primary variants for light, draft, and high-contrast backgrounds |
| Brand colors | Core palette with click-to-copy hex values |
| Color palette & ratio | Extended scales and proportional color usage |
| Typography | Outfit, Raleway, and Inter with weight and role guidance |
| Patterns | Crosses, croquettes, and bubbles at defined opacities |
| Layout | 4–12 column grid across mobile, tablet, laptop, and desktop breakpoints |
| Motion | Ease, spring, fade, and slide-up principles with live demos |
| Illustrations | Style rules (line weight, fills, palette) and asset carousel |

## Responsive design

Layouts adapt from **402px** (mobile) through **1280px** (desktop) using a token-driven grid: consistent margins, gutters, and column counts at each breakpoint. Typography uses fluid `clamp()` sizing in the hero; sections reflow from single-column stacks to multi-column grids. The navigation collapses into a mobile menu; illustration carousels and masonry layouts use breakpoint-aware column counts.

## Accessibility

Built with practical a11y defaults, aligned with WCAG-minded contrast and interaction patterns:

- Semantic HTML (`main`, `section`, heading hierarchy)
- `aria-label` on icon-only controls (logo home, carousel controls)
- Decorative imagery marked `aria-hidden` where appropriate
- `MotionConfig reducedMotion="user"` plus `prefers-reduced-motion` handling — marquee and GSAP hero animations pause or skip when users request reduced motion
- Sufficient color contrast documented in the color-ratio section; grayscale scale supports readable typography
- Keyboard-focusable navigation and footer anchor links

## Motion

Animations are intentional and restrained — polish without distraction:

- **Motion** (Framer Motion) for section entrances, hover states, and motion-principle demos
- **GSAP** + **@gsap/react** for the hero animal draw-on cycle, prism flashes, and card fade choreography
- CSS marquee on the brand banner with reduced-motion fallback
- **Embla Carousel** with autoplay for the illustration gallery

## Tools & workflow

| Category | Tools |
| --- | --- |
| Design | [Figma](https://figma.com), [Figma Make](https://figma.com/make), [Excalidraw](https://excalidraw.com), [Affinity Designer](https://affinity.serif.com/designer/) |
| Design–code bridge | [Figma MCP](https://www.figma.com/developers/api) (inspect, sync, and validate against design files) |
| Development | [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), [Vite](https://vite.dev/), [Cursor](https://cursor.com) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com/) |
| Animation | [Motion](https://motion.dev/), [GSAP](https://gsap.com/) |

## Libraries

**Core**

- `react`, `react-dom` — UI
- `typescript`, `vite`, `@vitejs/plugin-react` — build
- `tailwindcss`, `@tailwindcss/vite`, `tw-animate-css` — styling

**Animation & carousel**

- `motion` — scroll and interaction animations
- `gsap`, `@gsap/react` — SVG draw paths and hero timeline
- `embla-carousel-react`, `embla-carousel-autoplay` — illustration carousel

**UI primitives** (shadcn/ui-style, Radix-based)

- `@radix-ui/react-*` — accessible accordion, dialog, tabs, tooltip, and more
- `class-variance-authority`, `clsx`, `tailwind-merge` — component variants
- `lucide-react` — icons
- `vaul`, `sonner`, `cmdk` — drawer, toast, command palette

**Other dependencies** in the template stack include `react-hook-form`, `recharts`, `react-router`, `embla-carousel`, `canvas-confetti`, and MUI packages — available for extension; the brand guidelines page primarily uses Motion, GSAP, Radix/shadcn primitives, and Embla.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start development server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript without emitting |

## Project structure

```
src/
├── app/
│   ├── App.tsx              # Page composition
│   └── components/          # Sections and UI
├── assets/                  # Images and SVGs
├── hooks/                   # Shared hooks (e.g. reduced motion)
├── imports/                 # Figma export assets
└── styles/                  # Global CSS and design tokens
```

## About the author

**Antonio Ruiz** — Design Engineer focused on brand identity and design systems.

Design Engineer and UI developer who bridges Figma and production code. Antonio specializes in translating brand strategy into scalable design tokens, component APIs, and polished frontends — the same workflow used to build this Powervet revamp and his portfolio system [Blueprint](https://devtoti.com/about) on [devtoti.com](https://devtoti.com).

Background spans high-fidelity UI/UX, wireframing, user-centered design, and frontend implementation with React, TypeScript, Tailwind CSS, Next.js, and SvelteKit. Experienced in design-to-code pipelines, accessibility (WCAG 2.1–aligned patterns), and AI-assisted tooling for faster, consistent delivery. Has shipped landing pages, dashboards, component libraries ([archui-lib](https://github.com/devtoti/archui-lib)), and brand systems for international clients.

## Contact

| | |
| --- | --- |
| Portfolio | [devtoti.com](https://devtoti.com) |
| Contact | [devtoti.com/contact](https://devtoti.com/contact) |
| LinkedIn | [linkedin.com/in/devtoti](https://www.linkedin.com/in/devtoti/) |
| GitHub | [github.com/devtoti](https://github.com/devtoti) |
| Dribbble | [dribbble.com/totisketches](https://dribbble.com/totisketches) |

## License

Private — all rights reserved. 2026
