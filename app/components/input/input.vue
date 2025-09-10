<script setup lang="ts">
import { computed } from "vue";

import type { InputEmits, InputProps } from "./types";

import { inputVariants } from "./variants";

const props = withDefaults(defineProps<InputProps>(), {
  type: "text",
  disabled: false,
  size: "default",
});

const emit = defineEmits<InputEmits>();

const inputClasses = computed(() => {
  return cn(
    inputVariants({
      size: props.size,
    }),
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
  </div>
</template>
