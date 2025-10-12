<script setup lang="ts">
import type { VariantProps } from "class-variance-authority";
import type { ClassValue } from "clsx";

import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { computed } from "vue";

const props = withDefaults(defineProps<Props>(), {
  type: "text",
  size: "default",
  disabled: false,
});

const emit = defineEmits<Emits>();

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

const inputVariants = cva(
  "flex h-9 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: { sm: "h-8 text-xs", default: "h-9 text-sm", lg: "h-10 text-base" },
    },
    defaultVariants: { size: "default" },
  },
);

type InputVariants = VariantProps<typeof inputVariants>;

type Props = {
  id?: string;
  modelValue?: string | number;
  type?: string;
  size?: InputVariants["size"];
  disabled?: boolean;
  placeholder?: string;
  class?: string;
  ariaLabel?: string;
};

type Emits = {
  (e: "update:modelValue", value: string | number): void;
  (e: "input", ev: Event): void;
  (e: "change", ev: Event): void;
  (e: "focus", ev: FocusEvent): void;
  (e: "blur", ev: FocusEvent): void;
  (e: "keydown", ev: KeyboardEvent): void;
  (e: "keyup", ev: KeyboardEvent): void;
};

const classes = computed(() => cn(inputVariants({ size: props.size }), props.class));

function onInput(e: Event) {
  const el = e.target as HTMLInputElement;
  const value = props.type === "number" ? Number(el.value) : el.value;
  emit("update:modelValue", value);
  emit("input", e);
}
</script>

<template>
  <div class="relative">
    <div v-if="$slots.prefix" class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground">
      <slot name="prefix" />
    </div>
    <input
      :id="props.id"
      :type="props.type"
      :value="props.modelValue as any"
      :placeholder="props.placeholder"
      :disabled="props.disabled"
      :aria-label="props.ariaLabel"
      :class="classes"
      v-bind="$attrs"
      @input="onInput"
      @change="$emit('change', $event)"
      @focus="$emit('focus', $event)"
      @blur="$emit('blur', $event)"
      @keydown="$emit('keydown', $event)"
      @keyup="$emit('keyup', $event)"
    >
    <div v-if="$slots.suffix" class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-muted-foreground">
      <slot name="suffix" />
    </div>
  </div>
</template>
