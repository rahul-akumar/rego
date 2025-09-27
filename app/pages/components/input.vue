<script setup lang="ts">
import { Mail, Search, X } from "lucide-vue-next";
import { ref } from "vue";

const { name, description, category } = useComponent("input");

definePageMeta({
  title: name,
  description,
});

// State for interactive examples
const basicValue = ref("");
const emailValue = ref("");
const passwordValue = ref("");
const numberValue = ref("");
const disabledValue = ref("This input is disabled");
// const fileValue = ref("");
const sizeValues = ref({
  sm: "",
  default: "",
  lg: "",
});

// Code examples
const defaultInputCode = `<Input v-model="value" placeholder="Email" />`;

const typesCode = `<Input v-model="email" type="email" placeholder="Email" />
<Input v-model="password" type="password" placeholder="Password" />
<Input v-model="number" type="number" placeholder="Number" />
<Input type="file" />`;

const sizesCode = `<Input v-model="value" size="sm" placeholder="Small" />
<Input v-model="value" size="default" placeholder="Default" />
<Input v-model="value" size="lg" placeholder="Large" />`;

const withLabelCode = `
  <Input id="email" v-model="email" type="email" placeholder="Enter your email" label="Email" />`;

const disabledCode = `<Input v-model="value" disabled placeholder="Disabled" />`;

const fileInputCode = `
  <Input id="picture" type="file" />
`;

const withTextCode = `<div class="grid w-full max-w-sm items-center gap-1.5">
  <label for="email-2" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
    Email
  </label>
  <Input id="email-2" v-model="email" type="email" placeholder="Email" />
  <p class="text-sm text-muted-foreground">Enter your email address.</p>
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
        <h2 class="text-xl font-semibold text-primary">
          Default
        </h2>
        <UiComponentPreviewTabs
          title="Default"
          description="The default input component."
          :code="defaultInputCode"
        >
          <Input v-model="basicValue" placeholder="Email" />
        </UiComponentPreviewTabs>
      </section>

      <!-- With Prefix -->
      <section class="space-y-4">
        <h2 class="text-xl font-semibold text-primary">
          With Prefix
        </h2>
        <UiComponentPreviewTabs
          title="With Prefix"
          description="The input component with a prefix."
          :code="defaultInputCode"
        >
          <Input v-model="basicValue" placeholder="Email">
            <template #prefix>
              <Mail class="size-4" />
            </template>
          </Input>
        </UiComponentPreviewTabs>
      </section>

      <!-- With Suffix -->
      <section class="space-y-4">
        <h2 class="text-xl font-semibold text-primary">
          With Suffix
        </h2>
        <UiComponentPreviewTabs
          title="With Suffix"
          description="The input component with a suffix."
          :code="defaultInputCode"
        >
          <Input v-model="basicValue" placeholder="Search">
            <template #suffix>
              <Search class="size-4" />
            </template>
          </Input>
        </UiComponentPreviewTabs>
      </section>

      <!-- With Both Prefix and Suffix -->
      <section class="space-y-4">
        <h2 class="text-xl font-semibold text-primary">
          With Both Prefix and Suffix
        </h2>
        <UiComponentPreviewTabs
          title="With Both Prefix and Suffix"
          description="The input component with a suffix."
          :code="defaultInputCode"
        >
          <Input v-model="basicValue" placeholder="Search">
            <template #prefix>
              <Search class="size-4" />
            </template>
            <template #suffix>
              <X class="size-4" />
            </template>
          </Input>
        </UiComponentPreviewTabs>
      </section>

      <!-- File -->
      <section class="space-y-4">
        <h2 class="text-xl font-semibold text-primary">
          File
        </h2>
        <UiComponentPreviewTabs
          title="File"
          description="File input with label."
          :code="fileInputCode"
        >
          <div class="flex w-full justify-center">
            <Input id="picture" type="file" label="Picture" />
          </div>
        </UiComponentPreviewTabs>
      </section>

      <!-- With Label -->
      <section class="space-y-4">
        <h2 class="text-xl font-semibold text-primary">
          With Label
        </h2>
        <UiComponentPreviewTabs
          title="With Label"
          description="Input with proper labeling for accessibility."
          :code="withLabelCode"
        >
          <div class="flex w-full justify-center">
            <Input id="email" v-model="emailValue" type="email" placeholder="Enter your email" label="Email" />
          </div>
        </UiComponentPreviewTabs>
      </section>

      <!-- With Text -->
      <section class="space-y-4">
        <h2 class="text-xl font-semibold text-primary">
          With Text
        </h2>
        <UiComponentPreviewTabs
          title="With Text"
          description="Input with additional descriptive text."
          :code="withTextCode"
        >
          <div class="flex flex-col w-full items-center gap-4">
            <Input id="email-2" v-model="emailValue" type="email" placeholder="Email" label="Email" />
            <p class="text-sm text-muted-foreground">
              Enter your email address.
            </p>
          </div>
        </UiComponentPreviewTabs>
      </section>

      <!-- Types -->
      <section class="space-y-4">
        <h2 class="text-xl font-semibold text-primary">
          Types
        </h2>
        <UiComponentPreviewTabs
          title="Types"
          description="Different input types for various use cases."
          :code="typesCode"
        >
          <div class="flex flex-col w-full items-center gap-4">
            <Input v-model="emailValue" type="email" placeholder="Email" />
            <Input v-model="passwordValue" type="password" placeholder="Password" />
            <Input v-model="numberValue" type="number" placeholder="Number" />
            <Input type="file" />
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
          description="Different sizes for the input component."
          :code="sizesCode"
        >
          <div class="flex flex-col w-full items-center gap-4">
            <Input v-model="sizeValues.sm" size="sm" placeholder="Small" />
            <Input v-model="sizeValues.default" size="default" placeholder="Default" />
            <Input v-model="sizeValues.lg" size="lg" placeholder="Large" />
          </div>
        </UiComponentPreviewTabs>
      </section>

      <!-- Disabled -->
      <section class="space-y-4">
        <h2 class="text-xl font-semibold text-primary">
          Disabled
        </h2>
        <UiComponentPreviewTabs
          title="Disabled"
          description="Disabled input state."
          :code="disabledCode"
        >
          <Input v-model="disabledValue" disabled />
        </UiComponentPreviewTabs>
      </section>

      <!-- API -->
      <section class="space-y-4">
        <h2 class="text-xl font-semibold text-primary">
          API
        </h2>
        <div class="grid gap-2 text-sm">
          <h3 class="font-medium text-primary">
            Props
          </h3>
          <ul class="list-disc ml-5 text-muted-foreground">
            <li><span class="text-primary font-medium">modelValue</span>: string | number — current value (use v-model)</li>
            <li><span class="text-primary font-medium">type</span>: string — native input type (e.g., "text", "email", "password", "number", "file")</li>
            <li><span class="text-primary font-medium">placeholder</span>: string — hint text</li>
            <li><span class="text-primary font-medium">size</span>: "sm" | "default" | "lg" — control height and paddings</li>
            <li><span class="text-primary font-medium">disabled</span>: boolean — disables the input</li>
            <li><span class="text-primary font-medium">id</span>: string — link with a label via for=</li>
          </ul>

          <h3 class="font-medium text-primary mt-4">
            Events
          </h3>
          <ul class="list-disc ml-5 text-muted-foreground">
            <li><span class="text-primary font-medium">update:modelValue</span>: (value) — emitted on input for v-model</li>
            <li>All native input events are forwarded (e.g., focus, blur, keydown)</li>
          </ul>
        </div>
      </section>

      <!-- Accessibility -->
      <section class="space-y-4">
        <h2 class="text-xl font-semibold text-primary">
          Accessibility
        </h2>
        <ul class="list-disc ml-5 text-sm text-muted-foreground">
          <li>Use a <code>label</code> associated with the input via matching <code>for</code> and <code>id</code>.</li>
          <li>Describe errors with text and set <code>aria-invalid="true"</code> when applicable.</li>
          <li>Disabled state uses the native <code>disabled</code> attribute.</li>
        </ul>
      </section>
    </div>
  </UiDocs>
</template>
