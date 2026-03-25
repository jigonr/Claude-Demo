export type QuestionType = 'binary' | 'slider' | 'open' | 'image' | 'rank';

export interface QuestionOption {
  id: string;
  label: string;
  imageUrl?: string;
}

export interface DimensionWeight {
  dimension: keyof RevealedPreferences;
  weight: number;
}

export type QuestionPhase = 'adversarial' | 'redirecting';

export interface Question {
  id: string;
  text: string;
  subtext?: string;
  type: QuestionType;
  phase: QuestionPhase;
  options?: QuestionOption[];
  dimensionWeights: Record<string, DimensionWeight[]>;
  sliderMin?: string;
  sliderMax?: string;
}

export interface Answer {
  questionId: string;
  value: string | number | string[];
}

export interface RevealedPreferences {
  autonomy: number;
  timeHorizon: number;
  socialDensity: number;
  riskTolerance: number;
  cognitiveStyle: number;
  incomeWeight: number;
  statusWeight: number;
  meaningWeight: number;
  geographicFlex: number;
}

export interface Assumption {
  id: string;
  text: string;
  challenge: string;
  relatedAnswers: string[];
}

export interface LearningStep {
  title: string;
  description: string;
  timeframe: string;
  resources?: string[];
}

export interface CareerStory {
  name: string;
  background: string;
  journey: string;
  currentRole: string;
}

export interface Career {
  id: string;
  title: string;
  description: string;
  dayInLife: string;
  dimensions: RevealedPreferences;
  surpriseFactor: string;
  learningPath: LearningStep[];
  microExperiment: string;
  optionValue: string[];
  incomeTrajectory: { year: number; amount: number }[];
  stories: CareerStory[];
  tags: string[];
}

export interface UserProfile {
  answers: Answer[];
  revealedPreferences: RevealedPreferences;
  assumptions: Assumption[];
  parentalOccupations: string[];
  surprisePreferences: string[];
}

export interface Reflection {
  id: string;
  title: string;
  body: string;
  type: 'contradiction' | 'assumption' | 'surprise' | 'reframe';
  relatedAnswers: string[];
}

export interface CareerMatch {
  career: Career;
  score: number;
  matchExplanation: string;
}
