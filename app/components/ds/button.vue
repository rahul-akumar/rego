<script setup lang="ts">
import { computed } from "vue";

import type { ButtonEmits, ButtonProps } from "../../../src/types/button";

import { buttonVariants } from "../../../src/styles/variants/button";

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: "primary",
  size: "md",
  disabled: false,
  loading: false,
  iconOnly: false,
  inverted: false,
  iconPosition: "left",
  asChild: false,
});

const emit = defineEmits<ButtonEmits>();

const buttonClasses = computed(() => {
  return cn(
    buttonVariants({
      variant: props.variant,
      size: props.size,
      iconPosition: props.iconPosition,
      iconOnly: props.iconOnly,
      inverted: props.inverted,
      loading: props.loading,
      disabled: props.disabled,
    }),
    props.class,
  );
});

function handleClick(event: MouseEvent) {
  if (!props.disabled && !props.loading) {
    emit("click", event);
  }
}

function handleFocus(event: FocusEvent) {
  emit("focus", event);
}

function handleBlur(event: FocusEvent) {
  emit("blur", event);
}
</script>

<template>
  <slot v-if="asChild" :class="buttonClasses" />
  <button
    v-else
    :class="buttonClasses"
    :disabled="disabled || loading"
    type="button"
    v-bind="$attrs"
    @click="handleClick"
    @focus="handleFocus"
    @blur="handleBlur"
  >
    <!-- Loading spinner -->
    <svg
      v-if="loading"
      class="animate-spin h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      />
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>

    <!-- Icon slot for button with icon -->
    <template v-if="iconOnly">
      <slot />
    </template>

    <!-- For buttons with both icon and text -->
    <template v-else>
      <!-- Icon slot for button with icon -->
      <slot name="icon" />
      <!-- Content slot or label -->
      <slot>
        {{ label || "Button" }}
      </slot>
    </template>
  </button>
</template>
