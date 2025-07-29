"use client";

import { SwitchProps, useSwitch } from "@heroui/react";
import { useIsSSR } from "@react-aria/ssr";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import clsx from "clsx";
import { useTheme } from "next-themes";
import { FC } from "react";
import { Icon as Iconify } from "@iconify/react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";

export interface LanguageSwitchProps {
  className?: string;
  classNames?: SwitchProps["classNames"];
}

export const LanguageSwitch: FC<LanguageSwitchProps> = ({
  className,
  classNames,
}) => {
  const router = useRouter();
  const currentLocale = useLocale();
  const pathname = usePathname();

  const isSSR = useIsSSR();

  const onChange = () => {
    // Update the URL to switch languages
    const newLocale = currentLocale === "en" ? "he" : "en";
    router.push(pathname, { locale: newLocale });
  };

  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch({
    isSelected: currentLocale === "en" || isSSR,
    "aria-label": `Switch to ${
      currentLocale === "en" || isSSR ? "hebrew" : "english"
    } language`,
    onChange,
  });

  return (
    <Component
      {...getBaseProps({
        className: clsx(
          "px-px transition-opacity hover:opacity-80 cursor-pointer",
          className,
          classNames?.base
        ),
      })}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <div
        {...getWrapperProps()}
        className={slots.wrapper({
          class: clsx(
            [
              "w-auto",
              "bg-transparent",
              "rounded-lg",
              "flex items-center justify-center",
              "group-data-[selected=true]:bg-transparent",
              "!text-default-500",
              "pt-px",
              "px-0",
              "mx-0",
            ],
            classNames?.wrapper
          ),
        })}
      >
        {!isSelected || isSSR ? (
          <Iconify icon="twemoji:flag-israel" width={24} />
        ) : (
          <Iconify icon="twemoji:flag-united-states" width={24} />
        )}
      </div>
    </Component>
  );
};
