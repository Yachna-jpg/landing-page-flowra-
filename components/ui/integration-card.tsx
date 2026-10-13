"use client";

import { useId, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import {
  LayoutDashboard,
  Inbox,
  Workflow,
  Mic,
  MessageCircle,
  SlidersHorizontal,
  FormInput,
  Database,
  ArrowRight,
  Sparkles,
} from "lucide-react";

// --- ACTUAL BRAND / SERVICE SVG ICONS ---

export const WhatsAppActualIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 32 32" className={className} aria-label="WhatsApp">
    <path
      fill="#25D366"
      d="M16 2C8.27 2 2 8.27 2 16c0 2.64.73 5.12 2 7.24L2 30l6.96-1.96A13.92 13.92 0 0 0 16 30c7.73 0 14-6.27 14-14S23.73 2 16 2z"
    />
    <path
      fill="#FFFFFF"
      d="M22.84 19.34c-.38-.19-2.22-1.1-2.56-1.22-.35-.13-.6-.19-.85.19-.25.38-.97 1.22-1.19 1.47-.22.25-.44.28-.82.09-.38-.19-1.61-.59-3.07-1.89-1.14-1.02-1.9-2.27-2.13-2.65-.22-.38-.02-.59.17-.77.17-.17.38-.44.57-.66.19-.22.25-.38.38-.63.13-.25.06-.47-.03-.66-.09-.19-.85-2.06-1.17-2.81-.31-.75-.63-.66-.85-.66h-.73c-.25 0-.66.09-1.01.47-.35.38-1.33 1.3-1.33 3.16s1.36 3.67 1.55 3.92c.19.25 2.67 4.09 6.47 5.73.9.39 1.61.63 2.16.8.91.29 1.73.25 2.39.15.73-.11 2.22-.91 2.53-1.79.32-.88.32-1.63.22-1.79-.09-.16-.35-.25-.73-.44z"
    />
  </svg>
);

export const GmailActualIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} aria-label="Gmail">
    <path fill="#4285F4" d="M45 16.2v22.8c0 2.8-2.2 5-5 5H35V24l10-7.8z" />
    <path fill="#34A853" d="M3 16.2L13 24v20H8c-2.8 0-5-2.2-5-5V16.2z" />
    <path fill="#FBBC05" d="M35 24V9.8L24 18 13 9.8V24l11 8.2 11-8.2z" />
    <path fill="#EA4335" d="M40 4H35v5.8L24 18 13 9.8V4H8C5.2 4 3 6.2 3 9v7.2L24 32l21-15.8V9c0-2.8-2.2-5-5-5z" />
  </svg>
);

export const GoogleSheetsActualIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} aria-label="Google Sheets">
    <path fill="#0F9D58" d="M29 4H10C7.8 4 6 5.8 6 8v32c0 2.2 1.8 4 4 4h28c2.2 0 4-1.8 4-4V17L29 4z" />
    <path fill="#87CEAC" d="M29 4l13 13H29V4z" />
    <path fill="#FFFFFF" d="M14 22h20v16H14V22zm2 2v3h7v-3h-7zm9 0v3h7v-3h-7zm-9 5v3h7v-3h-7zm9 0v3h7v-3h-7zm-9 5v3h7v-3h-7zm9 0v3h7v-3h-7z" />
  </svg>
);

export const FirebaseActualIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} aria-label="Firebase">
    <path
      fill="#FFA000"
      d="M3.89 15.67L6.8 2.8a.78.78 0 0 1 1.46-.22l3.2 6.02-7.57 7.07z"
    />
    <path
      fill="#F57C00"
      d="M13.88 7.37L11.53.53a.78.78 0 0 0-1.43 0L3.89 15.67l7.53 4.22a1.6 1.6 0 0 0 1.52 0l7.17-4.02L13.88 7.37z"
    />
    <path
      fill="#FFCA28"
      d="M20.11 15.87l-2.07-5.24-4.16-3.26L3.89 15.67l7.53 4.22a1.6 1.6 0 0 0 1.52 0l7.17-4.02z"
    />
  </svg>
);

export const VoiceAgentActualIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 32 32" className={className} aria-label="Voice Agent">
    <defs>
      <linearGradient id="voice-agent-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4F46E5" />
        <stop offset="50%" stopColor="#7C3AED" />
        <stop offset="100%" stopColor="#9333EA" />
      </linearGradient>
    </defs>
    <rect width="32" height="32" rx="8" fill="url(#voice-agent-gradient)" />
    <path
      fill="#FFFFFF"
      d="M16 6a4 4 0 0 0-4 4v6a4 4 0 0 0 8 0v-6a4 4 0 0 0-4-4zm-1 16.92v2.08h2v-2.08a8.01 8.01 0 0 0 7-7.92h-2a6 6 0 1 1-12 0H8a8.01 8.01 0 0 0 7 7.92z"
    />
    <circle cx="8" cy="15" r="1.2" fill="#E0E7FF" opacity="0.9" />
    <circle cx="24" cy="15" r="1.2" fill="#E0E7FF" opacity="0.9" />
  </svg>
);

export const MetaActualIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 32 32" className={className} aria-label="Meta">
    <path
      fill="#0081FB"
      d="M28.4 10.3C27.1 8.2 24.9 7 22.4 7c-2.8 0-5.3 1.6-7.1 4.1C13.5 8.6 11 7 8.2 7 5.7 7 3.5 8.2 2.2 10.3.9 12.5.3 15.2.3 18c0 3.7 1.8 6.8 4.7 8.1 1.1.5 2.3.8 3.5.8 3.3 0 6.2-2.1 8-5.3 1.8 3.2 4.7 5.3 8 5.3 1.2 0 2.4-.3 3.5-.8 2.9-1.3 4.7-4.4 4.7-8.1 0-2.8-.6-5.5-1.9-7.7h-.4zM8.5 23.3c-2.3 0-4-2.2-4-5.3 0-2.4.9-4.8 2.2-6.5 1-1.3 2.3-2.1 3.7-2.1 1.7 0 3.2 1.2 4.2 3.1-2.4 4.8-4.4 10.8-6.1 10.8zm13.6 0c-1.7 0-3.7-6-6.1-10.8 1-1.9 2.5-3.1 4.2-3.1 1.4 0 2.7.8 3.7 2.1 1.3 1.7 2.2 4.1 2.2 6.5 0 3.1-1.7 5.3-4 5.3z"
    />
  </svg>
);

export const HubSpotActualIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 32 32" className={className} aria-label="HubSpot">
    <path
      fill="#FF7A59"
      d="M24.7 11.2V8.3c.7-.4 1.2-1.1 1.2-2 0-1.3-1-2.3-2.3-2.3s-2.3 1-2.3 2.3c0 .9.5 1.6 1.2 2v2.9c-1.2.3-2.3.9-3.2 1.7l-7.7-6c.1-.3.2-.6.2-1 0-1.8-1.5-3.3-3.3-3.3S5.2 4.1 5.2 5.9s1.5 3.3 3.3 3.3c.7 0 1.3-.2 1.8-.6l7.5 5.8c-.7 1.1-1.1 2.4-1.1 3.8 0 1.2.3 2.4.9 3.4l-3.3 3.3c-.3-.1-.6-.2-.9-.2-1.8 0-3.3 1.5-3.3 3.3s1.5 3.3 3.3 3.3 3.3-1.5 3.3-3.3c0-.6-.2-1.2-.5-1.7l3.2-3.2c1.1.7 2.4 1.1 3.8 1.1 3.8 0 6.9-3.1 6.9-6.9 0-2.9-1.8-5.4-4.3-6.4v-.1zm-1.1 10.3c-2.4 0-4.3-1.9-4.3-4.3s1.9-4.3 4.3-4.3 4.3 1.9 4.3 4.3-1.9 4.3-4.3 4.3z"
    />
  </svg>
);

export const WebWidgetActualIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 32 32" className={className} aria-label="Web Chat">
    <defs>
      <linearGradient id="webchat-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0284C7" />
        <stop offset="100%" stopColor="#0EA5E9" />
      </linearGradient>
    </defs>
    <rect width="32" height="32" rx="8" fill="url(#webchat-gradient)" />
    <path
      fill="#FFFFFF"
      d="M9 10h14c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2h-4l-4 3.5V22H9c-1.1 0-2-.9-2-2v-8c0-1.1.9-2 2-2z"
    />
    <circle cx="12.5" cy="16" r="1.3" fill="#0284C7" />
    <circle cx="16" cy="16" r="1.3" fill="#0284C7" />
    <circle cx="19.5" cy="16" r="1.3" fill="#0284C7" />
  </svg>
);

interface IntegrationItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  x: number;
  y: number;
  path: string;
  delay: number;
  targetId: string;
  side: "left" | "right";
  tag: string;
  headline: string;
  description: string;
  metric: string;
}

// 8 features connected to Flowra center (Center is 282, 205 in a 564x410 viewport)
// 4 left features: HubSpot & CRM (top-left), Voice Agent (mid-left), Web Widget (bottom-left), Gmail Inbox (top-center)
// 4 right features: Google Sheets (top-right), WhatsApp Bot (mid-right), Meta Lead Ads (bottom-center), Firebase (bottom-right)
const integrations: IntegrationItem[] = [
  {
    id: "dashboard",
    label: "HubSpot & CRM",
    icon: HubSpotActualIcon,
    x: 90,
    y: 70,
    path: "M 265 205 V 85 Q 265 70 250 70 H 90",
    delay: 0.1,
    targetId: "product-tour-dashboard",
    side: "left",
    tag: "CRM & Pipeline Sync",
    headline: "Syncs with HubSpot, Salesforce & CRMs",
    description: "Automatically updates deals, logs full call transcripts, and pushes qualified buyer stages in real time.",
    metric: "Two-way live sync",
  },
  {
    id: "voice-agent",
    label: "AI Voice Agent",
    icon: VoiceAgentActualIcon,
    x: 75,
    y: 205,
    path: "M 252 205 H 75",
    delay: 0.15,
    targetId: "product-tour-voice-agent",
    side: "left",
    tag: "Voice Calling AI",
    headline: "Speaks Hindi, Hinglish & 10+ Dialects",
    description: "Handles natural, ultra-low latency phone calls, qualifies intent, and warm-transfers to your team.",
    metric: "Sub-second speech latency",
  },
  {
    id: "web-widget-builder",
    label: "Web Chat Widget",
    icon: WebWidgetActualIcon,
    x: 90,
    y: 340,
    path: "M 265 205 V 325 Q 265 340 250 340 H 90",
    delay: 0.2,
    targetId: "product-tour-web-widget-builder",
    side: "left",
    tag: "On-Site Chat Widget",
    headline: "Custom branded web assistant in minutes",
    description: "Engages landing page visitors, answers catalog queries, and books meetings before they exit.",
    metric: "Zero code embed",
  },
  {
    id: "shared-inbox-filter",
    label: "Gmail & Inbox",
    icon: GmailActualIcon,
    x: 282,
    y: 60,
    path: "M 282 205 V 60",
    delay: 0.25,
    targetId: "product-tour-shared-inbox-filter",
    side: "left",
    tag: "Gmail & Team Inbox",
    headline: "Unified Gmail & Multi-Agent Inbox",
    description: "Filter urgent, unassigned, or bot-escalated leads across Gmail, WhatsApp, and calls in one shared pane.",
    metric: "0 lost conversations",
  },
  {
    id: "visual-workflows",
    label: "Google Sheets",
    icon: GoogleSheetsActualIcon,
    x: 474,
    y: 70,
    path: "M 299 205 V 85 Q 299 70 314 70 H 474",
    delay: 0.3,
    targetId: "product-tour-visual-workflows",
    side: "right",
    tag: "Google Sheets Automation",
    headline: "Instant Google Sheet & Zapier Sync",
    description: "Import cold leads or append fresh qualified inquiries directly to your Google Sheets within 3 seconds.",
    metric: "3s instant sheet sync",
  },
  {
    id: "whatsapp-chatbot",
    label: "WhatsApp Bot",
    icon: WhatsAppActualIcon,
    x: 489,
    y: 205,
    path: "M 312 205 H 489",
    delay: 0.35,
    targetId: "product-tour-whatsapp-chatbot",
    side: "right",
    tag: "WhatsApp Official API",
    headline: "Instant replies 24/7 on WhatsApp",
    description: "Responds from verified catalog and pricing data, answers buyer queries, and books appointments instantly.",
    metric: "98.4% delivery rate",
  },
  {
    id: "lead-capture",
    label: "Meta Lead Ads",
    icon: MetaActualIcon,
    x: 282,
    y: 350,
    path: "M 282 205 V 350",
    delay: 0.4,
    targetId: "product-tour-lead-capture",
    side: "right",
    tag: "Meta & Form Capture",
    headline: "Instant Meta Lead Ads Outreach",
    description: "Triggers instant WhatsApp and phone outreach the second an inquiry lands from Facebook or Instagram ads.",
    metric: "Under 5s instant outreach",
  },
  {
    id: "whatsapp-knowledge",
    label: "Firebase Data",
    icon: FirebaseActualIcon,
    x: 474,
    y: 340,
    path: "M 299 205 V 325 Q 299 340 314 340 H 474",
    delay: 0.45,
    targetId: "product-tour-whatsapp-knowledge",
    side: "right",
    tag: "Firebase & Knowledge Base",
    headline: "Firebase Realtime Data & Knowledge Base",
    description: "Grounded in your verified documents, Firebase data, and catalog vectors so AI never hallucinates pricing.",
    metric: "100% grounded facts",
  },
];

const AnimatedPath = ({ d, id, isActive }: { d: string; id: string; isActive: boolean }) => {
  return (
    <>
      <path
        d={d}
        stroke="currentColor"
        strokeWidth={isActive ? "2" : "1.5"}
        fill="none"
        className={isActive ? "text-emerald-300" : "text-slate-200"}
      />
      <motion.path
        d={d}
        stroke={`url(#${id})`}
        strokeWidth={isActive ? "3.5" : "2.5"}
        fill="none"
        strokeDasharray="40 160"
        initial={{ strokeDashoffset: 200 }}
        animate={{ strokeDashoffset: -200 }}
        transition={{
          duration: isActive ? 2 : 3.5,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <defs>
        <linearGradient id={id} gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="transparent" />
          <stop
            offset="50%"
            stopColor="#10b981"
            stopOpacity={isActive ? "1" : "0.75"}
          />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
    </>
  );
};

export function Integration() {
  const containerId = useId();
  const [selectedFeature, setSelectedFeature] = useState<IntegrationItem | null>(null);

  const handleSelectFeature = (item: IntegrationItem) => {
    // If clicking the already selected feature, scroll to its section in the product tour
    if (selectedFeature?.id === item.id) {
      const el = document.getElementById(item.targetId);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      setSelectedFeature(item);
    }
  };

  const handleScrollToTour = () => {
    const el = document.getElementById("product-tour");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto flex flex-col items-center">
      {/* 3-Column Interactive Area: Left Descriptions | Central 8-Node Map | Right Descriptions */}
      <div className="relative w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        
        {/* LEFT SIDE PANEL: Displays description for left-hand icons */}
        <div className="lg:col-span-3 order-2 lg:order-1 flex flex-col justify-center min-h-[170px] px-3 sm:px-0">
          <AnimatePresence mode="wait">
            {selectedFeature && selectedFeature.side === "left" && (
              <motion.div
                key={selectedFeature.id}
                initial={{ opacity: 0, x: -14 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="text-left flex flex-col gap-2"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-center shrink-0">
                    <selectedFeature.icon className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600">
                      {selectedFeature.tag}
                    </span>
                    <span className="text-[11px] font-medium text-slate-400">
                      {selectedFeature.metric}
                    </span>
                  </div>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  {selectedFeature.headline}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {selectedFeature.description}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById(selectedFeature.targetId);
                    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
                  }}
                  className="mt-1 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 transition-colors cursor-pointer self-start group"
                >
                  <span>See in action</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* CENTER INTERACTIVE SVG NETWORK MAP */}
        <div className="lg:col-span-6 order-1 lg:order-2 relative w-full flex items-center justify-center">
          <div className="relative aspect-564/410 w-full max-w-[540px] rounded-2xl bg-slate-50/70 p-4 sm:p-6 overflow-hidden">
            {/* Subtle Dot Grid */}
            <div
              className="absolute inset-0 opacity-40 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #cbd5e1 1.2px, transparent 1.2px)",
                backgroundSize: "24px 24px",
              }}
            />
            {/* Soft Ambient Radial Vignette */}
            <div className="pointer-events-none absolute inset-0 bg-radial from-transparent via-white/10 to-white/70" />

            {/* 8 Connecting SVG Lines */}
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 564 410"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {integrations.map((integration) => (
                <AnimatedPath
                  key={integration.id}
                  d={integration.path}
                  id={`${containerId}-${integration.id}`}
                  isActive={selectedFeature?.id === integration.id}
                />
              ))}
            </svg>

            {/* Main Center Logo: Flowra */}
            <div
              onClick={handleScrollToTour}
              title="Flowra Engine - Click to explore tour"
              className="group/center cursor-pointer absolute top-1/2 left-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border border-slate-200 bg-white p-1.5 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <div className="border border-slate-100 px-2 py-1 rounded-lg bg-slate-50 group-hover/center:bg-emerald-50/50 transition-colors">
                <img
                  src="/flowra_expanded.png"
                  alt="Flowra"
                  className="h-4.5 sm:h-5.5 w-auto object-contain"
                />
              </div>
              <motion.div
                className="absolute inset-0 rounded-xl border-2 border-emerald-500/30"
                animate={{ scale: [1, 1.14, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            {/* 8 Peripheral Feature Icons */}
            {integrations.map((integration) => {
              const Icon = integration.icon;
              const isSelected = selectedFeature?.id === integration.id;
              return (
                <motion.button
                  key={integration.id}
                  type="button"
                  onClick={() => handleSelectFeature(integration)}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: integration.delay }}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    left: `${(integration.x / 564) * 100}%`,
                    top: `${(integration.y / 410) * 100}%`,
                  }}
                  title={`Click to inspect ${integration.label}`}
                  className={cn(
                    "group absolute z-30 flex h-10 w-10 sm:h-13 sm:w-13 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border transition-all duration-200 cursor-pointer shadow-md bg-white",
                    isSelected
                      ? "border-emerald-500 ring-4 ring-emerald-100/90 shadow-[0_0_20px_rgba(16,185,129,0.35)] scale-110"
                      : "border-slate-200/90 hover:border-slate-300 hover:shadow-lg hover:scale-110",
                  )}
                >
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6 transition-transform group-hover:scale-105 drop-shadow-xs" />
                  <span
                    className={cn(
                      "pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md px-2 py-0.5 text-[10px] font-medium shadow transition-opacity z-40 hidden sm:block",
                      isSelected
                        ? "bg-slate-900 text-white opacity-100"
                        : "bg-slate-900/90 text-white opacity-0 group-hover:opacity-100",
                    )}
                  >
                    {integration.label}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* RIGHT SIDE PANEL: Displays description for right-hand icons */}
        <div className="lg:col-span-3 order-3 flex flex-col justify-center min-h-[170px] px-3 sm:px-0">
          <AnimatePresence mode="wait">
            {selectedFeature && selectedFeature.side === "right" && (
              <motion.div
                key={selectedFeature.id}
                initial={{ opacity: 0, x: 14 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="text-left flex flex-col gap-2"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-center shrink-0">
                    <selectedFeature.icon className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600">
                      {selectedFeature.tag}
                    </span>
                    <span className="text-[11px] font-medium text-slate-400">
                      {selectedFeature.metric}
                    </span>
                  </div>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  {selectedFeature.headline}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {selectedFeature.description}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById(selectedFeature.targetId);
                    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
                  }}
                  className="mt-1 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 transition-colors cursor-pointer self-start group"
                >
                  <span>See in action</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

      {/* Responsive mobile description for small viewports when a feature is active */}
      <div className="w-full lg:hidden mt-4 px-2">
        {selectedFeature && (
          <div className="text-left flex flex-col gap-2 pt-3 border-t border-slate-100">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-white border border-slate-200 shadow-xs flex items-center justify-center shrink-0">
                <selectedFeature.icon className="w-4.5 h-4.5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">
                  {selectedFeature.tag}
                </span>
                <span className="text-[10px] text-slate-400">
                  {selectedFeature.metric}
                </span>
              </div>
            </div>
            <h4 className="text-sm font-bold text-slate-900">
              {selectedFeature.headline}
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              {selectedFeature.description}
            </p>
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById(selectedFeature.targetId);
                if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
              }}
              className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 mt-1"
            >
              <span>See in action</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        )}
      </div>

      {/* Bottom Subtitle Copy */}
      <div className="mt-8 text-center max-w-xl">
        <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900">
          Connected Lead Architecture
        </h3>
        <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
          Every lead event across your WhatsApp bots, AI phone calls, forms, CRM syncing, and shared inbox is linked through Flowra&apos;s real-time engine.
        </p>
      </div>
    </div>
  );
}

export function IntegrationCardDemo() {
  return (
    <section className="w-full bg-white py-16 sm:py-24 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex flex-col items-center">
        <div className="text-center max-w-2xl mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900">
            One Unified Engine. Eight Core Capabilities.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Tap any connected node below to inspect that feature. Left icons reveal left details, right icons reveal right details.
          </p>
        </div>

        <Integration />
      </div>
    </section>
  );
}

export default IntegrationCardDemo;
