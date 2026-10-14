"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Marquee } from "@/components/ui/marquee-01-utils/marquee";
import { Star } from "lucide-react";

// Google G logo component
export const GoogleIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="#4285F4"
      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
    />
    <path
      fill="#34A853"
      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
    />
    <path
      fill="#FBBC05"
      d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.17 0 9.99 0 12s.45 3.83 1.25 5.42l4.03-3.15z"
    />
    <path
      fill="#EA4335"
      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
    />
  </svg>
);

// 4.5 Star Rating Component in Google Yellow (#FBBC05)
export const RatingStars = ({ rating = 4.5 }: { rating?: number }) => {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(4)].map((_, i) => (
        <Star
          key={i}
          className="w-3.5 h-3.5 fill-[#FBBC05] text-[#FBBC05]"
        />
      ))}
      {/* 5th half star */}
      <div className="relative w-3.5 h-3.5">
        <Star className="w-3.5 h-3.5 text-slate-200 fill-slate-200" />
        <div className="absolute inset-0 overflow-hidden w-[50%]">
          <Star className="w-3.5 h-3.5 fill-[#FBBC05] text-[#FBBC05]" />
        </div>
      </div>
    </div>
  );
};

const reviews = [
  {
    name: "Ken Masters",
    username: "@kmasters",
    rating: 4.5,
    body: "“Our productivity has nearly doubled since onboarding. Automation features removed repetitive tasks, allowing our team to focus on building instead of managing operations.”",
    profile: "https://cdn.21st.dev/assets/mirror/b5/b539abc60701ab9cbcd73f9241d13a14a09582a4fd06c65784cb5567d77a2e0e.webp",
  },
  {
    name: "Vikram Singhania",
    username: "@horizon_living",
    rating: 5,
    body: "“Weekend site visits jumped 42% in our first month. The 15-second Hinglish voice dial pre-qualifies buyers while they are still looking at property listings.”",
    profile: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
  },
  {
    name: "Kira Athrun",
    username: "@kathrun",
    rating: 4.5,
    body: "“What surprised us most was how quickly our team adapted. Minimal learning curve, excellent documentation, and powerful features make it a must-have for modern SaaS companies.”",
    profile: "https://cdn.21st.dev/assets/mirror/2b/2bc5f22fa3400c61a2161d14e3dce5a0804badebfc1b3d9cbe844feaa3b72180.webp",
  },
  {
    name: "Dr. Tanvi Shah",
    username: "@lumina_aesthetics",
    rating: 5,
    body: "“Our after-hours consult bookings doubled. Flowra checks our PMS calendar live and confirms appointment slots on WhatsApp without receptionist lag.”",
    profile: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=120&auto=format&fit=crop&q=80",
  },
  {
    name: "Lirael Nassun",
    username: "@lnassun",
    rating: 4.5,
    body: "“This is easily one of the most reliable SaaS tools we’ve adopted. The UI is intuitive, integrations are seamless, and it saves us countless hours every week.”",
    profile: "https://cdn.21st.dev/assets/mirror/e1/e1e172821860559f890ef5ef7c14cc66a6c1ec001f3bbeb6dddd349c0081dd6b.webp",
  },
  {
    name: "Rahul Mehra",
    username: "@nextgen_bootcamps",
    rating: 5,
    body: "“Saved 65% of late-night course drop-offs. Students get fee breakdowns and syllabus packs instantly on WhatsApp at 11 PM and book counselor calls.”",
    profile: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80",
  },
  {
    name: "Jessica",
    username: "@jessica",
    rating: 4.5,
    body: "“Switching to this platform streamlined our entire workflow. Setup was effortless, performance improved instantly, and our team now ships features faster without worrying about infrastructure.”",
    profile: "https://cdn.21st.dev/assets/mirror/61/61fda783ca2662349458bad61a434038016f05d6a14bd7c5a314f48c8ee8be03.webp",
  },
  {
    name: "Priya Deshmukh",
    username: "@bareskin_co",
    rating: 5,
    body: "“COD return-to-origin rates plummeted by 78% after enabling automated WhatsApp address verification. Net margins improved almost overnight.”",
    profile: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80",
  },
  {
    name: "Jenny",
    username: "@jenny",
    rating: 4.5,
    body: "“We evaluated multiple solutions, but this stood out immediately. It’s fast, scalable, and thoughtfully designed for growing teams that need stability without added complexity.”",
    profile: "https://cdn.21st.dev/assets/mirror/c5/c5ee2e124ea7334450d30a46607f793534f567e97d4b708cda110a06aeed4953.webp",
  },
  {
    name: "Rituja Salunkhe",
    username: "@cloudscale_b2b",
    rating: 5,
    body: "“The HubSpot two-way sync is seamless. Inbound leads are qualified, tagged, and assigned to the right account executive before their tea gets cold.”",
    profile: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  profile,
  name,
  username,
  body,
}: {
  profile: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <Card className="relative h-full w-72 sm:w-80 cursor-pointer overflow-hidden border border-slate-200/90 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-slate-300 transition-all duration-200 p-4 rounded-2xl select-none flex-shrink-0">
      <CardContent className="p-0 flex flex-col gap-2.5">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-2.5">
            <img
              className="rounded-full object-cover border border-slate-200/80"
              width="36"
              height="36"
              alt={name}
              src={profile}
            />
            <div className="flex flex-col">
              <p className="text-sm font-semibold text-slate-900 leading-tight">{name}</p>
              <p className="text-xs font-medium text-slate-500">{username}</p>
            </div>
          </div>
          {/* Google Icon & Verified Indicator */}
          <div className="flex items-center gap-1.5 bg-slate-50 px-2 py-0.5 rounded-full border border-slate-200/60">
            <GoogleIcon className="w-3.5 h-3.5" />
            <span className="text-[10px] font-semibold text-slate-600">Review</span>
          </div>
        </div>

        {/* 4.5 Yellow Stars */}
        <div className="flex items-center gap-1.5">
          <RatingStars rating={4.5} />
          <span className="text-[11px] font-bold text-slate-700">4.5</span>
        </div>

        <p className="text-xs sm:text-[13px] line-clamp-3 text-slate-700 leading-relaxed font-normal">
          {body}
        </p>
      </CardContent>
    </Card>
  );
};

export default function TestimonialMarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-4 gap-4">
      {/* First Marquee Row */}
      <Marquee pauseOnHover pauseOnTouch className="[--duration:32s]">
        {firstRow.map((review, idx) => (
          <ReviewCard key={`${review.username}-${idx}`} {...review} />
        ))}
      </Marquee>

      {/* Second Marquee Row (Reverse) */}
      <Marquee reverse pauseOnHover pauseOnTouch className="[--duration:32s]">
        {secondRow.map((review, idx) => (
          <ReviewCard key={`rev-${review.username}-${idx}`} {...review} />
        ))}
      </Marquee>

      {/* Bright mode edge gradient masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />
    </div>
  );
}

export { TestimonialMarqueeDemo as TestimonialMarquee };
