<script setup lang="ts">
const links = [
  { path: '/', name: 'Home' },
  { path: '/game', name: 'Game' },
  { path: '/scores', name: 'Scores' },
];
</script>

<template>
  <nav class="flex justify-center items-center h-full bg-slate-950">
    <ul class="flex gap-8 text-xl font-semibold">
      <li v-for="link in links" class="hover:text-orange-500 transition-all">
        <router-link :to="link.path">{{ link.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>
