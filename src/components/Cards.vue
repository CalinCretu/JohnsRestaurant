<script>
export default {
  name: 'CuisineCards',
};
</script>

<template>
  <section class="cuisine">
    <div class="container">
      <div class="cuisine__head" data-aos="fade-up">
        <p class="eyebrow">{{ $t('home.cuisine_eyebrow') }}</p>
        <h2 class="section-title">{{ $t('home.cuisine_title') }}</h2>
        <p class="cuisine__text">{{ $t('home.cuisine_text') }}</p>
      </div>

      <div class="cuisine__cards">
        <router-link class="feature" :to="{ name: 'menu' }" data-aos="fade-up">
          <img class="feature__img" src="/imgs/photos/TagliataAlSangue.png" alt="" />
          <div class="feature__overlay"></div>
          <div class="feature__body">
            <h3 class="feature__title">{{ $t('cards.menu') }}</h3>
            <span class="feature__link">{{ $t('cards.click') }}</span>
          </div>
        </router-link>

        <router-link class="feature" :to="{ name: 'vini' }" data-aos="fade-up" data-aos-delay="120">
          <img class="feature__img" src="/imgs/photos/Vineria.png" alt="" />
          <div class="feature__overlay"></div>
          <div class="feature__body">
            <h3 class="feature__title">{{ $t('cards.vini') }}</h3>
            <span class="feature__link">{{ $t('cards.click') }}</span>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.cuisine {
  padding: clamp(4rem, 9vw, 8rem) 0;
  background: var(--bg);

  &__head {
    text-align: center;
    max-width: 640px;
    margin: 0 auto 3.5rem;

    .eyebrow {
      margin-bottom: 0.8rem;
    }
  }

  &__text {
    margin-top: 1.4rem;
    color: var(--muted);
    font-size: 1.15rem;
  }

  &__cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.6rem;
  }
}

.feature {
  position: relative;
  display: block;
  height: 460px;
  overflow: hidden;
  border-radius: 2px;
  box-shadow: var(--shadow);

  &__img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 1.4s var(--ease);
  }

  &__overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(20, 17, 13, 0.1) 0%,
      rgba(20, 17, 13, 0.65) 100%
    );
    transition: background 0.5s var(--ease);
  }

  &__body {
    position: absolute;
    inset: auto 0 0 0;
    z-index: 2;
    padding: 2.4rem;
    text-align: center;
    color: #fff;
  }

  &__title {
    font-family: var(--font-display);
    font-size: 2.6rem;
    font-weight: 500;
    color: #fff;
  }

  &__link {
    display: inline-block;
    margin-top: 0.6rem;
    font-family: var(--font-ui);
    text-transform: uppercase;
    letter-spacing: 0.24em;
    font-size: 0.72rem;
    color: rgba(255, 255, 255, 0.85);
    border-bottom: 1px solid var(--gold);
    padding-bottom: 4px;
  }

  &:hover {
    .feature__img {
      transform: scale(1.07);
    }

    .feature__overlay {
      background: linear-gradient(
        180deg,
        rgba(20, 17, 13, 0.2) 0%,
        rgba(20, 17, 13, 0.78) 100%
      );
    }
  }
}

@media screen and (max-width: 768px) {
  .cuisine__cards {
    grid-template-columns: 1fr;
  }

  .feature {
    height: 340px;

    &__title {
      font-size: 2rem;
    }
  }
}
</style>
