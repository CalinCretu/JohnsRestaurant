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
}
</script>

<template>
  <div class="container-lg">
    <div class="hero-title">
      John's Restaurant
    </div>
    <div class="second-title">
      Benvenuti
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
    font-size: 90px;
    text-transform: uppercase;
    font-weight: 500;
    background-image: url("/public/imgs/photos/PanoramaTodi.png");
    height: 400px;
    background-size: cover;
    background-position: top center;
  }

  .second-title {
    color: black;
    font-size: 30px;
    padding-top: 15px;
  }
}
</style>
