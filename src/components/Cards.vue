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
  <div class="container-lg">
    <ul class="cards">

      <li class="card-white">
        <h3>
          Il nostro menù
        </h3>
        <p>
          Clicca qui per consultarlo
        </p>
        <div class="image-wrapper">
          <img src="/public/imgs/photos/Tagliata.jpg" alt="">
        </div>
      </li>

      <li class="card-white">
        <h3>
          La nostra lista dei vini
        </h3>
        <p>
          Clicca qui
        </p>
        <div class="image-wrapper">
          <img src="/public/imgs/photos/Tagliata.jpg" alt="">
        </div>
      </li>

    </ul>
  </div>
</template>

<style lang="scss" scoped>
.container-lg {
  color: #b6ccd7;
  margin: 0 auto;

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
