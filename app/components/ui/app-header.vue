<script setup lang="ts">
const { isDark, toggleTheme } = useTheme();
const route = useRoute();

// Navigation items with active state logic
const navigationItems = [
  {
    name: "Components",
    path: "/components",
    isActive: () => route.path.startsWith("/components"),
  },
  {
    name: "Releases",
    path: "/releases",
    isActive: () => route.path.startsWith("/releases"),
  },
];

// Function to get the correct variant based on active state
function getButtonVariant(item: typeof navigationItems[0]) {
  return item.isActive() ? "secondary" : "ghost";
}
</script>

<template>
  <main class="sticky top-0 flex justify-between items-center min-w-full bg-white dark:bg-black px-8 py-4 z-50">
    <NuxtLink
      to="/"
      class="text-2xl font-bold text-black dark:text-white hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
    >
      REGO
    </NuxtLink>
    <section class="flex gap-4">
      <NuxtLink
        v-for="item in navigationItems"
        :key="item.path"
        :to="item.path"
      >
        <DsButton :variant="getButtonVariant(item)">
          {{ item.name }}
        </DsButton>
      </NuxtLink>
    </section>
    <DsButton size="sm" @click="toggleTheme">
      <template v-if="isDark">
        Switch to light mode
      </template>
      <template v-else>
        Switch to dark mode
      </template>
    </DsButton>
  </main>
</template>
