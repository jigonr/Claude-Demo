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
- **Claude API** (@anthropic-ai/sdk ^0.80) for AI-powered reflection
- **bun** as package manager

## Architecture (accurate as of 2026-03-25)
```
src/
  app/
    page.tsx                        Landing page (DONE)
    about/page.tsx                  Science/methodology (DONE)
    discover/layout.tsx             Shared discover layout (DONE)
    discover/mirror/page.tsx        Question flow (DONE)
    discover/lens/page.tsx          Reflection -- local contradictions only (DONE, NEEDS API UPGRADE)
    discover/map/page.tsx           Career matches -- uses mock data (DONE, NEEDS REAL DATA)
    discover/path/page.tsx          Action plans -- uses mock data (DONE, NEEDS REAL DATA)
    api/                            NO API ROUTES EXIST YET
  components/
    questions/                      All built: BinaryChoice, SliderQuestion, OpenTextQuestion, QuestionRenderer
    careers/                        CareerCard.tsx (DONE)
    ui/                             Button, Badge, Card, DimensionBar, LoadingPulse (ALL DONE)
  data/
    questions.ts                    22 questions -- adversarial + redirecting, interleaved (DONE)
    jobs.ts                          Job data with dimension vectors (TODO -- David)
  lib/
    types.ts                        Career, CareerMatch, Reflection, RevealedPreferences, etc. (DONE)
    store.ts                        Zustand: answers, preferences, reflections, careerMatches (DONE)
    scoring.ts                      derivePreferences() + matchCareers() with cosine similarity (DONE)
    contradictions.ts               6 deterministic rules for local reflection (DONE)
job_data/                           456 job postings as JSON + MD (DONE -- read-only source)
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

## MVP SPEC

**Goal:** End-to-end flow: Questions -> AI Reflection -> Career Matches -> Next Steps

### UX Arc: destabilize -> reframe -> empower

**Screen 1: Lens** (`/discover/lens`) -- "Here's what we noticed"
- Emotional beat: vulnerability -> insight
- Claude API analyzes answers, returns 3-5 reflections (contradictions, assumptions, surprises, reframes)
- Reflections appear one at a time, staggered animation
- Warm, slightly confrontational tone -- like a brilliant friend who read too much behavioral economics
- CTA: "See who you could become" -> `/discover/map`

**Screen 2: Map** (`/discover/map`) -- "Here's who you could be"
- Emotional beat: curiosity -> possibility
- Top 5 career match cards via cosine similarity
- 1 surprise pick flagged differently
- Each card: title, match %, one-line explanation, expandable detail
- CTA: "What can I do this week?" -> `/discover/path`

**Screen 3: Path** (`/discover/path`) -- "Here's what to do next"
- Emotional beat: possibility -> agency
- 1 micro-experiment per matched career -- concrete, doable this week
- "Start Over" resets store, back to `/`

### Cut from V1:
- ~~Detailed career profiles~~ -- just the match card
- ~~Income trajectory charts~~ -- V2
- ~~Export/share~~ -- V2

---

## WHAT'S DONE vs WHAT'S LEFT

### DONE (functional, on main)
- [x] Landing page + About page
- [x] 22 adversarial + redirecting questions, interleaved with open-ended
- [x] Question components (binary, slider, open-text, renderer)
- [x] Scoring engine (derivePreferences + matchCareers with cosine similarity)
- [x] Zustand store for full discover flow
- [x] Local contradiction detection (6 rules in contradictions.ts)
- [x] Lens page with local reflections + dimension bars
- [x] Map page with career cards (uses 5 mock careers)
- [x] Path page with micro-experiments + learning paths
- [x] All UI components (Button, Badge, Card, DimensionBar, LoadingPulse)
- [x] Design system (editorial palette, dark mode, Framer Motion animations)
- [x] 456 job postings dataset (tech, business, healthcare) in `job_data/`
- [x] Generation script + TypeScript partial data files

### TWO BLOCKERS TO MVP

| # | Blocker | What's needed | Owner |
|---|---------|---------------|-------|
| 1 | **No Claude API route** | `/api/reflect` doesn't exist. Lens page uses local contradictions.ts only. Need to build the route and upgrade lens page to call it. | **Maks** |
| 2 | **Job data not integrated** | 456 job postings exist in `job_data/` but need transformation into `src/data/jobs.ts` with dimension vectors. Map/Path pages still use mock data. | **David** |

---

## TASK ASSIGNMENTS (updated 2026-03-25)

### Maks -- Claude API Integration
**Priority 1: Build `/api/reflect` route and upgrade lens page**
- Create `src/app/api/reflect/route.ts`
- Call Claude API with answers + preferences
- Contradiction detection goes IN THE PROMPT, not in separate logic
- Upgrade lens page to call `/api/reflect` instead of local `detectContradictions()`
- Keep local contradictions.ts as fallback if API fails
- See prompt spec below

### David -- Job Database Integration
**Priority 1: Transform `job_data/` into `src/data/jobs.ts` with dimension vectors**
- 456 job postings already exist in `job_data/*.json` (read-only source data)
- Create `src/data/jobs.ts` that imports job data and adds `dimensions` + `tags` to each
- Update `src/lib/types.ts`: replace `Career`/`CareerMatch` with `Job`/`JobMatch` (mirrors job_data JSON schema + dimensions + tags)
- Update `src/lib/scoring.ts`: rename `matchCareers()` -> `matchJobs()`
- Update `src/lib/store.ts`: rename `careerMatches` -> `jobMatches`
- Each job posting is its own entry (no deduplication)
- See dimension mapping guidance below

### Jose -- QA, Integration, Coordination
- Audit questions for weight correctness and dimension coverage
- Test full flow end-to-end once Maks and David deliver
- Keep CLAUDE.md updated
- Handle merge conflicts between branches

---

## INSTRUCTIONS FOR MAKS: API Route + Prompt

### API Route (`src/app/api/reflect/route.ts`)
```typescript
import Anthropic from '@anthropic-ai/sdk';
import { NextRequest, NextResponse } from 'next/server';

const anthropic = new Anthropic();  // reads ANTHROPIC_API_KEY from env

export async function POST(request: NextRequest) {
  const { answers, preferences, questions } = await request.json();
  const message = await anthropic.messages.create({
    model: 'claude-sonnet-4-5-20250514',
    max_tokens: 2000,
    messages: [{ role: 'user', content: buildReflectionPrompt(answers, preferences, questions) }],
  });
  // Parse response into Reflection[] and return
  return NextResponse.json({ reflections });
}
```

### System prompt for Claude:
```
You are Pathfinder's reflection engine. You analyze a young person's answers to career discovery questions and generate personalized insights that challenge their assumptions and reveal hidden patterns.

CONTEXT: The user completed a two-phase questionnaire:
- Phase 1 (Adversarial): Questions that destabilize assumptions and force honest trade-offs
- Phase 2 (Redirecting): Questions that surface hidden preferences through behavioral scenarios

YOUR JOB: Generate 3-5 reflections. Each should feel like "oh, I never thought about it that way." You are a brilliant friend who reads behavioral economics -- warm, direct, slightly irreverent. Never preachy. Never corporate.

REFLECTION TYPES:
- "contradiction": Their answers conflict (says money doesn't matter but chose higher-paying options)
- "assumption": Unexamined assumption about careers (parental influence, prestige bias)
- "surprise": Something they probably don't know about themselves
- "reframe": A different way to think about something they said

RULES:
- Reference SPECIFIC answers. Quote their words back.
- Be direct about uncomfortable truths. If driven by status but said otherwise, say so kindly but clearly.
- Tie insights to behavioral science (hedonic adaptation, availability bias, identity foreclosure) without being academic.
- Each reflection: 2-4 sentences. Punchy, not padded.
- Tone: "Here's something interesting about your answers..." NOT "Great job!"

OUTPUT FORMAT: JSON array:
[{ "id": "reflection-1", "title": "Short punchy title", "body": "2-4 sentences", "type": "contradiction|assumption|surprise|reframe", "relatedAnswers": ["question-id-1", "question-id-2"] }]
```

### Lens page upgrade:
- Call `/api/reflect` on mount (if answers exist, else redirect to mirror)
- Show "Reading between the lines..." loading state
- Display reflections with staggered Framer Motion fade-in
- Fall back to local contradictions.ts if API fails
- Store reflections via `setReflections()`

---

## INSTRUCTIONS FOR DAVID: Job Database Integration

**Source:** `job_data/*.json` (456 postings, read-only) -> **Output:** `src/data/jobs.ts`

The `Job` type should mirror the `job_data` JSON schema directly, plus `dimensions` and `tags`:
```typescript
interface Job {
  // Fields from job_data/*.json (pass through directly)
  id: string; title: string; category: string; company: string; industry: string;
  location: { city: string; state: string; country: string; remote: string };
  salary: { min: number; max: number; currency: string; period: string };
  employment_type: string; posted_date: string; description: string;
  responsibilities: string[]; requirements: { education: string; experience_years: string; skills: string[]; certifications: string[] };
  benefits: string[];
  // Fields David adds for matching
  dimensions: RevealedPreferences;  // 9D vector for cosine similarity
  tags: string[];                    // [category, ...derived from skills/industry]
}
interface JobMatch { job: Job; score: number; matchExplanation: string; }
```

### Files to update:
1. `src/data/jobs.ts` -- create, import job_data, add dimensions + tags
2. `src/lib/types.ts` -- replace Career/CareerMatch with Job/JobMatch
3. `src/lib/scoring.ts` -- matchCareers() -> matchJobs()
4. `src/lib/store.ts` -- careerMatches -> jobMatches

### Dimension mapping:
| Dimension | Low (-1) | High (+1) |
|-----------|----------|-----------|
| autonomy | Help desk, assembly line | Freelancer, founder |
| timeHorizon | QA tester, barista | Researcher, architect |
| socialDensity | Data analyst solo | Teacher, sales |
| riskTolerance | Government auditor | Startup founder |
| cognitiveStyle | Technician, operator | Theorist, designer |
| incomeWeight* | Nonprofit worker | Investment banker |
| statusWeight* | Lab tech | Management consultant |
| meaningWeight* | Trader | Doctor, social worker |
| geographicFlex | Lab technician | Remote cloud engineer |

*These range 0-1, not -1 to 1.

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

### Career Matching
Cosine similarity between user's 9D preference vector and each career's dimension vector. Top 5 returned with match explanations.

### Four Phases
1. **Mirror** (`/discover/mirror`) -- 22 questions (adversarial then redirecting)
2. **Lens** (`/discover/lens`) -- AI reflection (THE PRODUCT)
3. **Map** (`/discover/map`) -- Career matches
4. **Path** (`/discover/path`) -- Micro-experiments + next steps

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
- `ANTHROPIC_API_KEY` -- required for `/api/reflect`

## Job Postings Dataset (`job_data/`)
456 entry-level postings (JSON + MD). Naming: `{id}_{category}_{title-slug}_{city-state}.{ext}`. Categories: tech (156), business (146), healthcare (154). This is the read-only source data that David transforms into `src/data/jobs.ts`.
