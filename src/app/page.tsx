"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

const approaches = [
  {
    title: "We ask surprising questions",
    description:
      "Not 'do you like working with people.' We surface hidden preferences through scenarios you've never considered — the kind that reveal what you actually care about.",
  },
  {
    title: "We challenge your assumptions",
    description:
      "AI-powered reflection shows you the patterns in your own answers. The biases you didn't know you had. The values you've been ignoring.",
  },
  {
    title: "We expand your world",
    description:
      "Careers you've never heard of, matched to who you actually are — not who your parents, teachers, or LinkedIn think you should be.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      {/* Hero */}
      <main className="flex flex-1 flex-col justify-center px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl">
          <motion.h1
            className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl md:text-6xl leading-tight tracking-tight text-charcoal"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            You don&rsquo;t have a career problem.
          </motion.h1>

          <motion.p
            className="mt-4 font-[family-name:var(--font-heading)] text-2xl sm:text-3xl text-muted leading-snug"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            You have an information problem.
          </motion.p>

          <motion.div
            className="mt-12 space-y-6 text-lg leading-relaxed text-charcoal/80"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            <p>
              Most 18-year-olds can name about 20 jobs. There are thousands.
              Your dream career might be one you&rsquo;ve never heard of.
            </p>
            <p>
              This isn&rsquo;t a personality quiz. It&rsquo;s a guided
              conversation that uses behavioral science to reveal what you
              actually want — not what you think you should want.
            </p>
          </motion.div>

          <motion.div
            className="mt-12"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            <Link
              href="/discover/mirror"
              className="inline-block rounded-full bg-accent px-8 py-4 text-lg font-medium text-white transition-colors hover:bg-accent-light"
            >
              Begin Discovery
            </Link>
          </motion.div>
        </div>
      </main>

      {/* Below the fold — approach */}
      <section className="border-t border-charcoal/10 px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl">
          <motion.h2
            className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl text-charcoal mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            A different kind of career tool.
          </motion.h2>

          <div className="space-y-16">
            {approaches.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <h3 className="font-[family-name:var(--font-heading)] text-xl text-charcoal">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-charcoal/10 px-6 py-12">
        <div className="mx-auto max-w-3xl flex items-center justify-between text-sm text-muted">
          <span>Pathfinder</span>
          <Link href="/about" className="hover:text-charcoal transition-colors">
            About &amp; Science
          </Link>
        </div>
      </footer>
    </div>
  );
}
