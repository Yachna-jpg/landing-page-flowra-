"use client";

import React from "react";
import FaqSection, { FaqData } from "@/components/ui/habit-faq-scroller";

const FLOWRA_FAQ_DATA: FaqData = {
  mainTitle: "Frequently Asked Questions",
  mainSubtitle:
    "Have questions? We've got answers. If you can't find what you're looking for, feel free to contact us.",
  rows: [
    {
      id: "row1",
      speed: "50s",
      direction: "left",
      faqItems: [
        {
          id: "f1",
          question: "How does Flowra connect with our WhatsApp number?",
          answer:
            "Flowra connects via the official Meta WhatsApp Business Cloud API. You can keep your active business number or launch a new virtual line in 5 minutes with zero lost chats.",
        },
        {
          id: "f2",
          question: "Is our customer data private and secure?",
          answer:
            "Absolutely. We use enterprise-grade 256-bit encryption and isolated database partitions to protect your customer data. You retain 100% data ownership.",
        },
        {
          id: "f3",
          question: "Can the AI voice agent speak in Hindi or Hinglish?",
          answer:
            "Yes! Flowra is natively trained on Indian regional accents, including conversational Hinglish, North Indian Hindi, Tamil, Telugu, and English with sub-second latency.",
        },
        {
          id: "f4",
          question: "Does Flowra hallucinate pricing or terms?",
          answer:
            "Never. Flowra is strictly grounded on your catalog, brochures, and documentation. Queries outside approved materials trigger an immediate human callback offer.",
        },
      ],
    },
    {
      id: "row2",
      speed: "45s",
      direction: "right",
      faqItems: [
        {
          id: "f5",
          question: "Can I use Flowra with my team and existing CRM?",
          answer:
            "Yes! Flowra features native 2-way real-time sync with HubSpot, Zoho, LeadSquared, Salesforce, and Google Sheets. Conversations and tags write directly to your pipeline.",
        },
        {
          id: "f6",
          question: "How does live human agent handoff work?",
          answer:
            "When a buyer asks for a real human or asks complex queries, Flowra pauses automation instantly and alerts your team via Shared Inbox and priority WhatsApp notification.",
        },
        {
          id: "f7",
          question: "What is the ₹9 architecture session?",
          answer:
            "A 20-minute 1-on-1 production setup call with a systems architect. We connect your WhatsApp, test voice live, and credit ₹500 directly into your platform wallet.",
        },
        {
          id: "f8",
          question: "What happens if a lead calls after office hours?",
          answer:
            "Flowra answers 24/7 within 2 seconds. The AI qualifies the prospect, answers product questions, and schedules appointments right on your sales calendar.",
        },
      ],
    },
    {
      id: "row3",
      speed: "48s",
      direction: "right",
      faqItems: [
        {
          id: "f9",
          question: "Is there a free trial or credit package?",
          answer:
            "Yes, you can test Flowra with 1,000 complimentary trial credits to run live WhatsApp chats and voice calls before committing to any paid subscription.",
        },
        {
          id: "f10",
          question: "How fast can our sales team go live?",
          answer:
            "Most teams go live in under 15 minutes. Upload your brochures or FAQs, verify your Meta WhatsApp account, and your AI team starts qualifying leads immediately.",
        },
        {
          id: "f11",
          question: "Can Flowra run automated outbound calling?",
          answer:
            "Yes! You can trigger automated AI calls to inbound web leads within 60 seconds of form submission or re-engage cold CRM contacts with scheduled follow-ups.",
        },
        {
          id: "f12",
          question: "How do I cancel or upgrade my subscription?",
          answer:
            "You can upgrade, downgrade, or cancel your subscription anytime directly from your dashboard billing settings without long-term contracts or penalties.",
        },
      ],
    },
  ],
};

export const FAQSection: React.FC = () => {
  return (
    <section
      id="faq"
      className="relative w-full border-t border-slate-200/80 bg-gradient-to-b from-white via-[#EDF2FF] to-[#CBD8FE] overflow-hidden"
    >
      <FaqSection data={FLOWRA_FAQ_DATA} />
    </section>
  );
};
