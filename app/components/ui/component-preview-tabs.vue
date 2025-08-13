<!-- filepath: app/components/ui/component-preview-tabs.vue -->
<script setup lang="ts">
import { ref } from "vue";

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

const activeTab = ref("preview");

const alignmentClasses = computed(() => {
  const alignMap = {
    center: "items-center",
    start: "items-start",
    end: "items-end",
  };
  return alignMap[props.align];
});

const previewClasses = computed(() => cn(
  "preview flex h-[450px] w-full justify-center p-10 gap-4",
  alignmentClasses.value,
));

const containerClasses = computed(() => cn(
  "group relative mt-4 mb-12 flex flex-col gap-2",
  props.class,
));

async function copyCode() {
  if (props.code) {
    try {
      await navigator.clipboard.writeText(props.code);
      // You can add a toast notification here
      console.warn("Code copied to clipboard!");
    }
    catch (error) {
      console.error("Failed to copy code:", error);
    }
  }
}
</script>

<template>
  <div :class="containerClasses" v-bind="$attrs">
    <!-- Tabs Navigation -->
    <div class="relative mr-auto w-full">
      <div class="flex items-center justify-between">
        <div
          v-if="!hideCode"
          class="justify-start gap-4 rounded-none bg-transparent px-2 md:px-0 flex"
        >
          <button
            :class="cn(
              'text-muted-foreground px-0 text-base transition-colors',
              activeTab === 'preview'
                ? 'text-foreground'
                : 'hover:text-foreground',
            )"
            @click="activeTab = 'preview'"
          >
            Preview
          </button>
          <button
            :class="cn(
              'text-muted-foreground px-0 text-base transition-colors',
              activeTab === 'code'
                ? 'text-foreground'
                : 'hover:text-foreground',
            )"
            @click="activeTab = 'code'"
          >
            Code
          </button>
        </div>
      </div>
    </div>

    <!-- Content Container -->
    <div
      :class="cn(
        'relative rounded-lg border bg-card md:-mx-1',
        activeTab === 'code' ? 'border-code' : '',
      )"
    >
      <!-- Preview Tab -->
      <div
        v-show="activeTab === 'preview'"
        data-slot="preview"
      >
        <div :class="previewClasses">
          <slot />
        </div>
      </div>

      <!-- Code Tab -->
      <div
        v-show="activeTab === 'code'"
        data-slot="code"
        class="inset-0 overflow-hidden"
      >
        <div class="h-[450px] relative">
          <div class="bg-card rounded-lg h-full flex flex-col">
            <!-- Code Header -->
            <div class="flex items-center justify-between px-4 py-2 border-b">
              <span class="text-sm font-medium">Code</span>
              <button
                class="text-sm text-muted-foreground hover:text-foreground transition-colors"
                @click="copyCode"
              >
                Copy
              </button>
            </div>

            <!-- Code Content -->
            <div class="flex-1 overflow-auto">
              <pre class="p-4 text-sm h-full"><code>{{ code }}</code></pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
