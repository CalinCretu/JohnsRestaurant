<script>
import Hero from './Hero.vue';
import Cards from './Cards.vue';
import ContactsAndHours from './ContactsAndHours.vue';
import Welcome from './Welcome.vue';
import OurStory from './OurStory.vue';
import Testimonials from './Testimonials.vue';

export default {
  name: 'Home',
  components: {
    Hero,
    Cards,
    ContactsAndHours,
    OurStory,
    Welcome,
    Testimonials,
  },
};
</script>

<template>
  <div class="home">
    <Welcome />
    <OurStory />
    <Hero />
    <Cards />
    <Testimonials />
    <ContactsAndHours />
  </div>
</template>

<style lang="scss" scoped>
.home {
  background-color: var(--bg);
}
</style>
