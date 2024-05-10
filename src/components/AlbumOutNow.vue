<script>
export default {
  name: 'AlbumOutNow',
  data() {
    return {

    }
  }
}
</script>

<template>
  <div class="container-lg">
    <div class="container-md">
      <div class="card">
        <div class="second-title">Instrumental Rock</div>
        <div class="title">Album Out Now</div>
        <button class="button">Read More</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-lg {
  background: url('imgs/cms_parallax.jpg')no-repeat,
    url('imgs/consequence_of_sound_make_us.jpg')no-repeat;
  background-position: 50% -375px;

  .container-md {
    text-align: start;
    padding: 240px 0;

    .title {
      margin-bottom: 40px;
    }
  }
}
</style>
