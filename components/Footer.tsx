"use client";

import React, { useState } from "react";
import { ShieldCheck } from "lucide-react";

interface FooterProps {
  heading?: string;
  ctaText?: string;
  onOpenGetStarted?: () => void;
  onOpenContact?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  heading = "Reconnect to what matters",
  ctaText = "Book ₹9 session",
  onOpenGetStarted,
  onOpenContact,
}) => {
  const [flowerHovered, setFlowerHovered] = useState(false);

  return (
    <footer className="relative w-full overflow-hidden bg-[#F8F8F5] pt-24 sm:pt-32 pb-12 sm:pb-16 text-slate-900 border-t border-slate-200/60 select-none">
      {/* Background Soft Studio Lighting & Sheen */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft top-down spotlight */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] sm:w-[900px] h-[500px] bg-gradient-to-b from-white via-white/50 to-transparent blur-3xl opacity-90" />
        {/* Subtle warm ambient glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-amber-500/[0.02] blur-[120px] rounded-full" />
        {/* Soft radial sheen */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(255,255,255,0.7),transparent)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 flex flex-col items-center">
        {/* 1. Main Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-semibold tracking-[-0.035em] text-[#15191E] text-center max-w-3xl mx-auto leading-[1.12]">
          {heading}
        </h2>

        {/* 2. Primary Pill Button */}
        <div className="mt-8 sm:mt-10 flex items-center justify-center">
          <button
            type="button"
            onClick={onOpenGetStarted}
            className="group relative inline-flex items-center justify-center px-8 sm:px-9 py-3.5 sm:py-4 rounded-full bg-[#1B1D1F] hover:bg-black text-white text-sm sm:text-base font-medium tracking-tight shadow-[0_6px_20px_rgba(0,0,0,0.12)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.22)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
          >
            <span>{ctaText}</span>
          </button>
        </div>

        {/* 3. Navigation / Social Links */}
        <div className="mt-12 sm:mt-16 flex flex-wrap items-center justify-center gap-7 sm:gap-12 text-sm sm:text-[15px] font-medium text-slate-700">
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-950 underline underline-offset-4 decoration-slate-400 hover:decoration-slate-900 transition-colors"
          >
            YouTube
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-950 underline underline-offset-4 decoration-slate-400 hover:decoration-slate-900 transition-colors"
          >
            TikTok
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-950 underline underline-offset-4 decoration-slate-400 hover:decoration-slate-900 transition-colors"
          >
            Instagram
          </a>
          <a
            href="mailto:hello@flowra.ai"
            className="hover:text-slate-950 underline underline-offset-4 decoration-slate-400 hover:decoration-slate-900 transition-colors"
          >
            Email
          </a>
        </div>
      </div>

      {/* 4. Giant "FLOWRA" Typography with Sprouting Flower */}
      <div className="relative w-full mt-12 sm:mt-16 flex flex-col items-center justify-end overflow-hidden">
        {/* Flower Sprout - Positioned atop the central letter 'O' */}
        <div
          className="relative w-full max-w-[1360px] mx-auto px-4 flex items-end justify-between font-black tracking-[-0.02em] select-none text-[#DDDCD6] text-[15.5vw] sm:text-[16vw] lg:text-[15vw] leading-[0.78] transition-colors"
          onMouseEnter={() => setFlowerHovered(true)}
          onMouseLeave={() => setFlowerHovered(false)}
        >
          {/* Individual Letter Elements for Exact Flower Anchoring */}
          <span className="inline-block transition-transform duration-300 hover:scale-[1.01]">F</span>
          <span className="inline-block transition-transform duration-300 hover:scale-[1.01]">L</span>

          {/* Letter 'O' with Sprouting Flower */}
          <div className="relative inline-flex flex-col items-center">
            {/* The Flower Sprout SVG Icon */}
            <div
              className={`absolute bottom-[84%] left-1/2 -translate-x-1/2 pointer-events-auto cursor-pointer transition-transform duration-500 ease-out origin-bottom ${
                flowerHovered ? "scale-115 -rotate-6" : "scale-100 rotate-0"
              }`}
              title="Flowra Flora"
            >
              <svg
                width="72"
                height="92"
                viewBox="0 0 72 92"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-13 sm:w-14 sm:h-18 md:w-18 md:h-24 lg:w-[72px] lg:h-[92px] text-[#BEBEB6] drop-shadow-[0_2px_4px_rgba(0,0,0,0.06)]"
              >
                {/* Curved organic stem rising upwards */}
                <path
                  d="M36 90 C36 72 38 52 36 34"
                  stroke="currentColor"
                  strokeWidth="3.6"
                  strokeLinecap="round"
                />

                {/* Left sprout leaf */}
                <path
                  d="M36 62 C22 59 13 49 13 38 C23 38 31 46 36 55"
                  fill="currentColor"
                />

                {/* Flower Head: 5 rounded chubby petals */}
                {/* Top petal */}
                <circle cx="36" cy="11" r="7.5" fill="currentColor" />
                {/* Top right petal */}
                <circle cx="48" cy="18" r="7.5" fill="currentColor" />
                {/* Bottom right petal */}
                <circle cx="44" cy="30" r="7.5" fill="currentColor" />
                {/* Bottom left petal */}
                <circle cx="28" cy="30" r="7.5" fill="currentColor" />
                {/* Top left petal */}
                <circle cx="24" cy="18" r="7.5" fill="currentColor" />

                {/* Center Core */}
                <circle cx="36" cy="22" r="6" fill="#DDDCD6" />
              </svg>
            </div>

            <span className="inline-block transition-transform duration-300 hover:scale-[1.01]">O</span>
          </div>

          <span className="inline-block transition-transform duration-300 hover:scale-[1.01]">W</span>
          <span className="inline-block transition-transform duration-300 hover:scale-[1.01]">R</span>
          <span className="inline-block transition-transform duration-300 hover:scale-[1.01]">A</span>
        </div>

        {/* Bottom Fog / Gradient Mask: fades bottom 30% into footer canvas */}
        <div className="absolute inset-x-0 bottom-0 h-16 sm:h-24 md:h-32 bg-gradient-to-t from-[#F8F8F5] via-[#F8F8F5]/80 to-transparent pointer-events-none" />
      </div>

      {/* 5. Minimalist Legal & Copyright Sub-footer */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-12 pt-8 sm:pt-10 border-t border-slate-200/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <div className="flex items-center gap-2.5">
          <span className="font-medium text-slate-600">© 2026 Flowra AI Inc.</span>
          <span>•</span>
          <span>All rights reserved.</span>
        </div>

        <div className="flex items-center gap-6 text-slate-500">
          <span className="flex items-center gap-1.5 font-medium text-slate-600">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            Meta Certified BSP
          </span>
          <button
            type="button"
            onClick={onOpenContact}
            className="hover:text-slate-900 transition-colors cursor-pointer"
          >
            Contact
          </button>
          <span className="hover:text-slate-900 transition-colors cursor-pointer">
            Privacy Policy
          </span>
          <span className="hover:text-slate-900 transition-colors cursor-pointer">
            Terms of Service
          </span>
        </div>
      </div>
    </footer>
  );
};
