<script>
export default {
  name: "Header",
  data() {
    return {
      logo: '/imgs/logos/Logo_Johns.jpg',
      isHeaderSmall: false,
      isModalOpen: false
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    toggleLanguage() {
      const newLocale = this.$i18n.locale === 'it' ? 'en' : 'it';
      this.$i18n.locale = newLocale;
    },
    handleScroll() {
      this.isHeaderSmall = window.scrollY > 0;
    },
    openModal() {
      this.isModalOpen = true; // Apri la modale
    },
    closeModal() {
      this.isModalOpen = false; // Chiudi la modale
    }
  }
}
</script>

<template>
  <div class="container-lg" :class="{ 'small': isHeaderSmall }">
    <!--MODALE-->
    <transition name="fade" appear>
      <div class="modal" :class="{ 'show': isModalOpen }">
        <div class="modal-dialog">
          <div class="modal-content">
            <!-- Contenuto della modale -->
            <div class="modal-body">
              <nav class="nav-bar-modale" style="color: black;">
                <ul class="nav-items-modale">
                  <li @click="closeModal"><router-link :to="{ name: 'home' }">{{ $t('header.home') }}</router-link></li>
                  <router-link :to="{ name: 'menu' }">
                    <li @click="closeModal">{{ $t('header.menu') }}</li>
                  </router-link>
                  <router-link :to="{ name: 'vini' }">
                    <li @click="closeModal">{{ $t('header.vini') }}</li>
                  </router-link>
                  <router-link :to="{ name: 'specialmenus' }">
                    <li @click="closeModal">{{ $t('header.speciali') }}</li>
                  </router-link>
                  <router-link :to="{ name: 'school' }">
                    <li @click="closeModal">{{ $t('header.scuola_button') }}
                    </li>
                  </router-link>
                  <li @click="closeModal" class="btn-close">
                    <a type="button"><font-awesome-icon icon="xmark" /></a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <!--MODALE-->
    <div class="logo">
      <router-link :to="{ name: 'home' }"><img class="logo-image" :src="logo" alt=""></router-link>
    </div>
    <nav class="nav-bar">
      <ul class="nav-items">
        <li><router-link :to="{ name: 'home' }">{{ $t('header.home') }}</router-link></li>
        <li><router-link :to="{ name: 'menu' }">{{ $t('header.menu') }}</router-link></li>
        <li><router-link :to="{ name: 'vini' }">{{ $t('header.vini') }}</router-link></li>
        <li><router-link :to="{ name: 'specialmenus' }">{{ $t('header.speciali')
            }}</router-link></li>
        <li><router-link :to="{ name: 'school' }">{{ $t('header.scuola') }}</router-link></li>
      </ul>
    </nav>
    <ul class="icons">
      <li>
        <a
          href="https://www.google.it/maps/place/John%E2%80%99s+Restaurant/@42.7834422,12.4249516,16.42z/data=!4m6!3m5!1s0x132ec190cb6c3913:0xab80f6745af94a36!8m2!3d42.7835275!4d12.4260127!16s%2Fg%2F11jvpn05d4?entry=ttu"><font-awesome-icon
            icon="location-dot" class="location-icon" />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/chef.johnpaterson/?hl=en"><font-awesome-icon icon="fa-brands fa-instagram" />
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/johnpatersonchef/"><font-awesome-icon icon="fa-brands fa-square-facebook" />
        </a>
      </li>
      <li class="lang">
        <!--PULSANTE LINGUA-->
        <button class="lang-button" @click="toggleLanguage">
          <span v-if="$i18n.locale === 'it'">
            <!-- Italian -->
            ITA
          </span>
          <span v-else>
            <!-- English -->
            ENG
          </span>
        </button>
      </li>
    </ul>
    <div class="burger" @click="openModal">
      <font-awesome-icon icon="bars" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-lg {
  padding: 10px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s ease;

  .modal {
    margin: -10px -10px;
    display: none;
    position: fixed;
    top: 0;
    z-index: 1050;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    outline: 0;
  }

  .modal.show {
    display: block;
    transform: translate(0px, 10%);
    opacity: 1;
  }

  .modal-dialog {
    position: relative;
    width: auto;
    margin: 10px;
  }

  .modal-content {
    background-color: var(--background-color);
    border: 1px solid rgba(0, 0, 0, .2);
    border-radius: .3rem;
    box-shadow: 0 3px 9px rgba(0, 0, 0, .5);
  }

  .modal-body {
    position: relative;
    padding: 1rem;

    .nav-bar-modale {
      .nav-items-modale {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        font-size: 30px;
        gap: 10px;

        li {
          align-self: center;
          border-radius: 10px;
          aspect-ratio: 1/1;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--dark-bg-color);
        }

        li {
          box-shadow: 0 10px 20px -7px rgba(0, 0, 0, 0.25);

          &:active {
            transform: scale(0.9);
          }

          &:hover {
            color: black;
          }
        }
      }
    }
  }

  &.small {
    padding: 5px 10px;

    .logo {
      max-width: 50px;
      border-radius: 50%;
    }
  }

  .burger {
    display: none;
    color: var(--title-color);
    font-size: 30px;

    :hover {
      color: black;
    }
  }

  .logo {
    max-width: 100px;
    transition: all 0.3s ease;

    &:active {
      transform: scale(0.9);
    }

    .logo-image {
      border-radius: 50%;
      border: 1px solid var(--title-color);
    }
  }

  .icons {
    display: flex;
    justify-content: center;
    gap: 20px;
    font-size: 30px;
    color: var(--title-color);

    .lang {
      display: flex;
      align-items: center;

      .lang-button {
        border: none;
        background-color: transparent;
        cursor: pointer;
        width: 30px;
        font-size: 1.4rem;
      }
    }


    :hover {
      color: black;
    }

    .location-icon {
      animation: shake 0.5s infinite alternate; // Applica l'animazione CSS
    }

    @keyframes shake {
      0% {
        transform: translateX(0px) translateY(0px);
      }

      100% {
        transform: translateX(0px) translateY(-3px); // Oscilla l'icona da sinistra a destra
      }
    }
  }

  .nav-bar {
    display: flex;
    gap: 20px;
    transition: all 0.3s ease;

    li:hover {
      color: black;
    }

    .nav-items {
      color: var(--title-color);
      text-transform: uppercase;
      display: flex;
      align-items: center;
      gap: 20px;
      font-size: 25px;

      :hover {
        color: black;
      }

      .item {
        display: flex;
        align-items: center;
        margin: 0 10px;
        line-height: 1.5rem;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .container-lg.small {
      padding: 10px 20px;
    }

    .nav-bar {
      display: none;
    }

    .logo {
      width: 50px;
    }

    .burger {
      display: block;
    }
  }
}
</style>
