<script setup lang="ts">
import { provide, readonly, ref, watch } from "vue";

import type { SkeletonContext, SkeletonProps } from "./types";

// Props
const props = withDefaults(defineProps<SkeletonProps>(), {
  loading: true,
  animationSpeed: "default",
  theme: "default",
});

// State
const isLoading = ref(props.loading);
const animationSpeed = ref(props.animationSpeed);
const theme = ref(props.theme);

// Watch for prop changes
watch(() => props.loading, (newValue) => {
  isLoading.value = newValue;
});

watch(() => props.animationSpeed, (newValue) => {
  animationSpeed.value = newValue;
});

watch(() => props.theme, (newValue) => {
  theme.value = newValue;
});

// Provide context to child components
const context: SkeletonContext = {
  isLoading: readonly(isLoading),
  animationSpeed: readonly(animationSpeed),
  theme: readonly(theme),
};

provide("skeleton-context", context);
</script>

<template>
  <div
    v-if="isLoading"
    data-slot="skeleton"
    :class="props.class"
    :data-theme="theme"
    :data-speed="animationSpeed"
    aria-live="polite"
    aria-label="Loading content"
    role="status"
  >
    <slot />
  </div>
  <div v-else>
    <slot name="loaded" />
  </div>
</template>

<style>
@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}
</style>
