import { create } from 'zustand';
import { Answer, RevealedPreferences, Reflection, CareerMatch } from './types';

const DEFAULT_PREFERENCES: RevealedPreferences = {
  autonomy: 0,
  timeHorizon: 0,
  socialDensity: 0,
  riskTolerance: 0,
  cognitiveStyle: 0,
  incomeWeight: 0.5,
  statusWeight: 0.5,
  meaningWeight: 0.5,
  geographicFlex: 0,
};

interface DiscoverStore {
  currentQuestionIndex: number;
  answers: Answer[];
  revealedPreferences: RevealedPreferences;
  reflections: Reflection[];
  careerMatches: CareerMatch[];
  isReflecting: boolean;

  setAnswer: (answer: Answer) => void;
  nextQuestion: () => void;
  prevQuestion: () => void;
  setPreferences: (prefs: RevealedPreferences) => void;
  setReflections: (reflections: Reflection[]) => void;
  setCareerMatches: (matches: CareerMatch[]) => void;
  setIsReflecting: (v: boolean) => void;
  reset: () => void;
}

export const useDiscoverStore = create<DiscoverStore>((set) => ({
  currentQuestionIndex: 0,
  answers: [],
  revealedPreferences: DEFAULT_PREFERENCES,
  reflections: [],
  careerMatches: [],
  isReflecting: false,

  setAnswer: (answer) =>
    set((state) => {
      const answers = [...state.answers];
      const idx = answers.findIndex((a) => a.questionId === answer.questionId);
      if (idx >= 0) answers[idx] = answer;
      else answers.push(answer);
      return { answers };
    }),

  nextQuestion: () =>
    set((state) => ({ currentQuestionIndex: state.currentQuestionIndex + 1 })),

  prevQuestion: () =>
    set((state) => ({ currentQuestionIndex: Math.max(0, state.currentQuestionIndex - 1) })),

  setPreferences: (revealedPreferences) => set({ revealedPreferences }),
  setReflections: (reflections) => set({ reflections }),
  setCareerMatches: (careerMatches) => set({ careerMatches }),
  setIsReflecting: (isReflecting) => set({ isReflecting }),

  reset: () =>
    set({
      currentQuestionIndex: 0,
      answers: [],
      revealedPreferences: DEFAULT_PREFERENCES,
      reflections: [],
      careerMatches: [],
      isReflecting: false,
    }),
}));
