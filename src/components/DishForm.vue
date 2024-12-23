<template>
  <div class="dish-management">
    <h2>Gestione Piatti</h2>
    <ul class="dish-list">
      <li v-for="dish in dishes" :key="dish.id" class="dish-item">
        <div class="dish-details">
          <h3>{{ dish.name }}</h3>
          <p>{{ dish.description }}</p>
          <p>Prezzo: €{{ dish.price }}</p>
          <p>Categoria: {{ dish.category }}</p>
        </div>
        <div class="dish-actions">
          <button @click="editDish(dish)" class="btn btn-edit">Modifica</button>
          <button @click="deleteDish(dish.id)" class="btn btn-delete">Elimina</button>
        </div>
      </li>
    </ul>

    <h2>{{ currentDish ? 'Modifica' : 'Aggiungi' }} Piatto</h2>
    <form @submit.prevent="saveDish" class="dish-form">
      <div class="form-group">
        <label>Nome:</label>
        <input v-model="form.name" required />
      </div>
      <div class="form-group">
        <label>Descrizione:</label>
        <input v-model="form.description" required />
      </div>
      <div class="form-group">
        <label>Prezzo:</label>
        <input type="number" v-model="form.price" required />
      </div>
      <div class="form-group">
        <label>Categoria:</label>
        <select v-model="form.category" required>
          <option disabled value="">Seleziona una categoria</option>
          <option value="Antipasto">Antipasto</option>
          <option value="Primo">Primo</option>
          <option value="Secondo">Secondo</option>
          <option value="Contorno">Contorno</option>
          <option value="Dolce">Dolce</option>
        </select>
      </div>
      <button type="submit" class="btn btn-save">Salva</button>
    </form>
  </div>
</template>

<script>
import { getDishes, addDish, updateDish, deleteDish } from '../services/dishService';

export default {
  data() {
    return {
      dishes: [],
      currentDish: null,
      form: {
        name: '',
        description: '',
        price: '',
        category: ''
      }
    };
  },
  methods: {
    async fetchDishes() {
      this.dishes = await getDishes();
    },
    async saveDish() {
      const dishData = { ...this.form };
      try {
        if (this.currentDish) {
          await updateDish(this.currentDish.id, dishData);
        } else {
          await addDish(dishData);
        }
        console.log('Dish saved successfully');
        this.resetForm();
        this.fetchDishes();
      } catch (error) {
        console.error('Error saving dish:', error);
      }
    },
    async deleteDish(id) {
      try {
        await deleteDish(id);
        this.fetchDishes();
      } catch (error) {
        console.error('Error deleting dish:', error);
      }
    },
    editDish(dish) {
      this.currentDish = dish;
      this.form = { ...dish };
    },
    resetForm() {
      this.currentDish = null;
      this.form = {
        name: '',
        description: '',
        price: '',
        category: ''
      };
    }
  },
  mounted() {
    this.fetchDishes();
  }
};
</script>

<style scoped>
.dish-management {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.dish-list {
  list-style: none;
  padding: 0;
}

.dish-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.dish-details {
  flex: 1;
}

.dish-actions {
  display: flex;
  gap: 10px;
}

.btn {
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn-edit {
  background-color: #4CAF50;
  color: white;
}

.btn-delete {
  background-color: #f44336;
  color: white;
}

.dish-form {
  margin-top: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

.btn-save {
  background-color: #008CBA;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>