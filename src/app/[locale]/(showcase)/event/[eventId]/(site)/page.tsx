"use client";

import {
  Heart,
  ArrowDownToLine,
  Send,
  CameraIcon,
  ArrowUp,
} from "lucide-react";
import * as React from "react";
import { Image, Spacer } from "@heroui/react";
import { v4 as uuidv4 } from "uuid";
import { Button as HeroUIButton } from "@heroui/react";
import Fancybox, { FancyboxOptions } from "@/components/shared/fancybox";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "motion/react";
import { Icon as Iconify } from "@iconify/react";
import Navbar from "@/components/marketing/layout/navbar";

export default function Page() {
  const showcaseRef = React.useRef<HTMLDivElement | null>(null);

  return (
    <main>
      <AuroraBackground className="z-100">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center"
        >
          <div className="text-5xl md:text-7xl font-bold dark:text-white text-center">
            GIL & KORIN
          </div>
          <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 md:py-4">
            JULY 23, 2024
          </div>
          <HeroUIButton
            size="md"
            variant="bordered"
            endContent={<CameraIcon />}
            radius="none"
            onPress={() => {
              showcaseRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest",
              });
            }}
          >
            VIEW EVENT
          </HeroUIButton>
        </motion.div>
      </AuroraBackground>
      <Navbar isShowcase isBlurred={false} />
      <section className="w-full px-4" ref={showcaseRef}>
        <Fancybox options={FancyboxOptions}>
          <div
            id="showcase"
            className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 space-y-2 gap-2"
          >
            {Array.from({ length: 75 - 34 }).map((_, i) => (
              <div key={uuidv4()} className="relative w-full group">
                <Image
                  data-fancybox="showcase"
                  src={`/highlights/sample-photo-${i + 34}.jpg`}
                  alt="Sample Photo"
                  radius="none"
                  className="cursor-pointer brightness-95 hover:brightness-110"
                  isZoomed
                />
                <div className="absolute z-40 bottom-0 w-full h-12 bg-gradient-to-b from-transparent via-black/20 to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="flex justify-end items-center h-full px-3 space-x-3">
                    <Iconify
                      icon="solar:heart-linear"
                      strokeWidth={1.5}
                      width={20}
                      cursor={"pointer"}
                    />
                    <Iconify
                      icon="solar:download-minimalistic-linear"
                      strokeWidth={1.5}
                      width={20}
                      cursor={"pointer"}
                    />

                    <Iconify
                      icon="solar:square-share-line-linear"
                      strokeWidth={1.5}
                      width={20}
                      cursor={"pointer"}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Fancybox>
        <Spacer y={24} />
        <div className="flex justify-center items-center">
          <HeroUIButton
            size="md"
            variant="bordered"
            endContent={<ArrowUp />}
            radius="none"
            onPress={() => {
              showcaseRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest",
              });
            }}
          >
            BACK TO TOP
          </HeroUIButton>
        </div>
      </section>
    </main>
  );
}
