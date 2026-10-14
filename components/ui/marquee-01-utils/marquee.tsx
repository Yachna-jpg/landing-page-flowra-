"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  pauseOnTouch?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  [key: string]: any;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = true,
  pauseOnTouch = true,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  const [isRowPaused, setIsRowPaused] = useState(false);

  return (
    <div
      {...props}
      onMouseEnter={() => pauseOnHover && setIsRowPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsRowPaused(false)}
      onTouchStart={() => pauseOnTouch && setIsRowPaused(true)}
      onTouchEnd={() => pauseOnTouch && setIsRowPaused(false)}
      onPointerDown={() => pauseOnTouch && setIsRowPaused(true)}
      onPointerUp={() => pauseOnTouch && setIsRowPaused(false)}
      onPointerCancel={() => pauseOnTouch && setIsRowPaused(false)}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:30s] [--gap:1rem] [gap:var(--gap)] select-none",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            style={{
              animationPlayState: isRowPaused ? "paused" : undefined,
            }}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "group-active:[animation-play-state:paused]": pauseOnTouch,
              "[animation-direction:reverse]": reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
}

export default Marquee;
