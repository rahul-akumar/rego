import type { VariantProps } from "class-variance-authority";

// Import the breadcrumb variants to create the type
import type {
  breadcrumbLinkVariants,
  breadcrumbVariants,
} from "./variants";

// Breadcrumb variants types extracted from CVA
type BreadcrumbVariants = VariantProps<typeof breadcrumbVariants>;
type BreadcrumbLinkVariants = VariantProps<typeof breadcrumbLinkVariants>;

// Breadcrumb item interface
export type BreadcrumbItem = {
  label: string;
  href?: string;
  current?: boolean;
  isEllipsis?: boolean;
};

// Main breadcrumb props interface
export type BreadcrumbProps = {
  class?: string;
  items?: BreadcrumbItem[];
  separator?: "chevron" | "slash" | "custom";
  showEllipsis?: boolean;
  ellipsisPosition?: number;
  maxItems?: number;
  customSeparator?: string;
  size?: BreadcrumbVariants["size"];
  variant?: BreadcrumbLinkVariants["variant"];
};

// Breadcrumb component emits
export type BreadcrumbEmits = {
  "item-click": [item: BreadcrumbItem, event: MouseEvent];
};

// Helper type for processed items
export type ProcessedBreadcrumbItem = BreadcrumbItem & {
  index: number;
  isLast: boolean;
};
