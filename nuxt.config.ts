// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/test-utils",
    "@nuxt/ui",
  ],

  // GitHub Pages configuration
  app: {
    baseURL: "/REGO/",
    head: {
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

  css: ["./app/assets/css/main.css"],
  eslint: {
    config: {
      standalone: false,
    },
  },
});
