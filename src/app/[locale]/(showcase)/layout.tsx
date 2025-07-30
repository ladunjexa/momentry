"use client";

import Footer from "@/components/marketing/layout/footer";
import { Spacer } from "@heroui/react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { Icon as Iconify } from "@iconify/react";
import { IconNewSection, IconTerminal2, IconHome } from "@tabler/icons-react";
const links = [
  {
    title: "Momentry",
    icon: (
      <Iconify
        icon="solar:home-linear"
        className="h-full w-full text-foreground/50"
      />
    ),
    href: "#",
  },
  {
    title: "Momentry Showcase",
    icon: (
      <Iconify
        icon="solar:gallery-linear"
        className="h-full w-full text-foreground/50"
      />
    ),
    href: "#",
  },
  {
    title: "Momentry AI",
    icon: <Iconify icon="ix:ai" className="h-full w-full text-foreground/50" />,
    href: "#",
  },
  {
    title: "Momentry Drop",
    icon: (
      <Iconify
        icon="solar:box-linear"
        className="h-full w-full text-foreground/50"
      />
    ),
    href: "#",
  },
];

export default function ShowcaseLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className="relative flex flex-col min-h-screen"
      id="showcase-container"
    >
      <main className="w-full flex-grow">{children}</main>

      <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center">
        <FloatingDock items={links} />
      </div>
      <Spacer y={24} />
      {/* <Footer /> */}
    </div>
  );
}
