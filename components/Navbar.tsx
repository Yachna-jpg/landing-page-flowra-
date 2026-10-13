"use client";

import React, { useState } from "react";
import {
  Menu,
  X,
  ArrowUpRight,
  Calendar,
  Sparkles,
  MessageSquare,
  PhoneCall,
  Bot,
  Layers,
  Users,
  CreditCard,
  HelpCircle,
  Mail,
  Zap,
  PlayCircle,
  Cpu,
  Workflow,
  Globe2,
} from "lucide-react";
import { DropdownNavigation, NavItem } from "@/components/ui/dorpdown-navigation";

interface NavbarProps {
  onNavigateToFeatures: () => void;
  onNavigateToHowItWorks?: () => void;
  onNavigateToTour?: () => void;
  onNavigateToFlow?: () => void;
  onNavigateToVoices?: () => void;
  onNavigateToWhoItsFor: () => void;
  onNavigateToPricing?: () => void;
  onNavigateToFAQ?: () => void;
  onOpenContact: () => void;
  onOpenGetStarted: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onNavigateToFeatures,
  onNavigateToHowItWorks,
  onNavigateToTour,
  onNavigateToFlow,
  onNavigateToVoices,
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

  const navItems: NavItem[] = [
    {
      id: 1,
      label: "Product",
      subMenus: [
        {
          title: "Core Platform",
          items: [
            {
              label: "AI Lead Agents",
              description: "WhatsApp & voice call automation",
              icon: Bot,
              onClick: onNavigateToFeatures,
            },
            {
              label: "Interactive Product Tour",
              description: "See real workflows in action",
              icon: PlayCircle,
              onClick: onNavigateToTour,
            },
            {
              label: "Lead Qualifier Flow",
              description: "Lead form in, booked call out",
              icon: Workflow,
              onClick: onNavigateToFlow,
            },
          ],
        },
        {
          title: "Capabilities",
          items: [
            {
              label: "Voice Samples & Dialects",
              description: "Hindi, Hinglish & 10+ languages",
              icon: PhoneCall,
              onClick: onNavigateToVoices,
            },
            {
              label: "3-Step Setup",
              description: "Live on your number in 15 minutes",
              icon: Zap,
              onClick: onNavigateToHowItWorks,
            },
          ],
        },
      ],
    },
    {
      id: 2,
      label: "Solutions",
      subMenus: [
        {
          title: "Industries",
          items: [
            {
              label: "High-Ticket Real Estate",
              description: "Instant site visits & qualification",
              icon: Layers,
              onClick: onNavigateToWhoItsFor,
            },
            {
              label: "B2B & High-Intent Services",
              description: "Qualify inbound forms immediately",
              icon: Cpu,
              onClick: onNavigateToWhoItsFor,
            },
            {
              label: "Clinics & Consultancies",
              description: "Automated booking & reminders",
              icon: Users,
              onClick: onNavigateToWhoItsFor,
            },
          ],
        },
      ],
    },
    {
      id: 3,
      label: "Who It's For",
      onClick: onNavigateToWhoItsFor,
    },
    {
      id: 4,
      label: "Pricing",
      onClick: onNavigateToPricing,
    },
    {
      id: 5,
      label: "FAQ",
      onClick: onNavigateToFAQ,
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 sm:px-12 py-3 sm:py-3.5 backdrop-blur-xl bg-white/90 border-b border-slate-200/80 transition-all shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Prominent Flowra Logo */}
        <div
          onClick={handleScrollToTop}
          className="cursor-pointer select-none flex items-center py-1 group"
        >
          <img
            src="/flowra_expanded.png"
            alt="Flowra"
            className="h-9 sm:h-11 md:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
          />
        </div>

        {/* Center Nav Dropdown Navigation (Desktop) */}
        <nav className="hidden lg:flex items-center justify-center">
          <DropdownNavigation navItems={navItems} />
        </nav>

        {/* Right side CTAs & Main Website App Redirect */}
        <div className="hidden md:flex items-center space-x-3.5">
          <button
            onClick={onOpenContact}
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors cursor-pointer px-3 py-1.5 rounded-full hover:bg-slate-100"
          >
            Contact
          </button>

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
            className="btn-pill-black bg-slate-900 text-white px-5 sm:px-6 py-2.5 text-sm font-semibold rounded-full shadow-[0_4px_12px_rgba(15,23,42,0.18)] hover:bg-slate-800 hover:shadow-[0_6px_20px_rgba(15,23,42,0.25)] hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer flex items-center gap-2"
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
        <div className="md:hidden pt-4 pb-2 border-t border-slate-200 mt-3 space-y-2 text-base bg-white/95 rounded-2xl px-4 py-3 shadow-lg">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onNavigateToFeatures();
            }}
            className="block w-full text-left py-2 text-slate-700 hover:text-slate-900 font-medium"
          >
            Features & AI Agents
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
          {onNavigateToVoices && (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateToVoices();
              }}
              className="block w-full text-left py-2 text-slate-700 hover:text-slate-900 font-medium"
            >
              Voice Samples
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
