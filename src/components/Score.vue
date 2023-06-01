<script setup lang="ts">
import { Match } from '../models/CMatch';

interface IProps {
  score: Match;
}

const props = defineProps<IProps>();
</script>

<template>
  <td class="px-4 py-2">
    {{ props.score.players[0].name }} vs {{ props.score.players[1].name }}
  </td>
  <td class="px-4 py-2">
    {{ props.score.players[0].score }} - {{ props.score.players[1].score }}
  </td>
</template>
