<script setup lang="ts">
import { ref } from "vue";

const { name, description, category } = useComponent("pin-input");

definePageMeta({
  title: name,
  description,
});

// States
const pin = ref("");
const maskedPin = ref("");
const pin4 = ref("");
const sizeSm = ref("");
const sizeDf = ref("");
const sizeLg = ref("");
const disabledPin = ref("123456");

// Code blocks
const basicCode = `<PinInput v-model="pin" :length="6" />`;

const maskCode = `<PinInput v-model="pin" :length="6" :mask="true" />`;

const lenCode = `<PinInput v-model="pin" :length="4" />`;

const sizesCode = `<PinInput v-model="sm" size="sm" />
<PinInput v-model="df" size="default" />
<PinInput v-model="lg" size="lg" />`;

const disabledCode = `<PinInput v-model="value" disabled />`;

function onComplete(value: string) {
  // eslint-disable-next-line no-alert
  alert(`Completed: ${value}`);
}
</script>

<template>
  <UiDocs :title="name" :description="description" :category="category">
    <div class="space-y-8">
      <!-- Default -->
      <section class="space-y-4">
        <h2 class="text-xl font-semibold text-foreground">
          Default
        </h2>
        <UiComponentPreviewTabs title="Default" description="Basic 6-digit PIN input." :code="basicCode">
          <div class="flex flex-col items-center gap-2">
            <PinInput v-model="pin" :length="6" @complete="onComplete" />
            <div class="text-sm text-muted-foreground">
              Value: {{ pin }}
            </div>
          </div>
        </UiComponentPreviewTabs>
      </section>

      <!-- Masked -->
      <section class="space-y-4">
        <h2 class="text-xl font-semibold text-foreground">
          Masked
        </h2>
        <UiComponentPreviewTabs title="Masked" description="Mask characters with password type." :code="maskCode">
          <div class="flex flex-col items-center gap-2">
            <PinInput v-model="maskedPin" :length="6" :mask="true" />
            <div class="text-sm text-muted-foreground">
              Value: {{ maskedPin }}
            </div>
          </div>
        </UiComponentPreviewTabs>
      </section>

      <!-- Length -->
      <section class="space-y-4">
        <h2 class="text-xl font-semibold text-foreground">
          Length
        </h2>
        <UiComponentPreviewTabs title="Length" description="4-digit configuration." :code="lenCode">
          <div class="flex flex-col items-center gap-2">
            <PinInput v-model="pin4" :length="4" />
            <div class="text-sm text-muted-foreground">
              Value: {{ pin4 }}
            </div>
          </div>
        </UiComponentPreviewTabs>
      </section>

      <!-- Sizes -->
      <section class="space-y-4">
        <h2 class="text-xl font-semibold text-foreground">
          Sizes
        </h2>
        <UiComponentPreviewTabs title="Sizes" description="Small, default and large cell sizes." :code="sizesCode">
          <div class="flex flex-col items-center gap-4">
            <PinInput v-model="sizeSm" size="sm" />
            <PinInput v-model="sizeDf" size="default" />
            <PinInput v-model="sizeLg" size="lg" />
          </div>
        </UiComponentPreviewTabs>
      </section>

      <!-- Disabled -->
      <section class="space-y-4">
        <h2 class="text-xl font-semibold text-foreground">
          Disabled
        </h2>
        <UiComponentPreviewTabs title="Disabled" description="Non-interactive state." :code="disabledCode">
          <PinInput v-model="disabledPin" disabled />
        </UiComponentPreviewTabs>
      </section>
    </div>
  </UiDocs>
</template>
