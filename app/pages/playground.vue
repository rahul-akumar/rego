<script setup>
definePageMeta({
  layout: "fullwidth",
});
</script>

<template>
  <div class="flex flex-col items-center p-8 gap-12">
    <h1 class="text-4xl font-bold">
      Hello World
    </h1>
    <DsButton>Button</DsButton>
    <UAlert
      color="neutral"
      title="Heads up!"
      description="You can change the primary color in your app config."
      icon="i-lucide-terminal"
    />
    <UModal
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      title="Modal with description"
    >
      <template #body>
        <UButton label="Open" color="neutral" variant="subtle" />
        <Placeholder class="h-48" />
      </template>
    </UModal>
    <UProgress v-model="value" />
    <UAvatarGroup>
      <UAvatar src="https://github.com/benjamincanac.png" alt="Benjamin Canac" />
      <UAvatar src="https://github.com/romhml.png" alt="Romain Hamel" />
      <UAvatar src="https://github.com/noook.png" alt="Neil Richter" />
    </UAvatarGroup>
    <div class="flex items-center gap-4">
      <USkeleton class="h-12 w-12 rounded-full" />
      <div class="grid gap-2">
        <USkeleton class="h-4 w-[250px]" />
        <USkeleton class="h-4 w-[200px]" />
      </div>
    </div>
  </div>
</template>
