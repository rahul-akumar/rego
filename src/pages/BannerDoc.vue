<script setup lang="ts">
import Banner from "../components/banner.vue";
import { Plus, Bell, X } from "lucide-vue-next";
import Button from "../components/button.vue";
</script>

<template>
  <div class="flex flex-col m-10 gap-10 bg-transparent">
    <section class="flex-col">
      <h1 class="text-4xl pb-1 font-bold text-black dark:text-white">Banner</h1>
      <p class="text-gray-500 dark:text-gray-400">
        Banner is used to display important messages or alerts to the user.
      </p>
    </section>

    <!-- Variants -->
    <section class="space-y-4">
      <h2 class="text-2xl font-semibold text-black dark:text-white">
        Variants
      </h2>
      <div class="flex flex-col gap-4 max-w-xl">
        <Banner message="This is a default banner." />
        <Banner important message="This is an important banner!" />
      </div>
    </section>

    <section class="space-y-4">
      <h2 class="text-2xl font-semibold text-black dark:text-white">
        Examples
      </h2>
      <div class="flex flex-col gap-4 max-w-xl">
        <!-- Regular variants -->
        <Banner variant="info" message="This is an info banner." />
        <Banner variant="success" message="This is a success banner." />
        <Banner variant="warning" message="This is a warning banner." />
        <Banner variant="danger" message="This is a danger banner." />

        <!-- Important variants -->
        <Banner
          variant="info"
          important
          message="This is an important info banner."
        />
        <Banner
          variant="success"
          important
          message="This is an important success banner."
        />
        <Banner
          variant="warning"
          important
          message="This is an important warning banner."
        />
        <Banner
          variant="danger"
          important
          message="This is an important danger banner."
        />
      </div>
    </section>

    <!-- Slot Example -->
    <section class="space-y-4">
      <h2 class="text-2xl font-semibold text-black dark:text-white">
        Custom slots
      </h2>
      <div class="flex flex-col gap-4 max-w-xl">
        <Banner>
          <template #default
            >This banner uses the default slot for custom content.</template
          >
        </Banner>
        <Banner important>
          <template #icon>
            <Plus color="red" />
          </template>
          <template #default>
            <span class="font-bold">Important:</span> This banner uses slots
            with custom formatting.
          </template>
        </Banner>
      </div>
    </section>

    <!-- All Slots in One Banner Example -->
    <section class="space-y-4">
      <h2 class="text-2xl font-semibold text-black dark:text-white">
        All Slots Example
      </h2>
      <div class="flex flex-col gap-4 max-w-xl">
        <Banner important>
          <!-- Icon slot -->
          <template #icon>
            <Bell class="size-5" />
          </template>

          <!-- Default content slot -->
          <template #default>
            <div>
              <strong>System Alert</strong>
              This is an example.
            </div>
          </template>

          <!-- Button slot -->
          <template #button>
            <Button size="xs" inverted>Take Action</Button>
          </template>

          <!-- Actions slot -->
          <template #actions>
            <Button size="xs" variant="ghost" iconOnly inverted>
              <template #icon>
                <X class="size-5" />
              </template>
            </Button>
          </template>
        </Banner>
      </div>
    </section>
  </div>
</template>
