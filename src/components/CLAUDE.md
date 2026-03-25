# Components

## Question Components (src/components/questions/)
- BinaryChoice: Two-card selection for binary questions
- SliderQuestion: Range slider for spectrum questions
- OpenTextQuestion: Free text for open questions
- QuestionRenderer: Orchestrates question display, transitions, navigation

## Conventions
- All components use "use client" (they use hooks/animations)
- Named exports only
- Framer Motion for all animations — use motion.div
- Font for question text: font-[family-name:var(--font-heading)] text-2xl md:text-4xl
- Accent color: Tailwind class text-accent or bg-accent
- The store is at @/lib/store — use useDiscoverStore
