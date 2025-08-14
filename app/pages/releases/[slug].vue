<script lang="ts" setup>
// Add layout definition
definePageMeta({
  layout: "full-width",
});

const route = useRoute();
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection("releases").path(route.path).first();
});

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: "Release not found" });
}
</script>

<template>
  <div>
    <div v-if="page" class="prose dark:prose-invert max-w-none">
      <div class="mb-8">
        <NuxtLink to="/releases" class="text-blue-600 hover:text-blue-800 mb-4 inline-block">
          ← Back to all releases
        </NuxtLink>
        <div class="border-b pb-4 mb-6">
          <h1 class="text-4xl font-bold mb-2">
            {{ page.title }}
          </h1>
          <div class="flex gap-4 text-gray-600">
            <span>Version: {{ page.version }}</span>
            <span>Date: {{ new Date(page.date).toLocaleDateString() }}</span>
          </div>
        </div>
      </div>

      <ContentRenderer :value="page" />
    </div>
  </div>
</template>
