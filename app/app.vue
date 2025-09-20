<!-- app.vue -->
<script setup lang="ts">
import { Analytics } from "@vercel/analytics/vue";
</script>

<template>
  <NuxtLayout>
    <Analytics />
    <NuxtPage />
  </NuxtLayout>
</template>
