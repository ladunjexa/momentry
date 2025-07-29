"use client";

import { SparklesCore } from "@/components/ui/sparkles";
import { Spacer } from "@heroui/react";
import { useTheme } from "next-themes";

export default function SectionHeader() {
  const { theme } = useTheme();

  if (!theme) {
    return null; // Ensure theme is defined before rendering
  }

  const particleColor = theme === "dark" ? "#FFFFFF" : "#000000";
  return (
    <header>
      <Spacer y={4} />
      <div className="w-full bg-background text-foreground flex flex-col items-center justify-center overflow-hidden rounded-md scale-60">
        <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center relative z-20">
          About
        </h1>
        <div className="w-[40rem] h-20 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor={particleColor}
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-background text-foreground [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>
    </header>
  );
}
