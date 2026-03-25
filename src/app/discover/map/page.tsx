"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useDiscoverStore } from "@/lib/store";
import { matchJobs, derivePreferences } from "@/lib/scoring";
import { JobCard } from "@/components/careers/CareerCard";
import { Button } from "@/components/ui/Button";
import { LoadingPulse } from "@/components/ui/LoadingPulse";
import { JobMatch } from "@/lib/types";
// TODO: replace with `import { jobs } from "@/data/jobs"` when David's data lands
import { mockJobs as jobs } from "@/data/careers-mock";

export default function MapPage() {
  const router = useRouter();
  const { answers, revealedPreferences, jobMatches, setJobMatches, setPreferences } = useDiscoverStore();
  const [matches, setMatches] = useState<JobMatch[]>(jobMatches);
  const [loading, setLoading] = useState(jobMatches.length === 0);

  useEffect(() => {
    if (answers.length === 0) {
      router.push("/discover/mirror");
      return;
    }

    if (jobMatches.length > 0) {
      setMatches(jobMatches);
      setLoading(false);
      return;
    }

    (async () => {
      let prefs = revealedPreferences;
      if (prefs.autonomy === 0 && prefs.timeHorizon === 0) {
        prefs = derivePreferences(answers);
        setPreferences(prefs);
      }

      const results = matchJobs(prefs, jobs, 5);
      setJobMatches(results);
      setMatches(results);
      setTimeout(() => setLoading(false), 800);
    })();
  }, [answers, revealedPreferences, jobMatches, setJobMatches, setPreferences, router]);

  if (loading) {
    return <LoadingPulse title="Mapping your career landscape..." subtitle="Finding careers that match who you actually are." />;
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
            Careers you didn&rsquo;t know you&rsquo;d love.
          </h1>
          <p className="mt-4 text-muted text-lg leading-relaxed">
            These aren&rsquo;t the obvious choices. They&rsquo;re matched to the preferences
            you just revealed — ones you might never have found on your own.
          </p>
        </motion.div>

        <div className="mt-12 space-y-6">
          {matches.map((match, i) => (
            <JobCard
              key={match.job.id}
              match={match}
              index={i}
              isSurprise={i === matches.length - 1}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: matches.length * 0.1 + 0.5 }}
          className="mt-16 text-center"
        >
          <Button size="lg" onClick={() => router.push("/discover/path")}>
            Explore Your Path &rarr;
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
