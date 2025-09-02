<script setup lang="ts">
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
const defaultInputCode = `<DsInput v-model="value" placeholder="Email" />`;

const typesCode = `<DsInput v-model="email" type="email" placeholder="Email" />
<DsInput v-model="password" type="password" placeholder="Password" />
<DsInput v-model="number" type="number" placeholder="Number" />
<DsInput type="file" />`;

const sizesCode = `<DsInput v-model="value" size="sm" placeholder="Small" />
<DsInput v-model="value" size="default" placeholder="Default" />
<DsInput v-model="value" size="lg" placeholder="Large" />`;

const withLabelCode = `<div class="grid w-full max-w-sm items-center gap-1.5">
  <label for="email" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
    Email
  </label>
  <DsInput id="email" v-model="email" type="email" placeholder="Enter your email" />
</div>`;

const disabledCode = `<DsInput v-model="value" disabled placeholder="Disabled" />`;

const fileInputCode = `<div class="grid w-full max-w-sm items-center gap-1.5">
  <label for="picture" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
    Picture
  </label>
  <DsInput id="picture" type="file" />
</div>`;

const withTextCode = `<div class="grid w-full max-w-sm items-center gap-1.5">
  <label for="email-2" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
    Email
  </label>
  <DsInput id="email-2" v-model="email" type="email" placeholder="Email" />
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
        <h2 class="text-xl font-semibold">
          Default
        </h2>
        <UiComponentPreviewTabs
          title="Default"
          description="The default input component."
          :code="defaultInputCode"
        >
          <DsInput v-model="basicValue" placeholder="Email" />
        </UiComponentPreviewTabs>
      </section>

      <!-- File -->
      <section class="space-y-4">
        <h2 class="text-xl font-semibold">
          File
        </h2>
        <UiComponentPreviewTabs
          title="File"
          description="File input with label."
          :code="fileInputCode"
        >
          <div class="grid w-full max-w-sm items-center gap-1.5">
            <label for="picture" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Picture
            </label>
            <DsInput id="picture" type="file" />
          </div>
        </UiComponentPreviewTabs>
      </section>

      <!-- With Label -->
      <section class="space-y-4">
        <h2 class="text-xl font-semibold">
          With Label
        </h2>
        <UiComponentPreviewTabs
          title="With Label"
          description="Input with proper labeling for accessibility."
          :code="withLabelCode"
        >
          <div class="grid w-full max-w-sm items-center gap-1.5">
            <label for="email" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Email
            </label>
            <DsInput id="email" v-model="emailValue" type="email" placeholder="Enter your email" />
          </div>
        </UiComponentPreviewTabs>
      </section>

      <!-- With Text -->
      <section class="space-y-4">
        <h2 class="text-xl font-semibold">
          With Text
        </h2>
        <UiComponentPreviewTabs
          title="With Text"
          description="Input with additional descriptive text."
          :code="withTextCode"
        >
          <div class="grid w-full max-w-sm items-center gap-1.5">
            <label for="email-2" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Email
            </label>
            <DsInput id="email-2" v-model="emailValue" type="email" placeholder="Email" />
            <p class="text-sm text-muted-foreground">
              Enter your email address.
            </p>
          </div>
        </UiComponentPreviewTabs>
      </section>

      <!-- Types -->
      <section class="space-y-4">
        <h2 class="text-xl font-semibold">
          Types
        </h2>
        <UiComponentPreviewTabs
          title="Types"
          description="Different input types for various use cases."
          :code="typesCode"
        >
          <DsInput v-model="emailValue" type="email" placeholder="Email" />
          <DsInput v-model="passwordValue" type="password" placeholder="Password" />
          <DsInput v-model="numberValue" type="number" placeholder="Number" />
          <DsInput type="file" />
        </UiComponentPreviewTabs>
      </section>

      <!-- Sizes -->
      <section class="space-y-4">
        <h2 class="text-xl font-semibold">
          Sizes
        </h2>
        <UiComponentPreviewTabs
          title="Sizes"
          description="Different sizes for the input component."
          :code="sizesCode"
        >
          <DsInput v-model="sizeValues.sm" size="sm" placeholder="Small" />
          <DsInput v-model="sizeValues.default" size="default" placeholder="Default" />
          <DsInput v-model="sizeValues.lg" size="lg" placeholder="Large" />
        </UiComponentPreviewTabs>
      </section>

      <!-- Disabled -->
      <section class="space-y-4">
        <h2 class="text-xl font-semibold">
          Disabled
        </h2>
        <UiComponentPreviewTabs
          title="Disabled"
          description="Disabled input state."
          :code="disabledCode"
        >
          <DsInput v-model="disabledValue" disabled />
        </UiComponentPreviewTabs>
      </section>
    </div>
  </UiDocs>
</template>
