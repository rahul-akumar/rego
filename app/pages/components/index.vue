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
// * Fetch the components landing markdown: /content/components/index.md -> /components
// -------------------------------------------------
const { data: doc } = await useAsyncData(
  () => 'doc:/components',
  () => queryCollection('content').path('/components').first()
)
</script>
