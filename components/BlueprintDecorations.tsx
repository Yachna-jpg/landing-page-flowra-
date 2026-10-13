"use client";

import React from "react";

export const BlueprintDecorations: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 select-none overflow-hidden">
      {/* Soft subtle ambient background light with subtle emerald and blue tone on light background */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-emerald-500/[0.04] blur-[160px]" />
      <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-500/[0.025] blur-[140px]" />
    </div>
  );
};
