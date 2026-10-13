"use client";

import React, { useState } from "react";
import { Check, Sparkles, Zap } from "lucide-react";

interface PricingSectionProps {
  onOpenGetStarted: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  onOpenGetStarted,
}) => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Starter",
      monthlyPrice: 9999,
      annualPrice: 7999,
      description: "Ideal for growing businesses testing WhatsApp chatbot and lead follow-up automation.",
      isPopular: false,
      ctaText: "Start Starter Plan",
      features: [
        "1,000 monthly active conversations",
        "Official Meta WhatsApp Cloud API integration",
        "Website Chatbot Widget",
        "Shared Team Inbox (up to 3 agents)",
        "Google Sheets & Webhook integrations",
        "Email support",
      ],
    },
    {
      name: "Growth",
      monthlyPrice: 24999,
      annualPrice: 19999,
      description: "Everything in Starter, plus AI Voice calling and custom automated workflow rails.",
      isPopular: true,
      ctaText: "Start Growth Plan",
      features: [
        "5,000 monthly active conversations",
        "500 AI Voice minutes (Hindi, Hinglish, English)",
        "Visual Drag & Drop Workflow Builder",
        "CRM Sync (HubSpot, LeadSquared, Zoho)",
        "Multi-agent Shared Inbox (up to 10 agents)",
        "Lead Scoring & Hot Lead WhatsApp Alerts",
        "Priority 24/7 WhatsApp support",
      ],
    },
    {
      name: "Enterprise",
      monthlyPrice: 59999,
      annualPrice: 47999,
      description: "Custom scale for large call centers, real estate developers, and national brands.",
      isPopular: false,
      ctaText: "Talk to Systems Architect",
      features: [
        "Unlimited conversations & scalable voice minutes",
        "Custom Voice Clones (Your brand voice & tone)",
        "Dedicated Database & Custom LLM Fine-Tuning",
        "Full Telephony SIP Trunk / Twilio / Exotel integration",
        "Custom API Webhooks & ERP integrations",
        "Dedicated Account Architect & SLA guarantee",
      ],
    },
  ];

  return (
    <section id="pricing" className="w-full max-w-7xl mx-auto px-6 sm:px-12 py-24 border-t border-slate-200 bg-[#F8FAFC]">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-4">
          <Zap className="w-3.5 h-3.5 text-emerald-600" />
          <span>Transparent Pricing</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
          Scale your pipeline, not your overhead
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Choose a plan built for your lead volume. All plans include official WhatsApp Meta verification and instant setup.
        </p>

        {/* Annual / Monthly Toggle */}
        <div className="mt-10 inline-flex items-center gap-3 p-1.5 rounded-full bg-slate-200/80 border border-slate-300/50 shadow-inner">
          <button
            type="button"
            onClick={() => setIsAnnual(false)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
              !isAnnual
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Monthly
          </button>
          <button
            type="button"
            onClick={() => setIsAnnual(true)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
              isAnnual
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/30"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <span>Annual</span>
            <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold uppercase ${
              isAnnual ? "bg-white/20 text-white" : "bg-emerald-100 text-emerald-800"
            }`}>
              Save 20%
            </span>
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {plans.map((plan) => {
          const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;

          return (
            <div
              key={plan.name}
              className={`relative flex flex-col justify-between p-8 sm:p-9 rounded-2xl bg-white transition-all duration-300 shadow-sm ${
                plan.isPopular
                  ? "border-2 border-emerald-500 shadow-xl shadow-emerald-500/10 -translate-y-1.5"
                  : "border border-slate-200 hover:border-slate-300 hover:shadow-md"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-emerald-600 text-white text-xs font-bold tracking-wide uppercase flex items-center gap-1 shadow-md">
                  <Sparkles className="w-3 h-3 fill-current" />
                  Most Popular
                </div>
              )}

              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-slate-900">{plan.name}</h3>
                </div>

                <p className="mt-3 text-sm text-slate-500 leading-relaxed min-h-[40px]">
                  {plan.description}
                </p>

                {/* Price Display */}
                <div className="mt-8 flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-sans">
                    ₹{price.toLocaleString("en-IN")}
                  </span>
                  <span className="text-sm font-normal text-slate-500">
                    / month
                  </span>
                </div>
                <div className="text-xs text-slate-400 mt-1 font-medium">
                  {isAnnual ? "Billed annually" : "Billed monthly"}
                </div>

                {/* Features list */}
                <ul className="mt-8 space-y-3.5 text-sm text-slate-700">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="mt-10 pt-6 border-t border-slate-100">
                <button
                  type="button"
                  onClick={onOpenGetStarted}
                  className={`w-full py-3.5 px-6 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                    plan.isPopular
                      ? "btn-pill-emerald bg-emerald-600 text-white hover:bg-emerald-700 shadow-md"
                      : "bg-slate-900 text-white hover:bg-slate-800 shadow-sm"
                  }`}
                >
                  {plan.ctaText}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
