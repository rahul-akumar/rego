<template>
  <div class="min-h-dvh flex flex-col">
    <NuxtRouteAnnouncer />
    <SiteHeader />
    <main class="flex flex-1 h-0">
      <div class="flex-1 overflow-y-auto bg-gray-900/10">
        <section class="container">
          <slot />
        </section>
      </div>
    </main>
    <SiteFooter />
  </div>
</template>
