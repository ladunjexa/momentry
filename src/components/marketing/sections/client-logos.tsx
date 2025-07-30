"use client";

import {
  description,
  headerWrapper,
  sectionWrapper,
  subtitle,
  title,
} from "@/components/shared/primitives";
import { Chip, Spacer } from "@heroui/react";
import * as React from "react";
import { Icon as Iconify } from "@iconify/react";
import { v4 as uuidv4 } from "uuid";

export const companies = [
  {
    name: "cloudinary",
    icon: <Iconify icon="logos:cloudinary" width={150} height={100} />,
  },
  {
    name: "appwrite",
    icon: <Iconify icon="logos:appwrite" width={150} height={100} />,
  },
  {
    name: "HOSTINGER",
    icon: (
      <Iconify
        icon="logos:tiktok"
        width={150}
        height={100}
        className="dark:invert"
      />
    ),
  },
  {
    name: "stream",
    icon: <Iconify icon="logos:meta" width={150} height={100} />,
  },
  {
    name: "docker.",
    icon: <Iconify icon="logos:docker" width={150} height={100} />,
  },
];

export default function ClientLogos() {
  return (
    <main className={sectionWrapper({ padding: "none" })}>
      <div className="flex flex-col items-center">
        {/* <Chip
          classNames={{
            // base: "bg-linear-to-br from-danger-500 to-warning-500 border-small border-white/50 shadow-pink-500/30","
            content: "drop-shadow-xs shadow-black text-warning",
          }}
          variant="bordered"
        >
          Last updated: 30 Jul 2030
        </Chip> */}
        <h2 className="text-md font-semibold sm:text-2xl">
          Built with industry-standard tools and best practices
        </h2>
        {/* <div className="flex items-center justify-center space-x-8 max-h-fit"> */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 space-x-12">
          {companies.map((company) => (
            <span
              key={uuidv4()}
              className="max-w-24 md:max-w-60 max-h-12 md:max-h-16"
            >
              {company.icon}
            </span>
          ))}
        </div>
      </div>
    </main>
  );
}

// <main className={sectionWrapper({ padding: "none" })}>
//   <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
//     {companies.map((company) => (
//       <React.Fragment key={uuidv4()}>
//         <div className="flex max-w-24 md:max-w-60 gap-2">
//           {company.icon}
//         </div>
//       </React.Fragment>
//     ))}
//   </div>
// </main>
