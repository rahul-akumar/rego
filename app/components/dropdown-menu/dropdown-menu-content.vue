<script setup lang="ts">
import { computed, inject, nextTick, onBeforeUnmount, onMounted, ref, watch } from "vue";

import { cn } from "~/utils/cn";

import type { DropdownMenuContentProps, DropdownMenuContext } from "./types";

import { dropdownMenuContentVariants } from "./variants";

// Props
const props = withDefaults(defineProps<DropdownMenuContentProps>(), {
  align: "start",
  side: "bottom",
  sideOffset: 4,
  alignOffset: 0,
  avoidCollisions: true,
  sticky: "partial",
});

// Get context
const context = inject<DropdownMenuContext>("dropdown-menu-context");
if (!context) {
  throw new Error("DropdownMenuContent must be used within a DropdownMenu");
}

const { isOpen, close, triggerId, contentId } = context;

// Template refs
const contentRef = ref<HTMLElement>();
const triggerElement = ref<HTMLElement>();

// State for positioning
const position = ref({ top: 0, left: 0 });
const currentFocusIndex = ref(-1);
const focusableElements = ref<HTMLElement[]>([]);

// Computed classes
const contentClasses = computed(() => {
  return cn(
    dropdownMenuContentVariants({ align: props.align }),
    props.class,
  );
});

// Position calculation
function calculatePosition() {
  if (!triggerElement.value || !contentRef.value) {
    return;
  }

  const triggerRect = triggerElement.value.getBoundingClientRect();
  const viewport = { width: window.innerWidth, height: window.innerHeight };

  let top = 0;
  let left = 0;

  // Calculate initial position based on side
  switch (props.side) {
    case "top":
      top = triggerRect.top - props.sideOffset;
      left = triggerRect.left;
      break;
    case "bottom":
      top = triggerRect.bottom + props.sideOffset;
      left = triggerRect.left;
      break;
    case "left":
      top = triggerRect.top;
      left = triggerRect.left - props.sideOffset;
      break;
    case "right":
      top = triggerRect.top;
      left = triggerRect.right + props.sideOffset;
      break;
  }

  // Calculate alignment - only after we have initial position
  if (props.side === "top" || props.side === "bottom") {
    // Get content width for alignment calculation
    const contentWidth = contentRef.value.offsetWidth || 200; // fallback
    switch (props.align) {
      case "start":
        left = triggerRect.left + props.alignOffset;
        break;
      case "center":
        left = triggerRect.left + (triggerRect.width - contentWidth) / 2 + props.alignOffset;
        break;
      case "end":
        left = triggerRect.right - contentWidth - props.alignOffset;
        break;
    }
  }
  else {
    // Get content height for alignment calculation
    const contentHeight = contentRef.value.offsetHeight || 100; // fallback
    switch (props.align) {
      case "start":
        top = triggerRect.top + props.alignOffset;
        break;
      case "center":
        top = triggerRect.top + (triggerRect.height - contentHeight) / 2 + props.alignOffset;
        break;
      case "end":
        top = triggerRect.bottom - contentHeight - props.alignOffset;
        break;
    }
  }

  // Avoid collisions with viewport edges
  if (props.avoidCollisions) {
    const contentWidth = contentRef.value.offsetWidth || 200;
    const contentHeight = contentRef.value.offsetHeight || 100;

    left = Math.max(8, Math.min(left, viewport.width - contentWidth - 8));
    top = Math.max(8, Math.min(top, viewport.height - contentHeight - 8));
  }

  position.value = { top, left };
}

// Focus management
function updateFocusableElements() {
  if (!contentRef.value)
    return;

  const selector = "button, [href], input, select, textarea, [tabindex]:not([tabindex=\"-1\"])";
  focusableElements.value = Array.from(
    contentRef.value.querySelectorAll(selector),
  ).filter(el => !el.hasAttribute("disabled")) as HTMLElement[];
}

function focusItem(index: number) {
  if (index < 0 || index >= focusableElements.value.length)
    return;

  currentFocusIndex.value = index;
  focusableElements.value[index]?.focus();
}

function handleKeydown(event: KeyboardEvent) {
  if (!isOpen.value)
    return;

  switch (event.key) {
    case "Escape":
      event.preventDefault();
      close();
      break;
    case "ArrowDown":
      event.preventDefault();
      updateFocusableElements();
      focusItem((currentFocusIndex.value + 1) % focusableElements.value.length);
      break;
    case "ArrowUp":
      event.preventDefault();
      updateFocusableElements();
      focusItem(
        currentFocusIndex.value <= 0
          ? focusableElements.value.length - 1
          : currentFocusIndex.value - 1,
      );
      break;
    case "Home":
      event.preventDefault();
      updateFocusableElements();
      focusItem(0);
      break;
    case "End":
      event.preventDefault();
      updateFocusableElements();
      focusItem(focusableElements.value.length - 1);
      break;
  }
}

// Click outside handler
function handleClickOutside(event: MouseEvent) {
  if (!contentRef.value || !triggerElement.value)
    return;

  const target = event.target as Node;

  if (!contentRef.value.contains(target) && !triggerElement.value.contains(target)) {
    close();
  }
}

// Setup and cleanup
onMounted(() => {
  // Find trigger element
  triggerElement.value = document.getElementById(triggerId) as HTMLElement;

  if (isOpen.value) {
    nextTick(() => {
      setTimeout(() => {
        calculatePosition();
        updateFocusableElements();
        focusItem(0);
      }, 10);
    });
  }

  document.addEventListener("click", handleClickOutside);
  document.addEventListener("keydown", handleKeydown);
  window.addEventListener("resize", calculatePosition);
  window.addEventListener("scroll", calculatePosition);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
  document.removeEventListener("keydown", handleKeydown);
  window.removeEventListener("resize", calculatePosition);
  window.removeEventListener("scroll", calculatePosition);
});

// Watch for open state changes
watch(isOpen, (newOpen) => {
  if (newOpen) {
    nextTick(() => {
      // Small delay to ensure elements are rendered
      setTimeout(() => {
        calculatePosition();
        updateFocusableElements();
        focusItem(0);
      }, 10);
    });
  }
  else {
    currentFocusIndex.value = -1;
  }
});
</script>

<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      :id="contentId"
      ref="contentRef"
      :class="contentClasses"
      :style="{
        position: 'fixed',
        top: `${position.top}px`,
        left: `${position.left}px`,
        zIndex: 50,
      }"
      data-slot="dropdown-content"
      :data-state="isOpen ? 'open' : 'closed'"
      :data-side="side"
      :data-align="align"
      role="menu"
      :aria-labelledby="triggerId"
    >
      <slot />
    </div>
  </Teleport>
</template>
