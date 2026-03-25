"use client";

import { useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Question, Answer } from "@/lib/types";
import { BinaryChoice } from "./BinaryChoice";
import { SliderQuestion } from "./SliderQuestion";
import { OpenTextQuestion } from "./OpenTextQuestion";

interface QuestionRendererProps {
  question: Question;
  questionIndex: number;
  totalQuestions: number;
  onAnswer: (answer: Answer) => void;
  onNext: () => void;
  onPrev: () => void;
  currentAnswer?: Answer;
}

// Alternate between two transition styles
function getVariants(index: number) {
  const isEven = index % 2 === 0;
  return {
    initial: {
      opacity: 0,
      y: isEven ? 30 : 0,
      scale: isEven ? 1 : 0.98,
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5 },
    },
    exit: {
      opacity: 0,
      y: isEven ? -20 : 0,
      scale: isEven ? 1 : 0.98,
      transition: { duration: 0.3 },
    },
  };
}

export function QuestionRenderer({
  question,
  questionIndex,
  totalQuestions,
  onAnswer,
  onNext,
  onPrev,
  currentAnswer,
}: QuestionRendererProps) {
  const autoAdvanceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Clear timer on unmount or question change
  useEffect(() => {
    return () => {
      if (autoAdvanceTimer.current) clearTimeout(autoAdvanceTimer.current);
    };
  }, [question.id]);

  const handleBinaryAnswer = useCallback(
    (optionId: string) => {
      onAnswer({ questionId: question.id, value: optionId });
      // Auto-advance after 600ms
      if (autoAdvanceTimer.current) clearTimeout(autoAdvanceTimer.current);
      autoAdvanceTimer.current = setTimeout(() => {
        onNext();
      }, 600);
    },
    [question.id, onAnswer, onNext]
  );

  const handleSliderAnswer = useCallback(
    (value: number) => {
      onAnswer({ questionId: question.id, value });
    },
    [question.id, onAnswer]
  );

  const handleOpenAnswer = useCallback(
    (text: string) => {
      onAnswer({ questionId: question.id, value: text });
    },
    [question.id, onAnswer]
  );

  const showContinue = question.type === "slider" || question.type === "open";
  const hasAnswer = currentAnswer !== undefined;

  const variants = getVariants(questionIndex);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={question.id}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex flex-col items-center justify-center min-h-[80vh] px-6 py-12 w-full"
      >
        {/* Question text */}
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-4xl text-center leading-snug max-w-3xl">
          {question.text}
        </h2>

        {/* Subtext (only for non-open types; open handles its own subtext) */}
        {question.subtext && question.type !== "open" && (
          <p className="mt-4 text-muted text-sm md:text-base text-center max-w-2xl leading-relaxed">
            {question.subtext}
          </p>
        )}

        {/* Question input */}
        {question.type === "binary" && (
          <BinaryChoice
            question={question}
            onAnswer={handleBinaryAnswer}
            currentAnswer={currentAnswer?.value as string | undefined}
          />
        )}

        {question.type === "slider" && (
          <SliderQuestion
            question={question}
            onAnswer={handleSliderAnswer}
            currentAnswer={currentAnswer?.value as number | undefined}
          />
        )}

        {question.type === "open" && (
          <OpenTextQuestion
            question={question}
            onAnswer={handleOpenAnswer}
            currentAnswer={currentAnswer?.value as string | undefined}
          />
        )}

        {/* Continue button */}
        {showContinue && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            onClick={onNext}
            className="mt-10 px-8 py-3 text-base rounded-full
              bg-foreground text-background
              hover:bg-accent transition-colors duration-200
              cursor-pointer"
          >
            Continue &rarr;
          </motion.button>
        )}

        {/* Back link */}
        {questionIndex > 0 && (
          <button
            onClick={onPrev}
            className="mt-6 text-sm text-muted hover:text-foreground transition-colors cursor-pointer"
          >
            &larr; Back
          </button>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
