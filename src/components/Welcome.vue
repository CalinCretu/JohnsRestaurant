<script>
import { store } from '../store'
export default {
  name: 'Welcome',
  props: {
    item: {
      cards: Object
    }
  },
  data() {
    return {
      store: store,
    }
  },
}
</script>

<template>
  <div class="container-lg">
    <div class="title">
      John's Restaurant
    </div>
    <div class="second-title">
      Benvenuti
    </div>
  </div>
</template>

<style lang="scss">
.container-lg {

  .title {
    font-size: 90px;
    padding-top: 60px;
  }

  .second-title {
    color: black;
  }
}
</style>
