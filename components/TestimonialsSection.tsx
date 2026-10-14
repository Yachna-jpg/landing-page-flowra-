"use client";

import React from "react";
import TestimonialMarqueeDemo, { GoogleIcon, RatingStars } from "@/components/ui/marquee-01";

export const TestimonialsSection: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="relative w-full py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50/60 to-white overflow-hidden select-none border-t border-slate-200/80 scroll-mt-20"
      style={{ fontFamily: "var(--font-heading-canva), var(--font-inter), sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Google Symbol + 4.5 Yellow Stars */}
        <div className="flex flex-col items-center gap-3.5 text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          
          {/* Google Verified Review Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-[0_2px_10px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow">
            <GoogleIcon className="w-4 h-4 shrink-0" />
            <span className="text-xs font-semibold text-slate-800 tracking-tight">
              Google Rating
            </span>
            <span className="text-xs font-bold text-slate-900 bg-slate-100 px-1.5 py-0.5 rounded-md font-mono">
              4.5
            </span>
            <RatingStars rating={4.5} />
            <span className="text-slate-300">•</span>
            <span className="text-[11px] font-medium text-slate-500">
              1,200+ Reviews
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 tracking-tight leading-tight">
            Loved by fast-moving revenue teams
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-lg">
            Real founders, sales directors, and agency leads scaling conversion rates
            and eliminating response delays with Flowra.
          </p>
        </div>

        {/* Marquee 01 Two-Row Scroller in Bright Mode */}
        <div className="w-full relative">
          <TestimonialMarqueeDemo />
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
