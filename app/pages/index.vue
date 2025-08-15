<script setup lang="ts">
const { components } = useComponents();

const styles = {
  inspectFrame:
    "w-full h-auto p-6 flex items-center justify-center rounded border bg-neutral-500/10 border-neutral-100 dark:border-neutral-900",
  techCard:
    "p-4 rounded border bg-black/5 dark:bg-white/5 border-black/5 dark:border-white/5 hover:border-black/10 dark:hover:border-white/10 transition-colors",
};

const techStack = [
  {
    name: "Vue 3",
    description: "Progressive JavaScript framework with Composition API",
    icon: "logos:vue",
  },
  {
    name: "TypeScript",
    description: "Type-safe JavaScript development",
    icon: "logos:typescript-icon",
  },
  {
    name: "Vite",
    description: "Fast build tool and development server",
    icon: "logos:vitejs",
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS framework for styling",
    icon: "logos:tailwindcss-icon",
  },
  {
    name: "Vue Router",
    description: "Official routing library for Vue.js",
    icon: "logos:nuxt-icon",
  },
  {
    name: "Lucide Icons",
    description: "Beautiful & consistent icon library",
    icon: "✨",
  },
];

definePageMeta({
  layout: "full-width",
});
</script>

<template>
  <div class="flex flex-col pt-8 gap-10">
    <!-- Header Section -->
    <section class="flex-col">
      <h1 class="text-4xl pb-1 font-bold text-black dark:text-white">
        Welcome to REGO
      </h1>
      <p class="text-neutral-500 text-lg">
        A modern Vue 3 component library built with TypeScript and Tailwind CSS
      </p>
    </section>

    <!-- About Section -->
    <section class="space-y-4">
      <h2 class="text-2xl font-medium text-black dark:text-white">
        About REGO
      </h2>
      <div class="max-w-2xl">
        <p class="text-neutral-600 dark:text-neutral-400 leading-relaxed">
          REGO is a comprehensive component library designed to help developers
          build beautiful and consistent user interfaces quickly. Each component
          is crafted with accessibility, performance, and developer experience
          in mind.
        </p>
      </div>
    </section>

    <!-- Tech Stack Section -->
    <section class="space-y-4">
      <h2 class="text-2xl font-medium text-black dark:text-white">
        Tech Stack
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="tech in techStack"
          :key="tech.name"
          :class="styles.techCard"
        >
          <div class="flex items-start gap-3">
            <UIcon :name="tech.icon" class="size-24" />
            <div>
              <h3 class="font-semibold text-black dark:text-white">
                {{ tech.name }}
              </h3>
              <p class="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                {{ tech.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Components Overview -->
    <section class="space-y-4">
      <h2 class="text-2xl font-medium text-black dark:text-white">
        Available Components
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <RouterLink
          v-for="component in components"
          :key="component.name"
          :to="component.path"
          :class="styles.techCard"
          class="block hover:scale-[1.02] transition-transform"
        >
          <div>
            <div class="flex items-center justify-between mb-2">
              <h3 class="font-semibold text-black dark:text-white">
                {{ component.name }}
              </h3>
              <DsBadge v-if="component.isNew" size="xs">
                New
              </DsBadge>
            </div>
            <p class="text-sm text-neutral-600 dark:text-neutral-400">
              {{ component.description }}
            </p>
          </div>
        </RouterLink>
      </div>
    </section>

    <!-- Getting Started -->
    <section class="space-y-4">
      <h2 class="text-2xl font-medium text-black dark:text-white">
        Getting Started
      </h2>
      <div class="text-left max-w-2xl space-y-4">
        <div class="flex items-center gap-3">
          <Code class="size-5 text-blue-500" />
          <span class="text-neutral-700 dark:text-neutral-300">
            Explore components using the navigation sidebar
          </span>
        </div>
        <div class="flex items-center gap-3">
          <Palette class="size-5 text-purple-500" />
          <span class="text-neutral-700 dark:text-neutral-300">
            Toggle between light and dark themes
          </span>
        </div>
        <div class="flex items-center gap-3">
          <Zap class="size-5 text-yellow-500" />
          <span class="text-neutral-700 dark:text-neutral-300">
            Interactive examples with live previews
          </span>
        </div>
        <div class="flex items-center gap-3">
          <Package class="size-5 text-green-500" />
          <span class="text-neutral-700 dark:text-neutral-300">
            Copy-paste ready component implementations
          </span>
        </div>
      </div>
    </section>
  </div>
</template>
