import {
  description,
  headerWrapper,
  sectionWrapper,
  subtitle,
  title,
} from "@/components/shared/primitives";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { WobbleCardDemo } from "@/components/shared/wabble-card";
import { Spacer } from "@heroui/react";
import * as React from "react";
import { useTranslations } from "next-intl";
import { destructHeadline } from "@/lib/utils";

export default function CallToAction() {
  const t = useTranslations("marketing.cta");
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
      <Spacer y={8} />
      <WobbleCardDemo />
    </main>
  );
}
