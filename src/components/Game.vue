<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Game } from '../models/CGame';
import Grid from './Grid.vue';
import PlayerForm from './PlayerForm.vue';
import GameInfo from './GameInfo.vue';
import { winCheck } from '../services/winCheck';
import { Player } from '../models/CPlayer';
import { fetchGame, saveGameToStorage, saveScore } from '../services/storage';

const game = ref<Game | null>(fetchGame());

const startGame = (newGame: Game) => {
  game.value = newGame;
  localStorage.setItem('game', JSON.stringify(newGame));
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
  const winnerShape = winCheck(game.value);

  const winner = game.value.players.find(
    (player) => player.shape === winnerShape
  );

  if (winner) {
    winner.score += 1;
    alert(winner.name + ' has won the game!');
  }

  saveGameToStorage(game.value);
};

const resetGame = () => {
  const storedGame = localStorage.getItem('game');
  if (storedGame) {
    localStorage.removeItem('game');
  }
  game.value = null;
};
</script>

<template>
  <div v-if="game">
    <GameInfo
      :game="game"
      @resetGame="() => resetGame()"
      @saveScore="(players: Player[]) => saveScore(players)"
    />
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
