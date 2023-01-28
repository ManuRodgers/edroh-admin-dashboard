import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Merge classes with tailwind-merge with clsx full feature */
export default function twcm(...classes: ClassValue[]) {
  return twMerge(clsx(...classes));
}
