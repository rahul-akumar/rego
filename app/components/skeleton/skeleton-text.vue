<script setup lang="ts">
import { computed, inject } from "vue";

import { cn } from "~/utils/cn";

import type { SkeletonContext, SkeletonTextProps } from "./types";

import { skeletonBaseVariants, skeletonTextVariants } from "./variants";

// Props
const props = withDefaults(defineProps<SkeletonTextProps>(), {
  lines: 1,
  lastLineWidth: "75%",
  rounded: "sm",
});

// Inject context
const context = inject<SkeletonContext>("skeleton-context");

// Computed classes
const baseClasses = computed(() =>
  cn(
    skeletonBaseVariants({
      theme: context?.theme.value,
      speed: context?.animationSpeed.value,
      rounded: props.rounded,
    }),
  ),
);

const textClasses = computed(() =>
  cn(
    skeletonTextVariants(),
    baseClasses.value,
    props.class,
  ),
);

// Generate array for multiple lines
const lines = computed(() => Array.from({ length: props.lines }, (_, i) => i));

// Style for custom dimensions
const customStyle = computed(() => {
  const style: Record<string, string> = {};

  if (props.width) {
    style.width = typeof props.width === "number" ? `${props.width}px` : props.width;
  }

  if (props.height) {
    style.height = typeof props.height === "number" ? `${props.height}px` : props.height;
  }

  return style;
});
</script>

<template>
  <div v-if="context?.isLoading.value !== false" data-slot="skeleton-text" class="space-y-2">
    <template v-if="lines.length === 1">
      <div
        :class="textClasses"
        :style="customStyle"
      />
    </template>
    <template v-else>
      <div
        v-for="(_, index) in lines"
        :key="index"
        :class="textClasses"
        :style="{
          ...customStyle,
          ...(index === lines.length - 1 ? { width: lastLineWidth } : {}),
        }"
      />
    </template>
  </div>
</template>
