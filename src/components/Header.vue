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
      isHeaderSmall: false
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
    }
  }
}
</script>

<template>
  <div class="container-lg" :class="{ 'small': isHeaderSmall }">
    <div class="logo">
      <router-link :to="{ name: 'home' }"><img class="logo-image" :src="logo" alt=""></router-link>
    </div>
    <nav class="nav-bar">
      <ul class="nav-items">
        <li><router-link :to="{ name: 'home' }">Home</router-link></li>
        <li><router-link :to="{ name: 'menu' }">Menu</router-link></li>
        <li><router-link :to="{ name: 'vini' }">Lista dei vini</router-link></li>
      </ul>
      <ul class="icons">
        <li>
          <a
            href="https://www.google.it/maps/place/John%E2%80%99s+Restaurant/@42.7834422,12.4249516,16.42z/data=!4m6!3m5!1s0x132ec190cb6c3913:0xab80f6745af94a36!8m2!3d42.7835275!4d12.4260127!16s%2Fg%2F11jvpn05d4?entry=ttu"><font-awesome-icon
              icon="location-dot" class="location-icon" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/johnsrestauranttodi/?hl=en"><font-awesome-icon
              icon="fa-brands fa-instagram" />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/johnpatersonchef/"><font-awesome-icon icon="fa-brands fa-facebook" />
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.container-lg {
  padding: 10px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;

  &.small {
    padding: 5px 0px;

    .logo {
      max-width: 50px;
      border-radius: 50%;
    }
  }

  .logo {
    max-width: 100px;
    transition: all 0.3s ease;

    .logo-image {
      border-radius: 50%;
    }
  }

  .nav-bar {
    display: flex;
    gap: 20px;
    transition: all 0.3s ease;

    .icons {
      display: flex;
      gap: 20px;
      font-size: 25px;
      color: black;

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

      li:hover {
        color: white;
      }
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
}
</style>
