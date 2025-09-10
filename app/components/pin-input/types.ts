import type { VariantProps } from "class-variance-authority";

import type { pinCellVariants } from "./variants";

export type PinCellVariants = VariantProps<typeof pinCellVariants>;

export type PinInputProps = {
  modelValue?: string;
  length?: number;
  size?: PinCellVariants["size"];
  mask?: boolean;
  onlyDigits?: boolean;
  disabled?: boolean;
  name?: string;
  class?: string;
  autoFocus?: boolean;
};

export type PinInputEmits = {
  "update:modelValue": [value: string];
  "complete": [value: string];
  "focus": [index: number];
  "blur": [index: number];
};

// Base attributes for extending
export type PinInputHTMLAttributes = Omit<
  HTMLInputElement,
  keyof PinInputProps | "onInput" | "onChange" | "onFocus" | "onBlur"
>;
