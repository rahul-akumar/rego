<script setup lang="ts">
import { ref } from "vue";

import Input from "../../components/ds/input.vue";

// State for interactive examples
const basicValue = ref("");
const variantValues = ref({
  primary: "",
  secondary: "",
  outlined: "",
  ghost: "",
  link: "",
  destructive: "",
});
const sizeValue = ref("");
const disabledValue = ref("Disabled input");
const typesValue = ref({
  text: "",
  email: "",
  password: "",
  number: "",
  tel: "",
  url: "",
});
</script>

<template>
  <div class="flex flex-col p-10 gap-10 bg-transparent">
    <section class="flex-col">
      <h1 class="text-4xl pb-1 font-bold text-black dark:text-white">
        Input
      </h1>
      <p class="text-neutral-500">
        A versatile input component with multiple variants and sizes for form interactions.
      </p>
    </section>

    <!-- Basic Usage -->
    <section class="space-y-4">
      <h2 class="text-2xl font-medium text-black dark:text-white">
        Basic Usage
      </h2>
      <div class="w-full p-10 rounded border bg-neutral-500/10 border-neutral-100 dark:border-neutral-900">
        <div class="space-y-4">
          <Input v-model="basicValue" placeholder="Enter text..." />
          <p class="text-sm text-neutral-600 dark:text-neutral-400">
            Value: {{ basicValue || "(empty)" }}
          </p>
        </div>
      </div>
      <pre class="p-4 bg-black/10 dark:bg-white/10 rounded text-sm overflow-x-auto">
<code>&lt;Input v-model="value" placeholder="Enter text..." /&gt;</code>
      </pre>
    </section>

    <!-- Variants -->
    <section class="space-y-4">
      <h2 class="text-2xl font-medium text-black dark:text-white">
        Variants
      </h2>
      <div class="w-full p-10 rounded border bg-neutral-500/10 border-neutral-100 dark:border-neutral-900">
        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <span class="w-24 text-sm font-medium">Primary:</span>
            <Input
              v-model="variantValues.primary"
              variant="primary"
              placeholder="Primary variant"
              class="flex-1"
            />
          </div>
          <div class="flex items-center gap-4">
            <span class="w-24 text-sm font-medium">Secondary:</span>
            <Input
              v-model="variantValues.secondary"
              variant="secondary"
              placeholder="Secondary variant"
              class="flex-1"
            />
          </div>
          <div class="flex items-center gap-4">
            <span class="w-24 text-sm font-medium">Outlined:</span>
            <Input
              v-model="variantValues.outlined"
              variant="outlined"
              placeholder="Outlined variant"
              class="flex-1"
            />
          </div>
          <div class="flex items-center gap-4">
            <span class="w-24 text-sm font-medium">Ghost:</span>
            <Input
              v-model="variantValues.ghost"
              variant="ghost"
              placeholder="Ghost variant"
              class="flex-1"
            />
          </div>
        </div>
      </div>
      <pre class="p-4 bg-neutral-100 dark:bg-neutral-900 rounded text-sm overflow-x-auto">
<code>&lt;Input variant="primary" placeholder="Primary variant" /&gt;
&lt;Input variant="secondary" placeholder="Secondary variant" /&gt;
&lt;Input variant="outlined" placeholder="Outlined variant" /&gt;
&lt;Input variant="ghost" placeholder="Ghost variant" /&gt;
&lt;Input variant="link" placeholder="Link variant" /&gt;
&lt;Input variant="destructive" placeholder="Destructive variant" /&gt;</code>
      </pre>
    </section>

    <!-- Sizes -->
    <section class="space-y-4">
      <h2 class="text-2xl font-medium text-black dark:text-white">
        Sizes
      </h2>
      <div class="w-full p-10 rounded border bg-neutral-500/10 border-neutral-100 dark:border-neutral-900">
        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <span class="w-16 text-sm font-medium">XS:</span>
            <Input v-model="sizeValue" size="xs" placeholder="Extra small" />
          </div>
          <div class="flex items-center gap-4">
            <span class="w-16 text-sm font-medium">SM:</span>
            <Input v-model="sizeValue" size="sm" placeholder="Small" />
          </div>
          <div class="flex items-center gap-4">
            <span class="w-16 text-sm font-medium">MD:</span>
            <Input v-model="sizeValue" size="md" placeholder="Medium (default)" />
          </div>
          <div class="flex items-center gap-4">
            <span class="w-16 text-sm font-medium">LG:</span>
            <Input v-model="sizeValue" size="lg" placeholder="Large" />
          </div>
          <div class="flex items-center gap-4">
            <span class="w-16 text-sm font-medium">XL:</span>
            <Input v-model="sizeValue" size="xl" placeholder="Extra large" />
          </div>
        </div>
      </div>
      <pre class="p-4 bg-neutral-100 dark:bg-neutral-900 rounded text-sm overflow-x-auto">
<code>&lt;Input size="xs" placeholder="Extra small" /&gt;
&lt;Input size="sm" placeholder="Small" /&gt;
&lt;Input size="md" placeholder="Medium (default)" /&gt;
&lt;Input size="lg" placeholder="Large" /&gt;
&lt;Input size="xl" placeholder="Extra large" /&gt;</code>
      </pre>
    </section>

    <!-- Input Types -->
    <section class="space-y-4">
      <h2 class="text-2xl font-medium text-black dark:text-white">
        Input Types
      </h2>
      <div class="w-full p-10 rounded border bg-neutral-500/10 border-neutral-100 dark:border-neutral-900">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium mb-2">Text</label>
            <Input v-model="typesValue.text" type="text" placeholder="Text input" />
          </div>
          <div>
            <label class="block text-sm font-medium mb-2">Email</label>
            <Input v-model="typesValue.email" type="email" placeholder="email@example.com" />
          </div>
          <div>
            <label class="block text-sm font-medium mb-2">Password</label>
            <Input v-model="typesValue.password" type="password" placeholder="Enter password" />
          </div>
          <div>
            <label class="block text-sm font-medium mb-2">Number</label>
            <Input v-model="typesValue.number" type="number" placeholder="123" />
          </div>
          <div>
            <label class="block text-sm font-medium mb-2">Tel</label>
            <Input v-model="typesValue.tel" type="tel" placeholder="+1 (555) 000-0000" />
          </div>
          <div>
            <label class="block text-sm font-medium mb-2">URL</label>
            <Input v-model="typesValue.url" type="url" placeholder="https://example.com" />
          </div>
        </div>
      </div>
      <pre class="p-4 bg-neutral-100 dark:bg-neutral-900 rounded text-sm overflow-x-auto">
<code>&lt;Input type="text" placeholder="Text input" /&gt;
&lt;Input type="email" placeholder="email@example.com" /&gt;
&lt;Input type="password" placeholder="Enter password" /&gt;
&lt;Input type="number" placeholder="123" /&gt;
&lt;Input type="tel" placeholder="+1 (555) 000-0000" /&gt;
&lt;Input type="url" placeholder="https://example.com" /&gt;</code>
      </pre>
    </section>

    <!-- Disabled State -->
    <section class="space-y-4">
      <h2 class="text-2xl font-medium text-black dark:text-white">
        Disabled State
      </h2>
      <div class="w-full p-10 rounded border bg-neutral-500/10 border-neutral-100 dark:border-neutral-900">
        <div class="space-y-4">
          <Input v-model="disabledValue" disabled placeholder="Disabled input" />
          <Input v-model="disabledValue" disabled variant="secondary" placeholder="Disabled secondary" />
          <Input v-model="disabledValue" disabled variant="outlined" placeholder="Disabled outlined" />
        </div>
      </div>
      <pre class="p-4 bg-neutral-100 dark:bg-neutral-900 rounded text-sm overflow-x-auto">
<code>&lt;Input disabled placeholder="Disabled input" /&gt;
&lt;Input disabled variant="secondary" placeholder="Disabled secondary" /&gt;
&lt;Input disabled variant="outlined" placeholder="Disabled outlined" /&gt;</code>
      </pre>
    </section>

    <!-- Props Reference -->
    <section class="space-y-4">
      <h2 class="text-2xl font-medium text-black dark:text-white">
        Props Reference
      </h2>
      <div class="w-full rounded border bg-neutral-500/10 border-neutral-100 dark:border-neutral-900 overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr class="border-b border-neutral-200 dark:border-neutral-800">
              <th class="text-left p-4">
                Prop
              </th>
              <th class="text-left p-4">
                Type
              </th>
              <th class="text-left p-4">
                Default
              </th>
              <th class="text-left p-4">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-neutral-200 dark:border-neutral-800">
              <td class="p-4 font-mono text-sm">
                modelValue
              </td>
              <td class="p-4 font-mono text-sm">
                string
              </td>
              <td class="p-4 font-mono text-sm">
                undefined
              </td>
              <td class="p-4 text-sm">
                The input value (v-model)
              </td>
            </tr>
            <tr class="border-b border-neutral-200 dark:border-neutral-800">
              <td class="p-4 font-mono text-sm">
                placeholder
              </td>
              <td class="p-4 font-mono text-sm">
                string
              </td>
              <td class="p-4 font-mono text-sm">
                undefined
              </td>
              <td class="p-4 text-sm">
                Placeholder text
              </td>
            </tr>
            <tr class="border-b border-neutral-200 dark:border-neutral-800">
              <td class="p-4 font-mono text-sm">
                type
              </td>
              <td class="p-4 font-mono text-sm">
                string
              </td>
              <td class="p-4 font-mono text-sm">
                "text"
              </td>
              <td class="p-4 text-sm">
                HTML input type
              </td>
            </tr>
            <tr class="border-b border-neutral-200 dark:border-neutral-800">
              <td class="p-4 font-mono text-sm">
                disabled
              </td>
              <td class="p-4 font-mono text-sm">
                boolean
              </td>
              <td class="p-4 font-mono text-sm">
                false
              </td>
              <td class="p-4 text-sm">
                Disable the input
              </td>
            </tr>
            <tr class="border-b border-neutral-200 dark:border-neutral-800">
              <td class="p-4 font-mono text-sm">
                size
              </td>
              <td class="p-4 font-mono text-sm">
                "xs" | "sm" | "md" | "lg" | "xl"
              </td>
              <td class="p-4 font-mono text-sm">
                "md"
              </td>
              <td class="p-4 text-sm">
                Input size
              </td>
            </tr>
            <tr>
              <td class="p-4 font-mono text-sm">
                variant
              </td>
              <td class="p-4 font-mono text-sm">
                "primary" | "secondary" | "outlined" | "ghost" | "link" | "destructive"
              </td>
              <td class="p-4 font-mono text-sm">
                "primary"
              </td>
              <td class="p-4 text-sm">
                Input variant style
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>
