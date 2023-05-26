<script setup lang="ts">
import Square from './Square.vue';
import { ref } from 'vue';
import { CSquare } from '../models/CSquare';

const startingGrid: CSquare[] = Array.from({ length: 9 }, () => new CSquare());

const grid = ref<CSquare[]>(startingGrid);

const handlePlaceShape = (index: number) => {
  grid.value[index].shape = grid.value[index].shape === 'X' ? '' : 'X';
};
</script>

<template>
  <div class="w-60 h-60 flex flex-wrap">
    <Square
      v-for="(square, index) in grid"
      :shape="square.shape"
      :index="index"
      @placeShape="(index: number) => handlePlaceShape(index)"
    />
  </div>
</template>
