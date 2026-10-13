"use client";

import React from "react";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const FLOWRA_FAQS = [
  {
    q: "How does Flowra connect with our WhatsApp number?",
    a: "Flowra connects via the official Meta WhatsApp Business Cloud API. You can connect your existing business number or spin up a new verified virtual line in 5 minutes with zero interrupted customer chats.",
  },
  {
    q: "Is our customer data private and secure?",
    a: "Absolutely. We use enterprise-grade 256-bit AES encryption and isolated database partitions to protect your customer interactions. Flowra never trains public models on your proprietary business conversations.",
  },
  {
    q: "Can the AI voice agent speak in Hindi or Hinglish?",
    a: "Yes! Flowra is natively trained on Indian regional cadences, including natural conversational Hinglish, North Indian Hindi, Tamil, Telugu, and English with sub-second voice latency.",
  },
  {
    q: "Does Flowra hallucinate pricing, inventory, or terms?",
    a: "Never. Flowra is strictly grounded on your verified catalog, pricing decks, and FAQ documents. Any query outside approved materials triggers an instant, polite human callback offer.",
  },
  {
    q: "Can I use Flowra with my team and existing CRM?",
    a: "Yes. Flowra features native 2-way real-time sync with HubSpot, Zoho, LeadSquared, Salesforce, and Google Sheets. Conversations, qualification tags, and appointments write directly to your pipeline.",
  },
  {
    q: "How does live human agent handoff work?",
    a: "When a prospect requests a real human or poses high-complexity questions, Flowra pauses automation instantly and notifies your team via the Shared Inbox and a priority WhatsApp alert.",
  },
  {
    q: "What is the ₹9 architecture session?",
    a: "A 20-minute 1-on-1 production architecture setup call with an engineering specialist. We connect your WhatsApp, calibrate your voice agent live, and credit ₹500 directly into your platform wallet.",
  },
  {
    q: "What happens if a lead arrives after office hours?",
    a: "Flowra answers 24/7 within 15 seconds. The AI qualifies the prospect, answers product questions, and schedules appointments right on your sales calendar while your team sleeps.",
  },
  {
    q: "How fast can our sales team go live?",
    a: "Most teams go live in under 15 minutes. Upload your PDF brochures or FAQs, verify your Meta WhatsApp account, and your AI team starts qualifying inbound leads immediately.",
  },
  {
    q: "Can Flowra run automated outbound calling?",
    a: "Yes! You can trigger automated AI calls to inbound web leads within 60 seconds of form submission or re-engage cold CRM contacts with scheduled follow-ups.",
  },
];

interface Faqs01Props {
  defaultValue?: string;
  onOpenContact?: () => void;
  onOpenGetStarted?: () => void;
}

export default function Faqs01({
  defaultValue = "item-0",
  onOpenContact,
  onOpenGetStarted,
}: Faqs01Props) {
  return (
    <section id="faq" className="bg-[#FAFAFA] py-20 sm:py-28 border-t border-slate-200/80">
      <div className="mx-auto max-w-3xl px-6 sm:px-10">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-2xs">
            <Sparkles className="size-3 text-amber-500" />
            FAQ
          </span>
          <h2
            className="text-balance font-light tracking-tight text-slate-900"
            style={{
              fontSize: "clamp(1.85rem, 4vw, 2.75rem)",
              letterSpacing: "-0.03em",
              lineHeight: 1.08,
            }}
          >
            Frequently asked questions
          </h2>
          <p className="max-w-xl text-balance text-slate-600 text-sm sm:text-base">
            Quick answers to the questions we get the most. Can&apos;t find
            yours? Write to{" "}
            <a
              href="mailto:founders@flowra.ai"
              className="font-medium text-slate-900 underline underline-offset-4 hover:text-emerald-700"
            >
              founders@flowra.ai
            </a>
            .
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="mt-12 divide-y divide-slate-200 border-t border-b border-slate-200"
          defaultValue={defaultValue}
        >
          {FLOWRA_FAQS.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`} className="border-slate-200">
              <AccordionTrigger className="text-left text-sm sm:text-base font-medium text-slate-900 hover:text-emerald-700 hover:no-underline py-4">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-xs sm:text-sm leading-relaxed pb-4">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-dashed border-slate-300 bg-white p-5 sm:flex-row shadow-2xs">
          <div className="flex items-center gap-3">
            <span className="grid size-9 shrink-0 place-items-center rounded-full bg-slate-900 text-white">
              <MessageCircle className="size-4" />
            </span>
            <div className="flex flex-col leading-tight">
              <p className="text-sm font-medium text-slate-900">
                Still have a question?
              </p>
              <p className="text-xs text-slate-500">
                We reply within four business hours.
              </p>
            </div>
          </div>
          <Button
            size="sm"
            onClick={onOpenContact || onOpenGetStarted}
            className="rounded-full bg-slate-900 hover:bg-slate-800 text-white px-5 cursor-pointer"
          >
            Ask us anything
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
