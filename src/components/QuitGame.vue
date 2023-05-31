<script setup lang="ts">
import { btnStyle } from '../models/BtnStyle';

const emit = defineEmits(['quitGame']);
</script>

<template>
  <button :class="btnStyle" @click="emit('quitGame')">Quit game</button>
</template>
