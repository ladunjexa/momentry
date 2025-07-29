"use client";

import { Button as HeroUIButton } from "@heroui/react";
import { Button as ShadcnUIButton } from "@/components/ui/button";
import { Marquee3D } from "@/components/marquee-demo";
import { ModeToggle } from "@/components/modle-toggle";
import { LanguageSwitcher } from "./language-switcher";

export default function Complib() {
  return (
    <>
      <ModeToggle />
      <LanguageSwitcher />
      <Marquee3D />
      <HeroUIButton color="secondary">hello</HeroUIButton>
      <ShadcnUIButton>world</ShadcnUIButton>
    </>
  );
}
