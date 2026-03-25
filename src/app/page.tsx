"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, type Variants } from "framer-motion";
import { useDiscoverStore } from "@/lib/store";
import { demoAnswers } from "@/data/demo-answers";
import { derivePreferences } from "@/lib/scoring";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: "easeOut" as const },
  }),
};

const stats = [
  { number: "20", label: "jobs the average teen can name" },
  { number: "12,000+", label: "occupations that actually exist" },
  { number: "73%", label: "wish they'd explored more options" },
];

const approaches = [
  {
    number: "01",
    title: "Surprising questions",
    description:
      "Not 'do you like working with people.' We use behavioral scenarios that reveal what you actually care about — not what you think you should say.",
  },
  {
    number: "02",
    title: "Honest reflection",
    description:
      "AI-powered analysis finds the contradictions in your answers. The biases you didn't know you had. The values you've been ignoring.",
  },
  {
    number: "03",
    title: "Hidden careers",
    description:
      "Matched to who you actually are. Jobs you've never heard of that fit the preferences you just revealed.",
  },
];

export default function Home() {
  const router = useRouter();
  const { setAnswer, setPreferences } = useDiscoverStore();

  const handleDemoSkip = () => {
    for (const answer of demoAnswers) {
      setAnswer(answer);
    }
    const prefs = derivePreferences(demoAnswers);
    setPreferences(prefs);
    router.push("/discover/lens");
  };

  return (
    <div className="flex flex-col flex-1">
      {/* Hero — dark, bold, not beige */}
      <main className="relative flex flex-1 flex-col justify-center px-6 py-28 sm:py-36 bg-highlight text-white overflow-hidden">
        {/* Subtle gradient accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/10 to-transparent pointer-events-none" />

        <div className="relative mx-auto max-w-3xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/20 text-sm text-white/60 tracking-wide uppercase"
          >
            Career discovery, reimagined
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            You don&rsquo;t have a<br />
            career problem.
            <span className="block text-accent mt-2">You have an information problem.</span>
          </motion.h1>

          <motion.p
            className="mt-8 text-lg sm:text-xl text-white/60 leading-relaxed max-w-xl"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            Most people choose careers from the tiny slice of the world they&rsquo;ve seen.
            This tool uses behavioral science to show you the rest.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row gap-4"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            <div className="flex flex-wrap gap-4 items-center">
              <Link
                href="/discover/mirror"
                className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-base font-semibold text-white transition-all hover:bg-accent-light hover:shadow-lg hover:shadow-accent/25"
              >
                Start Discovering &rarr;
              </Link>
              <button
                onClick={handleDemoSkip}
                className="inline-block rounded-full border-2 border-foreground/20 px-6 py-3.5 text-sm font-medium text-muted transition-colors hover:border-accent hover:text-accent"
              >
                Skip to Demo &rarr;
              </button>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-base font-medium text-white/80 transition-colors hover:bg-white/10"
            >
              How it works
            </Link>
          </motion.div>
        </div>
      </main>

      {/* Stats strip */}
      <section className="px-6 py-14 bg-highlight text-white">
        <div className="mx-auto max-w-3xl grid grid-cols-3 gap-8 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="text-3xl sm:text-4xl font-bold text-accent">{stat.number}</div>
              <div className="mt-2 text-xs sm:text-sm text-white/50 leading-snug">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Approach cards */}
      <section className="px-6 py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-3xl">
          <motion.p
            className="text-sm font-semibold uppercase tracking-widest text-accent mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            How Pathfinder works
          </motion.p>
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-foreground mb-16 leading-tight"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Not a quiz.<br />A guided investigation.
          </motion.h2>

          <div className="space-y-12">
            {approaches.map((item, i) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex gap-6 items-start"
              >
                <span className="flex-shrink-0 text-4xl font-bold text-accent/20">{item.number}</span>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-muted">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="px-6 py-20 bg-highlight text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Takes 8 minutes. Changes how you think about work.
          </h2>
          <p className="mt-4 text-white/50 text-base">
            22 questions. No sign-up. No data stored. Just you and some uncomfortable honesty.
          </p>
          <Link
            href="/discover/mirror"
            className="inline-flex items-center justify-center mt-8 rounded-full bg-accent px-8 py-4 text-base font-semibold text-white transition-all hover:bg-accent-light hover:shadow-lg hover:shadow-accent/25"
          >
            Start Discovering &rarr;
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-10">
        <div className="mx-auto max-w-3xl flex items-center justify-between text-sm text-muted">
          <span className="font-semibold">Pathfinder</span>
          <Link href="/about" className="hover:text-foreground transition-colors">
            About &amp; Science
          </Link>
        </div>
      </footer>
    </div>
  );
}
