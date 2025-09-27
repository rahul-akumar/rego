<script setup lang="ts">
import { computed } from "vue";

import type { OrbProps, OrbState } from "./types";

const props = withDefaults(defineProps<OrbProps>(), {
  size: "default",
  state: "idle" as OrbState,
  energy: 0.5,
  ring: true,
  glow: true,
  gradient: "multi",
  interactive: false,
  label: "AI activity",
});

const sizePxMap: Record<NonNullable<OrbProps["size"]>, number> = {
  xs: 16,
  sm: 20,
  default: 28,
  lg: 48,
  xl: 64,
};

const box = computed(() => sizePxMap[props.size] ?? sizePxMap.default);

// Animation durations based on state
const durations = computed(() => {
  // sensible defaults
  let swirl = 10; // seconds
  let pulse = 1.8; // seconds
  let wave = 2.2; // seconds

  switch (props.state) {
    case "listening":
      swirl = 8;
      pulse = 1.4;
      wave = 1.8;
      break;
    case "thinking":
    case "processing":
      swirl = 12;
      pulse = 2.2;
      wave = 2.6;
      break;
    case "speaking":
      swirl = 6;
      pulse = 1.1;
      wave = 1.4;
      break;
    case "idle":
    default:
      swirl = 14;
      pulse = 2.4;
      wave = 2.8;
      break;
  }

  // Modulate speeds by energy (0..1)
  const e = Math.min(1, Math.max(0, props.energy ?? 0.5));
  // Higher energy: faster swirl/pulse/wave
  swirl = Math.max(4, swirl - e * 4);
  pulse = Math.max(0.8, pulse - e * 0.6);
  wave = Math.max(1.2, wave - e * 0.6);

  return {
    swirl: `${swirl}s`,
    pulse: `${pulse}s`,
    wave: `${wave}s`,
  };
});

const showWaves = computed(() => ["listening", "speaking"].includes(props.state));

const rootClasses = computed(() =>
  cn(
    "inline-flex items-center justify-center align-middle",
    props.class,
  ),
);

const orbStyle = computed(() => ({
  "--orb-size": `${box.value}px`,
  "--orb-swirl": durations.value.swirl,
  "--orb-pulse": durations.value.pulse,
  "--orb-wave": durations.value.wave,
}) as Record<string, string>);
</script>

<template>
  <span
    :class="rootClasses"
    role="status"
    aria-live="polite"
    :aria-label="label"
    data-slot="orb"
    :style="orbStyle"
  >
    <span
      class="relative"
      :style="{ width: `var(--orb-size)`, height: `var(--orb-size)` }"
    >
      <!-- Glow layer -->
      <span
        v-if="glow"
        class="absolute inset-0 rounded-full opacity-60 will-change-transform orb-anim-swirl"
        :class="[
          gradient === 'primary' ? 'bg-[radial-gradient(closest-side,theme(colors.primary/.7),transparent_70%)]'
          : 'bg-[conic-gradient(from_0deg,theme(colors.blue.400),theme(colors.violet.400),theme(colors.fuchsia.400),theme(colors.blue.400))]',
        ]"
        aria-hidden="true"
      />

      <!-- Core orb -->
      <span
        class="absolute inset-0 rounded-full shadow-inner will-change-transform orb-anim-pulse"
        :class="[
          gradient === 'primary' ? 'bg-[radial-gradient(circle_at_30%_30%,theme(colors.primary/.9),theme(colors.primary/60)_50%,theme(colors.primary/30)_70%,transparent_75%)]'
          : 'bg-[radial-gradient(circle_at_30%_30%,theme(colors.blue.400/.9),theme(colors.violet.400/.7)_45%,theme(colors.fuchsia.400/.5)_65%)]',
        ]"
        aria-hidden="true"
      />

      <!-- Animated color overlay -->
      <span
        class="absolute inset-0 rounded-full pointer-events-none will-change-transform orb-anim-swirl mix-blend-color opacity-90"
        :class="[
          gradient === 'primary'
            ? 'bg-[conic-gradient(from_0deg,theme(colors.primary/.85),theme(colors.primary/.65),theme(colors.primary/.9),theme(colors.primary/.85))]'
            : 'bg-[conic-gradient(from_0deg,theme(colors.sky.400),theme(colors.violet.400),theme(colors.fuchsia.400),theme(colors.sky.400))]',
        ]"
        aria-hidden="true"
      />

      <!-- Subtle inner highlight -->
      <span
        class="absolute inset-[15%] rounded-full bg-white/10 mix-blend-overlay"
        aria-hidden="true"
      />

      <!-- Outer ring (ai status) -->
      <span
        v-if="ring"
        class="absolute -inset-[12%] rounded-full will-change-transform border border-current/20 orb-anim-swirl orb-anim-swirl--reverse"
        :class="[
          gradient === 'primary' ? 'text-primary' : 'text-blue-400',
        ]"
        aria-hidden="true"
      />

      <!-- Waves for listening/speaking -->
      <template v-if="showWaves">
        <span
          v-for="i in 3"
          :key="i"
          class="absolute inset-0 rounded-full border will-change-transform orb-anim-wave"
          :class="[
            gradient === 'primary' ? 'border-primary/30' : 'border-blue-400/30',
          ]"
          :style="{
            animation: `orb-wave var(--orb-wave) ease-out infinite`,
            animationDelay: `${(i - 1) * 0.35}s`,
          }"
          aria-hidden="true"
        />
      </template>

      <!-- Hover interaction cue -->
      <span
        v-if="interactive"
        class="absolute -inset-1 rounded-full opacity-0 transition-opacity duration-200 hover:opacity-20"
        :class="gradient === 'primary' ? 'bg-primary/30' : 'bg-blue-500/30'"
        aria-hidden="true"
      />
    </span>
  </span>
</template>

<style scoped>
@keyframes orb-swirl {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes orb-pulse {
  0%,
  100% {
    transform: scale(0.98);
    filter: saturate(1);
  }
  50% {
    transform: scale(1.04);
    filter: saturate(1.15);
  }
}

@keyframes orb-wave {
  0% {
    transform: scale(1);
    opacity: 0.45;
  }
  80% {
    opacity: 0.05;
  }
  100% {
    transform: scale(1.9);
    opacity: 0;
  }
}

/* Define animation classes used in the template */
.orb-anim-swirl {
  animation: orb-swirl var(--orb-swirl, 12s) linear infinite;
}
.orb-anim-swirl--reverse {
  animation-direction: reverse;
}
.orb-anim-pulse {
  animation: orb-pulse var(--orb-pulse, 2s) ease-in-out infinite;
}
.orb-anim-wave {
  animation: orb-wave var(--orb-wave, 2.2s) ease-out infinite;
}
</style>
