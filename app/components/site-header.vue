<template>
  <div class="sticky top-0 w-full h-16 px-4 flex items-center justify-between bg-transparent backdrop-blur-sm z-50">
    <div id="left" class="flex items-center gap-3 px-2">
      <NuxtLink to="/" class="text-black font-medium mr-4"> rego </NuxtLink>
      <!-- * PRIMARY NAV: Quick links to Home and Docs -->
      <NuxtLink to="/docs" exact-active-class="text-black"
        class="text-zinc-700 hover:text-black px-2 py-1 rounded text-sm">
        Docs
      </NuxtLink>
      <NuxtLink to="/components" exact-active-class="text-black"
        class="text-zinc-700 hover:text-black px-2 py-1 rounded text-sm">
        Components
      </NuxtLink>
    </div>
    <div id="right" class="flex items-center gap-2 px-2">
      <!-- Theme toggle -->
      <UiButton variant="ghost" size="sm" :aria-pressed="isDark" aria-label="Toggle color theme" @click="toggle()">
        <template #start>
          <Icon v-if="isDark" name="lucide:sun" />
          <Icon v-else name="lucide:moon" />
        </template>
      </UiButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from "#imports";
// * HEADER: Top bar with primary navigation on the left
// -------------------------------------------------
const { isDark, toggle } = useTheme();
</script>
