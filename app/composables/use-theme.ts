// app/composables/use-theme.ts
import { ref, watch } from "vue";

export type ColorTheme
  = | "default"
    | "sapphire"
    | "emerald"
    | "topaz"
    | "ruby"
    | "amethyst"
    | "scaled";

export type ThemeMode = "light" | "dark";

export function useTheme() {
  const colorTheme = ref<ColorTheme>("default");
  const isDark = ref(true); // Default to dark mode

  // Initialize theme from localStorage or defaults
  function initTheme() {
    // Load saved preferences
    const savedColorTheme = localStorage.getItem("color-theme") as ColorTheme;
    const savedIsDark = localStorage.getItem("is-dark");

    if (savedColorTheme) {
      colorTheme.value = savedColorTheme;
    }

    // Default to dark mode if no preference is saved
    if (savedIsDark !== null) {
      isDark.value = savedIsDark === "true";
    }
    else {
      isDark.value = true; // Default to dark mode
    }

    applyTheme();
  }

  // Apply theme to DOM
  function applyTheme() {
    const root = document.documentElement;

    // Remove all theme classes
    const themeClasses = Array.from(root.classList).filter(
      cls => cls.startsWith("theme-"),
    );
    themeClasses.forEach(cls => root.classList.remove(cls));

    // Apply color theme
    if (colorTheme.value !== "default") {
      root.classList.add(`theme-${colorTheme.value}`);
    }

    // Apply dark mode
    root.classList.toggle("dark", isDark.value);

    // Save to localStorage
    localStorage.setItem("color-theme", colorTheme.value);
    localStorage.setItem("is-dark", String(isDark.value));
  }

  // Watch for changes
  watch([colorTheme, isDark], applyTheme);

  // Public methods
  function setColorTheme(theme: ColorTheme) {
    colorTheme.value = theme;
  }

  function toggleDarkMode() {
    isDark.value = !isDark.value;
  }
  // Define available themes array
  const availableThemes = [
    "default",
    "sapphire",
    "emerald",
    "topaz",
    "ruby",
    "amethyst",
    "scaled",
  ] as const;

  // Cycle through color themes
  function cycleTheme() {
    const currentIndex = availableThemes.indexOf(colorTheme.value);
    const nextIndex = (currentIndex + 1) % availableThemes.length;
    setColorTheme(availableThemes[nextIndex] as ColorTheme);
  }

  // Toggle between light and dark modes
  function toggleMode() {
    isDark.value = !isDark.value;
  }

  // Single return statement with all exports
  return {
    colorTheme: readonly(colorTheme),
    isDark: readonly(isDark),
    availableThemes,
    initTheme,
    setColorTheme,
    toggleDarkMode,
    cycleTheme,
    toggleMode,
  };
}
