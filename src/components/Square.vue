<script setup lang="ts">
import { ref } from 'vue';
import { Shape } from '../models/Shape';

interface IShape {
  shape: Shape;
  index: number;
}

const props = defineProps<IShape>();

const emits = defineEmits(['placeShape']);

const handleClick = () => {
  emits('placeShape', props.index);
};
</script>

<template>
  <div
    class="w-20 h-20 text-6xl outline flex justify-center items-center"
    @click="handleClick"
  >
    {{ shape }}
  </div>
</template>
