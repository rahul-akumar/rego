<script setup lang="ts">
import { computed } from "vue";

import { cn } from "~/utils/cn";

import type { DropdownMenuShortcutProps } from "./types";

import { dropdownMenuShortcutVariants } from "./variants";

// Props
const props = withDefaults(defineProps<DropdownMenuShortcutProps>(), {});

// Computed classes
const shortcutClasses = computed(() => {
  return cn(
    dropdownMenuShortcutVariants(),
    props.class,
  );
});
</script>

<template>
  <span
    :class="shortcutClasses"
    data-slot="dropdown-shortcut"
  >
    <slot />
  </span>
</template>
