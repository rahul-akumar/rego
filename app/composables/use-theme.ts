// app/composables/use-theme.ts
import { readonly, watch } from "vue";

export type ColorTheme
  = | "default"
    | "sapphire"
    | "emerald"
    | "topaz"
    | "ruby"
    | "amethyst";

export type ThemeMode = "light" | "dark";

type ColorPalette = {
  name: string;
  value: string;
  tailwindClass: string;
  oklch?: string;
};

type ThemeDefinition = {
  id: ColorTheme;
  name: string;
  description: string;
  primary: {
    light: string;
    dark: string;
  };
  background: {
    light: string;
    dark: string;
  };
  palette: {
    light: ColorPalette[];
    dark: ColorPalette[];
  };
};

export function useTheme() {
  const colorTheme = useState<ColorTheme>("color-theme", () => "default");
  const isDark = useState<boolean>("is-dark", () => true); // Default to dark mode

  // Define theme data with their color palettes
  const themeDefinitions: ThemeDefinition[] = [
    {
      id: "default",
      name: "Default",
      description: "Clean and neutral theme for general use",
      primary: {
        light: "#3b82f6",
        dark: "#60a5fa",
      },
      background: {
        light: "#ffffff",
        dark: "#000000",
      },
      palette: {
        light: [
          { name: "primary", value: "#3b82f6", tailwindClass: "blue-500", oklch: "oklch(62.07% 0.209 259.69)" },
          { name: "background", value: "#ffffff", tailwindClass: "white", oklch: "oklch(100% 0 0)" },
          { name: "foreground", value: "#000000", tailwindClass: "black", oklch: "oklch(0% 0 0)" },
        ],
        dark: [
          { name: "primary", value: "#60a5fa", tailwindClass: "blue-400", oklch: "oklch(68.35% 0.176 259.69)" },
          { name: "background", value: "#000000", tailwindClass: "black", oklch: "oklch(0% 0 0)" },
          { name: "foreground", value: "#ffffff", tailwindClass: "white", oklch: "oklch(100% 0 0)" },
        ],
      },
    },
    {
      id: "sapphire",
      name: "Sapphire",
      description: "Ocean-inspired blues and teals for a professional look",
      primary: {
        light: "#0d9488",
        dark: "#3b82f6",
      },
      background: {
        light: "#f0fdfa",
        dark: "#172554",
      },
      palette: {
        light: [
          { name: "primary", value: "#0d9488", tailwindClass: "teal-600", oklch: "oklch(55.45% 0.127 180.77)" },
          { name: "primary-foreground", value: "#f0fdfa", tailwindClass: "teal-50", oklch: "oklch(98.04% 0.012 180.77)" },
          { name: "background", value: "#f0fdfa", tailwindClass: "teal-50", oklch: "oklch(98.04% 0.012 180.77)" },
          { name: "foreground", value: "#042f2e", tailwindClass: "teal-950", oklch: "oklch(18.59% 0.037 180.77)" },
          { name: "ring", value: "#2dd4bf", tailwindClass: "teal-400", oklch: "oklch(76.46% 0.097 180.77)" },
        ],
        dark: [
          { name: "primary", value: "#3b82f6", tailwindClass: "blue-500", oklch: "oklch(62.07% 0.209 259.69)" },
          { name: "primary-foreground", value: "#eff6ff", tailwindClass: "blue-50", oklch: "oklch(97.86% 0.007 259.69)" },
          { name: "background", value: "#172554", tailwindClass: "blue-950", oklch: "oklch(19.09% 0.044 259.69)" },
          { name: "foreground", value: "#dbeafe", tailwindClass: "blue-100", oklch: "oklch(90.33% 0.035 259.69)" },
          { name: "ring", value: "#1e3a8a", tailwindClass: "blue-900", oklch: "oklch(31.75% 0.117 259.69)" },
        ],
      },
    },
    {
      id: "emerald",
      name: "Emerald",
      description: "Natural greens for growth and harmony",
      primary: {
        light: "#10b981",
        dark: "#10b981",
      },
      background: {
        light: "#f0fdf4",
        dark: "#022c22",
      },
      palette: {
        light: [
          { name: "primary", value: "#10b981", tailwindClass: "green-500", oklch: "oklch(64.81% 0.149 156.57)" },
          { name: "primary-foreground", value: "#f7fee7", tailwindClass: "lime-50", oklch: "oklch(98.24% 0.019 120.75)" },
          { name: "background", value: "#f0fdf4", tailwindClass: "green-50", oklch: "oklch(98.04% 0.024 156.57)" },
          { name: "foreground", value: "#052e16", tailwindClass: "green-950", oklch: "oklch(18.35% 0.043 156.57)" },
          { name: "ring", value: "#a3e635", tailwindClass: "lime-400", oklch: "oklch(82.31% 0.144 120.75)" },
        ],
        dark: [
          { name: "primary", value: "#10b981", tailwindClass: "green-500", oklch: "oklch(64.81% 0.149 156.57)" },
          { name: "primary-foreground", value: "#f0fdf4", tailwindClass: "green-50", oklch: "oklch(98.04% 0.024 156.57)" },
          { name: "background", value: "#022c22", tailwindClass: "green-950", oklch: "oklch(18.35% 0.043 156.57)" },
          { name: "foreground", value: "#dcfce7", tailwindClass: "green-100", oklch: "oklch(90.59% 0.081 156.57)" },
          { name: "ring", value: "#166534", tailwindClass: "green-800", oklch: "oklch(39.75% 0.089 156.57)" },
        ],
      },
    },
    {
      id: "topaz",
      name: "Topaz",
      description: "Warm ambers and golds for energy and optimism",
      primary: {
        light: "#f59e0b",
        dark: "#f59e0b",
      },
      background: {
        light: "#fffbeb",
        dark: "#451a03",
      },
      palette: {
        light: [
          { name: "primary", value: "#f59e0b", tailwindClass: "amber-500", oklch: "oklch(76.79% 0.144 83.87)" },
          { name: "primary-foreground", value: "#fffbeb", tailwindClass: "amber-50", oklch: "oklch(98.43% 0.018 83.87)" },
          { name: "background", value: "#fffbeb", tailwindClass: "amber-50", oklch: "oklch(98.43% 0.018 83.87)" },
          { name: "foreground", value: "#451a03", tailwindClass: "amber-950", oklch: "oklch(26.03% 0.057 83.87)" },
          { name: "ring", value: "#fbbf24", tailwindClass: "amber-400", oklch: "oklch(81.79% 0.125 83.87)" },
        ],
        dark: [
          { name: "primary", value: "#f59e0b", tailwindClass: "amber-500", oklch: "oklch(76.79% 0.144 83.87)" },
          { name: "primary-foreground", value: "#fffbeb", tailwindClass: "amber-50", oklch: "oklch(98.43% 0.018 83.87)" },
          { name: "background", value: "#451a03", tailwindClass: "amber-950", oklch: "oklch(26.03% 0.057 83.87)" },
          { name: "foreground", value: "#fffbeb", tailwindClass: "amber-50", oklch: "oklch(98.43% 0.018 83.87)" },
          { name: "ring", value: "#78350f", tailwindClass: "amber-900", oklch: "oklch(42.69% 0.089 83.87)" },
        ],
      },
    },
    {
      id: "ruby",
      name: "Ruby",
      description: "Passionate roses and reds for bold statements",
      primary: {
        light: "#f43f5e",
        dark: "#f43f5e",
      },
      background: {
        light: "#fff1f2",
        dark: "#4c0519",
      },
      palette: {
        light: [
          { name: "primary", value: "#f43f5e", tailwindClass: "rose-500", oklch: "oklch(62.76% 0.194 12.24)" },
          { name: "primary-foreground", value: "#fff1f2", tailwindClass: "rose-50", oklch: "oklch(97.75% 0.013 12.24)" },
          { name: "background", value: "#fff1f2", tailwindClass: "rose-50", oklch: "oklch(97.75% 0.013 12.24)" },
          { name: "foreground", value: "#4c0519", tailwindClass: "rose-950", oklch: "oklch(25.32% 0.081 12.24)" },
          { name: "ring", value: "#fb7185", tailwindClass: "rose-400", oklch: "oklch(69.47% 0.156 12.24)" },
        ],
        dark: [
          { name: "primary", value: "#f43f5e", tailwindClass: "rose-500", oklch: "oklch(62.76% 0.194 12.24)" },
          { name: "primary-foreground", value: "#fff1f2", tailwindClass: "rose-50", oklch: "oklch(97.75% 0.013 12.24)" },
          { name: "background", value: "#4c0519", tailwindClass: "rose-950", oklch: "oklch(25.32% 0.081 12.24)" },
          { name: "foreground", value: "#fff1f2", tailwindClass: "rose-50", oklch: "oklch(97.75% 0.013 12.24)" },
          { name: "ring", value: "#881337", tailwindClass: "rose-900", oklch: "oklch(38.29% 0.125 12.24)" },
        ],
      },
    },
    {
      id: "amethyst",
      name: "Amethyst",
      description: "Rich purples for creativity and luxury",
      primary: {
        light: "#a855f7",
        dark: "#a855f7",
      },
      background: {
        light: "#faf5ff",
        dark: "#581c87",
      },
      palette: {
        light: [
          { name: "primary", value: "#a855f7", tailwindClass: "purple-500", oklch: "oklch(59.28% 0.183 299.75)" },
          { name: "primary-foreground", value: "#faf5ff", tailwindClass: "purple-50", oklch: "oklch(97.86% 0.007 299.75)" },
          { name: "background", value: "#f3e8ff", tailwindClass: "purple-100", oklch: "oklch(90.33% 0.035 299.75)" },
          { name: "foreground", value: "#581c87", tailwindClass: "purple-950", oklch: "oklch(31.75% 0.117 299.75)" },
          { name: "ring", value: "#c084fc", tailwindClass: "purple-400", oklch: "oklch(66.89% 0.148 299.75)" },
        ],
        dark: [
          { name: "primary", value: "#a855f7", tailwindClass: "purple-500", oklch: "oklch(59.28% 0.183 299.75)" },
          { name: "primary-foreground", value: "#faf5ff", tailwindClass: "purple-50", oklch: "oklch(97.86% 0.007 299.75)" },
          { name: "background", value: "#581c87", tailwindClass: "purple-950", oklch: "oklch(31.75% 0.117 299.75)" },
          { name: "foreground", value: "#e9d5ff", tailwindClass: "purple-100", oklch: "oklch(90.33% 0.035 299.75)" },
          { name: "ring", value: "#7c3aed", tailwindClass: "purple-900", oklch: "oklch(50.09% 0.156 299.75)" },
        ],
      },
    },
  ];

  // Initialize theme from localStorage or defaults
  function initTheme() {
    if (typeof window === "undefined")
      return;
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
    if (typeof window === "undefined")
      return;
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

  // Get theme definition by id
  function getThemeDefinition(themeId: ColorTheme): ThemeDefinition | undefined {
    return themeDefinitions.find(theme => theme.id === themeId);
  }

  // Get all theme definitions
  function getAllThemeDefinitions(): ThemeDefinition[] {
    return themeDefinitions;
  }

  // Get current theme definition
  function getCurrentThemeDefinition(): ThemeDefinition | undefined {
    return getThemeDefinition(colorTheme.value);
  }

  // Single return statement with all exports
  return {
    colorTheme: readonly(colorTheme),
    isDark: readonly(isDark),
    availableThemes,
    themeDefinitions: readonly(themeDefinitions),
    initTheme,
    setColorTheme,
    toggleDarkMode,
    cycleTheme,
    toggleMode,
    getThemeDefinition,
    getAllThemeDefinitions,
    getCurrentThemeDefinition,
  };
}
