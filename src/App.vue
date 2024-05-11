<script>
import Header from './components/Header.vue';
import Home from './components/Home.vue';
import Footer from './components/Footer.vue';
import Rights from './components/Rights.vue';
import axios from 'axios';
import { store } from './store';

export default {
  components: {
    Header,
    Home,
    Footer,
    Rights,
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
    <div class="home">
      <Home />
    </div>
    <div class="footer">
      <Footer />
    </div>
    <div class="calin">
      <Rights />
    </div>
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
  /* Assicura che il contenuto sotto l'header inizi dalla posizione corretta */
}

.header,
.home,
.footer,
.calin {
  background-color: rgb(182, 204, 215);
}
</style>
