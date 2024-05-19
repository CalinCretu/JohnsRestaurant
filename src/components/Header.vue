<script>
export default {
  name: "Header",
  data() {
    return {
      logo: '/imgs/logos/Logo_Johns.jpg',
      nav: [
        {
          text: 'Home',
          name: 'home'
        },
        {
          text: 'Menu',
          name: 'menu'
        },
        {
          text: 'Lista dei Vini',
          name: 'vini'
        },
      ],
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
    <div class="modal" :class="{ 'show': isModalOpen }">
      <div class="modal-dialog">
        <div class="modal-content">
          <!-- Contenuto della modale -->
          <div class="modal-body">
            <nav class="nav-bar-modale" style="color: black;">
              <ul class="nav-items-modale">
                <li @click="closeModal" class="btn-close">
                  <a type="button"><font-awesome-icon icon="xmark" /></a>
                </li>
                <li @click="closeModal"><router-link :to="{ name: 'home' }">Home</router-link></li>
                <li @click="closeModal"><router-link :to="{ name: 'menu' }">Menu</router-link></li>
                <li @click="closeModal"><router-link :to="{ name: 'vini' }">Vini</router-link></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <!--MODALE-->
    <div class="logo">
      <router-link :to="{ name: 'home' }"><img class="logo-image" :src="logo" alt=""></router-link>
    </div>
    <nav class="nav-bar">
      <ul class="nav-items">
        <li><router-link :to="{ name: 'home' }">Home</router-link></li>
        <li><router-link :to="{ name: 'menu' }">Menu</router-link></li>
        <li><router-link :to="{ name: 'vini' }">Vini</router-link></li>
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
        <a href="https://www.instagram.com/chef.johnpaterson/?hl=en"><font-awesome-icon 
            icon="fa-brands fa-instagram" 
            style= "color: white;  
            background: #f09433; 
            background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); 
            background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
            background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
            padding: 0px 1px;
            border-radius: 8px;" />
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/johnpatersonchef/"><font-awesome-icon 
          style="color: #0000ff;
          padding: 0px 1px;"
          icon="fa-brands fa-square-facebook" />
        </a>
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
    right: 0;
    z-index: 1050;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    outline: 0;
    transform: translate(0px, 0px);
  }

  .modal.show {
    display: block;
  }

  .modal-dialog {
    position: relative;
    width: auto;
    margin: 10px;
  }

  .modal-content {
    background-color: #b6ccd7;
    border: 1px solid rgba(0, 0, 0, .2);
    border-radius: .3rem;
    box-shadow: 0 3px 9px rgba(0, 0, 0, .5);
  }

  .modal-body {
    position: relative;
    padding: 1rem;

    .nav-bar-modale {
      .nav-items-modale {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-size: 30px;
        gap: 20px;

        .btn-close {
          border: none !important;
        }

        .btn-close:hover {
          color: white;
        }

        li:not(:first-child) {
          box-shadow: 0px 4px 5px -5px white;

          &:active {
            transform: scale(0.9);
          }

          &:hover {
            color: white;
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
    color: black;
    font-size: 30px;

    :hover {
      color: white;
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
    }
  }

  .icons {
    display: flex;
    justify-content: center;
    gap: 20px;
    font-size: 30px;
    color: black;

    :hover {
      color: white;
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
      color: white;
    }

    .nav-items {
      color: black;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      gap: 20px;
      font-size: 25px;

      :hover {
        color: white;
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
