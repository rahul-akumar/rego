import type { VariantProps } from "class-variance-authority";

import { cva } from "class-variance-authority";

export const breadcrumbVariants = cva("");
export type BreadcrumbVariants = VariantProps<typeof breadcrumbVariants>;
