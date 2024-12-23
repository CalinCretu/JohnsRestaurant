<script>
import Header from './components/Header.vue';
import Home from './components/Home.vue';
import Footer from './components/Footer.vue';

import { createI18n } from 'vue-i18n';

import axios from 'axios';
import { store } from './store';

export default {
  components: {

    Header,
    Home,
    Footer,

  },
  name: 'App',
  data() {
    return {
      store: store,
      isHeaderSmall: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isHeaderSmall = window.scrollY > 0;
    }
  }

}
</script>

<template>
  <div class="header no-print" :class="{ 'small': isHeaderSmall }">
    <Header />
  </div>
  <div class="content">
    <router-view></router-view>
  </div>
  <div class="footer no-print">
    <Footer />
  </div>
</template>

<style lang="scss">
@use './styles/general.scss';

:root {
  --background-color: #F9F3DE;
  --title-color: #333333;
  --content-color: #666666;
  --dark-bg-color: #e7e0c4;
}

* {

  font-family: "EB Garamond", serif;

}

.header {
  border-bottom: 1px solid var(--content-color);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  &.small {
    border-bottom: 1px solid var(--content-color);
  }
}

.content {
  margin-top: 100px;
  background-color: var(--background-color);
}

.header,
.home,
.footer,
.calin {
  background-color: var(--background-color);
}

@media screen and (max-width: 768px) {
  .content {
    margin-top: 75px;
  }

  .header {
    border: 0px;
  }
}

@media print {
  .no-print {
    display: none;
  }
}
</style>
