import { Question } from '@/lib/types';

export const questions: Question[] = [
  {
    id: 'autonomy-tuesday',
    text: "It's 10am on a Tuesday. In your ideal life, did someone else decide what you're doing right now, or did you?",
    type: 'binary',
    options: [
      { id: 'structured', label: 'Someone else decided' },
      { id: 'autonomous', label: 'I decided' },
    ],
    dimensionWeights: {
      structured: [{ dimension: 'autonomy', weight: -0.8 }],
      autonomous: [{ dimension: 'autonomy', weight: 0.8 }],
    },
  },
  {
    id: 'social-convince-coordinate',
    text: 'Would you rather convince one skeptical person or coordinate 50 willing ones?',
    type: 'binary',
    options: [
      { id: 'convince', label: 'Convince one skeptic' },
      { id: 'coordinate', label: 'Coordinate fifty' },
    ],
    dimensionWeights: {
      convince: [
        { dimension: 'socialDensity', weight: -0.5 },
        { dimension: 'cognitiveStyle', weight: 0.3 },
      ],
      coordinate: [
        { dimension: 'socialDensity', weight: 0.7 },
        { dimension: 'cognitiveStyle', weight: -0.2 },
      ],
    },
  },
  {
    id: 'time-horizon-results',
    text: 'Would you rather see the result of your work today, or in 10 years?',
    type: 'slider',
    sliderMin: 'Today',
    sliderMax: 'In 10 years',
    dimensionWeights: {
      __slider__: [{ dimension: 'timeHorizon', weight: 1.0 }],
    },
  },
  {
    id: 'cognitive-right-answer',
    text: 'Do you prefer problems with one right answer, or problems where the answer depends?',
    type: 'binary',
    options: [
      { id: 'one-answer', label: 'One right answer' },
      { id: 'it-depends', label: 'It depends' },
    ],
    dimensionWeights: {
      'one-answer': [{ dimension: 'cognitiveStyle', weight: -0.7 }],
      'it-depends': [{ dimension: 'cognitiveStyle', weight: 0.7 }],
    },
  },
  {
    id: 'risk-gamble',
    text: 'Would you rather have a guaranteed €50K/year forever, or a 50% chance of €150K and 50% chance of €20K?',
    type: 'slider',
    sliderMin: 'Guaranteed €50K',
    sliderMax: 'Take the gamble',
    dimensionWeights: {
      __slider__: [{ dimension: 'riskTolerance', weight: 1.0 }],
    },
  },
  {
    id: 'income-vs-time',
    text: 'If two jobs paid the same, but one gave you 3 extra hours of free time per day, which would you pick?',
    type: 'binary',
    options: [
      { id: 'money', label: 'The one with more money potential' },
      { id: 'time', label: 'The one with more free time' },
    ],
    dimensionWeights: {
      money: [
        { dimension: 'incomeWeight', weight: 0.8 },
        { dimension: 'autonomy', weight: -0.2 },
      ],
      time: [
        { dimension: 'autonomy', weight: 0.6 },
        { dimension: 'meaningWeight', weight: 0.3 },
      ],
    },
  },
  {
    id: 'hidden-dream',
    text: "Is there a job you've secretly thought about but felt embarrassed to say out loud?",
    subtext: 'There are no wrong answers here. This stays between us.',
    type: 'open',
    dimensionWeights: {},
  },
  {
    id: 'fame-vs-impact',
    text: 'Would you rather be famous in a small field or anonymous in a big one?',
    type: 'binary',
    options: [
      { id: 'famous-niche', label: 'Famous in a niche' },
      { id: 'anonymous-big', label: 'Anonymous but impactful' },
    ],
    dimensionWeights: {
      'famous-niche': [
        { dimension: 'statusWeight', weight: 0.7 },
        { dimension: 'socialDensity', weight: -0.3 },
      ],
      'anonymous-big': [
        { dimension: 'statusWeight', weight: -0.3 },
        { dimension: 'meaningWeight', weight: 0.6 },
      ],
    },
  },
  {
    id: 'geographic-flex',
    text: 'If you could move anywhere in the world for the right opportunity, would you?',
    type: 'slider',
    sliderMin: 'I want to stay put',
    sliderMax: 'Anywhere, anytime',
    dimensionWeights: {
      __slider__: [{ dimension: 'geographicFlex', weight: 1.0 }],
    },
  },
  {
    id: 'fix-problem-people',
    text: 'When something goes wrong in a group, do you want to fix the problem or fix the people?',
    type: 'binary',
    options: [
      { id: 'fix-problem', label: 'Fix the problem' },
      { id: 'fix-people', label: 'Fix the people' },
    ],
    dimensionWeights: {
      'fix-problem': [
        { dimension: 'cognitiveStyle', weight: -0.4 },
        { dimension: 'socialDensity', weight: -0.4 },
      ],
      'fix-people': [
        { dimension: 'socialDensity', weight: 0.6 },
        { dimension: 'meaningWeight', weight: 0.4 },
      ],
    },
  },
  {
    id: 'patience-learning',
    text: 'Could you spend 3 years learning something with no guarantee it pays off?',
    type: 'slider',
    sliderMin: 'That sounds terrible',
    sliderMax: 'Absolutely',
    dimensionWeights: {
      __slider__: [
        { dimension: 'timeHorizon', weight: 0.7 },
        { dimension: 'riskTolerance', weight: 0.5 },
      ],
    },
  },
  {
    id: 'optimize-invent',
    text: 'Would you rather optimize something that exists or invent something new?',
    type: 'binary',
    options: [
      { id: 'optimize', label: 'Optimize what exists' },
      { id: 'invent', label: 'Invent something new' },
    ],
    dimensionWeights: {
      optimize: [
        { dimension: 'cognitiveStyle', weight: -0.6 },
        { dimension: 'riskTolerance', weight: -0.3 },
      ],
      invent: [
        { dimension: 'cognitiveStyle', weight: 0.8 },
        { dimension: 'riskTolerance', weight: 0.5 },
      ],
    },
  },
  {
    id: 'parental-influence',
    text: "What do your parents do for work? And honestly — how much has that shaped what you think you should do?",
    subtext: "We ask because parental occupation is one of the strongest predictors of career choice. That's not always a bad thing — but it's worth noticing.",
    type: 'open',
    dimensionWeights: {},
  },
];
