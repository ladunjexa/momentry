"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";
import { getLangDir } from "rtl-detect";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const locale = useLocale();
  const direction = getLangDir(locale);

  const [height, setHeight] = useState(0);
  const isRTL = direction === "rtl";

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full bg-background font-sans" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={uuidv4()}
            className={cn(
              "flex pt-10 md:pt-40 md:gap-10",
              isRTL ? "justify-end" : "justify-start"
            )}
          >
            <div
              className={cn(
                "sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full",
                isRTL && "md:flex-row-reverse"
              )}
            >
              <div
                className={cn(
                  "h-10 absolute w-10 rounded-full bg-white dark:bg-black flex items-center justify-center",
                  isRTL ? "right-3 md:right-3" : "left-3 md:left-3"
                )}
              >
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3
                className={cn(
                  "hidden md:block text-xl md:text-5xl font-bold text-default-500 dark:text-default-500",
                  isRTL ? "md:pr-20 text-right" : "md:pl-20 text-left"
                )}
              >
                {item.title}
              </h3>
            </div>

            <div
              className={cn(
                "relative w-full",
                isRTL ? "pr-20 pl-4 md:pr-4" : "pl-20 pr-4 md:pl-4"
              )}
            >
              <h3
                className={cn(
                  "md:hidden block text-2xl mb-4 font-bold text-default-500 dark:text-default-500",
                  isRTL ? "text-right" : "text-left"
                )}
              >
                {item.title}
              </h3>
              <div className={cn(isRTL ? "text-right" : "text-left")}>
                {item.content}
              </div>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className={cn(
            "absolute top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]",
            isRTL ? "md:right-8 right-8" : "md:left-8 left-8"
          )}
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
