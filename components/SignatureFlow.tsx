"use client";

import React from "react";
import Timeline from "@/components/ui/timeline";
import { ArrowRight, ChevronDown } from "lucide-react";

export const SignatureFlow: React.FC<{ onOpenGetStarted?: () => void }> = ({ onOpenGetStarted }) => {
  return (
    <div id="signature-flow" className="relative w-full bg-white">
      {/* Lead-in Section */}
      <section className="flex flex-col items-center justify-center gap-4 px-6 pt-24 pb-14 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold uppercase tracking-wider">
          <span>System architecture · speed-to-lead</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-tight max-w-[20ch]">
          Lead form in. Booked call out.
        </h2>
        <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600">
          Scroll through the automated journey—the timeline pins smoothly, the sequence slides sideways, and each touchpoint activates cleanly.
        </p>
        <div className="mt-3 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-700 font-semibold bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-full">
          <span>Scroll down to inspect</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-emerald-600" />
        </div>
      </section>

      {/* Pinned Horizontal Timeline Section */}
      <Timeline
        title="Speed-to-Lead Rail"
        periodLabel="Instant Webhook → Qualified Deals Pipeline"
        videoUrl="/product-tour/dashboard.mp4"
      />

      {/* Outro Session Reservation Card */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 py-16">
        <div className="grid items-center gap-6 rounded-2xl border border-emerald-200 bg-emerald-50/70 p-7 sm:p-9 lg:grid-cols-[1fr_auto] shadow-sm">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-emerald-800 font-semibold">
              20-minute live production architecture session
            </div>
            <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
              Bring your catalog. Leave with a working path.
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">
              For ₹9, our systems team maps your website or PDF knowledge, walks through the official Meta connection, and shows how your CRM or Google Sheet fits into the flow. The ₹9 is credited back as ₹500 in platform balance after joining.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenGetStarted}
            className="btn-pill-emerald bg-emerald-600 text-white px-7 py-3.5 text-sm font-semibold rounded-full shadow-[0_4px_18px_rgba(16,185,129,0.3)] hover:bg-emerald-700 hover:shadow-[0_6px_24px_rgba(16,185,129,0.45)] hover:-translate-y-0.5 active:translate-y-0 transition-all whitespace-nowrap cursor-pointer flex items-center gap-2"
          >
            <span>Reserve the ₹9 session</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
