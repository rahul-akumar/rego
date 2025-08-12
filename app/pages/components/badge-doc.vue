<script setup lang="ts">
import { Star } from "lucide-vue-next";
</script>

<template>
  <div class="flex flex-col p-10 gap-10 bg-transparent">
    <section class="flex-col">
      <h1 class="text-4xl pb-1 font-bold text-black dark:text-white">
        Badge
      </h1>
      <p class="text-neutral-500">
        Badges are small status descriptors for UI elements. They can contain text, numbers, or icons.
      </p>
    </section>

    <!-- Variants -->
    <section class="space-y-4">
      <h2 class="text-2xl font-medium text-black dark:text-white">
        Variants
      </h2>
      <UiComponentPreviewTabs
        code="<Badge>Primary</Badge>
<Badge variant='secondary'>Secondary</Badge>
<Badge variant='outline'>Outlined</Badge>
<Badge variant='destructive'>Destructive</Badge>"
      >
        <div class="flex flex-wrap gap-2">
          <DsBadge>
            Primary
          </DsBadge>
          <DsBadge variant="secondary">
            Secondary
          </DsBadge>
          <DsBadge variant="outline">
            Outlined
          </DsBadge>
          <DsBadge variant="destructive">
            Destructive
          </DsBadge>
        </div>
      </UiComponentPreviewTabs>
    </section>

    <!-- Numeric examples -->
    <section class="space-y-4">
      <h2 class="text-2xl font-medium text-black dark:text-white">
        Numeric Examples
      </h2>
      <UiComponentPreviewTabs
        code="<Badge>0</Badge>
<Badge>99+</Badge>
<Badge>999</Badge>
<Badge>9.9k</Badge>
<Badge>∞</Badge>"
      >
        <div class="flex flex-wrap gap-2">
          <DsBadge>
            0
          </DsBadge>
          <DsBadge>
            99+
          </DsBadge>
          <DsBadge>
            999
          </DsBadge>
          <DsBadge>
            9.9k
          </DsBadge>
          <DsBadge>
            ∞
          </DsBadge>
        </div>
      </UiComponentPreviewTabs>
    </section>

    <!-- Examples with icons -->
    <section class="space-y-4">
      <h2 class="text-2xl font-medium text-black dark:text-white">
        Icon examples
      </h2>

      <UiComponentPreviewTabs hide-code>
        <div class="flex flex-wrap gap-2">
          <DsBadge>
            <Star class="w-3 h-3 mr-1" />
            99
          </DsBadge>
          <DsBadge variant="secondary">
            <Star class="w-3 h-3 mr-1" />
            Starred
          </DsBadge>
          <DsBadge variant="outline">
            <Star class="w-3 h-3 mr-1" />
            3
          </DsBadge>
          <DsBadge variant="destructive">
            <Star class="w-3 h-3 mr-1" />
            Error
          </DsBadge>
        </div>
      </UiComponentPreviewTabs>
    </section>
  </div>
</template>
