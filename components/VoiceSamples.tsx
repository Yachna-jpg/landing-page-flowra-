"use client";

import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, Sparkles } from "lucide-react";

interface VoiceSample {
  id: string;
  language: string;
  dialect: string;
  gender: "Female" | "Male";
  persona: string;
  audioSrc: string;
}

const VOICE_SAMPLES: VoiceSample[] = [
  {
    id: "v1",
    language: "Hindi",
    dialect: "Delhi / NCR",
    gender: "Female",
    persona: "Conversational Inbound",
    audioSrc: "/audio/00.mp3",
  },
  {
    id: "v2",
    language: "Hinglish",
    dialect: "Urban Metro",
    gender: "Female",
    persona: "High-Intent Sales Qualified",
    audioSrc: "/audio/01.mp3",
  },
  {
    id: "v3",
    language: "Tamil",
    dialect: "Chennai",
    gender: "Female",
    persona: "Appointment Scheduler",
    audioSrc: "/audio/02.mp3",
  },
  {
    id: "v4",
    language: "Telugu",
    dialect: "Hyderabad",
    gender: "Female",
    persona: "Immediate Callback Lead",
    audioSrc: "/audio/03.mp3",
  },
  {
    id: "v5",
    language: "Kannada",
    dialect: "Bengaluru",
    gender: "Female",
    persona: "Real Estate Qualifier",
    audioSrc: "/audio/04.mp3",
  },
  {
    id: "v6",
    language: "Marathi",
    dialect: "Pune / Mumbai",
    gender: "Female",
    persona: "Customer Support Escalation",
    audioSrc: "/audio/05.mp3",
  },
  {
    id: "v7",
    language: "Bengali",
    dialect: "Kolkata",
    gender: "Female",
    persona: "Healthcare Consultation",
    audioSrc: "/audio/06.mp3",
  },
  {
    id: "v8",
    language: "Gujarati",
    dialect: "Ahmedabad",
    gender: "Female",
    persona: "B2B Trade Follow-up",
    audioSrc: "/audio/07.mp3",
  },
  {
    id: "v9",
    language: "Indian English",
    dialect: "Neutral Professional",
    gender: "Female",
    persona: "SaaS Enterprise Demo",
    audioSrc: "/audio/08.mp3",
  },
  {
    id: "v10",
    language: "Punjabi",
    dialect: "Chandigarh",
    gender: "Female",
    persona: "EdTech Admission Advisor",
    audioSrc: "/audio/09.mp3",
  },
  {
    id: "v11",
    language: "Malayalam",
    dialect: "Kochi",
    gender: "Female",
    persona: "Finance & Loan Inquiries",
    audioSrc: "/audio/10.mp3",
  },
  {
    id: "v12",
    language: "Hinglish (Fast)",
    dialect: "E-Commerce",
    gender: "Female",
    persona: "Abandoned Cart Recovery",
    audioSrc: "/audio/11.mp3",
  },
  {
    id: "v13",
    language: "Hindi (Warm)",
    dialect: "North India",
    gender: "Male",
    persona: "Home Services Booking",
    audioSrc: "/audio/voice_00.mp3",
  },
  {
    id: "v14",
    language: "Hinglish (Tech)",
    dialect: "Bangalore Tech",
    gender: "Male",
    persona: "Developer API Support",
    audioSrc: "/audio/voice_01.mp3",
  },
  {
    id: "v15",
    language: "Tamil (Formal)",
    dialect: "Coimbatore",
    gender: "Male",
    persona: "B2B Distribution Leads",
    audioSrc: "/audio/voice_02.mp3",
  },
  {
    id: "v16",
    language: "Telugu (Retail)",
    dialect: "Vijayawada",
    gender: "Male",
    persona: "Dealership Follow-up",
    audioSrc: "/audio/voice_03.mp3",
  },
];

export const VoiceSamples: React.FC = () => {
  const [activeVoiceId, setActiveVoiceId] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleTogglePlay = (voice: VoiceSample) => {
    if (activeVoiceId === voice.id) {
      if (isPlaying) {
        audioRef.current?.pause();
        setIsPlaying(false);
      } else {
        audioRef.current?.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      const newAudio = new Audio(voice.audioSrc);
      audioRef.current = newAudio;
      setActiveVoiceId(voice.id);
      setIsPlaying(true);

      newAudio.play().catch(() => {
        setIsPlaying(false);
      });

      newAudio.onended = () => {
        setIsPlaying(false);
      };
    }
  };

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  return (
    <section id="voice-samples" className="w-full max-w-7xl mx-auto px-6 sm:px-12 py-24 border-t border-slate-200 bg-[#F8FAFC]">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          <span>Ultra-Realistic Voice Engine</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
          Hear Flowra in Action
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Listen to how naturally Flowra talks in native Indian accents. Zero robotic delay, fluent code-switching, and authentic tone.
        </p>
      </div>

      {/* Grid of Voice Chips */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {VOICE_SAMPLES.map((voice) => {
          const isCurrentActive = activeVoiceId === voice.id && isPlaying;

          return (
            <div
              key={voice.id}
              onClick={() => handleTogglePlay(voice)}
              className={`group relative p-5 rounded-2xl bg-white border transition-all duration-300 cursor-pointer select-none flex flex-col justify-between shadow-sm ${
                isCurrentActive
                  ? "border-emerald-500 shadow-[0_0_24px_rgba(16,185,129,0.18)] bg-emerald-50/30"
                  : "border-slate-200 hover:border-slate-300 hover:shadow-md"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-slate-900 text-base">
                      {voice.language}
                    </span>
                    <span className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-slate-600 font-medium">
                      {voice.dialect}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-slate-500">{voice.persona}</p>
                </div>

                {/* Play/Pause Button */}
                <button
                  type="button"
                  aria-label={`Play ${voice.language} sample`}
                  className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105 ${
                    isCurrentActive
                      ? "bg-emerald-500 text-white shadow-[0_0_16px_rgba(16,185,129,0.4)]"
                      : "bg-slate-100 text-slate-700 group-hover:bg-slate-900 group-hover:text-white"
                  }`}
                >
                  {isCurrentActive ? (
                    <Pause className="w-4 h-4 fill-current" />
                  ) : (
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  )}
                </button>
              </div>

              {/* Sound Wave Animation if active */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Volume2 className={`w-3.5 h-3.5 ${isCurrentActive ? "text-emerald-600" : "text-slate-400"}`} />
                  {isCurrentActive ? "Playing voice sample..." : "Click to test sample"}
                </span>

                {isCurrentActive && (
                  <div className="flex items-center gap-0.5 h-3">
                    <span className="w-0.5 h-2 bg-emerald-500 animate-pulse rounded-full" />
                    <span className="w-0.5 h-3.5 bg-emerald-500 animate-pulse rounded-full delay-75" />
                    <span className="w-0.5 h-2.5 bg-emerald-500 animate-pulse rounded-full delay-150" />
                    <span className="w-0.5 h-4 bg-emerald-500 animate-pulse rounded-full delay-100" />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
