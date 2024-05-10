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
          text: 'About Us',
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
        {
          text: 'Gallery',
          href: '#'
        },
        {
          text: 'Contact Us',
          href: '#'
        },
      ],
      icon: '/imgs/lens_icon.svg'
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
    <nav>
      <ul class="nav-items">
        <li class="item" v-for="(item, i) in nav" :key="i"><a :href="item.href">{{ item.text }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.container-lg {
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    max-width: 100px;
  }

  .nav-items {
    color: black;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: 20px;


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
</style>
