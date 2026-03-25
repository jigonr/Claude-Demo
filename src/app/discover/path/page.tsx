"use client";

import { motion } from "framer-motion";

export default function PathPage() {
  return (
    <main className="min-h-dvh flex items-center justify-center bg-background">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="text-center"
      >
        <p className="font-[family-name:var(--font-heading)] text-2xl md:text-4xl text-foreground">
          Building your path...
        </p>
        <p className="mt-4 text-muted text-sm">
          Charting the first steps you can actually take.
        </p>
      </motion.div>
    </main>
  );
}
