<template>
  <header class="pb-6 mb-8">
    <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div class="min-w-0">
        <p v-if="eyebrow" class="text-[11px] uppercase tracking-wider text-zinc-400">{{ eyebrow }}</p>
        <h1 class="text-2xl font-medium leading-tight tracking-tight">
          {{ title }}
        </h1>
        <p v-if="description" class="mt-2 text-zinc-500 max-w-3xl text-sm font-light">
          {{ description }}
        </p>
      </div>

      <!-- Right-aligned actions (optional) -->
      <div class="flex shrink-0 items-center gap-2">
        <slot name="actions" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
interface Props {
  title: string
  description?: string
  eyebrow?: string
}

defineProps<Props>()
</script>
