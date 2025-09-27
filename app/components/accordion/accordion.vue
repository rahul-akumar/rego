<script setup lang="ts">
import { computed, provide, ref, watch } from "vue";

// Accordion API
// - type: 'single' | 'multiple'
// - v-model: string | string[] | null
// - defaultValue: initial uncontrolled value
// - collapsible: allow closing last item in single mode
// - disabled: disables all interaction
// - class: extra classes on root

type AccordionType = "single" | "multiple";

export type AccordionModel = string | string[] | null;

type AccordionProps = {
  type?: AccordionType;
  modelValue?: AccordionModel;
  defaultValue?: AccordionModel;
  collapsible?: boolean;
  disabled?: boolean;
  class?: string;
};

const props = withDefaults(defineProps<AccordionProps>(), {
  type: "single",
  collapsible: true,
  disabled: false,
});

const emit = defineEmits<{
  (e: "update:modelValue", value: AccordionModel): void;
  (e: "change", value: AccordionModel): void;
}>();

const isControlled = computed(() => props.modelValue !== undefined);

// Uncontrolled state
const uncontrolled = ref<AccordionModel>(
  props.defaultValue !== undefined
    ? props.defaultValue
    : props.type === "multiple"
      ? ([] as string[])
      : null,
);

const value = computed<AccordionModel>({
  get() {
    return isControlled.value ? props.modelValue! : uncontrolled.value;
  },
  set(v) {
    if (!isControlled.value)
      uncontrolled.value = v;
    emit("update:modelValue", v);
    emit("change", v);
  },
});

watch(
  () => props.type,
  (next) => {
    // Normalize state when switching modes
    if (next === "single") {
      // Convert array -> first item or null
      if (Array.isArray(value.value)) {
        value.value = value.value.length ? (value.value[0] ?? null) : null;
      }
    }
    else {
      // Convert scalar -> array
      if (!Array.isArray(value.value)) {
        value.value = value.value ? [value.value] : [];
      }
    }
  },
);

const idBase = `accordion-${Math.random().toString(36).slice(2)}`;

function getTriggerId(v: string) {
  return `${idBase}-trigger-${v}`;
}

function getContentId(v: string) {
  return `${idBase}-content-${v}`;
}

function isOpen(v: string) {
  if (props.type === "single") {
    return (value.value as string | null) === v;
  }
  const list = (value.value as string[]) || [];
  return Array.isArray(list) && list.includes(v);
}

function toggle(v: string) {
  if (props.disabled)
    return;
  if (props.type === "single") {
    const curr = value.value as string | null;
    if (curr === v) {
      if (props.collapsible)
        value.value = null;
      // else do nothing (cannot collapse the last open)
    }
    else {
      value.value = v;
    }
  }
  else {
    const list = Array.isArray(value.value) ? [...(value.value as string[])] : [];
    const idx = list.indexOf(v);
    if (idx === -1)
      list.push(v);
    else list.splice(idx, 1);
    value.value = list;
  }
}

// Provide context for items
export type AccordionContext = {
  type: AccordionType;
  disabled: boolean;
  isOpen: (v: string) => boolean;
  toggle: (v: string) => void;
  getTriggerId: (v: string) => string;
  getContentId: (v: string) => string;
};

const ctx: AccordionContext = {
  type: props.type,
  disabled: props.disabled,
  isOpen,
  toggle,
  getTriggerId,
  getContentId,
};

provide("accordion", ctx);
</script>

<template>
  <div
    :class="cn(
      'w-full divide-y divide-border text-foreground justify-center',
      props.class,
    )"
    data-slot="accordion"
  >
    <slot />
  </div>
</template>
