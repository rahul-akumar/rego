<script setup lang="ts">
import { computed } from "vue";

import { cn } from "~/utils/cn";

import type { DropdownMenuLabelProps } from "./types";

import { dropdownMenuLabelVariants } from "./variants";

// Props
const props = withDefaults(defineProps<DropdownMenuLabelProps>(), {
  inset: false,
});

// Computed classes
const labelClasses = computed(() => {
  return cn(
    dropdownMenuLabelVariants({
      inset: props.inset,
    }),
    props.class,
  );
});
</script>

<template>
  <div
    :class="labelClasses"
    data-slot="dropdown-label"
    role="presentation"
  >
    <slot />
  </div>
</template>
