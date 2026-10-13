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
    <section className="relative w-full max-w-7xl mx-auto px-6 sm:px-12 py-28 border-t border-slate-200 overflow-hidden bg-[#FAFAFA]">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/[0.06] blur-[140px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-4xl mx-auto p-10 sm:p-16 rounded-3xl bg-[#0F172A] border border-slate-800 text-center shadow-[0_20px_60px_rgba(15,23,42,0.18)]">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6">
          <MessageCircle className="w-4 h-4 text-emerald-400" />
          <span>Live architecture onboarding</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
          Make your next lead impossible to lose.
          <br className="hidden sm:inline" /> Start with the architecture.
        </h2>

        <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          In 20 minutes, connect the knowledge, WhatsApp, voice, and CRM path your team actually needs. Reserve the session for ₹9; receive ₹500 in platform balance after joining.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
          <button
            type="button"
            onClick={onOpenGetStarted}
            className="btn-pill-emerald bg-emerald-500 text-white px-10 py-4 text-base font-semibold rounded-full shadow-[0_4px_25px_rgba(16,185,129,0.35)] hover:bg-emerald-600 hover:shadow-[0_8px_30px_rgba(16,185,129,0.5)] hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer flex items-center gap-2.5"
          >
            <span>Reserve the ₹9 live architecture session</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Official Meta WhatsApp Business Cloud API
          </span>
          <span>•</span>
          <span>No credit card required</span>
          <span>•</span>
          <span>Go live in 5 minutes</span>
        </div>
      </div>
    </section>
  );
};
