<script setup lang="ts">
import { computed, useSlots } from "vue";

import type { InputEmits, InputProps } from "./types";

import { inputVariants } from "./variants";

const props = withDefaults(defineProps<InputProps>(), {
  type: "text",
  disabled: false,
  size: "default",
});

const emit = defineEmits<InputEmits>();

const slots = useSlots();

const hasPrefix = computed(() => !!slots.prefix);
const hasSuffix = computed(() => !!slots.suffix);

const sizePaddingLeft: Record<NonNullable<InputProps["size"]>, string> = {
  sm: "pl-8",
  default: "pl-10",
  lg: "pl-11",
};
const sizePaddingRight: Record<NonNullable<InputProps["size"]>, string> = {
  sm: "pr-8",
  default: "pr-10",
  lg: "pr-11",
};

const inputClasses = computed(() => {
  return cn(
    inputVariants({
      size: props.size,
    }),
    hasPrefix.value && sizePaddingLeft[props.size ?? "default"],
    hasSuffix.value && sizePaddingRight[props.size ?? "default"],
    props.class,
  );
});

function handleInput(event: Event) {
  const target = event.target as HTMLInputElement;
  const value = props.type === "number" ? Number(target.value) : target.value;
  emit("update:modelValue", value);
  emit("input", event);
}
function handleChange(event: Event) {
  emit("change", event);
}

function handleFocus(event: FocusEvent) {
  emit("focus", event);
}

function handleBlur(event: FocusEvent) {
  emit("blur", event);
}

function handleKeydown(event: KeyboardEvent) {
  emit("keydown", event);
}

function handleKeyup(event: KeyboardEvent) {
  emit("keyup", event);
}
</script>

<template>
  <div class="flex flex-col gap-1.5">
    <label v-if="label" :for="id" class="text-sm font-medium text-primary">
      {{ label }}
    </label>
    <div class="relative">
      <div v-if="$slots.prefix" class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-primary/50 ">
        <slot name="prefix" />
      </div>
      <input
        :id="id"
        :name="name"
        :value="modelValue"
        :placeholder="placeholder"
        :type="type"
        :disabled="disabled"
        :required="required"
        :readonly="readonly"
        :autocomplete="autocomplete"
        :min="min"
        :max="max"
        :step="step"
        :pattern="pattern"
        :maxlength="maxlength"
        :minlength="minlength"
        :class="inputClasses"
        v-bind="$attrs"
        @input="handleInput"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
        @keydown="handleKeydown"
        @keyup="handleKeyup"
      >
      <div v-if="$slots.suffix" class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-primary/50">
        <slot name="suffix" />
      </div>
    </div>
  </div>
</template>
