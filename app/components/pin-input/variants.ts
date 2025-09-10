import { cva } from "class-variance-authority";

export const pinCellVariants = cva(
  "rounded-md text-primary border border-input bg-background text-center outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      size: {
        sm: "h-9 w-9 text-sm",
        default: "h-10 w-10 text-base",
        lg: "h-11 w-11 text-base",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);
