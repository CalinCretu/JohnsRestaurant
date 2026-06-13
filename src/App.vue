<script>
import AOS from 'aos';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      isHeaderSmall: false,
    };
  },
  watch: {
    // Ad ogni cambio pagina ricalcola le animazioni sui nuovi elementi
    $route() {
      this.$nextTick(() => AOS.refresh());
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, { passive: true });
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isHeaderSmall = window.scrollY > 20;
    },
  },
};
</script>

<template>
  <div class="header no-print" :class="{ small: isHeaderSmall }">
    <Header />
  </div>
  <main class="content">
    <router-view></router-view>
  </main>
  <footer class="footer no-print">
    <Footer />
  </footer>
</template>

<style lang="scss">
@use './styles/general.scss';

:root {
  /* Palette */
  --bg: #FAF6EC;
  --bg-alt: #EFE7D4;
  --dark: #211D17;
  --ink: #2A2520;
  --muted: #756B5C;
  --gold: #B08D57;
  --gold-dark: #8F6E3E;
  --wine: #6E2B2B;
  --line: rgba(42, 37, 32, 0.14);

  /* Layout */
  --maxw: 1240px;
  --radius: 6px;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  --shadow-sm: 0 8px 24px -16px rgba(0, 0, 0, 0.45);
  --shadow: 0 28px 60px -28px rgba(0, 0, 0, 0.5);

  /* Tipografia */
  --font-display: "Cormorant Garamond", Georgia, serif;
  --font-body: "EB Garamond", Georgia, serif;
  --font-ui: "Jost", "Helvetica Neue", Arial, sans-serif;

  /* Compatibilità con gli stili esistenti */
  --background-color: var(--bg);
  --title-color: var(--ink);
  --content-color: var(--muted);
  --dark-bg-color: var(--bg-alt);
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(250, 246, 236, 0.85);
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid transparent;
  transition: background 0.4s var(--ease), border-color 0.4s var(--ease),
    box-shadow 0.4s var(--ease);

  &.small {
    background: rgba(250, 246, 236, 0.96);
    border-bottom-color: var(--line);
    box-shadow: var(--shadow-sm);
  }
}

.content {
  padding-top: 104px;
  background-color: var(--bg);
  min-height: 60vh;
}

.footer {
  background-color: var(--dark);
  color: #d9cdb8;
}

@media screen and (max-width: 768px) {
  .content {
    padding-top: 76px;
  }
}

@media print {
  .no-print {
    display: none;
  }
  .content {
    padding-top: 0;
  }
}
</style>
