<script>
export default {
  name: 'OurStory',
};
</script>

<template>
  <section class="story">
    <div class="story__grid container">
      <div class="story__media" data-aos="fade-right">
        <img src="/imgs/photos/RestaurantFoto.jpeg" alt="John's Restaurant, Todi" />
        <div class="story__badge">
          <span>Est.</span>
          <strong>Todi</strong>
        </div>
      </div>

      <div class="story__content" data-aos="fade-left">
        <p class="eyebrow">Chef John Paterson</p>
        <h2 class="section-title">{{ $t('storia.title') }}</h2>
        <hr class="rule story__rule" />
        <p class="story__text" v-html="$t('storia.paragraph')"></p>
        <p class="story__sign">John Paterson</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.story {
  padding: clamp(4rem, 9vw, 8rem) 0;
  background: var(--bg);

  &__grid {
    display: grid;
    grid-template-columns: 1fr 1.1fr;
    gap: clamp(2rem, 5vw, 5rem);
    align-items: center;
  }

  &__media {
    position: relative;

    img {
      width: 100%;
      height: 560px;
      object-fit: cover;
      border-radius: 2px;
      box-shadow: var(--shadow);
    }
  }

  &__badge {
    position: absolute;
    bottom: -28px;
    right: -22px;
    background: var(--gold);
    color: #fff;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: var(--shadow);

    span {
      font-family: var(--font-ui);
      text-transform: uppercase;
      letter-spacing: 0.2em;
      font-size: 0.65rem;
    }

    strong {
      font-family: var(--font-display);
      font-size: 1.7rem;
      font-weight: 500;
    }
  }

  &__content {
    .eyebrow {
      margin-bottom: 1rem;
    }
  }

  &__rule {
    margin: 1.6rem 0;
  }

  &__text {
    color: var(--muted);
    font-size: 1.18rem;
    line-height: 1.85;
    text-align: justify;
  }

  &__sign {
    margin-top: 1.6rem;
    font-family: var(--font-display);
    font-style: italic;
    font-size: 2rem;
    color: var(--ink);
  }
}

@media screen and (max-width: 900px) {
  .story {
    &__grid {
      grid-template-columns: 1fr;
      gap: 3rem;
    }

    &__media img {
      height: 380px;
    }

    &__badge {
      width: 92px;
      height: 92px;
      right: 16px;
      bottom: -20px;

      strong {
        font-size: 1.3rem;
      }
    }

    &__text {
      text-align: left;
    }
  }
}
</style>
