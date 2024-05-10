<script>
export default {
  name: 'BestMusicBlog',
  data() {
    return {
      cards: [
        {
          image: '/imgs/hip_hop_wired_to_dance_make.jpg',
          title: 'Hip Hop wired to dance make',
          icon: 'fa-solid fa-calendar-days',
          date: '06 November 2021',
          description: 'Driving short distances music is a music genre that includes traditional folk music and the conpemporary genre that evolved from the former'
        },
        {
          image: '/imgs/music_business-worldwide.jpg',
          title: 'Music busiuness worldwide',
          icon: 'fa-solid fa-calendar-days',
          date: '27 May 2022',
          description: "Accelerate work and drive productivity the Beatles' Experimentation and creative freedom led other bands to experiment in various ways as well."
        },
        {
          image: '/imgs/giveaways_rock.jpg',
          title: 'Givaways rock to all',
          icon: 'fa-solid fa-calendar-days',
          date: '07 May 2022',
          description: 'Signs your car battery has to be replaced when the dashboard lights start flashing, this is a sign the battery is dying. Several issues arise and'
        },
      ]
    }
  }
}
</script>

<template>
  <div class="container-md">

    <div class="second-title">
      Music Blog
    </div>
    <div class="title">
      Best Music Blog
    </div>
    <ul class="cards">
      <li class="card" v-for="(item, i) in cards" :key="i">
        <img :src="item.image" alt="">
        <div class="card-title">
          {{ item.title }}
        </div>
        <div class="date">
          <a class="icon" href="#"><font-awesome-icon :icon="item.icon" /></a>
          <span>
            {{ item.date }}
          </span>
        </div>
        <div class="description">
          {{ item.description }}
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.container-md {
  .cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
    text-align: start;
    margin: 30px 0;

    .card:hover img {
      transform: scale(1.1);
      box-shadow: 0px 0px 40px #F2870C;
      transition: all 1s ease-in-out;
    }

    .card:first-child:hover img {
      transform: scale(1.1) rotate(-2deg);
      box-shadow: 0px 0px 40px #F2870C;
      transition: all 1s ease-in-out;
    }

    .card:last-child:hover img {
      transform: scale(1.1) rotate(2deg);
      box-shadow: 0px 0px 40px #F2870C;
      transition: all 1s ease-in-out;
    }


    .card-title {
      margin-top: 10px;
    }

    .date {
      color: #f2870ca6;
      margin: 10px 0;
      font-size: 12px;
      font-weight: 300;
      text-transform: none;

      .icon {
        margin-right: 10px;
      }
    }

    .description {
      text-transform: capitalize;
      color: rgba(255, 255, 255, 0.5);
    }
  }
}
</style>
