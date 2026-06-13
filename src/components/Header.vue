<script>
export default {
  name: 'Header',
  data() {
    return {
      logo: '/imgs/logos/Logo_Johns.jpg',
      isModalOpen: false,
    };
  },
  watch: {
    // Blocca lo scroll della pagina mentre il menu mobile è aperto
    isModalOpen(open) {
      document.body.style.overflow = open ? 'hidden' : '';
    },
  },
  unmounted() {
    document.body.style.overflow = '';
  },
  methods: {
    toggleLanguage() {
      this.$i18n.locale = this.$i18n.locale === 'it' ? 'en' : 'it';
    },
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
  },
};
</script>

<template>
  <div class="bar">
    <!-- Logo -->
    <div class="bar__logo">
      <router-link :to="{ name: 'home' }">
        <img class="bar__logo-img" :src="logo" alt="John's Restaurant" />
      </router-link>
    </div>

    <!-- Navigazione desktop -->
    <nav class="bar__nav">
      <router-link :to="{ name: 'home' }">{{ $t('header.home') }}</router-link>
      <router-link :to="{ name: 'menu' }">{{ $t('header.menu') }}</router-link>
      <router-link :to="{ name: 'vini' }">{{ $t('header.vini') }}</router-link>
      <router-link :to="{ name: 'specialmenus' }">{{ $t('header.speciali') }}</router-link>
      <router-link :to="{ name: 'school' }">{{ $t('header.scuola') }}</router-link>
    </nav>

    <!-- Azioni desktop -->
    <div class="bar__actions">
      <a class="bar__icon" href="https://www.instagram.com/chef.johnpaterson/?hl=en" target="_blank" rel="noopener" aria-label="Instagram">
        <font-awesome-icon icon="fa-brands fa-instagram" />
      </a>
      <a class="bar__icon" href="https://www.facebook.com/johnpatersonchef/" target="_blank" rel="noopener" aria-label="Facebook">
        <font-awesome-icon icon="fa-brands fa-square-facebook" />
      </a>
      <button class="bar__lang" @click="toggleLanguage">{{ $i18n.locale === 'it' ? 'ITA' : 'ENG' }}</button>
      <a class="bar__login" href="/admin/index.html" title="Gestione menù (area riservata)">Login</a>
    </div>

    <!-- Burger mobile -->
    <button class="bar__burger" @click="openModal" aria-label="Menu">
      <font-awesome-icon icon="bars" />
    </button>

    <!-- Pannello mobile laterale, vetro liquido (Teleport nel body: esce dall'header con backdrop-filter) -->
    <Teleport to="body">
      <div class="m-menu" :class="{ show: isModalOpen }">
        <div class="m-menu__backdrop" @click="closeModal"></div>
        <aside class="m-menu__panel">
          <button class="m-menu__close" @click="closeModal" aria-label="Chiudi">
            <font-awesome-icon icon="xmark" />
          </button>
          <nav class="m-menu__nav">
            <router-link :to="{ name: 'home' }" @click="closeModal">{{ $t('header.home') }}</router-link>
            <router-link :to="{ name: 'menu' }" @click="closeModal">{{ $t('header.menu') }}</router-link>
            <router-link :to="{ name: 'vini' }" @click="closeModal">{{ $t('header.vini') }}</router-link>
            <router-link :to="{ name: 'specialmenus' }" @click="closeModal">{{ $t('header.speciali') }}</router-link>
            <router-link :to="{ name: 'school' }" @click="closeModal">{{ $t('header.scuola_button') }}</router-link>
          </nav>
          <div class="m-menu__footer">
            <router-link class="m-menu__cta" :to="{ name: 'contacts' }" @click="closeModal">
              {{ $t('buttons.prenotazioni') }}
            </router-link>
            <button class="m-menu__lang" @click="toggleLanguage">{{ $i18n.locale === 'it' ? 'ITALIANO' : 'ENGLISH' }}</button>
            <a class="m-menu__login" href="/admin/index.html" @click="closeModal">Login</a>
          </div>
        </aside>
      </div>
    </Teleport>
  </div>
</template>

<style lang="scss" scoped>
.bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  width: min(1240px, 100% - 2.5rem);
  margin-inline: auto;
  padding: 0.9rem 0;

  &__logo-img {
    width: 70px;
    height: 70px;
    object-fit: cover;
    border-radius: 50%;
    border: 1px solid var(--gold);
    transition: width 0.3s var(--ease), height 0.3s var(--ease);
  }

  &__nav {
    display: flex;
    align-items: center;
    gap: 2rem;
    font-family: var(--font-ui);
    text-transform: uppercase;
    letter-spacing: 0.16em;
    font-size: 0.78rem;
    font-weight: 400;

    a {
      color: var(--ink);
      position: relative;
      padding-bottom: 4px;

      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 0;
        height: 1px;
        background: var(--gold);
        transition: width 0.35s var(--ease);
      }

      &:hover,
      &.router-link-exact-active {
        color: var(--gold-dark);

        &::after {
          width: 100%;
        }
      }
    }
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }

  &__icon {
    color: var(--ink);
    font-size: 1.2rem;

    &:hover {
      color: var(--gold);
    }
  }

  &__lang {
    font-family: var(--font-ui);
    font-size: 0.78rem;
    letter-spacing: 0.12em;
    color: var(--ink);

    &:hover {
      color: var(--gold);
    }
  }

  &__login {
    font-family: var(--font-ui);
    text-transform: uppercase;
    letter-spacing: 0.16em;
    font-size: 0.72rem;
    color: var(--ink);
    border: 1px solid var(--gold);
    border-radius: 2px;
    padding: 0.5rem 1.1rem;
    transition: all 0.3s var(--ease);

    &:hover {
      background: var(--gold);
      color: #fff;
    }
  }

  &__burger {
    display: none;
    font-size: 1.6rem;
    color: var(--ink);
  }
}

// Header ridotto allo scroll (la classe .small è sul wrapper in App.vue)
.header.small .bar {
  padding: 0.5rem 0;

  .bar__logo-img {
    width: 52px;
    height: 52px;
  }
}

// ---------- Menu mobile ----------
.m-menu {
  position: fixed;
  inset: 0;
  z-index: 1050;
  visibility: hidden;
  transition: visibility 0s linear 0.45s;

  &.show {
    visibility: visible;
    transition-delay: 0s;
  }

  // Velo scuro dietro al pannello
  &__backdrop {
    position: absolute;
    inset: 0;
    background: rgba(20, 17, 13, 0.3);
    -webkit-backdrop-filter: blur(2px);
    backdrop-filter: blur(2px);
    opacity: 0;
    transition: opacity 0.45s var(--ease);
  }

  &.show &__backdrop {
    opacity: 1;
  }

  // Pannello laterale in vetro liquido (frosted glass stile iOS)
  &__panel {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: min(80vw, 360px);
    padding: 5rem 2rem 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2.5rem;

    background: rgba(250, 246, 236, 0.6);
    -webkit-backdrop-filter: blur(26px) saturate(180%);
    backdrop-filter: blur(26px) saturate(180%);
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    box-shadow: -24px 0 60px -24px rgba(0, 0, 0, 0.45);

    transform: translateX(100%);
    transition: transform 0.45s var(--ease);
  }

  &.show &__panel {
    transform: translateX(0);
  }

  &__close {
    position: absolute;
    top: 1.3rem;
    right: 1.4rem;
    font-size: 1.7rem;
    color: var(--ink);
  }

  &__nav {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.4rem;
    margin-top: 0.5rem;

    a {
      font-family: var(--font-display);
      font-size: 1.9rem;
      color: var(--ink);

      &:hover,
      &.router-link-exact-active {
        color: var(--gold-dark);
      }
    }
  }

  &__footer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.2rem;
  }

  &__cta {
    font-family: var(--font-ui);
    text-transform: uppercase;
    letter-spacing: 0.18em;
    font-size: 0.82rem;
    color: #fff;
    background: var(--gold);
    border-radius: 2px;
    padding: 0.9rem 2.4rem;
    transition: background 0.3s var(--ease);

    &:hover {
      background: var(--gold-dark);
    }
  }

  &__lang {
    font-family: var(--font-ui);
    letter-spacing: 0.2em;
    font-size: 0.8rem;
    color: var(--muted);
  }

  &__login {
    font-family: var(--font-ui);
    text-transform: uppercase;
    letter-spacing: 0.18em;
    font-size: 0.78rem;
    color: var(--ink);
    border: 1px solid var(--gold);
    border-radius: 2px;
    padding: 0.7rem 1.8rem;

    &:hover {
      background: var(--gold);
      color: #fff;
    }
  }
}

@media screen and (max-width: 900px) {
  .bar {
    padding: 0.55rem 0;
  }

  .bar__logo-img {
    width: 52px;
    height: 52px;
  }

  .bar__nav {
    display: none;
  }

  .bar__actions {
    display: none;
  }

  .bar__burger {
    display: block;
  }
}
</style>
