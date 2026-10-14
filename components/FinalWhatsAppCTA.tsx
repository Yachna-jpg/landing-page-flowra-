"use client";

import React from "react";
import { MessageCircle, ArrowRight, ShieldCheck } from "lucide-react";

interface FinalWhatsAppCTAProps {
  onOpenGetStarted: () => void;
}

export const FinalWhatsAppCTA: React.FC<FinalWhatsAppCTAProps> = ({
  onOpenGetStarted,
}) => {
  return (
    <section className="relative w-full max-w-5xl mx-auto px-6 sm:px-12 py-16 sm:py-24 overflow-hidden bg-transparent">
      {/* Content written directly on the page, no card box, no borders */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Live Architecture Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-xs font-semibold tracking-wide mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>Live Architecture Onboarding</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold tracking-tight text-slate-900 leading-tight max-w-2xl mx-auto">
          Make your next lead impossible to lose.
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-lg mx-auto leading-relaxed">
          In 20 minutes, map your knowledge, WhatsApp, voice, and CRM flow. Reserve for ₹9; get ₹500 in platform balance after joining.
        </p>

        {/* Premium CTA Button */}
        <div className="mt-8 flex items-center justify-center">
          <button
            type="button"
            onClick={onOpenGetStarted}
            className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-slate-950 hover:bg-slate-800 text-white text-sm font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
          >
            <span>Reserve the ₹9 live architecture session</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Trust Badges Row */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-slate-500">
          <span className="flex items-center gap-1.5 font-medium text-slate-700">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            Official Meta WhatsApp Cloud API
          </span>
          <span className="text-slate-300 select-none">•</span>
          <span>No credit card required</span>
          <span className="text-slate-300 select-none">•</span>
          <span>Go live in 5 minutes</span>
        </div>
      </div>
    </section>
  );
};
