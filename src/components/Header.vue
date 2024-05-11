<script>
import Dropdown from './Dropdown.vue';
export default {
  components: {

  },
  name: "Header",
  data() {
    return {
      toggle: false,
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
    }
  }
}
</script>

<template>
  <div class="container-lg">
    <div class="logo">
      <a href="#">
        <img class="logo-image" :src="logo" alt="">
      </a>
    </div>
    <nav class="nav-bar">
      <ul class="nav-items">
        <li class="item" v-for="( item, i ) in  nav " :key="i"><a :href="item.href">{{ item.text }}</a>
        </li>
      </ul>
      <ul class="icons">
        <li><a href="https://www.instagram.com/johnsrestauranttodi/?hl=en"><font-awesome-icon
              icon="fa-brands fa-instagram" /></a></li>
        <li><a href="https://www.facebook.com/johnpatersonchef/"><font-awesome-icon icon="fa-brands fa-facebook" /></a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.container-lg {
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    max-width: 100px;
  }

  .nav-bar {
    display: flex;
    gap: 20px;

    .icons {
      display: flex;
      gap: 20px;
      font-size: 25px;
      color: black;

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
