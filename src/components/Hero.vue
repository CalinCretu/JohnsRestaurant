<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation, EffectCreative } from 'swiper/modules';
import { store } from '../store';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-creative';
export default {
  name: 'Hero',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      store: store,
      modules: [Autoplay, Pagination, Navigation, EffectCreative],
      photos: [
        '/imgs/photos/Fotobackground.jpeg',
        '/imgs/photos/Fotobackground.jpeg',
        '/imgs/photos/Cheesecake.png',
        '/imgs/photos/Gambero.jpg',
        '/imgs/photos/Prosciutto.jpg',
        '/imgs/photos/Ravioli.png',
        '/imgs/photos/Salmone.jpg',
        '/imgs/photos/Tagliata.jpg',
        '/imgs/photos/Tortino.jpg',
      ],
    }
  }
}
</script>

<template>
  <div class="container-lg">
    <Swiper :slides-per-view="8" :grabCursor="true" :loop="true"
      :autoplay="{ delay: 6000, disableOnInteraction: false, }" :modules="modules">
      <SwiperSlide v-for="photo in photos">
        <div>
          <img class="hero-image" :src="`public/${photo}`" alt="">
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style lang="scss" scoped>
.container-lg {
  text-transform: uppercase;

  Swiper {
    z-index: 1;
  }

  .hero-image {}

  .absolute {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }

  .title-hero {
    margin-bottom: 30px;
  }
}
</style>
