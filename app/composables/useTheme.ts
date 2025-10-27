import { computed, onMounted } from 'vue'

export type ThemeMode = 'light' | 'dark'

function applyTheme(t: ThemeMode) {
  if (typeof document === 'undefined') return
  document.documentElement.classList.toggle('dark', t === 'dark')
}

export function useTheme() {
  const theme = useState<ThemeMode>('theme', () => 'light')

  const isDark = computed(() => theme.value === 'dark')

  function setTheme(next: ThemeMode) {
    theme.value = next
    if (process.client) {
      localStorage.setItem('theme', next)
      applyTheme(next)
    }
  }

  function toggle() {
    setTheme(isDark.value ? 'light' : 'dark')
  }

  onMounted(() => {
    const saved = (localStorage.getItem('theme') as ThemeMode | null)
    const initial: ThemeMode = saved ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    setTheme(initial)
  })

  return { theme, isDark, setTheme, toggle }
}
