import type { VariantProps } from "class-variance-authority";

import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "cursor-pointer inline-flex justify-center font-medium rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-blue-500",
  {
    variants: {
      variant: {
        primary: "bg-black text-white hover:bg-black/80 enabled:active:bg-black/70 dark:bg-white dark:text-black dark:hover:bg-white/80 enabled:dark:active:bg-white/70",
        secondary: "bg-black/10 text-black hover:bg-black/20 enabled:active:bg-black/30 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 enabled:dark:active:bg-white/30",
        outlined: "border bg-transparent border-black/20 text-black hover:bg-black/10 enabled:active:bg-black/20 dark:border-white/20 dark:text-white dark:hover:bg-white/10 enabled:dark:active:bg-white/20",
        ghost: "bg-transparent text-black hover:bg-black/10 enabled:active:bg-black/20 dark:text-white dark:hover:bg-white/10 dark:enabled:active:bg-white/20",
        link: "bg-transparent text-black underline-offset-4 hover:underline p-0 active:text-black/70 dark:text-white dark:active:text-white/70",
        destructive: "bg-rose-600 text-white hover:bg-rose-600/90 enabled:active:bg-rose-600/80",
      },
      size: {
        xs: "px-2 py-1 text-xs",
        sm: "px-2 py-2 text-sm",
        md: "px-3 py-2 text-base",
        lg: "px-3 py-3 text-lg",
        xl: "px-3 py-4 text-xl",
      },
      iconPosition: {
        left: "flex-row items-center gap-2",
        right: "flex-row-reverse items-center gap-2",
        top: "flex-col items-center gap-2",
        bottom: "flex-col-reverse items-center gap-2",
      },
      iconOnly: {
        true: "",
        false: "",
      },
      inverted: {
        true: "",
        false: "",
      },
      loading: {
        true: "cursor-progress opacity-70", // Changed from cursor-progress to cursor-wait
        false: "",
      },
      disabled: {
        true: "cursor-not-allowed opacity-50", // Added separate disabled variant
        false: "",
      },
    },
    compoundVariants: [
      // Fixed inverted variants
      {
        variant: "primary",
        inverted: true,
        class: "bg-white text-black hover:bg-white/80 enabled:active:bg-white/70 dark:bg-black dark:text-white dark:hover:bg-black/80 enabled:dark:active:bg-black/70",
      },
      {
        variant: "secondary",
        inverted: true,
        class: "bg-white/10 text-white hover:bg-white/20 enabled:active:bg-white/30 dark:bg-black/20 dark:text-black hover:dark:bg-black/20 enabled:dark:active:bg-black/30",
      },
      {
        variant: "outlined",
        inverted: true,
        class: "border border-white/20 bg-transparent text-white hover:bg-white/10 enabled:active:bg-white/20 dark:border-black/20 dark:bg-transparent dark:text-black dark:hover:bg-black/10 enabled:dark:active:bg-black/20",
      },
      {
        variant: "ghost",
        inverted: true,
        class: "text-white hover:bg-white/10 enabled:active:bg-white/20 dark:text-black dark:hover:bg-black/10 enabled:dark:active:bg-black/20",
      },
      {
        variant: "link",
        inverted: true,
        class: "bg-transparent text-white underline-offset-4 hover:underline p-0 enabled:active:text-white/70 dark:text-black dark:enabled:active:text-black/70",
      },
      {
        variant: "destructive",
        inverted: true,
        class: "bg-rose-600 text-white hover:bg-rose-600/90 enabled:active:bg-rose-600/80 dark:bg-rose-600 dark:text-white dark:hover:bg-rose-600/90 enabled:dark:active:bg-rose-600/80",
      },
      // Icon only sizes
      {
        iconOnly: true,
        size: "xs",
        class: "size-6 p-0",
      },
      {
        iconOnly: true,
        size: "sm",
        class: "size-8 p-0",
      },
      {
        iconOnly: true,
        size: "md",
        class: "size-10 p-0",
      },
      {
        iconOnly: true,
        size: "lg",
        class: "size-12 p-0",
      },
      {
        iconOnly: true,
        size: "xl",
        class: "size-14 p-0",
      },
      // Remove gap when iconOnly
      {
        iconOnly: true,
        iconPosition: "left",
        class: "gap-0",
      },
      {
        iconOnly: true,
        iconPosition: "right",
        class: "gap-0",
      },
      {
        iconOnly: true,
        iconPosition: "top",
        class: "gap-0",
      },
      {
        iconOnly: true,
        iconPosition: "bottom",
        class: "gap-0",
      },
    ],
    defaultVariants: {
      variant: "primary",
      size: "md",
      iconPosition: "left",
      iconOnly: false,
      inverted: false,
      loading: false,
      disabled: false,
    },
  },
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
