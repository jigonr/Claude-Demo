@AGENTS.md

# Pathfinder — Career Discovery App

## Project Overview
Interactive web app helping young people (16-25) discover careers they'd never considered, using behavioral science to surface hidden preferences and challenge assumptions. NOT a personality quiz — a guided discovery experience.

## Tech Stack
- **Next.js 15** (App Router) + TypeScript
- **Tailwind CSS v4** with custom editorial design system
- **Framer Motion** for page transitions and animations
- **Zustand** for client-side state management
- **Claude API** (@anthropic-ai/sdk) for AI-powered reflection
- **bun** as package manager

## Architecture
```
src/
  app/           → Next.js App Router pages
  components/    → React components (questions/, careers/, ui/)
  data/          → Static data (questions.ts, careers.ts)
  lib/           → Core logic (types.ts, store.ts, scoring.ts)
```

## Key Concepts
- **RevealedPreferences**: 9-dimensional vector derived from user answers (autonomy, timeHorizon, socialDensity, riskTolerance, cognitiveStyle, incomeWeight, statusWeight, meaningWeight, geographicFlex)
- **Career matching**: Cosine similarity between user preference vector and career dimension vectors
- **Four phases**: Mirror (questions) → Lens (AI reflection) → Map (career matches) → Path (action plans)

## Commands
- `bun dev` — start dev server
- `bun run build` — production build
- `bun run lint` — ESLint

## Coding Conventions
- Use `@/` path alias for imports from `src/`
- Components use named exports
- Pages use default exports
- All data files in `src/data/`, all shared types in `src/lib/types.ts`
- Prefer Framer Motion's `motion` components for any animation
- No progress bars in the question flow — this is intentional (avoids completion anxiety)
- Tone: warm, intellectually curious, slightly irreverent. Never corporate or preachy.

## Environment Variables
- `ANTHROPIC_API_KEY` — required for the /api/reflect route (Lens phase)
