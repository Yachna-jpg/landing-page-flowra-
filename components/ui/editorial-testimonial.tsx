"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    quote: "Weekend site visits jumped 42% in our first month. The 15-second Hinglish voice dial pre-qualifies buyers while they are still looking at the property listing.",
    author: "Vikram Singhania",
    role: "Managing Director",
    company: "Horizon Living Real Estate",
    metric: "+42% Site Visits",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    quote: "Our after-hours consult bookings doubled. Flowra checks our PMS calendar live and confirms appointment slots on WhatsApp without receptionist lag.",
    author: "Dr. Tanvi Shah",
    role: "Founder & Chief Surgeon",
    company: "Lumina Dental & Aesthetics",
    metric: "100% Inbound Response",
    rating: 5,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=160&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    quote: "Saved 65% of late-night course drop-offs. Students get fee breakdowns and syllabus packs instantly on WhatsApp at 11 PM and book counselor calls.",
    author: "Rahul Mehra",
    role: "Head of Growth",
    company: "NextGen Bootcamps",
    metric: "3.4× Counselor Connect",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    quote: "COD return-to-origin rates plummeted by 78% after enabling automated WhatsApp address verification. Net margins improved almost overnight.",
    author: "Priya Deshmukh",
    role: "Co-Founder & COO",
    company: "BareSkin Essentials",
    metric: "-78% COD Return Rate",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=160&auto=format&fit=crop&q=80",
  },
  {
    id: 5,
    quote: "Automated calendar invites and pre-procedure directions reduced no-shows dramatically. It's like having 4 dedicated clinic coordinators on call 24/7.",
    author: "Dr. Ananya Sen",
    role: "Operations Head",
    company: "Apex Fertility & Wellness",
    metric: "92% Show-Up Rate",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=160&auto=format&fit=crop&q=80",
  },
  {
    id: 6,
    quote: "The HubSpot two-way sync is seamless. Inbound leads are qualified, tagged, and assigned to the right account executive before their tea gets cold.",
    author: "Rituja Salunkhe",
    role: "Growth Lead",
    company: "CloudScale B2B",
    metric: "2.4× Pipeline Velocity",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&auto=format&fit=crop&q=80",
  },
]

export default function TestimonialsEditorial() {
  const [active, setActive] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  const handleChange = (index: number) => {
    if (index === active || isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setActive(index)
      setTimeout(() => setIsTransitioning(false), 50)
    }, 280)
  }

  const handlePrev = () => {
    const newIndex = active === 0 ? testimonials.length - 1 : active - 1
    handleChange(newIndex)
  }

  const handleNext = () => {
    const newIndex = active === testimonials.length - 1 ? 0 : active + 1
    handleChange(newIndex)
  }

  // Automatic shift to next review every 1 second
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      handleNext();
    }, 1000);

    return () => clearInterval(timer);
  }, [active, isTransitioning, isPaused]);

  const current = testimonials[active]

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="w-full max-w-4xl mx-auto px-6 py-4 sm:py-6"
    >
      {/* Metric badge & Star rating row */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-1.5 text-amber-400">
          {[...Array(current.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
          <span className="text-xs font-semibold text-slate-500 ml-1.5 tracking-wider uppercase">Verified Customer</span>
        </div>

        {current.metric && (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            {current.metric}
          </span>
        )}
      </div>

      {/* Large index number and quote layout */}
      <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10">
        <span
          className="text-7xl sm:text-8xl md:text-[110px] font-bold leading-none text-slate-300/60 select-none tracking-tight transition-all duration-500"
          style={{ fontFeatureSettings: '"tnum"' }}
        >
          {String(active + 1).padStart(2, "0")}
        </span>

        <div className="flex-1 pt-1 md:pt-3">
          {/* Quote */}
          <blockquote
            className={`text-xl sm:text-2xl md:text-3xl font-medium leading-relaxed text-slate-900 tracking-tight transition-all duration-300 ${
              isTransitioning ? "opacity-0 translate-x-3" : "opacity-100 translate-x-0"
            }`}
          >
            &ldquo;{current.quote}&rdquo;
          </blockquote>

          {/* Author info with hover reveal */}
          <div
            className={`mt-8 sm:mt-10 group cursor-default transition-all duration-300 delay-75 ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-slate-200/80 group-hover:ring-emerald-500/50 shadow-sm transition-all duration-300">
                <Image
                  src={current.image || "/placeholder.svg"}
                  alt={current.author}
                  fill
                  sizes="56px"
                  className="object-cover transition-all duration-500"
                />
              </div>
              <div>
                <p className="font-semibold text-base text-slate-900">{current.author}</p>
                <p className="text-sm text-slate-500">
                  {current.role}
                  <span className="mx-2 text-slate-300">/</span>
                  <span className="font-medium text-slate-700 group-hover:text-emerald-600 transition-colors duration-300">
                    {current.company}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
