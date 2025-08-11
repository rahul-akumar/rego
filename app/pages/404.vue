<template>
  <div class="min-h-[60vh] flex flex-col items-center justify-center gap-4 text-center">
    <h1 class="text-5xl font-bold text-black dark:text-white">
      404
    </h1>
    <p class="text-neutral-600 dark:text-neutral-300">
      The page you’re looking for could not be found.
    </p>
    <NuxtLink
      to="/"
      class="inline-flex items-center rounded px-4 py-2 bg-black text-white dark:bg-white dark:text-black"
    >
      Go to Home
    </NuxtLink>
  </div>
</template>
