<script setup lang="ts">
import { ref } from 'vue';
import { Player } from '../models/CPlayer';
import { Shape } from '../models/Shape';

const name = ref<string>('');
const pickedShape = ref<Shape>(Shape.X);
const players = ref<Player[]>([]);

const handleSubmit = () => {
  const newPlayer = new Player(name.value, pickedShape.value);
  name.value = '';
  setShape(pickedShape.value);
  players.value.push(newPlayer);

  if (players.value.length === 2) {
    // start game
  }
};

const setShape = (shape: Shape) => {
  const shapeToSet = shape === Shape.X ? Shape.O : Shape.X;
  pickedShape.value = shapeToSet;

  const labels = document.querySelectorAll('label');

  labels.forEach((label) => {
    if (label.getAttribute('data-shape') === shapeToSet) {
      label.classList.add('selected');
    } else {
      label.classList.remove('selected');
      label.classList.add('pointer-events-none');
    }
  });
};

const toggleShape = (e: MouseEvent) => {
  const labels = document.querySelectorAll('label');
  const clickedLabel = e.currentTarget as HTMLElement;

  labels.forEach((label) => {
    if (label === clickedLabel) {
      clickedLabel.classList.add('selected');
    } else {
      label.classList.remove('selected');
    }
  });
};
</script>

<template>
  <form @submit.prevent="handleSubmit" class="flex flex-col gap-4 outline p-4">
    <input type="text" v-model="name" placeholder="Name" class="outline" />

    <div class="flex justify-around">
      <label
        @click="toggleShape"
        data-shape="X"
        class="w-10 h-10 bg-slate-100 grid place-items-center selected"
      >
        X
        <input type="radio" value="X" v-model="pickedShape" class="hidden" />
      </label>
      <label
        @click="toggleShape"
        data-shape="O"
        class="w-10 h-10 bg-slate-100 grid place-items-center"
      >
        O
        <input type="radio" value="O" v-model="pickedShape" class="hidden" />
      </label>
    </div>

    <button class="px-4 py-2 border-2 border-accent rounded-lg mx-auto">
      Submit
    </button>
  </form>
</template>

<style scoped>
.selected {
  background-color: gold;
}
</style>
