<script setup lang="ts">
import { computed } from "vue";

import type { BadgeProps } from "./types";

import { badgeVariants } from "./variants";

// Props
const props = withDefaults(defineProps<BadgeProps>(), {
  variant: "default",
  asChild: false,
  collapsible: false,
});

// Computed classes
const badgeClasses = computed(() => {
  return cn(
    badgeVariants({
      variant: props.variant,
    }),
    // Enable group for hover/focus transitions and remove default gap when collapsing
    props.collapsible && "group gap-0",
    props.class,
  );
});
</script>

<template>
  <!-- Slot pattern for asChild -->
  <slot v-if="asChild" :class="badgeClasses" data-slot="badge" />

  <!-- Regular badge -->
  <span v-else :class="badgeClasses" data-slot="badge" v-bind="$attrs">
    <!-- Default rendering when not collapsible -->
    <template v-if="!collapsible">
      <slot />
    </template>

    <!-- Collapsible rendering: icon (default slot) + expandable label -->
    <template v-else>
      <span class="inline-flex items-center">
        <!-- Icon / leading content -->
        <slot />
        <!-- Expandable label -->
        <span
          v-if="$slots.label || label"
          class="overflow-hidden whitespace-nowrap max-w-0 opacity-0 transition-all duration-200 ease-out group-hover:max-w-[16rem] group-hover:opacity-100 group-focus-within:max-w-[16rem] group-focus-within:opacity-100 ml-0 group-hover:ml-1 group-focus-within:ml-1"
        >
          <slot name="label">{{ label }}</slot>
        </span>
      </span>
    </template>
  </span>
</template>
