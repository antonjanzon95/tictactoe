<script setup lang="ts">
import { Match } from '../models/CMatch';
import Score from './Score.vue';

interface IProps {
  scores: Match[];
}
const props = defineProps<IProps>();

console.log(props.scores);
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Match</th>
        <th>Result</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="score in scores">
        <Score :score="score" />
      </tr>
    </tbody>
  </table>
</template>
