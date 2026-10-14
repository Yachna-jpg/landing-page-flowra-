"use client";

import { ArrowRight, Building2, FileText, TrendingUp, Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const REVEAL_KEYFRAMES = `
@keyframes su-reveal { from { opacity: 0; transform: translateY(14px) } to { opacity: 1; transform: none } }
@keyframes su-draw { from { stroke-dashoffset: 1 } to { stroke-dashoffset: 0 } }
@keyframes su-sheen { 0%, 62% { transform: translateX(-110%) } 100% { transform: translateX(110%) } }
`;

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      const frame = requestAnimationFrame(() => setShown(true));
      return () => cancelAnimationFrame(frame);
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, shown };
}

function revealClass(shown: boolean) {
  return shown
    ? "[animation:su-reveal_480ms_cubic-bezier(0.23,1,0.32,1)_both] motion-reduce:animate-none"
    : "";
}

function revealDelay(shown: boolean, index: number) {
  return shown ? { animationDelay: `${index * 70}ms` } : undefined;
}

export type GradientTiersVariant = "Tinted" | "Plain";

export interface GradientTierNote {
  price?: string;
  priceNote?: string;
  footnote?: string;
}

export interface Plan {
  id: string;
  name: string;
  tagline: string;
  cta: string;
  featured?: boolean;
  badge?: string;
  inherits?: string;
  features: string[];
  footnote?: string;
  onCtaClick?: () => void;
}

export interface GradientTiersProps {
  plans: Plan[];
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  notes?: GradientTierNote[];
  variant?: GradientTiersVariant;
  className?: string;
  onOpenGetStarted?: () => void;
  isAnnual?: boolean;
  onToggleAnnual?: (annual: boolean) => void;
}

export const PALETTE = [
  {
    icon: FileText,
    dotColor: "bg-[#4a7dfc]",
    wash: "from-[#1a2542] via-[#10172b]/75 to-transparent",
    iconBg: "bg-[#141d33] border border-[#233560]",
    iconColor: "text-[#8fadff]",
    label: "text-[#8fadff]",
  },
  {
    icon: TrendingUp,
    dotColor: "bg-[#7f931c]",
    wash: "from-[#272f10] via-[#1c220b]/75 to-transparent",
    iconBg: "bg-[#22270e] border border-[#3e4a16]",
    iconColor: "text-[#bdd14b]",
    label: "text-[#bdd14b]",
    badgeBg: "bg-[#2e3413] border border-[#485317] text-[#cade5e]",
  },
  {
    icon: Building2,
    dotColor: "bg-[#a34df0]",
    wash: "from-[#2c1844] via-[#1e102e]/75 to-transparent",
    iconBg: "bg-[#251537] border border-[#4a266e]",
    iconColor: "text-[#c894f7]",
    label: "text-[#c894f7]",
  },
];

export function GradientTiers({
  plans,
  eyebrow = "PRICING",
  heading = "Plans that grow with you",
  subheading = "Start free, upgrade when you need more lead capacity and voice automation.",
  notes = [],
  variant = "Tinted",
  className,
  onOpenGetStarted,
  isAnnual,
  onToggleAnnual,
}: GradientTiersProps) {
  const { ref, shown } = useReveal<HTMLElement>();

  return (
    <section ref={ref} className={cn("@container w-full select-none", className)}>
      <style dangerouslySetInnerHTML={{ __html: REVEAL_KEYFRAMES }} />

      {/* OUTSIDE THE BORDER: BRIGHT MODE */}
      {heading && (
        <div
          className={cn(
            "mx-auto mb-12 sm:mb-14 max-w-[62ch] text-center",
            revealClass(shown),
          )}
        >
          {eyebrow && (
            <span className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200/80 mb-4 shadow-2xs">
              <span aria-hidden className="flex gap-1.5">
                <span className="size-2 rounded-full bg-[#4a7dfc]" />
                <span className="size-2 rounded-full bg-[#7f931c]" />
                <span className="size-2 rounded-full bg-[#a34df0]" />
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-600">
                {eyebrow}
              </span>
            </span>
          )}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-slate-900 tracking-tight leading-tight">
            {heading}
          </h2>
          {subheading && (
            <p className="mt-3.5 text-sm sm:text-base leading-relaxed text-slate-600 max-w-xl mx-auto">
              {subheading}
            </p>
          )}

          {typeof onToggleAnnual === "function" && (
            <div className="mt-8 inline-flex items-center gap-1.5 p-1 rounded-full bg-slate-200/80 border border-slate-300/50 shadow-inner">
              <button
                type="button"
                onClick={() => onToggleAnnual(false)}
                className={cn(
                  "px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer",
                  !isAnnual
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-600 hover:text-slate-900",
                )}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => onToggleAnnual(true)}
                className={cn(
                  "px-4 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer",
                  isAnnual
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900",
                )}
              >
                <span>Annual</span>
                <span className={cn(
                  "text-[10px] px-1.5 py-0.5 rounded-full font-bold uppercase",
                  isAnnual ? "bg-white/20 text-white" : "bg-emerald-100 text-emerald-800"
                )}>
                  Save 20%
                </span>
              </button>
            </div>
          )}
        </div>
      )}

      {/* INSIDE THE BORDER: BLACK / DARK MODE WITH VIOLET, LIME & BLUE GRADIENTS */}
      <div className="grid w-full grid-cols-1 overflow-hidden border border-[#232730] bg-[#0c0e14] @3xl:grid-cols-3 rounded-2xl sm:rounded-3xl shadow-[0_25px_60px_rgba(15,23,42,0.25)] divide-y divide-[#232730] @3xl:divide-y-0 @3xl:divide-x">
        {plans.map((plan, position) => {
          const palette = PALETTE[position % PALETTE.length];
          const Icon = palette.icon;
          const note = notes[position] ?? {};
          const isGrowth = position === 1;

          return (
            <div
              key={plan.id}
              style={revealDelay(shown, position)}
              className={cn(
                "relative flex flex-col px-8 pb-10 pt-9 bg-[#0c0e14] transition-all duration-200",
                revealClass(shown),
              )}
            >
              {variant === "Tinted" && (
                <span
                  aria-hidden
                  className={cn(
                    "absolute inset-x-0 top-0 h-[48%] bg-gradient-to-b to-transparent pointer-events-none",
                    palette.wash,
                  )}
                />
              )}

              <div className="relative flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-start justify-between">
                    <div className={cn("p-2.5 rounded-xl", palette.iconBg)}>
                      <Icon
                        aria-hidden
                        className={cn("size-5", palette.iconColor)}
                        strokeWidth={2}
                      />
                    </div>
                    {plan.badge && (
                      <span className="rounded-full bg-[#2e3413] border border-[#485317] text-[#cade5e] px-3 py-1 text-xs font-semibold shadow-xs">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-6 text-2xl sm:text-[26px] font-bold tracking-tight text-white">
                    {plan.name}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-400 min-h-[42px]">
                    {plan.tagline}
                  </p>

                  <div className="mt-6 flex min-h-[42px] items-baseline justify-between gap-4 pb-6 border-b border-[#232730]">
                    <span className="whitespace-nowrap text-3xl font-bold tracking-tight text-white">
                      {note.price ?? "Custom pricing"}
                    </span>
                    {note.priceNote && (
                      <span className="text-right text-xs font-medium text-slate-400">
                        {note.priceNote}
                      </span>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={plan.onCtaClick || onOpenGetStarted}
                    className={cn(
                      "group mt-6 flex h-[48px] w-full items-center justify-center gap-2 rounded-xl text-sm font-semibold cursor-pointer",
                      "transition-all duration-200 active:scale-[0.98]",
                      isGrowth
                        ? "bg-white text-[#0c0e14] hover:bg-slate-100 shadow-[0_0_24px_rgba(255,255,255,0.12)]"
                        : "border border-white/15 bg-white/[0.05] text-white hover:bg-white/[0.1] hover:border-white/30",
                    )}
                  >
                    {plan.cta}
                    <ArrowRight
                      aria-hidden
                      className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </button>

                  <p
                    className={cn(
                      "mt-8 text-xs font-bold uppercase tracking-wider",
                      palette.label,
                    )}
                  >
                    {plan.inherits
                      ? `Everything in ${plan.inherits}, plus:`
                      : "Core functionality"}
                  </p>

                  <ul className="mt-5 space-y-3.5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="mt-0.5 rounded-full p-0.5 bg-white/10 text-white shrink-0">
                          <Check className="size-3.5 stroke-[2.5]" />
                        </div>
                        <span className="text-sm leading-relaxed text-[#d1d5db]">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {note.footnote && (
                  <p className="mt-8 text-center text-xs text-slate-400">
                    {note.footnote}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default GradientTiers;
