<script setup lang="ts">
const { isDark, toggleTheme } = useTheme();
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
      <NuxtLink to="/about">
        <DsButton variant="ghost">
          Playground
        </DsButton>
      </NuxtLink>
      <NuxtLink to="/">
        <DsButton variant="ghost">
          Components
        </DsButton>
      </NuxtLink>
      <NuxtLink to="/releases">
        <DsButton variant="ghost">
          Releases
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
