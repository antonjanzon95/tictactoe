<script setup lang="ts">
import { Game } from '../models/CGame';

interface IProps {
  game: Game;
}

const props = defineProps<IProps>();

const emit = defineEmits(['resetGame']);
</script>

<template>
  <h3>
    Current player: {{ props.game.isPlaying.name }} with
    {{ props.game.isPlaying.shape }}
  </h3>
  <button @click="emit('resetGame')">Reset</button>
</template>
