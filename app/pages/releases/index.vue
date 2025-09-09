<script lang="ts" setup>
// Add layout definition
definePageMeta({
  layout: "full-width",
});

// Set page title
useHead({
  title: "Releases -",
});

const route = useRoute();
const { data: releases } = await useAsyncData(route.path, () => {
  return queryCollection("releases").order("date", "DESC").all();
});
</script>

// ...existing template...

<template>
  <div class="">
    <div class="mb-8">
      <h1 class="text-primary text-4xl font-bold mb-4">
        Release Notes
      </h1>
      <p class="text-foreground-secondary text-lg">
        Stay up to date with the latest features, improvements, and bug fixes.
      </p>
    </div>

    <div v-if="!releases || releases.length === 0" class="text-center py-12">
      <p class="text-gray-500 text-lg">
        No releases found.
      </p>
    </div>

    <div v-else class="space-y-6">
      <article
        v-for="release in releases"
        :key="release.path"
        class="border rounded-lg p-4 hover:bg-card"
      >
        <NuxtLink :to="release.path" class="block group">
          <div class="flex justify-between items-start mb-3">
            <h2 class="text-primary text-2xl font-semibold group-hover:text-blue-600  transition-colors">
              {{ release.title }}
            </h2>
            <Badge>
              {{ release.version }}
            </Badge>
          </div>

          <p class="text-foreground-secondary mb-4">
            Released on {{ new Date(release.date).toLocaleDateString() }}
          </p>

          <div v-if="release.description" class="text-foreground-secondary mb-4">
            {{ release.description }}
          </div>

          <Button variant="link" size="sm">
            Read release notes →
          </Button>
        </NuxtLink>
      </article>
    </div>
  </div>
</template>
