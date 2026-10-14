"use client";

import React, { useId } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

// --- EXACT REAL-WORLD OFFICIAL BRAND LOGOS ---

// 1. Pillar-01 (Inbound Capture: Meta Ads & Lead Ingestion) -> Official Meta Brand Logo
const RealMetaLogo = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 32 32" className={className} aria-label="Meta">
    <path
      fill="#0081FB"
      d="M28.4 10.3C27.1 8.2 24.9 7 22.4 7c-2.8 0-5.3 1.6-7.1 4.1C13.5 8.6 11 7 8.2 7 5.7 7 3.5 8.2 2.2 10.3.9 12.5.3 15.2.3 18c0 3.7 1.8 6.8 4.7 8.1 1.1.5 2.3.8 3.5.8 3.3 0 6.2-2.1 8-5.3 1.8 3.2 4.7 5.3 8 5.3 1.2 0 2.4-.3 3.5-.8 2.9-1.3 4.7-4.4 4.7-8.1 0-2.8-.6-5.5-1.9-7.7h-.4zM8.5 23.3c-2.3 0-4-2.2-4-5.3 0-2.4.9-4.8 2.2-6.5 1-1.3 2.3-2.1 3.7-2.1 1.7 0 3.2 1.2 4.2 3.1-2.4 4.8-4.4 10.8-6.1 10.8zm13.6 0c-1.7 0-3.7-6-6.1-10.8 1-1.9 2.5-3.1 4.2-3.1 1.4 0 2.7.8 3.7 2.1 1.3 1.7 2.2 4.1 2.2 6.5 0 3.1-1.7 5.3-4 5.3z"
    />
  </svg>
);

// 2. Pillar-02 (Autonomous Conversation: AI Voice Agent) -> Neon Cyan & Purple AI Voice Mic Logo
const VoiceAgentNeonLogo = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" aria-label="AI Voice Agent">
    <defs>
      {/* Cyan to Purple Gradient for Main Microphone & Circuit */}
      <linearGradient id="neon-mic-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00F0FF" />
        <stop offset="50%" stopColor="#38BDF8" />
        <stop offset="85%" stopColor="#818CF8" />
        <stop offset="100%" stopColor="#C084FC" />
      </linearGradient>
      {/* Soundwaves Cyan gradient */}
      <linearGradient id="neon-wave-left" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#00F0FF" />
        <stop offset="100%" stopColor="#38BDF8" />
      </linearGradient>
      {/* Soundwaves Purple gradient */}
      <linearGradient id="neon-wave-right" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#818CF8" />
        <stop offset="100%" stopColor="#C084FC" />
      </linearGradient>
    </defs>

    {/* Center Microphone Capsule */}
    <rect
      x="42"
      y="24"
      width="16"
      height="30"
      rx="8"
      stroke="url(#neon-mic-grad)"
      strokeWidth="3.2"
      strokeLinecap="round"
    />

    {/* Circuit Network inside & crossing Mic */}
    <path
      d="M50 24V32"
      stroke="#00F0FF"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <circle cx="50" cy="32" r="2.2" fill="#00F0FF" />
    <path
      d="M50 32H44"
      stroke="#00F0FF"
      strokeWidth="2.2"
      strokeLinecap="round"
    />

    <path
      d="M62 30L52 44"
      stroke="url(#neon-mic-grad)"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <circle cx="62" cy="30" r="2.5" fill="#38BDF8" />
    <circle cx="52" cy="44" r="2.2" fill="#38BDF8" />

    <path
      d="M52 44V54"
      stroke="url(#neon-mic-grad)"
      strokeWidth="2.4"
      strokeLinecap="round"
    />

    <path
      d="M48 50L38 62"
      stroke="url(#neon-mic-grad)"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <circle cx="48" cy="50" r="2.2" fill="#38BDF8" />
    <circle cx="38" cy="62" r="2.5" fill="#00F0FF" />

    {/* Microphone Outer Cradle & Stand */}
    <path
      d="M37 42V48C37 55.2 42.8 61 50 61C57.2 61 63 55.2 63 48V42"
      stroke="url(#neon-mic-grad)"
      strokeWidth="3.2"
      strokeLinecap="round"
    />
    <path
      d="M50 61V72"
      stroke="url(#neon-mic-grad)"
      strokeWidth="3.2"
      strokeLinecap="round"
    />
    <path
      d="M42 72H58"
      stroke="#C084FC"
      strokeWidth="3.2"
      strokeLinecap="round"
    />

    {/* Left Soundwaves (Cyan Spectrum) */}
    <path
      d="M32 40C30 43 30 47 32 50"
      stroke="url(#neon-wave-left)"
      strokeWidth="2.6"
      strokeLinecap="round"
    />
    <path
      d="M26 35C23 41 23 49 26 55"
      stroke="url(#neon-wave-left)"
      strokeWidth="2.6"
      strokeLinecap="round"
    />
    <path
      d="M20 39C18 43 18 47 20 51"
      stroke="url(#neon-wave-left)"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
    <circle cx="15" cy="45" r="1.8" fill="#00F0FF" />

    {/* Right Soundwaves (Purple Spectrum) */}
    <path
      d="M68 40C70 43 70 47 68 50"
      stroke="url(#neon-wave-right)"
      strokeWidth="2.6"
      strokeLinecap="round"
    />
    <path
      d="M74 35C77 41 77 49 74 55"
      stroke="url(#neon-wave-right)"
      strokeWidth="2.6"
      strokeLinecap="round"
    />
    <path
      d="M80 39C82 43 82 47 80 51"
      stroke="url(#neon-wave-right)"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
    <circle cx="85" cy="45" r="1.8" fill="#C084FC" />
  </svg>
);

// 3. Pillar-03 (CRM + Escalation: HubSpot & CRM Sync) -> Official HubSpot Brand Logo
const RealHubSpotLogo = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 32 32" className={className} aria-label="HubSpot">
    <path
      fill="#FF7A59"
      d="M24.7 11.2V8.3c.7-.4 1.2-1.1 1.2-2 0-1.3-1-2.3-2.3-2.3s-2.3 1-2.3 2.3c0 .9.5 1.6 1.2 2v2.9c-1.2.3-2.3.9-3.2 1.7l-7.7-6c.1-.3.2-.6.2-1 0-1.8-1.5-3.3-3.3-3.3S5.2 4.1 5.2 5.9s1.5 3.3 3.3 3.3c.7 0 1.3-.2 1.8-.6l7.5 5.8c-.7 1.1-1.1 2.4-1.1 3.8 0 1.2.3 2.4.9 3.4l-3.3 3.3c-.3-.1-.6-.2-.9-.2-1.8 0-3.3 1.5-3.3 3.3s1.5 3.3 3.3 3.3 3.3-1.5 3.3-3.3c0-.6-.2-1.2-.5-1.7l3.2-3.2c1.1.7 2.4 1.1 3.8 1.1 3.8 0 6.9-3.1 6.9-6.9 0-2.9-1.8-5.4-4.3-6.4v-.1zm-1.1 10.3c-2.4 0-4.3-1.9-4.3-4.3s1.9-4.3 4.3-4.3 4.3 1.9 4.3 4.3-1.9 4.3-4.3 4.3z"
    />
  </svg>
);

// 4. Runtime Telemetry (Live Inbound / Voice Telemetry) -> Official Datadog / Telemetry Spectrum
const RealTelemetryLogo = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 32 32" className={className} aria-label="Runtime Telemetry">
    <defs>
      <linearGradient id="telemetry-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0EA5E9" />
        <stop offset="100%" stopColor="#2563EB" />
      </linearGradient>
    </defs>
    <rect width="32" height="32" rx="8" fill="url(#telemetry-grad)" />
    <path
      fill="#FFFFFF"
      d="M7 23h18v-2H7v2zm2-4h2.5v-6H9v6zm4.5 0H16V9h-2.5v10zm4.5 0h2.5v-4H18v4zm4.5 0H25v-8h-2.5v8z"
    />
  </svg>
);

// 5. Grounded By Design (Approved Knowledge Base & Vector Database) -> Official Firebase / Google Knowledge
const RealFirebaseLogo = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 32 32" className={className} aria-label="Knowledge Database">
    <defs>
      <linearGradient id="grounded-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8B5CF6" />
        <stop offset="100%" stopColor="#6D28D9" />
      </linearGradient>
    </defs>
    <rect width="32" height="32" rx="8" fill="url(#grounded-grad)" />
    <path
      fill="#F59E0B"
      d="M8.5 21.5L11.8 7a.8.8 0 0 1 1.5-.2l3.4 6.4-8.2 8.3z"
    />
    <path
      fill="#F97316"
      d="M19.2 12.5L16.6 4.7a.8.8 0 0 0-1.5 0l-3.3 16.8 8.1 4.5a1.7 1.7 0 0 0 1.6 0l7.7-4.3-10-9.2z"
    />
    <path
      fill="#FBBF24"
      d="M25.8 21.7L23.6 16l-4.4-3.5L8.5 21.5l8.1 4.5a1.7 1.7 0 0 0 1.6 0l7.6-4.3z"
    />
  </svg>
);

export interface InfrastructureSectionProps {
  id?: string;
  className?: string;
}

export default function InfrastructureSection({
  id = "infrastructure",
  className = "",
}: InfrastructureSectionProps) {
  const lineId = useId();

  return (
    <section
      id={id}
      className={`relative w-full bg-[#FAFAFA] py-16 px-6 sm:px-12 md:py-24 font-sans text-slate-700 overflow-hidden ${className}`}
    >
      {/* Background soft ambient radial glow */}
      <div className="absolute inset-0 bg-radial from-emerald-500/[0.03] via-transparent to-transparent pointer-events-none" />

      {/* Header Section with Official Flowra Expanded Logo */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-2xs">
          <img
            src="/flowra_expanded.png"
            alt="Flowra"
            className="h-4 sm:h-5 w-auto object-contain"
          />
          <span className="text-slate-300">|</span>
          <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold">
            Platform Infrastructure
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold text-slate-900 mb-4 leading-tight tracking-tight">
          A Single Operating Layer for Revenue Conversations.
        </h2>
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Inbound capture, autonomous follow-up, and human escalation—structured
          into three systems your team can actually operate.
        </p>
      </div>

      {/* 3 Pillars Grid with Animated Running Green Flow Lines */}
      <div className="relative z-10 max-w-6xl mx-auto mb-6">
        {/* Horizontal Running Green SVG Lines between Pillar 1, 2, and 3 */}
        <div className="hidden md:block absolute top-[110px] left-0 right-0 h-[10px] -z-0 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1152 10" fill="none">
            {/* Base subtle guide line */}
            <path
              d="M 192 5 L 960 5"
              stroke="#E2E8F0"
              strokeWidth="2"
            />
            {/* Running emerald energy stream */}
            <motion.path
              d="M 192 5 L 960 5"
              stroke={`url(#${lineId}-stream-h)`}
              strokeWidth="2.5"
              strokeDasharray="40 140"
              initial={{ strokeDashoffset: 180 }}
              animate={{ strokeDashoffset: -180 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            <defs>
              <linearGradient id={`${lineId}-stream-h`} gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="#10B981" stopOpacity="1" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Pillar 1: Inbound Capture -> Real Meta Brand Logo */}
          <div className="bg-white border-2 border-blue-400 rounded-2xl p-6 sm:p-7 flex flex-col relative shadow-[0_4px_20px_rgba(59,130,246,0.06)] hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-blue-50/80 border border-blue-100 flex items-center justify-center p-1.5 shadow-xs">
                <RealMetaLogo className="w-6 h-6" />
              </div>
              <span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-600 text-[11px] font-mono tracking-wider uppercase font-bold">
                Pillar-01 // Inbound Capture
              </span>
            </div>

            <h3 className="text-xl sm:text-[22px] font-bold text-slate-900 mb-2.5 leading-snug">
              Turn every inbound signal into a qualified record.
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm mb-6 leading-relaxed">
              Capture website, Meta, and WhatsApp intent in one operating layer—without asking a sales rep to copy and paste context between tools.
            </p>

            <ul className="space-y-3 text-xs sm:text-sm mt-auto">
              {[
                "Shared inbox with clear ownership",
                "Lead forms, web chat, and WhatsApp in one queue",
                "Human handoff with the full thread attached",
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <Check className="text-blue-600 w-4 h-4 mr-2.5 shrink-0 mt-0.5 stroke-[2.5]" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pillar 2: Autonomous Conversation -> AI Voice Agent Neon Logo */}
          <div className="bg-white border-2 border-emerald-500 rounded-2xl p-6 sm:p-7 flex flex-col relative shadow-[0_4px_24px_rgba(16,185,129,0.08)] hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center p-1 shadow-xs">
                <VoiceAgentNeonLogo className="w-8 h-8" />
              </div>
              <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 text-[11px] font-mono tracking-wider uppercase font-bold">
                Pillar-02 // Autonomous Conversation
              </span>
            </div>

            <h3 className="text-xl sm:text-[22px] font-bold text-slate-900 mb-2.5 leading-snug">
              Answer, qualify, and call in the language that converts.
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm mb-6 leading-relaxed">
              Ground the assistant on your approved sources, then use Indian voice and WhatsApp follow-up to keep high-intent leads moving while your team is offline.
            </p>

            <ul className="space-y-3 text-xs sm:text-sm mt-auto">
              {[
                "Hinglish and regional voice presets",
                "Knowledge-grounded WhatsApp answers",
                "Call recordings, transcripts, and outcomes",
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <Check className="text-emerald-600 w-4 h-4 mr-2.5 shrink-0 mt-0.5 stroke-[2.5]" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pillar 3: CRM + Escalation -> Real HubSpot Brand Logo */}
          <div className="bg-white border-2 border-purple-400 rounded-2xl p-6 sm:p-7 flex flex-col relative shadow-[0_4px_20px_rgba(168,85,247,0.06)] hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-orange-50/80 border border-orange-100 flex items-center justify-center p-1.5 shadow-xs">
                <RealHubSpotLogo className="w-6 h-6" />
              </div>
              <span className="px-2.5 py-1 rounded-md bg-purple-50 text-purple-600 text-[11px] font-mono tracking-wider uppercase font-bold">
                Pillar-03 // CRM + Escalation
              </span>
            </div>

            <h3 className="text-xl sm:text-[22px] font-bold text-slate-900 mb-2.5 leading-snug">
              Make the next action visible to the whole team.
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm mb-6 leading-relaxed">
              Connect the conversation to CRM stages, workflow branches, and follow-up rules so every lead has a measurable next step—not another forgotten tab.
            </p>

            <ul className="space-y-3 text-xs sm:text-sm mt-auto">
              {[
                "Visual if/else workflow branches",
                "CRM updates from every channel",
                "Tickets, notes, tags, and reminders",
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <Check className="text-purple-600 w-4 h-4 mr-2.5 shrink-0 mt-0.5 stroke-[2.5]" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Running Green Circuit Lines Branching Downwards from Pillar 2 to Bottom Modules */}
      <div className="hidden md:block relative max-w-6xl mx-auto h-12 pointer-events-none -my-1">
        <svg className="w-full h-full" viewBox="0 0 1152 48" fill="none">
          {/* Subtle static trace guides */}
          <path
            d="M 576 0 L 576 24 L 288 24 L 288 48"
            stroke="#E2E8F0"
            strokeWidth="2"
          />
          <path
            d="M 576 24 L 864 24 L 864 48"
            stroke="#E2E8F0"
            strokeWidth="2"
          />

          {/* Running animated emerald pulse to telemetry */}
          <motion.path
            d="M 576 0 L 576 24 L 288 24 L 288 48"
            stroke={`url(#${lineId}-stream-v1)`}
            strokeWidth="2.5"
            strokeDasharray="30 110"
            initial={{ strokeDashoffset: 140 }}
            animate={{ strokeDashoffset: -140 }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
          />

          {/* Running animated emerald pulse to grounded */}
          <motion.path
            d="M 576 24 L 864 24 L 864 48"
            stroke={`url(#${lineId}-stream-v2)`}
            strokeWidth="2.5"
            strokeDasharray="30 110"
            initial={{ strokeDashoffset: 140 }}
            animate={{ strokeDashoffset: -140 }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "linear", delay: 0.2 }}
          />

          <defs>
            <linearGradient id={`${lineId}-stream-v1`} gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#10B981" stopOpacity="1" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            <linearGradient id={`${lineId}-stream-v2`} gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#10B981" stopOpacity="1" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Bottom Modules: Compact, balanced padding and height */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {/* Module 1: Runtime Telemetry (Sky Blue Border, Real Telemetry Spectrum Logo) */}
        <div className="bg-white border-2 border-sky-400 rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-[0_4px_20px_rgba(56,189,248,0.06)]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-sky-50/80 border border-sky-100 flex items-center justify-center p-1.5 shadow-xs">
              <RealTelemetryLogo className="w-7 h-7" />
            </div>
            <div>
              <span className="text-slate-900 text-base sm:text-lg font-bold block leading-snug">
                Runtime Telemetry
              </span>
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                Live System Health
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono py-2 px-3 rounded-xl bg-slate-50/70 border border-slate-100">
            <div>
              <p className="text-slate-400 mb-0.5 text-[10px] tracking-wide">META API</p>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-emerald-700 font-bold tracking-tight text-[11px]">CONNECTED</span>
              </div>
            </div>
            <div>
              <p className="text-slate-400 mb-0.5 text-[10px] tracking-wide">VOICE</p>
              <p className="text-slate-900 font-bold tracking-tight text-[11px]">392MS AVG</p>
            </div>
            <div>
              <p className="text-slate-400 mb-0.5 text-[10px] tracking-wide">KNOWLEDGE</p>
              <p className="text-slate-900 font-bold tracking-tight text-[11px]">56 CHUNKS</p>
            </div>
            <div>
              <p className="text-slate-400 mb-0.5 text-[10px] tracking-wide">ESCALATION</p>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-emerald-700 font-bold tracking-tight text-[11px]">READY</span>
              </div>
            </div>
          </div>
        </div>

        {/* Module 2: Grounded by Design (Purple Border, Real Firebase / Vector DB Logo) */}
        <div className="bg-white border-2 border-purple-400 rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-[0_4px_20px_rgba(168,85,247,0.06)]">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-purple-50/80 border border-purple-100 flex items-center justify-center p-1.5 shadow-xs">
                <RealFirebaseLogo className="w-7 h-7" />
              </div>
              <span className="text-slate-900 text-base sm:text-lg font-bold">
                Grounded by Design
              </span>
            </div>
            <p className="text-slate-500 text-xs sm:text-sm mb-4 leading-relaxed">
              Your assistant answers from approved websites, PDFs, sheets, and product sources—then hands the thread to a person when the workflow says it should.
            </p>
          </div>

          <a
            href="#signature-flow"
            className="inline-flex items-center text-purple-600 text-xs font-mono tracking-wider hover:text-purple-700 transition-colors group font-bold mt-1"
          >
            <span>INSPECT THE ARCHITECTURE</span>
            <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
