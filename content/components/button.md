---
title: Button
description: Base Button with variants, t-shirt sizes, start/end icon slots, and accessible defaults.
order: 1
---

::ComponentPreview{ title="Button" description="variant: solid • size: md" filename="button.vue" language="vue" }
<UiButton>Click me</UiButton>
::
-- <!--line break between preview component is non-existent-->
::ComponentPreview{ title="Button" description="variant: secondary • size: md" filename="button.vue" language="vue" }
<UiButton variant="secondary">Click me</UiButton>
::
-- <!--line break between preview component is non-existent-->
::ComponentPreview{ title="Button" description="variant: outline • size: md" filename="button.vue" language="vue" }
<UiButton variant="outline">Click me</UiButton>
::
--
::ComponentPreview{ title="Button" description="variant: ghost • size: md" filename="button.vue" language="vue" }
<UiButton variant="ghost">Click me</UiButton>
::
--
::ComponentPreview{ title="Button icon start" description="variant: solid • size: md" filename="button.vue" language="vue" }
<UiButton> 
  <template #start> 
    <Icon name="lucide:search" />
  </template>Click me</UiButton>
::
--
::ComponentPreview{ title="Button icon end" description="variant: solid • size: md" filename="button.vue" language="vue" }
<UiButton> 
  <template #end> 
    <Icon name="lucide:search" />
  </template>Click me</UiButton>
::

## Installation

<ComponentInstall name="button"></ComponentInstall>

## Source

- Package: `packages/rego/registry/components/button/files/Button.vue`
- App (if you use a local wrapper): `app/components/ui/Button.vue`

## Import

```vue path=null start=null
<script setup>
  // If your app auto-registers UI components, you can use <UiButton /> directly.
  // Otherwise, import explicitly:
  import Button from '~/components/ui/Button.vue'
</script>
```

## Basic usage

```vue path=null start=null
<template>
  <Button>Click me</Button>
</template>
```

## Variants

- solid (default)
- outline

```vue path=null start=null
<template>
  <div class="row">
    <Button>Solid</Button>
    <Button variant="outline">Outline</Button>
  </div>
</template>
```

## Sizes (t‑shirt)

Supported sizes: xs, sm, md (default), lg, xl

```vue path=null start=null
<template>
  <div class="stack">
    <Button size="xs">XS</Button>
    <Button size="sm">SM</Button>
    <Button>MD</Button>
    <Button size="lg">LG</Button>
    <Button size="xl">XL</Button>
  </div>
</template>
```

## Icon slots (direction‑aware)

Use start and end slots for leading/trailing visuals. These map well to LTR/RTL layouts.

```vue path=null start=null
<template>
  <Button>
    <template #start>
      <IconSearch />
    </template>
    Search
    <template #end>
      <IconChevronRight />
    </template>
  </Button>
</template>
```

## Disabled and loading

- disabled: prevents interaction and reduces opacity
- loading: blocks clicks and sets `aria-busy="true"`

```vue path=null start=null
<template>
  <div class="row">
    <Button disabled>Disabled</Button>
    <Button :loading="true">Loading…</Button>
  </div>
</template>
```

## Props

```ts path=null start=null
interface Props {
  variant?: 'solid' | 'outline'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  type?: 'button' | 'submit' | 'reset' // default: 'button'
  disabled?: boolean // default: false
  loading?: boolean  // default: false
}
```

## Events

- click: emitted only when the button is not disabled or loading

```vue path=null start=null
<template>
  <Button @click="onClick">Save</Button>
</template>

<script setup>
function onClick() {
  // handle click
}
</script>
```

## Accessibility

- Native `<button>` semantics with keyboard support
- Default `type="button"` to avoid accidental form submission
- `aria-busy` reflects loading state
- Visible focus indicator via `:focus-visible`
- If you render an icon-only button, provide an `aria-label`

```vue path=null start=null
<Button aria-label="Search">
  <template #start><IconSearch /></template>
</Button>
```

## Theming

Customize using CSS custom properties. You can set them inline, in a CSS class, or on a theme container.

Available tokens:
- `--ds-btn-bg`, `--ds-btn-fg`, `--ds-btn-border`
- `--ds-btn-bg-hover`, `--ds-btn-bg-active`
- `--ds-btn-radius`, `--ds-btn-padding-y`, `--ds-btn-padding-x`
- `--ds-btn-font-size`, `--ds-btn-font-weight`
- `--ds-btn-ring`

Example:

```vue path=null start=null
<template>
  <Button class="btn--dark">Dark</Button>
</template>

<style scoped>
.btn--dark {
  --ds-btn-bg: #111827;
  --ds-btn-fg: #ffffff;
  --ds-btn-border: #111827;
  --ds-btn-bg-hover: color-mix(in oklab, #111827, white 10%);
  --ds-btn-bg-active: color-mix(in oklab, #111827, white 20%);
}
</style>
```

## Notes

- Icon slot names are `start` and `end` (direction-aware). If you previously used `prepend`/`append`, migrate to `start`/`end`.
- The default size is `md`; default variant is `solid`.
- The component prevents click events while `disabled` or `loading` is true.
