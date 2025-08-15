<script setup lang="ts">
// State to control alert visibility in App.vue
const showAppAlert = ref(false);
function toggleAppAlert() {
  showAppAlert.value = !showAppAlert.value;
  // Use localStorage to communicate with App.vue
  localStorage.setItem("showREGOAlert", showAppAlert.value.toString());
  // Dispatch a custom event that App.vue can listen for
  window.dispatchEvent(
    new CustomEvent("toggle-rego-alert", {
      detail: { visible: showAppAlert.value },
    }),
  );
}
const styles = {
  inspectFrame:
    "w-full h-auto p-10 flex items-center justify-center rounded border bg-neutral-500/10 border-neutral-100 dark:border-neutral-900",
};
</script>

<template>
  <div class="flex flex-col m-10 gap-10 bg-transparent">
    <section class="flex-col">
      <h1 class="text-4xl pb-1 font-bold text-black dark:text-white">
        Alert
      </h1>
      <p class="text-gray-500 dark:text-gray-400">
        Alert is used to display important messages to the user.
      </p>
    </section>

    <!-- Variants -->
    <section class="space-y-4">
      <h2 class="text-2xl font-semibold text-black dark:text-white">
        Variants
      </h2>
      <div class="flex flex-col gap-4 max-w-xl">
        <DsAlert message="This is a default alert." />
        <DsAlert important message="This is an important alert!" />
      </div>
    </section>
    <!-- Alert Toggle Demo -->

    <div class="flex flex-col items-start gap-6">
      <h2 class="text-2xl font-semibold text-black dark:text-white">
        System alert
      </h2>
      <p class="text-gray-500 dark:text-gray-400">
        Click the button below to toggle the alert in the application header.
      </p>
      <div :class="styles.inspectFrame">
        <DsButton @click="toggleAppAlert">
          {{ showAppAlert ? "Hide alert" : "Show alert" }}
        </DsButton>
      </div>
    </div>
    <section class="space-y-4">
      <h2 class="text-2xl font-semibold text-black dark:text-white">
        App Alert Control
      </h2>
      <div class="flex flex-col gap-4 max-w-xl">
        <p class="text-gray-500 dark:text-gray-400">
          Click the button below to toggle the alert in the application header.
        </p>
        <div>
          <Button size="md" variant="primary" @click="toggleAppAlert">
            {{ showAppAlert ? "Hide App Alert" : "Show App Alert" }}
          </Button>
        </div>
      </div>
    </section>

    <section class="space-y-4">
      <h2 class="text-2xl font-semibold text-black dark:text-white">
        Examples
      </h2>
      <div class="flex flex-col gap-4 max-w-xl">
        <!-- Regular variants -->
        <Alert variant="info" message="This is an info alert." />
        <Alert variant="success" message="This is a success alert." />
        <Alert variant="warning" message="This is a warning alert." />
        <Alert variant="danger" message="This is a danger alert." />

        <!-- Important variants -->
        <Alert
          variant="info"
          important
          message="This is an important info alert."
        />
        <Alert
          variant="success"
          important
          message="This is an important success alert."
        />
        <Alert
          variant="warning"
          important
          message="This is an important warning alert."
        />
        <Alert
          variant="danger"
          important
          message="This is an important danger alert."
        />
      </div>
    </section>

    <!-- Slot Example -->
    <section class="space-y-4">
      <h2 class="text-2xl font-semibold text-black dark:text-white">
        Custom slots
      </h2>
      <div class="flex flex-col gap-4 max-w-xl">
        <Alert>
          <template #default>
            This alert uses the default slot for custom content.
          </template>
        </Alert>
        <Alert important>
          <template #icon>
            <Plus color="red" />
          </template>
          <template #default>
            <span class="font-bold">Important:</span> This alert uses slots with
            custom formatting.
          </template>
        </Alert>
      </div>
    </section>

    <!-- All Slots in One Alert Example -->
    <section class="space-y-4">
      <h2 class="text-2xl font-semibold text-black dark:text-white">
        All Slots Example
      </h2>
      <div class="flex flex-col gap-4 max-w-xl">
        <Alert important>
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
            <Button size="xs" inverted>
              Take Action
            </Button>
          </template>

          <!-- Actions slot -->
          <template #actions>
            <Button size="xs" variant="ghost" icon-only inverted>
              <template #icon>
                <X class="size-5" />
              </template>
            </Button>
          </template>
        </Alert>
      </div>
    </section>
  </div>
</template>
