<script>
export default {
  name: 'Welcome',
};
</script>

<template>
  <section class="hero">
    <div class="hero__media" aria-hidden="true"></div>
    <div class="hero__overlay" aria-hidden="true"></div>

    <div class="hero__inner" data-aos="fade-up">
      <p class="hero__eyebrow">Todi · Umbria</p>
      <h1 class="hero__title">John's Restaurant</h1>
      <div class="hero__rule"></div>
      <p class="hero__subtitle">{{ $t('benvenuti.title') }}</p>

      <div class="hero__actions">
        <router-link class="btn btn--solid" :to="{ name: 'contacts' }">
          {{ $t('buttons.prenotazioni') }}
        </router-link>
        <router-link class="btn btn--light" :to="{ name: 'menu' }">
          {{ $t('cards.menu') }}
        </router-link>
      </div>
    </div>

    <div class="hero__scroll" aria-hidden="true">
      <span></span>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  position: relative;
  height: clamp(560px, 88vh, 920px);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  color: #fff;

  &__media {
    position: absolute;
    inset: 0;
    background-image: url("/imgs/photos/PanoramaTodi.png");
    background-size: cover;
    background-position: center;
    transform: scale(1.05);
    animation: heroZoom 14s ease-out forwards;
  }

  &__overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(20, 17, 13, 0.45) 0%,
      rgba(20, 17, 13, 0.25) 45%,
      rgba(20, 17, 13, 0.7) 100%
    );
  }

  &__inner {
    position: relative;
    z-index: 2;
    padding: 0 1.5rem;
    max-width: 900px;
  }

  &__eyebrow {
    font-family: var(--font-ui);
    text-transform: uppercase;
    letter-spacing: 0.42em;
    font-size: 0.8rem;
    font-weight: 400;
    margin-bottom: 1.4rem;
    opacity: 0.9;
    padding-left: 0.42em;
  }

  &__title {
    font-family: var(--font-display);
    font-weight: 500;
    font-size: clamp(3.2rem, 9vw, 7rem);
    line-height: 1;
    letter-spacing: 0.01em;
    color: #fff;
    text-shadow: 0 2px 30px rgba(0, 0, 0, 0.4);
  }

  &__rule {
    width: 70px;
    height: 1px;
    background: rgba(255, 255, 255, 0.6);
    margin: 1.8rem auto;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: -3px;
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
      width: 7px;
      height: 7px;
      background: var(--gold);
    }
  }

  &__subtitle {
    font-family: var(--font-display);
    font-style: italic;
    font-size: clamp(1.4rem, 3vw, 2.1rem);
    font-weight: 400;
    opacity: 0.95;
  }

  &__actions {
    margin-top: 2.6rem;
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  &__scroll {
    position: absolute;
    bottom: 26px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    width: 26px;
    height: 42px;
    border: 1px solid rgba(255, 255, 255, 0.6);
    border-radius: 14px;
    display: flex;
    justify-content: center;

    span {
      width: 3px;
      height: 8px;
      background: #fff;
      border-radius: 2px;
      margin-top: 7px;
      animation: scrollDot 1.8s infinite;
    }
  }
}

@keyframes heroZoom {
  to {
    transform: scale(1);
  }
}

@keyframes scrollDot {
  0% {
    opacity: 0;
    transform: translateY(0);
  }
  40% {
    opacity: 1;
  }
  80% {
    opacity: 0;
    transform: translateY(12px);
  }
  100% {
    opacity: 0;
  }
}

@media screen and (max-width: 768px) {
  .hero {
    height: 90vh;

    &__media {
      background-image: url("/imgs/photos/RestaurantFoto.jpeg");
    }
  }
}
</style>
