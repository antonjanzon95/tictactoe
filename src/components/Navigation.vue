<script setup lang="ts">
const links = [
  { path: '/', name: 'Home' },
  { path: '/scores', name: 'Scores' },
  { path: '/game', name: 'Game' },
];
</script>

<template>
  <nav class="flex justify-center items-center h-full bg-slate-100">
    <ul class="flex gap-8">
      <li v-for="link in links">
        <router-link :to="link.path">{{ link.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>
