"use client";

import React from "react";
import {
  MessageCircle,
  PhoneCall,
  Workflow,
  Database,
  ArrowRight,
  Terminal,
  Check,
} from "lucide-react";

export interface InfrastructureSectionProps {
  id?: string;
  className?: string;
}

export default function InfrastructureSection({
  id = "infrastructure",
  className = "",
}: InfrastructureSectionProps) {
  return (
    <section
      id={id}
      className={`relative w-full border-t border-slate-200 bg-[#F8FAFC] py-20 px-6 sm:px-12 md:py-28 font-sans text-slate-700 ${className}`}
    >
      {/* Subtle ambient emerald background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-24 h-72 w-[min(70vw,800px)] -translate-x-1/2 rounded-full bg-emerald-500/[0.04] blur-[130px]"
      />

      {/* Header Section */}
      <div className="relative max-w-6xl mx-auto mb-12 sm:mb-16">
        <p className="text-emerald-600 text-xs font-mono tracking-widest uppercase mb-4 font-semibold">
          Platform Infrastructure
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900 mb-6 leading-tight max-w-2xl tracking-tight">
          A single operating layer for revenue conversations.
        </h2>
        <p className="text-slate-600 text-base sm:text-lg max-w-2xl leading-relaxed">
          Inbound capture, autonomous follow-up, and human escalation—structured
          into three systems your team can actually operate.
        </p>
      </div>

      {/* 3 Pillars Grid */}
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Pillar 1 */}
        <div className="bg-white border border-slate-200 rounded-xl p-8 flex flex-col hover:border-blue-400/60 hover:shadow-lg transition-all relative overflow-hidden group shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <span className="text-blue-600 text-xs font-mono tracking-wider uppercase font-semibold">
              Pillar-01 // Inbound Capture
            </span>
            <MessageCircle className="text-blue-600 w-5 h-5" />
          </div>
          <h3 className="text-2xl font-semibold text-slate-900 mb-4 leading-tight">
            Turn every inbound signal into a qualified record.
          </h3>
          <p className="text-slate-600 text-sm mb-8 leading-relaxed">
            Capture website, Meta, and WhatsApp intent in one operating layer—without asking a sales rep to copy and paste context between tools.
          </p>
          <ul className="space-y-4 text-sm mt-auto">
            {[
              "Shared inbox with clear ownership",
              "Lead forms, web chat, and WhatsApp in one queue",
              "Human handoff with the full thread attached",
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <Check className="text-blue-600 w-4 h-4 mr-3 shrink-0 mt-0.5" />
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pillar 2 */}
        <div className="bg-white border-2 border-emerald-500 rounded-xl p-8 flex flex-col shadow-[0_0_25px_rgba(16,185,129,0.12)] relative overflow-hidden">
          <div className="flex justify-between items-center mb-8">
            <span className="text-emerald-600 text-xs font-mono tracking-wider uppercase font-semibold">
              Pillar-02 // Autonomous Conversation
            </span>
            <PhoneCall className="text-emerald-600 w-5 h-5" />
          </div>
          <h3 className="text-2xl font-semibold text-slate-900 mb-4 leading-tight">
            Answer, qualify, and call in the language that converts.
          </h3>
          <p className="text-slate-600 text-sm mb-8 leading-relaxed">
            Ground the assistant on your approved sources, then use Indian voice and WhatsApp follow-up to keep high-intent leads moving while your team is offline.
          </p>
          <ul className="space-y-4 text-sm mt-auto">
            {[
              "Hinglish and regional voice presets",
              "Knowledge-grounded WhatsApp answers",
              "Call recordings, transcripts, and outcomes",
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <Check className="text-emerald-600 w-4 h-4 mr-3 shrink-0 mt-0.5" />
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pillar 3 */}
        <div className="bg-white border border-slate-200 rounded-xl p-8 flex flex-col hover:border-purple-400/60 hover:shadow-lg transition-all relative overflow-hidden group shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <span className="text-purple-600 text-xs font-mono tracking-wider uppercase font-semibold">
              Pillar-03 // CRM + Escalation
            </span>
            <Workflow className="text-purple-600 w-5 h-5" />
          </div>
          <h3 className="text-2xl font-semibold text-slate-900 mb-4 leading-tight">
            Make the next action visible to the whole team.
          </h3>
          <p className="text-slate-600 text-sm mb-8 leading-relaxed">
            Connect the conversation to CRM stages, workflow branches, and follow-up rules so every lead has a measurable next step—not another forgotten tab.
          </p>
          <ul className="space-y-4 text-sm mt-auto">
            {[
              "Visual if/else workflow branches",
              "CRM updates from every channel",
              "Tickets, notes, tags, and reminders",
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <Check className="text-purple-600 w-4 h-4 mr-3 shrink-0 mt-0.5" />
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Modules */}
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Telemetry Module */}
        <div className="bg-white border border-slate-200 rounded-xl p-8 flex flex-col justify-center shadow-sm">
          <div className="flex items-center mb-8">
            <Terminal className="text-emerald-600 w-5 h-5 mr-3" />
            <span className="text-emerald-600 text-xs font-mono tracking-wider uppercase font-semibold">
              Runtime Telemetry
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
            <div>
              <p className="text-slate-400 mb-1">META API</p>
              <p className="text-slate-900 font-semibold">CONNECTED</p>
            </div>
            <div>
              <p className="text-slate-400 mb-1">VOICE</p>
              <p className="text-slate-900 font-semibold">392MS AVG</p>
            </div>
            <div>
              <p className="text-slate-400 mb-1">KNOWLEDGE</p>
              <p className="text-slate-900 font-semibold">56 CHUNKS</p>
            </div>
            <div>
              <p className="text-slate-400 mb-1">ESCALATION</p>
              <p className="text-slate-900 font-semibold">READY</p>
            </div>
          </div>
        </div>

        {/* Grounded Module */}
        <div className="bg-white border-2 border-emerald-500/80 rounded-xl p-8 shadow-sm">
          <div className="flex items-center mb-4">
            <Database className="text-emerald-600 w-5 h-5 mr-3" />
            <span className="text-emerald-600 text-xs font-mono tracking-wider uppercase font-semibold">
              Grounded By Design
            </span>
          </div>
          <p className="text-slate-600 text-sm mb-6 leading-relaxed">
            Your assistant answers from approved websites, PDFs, sheets, and product sources—then hands the thread to a person when the workflow says it should.
          </p>
          <a
            href="#signature-flow"
            className="inline-flex items-center text-emerald-600 text-xs font-mono tracking-wider hover:text-emerald-700 transition-colors group font-semibold"
          >
            INSPECT THE ARCHITECTURE
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
