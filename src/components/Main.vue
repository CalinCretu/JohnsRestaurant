<script>
import Hero from './Hero.vue';
import SenseTheJazz from './SenseTheJazz.vue';
import NewMusicVideo from './NewMusicVideo.vue';
import SenseTheJazz2 from './SenseTheJazz2.vue';
import AlbumOutNow from './AlbumOutNow.vue';
import Counter from './Counter.vue';
import BestMusicBlog from './BestMusicBlog.vue';
import Carousel from './Carousel.vue';
import { store } from '../store';
export default {
  name: 'Main',
  components: {
    Hero,
    SenseTheJazz,
    NewMusicVideo,
    SenseTheJazz2,
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
    <Hero />
  </div>
  <div>
    <SenseTheJazz />
  </div>
  <div>
    <NewMusicVideo />
  </div>
  <div>
    <SenseTheJazz2 :cards="card" />
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

<style lang="scss" scoped></style>
