// Throbber (loading spinner) component types

export type ThrobberProps = {
  /**
   * Size of the throbber
   */
  size?: "xs" | "sm" | "default" | "lg" | "xl";
  /**
   * Visual variant of the indicator stroke
   */
  variant?: "solid" | "dashed" | "dotted";
  /**
   * Animation speed
   */
  speed?: "default" | "fast" | "slow";
  /**
   * Additional class names
   */
  class?: string;
  /**
   * Accessible label for screen readers
   */
  label?: string;
};
