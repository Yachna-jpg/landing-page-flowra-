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
}

const PALETTE = [
  {
    icon: FileText,
    wash: "from-blue-50/70 to-transparent",
    iconBg: "bg-blue-50 border border-blue-100",
    iconColor: "text-blue-600",
    label: "text-slate-500",
  },
  {
    icon: TrendingUp,
    wash: "from-emerald-50/80 to-transparent",
    iconBg: "bg-emerald-50 border border-emerald-100",
    iconColor: "text-emerald-600",
    label: "text-emerald-700",
  },
  {
    icon: Building2,
    wash: "from-indigo-50/70 to-transparent",
    iconBg: "bg-indigo-50 border border-indigo-100",
    iconColor: "text-indigo-600",
    label: "text-slate-500",
  },
];

export function GradientTiers({
  plans,
  eyebrow,
  heading,
  subheading,
  notes = [],
  variant = "Tinted",
  className,
  onOpenGetStarted,
}: GradientTiersProps) {
  const { ref, shown } = useReveal<HTMLElement>();

  return (
    <section ref={ref} className={cn("@container w-full", className)}>
      <style dangerouslySetInnerHTML={{ __html: REVEAL_KEYFRAMES }} />

      {heading && (
        <div
          className={cn(
            "mx-auto mb-12 sm:mb-14 max-w-[64ch] text-center",
            revealClass(shown),
          )}
        >
          {eyebrow && (
            <span className="inline-flex items-center gap-2 mb-3">
              <span aria-hidden className="flex gap-1">
                <span className="size-1.5 rounded-full bg-emerald-500" />
                <span className="size-1.5 rounded-full bg-blue-500" />
                <span className="size-1.5 rounded-full bg-indigo-500" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
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
        </div>
      )}

      <div className="grid w-full grid-cols-1 overflow-hidden border border-slate-200 bg-white @3xl:grid-cols-3 rounded-3xl shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
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
                "relative flex flex-col border-t border-slate-200 px-8 pb-10 pt-9 first:border-t-0 @3xl:border-l @3xl:border-t-0 @3xl:first:border-l-0 bg-white transition-colors duration-200",
                isGrowth ? "bg-emerald-50/[0.25]" : "",
                revealClass(shown),
              )}
            >
              {variant === "Tinted" && (
                <span
                  aria-hidden
                  className={cn(
                    "absolute inset-x-0 top-0 h-[40%] bg-gradient-to-b pointer-events-none",
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
                      <span className="rounded-full bg-emerald-500 text-white px-3 py-1 text-xs font-semibold shadow-xs">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-6 text-2xl sm:text-[26px] font-bold tracking-tight text-slate-900">
                    {plan.name}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600 min-h-[42px]">
                    {plan.tagline}
                  </p>

                  <div className="mt-6 flex min-h-[42px] items-baseline justify-between gap-4 pb-6 border-b border-slate-100">
                    <span className="whitespace-nowrap text-3xl font-bold tracking-tight text-slate-900">
                      {note.price ?? "Custom pricing"}
                    </span>
                    {note.priceNote && (
                      <span className="text-right text-xs font-medium text-slate-500">
                        {note.priceNote}
                      </span>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={plan.onCtaClick || onOpenGetStarted}
                    className={cn(
                      "group mt-6 flex h-[48px] w-full items-center justify-center gap-2 rounded-xl text-sm font-semibold cursor-pointer",
                      "transition-all duration-200 active:scale-[0.98] shadow-xs",
                      "focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2",
                      isGrowth
                        ? "bg-slate-950 text-white hover:bg-slate-800 hover:shadow-md"
                        : "border border-slate-200 bg-white text-slate-800 hover:bg-slate-50 hover:border-slate-300",
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
                        <div className="mt-0.5 rounded-full p-0.5 bg-emerald-50 text-emerald-600 shrink-0">
                          <Check className="size-3.5 stroke-[2.5]" />
                        </div>
                        <span className="text-sm leading-relaxed text-slate-700">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {note.footnote && (
                  <p className="mt-8 text-center text-xs text-slate-500">
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
