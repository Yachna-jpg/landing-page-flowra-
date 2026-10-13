"use client";

import React, { useEffect, useRef, useMemo } from "react";
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
  | "smile"
  | "workflow"
  | "inbox";

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
  const robotRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const faceRef = useRef<HTMLImageElement>(null);
  const eyeLRef = useRef<HTMLImageElement>(null);
  const eyeRRef = useRef<HTMLImageElement>(null);
  const chatRef = useRef<HTMLImageElement>(null);
  const torsoRef = useRef<HTMLImageElement>(null);
  const neckRef = useRef<HTMLImageElement>(null);
  const armLRef = useRef<HTMLImageElement>(null);
  const armRRef = useRef<HTMLImageElement>(null);
  const featureIconRef = useRef<HTMLDivElement>(null);

  // Dynamic icon screen content for interactive features
  const screenContent = useMemo(() => {
    switch (faceState) {
      case "voice":
        return (
          <div className="flex items-center justify-center">
            <Phone
              className="w-10 h-10 sm:w-14 sm:h-14 text-white filter drop-shadow-[0_0_16px_rgba(255,255,255,0.95)]"
              strokeWidth={2.4}
            />
          </div>
        );

      case "whatsapp":
        return (
          <div className="flex items-center justify-center">
            <MessageCircle
              className="w-11 h-11 sm:w-15 sm:h-15 text-white filter drop-shadow-[0_0_16px_rgba(255,255,255,0.95)]"
              strokeWidth={2.4}
            />
          </div>
        );

      case "website":
        return (
          <div className="flex items-center justify-center">
            <MessageSquare
              className="w-10 h-10 sm:w-14 sm:h-14 text-white filter drop-shadow-[0_0_16px_rgba(255,255,255,0.95)]"
              strokeWidth={2.4}
            />
          </div>
        );

      case "tick":
        return (
          <div className="flex items-center justify-center">
            <Check
              className="w-12 h-12 sm:w-16 sm:h-16 text-white filter drop-shadow-[0_0_20px_#ffffff]"
              strokeWidth={3.8}
            />
          </div>
        );

      case "smile":
        return (
          <div className="flex items-center justify-center w-full h-full">
            <svg
              viewBox="0 0 100 100"
              className="w-14 h-14 sm:w-18 sm:h-18 text-white filter drop-shadow-[0_0_18px_#ffffff]"
            >
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

      case "workflow":
        return (
          <div className="flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-11 h-11 sm:w-15 sm:h-15 text-white filter drop-shadow-[0_0_16px_rgba(255,255,255,0.95)]" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <rect width="6" height="6" x="3" y="3" rx="1" />
              <rect width="6" height="6" x="15" y="3" rx="1" />
              <rect width="6" height="6" x="9" y="15" rx="1" />
              <path d="M6 9v3a3 3 0 0 0 3 3h3" />
              <path d="M18 9v3a3 3 0 0 1-3 3" />
            </svg>
          </div>
        );

      case "inbox":
        return (
          <div className="flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-11 h-11 sm:w-15 sm:h-15 text-white filter drop-shadow-[0_0_16px_rgba(255,255,255,0.95)]" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
              <path d="M15.8 9.2a5 5 0 0 0-6.8 6.8L9 19" />
            </svg>
          </div>
        );

      default:
        return null;
    }
  }, [faceState]);

  useEffect(() => {
    const W = () => window.innerWidth;
    const H = () => window.innerHeight;

    // Spring physics helper exactly from OG Robot Slices
    const sp = (k: number, d: number) => ({
      x: 0,
      v: 0,
      to(t: number) {
        this.v += (t - this.x) * k;
        this.v *= d;
        return (this.x += this.v);
      },
    });

    const yaw = sp(0.07, 0.8);
    const pit = sp(0.07, 0.8);
    const rol = sp(0.06, 0.82);
    const tY = sp(0.035, 0.86);
    const eX = sp(0.2, 0.55);
    const eY = sp(0.2, 0.55);
    const fX = sp(0.12, 0.7);
    const aL = sp(0.05, 0.8);
    const aR = sp(0.05, 0.8);

    const cl = (v: number, m: number) => Math.max(-m, Math.min(m, v));

    let px: number | null = null;
    let py = 0;
    let p = 0;
    let cp = 0;
    let lp = 0;
    let vs = 0;
    let bl = 1;
    let cb = 1;
    let animId: number;

    const handlePointerMove = (e: PointerEvent) => {
      px = e.clientX;
      py = e.clientY;
    };

    const handlePointerLeave = () => {
      px = null;
    };

    const handleScroll = () => {
      const docH = Math.max(1, document.documentElement.scrollHeight - H());
      p = Math.min(1, Math.max(0, window.scrollY / docH));
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("pointerleave", handlePointerLeave, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Blink timer from OG
    let blinkTimer: NodeJS.Timeout | null = null;
    const scheduleBlink = () => {
      blinkTimer = setTimeout(() => {
        bl = 0.08;
        setTimeout(() => {
          bl = 1;
          scheduleBlink();
        }, 120);
      }, 2200 + Math.random() * 3500);
    };
    scheduleBlink();

    function tick(now: number) {
      if (!robotRef.current) return;

      const robotEl = robotRef.current;
      const r = robotEl.getBoundingClientRect();
      const s = r.width / 550;
      robotEl.style.setProperty("--k", String(s));

      cp += (p - cp) * 0.07;
      vs += ((cp - lp) * 60 - vs) * 0.15;
      lp = cp;

      // Cursor target -> yaw, pitch, roll
      const tx =
        px == null ? 0 : cl((px - (r.left + r.width * 0.495)) / (W() * 0.5), 1);
      const ty =
        px == null ? 0 : cl((py - (r.top + r.height * 0.38)) / (H() * 0.5), 1);

      const ya = yaw.to(tx);
      const pi = pit.to(ty + cl(vs * 0.15, 0.3));
      const ro = rol.to(-tx * 0.25 - tx * ty * 0.6);

      // Head 3D transform with perspective
      if (headRef.current) {
        headRef.current.style.transform = `perspective(${
          1100 * s
        }px) translate(${ya * 6 * s}px,${pi * 5 * s}px) rotateY(${
          ya * 38
        }deg) rotateX(${-pi * 14}deg) rotateZ(${ro * 8}deg)`;
      }

      // Face panel slide
      if (faceRef.current) {
        faceRef.current.style.transform = `translate(${
          fX.to(tx * 30) * s
        }px,${pi * 10 * s}px)`;
      }

      // Eyes slide & blink
      const ex = eX.to(tx * 46) * s;
      const ey = eY.to(ty * 24) * s;
      cb += (bl - cb) * 0.5;

      const eyeTransform = `translate(${ex}px,${ey}px) scale(${
        1 - 0.25 * Math.abs(ya)
      },${cb})`;

      if (eyeLRef.current) eyeLRef.current.style.transform = eyeTransform;
      if (eyeRRef.current) eyeRRef.current.style.transform = eyeTransform;

      // Chat icon or dynamic feature icon
      if (chatRef.current) {
        chatRef.current.style.transform = `translate(${ex}px,${ey}px)`;
      }
      if (featureIconRef.current) {
        featureIconRef.current.style.transform = `translate(calc(-50% + ${ex}px), calc(-50% + ${ey}px))`;
      }

      // Torso & neck counter-move
      const ty2 = tY.to(ya * 0.3);
      const fl = Math.min(10, Math.abs(tY.v) * 220 + Math.abs(vs) * 3);
      const torsoTransform = `translateX(${-ty2 * 10 * s}px)`;

      if (torsoRef.current) torsoRef.current.style.transform = torsoTransform;
      if (neckRef.current) neckRef.current.style.transform = torsoTransform;

      // Arms flare with spring momentum
      if (armLRef.current) {
        armLRef.current.style.transformOrigin = "22.5% 66%";
        armLRef.current.style.transform = `translateX(${
          -ty2 * 10 * s
        }px) rotate(${2 + aL.to(fl) + Math.sin(now / 1100) * 1.2}deg)`;
      }
      if (armRRef.current) {
        armRRef.current.style.transformOrigin = "77.5% 66%";
        armRRef.current.style.transform = `translateX(${
          -ty2 * 10 * s
        }px) rotate(${-(2 + aR.to(fl)) + Math.sin(now / 1100 + 2) * 1.2}deg)`;
      }

      animId = requestAnimationFrame(tick);
    }

    animId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("scroll", handleScroll);
      if (blinkTimer) clearTimeout(blinkTimer);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div
      className={`relative flex items-center justify-center select-none ${className}`}
    >
      {/* Calm floating wrapper */}
      <div
        className="relative flex items-center justify-center animate-calm-float transition-transform duration-700 ease-out will-change-transform"
        style={{ transform: `scale(${scale})` }}
      >
        {/* Soft shadow below the robot */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-64 sm:w-96 h-10 rounded-full bg-black/90 blur-3xl pointer-events-none opacity-85" />

        {/* 550x550 Robot Mascot Layered Canvas */}
        <div
          ref={robotRef}
          className="robot-canvas relative w-[320px] sm:w-[480px] lg:w-[540px] xl:w-[550px]"
        >
          {/* Base body layers */}
          <img
            ref={armLRef}
            className="robot-layer"
            id="armL"
            src="/assets/robot/arm_left.png"
            alt=""
            draggable={false}
          />
          <img
            ref={armRRef}
            className="robot-layer"
            id="armR"
            src="/assets/robot/arm_right.png"
            alt=""
            draggable={false}
          />
          <img
            ref={torsoRef}
            className="robot-layer"
            id="torso"
            src="/assets/robot/torso_neck.png"
            alt=""
            draggable={false}
          />
          <img
            ref={neckRef}
            className="robot-layer"
            id="neck"
            src="/assets/robot/neck.png"
            alt=""
            draggable={false}
          />

          {/* Head group with preserve-3d */}
          <div ref={headRef} className="robot-layer robot-head" id="head">
            {/* Ears with 3D depth */}
            <img
              className="robot-layer robot-z"
              id="earL"
              style={{ "--z": "-18px" } as React.CSSProperties}
              src="/assets/robot/ear_left.png"
              alt=""
              draggable={false}
            />
            <img
              className="robot-layer robot-z"
              id="earR"
              style={{ "--z": "-18px" } as React.CSSProperties}
              src="/assets/robot/ear_right.png"
              alt=""
              draggable={false}
            />

            {/* Screen opening clipped by mask */}
            <div
              className="robot-layer robot-z robot-screen"
              id="screen"
              style={{ "--z": "-8px" } as React.CSSProperties}
            >
              <img
                ref={faceRef}
                className="robot-layer"
                id="face"
                src="/assets/robot/face_screen.png"
                alt=""
                draggable={false}
              />

              {/* Eyes */}
              <img
                ref={eyeLRef}
                className={`robot-layer transition-opacity duration-300 ${
                  faceState === "hero" ? "opacity-100" : "opacity-0"
                }`}
                id="eyeL"
                src="/assets/robot/eye_left.png"
                alt=""
                draggable={false}
                style={{ transformOrigin: "41.1% 35.5%" }}
              />
              <img
                ref={eyeRRef}
                className={`robot-layer transition-opacity duration-300 ${
                  faceState === "hero" ? "opacity-100" : "opacity-0"
                }`}
                id="eyeR"
                src="/assets/robot/eye_right.png"
                alt=""
                draggable={false}
                style={{ transformOrigin: "58.7% 35.5%" }}
              />

              {/* Chat icon */}
              <img
                ref={chatRef}
                className="robot-chat pointer-events-none"
                id="chat"
                src="/assets/robot/chat_icon.png"
                alt=""
                draggable={false}
              />

              {/* Feature state icon overlay for voice/whatsapp/website/tick/smile */}
              {faceState !== "hero" && (
                <div
                  ref={featureIconRef}
                  className="robot-layer flex items-center justify-center transition-opacity duration-300 pointer-events-none"
                  style={{
                    left: "49.8%",
                    top: "34.4%",
                    width: "36%",
                    height: "33%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {screenContent}
                </div>
              )}
            </div>

            {/* Head shell on top */}
            <img
              className="robot-layer"
              id="shell"
              src="/assets/robot/head_shell.png"
              alt="Flowora Robot Mascot"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
