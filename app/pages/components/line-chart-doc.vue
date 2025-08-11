<script setup lang="ts">
// Sample data sets for demonstrations
const basicData = [
  { x: 0, y: 10, label: "Jan: 10" },
  { x: 1, y: 20, label: "Feb: 20" },
  { x: 2, y: 15, label: "Mar: 15" },
  { x: 3, y: 25, label: "Apr: 25" },
  { x: 4, y: 30, label: "May: 30" },
  { x: 5, y: 22, label: "Jun: 22" },
];

const salesData = [
  { x: 0, y: 1200, label: "Q1: $1,200" },
  { x: 1, y: 1900, label: "Q2: $1,900" },
  { x: 2, y: 3000, label: "Q3: $3,000" },
  { x: 3, y: 5000, label: "Q4: $5,000" },
];

const performanceData = [
  { x: 0, y: 65, label: "Week 1: 65%" },
  { x: 1, y: 78, label: "Week 2: 78%" },
  { x: 2, y: 82, label: "Week 3: 82%" },
  { x: 3, y: 89, label: "Week 4: 89%" },
  { x: 4, y: 95, label: "Week 5: 95%" },
];

const styles = {
  inspectFrame:
    "w-full h-auto p-10 flex items-center justify-center rounded border bg-neutral-500/10 border-neutral-100 dark:border-neutral-900",
  codeBlock: "p-4 bg-neutral-100 dark:bg-neutral-900 rounded text-sm overflow-x-auto",
};
</script>

<template>
  <div class="flex flex-col p-10 gap-10 bg-transparent">
    <section class="flex-col">
      <h1 class="text-4xl pb-1 font-bold text-black dark:text-white">
        Line Chart
      </h1>
      <p class="text-neutral-500">
        Interactive line charts for visualizing data trends and patterns over time.
      </p>
    </section>

    <!-- Basic Usage -->
    <section class="space-y-4">
      <h2 class="text-2xl font-medium text-black dark:text-white">
        Basic Usage
      </h2>
      <div :class="styles.inspectFrame">
        <DsLineChart />
      </div>
      <pre :class="styles.codeBlock">
<code>&lt;DsLineChart /&gt;</code>
      </pre>
    </section>

    <!-- Custom Data -->
    <section class="space-y-4">
      <h2 class="text-2xl font-medium text-black dark:text-white">
        Custom Data
      </h2>
      <div :class="styles.inspectFrame">
        <DsLineChart :data="basicData" />
      </div>
      <pre :class="styles.codeBlock">
<code>&lt;DsLineChart :data="chartData" /&gt;</code>
      </pre>
    </section>

    <!-- Different Colors -->
    <section class="space-y-4">
      <h2 class="text-2xl font-medium text-black dark:text-white">
        Colors
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div :class="styles.inspectFrame">
          <DsLineChart :data="salesData" color="#ef4444" />
        </div>
        <div :class="styles.inspectFrame">
          <DsLineChart :data="performanceData" color="#10b981" />
        </div>
        <div :class="styles.inspectFrame">
          <DsLineChart :data="basicData" color="#8b5cf6" />
        </div>
        <div :class="styles.inspectFrame">
          <DsLineChart :data="salesData" color="#f59e0b" />
        </div>
      </div>
      <pre :class="styles.codeBlock">
<code>&lt;DsLineChart color="#ef4444" /&gt;  &lt;!-- Red --&gt;
&lt;DsLineChart color="#10b981" /&gt;  &lt;!-- Green --&gt;
&lt;DsLineChart color="#8b5cf6" /&gt;  &lt;!-- Purple --&gt;
&lt;DsLineChart color="#f59e0b" /&gt;  &lt;!-- Amber --&gt;</code>
      </pre>
    </section>

    <!-- Sizes -->
    <section class="space-y-4">
      <h2 class="text-2xl font-medium text-black dark:text-white">
        Sizes
      </h2>
      <div class="grid grid-cols-1 gap-8">
        <div :class="styles.inspectFrame">
          <DsLineChart :data="basicData" :width="300" :height="150" />
        </div>
        <div :class="styles.inspectFrame">
          <DsLineChart :data="basicData" :width="500" :height="250" />
        </div>
        <div :class="styles.inspectFrame">
          <DsLineChart :data="basicData" :width="600" :height="300" />
        </div>
      </div>
      <pre :class="styles.codeBlock">
<code>&lt;DsLineChart :width="300" :height="150" /&gt;
&lt;DsLineChart :width="500" :height="250" /&gt;
&lt;DsLineChart :width="600" :height="300" /&gt;</code>
      </pre>
    </section>

    <!-- Styling Options -->
    <section class="space-y-4">
      <h2 class="text-2xl font-medium text-black dark:text-white">
        Styling Options
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div :class="styles.inspectFrame">
          <DsLineChart :data="basicData" :show-dots="false" />
        </div>
        <div :class="styles.inspectFrame">
          <DsLineChart :data="basicData" :show-grid="false" />
        </div>
        <div :class="styles.inspectFrame">
          <DsLineChart :data="basicData" :stroke-width="4" />
        </div>
        <div :class="styles.inspectFrame">
          <DsLineChart :data="basicData" :show-dots="false" :show-grid="false" />
        </div>
      </div>
      <pre :class="styles.codeBlock">
<code>&lt;DsLineChart :show-dots="false" /&gt;
&lt;DsLineChart :show-grid="false" /&gt;
&lt;DsLineChart :stroke-width="4" /&gt;
&lt;DsLineChart :show-dots="false" :show-grid="false" /&gt;</code>
      </pre>
    </section>

    <!-- Props Reference -->
    <section class="space-y-4">
      <h2 class="text-2xl font-medium text-black dark:text-white">
        Props Reference
      </h2>
      <div class="w-full rounded border bg-neutral-500/10 border-neutral-100 dark:border-neutral-900 overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr class="border-b border-neutral-200 dark:border-neutral-800">
              <th class="text-left p-4">
                Prop
              </th>
              <th class="text-left p-4">
                Type
              </th>
              <th class="text-left p-4">
                Default
              </th>
              <th class="text-left p-4">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-neutral-200 dark:border-neutral-800">
              <td class="p-4 font-mono text-sm">
                data
              </td>
              <td class="p-4 font-mono text-sm">
                DataPoint[]
              </td>
              <td class="p-4 font-mono text-sm">
                Sample data
              </td>
              <td class="p-4 text-sm">
                Array of data points with x, y, and optional label
              </td>
            </tr>
            <tr class="border-b border-neutral-200 dark:border-neutral-800">
              <td class="p-4 font-mono text-sm">
                width
              </td>
              <td class="p-4 font-mono text-sm">
                number
              </td>
              <td class="p-4 font-mono text-sm">
                400
              </td>
              <td class="p-4 text-sm">
                Chart width in pixels
              </td>
            </tr>
            <tr class="border-b border-neutral-200 dark:border-neutral-800">
              <td class="p-4 font-mono text-sm">
                height
              </td>
              <td class="p-4 font-mono text-sm">
                number
              </td>
              <td class="p-4 font-mono text-sm">
                200
              </td>
              <td class="p-4 text-sm">
                Chart height in pixels
              </td>
            </tr>
            <tr class="border-b border-neutral-200 dark:border-neutral-800">
              <td class="p-4 font-mono text-sm">
                color
              </td>
              <td class="p-4 font-mono text-sm">
                string
              </td>
              <td class="p-4 font-mono text-sm">
                "#3b82f6"
              </td>
              <td class="p-4 text-sm">
                Line and dot color (hex, rgb, or named color)
              </td>
            </tr>
            <tr class="border-b border-neutral-200 dark:border-neutral-800">
              <td class="p-4 font-mono text-sm">
                strokeWidth
              </td>
              <td class="p-4 font-mono text-sm">
                number
              </td>
              <td class="p-4 font-mono text-sm">
                2
              </td>
              <td class="p-4 text-sm">
                Line thickness in pixels
              </td>
            </tr>
            <tr class="border-b border-neutral-200 dark:border-neutral-800">
              <td class="p-4 font-mono text-sm">
                showDots
              </td>
              <td class="p-4 font-mono text-sm">
                boolean
              </td>
              <td class="p-4 font-mono text-sm">
                true
              </td>
              <td class="p-4 text-sm">
                Show dots at data points
              </td>
            </tr>
            <tr class="border-b border-neutral-200 dark:border-neutral-800">
              <td class="p-4 font-mono text-sm">
                showGrid
              </td>
              <td class="p-4 font-mono text-sm">
                boolean
              </td>
              <td class="p-4 font-mono text-sm">
                true
              </td>
              <td class="p-4 text-sm">
                Show background grid lines
              </td>
            </tr>
            <tr class="border-b border-neutral-200 dark:border-neutral-800">
              <td class="p-4 font-mono text-sm">
                animate
              </td>
              <td class="p-4 font-mono text-sm">
                boolean
              </td>
              <td class="p-4 font-mono text-sm">
                true
              </td>
              <td class="p-4 text-sm">
                Enable animations and transitions
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>
