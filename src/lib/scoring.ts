import { Answer, RevealedPreferences, Career, CareerMatch } from './types';
import { questions } from '@/data/questions';

export function derivePreferences(answers: Answer[]): RevealedPreferences {
  const prefs: RevealedPreferences = {
    autonomy: 0, timeHorizon: 0, socialDensity: 0,
    riskTolerance: 0, cognitiveStyle: 0,
    incomeWeight: 0.5, statusWeight: 0.5, meaningWeight: 0.5,
    geographicFlex: 0,
  };
  const counts: Record<string, number> = {};
  for (const key of Object.keys(prefs)) counts[key] = 0;

  for (const answer of answers) {
    const question = questions.find((q) => q.id === answer.questionId);
    if (!question) continue;

    // Slider questions: apply weights scaled by normalized value
    if (question.type === 'slider' && typeof answer.value === 'number') {
      const weights = question.dimensionWeights['__slider__'];
      if (weights) {
        for (const w of weights) {
          prefs[w.dimension] += w.weight * answer.value;
          counts[w.dimension]++;
        }
      }
      continue;
    }

    // Rank questions: use first choice
    const optionId = Array.isArray(answer.value) ? answer.value[0] : String(answer.value);
    const weights = question.dimensionWeights[optionId];
    if (!weights) continue;

    for (const w of weights) {
      prefs[w.dimension] += w.weight;
      counts[w.dimension]++;
    }
  }

  // Average and clamp
  for (const key of Object.keys(prefs) as (keyof RevealedPreferences)[]) {
    if (counts[key] > 0) prefs[key] = prefs[key] / counts[key];
    const isZeroOne = ['incomeWeight', 'statusWeight', 'meaningWeight'].includes(key);
    prefs[key] = Math.max(isZeroOne ? 0 : -1, Math.min(1, prefs[key]));
  }

  return prefs;
}

function cosineSimilarity(a: number[], b: number[]): number {
  let dot = 0, magA = 0, magB = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    magA += a[i] * a[i];
    magB += b[i] * b[i];
  }
  const denom = Math.sqrt(magA) * Math.sqrt(magB);
  return denom === 0 ? 0 : dot / denom;
}

function prefsToVector(p: RevealedPreferences): number[] {
  return [p.autonomy, p.timeHorizon, p.socialDensity, p.riskTolerance, p.cognitiveStyle,
    p.incomeWeight, p.statusWeight, p.meaningWeight, p.geographicFlex];
}

export function matchCareers(prefs: RevealedPreferences, careers: Career[], topN = 8): CareerMatch[] {
  const userVec = prefsToVector(prefs);

  const scored = careers.map((career) => ({
    career,
    score: cosineSimilarity(userVec, prefsToVector(career.dimensions)),
    matchExplanation: '',
  }));

  scored.sort((a, b) => b.score - a.score);
  const top = scored.slice(0, topN);

  for (const m of top) {
    const d = m.career.dimensions;
    const reasons: string[] = [];
    if (Math.abs(prefs.autonomy - d.autonomy) < 0.3)
      reasons.push(prefs.autonomy > 0 ? 'matches your independence streak' : 'offers the structure you prefer');
    if (Math.abs(prefs.timeHorizon - d.timeHorizon) < 0.3)
      reasons.push(prefs.timeHorizon > 0 ? 'rewards patience and long-term thinking' : 'delivers fast, visible results');
    if (prefs.meaningWeight > 0.6 && Math.abs(prefs.meaningWeight - d.meaningWeight) < 0.3)
      reasons.push('aligns with your drive for meaningful work');
    if (prefs.riskTolerance > 0.3 && d.riskTolerance > 0.3)
      reasons.push('suits your appetite for calculated risk');
    m.matchExplanation = reasons.length > 0 ? reasons.join(', and ') : 'aligns well with your overall profile';
  }

  return top;
}
