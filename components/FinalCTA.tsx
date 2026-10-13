"use client";

import React from "react";

interface FinalCTAProps {
  onOpenGetStarted: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenGetStarted }) => {
  return (
    <div className="w-full max-w-xl flex flex-col justify-center text-left">
      <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.08]">
        Build the path your next lead will take.
      </h2>

      <p className="mt-6 text-xl sm:text-2xl text-slate-600 font-normal leading-relaxed max-w-lg">
        Reserve a 20-minute live architecture session. We will map your knowledge, channels, and CRM flow with you.
      </p>

      <div className="mt-10">
        <button
          onClick={onOpenGetStarted}
          className="btn-pill-black px-9 py-4 text-base font-semibold cursor-pointer"
        >
          Book the ₹9 live architecture session
        </button>
      </div>
    </div>
  );
};
