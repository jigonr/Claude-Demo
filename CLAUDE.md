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
    discover/map/page.tsx           Phase 3: Career matches (STUB -- Jose)
    discover/path/page.tsx          Phase 4: Action plans (STUB -- Jose)
    api/reflect/route.ts            Claude API endpoint (TODO -- Maks)
  components/
    questions/                  --> Question-type components (BUILT)
      BinaryChoice.tsx              Two-card selection
      SliderQuestion.tsx            Range slider
      OpenTextQuestion.tsx          Free text
      QuestionRenderer.tsx          Orchestrator
    careers/                    --> Career card components (TODO -- Jose)
    ui/                         --> Shared UI components (TODO -- Jose)
  data/
    questions.ts                --> 22 questions in two phases (BUILT)
    careers.ts                  --> Career database (TODO -- David)
  lib/
    types.ts                    --> All shared TypeScript types (BUILT)
    store.ts                    --> Zustand store (BUILT)
    scoring.ts                  --> Preference derivation + career matching (BUILT)
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

## ROADMAP & TASK ASSIGNMENTS

### Sprint 1: Core Flow (NOW -- target: working end-to-end demo)

| # | Task | Owner | Status | Files | Blocked By |
|---|------|-------|--------|-------|------------|
| 1 | Career database with queryable schema | **David** | IN PROGRESS | `src/data/careers.ts` | -- |
| 2 | Claude API integration + reflection prompts | **Maks** | IN PROGRESS | `src/app/api/reflect/route.ts`, `src/app/discover/lens/page.tsx` | -- |
| 3 | Map page UI (career match cards) | **Jose** | TODO | `src/app/discover/map/page.tsx`, `src/components/careers/` | #1 (needs careers data) |
| 4 | Path page UI (action plans) | **Jose** | TODO | `src/app/discover/path/page.tsx` | #1 |
| 5 | Shared UI components (buttons, loading states) | **Jose** | TODO | `src/components/ui/` | -- |

### Sprint 2: Polish & Integration

| # | Task | Owner | Status | Files |
|---|------|-------|--------|-------|
| 6 | Fix question data bugs (see Known Issues) | Anyone | TODO | `src/data/questions.ts` |
| 7 | End-to-end flow testing | All | TODO | -- |
| 8 | Mobile responsiveness pass | Jose | TODO | All pages |
| 9 | Error handling (API failures, empty states) | Maks | TODO | Lens page, API route |
| 10 | Landing page polish & copy review | Jose | TODO | `src/app/page.tsx` |

---

## INSTRUCTIONS FOR DAVID: Career Database Schema

**File:** `src/data/careers.ts`

David, the careers data MUST conform to the `Career` interface in `src/lib/types.ts`. Each career needs a `dimensions` object with the same 9 fields as `RevealedPreferences` -- this is what the cosine similarity matching runs against.

### Required schema for each career:
```typescript
import { Career } from '@/lib/types';

export const careers: Career[] = [
  {
    id: 'ux-researcher',                    // kebab-case unique id
    title: 'UX Researcher',
    description: 'Short paragraph of what this job ACTUALLY involves (not textbook)',
    dayInLife: '2-3 sentences: a vivid typical day',
    dimensions: {
      autonomy: 0.6,        // -1 to 1
      timeHorizon: 0.3,     // -1 to 1
      socialDensity: 0.5,   // -1 to 1
      riskTolerance: -0.2,  // -1 to 1
      cognitiveStyle: 0.4,  // -1 to 1
      incomeWeight: 0.5,    // 0 to 1
      statusWeight: 0.3,    // 0 to 1
      meaningWeight: 0.7,   // 0 to 1
      geographicFlex: 0.4,  // -1 to 1
    },
    surpriseFactor: 'Why a 19-year-old wouldn\'t know about this job',
    learningPath: [
      { title: 'Step 1', description: '...', timeframe: '3 months' },
      { title: 'Step 2', description: '...', timeframe: '6 months' },
      { title: 'Step 3', description: '...', timeframe: '1-2 years' },
    ],
    microExperiment: 'Something they can try THIS WEEK to taste this career',
    optionValue: ['Other careers this path keeps open'],
    incomeTrajectory: [
      { year: 1, amount: 45000 },
      { year: 5, amount: 70000 },
      { year: 10, amount: 95000 },
      { year: 20, amount: 120000 },
    ],
    stories: [{
      name: 'Real-sounding name',
      background: 'Where they started',
      journey: 'How they got here',
      currentRole: 'What they do now',
    }],
    tags: ['research', 'tech', 'psychology'],  // for filtering
  },
];
```

### Queryability requirements:
- **Tags array** on every career for easy filtering (`careers.filter(c => c.tags.includes('tech'))`)
- **Consistent dimension values** -- think carefully about what each career actually requires/offers. The matching algorithm uses cosine similarity, so relative positions matter more than absolute values.
- Target **30-50 careers** spanning: tech-adjacent, creative-analytical, finance-adjacent, skilled trades, social impact, emerging fields, non-traditional paths.
- Include "hidden gems" most 18-year-olds wouldn't know: actuarial science, computational linguistics, industrial design, forensic accounting, climate adaptation consulting, etc.

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

## INSTRUCTIONS FOR JOSE: UI Frontend

**Your focus:** Make the user experience feel polished and real. You own everything the user sees and touches.

### Priority order:
1. **Shared UI components** (`src/components/ui/`) -- Button, Card, LoadingPulse, Badge, AnimatedPage wrapper
2. **Career card components** (`src/components/careers/CareerCard.tsx`, `CareerMatchList.tsx`)
3. **Map page** (`src/app/discover/map/page.tsx`) -- replace stub with real career match UI
4. **Path page** (`src/app/discover/path/page.tsx`) -- replace stub with action plans
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
- Read `careerMatches` from store (populated by scoring engine after Lens phase)
- If no matches yet, run `matchCareers(preferences, careers)` from `@/lib/scoring`
- Display top 8 careers as cards with: title, match score (%), match explanation, surprise factor
- Expandable detail: dayInLife, income trajectory, tags
- "See Your Path" button → `/discover/path`

### Path page spec:
- Read career matches from store
- For each matched career: learning path steps, micro-experiment, option value
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

### Career Matching
Cosine similarity between user's 9D preference vector and each career's dimension vector. Top 8 returned with auto-generated match explanations.

### Four Phases
1. **Mirror** (`/discover/mirror`) -- Questions
2. **Lens** (`/discover/lens`) -- AI reflection
3. **Map** (`/discover/map`) -- Career matches
4. **Path** (`/discover/path`) -- Action plans

## Commands
- `bun dev` -- start dev server
- `bun run build` -- production build
- `bun run lint` -- ESLint

## Coding Conventions
- Use `@/` path alias for imports from `src/`
- Components use **named exports**; pages use **default exports**
- All data files in `src/data/`, all shared types in `src/lib/types.ts`
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
- [x] Scoring engine: `derivePreferences()` + `matchCareers()` with cosine similarity
- [x] Zustand store for discover flow
- [x] Design system with editorial palette and dark mode
- [x] All routes stubbed (landing, about, mirror, lens, map, path)
- [x] Landing page + About page

### In Progress
- [ ] Career database with queryable schema (David)
- [ ] Claude API integration + reflection prompts (Maks)

### Up Next
- [ ] Map page UI with career cards (Jose)
- [ ] Path page UI with action plans (Jose)
- [ ] Shared UI components (Jose)

### Backlog
- [ ] Fix data bugs (mastery-or-variety weight, legacy-question type)
- [ ] Slider semantics audit
- [ ] Question count reduction
- [ ] End-to-end flow test
- [ ] Mobile responsiveness pass
- [ ] Error handling for API failures
