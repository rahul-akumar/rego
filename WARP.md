# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Essential Development Commands

```bash
# Development
pnpm dev          # Start dev server at http://localhost:3000
pnpm build        # Build for production
pnpm generate     # Generate static site for GitHub Pages
pnpm preview      # Preview production build

# Image Optimization
pnpm optimize:images  # Generate WebP versions of PNG illustrations

# Code Quality
pnpm lint         # Run ESLint
pnpm lint:fix     # Fix ESLint issues
```

**Note**: Despite what the README suggests, this project currently has no test scripts configured. The `@nuxt/test-utils` dependency is present but no test commands exist in package.json.

## Architecture Overview

REGO is a **Nuxt 4 + Vue 3 + TypeScript + Tailwind CSS 4** component library built for static site generation and deployed to GitHub Pages. It uses a sophisticated component architecture with two distinct patterns:

### Tech Stack
- **Framework**: Nuxt 4 (SSG mode, no SSR) 
- **Frontend**: Vue 3 Composition API + TypeScript 5.9+
- **Styling**: Tailwind CSS 4 + class-variance-authority (CVA)
- **Package Manager**: pnpm
- **Icons**: lucide-vue-next
- **Image Optimization**: Sharp for build-time WebP conversion
- **Utils**: clsx + tailwind-merge via `cn()` utility

### Component Architecture Patterns

**1. Legacy Pattern** (`app/components/ds/`)
- Single-file components with co-located variants and types
- Used for simple components (button, badge, input, alert)
- CVA variants defined directly in component files

**2. Modern Pattern** (`app/components/{name}/`)
- Folder-based components with sub-components
- Used for compound components (dropdown-menu, skeleton)
- Shared types in `types.ts`, shared variants in `variants.ts`
- Uses provide/inject for component communication
- Auto-imported as PascalCase (e.g., `dropdown-menu.vue` → `<DropdownMenu>`)

### Key Project Structure
```
app/
├── components/
│   ├── ds/                    # Legacy simple components 
│   ├── {name}/                # Modern compound components
│   └── ui/                    # Layout/UI website components
├── composables/               # Business logic composables
├── config/components.config.ts # Component registry with metadata
├── pages/components/          # Component documentation pages
└── utils/cn.ts               # className merging utility

src/
├── types/                    # Global TypeScript types
└── styles/variants/          # Global CVA variant definitions

content/                      # Content management (releases)
```

## Development Patterns

### Component Creation

**For Compound Components (Preferred)**:
1. Create folder `app/components/{name}/`
2. Create main component `{name}.vue` and sub-components `{name}-{part}.vue`
3. Define shared types in `types.ts` and variants in `variants.ts` 
4. Register in `app/config/components.config.ts`
5. Use provide/inject pattern for state sharing

**For Simple Components (Legacy)**:
1. Create `app/components/ds/{name}.vue`
2. Define types in `src/types/{name}.ts`
3. Co-locate CVA variants within the component file

### Styling System
- **Class Variance Authority (CVA)** for component variants
- Always use `cn()` utility for className merging
- Support 6 color themes: default, sapphire, emerald, topaz, ruby, amethyst
- Theme management via `useTheme()` composable
- Use `data-slot` attributes for component styling targets

### Code Style (ESLint Enforced)
- Use `type` over `interface`
- `<script setup lang="ts">` with `withDefaults()` for props
- Import organization: type imports first, then Vue, third-party, internal
- 2-space indentation, double quotes, semicolons
- kebab-case file naming

### Theme System
- Multi-theme support with light/dark modes
- Apply theme classes to document root: `theme-{name}` and `dark`
- Use semantic color tokens in Tailwind classes
- Access via `useTheme()` composable

## Configuration Notes

- **Static Generation Only**: `ssr: false` in nuxt.config.ts
- **GitHub Pages**: `baseURL: "/REGO/"` configured for deployment
- **Auto-imports**: Components auto-imported as PascalCase
- **Image Optimization**: Sharp for build-time WebP generation
- **Husky + lint-staged**: Pre-commit linting enforced
- **ESLint**: @antfu/eslint-config with strict TypeScript rules

## Component Documentation

Each component requires:
1. Entry in `app/config/components.config.ts` with metadata
2. Documentation page in `app/pages/components/{name}.vue`
3. Live examples using `ComponentPreview` components
4. Comprehensive accessibility and keyboard navigation support

## Key Utilities

- `cn()` - className merging utility (clsx + tailwind-merge)
- `useTheme()` - theme management composable
- CVA variants system for consistent component styling
- Provide/inject pattern for compound component state sharing

## Image Optimization System

### Static Optimization Approach
- **Provider**: None (GitHub Pages compatible)
- **Build Tool**: Sharp for PNG → WebP conversion
- **Formats**: WebP-first with PNG fallback via `<picture>` element
- **Sizes**: 3 responsive variants (sm: 200px, default: 400px, lg: 600px)
- **Quality**: 80-90% depending on size

### Commands
```bash
pnpm optimize:images    # Generate optimized WebP versions
```

### Usage Pattern
```vue
<!-- Component illustrations with responsive WebP + PNG fallback -->
<picture>
  <source
    :srcset="`image-sm.webp 200w, image.webp 400w, image-lg.webp 600w`"
    sizes="(max-width: 640px) 200px, 400px"
    type="image/webp"
  >
  <img :src="image.png" alt="Component illustration" loading="lazy">
</picture>
```

### File Structure
```
public/illustrations/
├── *.png                    # Source images (1-2MB)
└── optimized/               # Generated by script
    ├── component.webp       # 400x300, ~10KB
    ├── component-sm.webp    # 200x150, ~3KB
    └── component-lg.webp    # 600x450, ~30KB
```

### Build Process
1. Run `pnpm optimize:images` to generate WebP variants
2. Commit optimized files to repository
3. Deploy - GitHub Pages serves static optimized images

## Performance Considerations

- Tree-shakeable component library design
- Static site generation optimized for GitHub Pages
- Automated image optimization with WebP conversion and responsive sizing
- Bundle size minimization through selective imports
