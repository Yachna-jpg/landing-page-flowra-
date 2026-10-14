"use client";

import {
  type CSSProperties,
  useLayoutEffect,
  useRef,
  useSyncExternalStore,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, MessageSquare, Phone, Database, Calendar } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function useGSAP(
  callback: () => void | (() => void),
  options?: {
    dependencies?: unknown[];
    scope?: { current: Element | null } | Element | null;
  }
) {
  const deps = options?.dependencies ?? [];
  const scope = options?.scope;
  const ctxRef = useRef<gsap.Context | null>(null);
  const cleanupRef = useRef<(() => void) | undefined>(undefined);

  useLayoutEffect(() => {
    const el =
      scope && typeof scope === "object" && "current" in scope
        ? scope.current
        : (scope as Element | null);
    ctxRef.current = gsap.context(() => { }, el ?? undefined);
    return () => {
      cleanupRef.current?.();
      cleanupRef.current = undefined;
      ctxRef.current?.revert();
      ctxRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useLayoutEffect(() => {
    if (!ctxRef.current) return;
    cleanupRef.current?.();
    const ret = ctxRef.current.add(callback);
    cleanupRef.current = typeof ret === "function" ? ret : undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

export type FlowraJourneyItem = {
  id: string;
  step: string;
  badge: string;
  title: string;
  content: string;
  stemColor: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  icon: typeof Sparkles;
};

export type TimelineProps = {
  title?: string;
  periodLabel?: string;
  textColor?: string;
  mutedTextColor?: string;
  backgroundColor?: string;
  videoUrl?: string;
  imageUrl?: string;
  imageAlt?: string;
};

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeToReducedMotion(callback: () => void) {
  if (typeof window === "undefined") return () => { };
  const mediaQueryList = window.matchMedia(REDUCED_MOTION_QUERY);
  mediaQueryList.addEventListener("change", callback);
  return () => mediaQueryList.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  if (typeof window === "undefined") return false;
  return window.matchMedia?.(REDUCED_MOTION_QUERY)?.matches ?? false;
}

function getServerReducedMotionSnapshot() {
  return false;
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getServerReducedMotionSnapshot,
  );
}

// 5 Flowra steps cleanly divided: 3 on top, 2 on bottom
export const topJourneyData: FlowraJourneyItem[] = [
  {
    id: "step-01",
    step: "01",
    badge: "0s Trigger",
    title: "Meta Lead Form",
    content: "Instant webhook capture directly from your Facebook or Instagram ad campaigns.",
    stemColor: "#10b981",
    badgeBg: "bg-emerald-50",
    badgeText: "text-emerald-700",
    badgeBorder: "border-emerald-200",
    icon: Sparkles,
  },
  {
    id: "step-03",
    step: "03",
    badge: "Sarvam + Gemini",
    title: "AI Voice Call",
    content: "Autonomous Hinglish voice agent calls in 45s to verify budget, requirement, and intent.",
    stemColor: "#059669",
    badgeBg: "bg-emerald-50",
    badgeText: "text-emerald-700",
    badgeBorder: "border-emerald-200",
    icon: Phone,
  },
  {
    id: "step-05",
    step: "05",
    badge: "24h Loop",
    title: "Automated Follow-up",
    content: "Multi-channel automated calendar scheduling or personalized next-day follow-up nudge.",
    stemColor: "#10b981",
    badgeBg: "bg-emerald-50",
    badgeText: "text-emerald-700",
    badgeBorder: "border-emerald-200",
    icon: Calendar,
  },
];

export const bottomJourneyData: FlowraJourneyItem[] = [
  {
    id: "step-02",
    step: "02",
    badge: "Official Meta API",
    title: "Instant WhatsApp",
    content: "Interactive WhatsApp welcome, catalog PDF, and dynamic brochure delivered in under 6 seconds.",
    stemColor: "#10b981",
    badgeBg: "bg-emerald-50",
    badgeText: "text-emerald-700",
    badgeBorder: "border-emerald-200",
    icon: MessageSquare,
  },
  {
    id: "step-04",
    step: "04",
    badge: "Deals Pipeline",
    title: "Qualified in CRM",
    content: "Real-time sync tags hot leads, stores call summary & recording, and assigns directly to sales reps.",
    stemColor: "#059669",
    badgeBg: "bg-emerald-50",
    badgeText: "text-emerald-700",
    badgeBorder: "border-emerald-200",
    icon: Database,
  },
];

export const allJourneyItems: FlowraJourneyItem[] = [
  topJourneyData[0], // 01
  bottomJourneyData[0], // 02
  topJourneyData[1], // 03
  bottomJourneyData[1], // 04
  topJourneyData[2], // 05
];

export default function Timeline({
  title = "Speed-to-Lead Rail",
  periodLabel = "Lead In → Revenue Out",
  textColor = "#0f172a",
  mutedTextColor = "#64748b",
  backgroundColor = "#ffffff",
  videoUrl = "/product-tour/dashboard.mp4",
  imageUrl = "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop",
  imageAlt = "Flowra AI Automation Workflow",
}: TimelineProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  const sectionStyle: CSSProperties = {
    color: textColor,
    backgroundColor,
  };
  const mutedTextStyle: CSSProperties = {
    color: mutedTextColor,
  };

  useGSAP(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    // Pinning and horizontal track slide
    const isMobile = window.innerWidth < 640;
    const scrollDistance = isMobile
      ? track.scrollWidth - window.innerWidth + 80
      : track.scrollWidth - window.innerWidth + 140;

    // Smooth progressive scrub with linear acceleration
    const mainTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${scrollDistance}`,
        pin: true,
        scrub: 0.8, // Calibrated buttery smooth damping for high-end trackpads/mice
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    // Hardware-accelerated smooth slide
    mainTimeline.to(track, {
      x: -scrollDistance,
      ease: "power1.inOut",
      force3D: true,
    });

    // Center progress rail line
    mainTimeline.to(
      ".journey-progress-line",
      {
        scaleX: 1,
        ease: "power1.inOut",
        force3D: true,
      },
      0
    );

    // Stagger step reveal animations smoothly linked to scroll
    allJourneyItems.forEach((item, index) => {
      const isTop = topJourneyData.some((t) => t.id === item.id);
      const stemSelector = `.jl-${item.id}`;
      const cardSelector = `.card-${item.id}`;

      // Origin: top items grow down from rail to card (top center), bottom items grow up from rail to card (bottom center)
      gsap.set(stemSelector, {
        scaleY: 0,
        transformOrigin: isTop ? "bottom center" : "top center",
        force3D: true,
      });
      gsap.set(cardSelector, {
        opacity: 0.25,
        y: isTop ? 14 : -14,
        force3D: true,
      });

      // Relative normalized progress position
      const stepStartTime = (index / (allJourneyItems.length + 0.6)) * 0.85;

      mainTimeline
        .to(
          stemSelector,
          {
            scaleY: 1,
            duration: 0.3,
            ease: "power2.out",
            force3D: true,
          },
          stepStartTime
        )
        .to(
          cardSelector,
          {
            opacity: 1,
            y: 0,
            duration: 0.25,
            ease: "power2.out",
            force3D: true,
          },
          stepStartTime + 0.12
        );
    });

    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, { dependencies: [reducedMotion], scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="relative w-full h-screen overflow-hidden bg-white border-t border-slate-100 select-none font-sans"
      style={sectionStyle}
    >
      <div className="h-full w-full flex items-center overflow-hidden">
        <div
          ref={trackRef}
          className="flex h-[88vh] items-center gap-12 sm:gap-16 pl-8 sm:pl-20 pr-32 will-change-transform transform-gpu"
        >
          {/* Header Intro Block */}
          <div className="w-[300px] sm:w-[360px] flex-shrink-0 flex flex-col justify-center pr-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold uppercase tracking-wider w-fit mb-4">
              <span>{title}</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              One seamless path from click to close.
            </h3>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600" style={mutedTextStyle}>
              {periodLabel}
            </p>
            <p className="mt-1 text-xs text-slate-400">
              Scroll to advance the live deployment timeline.
            </p>
          </div>

          {/* Clean Dashboard Video Frame */}
          <div className="w-[360px] sm:w-[500px] rounded-2xl overflow-hidden bg-white p-2.5 shadow-[0_10px_35px_rgba(0,0,0,0.06)] border border-slate-100 flex-shrink-0 relative group">
            <div className="relative rounded-xl overflow-hidden bg-white aspect-[16/10] w-full flex items-center justify-center">
              {videoUrl ? (
                <video
                  src={videoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="w-full h-full object-contain transform-gpu bg-white"
                />
              ) : (
                <img
                  src={imageUrl}
                  alt={imageAlt}
                  draggable={false}
                  className="w-full h-full object-contain bg-white"
                />
              )}
            </div>
            <div className="pt-3 pb-1 px-1.5 flex items-center justify-between">
              <span className="text-[11px] font-mono font-semibold tracking-wider text-emerald-700 uppercase">
                Production Engine
              </span>
              <span className="text-slate-500 text-xs">
                Live automated response
              </span>
            </div>
          </div>

          {/* Interactive Stepper Track Container */}
          <div className="relative h-[620px] w-[1480px] sm:w-[1780px] flex-shrink-0 flex flex-col justify-between">

            {/* Center Timeline Track Rail */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center z-0 pointer-events-none">
              <div className="w-full h-[2.5px] bg-slate-200 relative overflow-hidden">
                {/* Progress green rail with scaleX for 60fps compositor performance */}
                <div className="journey-progress-line absolute top-0 left-0 h-full w-full bg-emerald-600 origin-left scale-x-0 transform-gpu" />
              </div>
            </div>

            {/* Top Half: Step 01, 03, 05 */}
            <div className="h-[310px] w-full flex items-end justify-start gap-24 sm:gap-36 pl-8">
              {topJourneyData.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={`top-${item.id}`}
                    className="relative w-[280px] sm:w-[320px] flex-shrink-0 flex flex-col justify-end"
                  >
                    {/* Step Card Content */}
                    <div
                      className={`card-${item.id} p-5 rounded-2xl bg-white shadow-[0_6px_25px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.08)] transition-all duration-300 ml-5 z-10 will-change-transform transform-gpu`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="font-mono text-xs font-bold text-slate-400">
                          {item.step}
                        </span>
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full ${item.badgeBg} ${item.badgeText} text-[11px] font-semibold`}
                        >
                          <Icon className="w-3 h-3" />
                          {item.badge}
                        </span>
                      </div>
                      <h4 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-snug">
                        {item.title}
                      </h4>
                      <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {item.content}
                      </p>
                    </div>

                    {/* Prominent, longer Stem attached directly from card down to center rail */}
                    <div className="h-[105px] w-full flex items-start pl-10 pointer-events-none z-10">
                      <div
                        className={`w-[2.5px] h-full jl-${item.id} origin-bottom will-change-transform transform-gpu shadow-sm`}
                        style={{ backgroundColor: item.stemColor }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Half: Step 02, 04 */}
            <div className="h-[310px] w-full flex items-start justify-start gap-24 sm:gap-36 pl-48 sm:pl-64">
              {bottomJourneyData.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={`bottom-${item.id}`}
                    className="relative w-[280px] sm:w-[320px] flex-shrink-0 flex flex-col justify-start"
                  >
                    {/* Prominent, longer Stem attached directly from center rail down to card */}
                    <div className="h-[105px] w-full flex items-end pl-10 pointer-events-none z-10">
                      <div
                        className={`w-[2.5px] h-full jl-${item.id} origin-top will-change-transform transform-gpu shadow-sm`}
                        style={{ backgroundColor: item.stemColor }}
                      />
                    </div>

                    {/* Step Card Content */}
                    <div
                      className={`card-${item.id} p-5 rounded-2xl bg-white shadow-[0_6px_25px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.08)] transition-all duration-300 ml-5 z-10 will-change-transform transform-gpu`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="font-mono text-xs font-bold text-slate-400">
                          {item.step}
                        </span>
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full ${item.badgeBg} ${item.badgeText} text-[11px] font-semibold`}
                        >
                          <Icon className="w-3 h-3" />
                          {item.badge}
                        </span>
                      </div>
                      <h4 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-snug">
                        {item.title}
                      </h4>
                      <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {item.content}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
