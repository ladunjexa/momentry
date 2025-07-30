"use client";

import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import {
  description,
  headerWrapper,
  sectionWrapper,
  subtitle,
  title,
} from "@/components/shared/primitives";
import { motion } from "motion/react";
import { Button as HeroUIButton } from "@heroui/react";
import { Icon as Iconify } from "@iconify/react";

import * as React from "react";
import { Spotlight } from "@/components/ui/spotlight-new";
import { Cover } from "@/components/ui/cover";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("marketing.hero");

  return (
    <>
      <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="px-4 py-10 md:py-20">
        <Spotlight />
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold md:text-4xl lg:text-7xl dark:text-slate-300">
          {t("headline")
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word === "Experience" || word === "בחוויה" ? (
                  <Cover>{word}</Cover>
                ) : (
                  word
                )}
              </motion.span>
            ))}
        </h1>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-default-600 dark:text-default-400"
        >
          {t("subhead")}
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1,
          }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <HeroUIButton
            size="lg"
            variant="shadow"
            className="bg-[#000] text-background dark:bg-[#fff]"
            color="primary"
          >
            {t("cta.secondary")}
          </HeroUIButton>
          <HeroUIButton
            size="lg"
            variant="bordered"
            endContent={
              <Iconify
                icon="lucide:arrow-right"
                className="rtl:rotate-180 overflow-hidden"
                width={22}
              />
            }
          >
            {t("cta.primary")}
          </HeroUIButton>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.3,
            delay: 1.2,
          }}
          className="relative z-10 mt-20 rounded-3xl border border-neutral-200 bg-neutral-100 p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900"
        >
          <div className="w-full overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700">
            <div className="relative">
              <HeroVideoDialog
                className="block dark:hidden"
                animationStyle="top-in-bottom-out"
                videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                // thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
                thumbnailSrc="/thumbnail-showcase-light.jpeg"
                thumbnailAlt="Hero Video"
                width={1000}
                height={1000}
              />
              <HeroVideoDialog
                className="hidden dark:block"
                animationStyle="top-in-bottom-out"
                videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                thumbnailSrc="/thumbnail-showcase-dark.jpeg"
                thumbnailAlt="Hero Video"
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

// <main className={sectionWrapper()}>
//   <div className={headerWrapper()}>
//     <h1 className={title()}>Home</h1>
//     <h2 className={subtitle()}>
//       Welcome to our marketing page! Explore our features and offerings.
//     </h2>
//     <p className={description()}>
//       This is a sample hero section where you can introduce your product or
//       service.
//     </p>
//   </div>
// </main>
