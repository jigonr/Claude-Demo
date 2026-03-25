"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { JobMatch } from "@/lib/types";
import { Badge } from "@/components/ui/Badge";

interface JobCardProps {
  match: JobMatch;
  index: number;
  isSurprise?: boolean;
}

export function JobCard({ match, index, isSurprise = false }: JobCardProps) {
  const [expanded, setExpanded] = useState(false);
  const { job, score, matchExplanation } = match;
  const matchPct = Math.round(score * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      onClick={() => setExpanded(!expanded)}
      className="rounded-2xl border-2 border-foreground/10 bg-background p-6 cursor-pointer
        hover:shadow-lg hover:border-foreground/20 transition-all duration-200"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 flex-wrap">
            <h3 className="font-[family-name:var(--font-heading)] text-xl text-foreground">
              {job.title}
            </h3>
            {isSurprise && (
              <Badge label="Surprise pick" type="surprise" />
            )}
          </div>
          <p className="mt-1 text-sm text-muted">
            {job.company}
            {job.location?.city && <> &middot; {job.location.city}, {job.location.state}</>}
            {job.location?.remote && job.location.remote !== "on-site" && <> &middot; {job.location.remote}</>}
          </p>
          <p className="mt-2 text-sm text-muted leading-relaxed">
            {matchExplanation}
          </p>
        </div>
        <div className="flex-shrink-0 text-right">
          <div className="text-2xl font-bold text-accent">{matchPct}%</div>
          <div className="text-xs text-muted">match</div>
        </div>
      </div>

      {/* Tags */}
      {(job.tags?.length ?? 0) > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {job.tags.map((tag) => (
            <Badge key={tag} label={tag} />
          ))}
        </div>
      )}

      {/* Salary range */}
      {job.salary?.min != null && (
        <div className="mt-4 text-sm text-muted">
          ${(job.salary.min / 1000).toFixed(0)}K &ndash; ${(job.salary.max / 1000).toFixed(0)}K / year
        </div>
      )}

      {/* Expanded detail */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-6 pt-6 border-t border-foreground/10 space-y-6">
              {/* Description */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2">About this role</h4>
                <p className="text-sm text-muted leading-relaxed">{job.description}</p>
              </div>

              {/* Responsibilities */}
              {(job.responsibilities?.length ?? 0) > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">What you&rsquo;d do</h4>
                  <ul className="text-sm text-muted leading-relaxed space-y-1 list-disc list-inside">
                    {job.responsibilities.slice(0, 5).map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Requirements */}
              {job.requirements && (
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">What they&rsquo;re looking for</h4>
                  <p className="text-sm text-muted">
                    {job.requirements.education || "No specific degree required"}
                    {job.requirements.experience_years && <> &middot; {job.requirements.experience_years} years experience</>}
                  </p>
                  {(job.requirements.skills?.length ?? 0) > 0 && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {job.requirements.skills.map((skill) => (
                        <Badge key={skill} label={skill} />
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Benefits */}
              {(job.benefits?.length ?? 0) > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Benefits</h4>
                  <ul className="text-sm text-muted leading-relaxed space-y-1 list-disc list-inside">
                    {job.benefits.slice(0, 4).map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Expand hint */}
      <div className="mt-3 text-xs text-muted text-center">
        {expanded ? "Click to collapse" : "Click to explore"}
      </div>
    </motion.div>
  );
}
