<script setup lang="ts">
import { computed, inject } from "vue";

import { cn } from "~/utils/cn";

import type { DropdownMenuContext, DropdownMenuItemProps } from "./types";

import { dropdownMenuItemVariants } from "./variants";

// Props
const props = withDefaults(defineProps<DropdownMenuItemProps>(), {
  disabled: false,
  destructive: false,
  inset: false,
});

// Emits
const emit = defineEmits<{
  select: [event: MouseEvent];
}>();

// Get context
const context = inject<DropdownMenuContext>("dropdown-menu-context");
if (!context) {
  throw new Error("DropdownMenuItem must be used within a DropdownMenu");
}

const { close } = context;

// Computed classes
const itemClasses = computed(() => {
  return cn(
    dropdownMenuItemVariants({
      destructive: props.destructive,
      inset: props.inset,
    }),
    props.class,
  );
});

// Event handlers
function handleClick(event: MouseEvent) {
  if (props.disabled) {
    event.preventDefault();
    return;
  }

  emit("select", event);

  // Close menu after selection unless prevented
  if (!event.defaultPrevented) {
    close();
  }
}

function handleKeydown(event: KeyboardEvent) {
  if (props.disabled)
    return;

  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    handleClick(event as any);
  }
}
</script>

<template>
  <button
    :class="itemClasses"
    :disabled="props.disabled"
    :data-disabled="props.disabled ? '' : undefined"
    data-slot="dropdown-item"
    role="menuitem"
    tabindex="-1"
    type="button"
    v-bind="$attrs"
    @click="handleClick"
    @keydown="handleKeydown"
  >
    <slot />
  </button>
</template>
