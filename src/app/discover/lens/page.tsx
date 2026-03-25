"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useDiscoverStore } from "@/lib/store";
import { derivePreferences } from "@/lib/scoring";
import { detectContradictions } from "@/lib/contradictions";
import { DimensionBar } from "@/components/ui/DimensionBar";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { LoadingPulse } from "@/components/ui/LoadingPulse";
import { Reflection, RevealedPreferences } from "@/lib/types";

const dimensionLabels: Record<keyof RevealedPreferences, { label: string; min: string; max: string; range: "bipolar" | "unipolar" }> = {
  autonomy: { label: "Autonomy", min: "Structure", max: "Independence", range: "bipolar" },
  timeHorizon: { label: "Time Horizon", min: "Now", max: "Long-term", range: "bipolar" },
  socialDensity: { label: "Social Style", min: "Solo", max: "Team", range: "bipolar" },
  riskTolerance: { label: "Risk Tolerance", min: "Safe", max: "Bold", range: "bipolar" },
  cognitiveStyle: { label: "Thinking Style", min: "Concrete", max: "Abstract", range: "bipolar" },
  incomeWeight: { label: "Income Priority", min: "Low", max: "High", range: "unipolar" },
  statusWeight: { label: "Status Priority", min: "Low", max: "High", range: "unipolar" },
  meaningWeight: { label: "Meaning Priority", min: "Low", max: "High", range: "unipolar" },
  geographicFlex: { label: "Geographic Flexibility", min: "Rooted", max: "Nomadic", range: "bipolar" },
};

export default function LensPage() {
  const router = useRouter();
  const { answers, setPreferences, setReflections } = useDiscoverStore();
  const [localReflections, setLocalReflections] = useState<Reflection[]>([]);
  const [prefs, setPrefs] = useState<RevealedPreferences | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (answers.length === 0) {
      router.push("/discover/mirror");
      return;
    }

    const derived = derivePreferences(answers);
    setPreferences(derived);
    setPrefs(derived);

    const reflections = detectContradictions(answers, derived);
    setReflections(reflections);
    setLocalReflections(reflections);

    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, [answers, setPreferences, setReflections, router]);

  if (loading || !prefs) {
    return <LoadingPulse title="Reading between the lines..." subtitle="Analyzing your patterns and contradictions." />;
  }

  return (
    <div className="min-h-dvh py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-foreground">
            Here&rsquo;s what we noticed.
          </h1>
          <p className="mt-4 text-muted text-lg leading-relaxed">
            Your answers tell a story. Some of it you already know. Some might surprise you.
          </p>
        </motion.div>

        {/* Dimension Profile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-12 space-y-4"
        >
          <h2 className="font-[family-name:var(--font-heading)] text-xl text-foreground mb-6">
            Your preference profile
          </h2>
          {(Object.keys(dimensionLabels) as (keyof RevealedPreferences)[]).map((key) => {
            const dim = dimensionLabels[key];
            return (
              <DimensionBar
                key={key}
                label={dim.label}
                value={prefs[key]}
                minLabel={dim.min}
                maxLabel={dim.max}
                range={dim.range}
              />
            );
          })}
        </motion.div>

        {/* Reflections */}
        <div className="mt-16 space-y-8">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="font-[family-name:var(--font-heading)] text-xl text-foreground"
          >
            What your answers reveal
          </motion.h2>

          {localReflections.map((reflection, i) => (
            <motion.div
              key={reflection.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.3, duration: 0.5 }}
              className="rounded-2xl border-2 border-foreground/10 p-6"
            >
              <Badge label={reflection.type} type={reflection.type} />
              <h3 className="mt-3 font-[family-name:var(--font-heading)] text-lg text-foreground">
                {reflection.title}
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {reflection.body}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 + localReflections.length * 0.3 + 0.3 }}
          className="mt-16 text-center"
        >
          <Button size="lg" onClick={() => router.push("/discover/map")}>
            See Your Matches &rarr;
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
