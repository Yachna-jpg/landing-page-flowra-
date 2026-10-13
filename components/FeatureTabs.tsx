"use client";

import React from "react";
import { FaceScreenState } from "./RobotMascot";
import { ReviewBlock, ReviewData } from "./ReviewBlock";

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

const FEATURE_REVIEWS: Record<string, Omit<ReviewData, "id">> = {
  whatsapp: {
    rating: 5.0,
    headline: "Recovered 38% of dropped WhatsApp leads on day one!",
    quote: "Our leads message at 11 PM or 2 AM. Flowra handles product specs, answers price doubts in fluent Hindi and English, and routes high-intent buyers to our WhatsApp Web instantly.",
    author: "Pooja Sundaram",
    role: "Head of Growth, ZeptoMart D2C (Bengaluru)",
    avatar: "/indian_reviewer_pooja.jpg",
  },
  website: {
    rating: 4.5,
    headline: "Converted 3x more website visitors into booked meetings!",
    quote: "Visitors used to leave our landing page without filling forms. Flowra’s on-site widget chats with them, answers security questions, and schedules calendar demos before they exit.",
    author: "Vikramaditya Rao",
    role: "Co-Founder & CEO, ScaleBridge SaaS (Hyderabad)",
    avatar: "/indian_reviewer_vikram.jpg",
  },
  voice: {
    rating: 5.0,
    headline: "0 dropped leads — calls every new Meta inquiry in 15 seconds!",
    quote: "Human telecallers used to take 3 to 5 hours to call back. Flowra dials immediately, speaks natural Indian Hinglish, qualifies budget, and warm transfers hot buyers to our desk.",
    author: "Aditya Singhal",
    role: "VP Revenue & Sales, PropLead India (Mumbai)",
    avatar: "/indian_reviewer_aditya.jpg",
  },
};

// Official WhatsApp Icon SVG (Canonical brand green with white phone receiver)
const WhatsAppOfficialIcon = () => (
  <svg
    viewBox="0 0 32 32"
    className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 shrink-0 drop-shadow-sm"
  >
    <path
      fill="#25D366"
      d="M16 2C8.27 2 2 8.27 2 16c0 2.64.73 5.12 2 7.24L2 30l6.96-1.96A13.92 13.92 0 0 0 16 30c7.73 0 14-6.27 14-14S23.73 2 16 2z"
    />
    <path
      fill="#FFFFFF"
      d="M22.84 19.34c-.38-.19-2.22-1.1-2.56-1.22-.35-.13-.6-.19-.85.19-.25.38-.97 1.22-1.19 1.47-.22.25-.44.28-.82.09-.38-.19-1.61-.59-3.07-1.89-1.14-1.02-1.9-2.27-2.13-2.65-.22-.38-.02-.59.17-.77.17-.17.38-.44.57-.66.19-.22.25-.38.38-.63.13-.25.06-.47-.03-.66-.09-.19-.85-2.06-1.17-2.81-.31-.75-.63-.66-.85-.66h-.73c-.25 0-.66.09-1.01.47-.35.38-1.33 1.3-1.33 3.16s1.36 3.67 1.55 3.92c.19.25 2.67 4.09 6.47 5.73.9.39 1.61.63 2.16.8.91.29 1.73.25 2.39.15.73-.11 2.22-.91 2.53-1.79.32-.88.32-1.63.22-1.79-.09-.16-.35-.25-.73-.44z"
    />
  </svg>
);

const WebsiteIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 shrink-0 text-slate-800"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </svg>
);

const VoiceIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 shrink-0 text-slate-800"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

interface FeatureTabsProps {
  activeIndex: number;
  onSelectFeature?: (index: number) => void;
}

export const FeatureTabs: React.FC<FeatureTabsProps> = ({
  activeIndex,
  onSelectFeature,
}) => {
  const currentFeature = FEATURES_DATA[activeIndex] || FEATURES_DATA[0];
  const currentReview = FEATURE_REVIEWS[currentFeature.id] || FEATURE_REVIEWS.whatsapp;

  return (
    <div className="w-full max-w-xl flex items-start gap-6 sm:gap-9">
      {/* Three dots at the left edge */}
      <div className="flex flex-col space-y-4 pt-2 shrink-0">
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
        {/* Title with icon strictly in a single line */}
        <div className="flex items-center gap-3">
          {currentFeature.id === "whatsapp" && <WhatsAppOfficialIcon />}
          {currentFeature.id === "website" && <WebsiteIcon />}
          {currentFeature.id === "voice" && <VoiceIcon />}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-normal tracking-tight text-slate-900 leading-tight transition-all duration-500 whitespace-nowrap">
            {currentFeature.name}
          </h2>
        </div>

        <p className="mt-4 sm:mt-5 text-base sm:text-lg lg:text-xl text-slate-600 font-normal leading-relaxed max-w-lg transition-all duration-500">
          {currentFeature.shortLine}
        </p>

        {/* Dynamic Contextual Google Review for This Feature */}
        <div className="mt-8 sm:mt-10">
          <ReviewBlock
            key={currentFeature.id}
            review={{
              id: currentFeature.id,
              ...currentReview,
            }}
          />
        </div>
      </div>
    </div>
  );
};
