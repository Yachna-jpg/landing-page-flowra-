"use client";

import React, { useState } from "react";
import { GradientTiers, Plan, GradientTierNote } from "@/components/ui/gradient-tiers";

interface PricingSectionProps {
  onOpenGetStarted: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  onOpenGetStarted,
}) => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans: Plan[] = [
    {
      id: "starter",
      name: "Starter",
      tagline: "For growing businesses automating WhatsApp and web lead follow-ups.",
      cta: "Get started",
      features: [
        "1,000 monthly active conversations",
        "Official Meta WhatsApp Cloud API integration",
        "Website chatbot lead capture widget",
        "Shared team inbox (up to 3 agents)",
        "Google Sheets & instant webhook sync",
        "Basic lead qualification analytics",
      ],
      onCtaClick: onOpenGetStarted,
    },
    {
      id: "growth",
      name: "Growth",
      tagline: "For sales teams deploying conversational AI Voice and WhatsApp qualification.",
      cta: "Start free trial",
      badge: "Popular",
      inherits: "Starter",
      features: [
        "5,000 monthly active conversations",
        "500 AI Voice minutes (Hindi, Hinglish, English)",
        "Visual drag-and-drop workflow builder",
        "2-way CRM sync (HubSpot, Zoho, LeadSquared)",
        "Multi-agent shared inbox (up to 10 agents)",
        "Lead scoring & instant hot lead WhatsApp alerts",
        "Team roles & 24/7 priority WhatsApp support",
      ],
      onCtaClick: onOpenGetStarted,
    },
    {
      id: "enterprise",
      name: "Enterprise",
      tagline: "For high-volume real estate, clinics, and national lead generation brands.",
      cta: "Contact sales",
      inherits: "Growth",
      features: [
        "Unlimited conversations & scalable voice minutes",
        "Custom Voice Clones (Your brand voice & tone)",
        "Dedicated database & custom LLM fine-tuning",
        "Full telephony SIP trunk / Twilio / Exotel integration",
        "Custom API webhooks & ERP integrations",
        "Dedicated account architect & 99.9% SLA guarantee",
      ],
      footnote: "Volume discounts available for annual billing.",
      onCtaClick: onOpenGetStarted,
    },
  ];

  const notes: GradientTierNote[] = [
    {
      price: isAnnual ? "₹7,999" : "₹9,999",
      priceNote: isAnnual ? "/ month (billed annually)" : "/ month (billed monthly)",
    },
    {
      price: isAnnual ? "₹19,999" : "₹24,999",
      priceNote: isAnnual ? "/ month (billed annually)" : "/ month (billed monthly)",
    },
    {
      price: "Custom pricing",
      priceNote: "talk to sales",
      footnote: "Volume discounts available for annual billing.",
    },
  ];

  return (
    <div id="pricing" className="w-full bg-[#FAFAFA] py-20 sm:py-28 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <GradientTiers
          eyebrow="PRICING"
          heading="Plans that grow with you"
          subheading="Start free, upgrade when you need more lead capacity and voice automation."
          plans={plans}
          notes={notes}
          variant="Tinted"
          onOpenGetStarted={onOpenGetStarted}
          isAnnual={isAnnual}
          onToggleAnnual={setIsAnnual}
        />
      </div>
    </div>
  );
};

export default PricingSection;
