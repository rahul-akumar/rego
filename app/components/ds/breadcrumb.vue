<!-- filepath: app/components/ds/breadcrumb.vue -->
<script setup lang="ts">
import { ChevronRight, MoreHorizontal } from "lucide-vue-next";

type BreadcrumbItem = {
  label: string;
  href?: string;
  current?: boolean;
  isEllipsis?: boolean;
};

type Props = {
  class?: string;
  items?: BreadcrumbItem[];
  separator?: "chevron" | "slash" | "custom";
  showEllipsis?: boolean;
  ellipsisPosition?: number;
  maxItems?: number;
  customSeparator?: string;
};

const props = withDefaults(defineProps<Props>(), {
  separator: "chevron",
  showEllipsis: false,
  ellipsisPosition: 1,
  maxItems: 5,
  customSeparator: "/",
});

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

const breadcrumbClasses = computed(() => cn(props.class));

const listClasses = computed(() => cn(
  "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
));

const itemClasses = computed(() => cn(
  "inline-flex items-center gap-1.5",
));

const linkClasses = computed(() => cn(
  "hover:text-foreground transition-colors",
));

const pageClasses = computed(() => cn(
  "font-normal text-foreground",
));

const separatorClasses = computed(() => cn(
  "[&>svg]:size-3.5",
));

const ellipsisClasses = computed(() => cn(
  "flex h-9 w-9 items-center justify-center",
));
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
          <a
            v-else-if="item.href"
            :href="item.href"
            :class="linkClasses"
          >
            {{ item.label }}
          </a>

          <!-- Text item -->
          <span v-else :class="linkClasses">
            {{ item.label }}
          </span>
        </li>

        <!-- Separator - FIXED -->
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
