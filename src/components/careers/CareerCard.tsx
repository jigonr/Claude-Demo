"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CareerMatch } from "@/lib/types";
import { Badge } from "@/components/ui/Badge";

interface CareerCardProps {
  match: CareerMatch;
  index: number;
  isSurprise?: boolean;
}

export function CareerCard({ match, index, isSurprise = false }: CareerCardProps) {
  const [expanded, setExpanded] = useState(false);
  const { career, score, matchExplanation } = match;
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
              {career.title}
            </h3>
            {isSurprise && (
              <Badge label="Surprise pick" type="surprise" />
            )}
          </div>
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
      <div className="mt-4 flex flex-wrap gap-2">
        {career.tags.map((tag) => (
          <Badge key={tag} label={tag} />
        ))}
      </div>

      {/* Salary range */}
      <div className="mt-4 text-sm text-muted">
        {career.incomeTrajectory.length > 0 && (
          <span>
            ${(career.incomeTrajectory[0].amount / 1000).toFixed(0)}K →{" "}
            ${(career.incomeTrajectory[career.incomeTrajectory.length - 1].amount / 1000).toFixed(0)}K
            over {career.incomeTrajectory[career.incomeTrajectory.length - 1].year} years
          </span>
        )}
      </div>

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
                <h4 className="text-sm font-semibold text-foreground mb-2">What it actually involves</h4>
                <p className="text-sm text-muted leading-relaxed">{career.description}</p>
              </div>

              {/* Day in life */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2">A typical day</h4>
                <p className="text-sm text-muted leading-relaxed italic">{career.dayInLife}</p>
              </div>

              {/* Surprise factor */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2">Why you wouldn&rsquo;t have found this</h4>
                <p className="text-sm text-muted leading-relaxed">{career.surpriseFactor}</p>
              </div>

              {/* Micro experiment */}
              <div className="bg-accent/5 rounded-xl p-4">
                <h4 className="text-sm font-semibold text-accent mb-1">Try it this week</h4>
                <p className="text-sm text-foreground leading-relaxed">{career.microExperiment}</p>
              </div>
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
