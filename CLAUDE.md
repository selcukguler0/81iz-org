# 81 İz

Next.js 16 (App Router, TypeScript) landing site.

- `/` — home (teal NGO layout: nav, hero, photo feature, three pillars, Ağrı section, transparency stats, footer).
- `/hikayemiz` — founder's story (earth-palette hero + manifesto).

Each page uses its own palette via the tokens in `app/globals.css` (teal-* for home, cream/earth/amber/mountain-blue for the story). Don't cross the palettes.

## Styling

**CSS Modules only — do not mix in Tailwind.**

- Design tokens live as CSS custom properties in `app/globals.css` (colors, cream/earth/amber/mountain-blue palette).
- Fonts (Caveat, Playfair Display, Source Serif 4) are loaded via `next/font/google` in `app/layout.tsx` and exposed as `--font-caveat`, `--font-playfair`, `--font-source-serif` CSS variables.
- Page-scoped styles in `*.module.css` next to their component. Reference global tokens/font variables from inside module files.
- Keep animations, SVG fill colors, and interactive classes in CSS Modules — utility-first approaches fight the motion-heavy design.

If a new page needs styling, add a co-located `page.module.css`. Do not introduce `tailwindcss`, `@emotion`, `styled-components`, or similar — keep one styling system.

## Client-side effects

The hero's star generation, scroll-reveal `IntersectionObserver`, and mountain parallax live in `app/hikayemiz/HikayemizEffects.tsx` (client component). Pass hashed module class names in as props so `document.querySelector` targets the correct scoped selectors.
