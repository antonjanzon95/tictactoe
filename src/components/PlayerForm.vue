<script setup lang="ts">
import { ref } from 'vue';
import { Player } from '../models/CPlayer';
import { Shape } from '../models/Shape';
import { Game } from '../models/CGame';
import { checkName } from '../services/validateName';

const name = ref<string>('');
const pickedShape = ref<Shape>(Shape.X);
const players = ref<Player[]>([]);

const emit = defineEmits(['startGame']);

const handleSubmit = () => {
  const nameIsValid = checkName(name.value);

  if (!nameIsValid) {
    return alert('Please input a valid name!');
  }

  const newPlayer = new Player(name.value, pickedShape.value);
  name.value = '';
  setShape(pickedShape.value);
  players.value.push(newPlayer);

  if (players.value.length === 2) {
    const newGame = new Game(players.value);
    emit('startGame', newGame);
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
  <form
    @submit.prevent="handleSubmit"
    class="flex flex-col gap-8 p-8 bg-slate-900 text-slate-50 rounded-lg"
  >
    <input
      type="text"
      v-model="name"
      :placeholder="players.length < 1 ? 'Player 1' : 'Player 2'"
      class="p-2 rounded-lg text-slate-900"
    />

    <div class="flex justify-around">
      <label
        @click="toggleShape"
        data-shape="X"
        class="w-16 h-16 text-5xl hover:rounded-3xl transition-all duration-300 rounded-xl bg-slate-600 grid place-items-center selected"
      >
        X
        <input type="radio" value="X" v-model="pickedShape" class="hidden" />
      </label>
      <label
        @click="toggleShape"
        data-shape="O"
        class="w-16 h-16 text-5xl hover:rounded-3xl transition-all duration-300 rounded-xl bg-slate-600 grid place-items-center"
      >
        O
        <input type="radio" value="O" v-model="pickedShape" class="hidden" />
      </label>
    </div>

    <button
      class="px-4 py-2 border-2 border-accent rounded-lg mx-auto transition-all duration-300 hover:bg-orange-500 bg-slate-800"
    >
      Submit
    </button>
  </form>
</template>

<style scoped>
.selected {
  background-color: #f97316;
  border-radius: 1.5rem;
}
</style>
