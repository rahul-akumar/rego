<script setup lang="ts">
import { ChevronRight } from "lucide-vue-next";

const { name, description, category } = useComponent("breadcrumb");

definePageMeta({
  title: name,
  description,
});

// Code examples
const defaultCode = `<Breadcrumb
  :items="[
    { label: 'Home', href: '/' },
    { label: 'Components', href: '/components' },
    { label: 'Breadcrumb', current: true },
  ]"
/>`;

const ellipsisCode = `<Breadcrumb
  :items="[
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Category', href: '/products/category' },
    { label: 'Subcategory', href: '/products/category/sub' },
    { label: 'Item', href: '/products/category/sub/item' },
    { label: 'Current Page', current: true },
  ]"
  show-ellipsis
  :max-items="4"
  :ellipsis-position="1"
/>`;

const slashSeparatorCode = `<Breadcrumb
  :items="[
    { label: 'Home', href: '/' },
    { label: 'Components', href: '/components' },
    { label: 'Breadcrumb', current: true },
  ]"
  separator="slash"
/>`;

const customSeparatorCode = `<Breadcrumb
  :items="[
    { label: 'Home', href: '/' },
    { label: 'Components', href: '/components' },
    { label: 'Breadcrumb', current: true },
  ]"
  separator="custom"
  custom-separator=" → "
/>`;

const sizesCode = `<div class="space-y-4">
  <Breadcrumb
    :items="[
      { label: 'Home', href: '/' },
      { label: 'Components', href: '/components' },
      { label: 'Breadcrumb', current: true },
    ]"
    size="sm"
  />
  <Breadcrumb
    :items="[
      { label: 'Home', href: '/' },
      { label: 'Components', href: '/components' },
      { label: 'Breadcrumb', current: true },
    ]"
    size="default"
  />
  <Breadcrumb
    :items="[
      { label: 'Home', href: '/' },
      { label: 'Components', href: '/components' },
      { label: 'Breadcrumb', current: true },
    ]"
    size="lg"
  />
</div>`;

const manualCode = `<Breadcrumb>
  <ol class="text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5">
    <li class="inline-flex items-center gap-1.5">
      <NuxtLink to="/" class="hover:text-foreground transition-colors">
        Home
      </NuxtLink>
    </li>
    <li class="[&>svg]:size-3.5" role="presentation" aria-hidden="true">
      <ChevronRight />
    </li>
    <li class="inline-flex items-center gap-1.5">
      <NuxtLink to="/components" class="hover:text-foreground transition-colors">
        Components
      </NuxtLink>
    </li>
    <li class="[&>svg]:size-3.5" role="presentation" aria-hidden="true">
      <ChevronRight />
    </li>
    <li class="inline-flex items-center gap-1.5">
      <span class="font-normal text-foreground" aria-current="page">
        Breadcrumb
      </span>
    </li>
  </ol>
</Breadcrumb>`;

// Data for examples
const basicItems = [
  { label: "Home", href: "/" },
  { label: "Components", href: "/components" },
  { label: "Breadcrumb", current: true },
];

const longItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Category", href: "/products/category" },
  { label: "Subcategory", href: "/products/category/sub" },
  { label: "Item", href: "/products/category/sub/item" },
  { label: "Current Page", current: true },
];
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
          description="The default breadcrumb component with chevron separators."
          :code="defaultCode"
        >
          <Breadcrumb :items="basicItems" />
        </UiComponentPreviewTabs>
      </section>

      <!-- With Ellipsis -->
      <section class="space-y-4">
        <h2 class="text-2xl font-medium text-black dark:text-white">
          With Ellipsis
        </h2>
        <UiComponentPreviewTabs
          title="With Ellipsis"
          description="Breadcrumb with ellipsis for long navigation paths."
          :code="ellipsisCode"
        >
          <Breadcrumb
            :items="longItems"
            show-ellipsis
            :max-items="4"
            :ellipsis-position="1"
          />
        </UiComponentPreviewTabs>
      </section>

      <!-- Slash Separator -->
      <section class="space-y-4">
        <h2 class="text-2xl font-medium text-black dark:text-white">
          Slash Separator
        </h2>
        <UiComponentPreviewTabs
          title="Slash Separator"
          description="Breadcrumb using slash separators instead of chevrons."
          :code="slashSeparatorCode"
        >
          <Breadcrumb
            :items="basicItems"
            separator="slash"
          />
        </UiComponentPreviewTabs>
      </section>

      <!-- Custom Separator -->
      <section class="space-y-4">
        <h2 class="text-2xl font-medium text-black dark:text-white">
          Custom Separator
        </h2>
        <UiComponentPreviewTabs
          title="Custom Separator"
          description="Breadcrumb with custom separator text."
          :code="customSeparatorCode"
        >
          <Breadcrumb
            :items="basicItems"
            separator="custom"
            custom-separator=" → "
          />
        </UiComponentPreviewTabs>
      </section>

      <!-- Sizes -->
      <section class="space-y-4">
        <h2 class="text-2xl font-medium text-black dark:text-white">
          Sizes
        </h2>
        <UiComponentPreviewTabs
          title="Sizes"
          description="Different sizes for the breadcrumb component."
          :code="sizesCode"
          class-name="space-y-4 p-6"
        >
          <div class="space-y-4">
            <div>
              <p class="text-sm text-muted-foreground mb-2">
                Small
              </p>
              <Breadcrumb :items="basicItems" size="sm" />
            </div>
            <div>
              <p class="text-sm text-muted-foreground mb-2">
                Default
              </p>
              <Breadcrumb :items="basicItems" size="default" />
            </div>
            <div>
              <p class="text-sm text-muted-foreground mb-2">
                Large
              </p>
              <Breadcrumb :items="basicItems" size="lg" />
            </div>
          </div>
        </UiComponentPreviewTabs>
      </section>

      <!-- Manual Structure -->
      <section class="space-y-4">
        <h2 class="text-2xl font-medium text-black dark:text-white">
          Manual Structure
        </h2>
        <UiComponentPreviewTabs
          title="Manual Structure"
          description="Advanced usage with manual breadcrumb structure using slots."
          :code="manualCode"
        >
          <Breadcrumb>
            <ol class="text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5">
              <li class="inline-flex items-center gap-1.5">
                <NuxtLink to="/" class="hover:text-foreground transition-colors">
                  Home
                </NuxtLink>
              </li>
              <li class="[&>svg]:size-3.5" role="presentation" aria-hidden="true">
                <ChevronRight />
              </li>
              <li class="inline-flex items-center gap-1.5">
                <NuxtLink to="/components" class="hover:text-foreground transition-colors">
                  Components
                </NuxtLink>
              </li>
              <li class="[&>svg]:size-3.5" role="presentation" aria-hidden="true">
                <ChevronRight />
              </li>
              <li class="inline-flex items-center gap-1.5">
                <span class="font-normal text-foreground" aria-current="page">
                  Breadcrumb
                </span>
              </li>
            </ol>
          </Breadcrumb>
        </UiComponentPreviewTabs>
      </section>
    </div>
  </UiDocs>
</template>
