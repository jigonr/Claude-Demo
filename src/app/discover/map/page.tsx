"use client";

import { motion } from "framer-motion";

export default function MapPage() {
  return (
    <main className="min-h-dvh flex items-center justify-center bg-background">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="text-center"
      >
        <p className="font-[family-name:var(--font-heading)] text-2xl md:text-4xl text-foreground">
          Your career map is being drawn...
        </p>
        <p className="mt-4 text-muted text-sm">
          Mapping the territory of what suits you.
        </p>
      </motion.div>
    </main>
  );
}
