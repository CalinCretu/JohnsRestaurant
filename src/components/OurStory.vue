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
          Ho iniziato a <b>cucinare</b> nel 1980 in <b>Cumbria</b>, al confine con la Scozia. È stato il posto perfetto
          per
          iniziare
          la mia carriera poiché la cucina locale è caratterizzata da una forte identità, mi ha insegnato l'uso di erbe
          selvatiche
          e spezie, cosa che ancora oggi amo fare nei nostri piatti locali in Umbria.
        </p>
        <p>
          Dopo aver lavorato a Londra per quindici anni, un'opportunità che mi ha cambiato la vita mi ha permesso di
          gestire una scuola di cucina in <b>Umbria</b>.
        </p>
        <p>
          Era l'anno 2000 ed insieme alla mia adorabile moglie Elena ho avuto l'opportunità di gestire
          ristoranti di successo a <b>Todi</b>, inclusa la mia <b>Antica Osteria de la Valle</b> (per 8
          anni) ed infine <b>La Cantina del Mercataccio</b> dal 2017.
        </p>
        <p>
          Nove anni fa abbiamo iniziato la nostra avventura nel realizzare il <b>sogno</b> di aprire il nostro
          <b>ristorante</b> e scuola di cucina per condividere la mia conoscenza dei piatti e degli ingredienti locali.
        </p>
        <p>
          Non vedo l'ora di accogliere di nuovo i nostri clienti e, se è la vostra prima volta qui, desideriamo rendere
          l' esperienza <b>indimenticabile</b>.
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

    .text-card p {
      margin-bottom: 15px;
    }
  }

  .title {
    color: white;
  }
}
</style>