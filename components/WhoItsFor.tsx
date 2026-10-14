"use client";

import React from "react";
import { WorksWheel, WorksWheelItem } from "@/components/ui/works-wheel";
import { ArrowRight, Sparkles } from "lucide-react";

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
  // Convert playbooks into 3D WorksWheel items
  const wheelItems: WorksWheelItem[] = SECTOR_PLAYBOOKS.map((p) => ({
    title: p.title,
    image: p.image,
    subtitle: p.subtitle,
    bottleneck: p.bottleneck,
    solution: p.solution,
    stat: p.stats[0],
    href: "#",
  }));

  return (
    <section
      id="who-its-for"
      className="w-full bg-[#FAFAFA] py-20 sm:py-28 border-t border-slate-200/80 font-sans"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tailored Industry Playbooks</span>
          </div>

          {/* Canva text style for heading: bold, clean geometry, tighter tracking, premium gradient text */}
          <h2
            className="text-4xl sm:text-6xl md:text-[4rem] font-extrabold tracking-tight text-slate-900 leading-[1.08] select-none"
            style={{ fontFamily: "var(--font-heading-canva), var(--font-inter), sans-serif", letterSpacing: "-0.035em" }}
          >
            Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500">high-volume</span> lead teams.
          </h2>
        </div>

        {/* 3D Works Wheel Stage (Plane directly on background, no grey box/border) */}
        <div className="relative w-full overflow-hidden min-h-[40rem] sm:min-h-[48rem]">
          <WorksWheel
            items={wheelItems}
            label="Sector Playbooks"
            action="Configure"
            onActionClick={() => onOpenGetStarted?.()}
          />
        </div>

        {/* Bottom Callout */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-emerald-100 shrink-0" />
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              Don’t see your exact industry? Flowra’s prompt compiler adapts to any custom CRM and sales motion in 20 minutes.
            </p>
          </div>
          {onOpenGetStarted && (
            <button
              onClick={onOpenGetStarted}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition-colors whitespace-nowrap cursor-pointer group"
            >
              <span>Build custom sector flow</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
