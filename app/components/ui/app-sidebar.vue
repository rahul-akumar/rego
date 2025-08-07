<script setup lang="ts">
const { components } = useComponents();

// Introduction pages (could also be config-driven)
const introPages = [
  { name: "Introduction", path: "/" },
];

const styles = {
  navBar: "flex-col sticky pt-6 top-20 w-40 h-full bg-white dark:bg-black px-6 z-30",
  navLink: "flex px-2 py-1 rounded hover:bg-black hover:bg-white/10 dark:hover:bg-opacity-10 text-black dark:text-white",
};
</script>

<template>
  <nav :class="styles.navBar">
    <!-- Introduction Section -->
    <div class="mb-6">
      <h3 class="text-xs font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-2 px-2">
        Get started
      </h3>
      <ul class="space-y-0">
        <li v-for="page in introPages" :key="page.path">
          <NuxtLink
            :to="page.path"
            :class="styles.navLink"
            active-class="bg-black/10 dark:bg-white/10 font-semibold"
          >
            {{ page.name }}
          </NuxtLink>
        </li>
      </ul>
    </div>

    <!-- Components Section -->
    <div>
      <h3 class="text-xs font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-2 px-2">
        Basic components
      </h3>
      <ul class="space-y-0">
        <li v-for="comp in components" :key="comp.path">
          <NuxtLink
            :to="comp.path"
            :class="styles.navLink"
            active-class="bg-black/10 dark:bg-white/10 font-semibold"
            class="relative justify-between"
          >
            <span>{{ comp.name }}</span>
            <!-- New Badge -->
            <DsBadge
              v-if="comp.isNew"
              size="xs"
              variant="outlined"
            >
              New
            </DsBadge>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
