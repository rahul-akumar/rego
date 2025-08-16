<script setup lang="ts">
import { SunMoon } from "lucide-vue-next";

const { colorTheme, cycleTheme, toggleMode } = useTheme();
const route = useRoute();

// Navigation items with active state logic
const navigationItems = [
  {
    name: "Components",
    path: "/components",
    isActive: () => route.path.startsWith("/components"),
  },
  {
    name: "Themes",
    path: "/themes",
    isActive: () => route.path.startsWith("/themes"),
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
  <main class="sticky top-0 flex justify-between items-center min-w-full bg-background/10 backdrop-blur-md px-8 py-4 z-50">
    <NuxtLink
      to="/"
      class="text-2xl flex gap-2 font-bold text-black dark:text-white hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
    >
      <img
        src="/logo.svg"
        alt="Logo"
        class="size-8"
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
    <div class="flex gap-2">
      <!-- Theme Cycle Button -->
      <DsButton size="sm" title="Cycle through color themes" @click="cycleTheme">
        {{ colorTheme }}
      </DsButton>

      <!-- Dark Mode Toggle Button -->
      <DsButton size="sm" title="Toggle mode" @click="toggleMode">
        <SunMoon class="size-4" />
      </DsButton>
    </div>
  </main>
</template>
