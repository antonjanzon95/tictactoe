<script setup lang="ts">
import { Shape } from '../models/Shape';

interface IShape {
  shape: Shape;
  index: number;
  hasWon: boolean;
}

const props = defineProps<IShape>();

const emits = defineEmits(['placeShape']);

const handleClick = () => {
  emits('placeShape', props.index);
};
</script>

<template>
  <div
    :class="props.hasWon ? 'bg-orange-400' : ''"
    class="text-6xl grid place-items-center border-r-2 border-b-2 border-orange-500 hover:bg-slate-700 transition-all"
    @click="handleClick"
  >
    {{ shape }}
  </div>
</template>
