<template>
  <div class="sticky top-0 w-full h-16 px-4 flex items-center justify-between bg-transparent backdrop-blur-sm z-50">
    <div id="left" class="flex items-center gap-3 px-2">
      <NuxtLink to="/" class="text-black font-medium mr-4">
        rego
      </NuxtLink>
      <!-- * PRIMARY NAV: Quick links to Home and Docs -->
      <NuxtLink to="/docs" exact-active-class="text-black" class="text-zinc-700 hover:text-black px-2 py-1 rounded text-sm">
        Docs
      </NuxtLink>
      <NuxtLink to="/components" exact-active-class="text-black" class="text-zinc-700 hover:text-black px-2 py-1 rounded text-sm">
        Components
      </NuxtLink>
    </div>
    <div id="right" class="flex items-center px-2">
      <!-- NOTE: Right-side controls (e.g., theme toggle, GitHub link) -->
      <p class="text-zinc-700">header-right</p>
    </div>
  </div>
</template>

<script setup lang="ts">
// * HEADER: Top bar with primary navigation on the left
// -------------------------------------------------
</script>
