// * SECTION-AWARE NAV: Builds a nav list from the current route section
// -------------------------------------------------
export type RawDoc = {
  path: string
  title?: string
  meta?: Record<string, unknown>
  navigation?: boolean | string
}

export type NavItem = {
  path: string
  title?: string
  order?: number
}

// * Extract the current top-level section (e.g., 'docs', 'components')
export function useCurrentSection(allowed: string[] = ['docs', 'components']) {
  const route = useRoute()
  return computed(() => {
    const seg = route.path.split('/').filter(Boolean)[0] || ''
    return allowed.includes(seg) ? seg : ''
  })
}

// * Build a sorted list of items under the section, excluding index and hidden docs
export async function useSectionNav(allowed: string[] = ['docs', 'components']) {
  // ! Must be reactive to route changes, otherwise list can go stale
  const section = useCurrentSection(allowed)

  // * Fetch and cache by section using useAsyncData
  const { data, pending, error } = await useAsyncData(
    () => `nav:${section.value}`,
    async () => {
      if (!section.value) return [] as NavItem[]

      // * Query @nuxt/content DB for all entries and filter in-memory by path
      const all = (await queryCollection('content').all()) as RawDoc[]

      const sectionPath = `/${section.value}`
      const items = all
        // * Keep only items inside the section
        .filter((it) => it.path === sectionPath || it.path.startsWith(`${sectionPath}/`))
        // * Exclude the section index itself (e.g., /docs)
        .filter((it) => it.path !== sectionPath)
        // * Keep only direct children: '/section/slug' -> exactly 2 segments
        .filter((it) => {
          const segs = it.path.split('/').filter(Boolean)
          return segs.length === 2 && segs[0] === section.value
        })
        // * Respect navigation flag if set in frontmatter (navigation: false)
        .filter((it) => it.navigation !== false)
        // * Normalize and sort
        .map((it) => ({
          path: it.path,
          title: it.title,
          order: (it.meta?.order as number | undefined) ?? Number.POSITIVE_INFINITY,
        }))
        .sort((a, b) => {
          if (a.order !== b.order) return (a.order ?? Infinity) - (b.order ?? Infinity)
          const at = (a.title || a.path).toLowerCase()
          const bt = (b.title || b.path).toLowerCase()
          return at.localeCompare(bt)
        })

      return items
    },
    {
      watch: [section],
    },
  )

  return {
    section,
    items: computed(() => data.value ?? []),
    pending,
    error,
  }
}
