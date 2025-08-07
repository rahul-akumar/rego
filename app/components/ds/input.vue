<script setup lang="ts">
type Props = {
  modelValue?: string;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: "primary" | "secondary" | "outlined" | "ghost" | "link" | "destructive";
};

const props = withDefaults(defineProps<Props>(), {
  type: "text",
  disabled: false,
  size: "md",
  variant: "primary",
});

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

function getInputClasses() {
  const base = "border rounded focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50 disabled:cursor-not-allowed";
  const variantMap = {
    primary: "bg-white text-black border-gray-300",
    secondary: "bg-gray-100 text-gray-800 border-gray-400",
    outlined: "border-2 border-gray-500 bg-transparent",
    ghost: "bg-transparent text-gray-700",
    link: "bg-transparent text-blue-600 underline",
    destructive: "bg-rose-600 text-white",
  };
  const sizeMap = {
    xs: "px-2 py-1 text-xs",
    sm: "px-2 py-2 text-sm",
    md: "px-3 py-2 text-base",
    lg: "px-3 py-3 text-lg",
    xl: "px-4 py-3 text-xl",
  };
  const variantClasses = (variantMap as any)[props.variant] || "";
  const sizeClasses = (sizeMap as any)[props.size] || "";
  return `${base} ${variantClasses} ${sizeClasses}`.trim();
}
</script>

<template>
  <input
    :value="modelValue"
    :placeholder="placeholder"
    :type="type"
    :disabled="disabled"
    :class="getInputClasses()"
    @input="e => emit('update:modelValue', (e.target as HTMLInputElement).value)"
  >
</template>
