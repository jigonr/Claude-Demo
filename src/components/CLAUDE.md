# Components

## Question Components (src/components/questions/)
- **BinaryChoice**: Two-card selection for binary questions. Renders exactly 2 options as clickable cards.
  - Known issue: `legacy-question` has 4 options but type 'binary' -- needs a new component or type fix.
- **SliderQuestion**: Range slider for spectrum questions. Labels from question's sliderMin/sliderMax. Value is normalized.
- **OpenTextQuestion**: Free text for open questions. These contribute 0 to preference vector (used by AI reflection only).
- **QuestionRenderer**: Orchestrates question display, transitions, and navigation. Routes to the correct component based on question.type.

## Components Needed
- **careers/**: Career card components for Map phase (CareerCard, CareerMatchList, etc.)
- **ui/**: Shared UI components (buttons, modals, loading states, etc.)

## Conventions
- All components use "use client" (they use hooks/animations)
- Named exports only
- Framer Motion for all animations -- use motion.div with AnimatePresence for transitions
- Font for question text: font-[family-name:var(--font-heading)] text-2xl md:text-4xl
- Accent color: Tailwind class text-accent or bg-accent
- The store is at @/lib/store -- use useDiscoverStore
- Question type determines which component renders:
  - 'binary' --> BinaryChoice
  - 'slider' --> SliderQuestion
  - 'open' --> OpenTextQuestion
  - 'image', 'rank' --> not yet implemented (defined in types.ts)
