import { createRouter, createWebHistory } from "vue-router";
import Home from './components/Home.vue';
// Le pagine interne si caricano solo quando servono: chi apre la home non
// scarica anche menu, vini, scuola e la galleria dei menu speciali.
const Menu = () => import('./components/pages/Menu.vue');
const Vini = () => import('./components/pages/Vini.vue');
const SpecialMenus = () => import('./components/pages/SpecialMenus.vue');
const School = () => import('./components/pages/School.vue');
const Contacts = () => import('./components/pages/Contacts.vue');
const NotFound = () => import('./components/pages/NotFound.vue');


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { titleKey: 'seo.home_title', descKey: 'seo.home_desc' },
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu,
      meta: { titleKey: 'seo.menu_title', descKey: 'seo.menu_desc' },
    },
    {
      path: '/vini',
      name: 'vini',
      component: Vini,
      meta: { titleKey: 'seo.vini_title', descKey: 'seo.vini_desc' },
    },
    {
      path: '/specialmenus',
      name: 'specialmenus',
      component: SpecialMenus,
      meta: { titleKey: 'seo.speciali_title', descKey: 'seo.speciali_desc' },
    },
    {
      path: '/school',
      name: 'school',
      component: School,
      meta: { titleKey: 'seo.school_title', descKey: 'seo.school_desc' },
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts,
      meta: { titleKey: 'seo.contacts_title', descKey: 'seo.contacts_desc' },
    },
    {
      // Catch-all: pagina 404
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      component: NotFound,
      meta: { titleKey: 'seo.notfound_title', descKey: 'seo.notfound_desc', noindex: true },
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
