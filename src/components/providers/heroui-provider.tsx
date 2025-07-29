"use client";

import { HeroUIProvider as NextUIProvider } from "@heroui/react";
import { useRouter } from "next/navigation";
import React from "react";

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>["push"]>[1]
    >;
  }
}

export default function HeroUIProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  return <NextUIProvider navigate={router.push}>{children}</NextUIProvider>;
}
