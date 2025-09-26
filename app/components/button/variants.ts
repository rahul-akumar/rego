import { cva } from "class-variance-authority";

// Button variants definition
export const buttonVariants = cva(
  "flex items-center gap-2 rounded-md font-medium text-base transition-all [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring focus-visible:ring-[2px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/95 active:bg-primary/90",
        secondary: "bg-primary/20 text-primary hover:bg-primary/30 active:bg-primary/35",
        ghost: "hover:bg-primary/10 active:bg-primary/20 text-primary",
        outline: "border bg-transparent text-primary border-primary/50 hover:border-primary/75 active:border-primary/100",
        destructive: "bg-rose-600 text-white hover:bg-rose-600/95 active:bg-rose-600/90",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "px-4 py-2 has-[>svg]:px-3",
        xs: "rounded-sm gap-1.5 px-2 py-1.5 has-[>svg]:px-2 text-xs",
        sm: "gap-1.5 px-3 py-2 has-[>svg]:px-2.5 text-sm",
        lg: "px-5 py-2.5 has-[>svg]:px-4 text-lg",
        xl: "rounded-lg px-6 py-3 has-[>svg]:px-4 text-xl",
      },
      iconPosition: {
        left: "flex-row",
        right: "flex-row-reverse",
        top: "flex-col",
        bottom: "flex-col-reverse",
      },
      iconOnly: {
        true: "aspect-square p-0 gap-0 justify-center",
        false: "",
      },
      loading: {
        true: "cursor-progress opacity-70",
        false: "cursor-pointer",
      },
      disabled: {
        true: "cursor-not-allowed pointer-events-none opacity-50",
        false: "",
      },
      inverted: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      // Icon only size adjustments (square buttons)
      { iconOnly: true, size: "xs", class: "size-7" },
      { iconOnly: true, size: "sm", class: "size-8" },
      { iconOnly: true, size: "default", class: "size-8" },
      { iconOnly: true, size: "lg", class: "size-10" },
      { iconOnly: true, size: "xl", class: "size-12" },
      // Inverted variants
      {
        variant: "default",
        inverted: true,
        class: "bg-white text-primary dark:bg-black dark:text-white",
      },
      {
        variant: "secondary",
        inverted: true,
        class: "bg-secondary-foreground text-foreground-secondary hover:bg-secondary-foreground/90 active:bg-secondary-foreground/80 dark:bg-secondary dark:text-secondary-foreground dark:hover:bg-secondary/90 dark:active:bg-secondary/80",
      },
      {
        variant: "outline",
        inverted: true,
        class: "border-accent-foreground bg-accent text-accent-foreground hover:bg-accent-foreground hover:text-accent active:bg-accent-foreground/80",
      },
      {
        variant: "ghost",
        inverted: true,
        class: "text-foreground-secondary hover:bg-accent-foreground hover:text-accent active:bg-accent-foreground/50",
      },
      {
        variant: "link",
        inverted: true,
        class: "text-primary-foreground hover:text-primary-foreground/80 active:text-primary-foreground/60",
      },
      {
        variant: "destructive",
        inverted: true,
        class: "bg-white text-destructive hover:bg-white/90 active:bg-white/80",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
      iconPosition: "left",
      iconOnly: false,
      loading: false,
      disabled: false,
      inverted: false,
    },
  },
);
