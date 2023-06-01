<script setup lang="ts"></script>

<template>
  <div class="flex flex-col justify-center items-center gap-8">
    <h1 class="text-5xl font-bold">Welcome to TicTacToe</h1>
    <p class="text-xl">
      To play, simply navigate to the
      <router-link
        to="/game"
        class="text-orange-500 font-bold hover:text-orange-800 transition-all"
        >game</router-link
      >
      section. Have fun!
    </p>
  </div>
</template>

<style scoped></style>
