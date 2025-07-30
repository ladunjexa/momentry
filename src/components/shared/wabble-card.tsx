"use client";

import React from "react";
import { WobbleCard } from "../ui/wobble-card";
import { useTranslations } from "next-intl";

export function WobbleCardDemo() {
  const t = useTranslations("marketing.cta.cards");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left rtl:text-right text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            {t("card1.title")}
          </h2>
          <p className="mt-4 text-left rtl:text-right  text-base/6 text-neutral-200">
            {t("card1.content")}
          </p>
        </div>
        <img
          src="/thumbnail-showcase-dark.jpeg"
          width={380}
          height={500}
          alt="linear demo image"
          className="absolute ltr:-right-4 ltr:lg:-right-[40%] rtl:-left-4 rtl:lg:-left-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left rtl:text-right text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          {t("card2.title")}
        </h2>
        <p className="mt-4 max-w-[26rem] text-left rtl:text-right  text-base/6 text-neutral-200">
          {t("card2.content")}
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left rtl:text-right text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            {t("card3.title")}
          </h2>
          <p className="mt-4 max-w-[26rem] text-left rtl:text-right  text-base/6 text-neutral-200">
            {t("card3.content")}
          </p>
        </div>
        <img
          src="/thumbnail-showcase-dark.jpeg"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute ltr:-right-10 ltr:md:-right-[40%] ltr:lg:-right-[20%] rtl:-left-10 rtl:md:-left-[40%] rtl:lg:-left-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}
