<!-- filepath: app/components/ui/component-preview.vue -->
<script setup lang="ts">
type Props = {
  align?: "center" | "start" | "end";
  hideCode?: boolean;
  class?: string;
  code?: string;
};

const props = withDefaults(defineProps<Props>(), {
  align: "center",
  hideCode: false,
});

const alignmentClasses = computed(() => {
  const alignMap = {
    center: "justify-center",
    start: "justify-start",
    end: "justify-end",
  };
  return alignMap[props.align];
});

const previewClasses = computed(() => cn(
  "flex min-h-[200px] w-full items-center p-10 border rounded-lg bg-card gap-4",
  alignmentClasses.value,
  props.class,
));
</script>

<template>
  <div class="space-y-4">
    <!-- Component Preview Frame -->
    <div :class="previewClasses">
      <slot />
    </div>

    <!-- Code Preview (if provided and not hidden) -->
    <div v-if="!hideCode && code" class="relative">
      <div class="bg-muted rounded-lg">
        <div class="flex items-center justify-between px-4 py-2 border-b">
          <span class="text-sm font-medium">Code</span>
          <button class="text-sm text-muted-foreground hover:text-foreground">
            Copy
          </button>
        </div>
        <div class="p-4">
          <pre class="text-sm overflow-x-auto"><code>{{ code }}</code></pre>
        </div>
      </div>
    </div>
  </div>
</template>
