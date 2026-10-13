"use client";

import React, { useState } from "react";
import { Building2, GraduationCap, ShoppingBag, Stethoscope, Ticket, Briefcase, CheckCircle2 } from "lucide-react";

const VERTICALS = [
  {
    id: "real-estate",
    title: "Real Estate",
    icon: Building2,
    pain: "Property inquiries go cold when sales reps take 3+ hours to respond to portal and Meta ads.",
    workflow: "Meta Lead Ads → Instant Brochure on WhatsApp → AI Voice Call → Saturday Site Visit Scheduled.",
    outcome: "Connect with buyers in seconds, pre-qualify budget & location, and hand warm prospects directly to property consultants.",
  },
  {
    id: "edtech",
    title: "EdTech & Courses",
    icon: GraduationCap,
    pain: "Students drop off before counselors can call them about syllabus, batch timing, and fee structures.",
    workflow: "Website Lead Form → AI WhatsApp Counselor → Hinglish Discovery Call → Counselor Demo Booked.",
    outcome: "Answers student doubts 24/7 in native languages and books consultation calls directly on counselor calendars.",
  },
  {
    id: "d2c",
    title: "D2C & E-Commerce",
    icon: ShoppingBag,
    pain: "High abandoned cart rate and cash-on-delivery returns due to lack of immediate order confirmation.",
    workflow: "Shopify Abandoned Cart → WhatsApp Offer with Media → 1-Click COD Address Verification.",
    outcome: "Recover high-intent checkouts automatically and verify customer addresses before dispatch.",
  },
  {
    id: "clinics",
    title: "Healthcare & Clinics",
    icon: Stethoscope,
    pain: "Patients calling after clinic hours or waiting in WhatsApp queues without confirmation.",
    workflow: "WhatsApp Inbound → Doctor Availability Checker → Appointment Slot Booked → Morning Reminder.",
    outcome: "Eliminate patient drop-offs outside OPD hours and automate consultation appointment scheduling.",
  },
  {
    id: "events",
    title: "Events & Webinars",
    icon: Ticket,
    pain: "High registration numbers with poor live attendance rates due to missed calendar notifications.",
    workflow: "Luma/Zoom Registration → Instant WhatsApp Pass → T-1hr Voice Call Nudge → Post-event Recording.",
    outcome: "Dramatically boost live turnout with multi-touch WhatsApp and automated voice reminders.",
  },
  {
    id: "agencies",
    title: "Agencies",
    icon: Briefcase,
    pain: "Clients complaining that lead quality is poor simply because client sales teams don't call fast enough.",
    workflow: "Meta Lead Webhook → Autonomous Flowra Qualification → Hot Leads Routed to Client CRM.",
    outcome: "Deliver vetted, pre-qualified appointments to clients and prove ROI with undeniable response time metrics.",
  },
];

export const WhoItsFor: React.FC = () => {
  const [activeTab, setActiveTab] = useState("real-estate");
  const activeData = VERTICALS.find((v) => v.id === activeTab) || VERTICALS[0];

  return (
    <section id="who-its-for" className="w-full max-w-7xl mx-auto px-6 sm:px-12 py-24 border-t border-slate-200 bg-white">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-4">
          <span>Tailored Playbooks</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
          Engineered for high-volume lead teams.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Pre-built workflows and localized voice models configured for your industry&apos;s exact conversion hurdles.
        </p>

        {/* Tab Selector */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
          {VERTICALS.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? "bg-slate-900 text-white border border-slate-900 shadow-md"
                    : "text-slate-600 hover:text-slate-900 bg-slate-100 border border-slate-200"
                }`}
              >
                <item.icon className={`w-4 h-4 ${isActive ? "text-emerald-400" : "text-slate-500"}`} />
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Vertical Card */}
      <div className="max-w-4xl mx-auto p-8 sm:p-10 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
        <div className="flex items-center gap-3.5 mb-6">
          <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center border border-emerald-200">
            <activeData.icon className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900">{activeData.title}</h3>
            <span className="text-xs text-slate-500 font-medium">Ready-made Playbook</span>
          </div>
        </div>

        <div className="space-y-5 text-sm">
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
            <span className="text-[11px] font-bold uppercase tracking-wider text-rose-600">The Problem:</span>
            <p className="mt-1 text-slate-700 leading-relaxed">{activeData.pain}</p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">Autonomous Workflow:</span>
            <p className="mt-1 text-slate-900 font-mono text-xs sm:text-sm leading-relaxed">{activeData.workflow}</p>
          </div>

          <div className="flex items-start gap-3 pt-2 text-slate-700">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <p className="leading-relaxed font-medium">{activeData.outcome}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
