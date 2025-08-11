<script setup lang="ts">
type DataPoint = {
  x: number | string;
  y: number;
  label?: string;
};

type Props = {
  data?: DataPoint[];
  width?: number;
  height?: number;
  color?: string;
  strokeWidth?: number;
  showDots?: boolean;
  showGrid?: boolean;
  animate?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  data: () => [
    { x: 0, y: 10 },
    { x: 1, y: 20 },
    { x: 2, y: 15 },
    { x: 3, y: 25 },
    { x: 4, y: 30 },
  ],
  width: 400,
  height: 200,
  color: "#3b82f6",
  strokeWidth: 2,
  showDots: true,
  showGrid: true,
  animate: true,
});

// Calculate chart dimensions
const padding = 40;
const chartWidth = props.width - padding * 2;
const chartHeight = props.height - padding * 2;

// Get min/max values for scaling
const xValues = props.data.map(d => typeof d.x === "number" ? d.x : 0);
const yValues = props.data.map(d => d.y);
const minX = Math.min(...xValues);
const maxX = Math.max(...xValues);
const minY = Math.min(...yValues);
const maxY = Math.max(...yValues);

// Scale functions
const scaleX = (x: number) => ((x - minX) / (maxX - minX)) * chartWidth + padding;
const scaleY = (y: number) => chartHeight - ((y - minY) / (maxY - minY)) * chartHeight + padding;

// Generate path string
const pathData = props.data
  .map((point, index) => {
    const x = scaleX(typeof point.x === "number" ? point.x : index);
    const y = scaleY(point.y);
    return `${index === 0 ? "M" : "L"} ${x} ${y}`;
  })
  .join(" ");

// Generate grid lines
const gridLines = {
  horizontal: Array.from({ length: 5 }, (_, i) => {
    const y = padding + (chartHeight / 4) * i;
    return `M ${padding} ${y} L ${padding + chartWidth} ${y}`;
  }),
  vertical: Array.from({ length: 5 }, (_, i) => {
    const x = padding + (chartWidth / 4) * i;
    return `M ${x} ${padding} L ${x} ${padding + chartHeight}`;
  }),
};

const styles = {
  container: "inline-block bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-700 p-4",
  svg: "overflow-visible",
  line: "fill-none transition-all duration-300",
  dot: "transition-all duration-300 hover:r-4",
  grid: "stroke-neutral-200 dark:stroke-neutral-700 stroke-width-1",
};
</script>

<template>
  <div :class="styles.container">
    <svg
      :width="width"
      :height="height"
      :class="styles.svg"
      viewBox="0 0 400 200"
    >
      <!-- Grid -->
      <g v-if="showGrid">
        <path
          v-for="(line, index) in gridLines.horizontal"
          :key="`h-${index}`"
          :d="line"
          :class="styles.grid"
        />
        <path
          v-for="(line, index) in gridLines.vertical"
          :key="`v-${index}`"
          :d="line"
          :class="styles.grid"
        />
      </g>

      <!-- Chart Line -->
      <path
        :d="pathData"
        :class="styles.line"
        :stroke="color"
        :stroke-width="strokeWidth"
      />

      <!-- Data Points -->
      <g v-if="showDots">
        <circle
          v-for="(point, index) in data"
          :key="index"
          :cx="scaleX(typeof point.x === 'number' ? point.x : index)"
          :cy="scaleY(point.y)"
          r="3"
          :fill="color"
          :class="styles.dot"
        >
          <title>{{ point.label || `${point.x}, ${point.y}` }}</title>
        </circle>
      </g>
    </svg>
  </div>
</template>
