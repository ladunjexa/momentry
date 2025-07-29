"use client";

import SectionHeader from "@/components/marketing/layout/section-header";
import PricingSection from "@/components/shared/pricing-section";
import { headerWrapper, sectionWrapper } from "@/components/shared/primitives";
import {
  Accordion,
  AccordionItem,
  Spacer,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";
import { title } from "@/components/shared/primitives";
import { Icon as Iconify } from "@iconify/react";

export default function Page() {
  const accordionItems = [
    {
      key: "q1",
      title: "What is the pricing model?",
      content: "We offer a tiered pricing model based on usage and features.",
    },
    {
      key: "q2",
      title: "Are there any hidden fees?",
      content:
        "No, all fees are clearly outlined in our pricing documentation.",
    },
    {
      key: "q3",
      title: "Can I change my plan later?",
      content: "Yes, you can upgrade or downgrade your plan at any time.",
    },
  ];
  return (
    <main className={sectionWrapper()}>
      <Spacer y={4} />
      <SectionHeader page="pricing" />
      <PricingSection />

      <Spacer y={16} />
      <div className={headerWrapper({ className: "space-y-4" })}>
        <h1 className={title({ size: "sm" })}>Compare Plans</h1>
      </div>
      <Spacer y={12} />
      <Table
        aria-label="Example static collection table"
        className="max-w-6xl mx-auto"
      >
        <TableHeader>
          <TableColumn>Feature</TableColumn>
          <TableColumn>Free</TableColumn>
          <TableColumn>Pro</TableColumn>
          <TableColumn>Enterprise</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1">
            <TableCell>Tony Reichert</TableCell>
            <TableCell>
              <Iconify icon="twemoji:check-mark" />
            </TableCell>
            <TableCell>
              <Iconify icon="twemoji:check-mark" />
            </TableCell>
            <TableCell>
              <Iconify icon="twemoji:check-mark" />
            </TableCell>
          </TableRow>
          <TableRow key="2">
            <TableCell>Tony Reichert</TableCell>
            <TableCell>
              <Iconify icon="twemoji:check-mark" />
            </TableCell>
            <TableCell>
              <Iconify icon="twemoji:check-mark" />
            </TableCell>
            <TableCell>
              <Iconify icon="twemoji:check-mark" />
            </TableCell>
          </TableRow>
          <TableRow key="3">
            <TableCell>Tony Reichert</TableCell>
            <TableCell>
              <Iconify icon="twemoji:check-mark" />
            </TableCell>
            <TableCell>
              <Iconify icon="twemoji:check-mark" />
            </TableCell>
            <TableCell>
              <Iconify icon="twemoji:check-mark" />
            </TableCell>
          </TableRow>
          <TableRow key="4">
            <TableCell>Tony Reichert</TableCell>
            <TableCell>
              <Iconify icon="twemoji:check-mark" />
            </TableCell>
            <TableCell>
              <Iconify icon="twemoji:check-mark" />
            </TableCell>
            <TableCell>
              <Iconify icon="twemoji:check-mark" />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Spacer y={16} />
      <div className={headerWrapper({ className: "space-y-4" })}>
        <h1 className={title({ size: "sm" })}>Frequently Asked Questions</h1>
      </div>
      <Spacer y={12} />
      <Accordion variant="shadow" className="max-w-6xl mx-auto">
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
