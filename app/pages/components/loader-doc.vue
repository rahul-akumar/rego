<script setup lang="ts">
const { name, description, category } = useComponent("loader");

definePageMeta({
  title: name,
  description,
});

// Code examples
const defaultCode = `<DsLoader />`;

const sizesCode = `<div class="flex items-center gap-4">
  <DsLoader size="xs" />
  <DsLoader size="sm" />
  <DsLoader />
  <DsLoader size="lg" />
  <DsLoader size="xl" />
</div>`;

const variantsCode = `<div class="flex items-center gap-4">
  <DsLoader variant="solid" />
  <DsLoader variant="dashed" />
  <DsLoader variant="dotted" />
</div>`;

const speedsCode = `<div class="flex items-center gap-4">
  <DsLoader speed="slow" />
  <DsLoader />
  <DsLoader speed="fast" />
</div>`;

const inlineCode = `<span class="inline-flex items-center gap-2 text-sm">
  Loading data
  <DsLoader size="sm" />
</span>`;

const accessibilityCode = `<DsLoader label="Loading user profile" />`;
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
          description="The default loader uses the primary color and spins continuously."
          :code="defaultCode"
        >
          <DsLoader />
        </UiComponentPreviewTabs>
      </section>

      <!-- Sizes -->
      <section class="space-y-4">
        <h2 class="text-2xl font-medium text-black dark:text-white">
          Sizes
        </h2>
        <UiComponentPreviewTabs
          title="Sizes"
          description="Use size to scale the loader for different contexts."
          :code="sizesCode"
          class-name="flex items-center gap-4 p-6"
        >
          <div class="flex items-center gap-8">
            <DsLoader size="xs" />
            <DsLoader size="sm" />
            <DsLoader />
            <DsLoader size="lg" />
            <DsLoader size="xl" />
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
            <DsLoader variant="solid" size="xl" />
            <DsLoader variant="dashed" size="xl" />
            <DsLoader variant="dotted" size="xl" />
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
            <DsLoader speed="slow" size="xl" />
            <DsLoader size="xl" />
            <DsLoader speed="fast" size="xl" />
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
          description="Place the loader next to text or other UI to indicate background activity."
          :code="inlineCode"
          class-name="p-6"
        >
          <span class="inline-flex items-center gap-2 text-sm">
            Loading data
            <DsLoader size="sm" />
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
          <DsLoader label="Loading user profile" />
        </UiComponentPreviewTabs>
      </section>
    </div>
  </UiDocs>
</template>
