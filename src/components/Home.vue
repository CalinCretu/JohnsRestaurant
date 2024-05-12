<script>
import Hero from './Hero.vue';
import Cards from './Cards.vue';
import ContactsAndHours from './ContactsAndHours.vue';
import { store } from '../store';
import Welcome from './Welcome.vue';
export default {
  name: 'Home',
  components: {
    Hero,
    Cards,
    ContactsAndHours,
    Welcome,
  },
  data() {
    return {
      store: store,
    }
  }
}
</script>

<template>
  <div>
    <Welcome />
  </div>
  <div>
    <ContactsAndHours />
  </div>
  <div>
    <Hero />
  </div>
  <div class="cards-div">
    <Cards />
  </div>

</template>

<style lang="scss" scoped>
.cards-div {
  margin-top: 30px;
}
</style>
