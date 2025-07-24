<script setup lang="ts">
import Button from "../components/button.vue";
import { Plus, Trash2 } from "lucide-vue-next";
</script>

<template>
  <div class="flex flex-col p-10 gap-10 bg-transparent">
    <section class="flex-col">
      <h1 class="text-4xl pb-1 font-bold text-black dark:text-white">Button</h1>
      <p class="text-neutral-500">
        Button is a clickable element that performs an action.
      </p>
    </section>
    <!-- Buttons -->
    <section class="space-y-4">
      <h2 class="text-2xl font-medium text-black dark:text-white">Variants</h2>
      <div class="flex flex-wrap gap-8">
        <div
          class="w-full h-96 p-10 flex items-center justify-center rounded border bg-neutral-500/10 border-neutral-100 dark:border-neutral-900"
        >
          <Button variant="primary">Primary</Button>
        </div>
        <div
          class="w-full h-96 p-10 flex items-center justify-center rounded border bg-neutral-500/10 border-neutral-100 dark:border-neutral-900"
        >
          <Button variant="secondary">Secondary</Button>
        </div>
        <div
          class="w-full h-96 p-10 flex items-center justify-center rounded border bg-neutral-500/10 border-neutral-100 dark:border-neutral-900"
        >
          <Button variant="outlined">Outlined</Button>
        </div>
        <div
          class="w-full h-96 p-10 flex items-center justify-center rounded border bg-neutral-500/10 border-neutral-100 dark:border-neutral-900"
        >
          <Button variant="ghost">Ghost</Button>
        </div>
        <div
          class="w-full h-96 p-10 flex items-center justify-center rounded border bg-neutral-500/10 border-neutral-100 dark:border-neutral-900"
        >
          <Button variant="link">Link</Button>
        </div>
        <div
          class="w-full h-96 p-10 flex items-center justify-center rounded border bg-neutral-500/10 border-neutral-100 dark:border-neutral-900"
        >
          <Button variant="destructive">Destructive</Button>
        </div>
      </div>
    </section>

    <!-- Sizes -->
    <section class="space-y-4">
      <h2 class="text-2xl font-semibold text-black dark:text-white">Sizes</h2>
      <div
        class="w-full h-96 p-10 flex items-center justify-center rounded border bg-neutral-500/10 border-neutral-100 dark:border-neutral-900"
      >
        <div class="flex flex-col items-start gap-4">
          <Button size="xs">Tiny</Button>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra large</Button>
        </div>
      </div>
    </section>

    <!-- States -->
    <section class="space-y-4">
      <h2 class="text-2xl font-semibold text-gray-800 dark:text-white">
        States
      </h2>
      <div
        class="w-full h-96 p-10 flex items-center justify-center rounded border bg-neutral-500/10 border-neutral-100 dark:border-neutral-900"
      >
        <div class="flex flex-wrap gap-4">
          <Button variant="primary" disabled>Disabled</Button>
          <Button variant="secondary" disabled>Secondary disabled</Button>
          <Button variant="outlined" disabled>Outlined disabled</Button>
          <Button variant="destructive" disabled>Destructive disabled</Button>
          <Button variant="primary" loading>Loading</Button>
          <Button variant="secondary" loading>Loading secondary</Button>
        </div>
      </div>
    </section>

    <!-- Buttons with Icons -->
    <section class="space-y-4">
      <h2 class="text-2xl font-semibold text-black dark:text-white">
        Buttons with icons
      </h2>
      <div class="flex flex-wrap gap-4">
        <Button class="pl-3">
          <template #icon>
            <Plus class="size-5 mr-2" />
          </template>
          Add Item
        </Button>
        <Button variant="destructive">
          <template #icon>
            <Trash2 class="size-5 mr-2" />
          </template>
          Delete
        </Button>
      </div>
    </section>

    <!-- Icon Only -->
    <section class="space-y-4">
      <h2 class="text-2xl font-semibold text-black dark:text-white">
        Icon button
      </h2>
      <div class="flex flex-wrap items-center gap-4">
        <Button variant="primary" icon-only>
          <template #icon>
            <Plus class="size-4" />
          </template>
        </Button>
        <Button variant="outlined" icon-only>
          <template #icon>
            <Trash2 class="size-4" />
          </template>
        </Button>
      </div>
    </section>

    <!-- Icon only sizes -->
    <section class="space-y-4">
      <h2 class="text-2xl font-semibold text-black dark:text-white">
        Icon only + Sizes
      </h2>
      <div class="flex flex-wrap items-center gap-4">
        <Button icon-only size="xs">
          <template #icon>
            <Plus class="size-5" />
          </template>
        </Button>
        <Button icon-only size="sm">
          <template #icon>
            <Plus class="size-5" />
          </template>
        </Button>
        <Button icon-only size="md">
          <template #icon>
            <Plus class="size-5" />
          </template>
        </Button>
        <Button icon-only size="lg">
          <template #icon>
            <Plus class="size-5" />
          </template>
        </Button>
        <Button icon-only size="xl">
          <template #icon>
            <Plus class="size-5" />
          </template>
        </Button>
      </div>
    </section>
  </div>
</template>
