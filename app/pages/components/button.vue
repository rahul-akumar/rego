<script setup lang="ts">
import { ChevronRight, Download, Mail, Star } from "lucide-vue-next";

const { name, description, category } = useComponent("button");

definePageMeta({
  title: name,
  description,
});

// Code examples
const defaultButtonCode = `<Button>Button</Button>`;

const secondaryButtonCode = `<Button variant="secondary">Button</Button>`;
const outlinedButtonCode = `<Button variant="outlined">Button</Button>`;
const ghostButtonCode = `<Button variant="ghost">Button</Button>`;
const linkButtonCode = `<Button variant="link">Button</Button>`;
const destructiveButtonCode = `<Button variant="destructive">Button</Button>`;

const sizesCode = `
  <Button size="xs">XS</Button>
  <Button size="sm">Small</Button>
  <Button>Medium</Button>
  <Button size="lg">Large</Button>
  <Button size="xl">XL</Button>`;

const iconOnlyCode = `
  <Button icon-only>
    <Mail class="size-4" />
  </Button>
`;

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
          <Button size="sm">
            Button
          </Button>
        </UiComponentPreviewTabs>
      </section>

      <!-- Secondary -->
      <section class="space-y-4">
        <h2 class="text-2xl font-medium text-black dark:text-white">
          Secondary
        </h2>
        <UiComponentPreviewTabs
          title="Secondary"
          description="The secondary button component."
          :code="secondaryButtonCode"
          class-name="flex items-center gap-4 p-6"
        >
          <Button variant="secondary" size="sm">
            Secondary
          </Button>
        </UiComponentPreviewTabs>
      </section>

      <!-- Outlined -->
      <section class="space-y-4">
        <h2 class="text-2xl font-medium text-black dark:text-white">
          Outlined
        </h2>
        <UiComponentPreviewTabs
          title="Outlined"
          description="The outlined button component."
          :code="outlinedButtonCode"
          class-name="flex items-center gap-4 p-6"
        >
          <Button variant="outline" size="sm">
            Outlined
          </Button>
        </UiComponentPreviewTabs>
      </section>

      <!-- Ghost -->
      <section class="space-y-4">
        <h2 class="text-2xl font-medium text-black dark:text-white">
          Ghost
        </h2>
        <UiComponentPreviewTabs
          title="Ghost"
          description="The ghost button component."
          :code="ghostButtonCode"
          class-name="flex items-center gap-4 p-6"
        >
          <Button variant="ghost" size="sm">
            Ghost
          </Button>
        </UiComponentPreviewTabs>
      </section>

      <!-- Link -->
      <section class="space-y-4">
        <h2 class="text-2xl font-medium text-black dark:text-white">
          Link
        </h2>
        <UiComponentPreviewTabs
          title="Link"
          description="The link button component."
          :code="linkButtonCode"
          class-name="flex items-center gap-4 p-6"
        >
          <Button variant="link" size="sm">
            Link
          </Button>
        </UiComponentPreviewTabs>
      </section>

      <!-- Destructive -->
      <section class="space-y-4">
        <h2 class="text-2xl font-medium text-black dark:text-white">
          Destructive
        </h2>
        <UiComponentPreviewTabs
          title="Destructive"
          description="The destructive button component."
          :code="destructiveButtonCode"
          class-name="flex items-center gap-4 p-6"
        >
          <Button variant="destructive" size="sm">
            Destructive
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
          <Button icon-only>
            <Mail class="size-4" />
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
          description="The sizes button component."
          :code="sizesCode"
          class-name="flex items-center gap-4 p-6"
        >
          <Button size="xs">
            XS
          </Button>
          <Button size="sm">
            Small
          </Button>
          <Button>
            Medium
          </Button>
          <Button size="lg">
            Large
          </Button>
          <Button size="xl">
            XL
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
                  <ChevronRight class="size-4 mt-1" />
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
          <Button loading="true">
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
