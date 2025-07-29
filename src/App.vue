<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import Button from "./components/button.vue";
import { RouterView, RouterLink } from "vue-router";
import Alert from "./components/alert.vue";
import { X } from "lucide-vue-next";
import { Transition } from "vue"; // Add if not using global registration
// Alert visibility state
const showAlert = ref(false);

// Function to toggle alert visibility
function toggleAlert() {
  showAlert.value = !showAlert.value;
}

onMounted(() => {
  // Always ensure alert starts hidden
  showAlert.value = false;
  localStorage.setItem("showREGOAlert", "false");

  // Listen for toggle events
  window.addEventListener("toggle-rego-alert", ((
    event: CustomEvent<{ visible: boolean }>
  ) => {
    showAlert.value = event.detail.visible;
  }) as EventListener);
});

// Cleanup event listener
onUnmounted(() => {
  window.removeEventListener("toggle-rego-alert", () => {});
});

const isDark = ref(false);
function toggleTheme() {
  isDark.value = !isDark.value;
  document.documentElement.classList.toggle("dark", isDark.value);
}

// Introduction/Guide pages section
const introPages = [
  { name: "Introduction", path: "/" },
  // Future intro pages can be added here
];

// Components documentation section
const components = [
  { name: "Alert", path: "/alert" },
  { name: "Button", path: "/button" },
  { name: "Input", path: "/input" },
  // Add more components as needed
];

const styles = {
  appContainer: "w-full h-screen bg-white dark:bg-black",
  appHeader:
    "sticky top-0 w-full flex items-center justify-between px-8 py-4 bg-white dark:bg-black z-50",
  navBar:
    "flex-col sticky pt-6 top-20 w-40 h-full bg-white dark:bg-black px-6 z-30",
  mainArea: "flex bg-white dark:bg-black",
  navLink:
    "flex px-2 py-1 rounded hover:bg-black hover:bg-opacity-10 dark:hover:bg-white dark:hover:bg-opacity-10 text-black dark:text-white",
  inspectView: "flex mx-auto max-w-3xl overflow-auto min-h-0",
};
</script>

<template>
  <div :class="styles.appContainer">
    <!-- Top Bar -->
    <header :class="styles.appHeader">
      <RouterLink
        to="/"
        class="text-2xl font-bold text-black dark:text-white hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
      >
        REGO
      </RouterLink>
      <Button @click="toggleTheme" size="sm" variant="secondary">
        <template v-if="isDark"> Switch to light mode</template>
        <template v-else>Switch to dark mode</template>
      </Button>
    </header>
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
          important
          class="rounded-b-lg"
          message="This alert is controlled from the Alert documentation page!"
        >
          <template #actions>
            <Button
              @click="toggleAlert"
              size="xs"
              variant="ghost"
              iconOnly
              inverted
            >
              <template #icon>
                <X class="size-4" />
              </template>
            </Button>
          </template>
        </Alert>
      </div>
    </Transition>

    <!-- Main Content Area -->
    <div :class="styles.mainArea">
      <!-- Left Nav Bar -->
      <nav :class="styles.navBar">
        <!-- Introduction Section -->
        <div class="mb-6">
          <h3
            class="text-xs font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-2 px-2"
          >
            Get started
          </h3>
          <ul class="space-y-0">
            <li v-for="page in introPages" :key="page.path">
              <RouterLink
                :to="page.path"
                :class="styles.navLink"
                active-class="bg-black/10 dark:bg-white/10 font-semibold"
              >
                {{ page.name }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Components Section -->
        <div>
          <h3
            class="text-xs font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-2 px-2"
          >
            Components
          </h3>
          <ul class="space-y-0">
            <li v-for="comp in components" :key="comp.path">
              <RouterLink
                :to="comp.path"
                :class="styles.navLink"
                active-class="bg-black/10 dark:bg-white/10 font-semibold"
              >
                {{ comp.name }}
              </RouterLink>
            </li>
          </ul>
        </div>
      </nav>

      <!-- Main Content Area -->
      <main :class="styles.inspectView">
        <RouterView />
      </main>
    </div>
  </div>
</template>
