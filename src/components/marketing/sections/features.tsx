import { FeaturesSectionDemo } from "@/components/shared/features-section";
import {
  description,
  headerWrapper,
  sectionWrapper,
  subtitle,
  title,
} from "@/components/shared/primitives";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { useTranslations } from "next-intl";
import * as React from "react";

export default function Features() {
  const t = useTranslations("marketing.features");
  return (
    <main className={sectionWrapper()}>
      <div className={headerWrapper({ className: "space-y-4" })}>
        <PointerHighlight>
          <h1 className={title()}>{t("headline")}</h1>
        </PointerHighlight>
        <div>
          <h2 className={subtitle()}>{t("subhead")}</h2>
          {/* <p className={description()}>
            This is a sample hero section where you can introduce your product
            or service.
          </p> */}
        </div>
      </div>
      <FeaturesSectionDemo />
    </main>
  );
}
