<script setup lang="ts">
const styles = {
  inspectFrame:
    "w-full h-auto p-10 flex items-center justify-center rounded border bg-neutral-500/10 border-neutral-100 dark:border-neutral-900",
};
</script>

<template>
  <div class="flex flex-col p-10 gap-10 bg-transparent">
    <section class="flex-col">
      <h1 class="text-4xl pb-1 font-bold text-black dark:text-white">
        Badge
      </h1>
      <p class="text-neutral-500">
        Badges are small status descriptors for UI elements. They can contain text, numbers, or icons.
      </p>
    </section>

    <!-- Variants -->
    <section class="space-y-4">
      <h2 class="text-2xl font-medium text-black dark:text-white">
        Variants
      </h2>
      <div class="flex flex-wrap gap-8">
        <div :class="styles.inspectFrame">
          <DsBadge variant="primary">
            Primary
          </DsBadge>
        </div>
        <div :class="styles.inspectFrame">
          <DsBadge variant="secondary">
            Secondary
          </DsBadge>
        </div>
        <div :class="styles.inspectFrame">
          <DsBadge variant="outlined">
            Outlined
          </DsBadge>
        </div>
        <div :class="styles.inspectFrame">
          <DsBadge variant="destructive">
            Destructive
          </DsBadge>
        </div>
      </div>
    </section>

    <!-- Sizes -->
    <section class="space-y-4">
      <h2 class="text-2xl font-medium text-black dark:text-white">
        Sizes
      </h2>
      <div class="flex flex-wrap gap-8">
        <div :class="styles.inspectFrame">
          <DsBadge size="xs">
            Extra Small
          </DsBadge>
        </div>
        <div :class="styles.inspectFrame">
          <DsBadge size="sm">
            Small
          </DsBadge>
        </div>
        <div :class="styles.inspectFrame">
          <DsBadge size="md">
            Medium
          </DsBadge>
        </div>
        <div :class="styles.inspectFrame">
          <DsBadge size="lg">
            Large
          </DsBadge>
        </div>
      </div>
    </section>

    <!-- String Examples -->
    <section class="space-y-4">
      <h2 class="text-2xl font-medium text-black dark:text-white">
        String Examples
      </h2>
      <div class="flex flex-wrap gap-8">
        <div :class="styles.inspectFrame">
          <DsBadge variant="primary">
            New
          </DsBadge>
        </div>
        <div :class="styles.inspectFrame">
          <DsBadge variant="secondary">
            Beta
          </DsBadge>
        </div>
        <div :class="styles.inspectFrame">
          <DsBadge variant="outlined">
            Pro
          </DsBadge>
        </div>
        <div :class="styles.inspectFrame">
          <DsBadge variant="destructive">
            Sale
          </DsBadge>
        </div>
      </div>
      <div class="flex flex-wrap gap-8">
        <div :class="styles.inspectFrame">
          <DsBadge variant="primary">
            Featured
          </DsBadge>
        </div>
        <div :class="styles.inspectFrame">
          <DsBadge variant="secondary">
            Draft
          </DsBadge>
        </div>
        <div :class="styles.inspectFrame">
          <DsBadge variant="outlined">
            Premium
          </DsBadge>
        </div>
        <div :class="styles.inspectFrame">
          <DsBadge variant="destructive">
            Limited
          </DsBadge>
        </div>
      </div>
    </section>

    <!-- Numeric Examples -->
    <section class="space-y-4">
      <h2 class="text-2xl font-medium text-black dark:text-white">
        Numeric Examples
      </h2>
      <div class="flex flex-wrap gap-8">
        <div :class="styles.inspectFrame">
          <DsBadge variant="primary" :label="5" />
        </div>
        <div :class="styles.inspectFrame">
          <DsBadge variant="secondary" :label="42" />
        </div>
        <div :class="styles.inspectFrame">
          <DsBadge variant="outlined" label="99+" />
        </div>
        <div :class="styles.inspectFrame">
          <DsBadge variant="destructive" label="1.2k" />
        </div>
      </div>
      <div class="flex flex-wrap gap-8">
        <div :class="styles.inspectFrame">
          <DsBadge variant="primary" :label="0" />
        </div>
        <div :class="styles.inspectFrame">
          <DsBadge variant="secondary" :label="999" />
        </div>
        <div :class="styles.inspectFrame">
          <DsBadge variant="outlined" label="∞" />
        </div>
        <div :class="styles.inspectFrame">
          <DsBadge variant="destructive" :label="1" />
        </div>
      </div>
    </section>

    <!-- With Prepend Icons -->
    <section class="space-y-4">
      <h2 class="text-2xl font-medium text-black dark:text-white">
        With Prepend Icons
      </h2>
      <div class="flex flex-wrap gap-8">
        <div :class="styles.inspectFrame">
          <DsBadge variant="primary" label="Notifications" :prepend-icon="true">
            <template #prepend-icon>
              <svg class="size-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
            </template>
          </DsBadge>
        </div>
        <div :class="styles.inspectFrame">
          <DsBadge variant="secondary" label="Starred" :prepend-icon="true">
            <template #prepend-icon>
              <svg class="size-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </template>
          </DsBadge>
        </div>
        <div :class="styles.inspectFrame">
          <DsBadge variant="outlined" :label="3" :prepend-icon="true">
            <template #prepend-icon>
              <svg class="size-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
              </svg>
            </template>
          </DsBadge>
        </div>
        <div :class="styles.inspectFrame">
          <DsBadge variant="destructive" label="Error" :prepend-icon="true">
            <template #prepend-icon>
              <svg class="size-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
              </svg>
            </template>
          </DsBadge>
        </div>
      </div>
    </section>

    <!-- With Append Icons -->
    <section class="space-y-4">
      <h2 class="text-2xl font-medium text-black dark:text-white">
        With Append Icons
      </h2>
      <div class="flex flex-wrap gap-8">
        <div :class="styles.inspectFrame">
          <DsBadge variant="primary" label="Removable" :append-icon="true">
            <template #append-icon>
              <svg class="size-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            </template>
          </DsBadge>
        </div>
        <div :class="styles.inspectFrame">
          <DsBadge variant="secondary" label="External" :append-icon="true">
            <template #append-icon>
              <svg class="size-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clip-rule="evenodd" />
                <path fill-rule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clip-rule="evenodd" />
              </svg>
            </template>
          </DsBadge>
        </div>
        <div :class="styles.inspectFrame">
          <DsBadge variant="outlined" label="Download" :append-icon="true">
            <template #append-icon>
              <svg class="size-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </template>
          </DsBadge>
        </div>
        <div :class="styles.inspectFrame">
          <DsBadge variant="destructive" label="Warning" :append-icon="true">
            <template #append-icon>
              <svg class="size-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
              </svg>
            </template>
          </DsBadge>
        </div>
      </div>
    </section>

    <!-- Both Icons -->
    <section class="space-y-4">
      <h2 class="text-2xl font-medium text-black dark:text-white">
        With Both Icons
      </h2>
      <div class="flex flex-wrap gap-8">
        <div :class="styles.inspectFrame">
          <DsBadge variant="primary" label="5" :prepend-icon="true" :append-icon="true">
            <template #prepend-icon>
              <svg class="size-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
            </template>
            <template #append-icon>
              <svg class="size-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            </template>
          </DsBadge>
        </div>
        <div :class="styles.inspectFrame">
          <DsBadge variant="secondary" label="Tag" :prepend-icon="true" :append-icon="true">
            <template #prepend-icon>
              <svg class="size-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.5 3A2.5 2.5 0 003 5.5v2.879a2.5 2.5 0 00.732 1.767l6.5 6.5a2.5 2.5 0 003.536 0l2.878-2.878a2.5 2.5 0 000-3.536l-6.5-6.5A2.5 2.5 0 008.38 3H5.5zM6 7a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
              </svg>
            </template>
            <template #append-icon>
              <svg class="size-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            </template>
          </DsBadge>
        </div>
      </div>
    </section>

    <!-- Mixed Examples -->
    <section class="space-y-4">
      <h2 class="text-2xl font-medium text-black dark:text-white">
        Mixed Size Examples
      </h2>
      <div class="flex flex-wrap gap-8">
        <div :class="styles.inspectFrame">
          <DsBadge size="xs" variant="primary" :label="1" />
        </div>
        <div :class="styles.inspectFrame">
          <DsBadge size="sm" variant="secondary" :label="12" />
        </div>
        <div :class="styles.inspectFrame">
          <DsBadge size="md" variant="outlined" label="99+" />
        </div>
        <div :class="styles.inspectFrame">
          <DsBadge size="lg" variant="destructive" label="1.2k" />
        </div>
      </div>
    </section>

    <!-- Status Indicators -->
    <section class="space-y-4">
      <h2 class="text-2xl font-medium text-black dark:text-white">
        Status Indicators
      </h2>
      <div class="flex flex-wrap gap-8">
        <div :class="styles.inspectFrame">
          <DsBadge variant="primary" label="Online" :prepend-icon="true">
            <template #prepend-icon>
              <svg class="size-3" fill="currentColor" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="6" fill="currentColor" />
              </svg>
            </template>
          </DsBadge>
        </div>
        <div :class="styles.inspectFrame">
          <DsBadge variant="secondary" label="Away" :prepend-icon="true">
            <template #prepend-icon>
              <svg class="size-3" fill="currentColor" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="6" fill="currentColor" />
              </svg>
            </template>
          </DsBadge>
        </div>
        <div :class="styles.inspectFrame">
          <DsBadge variant="outlined" label="Busy" :prepend-icon="true">
            <template #prepend-icon>
              <svg class="size-3" fill="currentColor" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="6" fill="currentColor" />
              </svg>
            </template>
          </DsBadge>
        </div>
        <div :class="styles.inspectFrame">
          <DsBadge variant="destructive" label="Offline" :prepend-icon="true">
            <template #prepend-icon>
              <svg class="size-3" fill="currentColor" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="6" fill="currentColor" />
              </svg>
            </template>
          </DsBadge>
        </div>
      </div>
    </section>
  </div>
</template>
