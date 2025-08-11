<script setup lang="ts">
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
  appContainer: "w-full min-h-screen bg-white dark:bg-black",
  appHeader:
    "sticky top-0 w-full flex items-center justify-between px-8 py-4 bg-white dark:bg-black z-50",
  mainArea: "flex bg-white dark:bg-black",
  inspectView: "flex mx-auto max-w-3xl overflow-auto min-h-0",
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
        <DsAlert
          important
          class="rounded-b-lg"
          message="This alert is controlled from the Alert documentation page!"
        >
          <template #actions>
            <DsButton
              size="xs"
              variant="ghost"
              icon-only
              inverted
              @click="toggleAlert"
            >
              <template #icon>
                <Icon name="material-symbols:close" />
              </template>
            </DsButton>
          </template>
        </DsAlert>
      </div>
    </Transition>

    <!-- Main Content Area -->
    <div :class="styles.mainArea">
      <!-- Use the new sidebar component -->
      <UiAppSidebar />

      <!-- Main Content Area -->
      <main :class="styles.inspectView">
        <slot />
      </main>
    </div>
  </div>
</template>
