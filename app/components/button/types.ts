import type { VariantProps } from "class-variance-authority";

// Import the button variants to create the type (this will be defined in variants.ts)
import type { buttonVariants } from "./variants";

// Button variants type extracted from CVA
type ButtonVariants = VariantProps<typeof buttonVariants>;

// Main button props interface
export type ButtonProps = {
  variant?: ButtonVariants["variant"];
  size?: ButtonVariants["size"];
  iconPosition?: ButtonVariants["iconPosition"];
  loading?: ButtonVariants["loading"];
  disabled?: ButtonVariants["disabled"];
  inverted?: ButtonVariants["inverted"];
  asChild?: boolean;
  class?: string;
};
