<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Keyboard, Zoom } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/zoom';

export default {
  name: 'SpecialMenus',
  components: { Swiper, SwiperSlide },
  data() {
    return {
      menus: [
        '/imgs/menus/Capodanno2024.png',
        '/imgs/menus/CapodannoCena2024.png',
        '/imgs/menus/MenuAsporto24Dic.png',
        '/imgs/menus/MenuPasqua.png',
        '/imgs/menus/MenuSanValentino.png',
        '/imgs/menus/MenuVigilia.png',
        '/imgs/menus/PranzoNatale.png',
        '/imgs/menus/SanVale.png',
        '/imgs/menus/CenaCapodanno.png',
        '/imgs/menus/MenuAsporto31Dic.png',
        '/imgs/menus/MenuAsportoCapodanno.png',
      ],
      lightboxOpen: false,
      activeIndex: 0,
      currentIndex: 0,
      lbModules: [Navigation, Keyboard, Zoom],
    };
  },
  watch: {
    lightboxOpen(open) {
      document.body.style.overflow = open ? 'hidden' : '';
      if (open) window.addEventListener('keydown', this.onKey);
      else window.removeEventListener('keydown', this.onKey);
    },
  },
  unmounted() {
    document.body.style.overflow = '';
    window.removeEventListener('keydown', this.onKey);
  },
  methods: {
    openLightbox(i) {
      this.activeIndex = i;
      this.currentIndex = i;
      this.lightboxOpen = true;
    },
    closeLightbox() {
      this.lightboxOpen = false;
    },
    onSlideChange(swiper) {
      this.currentIndex = swiper.realIndex;
    },
    onKey(e) {
      if (e.key === 'Escape') this.closeLightbox();
    },
  },
};
</script>

<template>
  <section class="special">
    <header class="special__head container-narrow" data-aos="fade-up">
      <p class="eyebrow">{{ $t('speciali.subtitle') }}</p>
      <h1 class="special__title">{{ $t('speciali.title') }}</h1>
      <hr class="rule special__rule" />
      <p class="special__lead">{{ $t('speciali.paragraph') }}</p>
    </header>

    <div class="special__grid container">
      <button
        type="button"
        class="mcard"
        v-for="(menu, i) in menus"
        :key="i"
        @click="openLightbox(i)"
        data-aos="fade-up"
        :data-aos-delay="(i % 3) * 100"
      >
        <img :src="menu" alt="Menù speciale" loading="lazy" />
        <span class="mcard__zoom"><font-awesome-icon icon="expand" /></span>
      </button>
    </div>

    <!-- Lightbox / carousel -->
    <Teleport to="body">
      <transition name="lb">
        <div v-if="lightboxOpen" class="lightbox">
          <!-- Barra superiore: contatore + chiudi -->
          <div class="lightbox__bar">
            <span class="lightbox__counter">{{ currentIndex + 1 }} / {{ menus.length }}</span>
            <button class="lightbox__close" @click="closeLightbox" aria-label="Chiudi">
              <font-awesome-icon icon="xmark" />
            </button>
          </div>

          <Swiper
            class="lightbox__swiper"
            :modules="lbModules"
            :initial-slide="activeIndex"
            :navigation="true"
            :keyboard="{ enabled: true }"
            :zoom="true"
            :loop="true"
            :space-between="40"
            :grab-cursor="true"
            @slide-change="onSlideChange"
          >
            <SwiperSlide v-for="(menu, i) in menus" :key="i">
              <div class="lightbox__slide">
                <div class="swiper-zoom-container">
                  <img :src="menu" alt="Menù speciale" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <p class="lightbox__hint">
            <font-awesome-icon icon="expand" /> Tocca due volte o pizzica per ingrandire
          </p>
        </div>
      </transition>
    </Teleport>
  </section>
</template>

<style lang="scss" scoped>
.special {
  background: var(--bg);
  padding: clamp(2.5rem, 6vw, 5rem) 0 5rem;

  &__head {
    text-align: center;
    margin-bottom: 3rem;
  }

  &__title {
    font-family: var(--font-display);
    font-size: clamp(3rem, 8vw, 5rem);
    font-weight: 500;
    margin-top: 0.4rem;
  }

  &__rule {
    margin: 1.4rem auto;
  }

  &__lead {
    color: var(--muted);
    font-size: 1.12rem;
    line-height: 1.8;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.6rem;
  }
}

.mcard {
  position: relative;
  display: block;
  width: 100%;
  padding: 0;
  overflow: hidden;
  border-radius: 2px;
  box-shadow: var(--shadow-sm);
  background: #fff;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 1s var(--ease);
  }

  &__zoom {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(20, 17, 13, 0.45);
    color: #fff;
    font-size: 1.6rem;
    opacity: 0;
    transition: opacity 0.4s var(--ease);
  }

  &:hover {
    img {
      transform: scale(1.05);
    }

    .mcard__zoom {
      opacity: 1;
    }
  }
}

// ---------- Lightbox ----------
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 2000;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(18, 15, 11, 0.85);
  -webkit-backdrop-filter: blur(10px) saturate(160%);
  backdrop-filter: blur(10px) saturate(160%);

  &__bar {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1.2rem;
    flex-shrink: 0;
  }

  &__counter {
    font-family: var(--font-ui);
    letter-spacing: 0.16em;
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.8);
  }

  &__close {
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.12);
    color: #fff;
    font-size: 1.4rem;
    transition: background 0.3s var(--ease), transform 0.3s var(--ease);

    &:hover {
      background: rgba(255, 255, 255, 0.22);
      transform: rotate(90deg);
    }
  }

  &__swiper {
    width: min(920px, 96vw);
    flex: 1;
    min-height: 0;
  }

  &__slide {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .swiper-zoom-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__slide img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    border-radius: 4px;
    box-shadow: 0 30px 80px -30px rgba(0, 0, 0, 0.8);
  }

  &__hint {
    flex-shrink: 0;
    padding: 0.9rem 1rem 1.4rem;
    font-family: var(--font-ui);
    text-transform: uppercase;
    letter-spacing: 0.18em;
    font-size: 0.66rem;
    color: rgba(255, 255, 255, 0.55);
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  // Frecce di navigazione Swiper (iniettate a runtime → :deep)
  :deep(.swiper-button-next),
  :deep(.swiper-button-prev) {
    color: #fff;
    transition: color 0.3s var(--ease);

    &::after {
      font-size: 1.8rem;
      font-weight: 700;
    }

    &:hover {
      color: var(--gold);
    }
  }
}

// Transizione apertura/chiusura
.lb-enter-active,
.lb-leave-active {
  transition: opacity 0.35s var(--ease);
}

.lb-enter-from,
.lb-leave-to {
  opacity: 0;
}

@media screen and (max-width: 768px) {
  .special__grid {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  .lightbox__swiper {
    width: 100vw;
  }

  .lightbox :deep(.swiper-button-next),
  .lightbox :deep(.swiper-button-prev) {
    display: none; // su mobile si scorre con lo swipe
  }
}

@media screen and (max-width: 480px) {
  .special__grid {
    grid-template-columns: 1fr;
    max-width: 380px;
    margin-inline: auto;
  }
}
</style>
