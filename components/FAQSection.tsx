"use client";

import React from "react";
import Faqs01 from "@/components/ui/faqs-01";

interface FAQSectionProps {
  onOpenContact?: () => void;
  onOpenGetStarted?: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  onOpenContact,
  onOpenGetStarted,
}) => {
  return (
    <Faqs01
      onOpenContact={onOpenContact}
      onOpenGetStarted={onOpenGetStarted}
    />
  );
};

export default FAQSection;
