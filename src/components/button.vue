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
}

const props = withDefaults(defineProps<Props>(), {
  variant: "primary",
  size: "md",
  disabled: false,
  loading: false,
  iconOnly: false,
  inverted: false,
});

const styles = {
  base: "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-blue-400  disabled:cursor-no-drop disabled:opacity-50",

  // Variants
  primary:
    "bg-black text-white hover:bg-opacity-80 enabled:active:bg-opacity-70 dark:bg-white dark:text-black dark:hover:bg-opacity-80 enabled:dark:active:bg-opacity-70",
  secondary:
    "bg-black text-black bg-opacity-10 hover:bg-opacity-20 enabled:active:bg-opacity-30 dark:bg-white dark:bg-opacity-10 dark:text-white dark:hover:bg-opacity-20 enabled:dark:active:bg-opacity-30",
  outlined:
    "border border-black border-opacity-20 bg-transparent text-black hover:bg-black hover:bg-opacity-10 enabled:active:bg-opacity-20 dark:border-white dark:bg-transparent dark:border-opacity-20 dark:text-white dark:hover:bg-white dark:hover:bg-opacity-10 enabled:dark:active:bg-opacity-20",
  ghost:
    "bg-transparent text-black hover:bg-black hover:bg-opacity-10 enabled:active:bg-opacity-20 dark:text-white dark:hover:bg-white dark:hover:bg-opacity-10 dark:active:bg-opacity-20",
  link: "bg-transparent text-black underline-offset-4 hover:underline p-0 dark:text-white",
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
    "bg-transparent text-white hover:bg-white hover:bg-opacity-10 active:bg-opacity-20 dark:text-black dark:hover:bg-black dark:hover:bg-opacity-10 dark:active:bg-opacity-20",
  invertedLink:
    "bg-transparent text-white underline-offset-4 hover:underline p-0 dark:text-black",
  invertedDestructive:
    "bg-rose-600 text-white hover:bg-opacity-90 active:bg-opacity-80 dark:bg-rose-600 dark:text-white dark:hover:bg-opacity-90 dark:active:bg-opacity-80",

  // Sizes
  xs: "h-6 px-2 text-xs",
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-base",
  lg: "h-12 px-6 text-lg",
  xl: "h-14 px-8 text-xl",

  // Icon only sizes
  iconXs: "h-6 w-6",
  iconSm: "h-8 w-8",
  iconMd: "h-10 w-10",
  iconLg: "h-12 w-12",
  iconXl: "h-14 w-14",

  // Loading
  loading: "cursor-progress opacity-70",
};

const getButtonClasses = () => {
  const baseClasses = styles.base;
  const variantKey = props.inverted
    ? `inverted${
        props.variant.charAt(0).toUpperCase() + props.variant.slice(1)
      }`
    : props.variant;
  const variantClasses =
    styles[variantKey as keyof typeof styles] || styles[props.variant];
  const sizeClasses = props.iconOnly
    ? styles[
        `icon${
          props.size.charAt(0).toUpperCase() + props.size.slice(1)
        }` as keyof typeof styles
      ]
    : styles[props.size];
  const loadingClasses = props.loading ? styles.loading : "";

  return `${baseClasses} ${variantClasses} ${sizeClasses} ${loadingClasses}`.trim();
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
      class="animate-spin -ml-1 mr-2 h-4 w-4"
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
