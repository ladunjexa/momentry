import {
  description,
  headerWrapper,
  sectionWrapper,
  subtitle,
  title,
} from "@/components/shared/primitives";
import { Spacer } from "@heroui/react";
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
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
        {companies.map((company) => (
          <React.Fragment key={uuidv4()}>
            <div className="flex md:max-w-60 max-w-24 gap-2">
              {company.icon}
            </div>
          </React.Fragment>
        ))}
      </div>
    </main>
  );
}
