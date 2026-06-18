<script>
import menuData from '../../data/menu.json';

export default {
  data() {
    return {
      menuData,
      sections: [
        { key: 'antipasti', label: 'Antipasti' },
        { key: 'primi', label: 'Primi Piatti' },
        { key: 'secondi', label: 'Secondi Piatti' },
        { key: 'contorni', label: 'Contorni' },
        { key: 'dolci', label: 'Dolci' },
      ],
    };
  },
};
</script>

<template>
  <div class="menu container-print" v-if="menuData">
    <!-- Intestazione pagina -->
    <header class="menu__head" data-aos="fade-up">
      <p class="eyebrow">John's Restaurant</p>
      <h1 class="menu__title">Menù</h1>
      <hr class="rule menu__rule" />
      <p class="menu__intro">{{ $t('menu.paragraph') }}</p>
      <div class="menu__celiac">
        <h3>{{ $t('menu.secondTitle') }}</h3>
        <p>{{ $t('menu.secondParagraph') }}</p>
      </div>
      <p class="menu__sign">Grazie, Chef John Paterson</p>
    </header>

    <!-- Portate -->
    <div class="menu__body container-narrow">
      <section
        class="course"
        v-for="sec in sections"
        :key="sec.key"
        data-aos="fade-up"
      >
        <!-- Titolo + primo piatto restano sempre insieme: in stampa il titolo
             non si separa mai dai suoi piatti (es. "Dolci") -->
        <div class="course__lead">
          <h2 class="course__title">{{ sec.label }}</h2>
          <ul class="course__list">
            <li class="dish dishes-print">
              <div class="dish__info name-desc-print">
                <h3 class="dish__name">{{ menuData[sec.key][0].it }}</h3>
                <p class="dish__en">{{ menuData[sec.key][0].en }}</p>
              </div>
              <span class="dish__dots" aria-hidden="true"></span>
              <span class="dish__price price-print">{{ menuData[sec.key][0].price }} &euro;</span>
            </li>
          </ul>
        </div>

        <!-- Piatti restanti della portata (possono continuare a pagina nuova) -->
        <ul class="course__list">
          <li class="dish dishes-print" v-for="dish in menuData[sec.key].slice(1)" :key="dish.it">
            <div class="dish__info name-desc-print">
              <h3 class="dish__name">{{ dish.it }}</h3>
              <p class="dish__en">{{ dish.en }}</p>
            </div>
            <span class="dish__dots" aria-hidden="true"></span>
            <span class="dish__price price-print">{{ dish.price }} &euro;</span>
          </li>
        </ul>
      </section>

      <div class="menu__more no-print">
        <router-link class="btn btn--ghost" :to="{ name: 'vini' }">{{ $t('header.vini') }}</router-link>
      </div>
    </div>
  </div>

  <div v-else class="loading">
    <p>Caricamento...</p>
    <img src="/imgs/logos/Logo_Johns.jpg" alt="" />
  </div>
</template>

<style lang="scss" scoped>
.menu {
  background: var(--bg);
  padding-bottom: 5rem;

  &__head {
    text-align: center;
    padding: clamp(2.5rem, 6vw, 5rem) 1.5rem 2rem;
    max-width: 760px;
    margin: 0 auto;
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

  &__intro {
    color: var(--muted);
    font-size: 1.1rem;
    line-height: 1.8;
  }

  &__celiac {
    margin-top: 1.6rem;

    h3 {
      font-family: var(--font-display);
      font-size: 1.4rem;
      color: var(--ink);
    }

    p {
      color: var(--muted);
      font-style: italic;
      font-size: 0.98rem;
    }
  }

  &__sign {
    margin-top: 1.8rem;
    font-family: var(--font-display);
    font-style: italic;
    font-size: 1.5rem;
    color: var(--gold-dark);
  }

  &__more {
    text-align: center;
    margin-top: 3rem;
  }
}

.course {
  margin-top: 3.5rem;

  &__title {
    text-align: center;
    font-family: var(--font-display);
    font-size: 2rem;
    font-weight: 500;
    color: var(--ink);
    margin-bottom: 1.8rem;
    position: relative;

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

.dish {
  display: flex;
  align-items: baseline;
  gap: 0.8rem;
  padding: 0.9rem 0;
  border-bottom: 1px solid var(--line);

  &__info {
    flex-shrink: 1;
  }

  &__name {
    font-family: var(--font-display);
    font-size: 1.4rem;
    font-weight: 500;
    color: var(--ink);
    line-height: 1.2;
  }

  &__en {
    color: var(--muted);
    font-style: italic;
    font-size: 0.98rem;
    margin-top: 0.2rem;
  }

  &__dots {
    flex: 1;
    border-bottom: 1px dotted var(--line);
    transform: translateY(-4px);
    min-width: 1.5rem;
  }

  &__price {
    font-family: var(--font-display);
    font-size: 1.35rem;
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
  .dish {
    flex-wrap: wrap;

    &__dots {
      display: none;
    }

    &__price {
      margin-left: auto;
    }
  }
}

@media print {
  .no-print {
    display: none;
  }

  // Sfondo bianco; il margine della pagina lo dà @page (general.scss)
  .menu {
    background: #fff;
    padding: 0;
  }

  .menu__head {
    padding: 0 0 0.5rem;
  }

  // Spaziatura compattata per la stampa
  // I gruppi di portate POSSONO spezzarsi tra le pagine (così gli Antipasti
  // partono già nella prima pagina di presentazione)...
  .course {
    margin-top: 1.6rem;
  }

  .course__title {
    margin-bottom: 1rem;
  }

  // ...ma il titolo non si separa MAI dal suo primo piatto (break-inside è
  // rispettato dai browser, a differenza di break-after)
  .course__lead {
    break-inside: avoid;
  }

  // ...e ogni singolo piatto resta intero (nome IT + traduzione EN + prezzo
  // mai separati tra due pagine)
  .dish {
    padding: 0.45rem 0;
    break-inside: avoid;
  }
}
</style>
