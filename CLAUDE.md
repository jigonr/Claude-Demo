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
