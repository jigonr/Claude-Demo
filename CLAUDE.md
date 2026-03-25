@AGENTS.md

# Pathfinder -- Career Discovery App

## Project Overview
Interactive web app helping young people (16-25) discover careers they'd never considered. Uses behavioral science to surface hidden preferences and challenge assumptions. NOT a personality quiz -- an adversarial guided discovery that destabilizes assumptions first, then rebuilds with data. The Claude API reflection is the core product differentiator.

## Tech Stack
- **Next.js 16.2** (App Router) + TypeScript
- **React 19.2**
- **Tailwind CSS v4** with custom editorial design system
- **Framer Motion 12** for page transitions and animations
- **Zustand 5** for client-side state management
- **Claude API** (@anthropic-ai/sdk ^0.80) for AI-powered reflection (Lens phase)
- **bun** as package manager

## Architecture (accurate as of 2026-03-25)
```
src/
  app/
    page.tsx                        Landing page (DONE)
    about/page.tsx                  Science/methodology (DONE)
    discover/layout.tsx             Shared discover layout (DONE)
    discover/mirror/page.tsx        Question flow (DONE)
    discover/lens/page.tsx          AI reflection page (DONE)
    discover/map/page.tsx           Job match cards (DONE)
    discover/path/page.tsx          Next steps / action plans (DONE)
    api/reflect/route.ts            Claude API reflection endpoint (DONE)
    api/synthesize/route.ts         Claude API synthesis endpoint (DONE)
  components/
    questions/                      All built: BinaryChoice, SliderQuestion, OpenTextQuestion, QuestionRenderer
    careers/                        CareerCard.tsx / JobCard (DONE)
    ui/                             Button, Badge, Card, DimensionBar, LoadingPulse (ALL DONE)
  data/
    questions.ts                    22 questions -- adversarial + redirecting, interleaved (DONE)
    jobs.ts                         500 jobs with 9D dimension vectors from job_data.json (DONE)
    job_data.json                   Master list of all 500 job postings (DONE)
    careers.ts                      30 curated careers with rich descriptions (DONE -- Maks)
    careers-mock.ts                 5 placeholder careers for fallback (LEGACY)
  lib/
    types.ts                        Job, JobMatch, Career, Reflection, RevealedPreferences (DONE)
    store.ts                        Zustand: answers, preferences, reflections, jobMatches (DONE)
    scoring.ts                      derivePreferences() + matchJobs() with cosine similarity (DONE)
    contradictions.ts               6 deterministic rules for local reflection fallback (DONE)
job_data/                           500 entry-level job postings as JSON + MD (READ-ONLY)
```

---

## COORDINATION PROTOCOL

**This file is the single source of truth.** Every teammate reads this at session start.

### Rules:
1. `git pull origin main` before starting work
2. Use git worktrees for ALL feature work -- never commit to main directly
3. Commit and push frequently. Squash-merge PRs immediately. Delete branches after merge.
4. Update this CLAUDE.md after completing any task

### Worktree workflow:
```bash
git pull origin main
git worktree add .worktrees/my-feature -b feature/my-feature
cd .worktrees/my-feature
bun install
# ... work ...
git add <files> && git commit -m "feat: description"
git push -u origin feature/my-feature
gh pr create --title "feat: description" --body "..."
gh pr merge <N> --squash
# Clean up:
cd <project-root>
git pull origin main
git worktree remove .worktrees/my-feature
```

---

## MVP STATUS (updated 2026-03-25)

### DONE -- all MVP blockers resolved
- [x] Landing page + About page
- [x] 22 adversarial + redirecting questions, interleaved with open-ended
- [x] Question components (binary, slider, open-text, renderer)
- [x] Scoring engine (derivePreferences + matchJobs with cosine similarity)
- [x] Zustand store for full discover flow (Job/JobMatch types)
- [x] Local contradiction detection (6 rules in contradictions.ts)
- [x] **Claude API `/api/reflect` route** (Maks)
- [x] **Claude API `/api/synthesize` route** (Maks)
- [x] Lens page with AI-powered reflections
- [x] Map page with job match cards (500 real jobs with dimension vectors)
- [x] Path page with next steps and skills breakdown
- [x] All UI components (Button, Badge, Card, DimensionBar, LoadingPulse)
- [x] Design system (editorial palette, dark mode, Framer Motion animations)
- [x] **500 job postings dataset** (159 tech, 149 business, 158 healthcare) with 9D dimension vectors (David)
- [x] **30 curated careers** with rich descriptions, learning paths, micro-experiments (Maks)
- [x] Career->Job type refactor across codebase (David)

### NEXT PRIORITY: Integration & Polish

| # | Task | Owner | Status |
|---|------|-------|--------|
| 1 | **End-to-end flow testing** -- walk through all 22 questions, lens, map, path, verify no dead ends | All | TODO |
| 2 | **Reconcile dual data sources** -- map/path pages should use `jobs.ts` (500 real postings) not `careers.ts` (30 curated). Decide which to keep or merge. | David | TODO |
| 3 | **Mobile responsiveness pass** -- test all pages at 375px width | Maks | TODO |
| 4 | **Fix data bugs** -- `mastery-or-variety` timeHorizon weight, `legacy-question` type | Anyone | TODO |
| 5 | **Slider semantics audit** -- min/max semantics inconsistent across questions | Anyone | TODO |

---

## Data Architecture

### Two data sources (needs reconciliation):
1. **`src/data/jobs.ts`** -- 500 real job postings from `job_data/`, each with programmatically derived 9D dimension vectors. Uses `Job` type. Map page imports this.
2. **`src/data/careers.ts`** -- 30 curated career profiles with rich descriptions, learning paths, micro-experiments, stories. Uses `Career` type. Built by Maks for the path page.

**Decision needed:** Merge these into one source, or use jobs.ts for matching and careers.ts for enrichment?

### Type system:
- `Job` -- mirrors `job_data/*.json` schema + `dimensions` + `tags`
- `JobMatch` -- `{ job: Job; score: number; matchExplanation: string }`
- `Career` -- rich career profiles with `dayInLife`, `learningPath`, `microExperiment`, `stories` (from Maks)
- Both `Career` and `Job` exist in `types.ts` for backward compatibility

---

## Key Concepts

### RevealedPreferences (9-dimensional vector)
| Dimension | -1 | +1 | Range |
|-----------|----|----|-------|
| autonomy | Prefers structure | Fiercely independent | -1 to 1 |
| timeHorizon | Wants fast results | Patient long-term builder | -1 to 1 |
| socialDensity | Deep solo focus | Thrives in teams | -1 to 1 |
| riskTolerance | Safety-first | Embraces uncertainty | -1 to 1 |
| cognitiveStyle | Concrete/practical | Abstract/theoretical | -1 to 1 |
| incomeWeight | Money is secondary | Financial security key | 0 to 1 |
| statusWeight | Title doesn't matter | Recognition matters | 0 to 1 |
| meaningWeight | Impact is bonus | Must feel meaningful | 0 to 1 |
| geographicFlex | Rooted | Will go anywhere | -1 to 1 |

### Job Matching
Cosine similarity between user's 9D preference vector and each job's dimension vector. Top 5 + 1 surprise pick returned with auto-generated match explanations. Matches against all 500 individual job postings from `job_data/`.

### Four Phases
1. **Mirror** (`/discover/mirror`) -- 22 questions (adversarial then redirecting)
2. **Lens** (`/discover/lens`) -- AI reflection via Claude API
3. **Map** (`/discover/map`) -- Job matches
4. **Path** (`/discover/path`) -- Next steps + skills to build

## Commands
- `bun dev` -- start dev server
- `bun run build` -- production build
- `bun run lint` -- ESLint

## Coding Conventions
- `@/` path alias for imports from `src/`
- Components: named exports. Pages: default exports.
- Data in `src/data/`, types in `src/lib/types.ts`
- Framer Motion `motion` components for animation
- No progress bars in question flow (avoids completion anxiety)
- Questions tagged with `phase: 'adversarial' | 'redirecting'`
- Store: `useDiscoverStore` from `@/lib/store`
- Tone: warm, intellectually curious, slightly irreverent. Never corporate.

### Design System
- Background: `#FAF8F5` / dark: `#1C1917`
- Foreground: `#1C1917` / dark: `#FAF8F5`
- Accent: `#C45D3E` / Light: `#E8927A`
- Muted: `#78716C`
- Heading: Georgia serif. Body: Geist Sans.
- Layout: `max-w-3xl mx-auto`

## Environment Variables
- `ANTHROPIC_API_KEY` -- required for `/api/reflect` and `/api/synthesize`

## Job Postings Dataset (`job_data/`)
500 entry-level postings (JSON + MD). Naming: `{id}_{category}_{title-slug}_{city-state}.{ext}`. Categories: tech (159), business (149), healthcare (158). Master list at `job_data/master_list.json`, copy at `src/data/job_data.json` for Turbopack import.

## Known Issues
- **`mastery-or-variety`**: `timeHorizon` weight is -0.5 but should be positive (mastery = long time horizon)
- **`legacy-question`**: type is `'binary'` but has 4 options. Needs `'multi-choice'` type or reduction to 2
- **Slider semantics**: min/max semantics inconsistent across questions. Audit needed.
- **Dual data sources**: `jobs.ts` (500 real postings) and `careers.ts` (30 curated) coexist -- needs reconciliation
