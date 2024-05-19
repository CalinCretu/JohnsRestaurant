<script>
import axios from 'axios';

export default {
  data() {
    return {
      viniData: {
      "al_calice": [
        {
          "name": "Colle di Fontivecchie Umbria Rosso",
          "price": " 6.00"
        },
        {
          "name": "Colle di Fontivecchie Grechetto",
          "price": " 6.00"
        }
      ],
      "vini_rossi": [
        {
          "cantina_1": [
            {
              "c_name": "Terre dei Capitani",
              "name": "Colle di Fontivecchie Umbria Rosso",
              "price": " 18.00"
            },
            {
              "c_name": "Terre dei Capitani",
              "name": "Montefalco Sagrantino DOCG",
              "price": " 40.00"
            },
            {
              "c_name": "Terre dei Capitani",
              "name": "Montefalco Rosso Riserva DOC",
              "price": " 35.00"
            },
            {
              "c_name": "Terre dei Capitani",
              "name": "Montefalco Rosso",
              "price": " 30.00"
            },
            {
              "c_name": "Tenuta Campo al Mare",
              "name": "Baia al Vento",
              "price": " 60.00"
            },
            {
              "c_name": "Cantina Tudernum ",
              "name": "Fidenzio Montefalco Sagrantino DOCG",
              "price": " 40.00"
            },
            {
              "c_name": "Perticaia",
              "name": "Montefalco Rosso Riserva",
              "price": "45.00"
            },
            {
              "c_name": "Agricola Mevante",
              "name": "Montefalco Rosso",
              "price": "35.00"
            },
            {
              "c_name": "Colle delle Querce",
              "name": "Cabernet Sauvignon",
              "price": "40.00"
            },
            {
              "c_name": "Tenuta Placidi",
              "name": "Jagus",
              "price": "45.00"
            },
            {
              "c_name": "Tenuta Placidi",
              "name": "Alias",
              "price": "30.00"
            },
            {
              "c_name": "Fattoria di Milziade Antano",
              "name": "Montefalco Rosso Riserva DOC",
              "price": "45.00"
            },
            {
              "c_name": "Fattoria di Milziade Antano",
              "name": "Montefalco Sagrantino DOCG",
              "price": "50.00"
            },
            {
              "c_name": "Argillae",
              "name": "Sinuoso Umbria Rosso",
              "price": "25.00"
            },
            {
              "c_name": "Argillae",
              "name": "Sinuoso 375 ml",
              "price": "10.00"
            },
            {
              "c_name": "Donnafugata",
              "name": "Sedara",
              "price": "25.00"
            },
            {
              "c_name": "Donnafugata",
              "name": "Mille e una Notte",
              "price": "100.00"
            },
            {
              "c_name": "Donnafugata",
              "name": "Floramundi",
              "price": "30.00"
            },
            {
              "c_name": "Scacciadiavoli",
              "name": "Montefalco Sagrantino",
              "price": "40.00"
            },
            {
              "c_name": "Peppucci",
              "name": "Giovanni",
              "price": "30.00"
            },
            {
              "c_name": "Villa Sobrano",
              "name": "Bapta",
              "price": "22.00"
            },
            {
              "c_name": "Villa Sobrano",
              "name": "Bartolomeo",
              "price": "28.00"
            },
            {
              "c_name": "Roccafiore",
              "name": "Prova d’Autore",
              "price": "35.00"
            },
            {
              "c_name": "Casale del Giglio",
              "name": "Petit Verdot",
              "price": "25.00"
            },
            {
              "c_name": "Tenute del Cabreo",
              "name": "Cabreo Il Borgo",
              "price": "75.00"
            },
            {
              "c_name": "Salvano",
              "name": "Barolo",
              "price": "60.00"
            },
            {
              "c_name": "Sandonna",
              "name": "Jovio",
              "price": "30.00"
            },
            {
              "c_name": "Sandonna",
              "name": "Ciliegiolo",
              "price": "30.00"
            },
            {
              "c_name": "Zazzera",
              "name": "Biccicocco",
              "price": "35.00"
            },
            {
              "c_name": "Zazzera",
              "name": "Nerobacco",
              "price": "22.00"
            },
            {
              "c_name": "Tenuta Saragano",
              "name": "Umbria rosso",
              "price": "18.00"
            },
            {
              "c_name": "Tenuta Saragano",
              "name": "Montefalco rosso DOC",
              "price": "30.00"
            },
            {
              "c_name": "Tenuta Saragano",
              "name": "Montefalco rosso riserva",
              "price": "40.00"
            },
            {
              "c_name": "Tenuta Saragano",
              "name": "Sagrantino di Montefalco",
              "price": "45.00"
            },
            {
              "c_name": "Terre Margaritelli",
              "name": "Miràntico",
              "price": "25.00"
            }
          ]
        }
      ],
      "vini_rosati": [
        {
          "cantina_1": [
            {
              "c_name": "Campo al Mare",
              "name": "Bolgheri Rosato",
              "price": "25.00"
            },
            {
              "c_name": "Zazzera",
              "name": "Serperosa",
              "price": "20.00"
            }
          ]
        }
      ],
      "vini_bianchi": [
        {
          "cantina_1": [
            {
              "c_name": "Terre dei Capitani",
              "name": "Colle di Fontivecchie Umbria Grechetto",
              "price": "18.00"
            },
            {
              "c_name": "Agricola San Faustino",
              "name": "Orvieto Classico",
              "price": "22.00"
            },
            {
              "c_name": "Ronco dei Folo",
              "name": "Collio Sauvignon",
              "price": "22.00"
            },
            {
              "c_name": "Colle delle Querce",
              "name": "Grechetto",
              "price": "20.00"
            },
            {
              "c_name": "Peppucci",
              "name": "I Rovi",
              "price": "30.00"
            },
            {
              "c_name": "Peppucci",
              "name": "Montorsolo",
              "price": "28.00"
            },
            {
              "c_name": "Altùris",
              "name": "Sauvignon",
              "price": "22.00"
            },
            {
              "c_name": "Altùris",
              "name": "Muller Thurgau",
              "price": "22.00"
            },
            {
              "c_name": "Altùris",
              "name": "Traminer Aromatico",
              "price": "22.00"
            },
            {
              "c_name": "Altùris",
              "name": "Ribolla Gialla",
              "price": "22.00"
            },
            {
              "c_name": "Altùris",
              "name": "Pinot Grigio",
              "price": "26.00"
            },
            {
              "c_name": "Cantina Villa Sobrano",
              "name": "Belisarius Grechetto Umbria IGP",
              "price": "25.00"
            },
            {
              "c_name": "Cantina Villa Sobrano",
              "name": "Donna Sabina",
              "price": "30.00"
            },
            {
              "c_name": "Terre Margaritelli",
              "name": "Greco di Renabianca",
              "price": "30.00"
            },
            {
              "c_name": "Argillae",
              "name": "Orvieto Classico DOC Superiore",
              "price": "30.00"
            },
            {
              "c_name": "Argillae",
              "name": "Orvieto Classico 275 ml",
              "price": "10.00"
            },
            {
              "c_name": "Casale del Giglio",
              "name": "Petit Manseng",
              "price": "20.00"
            },
            {
              "c_name": "Zazzera",
              "name": "Barbadoro",
              "price": "25.00"
            },
            {
              "c_name": "Donnafugata",
              "name": "Passiperduti",
              "price": "30.00"
            },
            {
              "c_name": "Campo al Mare",
              "name": "Vermentino",
              "price": "25.00"
            },
            {
              "c_name": "Tudernum",
              "name": "Todi Bianco",
              "price": "18.00"
            },
            {
              "c_name": "Tudernum",
              "name": "Collenobile",
              "price": "30.00"
            },
            {
              "c_name": "Tudernum",
              "name": "Registro 209 Frizzante",
              "price": "18.00"
            },
            {
              "c_name": "Tenuta Saragano",
              "name": "Montefalco Bianco",
              "price": "25.00"
            }
          ]
        }
      ],
      "prosecco_e_spumante": [
        {
          "cantina_1": [
            {
              "c_name": "Costaross",
              "name": "Millesimato extra dry Treviso",
              "price": "20.00"
            },
            {
              "c_name": "Tenuta Saragano",
              "name": "Segreto di famiglia Spumante Brut",
              "price": "25.00"
            }
          ]
        }
      ],
      "birra": [
        {
          "name": "Birra Grande 66 cl",
          "price": " 7.00"
        },
        {
          "name": "Birra Piccola 33 cl",
          "price": " 4.00"
        }
      ],
      "bevande": [
        {
          "name": "Coca-Cola 33 cl",
          "price": " 3.50"
        },
        {
          "name": "Coca-Cola zero 33 cl",
          "price": " 3.50"
        },
        {
          "name": "Fanta 33 cl",
          "price": " 3.50"
        },
        {
          "name": "Sprite 33 cl",
          "price": " 3.50"
        },
        {
          "name": "Amari",
          "price": " 3.50"
        },
        {
          "name": "Grappa",
          "price": " 3.50"
        },
        {
          "name": "Whiskey e Distillati",
          "price": " 6.00"
        }
      ]
      }
    };
  },
  created() {
    //this.fetchViniData();
  },
  methods: {
    // async fetchViniData() {
    //   try {
    //     const response = await axios.get('https://johns-restaurant-todi-db.onrender.com/vini');
    //     this.viniData = response.data[0];
    //     console.log(this.viniData);
    //   } catch (error) {
    //     console.error('Error fetching vini data:', error);
    //   }
    // }
  }
};
</script>

<template>
  <div class="container-lg" v-if="viniData">
    <div class="wine-title">
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
  .wine-title {
    font-size: 70px;
    text-transform: uppercase;
    font-weight: 500;
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
  @media screen and (max-width: 768px) {
    .wine-title {
      font-size: 60px;
    }
    .container-sm{
      max-width: 100vw;
      .sections{
        padding: 0px 10px;
        .glass-wines{
          gap: 20px;
        .name-desc{
          font-size: 13px;
        }
        .price{
            min-width: 40px;
            font-size: 18px;
          }
        }
        .wines{
          gap: 20px;
        .wine-name{
          gap: 20px;
        }
        .name-desc{
          font-size: 14px;
          flex-grow: 1;
        }
        .price{
            min-width: 55px;
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
@media screen and (max-width: 768px){
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