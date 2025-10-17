<template>
  <div>
    <PageHeader v-if="doc" :title="doc.title" :description="doc.description" />

    <article class="prose prose-sm max-w-none">
      <ContentRenderer v-if="doc" :value="doc" />
      <div v-else>
        <h1 class="text-white">Not found</h1>
        <p class="text-white">This page doesn’t exist yet.</p>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
// * ROUTE-BINDING: Map /components(/...slug) to /content/components path
// -------------------------------------------------
const route = useRoute()

// * Fetch the current doc based on the route path (e.g., /components/button -> content/components/button.md)
const { data: doc } = await useAsyncData(
  () => `doc:${route.fullPath}`,
  () => queryCollection('content').path(route.path).first(),
  { watch: [() => route.path] }
)
</script>
