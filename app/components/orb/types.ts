// Orb component prop types

export type OrbState = "idle" | "listening" | "thinking" | "speaking" | "processing";

export type OrbProps = {
  /**
   * Visual size of the orb
   */
  size?: "xs" | "sm" | "default" | "lg" | "xl";
  /**
   * Behavioral/animation state of the orb
   */
  state?: OrbState;
  /**
   * Activity intensity in [0..1]; higher values speed up animations slightly
   */
  energy?: number;
  /**
   * Show subtle outer ring (good to indicate AI proximity to an input)
   */
  ring?: boolean;
  /**
   * Enable colorful glow behind the orb
   */
  glow?: boolean;
  /**
   * Gradient style for the orb core/glow
   */
  gradient?: "primary" | "multi";
  /**
   * Adds a hover interaction veil
   */
  interactive?: boolean;
  /**
   * Additional Tailwind classes
   */
  class?: string;
  /**
   * Accessible label for screen readers
   */
  label?: string;
};
