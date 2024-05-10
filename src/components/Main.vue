<script>
import Hero from './Hero.vue';
import Cards from './Cards.vue';
import NewMusicVideo from './NewMusicVideo.vue';
import AlbumOutNow from './AlbumOutNow.vue';
import Counter from './Counter.vue';
import BestMusicBlog from './BestMusicBlog.vue';
import Carousel from './Carousel.vue';
import { store } from '../store';
import Welcome from './Welcome.vue';
export default {
  name: 'Main',
  components: {
    Hero,
    Cards,
    NewMusicVideo,
    Welcome,
    AlbumOutNow,
    Counter,
    BestMusicBlog,
    Carousel,
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
    <Hero />
  </div>
  <div class="cards-div">
    <Cards />
  </div>
  <div>
    <NewMusicVideo />
  </div>
  <div>
    <AlbumOutNow />
  </div>
  <div>
    <Counter />
  </div>
  <div>
    <BestMusicBlog />
  </div>
  <div>
    <Carousel />
  </div>
</template>

<style lang="scss" scoped>
.cards-div {
  margin: 30px 0px
}
</style>
