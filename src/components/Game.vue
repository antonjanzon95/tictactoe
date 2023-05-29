<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Game } from '../models/CGame';
import Grid from './Grid.vue';
import PlayerForm from './PlayerForm.vue';

const game = ref<Game | null>(null);

const startGame = (newGame: Game) => {
  game.value = newGame;
  localStorage.setItem('game', JSON.stringify(newGame));
};

const saveGameToStorage = () => {
  localStorage.setItem('game', JSON.stringify(game.value));
};

const fetchGame = () => {
  const storedGame = localStorage.getItem('game');
  if (typeof storedGame !== 'string') {
    return;
  }
  const parsedGame: Game = JSON.parse(storedGame);

  game.value = parsedGame;
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

  saveGameToStorage();
};

const resetGame = () => {
  const storedGame = localStorage.getItem('game');
  if (storedGame) {
    localStorage.removeItem('game');
  }
  game.value = null;
};

onMounted(() => {
  fetchGame();
});
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
