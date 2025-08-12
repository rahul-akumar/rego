<!-- filepath: app/pages/components/breadcrumb.vue -->
<script setup lang="ts">
definePageMeta({
  title: "Breadcrumb",
  description: "Displays the path to the current resource using a hierarchy of links.",
});
</script>

<template>
  <div class="space-y-8">
    <div>
      <h1 class="text-3xl font-bold mb-2">
        Breadcrumb
      </h1>
      <p class="text-muted-foreground">
        Displays the path to the current resource using a hierarchy of links.
      </p>
    </div>

    <!-- Default (Props-based) -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">
        Default
      </h2>
      <div class="p-6 border rounded-lg bg-card">
        <DsBreadcrumb
          :items="[
            { label: 'Home', href: '/' },
            { label: 'Components', href: '/components' },
            { label: 'Breadcrumb', current: true },
          ]"
        />
      </div>
      <div class="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
        <pre class="text-sm"><code>&lt;DsBreadcrumb
  :items="[
    { label: 'Home', href: '/' },
    { label: 'Components', href: '/components' },
    { label: 'Breadcrumb', current: true }
  ]"
/&gt;</code></pre>
      </div>
    </section>

    <!-- With Ellipsis -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">
        With Ellipsis
      </h2>
      <div class="p-6 border rounded-lg bg-card">
        <DsBreadcrumb
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
        />
      </div>
      <div class="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
        <pre class="text-sm"><code>&lt;DsBreadcrumb
  :items="longItems"
  show-ellipsis
  :max-items="4"
  :ellipsis-position="1"
/&gt;</code></pre>
      </div>
    </section>

    <!-- Custom Separator - Slash -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">
        Slash Separator
      </h2>
      <div class="p-6 border rounded-lg bg-card">
        <DsBreadcrumb
          :items="[
            { label: 'Home', href: '/' },
            { label: 'Components', href: '/components' },
            { label: 'Breadcrumb', current: true },
          ]"
          separator="slash"
        />
      </div>
      <div class="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
        <pre class="text-sm"><code>&lt;DsBreadcrumb
  :items="items"
  separator="slash"
/&gt;</code></pre>
      </div>
    </section>

    <!-- Custom Separator - Custom -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">
        Custom Separator
      </h2>
      <div class="p-6 border rounded-lg bg-card">
        <DsBreadcrumb
          :items="[
            { label: 'Home', href: '/' },
            { label: 'Components', href: '/components' },
            { label: 'Breadcrumb', current: true },
          ]"
          separator="custom"
          custom-separator=" → "
        />
      </div>
      <div class="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
        <pre class="text-sm"><code>&lt;DsBreadcrumb
  :items="items"
  separator="custom"
  custom-separator=" → "
/&gt;</code></pre>
      </div>
    </section>

    <!-- Manual Structure (Slot-based) -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">
        Manual Structure (Advanced)
      </h2>
      <div class="p-6 border rounded-lg bg-card">
        <DsBreadcrumb>
          <ol class="text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5">
            <li class="inline-flex items-center gap-1.5">
              <a href="/" class="hover:text-foreground transition-colors">
                Home
              </a>
            </li>
            <li class="[&>svg]:size-3.5" role="presentation" aria-hidden="true">
              <ChevronRight />
            </li>
            <li class="inline-flex items-center gap-1.5">
              <a href="/components" class="hover:text-foreground transition-colors">
                Components
              </a>
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
        </DsBreadcrumb>
      </div>
      <div class="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
        <pre class="text-sm"><code>&lt;DsBreadcrumb&gt;
  &lt;ol class="text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm"&gt;
    &lt;li class="inline-flex items-center gap-1.5"&gt;
      &lt;a href="/" class="hover:text-foreground transition-colors"&gt;Home&lt;/a&gt;
    &lt;/li&gt;
    &lt;li class="[&amp;>svg]:size-3.5" role="presentation"&gt;
      &lt;ChevronRight /&gt;
    &lt;/li&gt;
    &lt;li class="inline-flex items-center gap-1.5"&gt;
      &lt;span class="font-normal text-foreground" aria-current="page"&gt;
        Current
      &lt;/span&gt;
    &lt;/li&gt;
  &lt;/ol&gt;
&lt;/DsBreadcrumb&gt;</code></pre>
      </div>
    </section>

    <!-- API Reference -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">
        API Reference
      </h2>
      <div class="border rounded-lg">
        <div class="p-4 border-b bg-gray-50 dark:bg-gray-900">
          <h3 class="font-semibold">
            Props
          </h3>
        </div>
        <div class="p-4 space-y-4">
          <div class="grid grid-cols-4 gap-4 text-sm font-medium border-b pb-2">
            <div>Prop</div>
            <div>Type</div>
            <div>Default</div>
            <div>Description</div>
          </div>

          <div class="grid grid-cols-4 gap-4 text-sm">
            <div><code>items</code></div>
            <div><code>BreadcrumbItem[]</code></div>
            <div><code>undefined</code></div>
            <div>Array of breadcrumb items</div>
          </div>

          <div class="grid grid-cols-4 gap-4 text-sm">
            <div><code>separator</code></div>
            <div><code>'chevron' | 'slash' | 'custom'</code></div>
            <div><code>'chevron'</code></div>
            <div>Type of separator to use</div>
          </div>

          <div class="grid grid-cols-4 gap-4 text-sm">
            <div><code>customSeparator</code></div>
            <div><code>string</code></div>
            <div><code>'/'</code></div>
            <div>Custom separator text</div>
          </div>

          <div class="grid grid-cols-4 gap-4 text-sm">
            <div><code>showEllipsis</code></div>
            <div><code>boolean</code></div>
            <div><code>false</code></div>
            <div>Show ellipsis for long breadcrumbs</div>
          </div>

          <div class="grid grid-cols-4 gap-4 text-sm">
            <div><code>maxItems</code></div>
            <div><code>number</code></div>
            <div><code>5</code></div>
            <div>Maximum items before ellipsis</div>
          </div>

          <div class="grid grid-cols-4 gap-4 text-sm">
            <div><code>ellipsisPosition</code></div>
            <div><code>number</code></div>
            <div><code>1</code></div>
            <div>Position to insert ellipsis</div>
          </div>

          <div class="grid grid-cols-4 gap-4 text-sm">
            <div><code>class</code></div>
            <div><code>string</code></div>
            <div><code>undefined</code></div>
            <div>Additional CSS classes</div>
          </div>
        </div>
      </div>
    </section>

    <!-- BreadcrumbItem Type -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">
        BreadcrumbItem Type
      </h2>
      <div class="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
        <pre class="text-sm"><code>type BreadcrumbItem = {
  label: string
  href?: string
  current?: boolean
  isEllipsis?: boolean
}</code></pre>
      </div>
    </section>
  </div>
</template>
