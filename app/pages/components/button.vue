<script setup lang="ts">
import { ChevronRight, Download, Mail, Star } from "lucide-vue-next";

const { name, description, category } = useComponent("button");

definePageMeta({
  title: name,
  description,
});

// Code examples
const defaultButtonCode = `<Button>Button</Button>`;

const variantsCode = `<div class="flex flex-wrap gap-4">
  <Button variant="primary">Primary</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="outlined">Outlined</Button>
  <Button variant="ghost">Ghost</Button>
  <Button variant="link">Link</Button>
  <Button variant="destructive">Destructive</Button>
</div>`;

const sizesCode = `<div class="flex items-center gap-4">
  <Button size="xs">XS</Button>
  <Button size="sm">Small</Button>
  <Button size="md">Medium</Button>
  <Button size="lg">Large</Button>
  <Button size="xl">XL</Button>
</div>`;

const iconOnlyCode = `<div class="flex items-center gap-4">
  <Button size="sm" icon-only>
    <Star class="size-4" />
  </Button>
  <Button size="md" icon-only>
    <Mail class="size-4" />
  </Button>
  <Button size="lg" icon-only>
    <Download class="size-5" />
  </Button>
</div>`;

const withIconsCode = `<div class="flex flex-col gap-4">
  <div class="flex gap-4">
    <Button icon-position="left">
      <template #icon>
        <Mail class="size-4" />
      </template>
      Send Email
    </Button>
    <Button icon-position="right" variant="outlined">
      <template #icon>
        <ChevronRight class="size-4" />
      </template>
      Continue
    </Button>
  </div>
  <div class="flex gap-4">
    <Button icon-position="top" variant="ghost">
      <template #icon>
        <Download class="size-4" />
      </template>
      Download
    </Button>
    <Button icon-position="bottom" variant="secondary">
      <template #icon>
        <Star class="size-4" />
      </template>
      Favorite
    </Button>
  </div>
</div>`;

const loadingCode = `<div class="flex gap-4">
  <Button loading>Loading</Button>
  <Button variant="outlined" loading>Please wait</Button>
  <Button variant="ghost" loading size="sm">Processing</Button>
</div>`;

const disabledCode = `<div class="flex gap-4">
  <Button disabled>Disabled</Button>
  <Button variant="outlined" disabled>Disabled</Button>
  <Button variant="ghost" disabled>Disabled</Button>
</div>`;

const invertedCode = `<div class="bg-black p-6 rounded-lg space-y-4">
    <Button inverted>Inverted Primary</Button>
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
          <Button>
            Button
          </Button>
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
          <Button>
            Primary
          </Button>
          <Button variant="secondary">
            Secondary
          </Button>
          <Button variant="outline">
            Outlined
          </Button>
          <Button variant="ghost">
            Ghost
          </Button>
          <Button variant="link">
            Link
          </Button>
          <Button variant="destructive">
            Destructive
          </Button>
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
          <Button size="sm">
            Small
          </Button>
          <Button>
            Medium
          </Button>
          <Button size="lg">
            Large
          </Button>
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
          <Button size="sm" icon-only>
            <Star class="size-4" />
          </Button>
          <Button icon-only>
            <Mail class="size-4" />
          </Button>
          <Button size="lg" icon-only>
            <Download class="size-5" />
          </Button>
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
              <Button icon-position="left">
                <template #icon>
                  <Mail class="size-4" />
                </template>
                Send Email
              </Button>
              <Button icon-position="right" variant="outline">
                <template #icon>
                  <ChevronRight class="size-4" />
                </template>
                Continue
              </Button>
            </div>
            <div class="flex gap-4">
              <Button icon-position="top" variant="ghost">
                <template #icon>
                  <Download class="size-4" />
                </template>
                Download
              </Button>
              <Button icon-position="bottom" variant="secondary">
                <template #icon>
                  <Star class="size-4" />
                </template>
                Favorite
              </Button>
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
          <Button :loading="true">
            Loading
          </Button>
          <Button variant="outline" :loading="true">
            Please wait
          </Button>
          <Button variant="ghost" :loading="true">
            Processing
          </Button>
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
          <Button :disabled="true">
            Disabled
          </Button>
          <Button variant="outline" :disabled="true">
            Disabled
          </Button>
          <Button variant="ghost" :disabled="true">
            Disabled
          </Button>
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
            <Button :inverted="true">
              Inverted button
            </Button>
          </div>
        </UiComponentPreviewTabs>
      </section>
    </div>
  </UiDocs>
</template>
