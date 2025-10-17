<template>
  <footer class="bg-transparent text-sm flex items-center justify-center w-full h-20">
    <div>
      <p>© {{ year }} · footer</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
// * STATE: Derived year for footer display
// -------------------------------------------------
const year = new Date().getFullYear()
</script>