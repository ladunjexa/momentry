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
      dir="ltr" // ! FORCING LTR DIRECTION
    >
      <main className="w-full flex-grow">{children}</main>
      <ShowcaseDock />
      <Spacer y={24} />
      <footer
        className="container mx-auto max-w-7xl px-6 py-4 text-center"
        role="contentinfo"
        aria-label="site footer"
      >
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
