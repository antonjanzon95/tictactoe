<script setup lang="ts">
import Header from './Header.vue';
</script>

<template>
  <Header />

  <main
    class="h-screen flex justify-center items-center bg-slate-950 text-slate-50"
  >
    <slot></slot>
  </main>
</template>

<style scoped></style>
