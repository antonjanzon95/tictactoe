import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';
import GameView from './views/GameView.vue';
import ScoreViewVue from './views/ScoreView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/scores', component: ScoreViewVue },
  { path: '/game', component: GameView },
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
