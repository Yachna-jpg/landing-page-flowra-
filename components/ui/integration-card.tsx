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
// 4 left features: dashboard, voice-agent, web-widget-builder, shared-inbox-filter (top-mid left)
// 4 right features: visual-workflows, whatsapp-chatbot, lead-capture (bot-mid right), whatsapp-knowledge
const integrations: IntegrationItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    x: 90,
    y: 70,
    path: "M 265 205 V 85 Q 265 70 250 70 H 90",
    delay: 0.1,
    targetId: "product-tour-dashboard",
    side: "left",
    tag: "Operating View",
    headline: "Real-time pipeline movement at a glance",
    description: "Track speed-to-lead, calls, chats, and campaign outcomes in one live unified control view.",
    metric: "6s avg response speed",
  },
  {
    id: "voice-agent",
    label: "Voice Agent",
    icon: Mic,
    x: 75,
    y: 205,
    path: "M 252 205 H 75",
    delay: 0.15,
    targetId: "product-tour-voice-agent",
    side: "left",
    tag: "Multilingual Inbound/Outbound",
    headline: "Speaks Hindi, Hinglish & 10+ dialects",
    description: "Handles natural, ultra-low latency phone calls, qualifies intent, and warm-transfers to your team.",
    metric: "Sub-second speech latency",
  },
  {
    id: "web-widget-builder",
    label: "Web Widget",
    icon: SlidersHorizontal,
    x: 90,
    y: 340,
    path: "M 265 205 V 325 Q 265 340 250 340 H 90",
    delay: 0.2,
    targetId: "product-tour-web-widget-builder",
    side: "left",
    tag: "Instant Deployment",
    headline: "Custom branded web assistant in minutes",
    description: "Deploy an intelligent chat widget without engineering sprints and funnel leads into shared follow-up.",
    metric: "No frontend code needed",
  },
  {
    id: "shared-inbox-filter",
    label: "Shared Inbox",
    icon: Inbox,
    x: 282,
    y: 60,
    path: "M 282 205 V 60",
    delay: 0.25,
    targetId: "product-tour-shared-inbox-filter",
    side: "left",
    tag: "Team Collaboration",
    headline: "Clear next ownership for every lead",
    description: "Filter urgent, unassigned, or bot-escalated chats in seconds with complete history and recordings intact.",
    metric: "0 lost conversations",
  },
  {
    id: "visual-workflows",
    label: "Workflows",
    icon: Workflow,
    x: 474,
    y: 70,
    path: "M 299 205 V 85 Q 299 70 314 70 H 474",
    delay: 0.3,
    targetId: "product-tour-visual-workflows",
    side: "right",
    tag: "Visual Automation",
    headline: "Automate speed-to-lead across channels",
    description: "Connect Meta lead forms, sheets, WhatsApp, voice calls, and CRM fields on a visual drag-and-drop canvas.",
    metric: "0s instant response trigger",
  },
  {
    id: "whatsapp-chatbot",
    label: "WhatsApp Bot",
    icon: MessageCircle,
    x: 489,
    y: 205,
    path: "M 312 205 H 489",
    delay: 0.35,
    targetId: "product-tour-whatsapp-chatbot",
    side: "right",
    tag: "Meta Official API",
    headline: "Instant replies 24/7 on WhatsApp",
    description: "Responds from verified catalog and pricing data, answers buyer queries, and books appointments instantly.",
    metric: "98.4% delivery rate",
  },
  {
    id: "lead-capture",
    label: "Lead Capture",
    icon: FormInput,
    x: 282,
    y: 350,
    path: "M 282 205 V 350",
    delay: 0.4,
    targetId: "product-tour-lead-capture",
    side: "right",
    tag: "High Intent Enrichment",
    headline: "Capture buyer intent while still warm",
    description: "Asks tailored qualifying questions, enriches the lead profile, and triggers instant WhatsApp & voice outreach.",
    metric: "Under 4s outreach trigger",
  },
  {
    id: "whatsapp-knowledge",
    label: "Knowledge Base",
    icon: Database,
    x: 474,
    y: 340,
    path: "M 299 205 V 325 Q 299 340 314 340 H 474",
    delay: 0.45,
    targetId: "product-tour-whatsapp-knowledge",
    side: "right",
    tag: "Knowledge Graph",
    headline: "Grounded in your verified documents",
    description: "Ingests websites, PDFs, catalogs, and sheets into vector embeddings so the AI never hallucinates pricing.",
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
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600">
                    {selectedFeature.tag}
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="text-[11px] font-medium text-slate-400">
                    {selectedFeature.metric}
                  </span>
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
                    "group absolute z-30 flex h-9 w-9 sm:h-12 sm:w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border transition-all duration-200 cursor-pointer shadow-sm",
                    isSelected
                      ? "border-emerald-600 bg-emerald-500 text-white shadow-[0_0_16px_rgba(16,185,129,0.45)] ring-4 ring-emerald-100"
                      : "border-slate-200 bg-white text-slate-700 hover:border-emerald-500 hover:bg-emerald-50/60 hover:text-emerald-700 hover:shadow-md",
                  )}
                >
                  <Icon
                    className={cn(
                      "h-4 w-4 sm:h-5 sm:w-5 transition-colors",
                      isSelected ? "text-white" : "text-slate-700 group-hover:text-emerald-600",
                    )}
                  />
                  <span
                    className={cn(
                      "pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md px-2 py-0.5 text-[10px] font-medium shadow transition-opacity z-40 hidden sm:block",
                      isSelected
                        ? "bg-emerald-700 text-white opacity-100"
                        : "bg-slate-900 text-white opacity-0 group-hover:opacity-100",
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
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600">
                    {selectedFeature.tag}
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="text-[11px] font-medium text-slate-400">
                    {selectedFeature.metric}
                  </span>
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
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">
                {selectedFeature.tag}
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-[10px] text-slate-400">
                {selectedFeature.metric}
              </span>
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
