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
          className="btn-pill-black bg-slate-900 text-white px-9 py-4 text-base font-semibold rounded-full shadow-[0_4px_14px_rgba(15,23,42,0.18)] hover:bg-slate-800 hover:shadow-[0_8px_24px_rgba(15,23,42,0.28)] hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
        >
          Book the ₹9 live architecture session
        </button>
      </div>
    </div>
  );
};
