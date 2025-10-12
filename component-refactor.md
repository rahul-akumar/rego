# Component Refactor Plan — Single-File, Minimal, Accessible Vue Components

Purpose
- Consolidate each component into a single .vue file (SFC) with inline types and variants.
- Keep components minimal and unopinionated, but fully accessible (a11y-first).
- Standardize on class-variance-authority (CVA) for variants and Tailwind 4 tokens for styling.
- Keep components framework-agnostic (pure Vue). No Nuxt runtime APIs inside library components.

Notes on CVA
- shadcn/ui uses class-variance-authority to define component variants. We will too.
- Why CVA: colocation of visual variants with the component; typed variants via VariantProps; predictable class merging.

Guiding principles
- Minimal: expose the least surface area needed; sensible defaults; zero external opinions beyond tokens and variants.
- Accessible: semantic HTML first; ARIA roles/attributes only where necessary; proper keyboard interactions.
- Headless-first mental model: behavior and accessibility do not rely on styling classes.
- Composability: use slots and small composables; provide/inject for compound components.
- Styling: Tailwind 4 utilities + CSS variables from app/assets/css/global.css and themes.css; no hardcoded colors.
- Types: use type (not interface). colocate prop types with the SFC.
- No Nuxt in library code: do not import useRoute/useHead/etc. Keep Nuxt usage in website-only components.

Conventions
- File naming: kebab-case filenames (enforced), PascalCase component names.
- Directory layout (library perspective):
  - components/<name>/{name}.vue (single file)
  - For compound components: keep separate files per part (e.g., dropdown-menu-trigger.vue), still single-file per part.
- Exports: re-export via an index.ts per folder (for library packaging). For now, optional while components live in app/.
- Class merging: use cn() (clsx + tailwind-merge). Never concatenate class strings manually.
- Variants: define CVA in the same <script setup> as the component; derive prop types from VariantProps<typeof variants>.
- Data attributes: use data-slot="..." and stateful data attributes (e.g., data-state="open") to enable predictable styling hooks.

Common SFC template (pattern)
```vue
<script setup lang="ts">
import { computed } from 'vue'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '~/utils/cn'

// 1) Variants
const componentVariants = cva('base classes', {
  variants: {
    variant: {
      default: '...',
      // ...
    },
    size: {
      default: '...',
      // ...
    },
  },
  compoundVariants: [
    // optional
  ],
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

// 2) Types from cva
type ComponentVariants = VariantProps<typeof componentVariants>

type Props = {
  variant?: ComponentVariants['variant']
  size?: ComponentVariants['size']
  class?: string
  // ...other props
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'default',
})

// 3) Computed classes
const classes = computed(() => cn(
  componentVariants({ variant: props.variant, size: props.size }),
  props.class,
))
</script>

<template>
  <div :class="classes" data-slot="component">
    <slot />
  </div>
</template>
```

Accessibility (a11y) baseline checklists
- General
  - Use semantic elements by default (<button>, <input>, <label>, <nav>, <ul>/<li>, <dialog> when applicable).
  - Labels: ensure <label for="id"> is wired; prefer slots + props for label text.
  - States: reflect disabled, checked, expanded using disabled/aria-disabled/aria-expanded, etc.
  - Keyboard: Tab, Shift+Tab traversal, Enter/Space activation as appropriate.
  - Focus: visible focus rings; manage focus for overlays (dialogs, menus, popovers) and restore focus on close.
  - ARIA: only where needed; ensure role/name/value are correct; ensure id relationships (aria-controls, aria-labelledby).
- Overlays (dropdown, popover, tooltip, dialog)
  - Use @floating-ui/vue for positioning (flip, shift, collision) to handle scroll containers and viewport edges.
  - Escape to close; click outside to close; trap focus for dialogs (aria-modal).
  - Portals (Teleport to body) for overlay content; manage aria-hidden on background when needed.
- List widgets (menu, listbox, tabs)
  - Menus: role="menu", role="menuitem"; arrow-key roving focus; Home/End; Escape to close.
  - Tabs: role="tablist", role="tab", role="tabpanel"; left/right to switch tabs; aria-controls/id linkage.
  - Select/Listbox: role="listbox"/"option" or use a well-tested primitive (radix-vue) where feasible.

Dependencies to (re)align
- class-variance-authority: standardized for variants (already present).
- tailwindcss-animate: used by many animate-in/out classes; add if not present or replace with custom utilities.
- @floating-ui/vue: for positioning and collision handling in overlays.
- Optional: radix-vue for complex a11y primitives (dialog, popover, tabs, etc.).

Refactor plan per component (current scope)

Button (app/components/button/button.vue)
- Move variants.ts and types.ts inline into button.vue (<script setup>), using CVA and VariantProps.
- Keep semantic <button>; prevent click when loading/disabled; support icon-only with aria-label (require label prop when icon-only).
- Slots: default, icon (named), allow asChild boolean slot passthrough for composition.
- Data hooks: data-slot="button"; add aria-disabled if disabled; maintain focus-visible styling.
- Testing: click, keyboard activation, disabled and loading semantics.

Badge (app/components/badge/badge.vue)
- Inline variants + types; expose minimal props (variant, asChild, collapsible?).
- If collapsible shows text on hover/focus, ensure that the text is not essential content (avoid hiding essential info from SRs).
- Data hooks: data-slot="badge".

Input (app/components/input/input.vue)
- Inline variants + types; size control; label association via id/for; aria-invalid, aria-describedby wiring support.
- Prefix/suffix slots are fine; ensure they don’t trap pointer events if decorative.
- Emit proper events; v-model compatibility.

Accordion (app/components/accordion/*)
- Consolidate into a single accordion.vue if simple; for full a11y, maintain focus control and ARIA as per disclosure pattern.
- Ensure each button controls a region with aria-controls; set aria-expanded; manage roving focus if needed.

Breadcrumb (app/components/breadcrumb/*)
- Inline CVA; semantic <nav aria-label="Breadcrumb"> with <ol>/<li>; items are links.

Dropdown Menu (app/components/dropdown-menu/*)
- Keep multi-file (compound), but make each part single-file (script+template only; no external types/variants files).
- Adopt @floating-ui/vue for positioning; keep Teleport; provide/inject context with ids.
- Roles: role="menu" / role="menuitem"; Tab/Shift+Tab; ArrowUp/ArrowDown; Home/End; Escape; close on selection unless prevented.
- ARIA: aria-controls, aria-labelledby; manage aria-disabled for disabled items.

Skeleton (app/components/skeleton/*)
- Keep compound parts (text, image, rect) as separate SFCs; theme and animation speed via data attributes.
- If purely decorative, ensure role="presentation" where appropriate; if indicating loading, aria-live role="status" correctly.

Pin Input (app/components/pin-input/*)
- Ensure labeled grouping; keyboard navigation across cells; paste handling; aria-invalid when needed.

Throbber (app/components/throbber/*) and Orb (app/components/orb/*)
- Decorative by default: aria-hidden="true" unless used as status; when status, role="status" and an accessible label.

Implementation steps (repeatable for each component)
1) Inline
   - Move CVA from variants.ts into the SFC; remove variants.ts.
   - Define types using VariantProps<typeof variants>; remove types.ts.
   - Keep cn() usage for class merging.
2) Props and slots
   - Define props with withDefaults; expose only necessary props.
   - Provide named slots for extensibility; document them.
3) A11y
   - Use semantic element; add ARIA roles/attributes sparingly where required.
   - Implement keyboard handlers; keep focus-visible styles.
4) Data attributes
   - Add data-slot="<name>" and state attributes like data-state to support styling.
5) Tests
   - Add vitest + @vue/test-utils tests per component: renders, keyboard interactions, aria attributes.

Example: Button consolidated (sketch)
```vue
<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '~/utils/cn'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: { default: 'h-9 px-4 py-2', sm: 'h-8 rounded-md px-3', lg: 'h-10 rounded-md px-8', icon: 'h-9 w-9' },
      iconOnly: { true: 'aspect-square p-0 gap-0 justify-center', false: '' },
      loading: { true: 'cursor-progress opacity-70', false: '' },
      inverted: { true: '', false: '' },
    },
    defaultVariants: { variant: 'default', size: 'default', iconOnly: false, loading: false, inverted: false },
  }
)

type ButtonVariants = VariantProps<typeof buttonVariants>

type Props = {
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  loading?: boolean
  inverted?: boolean
  asChild?: boolean
  class?: string
  ariaLabel?: string // required when icon-only
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'default',
  loading: false,
  inverted: false,
  asChild: false,
})

const attrs = useAttrs()
const isIconOnly = computed(() => Object.prototype.hasOwnProperty.call(attrs, 'icon-only'))

const classes = computed(() => cn(
  buttonVariants({ variant: props.variant, size: props.size, iconOnly: isIconOnly.value, loading: props.loading, inverted: props.inverted }),
  props.class,
))

function handleClick(e: MouseEvent) {
  if (props.loading) { e.preventDefault(); e.stopPropagation() }
}
</script>

<template>
  <slot v-if="props.asChild" :class="classes" data-slot="button" @click="handleClick" />
  <button
    v-else
    :class="classes"
    :aria-label="isIconOnly ? props.ariaLabel : undefined"
    :disabled="props.loading ? true : undefined"
    data-slot="button"
    type="button"
    v-bind="$attrs"
    @click="handleClick"
  >
    <slot />
  </button>
</template>
```

Docs and demos
- Keep site-only wrappers in app/components/ui (component-preview, docs chrome).
- In docs examples, import components explicitly from the library path (when we move to packages/ui).
- Show a11y examples: icon-only buttons with aria-label; keyboard nav demos for menus; focus management for dialogs.

Testing strategy (incremental)
- Add vitest + @vue/test-utils; create tests per component for:
  - Rendering + default classes
  - Variant classes applied
  - Keyboard interactions (Enter/Space on Button, Arrow keys in Dropdown)
  - ARIA attributes present when applicable
  - Focus behavior on overlays

Rollout plan
1) Button, Badge, Input: consolidate to SFCs with inline CVA and types.
2) Dropdown Menu: convert to SFC per part; adopt @floating-ui/vue; add a11y/keyboard tests.
3) Skeleton + variants: consolidate and add decorative vs status guidance.
4) Accordion/Breadcrumb/Pin Input/Throbber/Orb: consolidate and align a11y.
5) Add tailwindcss-animate or custom animations to match variant classes referenced in code.
6) (Optional) Introduce radix-vue for Dialog/Popover/Tooltip/Tabs in the next wave for rock-solid a11y.

Ownership & review
- Enforce ESLint rules (type over interface, kebab-case filenames) and CI formatting.
- PRs must include a11y notes and tests for keyboard/ARIA where applicable.

Appendix: do’s and don’ts
- Do: use semantic elements; expose minimal props; document slots.
- Do: prefer tokens and utilities (no hardcoded colors).
- Do: add data-slot and data-state attributes for styling hooks.
- Don’t: import Nuxt-specific APIs in component code.
- Don’t: rely solely on color for meaning; ensure text/aria equivalents.
- Don’t: trap focus outside dialogs; always restore focus on close.

## Registry (canonical, style: v1)

- Canonical templates live under: registry/vue/v1/ui
- Each component is a single .vue file with inline CVA and a local cn helper.
- Metadata lives in: registry/vue/registry.json (style = v1)
- The CLI and the package build both read from this registry to avoid drift.

### Package sync (dev)

- Use scripts/sync-registry-to-package.mjs to copy templates into packages/ui/src/components and generate exports.
- During development, you can alias @your-scope/ui to packages/ui/src in Nuxt for local testing.

```ts
// nuxt.config.ts (dev alias example)
export default defineNuxtConfig({
  vite: {
    resolve: { alias: { '@your-scope/ui': './packages/ui/src' } },
  },
})
```

### Workspace

Ensure pnpm-workspace.yaml includes the packages folder:

```yaml
packages:
  - "packages/*"
  - "."
```
