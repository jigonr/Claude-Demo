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
    <div className="flex flex-col gap-4 sm:flex-row sm:gap-5 w-full max-w-2xl mx-auto mt-10">
      {options.map((option, i) => {
        const isSelected = currentAnswer === option.id;
        return (
          <motion.button
            key={option.id}
            onClick={() => onAnswer(option.id)}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.3 }}
            whileHover={isSelected ? undefined : { y: -3 }}
            whileTap={{ scale: 0.97 }}
            className={`
              flex-1 relative px-7 py-8 rounded-xl text-left text-base
              font-medium leading-snug
              transition-all duration-200 cursor-pointer
              border
              ${
                isSelected
                  ? "border-accent bg-accent text-white shadow-lg shadow-accent/20"
                  : "border-2 border-border bg-white hover:border-accent hover:shadow-md text-foreground"
              }
            `}
          >
            <span className="block">{option.label}</span>
            {isSelected && (
              <motion.div
                layoutId="selected-check"
                className="absolute top-3 right-3 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
            )}
          </motion.button>
        );
      })}
    </div>
  );
}
