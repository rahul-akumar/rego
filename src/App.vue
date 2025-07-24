<script setup lang="ts">
import { ref } from "vue";
import Button from "./components/button.vue";
import { RouterView, RouterLink } from "vue-router";

const isDark = ref(false);
function toggleTheme() {
  isDark.value = !isDark.value;
  document.documentElement.classList.toggle("dark", isDark.value);
}

// List your component pages here
const components = [
  { name: "Banner", path: "/banner" },
  { name: "Button", path: "/button" },
  { name: "Input", path: "/input" },
  // Add more components as needed
];

const styles = {
  appContainer: "w-full h-full bg-white dark:bg-black",
  appHeader:
    "sticky top-0 w-full flex items-center justify-between px-8 py-4 bg-white dark:bg-black z-50",
  navBar: "flex-col sticky top-20 w-40 h-full bg-white dark:bg-black px-6 z-30",
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
      <h1 class="text-2xl font-bold text-black dark:text-white">REGO</h1>
      <Button @click="toggleTheme" size="sm" variant="secondary">
        <template v-if="isDark"> Switch to light mode</template>
        <template v-else>Switch to dark mode</template>
      </Button>
    </header>

    <div :class="styles.mainArea">
      <!-- Left Nav Bar -->
      <nav :class="styles.navBar">
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
      </nav>

      <!-- Main Content Area -->
      <main :class="styles.inspectView">
        <RouterView />
      </main>
    </div>
  </div>
</template>
