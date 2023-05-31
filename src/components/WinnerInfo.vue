<script setup lang="ts">
import { Game } from '../models/CGame';
import { btnStyle } from '../models/BtnStyle';

interface IProps {
  winner: string | null;
  game: Game;
}

const props = defineProps<IProps>();
const emit = defineEmits(['playAgain', 'saveAndQuit']);
</script>

<template>
  <div class="flex flex-col gap-4 text-center">
    <h2 class="text-3xl text-teal-400" v-if="winner">
      <span class="font-bold">{{ props.winner }}</span> has won!
    </h2>
    <h2 class="text-3xl text-teal-400" v-else>It's a tie!</h2>
    <div class="flex justify-between">
      <button :class="btnStyle" @click="emit('playAgain')">Play again</button>
      <button
        :class="btnStyle"
        @click="emit('saveAndQuit', props.game.players)"
      >
        Save scores and quit
      </button>
    </div>
  </div>
</template>

<style scoped></style>
