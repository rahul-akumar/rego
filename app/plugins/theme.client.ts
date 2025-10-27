export default defineNuxtPlugin(() => {
  if (process.server) return
  try {
    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initial = saved === 'dark' || saved === 'light' ? saved : (prefersDark ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', initial === 'dark')
  } catch {}
})
