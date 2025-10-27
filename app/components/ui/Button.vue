<template>
  <button
    :class="[
      'ds-btn',
      `ds-btn--${variant}`,
      `ds-btn--${size}`,
      { 'is-loading': loading },
    ]"
    :type="type"
    :aria-busy="loading"
    :disabled="disabled || loading"
    v-bind="$attrs"
    @click="onClick"
  >
    <span
      v-if="$slots.start"
      class="ds-btn__icon ds-btn__icon--start"
      aria-hidden="true"
    >
      <slot name="start" />
    </span>
    <span class="ds-btn__content">
      <slot />
    </span>
    <span
      v-if="$slots.end"
      class="ds-btn__icon ds-btn__icon--end"
      aria-hidden="true"
    >
      <slot name="end" />
    </span>
  </button>
</template>

<script setup lang="ts">
// * PROPS: API surface for consumers
// ----------------------------------
export interface Props {
  variant?: "solid" | "secondary" | "outline" | "ghost";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  loading?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "solid",
  size: "md",
  type: "button",
  disabled: false,
  loading: false,
});

// * EMITS: Bubble click events when enabled
// ----------------------------------------
const emit = defineEmits<{
  (e: "click", ev: MouseEvent): void;
}>();

function onClick(ev: MouseEvent) {
  // ! Block interactions when disabled or loading
  if (props.disabled || props.loading) {
    ev.preventDefault();
    return;
  }
  emit("click", ev);
}
</script>

<style scoped>
/* * BASE: Shared button styles via CSS custom props */
/* ------------------------------------------------ */
.ds-btn {
  --ds-btn-bg: var(--ds-color-primary, #101010);
  --ds-btn-fg: var(--ds-color-on-primary, #ffffff);
  --ds-btn-bg-hover: color-mix(in oklab, var(--ds-btn-bg), black 10%);
  --ds-btn-bg-active: color-mix(in oklab, var(--ds-btn-bg), black 20%);
  --ds-btn-border: transparent;
  --ds-btn-radius: var(--ds-radius-md, 0.5rem);
  --ds-btn-padding-y: var(--ds-space-2, 0.5rem);
  --ds-btn-padding-x: var(--ds-space-3, 0.75rem);
  --ds-btn-font-size: 0.875rem;
  --ds-btn-font-weight: 600;
  --ds-btn-ring: 0 0 0 3px color-mix(in oklab, var(--ds-btn-bg), black 50%);

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--ds-space-2, 0.5rem);
  padding: var(--ds-btn-padding-y) var(--ds-btn-padding-x);
  border-radius: var(--ds-btn-radius);
  border: 1px solid var(--ds-btn-border);
  background: var(--ds-btn-bg);
  color: var(--ds-btn-fg);
  font-size: var(--ds-btn-font-size);
  font-weight: regular;
  line-height: 1.25;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.005s ease-in-out;
  transform-origin: center;
  user-select: none;
}

.ds-btn:hover:not(:disabled) {
  background: var(--ds-btn-bg-hover);
}

.ds-btn:active:not(:disabled) {
  background: var(--ds-btn-bg-active);
  transform: translateY(0px) scale(0.98);
}

.ds-btn:focus-visible {
  outline: none;
  box-shadow: var(--ds-btn-ring);
}

.ds-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.ds-btn.is-loading {
  pointer-events: none;
}

/* * CONTENT & ICON SLOTS */
/* ---------------------- */
.ds-btn__content {
  display: inline-flex;
  align-items: center;
}

.ds-btn__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  line-height: 0;
}

.ds-btn__icon > svg {
  width: 1em;
  height: 1em;
}

/* * VARIANTS */
/* ----------- */
.ds-btn--solid {
  --ds-btn-bg: var(--ds-color-primary, #000);
  --ds-btn-fg: var(--ds-color-on-primary, #ffffff);
}

.ds-btn--secondary {
  --ds-btn-bg: color-mix(
    in oklab,
    var(--ds-color-primary, #6b7280) 10%,
    transparent
  );
  background-color: var(--ds-btn-bg);
  --ds-btn-fg: var(--ds-color-on-secondary, #ffffff);
}

.ds-btn--outline {
  --ds-btn-bg: transparent;
  --ds-btn-fg: var(--ds-color-on-secondary, #121212);
  --ds-btn-border: color-mix(
    in oklab,
    var(--ds-color-primary, #737373) 25%,
    transparent
  );
}

.ds-btn--ghost {
  --ds-btn-bg: transparent;
  --ds-btn-bg-hover: color-mix(
    in oklab,
    var(--ds-color-primary, #3b82f6) 10%,
    transparent
  );
  --ds-btn-fg: var(--ds-color-primary, #3b82f6);
  --ds-btn-border: transparent;
}

/* * SIZES */
/* -------- */
.ds-btn--xs {
  --ds-btn-padding-y: var(--ds-space-0_5, 0.125rem);
  --ds-btn-padding-x: var(--ds-space-1, 0.25rem);
  --ds-btn-font-size: 0.75rem;
}

.ds-btn--sm {
  --ds-btn-padding-y: var(--ds-space-1, 0.25rem);
  --ds-btn-padding-x: var(--ds-space-2, 0.5rem);
  --ds-btn-font-size: 0.8125rem;
}

.ds-btn--md {
  --ds-btn-padding-y: var(--ds-space-2, 0.5rem);
  --ds-btn-padding-x: var(--ds-space-3, 0.75rem);
  --ds-btn-font-size: 0.875rem;
}

.ds-btn--lg {
  --ds-btn-padding-y: var(--ds-space-3, 0.75rem);
  --ds-btn-padding-x: var(--ds-space-4, 1rem);
  --ds-btn-font-size: 1rem;
}

.ds-btn--xl {
  --ds-btn-padding-y: var(--ds-space-4, 1rem);
  --ds-btn-padding-x: var(--ds-space-5, 1.25rem);
  --ds-btn-font-size: 1.125rem;
}
</style>
