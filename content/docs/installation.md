---
title: Installation
description: Prerequisites, install steps, and verification.
order: 2
---

## Prerequisites

- Node.js LTS (v18+ recommended)
- macOS/Linux/WSL supported; Windows via WSL2
- Package manager: pnpm or bun

## Install the project

If you haven’t installed dependencies yet, run one of the following:

```bash
# pnpm (preferred)
pnpm install
```

```bash
# bun
bun install
```

## Useful scripts

```bash
# Start dev server
pnpm run dev

# Type-check (if configured)
pnpm run typecheck

# Lint
pnpm run lint
```

> Tip: Prefer pnpm or bun, avoid npm to keep install times fast and lockfile stable.

## Verify your setup

1. Start the dev server: `pnpm run dev`
2. Open the app at the printed URL (usually http://localhost:3000)
3. You should see the home page. Navigate to Docs via the header.

If the Docs page loads and you can view this Installation guide, you’re set.

## Troubleshooting

- Node version mismatch
  - Use `nvm use --lts` or switch to a compatible Node version.
- Lockfile or store issues (pnpm)
  - `pnpm store prune && rm -f pnpm-lock.yaml && pnpm install`
- Cache issues (bun)
  - `bun pm cache rm && bun install`

## Next steps

- Explore the project structure
- Read through the Vision and Getting Started guides (coming soon)
- Open an issue if something doesn’t work as expected
