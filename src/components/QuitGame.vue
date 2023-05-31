<script setup lang="ts">
const emit = defineEmits(['quitGame']);
</script>

<template>
  <button @click="emit('quitGame')">Quit game</button>
</template>
