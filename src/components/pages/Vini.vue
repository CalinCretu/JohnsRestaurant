<script>
import viniData from '../../data/vini.json';

export default {
  data() {
    return {
      viniData
    };
  },
  computed: {
    // Sezioni vini raggruppate per cantina (ordine e colore di sfondo)
    wineSections() {
      return [
        { title: 'Vini Rossi', key: 'vini_rossi', dark: false },
        { title: 'Vini Rosati', key: 'vini_rosati', dark: true },
        { title: 'Vini Bianchi', key: 'vini_bianchi', dark: false },
        { title: 'Prosecco e Spumante', key: 'prosecco_e_spumante', dark: true }
      ];
    }
  }
};
</script>

<template>
  <div class="container-lg" v-if="viniData">
    <div class="wine-title">
      Lista dei Vini
    </div>
    <div>
      <ul class="container-sm">

        <!-- Vini al Calice (mostrati solo se presenti) -->
        <li v-if="viniData.al_calice && viniData.al_calice.length" class="sections dark-bg">
          <h1 class="groups-title">Al Calice</h1>
          <li class="glass-wines" v-for="(vino, i) in viniData.al_calice" :key="'calice-' + i">
            <div class="name-desc">
              <h2>{{ vino.name }}</h2>
            </div>
            <div class="price">
              <p>{{ vino.price }} &euro;</p>
            </div>
          </li>
        </li>

        <!-- Sezioni vini raggruppate per cantina -->
        <li v-for="sec in wineSections" :key="sec.key" class="sections" :class="{ 'dark-bg': sec.dark }">
          <h1 class="groups-title">{{ sec.title }}</h1>
          <ul class="wines">
            <template v-for="(vino, i) in viniData[sec.key]" :key="sec.key + '-' + i">
              <!-- Intestazione cantina: mostrata quando cambia rispetto al vino precedente -->
              <p class="cantina" v-if="i === 0 || viniData[sec.key][i - 1].cantina !== vino.cantina">
                {{ vino.cantina }}
              </p>
              <li class="wine-name">
                <div class="name-desc">
                  <h2>{{ vino.name }}</h2>
                </div>
                <div class="price">
                  <p>{{ vino.price }} &euro;</p>
                </div>
              </li>
            </template>
          </ul>
        </li>

        <!-- Birre -->
        <li class="sections">
          <h1 class="groups-title">Birre</h1>
          <li class="glass-wines" v-for="(birra, i) in viniData.birra" :key="'birra-' + i">
            <div class="name-desc">
              <h2>{{ birra.name }}</h2>
            </div>
            <div class="price">
              <p>{{ birra.price }} &euro;</p>
            </div>
          </li>
        </li>

        <!-- Bevande -->
        <li class="sections dark-bg">
          <h1 class="groups-title">Bevande</h1>
          <li class="glass-wines" v-for="(bevanda, i) in viniData.bevande" :key="'bevanda-' + i">
            <div class="name-desc">
              <h2>{{ bevanda.name }}</h2>
            </div>
            <div class="price">
              <p>{{ bevanda.price }} &euro;</p>
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
  .wine-title {
    color: var(--title-color);
    font-size: 60px;
    font-weight: 500;
  }

  .container-sm {
    height: 100%;

    .dark-bg {
      background-color: var(--dark-bg-color);
    }

    .sections {
      margin: 20px 0px;

      .groups-title {
        color: var(--title-color);
        font-size: 30px;
        padding: 10px 0px;
      }

      .glass-wines {
        display: flex;
        justify-content: space-between;
        margin: 8px 0px;
        padding: 5px 0px;
        text-transform: none;
        text-align: justify;
        color: var(--title-color);
        align-items: center;

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
        color: var(--title-color);
        align-items: center;

        .cantina {
          font-size: 30px;
          font-weight: bolder;
          padding-top: 20px;
          color: var(--title-color);
          border-bottom: 1px solid var(--content-color);
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
          padding: 5px 0px;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .wine-title {
      font-size: 60px;
    }

    .container-sm {
      max-width: 100vw;

      .sections {
        padding: 0px 10px;

        .glass-wines {
          gap: 20px;

          .name-desc {
            font-size: 13px;
          }

          .price {
            min-width: 60px;
            font-size: 18px;
          }
        }

        .wines {
          gap: 20px;

          .wine-name {
            gap: 20px;
          }

          .name-desc {
            text-align: left;
            font-size: 14px;
            flex-grow: 1;
          }

          .price {
            min-width: 60px;
            font-size: 18px;
          }
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

  @media screen and (max-width: 768px) {
    .loading {
      padding-top: 50px;
      max-width: 100vw;

      img {
        max-width: 150px;
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
}
</style>
