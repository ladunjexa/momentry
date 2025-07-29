"use client";

import {
  description,
  headerWrapper,
  sectionWrapper,
  subtitle,
  title,
} from "@/components/shared/primitives";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { Accordion, AccordionItem, Spacer } from "@heroui/react";
import * as React from "react";

export default function FAQ() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <main className={sectionWrapper()}>
      <div className={headerWrapper({ className: "space-y-4" })}>
        <div className="flex items-center space-x-2 whitespace-nowrap">
          <h1 className={title()}>Frequently Asked</h1>
          <PointerHighlight>
            <h1 className={title()}>Questions</h1>
          </PointerHighlight>
        </div>
        <div>
          <h2 className={subtitle()}>
            Welcome to our marketing page! Explore our features and offerings.
          </h2>
          <p className={description()}>
            This is a sample hero section where you can introduce your product
            or service.
          </p>
        </div>
      </div>
      <Spacer y={8} />
      <Accordion variant="splitted">
        <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
          {defaultContent}
        </AccordionItem>
        <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
          {defaultContent}
        </AccordionItem>
        <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
          {defaultContent}
        </AccordionItem>
      </Accordion>
    </main>
  );
}
