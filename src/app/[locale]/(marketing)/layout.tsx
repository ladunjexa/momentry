import Navbar from "@/components/marketing/layout/navbar";
import Footer from "@/components/marketing/layout/footer";
import { VideoText } from "@/components/magicui/video-text";

export default async function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className="relative flex flex-col min-h-screen"
      id="marketing-container"
    >
      <Navbar />
      <main className="flex-grow w-full">
        <section className="container mx-auto">{children}</section>
      </main>
      <Footer />
    </div>
  );
}
