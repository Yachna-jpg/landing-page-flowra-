"use client";

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  Check,
  Database,
  FormInput,
  Inbox,
  LayoutDashboard,
  MessageCircle,
  Mic,
  SlidersHorizontal,
  Sparkles,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type Demo = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  videoSrc: string;
  accent: string;
  accentSoft: string;
  icon: LucideIcon;
  benefits: string[];
  preview: {
    label: string;
    value: string;
    detail: string;
  }[];
};

const DEMOS: Demo[] = [
  {
    id: "dashboard",
    eyebrow: "Dashboard",
    title: "Know what is moving before the next lead arrives.",
    description:
      "See conversations, campaigns, calls, and speed-to-lead performance in one calm operating view.",
    videoSrc: "/product-tour/dashboard.mp4",
    accent: "text-emerald-600",
    accentSoft: "bg-emerald-50 border-emerald-200",
    icon: LayoutDashboard,
    benefits: [
      "Spot pipeline movement at a glance",
      "Track AI and human outcomes together",
      "Turn every metric into the next action",
    ],
    preview: [
      { label: "Open conversations", value: "38", detail: "96 AI resolved" },
      { label: "Delivery rate", value: "98.4%", detail: "WhatsApp API" },
      { label: "Speed to lead", value: "6s", detail: "Today · -57%" },
    ],
  },
  {
    id: "shared-inbox-filter",
    eyebrow: "Shared Inbox Filter",
    title: "Give every conversation a clear next owner.",
    description:
      "Filter urgent, unassigned, or bot-escalated chats in seconds, then hand off with the full context intact.",
    videoSrc: "/product-tour/shared-inbox.mp4",
    accent: "text-blue-600",
    accentSoft: "bg-blue-50 border-blue-200",
    icon: Inbox,
    benefits: [
      "Find priority threads without digging",
      "Pause automation when a human steps in",
      "Keep notes, tags, and transcripts together",
    ],
    preview: [
      { label: "Filter", value: "Needs reply", detail: "12 conversations" },
      { label: "Owner", value: "Unassigned", detail: "Route to Sneha" },
      { label: "Channel", value: "WhatsApp", detail: "3 new today" },
    ],
  },
  {
    id: "visual-workflows",
    eyebrow: "Visual Workflows",
    title: "Make speed-to-lead repeatable, not heroic.",
    description:
      "Connect forms, sheets, WhatsApp, calls, and CRM updates on a visual canvas your team can understand.",
    videoSrc: "/product-tour/visual-workflows.mp4",
    accent: "text-amber-600",
    accentSoft: "bg-amber-50 border-amber-200",
    icon: Workflow,
    benefits: [
      "Start with a trigger your team already uses",
      "Branch on intent, budget, or lead quality",
      "Reuse proven flows instead of rebuilding them",
    ],
    preview: [
      { label: "Trigger", value: "Meta lead form", detail: "0s response" },
      { label: "Qualify", value: "Budget + intent", detail: "AI decision" },
      { label: "Action", value: "WhatsApp + call", detail: "Then assign" },
    ],
  },
  {
    id: "voice-agent",
    eyebrow: "Voice Agent",
    title: "Follow up with every lead in the language they prefer.",
    description:
      "Flowra handles natural, low-latency calls, qualifies intent, and sends the useful moments back to your team.",
    videoSrc: "/product-tour/voice-agent.mp4",
    accent: "text-purple-600",
    accentSoft: "bg-purple-50 border-purple-200",
    icon: Mic,
    benefits: [
      "Use Hindi, Hinglish, and regional language presets",
      "Capture transcripts, recordings, and outcomes",
      "Warm-transfer high-intent callers to a teammate",
    ],
    preview: [
      { label: "Call status", value: "Connected", detail: "00:42 elapsed" },
      { label: "Language", value: "Hinglish", detail: "Natural voice" },
      { label: "Intent", value: "Hot lead", detail: "Transfer ready" },
    ],
  },
  {
    id: "whatsapp-chatbot",
    eyebrow: "WhatsApp Chatbot",
    title: "Answer the first question before a competitor can.",
    description:
      "Maya responds from your approved website, PDFs, and inventory data, then knows when to bring in a person.",
    videoSrc: "/product-tour/whatsapp-chatbot.mp4",
    accent: "text-emerald-600",
    accentSoft: "bg-emerald-50 border-emerald-200",
    icon: MessageCircle,
    benefits: [
      "Give accurate answers around the clock",
      "Keep pricing and availability grounded in your sources",
      "Escalate with the conversation history attached",
    ],
    preview: [
      { label: "Customer", value: "2BHK ka price?", detail: "WhatsApp · now" },
      { label: "Maya", value: "₹68L onwards", detail: "Source verified" },
      { label: "Next step", value: "Site visit", detail: "Suggested" },
    ],
  },
  {
    id: "web-widget-builder",
    eyebrow: "Web Widget Builder",
    title: "Turn your website into a helpful first conversation.",
    description:
      "Launch a branded chat widget without waiting on a front-end sprint, then route qualified visitors into the same workspace.",
    videoSrc: "/product-tour/web-widget-builder.mp4",
    accent: "text-cyan-600",
    accentSoft: "bg-cyan-50 border-cyan-200",
    icon: SlidersHorizontal,
    benefits: [
      "Match your brand, welcome message, and tone",
      "Choose when the assistant appears",
      "Move web conversations into shared follow-up",
    ],
    preview: [
      { label: "Widget", value: "Maya assistant", detail: "Live preview" },
      { label: "Greeting", value: "Need a quick answer?", detail: "Personalized" },
      { label: "Theme", value: "Flowra green", detail: "Ready to publish" },
    ],
  },
  {
    id: "lead-capture",
    eyebrow: "Lead Capture",
    title: "Capture intent while it is still warm.",
    description:
      "Collect the details your sales team needs, enrich the record, and trigger the right follow-up without a spreadsheet relay.",
    videoSrc: "/product-tour/lead-capture.mp4",
    accent: "text-rose-600",
    accentSoft: "bg-rose-500/10 border-rose-200",
    icon: FormInput,
    benefits: [
      "Ask only the questions that qualify a lead",
      "Create a clean CRM record automatically",
      "Start WhatsApp, voice, or human follow-up instantly",
    ],
    preview: [
      { label: "New lead", value: "Rahul Verma", detail: "Just submitted" },
      { label: "Intent", value: "Site visit", detail: "High confidence" },
      { label: "Follow-up", value: "WhatsApp sent", detail: "In 4 seconds" },
    ],
  },
  {
    id: "whatsapp-knowledge",
    eyebrow: "WhatsApp + Knowledge Base",
    title: "Give every answer a source your team trusts.",
    description:
      "Configure the WhatsApp assistant, add a website or document source, and watch Flowra extract, chunk, embed, and publish it to the knowledge graph.",
    videoSrc: "/product-tour/whatsapp-knowledge.mp4",
    accent: "text-emerald-600",
    accentSoft: "bg-emerald-50 border-emerald-200",
    icon: Database,
    benefits: [
      "Set the WhatsApp agent prompt and response behavior",
      "Add websites, files, text, or Google Sheets as sources",
      "See sources move from scraping to ready knowledge chunks",
    ],
    preview: [
      { label: "Source", value: "flowra.example.com", detail: "Website · ready" },
      { label: "Index", value: "56 chunks", detail: "Vectors indexed" },
      { label: "Answer", value: "Grounded", detail: "Source verified" },
    ],
  },
];

function DemoMedia({ demo }: { demo: Demo }) {
  const getGlowColor = (accent: string) => {
    if (accent.includes("emerald")) return "bg-emerald-500/10";
    if (accent.includes("blue")) return "bg-blue-500/10";
    if (accent.includes("amber")) return "bg-amber-500/10";
    if (accent.includes("purple")) return "bg-purple-500/10";
    if (accent.includes("cyan")) return "bg-cyan-500/10";
    return "bg-rose-500/10";
  };

  return (
    <div className="relative group w-full">
      {/* Soft Ambient Shadow on hover */}
      <div
        className={`absolute -inset-4 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none ${getGlowColor(
          demo.accent
        )}`}
      />

      {/* Ultra-minimal Bezel Wrapper (Floating Dark Glass Frame) */}
      <div className="relative p-2 sm:p-2.5 rounded-2xl bg-[#0F172A] border border-slate-800 shadow-[0_20px_50px_rgba(15,23,42,0.12)] transition-all duration-300">
        {/* Inner Video Mask - Perfectly hugs video dimensions with no cropping */}
        <div className="relative rounded-xl overflow-hidden bg-white ring-1 ring-black/5">
          <video
            className="block w-full h-auto object-contain"
            src={demo.videoSrc}
            muted
            loop
            playsInline
            preload="auto"
            autoPlay
            aria-label={`${demo.eyebrow} product demonstration`}
          />
        </div>
      </div>
    </div>
  );
}

function DemoCopy({ demo }: { demo: Demo }) {
  const Icon = demo.icon;

  return (
    <div className="flex flex-col justify-center lg:px-5 xl:px-10">
      <div
        className={`mb-5 inline-flex w-fit items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] ${demo.accentSoft} ${demo.accent}`}
      >
        <Icon className="h-3.5 w-3.5" aria-hidden="true" />
        {demo.eyebrow}
      </div>
      <h3 className="max-w-xl text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl lg:text-[2.15rem]">
        {demo.title}
      </h3>
      <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
        {demo.description}
      </p>
      <ul className="mt-7 space-y-3" aria-label={`${demo.eyebrow} benefits`}>
        {demo.benefits.map((benefit) => (
          <li
            key={benefit}
            className="flex items-start gap-3 text-sm leading-relaxed text-slate-700 sm:text-[15px]"
          >
            <span
              className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${demo.accentSoft}`}
            >
              <Check className={`h-3 w-3 ${demo.accent}`} aria-hidden="true" />
            </span>
            {benefit}
          </li>
        ))}
      </ul>
      <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-slate-800 hover:text-emerald-600 transition-colors cursor-pointer group">
        Explore the workflow
        <ArrowRight className={`h-4 w-4 ${demo.accent} group-hover:translate-x-1 transition-transform`} aria-hidden="true" />
      </div>
    </div>
  );
}

export const ProductTour: React.FC = () => {
  const tourRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const scope = tourRef.current;
    if (!scope) return;

    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-tour-copy]").forEach((element) => {
        const article = element.closest("article");
        if (!article) return;
        gsap.fromTo(
          element,
          { opacity: 0, y: 42 },
          {
            opacity: 1,
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: article,
              start: "top 82%",
              end: "top 48%",
              scrub: 0.7,
            },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-tour-media]").forEach((element) => {
        const article = element.closest("article");
        if (!article) return;
        gsap.fromTo(
          element,
          { opacity: 0, x: 42, scale: 0.98 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: article,
              start: "top 84%",
              end: "top 48%",
              scrub: 0.7,
            },
          }
        );
      });
    }, scope);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={tourRef}
      id="product-tour"
      className="relative w-full overflow-hidden border-t border-slate-200 bg-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-24 h-96 w-[min(80vw,900px)] -translate-x-1/2 rounded-full bg-emerald-500/[0.04] blur-[150px]"
      />

      <div className="relative mx-auto max-w-[1500px] px-6 py-24 sm:px-12 sm:py-28">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-700">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Product tour
          </div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            Every lead moment, made easier to act on.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Take a quiet tour through the parts of Flowra your team uses every day—from the first capture to the final follow-up.
          </p>
        </div>

        <div className="space-y-20 sm:space-y-28">
          {DEMOS.map((demo, index) => {
            const copy = (
              <div data-tour-copy>
                <DemoCopy demo={demo} />
              </div>
            );
            const media = (
              <div data-tour-media className="w-full">
                <DemoMedia demo={demo} />
              </div>
            );

            return (
              <article
                key={demo.id}
                id={`product-tour-${demo.id}`}
                className={`grid items-center gap-8 lg:gap-14 ${
                  index % 2 === 0
                    ? "lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]"
                    : "lg:grid-cols-[minmax(0,1.18fr)_minmax(0,0.82fr)]"
                } ${index > 0 ? "border-t border-slate-200 pt-20 sm:pt-28" : ""}`}
              >
                {index % 2 === 0 ? (
                  <>
                    {copy}
                    {media}
                  </>
                ) : (
                  <>
                    {media}
                    {copy}
                  </>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
