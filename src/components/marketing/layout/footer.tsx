import { Logo } from "@/components/icons/logo";
import { Link } from "@/i18n/navigation";
import { Divider, Spacer } from "@heroui/react";
import { Icon as Iconify } from "@iconify/react";
import { v4 as uuidv4 } from "uuid";

const footerCategories = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "/help" },
      { label: "Contact Us", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "API Reference", href: "/api" },
      { label: "Community Forum", href: "/forum" },
    ],
  },
];

const footerSignature = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Sales and Refunds", href: "/refunds" },
  { label: "Legal", href: "/legal" },
  { label: "Site Map", href: "/sitemap" },
  { label: "Accessibility", href: "/accessibility" },
];

export default function Footer() {
  return (
    <div className="bg-foreground/3">
      <footer className="container mx-auto max-w-7xl px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <div className="flex">
            <Logo />
            <h1 className="font-bold mt-2">Momentry</h1>
          </div>
          <div className="flex flex-col">
            <h3 className="font-extrabold">Follow us</h3>
            <Spacer y={3} />
            <ul className="flex items-center space-x-3">
              <Iconify icon="logos:facebook" width={26} />
              <Iconify icon="logos:twitter" width={26} />
              <Iconify icon="skill-icons:instagram" width={26} />
              <Iconify icon="skill-icons:linkedin" width={26} />
              <Iconify icon="mdi:github" width={26} />
            </ul>
            <Spacer y={8} />
            <div>
              <h3 className="font-extrabold">Call us</h3>
              <p>+1 800 854-36-80</p>
            </div>
          </div>
          {footerCategories.map((category) => (
            <div key={category.title} className="flex flex-col">
              <h3 className="font-extrabold">{category.title}</h3>
              <Spacer y={4} />
              <ul>
                {category.links.map((link) => (
                  <li key={uuidv4()}>
                    <Link href={link.href} className="text-default-500">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Spacer y={4} />
        <Divider className="my-4" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-default-500">
          <ul className="flex flex-wrap justify-center md:justify-start gap-4">
            {footerSignature.map((item) => (
              <li key={uuidv4()}>
                <Link
                  href={item.href}
                  className="text-default-500 hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-default-700 dark:text-default-300 text-center md:text-right">
            &copy; {new Date().getFullYear()} Momentry. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

{
  /*<footer
  className="container mx-auto max-w-7xl px-6 py-4 text-center"
  role="contentinfo"
  aria-label="site footer"
>
  <p className="text-sm text-gray-500">
    © {new Date().getFullYear()} Your Company. All rights reserved.
  </p>
</footer>*/
}
