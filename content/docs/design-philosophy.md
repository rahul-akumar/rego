---
title: Design philosophy
description: Critique of atomic design and a new sub-atomic model mapping science to Figma and code with concrete examples.
order: 3
---

## Sub-atomic design system

Atomic Design (atoms → molecules → organisms → templates → pages) gave us
language, but its hierarchy has always been a leaky metaphor. “Templates”
appearing after “molecules” isn’t coherent in any scientific sense, and it
doesn’t scale well as systems become more complex, multi-brand, themable, and
app-integrated.

This document proposes a Sub-Atomic Design System, drawing a tighter analogy to
biology and materials science: particles → atoms → molecules → cells → organs →
organisms → community. It keeps the spirit of composability while clarifying
responsibilities at each level for both design (Figma) and development (code).

## Why the original hierarchy breaks down

- Metaphor drift: “Templates” and “pages” describe outputs, not compositional
  constructs. They break the internal logic of composition.
- System complexity: Modern systems require theming, context-awareness,
  accessibility, and data-binding earlier than “page level.”
- Ownership and versioning: Teams need clear boundaries for who owns tokens,
  primitives, composites, and product-level flows.

## The Sub-Atomic model at a glance

| Layer       | Purpose                                                     | Figma (design)                                          | Code (dev)                                                             | Examples |
|------------:|:------------------------------------------------------------|:--------------------------------------------------------|:------------------------------------------------------------------------|:---------|
| Particles   | Raw measurable values; no semantics; not reused directly    | Raw values behind tokens (hex, px, ms)                  | Constants in config, CSS custom props’ values                           | `#3b82f6`, `4px`, `150ms`, `1.125rem` |
| Atoms       | Semantic units; the smallest reusable system primitives     | Design tokens (color.primary, space.2, radius.sm); styles | Utility classes and CSS variables; tailwind tokens                    | `bg-primary-600`, `p-2`, `rounded-sm`, `--color-primary-600` |
| Molecules   | Small, self-contained UI primitives built from atoms        | Figma components w/ variants                            | Vue components using tokens/utilities                                   | Button, Input, Tag, Avatar |
| Cells       | Functional units with state/layout responsibility           | Compound components; slot-based in Figma                | Components that wrap logic + layout of molecules                        | FormField (Label+Input+Help), Card, SearchField |
| Organs      | Feature-level assemblies                                    | Complex sections with content structure                 | Feature modules/sections composed of cells                              | Navbar, Sidebar, DataTable, FilterPanel |
| Organisms   | Page-level assemblies with data and routing context         | Full page templates/frames with content placeholders    | Route-backed views with fetching, guards, and layout                    | DashboardPage, ProductDetailPage |
| Community   | Cross-product or multi-app ecosystem                        | Libraries, design kits, documentation, governance       | Shared packages, storybook/docs, design tokens pipeline, CI             | Design system repo, multi-brand theming |

Notes:
- The term “community” emphasizes that design systems live across teams,
  products, and brands. It is the governance and distribution layer.
- Per your guidance: Atoms map to design tokens in Figma and utility classes in
  code. Particles are the raw values beneath those tokens.

---

## From science to system

- Particles → values: Like electrons or quarks, they are not useful alone in
  everyday modeling. In systems, they’re literal values: hex codes, spacing
  numbers, durations.
- Atoms → tokens/utilities: Named semantic building blocks that carry meaning
  (primary, success, space.2) and are the only allowed way to encode visual
  decisions in components.
- Molecules → primitives: Combine atoms to create the smallest meaningful UI
  components.
- Cells → functional units: Provide behavioral glue (state, layout, validation)
  and compose molecules into form controls or presentational units.
- Organs → sections/features: Larger groupings with domain purpose.
- Organisms → page-level compositions with data and routing context.
- Community → distribution & governance: Documentation, package publishing,
  release policy, and brand/theme management.

## Figma mapping and practices

- Particles
  - Store as raw values in token management (e.g., Figma Tokens/Variables).
  - Do not reference particles directly in components.
- Atoms
  - Create token sets: color, typography, space, radius, shadow, motion.
  - Name semantically (e.g., color.bg.default, color.accent.primary).
  - Use variables on component properties and styles.
- Molecules
  - Build base components (Button, Input, Tag) using tokens only.
  - Provide variants for size, emphasis, state. No hard-coded values.
- Cells
  - Compose primitives into meaningful controls (e.g., FormField: Label + Input
    + Help + Error). Define spacing/layout via tokens.
- Organs
  - Section-level components (Navbar, Sidebar, DataTable). Support slots/regions
    and responsive behavior via constraints.
- Organisms
  - Page frames. Wire up content placeholders, not hard-coded content.
- Community
  - Publish as a library file. Maintain a tokens file per brand. Document
    contribution guidelines and review checks.

## Code mapping and practices (Nuxt 3 + Vue + Tailwind)

- Particles (values)
  - Keep in a single source of truth (e.g., tokens JSON or tailwind theme).
  - Emit CSS custom properties at :root (for runtime theming).

```css
:root {
  --color-primary-600: #3b82f6; /* particle value */
  --space-2: 0.5rem;
  --radius-sm: 0.25rem;
  --motion-fast: 150ms;
}
```

- Atoms (tokens/utilities)
  - In Tailwind, expose semantic tokens via theme extensions and/or CSS vars.
  - Consume atoms via utilities, not literal values.

```js
// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          600: 'rgb(var(--color-primary-600) / <alpha-value>)',
        },
      },
      spacing: {
        2: 'var(--space-2)'
      },
      borderRadius: {
        sm: 'var(--radius-sm)'
      },
    }
  }
}
```

- Molecules (UI primitives)

```vue
<!-- components/ui/Button.vue -->
<template>
  <button
    :class="[
      'inline-flex items-center gap-2 font-medium transition-colors',
      sizeClass,
      variantClass,
      disabled ? 'opacity-50 cursor-not-allowed' : 'hover:brightness-110',
    ]"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md'
  disabled?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false
})

const sizeClass = computed(() =>
  props.size === 'sm' ? 'px-3 py-1.5 text-sm rounded-sm' : 'px-4 py-2 text-sm rounded-sm'
)
const variantClass = computed(() =>
  props.variant === 'primary' ? 'text-white bg-primary-600' : 'text-primary-600 bg-white border'
)
</script>
```

- Cells (functional units)

```vue
<!-- components/form/FormField.vue -->
<template>
  <label class="block">
    <span class="block mb-1 text-sm text-white/80"><slot name="label" /></span>
    <div class="relative">
      <slot />
    </div>
    <p v-if="hint" class="mt-1 text-xs text-white/60">{{ hint }}</p>
    <p v-if="error" class="mt-1 text-xs text-red-400">{{ error }}</p>
  </label>
</template>

<script setup lang="ts">
defineProps<{ hint?: string; error?: string }>()
</script>
```

- Organs (feature sections)

```vue
<!-- components/sections/Navbar.vue -->
<template>
  <nav class="flex items-center justify-between h-12 px-4 bg-neutral-900">
    <slot name="brand" />
    <slot name="actions" />
  </nav>
</template>
```

- Organisms (route views)

```vue
<!-- pages/dashboard.vue -->
<template>
  <Navbar>
    <template #brand>Acme</template>
    <template #actions><UserMenu /></template>
  </Navbar>
  <main class="p-4">
    <DataTable :rows="rows" />
  </main>
</template>

<script setup lang="ts">
const { data: rows } = await useAsyncData('rows', () => $fetch('/api/rows'))
</script>
```

- Community (distribution & governance)
  - Package the UI library (atoms→cells) as a workspace package.
  - Publish tokens as JSON and CSS variables. Generate typings.
  - Provide Storybook/Nuxt Storybook and docs. Enforce checks in CI.

## Practical examples end-to-end

- Button (Molecule) in a Form (Cell) inside a Navbar (Organ) in a Dashboard
  (Organism)
  1. Particles: `#3b82f6`, `0.5rem`, `150ms`
  2. Atoms: `primary.600`, `space.2`, `radius.sm`
  3. Molecule: `<Button variant="primary" size="sm" />`
  4. Cell: `<FormField hint=\"Email used for login\"><Input /></FormField>`
  5. Organ: `<Navbar><template #actions><Button>Save</Button></template></Navbar>`
  6. Organism: `<DashboardPage />` route that composes the organ(s) and cells

## Migration from Atomic Design

- Map current “atoms” (often primitive components) to Molecules.
- Introduce Atoms as tokens/utilities. Replace literal values with atoms.
- Identify Cell boundaries where logic/layout glue exists.
- Keep existing “organisms,” but split content-free sections as Organs and
  route/data-aware pages as Organisms.
- Create a Community layer: documentation site, tokens pipeline, versioning.

## Governance and versioning

- Particles/Atoms: versioned per theme/brand; changes require system-wide audit.
- Molecules/Cells: semver minor for new variants, major for breaking changes.
- Organs/Organisms: owned by feature teams; follow app-level release cadence.
- Community: owns contribution guide, lint rules, checks for token-only usage in
  UI components, and documentation.

## TL;DR

- Replace “templates/pages” with a biologically consistent spectrum that maps to
  real team boundaries and artifacts.
- Atoms are design tokens in Figma and utility classes in code.
- Particles are the raw values beneath those tokens and should not be used
  directly.
- Cells, Organs, and Organisms clarify the middle and upper tiers where atomic
  design is vague.
