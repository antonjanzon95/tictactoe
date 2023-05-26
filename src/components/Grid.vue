<script setup lang="ts">
import Square from './Square.vue';
import { ref } from 'vue';

const squares = ref<number>(9);
</script>

<template>
  <div class="w-60 h-60 flex flex-wrap inset-0 m-auto">
    <Square v-for="square in squares" shape="X" />
  </div>
</template>
