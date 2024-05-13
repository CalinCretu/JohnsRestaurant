<script>
export default {
  name: 'OurStory',
}
</script>

<template>
  <div class="container-md">
    <div class="title">
      La nostra storia
    </div>
    <div class="cards">
      <div class="text-card">
        <p>
          Ho iniziato a <b>cucinare</b> in Cumbria, vicino alla Scozia, nel 1980. È stato il posto perfetto per iniziare
          la mia carriera con la cucina locale, caratterizzata da una forte identità, dove l'uso di erbe selvatiche e
          spezie era comune, qualcosa che ancora oggi mi piace fare nei nostri piatti locali in Umbria.
        </p>
        <p>
          Dopo aver lavorato a Londra per quindici anni, un'opportunità che ha cambiato la vita mi ha mostrato la
          possibilità di gestire una scuola di cucina in Umbria.
        </p>
        <p>
          Era l'anno 2000 e da allora ho incontrato la mia adorabile moglie Elena e ho avuto l'opportunità di gestire
          ristoranti di successo nella zona intorno a Todi, inclusa la mia Antica Osteria de la Valle (dal 2006 per 8
          anni) e infine La Cantina del Mercataccio dal 2017.
        </p>
        <p>
          Nove anni fa abbiamo iniziato la nostra avventura nel realizzare il nostro sogno di aprire il nostro
          ristorante e scuola di cucina per condividere la mia conoscenza dei piatti e degli ingredienti locali. Siamo
          situati nelle vicinanze di Todi (vicino all'uscita Todi/San Damiano della E45).
        </p>
        <p>
          Non vedo l'ora di dare il benvenuto ai nostri clienti e se è la vostra prima volta a trovarci, vorremmo
          rendere la vostra esperienza qui un'occasione indimenticabile.
        </p>
      </div>
      <div class="image-card"><img src="/public/imgs/photos/RestaurantFoto.jpeg" alt="Restaurant_foto"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-md {
  padding-top: -30px;
  color: black;
  text-transform: none;
  font-size: 25px;

  .cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    font-size: 20px;
    gap: 30px;
    margin-top: 30px;

    .text-card {
      text-align: justify;
    }

    .image-card {}

    .text-card p {
      margin-bottom: 15px;
    }
  }

  .title {
    color: white;
  }
}
</style>