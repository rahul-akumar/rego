# REGO Component Library - AI Assistant Guidelines

## Project Overview

REGO is a Vue 3 component library built with TypeScript, Vite, and Tailwind CSS. It features reusable UI components with consistent design patterns, dark mode support, and comprehensive documentation.

## Project Structure

- `src/components/`: Individual UI components (button.vue, banner.vue, etc.)
- `src/pages/`: Documentation pages for each component (\*Doc.vue)
- `src/`: Core files including App.vue, router.ts, and main.ts

## Core Architecture Patterns

### Component Design Pattern

Components follow a consistent structure:

1. **Props Interface**: TypeScript interface defining component properties
2. **Default Props**: Using Vue's `withDefaults` for sensible defaults
3. **Styles Object**: Tailwind classes organized by purpose (base, variants, sizes)
4. **Helper Functions**: For class composition (e.g., `getVariantStyle()`)
5. **Slots**: Using Vue's slot system for flexible content

Example from `button.vue`:

```typescript
type Props = {
  variant?:
    | "primary"
    | "secondary"
    | "outlined"
    | "ghost"
    | "link"
    | "destructive";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  // other props...
};

const styles = {
  base: "inline-flex items-center justify-center rounded-md...",
  primary: "bg-black text-white hover:bg-opacity-80...",
  // other styles...
};

function getButtonClasses() {
  // Dynamic class composition logic
}
```

### Dark Mode Implementation

Components support dark mode via Tailwind's `dark:` prefix and a toggle in `App.vue`:

```typescript
// In App.vue
const isDark = ref(false);
function toggleTheme() {
  isDark.value = !isDark.value;
  document.documentElement.classList.toggle("dark", isDark.value);
}
```

### Documentation Pages

Each component has a corresponding documentation page (`*Doc.vue`) that:

1. Imports the component
2. Showcases variants, sizes, and usage examples
3. Provides description and usage guidelines

## Common Component Patterns

### Variant System

Components use a `variant` prop with consistent behavior:

- Standard variants: primary, secondary, outlined, ghost, etc.
- For banners: default, info, success, warning, danger
- Some components support an `important` boolean prop for emphasis

### Accessibility Features

- Focus states with visible outlines: `focus-visible:outline-none focus-visible:ring-2`
- Disabled states: `disabled:cursor-no-drop disabled:opacity-50`
- Proper ARIA attributes where applicable

### Slot System

Components typically offer multiple slots:

- Default slot for main content
- Named slots for specific areas (icon, actions, etc.)

Example from `banner.vue`:

```html
<div v-if="$slots.icon" :class="styles.icon">
  <slot name="icon" />
</div>
```

## Development Workflow

1. **Component Development**: Create component in `src/components/`
2. **Documentation**: Create matching doc page in `src/pages/`
3. **Router Update**: Add route in `router.ts`
4. **App Navigation**: Update `components` array in `App.vue`

## Best Practices for Contributing

1. Follow existing component patterns for consistency
2. Support both light and dark mode with appropriate contrast
3. Use Tailwind utility classes rather than custom CSS
4. Provide comprehensive prop types with TypeScript interfaces
5. Implement proper accessibility attributes
6. Create matching documentation pages that showcase all variants

## Command Reference

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build locally

## Related Guidance

For more detailed instructions, see:

- [Vue3 Instructions](vuejs3.instructions.md) - Detailed guidance for building components