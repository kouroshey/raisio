import type { ClassValue } from "clsx";
import type z from "zod";

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ZodOptional } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isFieldRequired(schema: z.ZodObject, fieldName: string) {
  const field = schema.shape[fieldName];
  return !(field instanceof ZodOptional);
}
