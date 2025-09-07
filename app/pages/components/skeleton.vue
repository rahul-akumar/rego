<script setup lang="ts">
import { ImageIcon, User } from "lucide-vue-next";

const { name, description, category } = useComponent("skeleton");

definePageMeta({
  title: name,
  description,
});

// Code examples
const basicSkeletonCode = `<Skeleton loading class="w-full max-w-sm space-y-4">
  <SkeletonText :lines="3" />
  <SkeletonRectangle height="200px" />
  <div class="flex items-center space-x-4">
    <SkeletonCircle size="lg" />
    <div class="space-y-2 flex-1">
      <SkeletonText />
      <SkeletonText width="60%" />
    </div>
  </div>
</Skeleton>`;

const textSkeletonCode = `<div class="space-y-6">
  <!-- Single line -->
  <div class="space-y-2">
    <h3 class="text-sm font-medium">Single Line</h3>
    <Skeleton loading>
      <SkeletonText />
    </Skeleton>
  </div>

  <!-- Multiple lines -->
  <div class="space-y-2">
    <h3 class="text-sm font-medium">Multiple Lines</h3>
    <Skeleton loading>
      <SkeletonText :lines="3" />
    </Skeleton>
  </div>

  <!-- Custom width -->
  <div class="space-y-2">
    <h3 class="text-sm font-medium">Custom Width</h3>
    <Skeleton loading>
      <SkeletonText width="70%" />
      <SkeletonText width="50%" />
    </Skeleton>
  </div>
</div>`;

const rectangleSkeletonCode = `<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
  <!-- Default rectangle -->
  <div class="space-y-2">
    <h3 class="text-sm font-medium">Default Rectangle</h3>
    <Skeleton loading>
      <SkeletonRectangle />
    </Skeleton>
  </div>

  <!-- Custom dimensions -->
  <div class="space-y-2">
    <h3 class="text-sm font-medium">Custom Size</h3>
    <Skeleton loading>
      <SkeletonRectangle width="200px" height="100px" />
    </Skeleton>
  </div>

  <!-- Rounded variants -->
  <div class="space-y-2">
    <h3 class="text-sm font-medium">Rounded Variants</h3>
    <div class="space-y-2">
      <Skeleton loading>
        <SkeletonRectangle rounded="none" height="40px" />
      </Skeleton>
      <Skeleton loading>
        <SkeletonRectangle rounded="lg" height="40px" />
      </Skeleton>
    </div>
  </div>

  <!-- Full width -->
  <div class="space-y-2">
    <h3 class="text-sm font-medium">Full Width</h3>
    <Skeleton loading>
      <SkeletonRectangle height="60px" />
    </Skeleton>
  </div>
</div>`;

const circleSkeletonCode = `<div class="space-y-6">
  <!-- Size variants -->
  <div class="space-y-2">
    <h3 class="text-sm font-medium">Size Variants</h3>
    <Skeleton loading>
      <div class="flex items-center space-x-4">
        <SkeletonCircle size="xs" />
        <SkeletonCircle size="sm" />
        <SkeletonCircle size="default" />
        <SkeletonCircle size="lg" />
        <SkeletonCircle size="xl" />
        <SkeletonCircle size="2xl" />
      </div>
    </Skeleton>
  </div>

  <!-- Custom size -->
  <div class="space-y-2">
    <h3 class="text-sm font-medium">Custom Size</h3>
    <Skeleton loading>
      <div class="flex items-center space-x-4">
        <SkeletonCircle size="64px" />
        <SkeletonCircle :size="80" />
      </div>
    </Skeleton>
  </div>
</div>`;

const imageSkeletonCode = `<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
  <!-- Aspect ratio variants -->
  <div class="space-y-2">
    <h3 class="text-sm font-medium">Square</h3>
    <Skeleton loading class="w-32">
      <SkeletonImage aspect-ratio="square" />
    </Skeleton>
  </div>

  <div class="space-y-2">
    <h3 class="text-sm font-medium">Video (16:9)</h3>
    <Skeleton loading class="w-48">
      <SkeletonImage aspect-ratio="video" />
    </Skeleton>
  </div>

  <div class="space-y-2">
    <h3 class="text-sm font-medium">Portrait (3:4)</h3>
    <Skeleton loading class="w-32">
      <SkeletonImage aspect-ratio="portrait" />
    </Skeleton>
  </div>

  <div class="space-y-2">
    <h3 class="text-sm font-medium">Landscape (4:3)</h3>
    <Skeleton loading class="w-48">
      <SkeletonImage aspect-ratio="landscape" />
    </Skeleton>
  </div>
</div>`;

const animationThemesCode = `<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
  <!-- Default/Pulse -->
  <div class="space-y-2">
    <h3 class="text-sm font-medium">Default (Pulse)</h3>
    <Skeleton loading theme="default">
      <SkeletonText :lines="2" />
      <SkeletonRectangle height="60px" class="mt-2" />
    </Skeleton>
  </div>

  <!-- Pulse -->
  <div class="space-y-2">
    <h3 class="text-sm font-medium">Pulse</h3>
    <Skeleton loading theme="pulse">
      <SkeletonText :lines="2" />
      <SkeletonRectangle height="60px" class="mt-2" />
    </Skeleton>
  </div>

  <!-- Wave -->
  <div class="space-y-2">
    <h3 class="text-sm font-medium">Wave</h3>
    <Skeleton loading theme="wave">
      <SkeletonText :lines="2" />
      <SkeletonRectangle height="60px" class="mt-2" />
    </Skeleton>
  </div>
</div>`;

const animationSpeedCode = `<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
  <!-- Slow -->
  <div class="space-y-2">
    <h3 class="text-sm font-medium">Slow</h3>
    <Skeleton loading animation-speed="slow">
      <SkeletonText :lines="2" />
      <SkeletonCircle size="lg" class="mt-2" />
    </Skeleton>
  </div>

  <!-- Default -->
  <div class="space-y-2">
    <h3 class="text-sm font-medium">Default</h3>
    <Skeleton loading animation-speed="default">
      <SkeletonText :lines="2" />
      <SkeletonCircle size="lg" class="mt-2" />
    </Skeleton>
  </div>

  <!-- Fast -->
  <div class="space-y-2">
    <h3 class="text-sm font-medium">Fast</h3>
    <Skeleton loading animation-speed="fast">
      <SkeletonText :lines="2" />
      <SkeletonCircle size="lg" class="mt-2" />
    </Skeleton>
  </div>
</div>`;

const cardSkeletonCode = `<div class="max-w-md mx-auto">
  <Skeleton loading class="border rounded-lg p-6">
    <div class="flex items-center space-x-4 mb-4">
      <SkeletonCircle size="xl" />
      <div class="flex-1 space-y-2">
        <SkeletonText width="60%" />
        <SkeletonText width="40%" />
      </div>
    </div>
    <SkeletonImage aspect-ratio="video" class="mb-4" />
    <div class="space-y-2">
      <SkeletonText :lines="3" />
    </div>
    <div class="flex justify-between items-center mt-4">
      <SkeletonRectangle width="80px" height="32px" />
      <SkeletonRectangle width="60px" height="32px" />
    </div>
  </Skeleton>
</div>`;

const listSkeletonCode = `<div class="space-y-4">
  <div v-for="i in 3" :key="i" class="flex items-center space-x-4 p-4 border rounded-lg">
    <Skeleton loading>
      <SkeletonCircle size="lg" />
    </Skeleton>
    <div class="flex-1">
      <Skeleton loading>
        <SkeletonText width="70%" />
        <SkeletonText width="50%" class="mt-1" />
      </Skeleton>
    </div>
    <Skeleton loading>
      <SkeletonRectangle width="60px" height="24px" />
    </Skeleton>
  </div>
</div>`;

const conditionalSkeletonCode = `<!-- Toggle loading state -->
<div class="space-y-4">
  <button 
    @click="toggleLoading"
    class="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
  >
    {{ isLoading ? 'Load Content' : 'Show Skeleton' }}
  </button>

  <Skeleton :loading="isLoading">
    <div class="flex items-center space-x-4">
      <SkeletonCircle size="lg" />
      <div class="flex-1 space-y-2">
        <SkeletonText />
        <SkeletonText width="60%" />
      </div>
    </div>
    
    <template #loaded>
      <div class="flex items-center space-x-4">
        <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
          <User class="size-6 text-white" />
        </div>
        <div>
          <h3 class="font-semibold">John Doe</h3>
          <p class="text-sm text-muted-foreground">Software Engineer</p>
        </div>
      </div>
    </template>
  </Skeleton>
</div>`;

// Interactive example state
const interactiveLoading = ref(true);
const interactiveTheme = ref<"default" | "pulse" | "wave">("default");
const interactiveSpeed = ref<"slow" | "default" | "fast">("default");

function toggleInteractiveLoading() {
  interactiveLoading.value = !interactiveLoading.value;
}
</script>

<template>
  <UiDocs
    :title="name"
    :description="description"
    :category="category"
  >
    <div class="space-y-8">
      <!-- Basic Usage -->
      <section class="space-y-4">
        <h2 class="text-2xl font-medium text-black dark:text-white">
          Basic Usage
        </h2>
        <p class="text-sm text-foreground-secondary">
          The skeleton component provides loading placeholders with various shapes and animations. It uses a compound pattern with a main Skeleton wrapper and specialized sub-components.
        </p>
        <UiComponentPreviewTabs :code="basicSkeletonCode">
          <Skeleton loading class="w-full max-w-sm space-y-4">
            <SkeletonText :lines="3" />
            <SkeletonRectangle height="200px" />
            <div class="flex items-center space-x-4">
              <SkeletonCircle size="lg" />
              <div class="space-y-2 flex-1">
                <SkeletonText />
                <SkeletonText width="60%" />
              </div>
            </div>
          </Skeleton>
        </UiComponentPreviewTabs>
      </section>

      <!-- Text Skeleton -->
      <section class="space-y-4">
        <h2 class="text-2xl font-medium text-black dark:text-white">
          Text Skeleton
        </h2>
        <p class="text-sm text-foreground-secondary">
          Use SkeletonText for text content placeholders. Supports multiple lines and custom widths.
        </p>
        <UiComponentPreviewTabs :code="textSkeletonCode">
          <div class="space-y-6">
            <!-- Single line -->
            <div class="space-y-2">
              <h3 class="text-sm font-medium">
                Single Line
              </h3>
              <Skeleton loading>
                <SkeletonText />
              </Skeleton>
            </div>

            <!-- Multiple lines -->
            <div class="space-y-2">
              <h3 class="text-sm font-medium">
                Multiple Lines
              </h3>
              <Skeleton loading>
                <SkeletonText :lines="3" width="300px" />
              </Skeleton>
            </div>

            <!-- Custom width -->
            <div class="space-y-2">
              <h3 class="text-sm font-medium">
                Custom Width
              </h3>
              <Skeleton loading>
                <SkeletonText :lines="2" width="100%" />
              </Skeleton>
            </div>
          </div>
        </UiComponentPreviewTabs>
      </section>

      <!-- Rectangle Skeleton -->
      <section class="space-y-4">
        <h2 class="text-2xl font-medium text-black dark:text-white">
          Rectangle Skeleton
        </h2>
        <p class="text-sm text-foreground-secondary">
          Use SkeletonRectangle for block content placeholders with customizable dimensions and border radius.
        </p>
        <UiComponentPreviewTabs :code="rectangleSkeletonCode">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Default rectangle -->
            <div class="space-y-2">
              <h3 class="text-sm font-medium">
                Default Rectangle
              </h3>
              <Skeleton loading>
                <SkeletonRectangle />
              </Skeleton>
            </div>

            <!-- Custom dimensions -->
            <div class="space-y-2">
              <h3 class="text-sm font-medium">
                Custom Size
              </h3>
              <Skeleton loading>
                <SkeletonRectangle width="200px" height="100px" />
              </Skeleton>
            </div>

            <!-- Rounded variants -->
            <div class="space-y-2">
              <h3 class="text-sm font-medium">
                Rounded Variants
              </h3>
              <div class="space-y-2">
                <Skeleton loading>
                  <SkeletonRectangle rounded="none" height="40px" />
                </Skeleton>
                <Skeleton loading>
                  <SkeletonRectangle rounded="lg" height="40px" />
                </Skeleton>
              </div>
            </div>

            <!-- Full width -->
            <div class="space-y-2">
              <h3 class="text-sm font-medium">
                Full Width
              </h3>
              <Skeleton loading>
                <SkeletonRectangle height="60px" />
              </Skeleton>
            </div>
          </div>
        </UiComponentPreviewTabs>
      </section>

      <!-- Circle Skeleton -->
      <section class="space-y-4">
        <h2 class="text-2xl font-medium text-black dark:text-white">
          Circle Skeleton
        </h2>
        <p class="text-sm text-foreground-secondary">
          Use SkeletonCircle for circular placeholders like avatars and icons. Supports preset sizes and custom dimensions.
        </p>
        <UiComponentPreviewTabs :code="circleSkeletonCode">
          <div class="space-y-6">
            <!-- Size variants -->
            <div class="space-y-2">
              <h3 class="text-sm font-medium">
                Size Variants
              </h3>
              <Skeleton loading>
                <div class="flex items-center space-x-4">
                  <SkeletonCircle size="xs" />
                  <SkeletonCircle size="sm" />
                  <SkeletonCircle size="default" />
                  <SkeletonCircle size="lg" />
                  <SkeletonCircle size="xl" />
                  <SkeletonCircle size="2xl" />
                </div>
              </Skeleton>
            </div>

            <!-- Custom size -->
            <div class="space-y-2">
              <h3 class="text-sm font-medium">
                Custom Size
              </h3>
              <Skeleton loading>
                <div class="flex items-center space-x-4">
                  <SkeletonCircle size="64px" />
                  <SkeletonCircle :size="80" />
                </div>
              </Skeleton>
            </div>
          </div>
        </UiComponentPreviewTabs>
      </section>

      <!-- Image Skeleton -->
      <section class="space-y-4">
        <h2 class="text-2xl font-medium text-black dark:text-white">
          Image Skeleton
        </h2>
        <p class="text-sm text-foreground-secondary">
          Use SkeletonImage for image placeholders with different aspect ratios and an optional icon indicator.
        </p>
        <UiComponentPreviewTabs :code="imageSkeletonCode">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Aspect ratio variants -->
            <div class="space-y-2">
              <h3 class="text-sm font-medium">
                Square
              </h3>
              <Skeleton loading class="w-32">
                <SkeletonImage aspect-ratio="square" />
              </Skeleton>
            </div>

            <div class="space-y-2">
              <h3 class="text-sm font-medium">
                Video (16:9)
              </h3>
              <Skeleton loading class="w-48">
                <SkeletonImage aspect-ratio="video" />
              </Skeleton>
            </div>

            <div class="space-y-2">
              <h3 class="text-sm font-medium">
                Portrait (3:4)
              </h3>
              <Skeleton loading class="w-32">
                <SkeletonImage aspect-ratio="portrait" />
              </Skeleton>
            </div>

            <div class="space-y-2">
              <h3 class="text-sm font-medium">
                Landscape (4:3)
              </h3>
              <Skeleton loading class="w-48">
                <SkeletonImage aspect-ratio="landscape" />
              </Skeleton>
            </div>
          </div>
        </UiComponentPreviewTabs>
      </section>

      <!-- Animation Themes -->
      <section class="space-y-4">
        <h2 class="text-2xl font-medium text-black dark:text-white">
          Animation Themes
        </h2>
        <p class="text-sm text-foreground-secondary">
          Choose from different animation themes: default/pulse for a simple fade effect, or wave for a shimmer animation.
        </p>
        <UiComponentPreviewTabs :code="animationThemesCode">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- Default/Pulse -->
            <div class="space-y-2">
              <h3 class="text-sm font-medium">
                Default (Pulse)
              </h3>
              <Skeleton loading theme="default">
                <SkeletonText :lines="2" />
                <SkeletonRectangle height="60px" class="mt-2" />
              </Skeleton>
            </div>

            <!-- Pulse -->
            <div class="space-y-2">
              <h3 class="text-sm font-medium">
                Pulse
              </h3>
              <Skeleton loading theme="pulse">
                <SkeletonText :lines="2" />
                <SkeletonRectangle height="60px" class="mt-2" />
              </Skeleton>
            </div>

            <!-- Wave -->
            <div class="space-y-2">
              <h3 class="text-sm font-medium">
                Wave
              </h3>
              <Skeleton loading theme="wave">
                <SkeletonText :lines="2" />
                <SkeletonRectangle height="60px" class="mt-2" />
              </Skeleton>
            </div>
          </div>
        </UiComponentPreviewTabs>
      </section>

      <!-- Animation Speed -->
      <section class="space-y-4">
        <h2 class="text-2xl font-medium text-black dark:text-white">
          Animation Speed
        </h2>
        <p class="text-sm text-foreground-secondary">
          Control the animation speed with slow, default, or fast options.
        </p>
        <UiComponentPreviewTabs :code="animationSpeedCode">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- Slow -->
            <div class="space-y-2">
              <h3 class="text-sm font-medium">
                Slow
              </h3>
              <Skeleton loading animation-speed="slow">
                <SkeletonText :lines="2" />
                <SkeletonCircle size="lg" class="mt-2" />
              </Skeleton>
            </div>

            <!-- Default -->
            <div class="space-y-2">
              <h3 class="text-sm font-medium">
                Default
              </h3>
              <Skeleton loading animation-speed="default">
                <SkeletonText :lines="2" />
                <SkeletonCircle size="lg" class="mt-2" />
              </Skeleton>
            </div>

            <!-- Fast -->
            <div class="space-y-2">
              <h3 class="text-sm font-medium">
                Fast
              </h3>
              <Skeleton loading animation-speed="fast">
                <SkeletonText :lines="2" />
                <SkeletonCircle size="lg" class="mt-2" />
              </Skeleton>
            </div>
          </div>
        </UiComponentPreviewTabs>
      </section>

      <!-- Card Layout Example -->
      <section class="space-y-4">
        <h2 class="text-2xl font-medium text-black dark:text-white">
          Card Layout Example
        </h2>
        <p class="text-sm text-foreground-secondary">
          Example of using skeleton components to create a card layout placeholder.
        </p>
        <UiComponentPreviewTabs :code="cardSkeletonCode">
          <div class="max-w-md mx-auto">
            <Skeleton loading class="border rounded-lg p-6">
              <div class="flex items-center space-x-4 mb-4">
                <SkeletonCircle size="xl" />
                <div class="flex-1 space-y-2">
                  <SkeletonText width="60%" />
                  <SkeletonText width="40%" />
                </div>
              </div>
              <SkeletonImage aspect-ratio="video" class="mb-4" />
              <div class="space-y-2">
                <SkeletonText :lines="3" />
              </div>
              <div class="flex justify-between items-center mt-4">
                <SkeletonRectangle width="80px" height="32px" />
                <SkeletonRectangle width="60px" height="32px" />
              </div>
            </Skeleton>
          </div>
        </UiComponentPreviewTabs>
      </section>

      <!-- List Layout Example -->
      <section class="space-y-4">
        <h2 class="text-2xl font-medium text-black dark:text-white">
          List Layout Example
        </h2>
        <p class="text-sm text-foreground-secondary">
          Example of using skeleton components for list items with consistent spacing.
        </p>
        <UiComponentPreviewTabs :code="listSkeletonCode">
          <div class="space-y-4">
            <div v-for="i in 3" :key="i" class="flex items-center space-x-4 p-4 border rounded-lg">
              <Skeleton loading>
                <SkeletonCircle size="lg" />
              </Skeleton>
              <div class="flex-1">
                <Skeleton loading>
                  <SkeletonText width="70%" />
                  <SkeletonText width="50%" class="mt-1" />
                </Skeleton>
              </div>
              <Skeleton loading>
                <SkeletonRectangle width="60px" height="24px" />
              </Skeleton>
            </div>
          </div>
        </UiComponentPreviewTabs>
      </section>

      <!-- Conditional Loading -->
      <section class="space-y-4">
        <h2 class="text-2xl font-medium text-black dark:text-white">
          Conditional Loading
        </h2>
        <p class="text-sm text-foreground-secondary">
          Control when skeletons are shown with the loading prop. Use the #loaded slot for actual content.
        </p>
        <UiComponentPreviewTabs :code="conditionalSkeletonCode">
          <div class="space-y-4">
            <button
              class="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
              @click="toggleInteractiveLoading"
            >
              {{ interactiveLoading ? 'Load Content' : 'Show Skeleton' }}
            </button>

            <Skeleton :loading="interactiveLoading">
              <div class="flex items-center space-x-4">
                <SkeletonCircle size="lg" />
                <div class="flex-1 space-y-2">
                  <SkeletonText />
                  <SkeletonText width="60%" />
                </div>
              </div>

              <template #loaded>
                <div class="flex items-center space-x-4">
                  <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <User class="size-6 text-white" />
                  </div>
                  <div>
                    <h3 class="font-semibold">
                      John Doe
                    </h3>
                    <p class="text-sm text-muted-foreground">
                      Software Engineer
                    </p>
                  </div>
                </div>
              </template>
            </Skeleton>
          </div>
        </UiComponentPreviewTabs>
      </section>

      <!-- Interactive Playground -->
      <section class="space-y-4">
        <h2 class="text-2xl font-medium text-black dark:text-white">
          Interactive Playground
        </h2>
        <p class="text-sm text-foreground-secondary">
          Try different combinations of props to see how they affect the skeleton appearance.
        </p>
        <div class="border rounded-lg p-6 space-y-6">
          <!-- Controls -->
          <div class="flex flex-wrap gap-4">
            <label class="flex items-center space-x-2">
              <input
                v-model="interactiveLoading"
                type="checkbox"
                class="rounded"
              >
              <span class="text-sm">Loading</span>
            </label>

            <label class="flex items-center space-x-2">
              <span class="text-sm">Theme:</span>
              <select
                v-model="interactiveTheme"
                class="px-2 py-1 border rounded text-sm"
              >
                <option value="default">Default</option>
                <option value="pulse">Pulse</option>
                <option value="wave">Wave</option>
              </select>
            </label>

            <label class="flex items-center space-x-2">
              <span class="text-sm">Speed:</span>
              <select
                v-model="interactiveSpeed"
                class="px-2 py-1 border rounded text-sm"
              >
                <option value="slow">Slow</option>
                <option value="default">Default</option>
                <option value="fast">Fast</option>
              </select>
            </label>
          </div>

          <!-- Preview -->
          <div class="border-t pt-6">
            <Skeleton
              :loading="interactiveLoading"
              :theme="interactiveTheme"
              :animation-speed="interactiveSpeed"
              class="max-w-sm"
            >
              <div class="space-y-4">
                <div class="flex items-center space-x-3">
                  <SkeletonCircle size="lg" />
                  <div class="flex-1 space-y-2">
                    <SkeletonText />
                    <SkeletonText width="60%" />
                  </div>
                </div>
                <SkeletonRectangle height="120px" />
                <SkeletonText :lines="2" />
              </div>

              <template #loaded>
                <div class="space-y-4">
                  <div class="flex items-center space-x-3">
                    <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <User class="size-6 text-white" />
                    </div>
                    <div>
                      <h3 class="font-semibold">
                        Sarah Johnson
                      </h3>
                      <p class="text-sm text-muted-foreground">
                        UX Designer
                      </p>
                    </div>
                  </div>
                  <div class="bg-gradient-to-r from-pink-500 to-orange-400 rounded-md h-32 flex items-center justify-center">
                    <ImageIcon class="size-12 text-white/80" />
                  </div>
                  <p class="text-sm text-foreground-secondary leading-relaxed">
                    Passionate about creating intuitive user experiences and beautiful interfaces that make technology accessible to everyone.
                  </p>
                </div>
              </template>
            </Skeleton>
          </div>
        </div>
      </section>
    </div>
  </UiDocs>
</template>
