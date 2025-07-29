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

const navigationItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  // { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
  // { href: "/faq", label: "FAQ" },
  { href: "/features", label: "Features" },
  // { href: "/legal/privacy", label: "Privacy Policy" },
  // { href: "/legal/terms", label: "Terms of Service" },
  { href: "/pricing", label: "Pricing" },
];

export default function Navbar() {
  const pathname = usePathname();

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
      className="!z-[999]"
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
            <p className="font-bold text-2xl">Momentry</p>
          </Link>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-4 rtl:ml-0 rtl:mr-4">
          {navigationItems.map((item) => (
            <NavbarItem as="li" key={uuidv4()} isActive={isActive(item.href)}>
              <Link href={item.href}>{item.label}</Link>
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
        <Spacer x={2} />
        <NavbarItem className="hidden md:flex">
          <HeroUIButton as={Link} href="/pricing" size="md" variant="bordered">
            See our Plans
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
            Get Started
          </HeroUIButton>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {navigationItems.map((item) => (
          <NavbarMenuItem key={uuidv4()} isActive={isActive(item.href)}>
            <Link href={item.href} onClick={toggleMenu}>
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
      {/* <NavbarBrand href="/">Momentry</NavbarBrand>
      <NavbarContent>
        <NavbarItem href="/">Home</NavbarItem>
        <NavbarItem href="/about">About</NavbarItem>
        <NavbarItem href="/contact">Contact</NavbarItem>
      </NavbarContent>
      <NavbarMenuToggle />
      <NavbarMenu>
        <NavbarMenuItem href="/">Home</NavbarMenuItem>
        <NavbarMenuItem href="/about">About</NavbarMenuItem>
        <NavbarMenuItem href="/contact">Contact</NavbarMenuItem>
      </NavbarMenu> */}
    </HeroUINavbar>
  );
}
