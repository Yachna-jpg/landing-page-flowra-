"use client";

import React from "react";
import { Database, MessageSquare, CheckCircle2, ArrowRight } from "lucide-react";

export interface FeatureAlternatingSectionsProps {
  knowledgeVideoSrc?: string;
  leadCaptureVideoSrc?: string;
  className?: string;
}

export default function FeatureAlternatingSections({
  knowledgeVideoSrc = "/product-tour/whatsapp-knowledge.mp4",
  leadCaptureVideoSrc = "/product-tour/lead-capture.mp4",
  className = "",
}: FeatureAlternatingSectionsProps) {
  return (
    <section className={`bg-[#FAFAFA] w-full py-24 font-sans overflow-hidden border-t border-slate-200 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-32">
        {/* SECTION 1: Knowledge Base (Media Left, Text Right) */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Video Container - Left */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1 relative group">
            {/* Soft Ambient Shadow */}
            <div className="absolute -inset-4 bg-emerald-500/10 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none" />

            {/* Ultra-minimal Dark Bezel Wrapper */}
            <div className="relative p-2.5 rounded-2xl bg-[#0F172A] border border-slate-800 shadow-[0_20px_50px_rgba(15,23,42,0.12)] transition-all duration-300">
              {/* Inner Video Mask - No cropping */}
              <div className="relative rounded-xl overflow-hidden bg-white ring-1 ring-black/5">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="block w-full h-auto object-contain"
                >
                  <source src={knowledgeVideoSrc} type="video/mp4" />
                  <source src="/your-knowledge-base-recording.mp4" type="video/mp4" />
                  <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-50 aspect-video">
                    [ Knowledge Base Recording ]
                  </div>
                </video>
              </div>
            </div>
          </div>

          {/* Text Content - Right */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono font-medium tracking-wide mb-6">
              <Database className="w-4 h-4" />
              WHATSAPP + KNOWLEDGE BASE
            </div>

            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 leading-tight mb-5 tracking-tight">
              Give every answer a source your team trusts.
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Configure the WhatsApp assistant, add a website or document source, and watch Flowra extract, chunk, embed, and publish it to the knowledge graph.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "Set the WhatsApp agent prompt and response behavior",
                "Add websites, files, text, or Google Sheets as sources",
                "See sources move from scraping to ready knowledge chunks",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#product-tour"
              className="inline-flex items-center text-slate-800 font-medium hover:text-emerald-600 transition-colors group"
            >
              Explore the workflow
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* SECTION 2: Lead Capture (Text Left, Media Right) */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Text Content - Left */}
          <div className="w-full lg:w-1/2 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-mono font-medium tracking-wide mb-6">
              <MessageSquare className="w-4 h-4" />
              LEAD CAPTURE
            </div>

            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 leading-tight mb-5 tracking-tight">
              Capture intent while it is still warm.
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Collect the details your sales team needs, enrich the record, and trigger the right follow-up without a spreadsheet relay.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "Ask only the questions that qualify a lead",
                "Create a clean CRM record automatically",
                "Start WhatsApp, voice, or human follow-up instantly",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#product-tour"
              className="inline-flex items-center text-slate-800 font-medium hover:text-rose-600 transition-colors group"
            >
              Explore the workflow
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Video Container - Right */}
          <div className="w-full lg:w-1/2 relative group">
            {/* Soft Ambient Shadow */}
            <div className="absolute -inset-4 bg-rose-500/10 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none" />

            {/* Ultra-minimal Dark Bezel Wrapper */}
            <div className="relative p-2.5 rounded-2xl bg-[#0F172A] border border-slate-800 shadow-[0_20px_50px_rgba(15,23,42,0.12)] transition-all duration-300">
              {/* Inner Video Mask - No cropping */}
              <div className="relative rounded-xl overflow-hidden bg-white ring-1 ring-black/5">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="block w-full h-auto object-contain"
                >
                  <source src={leadCaptureVideoSrc} type="video/mp4" />
                  <source src="/your-lead-capture-recording.mp4" type="video/mp4" />
                  <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-50 aspect-video">
                    [ Lead Capture Recording ]
                  </div>
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
