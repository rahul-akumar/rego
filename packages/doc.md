# rego registry — authoring a new component (local, no publish)

This guide shows how to create a new single‑file Vue component (SFC) in the rego registry and make it available via the local CLI without publishing anything to npm.

Key concepts
- Registry location: packages/rego/registry
- CLI location: packages/rego-cli (binary: rego)
- SFC‑only rule: each component is a single .vue file under registry/components/<name>/files/
- Local dev mode: point the CLI to the local registry using REGO_REGISTRY_DIR

## 1) Plan your component
Pick a lowercase component key (directory name) and a PascalCase SFC filename.
- Example key: badge
- Example file: Badge.vue
- Target install path for consumers by default: src/components/ui (configurable per component entry)

## 2) Create the SFC file
Create the folder and the component file:
- packages/rego/registry/components/badge/files/Badge.vue

Example SFC scaffold (keep everything in one .vue file):
```vue
<template>
  <span :class="['rego-badge', `rego-badge--${variant}`, `rego-badge--${size}`]">
    <slot />
  </span>
</template>

<script setup lang="ts">
// * PROPS: public API
export interface Props {
  variant?: 'solid' | 'outline' | 'soft'
  size?: 'sm' | 'md' | 'lg'
}

withDefaults(defineProps<Props>(), {
  variant: 'soft',
  size: 'md',
})
</script>

<style scoped>
/* * BASE */
.rego-badge {
  --rego-badge-bg: var(--ds-color-primary, #3b82f6);
  --rego-badge-fg: var(--ds-color-on-primary, #fff);
  --rego-badge-border: transparent;
  --rego-badge-radius: var(--ds-radius-full, 9999px);
  --rego-badge-py: var(--ds-space-1, 0.25rem);
  --rego-badge-px: var(--ds-space-2, 0.5rem);
  --rego-badge-fs: 0.75rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--rego-badge-py) var(--rego-badge-px);
  border-radius: var(--rego-badge-radius);
  border: 1px solid var(--rego-badge-border);
  background: var(--rego-badge-bg);
  color: var(--rego-badge-fg);
  font-size: var(--rego-badge-fs);
  font-weight: 600;
  line-height: 1;
}

/* * VARIANTS */
.rego-badge--solid {
  --rego-badge-bg: var(--ds-color-primary, #3b82f6);
  --rego-badge-fg: var(--ds-color-on-primary, #fff);
  --rego-badge-border: var(--ds-color-primary, #3b82f6);
}

.rego-badge--outline {
  --rego-badge-bg: transparent;
  --rego-badge-fg: var(--ds-color-primary, #3b82f6);
  --rego-badge-border: var(--ds-color-primary, #3b82f6);
}

.rego-badge--soft {
  --rego-badge-bg: color-mix(in oklab, var(--ds-color-primary, #3b82f6), white 85%);
  --rego-badge-fg: color-mix(in oklab, var(--ds-color-primary, #3b82f6), black 15%);
  --rego-badge-border: transparent;
}

/* * SIZES */
.rego-badge--sm { --rego-badge-py: 0.125rem; --rego-badge-px: 0.375rem; --rego-badge-fs: 0.6875rem; }
.rego-badge--md { --rego-badge-py: 0.25rem;  --rego-badge-px: 0.5rem;   --rego-badge-fs: 0.75rem; }
.rego-badge--lg { --rego-badge-py: 0.375rem; --rego-badge-px: 0.75rem;  --rego-badge-fs: 0.8125rem; }
</style>
```

Notes
- Keep CSS in <style scoped> — no split CSS files.
- Prefer CSS custom properties (current token prefix in repo: --ds-).
- Keep props minimal; variants and sizes should map to class tokens.

## 3) (Optional) Add meta.json
While the CLI does not currently consume meta.json, keeping metadata is useful for docs.
- packages/rego/registry/components/badge/meta.json

Example:
```json
{
  "name": "badge",
  "description": "A small status label with variants and sizes.",
  "version": "0.1.0",
  "frameworks": ["vue"],
  "variants": ["solid", "outline", "soft"],
  "deps": [],
  "install": { "path": "src/components/ui", "rename": "Badge" }
}
```

## 4) Register the component in index.json
Edit packages/rego/registry/index.json and add a new entry under components.

Example (add the badge block):
```json
{
  "version": "0.1.0",
  "components": {
    "button": {
      "name": "Button",
      "version": "0.1.0",
      "files": ["components/button/files/Button.vue"],
      "deps": [],
      "install": { "path": "src/components/ui" }
    },
    "badge": {
      "name": "Badge",
      "version": "0.1.0",
      "files": ["components/badge/files/Badge.vue"],
      "deps": [],
      "install": { "path": "src/components/ui" }
    }
  }
}
```
Fields
- name: human-readable name
- version: component version (bump when the SFC changes)
- files: list of SFC paths (usually exactly one)
- deps: peer/runtime deps to advise the consumer to install
- install.path: default path where CLI will copy the file in a consumer app

## 5) Test locally with the CLI (no publishing)
Use the local registry with the environment variable:

- List to confirm the new component appears
```bash
REGO_REGISTRY_DIR=packages/rego/registry bun packages/rego-cli/bin/rego.ts list
```

- Add it to your app’s components (Nuxt auto-import path shown)
```bash
REGO_REGISTRY_DIR=packages/rego/registry bun packages/rego-cli/bin/rego.ts add badge --path=components/ui --as=AppBadge
```

- Overwrite if the file exists
```bash
REGO_REGISTRY_DIR=packages/rego/registry bun packages/rego-cli/bin/rego.ts add badge --path=components/ui --overwrite yes
```

The CLI will store checksums in .rego-manifest.json at repo root.

## 6) Versioning guidelines
- Bump the component version in index.json whenever the SFC changes (e.g., 0.1.1 → 0.1.2).
- Optionally bump the top-level registry.version to reflect a registry-wide release.
- Keep a changelog entry (recommended) describing user-impacting changes.

## 7) Conventions and best practices
- Directory naming: components/<key>/files/<PascalCase>.vue
- Keep to single-file components; avoid external CSS/JS.
- Use CSS custom properties (tokens) for theming; do not hardcode colors where avoidable.
- Keep external deps to a minimum; if needed, add them under the component’s deps in index.json.
- Prefer semantic class names and props; keep the public API stable and documented in meta.json.

## 8) Troubleshooting
- Component not shown in list: validate JSON syntax in index.json.
- Add fails with overwrite warning: pass --overwrite yes.
- File copied but Nuxt doesn’t find it: verify the --path matches your app’s components directory and naming (auto-import). You can also import explicitly:
  import AppBadge from '~/components/ui/AppBadge.vue'
- Env var not working: ensure REGO_REGISTRY_DIR path is correct (packages/rego/registry).

## 9) Later (when you want to publish)
- Publish rego (registry) so the CLI can fetch via CDN:
  - Ensure package.json has "files": ["registry"].
  - bun publish (or pnpm publish) from packages/rego.
- Publish rego-cli so users can bunx rego list/add:
  - Ensure package.json has bin mapping { "rego": "bin/rego.ts" }.

That’s it — add a .vue file, register it in index.json, and use the local CLI to copy it into your app.
