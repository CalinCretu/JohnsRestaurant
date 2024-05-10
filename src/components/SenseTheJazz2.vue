<script>
import { store } from '../store'
export default {
  name: 'SenseTheJazz2',
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
  <div class="container-md">
    <div class="second-title">
      Who we are
    </div>
    <div class="title">
      Sense the Jazz
    </div>
    <ul class="cards">
      <li v-for="(card, i) in store.sense_the_jazz_2" :key="i">
        <img :src="card.image" alt="">
        <div class="cards-title">
          {{ card.title }}
        </div>
        <ul class="stream-on">
          <span class="grey">
            Stream On:
          </span>
          <li class="icons" v-for="(icon, i) in card.icons" :key="i">
            <a href="#"><font-awesome-icon :icon="icon.icon" /></a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.container-md {

  .cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
    row-gap: 30px;
    margin: 30px 0;

    img {
      transition: all 0.1s ease-in-out;
    }

    img:hover {
      transform: scale(1.05);
      box-shadow: 0px 0px 40px #F2870C;
    }

    .icons {
      color: white;
      margin: 0 10px;
    }

    .icons:hover {
      color: #F2870C;
    }

    .cards-title {
      font-size: 25px;
      text-transform: uppercase;
      line-height: 3rem;
    }

    .stream-on {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
    }

    .grey {
      color: rgba(255, 255, 255, 0.5);
    }
  }
}
</style>
