<script setup lang="ts">
interface Props {
  variant?: "default" | "info" | "success" | "warning" | "danger";
  important?: boolean;
  message?: string;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "default",
  important: false,
  message: "",
});

const styles = {
  base: "w-full px-4 py-3 flex items-center text-md justify-between gap-4",

  // Regular variants
  default:
    "bg-black bg-opacity-10 text-black dark:bg-white dark:bg-opacity-10 dark:text-white",
  info: "bg-indigo-500 bg-opacity-20 dark:bg-sky-500 dark:bg-opacity-20 text-indigo-800 dark:text-sky-300",
  success:
    "bg-emerald-500 bg-opacity-20 text-emerald-800 dark:text-emerald-300",
  warning: "bg-amber-500 bg-opacity-20 text-amber-800 dark:text-amber-300",
  danger: "bg-rose-500 bg-opacity-20 text-rose-800 dark:text-red-300",

  // Important variants
  defaultImportant: "bg-black text-white dark:bg-white dark:text-black",
  infoImportant: "bg-blue-700 text-indigo-50 dark:bg-sky-500 dark:text-black",
  successImportant: "bg-emerald-800 text-emerald-50",
  warningImportant: "bg-amber-700 text-amber-50",
  dangerImportant: "bg-rose-800 text-rose-50",

  icon: "flex-shrink-0",
  content: "flex-1",
  actions: "flex items-center gap-2",
};

// Get variant style based on variant name and important flag
const getVariantStyle = () => {
  if (props.important) {
    return styles[`${props.variant}Important`] || styles[props.variant];
  }
  return styles[props.variant];
};
</script>

<template>
  <div :class="[styles.base, getVariantStyle()]">
    <div class="flex items-center gap-2">
      <!-- Icon slot -->
      <div v-if="$slots.icon" :class="styles.icon">
        <slot name="icon" />
      </div>
      <!-- Content/message -->
      <div :class="styles.content">
        <slot>
          {{ props.message }}
        </slot>
      </div>
      <!-- Actions slot (for custom buttons) -->
      <div v-if="$slots.button" :class="styles.actions">
        <slot name="button" />
      </div>
    </div>
    <!-- Actions slot for additional controls -->
    <div v-if="$slots.actions">
      <slot name="actions" />
    </div>
  </div>
</template>
