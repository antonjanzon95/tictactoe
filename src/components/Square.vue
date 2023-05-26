<script setup lang="ts">
import { ref } from 'vue';

interface IShape {
  shape: 'X' | 'O';
}

const props = defineProps<IShape>();
</script>

<template>
  <div class="w-20 h-20 outline">
    {{ !shape ? '' : shape }}
  </div>
</template>
