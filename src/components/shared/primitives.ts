import { tv } from "tailwind-variants";

// ! SUPER BEAUTIFUL HEADER AND PAGRAGRPAH
// <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-4 tracking-tight">
//               Plans and Pricing
//             </h1>
//             <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6">
//               Receive unlimited credits when you pay yearly, and save on your
//               plan
//             </p>

export const title = tv({
  base: "tracking-tight inline font-semibold",
  variants: {
    color: {
      violet: "from-[#FF1CF7] to-[#b249f8]",
      yellow: "from-[#FF705B] to-[#FFB457]",
      blue: "from-[#5EA2EF] to-[#0072F5]",
      cyan: "from-[#00b7fa] to-[#01cfea]",
      green: "from-[#6FEE8D] to-[#17c964]",
      pink: "from-[#FF72E1] to-[#F54C7A]",
      foreground: "dark:from-[#FFFFFF] dark:to-[#4B4B4B]",
    },
    size: {
      sm: "text-3xl lg:text-4xl",
      md: "text-[clamp(1rem,10vw,2rem)] sm:text-[clamp(1rem,10vw,3rem)] lg:text-5xl",
      lg: "text-4xl lg:text-6xl",
      xl: "text-5xl md:text-6xl lg:text-7xl",
    },
    fullWidth: {
      true: "w-full block",
    },
  },
  defaultVariants: {
    size: "lg",
  },
  compoundVariants: [
    {
      color: [
        "violet",
        "yellow",
        "blue",
        "cyan",
        "green",
        "pink",
        "foreground",
      ],
      class: "bg-clip-text text-transparent bg-linear-to-b",
    },
  ],
});

export const subtitle = tv({
  base: "w-full md:w-1/2 text-medium lg:text-large font-normal text-default-500 block max-w-full",
  variants: {
    fullWidth: {
      true: "!w-full",
    },
  },
  defaultVariants: {
    fullWidth: true,
  },
});

export const description = tv({
  base: "w-full md:w-1/2 text-small lg:text-medium font-normal text-default-500 block max-w-full",
  variants: {
    fullWidth: {
      true: "!w-full",
    },
  },
  defaultVariants: {
    fullWidth: true,
  },
});

export const sectionWrapper = tv({
  base: "relative flex flex-col w-full",
  variants: {
    padding: {
      none: "p-0",
      small: "p-4",
      medium: "p-8",
      large: "p-12",
    },
    // background: {
    //   light: "bg-white",
    //   dark: "bg-gray-900",
    // },
    isBlurred: {
      true: [
        "bg-transparent",
        "dark:bg-transparent",
        "before:bg-background/10",
        "before:content-['']",
        "before:block",
        "before:z-[-1]",
        "before:absolute",
        "before:inset-0",
        "before:backdrop-blur-md",
        "before:backdrop-saturate-200",
      ],
    },
  },
  defaultVariants: {
    padding: "medium",
    // background: "light",
  },
});

export const headerWrapper = tv({
  base: "flex flex-col items-center justify-center w-full",
  variants: {
    alignment: {
      center: "text-center",
      left: "text-left",
      right: "text-right",
    },
  },
  defaultVariants: {
    alignment: "center",
  },
});
