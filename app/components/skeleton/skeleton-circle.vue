<script setup lang="ts">
import type { VariantProps } from "class-variance-authority";

import { computed, inject } from "vue";

import { cn } from "~/utils/cn";

import type { SkeletonCircleProps, SkeletonContext } from "./types";

import { skeletonBaseVariants, skeletonCircleVariants } from "./variants";

// Props
const props = withDefaults(defineProps<SkeletonCircleProps>(), {
  size: "default",
});

// Inject context
const context = inject<SkeletonContext>("skeleton-context");

// Types
type SkeletonCircleVariants = VariantProps<typeof skeletonCircleVariants>;

// Computed classes
const circleClasses = computed(() =>
  cn(
    skeletonBaseVariants({
      theme: context?.theme.value,
      speed: context?.animationSpeed.value,
      rounded: "full",
    }),
    skeletonCircleVariants({
      size: props.size as SkeletonCircleVariants["size"],
    }),
    props.class,
  ),
);

// Style for custom size
const customStyle = computed(() => {
  if (!props.size || ["xs", "sm", "default", "lg", "xl", "2xl"].includes(props.size as string)) {
    return {};
  }

  const style: Record<string, string> = {};
  const sizeValue = typeof props.size === "number" ? `${props.size}px` : props.size;

  style.width = sizeValue;
  style.height = sizeValue;

  return style;
});
</script>

<template>
  <div
    v-if="context?.isLoading.value !== false"
    :class="circleClasses"
    :style="customStyle"
    data-slot="skeleton-circle"
  />
</template>
