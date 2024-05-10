<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';
import Rights from './components/Rights.vue';
import axios from 'axios';
import { store } from './store';

export default {
  components: {
    Header,
    Main,
    Footer,
    Rights,
  },
  name: 'App',
  data() {
    return {
      store: store,
    }
  },
  created() {
    axios.get('http://localhost:3000/hero_cards')
      .then(res => {
        const card = res.data
        this.store.hero_card = card
      }),
      axios.get('http://localhost:3000/sense_the_jazz_2')
        .then(res => {
          const card = res.data
          this.store.sense_the_jazz_2 = card
        })
  }
}
</script>

<template>
  <div class="header">
    <Header />
  </div>
  <div class="main">
    <Main />
  </div>
  <div class="footer">
    <Footer />
  </div>
  <div class="rights">
    <Rights />
  </div>
</template>

<style lang="scss">
@use './styles/general.scss';

.header {
  border-bottom: 1px solid white;
}

.header,
.main,
.footer,
.rights {
  background-color: rgb(182, 204, 215);
}
</style>
