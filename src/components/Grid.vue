<script setup lang="ts">
import Square from './Square.vue';
import { Game } from '../models/CGame';

interface IProps {
  game: Game;
}

const props = defineProps<IProps>();
const emit = defineEmits(['placeShape']);
</script>

<template>
  <div class="w-60 h-60 flex flex-wrap">
    <Square
      v-for="(square, index) in game.grid"
      :shape="square.shape"
      :index="index"
      :hasWon="
        game.winningCombo && game.winningCombo.includes(index) ? true : false
      "
      @placeShape="(index: number) => emit('placeShape', index)"
    />
  </div>
</template>
