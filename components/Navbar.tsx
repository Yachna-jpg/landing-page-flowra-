"use client";

import React, { useState } from "react";
import { Menu, X, ArrowUpRight, Calendar } from "lucide-react";

interface NavbarProps {
  onNavigateToFeatures: () => void;
  onNavigateToTour?: () => void;
  onNavigateToWhoItsFor: () => void;
  onNavigateToPricing?: () => void;
  onNavigateToFAQ?: () => void;
  onOpenContact: () => void;
  onOpenGetStarted: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onNavigateToFeatures,
  onNavigateToTour,
  onNavigateToWhoItsFor,
  onNavigateToPricing,
  onNavigateToFAQ,
  onOpenContact,
  onOpenGetStarted,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 sm:px-12 py-3.5 sm:py-4 backdrop-blur-xl bg-white/90 border-b border-slate-200/80 transition-all shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Prominent Flowra Logo (Increased size per user request) */}
        <div
          onClick={handleScrollToTop}
          className="cursor-pointer select-none flex items-center py-1 group"
        >
          <img
            src="/flowra_expanded.png"
            alt="Flowra"
            className="h-10 sm:h-12 md:h-13 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
          />
        </div>

        {/* Center Nav Links (Desktop) */}
        <nav className="hidden lg:flex items-center space-x-9 text-[14px] font-medium text-slate-600">
          <button
            onClick={onNavigateToFeatures}
            className="hover:text-slate-900 transition-colors cursor-pointer"
          >
            Features
          </button>
          {onNavigateToTour && (
            <button
              onClick={onNavigateToTour}
              className="hover:text-slate-900 transition-colors cursor-pointer"
            >
              Product Tour
            </button>
          )}
          <button
            onClick={onNavigateToWhoItsFor}
            className="hover:text-slate-900 transition-colors cursor-pointer"
          >
            Who it&apos;s for
          </button>
          {onNavigateToPricing && (
            <button
              onClick={onNavigateToPricing}
              className="hover:text-slate-900 transition-colors cursor-pointer"
            >
              Pricing
            </button>
          )}
          {onNavigateToFAQ && (
            <button
              onClick={onNavigateToFAQ}
              className="hover:text-slate-900 transition-colors cursor-pointer"
            >
              FAQ
            </button>
          )}
          <button
            onClick={onOpenContact}
            className="hover:text-slate-900 transition-colors cursor-pointer"
          >
            Contact
          </button>
        </nav>

        {/* Right side CTAs & Main Website App Redirect */}
        <div className="hidden md:flex items-center space-x-3.5">
          {/* Main Website App Login Redirect */}
          <a
            href="https://app.flowra.ai/login"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-1 cursor-pointer px-3.5 py-2 rounded-full hover:bg-slate-100"
          >
            <span>Log in</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
          </a>

          {/* Primary Demo Booking CTA */}
          <button
            onClick={onOpenGetStarted}
            className="btn-pill-black bg-slate-900 text-white px-6 py-2.5 text-sm font-semibold rounded-full shadow-[0_4px_12px_rgba(15,23,42,0.18)] hover:bg-slate-800 hover:shadow-[0_6px_20px_rgba(15,23,42,0.25)] hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer flex items-center gap-2"
          >
            <Calendar className="w-3.5 h-3.5 text-slate-300" />
            <span>Book ₹9 session</span>
          </button>
        </div>

        {/* Mobile Actions */}
        <div className="flex md:hidden items-center space-x-2.5">
          <button
            onClick={onOpenGetStarted}
            className="btn-pill-black bg-slate-900 text-white px-3.5 py-1.5 text-xs font-semibold rounded-full shadow-sm hover:bg-slate-800 transition-all cursor-pointer"
          >
            Book ₹9
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-slate-700 hover:text-slate-900 transition-colors"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden pt-4 pb-2 border-t border-slate-200 mt-3 space-y-2.5 text-base bg-white/95 rounded-2xl px-4 py-3 shadow-lg">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onNavigateToFeatures();
            }}
            className="block w-full text-left py-2 text-slate-700 hover:text-slate-900 font-medium"
          >
            Features
          </button>
          {onNavigateToTour && (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateToTour();
              }}
              className="block w-full text-left py-2 text-slate-700 hover:text-slate-900 font-medium"
            >
              Product Tour
            </button>
          )}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onNavigateToWhoItsFor();
            }}
            className="block w-full text-left py-2 text-slate-700 hover:text-slate-900 font-medium"
          >
            Who it&apos;s for
          </button>
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
              FAQ
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

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
            <a
              href="https://app.flowra.ai/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-slate-700 hover:text-slate-900 flex items-center gap-1 py-1"
            >
              <span>Log in to App</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
