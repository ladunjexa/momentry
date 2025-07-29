"use client";

import { ContactForm } from "@/components/contact-form";
import { ContactInfo } from "@/components/contact-info";
import SectionHeader from "@/components/marketing/layout/section-header";
import { Spacer } from "@heroui/react";

export default function Page() {
  const handleSubmit = async (formData: FormData) => {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Form submitted:", Object.fromEntries(formData));
        resolve(true);
      }, 1000);
    });
  };

  return (
    <>
      <Spacer y={4} />
      <SectionHeader page="contact" />
      <Spacer y={8} />
      <div className="flex flex-col md:flex-row">
        <ContactForm onSubmit={handleSubmit} />
        <Spacer y={8} className="lg:hidden" />
        <Spacer x={8} className="hidden md:block" />
        <ContactInfo />
      </div>
    </>
  );
}
