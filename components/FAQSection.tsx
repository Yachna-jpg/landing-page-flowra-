"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

const FAQS: FAQItem[] = [
  {
    q: "How does Flowra connect with our existing WhatsApp number?",
    a: "Flowra uses the official Meta WhatsApp Business Cloud API. You can either onboard your current active business phone number (by migrating it to Cloud API) or deploy a fresh virtual number in under 5 minutes without losing existing chat backups.",
  },
  {
    q: "Can the AI voice calls speak in Hindi or Hinglish?",
    a: "Yes. Flowra's voice engine is natively trained on Indian accents including conversational Hinglish, North Indian Hindi, Tamil, Telugu, Kannada, and Marathi. You can choose tone presets from warm advisor to professional corporate demo.",
  },
  {
    q: "Does Flowra hallucinate pricing or terms?",
    a: "No. Flowra is strictly grounded on your uploaded knowledge base—brochures, PDFs, website URLs, and spreadsheets. If an inquiry falls outside your approved documentation, the assistant gracefully offers a human callback or transfers to a live agent.",
  },
  {
    q: "How does human agent handoff work?",
    a: "When a customer asks for a live human, or when the AI detects complex requirements, the bot pauses automation immediately, tags the thread as 'Needs Reply', and notifies your team on the Shared Inbox and via instant WhatsApp alert.",
  },
  {
    q: "Which CRMs does Flowra integrate with?",
    a: "Flowra features native bi-directional sync with HubSpot, Zoho, LeadSquared, Salesforce, and Google Sheets. Every conversation, call recording, and qualification tag writes directly back to your pipeline stages in real time.",
  },
  {
    q: "What is the ₹9 architecture session?",
    a: "It is a 20-minute 1-on-1 production setup call with a systems architect. We map your specific catalog or lead sources, test your WhatsApp connection, and show you the exact automated flow live. The ₹9 is credited back as ₹500 in your platform wallet upon joining.",
  },
];

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="w-full max-w-5xl mx-auto px-6 sm:px-12 py-24 border-t border-slate-200 bg-white">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-4">
          <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
          <span>Got Questions?</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Everything you need to know about official WhatsApp setup, regional voice calling, and team rollout.
        </p>
      </div>

      <div className="space-y-3.5">
        {FAQS.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className="rounded-xl bg-slate-50 border border-slate-200 overflow-hidden transition-all shadow-xs"
            >
              <button
                type="button"
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-100/70 transition-colors"
              >
                <span className="font-semibold text-slate-900 text-base sm:text-lg">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ${
                    isOpen ? "rotate-180 text-emerald-600" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-200/80 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
