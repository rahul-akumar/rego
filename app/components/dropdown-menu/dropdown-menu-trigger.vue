<script setup lang="ts">
import { computed, inject, ref } from "vue";

import { cn } from "~/utils/cn";

import type { DropdownMenuContext, DropdownMenuTriggerProps } from "./types";

// Props
const props = withDefaults(defineProps<DropdownMenuTriggerProps>(), {
  asChild: false,
  disabled: false,
});

// Get context
const context = inject<DropdownMenuContext>("dropdown-menu-context");
if (!context) {
  throw new Error("DropdownMenuTrigger must be used within a DropdownMenu");
}

const { isOpen, toggle, close, triggerId, contentId } = context;

// Template ref
const triggerRef = ref<HTMLElement>();

// Computed properties
const triggerClasses = computed(() => {
  return cn(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50",
    "bg-popover text-popover-foreground hover:bg-accent hover:text-accent-foreground",
    "px-3 py-2",
    props.class,
  );
});

// Event handlers
function handleClick(event: MouseEvent) {
  if (props.disabled) {
    event.preventDefault();
    return;
  }
  toggle();
}

function handleKeydown(event: KeyboardEvent) {
  if (props.disabled)
    return;

  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    toggle();
  }
  else if (event.key === "ArrowDown") {
    event.preventDefault();
    if (!isOpen.value) {
      toggle();
    }
  }
  else if (event.key === "Escape" && isOpen.value) {
    event.preventDefault();
    close();
  }
}
</script>

<template>
  <!-- Slot pattern for asChild -->
  <slot
    v-if="asChild"
    :id="triggerId"
    ref="triggerRef"
    :class="triggerClasses"
    :aria-expanded="isOpen"
    :aria-haspopup="true"
    :aria-controls="contentId"
    :disabled="props.disabled"
    data-slot="dropdown-trigger"
    :data-state="isOpen ? 'open' : 'closed'"
    @click="handleClick"
    @keydown="handleKeydown"
  />

  <!-- Regular button -->
  <button
    v-else
    :id="triggerId"
    ref="triggerRef"
    :class="triggerClasses"
    :aria-expanded="isOpen"
    :aria-haspopup="true"
    :aria-controls="contentId"
    :disabled="props.disabled"
    data-slot="dropdown-trigger"
    :data-state="isOpen ? 'open' : 'closed'"
    type="button"
    v-bind="$attrs"
    @click="handleClick"
    @keydown="handleKeydown"
  >
    <slot />
  </button>
</template>
