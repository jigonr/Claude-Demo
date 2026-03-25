"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useDiscoverStore } from "@/lib/store";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export default function PathPage() {
  const router = useRouter();
  const { answers, careerMatches, reset } = useDiscoverStore();

  useEffect(() => {
    if (answers.length === 0) {
      router.push("/discover/mirror");
    }
  }, [answers, router]);

  if (careerMatches.length === 0) {
    return (
      <div className="min-h-dvh flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted">No matches found yet.</p>
          <Button className="mt-4" onClick={() => router.push("/discover/map")}>
            See Your Matches First
          </Button>
        </div>
      </div>
    );
  }

  const handleStartOver = () => {
    reset();
    router.push("/");
  };

  return (
    <div className="min-h-dvh py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-foreground">
            What now?
          </h1>
          <p className="mt-4 text-muted text-lg leading-relaxed">
            Big career decisions don&rsquo;t start with commitment. They start with experiments.
            Here&rsquo;s one small thing you can do this week for each match.
          </p>
        </motion.div>

        <div className="mt-12 space-y-10">
          {careerMatches.map((match, i) => (
            <motion.div
              key={match.career.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.4 }}
              className="rounded-2xl border-2 border-foreground/10 p-6"
            >
              <div className="flex items-center gap-3 flex-wrap">
                <h3 className="font-[family-name:var(--font-heading)] text-xl text-foreground">
                  {match.career.title}
                </h3>
                <Badge label={`${Math.round(match.score * 100)}% match`} type="surprise" />
              </div>

              <div className="mt-4 bg-accent/5 rounded-xl p-4">
                <h4 className="text-sm font-semibold text-accent">Try it this week</h4>
                <p className="mt-1 text-sm text-foreground leading-relaxed">
                  {match.career.microExperiment}
                </p>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-semibold text-foreground mb-3">The path from here</h4>
                <div className="space-y-3">
                  {match.career.learningPath.map((step, j) => (
                    <div key={j} className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 text-accent text-xs font-bold flex items-center justify-center mt-0.5">
                        {j + 1}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{step.title}</p>
                        <p className="text-sm text-muted">{step.description}</p>
                        <p className="text-xs text-muted mt-1">{step.timeframe}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {match.career.optionValue.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Also opens doors to</h4>
                  <div className="flex flex-wrap gap-2">
                    {match.career.optionValue.map((opt) => (
                      <Badge key={opt} label={opt} />
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: careerMatches.length * 0.15 + 0.5 }}
          className="mt-16 text-center space-y-4"
        >
          <p className="text-muted text-sm">
            The goal isn&rsquo;t to pick one path forever. It&rsquo;s to explore with intention.
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="ghost" onClick={handleStartOver}>
              &larr; Start Over
            </Button>
            <Button variant="secondary" onClick={() => router.push("/discover/map")}>
              Back to Matches
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
