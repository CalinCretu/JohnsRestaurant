<script>
import { getDishes } from '../../services/dishService';

export default {
  data() {
    return {
      dishes: []
    };
  },
  computed: {
    antipasti() {
      return this.dishes.filter(dish => dish.category === 'Antipasto');
    },
    primi() {
      return this.dishes.filter(dish => dish.category === 'Primo');
    },
    secondi() {
      return this.dishes.filter(dish => dish.category === 'Secondo');
    },
    dolci() {
      return this.dishes.filter(dish => dish.category === 'Dolce');
    },
    contorni() {
      return this.dishes.filter(dish => dish.category === 'Contorno');
    }
  },
  methods: {
    async fetchDishes() {
      this.dishes = await getDishes();
    },
    navigateToEdit() {
      this.$router.push({ name: 'DishEdit' });
    }
  },
  mounted() {
    this.fetchDishes();
  }
};
</script>

<template>
  <!--Titolo pagina-->
  <div class="container-lg container-print">
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
        <li class="dishes dishes-print" v-for="dish in antipasti" :key="dish.id">
          <div class="name-desc name-desc-print">
            <h3>{{ dish.name }}</h3>
            <p>{{ dish.description }}</p>
          </div>
          <div class="price price-print">
            {{ dish.price }}.00 &euro;
          </div>
        </li>
        </li>
        <li class="sections dark-bg">
          <h1 class="groups">Primi</h1>
        <li class="dishes dishes-print" v-for="dish in primi" :key="dish.id">
          <div class="name-desc name-desc-print">
            <h3>{{ dish.name }}</h3>
            <p>{{ dish.description }}</p>
          </div>
          <div class="price price-print">
            {{ dish.price }}.00 &euro;
          </div>
        </li>
        </li>
        <li class="sections">
          <h1 class="groups">Secondi</h1>
        <li class="dishes dishes-print" v-for="dish in secondi" :key="dish.id">
          <div class="name-desc name-desc-print">
            <h3>{{ dish.name }}</h3>
            <p>{{ dish.description }}</p>
          </div>
          <div class="price price-print">
            {{ dish.price }}.00 &euro;
          </div>
        </li>
        </li>
        <li class="sections dark-bg">
          <h1 class="groups">Contorni</h1>
        <li class="dishes dishes-print" v-for="dish in contorni" :key="dish.id">
          <div class="name-desc name-desc-print">
            <h3>{{ dish.name }}</h3>
            <p>{{ dish.description }}</p>
          </div>
          <div class="price price-print">
            {{ dish.price }}.00 &euro;
          </div>
        </li>
        </li>
        <li class="sections">
          <h1 class="groups">Dolci</h1>
        <li class="dishes dishes-print" v-for="dish in dolci" :key="dish.id">
          <div class="name-desc name-desc-print">
            <h3>{{ dish.name }}</h3>
            <p>{{ dish.description }}</p>
          </div>
          <div class="price price-print">
            {{ dish.price }}.00 &euro;
          </div>
        </li>
        </li>
        <li class="vini-button no-print">
          <p class="no-print"><router-link :to="{ name: 'vini' }">{{ $t('header.vini') }}</router-link></p>
        </li>
      </ul>
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