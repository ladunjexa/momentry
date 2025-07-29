"use client";

import * as React from "react";
import { Link } from "@/i18n/navigation";
import { v4 as uuidv4 } from "uuid";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Spacer,
} from "@heroui/react";
import { Logo } from "@/components/icons/logo";
import { ThemeSwitch } from "@/components/shared/theme-switch";
import { LanguageSwitch } from "@/components/shared/language-switch";
import { Button as HeroUIButton } from "@heroui/react";
import { Icon as Iconify } from "@iconify/react";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

const navigationItems = [
  { href: "/", label: "home" },
  { href: "/about", label: "about" },
  // { href: "/careers", label: "Careers" },
  { href: "/contact", label: "contact" },
  // { href: "/faq", label: "FAQ" },
  { href: "/features", label: "features" },
  // { href: "/legal/privacy", label: "Privacy Policy" },
  // { href: "/legal/terms", label: "Terms of Service" },
  { href: "/pricing", label: "pricing" },
];

export default function Navbar() {
  const pathname = usePathname();
  const t = useTranslations("pages");

  const isActive = (href: string) => {
    // remove the localized prefix from the pathname
    const normalizedPathname = pathname.replace("/en", "").replace("/he", "");
    if (normalizedPathname === "" && href === "/") {
      return true; // Home is active when pathname is root
    }
    return (
      normalizedPathname === href || normalizedPathname.startsWith(`${href}/`)
    );
  };

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <HeroUINavbar
      className="z-[10000]"
      maxWidth="2xl"
      position="sticky"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      isBlurred
    >
      {/* Menu toggle and brand */}
      <NavbarContent justify="start" className="basis-1/5 sm:basis-full">
        <NavbarMenuToggle className="lg:hidden" />
        <NavbarBrand as="li" className="max-w-fit">
          <Link
            className="flex justify-start items-center gap-2"
            href="/"
            aria-label="company name"
          >
            <Logo />
            <p className="font-bold text-2xl hidden lg:flex">Momentry</p>
          </Link>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-4 rtl:ml-0 rtl:mr-4">
          {navigationItems.map((item) => (
            <NavbarItem as="li" key={uuidv4()} isActive={isActive(item.href)}>
              <Link href={item.href}>{t(item.label)}</Link>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem>
          <LanguageSwitch />
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Spacer x={2} />
          <HeroUIButton as={Link} href="/pricing" size="md" variant="bordered">
            {t("signIn")}
          </HeroUIButton>
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <HeroUIButton
            as={Link}
            href="/pricing"
            size="md"
            className="bg-[#000] text-background dark:bg-[#fff]"
            color="primary"
            variant="shadow"
            endContent={
              <Iconify
                icon="lucide:arrow-right"
                className="rtl:rotate-180 overflow-hidden"
                width={22}
              />
            }
          >
            {t("signUp")}
          </HeroUIButton>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="z-[9999]">
        {navigationItems.map((item) => (
          <NavbarMenuItem key={uuidv4()} isActive={isActive(item.href)}>
            <Link href={item.href} onClick={toggleMenu}>
              {t(item.label)}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </HeroUINavbar>
  );
}
