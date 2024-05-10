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
        '/imgs/photos/Fotobackground.jpeg'
      ],
    }
  }
}
</script>

<template>
  <div class="container-lg">
    <Swiper :autoplay="{ delay: 10000, disableOnInteraction: false, }" :speed="4000" :slides-per-view="1" :loop="true"
      :effect="'creative'" :creativeEffect="{
      prev: {
        shadow: false,
        translate: [0, 0, -400],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }" :modules="modules">
      <SwiperSlide v-for="photo in photos">
        <img class="hero-image" :src="`public/${photo}`" alt="">
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
