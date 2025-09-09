<script setup lang="ts">
import { computed } from "vue";

import type { BadgeProps } from "./types";

import { badgeVariants } from "./variants";

// Props
const props = withDefaults(defineProps<BadgeProps>(), {
  variant: "default",
  asChild: false,
});

// Computed classes
const badgeClasses = computed(() => {
  return cn(
    badgeVariants({
      variant: props.variant,
    }),
    props.class,
  );
});
</script>

<template>
  <!-- Slot pattern for asChild -->
  <slot v-if="asChild" :class="badgeClasses" data-slot="badge" />

  <!-- Regular badge -->
  <span v-else :class="badgeClasses" data-slot="badge" v-bind="$attrs">
    <slot />
  </span>
</template>
