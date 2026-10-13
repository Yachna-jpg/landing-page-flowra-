"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { RobotMascot, FaceScreenState } from "@/components/RobotMascot";
import { Navbar } from "@/components/Navbar";
import { BlueprintDecorations } from "@/components/BlueprintDecorations";
import { FeatureTabs, FEATURES_DATA } from "@/components/FeatureTabs";
import { HowItWorksSteps } from "@/components/HowItWorksSteps";
import { FinalCTA } from "@/components/FinalCTA";
import { ProductTour } from "@/components/ProductTour";
import { PlatformGrid } from "@/components/PlatformGrid";
import { SignatureFlow } from "@/components/SignatureFlow";
import { WhoItsFor } from "@/components/WhoItsFor";
import { VoiceSamples } from "@/components/VoiceSamples";
import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalWhatsAppCTA } from "@/components/FinalWhatsAppCTA";
import { Modals } from "@/components/Modals";
import { ChevronDown, ShieldCheck, Sparkles } from "lucide-react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Active stage: 0 = Hero, 1 = Features, 2 = How It Works, 3 = Final Closer
  const [activeStage, setActiveStage] = useState<0 | 1 | 2 | 3>(0);

  // Dynamic Mascot Face State
  const [faceState, setFaceState] = useState<FaceScreenState>("hero");

  // Active indices inside stages
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  // Modals
  const [contactOpen, setContactOpen] = useState(false);
  const [getStartedOpen, setGetStartedOpen] = useState(false);

  // Scroll listener that directly syncs the mascot face and active stages
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY || window.pageYOffset || 0;
          const trackEl = containerRef.current;
          const trackHeight = trackEl
            ? trackEl.offsetHeight - window.innerHeight
            : window.innerHeight * 2.5;
          const maxScroll = Math.max(1, trackHeight);
          const progress = Math.min(1, Math.max(0, scrollY / maxScroll));

          // 1. HERO (0.00 -> 0.18)
          if (progress < 0.18) {
            setActiveStage(0);
            setFaceState("hero");
          }
          // 2. FEATURES (0.18 -> 0.54) - Features one at a time (WhatsApp, Website, Voice)
          else if (progress >= 0.18 && progress < 0.54) {
            setActiveStage(1);
            const featNorm = (progress - 0.18) / (0.54 - 0.18);
            const idx = Math.min(
              FEATURES_DATA.length - 1,
              Math.floor(featNorm * FEATURES_DATA.length)
            );
            setActiveFeatureIndex(idx);
            setFaceState(FEATURES_DATA[idx].faceState);
          }
          // 3. HOW IT WORKS (0.54 -> 0.80) - 3 big numbers (1, 2, 3)
          else if (progress >= 0.54 && progress < 0.80) {
            setActiveStage(2);
            setFaceState("tick");
            const hiwNorm = (progress - 0.54) / (0.80 - 0.54);
            const idx = Math.min(2, Math.floor(hiwNorm * 3));
            setActiveStepIndex(idx);
          }
          // 4. FINAL PART (0.80 -> 1.00)
          else {
            setActiveStage(3);
            setFaceState("smile");
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Smooth scroll helpers
  const scrollToProgress = useCallback((targetProgress: number) => {
    const trackEl = containerRef.current;
    const trackHeight = trackEl
      ? trackEl.offsetHeight - window.innerHeight
      : window.innerHeight * 2.5;

    window.scrollTo({
      top: trackHeight * targetProgress,
      behavior: "smooth",
    });
  }, []);

  const handleNavigateToFeatures = () => scrollToProgress(0.24);
  const handleNavigateToWhoItsFor = () => {
    const el = document.getElementById("who-its-for");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleSelectFeature = (index: number) => {
    const featStart = 0.18;
    const featSpan = 0.36;
    const target = featStart + (index / FEATURES_DATA.length) * featSpan + 0.04;
    scrollToProgress(target);
  };

  const handleSelectStep = (index: number) => {
    const stepStart = 0.54;
    const stepSpan = 0.26;
    const target = stepStart + (index / 3) * stepSpan + 0.04;
    scrollToProgress(target);
  };

  return (
    <main className="relative bg-[#FAFAFA] text-slate-900 min-h-screen selection:bg-emerald-500/20 selection:text-emerald-950">
      {/* Background Lighting with subtle Emerald glow */}
      <BlueprintDecorations />

      {/* Top Menu: Flowra logo, links, and Get Started button */}
      <Navbar
        onNavigateToFeatures={handleNavigateToFeatures}
        onNavigateToWhoItsFor={handleNavigateToWhoItsFor}
        onOpenContact={() => setContactOpen(true)}
        onOpenGetStarted={() => setGetStartedOpen(true)}
      />

      {/* SCROLLABLE TRACK CONTAINER (350vh):
          Sticks the robot mascot on the right while the scroll sequence transitions smoothly on the left */}
      <div ref={containerRef} className="relative w-full h-[350vh]">
        {/* STICKY VIEWPORT STAGE */}
        <div className="sticky top-0 h-screen w-full z-20 pointer-events-none flex items-center justify-center overflow-hidden">
          <div className="w-full max-w-7xl mx-auto h-full px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-2 items-center">

            {/* LEFT COLUMN: Clean typography container */}
            <div className="relative z-30 h-full flex flex-col justify-center pointer-events-auto pr-0 lg:pr-8 pt-24 lg:pt-0">

              {/* 1. HERO SECTION */}
              <div
                className={`absolute inset-0 flex flex-col justify-center transition-all duration-500 ease-out ${
                  activeStage === 0
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-8 pointer-events-none"
                }`}
              >
                <div className="max-w-xl">
                  {/* Eyebrow Pill */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-6">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Official Meta WhatsApp API · Hindi, Hinglish + 10 languages</span>
                  </div>

                  {/* Main Headline */}
                  <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.08]">
                    Your AI Team for Every Lead
                  </h1>

                  {/* Subhead */}
                  <p className="mt-6 text-xl sm:text-2xl text-slate-600 font-normal leading-relaxed">
                    Flowra calls, chats, and follows up with your leads automatically.
                  </p>

                  {/* Primary CTA + Scroll indicator */}
                  <div className="mt-10 flex flex-wrap items-center gap-6">
                    <button
                      type="button"
                      onClick={() => setGetStartedOpen(true)}
                      className="btn-pill-black px-9 py-4 text-base font-semibold cursor-pointer"
                    >
                      Book ₹9 session
                    </button>

                    <button
                      type="button"
                      onClick={() => scrollToProgress(0.24)}
                      className="group flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer text-sm font-medium"
                    >
                      <span>Scroll to explore</span>
                      <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                    </button>
                  </div>

                  {/* Proof line */}
                  <div className="mt-8 pt-5 border-t border-slate-200 flex flex-wrap items-center gap-4 text-xs text-slate-500 font-medium">
                    <span>Set up in minutes</span>
                    <span>•</span>
                    <span>1,000 trial credits</span>
                    <span>•</span>
                    <span>Your WhatsApp number stays yours</span>
                  </div>
                </div>
              </div>

              {/* 2. FEATURES SECTION (WhatsApp, Website, Voice with 3 dots indicator) */}
              <div
                className={`absolute inset-0 flex flex-col justify-center transition-all duration-500 ease-out ${
                  activeStage === 1
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

              {/* 3. HOW IT WORKS SECTION (1, 2, 3 dimmed numbers turning bright) */}
              <div
                className={`absolute inset-0 flex flex-col justify-center transition-all duration-500 ease-out ${
                  activeStage === 2
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

              {/* 4. FINAL PART SECTION (Smiling robot closer) */}
              <div
                className={`absolute inset-0 flex flex-col justify-center transition-all duration-500 ease-out ${
                  activeStage === 3
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-8 pointer-events-none"
                }`}
              >
                <FinalCTA onOpenGetStarted={() => setGetStartedOpen(true)} />
              </div>

            </div>

            {/* RIGHT COLUMN: Pinned 3D Robot Mascot */}
            <div className="relative h-full flex items-center justify-center lg:justify-end pointer-events-auto">
              <RobotMascot faceState={faceState} />
            </div>

          </div>
        </div>
      </div>

      {/* SECTION: "SEE IT RUN" — THE HD PRODUCT TOUR */}
      <ProductTour />

      {/* SECTION: "ONE PLACE FOR EVERY CHAT, CALL & FOLLOW-UP" — PLATFORM GRID */}
      <PlatformGrid />

      {/* SECTION: "LEAD FORM IN. BOOKED CALL OUT." — SIGNATURE FLOW RAIL */}
       <SignatureFlow onOpenGetStarted={() => setGetStartedOpen(true)} />

      {/* SECTION: VOICE SAMPLES (MULTI-LANGUAGE GRID WITH AUDIO PLAYER) */}
      <VoiceSamples />

      {/* SECTION: WHO IT'S FOR */}
      <WhoItsFor />

      {/* SECTION: PRICING SECTION (INR PRICING WITH ANNUAL TOGGLE) */}
      <PricingSection onOpenGetStarted={() => setGetStartedOpen(true)} />

      {/* SECTION: FREQUENTLY ASKED QUESTIONS */}
      <FAQSection />

      {/* SECTION: FINAL CALL TO ACTION */}
      <FinalWhatsAppCTA onOpenGetStarted={() => setGetStartedOpen(true)} />

      {/* FOOTER */}
      <footer className="relative z-30 border-t border-slate-200 bg-white py-14 px-6 sm:px-12 text-slate-500 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img
              src="/flowra_expanded.png"
              alt="Flowra"
              className="h-7 w-auto object-contain"
            />
            <span className="text-xs text-slate-500">
              © 2026 Flowra AI Inc. All rights reserved.
            </span>
          </div>
          <div className="flex items-center gap-8 text-xs text-slate-600">
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Meta Certified Business Solution Provider
            </span>
            <span className="hover:text-slate-900 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-slate-900 cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </footer>

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
