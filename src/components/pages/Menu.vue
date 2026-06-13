<script>
import menuData from '../../data/menu.json';

export default {
  data() {
    return {
      menuData
    };
  }
};
</script>

<template>
  <!--Titolo pagina-->
  <div class="container-lg container-print" v-if="menuData">
    <div class="title">
      Menù
    </div>
    <div class="container-md welcome-print">
      <div>
        <h1>{{ $t('menu.title') }}</h1>
        <div class="ita">
          <p>
            {{ $t('menu.paragraph') }}
          </p>
          <h3>
            {{ $t('menu.secondTitle') }}
          </h3>
          <p>
            {{ $t('menu.secondParagraph') }}
          </p>
        </div>
        <p class="grazie">
          Grazie, Chef John Paterson
        </p>
      </div>
      <!--Contenuto pagina-->
    </div>
    <div class="container-sm">
      <ul>
        <li class="sections">
          <h1 class="groups">Antipasti</h1>
        <li class="dishes dishes-print" v-for="antipasto in menuData.antipasti" :key="antipasto.it">
          <div class="name-desc name-desc-print">
            <h3>{{ antipasto.it }}</h3>
            <p>{{ antipasto.en }}</p>
          </div>
          <div class="price price-print">
            {{ antipasto.price }} &euro;
          </div>
        </li>
        </li>
        <li class="sections dark-bg">
          <h1 class="groups">Primi Piatti</h1>
        <li class="dishes dishes-print" v-for="primo in menuData.primi" :key="primo.it">
          <div class="name-desc name-desc-print">
            <h3>{{ primo.it }}</h3>
            <p>{{ primo.en }}</p>
          </div>
          <div class="price price-print">
            {{ primo.price }} &euro;
          </div>
        </li>
        </li>
        <li class="sections">
          <h1 class="groups">Secondi Piatti</h1>
        <li class="dishes dishes-print" v-for="secondo in menuData.secondi" :key="secondo.it">
          <div class="name-desc name-desc-print">
            <h3>{{ secondo.it }}</h3>
            <p>{{ secondo.en }}</p>
          </div>
          <div class="price price-print">
            {{ secondo.price }} &euro;
          </div>
        </li>
        </li>
        <li class="sections dark-bg">
          <h1 class="groups">Contorni</h1>
        <li class="dishes dishes-print" v-for="contorno in menuData.contorni" :key="contorno.it">
          <div class="name-desc name-desc-print">
            <h3>{{ contorno.it }}</h3>
            <p>{{ contorno.en }}</p>
          </div>
          <div class="price price-print">
            {{ contorno.price }} &euro;
          </div>
        </li>
        </li>
        <li class="sections">
          <h1 class="groups">Dolci</h1>
        <li class="dishes dishes-print" v-for="dolce in menuData.dolci" :key="dolce.it">
          <div class="name-desc name-desc-print">
            <h3>{{ dolce.it }}</h3>
            <p>{{ dolce.en }}</p>
          </div>
          <div class="price price-print">
            {{ dolce.price }} &euro;
          </div>
        </li>
        </li>
        <li class="vini-button no-print">
          <p class="no-print"><router-link :to="{ name: 'vini' }">{{ $t('header.vini') }}</router-link></p>
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
  .container-md {
    padding: 40px 10px;

    .ita {
      padding-bottom: 30px;
      color: var(--title-color);
      ;
    }

    h1 {
      color: var(--title-color);
    }

    p {
      text-transform: none;
      color: var(--title-color);
      font-size: 1.5rem;
    }

    .grazie {
      font-size: 22px;
    }
  }

  .vini-button {
    color: var(--title-color);
    font-size: 2rem;
    display: flex;
    justify-content: center;
    padding-top: 20px;
    transition: 0.3s ease;

    p {
      background-color: var(--dark-bg-color);
      width: 120px;
      border: 1px solid var(--title-color);
      border-radius: 8px;

      &:hover {
        box-shadow: 6px 6px rgba(0, 0, 0, 0.6);
      }

      &:active {
        box-shadow: none;
      }
    }
  }

  .title {
    color: var(--title-color);
    font-size: 60px;
    text-transform: none;
  }

  .groups {
    font-size: 40px;
  }

  .dishes {
    margin: 8px 0px;
    padding: 5px 0px;
    text-transform: none;
    text-align: justify;
    color: var(--title-color);
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 2.5rem;

    .name-desc {
      color: var(--title-color);
      font-size: 22px;
    }

    .price {
      color: var(--title-color);
      font-size: 22px;
      white-space: nowrap
    }
  }

  .container-sm {
    max-width: 100%;
    height: 100%;

    .dark-bg {
      background-color: var(--dark-bg-color);
    }

    .sections {
      margin: 10px 0px;
      padding: 0px 10px;

      h1 {
        color: var(--title-color);
        padding: 10px 0px;
        font-size: 30px;
      }
    }
  }
}

.container-sm {
  height: 100vh;
  // padding: 30px 10px;

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
    .vini-button {
      padding-top: 20px;
    }

    .dishes {
      gap: 20px;
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;

      .name-desc {
        font-size: 22px;
      }

      .price {
        text-align: center;
        justify-content: center;
        font-size: 22px;
        color: var(--title-color);
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

@media print {
  .no-print {
    display: none;
  }

  .welcome-print {
    margin: 60px 0px;
  }

  .container-print {
    margin-top: -20%;
  }

  .dishes-print {
    display: flex;
    justify-content: space-between;
    gap: 2.5rem;
  }

  .name-desc-print {
    flex-grow: 1;
  }

  .price-print {
    white-space: nowrap
  }
}
</style>
