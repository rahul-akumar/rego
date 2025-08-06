<script lang="ts" setup>
const route = useRoute();
const { data: releases } = await useAsyncData(route.path, () => {
  return queryCollection("releases").order("date", "DESC").all();
});
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <div class="mb-8">
      <h1 class="text-4xl font-bold mb-4">
        Release Notes
      </h1>
      <p class="text-gray-600 text-lg">
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
        v-for="releases in releases"
        :key="releases.path"
        class="border rounded-lg p-6 hover:shadow-lg transition-shadow"
      >
        <NuxtLink :to="releases.path" class="block group">
          <div class="flex justify-between items-start mb-3">
            <h2 class="text-2xl font-semibold group-hover:text-blue-600 transition-colors">
              {{ releases.title }}
            </h2>
            <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              {{ releases.version }}
            </span>
          </div>

          <p class="text-gray-600 mb-4">
            Released on {{ new Date(releases.date).toLocaleDateString() }}
          </p>

          <div v-if="releases.description" class="text-gray-700 mb-4">
            {{ releases.description }}
          </div>

          <p class="text-blue-600 group-hover:text-blue-800 font-medium">
            Read release notes →
          </p>
        </NuxtLink>
      </article>
    </div>
  </div>
</template>
