<script setup lang="ts">
const { name, description, category } = useComponent("accordion");

definePageMeta({
  title: name,
  description,
});

// Controlled examples state
const controlledSingle = ref<string | null>("item-1");
const controlledMultiple = ref<string[]>(["features"]);

// Code snippets
const defaultCode = `<Accordion>
  <AccordionItem value=\"intro\" title=\"What is Accordion?\">
    <template #content>
      <p class=\"text-sm text-foreground-secondary\">
        Displays content in a collapsible and expandable interface.
      </p>
    </template>
  </AccordionItem>
  <AccordionItem value=\"usage\" title=\"When should I use it?\">
    <template #content>
      <p class=\"text-sm text-foreground-secondary\">
        Use for FAQs, progressive disclosure, or long content sections.
      </p>
    </template>
  </AccordionItem>
</Accordion>`;

const multipleCode = `<Accordion type=\"multiple\">\n  <AccordionItem value=\"features\" title=\"Features\">\n    <template #content>\n      <ul class=\"list-disc pl-5 text-sm text-foreground-secondary\">\n        <li>Single or multiple expand<\/li>\n        <li>Accessible markup<\/li>\n        <li>Animated transitions<\/li>\n      <\/ul>\n    <\/template>\n  <\/AccordionItem>\n  <AccordionItem value=\"a11y\" title=\"Accessibility\">\n    <template #content>\n      <p class=\"text-sm text-foreground-secondary\">\n        Buttons expose aria-expanded and aria-controls; content uses region role.\n      <\/p>\n    <\/template>\n  <\/AccordionItem>\n<\/Accordion>`;

const controlledSingleCode = `<script setup lang=\"ts\">\nimport { ref } from 'vue'\nconst open = ref<string | null>('intro')\n<\\/script>\n\n<template>\n  <Accordion v-model=\"open\">\n    <AccordionItem value=\"intro\" title=\"Intro\">\n      <template #content>\n        <p class=\"text-sm\">Controlled single mode.<\/p>\n      <\/template>\n    <\/AccordionItem>\n    <AccordionItem value=\"details\" title=\"Details\">\n      <template #content>\n        <p class=\"text-sm\">Set v-model to control open item.<\/p>\n      <\/template>\n    <\/AccordionItem>\n  <\/Accordion>\n<\/template>`;

const controlledMultipleCode = `<script setup lang=\"ts\">\nimport { ref } from 'vue'\nconst open = ref<string[]>(['features'])\n<\\/script>\n\n<template>\n  <Accordion v-model=\"open\" type=\"multiple\">\n    <AccordionItem value=\"features\" title=\"Features\">\n      <template #content>\n        <p class=\"text-sm\">Multiple items can be open at once.<\/p>\n      <\/template>\n    <\/AccordionItem>\n    <AccordionItem value=\"faq\" title=\"FAQ\">\n      <template #content>\n        <p class=\"text-sm\">Use arrays for multiple mode v-model.<\/p>\n      <\/template>\n    <\/AccordionItem>\n  <\/Accordion>\n<\/template>`;

const nonCollapsibleCode = `<Accordion :collapsible=\"false\">\n  <AccordionItem value=\"a\" title=\"Non-collapsible\">\n    <template #content>\n      <p class=\"text-sm\">Clicking an open item will not collapse it.<\/p>\n    <\/template>\n  <\/AccordionItem>\n  <AccordionItem value=\"b\" title=\"Another item\">\n    <template #content>\n      <p class=\"text-sm\">Open switches to the clicked item.<\/p>\n    <\/template>\n  <\/AccordionItem>\n<\/Accordion>`;
</script>

<template>
  <UiDocs
    :title="name"
    :description="description"
    :category="category"
  >
    <div class="space-y-8">
      <!-- Default -->
      <section class="space-y-4">
        <h2 class="text-2xl font-medium text-black dark:text-white">
          Default
        </h2>
        <UiComponentPreviewTabs
          title="Default"
          :code="defaultCode"
          class="[&_.preview]:gap-0"
        >
          <Accordion>
            <AccordionItem value="intro" title="What is Accordion?">
              <template #content>
                <p class="text-sm text-foreground-secondary">
                  Displays content in a collapsible and expandable interface. Accordion is a vertically stacked set of panels, only one of which can be expanded at a time.
                </p>
              </template>
            </AccordionItem>
            <AccordionItem value="usage" title="When should I use it?">
              <template #content>
                <p class="text-sm text-foreground-secondary">
                  Use for FAQs, progressive disclosure, or long content sections. Accordion is a vertically stacked set of panels, only one of which can be expanded at a time.
                </p>
              </template>
            </AccordionItem>
          </Accordion>
        </UiComponentPreviewTabs>
      </section>

      <!-- Multiple -->
      <section class="space-y-4">
        <h2 class="text-2xl font-medium text-black dark:text-white">
          Multiple
        </h2>
        <UiComponentPreviewTabs
          title="Multiple"
          :code="multipleCode"
          class="[&_.preview]:gap-0"
        >
          <Accordion type="multiple">
            <AccordionItem value="features" title="Features">
              <template #content>
                <ul class="list-disc pl-5 text-sm text-foreground-secondary">
                  <li>Single or multiple expand</li>
                  <li>Accessible markup</li>
                  <li>Animated transitions</li>
                </ul>
              </template>
            </AccordionItem>
            <AccordionItem value="a11y" title="Accessibility">
              <template #content>
                <p class="text-sm text-foreground-secondary">
                  Buttons expose aria-expanded and aria-controls; content uses region role.
                </p>
              </template>
            </AccordionItem>
          </Accordion>
        </UiComponentPreviewTabs>
      </section>

      <!-- Controlled (single) -->
      <section class="space-y-4">
        <h2 class="text-2xl font-medium text-black dark:text-white">
          Controlled (single)
        </h2>
        <UiComponentPreviewTabs
          title="Controlled (single)"
          :code="controlledSingleCode"
          class="[&_.preview]:gap-0"
        >
          <Accordion v-model="controlledSingle">
            <AccordionItem value="item-1" title="Intro">
              <template #content>
                <p class="text-sm">
                  Controlled single mode.
                </p>
              </template>
            </AccordionItem>
            <AccordionItem value="item-2" title="Details">
              <template #content>
                <p class="text-sm">
                  Set v-model to control open item.
                </p>
              </template>
            </AccordionItem>
          </Accordion>
        </UiComponentPreviewTabs>
      </section>

      <!-- Controlled (multiple) -->
      <section class="space-y-4">
        <h2 class="text-2xl font-medium text-black dark:text-white">
          Controlled (multiple)
        </h2>
        <UiComponentPreviewTabs
          title="Controlled (multiple)"
          :code="controlledMultipleCode"
          class="[&_.preview]:gap-0"
        >
          <Accordion v-model="controlledMultiple" type="multiple">
            <AccordionItem value="features" title="Features">
              <template #content>
                <p class="text-sm">
                  Multiple items can be open at once.
                </p>
              </template>
            </AccordionItem>
            <AccordionItem value="faq" title="FAQ">
              <template #content>
                <p class="text-sm">
                  Use arrays for multiple mode v-model.
                </p>
              </template>
            </AccordionItem>
          </Accordion>
        </UiComponentPreviewTabs>
      </section>

      <!-- Non-collapsible (single) -->
      <section class="space-y-4">
        <h2 class="text-2xl font-medium text-black dark:text-white">
          Non‑collapsible (single)
        </h2>
        <UiComponentPreviewTabs
          title="Non-collapsible"
          :code="nonCollapsibleCode"
          class="[&_.preview]:gap-0"
        >
          <Accordion :collapsible="false">
            <AccordionItem value="a" title="Non-collapsible">
              <template #content>
                <p class="text-sm">
                  Clicking an open item will not collapse it.
                </p>
              </template>
            </AccordionItem>
            <AccordionItem value="b" title="Another item">
              <template #content>
                <p class="text-sm">
                  Open switches to the clicked item.
                </p>
              </template>
            </AccordionItem>
          </Accordion>
        </UiComponentPreviewTabs>
      </section>
    </div>
  </UiDocs>
</template>
