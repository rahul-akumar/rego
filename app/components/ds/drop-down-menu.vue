<script setup lang="ts">
import { Check, Circle } from "lucide-vue-next";
import { onBeforeUnmount, onMounted, ref } from "vue";

const isOpen = ref(false);
const triggerRef = ref<HTMLElement | null>(null);
const menuRef = ref<HTMLElement | null>(null);

function toggleMenu() {
  isOpen.value = !isOpen.value;
}

function closeMenu() {
  isOpen.value = false;
}

function handleClickOutside(event: MouseEvent) {
  if (
    menuRef.value
    && !menuRef.value.contains(event.target as Node)
    && triggerRef.value
    && !triggerRef.value.contains(event.target as Node)
  ) {
    closeMenu();
  }
}

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<template>
  <div class="relative inline-block text-left">
    <!-- Trigger -->
    <button
      ref="triggerRef"
      class="inline-flex items-center rounded-md px-3 py-2 bg-popover text-popover-foreground hover:bg-accent hover:text-accent-foreground"
      @click="toggleMenu"
    >
      Options
    </button>

    <!-- Menu -->
    <teleport to="body">
      <div
        v-if="isOpen"
        ref="menuRef"
        class="absolute z-50 mt-2 min-w-[8rem] rounded-md border bg-popover text-popover-foreground shadow-md p-1"
        style="top: calc(var(--trigger-top, 0) + 2.5rem); left: var(--trigger-left, 0)"
      >
        <!-- Example items -->
        <button
          class="relative flex w-full cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground"
          @click="closeMenu"
        >
          <Check class="size-4 text-muted-foreground" /> Profile
        </button>

        <button
          class="relative flex w-full cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground"
          @click="closeMenu"
        >
          <Circle class="size-2 fill-current text-muted-foreground" /> Settings
        </button>

        <div class="bg-border my-1 h-px" />

        <button
          class="relative flex w-full cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm text-destructive hover:bg-destructive/10 hover:text-destructive"
          @click="closeMenu"
        >
          Logout
        </button>
      </div>
    </teleport>
  </div>
</template>
