<script setup lang="ts">
const { components } = useComponents();

// Set page title
useHead({
  title: "Components -",
});

// Get illustration path from component configuration
function getIllustrationPath(illustration?: string) {
  if (!illustration)
    return undefined;
  const { $config } = useNuxtApp();
  const baseURL = $config.app.baseURL || "/";
  return `${baseURL}illustrations/${illustration}`;
}

// Track failed images to show fallback
const failedImages = ref(new Set<string>());
const loadingImages = ref(new Set<string>());

function onImageLoad(componentName: string) {
  loadingImages.value.delete(componentName);
}

function onImageError(componentName: string) {
  failedImages.value.add(componentName);
  loadingImages.value.delete(componentName);
}

function shouldShowFallback(componentName: string) {
  return failedImages.value.has(componentName);
}

function isImageLoading(componentName: string) {
  return loadingImages.value.has(componentName);
}

// Initialize loading states
onMounted(() => {
  components.value.forEach((comp) => {
    if (comp.illustration) {
      loadingImages.value.add(comp.name);
    }
  });
});
</script>

<template>
  <UiDocs
    title="Components"
    description="Entire list of components available on REGO."
  >
    <!-- Component Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <NuxtLink
        v-for="comp in components"
        :key="comp.path"
        :to="comp.path"
        class="group relative overflow-hidden rounded-xl border border-primary/20 transition-all duration-300 hover:shadow-xs hover:-translate-y-1"
      >
        <!-- Illustration Container -->
        <div class="relative aspect-[4/3] overflow-hidden bg-card">
          <!-- Loading State -->
          <div
            v-if="isImageLoading(comp.name) && getIllustrationPath(comp.illustration)"
            class="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 animate-pulse"
          >
            <DsLoader
              size="sm"
              label="Loading component illustration"
            />
          </div>

          <!-- Component illustration (fallback to regular img) -->
          <img
            v-if="getIllustrationPath(comp.illustration)"
            :src="getIllustrationPath(comp.illustration)"
            :alt="`${comp.name} illustration`"
            class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            :class="{ 'opacity-0': isImageLoading(comp.name) }"
            loading="lazy"
            @load="onImageLoad(comp.name)"
            @error="onImageError(comp.name)"
          >

          <!-- Fallback when no illustration is available -->
          <div
            v-if="shouldShowFallback(comp.name) || !getIllustrationPath(comp.illustration)"
            class="absolute inset-0 flex items-center justify-center text-4xl text-gray-400 dark:text-gray-500"
          >
            <div class="w-16 h-16 rounded-lg bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M9 9h6v6H9z" />
              </svg>
            </div>
          </div>

          <!-- New Badge -->
          <div
            v-if="comp.isNew"
            class="absolute top-3 right-3"
          >
            <DsBadge variant="secondary">
              New
            </DsBadge>
          </div>
        </div>

        <!-- Card Content -->
        <div class="p-6 bg-card h-full">
          <div class="mb-2">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {{ comp.name }}
            </h3>
          </div>

          <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            {{ comp.description || `${comp.name} component documentation and examples.` }}
          </p>

          <!-- Category Tag -->
          <div
            v-if="comp.category"
            class="mt-4"
          >
            <ds-badge variant="secondary">
              {{ comp.category }}
            </ds-badge>
          </div>
        </div>

        <!-- Hover Gradient Overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </NuxtLink>
    </div>

    <!-- Empty State (if no components) -->
    <div
      v-if="components.length === 0"
      class="text-center py-12"
    >
      <div class="text-gray-400 dark:text-gray-500 text-lg">
        No components available
      </div>
    </div>
  </UiDocs>
</template>
