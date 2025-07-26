<script setup lang="ts">
interface Props {
  label?: string;
  variant?:
    | "primary"
    | "secondary"
    | "outlined"
    | "ghost"
    | "link"
    | "destructive";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  disabled?: boolean;
  loading?: boolean;
  iconOnly?: boolean;
  inverted?: boolean;
  iconPosition?: "left" | "right" | "top" | "bottom";
}

const props = withDefaults(defineProps<Props>(), {
  variant: "primary",
  size: "md",
  disabled: false,
  loading: false,
  iconOnly: false,
  inverted: false,
  iconPosition: "left",
});

const styles = {
  base: "inline-flex justify-center font-medium rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-blue-500 disabled:cursor-no-drop disabled:opacity-50",

  // Icon Positions
  iconLeft: "flex-row items-center",
  iconRight: "flex-row-reverse items-center",
  iconTop: "flex-col items-center",
  iconBottom: "flex-col-reverse items-center",

  // Icon Spacing
  iconSpacingLeft: "gap-2",
  iconSpacingRight: "gap-2",
  iconSpacingTop: "gap-2",
  iconSpacingBottom: "gap-2",

  // Variants
  primary:
    "bg-black text-white hover:bg-opacity-80 enabled:active:bg-opacity-70 dark:bg-white dark:text-black dark:hover:bg-opacity-80 enabled:dark:active:bg-opacity-70",
  secondary:
    "bg-black text-black bg-opacity-10 hover:bg-opacity-20 enabled:active:bg-opacity-30 dark:bg-white dark:bg-opacity-10 dark:text-white dark:hover:bg-opacity-20 enabled:dark:active:bg-opacity-30",
  outlined:
    "border border-black border-opacity-20 bg-transparent text-black hover:bg-black hover:bg-opacity-10 enabled:active:bg-opacity-20 dark:border-white dark:bg-transparent dark:border-opacity-20 dark:text-white dark:hover:bg-white dark:hover:bg-opacity-10 enabled:dark:active:bg-opacity-20",
  ghost:
    "bg-transparent text-black hover:bg-black hover:bg-opacity-10 enabled:active:bg-opacity-20 dark:text-white dark:hover:bg-white dark:hover:bg-opacity-10 dark:active:bg-opacity-20",
  link: "bg-transparent text-black underline-offset-4 hover:underline p-0 active:text-black/70 dark:text-white dark:active:text-white/70",
  destructive:
    "bg-rose-600 text-white hover:bg-opacity-90 enabled:active:bg-opacity-80 dark:bg-rose-600 dark:text-white dark:hover:bg-opacity-90 enabled:dark:active:bg-opacity-80",

  // Inverted Variants
  invertedPrimary:
    "bg-white text-black hover:bg-opacity-80 enabled:active:bg-opacity-70 dark:bg-black dark:text-white dark:hover:bg-opacity-80 enabled:dark:active:bg-opacity-70",
  invertedSecondary:
    "bg-white text-white bg-opacity-10 hover:bg-opacity-20 active:bg-opacity-30 dark:bg-black dark:bg-opacity-10 dark:text-black dark:hover:bg-opacity-20 dark:active:bg-opacity-30",
  invertedOutlined:
    "border border-white border-opacity-20 bg-transparent text-white hover:bg-white hover:bg-opacity-10 active:bg-opacity-20 dark:border-black dark:bg-transparent dark:border-opacity-20 dark:text-black dark:hover:bg-black dark:hover:bg-opacity-10 dark:active:bg-opacity-20",
  invertedGhost:
    "bg-transparent text-white hover:bg-white/10 active:bg-opacity-20 dark:text-black dark:hover:bg-black dark:hover:bg-opacity-10 dark:active:bg-opacity-20",
  invertedLink:
    "bg-transparent text-white underline-offset-4 hover:underline p-0 dark:text-black",
  invertedDestructive:
    "bg-rose-600 text-white hover:bg-opacity-90 active:bg-opacity-80 dark:bg-rose-600 dark:text-white dark:hover:bg-opacity-90 dark:active:bg-opacity-80",

  // Sizes
  xs: "px-2 py-1 text-xs",
  sm: "px-2 py-2 text-sm",
  md: "px-3 py-2 text-base",
  lg: "px-3 py-3 text-lg",
  xl: "px-3 py-4 text-xl",

  // Icon only sizes
  iconXs: "size-6",
  iconSm: "size-8",
  iconMd: "size-10",
  iconLg: "size-12",
  iconXl: "size-14",

  // Loading
  loading: "cursor-progress opacity-70",
};

const getButtonClasses = () => {
  const baseClasses = styles.base;

  // Get variant classes
  const variantKey = props.inverted
    ? `inverted${
        props.variant.charAt(0).toUpperCase() + props.variant.slice(1)
      }`
    : props.variant;
  const variantClasses =
    styles[variantKey as keyof typeof styles] || styles[props.variant];

  // Get size classes
  const sizeClasses = props.iconOnly
    ? styles[
        `icon${
          props.size.charAt(0).toUpperCase() + props.size.slice(1)
        }` as keyof typeof styles
      ]
    : styles[props.size];

  // Get icon position classes
  const iconPositionKey = `icon${
    props.iconPosition.charAt(0).toUpperCase() + props.iconPosition.slice(1)
  }`;
  const iconPositionClasses =
    styles[iconPositionKey as keyof typeof styles] || styles.iconLeft;

  // Get icon spacing classes
  const iconSpacingKey = `iconSpacing${
    props.iconPosition.charAt(0).toUpperCase() + props.iconPosition.slice(1)
  }`;
  const iconSpacingClasses =
    styles[iconSpacingKey as keyof typeof styles] || "";

  const loadingClasses = props.loading ? styles.loading : "";

  return `${baseClasses} ${variantClasses} ${sizeClasses} ${iconPositionClasses} ${iconSpacingClasses} ${loadingClasses}`.trim();
};
</script>

<template>
  <button
    :class="getButtonClasses()"
    :disabled="disabled || loading"
    type="button"
  >
    <!-- Loading spinner -->
    <svg
      v-if="loading"
      class="animate-spin h-4 w-4"
      :class="{
        'mr-0': props.iconPosition === 'left',
        'ml-0': props.iconPosition === 'right',
        'mb-0': props.iconPosition === 'top',
        'mt-0': props.iconPosition === 'bottom',
      }"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>

    <!-- Icon slot for button with icon -->
    <slot name="icon" />

    <!-- Content slot or label -->
    <slot v-if="!iconOnly">{{ label || "Button" }}</slot>
  </button>
</template>
