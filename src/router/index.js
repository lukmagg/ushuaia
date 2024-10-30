import { createRouter, createMemoryHistory } from 'vue-router';

import Counter from './../components/Counter.vue';
import TaskList from './../components/TaskList.vue';

const routes = [
  { path: '/counter', component: Counter },
  { path: '/task-list', component: TaskList },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
