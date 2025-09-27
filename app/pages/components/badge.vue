<script setup lang="ts">
import { Star } from "lucide-vue-next";

const { name, description, category } = useComponent("badge");

definePageMeta({
  title: name,
  description,
});
</script>

<template>
  <UiDocs :title="name" :description="description" :category="category">
    <div class="space-y-8">
      <!-- Variants -->
      <section class="space-y-4">
        <div class="space-y-6">
          <!-- Default -->
          <div class="space-y-2">
            <h2 class="text-2xl font-medium text-primary">
              Default
            </h2>
            <UiComponentPreviewTabs code="<Badge>Primary</Badge>">
              <Badge>
                Primary
              </Badge>
            </UiComponentPreviewTabs>
          </div>

          <!-- Secondary -->
          <div class="space-y-2">
            <h2 class="text-2xl font-medium text-primary">
              Secondary
            </h2>
            <UiComponentPreviewTabs code="<Badge variant='secondary'>Secondary</Badge>">
              <Badge variant="secondary">
                Secondary
              </Badge>
            </UiComponentPreviewTabs>
          </div>

          <!-- Outline -->
          <div class="space-y-2">
            <h2 class="text-2xl font-medium text-primary">
              Outline
            </h2>
            <UiComponentPreviewTabs code="<Badge variant='outline'>Outlined</Badge>">
              <Badge variant="outline">
                Outlined
              </Badge>
            </UiComponentPreviewTabs>
          </div>

          <!-- Destructive -->
          <div class="space-y-2">
            <h2 class="text-2xl font-medium text-primary">
              Destructive
            </h2>
            <UiComponentPreviewTabs code="<Badge variant='destructive'>Destructive</Badge>">
              <Badge variant="destructive">
                Destructive
              </Badge>
            </UiComponentPreviewTabs>
          </div>
        </div>
      </section>

      <!-- Examples with icons -->
      <section class="space-y-4">
        <h2 class="text-2xl font-medium text-black dark:text-white">
          Icon examples
        </h2>
        <UiComponentPreviewTabs hide-code>
          <div class="flex flex-wrap gap-2">
            <Badge>
              <Star class="w-3 h-3 mr-1" />
              99
            </Badge>
            <Badge variant="secondary">
              <Star class="w-3 h-3 mr-1" />
              Starred
            </Badge>
            <Badge variant="outline">
              <Star class="w-3 h-3 mr-1" />
              3
            </Badge>
            <Badge variant="destructive">
              <Star class="w-3 h-3 mr-1" />
              Error
            </Badge>
          </div>
        </UiComponentPreviewTabs>
      </section>

      <!-- Collapsible examples -->
      <section class="space-y-4">
        <div class="space-y-1">
          <h2 class="text-2xl font-medium text-primary">
            Collapsible
          </h2>
          <p class="text-sm text-primary/50">
            When space is limited, the badge can be collapsed to show only the icon by default, and expand on hover/focus to reveal the text label.
          </p>
        </div>
        <UiComponentPreviewTabs hide-code>
          <div class="flex flex-wrap gap-2">
            <Badge collapsible>
              <Star class="size-4" />
              <template #label>
                <span>Starred</span>
              </template>
            </Badge>
          </div>
        </UiComponentPreviewTabs>
      </section>
    </div>
  </UiDocs>
</template>
