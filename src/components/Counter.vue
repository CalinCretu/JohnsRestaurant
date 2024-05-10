<script>
export default {
  name: 'Counter',
  data() {
    return {
      counters: [
        {
          icon: 'fa-solid fa-guitar',
          counter: '163',
          name: 'Concerts',
        },
        {
          icon: 'fa-solid fa-rocket',
          counter: '145',
          name: 'Happy Clients',
        },
        {
          icon: 'fa-solid fa-trophy',
          counter: '72',
          name: 'Music Awards',
        },
        {
          icon: 'fa-solid fa-music',
          counter: '182',
          name: 'Total Songs',
        }
      ]
    }
  }
}
</script>

<template>
  <div class="container-lg">
    <div class="container-md">
      <ul class="cards">
        <li v-for="(counter, i) in counters" :key="i" class="icons"
          style="animation-delay: -.75s; animation-duration: .25s">
          <div>
            <a class="icon" href="#"><a href="#"><font-awesome-icon :icon="counter.icon" beat /></a></a>
          </div>
          <div class="counter">
            {{ counter.counter }}
          </div>
          <div class="name">
            {{ counter.name }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.container-lg {
  background: url('imgs/counter_parallax.jpg');
  background-position: 50% -190%;

  .cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin: 30px 0;
    font-weight: 500;

    .icon {
      font-size: 60px;
      border: 1px solid transparent;
      border-radius: 50px;
    }

    .icon:hover {
      color: #F2870C;
      filter: drop-shadow(0px 0px 50px #F2870C);
    }

    .counter {
      font-size: 60px;
      margin: 5px 0;
    }

    .name {
      font-size: 25px;
    }
  }


}
</style>
