"use client";

import React from "react";

interface FinalCTAProps {
  onOpenGetStarted: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenGetStarted }) => {
  return (
    <div className="w-full max-w-xl flex flex-col justify-center text-left">
      {/* Very large bold pure white heading */}
      <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
        Let Flowora talk to your leads.
      </h2>

      {/* One short line in light grey >= 18px */}
      <p className="mt-6 text-xl sm:text-2xl text-zinc-400 font-normal leading-relaxed max-w-lg">
        Deploy your autonomous AI team today and never let another opportunity slip away.
      </p>

      {/* One button: white pill shape, black text, soft glow when hovering */}
      <div className="mt-10">
        <button
          onClick={onOpenGetStarted}
          className="btn-pill-white px-9 py-4 text-base font-semibold cursor-pointer shadow-[0_0_25px_rgba(255,255,255,0.25)]"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};
