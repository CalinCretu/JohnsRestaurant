<script>
import axios from 'axios';

export default {
  data() {
    return {
      menuData: {
        antipasti: [
          {
            name: "Antipasto Misto della Valle (salumi locali, bruschette e formaggi)",
            description: "Salumi locali, bruschette e formaggi",
            eng_description: "Local mixed Appetizer (local cured meat, bruschetta and mixed cheese)",
            price: "18.00"
          },
          {
            name: "Tris di Mare",
            description: "Alici marinate, salmone alle arance, insalata di mare",
            eng_description: "Seafood trio (marinated anchovies, orange-flavored salmon, seafood salad)",
            price: "18.00"
          },
          {
            name: "Crostone di Radicchio Arrosto con Scamorza Affumicata e Prosciutto di Patanegra e Aceto Balsamico",
            description: "Radicchio arrosto con scamorza affumicata, prosciutto di Patanegra e aceto balsamico",
            eng_description: "Roasted radicchio crostone with smoked scamorza, Patanegra ham and balsamic vinegar",
            price: "16.00"
          },
          {
            name: "Carpaccio di Angus al Limone, Rucola e Grana",
            description: "Carpaccio di angus con limone, rucola e formaggio grana",
            eng_description: "Angus carpaccio with lemon, arugula and Grana cheese",
            price: "16.00"
          },
          // {
          //   name: "Insalata di prosciutto croccante, melone e mozzarella di bufala con aceto balsamico invecchiato",
          //   description: "Salumi locali, bruschette e formaggi",
          //   eng_description: "Salad of crispy local ham, melon, and buffalo mozzarella dressed in aged balsamic vinegar",
          //   price: "16.00"
          // },
          // {
          //   name: "Pecorino al forno con miele e noci, capocollo e pane croccante, tartare di pesca",
          //   description: "Salumi locali, bruschette e formaggi",
          //   eng_description: "Baked sheep’s cheese with local honey and walnuts, capocollo croutons, and peach tartare",
          //   price: "16.00"
          // },
          // {
          //   name: "Bruschetta di gamberoni al cognac e pomodorini arrosto",
          //   description: "Salumi locali, bruschette e formaggi",
          //   eng_description: "Toasted bread with king prawns cooked in cognac, cream, roasted cherry tomatoes, and basil",
          //   price: "16.00"
          // },
          // {
          //   name: "Insalata di Polpo, Ceci e Olive Taggiasche",
          //   description: "Octopus, Chickpeas and Taggiasche Olives",
          //   eng_description: "Octopus, Chickpeas and Taggiasche Olives",
          //   price: "16.00"
          // },
          // {
          //   name: "Turbante di Bresaola con insalata di Frutta e mozzarella di Bufala",
          //   description: "Turban of Bresaola with a salad of fruit and Bufala mozzarella",
          //   eng_description: "Turban of smoked angus with a salad of fruit and buffalo mozzarella",
          //   price: "16.00"
          // },
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
            price: "19.00"
          },
          {
            name: "Cuori ripieni di Burrata al tartufo di Norcia e Parmigiano Reggiano",
            description: "Heart shaped ravioli filled with burrata cheese in a cream truffle and parmesan sauce",
            eng_description: "Heart shaped ravioli filled with burrata cheese in a cream truffle and parmesan sauce",
            price: "19.00"
          },
          {
            name: "Tagliolini al Tartufo Nero di Norcia",
            description: "Tagliolini with local black truffles",
            eng_description: "Tagliolini with local black truffles",
            price: "19.00"
          },
          {
            name: "Strangozzi con Porcini e Salsicce Locali",
            description: "Strangozzi with local sausages and Porcini mushrooms",
            eng_description: "Strangozzi with local sausages and Porcini mushrooms",
            price: "16.00"
          },
          {
            name: "Tagliatelle con Gamberetti, Zucchine e Salsa Rosa",
            description: "Tagliatelle with prawns, zucchini and Salsa Rosa",
            eng_description: "Tagliatelle with prawns, zucchini and Salsa Rosa",
            price: "16.00"
          },
          {
            name: "Gnocchi al Ragù di Cinghiale",
            description: "Gnocchi with wild boar ragù",
            eng_description: "Gnocchi with wild boar ragù",
            price: "16.00"
          }
          // {
          //   name: "Tagliolini con Verdure Piccanti",
          //   description: "Tagliolini with local black truffles",
          //   eng_description: "Tagliolini with spicy Vegetables",
          //   price: "14.00"
          // },
          // {
          //   name: "Strangozzi con Funghi Porcini e Pomodorini",
          //   description: "Strangozzi with Porcini mushrooms and Cherry Tomatoes",
          //   eng_description: "Strangozzi with Porcini mushrooms and Cherry Tomatoes",
          //   price: "16.00"
          // },
          // {
          //   name: "Tagliatelle con Gamberetti e Zucchine in Salsa Rosa",
          //   description: "Tagliatelle with Prawns and Spicy Vegetables",
          //   eng_description: "Tagliatelle with Prawns and Zucchini in Pink Sauce",
          //   price: "16.00"
          // },
          // {
          //   name: "Gnocchi al Pomodoro fresco e Basilico",
          //   description: "Gnocchi with fresh Tomato and Basil",
          //   eng_description: "Gnocchi with fresh Tomato and Basil",
          //   price: "15.00"
          // }
        ],
        secondi: [
          {
            name: "Tagliata di Manzo con Rucola, Olio di Ginepro e Rosmarino",
            description: "Sliced veal Steak with Juniper Oil, Rocket salad and Rosemary",
            eng_description: "Sliced veal Steak with Juniper Oil, Rocket salad and Rosemary",
            price: "24.00"
          },
          // {
          //   name: "Filetto di Vitello al Tartufo Nero di Norcia",
          //   description: "Grilled Fillet of Irish beef with Black Truffles",
          //   eng_description: "Grilled Veal Fillet with local Black Truffle",
          //   price: "28.00"
          // },
          {
            name: "Filetto di Maiale con rucola e gorgonzola",
            description: "Fillet of pork with gorgonzola and rocket salad",
            eng_description: "Fillet of pork with gorgonzola and rocket salad",
            price: "18.00"
          },
          // {
          //   name: "Scottadito di Agnello",
          //   description: "Grilled lamb chops marinated in rosemary and thyme",
          //   eng_description: "Grilled lamb chops marinated in rosemary and thyme",
          //   price: "20.00"
          // },
          {
            name: "Spigola arrosto",
            description: "Roasted Seabass",
            eng_description: "Roasted Seabass",
            price: "20.00"
          },
          // {
          //   name: "Salmone arrosto con salsa verde",
          //   description: "Sliced veal Steak with Juniper Oil, Rocket salad and Rosemary",
          //   eng_description: "Salmon steak with salsa verde",
          //   price: "22.00"
          // },
          // {
          //   name: "Baccalà impanato con crema di pomodori secchi",
          //   description: "Saltcod with olives, capers, potatoes and chickpeas",
          //   eng_description: "Breaded Cod with Sun-Dried Tomato Cream",
          //   price: "22.00"
          // },
          {
            name: "Guanciale di Vitello Brasato al Sagrantino",
            description: "Braised veal cheek with Sagrantino wine",
            eng_description: "Braised veal cheek with Sagrantino wine",
            price: "24.00"
          },
          {
            name: "Agnello Tartufato",
            description: "Agnello con tartufo nero",
            eng_description: "Lamb with black truffles",
            price: "24.00"
          },
          {
            name: "Baccalà al Forno con Patate, Ceci e Pomodorini",
            description: "Baccalà al forno con patate, ceci e pomodorini",
            eng_description: "Baked salt cod with potatoes, chickpeas, and cherry tomatoes",
            price: "22.00"
          }
          // {
          //   name: "Faraona ripiena di cicoria, scamorza e funghi porcini",
          //   description: "Guinea fowl with smoked cheese porcini mushrooms and cicory",
          //   eng_description: "Guinea fowl with smoked cheese porcini mushrooms and chicory",
          //   price: "18.00"
          // }
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
          {
            name: "Radicchio arrosto",
            description: "Roasted Radicchio",
            eng_description: "Roasted Radicchio",
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
          // {
          //   name: "Panna cotta alla menta con la salsa di coccolato fondente",
          //   description: "Mint panna cotta with chocolate sauce",
          //   eng_description: "Mint panna cotta with chocolate sauce",
          //   price: "7.00"
          // },
          {
            name: "Panna cotta alla Vaniglia con frutti di bosco cotti al Vino Rosso",
            description: "Mint panna cotta with chocolate sauce",
            eng_description: "Vanilla Panna Cotta with Berries Cooked in Red Wine",
            price: "7.00"
          },
          // {
          //   name: "Semifreddo alle Mandorle e Cioccolato",
          //   description: "Mint panna cotta with chocolate sauce",
          //   eng_description: "Lemon and strawberry semifreddo with iced watermelon",
          //   price: "7.00"
          // }, 
          {
            name: "Semifreddo alle Mandorle e Cioccolato",
            description: "Semifreddo with Almonds and Chocolate",
            eng_description: "Semifreddo with Almonds and Chocolate",
            price: "7.00"
          },
          {
            name: "Pandoro con Crema al Tiramisù",
            description: "Pandoro with Tiramisù Cream",
            eng_description: "Pandoro with Tiramisù Cream",
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
        <li class="dishes dishes-print" v-for="antipasto in menuData.antipasti" :key="antipasto.name">
          <div class="name-desc name-desc-print">
            <h3>{{ antipasto.name }}</h3>
            <p>{{ antipasto.eng_description }}</p>
          </div>
          <div class="price price-print">
            {{ antipasto.price }} &euro;
          </div>
        </li>
        </li>
        <li class="sections dark-bg">
          <h1 class="groups">Primi Piatti</h1>
        <li class="dishes dishes-print" v-for="primo in menuData.primi" :key="primo.name">
          <div class="name-desc name-desc-print">
            <h3>{{ primo.name }}</h3>
            <p>{{ primo.eng_description }}</p>
          </div>
          <div class="price price-print">
            {{ primo.price }} &euro;
          </div>
        </li>
        </li>
        <li class="sections">
          <h1 class="groups">Secondi Piatti</h1>
        <li class="dishes dishes-print" v-for="secondo in menuData.secondi" :key="secondo.name">
          <div class="name-desc name-desc-print">
            <h3>{{ secondo.name }}</h3>
            <p>{{ secondo.eng_description }}</p>
          </div>
          <div class="price price-print">
            {{ secondo.price }} &euro;
          </div>
        </li>
        </li>
        <li class="sections dark-bg">
          <h1 class="groups">Contorni</h1>
        <li class="dishes dishes-print" v-for="contorno in menuData.contorni" :key="contorno.name">
          <div class="name-desc name-desc-print">
            <h3>{{ contorno.name }}</h3>
            <p>{{ contorno.eng_description }}</p>
          </div>
          <div class="price price-print">
            {{ contorno.price }} &euro;
          </div>
        </li>
        </li>
        <li class="sections">
          <h1 class="groups">Dolci</h1>
        <li class="dishes dishes-print" v-for="dolce in menuData.dolci" :key="dolce.name">
          <div class="name-desc name-desc-print">
            <h3>{{ dolce.name }}</h3>
            <p>{{ dolce.eng_description }}</p>
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