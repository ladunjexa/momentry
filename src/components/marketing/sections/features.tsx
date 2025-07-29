import FeaturesSectionDemo from "@/components/features-section-demo-3";
import {
  description,
  headerWrapper,
  sectionWrapper,
  subtitle,
  title,
} from "@/components/shared/primitives";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import * as React from "react";

export default function Features() {
  return (
    <main className={sectionWrapper()}>
      <div className={headerWrapper({ className: "space-y-4" })}>
        <PointerHighlight>
          <h1 className={title()}>Features</h1>
        </PointerHighlight>
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
      <FeaturesSectionDemo />
    </main>
  );
}
