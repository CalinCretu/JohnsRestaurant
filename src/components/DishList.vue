<!-- src/components/DishList.vue -->
<template>
  <div>
    <h1>Menu</h1>
    <ul>
      <li v-for="dish in dishes" :key="dish.id">
        {{ dish.name }} - {{ dish.price }} €
        <button @click="editDish(dish)">Modifica</button>
        <button @click="deleteDish(dish.id)">Elimina</button>
      </li>
    </ul>
    <button @click="showAddForm">Aggiungi Piatto</button>
    <DishForm v-if="showForm" :dish="currentDish" @save="fetchDishes" />
  </div>
</template>

<script>
import { getDishes, deleteDish } from '../services/dishService';
import DishForm from './DishForm.vue';

export default {
  components: { DishForm },
  data() {
    return {
      dishes: [],
      showForm: false,
      currentDish: null
    };
  },
  methods: {
    async fetchDishes() {
      this.dishes = await getDishes();
    },
    async deleteDish(id) {
      await deleteDish(id);
      this.fetchDishes();
    },
    editDish(dish) {
      this.currentDish = dish;
      this.showForm = true;
    },
    showAddForm() {
      this.currentDish = null;
      this.showForm = true;
    }
  },
  mounted() {
    this.fetchDishes();
  }
};
</script>
