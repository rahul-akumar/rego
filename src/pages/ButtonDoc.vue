<script setup lang="ts">
import Button from "../components/button.vue";
import { Plus } from "lucide-vue-next";

const styles = {
  inspectFrame:
    "w-full h-auto p-10 flex items-center justify-center rounded border bg-neutral-500/10 border-neutral-100 dark:border-neutral-900",
};
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
        <div :class="styles.inspectFrame">
          <Button variant="primary">Primary</Button>
        </div>
        <div :class="styles.inspectFrame">
          <Button variant="secondary">Secondary</Button>
        </div>
        <div :class="styles.inspectFrame">
          <Button variant="outlined">Outlined</Button>
        </div>
        <div :class="styles.inspectFrame">
          <Button variant="ghost">Ghost</Button>
        </div>
        <div :class="styles.inspectFrame">
          <Button variant="link">Link</Button>
        </div>
        <div :class="styles.inspectFrame">
          <Button variant="destructive">Destructive</Button>
        </div>
      </div>
    </section>

    <!-- Sizes -->
    <section class="space-y-4">
      <h2 class="text-2xl font-semibold text-black dark:text-white">Sizes</h2>
      <div :class="styles.inspectFrame">
        <div class="flex flex-col items-start gap-6">
          <Button size="xs">Extra small</Button>
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
      <div :class="styles.inspectFrame">
        <div class="flex flex-col items-start gap-6">
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
      <div :class="styles.inspectFrame">
        <div class="flex flex-col items-start gap-6">
          <Button>
            <template #icon>
              <Plus class="size-5" />
            </template>
            Icon left
          </Button>
          <Button icon-position="right">
            <template #icon>
              <Plus class="size-5" />
            </template>
            Icon right
          </Button>
          <Button icon-position="top">
            <template #icon>
              <Plus class="size-5" />
            </template>
            Icon top
          </Button>
          <Button icon-position="bottom">
            <template #icon>
              <Plus class="size-5" />
            </template>
            Icon bottom
          </Button>
        </div>
      </div>
    </section>

    <!-- Icon Only -->
    <section class="space-y-4">
      <h2 class="text-2xl font-semibold text-black dark:text-white">
        Icon button
      </h2>
      <div :class="styles.inspectFrame">
        <div class="flex flex-col items-start gap-6">
          <Button variant="primary" icon-only>
            <template #icon>
              <Plus class="size-4" />
            </template>
          </Button>
          <Button variant="outlined" icon-only>
            <template #icon>
              <Plus class="size-4" />
            </template>
          </Button>
          <Button variant="ghost" icon-only>
            <template #icon>
              <Plus class="size-4" />
            </template>
          </Button>
        </div>
      </div>
    </section>
  </div>
</template>
