import { Spacer } from "@heroui/react";
import ShowcaseDock from "@/components/dock";
import Footer from "@/components/marketing/layout/footer";

export default function ShowcaseLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className="relative flex flex-col min-h-screen"
      id="showcase-container"
    >
      <main className="w-full flex-grow">{children}</main>
      <ShowcaseDock />
      <Spacer y={24} />
      <Footer />
    </div>
  );
}
