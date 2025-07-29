import {
  description,
  headerWrapper,
  sectionWrapper,
  subtitle,
  title,
} from "@/components/shared/primitives";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import * as React from "react";

export default function CallToAction() {
  return (
    <main className={sectionWrapper()}>
      <div className={headerWrapper({ className: "space-y-4" })}>
        <div className="flex items-center space-x-2">
          <h1 className={title()}>Call To</h1>
          <PointerHighlight>
            <h1 className={title()}>Action</h1>
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
    </main>
  );
}
