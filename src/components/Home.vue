<script>
import Hero from './Hero.vue';
import Cards from './Cards.vue';
import ContactsAndHours from './ContactsAndHours.vue';
import { store } from '../store';
import Welcome from './Welcome.vue';
import OurStory from './OurStory.vue';
export default {
  name: 'Home',
  components: {
    Hero,
    Cards,
    ContactsAndHours,
    OurStory,
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
  <div>
    <OurStory />
  </div>

</template>

<style lang="scss" scoped></style>
