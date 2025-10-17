<template>
  <div class="rounded-xl border border-white/10 bg-neutral-900/40 shadow-sm overflow-hidden">
    <!-- Header -->
    <div class="px-4 py-3 border-b border-white/10 flex items-center justify-between">
      <p class="text-sm text-white/60">Add the {{ nameLabel }} component using your preferred package runner.</p>
    </div>

    <!-- Tabs -->
    <div class="px-4 pt-4">
      <div class="inline-flex rounded-lg border border-white/10 bg-black/10 p-1">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          class="flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-colors"
          :class="active === tab.id ? 'bg-white/10 text-white' : 'text-white/70 hover:text-white hover:bg-white/5'"
          type="button"
          @click="active = tab.id"
        >
          <Icon :name="tab.icon" class="w-4 h-4" />
          <span class="capitalize">{{ tab.label }}</span>
        </button>
      </div>
    </div>

    <!-- Panel -->
    <div class="px-4">
      <div class="relative">
        <pre class="p-3 rounded-lg bg-black/30 border border-white/10 overflow-x-auto text-sm leading-relaxed text-white/90"><code>{{ currentCommand }}</code></pre>
        <UiButton
          size="xs"
          variant="outline"
          type="button"
          class="absolute top-3 right-4"
          :disabled="copied"
          @click="onCopy"
        >
          {{ copied ? 'Copied' : 'Copy' }}
        </UiButton>
      </div>
      <p class="mt-2 text-sm text-white/50">Runs the {{ cli }} CLI to download the component into your project.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  /** Component name to download via the CLI (e.g., 'button') */
  name?: string
  /** CLI package name to execute via npx/dlx/bunx */
  cli?: string
  /** Optional human-friendly label for header */
  label?: string
}>(), {
  name: 'button',
  cli: 'rego-cli',
  label: undefined,
})

const nameLabel = computed(() => props.label ?? props.name?.charAt(0).toUpperCase() + props.name.slice(1))

// Tabs config (Bun first)
const tabs = [
  { id: 'bun', label: 'bun', icon: 'logos:bun' },
  { id: 'pnpm', label: 'pnpm', icon: 'logos:pnpm' },
  { id: 'npm', label: 'npm', icon: 'logos:npm-icon' },
  { id: 'yarn', label: 'yarn', icon: 'logos:yarn' },
] as const

const active = ref<typeof tabs[number]['id']>('bun')

const commands = computed(() => ({
  bun: `bunx ${props.cli} add ${props.name}`,
  pnpm: `pnpm dlx ${props.cli} add ${props.name}`,
  npm: `npx ${props.cli} add ${props.name}`,
  yarn: `yarn dlx ${props.cli} add ${props.name}`,
}))

const currentCommand = computed(() => commands.value[active.value])

const copied = ref(false)
async function onCopy() {
  try {
    await navigator.clipboard?.writeText(currentCommand.value)
    copied.value = true
    setTimeout(() => (copied.value = false), 1200)
  } catch {
    // no-op
  }
}
</script>
