<script setup lang="ts">
const { name, description, category } = useComponent("throbber");

definePageMeta({
  title: name,
  description,
});

// Code examples
const defaultCode = `<Throbber />`;

const sizesCode = `<div class="flex items-center gap-4">
  <Throbber size="xs" />
  <Throbber size="sm" />
  <Throbber />
  <Throbber size="lg" />
  <Throbber size="xl" />
</div>`;

const variantsCode = `<div class="flex items-center gap-4">
  <Throbber variant="solid" />
  <Throbber variant="dashed" />
  <Throbber variant="dotted" />
</div>`;

const speedsCode = `<div class="flex items-center gap-4">
  <Throbber speed="slow" />
  <Throbber />
  <Throbber speed="fast" />
</div>`;

const inlineCode = `<span class="inline-flex items-center gap-2 text-sm">
  Loading data
  <Throbber size="sm" />
</span>`;

const accessibilityCode = `<Throbber label="Loading user profile" />`;
</script>

<template>
  <UiDocs
    :title="name"
    :description="description"
    :category="category"
  >
    <div class="space-y-8">
      <!-- Default -->
      <section class="space-y-4">
        <h2 class="text-2xl font-medium text-black dark:text-white">
          Default
        </h2>
        <UiComponentPreviewTabs
          title="Default"
          description="The default throbber uses the primary color and spins continuously."
          :code="defaultCode"
        >
          <Throbber />
        </UiComponentPreviewTabs>
      </section>

      <!-- Sizes -->
      <section class="space-y-4">
        <h2 class="text-2xl font-medium text-black dark:text-white">
          Sizes
        </h2>
        <UiComponentPreviewTabs
          title="Sizes"
          description="Use size to scale the throbber for different contexts."
          :code="sizesCode"
          class-name="flex items-center gap-4 p-6"
        >
          <div class="flex items-center gap-8">
            <Throbber size="xs" />
            <Throbber size="sm" />
            <Throbber />
            <Throbber size="lg" />
            <Throbber size="xl" />
          </div>
        </UiComponentPreviewTabs>
      </section>

      <!-- Variants -->
      <section class="space-y-4">
        <h2 class="text-2xl font-medium text-black dark:text-white">
          Variants
        </h2>
        <UiComponentPreviewTabs
          title="Variants"
          description="Use variant to switch the stroke style. Dotted and dashed are implemented via stroke-dasharray."
          :code="variantsCode"
          class-name="flex items-center gap-4 p-6"
        >
          <div class="flex items-center gap-8">
            <Throbber variant="solid" size="xl" />
            <Throbber variant="dashed" size="xl" />
            <Throbber variant="dotted" size="xl" />
          </div>
        </UiComponentPreviewTabs>
      </section>

      <!-- Speed -->
      <section class="space-y-4">
        <h2 class="text-2xl font-medium text-black dark:text-white">
          Speed
        </h2>
        <UiComponentPreviewTabs
          title="Speed"
          description="Control the animation speed: slow (1.8s), default (1s), and fast (0.6s)."
          :code="speedsCode"
          class-name="flex items-center gap-4 p-6"
        >
          <div class="flex items-center gap-8">
            <Throbber speed="slow" size="xl" />
            <Throbber size="xl" />
            <Throbber speed="fast" size="xl" />
          </div>
        </UiComponentPreviewTabs>
      </section>

      <!-- Inline usage -->
      <section class="space-y-4">
        <h2 class="text-2xl font-medium text-black dark:text-white">
          Inline usage
        </h2>
        <UiComponentPreviewTabs
          title="Inline usage"
          description="Place the throbber next to text or other UI to indicate background activity."
          :code="inlineCode"
          class-name="p-6"
        >
          <span class="inline-flex items-center gap-2 text-sm">
            Loading data
            <Throbber size="sm" />
          </span>
        </UiComponentPreviewTabs>
      </section>

      <!-- Accessibility -->
      <section class="space-y-4">
        <h2 class="text-2xl font-medium text-black dark:text-white">
          Accessibility
        </h2>
        <UiComponentPreviewTabs
          title="Accessibility"
          description="Provide a descriptive label so screen readers announce the loading state."
          :code="accessibilityCode"
          class-name="p-6"
        >
          <Throbber label="Loading user profile" />
        </UiComponentPreviewTabs>
      </section>
    </div>
  </UiDocs>
</template>
