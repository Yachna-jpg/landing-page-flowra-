"use client";

import React, { useState, useEffect } from "react";
import { Phone, CheckCheck } from "lucide-react";

export const HeroWhatsAppThread: React.FC = () => {
  const [step, setStep] = useState<number>(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 600);
    const t2 = setTimeout(() => setStep(2), 1800);
    const t3 = setTimeout(() => setStep(3), 3200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-10 z-40 max-w-[280px] sm:max-w-[320px] w-full p-4 rounded-2xl bg-white/95 border border-slate-200/90 shadow-[0_20px_50px_rgba(15,23,42,0.14)] backdrop-blur-md pointer-events-none select-none transition-all duration-500">
      <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-slate-100 text-[10px] text-slate-500">
        <span className="flex items-center gap-1.5 font-semibold text-emerald-600">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          WhatsApp Live Lead
        </span>
        <span className="font-mono text-slate-400">Just now</span>
      </div>

      <div className="space-y-2 text-xs">
        {/* Bubble 1: Incoming Lead */}
        {step >= 1 && (
          <div className="flex justify-start animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="bg-slate-100 text-slate-800 px-3 py-2 rounded-xl rounded-tl-none border border-slate-200/80 text-[11px] leading-relaxed shadow-sm">
              Hi, saw your Meta ad for 2BHK. Price kya hai?
            </div>
          </div>
        )}

        {/* Bubble 2: Flowra Bot Reply */}
        {step >= 2 && (
          <div className="flex justify-end animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="bg-emerald-50 text-emerald-950 px-3 py-2 rounded-xl rounded-tr-none border border-emerald-200 text-[11px] leading-relaxed flex flex-col items-end shadow-sm">
              <span>Starts at ₹68L. Verified floor plans available!</span>
              <span className="flex items-center gap-0.5 text-[9px] text-emerald-600 mt-0.5">
                <CheckCheck className="w-3 h-3 text-emerald-600" />
              </span>
            </div>
          </div>
        )}

        {/* Bubble 3: Outbound Voice Call Chip */}
        {step >= 3 && (
          <div className="flex justify-end animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="bg-purple-50 text-purple-900 px-3 py-1.5 rounded-xl border border-purple-200 text-[11px] flex items-center gap-2 shadow-sm">
              <Phone className="w-3 h-3 text-purple-600 animate-pulse" />
              <span className="font-medium">Calling lead in Hinglish now...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
