<script setup lang="ts">
import { ref } from 'vue';
import { Game } from '../models/CGame';
import Grid from './Grid.vue';
import PlayerForm from './PlayerForm.vue';

const game = ref<Game | null>(null);

const startGame = (newGame: Game) => {
  game.value = newGame;
};

const handlePlaceShape = (index: number) => {
  const player = game.value!.isPlaying;
  const shape = player.shape;
  const otherPlayer = game.value!.players.find(
    (player) => player.shape !== shape
  );

  if (game.value?.grid[index].shape !== '') {
    return;
  }

  game.value!.grid[index].shape = shape;

  if (otherPlayer) {
    game.value.isPlaying = otherPlayer;
  }
};
</script>

<template>
  <div v-if="game">
    <Grid
      :game="game"
      @placeShape="(index:number) => handlePlaceShape(index)"
    />
  </div>

  <div v-else>
    <PlayerForm @startGame="(newGame) => startGame(newGame)" />
  </div>
</template>

<style scoped></style>
