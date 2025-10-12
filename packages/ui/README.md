# @your-scope/ui (scaffold)

Purpose

- House single-file Vue components (SFCs) for the design system.
- Keep components minimal, unopinionated, and accessible.
- CLI-ready structure for later code generation/registry.

Structure

- src/components: all component SFCs
- src/index.ts: public exports

During development

- The Nuxt site can point an alias to `./packages/ui/src`.

Publishing (later)

- Add a proper build (e.g., unbuild/tsup/vite lib) and `exports` in package.json.
