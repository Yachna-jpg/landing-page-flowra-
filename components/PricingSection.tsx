"use client";

import React from "react";
import { PricingSection as PricingUi, Plan } from "@/components/ui/pricing";

interface PricingSectionProps {
  onOpenGetStarted: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  onOpenGetStarted,
}) => {
  const plans: Plan[] = [
    {
      id: "starter",
      name: "Starter",
      info: "For growing businesses automating WhatsApp and web lead follow-ups.",
      price: {
        monthly: 7999,
        yearly: Math.round(7999 * 12 * 0.8), // 20% discount on yearly
      },
      features: [
        {
          text: "1,000 monthly active conversations",
          tooltip: "Inbound and outbound automated chats across WhatsApp & Web",
        },
        {
          text: "Official Meta WhatsApp Cloud API integration",
          tooltip: "Direct green-tick verified Meta Cloud API connection",
        },
        { text: "Website chatbot lead capture widget" },
        { text: "Shared team inbox (up to 3 agents)" },
        { text: "Google Sheets & instant webhook sync" },
        { text: "Basic lead qualification analytics" },
      ],
      btn: {
        text: "Get started",
        onClick: onOpenGetStarted,
      },
    },
    {
      highlighted: true,
      id: "growth",
      name: "Growth",
      info: "For sales teams deploying conversational AI Voice and WhatsApp qualification.",
      price: {
        monthly: 19999,
        yearly: Math.round(19999 * 12 * 0.8), // 20% discount on yearly
      },
      features: [
        {
          text: "5,000 monthly active conversations",
          tooltip: "Scalable capacity for high-velocity marketing campaigns",
        },
        {
          text: "500 AI Voice minutes (Hindi, Hinglish, English)",
          tooltip: "Ultra-low latency sub-700ms conversational phone agent",
        },
        { text: "Visual drag-and-drop workflow builder" },
        { text: "2-way CRM sync (HubSpot, Zoho, LeadSquared)" },
        { text: "Multi-agent shared inbox (up to 10 agents)" },
        { text: "Lead scoring & instant hot lead WhatsApp alerts" },
        { text: "Team roles & 24/7 priority WhatsApp support" },
      ],
      btn: {
        text: "Start free trial",
        onClick: onOpenGetStarted,
      },
    },
    {
      id: "enterprise",
      name: "Enterprise",
      info: "For high-volume real estate, clinics, and national lead generation brands.",
      price: {
        monthly: "Custom pricing",
        yearly: "Custom pricing",
      },
      features: [
        { text: "Unlimited conversations & scalable voice minutes" },
        {
          text: "Custom Voice Clones (Your brand voice & tone)",
          tooltip: "Proprietary voice clone trained on your best sales reps",
        },
        { text: "Dedicated database & custom LLM fine-tuning" },
        { text: "Full telephony SIP trunk / Twilio / Exotel integration" },
        { text: "Custom API webhooks & ERP integrations" },
        { text: "Dedicated account architect & 99.9% SLA guarantee" },
      ],
      btn: {
        text: "Contact sales",
        onClick: onOpenGetStarted,
      },
    },
  ];

  return (
    <div id="pricing" className="w-full bg-[#FAFAFA] py-20 sm:py-28 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <PricingUi
          heading="Plans that grow with you"
          description="Start free, upgrade when you need more lead capacity and voice automation."
          plans={plans}
          onOpenGetStarted={onOpenGetStarted}
        />
      </div>
    </div>
  );
};

export default PricingSection;
