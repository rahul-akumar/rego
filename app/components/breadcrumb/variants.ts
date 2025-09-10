import { cva } from "class-variance-authority";

// Main breadcrumb wrapper variants
export const breadcrumbVariants = cva(
  "",
  {
    variants: {
      size: {
        default: "",
        sm: "text-xs",
        lg: "text-base",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

// Breadcrumb list variants
export const breadcrumbListVariants = cva(
  "flex flex-wrap items-center gap-1.5 text-sm break-words text-muted-foreground sm:gap-2.5",
  {
    variants: {
      size: {
        default: "text-sm gap-1.5 sm:gap-2.5",
        sm: "text-xs gap-1 sm:gap-1.5",
        lg: "text-base gap-2 sm:gap-3",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

// Breadcrumb item variants
export const breadcrumbItemVariants = cva(
  "inline-flex items-center gap-1.5",
  {
    variants: {
      size: {
        default: "gap-1.5",
        sm: "gap-1",
        lg: "gap-2",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

// Breadcrumb link variants
export const breadcrumbLinkVariants = cva(
  "hover:text-foreground transition-colors",
  {
    variants: {
      variant: {
        default: "hover:text-foreground",
        muted: "text-muted-foreground/70 hover:text-muted-foreground",
        accent: "hover:text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

// Breadcrumb current page variants
export const breadcrumbPageVariants = cva(
  "font-normal text-foreground",
  {
    variants: {
      variant: {
        default: "text-foreground",
        muted: "text-muted-foreground",
        accent: "text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

// Breadcrumb separator variants
export const breadcrumbSeparatorVariants = cva(
  "[&>svg]:size-3.5",
  {
    variants: {
      size: {
        default: "[&>svg]:size-3.5",
        sm: "[&>svg]:size-3",
        lg: "[&>svg]:size-4",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

// Breadcrumb ellipsis variants
export const breadcrumbEllipsisVariants = cva(
  "flex items-center justify-center",
  {
    variants: {
      size: {
        default: "h-9 w-9",
        sm: "h-7 w-7",
        lg: "h-10 w-10",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);
