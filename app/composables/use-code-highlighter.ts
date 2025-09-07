// app/composables/use-code-highlighter.ts
import type { BundledLanguage, BundledTheme, Highlighter } from "shiki";

import { createHighlighter } from "shiki";
import { computed, readonly, ref } from "vue";

import type { ColorTheme } from "./use-theme";

export type SupportedLanguage
  = | "vue"
    | "javascript"
    | "typescript"
    | "html"
    | "css"
    | "json"
    | "bash"
    | "shell";

type ShikiThemeConfig = {
  light: BundledTheme;
  dark: BundledTheme;
};

export function useCodeHighlighter() {
  const { colorTheme, isDark } = useTheme();
  const highlighter = ref<Highlighter | null>(null);
  const isInitialized = ref(false);

  // Theme mappings based on color themes and light/dark mode
  const themeConfigs: Record<ColorTheme, ShikiThemeConfig> = {
    default: {
      light: "vitesse-black",
      dark: "vitesse-black",
    },
    sapphire: {
      light: "vitesse-black",
      dark: "vitesse-black",
    },
    emerald: {
      light: "vitesse-black",
      dark: "vitesse-black",
    },
    topaz: {
      light: "vitesse-black",
      dark: "vitesse-black",
    },
    ruby: {
      light: "vitesse-black",
      dark: "vitesse-black",
    },
    amethyst: {
      light: "vitesse-black",
      dark: "vitesse-black",
    },
  };

  // Get current theme based on color theme and mode
  const currentShikiTheme = computed(() => {
    const config = themeConfigs[colorTheme.value];
    return isDark.value ? config.dark : config.light;
  });

  // Initialize highlighter
  async function initHighlighter() {
    if (highlighter.value || isInitialized.value)
      return;

    try {
      console.warn("Initializing Shiki highlighter...");

      // Get all unique themes from config
      const allThemes = new Set<BundledTheme>();
      Object.values(themeConfigs).forEach((config) => {
        allThemes.add(config.light);
        allThemes.add(config.dark);
      });

      console.warn("Loading themes:", Array.from(allThemes));

      highlighter.value = await createHighlighter({
        themes: Array.from(allThemes),
        langs: [
          "vue",
          "javascript",
          "typescript",
          "html",
          "css",
          "json",
          "bash",
          "shell",
        ] as BundledLanguage[],
      });

      isInitialized.value = true;
      console.warn("Shiki highlighter initialized successfully!");
    }
    catch (error) {
      console.error("Failed to initialize Shiki highlighter:", error);
    }
  }

  // Highlight code with current theme
  function highlightCode(code: string, lang: SupportedLanguage = "javascript"): string {
    console.warn("highlightCode called with lang:", lang, "initialized:", isInitialized.value);

    if (!highlighter.value || !isInitialized.value) {
      console.warn("Highlighter not ready, returning plain code");
      // Return plain code wrapped in pre/code if highlighter isn't ready
      return `<pre class="p-4 text-sm h-full overflow-auto"><code>${escapeHtml(code)}</code></pre>`;
    }

    try {
      console.warn("Using theme:", currentShikiTheme.value);
      const result = highlighter.value.codeToHtml(code, {
        lang: lang as BundledLanguage,
        theme: currentShikiTheme.value,
        transformers: [
          // Custom transformer to add our classes
          {
            name: "add-custom-classes",
            pre(node: any) {
              // Add our custom classes to the pre element
              const existingClass = node.properties.class || "";
              node.properties.class = `${existingClass} p-4 text-sm h-full overflow-auto`.trim();
            },
          },
        ],
      });
      console.warn("Successfully highlighted code, result length:", result.length);
      return result;
    }
    catch (error) {
      console.error("Failed to highlight code:", error);
      // Fallback to plain code
      return `<pre class="p-4 text-sm h-full overflow-auto"><code>${escapeHtml(code)}</code></pre>`;
    }
  }

  // Auto-detect language from code content (simple heuristics)
  function detectLanguage(code: string): SupportedLanguage {
    const trimmed = code.trim();

    // Vue SFC
    if (trimmed.includes("<template>") && trimmed.includes("<script")) {
      return "vue";
    }

    // HTML
    if (trimmed.startsWith("<!DOCTYPE") || trimmed.startsWith("<html")) {
      return "html";
    }

    // CSS
    if (trimmed.includes("{") && (trimmed.includes("color:") || trimmed.includes("background:"))) {
      return "css";
    }

    // JSON
    if (trimmed.startsWith("{") && trimmed.includes("\"")) {
      return "json";
    }

    // TypeScript
    if (trimmed.includes("interface ") || trimmed.includes("type ") || trimmed.includes(": string")) {
      return "typescript";
    }

    // Shell/Bash
    if (trimmed.startsWith("#!") || trimmed.includes("#!/bin/")) {
      return "bash";
    }

    // Default to JavaScript
    return "javascript";
  }

  // Utility to escape HTML
  function escapeHtml(text: string): string {
    const map: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "\"": "&quot;",
      "'": "&#039;",
    };
    return text.replace(/[&<>"']/g, m => map[m] || m);
  }

  // Initialize on first use
  initHighlighter();

  return {
    highlightCode,
    detectLanguage,
    isInitialized: readonly(isInitialized),
    currentShikiTheme: readonly(currentShikiTheme),
  };
}
