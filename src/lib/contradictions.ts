import { Answer, RevealedPreferences, Reflection } from './types';

interface ContradictionRule {
  id: string;
  title: string;
  type: Reflection['type'];
  check: (answers: Answer[], prefs: RevealedPreferences) => string | null;
}

function findAnswer(answers: Answer[], questionId: string): Answer | undefined {
  return answers.find((a) => a.questionId === questionId);
}

const rules: ContradictionRule[] = [
  {
    id: 'money-vs-meaning',
    title: 'You say money doesn\'t matter. Your choices disagree.',
    type: 'contradiction',
    check: (answers, prefs) => {
      const dreamPayCut = findAnswer(answers, 'dream-job-pay-cut');
      const creativePoverty = findAnswer(answers, 'creative-poverty-boring-wealth');
      if (dreamPayCut?.value === 'still-want' && typeof creativePoverty?.value === 'number' && creativePoverty.value > 0.3) {
        return 'You said you\'d take a 40% pay cut for your dream job — but when forced to choose between creative freedom at €25K and boring stability at €90K, you leaned toward the money. That\'s not a contradiction to be ashamed of. It means financial security matters more to you than you\'ve admitted. That\'s useful information.';
      }
      if (prefs.incomeWeight > 0.6 && prefs.meaningWeight > 0.6) {
        return 'Your answers show you value both income and meaning very highly. Most careers force a trade-off between these — at least early on. Knowing which one you\'d sacrifice first is the real question.';
      }
      return null;
    },
  },
  {
    id: 'status-denial',
    title: 'The title matters more than you think.',
    type: 'assumption',
    check: (answers, prefs) => {
      const linkedin = findAnswer(answers, 'linkedin-invisible');
      const fame = findAnswer(answers, 'fame-vs-impact');
      if (linkedin?.value === 'yes-still' && prefs.statusWeight > 0.5) {
        return 'You said the job title doesn\'t matter — but your overall answer pattern tells a different story. You consistently chose options associated with recognition and prestige. There\'s nothing wrong with wanting status. The problem is pretending you don\'t, because then you optimize for it unconsciously.';
      }
      if (fame?.value === 'famous-niche' && linkedin?.value === 'yes-still') {
        return 'You want to be famous in your field but say the title doesn\'t matter. That\'s worth sitting with. Recognition within a community you respect is a legitimate need — but it\'s still a form of status-seeking. Name it so you can plan for it.';
      }
      return null;
    },
  },
  {
    id: 'risk-mismatch',
    title: 'Your risk appetite has a ceiling.',
    type: 'surprise',
    check: (answers, prefs) => {
      const automation = findAnswer(answers, 'automation-threat');
      const quitting = findAnswer(answers, 'quitting-signal');
      const move = findAnswer(answers, 'move-to-nowhere');
      if (automation?.value === 'pursue-anyway' && quitting?.value === 'grind') {
        return 'You\'d pursue a career with a 60% automation risk — but you wouldn\'t quit a job you hate after 2 years. That\'s interesting. You\'re comfortable with abstract, distant risk but uncomfortable with the immediate disruption of starting over. Behavioral economists call this "present bias." It\'s worth knowing about yourself.';
      }
      if (prefs.riskTolerance > 0.3 && move?.value === 'stay') {
        return 'You score as relatively risk-tolerant, but you wouldn\'t move cities for the right opportunity. Your risk appetite might be more about intellectual risk (new ideas, uncertain outcomes) than lifestyle risk (uprooting, instability). That narrows the field in useful ways.';
      }
      return null;
    },
  },
  {
    id: 'autonomy-vs-structure',
    title: 'Freedom has a price. Would you pay it?',
    type: 'reframe',
    check: (answers, prefs) => {
      const chaos = findAnswer(answers, 'chaos-or-order');
      const seventy = findAnswer(answers, 'seventy-hour-weeks');
      if (prefs.autonomy > 0.4 && chaos?.value === 'order') {
        return 'You want independence but also a clear plan every Monday morning. Those two things can coexist — but you\'ll need to find a role where you set the structure yourself. Entrepreneurship, consulting, or senior individual contributor roles. Not "do whatever you want" freedom, but "design your own system" freedom.';
      }
      if (prefs.autonomy > 0.5 && typeof seventy?.value === 'number' && seventy.value < -0.3) {
        return 'You value autonomy highly but aren\'t willing to grind through years of building toward it. Here\'s the reframe: most autonomous careers require a period of apprenticeship first. The freedom comes after the investment, not instead of it.';
      }
      return null;
    },
  },
  {
    id: 'solo-but-social',
    title: 'You\'re more social than you think.',
    type: 'surprise',
    check: (answers, prefs) => {
      const team = findAnswer(answers, 'team-or-alone');
      const explain = findAnswer(answers, 'explain-or-build');
      const legacy = findAnswer(answers, 'legacy-question');
      if (typeof team?.value === 'number' && team.value < -0.3 && explain?.value === 'explain') {
        return 'You say you do your best work alone — but you\'d rather explain something fascinating than build with it. Teaching, writing, and mentoring are deeply social acts. You might not want a team around you, but you want an audience. That\'s a different kind of social need, and it points toward very specific careers.';
      }
      if (prefs.socialDensity < -0.2 && (legacy?.value === 'helped' || legacy?.value === 'led')) {
        return 'Your preference profile says "solo worker" but your legacy choice is about people — helping them or leading them. You might not want to work in a crowd every day, but impact through people matters deeply to you. Look for roles with "deep solo work + periodic high-stakes human interaction."';
      }
      return null;
    },
  },
  {
    id: 'parental-gravity',
    title: 'The apple and the tree.',
    type: 'assumption',
    check: (answers) => {
      const whyReally = findAnswer(answers, 'why-really');
      const parentInfluence = findAnswer(answers, 'parental-influence');
      if (whyReally && typeof whyReally.value === 'string' && whyReally.value.length > 10) {
        return 'You named a specific career someone else chose for you. The fact that you can name it so clearly means it\'s been living in your head for a while. Parental expectations aren\'t destiny — but ignoring them doesn\'t make them disappear either. The question isn\'t whether their influence exists. It\'s whether you\'ve separated their ambitions from yours.';
      }
      if (parentInfluence && typeof parentInfluence.value === 'string' && parentInfluence.value.length > 10) {
        return 'You wrote about your parents\' careers. Research shows parental occupation is the single strongest predictor of what career you\'ll consider. Not because of genetics — because of exposure. You can only want what you know exists. That\'s exactly what this tool is here to fix.';
      }
      return null;
    },
  },
];

export function detectContradictions(answers: Answer[], prefs: RevealedPreferences): Reflection[] {
  const reflections: Reflection[] = [];

  for (const rule of rules) {
    const body = rule.check(answers, prefs);
    if (body) {
      reflections.push({
        id: rule.id,
        title: rule.title,
        body,
        type: rule.type,
        relatedAnswers: [],
      });
    }
  }

  // Always return at least 2 reflections. If rules didn't fire, add generic ones.
  if (reflections.length < 2) {
    if (prefs.meaningWeight > 0.6) {
      reflections.push({
        id: 'meaning-seeker',
        title: 'You\'re a meaning-seeker. That\'s rarer than you think.',
        body: 'Your answers consistently prioritize meaningful work over income and status. That puts you in a minority — most people say they want meaning but optimize for salary. The challenge for you isn\'t finding purpose. It\'s finding purpose that also pays the bills. That\'s a solvable problem.',
        type: 'surprise',
        relatedAnswers: [],
      });
    }
    if (prefs.cognitiveStyle > 0.3) {
      reflections.push({
        id: 'abstract-thinker',
        title: 'You think in systems, not tasks.',
        body: 'You gravitate toward open-ended problems and invention over optimization. That\'s a cognitive style that thrives in research, strategy, and design — but struggles in execution-heavy roles. The best careers for you will let you think big while someone else handles the implementation details.',
        type: 'reframe',
        relatedAnswers: [],
      });
    }
    if (reflections.length < 2) {
      reflections.push({
        id: 'exploration-value',
        title: 'Not knowing is the starting point, not the problem.',
        body: 'The fact that you completed these questions honestly is more valuable than you realize. Most people sleepwalk into careers based on what\'s familiar. You\'re actively exploring. Research shows that career exploration — even when it feels uncertain — leads to better long-term satisfaction than early commitment to a "safe" path.',
        type: 'reframe',
        relatedAnswers: [],
      });
    }
  }

  return reflections.slice(0, 5);
}
