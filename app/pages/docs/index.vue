<template>
  <div>
    <PageHeader v-if="doc" :title="doc.title" :description="doc.description" />

    <article class="prose prose-sm max-w-none">
      <ContentRenderer v-if="doc" :value="doc" />
      <div v-else>
        <h1 class="text-black">Not found</h1>
        <p class="text-black">This page doesn’t exist yet.</p>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
// * Fetch the docs landing markdown: /content/docs/index.md -> /docs
// -------------------------------------------------
const { data: doc } = await useAsyncData(
  () => 'doc:/docs',
  () => queryCollection('content').path('/docs').first()
)
</script>