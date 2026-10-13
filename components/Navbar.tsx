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
    <header className="fixed top-0 left-0 right-0 z-50 px-6 sm:px-12 py-6 backdrop-blur-xl bg-[#08080a]/60 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Flowora Logo only */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="cursor-pointer select-none"
        >
          <span className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            Flowora
          </span>
        </div>

        {/* 3 Links (Features, Who it's for, Contact) */}
        <nav className="hidden md:flex items-center space-x-12 text-[15px] text-zinc-400">
          <button
            onClick={onNavigateToFeatures}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Features
          </button>
          <button
            onClick={onNavigateToWhoItsFor}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Who it&apos;s for
          </button>
          <button
            onClick={onOpenContact}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Contact
          </button>
        </nav>

        {/* Get Started Button: white pill shape, black text, soft glow */}
        <div className="hidden md:flex items-center">
          <button
            onClick={onOpenGetStarted}
            className="btn-pill-white px-6 py-2.5 text-sm font-semibold cursor-pointer"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center space-x-3">
          <button
            onClick={onOpenGetStarted}
            className="btn-pill-white px-4 py-1.5 text-xs font-semibold"
          >
            Get Started
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-zinc-400 hover:text-white transition-colors"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden pt-4 pb-2 border-t border-white/[0.06] mt-4 space-y-3 text-base">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onNavigateToFeatures();
            }}
            className="block w-full text-left py-2 text-zinc-300 hover:text-white"
          >
            Features
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onNavigateToWhoItsFor();
            }}
            className="block w-full text-left py-2 text-zinc-300 hover:text-white"
          >
            Who it&apos;s for
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact();
            }}
            className="block w-full text-left py-2 text-zinc-300 hover:text-white"
          >
            Contact
          </button>
        </div>
      )}
    </header>
  );
};
