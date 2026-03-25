@AGENTS.md

# Pathfinder — Career Discovery App

## Project Overview
Interactive web app helping young people (16-25) discover careers they'd never considered, using behavioral science to surface hidden preferences and challenge assumptions. NOT a personality quiz — a guided discovery experience with an **adversarial** approach: destabilize assumptions first, then rebuild with data.

## Tech Stack
- **Next.js 16** (App Router) + TypeScript
- **React 19**
- **Tailwind CSS v4** with custom editorial design system
- **Framer Motion** for page transitions and animations
- **Zustand** for client-side state management
- **Claude API** (@anthropic-ai/sdk) for AI-powered reflection
- **bun** as package manager

## Architecture
```
src/
  app/                    → Next.js App Router pages
    discover/
      mirror/page.tsx     → Question flow (BUILT)
      lens/page.tsx       → AI reflection (STUB)
      map/page.tsx        → Career matches (STUB)
      path/page.tsx       → Action plans (STUB)
    about/page.tsx        → Science/methodology page (BUILT)
    api/                  → API routes (NEEDS: reflect/)
  components/
    questions/            → BinaryChoice, SliderQuestion, OpenTextQuestion, QuestionRenderer (BUILT)
    careers/              → Career card components (TODO)
    ui/                   → Shared UI components (TODO)
  data/
    questions.ts          → 22 questions in two phases (BUILT)
    careers.ts            → Career database with dimension vectors (TODO)
  lib/
    types.ts              → All shared types (BUILT)
    store.ts              → Zustand store (BUILT)
    scoring.ts            → derivePreferences + matchCareers (BUILT)
```

## Key Concepts
- **RevealedPreferences**: 9-dimensional vector derived from user answers (autonomy, timeHorizon, socialDensity, riskTolerance, cognitiveStyle, incomeWeight, statusWeight, meaningWeight, geographicFlex)
- **Career matching**: Cosine similarity between user preference vector and career dimension vectors
- **Four phases**: Mirror (questions) → Lens (AI reflection) → Map (career matches) → Path (action plans)
- **Two-phase questionnaire**: Adversarial (12 questions — destabilize assumptions) → Redirecting (10 questions — surface hidden preferences)
- **QuestionPhase**: `'adversarial' | 'redirecting'` — each question is tagged with its phase

## MVP Status
- [x] Mirror phase — question flow with 22 adversarial + redirecting questions
- [x] Scoring — preference derivation and cosine similarity matching
- [x] Landing page + About page
- [ ] Career database (careers.ts)
- [ ] Lens phase — Claude API reflection route + UI
- [ ] Map phase — career cards + matching display
- [ ] Path phase — learning paths + action plans

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
- Question design: adversarial, contrarian — force real trade-offs, not school counselor vibes

## Workflow
- Use git worktrees (`.worktrees/`) for parallel feature work
- Commit and push frequently
- Squash and merge PRs — no lingering branches

## Environment Variables
- `ANTHROPIC_API_KEY` — required for the /api/reflect route (Lens phase)
