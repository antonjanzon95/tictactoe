<script setup lang="ts">
import { ref } from 'vue';
import Scores from '../components/Scores.vue';
import { Match } from '../models/CMatch';
import { fetchScores } from '../services/storage';

const scores = ref<Match[]>(fetchScores());
</script>

<template>
  <div class="flex flex-col gap-8">
    <h1 class="font-bold text-5xl">Scores</h1>
    <div v-if="scores">
      <Scores :scores="scores" />
    </div>

    <div v-else>
      <h2>No scores so far...</h2>
    </div>
  </div>
</template>
