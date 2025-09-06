<script setup lang="ts">
import { computed } from "vue";

import { cn } from "~/utils/cn";

import type { DropdownMenuSeparatorProps } from "./types";

import { dropdownMenuSeparatorVariants } from "./variants";

// Props
const props = withDefaults(defineProps<DropdownMenuSeparatorProps>(), {});

// Computed classes
const separatorClasses = computed(() => {
  return cn(
    dropdownMenuSeparatorVariants(),
    props.class,
  );
});
</script>

<template>
  <div
    :class="separatorClasses"
    data-slot="dropdown-separator"
    role="separator"
  />
</template>
