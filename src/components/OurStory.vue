<script>
export default {
  name: 'OurStory',
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
    <div class="title">
      {{ $t('storia.title') }}
    </div>
    <div class="cards">
      <div class="text-card">
        <p v-html="$t('storia.paragraph')"></p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-md {
  padding-top: -30px;
  color: black;
  text-transform: none;
  font-size: 25px;

  .cards {

    font-size: 20px;
    margin-top: 30px;

    .text-card {
      text-align: center;
    }

    .text-card p {
      margin-bottom: 15px;
    }
  }

  .title {
    color: white;
  }

  @media screen and (max-width: 768px) {
    .title {
      font-size: 30px;
    }

    .container-md {
      font-size: 18px;
    }

    .cards {

      .text-card {
        text-align: justify;
        margin-bottom: 20px;
      }
    }
  }
}
</style>