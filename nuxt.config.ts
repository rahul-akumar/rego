// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/icon",
    "@nuxt/fonts",
    "@nuxt/scripts",
    "@nuxt/test-utils",
    "nuxt-gtag",
  ],
  // Google analytics configuration
  gtag: {
    id: "G-BTK3F566MW",
  },
  // GitHub Pages configuration
  app: {
    baseURL: "/",
    head: {
      titleTemplate: "%s REGO",
      htmlAttrs: {
        class: "dark",
      },
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      ],
    },
  },
  fonts: {
    defaults: {
      weights: [400, 500, 600, 700, 800, 900],
      styles: ["normal", "italic"],
      subsets: ["latin"],
    },
  },

  nitro: {
    prerender: {
      routes: ["/"],
      crawlLinks: true, // discover internal links for static generation
    },
  },

  // Enable static site generation for GitHub Pages
  ssr: false,

  content: {},

  // Optimize @nuxt/image for better performance
  image: {
    // For static site generation, we'll use none provider and handle optimization differently
    provider: "none",

    // Global image optimization settings
    quality: 85,
    format: ["webp", "png"], // Try WebP first, fallback to PNG

    // Presets for common sizes (used for development)
    presets: {
      "illustration": {
        modifiers: {
          format: "webp",
          width: 400,
          height: 300,
          quality: 85,
        },
      },
      "illustration-sm": {
        modifiers: {
          format: "webp",
          width: 200,
          height: 150,
          quality: 80,
        },
      },
      "illustration-lg": {
        modifiers: {
          format: "webp",
          width: 600,
          height: 450,
          quality: 90,
        },
      },
    },
  },

  css: ["./app/assets/css/main.css"],
  eslint: {
    config: {
      standalone: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
