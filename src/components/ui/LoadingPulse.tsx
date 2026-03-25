"use client";

import { motion } from "framer-motion";

interface LoadingPulseProps {
  title: string;
  subtitle?: string;
}

export function LoadingPulse({ title, subtitle }: LoadingPulseProps) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="text-center"
      >
        <p className="font-[family-name:var(--font-heading)] text-2xl md:text-4xl text-foreground">
          {title}
        </p>
        {subtitle && (
          <p className="mt-4 text-muted text-sm">{subtitle}</p>
        )}
      </motion.div>
    </div>
  );
}
