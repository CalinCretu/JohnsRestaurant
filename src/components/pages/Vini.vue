<script>
import viniData from '../../data/vini.json';

export default {
  data() {
    return {
      viniData,
    };
  },
  computed: {
    wineSections() {
      return [
        { title: 'Vini Rossi', key: 'vini_rossi' },
        { title: 'Vini Rosati', key: 'vini_rosati' },
        { title: 'Vini Bianchi', key: 'vini_bianchi' },
        { title: 'Prosecco e Spumante', key: 'prosecco_e_spumante' },
      ];
    },
  },
};
</script>

<template>
  <div class="wine" v-if="viniData">
    <header class="wine__head" data-aos="fade-up">
      <p class="eyebrow">{{ $t('header.vini') }}</p>
      <h1 class="wine__title">Lista dei Vini</h1>
      <hr class="rule wine__rule" />
    </header>

    <div class="wine__body container-narrow">
      <!-- Al Calice -->
      <section v-if="viniData.al_calice && viniData.al_calice.length" class="course" data-aos="fade-up">
        <h2 class="course__title">Al Calice</h2>
        <ul class="course__list">
          <li class="wrow" v-for="(v, i) in viniData.al_calice" :key="'calice-' + i">
            <span class="wrow__name">{{ v.name }}</span>
            <span class="wrow__dots" aria-hidden="true"></span>
            <span class="wrow__price">{{ v.price }} &euro;</span>
          </li>
        </ul>
      </section>

      <!-- Vini raggruppati per cantina -->
      <section class="course" v-for="sec in wineSections" :key="sec.key" data-aos="fade-up">
        <h2 class="course__title">{{ sec.title }}</h2>
        <template v-for="(vino, i) in viniData[sec.key]" :key="sec.key + '-' + i">
          <h3
            class="cantina"
            v-if="i === 0 || viniData[sec.key][i - 1].cantina !== vino.cantina"
          >
            {{ vino.cantina }}
          </h3>
          <div class="wrow">
            <span class="wrow__name">{{ vino.name }}</span>
            <span class="wrow__dots" aria-hidden="true"></span>
            <span class="wrow__price">{{ vino.price }} &euro;</span>
          </div>
        </template>
      </section>

      <!-- Birre -->
      <section class="course" data-aos="fade-up">
        <h2 class="course__title">Birre</h2>
        <ul class="course__list">
          <li class="wrow" v-for="(b, i) in viniData.birra" :key="'birra-' + i">
            <span class="wrow__name">{{ b.name }}</span>
            <span class="wrow__dots" aria-hidden="true"></span>
            <span class="wrow__price">{{ b.price }} &euro;</span>
          </li>
        </ul>
      </section>

      <!-- Bevande -->
      <section class="course" data-aos="fade-up">
        <h2 class="course__title">Bevande</h2>
        <ul class="course__list">
          <li class="wrow" v-for="(b, i) in viniData.bevande" :key="'bevanda-' + i">
            <span class="wrow__name">{{ b.name }}</span>
            <span class="wrow__dots" aria-hidden="true"></span>
            <span class="wrow__price">{{ b.price }} &euro;</span>
          </li>
        </ul>
      </section>
    </div>
  </div>

  <div v-else class="loading">
    <p>Caricamento...</p>
    <img src="/imgs/logos/Logo_Johns.jpg" alt="" />
  </div>
</template>

<style lang="scss" scoped>
.wine {
  background: var(--bg);
  padding-bottom: 5rem;

  &__head {
    text-align: center;
    padding: clamp(2.5rem, 6vw, 5rem) 1.5rem 1rem;
  }

  &__title {
    font-family: var(--font-display);
    font-size: clamp(3rem, 8vw, 5rem);
    font-weight: 500;
    margin-top: 0.6rem;
  }

  &__rule {
    margin: 1.4rem auto 0;
  }
}

.course {
  margin-top: 3rem;

  &__title {
    text-align: center;
    font-family: var(--font-display);
    font-size: 2rem;
    font-weight: 500;
    color: var(--ink);
    margin-bottom: 1.4rem;

    &::after {
      content: "";
      display: block;
      width: 40px;
      height: 2px;
      background: var(--gold);
      margin: 0.8rem auto 0;
    }
  }
}

.cantina {
  font-family: var(--font-ui);
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--gold-dark);
  margin: 1.6rem 0 0.4rem;
  padding-bottom: 0.4rem;
  border-bottom: 1px solid var(--line);
}

.wrow {
  display: flex;
  align-items: baseline;
  gap: 0.8rem;
  padding: 0.6rem 0;

  &__name {
    font-family: var(--font-display);
    font-size: 1.25rem;
    color: var(--ink);
  }

  &__dots {
    flex: 1;
    border-bottom: 1px dotted var(--line);
    transform: translateY(-4px);
    min-width: 1.5rem;
  }

  &__price {
    font-family: var(--font-display);
    font-size: 1.2rem;
    color: var(--gold-dark);
    white-space: nowrap;
  }
}

.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 5rem 1rem;
  min-height: 60vh;

  p {
    font-family: var(--font-display);
    font-size: 1.6rem;
    color: var(--muted);
  }

  img {
    width: 200px;
    border-radius: 50%;
    animation: spin 6s infinite linear;
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@media screen and (max-width: 600px) {
  .wrow {
    &__dots {
      display: none;
    }

    &__price {
      margin-left: auto;
    }
  }
}
</style>
