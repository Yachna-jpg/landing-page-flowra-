"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import {
  Phone,
  MessageCircle,
  MessageSquare,
  Check,
} from "lucide-react";

export type FaceScreenState =
  | "hero"
  | "voice"
  | "whatsapp"
  | "website"
  | "tick"
  | "smile";

interface RobotMascotProps {
  faceState: FaceScreenState;
  scale?: number;
  className?: string;
}

export const RobotMascot: React.FC<RobotMascotProps> = ({
  faceState,
  scale = 1,
  className = "",
}) => {
  // Simple, clean white icons with NO text
  const screenContent = useMemo(() => {
    switch (faceState) {
      case "hero":
        return (
          <div className="flex items-center justify-center space-x-12 sm:space-x-16 w-full h-full animate-blink">
            {/* Left Eye */}
            <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-white shadow-[0_0_18px_#ffffff,0_0_36px_#ffffff]" />
            {/* Right Eye */}
            <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-white shadow-[0_0_18px_#ffffff,0_0_36px_#ffffff]" />
          </div>
        );

      case "voice":
        return (
          <div className="flex items-center justify-center transition-all duration-500">
            <Phone
              className="w-12 h-12 sm:w-16 sm:h-16 text-white filter drop-shadow-[0_0_16px_rgba(255,255,255,0.95)]"
              strokeWidth={2.5}
            />
          </div>
        );

      case "whatsapp":
        return (
          <div className="flex items-center justify-center transition-all duration-500">
            <MessageCircle
              className="w-13 h-13 sm:w-18 sm:h-18 text-white filter drop-shadow-[0_0_16px_rgba(255,255,255,0.95)]"
              strokeWidth={2.4}
            />
          </div>
        );

      case "website":
        return (
          <div className="flex items-center justify-center transition-all duration-500">
            <MessageSquare
              className="w-12 h-12 sm:w-16 sm:h-16 text-white filter drop-shadow-[0_0_16px_rgba(255,255,255,0.95)]"
              strokeWidth={2.5}
            />
          </div>
        );

      case "tick":
        return (
          <div className="flex items-center justify-center transition-all duration-500">
            <Check
              className="w-14 h-14 sm:w-20 sm:h-20 text-white filter drop-shadow-[0_0_20px_#ffffff]"
              strokeWidth={3.8}
            />
          </div>
        );

      case "smile":
        return (
          <div className="flex items-center justify-center w-full h-full transition-all duration-500">
            <svg
              viewBox="0 0 100 100"
              className="w-20 h-20 sm:w-24 sm:h-24 text-white filter drop-shadow-[0_0_18px_#ffffff]"
            >
              {/* Smiling curved eyes */}
              <path
                d="M 22 36 Q 33 22 44 36"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M 56 36 Q 67 22 78 36"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                fill="none"
              />
              {/* Warm smile arc */}
              <path
                d="M 28 58 Q 50 82 72 58"
                stroke="currentColor"
                strokeWidth="5.5"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>
        );

      default:
        return null;
    }
  }, [faceState]);

  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* Slow floating animation wrapper */}
      <div
        className="relative flex items-center justify-center animate-calm-float transition-transform duration-700 ease-out will-change-transform"
        style={{
          transform: `scale(${scale})`,
        }}
      >
        {/* Soft shadow below the floating mascot */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-64 sm:w-96 h-10 rounded-full bg-black/90 blur-3xl pointer-events-none opacity-85" />

        {/* 40% Larger Mascot Container */}
        <div className="relative w-[340px] h-[340px] sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] xl:w-[640px] xl:h-[640px]">
          {/* Transparent cutout robot image */}
          <Image
            src="/robot.png"
            alt="Flowora Robot Mascot"
            fill
            priority
            unoptimized
            sizes="(max-width: 640px) 340px, (max-width: 1024px) 500px, 640px"
            className="object-contain pointer-events-none"
          />

          {/* Face Screen Overlay: ONLY simple icon, NO text, perfectly inside the rainbow bezel */}
          <div
            className="absolute flex items-center justify-center overflow-hidden"
            style={{
              left: "50%",
              top: "36.4%",
              transform: "translate(-50%, -50%)",
              width: "37.5%",
              height: "33%",
              borderRadius: "22%",
              backgroundColor: "#030305",
            }}
          >
            {/* Subtle inner screen shadow */}
            <div className="absolute inset-0 rounded-[22%] shadow-[inset_0_0_16px_rgba(0,0,0,0.95)] pointer-events-none" />

            {/* Glowing Icon */}
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              {screenContent}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
