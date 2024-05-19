import { createRouter, createWebHistory } from "vue-router";
import Home from './components/Home.vue';
import Menu from './components/pages/Menu.vue';
import Vini from './components/pages/Vini.vue';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu,
    },
    {
      path: '/vini',
      name: 'vini',
      component: Vini,
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // If savedPosition is available, return to that position
      return savedPosition;
    } else {
      // Otherwise, scroll to the top of the page
      return { top: 0 };
    }
  }
})

export { router };