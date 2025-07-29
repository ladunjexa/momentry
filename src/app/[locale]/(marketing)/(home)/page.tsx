import {
  CallToAction,
  ClientLogos,
  FAQ,
  Features,
  Hero,
  PainPoints,
  Pricing,
  SocialProof,
  Workflow,
} from "@/components/marketing/sections";
import { Divider, Spacer } from "@heroui/react";

import * as React from "react";

export default function Home() {
  return (
    <>
      <Hero />
      <Spacer y={4} />
      <ClientLogos />
      <Spacer y={12} />
      <Divider />
      <PainPoints />
      <Spacer y={12} />
      <Divider />
      <Features />
      <Spacer y={12} />
      <Divider />
      <Workflow />
      <Spacer y={12} />
      <Divider />
      <SocialProof />
      <Spacer y={12} />
      <Divider />
      <Pricing />
      <Spacer y={12} />
      <Divider />
      <FAQ />
      <Spacer y={12} />
      <Divider />
      <CallToAction />
    </>
  );
}
