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
import { Footer } from "@/components/Footer";
import { Modals } from "@/components/Modals";
import { ReviewBlock } from "@/components/ReviewBlock";
import { ChevronDown, ShieldCheck, Sparkles, Star } from "lucide-react";
import gsap from "gsap";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroLeftRef = useRef<HTMLDivElement>(null);
  const idealForHeaderRef = useRef<HTMLSpanElement>(null);
  const idealForListRef = useRef<HTMLUListElement>(null);

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

  // Entrance animations when user lands on the page
  useEffect(() => {
    // 1. Left side full hero from the left
    if (heroLeftRef.current) {
      gsap.fromTo(
        heroLeftRef.current,
        { x: -75, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.0, ease: "power3.out", delay: 0.15 }
      );
    }

    // 2. Right side "IDEAL FOR:" header from the right
    if (idealForHeaderRef.current) {
      gsap.fromTo(
        idealForHeaderRef.current,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.25 }
      );
    }

    // 3. Right side bullet items point-wise from the right
    if (idealForListRef.current) {
      const items = Array.from(idealForListRef.current.children);
      gsap.fromTo(
        items,
        { x: 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.12,
          ease: "power3.out",
          delay: 0.35,
        }
      );
    }
  }, []);

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
  const handleNavigateToTour = () => {
    const el = document.getElementById("product-tour");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  const handleNavigateToWhoItsFor = () => {
    const el = document.getElementById("who-its-for");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  const handleNavigateToPricing = () => {
    const el = document.getElementById("pricing");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  const handleNavigateToFAQ = () => {
    const el = document.getElementById("faq");
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
        onNavigateToTour={handleNavigateToTour}
        onNavigateToWhoItsFor={handleNavigateToWhoItsFor}
        onNavigateToPricing={handleNavigateToPricing}
        onNavigateToFAQ={handleNavigateToFAQ}
        onOpenContact={() => setContactOpen(true)}
        onOpenGetStarted={() => setGetStartedOpen(true)}
      />

      {/* SCROLLABLE TRACK CONTAINER (350vh):
          Sticks the robot mascot on the right while the scroll sequence transitions smoothly on the left */}
      <div ref={containerRef} className="relative w-full h-[350vh]">
        {/* STICKY VIEWPORT STAGE */}
        <div className="sticky top-0 h-screen w-full z-20 pointer-events-none flex items-center justify-center overflow-hidden">
          {/* IDEAL FOR Panel Pinned to the Right Corner */}
          <div
            className={`absolute right-6 sm:right-10 lg:right-12 xl:right-16 top-[42%] -translate-y-1/2 z-30 transition-all duration-500 ease-out flex flex-col items-end text-right ${activeStage === 0
              ? "opacity-100 translate-x-0 pointer-events-auto"
              : "opacity-0 translate-x-8 pointer-events-none"
              }`}
          >
            <span
              ref={idealForHeaderRef}
              className="text-xs sm:text-sm font-bold tracking-[0.16em] uppercase text-slate-400 mb-4 select-none"
            >
              IDEAL FOR:
            </span>
            <ul
              ref={idealForListRef}
              className="space-y-3.5 text-base sm:text-lg lg:text-[19px] font-semibold text-slate-800 select-none"
            >
              <li className="flex items-center gap-2.5 justify-end group cursor-default hover:text-emerald-700 transition-colors">
                <span>Marketing Teams</span>
                <span className="text-slate-400 group-hover:text-emerald-600 transition-colors">✱</span>
              </li>
              <li className="flex items-center gap-2.5 justify-end group cursor-default hover:text-emerald-700 transition-colors">
                <span>Agencies & SaaS Companies</span>
                <span className="text-slate-400 group-hover:text-emerald-600 transition-colors">✱</span>
              </li>
              <li className="flex items-center gap-2.5 justify-end group cursor-default hover:text-emerald-700 transition-colors">
                <span>Enterprises & Startups</span>
                <span className="text-slate-400 group-hover:text-emerald-600 transition-colors">✱</span>
              </li>
              <li className="flex items-center gap-2.5 justify-end group cursor-default hover:text-emerald-700 transition-colors">
                <span>B2B Companies & Enterprises</span>
                <span className="text-slate-400 group-hover:text-emerald-600 transition-colors">✱</span>
              </li>
            </ul>
          </div>

          <div className="w-full max-w-7xl mx-auto h-full px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-2 items-center pt-20 sm:pt-24 lg:pt-20 pb-6 sm:pb-8">

            {/* LEFT COLUMN: Clean typography container */}
            <div className="relative z-30 h-full flex flex-col justify-center pointer-events-auto pr-0 lg:pr-8">

              {/* 1. HERO SECTION */}
              <div
                className={`absolute inset-0 flex flex-col justify-center transition-all duration-500 ease-out ${activeStage === 0
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-8 pointer-events-none"
                  }`}
              >
                <div ref={heroLeftRef} className="max-w-2xl">
                  {/* Main Headline - in strictly 2 lines with normal font weight */}
                  <h1 className="text-4xl sm:text-5xl lg:text-[54px] xl:text-[58px] font-normal tracking-tight text-slate-900 leading-[1.08]">
                    Your AI employee <br className="hidden sm:inline" />in Marketing
                  </h1>

                  {/* Subhead with concrete capability */}
                  <p className="mt-5 text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-xl">
                    Let AI employees handle campaign execution and optimization while your team focuses on growth.
                  </p>

                  {/* Primary CTA + Scroll indicator */}
                  <div className="mt-9 flex flex-wrap items-center gap-6">
                    <button
                      type="button"
                      onClick={() => setGetStartedOpen(true)}
                      className="btn-pill-black bg-slate-900 text-white px-8 py-3.5 sm:py-4 text-base font-semibold rounded-full shadow-[0_4px_14px_rgba(15,23,42,0.18)] hover:bg-slate-800 hover:shadow-[0_8px_24px_rgba(15,23,42,0.28)] hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
                    >
                      Book ₹9 session
                    </button>

                    <button
                      type="button"
                      onClick={() => scrollToProgress(0.24)}
                      className="group flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer text-sm font-medium py-3 px-2"
                    >
                      <span>Scroll to explore</span>
                      <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                    </button>
                  </div>

                  {/* Native Google Review on Screen Directly (No Card Box) */}
                  <ReviewBlock
                    review={{
                      id: "hero-review",
                      rating: 4.5,
                      headline: "Best AI caller & WhatsApp team in market!",
                      quote: "Flowra calls every lead within seconds in fluent Hinglish, answers catalog doubts, and books warm appointments directly into our CRM.",
                      author: "Rohan Sharma",
                      role: "VP Growth, D2C Brands (Delhi NCR)",
                      avatar: "/indian_reviewer.jpg",
                    }}
                    className="mt-12 sm:mt-14"
                  />
                </div>
              </div>

              {/* 2. FEATURES SECTION (WhatsApp, Website, Voice with 3 dots indicator) */}
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

              {/* 3. HOW IT WORKS SECTION (1, 2, 3 dimmed numbers turning bright) */}
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

              {/* 4. FINAL PART SECTION (Smiling robot closer) */}
              <div
                className={`absolute inset-0 flex flex-col justify-center transition-all duration-500 ease-out ${activeStage === 3
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 translate-y-8 pointer-events-none"
                  }`}
              >
                <FinalCTA onOpenGetStarted={() => setGetStartedOpen(true)} />
              </div>

            </div>

            {/* RIGHT COLUMN: Pinned 3D Robot Mascot (Subtle, constant opacity throughout) */}
            <div className="relative h-full flex items-center justify-center lg:justify-end pointer-events-auto">
              <div className="transition-opacity duration-500 opacity-35 lg:opacity-30 blur-[1px]">
                <RobotMascot faceState={faceState} />
              </div>
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
      <Footer
        onOpenGetStarted={() => setGetStartedOpen(true)}
        onOpenContact={() => setContactOpen(true)}
      />

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
