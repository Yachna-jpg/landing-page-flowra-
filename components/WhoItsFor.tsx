"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  GraduationCap,
  ShoppingBag,
  Stethoscope,
  Ticket,
  Briefcase,
  ArrowRight,
} from "lucide-react";

interface PlaybookStep {
  step: string;
  title: string;
  desc: string;
}

interface SectorPlaybook {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  image: string;
  imageAlt: string;
  icon: React.ComponentType<{ className?: string }>;
  stats: { value: string; label: string }[];
  bottleneck: string;
  solution: string;
  steps: PlaybookStep[];
}

const SECTOR_PLAYBOOKS: SectorPlaybook[] = [
  {
    id: "real-estate",
    title: "Luxury Real Estate",
    subtitle: "High-Ticket Residential & Commercial Portfolios",
    tag: "High-Ticket Property",
    image: "/sectors/real_estate.jpg",
    imageAlt: "Luxury penthouse interior overlooking city skyline",
    icon: Building2,
    stats: [
      { value: "12s", label: "Speed to First Contact" },
      { value: "42%", label: "Site Visit Booking Rate" },
      { value: "0", label: "Missed Portal Inquiries" },
    ],
    bottleneck:
      "High-net-worth property inquiries go cold when sales reps take 3+ hours to respond to 99acres, MagicBricks, and Meta ads.",
    solution:
      "Flowra dials new inquiries within 15 seconds in natural Indian Hinglish, shares high-res brochures on WhatsApp, and confirms Saturday site visits directly on agent calendars.",
    steps: [
      {
        step: "01",
        title: "Instant Ad & Portal Ingestion",
        desc: "Captures new inquiries from Meta & property portals in under 3 seconds.",
      },
      {
        step: "02",
        title: "WhatsApp Brochure Dispatch",
        desc: "Delivers verified floor plans, pricing sheets, and video walk-throughs.",
      },
      {
        step: "03",
        title: "Hinglish AI Voice Qualification",
        desc: "Dials prospect, qualifies budget, timeline, and preferred viewing slot.",
      },
      {
        step: "04",
        title: "Site Visit Locked in CRM",
        desc: "Books calendar slot and warm transfers high-intent buyer to advisor.",
      },
    ],
  },
  {
    id: "edtech",
    title: "EdTech & Higher Education",
    subtitle: "Executive Bootcamps & Professional Degrees",
    tag: "Course Enrollments",
    image: "/sectors/edtech.jpg",
    imageAlt: "Modern tech learning studio with student and counselor",
    icon: GraduationCap,
    stats: [
      { value: "3.4×", label: "Counseling Call Rate" },
      { value: "65%", label: "Late-Night Drop-Off Recovery" },
      { value: "24/7", label: "Native Language Guidance" },
    ],
    bottleneck:
      "Prospective students research course curriculums late at night and drop off before human counselors can reach out the next morning.",
    solution:
      "Flowra engages students immediately on WhatsApp and phone in Hindi, English, and regional dialects, resolves syllabus and fee doubts, and locks 1-on-1 advisor counseling calls.",
    steps: [
      {
        step: "01",
        title: "Brochure Download Trigger",
        desc: "Picks up lead the moment syllabus or fee structure is downloaded.",
      },
      {
        step: "02",
        title: "WhatsApp Curriculum Pack",
        desc: "Sends placement statistics, faculty credentials, and 0% EMI options.",
      },
      {
        step: "03",
        title: "Discovery Phone Call",
        desc: "Assesses student background, career aspirations, and eligibility.",
      },
      {
        step: "04",
        title: "Mentor Session Scheduled",
        desc: "Direct calendar invite booked with complete student background notes.",
      },
    ],
  },
  {
    id: "d2c",
    title: "D2C Brands & Retail",
    subtitle: "High-Growth Consumer Brands & E-Commerce",
    tag: "Checkout & COD Recovery",
    image: "/sectors/d2c.jpg",
    imageAlt: "Luxury skincare lifestyle products on travertine pedestal",
    icon: ShoppingBag,
    stats: [
      { value: "31%", label: "Abandoned Cart Recovery" },
      { value: "78%", label: "COD Return (RTO) Reduction" },
      { value: "1-Click", label: "Address Verification" },
    ],
    bottleneck:
      "High abandoned checkouts and high cash-on-delivery (COD) return-to-origin rates cut net brand margins by 20% to 30%.",
    solution:
      "Flowra pings abandoned carts on WhatsApp within 10 minutes with personalized offers, answers product doubts, and auto-verifies customer addresses via quick voice/chat before dispatch.",
    steps: [
      {
        step: "01",
        title: "Shopify Abandonment Hook",
        desc: "Detects abandoned checkouts from Shopify/WooCommerce instantly.",
      },
      {
        step: "02",
        title: "WhatsApp Visual Nudge",
        desc: "Sends rich media product preview with a time-limited 1-click coupon.",
      },
      {
        step: "03",
        title: "COD Address Verification",
        desc: "Validates pin code and delivery intent to stop fake orders.",
      },
      {
        step: "04",
        title: "Instant Fulfillment Sync",
        desc: "Flags verified order directly in Shopify warehouse queue.",
      },
    ],
  },
  {
    id: "clinics",
    title: "Aesthetic & Health Clinics",
    subtitle: "Dental, Dermatology & Wellness Centers",
    tag: "Patient Intake & OPD",
    image: "/sectors/clinics.jpg",
    imageAlt: "Minimalist luxury aesthetic wellness clinic lounge",
    icon: Stethoscope,
    stats: [
      { value: "100%", label: "After-Hours Inquiries Answered" },
      { value: "2.8×", label: "Appointment Fill Rate" },
      { value: "92%", label: "Show-Up Attendance" },
    ],
    bottleneck:
      "Patients inquiring after clinic hours get no response, and manual receptionist call backs suffer from high no-show rates.",
    solution:
      "Flowra handles 24/7 patient inquiries, checks doctor availability in real time, locks consultation slots, and sends automated WhatsApp pre-op directions.",
    steps: [
      {
        step: "01",
        title: "24/7 Patient Inbound",
        desc: "Handles late-night WhatsApp messages & phone calls instantly.",
      },
      {
        step: "02",
        title: "Doctor Schedule Check",
        desc: "Syncs with clinic PMS/calendar to find next open doctor slot.",
      },
      {
        step: "03",
        title: "Consultation Confirmed",
        desc: "Issues appointment confirmation and digital consultation token.",
      },
      {
        step: "04",
        title: "Automated Directions & Nudge",
        desc: "Sends clinic Google Maps link and pre-procedure advice 2 hours prior.",
      },
    ],
  },
  {
    id: "events",
    title: "Events, Summits & Webinars",
    subtitle: "Executive Conferences & Masterclasses",
    tag: "Attendance & Turnout",
    image: "/sectors/events.jpg",
    imageAlt: "Tech global leadership summit keynote stage with large screen",
    icon: Ticket,
    stats: [
      { value: "74%", label: "Live Turnout Rate" },
      { value: "5s", label: "Pass & Ticket Delivery" },
      { value: "3-Touch", label: "Automated Nudge Series" },
    ],
    bottleneck:
      "High free-registration signups with dismal 15-20% live attendance rates due to buried email calendar invites.",
    solution:
      "Flowra sends instant QR entry passes on WhatsApp, dials automated personalized audio reminders 1 hour before start, and shares session recordings instantly.",
    steps: [
      {
        step: "01",
        title: "Registration Webhook",
        desc: "Instantly ingests registrants from Luma, Zoom & Meta forms.",
      },
      {
        step: "02",
        title: "WhatsApp Pass Delivery",
        desc: "Sends personalized QR badge and 1-tap Google Calendar link.",
      },
      {
        step: "03",
        title: "T-1hr Audio & Chat Nudge",
        desc: "Friendly automated voice reminder: 'We go live in 45 minutes!'",
      },
      {
        step: "04",
        title: "VIP Follow-Up & Deck",
        desc: "Delivers speaker deck, recordings, and sales offer post-session.",
      },
    ],
  },
  {
    id: "agencies",
    title: "Growth Agencies & B2B",
    subtitle: "Performance Marketing & Lead Gen Agencies",
    tag: "Lead Quality & SLA",
    image: "/sectors/agencies.jpg",
    imageAlt: "Marketing growth agency boardroom with multi-screen analytics",
    icon: Briefcase,
    stats: [
      { value: "< 15s", label: "Client Lead Qualification" },
      { value: "3.8×", label: "Client Retainer Retention" },
      { value: "100%", label: "Proof of Rapid Response" },
    ],
    bottleneck:
      "Agency clients blame lead quality when the client's internal sales reps take 6+ hours to contact inbound prospects.",
    solution:
      "Flowra pre-qualifies client leads within seconds on agency behalf, filters tire-kickers, and warm-transfers hot, verified buyers directly to clients.",
    steps: [
      {
        step: "01",
        title: "Client Campaign Ingestion",
        desc: "Captures lead details across all client ad accounts concurrently.",
      },
      {
        step: "02",
        title: "Real-Time Lead Scrubbing",
        desc: "Screens out invalid numbers, fake names, and zero-budget entries.",
      },
      {
        step: "03",
        title: "Immediate AI Voice Screen",
        desc: "Conducts 90-second discovery call to verify genuine buying intent.",
      },
      {
        step: "04",
        title: "Live Transfer or Client CRM Push",
        desc: "Instantly routes hot lead into client's CRM with full call recording.",
      },
    ],
  },
];

interface WhoItsForProps {
  onOpenGetStarted?: () => void;
}

export const WhoItsFor: React.FC<WhoItsForProps> = ({ onOpenGetStarted }) => {
  const [activeTab, setActiveTab] = useState<string>("real-estate");

  const activePlaybook =
    SECTOR_PLAYBOOKS.find((p) => p.id === activeTab) || SECTOR_PLAYBOOKS[0];

  return (
    <section
      id="who-its-for"
      className="w-full bg-[#FAFAFA] py-20 sm:py-28 border-t border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Editorial Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs font-mono tracking-widest uppercase text-slate-400 font-semibold mb-3 block">
            Tailored Industry Playbooks
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-slate-900 leading-[1.14]">
            Engineered for high-volume lead teams.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            Pre-built autonomous workflows, localized voice models, and instant CRM
            handoffs configured for your sector&apos;s exact conversion hurdles.
          </p>

          {/* Minimalist Sector Switcher */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
            {SECTOR_PLAYBOOKS.map((item) => {
              const isActive = activeTab === item.id;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? "bg-slate-900 text-white shadow-xs"
                      : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <Icon
                    className={`w-3.5 h-3.5 ${
                      isActive ? "text-emerald-400" : "text-slate-400"
                    }`}
                  />
                  <span>{item.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Clean Editorial Showcase Bento */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePlaybook.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch bg-white rounded-3xl border border-slate-200/90 shadow-[0_2px_16px_rgba(0,0,0,0.03)] p-6 sm:p-10 lg:p-12 overflow-hidden"
            >
              {/* LEFT COLUMN: Editorial Diagnostic & Solution Rail */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  {/* Category & Tag */}
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-medium">
                      Sector Playbook
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="text-xs text-slate-500 font-medium">
                      {activePlaybook.subtitle}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-normal tracking-tight text-slate-900 leading-snug">
                    {activePlaybook.title}
                  </h3>

                  {/* The Core Hurdle (Clean Editorial Quote) */}
                  <div className="my-5 pl-4 border-l-2 border-slate-900 py-1">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block mb-1">
                      The Conversion Hurdle
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                      {activePlaybook.bottleneck}
                    </p>
                  </div>

                  {/* How Flowra Solves It */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {activePlaybook.solution}
                  </p>

                  {/* Autonomous 4-Step Sequence */}
                  <div className="mt-6 pt-5 border-t border-slate-100">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block mb-3">
                      Autonomous 4-Step Workflow
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5">
                      {activePlaybook.steps.map((st) => (
                        <div key={st.step} className="flex items-start gap-2.5">
                          <span className="text-xs font-mono font-bold text-slate-400 shrink-0 mt-0.5">
                            {st.step}
                          </span>
                          <div>
                            <h4 className="text-xs font-semibold text-slate-900 leading-snug">
                              {st.title}
                            </h4>
                            <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5">
                              {st.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Row: Metrics & Action */}
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <div className="grid grid-cols-3 gap-4 mb-5">
                    {activePlaybook.stats.map((st, idx) => (
                      <div key={idx} className="flex flex-col">
                        <span className="text-2xl sm:text-3xl font-light tracking-tight text-slate-900">
                          {st.value}
                        </span>
                        <span className="text-[11px] text-slate-500 font-medium leading-tight mt-0.5">
                          {st.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {onOpenGetStarted && (
                    <button
                      onClick={onOpenGetStarted}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-900 hover:text-emerald-700 transition-colors cursor-pointer group"
                    >
                      <span>Configure playbook for {activePlaybook.title}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  )}
                </div>
              </div>

              {/* RIGHT COLUMN: Pristine Contextual Photography (100% Unobstructed) */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs group">
                  <img
                    src={activePlaybook.image}
                    alt={activePlaybook.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                  />
                </div>

                {/* Minimal Editorial Metadata Caption Underneath */}
                <div className="mt-3 flex items-center justify-between px-1 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span className="font-mono text-[11px] uppercase tracking-wider text-slate-600 font-medium">
                      {activePlaybook.tag}
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-mono">
                    Autonomous Response &lt;15s
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
