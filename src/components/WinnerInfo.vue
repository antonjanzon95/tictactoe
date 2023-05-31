<script setup lang="ts">
import { Game } from '../models/CGame';

interface IProps {
  winner: string;
  game: Game;
}

const props = defineProps<IProps>();
const emit = defineEmits(['playAgain', 'saveAndQuit']);
</script>

<template>
  <div>
    <h2>{{ props.winner }} has won!</h2>
    <button @click="emit('playAgain')">Play again</button>
    <button @click="emit('saveAndQuit', props.game.players)">
      Save scores and quit
    </button>
  </div>
</template>

<style scoped></style>
