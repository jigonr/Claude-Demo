@AGENTS.md

# Pathfinder -- Career Discovery App

## Project Overview
Interactive web app helping young people (16-25) discover careers they'd never considered. Uses behavioral science to surface hidden preferences and challenge assumptions. This is NOT a personality quiz -- it's a guided discovery experience that destabilizes assumptions first, then rebuilds around revealed preferences.

## Tech Stack
- **Next.js 16.2** (App Router) + TypeScript
- **React 19.2**
- **Tailwind CSS v4** with custom editorial design system
- **Framer Motion 12** for page transitions and animations
- **Zustand 5** for client-side state management
- **Claude API** (@anthropic-ai/sdk ^0.80) for AI-powered reflection (Lens phase)
- **bun** as package manager

## Architecture
```
src/
  app/                          --> Next.js App Router pages
    page.tsx                        Landing page (server component)
    about/page.tsx                  Science/methodology page
    discover/layout.tsx             Shared layout for discover flow
    discover/mirror/page.tsx        Phase 1: Questions (BUILT)
    discover/lens/page.tsx          Phase 2: AI reflection (STUB)
    discover/map/page.tsx           Phase 3: Career matches (STUB)
    discover/path/page.tsx          Phase 4: Action plans (STUB)
    api/                            API routes (NEEDS: reflect/)
  components/
    questions/                  --> Question-type components (BUILT)
      BinaryChoice.tsx              Two-card selection for binary questions
      SliderQuestion.tsx            Range slider for spectrum questions
      OpenTextQuestion.tsx          Free text for open questions
      QuestionRenderer.tsx          Orchestrates display, transitions, navigation
    careers/                    --> Career card components (TODO)
    ui/                         --> Shared UI components (TODO)
  data/
    questions.ts                --> 22 questions in two phases (BUILT)
    careers.ts                  --> Career database with dimension vectors (TODO)
  lib/
    types.ts                    --> All shared TypeScript types (BUILT)
    store.ts                    --> Zustand store: useDiscoverStore (BUILT)
    scoring.ts                  --> derivePreferences + matchCareers (BUILT)
```

## Key Concepts

### RevealedPreferences (9-dimensional vector)
Each dimension ranges from -1 to 1 unless noted:
| Dimension        | -1 end                  | +1 end                    |
|------------------|-------------------------|---------------------------|
| autonomy         | Prefers structure        | Fiercely independent       |
| timeHorizon      | Wants fast results       | Patient long-term builder  |
| socialDensity    | Deep solo focus          | Thrives in teams/crowds    |
| riskTolerance    | Safety-first             | Embraces uncertainty       |
| cognitiveStyle   | Concrete/practical       | Abstract/theoretical       |
| incomeWeight*    | Money is secondary       | Financial security is key  |
| statusWeight*    | Title doesn't matter     | Recognition matters        |
| meaningWeight*   | Impact is a bonus        | Must feel meaningful       |
| geographicFlex   | Rooted to one place      | Will go anywhere           |

*incomeWeight, statusWeight, meaningWeight range 0-1 (default 0.5).

### Two-Phase Question Design
1. **Adversarial phase** (12 questions): Destabilize assumptions, expose contradictions, force uncomfortable honesty. Designed to make the user squirm, then think.
2. **Redirecting phase** (10 questions): Surface hidden preferences, reveal what users actually care about (not what they say they care about), map to career dimensions.

The flow is intentional: destabilize first, then rebuild. Questions are exported as `[...adversarial, ...redirecting]`.

### Question Types
- `binary` -- Two-option card selection (BinaryChoice component)
- `slider` -- Spectrum with labeled min/max endpoints (SliderQuestion component). Slider value is normalized; weights stored under `__slider__` key in dimensionWeights.
- `open` -- Free-text response (OpenTextQuestion component). Contributes 0 to the preference vector; used only by AI reflection in Lens phase.
- `image` and `rank` -- Defined in types but no questions or components use them yet.

### Career Matching
Cosine similarity between the user's 9D preference vector and each career's dimension vector. Top 8 matches returned with auto-generated human-readable match explanations.

### Four Phases
1. **Mirror** (`/discover/mirror`) -- Questions that reveal who you are
2. **Lens** (`/discover/lens`) -- AI-powered reflection on contradictions and surprises
3. **Map** (`/discover/map`) -- Career matches ranked by cosine similarity
4. **Path** (`/discover/path`) -- Concrete action plans and micro-experiments

## Commands
- `bun dev` -- start dev server
- `bun run build` -- production build
- `bun run lint` -- ESLint

## Coding Conventions
- Use `@/` path alias for imports from `src/`
- Components use **named exports**; pages use **default exports**
- All data files in `src/data/`, all shared types in `src/lib/types.ts`
- Prefer Framer Motion `motion` components for any animation
- No progress bars in the question flow -- intentional design choice (avoids completion anxiety)
- Questions have a `phase` field: `'adversarial' | 'redirecting'`
- Zustand store: `useDiscoverStore` from `@/lib/store`
- Question design: adversarial, contrarian -- force real trade-offs, not school counselor vibes
- Tone: warm, intellectually curious, slightly irreverent. Never corporate or preachy.

### Design System
- **Cream/background**: `#FAF8F5` (dark mode: `#1C1917`)
- **Charcoal/foreground**: `#1C1917` (dark mode: `#FAF8F5`)
- **Accent (terracotta)**: `#C45D3E` -- use `text-accent` / `bg-accent`
- **Accent light**: `#E8927A` -- use `text-accent-light` / `bg-accent-light`
- **Muted**: `#78716C` -- use `text-muted` / `bg-muted`
- **Heading font**: `font-[family-name:var(--font-heading)]` (Georgia serif)
- **Body font**: Geist Sans (via Next.js font system)
- All pages use `max-w-3xl mx-auto` for consistent width
- Dark mode supported via `prefers-color-scheme` media query

## Workflow
- Use git worktrees (`.worktrees/`) for parallel feature work
- Commit and push frequently
- Squash and merge PRs -- no lingering branches

## Environment Variables
- `ANTHROPIC_API_KEY` -- required for the `/api/reflect` route (Lens phase)

## Known Issues and Design Feedback

### Data Bugs
- **`mastery-or-variety`**: `timeHorizon` weight is -0.5 (mastery slides toward "variety" on this dimension). Should likely be **positive** -- mastering one skill deeply implies long time horizon.
- **`legacy-question`**: type is `'binary'` but has **4 options**. BinaryChoice component renders a 2-card layout. Needs either a new `'multi-choice'` type/component or reduction to 2 options.

### Slider Semantics
- Slider min/max semantics are inconsistent across questions. "Right" does not always mean the same thing conceptually. Audit needed to ensure consistent directional meaning, or ensure the UI clearly labels both ends.

### Question Flow
- Consider cutting adversarial phase from 12 to ~7 questions to reduce drop-off risk. Current 22-question total may be too long for the target demographic.
- The salary question (`creative-poverty-boring-wealth`) uses absolute euro amounts (25K/90K). Should use **relative framing** instead for inclusivity -- absolute numbers mean very different things across countries and socioeconomic contexts.

### Open-Ended Questions
- All `open` type questions have empty `dimensionWeights: {}`. They contribute nothing to the preference vector. They exist solely for AI reflection (Lens phase) to analyze free-text responses. This is by design but should be documented in the UI so users understand why they're writing.

## Job Postings Dataset (`job_data/`)

Flat-file dataset of entry-level job postings used for career matching. **No database** -- filenames are regex-searchable.

### File naming convention
`{id}_{category}_{title-slug}_{city-state}.{ext}` -- e.g., `0004_business_financial-analyst_new-york-ny.json`

### Regex examples
```bash
ls job_data/*_tech_*                        # All tech jobs
ls job_data/*_business_*analyst*            # All business analyst roles
ls job_data/*_austin-tx.*                   # All jobs in Austin
ls job_data/*_healthcare_*technician*       # All healthcare technician roles
```

### File formats
Each posting has two files (same name, different extension):
- `.json` -- structured data (machine-readable)
- `.md` -- human-readable posting with company voice

### Categories
- **tech** -- Tech & Engineering (~333 jobs at scale)
- **business** -- Business & Finance (~333 jobs at scale)
- **healthcare** -- Healthcare & Science (~334 jobs at scale)

### Title conventions (industry-accurate, NOT generic "Junior X")
- **Tech**: "Software Engineer I", "QA Analyst", "IT Support Specialist" -- uses "I", "Associate", or bare title
- **Business**: "Financial Analyst", "Audit Associate", "Marketing Coordinator" -- uses "Associate", "Coordinator", "Analyst", "Staff" (never "Junior")
- **Healthcare**: "Medical Laboratory Technician", "Research Associate I", "Pharmacy Technician" -- uses "Technician", "Aide", "Associate I", "Coordinator" (never "Junior")

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

## Status

### Done
- [x] Project scaffold (Next.js 16 + Tailwind v4 + Framer Motion + Zustand)
- [x] Type system (`types.ts`) with all core interfaces
- [x] Question data: 22 questions across 2 phases (12 adversarial + 10 redirecting)
- [x] Question components: BinaryChoice, SliderQuestion, OpenTextQuestion, QuestionRenderer
- [x] Scoring engine: `derivePreferences()` and `matchCareers()` with cosine similarity
- [x] Zustand store with full state management for the discover flow
- [x] Design system with editorial palette and dark mode
- [x] Route structure for all 4 phases + landing + about
- [x] Landing page + About page

### Needed
- [ ] **Career database** (`src/data/careers.ts`) -- no careers exist yet; matching engine has nothing to match against
- [ ] **API route** (`/api/reflect`) -- Lens phase needs a server route calling Claude API
- [ ] **Lens page UI** -- AI reflection display (loading states, reflection cards)
- [ ] **Map page UI** -- Career match display with explanations
- [ ] **Path page UI** -- Action plans, micro-experiments, learning paths
- [ ] **Career card components** (`src/components/careers/`)
- [ ] **Shared UI components** (`src/components/ui/`)
- [ ] Fix known data bugs (mastery-or-variety weight, legacy-question type mismatch)
- [ ] Slider semantics audit
- [ ] Question count reduction evaluation
