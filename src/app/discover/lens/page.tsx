"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useDiscoverStore } from "@/lib/store";
import { Reflection } from "@/lib/types";

export default function LensPage() {
  const router = useRouter();
  const { answers, revealedPreferences, setReflections, setIsReflecting } =
    useDiscoverStore();
  const [streamedText, setStreamedText] = useState("");
  const [parsedReflections, setParsedReflections] = useState<Reflection[]>([]);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const hasStarted = useRef(false);

  // Redirect if no answers
  useEffect(() => {
    if (answers.length === 0) {
      router.push("/discover/mirror");
    }
  }, [answers, router]);

  // Fetch reflections from API
  useEffect(() => {
    if (answers.length === 0 || hasStarted.current) return;
    hasStarted.current = true;

    async function fetchReflections() {
      setIsReflecting(true);

      try {
        const response = await fetch("/api/reflect", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            answers,
            preferences: revealedPreferences,
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to get reflections");
        }

        const reader = response.body?.getReader();
        if (!reader) throw new Error("No response stream");

        const decoder = new TextDecoder();
        let accumulated = "";

        while (true) {
          const { done: streamDone, value } = await reader.read();
          if (streamDone) break;

          const chunk = decoder.decode(value);
          for (const line of chunk.split("\n")) {
            if (line.startsWith("data: ") && line !== "data: [DONE]") {
              try {
                const text = JSON.parse(line.slice(6));
                accumulated += text;
                setStreamedText(accumulated);
              } catch {
                // skip malformed chunks
              }
            }
          }
        }

        // Parse the final JSON
        try {
          const reflections: Reflection[] = JSON.parse(accumulated);
          setParsedReflections(reflections);
          setReflections(reflections);
        } catch {
          // Try to extract JSON from the accumulated text
          const jsonMatch = accumulated.match(/\[[\s\S]*\]/);
          if (jsonMatch) {
            const reflections: Reflection[] = JSON.parse(jsonMatch[0]);
            setParsedReflections(reflections);
            setReflections(reflections);
          } else {
            throw new Error("Could not parse reflections");
          }
        }

        setDone(true);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong");
      } finally {
        setIsReflecting(false);
      }
    }

    fetchReflections();
  }, [answers, revealedPreferences, setReflections, setIsReflecting]);

  if (answers.length === 0) return null;

  const typeLabels: Record<Reflection["type"], string> = {
    contradiction: "Contradiction",
    assumption: "Hidden Assumption",
    surprise: "Surprise",
    reframe: "Reframe",
  };

  const typeColors: Record<Reflection["type"], string> = {
    contradiction: "border-red-400/40",
    assumption: "border-amber-400/40",
    surprise: "border-emerald-400/40",
    reframe: "border-accent/40",
  };

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
          What you revealed
        </h1>
        <p className="text-muted text-lg">
          Between the lines of your answers, here&apos;s what we found.
        </p>
      </motion.div>

      {/* Loading state — streaming text */}
      {!done && !error && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-2 h-2 rounded-full bg-accent"
            />
            <p className="text-muted text-sm">
              Analyzing your pattern across 22 answers...
            </p>
          </div>
          {streamedText && (
            <div className="text-muted/50 text-xs font-mono overflow-hidden max-h-24 leading-relaxed">
              {streamedText.slice(-200)}
            </div>
          )}
        </motion.div>
      )}

      {/* Error state */}
      {error && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-red-500 mb-4">{error}</p>
          <button
            onClick={() => router.push("/discover/mirror")}
            className="text-accent underline underline-offset-4"
          >
            Try again
          </button>
        </motion.div>
      )}

      {/* Reflections */}
      {done && parsedReflections.length > 0 && (
        <div className="space-y-6">
          {parsedReflections.map((reflection, i) => (
            <motion.div
              key={reflection.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`border-l-4 ${typeColors[reflection.type]} bg-foreground/[0.03] rounded-r-lg p-6`}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-medium text-muted uppercase tracking-wider">
                  {typeLabels[reflection.type]}
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-xl text-foreground mb-2">
                {reflection.title}
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                {reflection.body}
              </p>
            </motion.div>
          ))}

          {/* Continue button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: parsedReflections.length * 0.15 + 0.3 }}
            className="pt-8 text-center"
          >
            <button
              onClick={() => router.push("/discover/map")}
              className="bg-accent text-white px-8 py-3 rounded-lg font-medium hover:bg-accent-light transition-colors"
            >
              See your career map
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}
