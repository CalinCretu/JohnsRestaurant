<script>
import Header from './components/Header.vue';
import Home from './components/Home.vue';
import { createI18n } from 'vue-i18n';

import axios from 'axios';
import { store } from './store';

export default {
  components: {
    Header,
    Home,

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
  <div class="header" :class="{ 'small': isHeaderSmall }">
    <Header />
  </div>
  <div class="content">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@use './styles/general.scss';

.header {
  border-bottom: 1px solid #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  &.small {
    box-shadow: 0px 0px 20px 5px white;
  }
}

.content {
  margin-top: 100px;
  background-color: #b6ccd7;
}

.header,
.home,
.footer,
.calin {
  background-color: rgb(182, 204, 215);
}

@media screen and (max-width: 768px) {
  .content {
    margin-top: 75px;
  }
}
</style>
