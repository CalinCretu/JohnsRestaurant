<script>
export default {

  data() {
    return {
      cards: [
        {
          img: "/public/imgs/menus/Capodanno2024.png"
        },
        {
          img: "/public/imgs/menus/CapodannoCena2024.png"
        },
        {
          img: "/public/imgs/menus/MenuAsporto24Dic.png"
        },
        {
          img: "/public/imgs/menus/MenuPasqua.png"
        },
        {
          img: "/public/imgs/menus/MenuSanValentino.png"
        },
        {
          img: "/public/imgs/menus/MenuVigilia.png"
        },
        {
          img: "/public/imgs/menus/PranzoNatale.png"
        },
        {
          img: "/public/imgs/menus/SanVale.png"
        },
        {
          img: "/public/imgs/menus/CenaCapodanno.png"
        },
        {
          img: "/public/imgs/menus/MenuAsporto31Dic.png"
        },
        {
          img: "/public/imgs/menus/MenuAsportoCapodanno.png"
        },
      ]
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
    <div class="description">
      <div class="desc-title">
        <h1>{{ $t('speciali.title') }}</h1>
        <p>{{ $t('speciali.subtitle') }}</p>
      </div>
      <div class="desc-body">
        <p>
          {{ $t('speciali.paragraph') }}
        </p>
      </div>
    </div>
    <ul class="cards">
      <li class="image-wrapper">
        <img src="/public/imgs/menus/Capodanno2024.png" alt="special-menus">
      </li>
      <li class="image-wrapper">
        <img src="/public/imgs/menus/CapodannoCena2024.png" alt="special-menus">
      </li>
      <li class="image-wrapper">
        <img src="/public/imgs/menus/MenuAsporto24Dic.png" alt="special-menus">
      </li>
      <li class="image-wrapper">
        <img src="/public/imgs/menus/MenuPasqua.png" alt="special-menus">
      </li>
      <li class="image-wrapper">
        <img src="/public/imgs/menus/MenuSanValentino.png" alt="special-menus">
      </li>
      <li class="image-wrapper">
        <img src="/public/imgs/menus/MenuVigilia.png" alt="special-menus">
      </li>
      <li class="image-wrapper">
        <img src="/public/imgs/menus/PranzoNatale.png" alt="special-menus">
      </li>
      <li class="image-wrapper">
        <img src="/public/imgs/menus/SanVale.png" alt="special-menus">
      </li>
      <li class="image-wrapper">
        <img src="/public/imgs/menus/CenaCapodanno.png" alt="special-menus">
      </li>
      <li class="image-wrapper">
        <img src="/public/imgs/menus/MenuAsporto31Dic.png" alt="special-menus">
      </li>
      <li class="image-wrapper">
        <img src="/public/imgs/menus/MenuAsportoCapodanno.png" alt="special-menus">
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 10px;

  .desc-title {
    margin: 20px;
    font-size: 22px;
    color: var(--title-color);
    text-transform: uppercase;
    text-align: center;
  }

  .desc-body {
    color: var(--title-color);
    text-align: center;
    font-size: 22px;
    margin-bottom: 20px;
  }

  .cards {
    text-align: center;
    margin: 30px 20px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;
    max-width: 1200px;


    .image-wrapper>* {
      border-radius: 20px;
      box-shadow: 0px 0px 15px 0px black;
    }
  }

  @media screen and (min-width: 768px) {
    .cards {
      margin: 30px 20px;
      grid-template-columns: 1fr 1fr;
      gap: 30px;
    }
  }
}
</style>