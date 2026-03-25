import Link from "next/link";

const biases = [
  {
    bias: "Availability Heuristic",
    effect: "You only consider careers you've seen",
    example: 'Wanting to be a lawyer because of TV shows',
  },
  {
    bias: "Status Quo Bias",
    effect: "You default to familiar paths",
    example: '"Everyone in my family does X"',
  },
  {
    bias: "Prestige Bias",
    effect: "You conflate social status with satisfaction",
    example: "Choosing finance for the title, not the work",
  },
  {
    bias: "Anchoring",
    effect: "First salary number frames everything",
    example: "Dismissing fulfilling work as 'not enough'",
  },
  {
    bias: "Projection Bias",
    effect: "You assume future-you wants what present-you wants",
    example: "Optimizing for excitement at 20, burned out at 30",
  },
  {
    bias: "Sunk Cost Fallacy",
    effect: "Past investment overrides current fit",
    example: '"I already started this degree"',
  },
];

const references = [
  "Schwartz, B. (2004). The Paradox of Choice. Harper Perennial.",
  "Kahneman, D. (2011). Thinking, Fast and Slow. Farrar, Straus and Giroux.",
  "Iyengar, S. (2010). The Art of Choosing. Twelve.",
  "Thaler, R. & Sunstein, C. (2008). Nudge. Penguin.",
  "Wilson, T. (2004). Strangers to Ourselves. Belknap Press.",
  "Krieshok, T. et al. (2009). Career decision making: The limits of rationality and the abundance of non-conscious processes. Journal of Vocational Behavior, 75(3), 275-290.",
];

export default function AboutPage() {
  return (
    <div className="flex flex-col flex-1 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl leading-tight tracking-tight text-charcoal">
          The Science Behind Pathfinder
        </h1>

        <p className="mt-8 text-lg leading-relaxed text-charcoal/80">
          Career decisions are among the highest-stakes choices people make —
          and among the least well-supported. Research in behavioral economics,
          vocational psychology, and decision science reveals three systematic
          failures in how people choose careers.
        </p>

        {/* Three Failures */}
        <section className="mt-20 space-y-16">
          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl text-charcoal">
              1. Choice Set Failure
            </h2>
            <p className="mt-4 text-base leading-relaxed text-charcoal/80">
              People can only choose from options they know about. The average
              young person can name roughly 20 occupations — mostly drawn from
              family, media, and their immediate community. The Bureau of Labor
              Statistics lists over 800 detailed occupations, and the real
              landscape is far more varied than that. When your choice set is
              this narrow, even perfect decision-making leads to suboptimal
              outcomes. You can&rsquo;t pick what you don&rsquo;t know exists.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl text-charcoal">
              2. Self-Model Failure
            </h2>
            <p className="mt-4 text-base leading-relaxed text-charcoal/80">
              People are surprisingly poor at predicting what will make them
              happy. Timothy Wilson&rsquo;s research on &ldquo;affective
              forecasting&rdquo; shows that we systematically misjudge how
              future experiences will feel. We overweight prestige and salary.
              We underweight autonomy and daily texture. We project our current
              emotional state onto our future selves. Traditional career
              assessments ask what you <em>think</em> you want — Pathfinder
              uses revealed preference techniques to surface what you{" "}
              <em>actually</em> respond to.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl text-charcoal">
              3. Value Misalignment
            </h2>
            <p className="mt-4 text-base leading-relaxed text-charcoal/80">
              Even when people know their options and understand themselves,
              they often optimize for the wrong thing. Social pressure, family
              expectations, and cultural narratives about &ldquo;good
              careers&rdquo; create a gap between stated and actual values. You
              say you want work-life balance but chase the most demanding role.
              You say you want creativity but pick the safe path. Pathfinder
              makes these misalignments visible — not to judge, but to give you
              real information before you commit.
            </p>
          </div>
        </section>

        {/* Bias Table */}
        <section className="mt-24">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl text-charcoal mb-8">
            Cognitive Biases in Career Decisions
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b-2 border-charcoal/20">
                  <th className="py-3 pr-4 font-semibold text-charcoal">
                    Bias
                  </th>
                  <th className="py-3 pr-4 font-semibold text-charcoal">
                    Effect on Career Choice
                  </th>
                  <th className="py-3 font-semibold text-charcoal">Example</th>
                </tr>
              </thead>
              <tbody>
                {biases.map((row) => (
                  <tr
                    key={row.bias}
                    className="border-b border-charcoal/10"
                  >
                    <td className="py-3 pr-4 font-medium text-charcoal">
                      {row.bias}
                    </td>
                    <td className="py-3 pr-4 text-muted">{row.effect}</td>
                    <td className="py-3 text-muted">{row.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* References */}
        <section className="mt-24">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl text-charcoal mb-8">
            References
          </h2>
          <ol className="list-decimal list-inside space-y-3 text-sm text-muted leading-relaxed">
            {references.map((ref) => (
              <li key={ref}>{ref}</li>
            ))}
          </ol>
        </section>

        {/* Back link */}
        <div className="mt-24 border-t border-charcoal/10 pt-8">
          <Link
            href="/"
            className="text-sm text-muted hover:text-charcoal transition-colors"
          >
            &larr; Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
