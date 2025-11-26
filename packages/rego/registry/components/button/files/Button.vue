<template>
  <component
    :is="as"
    :class="[
      'ds-btn',
      variant && `ds-btn--${variant}`,
      size && `ds-btn--${size}`,
      { 'is-loading': loading },
      { 'is-block': block },
      { 'ds-btn--icon-only': isIconOnly },
    ]"
    :type="isButton ? type : undefined"
    :href="as === 'a' ? href : undefined"
    :aria-busy="loading || undefined"
    :aria-disabled="isDisabled || undefined"
    :disabled="isButton ? isDisabled : undefined"
    v-bind="$attrs"
    @click="onClick"
  >
    <!-- Loading spinner (customizable via slot) -->
    <span v-if="loading" class="ds-btn__loader" aria-hidden="true">
      <slot name="loader">
        <span class="ds-btn__spinner" />
      </slot>
    </span>

    <!-- Button content wrapper (hidden visually during loading but preserves width) -->
    <span class="ds-btn__inner" :class="{ 'is-invisible': loading }">
      <span
        v-if="$slots.start"
        class="ds-btn__icon ds-btn__icon--start"
        aria-hidden="true"
      >
        <slot name="start" />
      </span>
      <span v-if="hasText" class="ds-btn__content">
        <slot />
      </span>
      <span
        v-if="$slots.end"
        class="ds-btn__icon ds-btn__icon--end"
        aria-hidden="true"
      >
        <slot name="end" />
      </span>
    </span>
  </component>
</template>

<script setup lang="ts">
import { computed, useSlots, Comment, type Component, type VNode } from 'vue'

defineOptions({ name: 'DsButton' })

// * PROPS: API surface for consumers
// ----------------------------------
export interface Props {
  /** Render as button, anchor, or custom component (e.g. RouterLink) */
  as?: 'button' | 'a' | Component;
  /** Visual style variant */
  variant?: 'solid' | 'outline' | 'ghost' | 'link' | (string & {});
  /** Predefined size */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | (string & {});
  /** Native button type (only when as="button") */
  type?: 'button' | 'submit' | 'reset';
  /** Link href (only when as="a") */
  href?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Loading state - shows spinner and disables interaction */
  loading?: boolean;
  /** Full-width block button */
  block?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
  variant: 'solid',
  size: 'md',
  type: 'button',
  href: undefined,
  disabled: false,
  loading: false,
  block: false,
});

// * COMPUTED
// ----------
const isButton = computed(() => props.as === 'button');
const isDisabled = computed(() => props.disabled || props.loading);

// * ICON-ONLY: detect when there is an icon slot but no text content
// -----------------------------------------------------------------
const slots = useSlots();
function slotHasContent(fn?: () => VNode[]) {
  const nodes = fn?.() ?? [];
  return nodes.some((n: VNode) => {
    if (n?.type === Comment) return false;
    const c = n?.children;
    if (typeof c === 'string') return c.trim().length > 0;
    return true;
  });
}
const hasText = computed(() => slotHasContent(slots.default));
const hasIcon = computed(() => Boolean(slots.start || slots.end));
const isIconOnly = computed(() => hasIcon.value && !hasText.value);

// * EMITS
// -------
const emit = defineEmits<{
  (e: 'click', ev: MouseEvent): void;
}>();

function onClick(ev: MouseEvent) {
  if (isDisabled.value) {
    ev.preventDefault();
    return;
  }
  emit('click', ev);
}
</script>

<style scoped>
/* ==========================================================================
   DS-BTN: Unopinionated button with full CSS custom property support
   
   Override any variable at the component level or globally:
   .my-button { --ds-btn-bg: hotpink; }
   ========================================================================== */

.ds-btn {
  /* Core customization points */
  --_btn-bg: var(--ds-btn-bg, #18181b);
  --_btn-fg: var(--ds-btn-fg, #fafafa);
  --_btn-border: var(--ds-btn-border, transparent);
  --_btn-radius: var(--ds-btn-radius, 0.375rem);
  --_btn-font: var(--ds-btn-font, inherit);
  --_btn-font-size: var(--ds-btn-font-size, 0.875rem);
  --_btn-font-weight: var(--ds-btn-font-weight, 500);
  --_btn-line-height: var(--ds-btn-line-height, 1.25);
  --_btn-padding-x: var(--ds-btn-padding-x, 1rem);
  --_btn-padding-y: var(--ds-btn-padding-y, 0.5rem);
  --_btn-gap: var(--ds-btn-gap, 0.5rem);
  --_btn-transition: var(--ds-btn-transition, 150ms ease);
  
  /* State colors (computed from base by default, but overridable) */
  --_btn-bg-hover: var(--ds-btn-bg-hover, color-mix(in oklch, var(--_btn-bg), white 15%));
  --_btn-bg-active: var(--ds-btn-bg-active, color-mix(in oklch, var(--_btn-bg), black 10%));
  --_btn-border-hover: var(--ds-btn-border-hover, var(--_btn-border));
  --_btn-fg-hover: var(--ds-btn-fg-hover, var(--_btn-fg));
  
  /* Focus ring */
  --_btn-ring-width: var(--ds-btn-ring-width, 2px);
  --_btn-ring-offset: var(--ds-btn-ring-offset, 2px);
  --_btn-ring-color: var(--ds-btn-ring-color, currentColor);

  /* Layout */
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--_btn-gap);
  padding: var(--_btn-padding-y) var(--_btn-padding-x);
  
  /* Typography */
  font-family: var(--_btn-font);
  font-size: var(--_btn-font-size);
  font-weight: var(--_btn-font-weight);
  line-height: var(--_btn-line-height);
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  
  /* Appearance */
  background: var(--_btn-bg);
  color: var(--_btn-fg);
  border: 1px solid var(--_btn-border);
  border-radius: var(--_btn-radius);
  
  /* Behavior */
  cursor: pointer;
  user-select: none;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  transition:
    background-color var(--_btn-transition),
    border-color var(--_btn-transition),
    color var(--_btn-transition),
    box-shadow var(--_btn-transition),
    opacity var(--_btn-transition);
}

/* Remove default button styles */
.ds-btn:where(button) {
  appearance: none;
  -webkit-appearance: none;
}

/* --------------------------------------------------------------------------
   STATES
   -------------------------------------------------------------------------- */

.ds-btn:hover:not(:disabled):not([aria-disabled="true"]) {
  background: var(--_btn-bg-hover);
  border-color: var(--_btn-border-hover);
  color: var(--_btn-fg-hover);
}

.ds-btn:active:not(:disabled):not([aria-disabled="true"]) {
  background: var(--_btn-bg-active);
}

.ds-btn:focus-visible {
  outline: var(--_btn-ring-width) solid var(--_btn-ring-color);
  outline-offset: var(--_btn-ring-offset);
}

.ds-btn:disabled,
.ds-btn[aria-disabled="true"] {
  opacity: var(--ds-btn-disabled-opacity, 0.5);
  cursor: not-allowed;
  pointer-events: none;
}

/* --------------------------------------------------------------------------
   VARIANTS
   -------------------------------------------------------------------------- */

.ds-btn--solid {
  --_btn-bg: var(--ds-btn-solid-bg, var(--ds-color-primary, #18181b));
  --_btn-fg: var(--ds-btn-solid-fg, var(--ds-color-on-primary, #fafafa));
}

.ds-btn--outline {
  --_btn-bg: transparent;
  --_btn-fg: var(--ds-btn-outline-fg, var(--ds-color-primary, #18181b));
  --_btn-border: var(--ds-btn-outline-border, currentColor);
  --_btn-bg-hover: var(--ds-btn-outline-bg-hover, color-mix(in oklch, var(--_btn-fg), transparent 90%));
}

.ds-btn--ghost {
  --_btn-bg: transparent;
  --_btn-fg: var(--ds-btn-ghost-fg, var(--ds-color-primary, #18181b));
  --_btn-border: transparent;
  --_btn-bg-hover: var(--ds-btn-ghost-bg-hover, color-mix(in oklch, var(--_btn-fg), transparent 90%));
}

.ds-btn--link {
  --_btn-bg: transparent;
  --_btn-fg: var(--ds-btn-link-fg, var(--ds-color-primary, #2563eb));
  --_btn-border: transparent;
  --_btn-padding-x: 0;
  --_btn-padding-y: 0;
  --_btn-bg-hover: transparent;
  --_btn-fg-hover: var(--ds-btn-link-fg-hover, color-mix(in oklch, var(--_btn-fg), black 20%));
  text-decoration: underline;
  text-underline-offset: 2px;
}

/* --------------------------------------------------------------------------
   SIZES
   -------------------------------------------------------------------------- */

.ds-btn--xs {
  --_btn-font-size: var(--ds-btn-xs-font-size, 0.75rem);
  --_btn-padding-x: var(--ds-btn-xs-padding-x, 0.5rem);
  --_btn-padding-y: var(--ds-btn-xs-padding-y, 0.25rem);
  --_btn-gap: var(--ds-btn-xs-gap, 0.25rem);
}

.ds-btn--sm {
  --_btn-font-size: var(--ds-btn-sm-font-size, 0.8125rem);
  --_btn-padding-x: var(--ds-btn-sm-padding-x, 0.75rem);
  --_btn-padding-y: var(--ds-btn-sm-padding-y, 0.375rem);
  --_btn-gap: var(--ds-btn-sm-gap, 0.375rem);
}

.ds-btn--md {
  --_btn-font-size: var(--ds-btn-md-font-size, 0.875rem);
  --_btn-padding-x: var(--ds-btn-md-padding-x, 1rem);
  --_btn-padding-y: var(--ds-btn-md-padding-y, 0.5rem);
  --_btn-gap: var(--ds-btn-md-gap, 0.5rem);
}

.ds-btn--lg {
  --_btn-font-size: var(--ds-btn-lg-font-size, 1rem);
  --_btn-padding-x: var(--ds-btn-lg-padding-x, 1.25rem);
  --_btn-padding-y: var(--ds-btn-lg-padding-y, 0.625rem);
  --_btn-gap: var(--ds-btn-lg-gap, 0.5rem);
}

.ds-btn--xl {
  --_btn-font-size: var(--ds-btn-xl-font-size, 1.125rem);
  --_btn-padding-x: var(--ds-btn-xl-padding-x, 1.5rem);
  --_btn-padding-y: var(--ds-btn-xl-padding-y, 0.75rem);
  --_btn-gap: var(--ds-btn-xl-gap, 0.625rem);
}

/* --------------------------------------------------------------------------
   MODIFIERS
   -------------------------------------------------------------------------- */

/* Block (full-width) */
.ds-btn.is-block {
  display: flex;
  width: 100%;
}

/* Icon-only: square button */
.ds-btn--icon-only {
  --_size: calc(
    (var(--_btn-font-size) * var(--_btn-line-height)) +
    (var(--_btn-padding-y) * 2) +
    2px /* border */
  );
  width: var(--_size);
  height: var(--_size);
  padding: 0;
}

/* --------------------------------------------------------------------------
   INNER STRUCTURE
   -------------------------------------------------------------------------- */

.ds-btn__inner {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: inherit;
}

.ds-btn__inner.is-invisible {
  visibility: hidden;
}

.ds-btn__content {
  display: inline-flex;
  align-items: center;
}

.ds-btn__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 1em;
  height: 1em;
  font-size: 1.2em; /* Slightly larger than text for visual balance */
}

.ds-btn__icon > :deep(svg) {
  width: 100%;
  height: 100%;
}

/* --------------------------------------------------------------------------
   LOADING STATE
   -------------------------------------------------------------------------- */

.ds-btn__loader {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ds-btn__spinner {
  --_spinner-size: 1.25em;
  --_spinner-width: 2px;
  --_spinner-color: currentColor;
  
  width: var(--_spinner-size);
  height: var(--_spinner-size);
  border: var(--_spinner-width) solid color-mix(in oklch, var(--_spinner-color), transparent 75%);
  border-top-color: var(--_spinner-color);
  border-radius: 50%;
  animation: ds-btn-spin 0.6s linear infinite;
}

@keyframes ds-btn-spin {
  to { transform: rotate(360deg); }
}

.ds-btn.is-loading {
  cursor: wait;
}
</style>
