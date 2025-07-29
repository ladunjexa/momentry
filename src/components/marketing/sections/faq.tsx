"use client";

import {
  description,
  headerWrapper,
  sectionWrapper,
  subtitle,
  title,
} from "@/components/shared/primitives";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { destructHeadline } from "@/lib/utils";
import { Accordion, AccordionItem, Spacer } from "@heroui/react";
import { useTranslations } from "next-intl";
import * as React from "react";

export default function FAQ() {
  const t = useTranslations("marketing.faq");
  const keys = ["q1", "q2", "q3"] as const;

  const accordionItems = keys.map((key) => ({
    key,
    title: t(`questions.${key}.question`),
    content: t(`questions.${key}.answer`),
  }));
  const { headlineWithoutLastWord, lastWord } = destructHeadline(t("headline"));

  return (
    <main className={sectionWrapper()}>
      <div className={headerWrapper({ className: "space-y-4" })}>
        <div className="flex flex-col items-center justify-center md:flex-row md:space-x-2">
          {/* whitespace-nowrap*/}
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
      <Spacer y={8} />
      <Accordion variant="shadow" className="max-w-5xl mx-auto">
        {accordionItems.map(({ key, title, content }) => (
          <AccordionItem
            key={key}
            aria-label={title}
            title={title}
            className="!border-b-0"
          >
            <p className="text-neutral-700 dark:text-neutral-300">{content}</p>
          </AccordionItem>
        ))}
      </Accordion>
    </main>
  );
}
