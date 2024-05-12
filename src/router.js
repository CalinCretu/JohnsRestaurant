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
  ]
})

export { router };