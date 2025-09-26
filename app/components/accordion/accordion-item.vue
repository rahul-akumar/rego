<script setup lang="ts">
import { ChevronDown } from "lucide-vue-next";
import { computed, inject } from "vue";

type Props = {
  value: string;
  title?: string;
  disabled?: boolean;
  class?: string;
  contentClass?: string;
};

const props = withDefaults(defineProps<Props>(), {
  title: "",
  disabled: false,
  class: "",
  contentClass: "",
});

// Consume context from Accordion root
const ctx = inject<any>("accordion", null);

if (!ctx) {
  console.warn("AccordionItem must be used inside an <Accordion> root component.");
}

const isDisabled = computed(() => Boolean(ctx?.disabled || props.disabled));
const open = computed<boolean>(() => (ctx ? ctx.isOpen(props.value) : false));
const triggerId = computed<string>(() => (ctx ? ctx.getTriggerId(props.value) : ""));
const contentId = computed<string>(() => (ctx ? ctx.getContentId(props.value) : ""));

function onToggle() {
  if (isDisabled.value || !ctx)
    return;
  ctx.toggle(props.value);
}
</script>

<template>
  <div :class="cn('group/accordion-item w-full', props.class)">
    <!-- Trigger -->
    <button
      :id="triggerId"
      :class="cn(
        'group/accordion-trigger flex w-full items-center justify-between gap-2 px-4 py-3 text-left text-sm font-medium outline-none rounded-md transition-colors hover:underline focus-visible:ring-2 focus-visible:ring-ring',
        isDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
      )"
      :aria-expanded="open ? 'true' : 'false'"
      :aria-controls="contentId"
      :data-state="open ? 'open' : 'closed'"
      type="button"
      @click="onToggle"
    >
      <div class="flex min-w-0 items-center gap-2">
        <span class="truncate">{{ props.title }}</span>
      </div>
      <ChevronDown class="size-4 shrink-0 transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-180" />
    </button>

    <!-- Content -->
    <div
      :id="contentId"
      role="region"
      :aria-labelledby="triggerId"
      :data-state="open ? 'open' : 'closed'"
      :class="cn(
        'grid transition-all duration-300 ease-out data-[state=closed]:grid-rows-[0fr] data-[state=closed]:opacity-0 data-[state=open]:grid-rows-[1fr] data-[state=open]:opacity-100',
        props.contentClass,
      )"
    >
      <div class="min-h-0 overflow-hidden px-4 pb-4">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>
