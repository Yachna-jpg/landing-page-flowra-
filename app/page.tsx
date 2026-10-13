"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RobotMascot, FaceScreenState } from "@/components/RobotMascot";
import { Navbar } from "@/components/Navbar";
import { BlueprintDecorations } from "@/components/BlueprintDecorations";
import { FeatureTabs, FEATURES_DATA } from "@/components/FeatureTabs";
import { HowItWorksSteps } from "@/components/HowItWorksSteps";
import { FinalCTA } from "@/components/FinalCTA";
import { Modals } from "@/components/Modals";
import { ChevronDown } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Active stage: 0 = Hero, 1 = Features, 2 = How It Works, 3 = Final
  const [activeStage, setActiveStage] = useState<0 | 1 | 2 | 3>(0);

  // Dynamic Mascot Face State
  const [faceState, setFaceState] = useState<FaceScreenState>("hero");

  // Active indices inside sections
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  // Modals
  const [contactOpen, setContactOpen] = useState(false);
  const [getStartedOpen, setGetStartedOpen] = useState(false);

  // Guaranteed, direct scroll listener that runs on every single scroll tick
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY || window.pageYOffset || 0;
          const docHeight = document.documentElement.scrollHeight || document.body.scrollHeight || 1;
          const winHeight = window.innerHeight || 1;
          const maxScroll = Math.max(1, docHeight - winHeight);
          const progress = Math.min(1, Math.max(0, scrollY / maxScroll));

          // 1. HERO (0.00 -> 0.18)
          if (progress < 0.18) {
            setActiveStage(0);
            setFaceState("hero");
          }
          // 2. FEATURES (0.18 -> 0.54) - 3 features one at a time
          else if (progress >= 0.18 && progress < 0.54) {
            setActiveStage(1);
            const featNorm = (progress - 0.18) / (0.54 - 0.18); // 0 to 1
            const idx = Math.min(2, Math.floor(featNorm * 3));
            setActiveFeatureIndex(idx);
            setFaceState(FEATURES_DATA[idx].faceState);
          }
          // 3. HOW IT WORKS (0.54 -> 0.80) - 3 big numbers (1, 2, 3)
          else if (progress >= 0.54 && progress < 0.80) {
            setActiveStage(2);
            setFaceState("tick");
            const hiwNorm = (progress - 0.54) / (0.80 - 0.54); // 0 to 1
            const idx = Math.min(2, Math.floor(hiwNorm * 3));
            setActiveStepIndex(idx);
          }
          // 4. FINAL CTA (0.80 -> 1.00)
          else {
            setActiveStage(3);
            setFaceState("smile");
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    // Attach to window scroll and resize
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    // Initial check on mount
    handleScroll();

    // GSAP ScrollTrigger refresh
    if (typeof window !== "undefined") {
      ScrollTrigger.refresh();
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Smooth scroll helper for menu links and interactive dots
  const scrollToProgress = useCallback((targetProgress: number) => {
    const docHeight = document.documentElement.scrollHeight || document.body.scrollHeight || 1;
    const winHeight = window.innerHeight || 1;
    const maxScroll = Math.max(1, docHeight - winHeight);

    window.scrollTo({
      top: maxScroll * targetProgress,
      behavior: "smooth",
    });
  }, []);

  const handleNavigateToFeatures = () => scrollToProgress(0.24);
  const handleNavigateToWhoItsFor = () => scrollToProgress(0.60);

  const handleSelectFeature = (index: number) => {
    const featStart = 0.18;
    const featSpan = 0.36;
    const target = featStart + (index / 3) * featSpan + 0.04;
    scrollToProgress(target);
  };

  const handleSelectStep = (index: number) => {
    const stepStart = 0.54;
    const stepSpan = 0.26;
    const target = stepStart + (index / 3) * stepSpan + 0.04;
    scrollToProgress(target);
  };

  return (
    <main className="relative bg-[#08080a] text-white min-h-screen selection:bg-white/20 selection:text-white">
      {/* Background Lighting */}
      <BlueprintDecorations />

      {/* Top Menu: Flowora logo, 3 links, and Get Started button only */}
      <Navbar
        onNavigateToFeatures={handleNavigateToFeatures}
        onNavigateToWhoItsFor={handleNavigateToWhoItsFor}
        onOpenContact={() => setContactOpen(true)}
        onOpenGetStarted={() => setGetStartedOpen(true)}
      />

      {/* FIXED VIEWPORT STAGE:
          Full screen with lots of empty space.
          The 40% larger robot mascot floats on the right/center.
          The text sits on the left of the robot, never covering it. */}
      <div className="fixed inset-0 z-20 pointer-events-none flex items-center justify-center">
        <div className="w-full max-w-7xl mx-auto h-full px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-2 items-center">

          {/* LEFT COLUMN: Clean typography container */}
          <div className="relative z-30 h-full flex flex-col justify-center pointer-events-auto pr-0 lg:pr-8 pt-24 lg:pt-0">

            {/* 1. HERO SECTION */}
            <div
              className={`absolute inset-0 flex flex-col justify-center transition-all duration-500 ease-out ${activeStage === 0
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-8 pointer-events-none"
                }`}
            >
              <div className="max-w-xl">
                {/* Very large bold pure white heading */}
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
                  Your AI Team for Every Lead
                </h1>

                {/* One line below it - light grey, 20px */}
                <p className="mt-6 text-xl sm:text-2xl text-zinc-400 font-normal leading-relaxed">
                  Flowora calls, chats, and follows up with your leads automatically.
                </p>

                {/* One Get Started button: white pill shape, black text, soft glow */}
                <div className="mt-10 flex items-center gap-6">
                  <button
                    onClick={() => setGetStartedOpen(true)}
                    className="btn-pill-white px-9 py-4 text-base font-semibold cursor-pointer shadow-[0_0_25px_rgba(255,255,255,0.25)]"
                  >
                    Get Started
                  </button>

                  <button
                    onClick={() => scrollToProgress(0.24)}
                    className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors cursor-pointer text-sm"
                  >
                    <span>Scroll to explore</span>
                    <ChevronDown className="w-4 h-4 animate-bounce" />
                  </button>
                </div>
              </div>
            </div>

            {/* 2. FEATURES SECTION */}
            <div
              className={`absolute inset-0 flex flex-col justify-center transition-all duration-500 ease-out ${activeStage === 1
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : activeStage > 1
                    ? "opacity-0 -translate-y-8 pointer-events-none"
                    : "opacity-0 translate-y-8 pointer-events-none"
                }`}
            >
              <FeatureTabs
                activeIndex={activeFeatureIndex}
                onSelectFeature={handleSelectFeature}
              />
            </div>

            {/* 3. HOW IT WORKS SECTION */}
            <div
              className={`absolute inset-0 flex flex-col justify-center transition-all duration-500 ease-out ${activeStage === 2
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : activeStage > 2
                    ? "opacity-0 -translate-y-8 pointer-events-none"
                    : "opacity-0 translate-y-8 pointer-events-none"
                }`}
            >
              <HowItWorksSteps
                activeStep={activeStepIndex}
                onStepClick={handleSelectStep}
              />
            </div>

            {/* 4. FINAL PART SECTION */}
            <div
              className={`absolute inset-0 flex flex-col justify-center transition-all duration-500 ease-out ${activeStage === 3
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 translate-y-8 pointer-events-none"
                }`}
            >
              <FinalCTA onOpenGetStarted={() => setGetStartedOpen(true)} />
            </div>

          </div>

          {/* RIGHT COLUMN: 40% Larger Floating Mascot
              Centered on its area, transparent background, soft shadow below.
              Never covers any text. */}
          <div className="h-full flex items-center justify-center lg:justify-end pointer-events-auto">
            <RobotMascot faceState={faceState} />
          </div>

        </div>
      </div>

      {/* SCROLLABLE TRACK CONTAINER: 350vh for smooth, natural scrolling */}
      <div ref={containerRef} className="relative w-full h-[350vh] pointer-events-none" />

      {/* Modals for Contact and Get Started */}
      <Modals
        contactOpen={contactOpen}
        onCloseContact={() => setContactOpen(false)}
        getStartedOpen={getStartedOpen}
        onCloseGetStarted={() => setGetStartedOpen(false)}
      />
    </main>
  );
}
