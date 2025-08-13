import type {
  BreadcrumbLinkVariants,
  BreadcrumbVariants,
} from "../styles/variants/breadcrumb";

export type BreadcrumbItem = {
  label: string;
  href?: string;
  current?: boolean;
  isEllipsis?: boolean;
};

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

export type BreadcrumbEmits = {
  "item-click": [item: BreadcrumbItem, event: MouseEvent];
};

// Helper type for processed items
export type ProcessedBreadcrumbItem = BreadcrumbItem & {
  index: number;
  isLast: boolean;
};
