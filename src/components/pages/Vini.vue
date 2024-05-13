<script>
import axios from 'axios';

export default {
  data() {
    return {
      viniData: null
    };
  },
  created() {
    this.fetchViniData();
  },
  methods: {
    async fetchMenuData() {
      try {
        const response = await axios.get('https://johns-restaurant-todi-db.onrender.com/vini');
        this.menuData = response.data[0]; // Assuming the structure of the response is similar to your previous JSON data
      } catch (error) {
        console.error('Error fetching menu data:', error);
      }
    }
  }
};
</script>

<template>
  <div class="container-lg" v-if="viniData">
    <div class="title">
      Lista dei vini
    </div>
    <div>
      <ul class="container-sm">

        <li class="sections">
          <h1 class="groups-title">Al Calice</h1>
        <li class="glass-wines" v-for="vinoAlCalice in viniData.al_calice" :key="vinoAlCalice.name">
          <div class="name-desc">
            <h2>{{ vinoAlCalice.name }}</h2>
          </div>
          <div class="price">
            <p>{{ vinoAlCalice.price }} &euro;</p>
          </div>
        </li>
        </li>

        <li class="sections">
          <h1 class="groups-title">
            Vini Rossi
          </h1>
          <!-- Ciclo per gli oggetti in vini_rossi -->
          <template v-for="(vinoRosso, index) in viniData.vini_rossi">
            <!-- Verifica se cantina è definito e ha almeno un elemento -->
            <ul class="wines">
              <!-- Ciclo per gli oggetti in cantina_1 -->
              <template v-for="(vino, vinoIndex) in vinoRosso.cantina_1">
                <template
                  v-if="vinoIndex === 0 || vinoRosso.cantina_1[vinoIndex - 1].c_name !== vinoRosso.cantina_1[vinoIndex].c_name">
                  <p class="cantina">{{ vino.c_name }}</p>
                </template>
                <li class="wine-name">
                  <div class="name-desc">
                    <h2>{{ vino.name }}</h2> <!-- Stampa il nome del vino -->
                  </div>
                  <div class="price">
                    <p>{{ vino.price }} &euro;</p> <!-- Stampa il prezzo del vino -->
                  </div>
                </li>
              </template>
            </ul>
          </template>
        </li>

        <li class="sections">
          <h1 class="groups-title">
            Vini Rosati
          </h1>
          <!-- Ciclo per gli oggetti in vini_rossi -->
          <template v-for="(vinoRosato, index) in viniData.vini_rosati">
            <!-- Verifica se cantina è definito e ha almeno un elemento -->
            <ul class="wines">
              <!-- Ciclo per gli oggetti in cantina_1 -->
              <template v-for="(vino, vinoIndex) in vinoRosato.cantina_1">
                <template
                  v-if="vinoIndex === 0 || vinoRosato.cantina_1[vinoIndex - 1].c_name !== vinoRosato.cantina_1[vinoIndex].c_name">
                  <p class="cantina">{{ vino.c_name }}</p>
                </template>
                <li class="wine-name">
                  <div class="name-desc">
                    <h2>{{ vino.name }}</h2> <!-- Stampa il nome del vino -->
                  </div>
                  <div class="price">
                    <p>{{ vino.price }} &euro;</p> <!-- Stampa il prezzo del vino -->
                  </div>
                </li>
              </template>
            </ul>
          </template>
        </li>

        <li class="sections">
          <h1 class="groups-title">
            Vini Bianchi
          </h1>
          <!-- Ciclo per gli oggetti in vini_rossi -->
          <template v-for="(vinoBianco, index) in viniData.vini_bianchi">
            <!-- Verifica se cantina è definito e ha almeno un elemento -->
            <ul class="wines">
              <!-- Ciclo per gli oggetti in cantina_1 -->
              <template v-for="(vino, vinoIndex) in vinoBianco.cantina_1">
                <template
                  v-if="vinoIndex === 0 || vinoBianco.cantina_1[vinoIndex - 1].c_name !== vinoBianco.cantina_1[vinoIndex].c_name">
                  <p class="cantina">{{ vino.c_name }}</p>
                </template>
                <li class="wine-name">
                  <div class="name-desc">
                    <h2>{{ vino.name }}</h2> <!-- Stampa il nome del vino -->
                  </div>
                  <div class="price">
                    <p>{{ vino.price }} &euro;</p> <!-- Stampa il prezzo del vino -->
                  </div>
                </li>
              </template>
            </ul>
          </template>
        </li>

        <li class="sections">
          <h1 class="groups-title">
            Prosecco e Spumante
          </h1>
          <!-- Ciclo per gli oggetti in vini_rossi -->
          <template v-for="(Prosecco, index) in viniData.prosecco_e_spumante">
            <!-- Verifica se cantina è definito e ha almeno un elemento -->
            <ul class="wines">
              <!-- Ciclo per gli oggetti in cantina_1 -->
              <template v-for="(vino, vinoIndex) in Prosecco.cantina_1">
                <template
                  v-if="vinoIndex === 0 || Prosecco.cantina_1[vinoIndex - 1].c_name !== Prosecco.cantina_1[vinoIndex].c_name">
                  <p class="cantina">{{ vino.c_name }}</p>
                </template>
                <li class="wine-name">
                  <div class="name-desc">
                    <h2>{{ vino.name }}</h2> <!-- Stampa il nome del vino -->
                  </div>
                  <div class="price">
                    <p>{{ vino.price }} &euro;</p> <!-- Stampa il prezzo del vino -->
                  </div>
                </li>
              </template>
            </ul>
          </template>
        </li>

        <li class="sections">
          <h1 class="groups-title">Birre</h1>
        <li class="glass-wines" v-for="birra in viniData.birra" :key="birra.name">
          <div class="name-desc">
            <h2>{{ birra.name }}</h2>
          </div>
          <div class="price">
            <p>{{ birra.price }} &euro;</p>
          </div>
        </li>
        </li>

        <li class="sections">
          <h1 class="groups-title">Bevande</h1>
        <li class="glass-wines" v-for="bevande in viniData.bevande" :key="bevande.name">
          <div class="name-desc">
            <h2>{{ bevande.name }}</h2>
          </div>
          <div class="price">
            <p>{{ bevande.price }} &euro;</p>
          </div>
        </li>
        </li>

      </ul>
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
  .title {
    font-size: 90px;
  }

  .container-sm {
    height: 100%;

    .sections {
      margin: 20px 0px;

      .groups-title {
        font-size: 40px;
        padding: 10px 0px;
      }

      .glass-wines {
        display: flex;
        justify-content: space-between;
        margin: 8px 0px;
        padding: 5px 0px;
        text-transform: none;
        text-align: justify;
        color: black;
        align-items: center;
        box-shadow: 0px 22px 10px -20px white;

        .name-desc {
          font-size: 16px;
          padding: 5px 0px;
        }

        .price {
          font-size: 20px;
        }
      }

      .wines {
        margin: 8px 0px;
        padding: 5px 0px;
        text-transform: none;
        text-align: justify;
        color: black;
        align-items: center;

        .cantina {
          font-size: 30px;
          font-weight: bolder;
          padding-top: 20px;
          color: white;
        }

        .name-desc {
          font-size: 18px;
        }

        .price {
          font-size: 20px;
        }

        .wine-name {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          box-shadow: 0px 22px 10px -20px white;
          padding: 5px 0px;
        }
      }
    }
  }
}

.container-sm {
  height: 100vh;
  padding-top: 60px;

  .loading {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 30px;

    img {
      width: 300px;
      border-radius: 50%;
      animation: rotateClockwise 6s infinite linear;
    }
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
</style>