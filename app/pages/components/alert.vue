<script setup lang="ts">
import { Info, X } from "lucide-vue-next";

const { name, description, category } = useComponent("alert");

definePageMeta({
  title: name,
  description,
});
// State to control alert visibility in App.vue
const showAppAlert = ref(false);
function toggleAppAlert() {
  showAppAlert.value = !showAppAlert.value;
  // Use localStorage to communicate with App.vue
  localStorage.setItem("showREGOAlert", showAppAlert.value.toString());
  // Dispatch a custom event that App.vue can listen for
  window.dispatchEvent(
    new CustomEvent("toggle-rego-alert", {
      detail: { visible: showAppAlert.value },
    }),
  );
}
const styles = {
  inspectFrame:
    "w-full h-auto p-10 flex items-center justify-center rounded border bg-neutral-500/10 border-neutral-100 dark:border-neutral-900",
};
</script>

<template>
  <UiDocs :title="name" :description="description" :category="category">
    <div class="space-y-8">
      <!-- System Alert Toggle Demo -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold text-black dark:text-white">
          System alert
        </h2>
        <p class="text-gray-500 dark:text-gray-400">
          Click the button below to toggle the alert in the application header.
        </p>
        <div :class="styles.inspectFrame">
          <Button size="sm" @click="toggleAppAlert">
            {{ showAppAlert ? "Hide alert" : "Show alert" }}
          </Button>
        </div>
      </section>
      <!-- Variants -->
      <section class="space-y-4">
        <h2 class="text-2xl font-medium text-black dark:text-white">
          Variants
        </h2>
        <UiComponentPreviewTabs>
          <div>
            <Alert message="This is an alert." class="absolute top-0 left-0 rounded-t-lg font-medium" />
          </div>
        </UiComponentPreviewTabs>
      </section>

      <!-- With close icon button -->
      <section class="space-y-4">
        <h2 class="text-2xl font-medium text-black dark:text-white">
          With close icon button
        </h2>
        <UiComponentPreviewTabs>
          <div>
            <Alert important message="This is an alert with a close icon button!" class="absolute top-0 left-0 rounded-t-lg font-medium">
              <template #actions>
                <Button size="xs" icon-only>
                  <X class="size-4" />
                </Button>
              </template>
            </Alert>
          </div>
        </UiComponentPreviewTabs>
      </section>

      <!-- With action button -->
      <section class="space-y-4">
        <h2 class="text-2xl font-medium text-black dark:text-white">
          With action button
        </h2>
        <UiComponentPreviewTabs>
          <div>
            <Alert important message="This is an alert with a action button!" class="absolute top-0 left-0 rounded-t-lg font-medium">
              <template #button>
                <Button size="xs" :inverted="true">
                  Learn more
                </Button>
              </template>
            </Alert>
          </div>
        </UiComponentPreviewTabs>
      </section>

      <!-- Custom slots -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold text-black dark:text-white">
          Custom slots
        </h2>
        <UiComponentPreviewTabs hide-code>
          <div class="flex flex-col gap-4 max-w-xl">
            <Alert message="This alert uses the default slot for custom content." class="absolute top-0 left-0 rounded-t-lg font-medium">
              <template #icon>
                <Info class="size-4" stroke-width="2" />
              </template>
            </Alert>
          </div>
        </UiComponentPreviewTabs>
      </section>

      <!-- All Slots Example -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold text-black dark:text-white">
          All Slots Example
        </h2>
        <UiComponentPreviewTabs hide-code>
          <div class="flex flex-col gap-4 max-w-xl">
            <Alert message="This is an alert with all slots!" class="absolute top-0 left-0 rounded-t-lg font-medium">
              <template #icon>
                <Info class="size-4" />
              </template>
              <template #button>
                <Button size="xs" :inverted="true">
                  Take Action
                </Button>
              </template>
              <template #actions>
                <Button size="xs" icon-only>
                  <X class="size-4" />
                </Button>
              </template>
            </Alert>
          </div>
        </UiComponentPreviewTabs>
      </section>
    </div>
  </UiDocs>
</template>
