import type { VariantProps } from "class-variance-authority";

import type { buttonVariants } from "../styles/variants/button";

export type ButtonVariants = VariantProps<typeof buttonVariants>;

export type ButtonProps = {
  label?: string;
  variant?: ButtonVariants["variant"];
  size?: ButtonVariants["size"];
  disabled?: boolean;
  loading?: boolean;
  iconOnly?: boolean;
  inverted?: boolean;
  iconPosition?: ButtonVariants["iconPosition"];
  class?: string;
  asChild?: boolean;
};

export type ButtonEmits = {
  click: [event: MouseEvent];
  focus: [event: FocusEvent];
  blur: [event: FocusEvent];
};

// Base button element attributes for extending
export type ButtonHTMLAttributes = Omit<
  HTMLButtonElement,
  keyof ButtonProps | "onClick" | "onFocus" | "onBlur"
>;
