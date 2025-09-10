<script setup lang="ts">
import { computed, nextTick, onMounted, ref, watch } from "vue";

import type { PinInputEmits, PinInputProps } from "./types";

import { pinCellVariants } from "./variants";

const props = withDefaults(defineProps<PinInputProps>(), {
  modelValue: "",
  length: 6,
  size: "default",
  mask: false,
  onlyDigits: true,
  disabled: false,
  autoFocus: false,
});

const emit = defineEmits<PinInputEmits>();

const containerClasses = computed(() => {
  return cn("inline-flex items-center gap-2", props.class);
});

const values = ref<string[]>(Array.from({ length: props.length }, () => ""));
const inputRefs = ref<(HTMLInputElement | null)[]>([]);

function setInputRef(el: HTMLInputElement | null, index: number) {
  inputRefs.value[index] = el;
}

function allowedCharsFilter(text: string): string {
  if (!text)
    return "";
  const filtered = props.onlyDigits ? text.replace(/\D+/g, "") : text.replace(/\s+/g, "");
  return filtered;
}

function focusCell(index: number) {
  const target = inputRefs.value[index];
  if (target)
    target.focus();
}

function emitValueAndMaybeComplete() {
  const joined = values.value.join("");
  emit("update:modelValue", joined);
  if (joined.length === props.length)
    emit("complete", joined);
}

function handleInput(event: Event, index: number) {
  const target = event.target as HTMLInputElement;
  const raw = target.value ?? "";
  const filtered = allowedCharsFilter(raw).slice(0, 1);
  values.value[index] = filtered;
  target.value = filtered;
  emitValueAndMaybeComplete();

  if (filtered && index < props.length - 1) {
    nextTick(() => focusCell(index + 1));
  }
}

function handleKeydown(event: KeyboardEvent, index: number) {
  const key = event.key;
  if (key === "Backspace") {
    if (values.value[index]) {
      values.value[index] = "";
      emitValueAndMaybeComplete();
      return;
    }
    if (index > 0) {
      event.preventDefault();
      nextTick(() => focusCell(index - 1));
    }
  }
  else if (key === "ArrowLeft" && index > 0) {
    event.preventDefault();
    nextTick(() => focusCell(index - 1));
  }
  else if (key === "ArrowRight" && index < props.length - 1) {
    event.preventDefault();
    nextTick(() => focusCell(index + 1));
  }
}

function handlePaste(event: ClipboardEvent, startIndex: number) {
  event.preventDefault();
  const text = event.clipboardData?.getData("text") ?? "";
  const filtered = allowedCharsFilter(text).slice(0, props.length - startIndex);
  if (!filtered)
    return;

  for (let i = 0; i < filtered.length; i++) {
    const idx = startIndex + i;
    if (idx < props.length)
      values.value[idx] = filtered.charAt(i);
  }

  emitValueAndMaybeComplete();
  const lastIdx = Math.min(startIndex + filtered.length - 1, props.length - 1);
  nextTick(() => focusCell(lastIdx));
}

watch(
  () => props.modelValue,
  (newVal) => {
    const incoming = (newVal ?? "").toString().slice(0, props.length);
    const nextValues = Array.from({ length: props.length }, (_, i) => incoming[i] ?? "");
    values.value = nextValues;
  },
  { immediate: true },
);

watch(
  () => props.length,
  async (len) => {
    values.value = Array.from({ length: len }, () => "");
    inputRefs.value = Array.from({ length: len }, () => null);
    await nextTick();
    if (props.autoFocus)
      focusCell(0);
  },
);

onMounted(() => {
  if (props.autoFocus)
    focusCell(0);
});
</script>

<template>
  <div :class="containerClasses" :data-disabled="disabled ? '' : undefined">
    <template v-for="(_, index) in values" :key="index">
      <input
        :ref="(el) => setInputRef(el as HTMLInputElement | null, index)"
        :value="values[index]"
        :class="cn(pinCellVariants({ size }), 'px-0', 'font-medium')"
        :type="mask ? 'password' : 'text'"
        :inputmode="onlyDigits ? 'numeric' : 'text'"
        autocomplete="one-time-code"
        autocapitalize="off"
        autocorrect="off"
        spellcheck="false"
        :disabled="disabled"
        maxlength="1"
        aria-label="PIN character"
        v-bind="$attrs"
        @input="(e) => handleInput(e, index)"
        @keydown="(e) => handleKeydown(e, index)"
        @paste="(e) => handlePaste(e, index)"
        @focus="() => emit('focus', index)"
        @blur="() => emit('blur', index)"
      >
    </template>
    <input v-if="name" type="hidden" :name="name" :value="values.join('')">
  </div>
</template>
