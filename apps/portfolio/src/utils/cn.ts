import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...classLists: ClassValue[]) {
  return twMerge(clsx(classLists));
}
