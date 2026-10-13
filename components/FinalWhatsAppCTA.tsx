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
    <section className="relative w-full max-w-7xl mx-auto px-6 sm:px-12 py-14 sm:py-18 border-t border-slate-200/70 overflow-hidden bg-[#FAFAFA]">
      {/* Background soft ambient radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-emerald-500/[0.04] blur-[100px] pointer-events-none rounded-full" />

      {/* Compact Premium Bento Card */}
      <div className="relative z-10 max-w-3xl mx-auto p-7 sm:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#111622] via-[#0E131C] to-[#0A0D13] border border-slate-800/80 text-center shadow-[0_16px_40px_rgba(15,23,42,0.14),inset_0_1px_0_rgba(255,255,255,0.08)]">
        {/* Subtle top spotlight sheen inside the card */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[340px] h-[120px] bg-emerald-500/[0.09] blur-[60px] rounded-full pointer-events-none" />

        {/* Live Architecture Tag */}
        <div className="relative inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-[11px] font-medium tracking-wide mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Live Architecture Onboarding</span>
        </div>

        {/* Compact, Refined Headline */}
        <h2 className="relative text-2xl sm:text-3xl md:text-[34px] font-medium tracking-tight text-white leading-snug max-w-xl mx-auto">
          Make your next lead impossible to lose.
        </h2>

        {/* Short, high-value subtitle */}
        <p className="relative mt-2.5 text-xs sm:text-[14px] text-slate-300/85 max-w-lg mx-auto leading-relaxed">
          In 20 minutes, map your knowledge, WhatsApp, voice, and CRM flow. Reserve for ₹9; get ₹500 in platform balance after joining.
        </p>

        {/* Clean, Premium CTA Button */}
        <div className="relative mt-6 flex items-center justify-center">
          <button
            type="button"
            onClick={onOpenGetStarted}
            className="group inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-white hover:bg-slate-100 text-slate-950 text-xs sm:text-sm font-semibold shadow-[0_2px_14px_rgba(255,255,255,0.16)] hover:shadow-[0_4px_22px_rgba(255,255,255,0.26)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
          >
            <span>Reserve the ₹9 live architecture session</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Compact Trust Badges Row */}
        <div className="relative mt-5 pt-4 border-t border-slate-800/60 flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-[11px] text-slate-400">
          <span className="flex items-center gap-1.5 text-slate-300">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            Official Meta WhatsApp Cloud API
          </span>
          <span className="text-slate-600 select-none">•</span>
          <span>No credit card required</span>
          <span className="text-slate-600 select-none">•</span>
          <span>Go live in 5 minutes</span>
        </div>
      </div>
    </section>
  );
};
