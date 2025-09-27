<script setup lang="ts">
import { Sparkle } from "lucide-vue-next";

const { components } = useComponents();

// Introduction pages (could also be config-driven)
const introPages = [
  { name: "Introduction", path: "/components" },
];

const styles = {
  navBar: "flex-col sticky pt-6 top-17 w-60 h-full px-6 z-30 bg-background/10 backdrop-blur-md",
  navLink: "flex p-2 rounded-sm hover:bg-primary/15 text-black dark:text-white text-sm",
};
</script>

<template>
  <nav :class="styles.navBar">
    <!-- Introduction Section -->
    <div class="mb-6">
      <h3 class="text-xs text-primary/50 uppercase tracking-widest mb-2 px-2">
        Get started
      </h3>
      <ul class="space-y-0">
        <li v-for="page in introPages" :key="page.path">
          <NuxtLink
            :to="page.path"
            :class="styles.navLink"
            active-class="bg-primary/15"
          >
            <span class="font-medium">{{ page.name }}</span>
          </NuxtLink>
        </li>
      </ul>
    </div>

    <!-- Components Section -->
    <div class="mb-6">
      <h3 class="text-xs text-primary/50 uppercase tracking-wider mb-2 px-2">
        Components
      </h3>
      <ul class="space-y-0">
        <li v-for="comp in components" :key="comp.path">
          <NuxtLink
            :to="comp.path"
            :class="styles.navLink"
            active-class="bg-primary/15 font-medium"
            class="relative justify-between"
          >
            <span class="font-regular truncate max-w-16 md:max-w-full">{{ comp.name }}</span>
            <!-- New Badge -->
            <Badge v-if="comp.isNew" collapsible>
              <Sparkle class="size-3" />
              <template #label>
                <span>New</span>
              </template>
            </Badge>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
