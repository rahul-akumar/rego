<script setup lang="ts">
import { computed } from "vue";

import type { ButtonProps } from "./types";

import { buttonVariants } from "./variants";

// Props
const props = withDefaults(defineProps<ButtonProps>(), {
  variant: "default",
  size: "default",
  loading: false,
  disabled: false,
  inverted: false,
  asChild: false,
});

// Computed classes
const buttonClasses = computed(() => {
  return cn(
    buttonVariants({
      variant: props.variant,
      size: props.size,
      iconPosition: props.iconPosition,
      iconOnly: props.iconOnly,
      loading: props.loading,
      disabled: props.disabled,
      inverted: props.inverted,
    }),
    props.class,
  );
});

function handleClick(event: MouseEvent) {
  if (props.loading || props.disabled) {
    event.preventDefault();
    event.stopPropagation();
  }
}
</script>

<template>
  <!-- Slot pattern for asChild -->
  <slot
    v-if="asChild"
    :class="buttonClasses"
    data-slot="button"
    @click="handleClick"
  />

  <!-- Regular button -->
  <button
    v-else
    :class="buttonClasses"
    :disabled="Boolean(disabled)"
    :aria-disabled="disabled ? 'true' : undefined"
    data-slot="button"
    type="button"
    v-bind="$attrs"
    @click="handleClick"
  >
    <!-- Loading spinner -->
    <DsLoader
      v-if="loading"
      size="xs"
      class="!text-current"
    />

    <!-- Icon only content -->
    <template v-if="iconOnly">
      <slot />
    </template>

    <!-- Button with icon and text -->
    <template v-else-if="$slots.icon">
      <!-- Icon slot -->
      <slot name="icon" />
      <!-- Text content -->
      <slot />
    </template>

    <!-- Text only button -->
    <template v-else>
      <slot />
    </template>
  </button>
</template>
