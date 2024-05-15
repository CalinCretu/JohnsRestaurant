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
        const response = await axios.get('https://johns-restaurant-todi-db.onrender.com/menu');
        this.menuData = response.data[0];
      } catch (error) {
        console.error('Error fetching menu data:', error);
      }
    }
  }
};
</script>

<template>
  <div class="container-lg" v-if="menuData">
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
    <div class="container-sm">
      <ul>
        <li class="sections">
          <h1 class="groups">Antipasti</h1>
        <li class="dishes" v-for="antipasto in menuData.antipasti" :key="antipasto.name">
          <div class="name-desc">
            <h3>{{ antipasto.name }}</h3>
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
            <h3>{{ primo.name }}</h3>
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
            <h3>{{ secondo.name }}</h3>
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
            <h3>{{ contorno.name }}</h3>
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
            <h3>{{ dolce.name }}</h3>
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
  </div>
  <div v-else>
    <div class="container-sm">
      <div class="loading">
        <p>Caricamento...</p>
        <img src="/public/imgs/logos/Logo_Johns.jpg" alt="">
      </div>
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
    max-width: 100%;
    height: 100%;

    .sections {
      margin: 20px 0px;

      h1 {
        padding: 10px 0px;
      }
    }
  }
}

.container-sm {
  height: 100vh;
  padding: 30px 10px;

  .loading {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
    max-width: 100vw;
    gap: 30px;

    img {
      width: 300px;
      border-radius: 50%;
      animation: rotateClockwise 6s infinite linear;
    }
  }

  @keyframes rotateClockwise {
    from {
      transform: rotate(0deg);

    }

    to {
      transform: rotate(360deg);

    }
  }

  @media screen and (max-width: 768px) {
    .dishes {
      gap: 20px;

      .name-desc {
        font-size: 12px;
      }

      .price {
        min-width: 40px;
        font-size: 12px;
      }
    }

    .loading {
      padding-top: 50px;
      max-width: 100vw;

      img {
        max-width: 150px;
      }
    }
  }
}
</style>