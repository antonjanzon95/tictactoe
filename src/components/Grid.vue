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
  <div
    class="tablet:w-[360px] tablet:h-[360px] w-60 h-60 grid grid-rows-3 grid-cols-3 border-l-2 border-t-2 border-orange-500"
  >
    <Square
      v-for="(square, index) in props.game.grid"
      :shape="square.shape"
      :index="index"
      :hasWon="
        game.winningCombo && game.winningCombo.includes(index) ? true : false
      "
      @placeShape="(index: number) => emit('placeShape', index)"
    />
  </div>
</template>
