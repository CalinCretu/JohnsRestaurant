<script>
import { store } from '../store'
export default {
  name: 'HeroCards',
  props: {
    hero_cards: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      store: store,
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
  <div class="container-md">
    <ul class="cards">
      <li class="card-white">
        <router-link class="shadow" :to="{ name: 'menu' }">
          <div class="card-white-header">
            <h3>
              {{ $t('cards.menu') }}
            </h3>
            <p>
              {{ $t('cards.click') }}
            </p>
          </div>
          <div class="image-wrapper">
            <img src="/public/imgs/photos/TagliataAlSangue.png" alt="">
          </div>
        </router-link>
      </li>
      <li class="card-white">
        <router-link class="shadow" :to="{ name: 'vini' }">
          <div class="card-white-header">
            <h3>
              {{ $t('cards.vini') }}
            </h3>
            <p>
              {{ $t('cards.click') }}
            </p>
          </div>
          <div class="image-wrapper">
            <img src="/public/imgs/photos/Vineria.png" alt="">
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.container-md {
  color: var(--content-color);
  margin: 0 auto;


  .cards {
    display: grid;
    grid-template-columns: 1fr 1fr;

    .shadow {
      box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
    }

    .card-white {
      font-size: 35px;
      display: flex;
      flex-direction: column;
      align-items: center;

      .card-white-header {
        background-color: white;

        h3 {
          color: var(--title-color);
          padding-top: 10px;
        }

        p {
          padding-bottom: 15px;
          font-size: 1.2rem;
        }
      }
    }
  }

  .image-wrapper img {
    aspect-ratio: 1/1;
    height: 460px;
    object-fit: cover;
    margin-bottom: -10px;
  }

  @media screen and (max-width: 768px) {

    /* Adjust max-width as needed */
    .cards {
      gap: 10px;

      .image-wrapper img {
        aspect-ratio: 1/1;
        height: 160px;
      }

      .card-white {
        padding-top: 20px;
        font-size: 20px;

        .card-white-header {
          p {
            padding-bottom: 5px;
            font-size: 0.8rem;
          }
        }

        &:nth-child(odd) {
          transform: translateY(-50px);
          /* Move odd cards up */
        }

        &:nth-child(even) {
          transform: translateY(50px);
          /* Move even cards down */
        }
      }
    }
  }
}
</style>
