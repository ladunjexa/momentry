"use client";

import { Fancybox as NativeFancybox } from "@fancyapps/ui";
// import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { OptionsType } from "@fancyapps/ui/types/Fancybox/options";
import React, { useRef, useEffect, PropsWithChildren } from "react";
import "@/styles/fancybox-ui.css";

export const FancyboxOptions: Partial<OptionsType> = {
  Toolbar: {
    display: {
      left: ["infobar"],
      middle: [
        "zoomIn",
        "zoomOut",
        "toggle1to1",
        "rotateCCW",
        "rotateCW",
        "flipX",
        "flipY",
      ],
      right: ["slideshow", "download", "fullscreen", "thumbs", "close"],
    },
  },
  Carousel: { infinite: false },
} as const;

interface Props {
  options?: Partial<OptionsType>;
  delegate?: string;
}

const Fancybox: React.FC<PropsWithChildren<Props>> = ({
  options = {},
  delegate = "[data-fancybox]",
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      NativeFancybox.bind(container, delegate, options);

      return () => {
        NativeFancybox.unbind(container);
        NativeFancybox.close();
      };
    }
  }, [delegate, options]);

  return <div ref={containerRef}>{children}</div>;
};

export default Fancybox;
