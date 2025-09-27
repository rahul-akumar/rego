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
  /**
   * When true, the badge renders in a collapsed state showing only its icon by default,
   * then expands on hover/focus to reveal the text label.
   */
  collapsible?: boolean;
  /**
   * Optional label text to render when using `collapsible`. If omitted, you can
   * provide a named slot `#label` for the expandable text.
   */
  label?: string;
};
