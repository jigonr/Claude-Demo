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
    page.tsx                        Landing page (BUILT)
    about/page.tsx                  Science/methodology page (BUILT)
    discover/layout.tsx             Shared layout for discover flow (BUILT)
    discover/mirror/page.tsx        Phase 1: Questions (BUILT)
    discover/lens/page.tsx          Phase 2: AI reflection (STUB -- Maks)
    discover/map/page.tsx           Phase 3: Job matches (STUB -- Maks)
    discover/path/page.tsx          Phase 4: Action plans (STUB -- Maks)
    api/reflect/route.ts            Claude API endpoint (TODO -- Maks)
  components/
    questions/                  --> Question-type components (BUILT)
      BinaryChoice.tsx              Two-card selection
      SliderQuestion.tsx            Range slider
      OpenTextQuestion.tsx          Free text
      QuestionRenderer.tsx          Orchestrator
    jobs/                       --> Job card components (TODO -- Maks)
    ui/                         --> Shared UI components (TODO -- Maks)
  data/
    questions.ts                --> 22 questions in two phases (BUILT)
    jobs.ts                     --> Job data + dimension vectors (TODO -- David)
  lib/
    types.ts                    --> All shared TypeScript types (NEEDS UPDATE -- David)
    store.ts                    --> Zustand store (NEEDS UPDATE -- rename career→job)
    scoring.ts                  --> Preference derivation + job matching (NEEDS UPDATE -- rename career→job)
job_data/                       --> Source flat-file dataset (300+ JSON + MD files, READ-ONLY)
```

---

## COORDINATION PROTOCOL

**This file is the single source of truth for the team.** Every teammate's Claude Code session reads this file. Treat it like an internal Linear board.

### Rules for ALL teammates:
1. **Pull before you start.** Always `git pull origin main` before beginning work.
2. **Use git worktrees** for ALL feature work. Never commit directly to main. Create a branch, work in a worktree, PR it, squash and merge, delete the branch.
3. **Commit and push frequently.** Small, frequent commits. Don't sit on uncommitted work.
4. **Squash and merge PRs immediately** when ready. No lingering branches. Delete remote branches after merge.
5. **Update this CLAUDE.md** after completing any task. Mark it done, update the roadmap. This is how teammates know what's happening.
6. **Read this file at the start of every session.** It tells you what's done, what's in progress, and what's blocked.

### Worktree workflow:
```bash
git pull origin main
git worktree add .worktrees/my-feature -b feature/my-feature
cd .worktrees/my-feature
# ... work ...
git add . && git commit -m "feat: description"
git push -u origin feature/my-feature
gh pr create --title "feat: description" --body "..."
# After review: squash and merge via GitHub
# Then clean up:
git worktree remove .worktrees/my-feature
git branch -D feature/my-feature
git push origin --delete feature/my-feature
```

---

## MVP SPEC (V1 — ship this first)

**Goal:** End-to-end flow from questions → AI reflection → career matches → next steps. The Claude API reflection IS the product — it's what makes Pathfinder different from every career quiz on the internet.

### Three screens after the questionnaire:

**Screen 1: AI Reflection** (`/discover/lens`) — THE CORE VALUE
- Call Claude API with user's answers + derived preferences
- Claude detects contradictions, hidden assumptions, and surprises in the answers
- Contradiction detection is embedded in the prompt (not separate deterministic logic)
- Display 3-5 reflections with staggered reveal animation
- Each reflection: punchy title, 2-4 sentence body, type badge (contradiction/assumption/surprise/reframe)
- Interactive feel: fast responses, conversational tone
- "See Your Matches" button → `/discover/map`

**Screen 2: Your Matches** (`/discover/map`)
- Run `matchCareers()` against job database
- Show **top 5 job cards**: title, company, location, match score, one-line "why this fits"
- Include 1 **surprise pick** that scores lower but challenges an assumption
- Card shows: title, company, salary range, match %, one-sentence explanation
- "Explore Your Path" button → `/discover/path`

**Screen 3: What Now** (`/discover/path`)
- For each matched job: one **micro-experiment** (shadow someone, free course, weekend project)
- Keep it dead simple: list of 5 jobs × 1 action each
- "Start Over" button → reset store, back to `/`

### What is CUT from V1 (do NOT build these yet):
- ~~Detailed job profiles~~ → just the match card
- ~~Learning path timelines~~ → V2
- ~~Income trajectory charts~~ → V2
- ~~Career stories~~ → V2
- ~~Export/share~~ → V2

---

## ROADMAP & TASK ASSIGNMENTS

### Sprint 1: MVP (NOW — target: working end-to-end demo)

| # | Task | Owner | Status | Files | Blocked By |
|---|------|-------|--------|-------|------------|
| 1 | Job database with dimension vectors | **David** | IN PROGRESS | `src/data/jobs.ts`, `job_data/` | -- |
| 2 | Claude API reflection + contradiction detection in prompt | **Maks** | IN PROGRESS | `src/app/api/reflect/route.ts`, `src/app/discover/lens/page.tsx` | -- |
| 3 | Map page — 5 job match cards | **Maks** | TODO | `src/app/discover/map/page.tsx`, `src/components/careers/` | #1 |
| 4 | Path page — micro-experiments list | **Maks** | TODO | `src/app/discover/path/page.tsx` | #1 |

### Sprint 2: Polish (after MVP ships)

| # | Task | Owner | Status | Files |
|---|------|-------|--------|-------|
| 5 | Fix data bugs (mastery-or-variety weight, legacy-question type) | Anyone | TODO | `src/data/questions.ts` |
| 6 | End-to-end flow testing | All | TODO | -- |
| 7 | Mobile responsiveness pass | Maks | TODO | All pages |
| 8 | Job detail expansion (stories, income, learning paths) | David | TODO | `src/data/jobs.ts` |

---

## INSTRUCTIONS FOR DAVID: Job Database Integration

**Data source:** `job_data/` flat-file dataset (already exists -- ~300+ entry-level job postings as JSON + Markdown). This data is READ-ONLY -- do not modify the files in `job_data/`.

**Files to create/update:**
1. `src/data/jobs.ts` -- Export a `Job[]` array with dimension vectors added
2. `src/lib/types.ts` -- Replace the `Career` interface with `Job` (mirrors `job_data` JSON schema + `dimensions` + `tags`)
3. `src/lib/scoring.ts` -- Rename `matchCareers()` → `matchJobs()`, use `Job` and `JobMatch` types
4. `src/lib/store.ts` -- Rename `careerMatches` → `jobMatches`, `setCareerMatches` → `setJobMatches`, use `JobMatch` type

### The `Job` type should mirror the `job_data` JSON schema directly, plus matching fields:
```typescript
export interface Job {
  // -- Fields that come straight from job_data/*.json --
  id: string;
  title: string;
  category: 'tech' | 'business' | 'healthcare';
  company: string;
  industry: string;
  location: { city: string; state: string; country: string; remote: string };
  salary: { min: number; max: number; currency: string; period: string };
  employment_type: string;
  posted_date: string;
  description: string;
  responsibilities: string[];
  requirements: { education: string; experience_years: string; skills: string[]; certifications: string[] };
  benefits: string[];
  // -- Fields David adds for matching --
  dimensions: RevealedPreferences;  // 9D vector for cosine similarity
  tags: string[];                    // [category, ...derived from skills/industry]
}

export interface JobMatch {
  job: Job;
  score: number;
  matchExplanation: string;
}
```

### What David needs to build:
1. **`src/data/jobs.ts`** -- Import all `job_data/*.json` files, add `dimensions` and `tags` to each, export as `Job[]`
2. **Derive `dimensions`** for each job -- 9D `RevealedPreferences` vector. Use the job's category, responsibilities, skills, company, and industry to infer values.
3. **Each job posting is its own entry** -- "SRE I at Datadog in Omaha" and "SRE I at Stripe in Austin" are separate jobs with potentially different dimensions (different companies, industries, locations).
4. **Update types.ts** -- Replace `Career`/`CareerMatch`/`CareerStory`/`LearningStep` with `Job`/`JobMatch`. Remove fields that don't exist in job_data (`dayInLife`, `surpriseFactor`, `learningPath`, `microExperiment`, `optionValue`, `incomeTrajectory`, `stories`).
5. **Update scoring.ts** -- `matchCareers()` → `matchJobs()`, operate on `Job[]` and return `JobMatch[]`
6. **Update store.ts** -- `careerMatches` → `jobMatches`, `setCareerMatches()` → `setJobMatches()`

### Dimension mapping guidance:
Each dimension ranges -1 to 1 (except incomeWeight/statusWeight/meaningWeight: 0 to 1):
- **autonomy**: How much independence does this role have? (SRE = moderate, Help Desk = low)
- **timeHorizon**: Fast feedback vs long-term projects? (QA = short, Research = long)
- **socialDensity**: Solo vs team-heavy? (Developer = lower, Scrum Master = high)
- **riskTolerance**: Stable vs uncertain? (Government analyst = low, Startup engineer = high)
- **cognitiveStyle**: Concrete/hands-on vs abstract/theoretical? (Technician = concrete, ML Engineer = abstract)
- **incomeWeight**: How much does this job optimize for pay? (Finance = high, Nonprofit = low)
- **statusWeight**: How much prestige/recognition? (Management Consultant = high, Help Desk = low)
- **meaningWeight**: Mission-driven? (Healthcare = high, Trading = low)
- **geographicFlex**: Remote-friendly? (Cloud Engineer = high, Lab Technician = low)

### Queryability requirements:
- **Tags array** on every job for filtering (`jobs.filter(j => j.tags.includes('tech'))`)
- **Consistent dimension values** -- relative positions matter more than absolute values (cosine similarity)
- All ~300+ jobs get dimension vectors (no deduplication -- the matching engine picks the best individual job postings)

---

## INSTRUCTIONS FOR MAKS: Claude API Integration & Prompts

**Files to create:**
1. `src/app/api/reflect/route.ts` -- POST endpoint
2. `src/app/discover/lens/page.tsx` -- Replace the stub

### API Route (`/api/reflect/route.ts`)

```typescript
import Anthropic from '@anthropic-ai/sdk';
import { NextRequest, NextResponse } from 'next/server';

const anthropic = new Anthropic();  // reads ANTHROPIC_API_KEY from env

export async function POST(request: NextRequest) {
  const { answers, preferences, questions } = await request.json();

  const message = await anthropic.messages.create({
    model: 'claude-sonnet-4-5-20250514',
    max_tokens: 2000,
    messages: [
      {
        role: 'user',
        content: buildReflectionPrompt(answers, preferences, questions),
      },
    ],
  });

  // Parse the response into Reflection[] objects
  // Return as JSON
  return NextResponse.json({ reflections });
}
```

### The Reflection Prompt (THIS IS THE PRODUCT DIFFERENTIATOR)

The prompt should:
1. Receive the user's raw answers (including open-text responses) and derived preferences
2. Analyze PATTERNS and CONTRADICTIONS in the answers
3. Generate 3-5 `Reflection` objects, each one of: 'contradiction', 'assumption', 'surprise', 'reframe'

Here is the system prompt to use:

```
You are Pathfinder's reflection engine. You analyze a young person's answers to career discovery questions and generate personalized insights that challenge their assumptions and reveal hidden patterns.

CONTEXT: The user just completed a two-phase questionnaire:
- Phase 1 (Adversarial): Questions designed to destabilize assumptions and force honest trade-offs about career values
- Phase 2 (Redirecting): Questions that surface hidden preferences through behavioral scenarios

YOUR JOB: Generate 3-5 reflections. Each reflection should feel like a moment of "oh, I never thought about it that way." You are a brilliant friend who has read a lot of behavioral economics -- warm, direct, slightly irreverent. Never preachy. Never corporate.

REFLECTION TYPES:
- "contradiction": When their answers conflict (e.g., they say money doesn't matter but consistently chose higher-paying options)
- "assumption": When they're making an unexamined assumption about careers (e.g., parental influence, prestige bias)
- "surprise": When their answers reveal something they probably don't know about themselves
- "reframe": When you can show them a different way to think about something they said

RULES:
- Reference SPECIFIC answers they gave. Quote their words back when possible.
- Be direct about uncomfortable truths. If they're clearly driven by status but said otherwise, say so kindly but clearly.
- Tie insights to behavioral science (hedonic adaptation, availability bias, identity foreclosure) but don't be academic about it.
- Each reflection should be 2-4 sentences. Punchy, not padded.
- The tone is: "Here's something interesting about your answers..." NOT "Great job answering these questions!"

OUTPUT FORMAT: Return a JSON array of objects:
[
  {
    "id": "reflection-1",
    "title": "Short punchy title (5-8 words)",
    "body": "The 2-4 sentence reflection",
    "type": "contradiction|assumption|surprise|reframe",
    "relatedAnswers": ["question-id-1", "question-id-2"]
  }
]
```

### The user message should include:
```
Here are the user's answers:
{JSON of answers array with question text included}

Here are their derived preference scores:
{JSON of RevealedPreferences}

Their open-text responses:
- "What career are you 'supposed' to pursue?": {their answer}
- "When you picture success, what does it look like?": {their answer}
- "Last time you lost track of time doing something": {their answer}
- "What career would you be embarrassed to say out loud?": {their answer}
- "What are you working on Saturday night?": {their answer}

Generate 3-5 reflections based on the patterns you see.
```

### Lens Page (`/discover/lens/page.tsx`)
- On mount: check if answers exist in store. If not, redirect to `/discover/mirror`.
- Call `/api/reflect` with answers + preferences from `useDiscoverStore`.
- Show loading state: "Reading between the lines..." with subtle pulse animation.
- Display reflections one at a time with staggered Framer Motion fade-in (500ms delay between each).
- Each reflection card: title (serif heading), body, type badge (small pill: "contradiction", "surprise", etc.).
- "Continue to Your Map" button at bottom → `/discover/map`.
- Store reflections in store via `setReflections()`.
- Handle API errors gracefully (show a message, still allow continuing to map).

### Environment setup:
Create `.env.local` with `ANTHROPIC_API_KEY=sk-ant-...` (get from Jose).

---

## INSTRUCTIONS FOR MAKS: UI Frontend (in addition to API work above)

**Your focus:** Make the user experience feel polished and real. You own everything the user sees and touches.

### Priority order:
1. **Shared UI components** (`src/components/ui/`) -- Button, Card, LoadingPulse, Badge, AnimatedPage wrapper
2. **Job card components** (`src/components/jobs/JobCard.tsx`, `JobMatchList.tsx`)
3. **Map page** (`src/app/discover/map/page.tsx`) -- replace stub with real job match UI
4. **Path page** (`src/app/discover/path/page.tsx`) -- replace stub with next steps
5. **Mobile responsiveness** -- test all pages at 375px width

### Design system reference:
- Heading font: `font-[family-name:var(--font-heading)]`
- Accent: `text-accent` / `bg-accent` (#C45D3E)
- Muted text: `text-muted` (#78716C)
- Background: `bg-background` (#FAF8F5)
- All pages: `max-w-3xl mx-auto`
- Animations: Framer Motion `motion` components, prefer subtle fade/slide
- Cards: `rounded-2xl border-2 border-foreground/10` with hover shadow

### Map page spec:
- Read `jobMatches` from store (populated by scoring engine after Lens phase)
- If no matches yet, run `matchJobs(preferences, jobs)` from `@/lib/scoring`
- Display top 5 jobs as cards with: title, company, location, salary range, match score (%), match explanation
- Include 1 surprise pick that scores lower but challenges an assumption
- Expandable detail: description, responsibilities, requirements, benefits (all from job_data)
- "See Your Path" button → `/discover/path`

### Path page spec:
- Read job matches from store
- For each matched job: show key requirements/skills as actionable next steps
- Keep it simple: 5 jobs × concrete actions (courses, certifications, skills to learn)
- "Start Over" button that calls `store.reset()` and redirects to `/`

---

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
1. **Adversarial phase** (12 questions): Destabilize assumptions, expose contradictions, force uncomfortable honesty.
2. **Redirecting phase** (10 questions): Surface hidden preferences, map to career dimensions.

Exported as `[...adversarial, ...redirecting]`.

### Job Matching
Cosine similarity between user's 9D preference vector and each job's dimension vector. Top 5 + 1 surprise pick returned with auto-generated match explanations. Matches against all ~300+ individual job postings from `job_data/`.

### Four Phases
1. **Mirror** (`/discover/mirror`) -- Questions
2. **Lens** (`/discover/lens`) -- AI reflection
3. **Map** (`/discover/map`) -- Job matches
4. **Path** (`/discover/path`) -- Next steps

## Commands
- `bun dev` -- start dev server
- `bun run build` -- production build
- `bun run lint` -- ESLint

## Coding Conventions
- Use `@/` path alias for imports from `src/`
- Components use **named exports**; pages use **default exports**
- All data files in `src/data/`, source job data in `job_data/` (read-only), all shared types in `src/lib/types.ts`
- Prefer Framer Motion `motion` components for any animation
- No progress bars in question flow (avoids completion anxiety)
- Questions have a `phase` field: `'adversarial' | 'redirecting'`
- Zustand store: `useDiscoverStore` from `@/lib/store`
- Tone: warm, intellectually curious, slightly irreverent. Never corporate or preachy.

### Design System
- **Cream/background**: `#FAF8F5` (dark mode: `#1C1917`)
- **Charcoal/foreground**: `#1C1917` (dark mode: `#FAF8F5`)
- **Accent (terracotta)**: `#C45D3E` -- `text-accent` / `bg-accent`
- **Accent light**: `#E8927A` -- `text-accent-light` / `bg-accent-light`
- **Muted**: `#78716C` -- `text-muted`
- **Heading font**: `font-[family-name:var(--font-heading)]` (Georgia serif)
- **Body font**: Geist Sans
- All pages: `max-w-3xl mx-auto`
- Dark mode via `prefers-color-scheme`

## Environment Variables
- `ANTHROPIC_API_KEY` -- required for `/api/reflect` route

## Known Issues and Design Feedback

### Data Bugs
- **`mastery-or-variety`**: `timeHorizon` weight is -0.5 but should be positive (mastery = long time horizon)
- **`legacy-question`**: type is `'binary'` but has 4 options. Needs `'multi-choice'` type or reduction to 2

### Slider Semantics
- Min/max semantics inconsistent across questions. Audit needed.

### Question Flow
- Consider cutting adversarial to ~7 questions (22 total may cause drop-off)
- Salary question (`creative-poverty-boring-wealth`): use relative framing, not absolute euros

### Open-Ended Questions
- All `open` questions have empty `dimensionWeights`. They feed AI reflection only, not scoring. By design.

## Job Postings Dataset (`job_data/`)

Flat-file dataset of entry-level job postings. **No database** -- filenames are regex-searchable.

### File naming: `{id}_{category}_{title-slug}_{city-state}.{ext}`
### Formats: `.json` (structured) + `.md` (human-readable)
### Categories: tech, business, healthcare

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

## Status

### Done
- [x] Project scaffold (Next.js 16 + Tailwind v4 + Framer Motion + Zustand)
- [x] Type system with all core interfaces
- [x] 22 questions across 2 phases (adversarial + redirecting)
- [x] Question components: BinaryChoice, SliderQuestion, OpenTextQuestion, QuestionRenderer
- [x] Scoring engine: `derivePreferences()` + `matchCareers()` with cosine similarity (NEEDS RENAME to `matchJobs()`)
- [x] Zustand store for discover flow
- [x] Design system with editorial palette and dark mode
- [x] All routes stubbed (landing, about, mirror, lens, map, path)
- [x] Landing page + About page

### In Progress
- [ ] Job database with dimension vectors -- `src/data/jobs.ts` + type/scoring/store renames (David)
- [ ] Claude API reflection + contradiction detection in prompt (Maks)

### Up Next (MVP critical path)
- [ ] Map page -- 5 job match cards + 1 surprise pick (Maks, blocked by David)
- [ ] Path page -- next steps list (Maks, blocked by David)

### Backlog (V2)
- [ ] Fix data bugs (mastery-or-variety weight, legacy-question type)
- [ ] Slider semantics audit
- [ ] Question count reduction
- [ ] Mobile responsiveness pass
- [ ] Export/share functionality
