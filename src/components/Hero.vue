<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

export default {
  name: 'Hero',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      slidesPerView: 4,
      modules: [Autoplay],
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
        '/imgs/photos/InsalataDiMare.png',
      ],
    };
  },
  mounted() {
    window.addEventListener('resize', this.updateSlidesPerView);
    this.updateSlidesPerView();
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateSlidesPerView);
  },
  methods: {
    updateSlidesPerView() {
      const w = window.innerWidth;
      if (w <= 768) this.slidesPerView = 1.4;
      else if (w <= 1100) this.slidesPerView = 2.5;
      else this.slidesPerView = 4;
    },
  },
};
</script>

<template>
  <section class="gallery">
    <div class="gallery__head container" data-aos="fade-up">
      <p class="eyebrow">{{ $t('home.gallery_eyebrow') }}</p>
      <h2 class="section-title">{{ $t('home.gallery_title') }}</h2>
      <hr class="rule" />
    </div>

    <div class="gallery__slider" data-aos="fade-up">
      <Swiper
        :slides-per-view="slidesPerView"
        :space-between="18"
        :grab-cursor="true"
        :loop="true"
        :autoplay="{ delay: 2400, disableOnInteraction: false }"
        :modules="modules"
      >
        <SwiperSlide v-for="photo in photos" :key="photo">
          <div class="gallery__slide">
            <img :src="photo" alt="Specialità di John's Restaurant" loading="lazy" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.gallery {
  padding: clamp(3.5rem, 8vw, 7rem) 0;
  background: var(--bg-alt);
  overflow: hidden;

  &__head {
    text-align: center;
    margin-bottom: 3rem;

    .eyebrow {
      margin-bottom: 0.8rem;
    }

    .rule {
      margin: 1.4rem auto 0;
    }
  }

  &__slider {
    padding: 0 clamp(1rem, 4vw, 3rem);
  }

  &__slide {
    aspect-ratio: 4 / 5;
    overflow: hidden;
    border-radius: 2px;
    box-shadow: var(--shadow-sm);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 1.2s var(--ease);
    }

    &:hover img {
      transform: scale(1.08);
    }
  }
}
</style>
