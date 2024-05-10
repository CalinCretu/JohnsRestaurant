<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [Autoplay, Pagination, Navigation],
      photos: [
        'instagram_img1.jpg',
        'instagram_img2.jpg',
        'instagram_img3.jpg',
        'instagram_img4.jpg',
        'instagram_img5.jpg',
        'instagram_img6.jpg',
        'instagram_img7.jpg',
        'instagram_img8.jpg',
        'instagram_img9.jpg',
        'instagram_img10.jpg',
      ],
    }
  }
}

</script>
<template>
  <div class="container-lg">
    <Swiper :slides-per-view="8" :grabCursor="true" :loop="true" :pagination="{ clickable: true, }"
      :autoplay="{ delay: 1000, disableOnInteraction: false, }" :modules="modules">
      <SwiperSlide v-for="photo in photos">
        <img :src="`public/imgs/${photo}`" alt="">

      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style>
.swiper-pagination-bullet {
  background-color: white;
  opacity: 0.15;
}

.swiper-pagination-bullet-active {
  background-color: #F2870C;
  opacity: 1;
}
</style>