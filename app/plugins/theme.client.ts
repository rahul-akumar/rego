// plugins/theme.client.ts
export default defineNuxtPlugin({
  name: "theme-init",
  setup() {
    // Initialize theme on client-side only
    const { initTheme } = useTheme();

    // Initialize theme immediately when plugin loads
    initTheme();

    // Also ensure theme is applied after hydration
    nextTick(() => {
      initTheme();
    });
  },
});
