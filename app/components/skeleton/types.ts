import type { Ref } from "vue";

// Context type for provide/inject
export type SkeletonContext = {
  isLoading: Readonly<Ref<boolean>>;
  animationSpeed: Readonly<Ref<"slow" | "default" | "fast">>;
  theme: Readonly<Ref<"default" | "pulse" | "wave">>;
};

// Main skeleton wrapper props
export type SkeletonProps = {
  loading?: boolean;
  animationSpeed?: "slow" | "default" | "fast";
  theme?: "default" | "pulse" | "wave";
  class?: string;
};

// Base skeleton item props
export type SkeletonItemProps = {
  class?: string;
  width?: string | number;
  height?: string | number;
  rounded?: "none" | "sm" | "md" | "lg" | "full";
};

// Text skeleton props
export type SkeletonTextProps = SkeletonItemProps & {
  lines?: number;
  lastLineWidth?: string;
};

// Rectangle skeleton props
export type SkeletonRectangleProps = SkeletonItemProps;

// Circle skeleton props
export type SkeletonCircleProps = {
  class?: string;
  size?: string | number;
};

// Image skeleton props
export type SkeletonImageProps = SkeletonItemProps & {
  aspectRatio?: "square" | "video" | "portrait" | "landscape";
};
