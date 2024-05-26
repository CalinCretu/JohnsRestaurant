<!--
    Scuola di cucina
    Titolo -> Paragrafo -> Cards

      3 tipologie di corsi:
        9-12 min 2 persone 150 euro a testa
        10-14 min 4 persone 200 euro a testa, ma con pranzo incluso
        12:30-16:30 max 20 persone 100 euro a persona: Dimostrazione preparazione del pranzo e comprende: aprerivivo di benvenuto con antipasti, primo, secondo e dolce (vino incluso)
-->
<script>
export default {

  data() {
    return {
    }
  },
  methods: {
    toggleLanguage() {
      const newLocale = this.$i18n.locale === 'it' ? 'en' : 'it';
      this.$i18n.locale = newLocale;
    }
  }
}
</script>

<template>

  <div class="container">
    <h1 class="school-title">
      {{ $t('school.school_title') }}
    </h1>
    <p class="school-paragraph">
      {{ $t('school.school_para_1') }}
    </p>
    <p class="school-paragraph">
      {{ $t('school.school_para_2') }}
    </p>
    <ul class="school-cards">
      <li class="cards_item">
        <div class="card">
          <div class="card_image">
            <span class="note">
              {{ $t('school.note_1') }}
            </span>
            <img class="group-img" src="../../../public/imgs/scuola/ScuolaGruppi2.png" alt="Group Cooking School" />
            <span class="card_price">
              <span>&euro; 100</span>
              <p class="price-suffix">{{ $t('school.price') }}</p>
            </span>
          </div>
          <div class="card_content">
            <h2 class="card_title">
              {{ $t('school.card_title_1') }}
            </h2>
            <h3>
              {{ $t('school.card_subtitle_1') }}
            </h3>
            <div class="card_text">
              <p>12:30 - 16:30
              </p>
              <hr />
              <p>
                {{ $t('school.card_text_1') }}
              </p>
            </div>
          </div>
        </div>
      </li>

      <li class="cards_item">
        <div class="card">
          <div class="card_image">
            <span class="note">
              {{ $t('school.note_2') }}
            </span>
            <img src="../../../public/imgs/scuola/ScuolaPer2.png" alt="Scuola di Cucina per 2 Persone" />
            <span class="card_price">
              <span>&euro; 150</span>
              <p class="price-suffix">{{ $t('school.price') }}</p>
            </span>
          </div>
          <div class="card_content">
            <h2 class="card_title">
              {{ $t('school.card_title_2') }}
            </h2>
            <h3>
              {{ $t('school.card_subtitle_2') }}
            </h3>
            <div class="card_text">
              <p>9:00 - 12:00</p>
              <hr />
              <p>
                {{ $t('school.card_text_2') }}
              </p>
            </div>
          </div>
        </div>
      </li>

      <li class="cards_item">
        <div class="card">
          <div class="card_image">
            <span class="note">
              {{ $t('school.note_3') }}
            </span>
            <img src="../../../public/imgs/scuola/ScuolaGruppi8Persone.png"
              alt="A side view of a plate of figs and berries." />
            <span class="card_price">
              <span>&euro; 200</span>
              <p class="price-suffix">{{ $t('school.price') }}</p>
            </span>
          </div>
          <div class="card_content">
            <h2 class="card_title">
              {{ $t('school.card_title_3') }}
            </h2>
            <h3>
              {{ $t('school.card_subtitle_3') }}
            </h3>
            <div class="card_text">
              <p>9:00 - 13:00
              </p>
              <hr />
              <p>
                {{ $t('school.card_text_3') }}
              </p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>

</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 0px 10px 60px 10px;
  text-align: center;

  .school-title {
    font-size: 60px;
    color: var(--title-color);
    margin-top: 60px;
  }

  .card {
    box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  }

  .school-paragraph {
    color: var(--title-color);
    text-align: center;
    font-size: 20px;
  }

  .school-cards {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 40px;

    .card_content {
      background-color: white;
      padding: 5px;
    }

    .card_text p {
      margin: 10px 0px;
      font-size: 18px;
    }

    .cards_item {
      display: flex;
    }

    .card_image {
      position: relative;
      max-height: 290px;

      .group-img {
        height: 200px;
      }

    }

    .card_image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .card_price {
      position: absolute;
      bottom: 8px;
      right: 8px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 60px;
      height: 40px;
      border-radius: 0.25rem;
      background-color: #c89b3f;
      font-size: 18px;
      font-weight: 700;
    }

    .card_price span {
      font-size: 16px;
      font-weight: 700;
      margin-top: -2px;
    }

    .price-suffix {
      font-size: 12px;
      font-weight: 500;
    }

    .note {
      position: absolute;
      top: 8px;
      left: 8px;
      padding: 4px 8px;
      border-radius: 0.25rem;
      background-color: #c89b3f;
      font-size: 14px;
      font-weight: 700;
    }
  }
}

@media screen and (min-width: 768px) {

  .container {
    height: 100vh;
    font-size: 18px;

    .school-paragraph {
      font-size: 22px;
    }

    .card {
      background-color: white;
      border-radius: 0.25rem;
      box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
      display: flex;
      flex-direction: column;
      overflow: hidden;

      .note {
        font-size: 18px;
      }

      .card_title {
        font-size: 28px;
      }

      .card_price {
        font-size: 20px;
      }

      .card_image {
        max-height: 200px;
      }
    }

    .school-cards {
      padding: 30px 0px;
      max-width: 1200px;
      display: flex;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }

    .card_content {
      position: relative;
      padding: 16px 12px 32px 24px;
      margin: 16px 8px 8px 0;

      .card_text p {
        font-size: 18px;
      }
    }

    .card_content::-webkit-scrollbar-track {
      box-shadow: 0;
      border-radius: 0;
    }

    .card_content::-webkit-scrollbar-thumb {
      background: #c89b3f;
      border-radius: 15px;
    }

    .card_title {
      position: relative;
      margin: 0 0 24px;
      padding-bottom: 10px;
      text-align: center;
      font-size: 20px;
      font-weight: 700;
    }

    .card_title::after {
      position: absolute;
      display: block;
      width: 50px;
      height: 2px;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      background-color: #c89b3f;
      content: "";
    }

    hr {
      margin: 24px auto;
      width: 50px;
      border-top: 2px solid #c89b3f;
    }

    .card_text p {
      margin: 0 0 24px;
      font-size: 14px;
      line-height: 1.5;
    }

    .card_text p:last-child {
      margin: 0;
    }
  }
}
</style>