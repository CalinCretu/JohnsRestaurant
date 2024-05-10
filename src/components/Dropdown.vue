<script>
export default {
  name: 'Dropdown',
  data() {
    return {
      items: [
        {
          title: 'Choral Music',
        },
        {
          title: 'Concert Band',
        },
        {
          title: 'Opera Concerts',
        },
        {
          title: 'Symphony Orchestra',
        },
        {
          title: 'Family Concerts',
        },
      ]
    }
  }
}
</script>

<template>
  <div>
    <div class="container">
      <ul>
        <li class="items" v-for="item in items">{{ item.title }}</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  background-color: #1F1F1F;
  width: 350px;

  .items {
    border-bottom: 1px solid rgba(128, 128, 128, 0.2);
    padding: 20px 15px;
    font-size: 15px;
  }

  .items:hover {
    color: #F2870C;
  }
}
</style>
