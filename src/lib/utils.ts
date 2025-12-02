import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Esta función combina clsx (para lógica condicional) y tailwind-merge (para evitar conflictos de clases)
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}