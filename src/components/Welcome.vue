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
  <div class="container-md">
    <div class="title">
      John's Restaurant
    </div>
    <div class="second-title">
      Benvenuti
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-md {
  padding: 20px 0px;

  .title {
    font-size: 90px;
  }

  .second-title {
    color: black;
  }
}
</style>
