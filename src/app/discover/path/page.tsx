"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useDiscoverStore } from "@/lib/store";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export default function PathPage() {
  const router = useRouter();
  const { answers, jobMatches, reset } = useDiscoverStore();

  useEffect(() => {
    if (answers.length === 0) {
      router.push("/discover/mirror");
    }
  }, [answers, router]);

  if (jobMatches.length === 0) {
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
            Here&rsquo;s what you can do this week for each match.
          </p>
        </motion.div>

        <div className="mt-12 space-y-10">
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
                <Badge label={`${Math.round(match.score * 100)}% match`} type="surprise" />
              </div>
              <p className="mt-1 text-sm text-muted">
                {match.job.company} &middot; {match.job.location.city}, {match.job.location.state}
              </p>

              {/* Key skills to develop */}
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-foreground mb-3">Skills to build</h4>
                <div className="flex flex-wrap gap-2">
                  {match.job.requirements.skills.map((skill) => (
                    <Badge key={skill} label={skill} />
                  ))}
                </div>
              </div>

              {/* Education & experience */}
              <div className="mt-4 bg-accent/5 rounded-xl p-4">
                <h4 className="text-sm font-semibold text-accent">Getting started</h4>
                <p className="mt-1 text-sm text-foreground leading-relaxed">
                  {match.job.requirements.education} &middot; {match.job.requirements.experience_years} years experience
                </p>
                {match.job.requirements.certifications.length > 0 && (
                  <p className="mt-2 text-sm text-muted">
                    Certifications: {match.job.requirements.certifications.join(", ")}
                  </p>
                )}
              </div>

              {/* Top responsibilities as preview */}
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-foreground mb-2">What you&rsquo;d actually do</h4>
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
