<script setup lang="ts">
import Navigation from './Navigation.vue';
</script>

<template>
  <header class="fixed h-20 w-screen text-slate-50">
    <h1 class="absolute left-4 top-4 font-bold text-4xl laptop:block hidden">
      TicTacToe
    </h1>
    <Navigation />
  </header>
</template>

<style scoped></style>
