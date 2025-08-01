import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Heebo,
  Roboto,
  Rubik,
  Assistant,
} from "next/font/google";
import "@/styles/global.css";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import TanStackQueryProvider from "@/components/providers/tanstack-query-provider";
import HeroUIProvider from "@/components/providers/heroui-provider";
import ThemeProvider from "@/components/providers/next-themes-provider";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getLangDir } from "rtl-detect";
import clsx from "clsx";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  preload: false,
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const assistant = Assistant({
  variable: "--font-assistant",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  const direction = getLangDir(locale);

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} dir={direction} suppressHydrationWarning>
      <body
        className={clsx(
          heebo.variable,
          geistSans.variable,
          geistMono.variable,
          roboto.variable,
          rubik.variable,
          assistant.variable,
          "bg-background text-foreground antialiased",
          roboto.className
        )}
      >
        <NextIntlClientProvider>
          <TanStackQueryProvider>
            <HeroUIProvider>
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
                {children}
              </ThemeProvider>
            </HeroUIProvider>
          </TanStackQueryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
