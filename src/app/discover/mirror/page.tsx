"use client";

import { useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDiscoverStore } from "@/lib/store";
import { questions } from "@/data/questions";
import { derivePreferences } from "@/lib/scoring";
import { QuestionRenderer } from "@/components/questions/QuestionRenderer";
import { Answer } from "@/lib/types";

export default function MirrorPage() {
  const router = useRouter();
  const {
    currentQuestionIndex,
    answers,
    setAnswer,
    nextQuestion,
    prevQuestion,
    setPreferences,
  } = useDiscoverStore();

  const totalQuestions = questions.length;
  const question = questions[currentQuestionIndex];

  const currentAnswer = answers.find(
    (a) => question && a.questionId === question.id
  );

  const handleAnswer = useCallback(
    (answer: Answer) => {
      setAnswer(answer);
    },
    [setAnswer]
  );

  const handleNext = useCallback(() => {
    if (currentQuestionIndex >= totalQuestions - 1) {
      // All questions answered — compute preferences and redirect
      const prefs = derivePreferences(answers);
      setPreferences(prefs);
      router.push("/discover/lens");
    } else {
      nextQuestion();
    }
  }, [currentQuestionIndex, totalQuestions, answers, setPreferences, nextQuestion, router]);

  const handlePrev = useCallback(() => {
    prevQuestion();
  }, [prevQuestion]);

  // Guard: if index is out of range, redirect
  useEffect(() => {
    if (currentQuestionIndex >= totalQuestions) {
      const prefs = derivePreferences(answers);
      setPreferences(prefs);
      router.push("/discover/lens");
    }
  }, [currentQuestionIndex, totalQuestions, answers, setPreferences, router]);

  if (!question) return null;

  return (
    <main className="min-h-dvh flex items-center justify-center bg-background">
      <QuestionRenderer
        key={question.id}
        question={question}
        questionIndex={currentQuestionIndex}
        totalQuestions={totalQuestions}
        onAnswer={handleAnswer}
        onNext={handleNext}
        onPrev={handlePrev}
        currentAnswer={currentAnswer}
      />
    </main>
  );
}
