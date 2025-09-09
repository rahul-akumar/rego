import type { VariantProps } from "class-variance-authority";

// Import the badge variants to create the type
import type { badgeVariants } from "./variants";

// Badge variants type extracted from CVA
type BadgeVariants = VariantProps<typeof badgeVariants>;

// Main badge props interface
export type BadgeProps = {
  variant?: BadgeVariants["variant"];
  asChild?: boolean;
  class?: string;
};
