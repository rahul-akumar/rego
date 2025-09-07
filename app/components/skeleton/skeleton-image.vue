<script setup lang="ts">
import type { VariantProps } from "class-variance-authority";

import { ImageIcon } from "lucide-vue-next";
import { computed, inject } from "vue";

import { cn } from "~/utils/cn";

import type { SkeletonContext, SkeletonImageProps } from "./types";

import { skeletonBaseVariants, skeletonImageVariants } from "./variants";

// Props
const props = withDefaults(defineProps<SkeletonImageProps>(), {
  aspectRatio: "square",
  rounded: "md",
});

// Inject context
const context = inject<SkeletonContext>("skeleton-context");

// Types
type SkeletonImageVariants = VariantProps<typeof skeletonImageVariants>;

// Computed classes
const imageClasses = computed(() =>
  cn(
    "flex items-center justify-center",
    skeletonBaseVariants({
      theme: context?.theme.value,
      speed: context?.animationSpeed.value,
      rounded: props.rounded,
    }),
    skeletonImageVariants({
      aspectRatio: props.aspectRatio as SkeletonImageVariants["aspectRatio"],
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

  if (props.height) {
    style.height = typeof props.height === "number" ? `${props.height}px` : props.height;
  }

  return style;
});
</script>

<template>
  <div
    v-if="context?.isLoading.value !== false"
    :class="imageClasses"
    :style="customStyle"
    data-slot="skeleton-image"
  >
    <ImageIcon class="w-1/3 h-1/3 text-muted-foreground/40" />
  </div>
</template>
