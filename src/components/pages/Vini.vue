<script>
import axios from 'axios';

export default {
  data() {
    return {
      viniData: null
    };
  },
  created() {
    this.fetchViniData();
  },
  methods: {
    async fetchViniData() {
      try {
        const response = await axios.get('db.json');
        this.viniData = response.data.vini[0]; // Accedi al primo elemento dell'array "menu"
      } catch (error) {
        console.error('Error fetching vini data:', error);
      }
    }
  }
};
</script>

<template>
  <div class="container-lg">
    <div class="title">
      Lista dei vini
    </div>
    <div v-if="viniData">
      <ul class="container-sm">
        <li class="sections">
          <h1 class="groups">Al Calice</h1>
        <li class="wines" v-for="vinoAlCalice in viniData.al_calice" :key="vinoAlCalice.name">


        </li>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss"></style>