<script setup lang="ts">
import { ChevronRight, Download, Mail, Star } from "lucide-vue-next";

const { name, description, category } = useComponent("button");

definePageMeta({
  title: name,
  description,
});

// Code examples
const defaultButtonCode = `<DsButton>Button</DsButton>`;

const variantsCode = `<div class="flex flex-wrap gap-4">
  <DsButton variant="primary">Primary</DsButton>
  <DsButton variant="secondary">Secondary</DsButton>
  <DsButton variant="outlined">Outlined</DsButton>
  <DsButton variant="ghost">Ghost</DsButton>
  <DsButton variant="link">Link</DsButton>
  <DsButton variant="destructive">Destructive</DsButton>
</div>`;

const sizesCode = `<div class="flex items-center gap-4">
  <DsButton size="xs">XS</DsButton>
  <DsButton size="sm">Small</DsButton>
  <DsButton size="md">Medium</DsButton>
  <DsButton size="lg">Large</DsButton>
  <DsButton size="xl">XL</DsButton>
</div>`;

const iconOnlyCode = `<div class="flex items-center gap-4">
  <DsButton size="sm" icon-only>
    <Star class="size-4" />
  </DsButton>
  <DsButton size="md" icon-only>
    <Mail class="size-4" />
  </DsButton>
  <DsButton size="lg" icon-only>
    <Download class="size-5" />
  </DsButton>
</div>`;

const withIconsCode = `<div class="flex flex-col gap-4">
  <div class="flex gap-4">
    <DsButton icon-position="left">
      <template #icon>
        <Mail class="size-4" />
      </template>
      Send Email
    </DsButton>
    <DsButton icon-position="right" variant="outlined">
      <template #icon>
        <ChevronRight class="size-4" />
      </template>
      Continue
    </DsButton>
  </div>
  <div class="flex gap-4">
    <DsButton icon-position="top" variant="ghost">
      <template #icon>
        <Download class="size-4" />
      </template>
      Download
    </DsButton>
    <DsButton icon-position="bottom" variant="secondary">
      <template #icon>
        <Star class="size-4" />
      </template>
      Favorite
    </DsButton>
  </div>
</div>`;

const loadingCode = `<div class="flex gap-4">
  <DsButton loading>Loading</DsButton>
  <DsButton variant="outlined" loading>Please wait</DsButton>
  <DsButton variant="ghost" loading size="sm">Processing</DsButton>
</div>`;

const disabledCode = `<div class="flex gap-4">
  <DsButton disabled>Disabled</DsButton>
  <DsButton variant="outlined" disabled>Disabled</DsButton>
  <DsButton variant="ghost" disabled>Disabled</DsButton>
</div>`;

const invertedCode = `<div class="bg-black p-6 rounded-lg space-y-4">
    <DsButton inverted>Inverted Primary</DsButton>
</div>`;
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
          description="The default button component."
          :code="defaultButtonCode"
        >
          <DsButton>Button</DsButton>
        </UiComponentPreviewTabs>
      </section>

      <!-- Variants -->
      <section class="space-y-4">
        <h2 class="text-2xl font-medium text-black dark:text-white">
          Variants
        </h2>
        <UiComponentPreviewTabs
          title="Variants"
          description="Different visual styles for the button component."
          :code="variantsCode"
          class-name="flex flex-wrap gap-4 p-6"
        >
          <DsButton variant="primary">
            Primary
          </DsButton>
          <DsButton variant="secondary">
            Secondary
          </DsButton>
          <DsButton variant="outlined">
            Outlined
          </DsButton>
          <DsButton variant="ghost">
            Ghost
          </DsButton>
          <DsButton variant="link">
            Link
          </DsButton>
          <DsButton variant="destructive">
            Destructive
          </DsButton>
        </UiComponentPreviewTabs>
      </section>

      <!-- Sizes -->
      <section class="space-y-4">
        <h2 class="text-2xl font-medium text-black dark:text-white">
          Sizes
        </h2>
        <UiComponentPreviewTabs
          title="Sizes"
          description="Different sizes for the button component."
          :code="sizesCode"
          class-name="flex items-center gap-4 p-6"
        >
          <DsButton size="xs">
            XS
          </DsButton>
          <DsButton size="sm">
            Small
          </DsButton>
          <DsButton size="md">
            Medium
          </DsButton>
          <DsButton size="lg">
            Large
          </DsButton>
          <DsButton size="xl">
            XL
          </DsButton>
        </UiComponentPreviewTabs>
      </section>

      <!-- Icon Only -->
      <section class="space-y-4">
        <h2 class="text-2xl font-medium text-black dark:text-white">
          Icon Only
        </h2>
        <UiComponentPreviewTabs
          title="Icon Only"
          description="Button component with icon only."
          :code="iconOnlyCode"
          class-name="flex items-center gap-4 p-6"
        >
          <DsButton size="sm" icon-only>
            <Star class="size-4" />
          </DsButton>
          <DsButton size="md" icon-only>
            <Mail class="size-4" />
          </DsButton>
          <DsButton size="lg" icon-only>
            <Download class="size-5" />
          </DsButton>
        </UiComponentPreviewTabs>
      </section>

      <!-- With Icons -->
      <section class="space-y-4">
        <h2 class="text-2xl font-medium text-black dark:text-white">
          With Icons
        </h2>
        <UiComponentPreviewTabs
          title="With Icons"
          description="Button component with icons in different positions."
          :code="withIconsCode"
          class-name="p-6"
        >
          <div class="flex flex-col gap-4">
            <div class="flex gap-4">
              <DsButton icon-position="left">
                <template #icon>
                  <Mail class="size-4" />
                </template>
                Send Email
              </DsButton>
              <DsButton icon-position="right" variant="outlined">
                <template #icon>
                  <ChevronRight class="size-4" />
                </template>
                Continue
              </DsButton>
            </div>
            <div class="flex gap-4">
              <DsButton icon-position="top" variant="ghost">
                <template #icon>
                  <Download class="size-4" />
                </template>
                Download
              </DsButton>
              <DsButton icon-position="bottom" variant="secondary">
                <template #icon>
                  <Star class="size-4" />
                </template>
                Favorite
              </DsButton>
            </div>
          </div>
        </UiComponentPreviewTabs>
      </section>

      <!-- Loading State -->
      <section class="space-y-4">
        <h2 class="text-2xl font-medium text-black dark:text-white">
          Loading
        </h2>
        <UiComponentPreviewTabs
          title="Loading"
          description="Button component with loading state."
          :code="loadingCode"
          class-name="flex gap-4 p-6"
        >
          <DsButton loading>
            Loading
          </DsButton>
          <DsButton variant="outlined" loading>
            Please wait
          </DsButton>
          <DsButton variant="ghost" loading size="sm">
            Processing
          </DsButton>
        </UiComponentPreviewTabs>
      </section>

      <!-- Disabled -->
      <section class="space-y-4">
        <h2 class="text-2xl font-medium text-black dark:text-white">
          Disabled
        </h2>
        <UiComponentPreviewTabs
          title="Disabled"
          description="Button component in disabled state."
          :code="disabledCode"
          class-name="flex gap-4 p-6"
        >
          <DsButton disabled>
            Disabled
          </DsButton>
          <DsButton variant="outlined" disabled>
            Disabled
          </DsButton>
          <DsButton variant="ghost" disabled>
            Disabled
          </DsButton>
        </UiComponentPreviewTabs>
      </section>

      <!-- Inverted -->
      <section class="space-y-4">
        <h2 class="text-2xl font-medium text-black dark:text-white">
          Inverted
        </h2>
        <UiComponentPreviewTabs
          title="Inverted"
          description="Button component with inverted colors for dark backgrounds."
          :code="invertedCode"
          class="[&_.preview]:rounded-lg [&_.preview]:bg-black [&_.preview]:text-white dark:[&_.preview]:bg-white dark:[&_.preview]:text-black"
        >
          <div>
            <DsButton inverted>
              Inverted Primary
            </DsButton>
          </div>
        </UiComponentPreviewTabs>
      </section>
    </div>
  </UiDocs>
</template>
