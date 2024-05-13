<script>
import { store } from '../store'
export default {
  name: 'HeroCards',
  props: {
    hero_cards: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      store: store,
    }
  }
}
</script>

<template>
  <div class="container-md">
    <ul class="cards">

      <li class="card-white">
        <router-link :to="{ name: 'menu' }">
          <h3>
            Menù
          </h3>
          <p>
            Clicca qui per consultarlo
          </p>
          <div class="image-wrapper">
            <img src="/public/imgs/photos/TagliataAlSangue.png" alt="">
          </div>
        </router-link>

      </li>

      <li class="card-white">
        <router-link :to="{ name: 'vini' }">
          <h3>
            Carta dei vini
          </h3>
          <p>
            Clicca qui
          </p>
          <div class="image-wrapper">
            <img src="/public/imgs/photos/Vineria.png" alt="">
          </div>
        </router-link>

      </li>

    </ul>
  </div>
</template>

<style lang="scss" scoped>
.container-md {
  color: #b6ccd7;
  margin: 0 auto;
  padding-bottom: 0px;

  .cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: center;
    gap: 30px;

    .card-white {
      font-size: 35px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: white;

      h3 {
        color: black;
        padding-top: 10px;
      }
    }
  }

  .image-wrapper {
    width: 100%;
    height: 500px;
    overflow: hidden;
    margin-top: 15px;
  }
}
</style>
