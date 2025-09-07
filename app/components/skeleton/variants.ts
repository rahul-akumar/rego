import { cva } from "class-variance-authority";

export const skeletonBaseVariants = cva(
  "bg-gradient-to-r from-primary/15 via-primary/20 to-primary/15",
  {
    variants: {
      theme: {
        default: "animate-pulse",
        pulse: "animate-pulse",
        wave: "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent",
      },
      speed: {
        slow: "animate-[pulse_2s_ease-in-out_infinite]",
        default: "",
        fast: "animate-[pulse_1s_ease-in-out_infinite]",
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      theme: "default",
      speed: "default",
      rounded: "md",
    },
  },
);

export const skeletonTextVariants = cva(
  "h-4 w-full",
  {
    variants: {
      size: {
        xs: "h-3",
        sm: "h-3.5",
        default: "h-4",
        lg: "h-5",
        xl: "h-6",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

export const skeletonCircleVariants = cva(
  "aspect-square",
  {
    variants: {
      size: {
        "xs": "w-6 h-6",
        "sm": "w-8 h-8",
        "default": "w-10 h-10",
        "lg": "w-12 h-12",
        "xl": "w-16 h-16",
        "2xl": "w-20 h-20",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

export const skeletonImageVariants = cva(
  "w-full",
  {
    variants: {
      aspectRatio: {
        square: "aspect-square",
        video: "aspect-video",
        portrait: "aspect-[3/4]",
        landscape: "aspect-[4/3]",
      },
    },
    defaultVariants: {
      aspectRatio: "square",
    },
  },
);
