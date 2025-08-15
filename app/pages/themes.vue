<script setup lang="ts">
const styles = {
  inspectFrame:
    "flex flex-col gap-6 w-full h-80 p-6 flex items-center justify-center rounded border bg-neutral-500/10 border-neutral-100 dark:border-neutral-900",
  techCard:
    "p-4 rounded border bg-black/5 dark:bg-white/5 border-black/5 dark:border-white/5 hover:border-black/10 dark:hover:border-white/10 transition-colors",
  colorSwatch:
    "size-14 rounded-lg border border-black/10 dark:border-white/10 flex-shrink-0",
  themePreview:
    "p-6 rounded-lg border space-y-4 transition-colors duration-200",
};

const colorPalette = [
  {
    name: "Neutral Scale",
    description: "Primary grayscale colors for backgrounds, text, and borders",
    colors: [
      { name: "neutral-50", light: "#fafafa", dark: "#0a0a0a" },
      { name: "neutral-100", light: "#f5f5f5", dark: "#171717" },
      { name: "neutral-200", light: "#e5e5e5", dark: "#262626" },
      { name: "neutral-300", light: "#d4d4d4", dark: "#404040" },
      { name: "neutral-400", light: "#a3a3a3", dark: "#525252" },
      { name: "neutral-500", light: "#737373", dark: "#737373" },
      { name: "neutral-600", light: "#525252", dark: "#a3a3a3" },
      { name: "neutral-700", light: "#404040", dark: "#d4d4d4" },
      { name: "neutral-800", light: "#262626", dark: "#e5e5e5" },
      { name: "neutral-900", light: "#171717", dark: "#f5f5f5" },
    ],
  },
  {
    name: "Brand & Accent Colors",
    description: "Semantic colors for actions, states, and branding",
    colors: [
      { name: "blue-500", light: "#3b82f6", dark: "#60a5fa", usage: "Primary actions" },
      { name: "purple-500", light: "#8b5cf6", dark: "#a78bfa", usage: "Secondary features" },
      { name: "green-500", light: "#22c55e", dark: "#4ade80", usage: "Success states" },
      { name: "yellow-500", light: "#eab308", dark: "#facc15", usage: "Warnings" },
      { name: "red-500", light: "#ef4444", dark: "#f87171", usage: "Errors" },
    ],
  },
];

definePageMeta({
  layout: "full-width",
});
</script>

<template>
  <div class="flex flex-col pt-8 gap-10">
    <!-- Header Section -->
    <section class="flex-col">
      <h1 class="text-3xl pb-1 font-bold text-foreground">
        Themes
      </h1>
      <p class="text-neutral-300 text-md">
        Explore REGO's comprehensive theming system with light and dark mode support
      </p>
    </section>

    <!-- Theme Overview -->
    <section class="space-y-4">
      <!-- Color Palette -->
      <section class="space-y-6">
        <div
          v-for="palette in colorPalette"
          :key="palette.name"
          class="space-y-4"
        >
          <div>
            <h3 class="text-lg font-semibold text-black dark:text-white mb-1">
              {{ palette.name }}
            </h3>
            <p class="text-sm text-neutral-600 dark:text-neutral-400">
              {{ palette.description }}
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            <div
              v-for="color in palette.colors"
              :key="color.name"
              :class="styles.techCard"
            >
              <div class="flex items-center gap-3 mb-3">
                <div class="flex gap-1">
                  <div
                    :class="styles.colorSwatch"
                    :style="{ backgroundColor: color.light }"
                    :title="`Light: ${color.light}`"
                  />
                  <div
                    v-if="color.dark"
                    :class="styles.colorSwatch"
                    :style="{ backgroundColor: color.dark }"
                    :title="`Dark: ${color.dark}`"
                  />
                </div>
                <div class="min-w-0 flex-1">
                  <h4 class="font-medium text-sm text-black dark:text-white">
                    {{ color.name }}
                  </h4>
                  <p class="text-xs text-neutral-500 font-mono">
                    {{ color.light }}
                  </p>
                  <p v-if="color.dark" class="text-xs text-neutral-500 font-mono">
                    {{ color.dark }}
                  </p>
                </div>
              </div>
              <p v-if="color.usage" class="text-xs text-neutral-600 dark:text-neutral-400">
                {{ color.usage }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Component Showcase -->
      <section class="space-y-4">
        <h2 class="text-2xl font-medium text-black dark:text-white">
          Component Examples
        </h2>
        <p class="text-neutral-600 dark:text-neutral-400 max-w-2xl">
          See how your components look across different themes. Toggle your system theme to see the automatic adaptation.
        </p>

        <div :class="styles.inspectFrame">
          <DsButton>Inspect</DsButton>
          <DsInput placeholder="Placeholder" />
        </div>
      </section>
    </section>
  </div>
</template>
