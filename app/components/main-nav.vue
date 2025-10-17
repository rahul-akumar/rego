<template>
  <nav class="flex flex-col min-h-full w-60 bg-transparent px-4 py-3">
    <!-- * HEADER: Shows which section we’re in (Docs, Components, etc.) -->
    <p class="text-sm px-2 mb-2 opacity-70">
      {{ section ? capitalize(section) : 'Navigation' }}
    </p>

    <!-- * LOADING STATE: Lightweight skeleton while content loads -->
    <ul v-if="pending" class="space-y-1 animate-pulse">
      <li v-for="i in 4" :key="i" class="h-5 rounded bg-white/10" />
    </ul>

    <!-- * NAV LIST: Render items for the current section -->
    <ul v-else class="space-y-1">
      <li v-for="item in items" :key="item.path">
        <NuxtLink
          :to="item.path"
          class="block rounded px-2 py-1 text-sm transition-colors"
          :class="isActive(item) ? 'bg-black/10' : 'text-black/80 hover:text-black hover:bg-black/5'"
        >
          {{ item.title ?? fallbackTitle(item.path) }}
        </NuxtLink>
      </li>

      <!-- ? Empty state when section has no items yet -->
      <li v-if="!items.length" class="px-2 py-1 text-sm text-black/60">
        No documents found for this section.
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
// * MAIN NAV: Auto-updates from @nuxt/content based on current route section
// -------------------------------------------------
const route = useRoute()
const { section, items, pending } = await useSectionNav(['docs', 'components'])

// * UTILS: Title fallback from path segment
const fallbackTitle = (path: string) => {
  const seg = path.split('/').filter(Boolean).pop() || ''
  return seg.replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
}

// * ACTIVE STATE: Highlight current page in the list
const isActive = (item: { path: string }) => {
  return route.path === item.path
}

// * UI helper
const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)
</script>
