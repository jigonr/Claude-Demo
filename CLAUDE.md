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

## Job Postings Dataset (`job_data/`)

Flat-file dataset of entry-level job postings used for career matching. **No database** — filenames are regex-searchable.

### File naming convention
`{id}_{category}_{title-slug}_{city-state}.{ext}` — e.g., `0004_business_financial-analyst_new-york-ny.json`

### Regex examples
```bash
ls job_data/*_tech_*                        # All tech jobs
ls job_data/*_business_*analyst*            # All business analyst roles
ls job_data/*_austin-tx.*                   # All jobs in Austin
ls job_data/*_healthcare_*technician*       # All healthcare technician roles
```

### File formats
Each posting has two files (same name, different extension):
- `.json` — structured data (machine-readable)
- `.md` — human-readable posting with company voice

### Categories
- **tech** — Tech & Engineering (~333 jobs at scale)
- **business** — Business & Finance (~333 jobs at scale)
- **healthcare** — Healthcare & Science (~334 jobs at scale)

### Title conventions (industry-accurate, NOT generic "Junior X")
- **Tech**: "Software Engineer I", "QA Analyst", "IT Support Specialist" — uses "I", "Associate", or bare title
- **Business**: "Financial Analyst", "Audit Associate", "Marketing Coordinator" — uses "Associate", "Coordinator", "Analyst", "Staff" (never "Junior")
- **Healthcare**: "Medical Laboratory Technician", "Research Associate I", "Pharmacy Technician" — uses "Technician", "Aide", "Associate I", "Coordinator" (never "Junior")

### JSON schema
```json
{
  "id": "0001",
  "title": "Software Engineer I",
  "category": "tech",
  "company": "Stripe",
  "industry": "Fintech",
  "location": { "city": "Austin", "state": "TX", "country": "US", "remote": "hybrid" },
  "salary": { "min": 85000, "max": 110000, "currency": "USD", "period": "yearly" },
  "description": "...",
  "responsibilities": ["..."],
  "requirements": { "education": "...", "experience_years": "0-2", "skills": [...], "certifications": [...] },
  "benefits": ["..."],
  "employment_type": "full-time",
  "posted_date": "2026-03-10"
}
```

### Description tone by industry
- **Tech**: Casual, growth-oriented, scale-focused (Stripe/Datadog voice)
- **Business**: Formal, prestige-driven, institutional (JPMorgan/Deloitte voice)
- **Healthcare**: Mission-driven, credential-focused, patient-centered (Mayo Clinic/Pfizer voice)
