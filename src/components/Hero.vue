<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

import { srcset } from '../utils/img';

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
      // Ogni foto ha la sua descrizione: prima erano tutte "Specialità di John's
      // Restaurant", inutile sia per chi usa uno screen reader sia per Google Immagini.
      photos: [
        { src: '/imgs/photos/Tagliata_2.webp', alt: 'Tagliata di manzo su letto di rucola', w: 1440 },
        { src: '/imgs/photos/Melone.webp', alt: 'Carpaccio di carne con melone e verdure grigliate', w: 940 },
        { src: '/imgs/photos/Cheesecake.webp', alt: 'Cheesecake con fragole e glassa di aceto balsamico', w: 545 },
        { src: '/imgs/photos/Gambero.webp', alt: 'Gamberi con salsa, serviti in sala', w: 720 },
        { src: '/imgs/photos/Prosciutto.webp', alt: 'Prosciutto crudo con melone a ventaglio', w: 640 },
        { src: '/imgs/photos/TagliataAlSangue.webp', alt: 'Tagliata al sangue con rucola', w: 902 },
        { src: '/imgs/photos/Ravioli.webp', alt: 'Ravioli in crema con tartufo nero', w: 1195 },
        { src: '/imgs/photos/Salmone.webp', alt: 'Salmone con pomodorini e germogli', w: 540 },
        { src: '/imgs/photos/Tagliata.webp', alt: 'Tagliata di manzo con rucola', w: 1080 },
        { src: '/imgs/photos/Tortino.webp', alt: 'Carpaccio con tortino di verdure al centro', w: 874 },
        { src: '/imgs/photos/CheesecakeTortaPerugina.webp', alt: 'Cheesecake e torta Perugina con fragole', w: 695 },
        { src: '/imgs/photos/TortinoDolceCuore.webp', alt: 'Tortino a forma di cuore con salsa ai frutti rossi', w: 843 },
        { src: '/imgs/photos/TortiniDolceCuore.webp', alt: 'Tortini a forma di cuore pronti per il servizio', w: 720 },
        { src: '/imgs/photos/Scoglio.webp', alt: 'Spaghetti allo scoglio con cozze e gamberi', w: 720 },
        { src: '/imgs/photos/RisottoBaccala.webp', alt: 'Risotto al baccalà', w: 960 },
        { src: '/imgs/photos/InsalataDiMare.webp', alt: 'Insalata di mare con gamberi e zucchine', w: 871 },
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
    srcset,
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
        <SwiperSlide v-for="photo in photos" :key="photo.src">
          <div class="gallery__slide">
            <img
              :src="photo.src"
              :srcset="srcset(photo.src, photo.w)"
              sizes="(max-width: 768px) 75vw, 340px"
              :alt="photo.alt"
              loading="lazy"
              decoding="async"
            />
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
