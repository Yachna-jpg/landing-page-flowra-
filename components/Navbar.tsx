"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onNavigateToFeatures: () => void;
  onNavigateToWhoItsFor: () => void;
  onOpenContact: () => void;
  onOpenGetStarted: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onNavigateToFeatures,
  onNavigateToWhoItsFor,
  onOpenContact,
  onOpenGetStarted,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 sm:px-12 py-4 sm:py-5 backdrop-blur-xl bg-white/85 border-b border-slate-200/80 transition-all shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Flowra Logo (Dark text for Light Mode) */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="cursor-pointer select-none flex items-center"
        >
          <img
            src="/flowra_expanded.png"
            alt="Flowra"
            className="h-8 sm:h-9 w-auto object-contain"
          />
        </div>

        {/* 3 Links (Features, Who it's for, Contact) */}
        <nav className="hidden md:flex items-center space-x-12 text-[15px] font-medium text-slate-600">
          <button
            onClick={onNavigateToFeatures}
            className="hover:text-slate-900 transition-colors cursor-pointer"
          >
            Features
          </button>
          <button
            onClick={onNavigateToWhoItsFor}
            className="hover:text-slate-900 transition-colors cursor-pointer"
          >
            Who it&apos;s for
          </button>
          <button
            onClick={onOpenContact}
            className="hover:text-slate-900 transition-colors cursor-pointer"
          >
            Contact
          </button>
        </nav>

        {/* Get Started Button: sleek black pill shape with soft shadow */}
        <div className="hidden md:flex items-center">
          <button
            onClick={onOpenGetStarted}
            className="btn-pill-black px-6 py-2.5 text-sm font-semibold cursor-pointer"
          >
            Book ₹9 session
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center space-x-3">
          <button
            onClick={onOpenGetStarted}
            className="btn-pill-black px-4 py-1.5 text-xs font-semibold"
          >
            Book ₹9 session
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
        <div className="md:hidden pt-4 pb-2 border-t border-slate-200 mt-4 space-y-3 text-base bg-white/95 rounded-2xl px-4 py-3 shadow-lg">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onNavigateToFeatures();
            }}
            className="block w-full text-left py-2 text-slate-700 hover:text-slate-900 font-medium"
          >
            Features
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onNavigateToWhoItsFor();
            }}
            className="block w-full text-left py-2 text-slate-700 hover:text-slate-900 font-medium"
          >
            Who it&apos;s for
          </button>
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
