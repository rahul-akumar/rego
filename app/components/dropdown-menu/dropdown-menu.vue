<script setup lang="ts">
import { provide, readonly, ref, watch } from "vue";

import type { DropdownMenuContext, DropdownMenuProps } from "./types";

// Props
const props = withDefaults(defineProps<DropdownMenuProps>(), {
  defaultOpen: false,
  disabled: false,
  placement: "bottom-start",
  offset: 4,
});

// Emits
const emit = defineEmits<{
  openChange: [open: boolean];
}>();

// State
const isOpen = ref(props.defaultOpen);
const triggerId = `dropdown-trigger-${Math.random().toString(36).substr(2, 9)}`;
const contentId = `dropdown-content-${Math.random().toString(36).substr(2, 9)}`;

// Methods
function open() {
  if (props.disabled)
    return;
  isOpen.value = true;
  emit("openChange", true);
  props.onOpenChange?.(true);
}

function close() {
  isOpen.value = false;
  emit("openChange", false);
  props.onOpenChange?.(false);
}

function toggle() {
  if (isOpen.value) {
    close();
  }
  else {
    open();
  }
}

// Watch for external control
watch(isOpen, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    emit("openChange", newValue);
    props.onOpenChange?.(newValue);
  }
});

// Provide context to child components
const context: DropdownMenuContext = {
  isOpen: readonly(isOpen),
  open,
  close,
  toggle,
  triggerId,
  contentId,
};

provide("dropdown-menu-context", context);
</script>

<template>
  <div
    data-slot="dropdown-menu"
    :data-state="isOpen ? 'open' : 'closed'"
    :data-disabled="props.disabled ? '' : undefined"
  >
    <slot />
  </div>
</template>
