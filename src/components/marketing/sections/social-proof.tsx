import {
  description,
  headerWrapper,
  sectionWrapper,
  subtitle,
  title,
} from "@/components/shared/primitives";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import * as React from "react";

export default function SocialProof() {
  return (
    <main className={sectionWrapper()}>
      <div className={headerWrapper({ className: "space-y-4" })}>
        <div className="flex items-center space-x-2">
          <h1 className={title()}>Social</h1>
          <PointerHighlight>
            <h1 className={title()}>Proof</h1>
          </PointerHighlight>
        </div>
        <div>
          <h2 className={subtitle()}>
            Welcome to our marketing page! Explore our features and offerings.
          </h2>
          <p className={description()}>
            This is a sample hero section where you can introduce your product
            or service.
          </p>
        </div>
      </div>
      <AnimatedTestimonials
        testimonials={[
          {
            quote:
              "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
            name: "Sarah Chen",
            designation: "Product Manager at TechFlow",
            src: "/assets/couple6.jpg",
          },
          {
            quote:
              "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
            name: "Michael Rodriguez",
            designation: "CTO at InnovateSphere",
            src: "/assets/couple2.jpg",
          },
          {
            quote:
              "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
            name: "Emily Watson",
            designation: "Operations Director at CloudScale",
            src: "/assets/couple3.jpg",
          },
          {
            quote:
              "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
            name: "James Kim",
            designation: "Engineering Lead at DataPro",
            src: "/assets/couple4.jpg",
          },
          {
            quote:
              "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
            name: "Lisa Thompson",
            designation: "VP of Technology at FutureNet",
            src: "/assets/couple5.jpg",
          },
        ]}
      />
    </main>
  );
}
