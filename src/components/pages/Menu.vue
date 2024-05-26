<script>
import axios from 'axios';

export default {
  data() {
    return {
      menuData: {
        antipasti: [
          {
            name: "Antipasto Misto della Valle",
            description: "Salumi locali, bruschette e formaggi",
            eng_description: "Local mixed Appetizer (local cured meat, bruschetta and mixed cheese)",
            price: "16.00"
          },
          {
            name: "Insalata di Polpo, Ceci e Olive Taggiasche",
            description: "Octopus, Chickpeas and Taggiasche Olives",
            eng_description: "Octopus, Chickpeas and Taggiasche Olives",
            price: "16.00"
          },
          {
            name: "Turbante di Bresaola con insalata di Frutta e mozzarella di Bufala",
            description: "Turban of Bresaola with a salad of fruit and Bufala mozzarella",
            eng_description: "Turban of smoked angus with a salad of fruit and buffalo mozzarella",
            price: "16.00"
          },
          {
            name: "Involtino di Salmone affumicato con Peperoni in agrodolce e Salsa Tonnata",
            description: "Smoked Salmon Roll with sweet and sour Peppers and Tuna fish sauce",
            eng_description: "Smoked Salmon Roll with sweet and sour Peppers and Tuna fish sauce",
            price: "16.00"
          }
        ],
        primi: [
          {
            name: "La nostra cacio e pepe con tartufo",
            description: "World Famous “Tagliolini cacio e pepe” black truffles, black pepper, sheep’s cheese",
            eng_description: "World Famous “Tagliolini cacio e pepe” black truffles, black pepper, sheep’s cheese",
            price: "18.00"
          },
          {
            name: "Cuori ripieni di Burrata al tartufo di Norcia e Parmigiano Reggiano",
            description: "Heart shaped ravioli filled with burrata cheese in a cream truffle and parmesan sauce",
            eng_description: "Heart shaped ravioli filled with burrata cheese in a cream truffle and parmesan sauce",
            price: "18.00"
          },
          {
            name: "Tagliolini al tartufo",
            description: "Tagliolini with local black truffles",
            eng_description: "Tagliolini with local black truffles",
            price: "18.00"
          },
          {
            name: "Strangozzi con salsicce e funghi Porcini",
            description: "Strangozzi with sausages and Porcini mushrooms",
            eng_description: "Strangozzi with sausages and Porcini mushrooms",
            price: "16.00"
          },
          {
            name: "Tagliatelle con Gamberetti e Verdure piccanti",
            description: "Tagliatelle with Prawns and Spicy Vegetables",
            eng_description: "Tagliatelle with Prawns and Spicy Vegetables",
            price: "16.00"
          },
          {
            name: "Gnocchi al pesto di ortica, borragine e crespigno",
            description: "Gnocchi with pesto of wild greens (nettles and borrage)",
            eng_description: "Gnocchi with pesto of wild greens (nettles and borrage)",
            price: "15.00"
          }
        ],
        secondi: [
          {
            name: "Tagliata di vitello con Rucola, Olio di Ginepro e Rosmarino",
            description: "Sliced veal Steak with Juniper Oil, Rocket salad and Rosemary",
            eng_description: "Sliced veal Steak with Juniper Oil, Rocket salad and Rosemary",
            price: "22.00"
          },
          {
            name: "Filetto di manzo Irlandese alla griglia con Tartufo",
            description: "Grilled Fillet of Irish beef with Black Truffles",
            eng_description: "Grilled Fillet of Irish beef with Black Truffles",
            price: "28.00"
          },
          {
            name: "Filetto di Maiale con rucola e gorgonzola",
            description: "Fillet of pork with gorgonzola and rocket salad",
            eng_description: "Fillet of pork with gorgonzola and rocket salad",
            price: "18.00"
          },
          {
            name: "Scottadito di Agnello",
            description: "Grilled lamb chops marinated in rosemary and thyme",
            eng_description: "Grilled lamb chops marinated in rosemary and thyme",
            price: "20.00"
          },
          {
            name: "Spigola arrosto",
            description: "Roasted Seabass",
            eng_description: "Roasted Seabass",
            price: "20.00"
          },
          {
            name: "Baccalà con olive taggiasche, capperi, patate e ceci",
            description: "Saltcod with olives, capers, potatoes and chickpeas",
            eng_description: "Saltcod with olives, capers, potatoes and chickpeas",
            price: "22.00"
          },
          {
            name: "Faraona ripiena di cicoria ,scamorza e funghi porcini",
            description: "Guinea fowl with smoked cheese porcini mushrooms and cicory",
            eng_description: "Guinea fowl with smoked cheese porcini mushrooms and chicory",
            price: "18.00"
          }
        ],
        contorni: [
          {
            name: "Verdura ripassata",
            description: "Sauteed vegetables (garlic and chili pepper)",
            eng_description: "Sauteed vegetables (garlic and chili pepper)",
            price: "6.00"
          },
          {
            name: "Insalata Mista",
            description: "Mixed Salad",
            eng_description: "Mixed Salad",
            price: "6.00"
          },
          {
            name: "Patate saltate con aglio e rosmarino",
            description: "Rosemary and Garlic sauteed potatoes",
            eng_description: "Rosemary and Garlic sauteed potatoes",
            price: "6.00"
          },
          {
            name: "Verdure arrosto (peperoni, melanzane e zucchine)",
            description: "Roasted vegetables",
            eng_description: "Roasted vegetables",
            price: "6.00"
          },
          // {
          //   name: "Panache di verdura di al timo",
          //   description: "Mixed vegetable panache with thyme",
          //   eng_description: "Mixed vegetable panache with thyme",
          //   price: "6.00"
          // }
        ],
        dolci: [
          {
            name: "Cheesecake al cioccolato bianco e fiori d'arancio",
            description: "White chocolate and orange blossom cheesecake",
            eng_description: "White chocolate and orange blossom cheesecake",
            price: "7.00"
          },
          {
            name: "Torta Perugina",
            description: "Flourless fondant chocolate cake",
            eng_description: "Flourless fondant chocolate cake",
            price: "7.00"
          },
          {
            name: "Panna cotta alla menta con la salsa di coccolato fondente",
            description: "Mint panna cotta with chocolate sauce",
            eng_description: "Mint panna cotta with chocolate sauce",
            price: "7.00"
          }
        ]
      }
    };
  },
  created() {
    // this.fetchMenuData();
  },
  methods: {
    // async fetchMenuData() {
    //   try {
    //     const response = await axios.get('https://johns-restaurant-todi-db.onrender.com/menu');
    //     this.menuData = response.data[0];
    //   } catch (error) {
    //     console.error('Error fetching menu data:', error);
    //   }
    // }
  }
};
</script>

<template>
  <!--Titolo pagina-->
  <div class="container-lg" v-if="menuData">
    <div class="title">
      Menù
    </div>
    <div class="container-md">
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
          Grazie, chef John Paterson
        </p>
      </div>
      <!--Contenuto pagina-->
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
            {{ antipasto.price }} &euro;
          </div>
        </li>
        </li>
        <li class="sections dark-bg">
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
        <li class="sections dark-bg">
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
      color: var(--title-color);
    }

    .grazie {
      padding-top: 20px;
      font-size: 25px;
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

    .name-desc {
      color: var(--title-color);
      font-size: 22px;
    }

    .price {
      color: var(--title-color);
      font-size: 22px;
    }
  }

  .container-sm {
    max-width: 100%;
    height: 100%;

    .dark-bg {
      background-color: var(--dark-bg-color);
    }

    .sections {
      margin: 20px 0px;
      padding: 30px 10px;

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
</style>