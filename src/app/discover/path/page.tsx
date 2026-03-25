"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useDiscoverStore } from "@/lib/store";

export default function PathPage() {
  const router = useRouter();
  const { careerMatches, answers, reset } = useDiscoverStore();

  // Redirect if no data
  useEffect(() => {
    if (answers.length === 0) {
      router.push("/discover/mirror");
    }
  }, [answers, router]);

  if (answers.length === 0 || careerMatches.length === 0) return null;

  const topMatches = careerMatches.slice(0, 3);

  function formatSalary(amount: number): string {
    return `$${(amount / 1000).toFixed(0)}K`;
  }

  function handleStartOver() {
    reset();
    router.push("/");
  }

  return (
    <div>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl text-foreground mb-4">
          Your next steps
        </h1>
        <p className="text-muted text-lg">
          Three careers that fit who you actually are — and what to do this week
          to test each one.
        </p>
      </motion.div>

      {/* Career action plans */}
      <div className="space-y-10">
        {topMatches.map((match, i) => (
          <motion.div
            key={match.career.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            {/* Career header */}
            <div className="flex items-baseline gap-3 mb-4">
              <span className="font-[family-name:var(--font-heading)] text-4xl text-accent/30">
                {i + 1}
              </span>
              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-2xl text-foreground">
                  {match.career.title}
                </h2>
                <p className="text-muted text-sm">
                  {Math.round(match.score * 100)}% match —{" "}
                  {match.matchExplanation}
                </p>
              </div>
            </div>

            {/* Day in the life */}
            <div className="bg-foreground/[0.03] rounded-lg p-5 mb-4">
              <h4 className="text-xs uppercase tracking-wider text-muted mb-2 font-medium">
                A day in the life
              </h4>
              <p className="text-foreground/80 text-sm leading-relaxed">
                {match.career.dayInLife}
              </p>
            </div>

            {/* Try this week */}
            <div className="border-l-4 border-accent/40 bg-accent/5 rounded-r-lg p-5 mb-4">
              <h4 className="text-xs uppercase tracking-wider text-accent mb-2 font-medium">
                Try this week
              </h4>
              <p className="text-foreground/80 text-sm leading-relaxed">
                {match.career.microExperiment}
              </p>
            </div>

            {/* Learning path */}
            <div className="mb-4">
              <h4 className="text-xs uppercase tracking-wider text-muted mb-3 font-medium">
                Learning path
              </h4>
              <div className="space-y-3">
                {match.career.learningPath.map((step, j) => (
                  <div key={j} className="flex gap-3">
                    <div className="shrink-0 w-6 h-6 rounded-full bg-foreground/10 flex items-center justify-center text-xs text-muted font-medium">
                      {j + 1}
                    </div>
                    <div>
                      <div className="flex items-baseline gap-2">
                        <p className="text-foreground text-sm font-medium">
                          {step.title}
                        </p>
                        <span className="text-xs text-muted">
                          {step.timeframe}
                        </span>
                      </div>
                      <p className="text-foreground/60 text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Income trajectory */}
            <div className="flex items-center gap-4 text-sm text-muted flex-wrap">
              <span className="font-medium">Income trajectory:</span>
              {match.career.incomeTrajectory.map((point, j) => (
                <span key={j}>
                  Year {point.year}: {formatSalary(point.amount)}
                  {j < match.career.incomeTrajectory.length - 1 && " \u2192"}
                </span>
              ))}
            </div>

            {/* Story */}
            {match.career.stories[0] && (
              <div className="mt-4 bg-foreground/[0.02] rounded-lg p-4">
                <h4 className="text-xs uppercase tracking-wider text-muted mb-2 font-medium">
                  Someone who did it
                </h4>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  <span className="font-medium text-foreground">
                    {match.career.stories[0].name}
                  </span>{" "}
                  &mdash; {match.career.stories[0].background}.{" "}
                  {match.career.stories[0].journey}. Now:{" "}
                  {match.career.stories[0].currentRole}.
                </p>
              </div>
            )}

            {/* Divider (except last) */}
            {i < topMatches.length - 1 && (
              <div className="mt-10 border-t border-foreground/5" />
            )}
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: topMatches.length * 0.2 + 0.5 }}
        className="pt-12 pb-8 text-center space-y-4"
      >
        <p className="text-muted text-sm max-w-md mx-auto">
          These aren&apos;t predictions &mdash; they&apos;re starting points. The
          micro-experiments above are designed to give you real data about
          yourself in under a week.
        </p>
        <button
          onClick={handleStartOver}
          className="text-accent underline underline-offset-4 text-sm hover:text-accent-light transition-colors"
        >
          Start over with new answers
        </button>
      </motion.div>
    </div>
  );
}
