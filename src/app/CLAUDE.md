# App Pages

## Conventions
- Landing page and About are server components (no "use client" unless animations needed)
- Discover pages use "use client" for interactivity
- All pages use max-w-3xl mx-auto for consistent width
- Heading font: font-[family-name:var(--font-heading)]
- Accent color: text-accent, bg-accent
- Animations: use framer-motion motion components, prefer subtle fade/slide

## Routes
- / --> Landing page (the pitch)
- /about --> Science/methodology
- /discover/mirror --> Phase 1: Questions (BUILT)
- /discover/lens --> Phase 2: AI reflection (STUB -- needs /api/reflect route)
- /discover/map --> Phase 3: Career matches (STUB -- needs careers.ts data)
- /discover/path --> Phase 4: Action plans (STUB)

## Discover Flow
- discover/layout.tsx provides shared layout for all discover sub-pages
- Mirror page renders QuestionRenderer which handles the full 22-question flow
- After Mirror completes, user transitions to Lens for AI-powered reflection
- Lens calls /api/reflect (NOT YET BUILT) with answers + open-text responses
- Map displays career matches from scoring.ts matchCareers()
- Path shows learning paths and micro-experiments from matched careers

## API Routes Needed
- /api/reflect -- POST route accepting answers array, returns Reflection[] via Claude API
  - Needs ANTHROPIC_API_KEY env var
  - Should analyze contradictions, assumptions, surprises, and reframes
  - See Reflection type in lib/types.ts for response shape
