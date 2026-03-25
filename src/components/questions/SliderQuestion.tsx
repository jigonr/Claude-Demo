"use client";

import { useState, useEffect } from "react";
import { Question } from "@/lib/types";

interface SliderQuestionProps {
  question: Question;
  onAnswer: (value: number) => void;
  currentAnswer?: number;
}

export function SliderQuestion({
  question,
  onAnswer,
  currentAnswer,
}: SliderQuestionProps) {
  const [value, setValue] = useState(currentAnswer ?? 0);

  useEffect(() => {
    setValue(currentAnswer ?? 0);
  }, [currentAnswer, question.id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = parseFloat(e.target.value);
    setValue(v);
    onAnswer(v);
  };

  // Map -1..1 to a percentage for the filled track
  const pct = ((value + 1) / 2) * 100;

  return (
    <div className="w-full max-w-xl mx-auto mt-10 space-y-6">
      <div className="relative">
        <input
          type="range"
          min={-1}
          max={1}
          step={0.01}
          value={value}
          onChange={handleChange}
          className="w-full h-2 appearance-none rounded-full cursor-pointer outline-none
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:w-6
            [&::-webkit-slider-thumb]:h-6
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-accent
            [&::-webkit-slider-thumb]:shadow-md
            [&::-webkit-slider-thumb]:cursor-pointer
            [&::-webkit-slider-thumb]:border-2
            [&::-webkit-slider-thumb]:border-white
            [&::-moz-range-thumb]:w-6
            [&::-moz-range-thumb]:h-6
            [&::-moz-range-thumb]:rounded-full
            [&::-moz-range-thumb]:bg-accent
            [&::-moz-range-thumb]:border-2
            [&::-moz-range-thumb]:border-white
            [&::-moz-range-thumb]:cursor-pointer"
          style={{
            background: `linear-gradient(to right, var(--accent) 0%, var(--accent) ${pct}%, #d4d0cc ${pct}%, #d4d0cc 100%)`,
          }}
        />
      </div>

      <div className="flex justify-between text-sm text-muted">
        <span className="max-w-[40%]">{question.sliderMin}</span>
        <span className="max-w-[40%] text-right">{question.sliderMax}</span>
      </div>
    </div>
  );
}
