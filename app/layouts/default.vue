<template>
  <div class="min-h-dvh flex flex-col">
    <NuxtRouteAnnouncer />
    <SiteHeader />
    <main class="flex flex-1 h-0">
      <MainNav />
      <div class="flex-1 overflow-y-auto">
        <section class="container w-2xl mx-auto">
          <slot />
        </section>
      </div>
    </main>
    <SiteFooter />
  </div>
</template>
