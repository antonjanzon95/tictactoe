import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';
import AboutView from './views/AboutView.vue';
import GameView from './views/GameView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/game', component: GameView },
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
