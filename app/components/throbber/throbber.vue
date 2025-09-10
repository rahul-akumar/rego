<script setup lang="ts">
import { computed } from "vue";

import type { ThrobberProps } from "./types";

const props = withDefaults(defineProps<ThrobberProps>(), {
  size: "default",
  variant: "solid",
  speed: "default",
  label: "Loading",
});

const sizePxMap: Record<NonNullable<ThrobberProps["size"]>, number> = {
  xs: 16,
  sm: 20,
  default: 24,
  lg: 32,
  xl: 40,
};

const strokeWidthMap: Record<NonNullable<ThrobberProps["size"]>, number> = {
  xs: 2,
  sm: 2,
  default: 3,
  lg: 3,
  xl: 4,
};

const box = computed(() => sizePxMap[props.size] ?? sizePxMap.default);
const strokeWidth = computed(() => strokeWidthMap[props.size] ?? strokeWidthMap.default);

// Adjust spin speed via CSS animation-duration
const speedDuration = computed(() => {
  if (props.speed === "fast")
    return "0.6s";
  if (props.speed === "slow")
    return "1.8s";
  return "1s"; // default
});

// Stroke patterns for variants (applied to the indicator only)
const dashArray = computed<string | undefined>(() => {
  if (props.variant === "dotted") {
    // dot size approximately stroke width; gaps scale with size
    return `${strokeWidth.value} ${strokeWidth.value * 2.5}`;
  }
  if (props.variant === "dashed") {
    return `${strokeWidth.value * 4} ${strokeWidth.value * 3}`;
  }
  return undefined; // solid
});

const strokeLinecap = computed<"round" | "butt">(() => {
  if (props.variant === "dotted")
    return "round";
  if (props.variant === "dashed")
    return "round";
  return "round";
});

const rootClasses = computed(() =>
  cn(
    // Use text-primary so the spinner color follows the theme
    "inline-flex items-center justify-center align-middle text-primary",
    props.class,
  ),
);
</script>

<template>
  <span
    :class="rootClasses"
    role="status"
    aria-live="polite"
    :aria-label="label"
    data-slot="throbber"
  >
    <!--
      SVG-based throbber:
      - Track circle uses currentColor with low opacity
      - Arc path uses currentColor
      - The whole SVG spins with Tailwind's animate-spin
    -->
    <svg
      :width="box"
      :height="box"
      viewBox="0 0 50 50"
      class="animate-spin"
      :style="{ animationDuration: speedDuration }"
      aria-hidden="true"
    >
      <!-- Track -->
      <circle
        cx="25"
        cy="25"
        r="20"
        :stroke-width="strokeWidth"
        stroke="currentColor"
        class="opacity-25"
        fill="none"
      />

      <!-- Indicator -->
      <path
        d="M25 5 a20 20 0 0 1 0 40"
        :stroke-width="strokeWidth"
        stroke="currentColor"
        fill="none"
        :stroke-dasharray="dashArray"
        :stroke-linecap="strokeLinecap"
        class="opacity-100"
      />
    </svg>

    <span class="sr-only">{{ label }}</span>
  </span>
</template>
