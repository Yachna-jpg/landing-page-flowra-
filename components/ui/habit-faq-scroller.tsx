"use client";

import React from "react";

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqRow {
  id: string;
  speed: string;
  direction?: "left" | "right";
  faqItems: FaqItem[];
}

export interface FaqData {
  mainTitle: string;
  mainSubtitle: string;
  rows: FaqRow[];
}

export interface FaqCardProps {
  question: string;
  answer: string;
}

/**
 * FaqCard
 * Sleek, compact reusable card for a single FAQ item.
 */
export const FaqCard: React.FC<FaqCardProps> = ({ question, answer }) => {
  return (
    <div className="flex flex-col items-start gap-2.5 p-5 sm:p-5.5 bg-white rounded-xl sm:rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-slate-100/90 w-[300px] sm:w-[340px] flex-shrink-0 faq-card hover:shadow-xl hover:border-slate-200 hover:-translate-y-0.5 transition-all duration-200 select-none">
      <h3 className="text-base sm:text-[17px] font-bold text-slate-900 leading-snug faq-title">
        {question}
      </h3>
      <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed faq-answer">
        {answer}
      </p>
    </div>
  );
};

export interface HorizontalScrollerProps {
  children: React.ReactNode;
  speed?: string;
  direction?: "left" | "right";
}

/**
 * HorizontalScroller
 * Wraps children and creates a seamless horizontal looping animation.
 */
export const HorizontalScroller: React.FC<HorizontalScrollerProps> = ({
  children,
  speed = "40s",
  direction = "left",
}) => {
  const animationClass =
    direction === "right"
      ? "animate-scroll-horizontal-reverse"
      : "animate-scroll-horizontal";

  // Inline style to set the CSS custom property for scroll duration.
  const style = { "--scroll-duration": speed } as React.CSSProperties;

  return (
    <div className="w-full overflow-hidden group relative scroller-mask">
      {/* Edge gradient fade curtains */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 z-20 bg-gradient-to-r from-white/95 via-white/50 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 z-20 bg-gradient-to-l from-white/95 via-white/50 to-transparent" />

      {/* Infinite scrolling track */}
      <div
        className={`flex w-max ${animationClass} group-hover:[animation-play-state:paused]`}
        style={style}
      >
        <div className="flex items-stretch justify-center flex-shrink-0 gap-4 sm:gap-5 px-2.5 sm:px-3">
          {children}
        </div>
        {/* duplicate for seamless loop */}
        <div
          className="flex items-stretch justify-center flex-shrink-0 gap-4 sm:gap-5 px-2.5 sm:px-3"
          aria-hidden="true"
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export interface FaqSectionProps {
  data: FaqData;
}

/**
 * FaqSection
 * Assembles title, subtitle, and compact horizontal rows on the soft pastel gradient canvas.
 */
export const FaqSection: React.FC<FaqSectionProps> = ({ data }) => {
  return (
    <div className="relative flex flex-col items-center gap-8 sm:gap-10 py-12 sm:py-16 w-full overflow-hidden">
      <div className="flex flex-col items-center gap-3 text-center z-10 max-w-2xl px-6">
        <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-slate-900 tracking-tight leading-tight">
          {data.mainTitle}
        </h2>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-lg">
          {data.mainSubtitle}
        </p>
      </div>

      <div className="flex flex-col gap-4 sm:gap-4.5 z-10 w-full">
        {data.rows.map((row) => (
          <HorizontalScroller
            key={row.id}
            speed={row.speed}
            direction={row.direction}
          >
            {row.faqItems.map((item) => (
              <FaqCard
                key={item.id}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </HorizontalScroller>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
