<script setup lang="ts">
import { ChevronRight, MoreHorizontal } from "lucide-vue-next";
import { computed } from "vue";

import type { BreadcrumbEmits, BreadcrumbItem, BreadcrumbProps } from "../../../src/types/breadcrumb";

import {
  breadcrumbEllipsisVariants,
  breadcrumbItemVariants,
  breadcrumbLinkVariants,
  breadcrumbListVariants,
  breadcrumbPageVariants,
  breadcrumbSeparatorVariants,
  breadcrumbVariants,
} from "../../../src/styles/variants/breadcrumb";

const props = withDefaults(defineProps<BreadcrumbProps>(), {
  separator: "chevron",
  showEllipsis: false,
  ellipsisPosition: 1,
  maxItems: 5,
  customSeparator: "/",
  size: "default",
  variant: "default",
});

const emit = defineEmits<BreadcrumbEmits>();

const processedItems = computed(() => {
  if (!props.items)
    return [];

  const items = [...props.items];

  // Handle ellipsis and max items
  if (props.showEllipsis && items.length > props.maxItems) {
    const start = items.slice(0, props.ellipsisPosition);
    const end = items.slice(-(props.maxItems - props.ellipsisPosition - 1));

    return [
      ...start,
      { label: "...", isEllipsis: true },
      ...end,
    ];
  }

  return items;
});

const breadcrumbClasses = computed(() => {
  return cn(
    breadcrumbVariants({
      size: props.size,
    }),
    props.class,
  );
});

const listClasses = computed(() => {
  return cn(
    breadcrumbListVariants({
      size: props.size,
    }),
  );
});

const itemClasses = computed(() => {
  return cn(
    breadcrumbItemVariants({
      size: props.size,
    }),
  );
});

const linkClasses = computed(() => {
  return cn(
    breadcrumbLinkVariants({
      variant: props.variant,
    }),
  );
});

const pageClasses = computed(() => {
  return cn(
    breadcrumbPageVariants({
      variant: props.variant,
    }),
  );
});

const separatorClasses = computed(() => {
  return cn(
    breadcrumbSeparatorVariants({
      size: props.size,
    }),
  );
});

const ellipsisClasses = computed(() => {
  return cn(
    breadcrumbEllipsisVariants({
      size: props.size,
    }),
  );
});

function handleItemClick(item: BreadcrumbItem, event: MouseEvent) {
  emit("itemClick", item, event);
}
</script>

<template>
  <nav
    :class="breadcrumbClasses"
    aria-label="breadcrumb"
    v-bind="$attrs"
  >
    <!-- Slot-based usage (flexible) -->
    <slot v-if="!items">
      <!-- Default slot for manual breadcrumb structure -->
    </slot>

    <!-- Props-based usage (automatic) -->
    <ol v-else :class="listClasses">
      <template v-for="(item, index) in processedItems" :key="index">
        <li :class="itemClasses">
          <!-- Ellipsis item -->
          <span
            v-if="item.isEllipsis"
            :class="ellipsisClasses"
            role="presentation"
            aria-hidden="true"
          >
            <MoreHorizontal class="h-4 w-4" />
            <span class="sr-only">More</span>
          </span>

          <!-- Current page -->
          <span
            v-else-if="item.current"
            :class="pageClasses"
            role="link"
            aria-disabled="true"
            aria-current="page"
          >
            {{ item.label }}
          </span>

          <!-- Link item -->
          <NuxtLink
            v-else-if="item.href"
            :to="item.href"
            :class="linkClasses"
            @click="handleItemClick(item, $event)"
          >
            {{ item.label }}
          </NuxtLink>

          <!-- Text item -->
          <span v-else :class="linkClasses">
            {{ item.label }}
          </span>
        </li>

        <!-- Separator -->
        <li
          v-if="index < processedItems.length - 1"
          :class="separatorClasses"
          role="presentation"
          aria-hidden="true"
        >
          <!-- Chevron separator -->
          <ChevronRight v-if="separator === 'chevron'" />
          <!-- Text separators -->
          <span v-else>{{ separator === 'slash' ? '/' : customSeparator }}</span>
        </li>
      </template>
    </ol>
  </nav>
</template>
