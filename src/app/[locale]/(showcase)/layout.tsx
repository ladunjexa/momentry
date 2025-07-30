import Footer from "@/components/marketing/layout/footer";
import EventHero from "@/components/showcase/event-hero";
import { Spacer } from "@heroui/react";

export default function ShowcaseLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className="relative flex flex-col min-h-screen"
      id="showcase-container"
    >
      <main className="w-full flex-grow">{children}</main>
      <Spacer y={12} />
      <Footer />
    </div>
  );
}
