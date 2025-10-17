// tailwind.config.ts
import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './app.vue',
    './error.vue',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    // Intentionally exclude: './components/**/*.vue'
  ],
  theme: { extend: {} },
}