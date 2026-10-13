"use client";

import React from "react";

export const BlueprintDecorations: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 select-none overflow-hidden">
      {/* Soft subtle ambient background light */}
      <div className="absolute top-1/3 left-2/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-indigo-950/[0.08] blur-[150px]" />
    </div>
  );
};
