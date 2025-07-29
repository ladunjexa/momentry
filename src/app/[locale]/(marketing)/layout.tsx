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
      <main className="flex grow w-full">
        <section className="container mx-auto max-w-7xl px-6">
          {children}
        </section>
      </main>
      <div className="relative h-[100px] md:h-[260px] w-full overflow-hidden">
        <VideoText src="/interior.mp4">MOMENTRY</VideoText>
      </div>
      <Footer />
    </div>
  );
}
