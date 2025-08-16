<script setup lang="ts">
import { Eye, EyeOff } from "lucide-vue-next";
import { ref } from "vue";

useHead({
  title: "Themes -",
});

const {
  getAllThemeDefinitions,
  setColorTheme,
  toggleMode,
  colorTheme,
  isDark,
  // getCurrentThemeDefinition,
} = useTheme();

const themeDefinitions = getAllThemeDefinitions();
// const currentTheme = getCurrentThemeDefinition();

const styles = {
  inspectFrame:
    "flex flex-col gap-6 w-full h-80 p-6 flex items-center justify-center rounded border bg-neutral-500/10 border-neutral-100 dark:border-neutral-900",
  themeCard:
    "group relative overflow-hidden rounded-xl bg-white dark:bg-neutral-900 transition-all duration-300 hover:border-neutral-300 dark:hover:border-neutral-700",
  themeHeader:
    "flex justify-between items-center p-6 border-b border-primary/10 bg-primary/50",
  themeContent:
    "p-6",
  colorSwatch:
    "size-12 rounded-md border border-primary/10 flex",
  colorCard:
    "",
  activeTheme:
    "ring-1 ring-primary",
};

const previousThemeId = ref<string | null>(null);

function previewTheme(themeId: string) {
  // Toggle preview:
  // - If this theme is active, restore the previous theme (or "default" if none)
  // - If this theme is not active, remember the current theme on first preview and switch to the selected theme
  if (colorTheme.value === themeId) {
    const fallback = previousThemeId.value ?? "default";
    setColorTheme(fallback as any);
    previousThemeId.value = null;
  }
  else {
    if (previousThemeId.value === null) {
      previousThemeId.value = colorTheme.value as any;
    }
    setColorTheme(themeId as any);
  }
}

function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text);
}

definePageMeta({
  layout: "full-width",
});
</script>

<template>
  <div class="flex flex-col pt-8 gap-10 max-w-7xl mx-auto px-4">
    <!-- Header Section -->
    <section class="flex-col">
      <div class="flex items-center justify-between mb-4">
        <div>
          <h1 class="text-3xl font-bold text-foreground mb-2">
            Theme library
          </h1>
          <p class="text-neutral-600 dark:text-neutral-400 text-md">
            Explore REGO's comprehensive theming system with light and dark mode support
          </p>
        </div>
      </div>
    </section>

    <!-- Themes Grid -->
    <section class="space-y-8">
      <div class="flex flex-col gap-4">
        <div
          v-for="theme in themeDefinitions"
          :key="theme.id"
          :class="[
            styles.themeCard,
            colorTheme === theme.id ? styles.activeTheme : '',
          ]"
        >
          <!-- Theme Header -->
          <div :class="styles.themeHeader">
            <div class="">
              <h3 class="text-xl font-bold text-foreground mb-1">
                {{ theme.name }}
              </h3>
              <p class="text-neutral-600 dark:text-neutral-400 text-sm">
                {{ theme.description }}
              </p>
            </div>
            <div class="flex gap-2">
              <DsButton
                size="sm"
                @click="previewTheme(theme.id)"
              >
                <Eye v-if="colorTheme !== theme.id" class="size-4" />
                <EyeOff v-else class="size-4" />
                {{ colorTheme === theme.id ? 'Hide' : 'Preview' }}
              </DsButton>
              <DsButton
                size="sm"
                @click="toggleMode()"
              >
                Switch mode
              </DsButton>
            </div>
          </div>

          <!-- Theme Content -->
          <div :class="styles.themeContent">
            <!-- Primary Colors Preview -->
            <div class="mb-6">
              <h4 class="text-sm font-semibold text-foreground mb-3">
                Primary Colors
              </h4>
              <div class="flex gap-3">
                <div class="flex flex-col items-center">
                  <div
                    :class="styles.colorSwatch"
                    :style="{ backgroundColor: theme.primary.light }"
                    :title="`Light: ${theme.primary.light}`"
                  />
                  <span class="text-xs text-neutral-500 dark:text-neutral-400 mt-1">Light</span>
                </div>
                <div class="flex flex-col items-center">
                  <div
                    :class="styles.colorSwatch"
                    :style="{ backgroundColor: theme.primary.dark }"
                    :title="`Dark: ${theme.primary.dark}`"
                  />
                  <span class="text-xs text-foreground mt-1">Dark</span>
                </div>
              </div>
            </div>

            <!-- Color Palette -->
            <div>
              <h4 class="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-3">
                {{ isDark ? 'Dark' : 'Light' }} Mode Palette
              </h4>

              <div class="flex flex-wrap gap-4">
                <div
                  v-for="color in isDark ? theme.palette.dark : theme.palette.light"
                  :key="color.name"
                  :class="styles.colorCard"
                  class="cursor-pointer"
                  :title="`Click to copy: ${color.value}`"
                  @click="copyToClipboard(color.value)"
                >
                  <div class="flex items-center gap-3">
                    <div
                      :class="styles.colorSwatch"
                      :style="{ backgroundColor: color.value }"
                      class="!size-8"
                    />
                    <div class="flex-1 min-w-0">
                      <div class="flex items-center gap-2 mb-1">
                        <span class="font-medium text-neutral-900 dark:text-neutral-100 text-sm">
                          {{ color.name }}
                        </span>
                        <span class="text-xs px-2 py-1 rounded bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 font-mono">
                          {{ color.tailwindClass }}
                        </span>
                      </div>
                      <div class="flex flex-col gap-1">
                        <span class="text-xs font-mono text-neutral-600 dark:text-neutral-400">
                          {{ color.value }}
                        </span>
                        <span v-if="color.oklch" class="text-xs font-mono text-neutral-500 dark:text-neutral-500">
                          {{ color.oklch }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Component Showcase -->
    <section class="space-y-6">
      <div>
        <h2 class="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
          Component Preview
        </h2>
        <p class="text-neutral-600 dark:text-neutral-400">
          See how components look with the current theme. Switch themes above to see the changes.
        </p>
      </div>

      <div :class="styles.inspectFrame">
        <div class="flex flex-col items-center gap-4">
          <DsButton>Primary Button</DsButton>
          <DsInput placeholder="Sample input field" class="w-64" />
          <div class="flex gap-2">
            <div class="px-4 py-2 rounded bg-primary text-primary-foreground">
              Primary Card
            </div>
            <div class="px-4 py-2 rounded border border-neutral-300 dark:border-neutral-700 bg-background">
              Secondary Card
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.theme-preview-gradient {
  background: linear-gradient(135deg, var(--primary), var(--background));
}
</style>
