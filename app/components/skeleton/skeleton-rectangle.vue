<script setup lang="ts">
import { computed, inject } from "vue";

import { cn } from "~/utils/cn";

import type { SkeletonContext, SkeletonRectangleProps } from "./types";

import { skeletonBaseVariants } from "./variants";

// Props
const props = withDefaults(defineProps<SkeletonRectangleProps>(), {
  rounded: "md",
});

// Inject context
const context = inject<SkeletonContext>("skeleton-context");

// Computed classes
const rectangleClasses = computed(() =>
  cn(
    "block",
    skeletonBaseVariants({
      theme: context?.theme.value,
      speed: context?.animationSpeed.value,
      rounded: props.rounded,
    }),
    props.class,
  ),
);

// Style for custom dimensions
const customStyle = computed(() => {
  const style: Record<string, string> = {};

  if (props.width) {
    style.width = typeof props.width === "number" ? `${props.width}px` : props.width;
  }
  else {
    style.width = "100%";
  }

  if (props.height) {
    style.height = typeof props.height === "number" ? `${props.height}px` : props.height;
  }
  else {
    style.height = "1rem";
  }

  return style;
});
</script>

<template>
  <div
    v-if="context?.isLoading.value !== false"
    :class="rectangleClasses"
    :style="customStyle"
    data-slot="skeleton-rectangle"
  />
</template>
