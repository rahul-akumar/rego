<script setup lang="ts">
const { components } = useComponents();

// Introduction pages (could also be config-driven)
const introPages = [
  { name: "Introduction", path: "/components" },
];

const styles = {
  navBar: "flex-col sticky pt-6 top-17 w-60 h-full px-6 z-30 bg-background/10 backdrop-blur-md",
  navLink: "flex p-2 rounded-sm hover:bg-primary/10 text-foreground text-base",
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
            active-class="bg-primary/20 font-semibold"
          >
            {{ page.name }}
          </NuxtLink>
        </li>
      </ul>
    </div>

    <!-- Components Section -->
    <div class="mb-6">
      <h3 class="text-xs font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-2 px-2">
        Components
      </h3>
      <ul class="space-y-0">
        <li v-for="comp in components" :key="comp.path">
          <NuxtLink
            :to="comp.path"
            :class="styles.navLink"
            active-class="bg-primary/20 font-semibold"
            class="relative justify-between"
          >
            <span>{{ comp.name }}</span>
            <!-- New Badge -->
            <DsBadge
              v-if="comp.isNew"
            >
              New
            </DsBadge>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
