# 🎨 REGO - Modern Vue Component Library

<div align="center">
  
[![Vue 3](https://img.shields.io/badge/Vue-3.x-brightgreen.svg)](https://vuejs.org/)
[![Nuxt 4](https://img.shields.io/badge/Nuxt-4.x-00DC82.svg)](https://nuxt.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38B2AC.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A modern, accessible, and customizable component library built with Vue 3, Nuxt 4, and Tailwind CSS. REGO provides beautiful, production-ready components for building exceptional user interfaces.

[Live Demo](https://rahul-akumar.github.io/REGO/) | [Releases](https://rahul-akumar.github.io/REGO/releases) | [Components](https://rahul-akumar.github.io/REGO/components)

</div>

## ✨ Features

- 🚀 **Modern Stack** - Built with Vue 3, Nuxt 4, and TypeScript for maximum performance
- 🎨 **Beautiful Design** - Clean, modern components with multiple variants
- 🌙 **Dark Mode** - Full dark mode support out of the box
- 📱 **Responsive** - Mobile-first design that works on all devices
- ♿ **Accessible** - WCAG compliant with proper ARIA attributes
- 🎯 **Type Safe** - Full TypeScript support with exported types
- 🎭 **Customizable** - Easy theming with Tailwind CSS utilities
- 📦 **Tree Shakeable** - Import only what you need
- 🧪 **Well Tested** - Comprehensive test coverage
- 📚 **Documented** - Interactive documentation with live examples

## 📦 Installation

```bash
# Using pnpm (recommended)
pnpm add @your-org/rego

# Using npm
npm install @your-org/rego

# Using yarn
yarn add @your-org/rego
```

## 🚀 Quick Start

### 1. Import the components you need

```vue
<script setup lang="ts">
import { DsButton, DsBadge, DsAlert, DsInput } from '@your-org/rego'
</script>

<template>
  <div>
    <DsButton variant="primary" @click="handleClick">
      Click me
    </DsButton>
    
    <DsBadge variant="secondary" label="New" />
    
    <DsAlert message="Welcome to REGO!" />
    
    <DsInput v-model="value" placeholder="Enter text..." />
  </div>
</template>
```

### 2. Import styles (if not using Nuxt module)

```css
/* In your main CSS file */
@import '@your-org/rego/dist/style.css';
```

## 🧩 Available Components

### Form Components
- **Button** - Versatile button with multiple variants, sizes, and states
- **Input** - Form input with validation support and various types

### Data Display
- **Badge** - Small status indicators with icon support

### Feedback
- **Alert** - Display important messages and notifications

### More components coming soon!
- Checkbox, Radio, Select, Switch
- Card, Table, List
- Modal, Drawer, Tooltip
- Navigation, Tabs, Breadcrumb

## 🎨 Component Examples

### Button Component

```vue
<!-- Primary button -->
<DsButton variant="primary">Primary</DsButton>

<!-- Secondary with icon -->
<DsButton variant="secondary">
  <template #icon>
    <PlusIcon />
  </template>
  Add Item
</DsButton>

<!-- Loading state -->
<DsButton loading>Processing...</DsButton>

<!-- Different sizes -->
<DsButton size="xs">Extra Small</DsButton>
<DsButton size="lg">Large</DsButton>

<!-- Icon only -->
<DsButton icon-only>
  <template #icon>
    <SearchIcon />
  </template>
</DsButton>
```

### Badge Component

```vue
<!-- Basic badge -->
<DsBadge label="New" />

<!-- With custom variant -->
<DsBadge variant="destructive" label="Critical" />

<!-- With icons -->
<DsBadge prepend-icon label="Status" />
```

### Alert Component

```vue
<!-- Basic alert -->
<DsAlert message="This is an alert message" />

<!-- Important alert -->
<DsAlert important message="Important notification!" />

<!-- With custom actions -->
<DsAlert message="Custom alert">
  <template #actions>
    <DsButton size="xs" variant="ghost">Dismiss</DsButton>
  </template>
</DsAlert>
```

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- pnpm 8+

### Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/REGO.git
cd REGO

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Available Scripts

```bash
# Development
pnpm dev          # Start dev server at http://localhost:3000

# Building
pnpm build        # Build for production
pnpm generate     # Generate static site
pnpm preview      # Preview production build

# Code Quality
pnpm lint         # Run ESLint
pnpm lint:fix     # Fix ESLint issues
pnpm typecheck    # Run TypeScript checks

# Testing
pnpm test         # Run tests
pnpm test:watch   # Run tests in watch mode
pnpm test:coverage # Generate coverage report
```

## 📁 Project Structure

```
REGO/
├── app/
│   ├── assets/           # CSS and static assets
│   ├── components/       
│   │   ├── ds/          # Design system components
│   │   └── ui/          # UI/Layout components
│   ├── composables/     # Vue composables
│   ├── config/          # Configuration files
│   ├── layouts/         # Nuxt layouts
│   └── pages/           # Documentation pages
├── content/             # Markdown content
├── public/              # Static files
└── nuxt.config.ts       # Nuxt configuration
```

## 🎯 Design Principles

1. **Simplicity First** - Clean, intuitive APIs that are easy to use
2. **Accessibility** - WCAG 2.1 AA compliant components
3. **Performance** - Optimized for speed and bundle size
4. **Flexibility** - Customizable while maintaining consistency
5. **Developer Experience** - Great TypeScript support and documentation

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### How to Contribute

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Vue.js](https://vuejs.org/)
- Powered by [Nuxt](https://nuxt.com/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide](https://lucide.dev/)

## 📮 Support

- 📧 Email: support@your-org.com
- 💬 Discord: [Join our community](https://discord.gg/your-invite)
- 🐛 Issues: [GitHub Issues](https://github.com/yourusername/REGO/issues)
- 📖 Docs: [Documentation](https://yourusername.github.io/REGO/)

## 🚀 Roadmap

- [ ] More form components (Select, Checkbox, Radio)
- [ ] Data visualization components
- [ ] Advanced layout components
- [ ] Animation utilities
- [ ] Figma design kit
- [ ] Storybook integration
- [ ] More theme presets
- [ ] CLI tool for component generation

---

<div align="center">
Made with ❤️ by the REGO Team
</div>
