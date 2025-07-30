import Footer from "@/components/marketing/layout/footer";
import EventHero from "@/components/showcase/event-hero";
import { Spacer } from "@heroui/react";

export default function ShowcaseLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className="relative flex flex-col min-h-screen overflow-x-hidden"
      id="showcase-container"
    >
      <EventHero />
      <main className="flex-grow w-screen">
        <div></div>
        {children}
      </main>
      <Spacer y={12} />
      <Footer />
    </div>
  );
}
