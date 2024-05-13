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
    <div class="container-md">
      <div>
        <h1>Benvenuti</h1>
        <div class="ita">
          <p>
            Al momento dell'ordinazione si chiede alla gentile clientela di informare il cameriere sull'eventuale
            presenza
            di
            allergie o intolleranze ad ingredienti specifici. Lo chef provvederà poi a fornirvi un menù specifico.
          </p>
          <h3>
            Nel caso di Celiachia
          </h3>
          <p>
            La nostra cucina <b>non</b> può garantire al 100% l'assenza di glutine.
            Welcome
          </p>
        </div>
        <div class="eng">
          <h1>Welcome</h1>
          <p>
            At the moment of ordering you are kindly requested to inform any waiter or waitress if you have any
            allergies
            and
            intolerance of any specific ingredients. We will provide you with a menu on request.
          </p>
          <h3>
            in case of celiac disease
          </h3>
          <p>
            We <b>cannot</b> guarantee 100% the absence of gluten.
          </p>
        </div>
        <p class="grazie">
          Grazie, chef John Paterson
        </p>
      </div>

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
  .container-md {
    padding: 40px 0px;

    .ita {
      padding-bottom: 30px;
    }

    p {
      color: black;
    }

    .grazie {
      padding-top: 20px;
      font-size: 25px;
    }
  }

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
    align-items: baseline;
    box-shadow: 0px 22px 10px -20px white;

    .name-desc {
      font-size: 16px;
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