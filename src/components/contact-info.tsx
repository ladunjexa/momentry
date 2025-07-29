"use client";

import React from "react";
import { Card, CardBody, Link } from "@heroui/react";
import { Icon } from "@iconify/react";

export function ContactInfo() {
  return (
    <Card className="w-full max-w-md shadow-lg bg-foreground/5">
      <CardBody className="flex flex-col gap-6 rtl:text-right">
        <div className="flex items-start gap-3">
          <Icon icon="lucide:map-pin" className="text-2xl" />
          <div>
            <h3 className="text-lg font-semibold">Office Location</h3>
            <p className="">
              123 Business Street
              <br />
              Suite 100
              <br />
              San Francisco, CA 94107
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Icon icon="lucide:phone" className="text-2xl" />
          <div>
            <h3 className="text-lg font-semibold">Phone</h3>
            <Link href="tel:+1234567890" color="foreground">
              (123) 456-7890
            </Link>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Icon icon="lucide:mail" className="text-2xl" />
          <div>
            <h3 className="text-lg font-semibold">Email</h3>
            <Link href="mailto:contact@company.com" color="foreground">
              contact@company.com
            </Link>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Icon icon="lucide:clock" className="text-2xl" />
          <div>
            <h3 className="text-lg font-semibold">Business Hours</h3>
            <p className="">
              Monday - Friday: 9:00 AM - 5:00 PM
              <br />
              Saturday - Sunday: Closed
            </p>
          </div>
        </div>

        <div className="flex gap-4 mt-4">
          <Link href="#" isExternal>
            <Icon icon="lucide:facebook" className="text-2xl" />
          </Link>
          <Link href="#" isExternal>
            <Icon icon="lucide:twitter" className="text-2xl" />
          </Link>
          <Link href="#" isExternal>
            <Icon icon="lucide:linkedin" className="text-2xl" />
          </Link>
          <Link href="#" isExternal>
            <Icon icon="lucide:instagram" className="text-2xl" />
          </Link>
        </div>
      </CardBody>
    </Card>
  );
}
