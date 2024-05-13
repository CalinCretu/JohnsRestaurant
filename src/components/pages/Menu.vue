<script>
import axios from 'axios';

export default {
  data() {
    return {
      menuData: null
    };
  },
  created() {
    this.fetchMenuData();
  },
  methods: {
    async fetchMenuData() {
      try {
        const response = await axios.get('db.json');
        this.menuData = response.data.menu[0]; // Accedi al primo elemento dell'array "menu"
      } catch (error) {
        console.error('Error fetching menu data:', error);
      }
    }
  }
};
</script>

<template>
  <div class="container-md">
    <div class="title">
      Menu
    </div>
    <div v-if="menuData">
      <div class="menu">
        <ul class="container-sm">
          <h1 class="groups">Antipasti</h1>
          <li class="dishes" v-for="antipasto in menuData.antipasti" :key="antipasto.name">
            <div class="name-desc">
              <h2>{{ antipasto.name }}</h2>
              <p>{{ antipasto.eng_description }}</p>
            </div>
            <div class="price">
              <p>{{ antipasto.price }} &euro;</p>
            </div>
          </li>
          <h1 class="groups">Primi Piatti</h1>
          <li class="dishes" v-for="primo in menuData.primi" :key="primo.name">
            <div class="name-desc">
              <h2>{{ primo.name }}</h2>
              <p>{{ primo.eng_description }}</p>
            </div>
            <div class="price">
              <p>{{ primo.price }} &euro;</p>
            </div>
          </li>
          <li class="dishes" v-for="antipasto in menuData.antipasti" :key="antipasto.name">
            <div class="name-desc">
              <h2>{{ antipasto.name }}</h2>
              <p>{{ antipasto.eng_description }}</p>
            </div>
            <div class="price">
              <p>{{ antipasto.price }} &euro;</p>
            </div>
          </li>
        </ul>
      </div>
      <!-- Aggiungi altri blocchi simili per primi, secondi, contorni e dolci -->
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-md {
  .title {
    font-size: 90px;
  }

  .groups {
    font-size: 40px;
  }

  .dishes {
    margin: 8px 0px;
    padding: 5px 0px;
    text-transform: none;
    text-align: justify;
    color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // border-bottom: 1px solid white;
    box-shadow: 0px 25px 15px -20px white;

    .name-desc {
      font-size: 18px;
    }

    .price {
      font-size: 20px;
    }
  }
}
</style>