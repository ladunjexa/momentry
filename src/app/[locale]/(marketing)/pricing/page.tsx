import SectionHeader from "@/components/marketing/layout/section-header";
import PricingSection from "@/components/shared/pricing-section";
import { Spacer } from "@heroui/react";

export default function Page() {
  return (
    <>
      <Spacer y={4} />
      <SectionHeader page="pricing" />
      <PricingSection />
    </>
  );
}
