"use client";

import { useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useDiscoverStore } from "@/lib/store";
import { matchCareers } from "@/lib/scoring";
import { careers } from "@/data/careers";

export default function MapPage() {
  const router = useRouter();
  const { revealedPreferences, answers, setCareerMatches, careerMatches } =
    useDiscoverStore();

  // Redirect if no answers
  useEffect(() => {
    if (answers.length === 0) {
      router.push("/discover/mirror");
    }
  }, [answers, router]);

  // Compute matches
  const matches = useMemo(() => {
    if (answers.length === 0) return [];
    const computed = matchCareers(revealedPreferences, careers, 8);
    return computed;
  }, [revealedPreferences, answers]);

  // Store matches
  useEffect(() => {
    if (matches.length > 0 && careerMatches.length === 0) {
      setCareerMatches(matches);
    }
  }, [matches, careerMatches.length, setCareerMatches]);

  if (answers.length === 0) return null;

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
          Your career map
        </h1>
        <p className="text-muted text-lg">
          Ranked by how well each career fits your revealed preferences — not
          what you said you wanted, but what your answers actually showed.
        </p>
      </motion.div>

      {/* Career cards */}
      <div className="space-y-4">
        {matches.map((match, i) => {
          const pct = Math.round(match.score * 100);
          return (
            <motion.div
              key={match.career.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-foreground/[0.03] border border-foreground/10 rounded-lg p-6 hover:border-accent/30 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3 className="font-[family-name:var(--font-heading)] text-xl text-foreground">
                      {match.career.title}
                    </h3>
                    <div className="flex gap-1.5">
                      {match.career.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] uppercase tracking-wider text-muted bg-foreground/5 px-2 py-0.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-foreground/70 text-sm leading-relaxed mb-3">
                    {match.career.description}
                  </p>
                  <p className="text-accent text-sm italic">
                    {match.matchExplanation}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <div className="font-[family-name:var(--font-heading)] text-3xl text-accent">
                    {pct}%
                  </div>
                  <div className="text-xs text-muted">match</div>
                </div>
              </div>

              {/* Surprise factor */}
              <div className="mt-4 pt-4 border-t border-foreground/5">
                <p className="text-xs text-muted">
                  <span className="font-medium">What might surprise you:</span>{" "}
                  {match.career.surpriseFactor}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Continue button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: matches.length * 0.1 + 0.3 }}
        className="pt-10 text-center"
      >
        <button
          onClick={() => router.push("/discover/path")}
          className="bg-accent text-white px-8 py-3 rounded-lg font-medium hover:bg-accent-light transition-colors"
        >
          See your action plan
        </button>
      </motion.div>
    </div>
  );
}
