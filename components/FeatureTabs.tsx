"use client";

import React from "react";
import { FaceScreenState } from "./RobotMascot";

export interface FeatureItem {
  id: string;
  name: string;
  shortLine: string;
  faceState: FaceScreenState;
}

export const FEATURES_DATA: FeatureItem[] = [
  {
    id: "whatsapp",
    name: "WhatsApp Chatbot",
    shortLine: "Answers customers on WhatsApp, any time.",
    faceState: "whatsapp",
  },
  {
    id: "website",
    name: "Website Chatbot",
    shortLine: "Add a chat helper to your website.",
    faceState: "website",
  },
  {
    id: "voice",
    name: "AI Voice Calls",
    shortLine: "Calls your leads and talks like a real person in their language.",
    faceState: "voice",
  },
];

interface FeatureTabsProps {
  activeIndex: number;
  onSelectFeature?: (index: number) => void;
}

export const FeatureTabs: React.FC<FeatureTabsProps> = ({
  activeIndex,
  onSelectFeature,
}) => {
  const currentFeature = FEATURES_DATA[activeIndex] || FEATURES_DATA[0];

  return (
    <div className="w-full max-w-xl flex items-start gap-8 sm:gap-10">
      {/* Three dots at the left edge */}
      <div className="flex flex-col space-y-4 pt-3 shrink-0">
        {FEATURES_DATA.map((_, idx) => (
          <button
            key={idx}
            onClick={() => onSelectFeature && onSelectFeature(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-500 cursor-pointer ${
              idx === activeIndex
                ? "bg-slate-900 scale-125 shadow-md"
                : "bg-slate-300 hover:bg-slate-400"
            }`}
            aria-label={`Go to feature ${idx + 1}`}
          />
        ))}
      </div>

      {/* Feature Content */}
      <div className="flex-1 flex flex-col justify-center">
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.08] transition-all duration-500">
          {currentFeature.name}
        </h2>

        <p className="mt-6 text-xl sm:text-2xl text-slate-600 font-normal leading-relaxed max-w-lg transition-all duration-500">
          {currentFeature.shortLine}
        </p>
      </div>
    </div>
  );
};
