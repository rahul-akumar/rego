<script setup lang="ts">
import { Info, X } from "lucide-vue-next";
import { onMounted } from "vue";
// Alert visibility state
const showAlert = ref(false);

// Function to toggle alert visibility
function toggleAlert() {
  showAlert.value = !showAlert.value;
}

// NEW: stable handler reference
const onToggleAlert = ((event: CustomEvent<{ visible: boolean }>) => {
  showAlert.value = event.detail.visible;
}) as EventListener;

onMounted(() => {
  // Always ensure alert starts hidden
  showAlert.value = false;
  localStorage.setItem("showREGOAlert", "false");

  // Listen for toggle events with a stable reference
  window.addEventListener("toggle-rego-alert", onToggleAlert);
});

// Cleanup event listener using the same reference
onUnmounted(() => {
  window.removeEventListener("toggle-rego-alert", onToggleAlert);
});

const styles = {
  appContainer: "w-full min-h-screen bg-background",
  mainArea: "flex",
  inspectView: "flex mx-auto w-3xl",
};
</script>

<template>
  <div :class="styles.appContainer">
    <!-- Top Bar -->
    <UiAppHeader />
    <!-- Application Alert - Controlled from AlertDoc page -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform -translate-y-full opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-full opacity-0"
    >
      <div v-if="showAlert" class="fixed w-full px-6 z-40">
        <Alert
          class="rounded-b-xl font-medium"
          message="This alert is controlled from the Alert documentation page!"
        >
          <template #icon>
            <Info class="size-4" stroke-width="2" />
          </template>
          <template #actions>
            <Button
              size="sm"
              icon-only
              @click="toggleAlert"
            >
              <X class="size-4" />
            </Button>
          </template>
        </Alert>
      </div>
    </Transition>

    <!-- Main Content Area -->
    <main :class="styles.mainArea">
      <!-- Use the new sidebar component -->
      <UiAppSidebar />
      <!-- Main Content Area -->
      <div :class="styles.inspectView">
        <slot />
      </div>
    </main>
  </div>
</template>
