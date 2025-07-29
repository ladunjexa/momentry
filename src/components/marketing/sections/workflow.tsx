"use client";

import {
  description,
  headerWrapper,
  sectionWrapper,
  subtitle,
  title,
} from "@/components/shared/primitives";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import * as React from "react";
import { Timeline } from "@/components/ui/timeline";
import { useTranslations } from "next-intl";
import { Spacer } from "@heroui/react";
import { destructHeadline } from "@/lib/utils";

export default function Workflow() {
  const t = useTranslations("marketing.workflow");
  const { headlineWithoutLastWord, lastWord } = destructHeadline(t("headline"));

  return (
    <main className={sectionWrapper()}>
      <div className={headerWrapper({ className: "space-y-4" })}>
        <div className="flex flex-col items-center justify-center md:flex-row md:space-x-2">
          <h1 className={title()}>{headlineWithoutLastWord}</h1>
          <PointerHighlight>
            <h1 className={title()}>{lastWord}</h1>
          </PointerHighlight>
        </div>
        <div>
          <h2 className={subtitle()}>{t("subhead")}</h2>
          {/* <p className={description()}>
            This is a sample hero section where you can introduce your product
            or service.
          </p> */}
        </div>
      </div>
      <Spacer y={12} />
      <TimelineDemo />
    </main>
  );
}

export function TimelineDemo() {
  const t = useTranslations("marketing.workflow.steps");
  const keys = ["item1", "item2", "item3", "item4", "item5"] as const;
  const contents = [
    <div key="2024-timeline-content">
      <p className="mb-8 text-xs font-normal text-default-800 md:text-sm dark:text-default-200">
        Built and launched Aceternity UI and Aceternity UI Pro from scratch
      </p>
      <div className="grid grid-cols-2 gap-4">
        <img
          src="https://assets.aceternity.com/templates/startup-1.webp"
          alt="startup template"
          width={500}
          height={500}
          className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
        />
        <img
          src="https://assets.aceternity.com/templates/startup-2.webp"
          alt="startup template"
          width={500}
          height={500}
          className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
        />
        <img
          src="https://assets.aceternity.com/templates/startup-3.webp"
          alt="startup template"
          width={500}
          height={500}
          className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
        />
        <img
          src="https://assets.aceternity.com/templates/startup-4.webp"
          alt="startup template"
          width={500}
          height={500}
          className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
        />
      </div>
    </div>,
    <div key="2023-timeline-content">
      <p className="mb-8 text-xs font-normal text-default-800 md:text-sm dark:text-default-200">
        I usually run out of copy, but when I see content this big, I try to
        integrate lorem ipsum.
      </p>
      <p className="mb-8 text-xs font-normal text-default-800 md:text-sm dark:text-default-200">
        Lorem ipsum is for people who are too lazy to write copy. But we are
        not. Here are some more example of beautiful designs I built.
      </p>
      <div className="grid grid-cols-2 gap-4">
        <img
          src="https://assets.aceternity.com/pro/hero-sections.png"
          alt="hero template"
          width={500}
          height={500}
          className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
        />
        <img
          src="https://assets.aceternity.com/features-section.png"
          alt="feature template"
          width={500}
          height={500}
          className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
        />
        <img
          src="https://assets.aceternity.com/pro/bento-grids.png"
          alt="bento template"
          width={500}
          height={500}
          className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
        />
        <img
          src="https://assets.aceternity.com/cards.png"
          alt="cards template"
          width={500}
          height={500}
          className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
        />
      </div>
    </div>,
    <div key="changelog-timeline-content">
      <p className="mb-4 text-xs font-normal text-default-800 md:text-sm dark:text-default-200">
        Deployed 5 new components on Aceternity today
      </p>
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs text-default-700 md:text-sm dark:text-foreground/30">
          ✅ Card grid component
        </div>
        <div className="flex items-center gap-2 text-xs text-default-700 md:text-sm dark:text-foreground/30">
          ✅ Startup template Aceternity
        </div>
        <div className="flex items-center gap-2 text-xs text-default-700 md:text-sm dark:text-foreground/30">
          ✅ Random file upload lol
        </div>
        <div className="flex items-center gap-2 text-xs text-default-700 md:text-sm dark:text-foreground/30">
          ✅ Himesh Reshammiya Music CD
        </div>
        <div className="flex items-center gap-2 text-xs text-default-700 md:text-sm dark:text-foreground/30">
          ✅ Salman Bhai Fan Club registrations open
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <img
          src="https://assets.aceternity.com/pro/hero-sections.png"
          alt="hero template"
          width={500}
          height={500}
          className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
        />
        <img
          src="https://assets.aceternity.com/features-section.png"
          alt="feature template"
          width={500}
          height={500}
          className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
        />
        <img
          src="https://assets.aceternity.com/pro/bento-grids.png"
          alt="bento template"
          width={500}
          height={500}
          className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
        />
        <img
          src="https://assets.aceternity.com/cards.png"
          alt="cards template"
          width={500}
          height={500}
          className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
        />
      </div>
    </div>,
  ];

  const data = keys.map((key, index) => ({
    title: t(`${key}.title`),
    content: contents[index % contents.length],
  }));

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
