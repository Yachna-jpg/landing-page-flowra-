"use client";

import React from "react";
import { Sparkles, MessageSquare, Phone, Database, Calendar, ArrowRight } from "lucide-react";

const FLOW_STEPS = [
  {
    step: "01",
    title: "Meta Lead Form",
    sub: "Ad submitted on Facebook / Instagram",
    accent: "border-t-emerald-500",
    badge: "0s Trigger",
    icon: Sparkles,
  },
  {
    step: "02",
    title: "Instant WhatsApp",
    sub: "Brochure & welcome sent in <6s",
    accent: "border-t-emerald-500",
    badge: "Official Meta API",
    icon: MessageSquare,
  },
  {
    step: "03",
    title: "AI Voice Call",
    sub: "Hinglish call qualifies budget & intent",
    accent: "border-t-purple-500",
    badge: "Sarvam + Gemini",
    icon: Phone,
  },
  {
    step: "04",
    title: "Qualified in CRM",
    sub: "Tagged Hot Lead & assigned to agent",
    accent: "border-t-blue-500",
    badge: "Deals Pipeline",
    icon: Database,
  },
  {
    step: "05",
    title: "Automated Follow-up",
    sub: "Site visit reminder or next-day nudge",
    accent: "border-t-amber-500",
    badge: "24h Loop",
    icon: Calendar,
  },
];

export const SignatureFlow: React.FC<{ onOpenGetStarted?: () => void }> = ({ onOpenGetStarted }) => {
  return (
    <section id="signature-flow" className="w-full max-w-7xl mx-auto px-6 sm:px-12 py-24 border-t border-slate-200 bg-white">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-4">
          <span>System architecture · speed-to-lead</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
          Lead form in. Booked call out.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          See the exact sequence your team can deploy—from lead capture to WhatsApp, voice, CRM, and the next human action.
        </p>
      </div>

      {/* Horizontal Rail */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
        {FLOW_STEPS.map((step, idx) => (
          <div
            key={step.step}
            className={`relative p-5 rounded-2xl bg-slate-50 border border-slate-200 ${step.accent} border-t-[3px] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-slate-400">{step.step}</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-white border border-slate-200 text-slate-600 font-semibold shadow-sm">
                  {step.badge}
                </span>
              </div>
              <h3 className="font-bold text-slate-900 text-base mt-2">{step.title}</h3>
              <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">{step.sub}</p>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-200 flex items-center justify-between text-slate-400">
              <step.icon className="w-4 h-4 text-slate-500" />
              {idx < FLOW_STEPS.length - 1 && (
                <ArrowRight className="w-4 h-4 text-slate-300 hidden lg:block" />
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 grid items-center gap-6 rounded-2xl border border-emerald-200 bg-emerald-50/70 p-7 sm:p-9 lg:grid-cols-[1fr_auto] shadow-sm">
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
  );
};
