<script setup lang="ts">
import { Game } from '../models/CGame';

interface IProps {
  game: Game;
}

const props = defineProps<IProps>();
</script>

<template>
  <div class="flex flex-col gap-6 justify-center items-center text-center">
    <h2 class="p-4 bg-slate-800 rounded-xl text-teal-400 font-semibold text-xl">
      Score <br />
      {{ props.game.players[0].name }}: {{ props.game.players[0].score }} -
      {{ props.game.players[1].name }}: {{ props.game.players[1].score }}
    </h2>
    <h3
      v-if="!game.isDone"
      class="p-4 bg-slate-800 rounded-xl text-orange-400 font-semibold text-lg"
    >
      Current player: {{ props.game.isPlaying.name }} with
      {{ props.game.isPlaying.shape }}
    </h3>
  </div>
</template>
