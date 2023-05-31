<script setup lang="ts">
import { ref } from 'vue';
import { Game } from '../models/CGame';
import Grid from './Grid.vue';
import PlayerForm from './PlayerForm.vue';
import GameInfo from './GameInfo.vue';
import WinnerInfo from './WinnerInfo.vue';
import { winCheck } from '../services/winCheck';
import { Player } from '../models/CPlayer';
import { fetchGame, saveGameToStorage, saveScore } from '../services/storage';
import QuitGame from './QuitGame.vue';

const game = ref<Game | null>(fetchGame());
const winner = ref<string | null>(null);

const startGame = (newGame: Game) => {
  game.value = newGame;
  localStorage.setItem('game', JSON.stringify(newGame));
};

const handlePlaceShape = (index: number) => {
  if (winner.value) {
    return;
  }

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

  const hasWon = game.value.players.find(
    (player) => player.shape === winnerShape
  );

  if (hasWon) {
    game.value.isDone = true;
    hasWon.score += 1;
    winner.value = hasWon.name;
  }

  saveGameToStorage(game.value);
};

const quitGame = () => {
  const storedGame = localStorage.getItem('game');
  if (storedGame) {
    localStorage.removeItem('game');
  }
  game.value = null;
  winner.value = null;
};

const saveAndQuit = (players: Player[]) => {
  saveScore(players);
  quitGame();
};

const playAgain = (players: Player[]) => {
  winner.value = null;
  game.value = new Game(players);
};
</script>

<template>
  <div v-if="game">
    <GameInfo
      :game="game"
      @saveAndQuit="(players: Player[]) => saveAndQuit(players)"
    />
    <WinnerInfo
      v-if="winner"
      @saveAndQuit="saveAndQuit"
      @playAgain="() => playAgain(game!.players)"
      :winner="winner"
      :game="game"
    />
    <Grid
      :game="game"
      @placeShape="(index:number) => handlePlaceShape(index)"
    />
    <QuitGame @quitGame="quitGame" />
  </div>

  <div v-else>
    <PlayerForm @startGame="(newGame) => startGame(newGame)" />
  </div>
</template>

<style scoped></style>
