# App Pages

## Conventions
- Landing page and About are server components (no "use client" unless animations needed)
- Discover pages use "use client" for interactivity
- All pages use max-w-3xl mx-auto for consistent width
- Heading font: font-[family-name:var(--font-heading)]
- Accent color: text-accent, bg-accent
- Animations: use framer-motion motion components, prefer subtle fade/slide

## Routes
- / → Landing page (the pitch)
- /about → Science/methodology
- /discover/mirror → Phase 1: Questions
- /discover/lens → Phase 2: AI reflection
- /discover/map → Phase 3: Career matches
- /discover/path → Phase 4: Action plans
