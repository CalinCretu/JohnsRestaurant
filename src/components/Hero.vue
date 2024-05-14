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
      slidesPerView: 8, // valore iniziale
      store: store,
      modules: [Autoplay, Pagination, Navigation, EffectCreative],
      photos: [
        '/imgs/photos/Tagliata_2.jpg',
        '/imgs/photos/Melone.jpg',
        '/imgs/photos/Cheesecake.png',
        '/imgs/photos/Gambero.jpg',
        '/imgs/photos/Prosciutto.jpg',
        '/imgs/photos/TagliataAlSangue.png',
        '/imgs/photos/Ravioli.png',
        '/imgs/photos/Salmone.jpg',
        '/imgs/photos/Tagliata.jpg',
        '/imgs/photos/Tortino.jpg',
        '/imgs/photos/Cheesecake&TortaPerugina.png',
        '/imgs/photos/TortinoDolceCuore.jpg',
        '/imgs/photos/TortiniDolceCuore.jpg',
        '/imgs/photos/Scoglio.jpg',
        '/imgs/photos/RisottoBaccala.jpg',
        '/imgs/photos/InsalataDiMare.png'
      ]
    }
  },
  mounted() {
    // Listen to window resize event to update slides per view
    window.addEventListener('resize', this.updateSlidesPerView);
    // Initial update
    this.updateSlidesPerView();
  },
  beforeDestroy() {
    // Remove event listener when component is destroyed
    window.removeEventListener('resize', this.updateSlidesPerView);
  },
  methods: {
    updateSlidesPerView() {
      // Adjust slides per view based on screen width
      if (window.innerWidth <= 768) {
        this.slidesPerView = 2;
      } else {
        this.slidesPerView = 8;
      }
    }
  }
}
</script>

<template>
  <div class="container-lg">
    <Swiper :slides-per-view="slidesPerView" :grabCursor="true" :loop="true"
      :autoplay="{ delay: 2000, disableOnInteraction: false, }" :modules="modules">
      <SwiperSlide v-for=" photo  in  photos " :key="photo">
        <div class="slide-wrapper">
          <img class="hero-image" :src="photo" alt="Immagine Piatto">
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

  .slide-wrapper {
    /* Set fixed width and height for uniform size */
    width: 225px;
    height: 150px;
  }

  .hero-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
