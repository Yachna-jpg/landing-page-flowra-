"use client";

import React, { useId } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import {
  MetaActualIcon,
  VoiceAgentActualIcon,
  HubSpotActualIcon,
} from "./ui/integration-card";

// --- EXACT REAL-WORLD OFFICIAL BRAND LOGOS ---


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
        {/* Horizontal Running Green SVG Lines between Pillar 1, 2, and 3 - Prominently sized and visible */}
        <div className="hidden md:block absolute top-[110px] left-0 right-0 h-4 -z-0 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1152 16" fill="none">
            {/* Base subtle guide line */}
            <path
              d="M 192 8 L 960 8"
              stroke="#E2E8F0"
              strokeWidth="3"
              strokeLinecap="round"
            />
            {/* Running emerald energy stream - prominent, larger glow */}
            <motion.path
              d="M 192 8 L 960 8"
              stroke={`url(#${lineId}-stream-h)`}
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeDasharray="90 180"
              initial={{ strokeDashoffset: 270 }}
              animate={{ strokeDashoffset: -270 }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
            />
            <defs>
              <linearGradient id={`${lineId}-stream-h`} gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="40%" stopColor="#10B981" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#34D399" stopOpacity="1" />
                <stop offset="60%" stopColor="#10B981" stopOpacity="0.8" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Pillar 1: Inbound Capture -> Meta Ads Brand Logo */}
          <div className="bg-white border-2 border-blue-400 rounded-2xl p-6 sm:p-7 flex flex-col relative shadow-[0_4px_20px_rgba(59,130,246,0.06)] hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-blue-50/80 border border-blue-100 flex items-center justify-center p-1.5 shadow-xs">
                <MetaActualIcon className="w-6 h-6" />
              </div>
              <span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-600 text-[11px] font-mono tracking-wider uppercase font-bold">
                Inbound Capture
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

          {/* Pillar 2: Autonomous Conversation -> AI Voice Agent Logo */}
          <div className="bg-white border-2 border-emerald-500 rounded-2xl p-6 sm:p-7 flex flex-col relative shadow-[0_4px_24px_rgba(16,185,129,0.08)] hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-emerald-50/80 border border-emerald-100 flex items-center justify-center p-1 shadow-xs">
                <VoiceAgentActualIcon className="w-7 h-7 rounded-lg" />
              </div>
              <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 text-[11px] font-mono tracking-wider uppercase font-bold">
                Autonomous Conversation
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

          {/* Pillar 3: CRM + Escalation -> HubSpot Brand Logo */}
          <div className="bg-white border-2 border-purple-400 rounded-2xl p-6 sm:p-7 flex flex-col relative shadow-[0_4px_20px_rgba(168,85,247,0.06)] hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-orange-50/80 border border-orange-100 flex items-center justify-center p-1.5 shadow-xs">
                <HubSpotActualIcon className="w-6 h-6" />
              </div>
              <span className="px-2.5 py-1 rounded-md bg-purple-50 text-purple-600 text-[11px] font-mono tracking-wider uppercase font-bold">
                CRM + Escalation
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
    </section>
  );
}
