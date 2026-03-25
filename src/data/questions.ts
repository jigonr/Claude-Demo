import { Question } from '@/lib/types';

// ─────────────────────────────────────────────────────────
// PHASE 1: ADVERSARIAL — Challenge assumptions, expose
// contradictions, force uncomfortable honesty.
// These are NOT career counselor questions. They're designed
// to make you squirm, then think.
// ─────────────────────────────────────────────────────────

const adversarial: Question[] = [
  {
    id: 'dream-job-pay-cut',
    text: 'Your dream job exists — but it pays 40% less than you expected. Do you still want it?',
    subtext: 'Most people say yes here. Most people are lying.',
    type: 'binary',
    phase: 'adversarial',
    options: [
      { id: 'still-want', label: 'Yes, I still want it' },
      { id: 'nope', label: 'Honestly? No' },
    ],
    dimensionWeights: {
      'still-want': [
        { dimension: 'meaningWeight', weight: 0.8 },
        { dimension: 'incomeWeight', weight: -0.6 },
      ],
      nope: [
        { dimension: 'incomeWeight', weight: 0.8 },
        { dimension: 'meaningWeight', weight: -0.3 },
      ],
    },
  },
  {
    id: 'parent-disappointment',
    text: "You've found a career you love. Your parents think it's a waste of your potential. What do you actually do?",
    subtext: "Not what you'd like to do. What you'd actually do.",
    type: 'binary',
    phase: 'adversarial',
    options: [
      { id: 'do-it-anyway', label: 'Do it anyway' },
      { id: 'fold', label: 'Find something they approve of' },
    ],
    dimensionWeights: {
      'do-it-anyway': [
        { dimension: 'autonomy', weight: 0.9 },
        { dimension: 'riskTolerance', weight: 0.4 },
        { dimension: 'statusWeight', weight: -0.3 },
      ],
      fold: [
        { dimension: 'autonomy', weight: -0.7 },
        { dimension: 'statusWeight', weight: 0.5 },
        { dimension: 'riskTolerance', weight: -0.4 },
      ],
    },
  },
  // OPEN: early interleave — force reflection before they settle into click-click-click
  {
    id: 'why-really',
    text: 'What career are you "supposed" to pursue? And who decided that — you or someone else?',
    subtext: 'Name the career. Then name the person. Be specific.',
    type: 'open',
    phase: 'adversarial',
    dimensionWeights: {},
  },
  {
    id: 'linkedin-invisible',
    text: "If nobody could ever see your job title — no LinkedIn, no introductions at parties — would you still want the career you're considering?",
    type: 'binary',
    phase: 'adversarial',
    options: [
      { id: 'yes-still', label: 'Yes, it was never about the title' },
      { id: 'honestly-no', label: "I have to be honest — the title matters" },
    ],
    dimensionWeights: {
      'yes-still': [
        { dimension: 'statusWeight', weight: -0.7 },
        { dimension: 'meaningWeight', weight: 0.6 },
      ],
      'honestly-no': [
        { dimension: 'statusWeight', weight: 0.8 },
        { dimension: 'meaningWeight', weight: -0.2 },
      ],
    },
  },
  {
    id: 'seventy-hour-weeks',
    text: 'Everyone you admire in the field you like worked 70-hour weeks for a decade before they "made it." Still interested?',
    type: 'slider',
    phase: 'adversarial',
    sliderMin: 'Absolutely not',
    sliderMax: 'Bring it on',
    dimensionWeights: {
      __slider__: [
        { dimension: 'timeHorizon', weight: 0.8 },
        { dimension: 'riskTolerance', weight: 0.5 },
        { dimension: 'incomeWeight', weight: -0.3 },
      ],
    },
  },
  // OPEN: what does success actually look like in their head?
  {
    id: 'success-definition',
    text: 'Be honest: when you picture yourself "successful" in 10 years, what does the image look like?',
    subtext: "Don't describe what you think we want to hear. Describe the actual image in your head — the car, the office, the Tuesday morning.",
    type: 'open',
    phase: 'adversarial',
    dimensionWeights: {},
  },
  {
    id: 'friend-got-dream-job',
    text: "Your best friend just landed the career you've been dreaming about. What's the first thing you feel?",
    type: 'binary',
    phase: 'adversarial',
    options: [
      { id: 'happy', label: 'Genuinely happy for them' },
      { id: 'gutted', label: 'A knot in my stomach' },
    ],
    dimensionWeights: {
      happy: [
        { dimension: 'statusWeight', weight: -0.4 },
        { dimension: 'meaningWeight', weight: 0.3 },
      ],
      gutted: [
        { dimension: 'statusWeight', weight: 0.6 },
        { dimension: 'riskTolerance', weight: 0.4 },
      ],
    },
  },
  {
    id: 'automation-threat',
    text: "The career you're most drawn to has a 60% chance of being automated in 15 years. Do you still pursue it?",
    subtext: "This isn't hypothetical for most fields anymore.",
    type: 'binary',
    phase: 'adversarial',
    options: [
      { id: 'pursue-anyway', label: "Yes — I'll adapt when the time comes" },
      { id: 'pivot-now', label: "No — I'd rather pick something future-proof" },
    ],
    dimensionWeights: {
      'pursue-anyway': [
        { dimension: 'riskTolerance', weight: 0.7 },
        { dimension: 'meaningWeight', weight: 0.5 },
        { dimension: 'timeHorizon', weight: -0.3 },
      ],
      'pivot-now': [
        { dimension: 'riskTolerance', weight: -0.6 },
        { dimension: 'incomeWeight', weight: 0.4 },
        { dimension: 'timeHorizon', weight: 0.5 },
      ],
    },
  },
  // OPEN: what scares them — this is where real signal lives
  {
    id: 'biggest-fear',
    text: "What's the scariest thing about choosing a career? Say it plainly.",
    subtext: "Picking wrong? Disappointing someone? Being stuck? Being broke? Name the fear.",
    type: 'open',
    phase: 'adversarial',
    dimensionWeights: {},
  },
  {
    id: 'creative-poverty-boring-wealth',
    text: 'Two offers, same day. One: total creative freedom, pays half the average wage. Two: mind-numbing work, pays double the average.',
    subtext: "You can't negotiate. You can't switch for 5 years.",
    type: 'slider',
    phase: 'adversarial',
    sliderMin: 'Creative freedom, half pay',
    sliderMax: 'Boring stability, double pay',
    dimensionWeights: {
      __slider__: [
        { dimension: 'incomeWeight', weight: 0.9 },
        { dimension: 'meaningWeight', weight: -0.7 },
        { dimension: 'autonomy', weight: -0.6 },
      ],
    },
  },
  {
    id: 'move-to-nowhere',
    text: "The perfect opportunity appears — but it's in a city where you know absolutely nobody, far from everyone you love. Do you go?",
    type: 'binary',
    phase: 'adversarial',
    options: [
      { id: 'go', label: "I'd go" },
      { id: 'stay', label: 'Not worth it' },
    ],
    dimensionWeights: {
      go: [
        { dimension: 'geographicFlex', weight: 0.9 },
        { dimension: 'riskTolerance', weight: 0.5 },
        { dimension: 'socialDensity', weight: -0.3 },
      ],
      stay: [
        { dimension: 'geographicFlex', weight: -0.8 },
        { dimension: 'socialDensity', weight: 0.4 },
        { dimension: 'riskTolerance', weight: -0.3 },
      ],
    },
  },
  {
    id: 'quitting-signal',
    text: "You're two years into a career and you hate it. What do you do?",
    subtext: "Sunk cost fallacy is the #1 reason people stay in careers they despise.",
    type: 'binary',
    phase: 'adversarial',
    options: [
      { id: 'quit', label: 'Quit and start over' },
      { id: 'grind', label: "Push through — I've invested too much" },
    ],
    dimensionWeights: {
      quit: [
        { dimension: 'riskTolerance', weight: 0.6 },
        { dimension: 'autonomy', weight: 0.5 },
        { dimension: 'timeHorizon', weight: -0.4 },
      ],
      grind: [
        { dimension: 'riskTolerance', weight: -0.5 },
        { dimension: 'timeHorizon', weight: 0.6 },
        { dimension: 'autonomy', weight: -0.3 },
      ],
    },
  },
];

// ─────────────────────────────────────────────────────────
// PHASE 2: REDIRECTING — Surface hidden preferences, reveal
// what you actually care about (not what you say you care
// about), and map to career dimensions for matching.
// The student has been destabilized. Now we rebuild.
// ─────────────────────────────────────────────────────────

const redirecting: Question[] = [
  // OPEN first: shift the energy from adversarial to reflective
  {
    id: 'lost-track-of-time',
    text: 'Think of the last time you completely lost track of time doing something. What were you doing?',
    subtext: "Not Netflix. Not scrolling. Something where hours vanished and you didn't notice.",
    type: 'open',
    phase: 'redirecting',
    dimensionWeights: {},
  },
  {
    id: 'problems-cant-ignore',
    text: 'What kind of problems make you angry that nobody is fixing?',
    type: 'binary',
    phase: 'redirecting',
    options: [
      { id: 'systems', label: 'Broken systems and inefficiencies' },
      { id: 'people', label: 'People being failed or ignored' },
    ],
    dimensionWeights: {
      systems: [
        { dimension: 'cognitiveStyle', weight: -0.6 },
        { dimension: 'socialDensity', weight: -0.4 },
      ],
      people: [
        { dimension: 'socialDensity', weight: 0.7 },
        { dimension: 'meaningWeight', weight: 0.6 },
      ],
    },
  },
  {
    id: 'explain-or-build',
    text: 'After learning something fascinating, do you want to explain it to someone or go build something with it?',
    type: 'binary',
    phase: 'redirecting',
    options: [
      { id: 'explain', label: 'Explain it' },
      { id: 'build', label: 'Build with it' },
    ],
    dimensionWeights: {
      explain: [
        { dimension: 'socialDensity', weight: 0.5 },
        { dimension: 'cognitiveStyle', weight: 0.4 },
      ],
      build: [
        { dimension: 'cognitiveStyle', weight: -0.3 },
        { dimension: 'autonomy', weight: 0.5 },
        { dimension: 'socialDensity', weight: -0.4 },
      ],
    },
  },
  // OPEN: what actually pulls them — this feeds the AI with the richest signal
  {
    id: 'uncomfortable-truth',
    text: "What's the career you've secretly thought about but would never say out loud?",
    subtext: "The one that makes you feel a little embarrassed. That one.",
    type: 'open',
    phase: 'redirecting',
    dimensionWeights: {},
  },
  {
    id: 'chaos-or-order',
    text: 'Your ideal Monday morning:',
    type: 'binary',
    phase: 'redirecting',
    options: [
      { id: 'chaos', label: "No idea what's coming — and I like it that way" },
      { id: 'order', label: 'A clear plan I made last Friday' },
    ],
    dimensionWeights: {
      chaos: [
        { dimension: 'autonomy', weight: 0.7 },
        { dimension: 'riskTolerance', weight: 0.5 },
        { dimension: 'cognitiveStyle', weight: 0.4 },
      ],
      order: [
        { dimension: 'autonomy', weight: -0.3 },
        { dimension: 'riskTolerance', weight: -0.5 },
        { dimension: 'cognitiveStyle', weight: -0.4 },
      ],
    },
  },
  {
    id: 'audience-size',
    text: 'Would you rather change 3 lives profoundly or improve 10,000 lives a little?',
    type: 'slider',
    phase: 'redirecting',
    sliderMin: '3 lives, deeply',
    sliderMax: '10,000 lives, slightly',
    dimensionWeights: {
      __slider__: [
        { dimension: 'socialDensity', weight: 0.7 },
        { dimension: 'meaningWeight', weight: -0.3 },
      ],
    },
  },
  // OPEN: Saturday night — reveals intrinsic motivation
  {
    id: 'saturday-night-work',
    text: "It's Saturday night and you're voluntarily working on something. What is it?",
    subtext: "This is the thing you'd do even if nobody paid you. Name it.",
    type: 'open',
    phase: 'redirecting',
    dimensionWeights: {},
  },
  {
    id: 'mastery-or-variety',
    text: 'Would you rather master one skill so deeply nobody can touch you, or be decent at 20 different things?',
    type: 'slider',
    phase: 'redirecting',
    sliderMin: 'One deep mastery',
    sliderMax: 'Twenty decent skills',
    dimensionWeights: {
      __slider__: [
        { dimension: 'cognitiveStyle', weight: 0.8 },
        { dimension: 'timeHorizon', weight: 0.5 },
        { dimension: 'riskTolerance', weight: 0.3 },
      ],
    },
  },
  {
    id: 'legacy-question',
    text: "You die at 80. One sentence describes your life's work. Which do you want it to be?",
    type: 'binary',
    phase: 'redirecting',
    options: [
      { id: 'built', label: '"They built something that lasted"' },
      { id: 'helped', label: '"They helped people nobody else would"' },
      { id: 'discovered', label: '"They figured out something nobody understood"' },
      { id: 'led', label: '"They changed how things were done"' },
    ],
    dimensionWeights: {
      built: [
        { dimension: 'cognitiveStyle', weight: -0.5 },
        { dimension: 'timeHorizon', weight: 0.7 },
        { dimension: 'autonomy', weight: 0.4 },
      ],
      helped: [
        { dimension: 'meaningWeight', weight: 0.9 },
        { dimension: 'socialDensity', weight: 0.5 },
        { dimension: 'incomeWeight', weight: -0.4 },
      ],
      discovered: [
        { dimension: 'cognitiveStyle', weight: 0.8 },
        { dimension: 'timeHorizon', weight: 0.6 },
        { dimension: 'socialDensity', weight: -0.6 },
      ],
      led: [
        { dimension: 'statusWeight', weight: 0.6 },
        { dimension: 'socialDensity', weight: 0.5 },
        { dimension: 'autonomy', weight: 0.7 },
      ],
    },
  },
  {
    id: 'team-or-alone',
    text: 'Your best work happens:',
    type: 'slider',
    phase: 'redirecting',
    sliderMin: 'Completely alone',
    sliderMax: 'Deep in a team',
    dimensionWeights: {
      __slider__: [{ dimension: 'socialDensity', weight: 1.0 }],
    },
  },
];

// ─────────────────────────────────────────────────────────
// EXPORT: Adversarial first, then redirecting.
// The flow is intentional: destabilize, then rebuild.
// ─────────────────────────────────────────────────────────

export const questions: Question[] = [...adversarial, ...redirecting];
