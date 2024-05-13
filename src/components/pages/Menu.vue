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
  <div class="container-lg">
    <div class="title">
      Menu
    </div>
    <div v-if="menuData">
      <ul class="container-sm">
        <li class="sections">
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
        </li>
        <li class="sections">
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
        </li>
        <li class="sections">
          <h1 class="groups">Secondi Piatti</h1>
        <li class="dishes" v-for="secondo in menuData.secondi" :key="secondo.name">
          <div class="name-desc">
            <h2>{{ secondo.name }}</h2>
            <p>{{ secondo.eng_description }}</p>
          </div>
          <div class="price">
            <p>{{ secondo.price }} &euro;</p>
          </div>
        </li>
        </li>
        <li class="sections">
          <h1 class="groups">Contorni</h1>
        <li class="dishes" v-for="contorno in menuData.contorni" :key="contorno.name">
          <div class="name-desc">
            <h2>{{ contorno.name }}</h2>
            <p>{{ contorno.eng_description }}</p>
          </div>
          <div class="price">
            <p>{{ contorno.price }} &euro;</p>
          </div>
        </li>
        </li>
        <li class="sections">
          <h1 class="groups">Dolci</h1>
        <li class="dishes" v-for="dolce in menuData.dolci" :key="dolce.name">
          <div class="name-desc">
            <h2>{{ dolce.name }}</h2>
            <p>{{ dolce.eng_description }}</p>
          </div>
          <div class="price">
            <p>{{ dolce.price }} &euro;</p>
          </div>
        </li>
        </li>
      </ul>
      <!-- Aggiungi altri blocchi simili per primi, secondi, contorni e dolci -->
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-lg {
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
    box-shadow: 0px 25px 15px -20px white;

    .name-desc {
      font-size: 18px;
    }

    .price {
      font-size: 20px;
    }
  }

  .container-sm {
    .sections {
      margin: 20px 0px;

      h1 {
        padding: 10px 0px;
      }
    }
  }
}
</style>