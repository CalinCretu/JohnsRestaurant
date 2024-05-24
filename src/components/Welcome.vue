<script>
import { store } from '../store'
export default {
  name: 'Welcome',
  props: {
    item: {
      cards: Object
    }
  },
  data() {
    return {
      store: store,
    }
  },
  methods:{
    // toggleLanguage() {
    //   const newLocale = this.$i18n.locale === 'it' ? 'en' : 'it';
    //   this.$i18n.locale = newLocale;
    // }
  }
}
</script>

<template>
  <div class="container-lg">
    <div class="hero-title">
      <h1><i>John's Restaurant</i></h1>
    </div>
    <div class="second-title">
      {{$t('benvenuti.title')}}
    </div>
  </div>
</template>

<style lang="scss">
.container-lg {
  padding: 25px 0px;

  .hero-title {
    display: flex;
    align-items: end;
    justify-content: center;
    font-size: 50px;
    font-weight: 500;
    background-image: url("/public/imgs/photos/PanoramaTodi.png");
    height: 300px;
    background-size: cover;
    background-position: top center;

    h1 {
      text-shadow: black 0px 0px 10px;
    }
  }

  .second-title {
    color: black;
    font-size: 30px;
    padding-top: 15px;
  }
}

@media screen and (max-width: 768px) {
  .container-lg {
    padding: 0px 0px;

    .hero-title {
      font-size: 25px;
      align-items: start;
      height: 300px;
      background-image: url("/public/imgs/photos/RestaurantFoto.jpeg");
      background-position: center;

      h1 {
        text-shadow: black 0px 0px 10px;
      }
    }
  }
}
</style>
