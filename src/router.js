import { createRouter, createWebHistory } from "vue-router";
import Home from './components/Home.vue';
import Menu from './components/pages/Menu.vue';
import Vini from './components/pages/Vini.vue';
import SpecialMenus from './components/pages/SpecialMenus.vue';
import School from './components/pages/School.vue';
import Contacts from "./components/pages/Contacts.vue";


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
    },
    {
      path: '/specialmenus',
      name: 'specialmenus',
      component: SpecialMenus,
    },
    {
      path: '/school',
      name: 'school',
      component: School,
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts,
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