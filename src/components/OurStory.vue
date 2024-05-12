<script>
export default {
  name: 'OurStory',
}
</script>

<template>
  <div class="container-md">
    <div class="title">
      Our Story
    </div>
    <div class="cards">
      <div class="text-card">
        <p>
          Started <b>cooking</b> in Cumbria, near Scotland in 1980. It was the perfect place to start my career with the
          local
          cusine with strong identity, using wild herbs and spices was comon, something that I still enjoy doing in our
          local dishes in Umbria.
        </p>
        <p>
          Having worked in London for fifteen years, a life changing opportunity show to run a cooking school in Umbria.
        </p>
        <p>
          It was the year 2000 and since them I have met my lovely wife Elena and have the opportunity to manage
          successful restaurants in the area around Todi, including my own Antica Osteria de la Valle (2006 for 8 years)
          and finally La Cantina del Mercataccio since 2017.
        </p>
        <p>
          Nine years ago we started our dream adventure to open our restaurant and cooking school to share my knowledge
          of
          local dishes and ingredients. We are situated on the outskirts of Todi (next to E45 exit Todi/San Damiano).
        </p>
        <p>
          I am looking forward to welcoming back our clients and if it is your first time to visit us, we would like
          make
          your experience here an unforgettable occasion.
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