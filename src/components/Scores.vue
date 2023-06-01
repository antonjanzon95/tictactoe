<script setup lang="ts">
import { Match } from '../models/CMatch';
import Score from './Score.vue';

interface IProps {
  scores: Match[];
}

const props = defineProps<IProps>();
</script>

<template>
  <table class="text-2xl">
    <thead>
      <tr>
        <th class="px-4 py-2">Match</th>
        <th class="px-4 py-2">Result</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(score, index) in scores"
        :class="{
          'bg-slate-800': index % 2 === 0,
          'bg-slate-900': index % 2 !== 0,
        }"
      >
        <Score :score="score" />
      </tr>
    </tbody>
  </table>
</template>
