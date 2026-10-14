"use client";

import React from "react";
import { Star, CheckCircle2 } from "lucide-react";

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  metric: string;
  rating: number;
  quote: string;
}

export interface TestimonialRow {
  id: string;
  speed: string;
  direction?: "left" | "right";
  items: TestimonialItem[];
}

const TESTIMONIAL_ROWS: TestimonialRow[] = [
  {
    id: "row-1",
    speed: "45s",
    direction: "left",
    items: [
      {
        id: "t1",
        name: "Vikram Singhania",
        role: "Managing Director",
        company: "Horizon Living Real Estate",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
        metric: "+42% Site Visits",
        rating: 5,
        quote:
          "Weekend site visits jumped 42% in our first month. The 15-second Hinglish voice dial pre-qualifies buyers while they are still looking at the property listing.",
      },
      {
        id: "t2",
        name: "Dr. Tanvi Shah",
        role: "Founder & Chief Surgeon",
        company: "Lumina Dental & Aesthetics",
        avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=120&auto=format&fit=crop&q=80",
        metric: "100% Inbound Response",
        rating: 5,
        quote:
          "Our after-hours consult bookings doubled. Flowra checks our PMS calendar live and confirms appointment slots on WhatsApp without receptionist lag.",
      },
      {
        id: "t3",
        name: "Rahul Mehra",
        role: "Head of Growth",
        company: "NextGen Bootcamps",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80",
        metric: "3.4× Counselor Connect",
        rating: 5,
        quote:
          "Saved 65% of late-night course drop-offs. Students get fee breakdowns and syllabus packs instantly on WhatsApp at 11 PM and book counselor calls.",
      },
      {
        id: "t4",
        name: "Priya Deshmukh",
        role: "Co-Founder & COO",
        company: "BareSkin Essentials",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80",
        metric: "-78% COD Return Rate",
        rating: 5,
        quote:
          "COD return-to-origin rates plummeted by 78% after enabling automated WhatsApp address verification. Net margins improved almost overnight.",
      },
    ],
  },
  {
    id: "row-2",
    speed: "52s",
    direction: "right",
    items: [
      {
        id: "t5",
        name: "Arjun Nair",
        role: "VP Performance Marketing",
        company: "Apex Media Group",
        avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&auto=format&fit=crop&q=80",
        metric: "< 15s Lead Dialing",
        rating: 5,
        quote:
          "Clients stopped complaining about lead quality. Flowra qualifies inbound Meta ads leads in sub-15s and warm-transfers hot prospects directly to sales reps.",
      },
      {
        id: "t6",
        name: "Sneha Kapur",
        role: "Event Director",
        company: "Global Tech Summit India",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&auto=format&fit=crop&q=80",
        metric: "74% Live Turnout",
        rating: 5,
        quote:
          "Our event turnout jumped from 22% to 74%. Instant WhatsApp QR badge dispatch and T-45m voice nudges made all the difference.",
      },
      {
        id: "t7",
        name: "Karan Johar",
        role: "Sales Director",
        company: "Prestige Estates Bangalore",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&auto=format&fit=crop&q=80",
        metric: "0 Missed Leads",
        rating: 5,
        quote:
          "The Hinglish voice agent sounds shockingly authentic. High-ticket NRI buyers in Dubai and Singapore get instant answers regardless of Indian timezone.",
      },
      {
        id: "t8",
        name: "Ananya Sen",
        role: "Operations Head",
        company: "Apex Fertility & Wellness",
        avatar: "https://images.unsplash.com/photo-1594824813590-789a5b12cca2?w=120&auto=format&fit=crop&q=80",
        metric: "92% Show-Up Rate",
        rating: 5,
        quote:
          "Automated calendar invites and pre-procedure directions reduced no-shows dramatically. It's like having 4 dedicated clinic coordinators on call 24/7.",
      },
    ],
  },
  {
    id: "row-3",
    speed: "48s",
    direction: "left",
    items: [
      {
        id: "t9",
        name: "Devendra Verma",
        role: "Founder",
        company: "Craftsvilla Furnishings",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&auto=format&fit=crop&q=80",
        metric: "31% Cart Recovery",
        rating: 5,
        quote:
          "Recovered ₹14L in abandoned high-ticket furniture carts in 6 weeks. The conversational WhatsApp catalog and personalized payment link converted users immediately.",
      },
      {
        id: "t10",
        name: "Rituja Salunkhe",
        role: "Growth Lead",
        company: "CloudScale B2B",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
        metric: "2.4× Pipeline Velocity",
        rating: 5,
        quote:
          "The HubSpot two-way sync is seamless. Inbound leads are qualified, tagged, and assigned to the right account executive before their tea gets cold.",
      },
      {
        id: "t11",
        name: "Manish Sharma",
        role: "Managing Director",
        company: "Skyline Auto Luxury",
        avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=120&auto=format&fit=crop&q=80",
        metric: "28 Test Drives / Wk",
        rating: 5,
        quote:
          "Booked 28 luxury vehicle test drives in our very first weekend. Voice latency is imperceptible and the tone is perfectly aligned with our luxury brand.",
      },
      {
        id: "t12",
        name: "Pooja Hegde",
        role: "Managing Partner",
        company: "ScaleWave Performance Ads",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80",
        metric: "3.8× Client Retention",
        rating: 5,
        quote:
          "We offer Flowra as a value-add service to all our paid ads clients now. It fixes the client's internal sales follow-up gap and makes our ad ROAS look incredible.",
      },
    ],
  },
];

const TestimonialCard: React.FC<{ item: TestimonialItem }> = ({ item }) => {
  return (
    <div className="flex flex-col justify-between p-5 sm:p-5.5 bg-white rounded-xl sm:rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-slate-100/90 w-[300px] sm:w-[340px] flex-shrink-0 hover:shadow-xl hover:border-slate-200 hover:-translate-y-0.5 transition-all duration-200 select-none">
      <div>
        {/* Top: Rating & Metric */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-0.5">
            {[...Array(item.rating)].map((_, i) => (
              <Star
                key={i}
                className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
              />
            ))}
          </div>
          <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60 font-mono">
            {item.metric}
          </span>
        </div>

        {/* Quote */}
        <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
          &ldquo;{item.quote}&rdquo;
        </p>
      </div>

      {/* Author Footer */}
      <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center gap-3">
        <img
          src={item.avatar}
          alt={item.name}
          className="w-8 h-8 rounded-full object-cover border border-slate-200 shrink-0"
        />
        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            <h4 className="text-xs font-semibold text-slate-900 truncate">
              {item.name}
            </h4>
            <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
          </div>
          <p className="text-[11px] text-slate-500 truncate">
            {item.role}, {item.company}
          </p>
        </div>
      </div>
    </div>
  );
};

const ScrollerRow: React.FC<{
  row: TestimonialRow;
}> = ({ row }) => {
  const animationClass =
    row.direction === "right"
      ? "animate-scroll-horizontal-reverse"
      : "animate-scroll-horizontal";

  const style = { "--scroll-duration": row.speed } as React.CSSProperties;

  return (
    <div className="w-full overflow-hidden group relative scroller-mask">
      {/* Edge gradient fade curtains matching the background */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 z-20 bg-gradient-to-r from-white/95 via-white/50 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 z-20 bg-gradient-to-l from-white/95 via-white/50 to-transparent" />

      {/* Infinite scrolling track */}
      <div
        className={`flex w-max ${animationClass} group-hover:[animation-play-state:paused]`}
        style={style}
      >
        <div className="flex items-stretch justify-center flex-shrink-0 gap-4 sm:gap-4.5 px-2.5 sm:px-3">
          {row.items.map((item) => (
            <TestimonialCard key={item.id} item={item} />
          ))}
        </div>
        {/* Duplicate for seamless infinite loop */}
        <div
          className="flex items-stretch justify-center flex-shrink-0 gap-4 sm:gap-4.5 px-2.5 sm:px-3"
          aria-hidden="true"
        >
          {row.items.map((item) => (
            <TestimonialCard key={`dup-${item.id}`} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

import TestimonialsEditorial from "@/components/ui/editorial-testimonial";

export const TestimonialsSection: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="relative w-full border-t border-slate-200/80 bg-gradient-to-b from-white via-white/80 via-60% to-[#DDD6FE] py-16 sm:py-24 overflow-hidden"
    >
      <div className="flex flex-col items-center gap-3 text-center z-10 max-w-2xl px-6 mx-auto mb-6 sm:mb-8">
        <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-slate-900 tracking-tight leading-tight">
          Loved by fast-moving revenue teams
        </h2>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-lg">
          Real founders, sales directors, and agency leads scaling conversion rates
          and eliminating response delays with Flowra.
        </p>
      </div>

      <div className="z-10 w-full relative">
        <TestimonialsEditorial />
      </div>
    </section>
  );
};

export default TestimonialsSection;
