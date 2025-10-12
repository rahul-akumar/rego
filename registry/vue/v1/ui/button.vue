<script setup lang="ts">
import type { VariantProps } from "class-variance-authority";
import type { ClassValue } from "clsx";

import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { computed, useAttrs } from "vue";

const props = withDefaults(defineProps<Props>(), {
  variant: "default",
  size: "default",
  loading: false,
  inverted: false,
  asChild: false,
});

// Local cn helper so the template is self-contained
const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

// Variants
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
      iconOnly: {
        true: "aspect-square p-0 gap-0 justify-center",
        false: "",
      },
      loading: { true: "cursor-progress opacity-70", false: "" },
      inverted: { true: "", false: "" },
    },
    defaultVariants: { variant: "default", size: "default", iconOnly: false, loading: false, inverted: false },
  },
);

type ButtonVariants = VariantProps<typeof buttonVariants>;

type Props = {
  variant?: ButtonVariants["variant"];
  size?: ButtonVariants["size"];
  loading?: boolean;
  inverted?: boolean;
  asChild?: boolean;
  class?: string;
  ariaLabel?: string; // recommended when icon-only
};

const attrs = useAttrs();
const isIconOnly = computed(() => Object.prototype.hasOwnProperty.call(attrs, "icon-only"));

const classes = computed(() => cn(
  buttonVariants({
    variant: props.variant,
    size: props.size,
    iconOnly: isIconOnly.value,
    loading: props.loading,
    inverted: props.inverted,
  }),
  props.class,
));

function handleClick(e: MouseEvent) {
  if (props.loading) {
    e.preventDefault();
    e.stopPropagation();
  }
}
</script>

<template>
  <slot v-if="props.asChild" :class="classes" data-slot="button" @click="handleClick" />
  <button
    v-else
    :class="classes"
    :aria-label="isIconOnly ? props.ariaLabel : undefined"
    :aria-busy="props.loading ? 'true' : undefined"
    :disabled="props.loading ? true : undefined"
    data-slot="button"
    type="button"
    v-bind="$attrs"
    @click="handleClick"
  >
    <slot />
  </button>
</template>
