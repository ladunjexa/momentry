import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales supported by the app.
  locales: ["en", "he"],

  // The default locale to use when no locale is specified.
  defaultLocale: "en",
});
