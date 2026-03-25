"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useDiscoverStore } from "@/lib/store";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export default function PathPage() {
  const router = useRouter();
  const { answers, jobMatches, revealedPreferences, reflections, reset } =
    useDiscoverStore();
  const [synthesis, setSynthesis] = useState("");
  const [synthesisDone, setSynthesisDone] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (answers.length === 0) {
      router.push("/discover/mirror");
    }
  }, [answers, router]);

  // Stream the final AI synthesis
  useEffect(() => {
    if (answers.length === 0 || jobMatches.length === 0 || hasStarted.current)
      return;
    hasStarted.current = true;

    async function fetchSynthesis() {
      try {
        const response = await fetch("/api/synthesize", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            answers,
            preferences: revealedPreferences,
            reflections,
            jobMatches: jobMatches.slice(0, 5),
          }),
        });

        if (!response.ok) throw new Error("Failed to generate synthesis");

        const reader = response.body?.getReader();
        if (!reader) throw new Error("No response stream");

        const decoder = new TextDecoder();
        let accumulated = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value);
          for (const line of chunk.split("\n")) {
            if (line.startsWith("data: ") && line !== "data: [DONE]") {
              try {
                const text = JSON.parse(line.slice(6));
                accumulated += text;
                setSynthesis(accumulated);
              } catch {
                // skip malformed chunks
              }
            }
          }
        }

        setSynthesisDone(true);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong");
        setSynthesisDone(true);
      }
    }

    fetchSynthesis();
  }, [answers, jobMatches, revealedPreferences, reflections]);

  if (jobMatches.length === 0) {
    return (
      <div className="min-h-dvh flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted">No matches found yet.</p>
          <Button
            className="mt-4"
            onClick={() => router.push("/discover/map")}
          >
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
            Your path forward
          </h1>
          <p className="mt-4 text-muted text-lg leading-relaxed">
            Everything we learned about you, distilled into what matters.
          </p>
        </motion.div>

        {/* AI Synthesis — the final answer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10"
        >
          {/* Loading indicator */}
          {!synthesisDone && !error && (
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-2 h-2 rounded-full bg-accent"
              />
              <p className="text-muted text-sm">
                Putting it all together...
              </p>
            </div>
          )}

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          {/* Streamed synthesis text */}
          {synthesis && (
            <div className="bg-foreground/[0.03] border border-foreground/10 rounded-2xl p-8 mb-12">
              {synthesis.split("\n\n").map((paragraph, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-foreground/85 leading-relaxed mb-4 last:mb-0"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          )}
        </motion.div>

        {/* Job details — shown after synthesis completes */}
        {synthesisDone && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-center text-muted text-xs uppercase tracking-widest mb-8">
              The details
            </p>

            <div className="space-y-10">
              {jobMatches.map((match, i) => (
                <motion.div
                  key={match.job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15, duration: 0.4 }}
                  className="rounded-2xl border-2 border-foreground/10 p-6"
                >
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="font-[family-name:var(--font-heading)] text-xl text-foreground">
                      {match.job.title}
                    </h3>
                    <Badge
                      label={`${Math.round(match.score * 100)}% match`}
                      type="surprise"
                    />
                  </div>
                  <p className="mt-1 text-sm text-muted">
                    {match.job.company} &middot; {match.job.location.city},{" "}
                    {match.job.location.state} &middot; $
                    {(match.job.salary.min / 1000).toFixed(0)}K&ndash;$
                    {(match.job.salary.max / 1000).toFixed(0)}K/year
                  </p>

                  {/* Key skills */}
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-foreground mb-3">
                      Skills to build
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {match.job.requirements.skills.map((skill) => (
                        <Badge key={skill} label={skill} />
                      ))}
                    </div>
                  </div>

                  {/* Getting started */}
                  <div className="mt-4 bg-accent/5 rounded-xl p-4">
                    <h4 className="text-sm font-semibold text-accent">
                      Getting started
                    </h4>
                    <p className="mt-1 text-sm text-foreground leading-relaxed">
                      {match.job.requirements.education} &middot;{" "}
                      {match.job.requirements.experience_years} years experience
                    </p>
                    {match.job.requirements.certifications.length > 0 && (
                      <p className="mt-2 text-sm text-muted">
                        Certifications:{" "}
                        {match.job.requirements.certifications.join(", ")}
                      </p>
                    )}
                  </div>

                  {/* Responsibilities */}
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2">
                      What you&rsquo;d actually do
                    </h4>
                    <ul className="text-sm text-muted leading-relaxed space-y-1 list-disc list-inside">
                      {match.job.responsibilities.slice(0, 3).map((r, j) => (
                        <li key={j}>{r}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: jobMatches.length * 0.15 + 0.5 }}
              className="mt-16 text-center space-y-4"
            >
              <p className="text-muted text-sm">
                The goal isn&rsquo;t to pick one path forever. It&rsquo;s to
                explore with intention.
              </p>
              <div className="flex gap-4 justify-center">
                <Button variant="ghost" onClick={handleStartOver}>
                  &larr; Start Over
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => router.push("/discover/map")}
                >
                  Back to Matches
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
