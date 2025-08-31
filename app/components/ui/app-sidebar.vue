<script setup lang="ts">
const { componentsByCategory } = useComponents();

// Introduction pages (could also be config-driven)
const introPages = [
  { name: "Introduction", path: "/components" },
];

// Category display configuration
const categoryConfig: Record<string, { name: string; order: number }> = {
  "form": { name: "Form components", order: 1 },
  "feedback": { name: "Feedback components", order: 2 },
  "data-display": { name: "Data display", order: 3 },
  "navigation": { name: "Navigation", order: 4 },
  "chart": { name: "Chart components", order: 5 },
  "other": { name: "Other components", order: 999 },
};

const styles = {
  navBar: "flex-col fixed pt-6 top-20 w-60 h-full px-6 z-30",
  navLink: "flex px-2 py-1 rounded-sm hover:bg-primary/10 text-foreground",
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
    <div
      v-for="[categoryKey, components] in Object.entries(componentsByCategory).sort(([a], [b]) =>
        (categoryConfig[a]?.order || 999) - (categoryConfig[b]?.order || 999),
      )"
      :key="categoryKey"
      class="mb-6"
    >
      <h3 class="text-xs font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-2 px-2">
        {{ categoryConfig[categoryKey]?.name || categoryKey }}
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
