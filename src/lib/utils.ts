import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function destructHeadline(headline: string) {
  const words = headline.split(" ");
  const lastWord = words.pop();
  const headlineWithoutLastWord = words.join(" ");
  return { headlineWithoutLastWord, lastWord };
}
