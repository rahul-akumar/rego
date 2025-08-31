<script setup lang="ts">
import type { VariantProps } from "class-variance-authority";

import { cva } from "class-variance-authority";
import { computed } from "vue";

// Props
const props = withDefaults(defineProps<ButtonProps>(), {
  variant: "default",
  size: "default",
  loading: false,
  disabled: false,
  inverted: false,
  asChild: false,
});

// Button variants definition
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80",
        destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-transparent hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-foreground-secondary hover:bg-secondary/80",
        ghost: "hover:bg-accent text-foreground-secondary dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-8",
      },
      iconPosition: {
        left: "flex-row",
        right: "flex-row-reverse",
        top: "flex-col",
        bottom: "flex-col-reverse",
      },
      iconOnly: {
        true: "gap-0",
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
      // Icon only size adjustments
      {
        iconOnly: true,
        size: "default",
        class: "size-9 p-0",
      },
      {
        iconOnly: true,
        size: "sm",
        class: "size-8 p-0",
      },
      {
        iconOnly: true,
        size: "lg",
        class: "size-10 p-0",
      },
      // Inverted variants
      {
        variant: "default",
        inverted: true,
        class: "bg-white text-primary hover:bg-white/90 active:bg-white/80 dark:bg-black dark:text-primary dark:hover:bg-black/90 dark:active:bg-black/80",
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

// Types
type ButtonVariants = VariantProps<typeof buttonVariants>;

type ButtonProps = {
  variant?: ButtonVariants["variant"];
  size?: ButtonVariants["size"];
  iconPosition?: ButtonVariants["iconPosition"];
  iconOnly?: ButtonVariants["iconOnly"];
  loading?: ButtonVariants["loading"];
  disabled?: ButtonVariants["disabled"];
  inverted?: ButtonVariants["inverted"];
  asChild?: boolean;
  class?: string;
};

// Computed classes
const buttonClasses = computed(() => {
  return cn(
    buttonVariants({
      variant: props.variant,
      size: props.size,
      iconPosition: props.iconPosition,
      iconOnly: props.iconOnly,
      loading: props.loading,
      disabled: props.disabled,
      inverted: props.inverted,
    }),
    props.class,
  );
});

function handleClick(event: MouseEvent) {
  if (props.loading || props.disabled) {
    event.preventDefault();
    event.stopPropagation();
  }
}
</script>

<template>
  <!-- Slot pattern for asChild -->
  <slot
    v-if="asChild"
    :class="buttonClasses"
    data-slot="button"
    @click="handleClick"
  />

  <!-- Regular button -->
  <button
    v-else
    :class="buttonClasses"
    :disabled="Boolean(disabled)"
    :aria-disabled="disabled ? 'true' : undefined"
    data-slot="button"
    type="button"
    v-bind="$attrs"
    @click="handleClick"
  >
    <!-- Loading spinner -->
    <DsLoader
      v-if="loading"
      size="xs"
      class="!text-current"
    />

    <!-- Icon only content -->
    <template v-if="iconOnly">
      <slot />
    </template>

    <!-- Button with icon and text -->
    <template v-else-if="$slots.icon">
      <!-- Icon slot -->
      <slot name="icon" />
      <!-- Text content -->
      <slot />
    </template>

    <!-- Text only button -->
    <template v-else>
      <slot />
    </template>
  </button>
</template>
