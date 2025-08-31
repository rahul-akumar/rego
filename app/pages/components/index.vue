<script setup lang="ts">
const { componentsByCategory } = useComponents();

// Set page title
useHead({
  title: "Components -",
});

// Category display configuration
const categoryConfig: Record<string, { name: string; order: number }> = {
  "form": { name: "Form components", order: 1 },
  "feedback": { name: "Feedback components", order: 2 },
  "data-display": { name: "Data display", order: 3 },
  "navigation": { name: "Navigation", order: 4 },
  "chart": { name: "Chart components", order: 5 },
  "other": { name: "Other components", order: 999 },
};
</script>

<template>
  <UiDocs
    title="Components"
    description="Entire list of components available on REGO."
  >
    <div
      v-for="[categoryKey, components] in Object.entries(componentsByCategory).sort(([a], [b]) =>
        (categoryConfig[a]?.order || 999) - (categoryConfig[b]?.order || 999),
      )"
      :key="categoryKey"
      class="mb-12"
    >
      <h2 class="text-2xl font-semibold mb-6 text-black dark:text-white/80">
        {{ categoryConfig[categoryKey]?.name || categoryKey }}
      </h2>

      <div class="flex flex-wrap gap-6">
        <NuxtLink
          v-for="comp in components"
          :key="comp.path"
          :to="comp.path"
          class="w-full border rounded p-4 hover:bg-card/50 transition-shadow dark:border-gray-700 dark:hover:border-gray-600"
        >
          <div class="flex justify-between items-start mb-3">
            <h3 class="text-xl font-semibold text-black dark:text-white">
              {{ comp.name }}
            </h3>
            <DsBadge v-if="comp.isNew">
              New
            </DsBadge>
          </div>
          <p class="text-gray-600 dark:text-gray-400 text-black dark:text-white/70">
            {{ comp.description || `${comp.name} component documentation and examples.` }}
          </p>
        </NuxtLink>
      </div>
    </div>
  </UiDocs>
</template>
