// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/image",
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
    baseURL: "/REGO/",
    head: {
      titleTemplate: "%s REGO",
      htmlAttrs: {
        class: "dark",
      },
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/REGO/favicon.svg" },
      ],
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
    // Use ipx provider for static site generation
    provider: "ipx",

    // Global image optimization settings
    quality: 85,
    format: ["webp", "png"], // Try WebP first, fallback to PNG

    // IPX-specific configuration for static generation
    ipx: {
      modifiers: {
        quality: 85,
        format: "webp",
      },
    },

    // Presets for common sizes
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

    // Domains for external images (if needed)
    domains: [],

    // Static generation specific settings
    pregenerate: {
      // Pre-generate optimized images during build
      sizes: [200, 400, 600],
      formats: ["webp", "png"],
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
