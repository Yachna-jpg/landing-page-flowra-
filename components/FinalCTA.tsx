import React from "react";
import { ReviewBlock } from "./ReviewBlock";

interface FinalCTAProps {
  onOpenGetStarted: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenGetStarted }) => {
  return (
    <div className="w-full max-w-xl flex flex-col justify-center text-left">
      <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-normal tracking-tight text-slate-900 leading-[1.15]">
        Build the path your next lead will take.
      </h2>

      <p className="mt-3.5 text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-lg">
        Reserve a 20-minute live architecture session. We will map your knowledge, channels, and CRM flow with you.
      </p>

      <div className="mt-5 sm:mt-6">
        <button
          onClick={onOpenGetStarted}
          className="btn-pill-black bg-slate-900 text-white px-7 py-3 text-sm sm:text-base font-semibold rounded-full shadow-[0_4px_14px_rgba(15,23,42,0.18)] hover:bg-slate-800 hover:shadow-[0_8px_24px_rgba(15,23,42,0.28)] hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
        >
          Book the ₹9 live architecture session
        </button>
      </div>

      {/* Google Review for Final Stage */}
      <div className="mt-5 sm:mt-6">
        <ReviewBlock
          review={{
            id: "final-cta-review",
            rating: 5.0,
            headline: "The ₹9 architecture session paid for itself in 24 hours!",
            quote: "The Flowra team mapped our entire lead flow in 20 minutes. We went live the same afternoon and closed 42 warm appointments in our first week.",
            author: "Kartik Singhania",
            role: "Co-Founder, FinServe Prime (Ahmedabad)",
            avatar: "/indian_reviewer_vikram.jpg",
          }}
        />
      </div>
    </div>
  );
};
