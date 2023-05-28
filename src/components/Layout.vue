<script setup lang="ts">
import Header from './Header.vue';
</script>

<template>
  <Header />

  <main class="h-screen flex justify-center items-center">
    <slot></slot>
  </main>
</template>

<style scoped></style>
