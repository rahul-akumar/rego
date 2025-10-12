<script setup lang="ts">
import type { VariantProps } from "class-variance-authority";
import type { ClassValue } from "clsx";

import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { computed } from "vue";

const props = withDefaults(defineProps<Props>(), {
  variant: "default",
  asChild: false,
});

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        outline: "text-foreground border-muted-foreground/40",
        destructive: "bg-destructive text-destructive-foreground",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

type BadgeVariants = VariantProps<typeof badgeVariants>;

type Props = {
  variant?: BadgeVariants["variant"];
  asChild?: boolean;
  class?: string;
};

const classes = computed(() => cn(badgeVariants({ variant: props.variant }), props.class));
</script>

<template>
  <slot v-if="props.asChild" :class="classes" data-slot="badge" />
  <span v-else :class="classes" data-slot="badge"><slot /></span>
</template>
