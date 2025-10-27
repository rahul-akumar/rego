<template>
  <div class="rounded-2xl border border-gray-200 bg-gray-50 overflow-hidden">
    <!-- Header (optional) -->
    <div
      v-if="title || description"
      class="px-6 py-3 border-b border-neutral-800/10"
    >
      <p v-if="title" class="text-sm font-medium text-black">{{ title }}</p>
      <p v-if="description" class="text-xs text-black/60">{{ description }}</p>
    </div>

    <!-- Preview area: centers the showcased component -->
    <div>
      <div
        class="relative grid place-items-center rounded-lg h-40"
        :style="{
          minHeight:
            typeof minHeight === 'number' ? `${minHeight}px` : minHeight,
          backgroundImage:
            `linear-gradient(45deg, var(--grid-color, rgba(255,255,255,0.06)) 25%, transparent 25%),` +
            `linear-gradient(-45deg, var(--grid-color, rgba(255,255,255,0.06)) 25%, transparent 25%),` +
            `linear-gradient(45deg, transparent 75%, var(--grid-color, rgba(255,255,255,0.06)) 75%),` +
            `linear-gradient(-45deg, transparent 75%, var(--grid-color, rgba(255,255,255,0.06)) 75%)`,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0',
        }"
      >
        <slot />
      </div>
    </div>

    <!-- Usage code (optional) -->
    <div v-if="hasCode" class="px-4 pb-4 border-t border-white/10">
      <div class="flex items-center justify-between">
        <h4 class="text-xs font-medium uppercase tracking-wide text-white/70">
          Usage
        </h4>
        <UiButton
          v-if="showCopyButton"
          size="xs"
          variant="outline"
          :disabled="copied || !code"
          class="text-xs px-2 py-1 rounded border border-white/10 text-white/80 hover:bg-white/5 disabled:opacity-50 disabled:cursor-not-allowed"
          @click="onCopy"
        >
          {{ copied ? "Copied" : "Copy" }}
        </UiButton>
      </div>
      <div class="mt-2">
        <template v-if="code">
          <pre
            class="p-3 overflow-x-auto text-[12px] leading-relaxed text-white/80"
          ><code :class="language ? `language-${language}` : undefined">{{ code }}</code></pre>
        </template>
        <template v-else>
          <div class="p-3">
            <slot name="code" />
          </div>
        </template>
      </div>
    </div>

    <!-- Footer (optional) -->
    <div
      v-if="$slots.footer"
      class="px-4 py-3 border-t border-white/10 bg-neutral-900/40"
    >
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
const slots = useSlots();

interface Props {
  /** Optional title shown in the card header */
  title?: string;
  /** Optional description shown under the title */
  description?: string;
  /** Minimum height for the preview area. Number = px; string accepts any CSS size */
  minHeight?: number | string;
  /** Optional code snippet to display under the preview */
  code?: string;
  /** Language hint for the code block (e.g., 'vue', 'ts', 'js') */
  language?: string;
  /** Optional filename label shown above the code block */
  filename?: string;
  /** Show copy-to-clipboard button when code prop is provided */
  copy?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  title: undefined,
  description: undefined,
  minHeight: 240,
  code: undefined,
  language: "vue",
  filename: undefined,
  copy: true,
});

const hasCode = computed(() => !!props.code || !!slots.code);
const copied = ref(false);

async function onCopy() {
  if (!props.code) return;
  try {
    await navigator.clipboard?.writeText(props.code);
    copied.value = true;
    setTimeout(() => (copied.value = false), 1500);
  } catch {
    // no-op
  }
}

const showCopyButton = computed(() => props.copy && !!props.code);
</script>
