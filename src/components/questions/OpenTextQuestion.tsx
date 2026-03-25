"use client";

import { useState, useEffect } from "react";
import { Question } from "@/lib/types";

interface OpenTextQuestionProps {
  question: Question;
  onAnswer: (text: string) => void;
  currentAnswer?: string;
}

export function OpenTextQuestion({
  question,
  onAnswer,
  currentAnswer,
}: OpenTextQuestionProps) {
  const [text, setText] = useState(currentAnswer ?? "");

  useEffect(() => {
    setText(currentAnswer ?? "");
  }, [currentAnswer, question.id]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const v = e.target.value;
    setText(v);
    onAnswer(v);
  };

  return (
    <div className="w-full max-w-xl mx-auto mt-10 space-y-4">
      {question.subtext && (
        <p className="text-muted text-sm leading-relaxed italic">
          {question.subtext}
        </p>
      )}
      <textarea
        value={text}
        onChange={handleChange}
        rows={4}
        placeholder="Take your time. Write whatever comes to mind..."
        className="w-full bg-transparent resize-none text-lg leading-relaxed
          border-0 border-b-2 border-foreground/10 focus:border-accent
          outline-none transition-colors duration-300
          placeholder:text-foreground/25 p-2"
      />
    </div>
  );
}
