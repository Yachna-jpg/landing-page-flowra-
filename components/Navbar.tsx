"use client";

import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import {
  Menu,
  X,
  ChevronDown,
  TrendingUp,
  Briefcase,
  Scale,
  Home,
  Layers,
  Building2,
  Calendar,
  ArrowUpRight,
} from "lucide-react";

interface NavbarProps {
  onNavigateToFeatures: () => void;
  onNavigateToTour?: () => void;
  onNavigateToWhoItsFor: () => void;
  onNavigateToPricing?: () => void;
  onNavigateToFAQ?: () => void;
  onOpenContact: () => void;
  onOpenGetStarted: () => void;
}

interface UseCaseItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const USE_CASES: UseCaseItem[] = [
  {
    id: "founders",
    title: "For Founders",
    description: "Investor pings, intros, the calendar tetris.",
    icon: TrendingUp,
  },
  {
    id: "investors",
    title: "For Investors",
    description: "Dealflow triaged, founders kept warm, intros that actually move.",
    icon: Briefcase,
  },
  {
    id: "lawyers",
    title: "For Lawyers",
    description: "Scheduling, intake, billing follow-ups.",
    icon: Scale,
  },
  {
    id: "real-estate",
    title: "For Real Estate Agents",
    description: "Leads answered the second they land, showings booked, closings on track.",
    icon: Home,
  },
  {
    id: "agencies",
    title: "For Agencies",
    description: "Client check-ins, status updates, calendar tetris across accounts.",
    icon: Layers,
  },
  {
    id: "enterprise",
    title: "For Enterprise",
    description: "Flowra for the whole company.",
    icon: Building2,
  },
];

export const Navbar: React.FC<NavbarProps> = ({
  onNavigateToFeatures,
  onNavigateToTour,
  onNavigateToWhoItsFor,
  onNavigateToPricing,
  onNavigateToFAQ,
  onOpenContact,
  onOpenGetStarted,
}) => {
  const [useCasesOpen, setUseCasesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileUseCasesOpen, setMobileUseCasesOpen] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  // Smooth entrance from top when landing on website
  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { y: -60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", delay: 0.05 }
      );
    }
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setUseCasesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setUseCasesOpen(false);
    }, 180);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSelectUseCase = (id: string) => {
    setUseCasesOpen(false);
    setMobileMenuOpen(false);
    onNavigateToWhoItsFor();
  };

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 transition-all select-none bg-transparent"
    >
      {/* Completely Transparent Top Bar */}
      <div className="relative z-50 px-6 sm:px-12 py-4 sm:py-5 max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Side: Brand Logo */}
        <div
          onClick={handleScrollToTop}
          className="cursor-pointer flex items-center py-1 group"
        >
          <img
            src="/flowra_expanded.png"
            alt="Flowra"
            className="h-[22px] sm:h-[26px] md:h-[29px] w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
          />
        </div>

        {/* Right Side: Nav Links and Start Free / CTA Button */}
        <div className="hidden lg:flex items-center space-x-8">
          <nav className="flex items-center space-x-7 text-[15px] font-medium text-slate-700">
            {/* Product / Features */}
            <button
              onClick={onNavigateToFeatures}
              className="hover:text-slate-950 transition-colors cursor-pointer"
            >
              Product
            </button>

            {/* Solutions / Use Cases Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setUseCasesOpen(!useCasesOpen)}
                className={`flex items-center gap-1.5 transition-colors cursor-pointer hover:text-slate-950 ${
                  useCasesOpen ? "text-slate-950 font-semibold" : ""
                }`}
              >
                <span>Solutions</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    useCasesOpen ? "rotate-180 text-slate-900" : "text-slate-400"
                  }`}
                />
              </button>
            </div>

            {/* AI Agent / Product Tour */}
            {onNavigateToTour && (
              <button
                onClick={onNavigateToTour}
                className="hover:text-slate-950 transition-colors cursor-pointer"
              >
                AI Agent
              </button>
            )}

            {/* Pricing */}
            {onNavigateToPricing && (
              <button
                onClick={onNavigateToPricing}
                className="hover:text-slate-950 transition-colors cursor-pointer"
              >
                Pricing
              </button>
            )}

            {/* Resources / FAQ */}
            {onNavigateToFAQ && (
              <button
                onClick={onNavigateToFAQ}
                className="hover:text-slate-950 transition-colors cursor-pointer"
              >
                Resources
              </button>
            )}
          </nav>

          {/* Start Free / Primary CTA Button */}
          <button
            onClick={onOpenGetStarted}
            className="bg-slate-900 hover:bg-black text-white text-sm font-semibold px-6 py-2.5 rounded-full shadow-[0_2px_12px_rgba(15,23,42,0.15)] hover:shadow-[0_4px_18px_rgba(15,23,42,0.25)] hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
          >
            <span>Start Free</span>
          </button>
        </div>

        {/* Mobile Menu Actions */}
        <div className="flex lg:hidden items-center space-x-2.5">
          <button
            onClick={onOpenGetStarted}
            className="bg-slate-900 text-white px-4 py-1.5 text-xs font-semibold rounded-full shadow-sm hover:bg-slate-800 transition-all cursor-pointer"
          >
            Start Free
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-slate-700 hover:text-slate-900 transition-colors cursor-pointer"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Solutions / Mega Menu Dropdown */}
      <div
        className={`hidden lg:block absolute top-full left-0 right-0 pt-2 px-6 sm:px-12 transition-all duration-300 ease-out origin-top ${
          useCasesOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="max-w-6xl mx-auto bg-white/95 rounded-3xl border border-slate-200/90 shadow-[0_25px_60px_-10px_rgba(15,23,42,0.14),0_10px_25px_rgba(0,0,0,0.04)] p-8 sm:p-9 backdrop-blur-2xl">
          <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-slate-400 mb-5">
            SOLUTIONS & USE CASES
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4.5 sm:gap-5">
            {USE_CASES.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  onClick={() => handleSelectUseCase(item.id)}
                  className="group p-5 sm:p-6 rounded-2xl bg-[#F8F9FA] hover:bg-slate-100/90 border border-slate-100 hover:border-slate-300/80 transition-all duration-200 cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="text-slate-400 group-hover:text-slate-800 transition-colors mb-4">
                      <Icon className="w-5 h-5 stroke-[1.6]" />
                    </div>
                    <h3 className="text-[16px] sm:text-[17px] font-semibold text-slate-900 group-hover:text-slate-950 transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-[13px] text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mx-4 mt-2 p-5 bg-white/95 backdrop-blur-xl rounded-2xl border border-slate-200 shadow-xl space-y-3 text-base">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onNavigateToFeatures();
            }}
            className="block w-full text-left py-2 text-slate-700 hover:text-slate-900 font-medium"
          >
            Product
          </button>

          <div>
            <button
              onClick={() => setMobileUseCasesOpen(!mobileUseCasesOpen)}
              className="flex items-center justify-between w-full py-2 text-slate-800 font-semibold text-left"
            >
              <span>Solutions</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  mobileUseCasesOpen ? "rotate-180 text-slate-900" : "text-slate-400"
                }`}
              />
            </button>

            {mobileUseCasesOpen && (
              <div className="mt-2 pl-3 space-y-2 border-l-2 border-slate-100">
                {USE_CASES.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.id}
                      onClick={() => handleSelectUseCase(item.id)}
                      className="py-2 cursor-pointer flex items-start gap-2.5"
                    >
                      <Icon className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                      <div>
                        <div className="text-sm font-semibold text-slate-900">
                          {item.title}
                        </div>
                        <div className="text-xs text-slate-500 leading-tight">
                          {item.description}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {onNavigateToTour && (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateToTour();
              }}
              className="block w-full text-left py-2 text-slate-700 hover:text-slate-900 font-medium"
            >
              AI Agent
            </button>
          )}

          {onNavigateToPricing && (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateToPricing();
              }}
              className="block w-full text-left py-2 text-slate-700 hover:text-slate-900 font-medium"
            >
              Pricing
            </button>
          )}

          {onNavigateToFAQ && (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateToFAQ();
              }}
              className="block w-full text-left py-2 text-slate-700 hover:text-slate-900 font-medium"
            >
              Resources
            </button>
          )}

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact();
            }}
            className="block w-full text-left py-2 text-slate-700 hover:text-slate-900 font-medium"
          >
            Contact
          </button>
        </div>
      )}
    </header>
  );
};
