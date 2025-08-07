<script setup lang="ts">
type Props = {
  label?: string | number;
  variant?: "primary" | "secondary" | "outlined" | "destructive";
  size?: "xs" | "sm" | "md" | "lg";
  prependIcon?: boolean;
  appendIcon?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  variant: "primary",
  size: "sm",
  prependIcon: false,
  appendIcon: false,
});

const styles = {
  base: "inline-flex items-center justify-center font-medium rounded-xs whitespace-nowrap",

  // Variants
  primary:
    "bg-black text-white dark:bg-white dark:text-black",
  secondary:
    "bg-black/10 text-black dark:bg-white/10 dark:text-white",
  outlined:
    "border bg-transparent border-black/20 text-black dark:border-white/20 dark:text-white",
  destructive:
    "bg-rose-600 text-white",

  // Sizes
  xs: "px-1 py-0.5 text-xs gap-1",
  sm: "px-2 py-1 text-xs gap-1",
  md: "px-2.5 py-1 text-sm gap-1.5",
  lg: "px-3 py-1.5 text-sm gap-2",

  // Icon sizes
  iconXs: "size-3",
  iconSm: "size-3",
  iconMd: "size-4",
  iconLg: "size-4",
};

function getBadgeClasses() {
  const baseClasses = styles.base;
  const variantClasses = styles[props.variant];
  const sizeClasses = styles[props.size];

  return `${baseClasses} ${variantClasses} ${sizeClasses}`.trim();
}

function getIconClasses() {
  const iconSizeKey = `icon${props.size.charAt(0).toUpperCase() + props.size.slice(1)}`;
  return styles[iconSizeKey as keyof typeof styles] || styles.iconSm;
}
</script>

<template>
  <span :class="getBadgeClasses()">
    <!-- Prepend icon slot -->
    <slot v-if="prependIcon" name="prepend-icon">
      <svg :class="getIconClasses()" fill="currentColor" viewBox="0 0 20 20">
        <circle cx="10" cy="10" r="3" />
      </svg>
    </slot>

    <!-- Content -->
    <slot>
      {{ label || "Badge" }}
    </slot>

    <!-- Append icon slot -->
    <slot v-if="appendIcon" name="append-icon">
      <svg :class="getIconClasses()" fill="currentColor" viewBox="0 0 20 20">
        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
      </svg>
    </slot>
  </span>
</template>
