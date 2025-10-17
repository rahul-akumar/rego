// https://nuxt.com/docs/api/configuration/nuxt-config
// * Nuxt config entrypoint
// -------------------------------------------------
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // * Register Nuxt modules used by the app
  // -------------------------------------------------
  modules: [
    '@nuxtjs/mdc',
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
  ],

  // * Configure PostCSS
  // ! Tailwind v4 requires @tailwindcss/postcss instead of tailwindcss
  // -------------------------------------------------
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
    },
  },

  // * Global styles loaded for every page
  // NOTE: CSS lives under app/assets for Nuxt 4 directory structure
  // -------------------------------------------------
  css: ['@/assets/css/tailwind.css'],

  content: {

  },
})
