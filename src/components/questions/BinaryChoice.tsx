"use client";

import { motion } from "framer-motion";
import { Question } from "@/lib/types";

interface BinaryChoiceProps {
  question: Question;
  onAnswer: (optionId: string) => void;
  currentAnswer?: string;
}

export function BinaryChoice({
  question,
  onAnswer,
  currentAnswer,
}: BinaryChoiceProps) {
  const options = question.options ?? [];

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 w-full max-w-2xl mx-auto mt-10">
      {options.map((option) => {
        const isSelected = currentAnswer === option.id;
        return (
          <motion.button
            key={option.id}
            onClick={() => onAnswer(option.id)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className={`
              flex-1 px-8 py-10 rounded-2xl text-left text-lg
              font-[family-name:var(--font-heading)]
              transition-all duration-200 cursor-pointer
              border-2
              ${
                isSelected
                  ? "border-accent bg-accent/5 shadow-lg"
                  : "border-foreground/10 bg-white/50 hover:shadow-md hover:border-foreground/20"
              }
            `}
          >
            <span className={isSelected ? "text-accent" : "text-foreground"}>
              {option.label}
            </span>
          </motion.button>
        );
      })}
    </div>
  );
}
