"use client";

import { useIsMobile } from "@/hooks/use-is-mobile";
import { Icon as Iconify } from "@iconify/react";
import { FloatingDock } from "./ui/floating-dock";
import clsx from "clsx";
import * as React from "react";

const links = [
  {
    title: "Momentry",
    icon: (
      <Iconify
        icon="solar:home-linear"
        className="h-full w-full text-foreground/50"
      />
    ),
    href: "/",
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

export default function ShowcaseDock() {
  const isMobile = useIsMobile();
  const [hide, setHide] = React.useState(false);

  React.useEffect(() => {
    const footer = document.querySelector("footer");

    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHide(entry.isIntersecting);
      },
      { root: null, threshold: 0 }
    );

    observer.observe(footer);

    return () => {
      observer.disconnect();
    };
  }, []);

  const className = isMobile ? "ltr:right-4 rtl:left-2" : "left-0 right-0";

  return (
    <div
      className={clsx(
        "fixed bottom-4 z-50 flex justify-center",
        className,
        hide && "opacity-0 pointer-events-none"
      )}
    >
      <FloatingDock items={links} />
    </div>
  );
}
