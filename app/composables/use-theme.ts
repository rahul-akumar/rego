import { onMounted, ref } from "vue";

export function useTheme() {
  const isDark = ref(false);

  onMounted(() => {
    isDark.value = document.documentElement.classList.contains("dark");
  });

  function toggleTheme() {
    isDark.value = !isDark.value;
    document.documentElement.classList.toggle("dark", isDark.value);
  }

  return { isDark, toggleTheme };
}
