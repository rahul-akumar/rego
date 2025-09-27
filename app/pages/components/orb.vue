<script setup lang="ts">
import { ref } from "vue";

const { name, description, category } = useComponent("orb");

definePageMeta({
  title: name,
  description,
});

// Interactive state for previews
const query = ref("");
const thinking = ref(true);

// Code examples shown in the tabs
const statesCode = `<div class="flex gap-6 items-center">
  <Orb state="idle" />
  <Orb state="listening" />
  <Orb state="thinking" />
  <Orb state="speaking" />
  <Orb state="processing" />
</div>`;

const sizesCode = `<div class="flex gap-6 items-center">
  <Orb size="xs" />
  <Orb size="sm" />
  <Orb />
  <Orb size="lg" />
  <Orb size="xl" />
</div>`;

const stylesCode = `<div class="flex gap-6 items-center">
  <Orb gradient="multi" />
  <Orb gradient="primary" />
  <Orb :glow="false" />
  <Orb :ring="false" />
</div>`;

const withButtonCode = `<Button icon-position=\"left\" size=\"sm\">\n  <template #icon>\n    <Orb size=\"xs\" state=\"thinking\" />\n  </template>\n  Ask AI\n</Button>`;

const withInputCode = `<div class=\"flex items-center gap-2 w-full max-w-md\">\n  <Input v-model=\"query\" placeholder=\"Ask the assistant...\" class=\"flex-1\" />\n  <Orb size=\"sm\" :state=\"thinking ? 'thinking' : 'idle'\" />\n</div>`;
</script>

<template>
  <UiDocs
    :title="name"
    :description="description"
    :category="category"
  >
    <div class="space-y-8">
      <!-- States -->
      <section class="space-y-4">
        <h2 class="text-xl font-semibold text-primary">
          States
        </h2>
        <UiComponentPreviewTabs
          title="States"
          description="Preview the orb in common AI states."
          :code="statesCode"
        >
          <div class="flex gap-6 items-center">
            <Orb state="idle" />
            <Orb state="listening" />
            <Orb state="thinking" />
            <Orb state="speaking" />
            <Orb state="processing" />
          </div>
        </UiComponentPreviewTabs>
      </section>

      <!-- Sizes -->
      <section class="space-y-4">
        <h2 class="text-xl font-semibold text-primary">
          Sizes
        </h2>
        <UiComponentPreviewTabs
          title="Sizes"
          description="Try different visual sizes."
          :code="sizesCode"
        >
          <div class="flex gap-6 items-center">
            <Orb size="xs" />
            <Orb size="sm" />
            <Orb />
            <Orb size="lg" />
            <Orb size="xl" />
          </div>
        </UiComponentPreviewTabs>
      </section>

      <!-- Styles -->
      <section class="space-y-4">
        <h2 class="text-xl font-semibold text-primary">
          Styles
        </h2>
        <UiComponentPreviewTabs
          title="Styles"
          description="Gradient, glow, and ring variations."
          :code="stylesCode"
        >
          <div class="flex gap-6 items-center">
            <Orb gradient="multi" />
            <Orb gradient="primary" />
            <Orb :glow="false" />
            <Orb :ring="false" />
          </div>
        </UiComponentPreviewTabs>
      </section>

      <!-- With Button -->
      <section class="space-y-4">
        <h2 class="text-xl font-semibold text-primary">
          With Button
        </h2>
        <UiComponentPreviewTabs
          title="With Button"
          description="Use the orb in a button icon slot."
          :code="withButtonCode"
        >
          <Button icon-position="left" size="sm">
            <template #icon>
              <Orb size="xs" state="thinking" />
            </template>
            Ask AI
          </Button>
        </UiComponentPreviewTabs>
      </section>

      <!-- With Input -->
      <section class="space-y-4">
        <h2 class="text-xl font-semibold text-primary">
          With Input
        </h2>
        <UiComponentPreviewTabs
          title="With Input"
          description="Place next to an input for AI query state."
          :code="withInputCode"
        >
          <div class="flex items-center gap-2 w-full max-w-md">
            <Input v-model="query" placeholder="Ask the assistant..." class="flex-1" />
            <Orb size="sm" :state="thinking ? 'thinking' : 'idle'" />
          </div>
        </UiComponentPreviewTabs>
      </section>
    </div>
  </UiDocs>
</template>
