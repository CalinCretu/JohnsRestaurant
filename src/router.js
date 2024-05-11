import { createRouter, createWebHistory } from "vue-router";
import Menu from './components/pages/Menu.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/menu',
      name: 'menu',
      component: Menu,
    }
  ]
})

export { router };