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
      hero_cards: [
        {
          "image": "fa-solid fa-drum",
          "title": "Menu",
          "description": "Visita il nostro Menù"
        },
        {
          "image": "fa-solid fa-compact-disc",
          "title": "Lista dei Vini",
          "description": "Visita la nostra lista dei Vini"
        }
      ],
    }
  }
}
</script>

<template>
  <div class="card-container">
    <ul class="cards">
      <li class="card" v-for="hero_card in hero_cards" :key="hero_card.image">
        <div>
          <font-awesome-icon class="icon" :icon="hero_card.image" />
        </div>
        <div class="card-title">
          {{ hero_card.title }}
        </div>
        <div class="card-description">
          {{ hero_card.description }}
        </div>
      </li>
    </ul>
  </div>
</template>


<style lang="scss" scoped>
.card-container {

  color: #EAAA00;
  min-width: 1000px;
  margin: 0 auto;

  .cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: center;
    gap: 100px;

    .card {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: white;
      padding: 60px 50px;
      border-radius: 50px;

      .card-title {
        text-transform: uppercase;
        font-size: 40px;
        margin: 30px 0px 15px 0px;
      }

      .card-description {
        font-size: 20px;
        color: #EAAA00;
        text-transform: capitalize;
      }

      .icon {
        font-size: 100px;
        padding: 30px;
        border: 1px solid transparent;
      }
    }
  }
}
</style>
