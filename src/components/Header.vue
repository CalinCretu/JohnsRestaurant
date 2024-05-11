<script>
export default {
  name: "Header",
  data() {
    return {
      logo: '/imgs/logos/Logo_small.png',
      nav: [
        {
          text: 'Home',
          href: '#'
        },
        {
          text: 'Menu',
          icon: '/imgs/dropdown_icon.svg',
          href: '#'
        },
        {
          text: 'Lista dei Vini',
          href: '#'
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
      <a href="#">
        <img class="logo-image" :src="logo" alt="">
      </a>
    </div>
    <nav class="nav-bar">
      <ul class="nav-items">
        <li class="item" v-for="( item, i ) in  nav " :key="i">
          <a :href="item.href">{{ item.text }}</a>
        </li>
      </ul>
      <router-link :to="{ name: 'menu' }">Menu</router-link>
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
    }
  }

  .logo {
    max-width: 100px;
    transition: all 0.3s ease;
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

      .item {
        display: flex;
        align-items: center;
        margin: 0 10px;
        line-height: 1.5rem;
      }

      .item:hover {
        color: white;
      }
    }
  }
}
</style>
