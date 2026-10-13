"use client";

import React from "react";
import { ReviewBlock, ReviewData } from "./ReviewBlock";

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

const STEP_REVIEWS: ReviewData[] = [
  {
    id: "step-1",
    rating: 5.0,
    headline: "Imported 12,000 cold leads from Google Sheet in 4 minutes!",
    quote: "No tedious CRM mapping. We simply pasted our Google Sheet link, Flowra verified invalid numbers, and kicked off outreach immediately.",
    author: "Ananya Sen",
    role: "Director of Marketing & Ops, EduTech Pulse (Pune)",
    avatar: "/indian_reviewer_ananya.jpg",
  },
  {
    id: "step-2",
    rating: 5.0,
    headline: "Voice call first, WhatsApp fallback — brilliant multi-channel logic!",
    quote: "Our leads get a polite call within seconds. If they don't answer, Flowra sends a WhatsApp catalog message. Dropped lead rate dropped by 70%.",
    author: "Kavita Sen",
    role: "Operations Head, FinLeap India (Mumbai)",
    avatar: "/indian_reviewer_pooja.jpg",
  },
  {
    id: "step-3",
    rating: 5.0,
    headline: "Our sales reps only talk to high-intent buyers now!",
    quote: "Flowra handles tire-kickers and FAQ doubts, then hot transfers genuinely interested prospects directly into our calendar with full conversation history.",
    author: "Rahul Joshi",
    role: "VP Sales, Enterprise Hub (Bengaluru)",
    avatar: "/indian_reviewer_aditya.jpg",
  },
];

export const HowItWorksSteps: React.FC<HowItWorksStepsProps> = ({
  activeStep,
  onStepClick,
}) => {
  const currentReview = STEP_REVIEWS[activeStep] || STEP_REVIEWS[0];

  return (
    <div className="w-full max-w-xl flex flex-col justify-center">
      <div className="space-y-7 sm:space-y-8">
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
                className={`text-4xl sm:text-6xl font-normal tracking-tight transition-colors duration-500 shrink-0 ${
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

      {/* Dynamic Contextual Google Review for the Active Step */}
      <div className="mt-8 sm:mt-10">
        <ReviewBlock key={currentReview.id} review={currentReview} />
      </div>
    </div>
  );
};
