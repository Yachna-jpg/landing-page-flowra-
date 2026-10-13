"use client";

import React from "react";

interface HowItWorksStepsProps {
  activeStep: number; // 0, 1, or 2
  onStepClick?: (step: number) => void;
}

export const HOW_IT_WORKS_DATA = [
  {
    number: "1",
    sentence: "Add your leads from a Google Sheet.",
  },
  {
    number: "2",
    sentence: "Pick calls, WhatsApp, or website chat.",
  },
  {
    number: "3",
    sentence: "Flowra talks to them and hands over the hot leads.",
  },
];

export const HowItWorksSteps: React.FC<HowItWorksStepsProps> = ({
  activeStep,
  onStepClick,
}) => {
  return (
    <div className="w-full max-w-xl flex flex-col justify-center space-y-12 sm:space-y-14">
      {HOW_IT_WORKS_DATA.map((step, idx) => {
        const isActive = idx === activeStep;

        return (
          <div
            key={step.number}
            onClick={() => onStepClick && onStepClick(idx)}
            className={`flex items-baseline gap-6 sm:gap-8 cursor-pointer select-none transition-all duration-500 ${
              isActive
                ? "opacity-100 translate-x-2"
                : "opacity-40 hover:opacity-60"
            }`}
          >
            {/* Big Number (1, 2, 3) */}
            <span
              className={`text-4xl sm:text-6xl font-bold tracking-tight transition-colors duration-500 shrink-0 ${
                isActive ? "text-slate-900" : "text-slate-300"
              }`}
            >
              {step.number}
            </span>

            {/* Short Sentence */}
            <p
              className={`text-xl sm:text-2xl font-normal leading-relaxed transition-colors duration-500 ${
                isActive ? "text-slate-800" : "text-slate-400"
              }`}
            >
              {step.sentence}
            </p>
          </div>
        );
      })}
    </div>
  );
};
