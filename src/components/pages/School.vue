<script>
export default {
  name: 'School',
  data() {
    return {
      cards: [
        {
          img: '/imgs/scuola/ScuolaGruppi2.png',
          price: '100',
          note: 'school.note_1',
          title: 'school.card_title_1',
          sub: 'school.card_subtitle_1',
          hours: '12:30 – 16:30',
          text: 'school.card_text_1',
        },
        {
          img: '/imgs/scuola/ScuolaPer2.png',
          price: '150',
          note: 'school.note_2',
          title: 'school.card_title_2',
          sub: 'school.card_subtitle_2',
          hours: '9:00 – 12:00',
          text: 'school.card_text_2',
        },
        {
          img: '/imgs/scuola/ScuolaGruppi8Persone.png',
          price: '200',
          note: 'school.note_3',
          title: 'school.card_title_3',
          sub: 'school.card_subtitle_3',
          hours: '9:00 – 13:00',
          text: 'school.card_text_3',
        },
      ],
    };
  },
};
</script>

<template>
  <section class="school">
    <header class="school__head container-narrow" data-aos="fade-up">
      <p class="eyebrow">Cooking School</p>
      <h1 class="school__title">{{ $t('school.school_title') }}</h1>
      <hr class="rule school__rule" />
      <p class="school__lead">{{ $t('school.school_para_1') }}</p>
      <p class="school__lead">{{ $t('school.school_para_2') }}</p>
    </header>

    <div class="school__video" data-aos="fade-up">
      <iframe
        src="https://www.youtube.com/embed/uVBl0CqQlTQ"
        title="Cooking School"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>

    <div class="school__cards container">
      <article
        class="ecard"
        v-for="(card, i) in cards"
        :key="i"
        data-aos="fade-up"
        :data-aos-delay="i * 120"
      >
        <div class="ecard__media">
          <span class="ecard__note">{{ $t(card.note) }}</span>
          <img :src="card.img" :alt="$t(card.title)" />
          <span class="ecard__price">
            <strong>&euro; {{ card.price }}</strong>
            <em>{{ $t('school.price') }}</em>
          </span>
        </div>
        <div class="ecard__body">
          <h2 class="ecard__title">{{ $t(card.title) }}</h2>
          <p class="ecard__sub">{{ $t(card.sub) }}</p>
          <p class="ecard__hours">{{ card.hours }}</p>
          <hr class="rule ecard__rule" />
          <p class="ecard__text">{{ $t(card.text) }}</p>
        </div>
      </article>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.school {
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
    margin-top: 0.6rem;
  }

  &__rule {
    margin: 1.4rem auto;
  }

  &__lead {
    color: var(--muted);
    font-size: 1.12rem;
    line-height: 1.8;
    margin-bottom: 1rem;
  }

  &__video {
    width: min(820px, 100% - 3rem);
    margin: 0 auto 4rem;
    aspect-ratio: 16 / 9;
    box-shadow: var(--shadow);
    border-radius: 2px;
    overflow: hidden;

    iframe {
      width: 100%;
      height: 100%;
      border: 0;
      display: block;
    }
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
}

.ecard {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 3px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.4s var(--ease), box-shadow 0.4s var(--ease);

  &:hover {
    transform: translateY(-6px);
    box-shadow: var(--shadow);
  }

  &__media {
    position: relative;
    height: 220px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__note,
  &__price {
    position: absolute;
    background: var(--gold);
    color: #fff;
    font-family: var(--font-ui);
  }

  &__note {
    top: 12px;
    left: 12px;
    padding: 0.3rem 0.7rem;
    font-size: 0.72rem;
    letter-spacing: 0.08em;
    border-radius: 2px;
  }

  &__price {
    right: 12px;
    bottom: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.4rem 0.7rem;
    border-radius: 2px;
    line-height: 1.1;

    strong {
      font-size: 1rem;
    }

    em {
      font-style: normal;
      font-size: 0.6rem;
      opacity: 0.9;
    }
  }

  &__body {
    padding: 1.8rem 1.5rem;
    text-align: center;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  &__title {
    font-family: var(--font-display);
    font-size: 1.6rem;
    font-weight: 500;
  }

  &__sub {
    color: var(--gold-dark);
    font-style: italic;
    margin-top: 0.4rem;
  }

  &__hours {
    font-family: var(--font-ui);
    letter-spacing: 0.1em;
    font-size: 0.85rem;
    color: var(--muted);
    margin-top: 0.8rem;
  }

  &__rule {
    margin: 1.2rem auto;
  }

  &__text {
    color: var(--muted);
    font-size: 1rem;
    line-height: 1.7;
  }
}

@media screen and (max-width: 900px) {
  .school__cards {
    grid-template-columns: 1fr;
    max-width: 460px;
    margin-inline: auto;
  }
}
</style>
