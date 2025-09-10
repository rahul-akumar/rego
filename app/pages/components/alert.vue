<script setup lang="ts">
import { Bell, Plus, X } from "lucide-vue-next";

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
      <!-- Variants -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold text-black dark:text-white">
          Variants
        </h2>
        <UiComponentPreviewTabs hide-code>
          <div class="flex flex-col gap-4 max-w-xl">
            <Alert message="This is a default alert." />
            <Alert important message="This is an important alert!" />
          </div>
        </UiComponentPreviewTabs>
      </section>

      <!-- System Alert Toggle Demo -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold text-black dark:text-white">
          System alert
        </h2>
        <p class="text-gray-500 dark:text-gray-400">
          Click the button below to toggle the alert in the application header.
        </p>
        <div :class="styles.inspectFrame">
          <Button @click="toggleAppAlert">
            {{ showAppAlert ? "Hide alert" : "Show alert" }}
          </Button>
        </div>
      </section>

      <!-- App Alert Control -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold text-black dark:text-white">
          App Alert Control
        </h2>
        <div class="flex flex-col gap-4 max-w-xl">
          <p class="text-gray-500 dark:text-gray-400">
            Click the button below to toggle the alert in the application header.
          </p>
          <div>
            <Button @click="toggleAppAlert">
              {{ showAppAlert ? "Hide App Alert" : "Show App Alert" }}
            </Button>
          </div>
        </div>
      </section>

      <!-- Custom slots -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold text-black dark:text-white">
          Custom slots
        </h2>
        <UiComponentPreviewTabs hide-code>
          <div class="flex flex-col gap-4 max-w-xl">
            <Alert>
              <template #default>
                This alert uses the default slot for custom content.
              </template>
            </Alert>
            <Alert important>
              <template #icon>
                <Plus class="size-5" />
              </template>
              <template #default>
                <span class="font-bold">Important:</span> This alert uses slots with
                custom formatting.
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
            <Alert important>
              <template #icon>
                <Bell class="size-4" />
              </template>
              <template #default>
                <div>
                  <strong>System Alert</strong>
                  This is an example.
                </div>
              </template>
              <template #button>
                <Button size="sm" variant="outline">
                  Take Action
                </Button>
              </template>
              <template #actions>
                <Button size="sm" variant="ghost" icon-only inverted>
                  <template #icon>
                    <X class="size-5" />
                  </template>
                </Button>
              </template>
            </Alert>
          </div>
        </UiComponentPreviewTabs>
      </section>
    </div>
  </UiDocs>
</template>
