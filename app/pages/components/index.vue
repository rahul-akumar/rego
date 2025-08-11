<script setup lang="ts">
const { componentsByCategory } = useComponents();

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
  <div class="container mx-auto px-4 py-8">
    <div class="mb-8">
      <h1 class="text-4xl font-bold mb-4">
        Components
      </h1>
      <p class="text-gray-600 dark:text-gray-400 text-lg">
        Browse and explore all available REGO components organized by category.
      </p>
    </div>

    <div
      v-for="[categoryKey, components] in Object.entries(componentsByCategory).sort(([a], [b]) =>
        (categoryConfig[a]?.order || 999) - (categoryConfig[b]?.order || 999),
      )"
      :key="categoryKey"
      class="mb-12"
    >
      <h2 class="text-2xl font-semibold mb-6">
        {{ categoryConfig[categoryKey]?.name || categoryKey }}
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <NuxtLink
          v-for="comp in components"
          :key="comp.path"
          :to="comp.path"
          class="border rounded-lg p-6 hover:shadow-lg transition-shadow dark:border-gray-700 dark:hover:border-gray-600"
        >
          <div class="flex justify-between items-start mb-3">
            <h3 class="text-xl font-semibold">
              {{ comp.name }}
            </h3>
            <DsBadge v-if="comp.isNew" variant="outlined">
              New
            </DsBadge>
          </div>
          <p class="text-gray-600 dark:text-gray-400">
            {{ comp.description || `${comp.name} component documentation and examples.` }}
          </p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
