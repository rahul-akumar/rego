<script setup lang="ts">
import {
  Braces,
  Code2,
  Route,
  Sparkles,
  Wind,
  Zap,
} from "lucide-vue-next";

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
    icon: Code2,
  },
  {
    name: "TypeScript",
    description: "Type-safe JavaScript development",
    icon: Braces,
  },
  {
    name: "Vite",
    description: "Fast build tool and development server",
    icon: Zap,
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS framework for styling",
    icon: Wind,
  },
  {
    name: "Vue Router",
    description: "Official routing library for Vue.js",
    icon: Route,
  },
  {
    name: "Lucide Icons",
    description: "Beautiful & consistent icon library",
    icon: Sparkles,
  },
];

definePageMeta({
  layout: "full-width",
});
</script>

<template>
  <div class="flex flex-col pt-8 gap-10">
    <!-- Header Section -->
    <header class="flex-col">
      <h1 class="text-3xl mb-2 font-bold text-black dark:text-white text-center">
        Customizable design system
      </h1>
      <p class="text-neutral-500 text-lg text-center leading-relaxed">
        A set of beautifully designed components you can customize for your projects.
        <br>
        You don't have to start from a blank slate.
      </p>
      <div class="flex justify-center mt-4 gap-4">
        <Button size="sm" @click="navigateTo('/themes')">
          Get started
        </Button>
        <Button variant="ghost" size="sm" @click="navigateTo('/components')">
          View components
        </Button>
      </div>
    </header>

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
            <component :is="tech.icon" class="size-8 text-neutral-700 dark:text-neutral-300" />
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
              <Badge v-if="component.isNew" size="xs">
                New
              </Badge>
            </div>
            <p class="text-sm text-neutral-600 dark:text-neutral-400">
              {{ component.description }}
            </p>
          </div>
        </RouterLink>
      </div>
    </section>
  </div>
</template>
