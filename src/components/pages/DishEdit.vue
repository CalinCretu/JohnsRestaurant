<script>
import { getDishes, addDish, updateDish, deleteDish } from '../../services/dishService';

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
      },
      pin: '',
      isAuthenticated: false,
      showSuccessModal: false,
      showDeleteModal: false,
      deletingDishId: null
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
        this.showSuccessModal = true;
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
        this.closeDeleteModal();
      } catch (error) {
        console.error('Error deleting dish:', error);
      }
    },
    confirmDelete(id) {
      this.deletingDishId = id;
      this.showDeleteModal = true;
    },
    closeSuccessModal() {
      this.showSuccessModal = false;
    },
    closeDeleteModal() {
      this.showDeleteModal = false;
      this.deletingDishId = null;
    },
    editDish(dish) {
      this.currentDish = dish;
      this.form = { ...dish };
      this.scrollToForm();
    },
    resetForm() {
      this.currentDish = null;
      this.form = {
        name: '',
        description: '',
        price: '',
        category: ''
      };
    },
    scrollToForm() {
      if (window.innerWidth <= 768) {
        this.$nextTick(() => {
          this.$refs.formContainer.scrollIntoView({ behavior: 'smooth' });
        });
      }
    },
    authenticate() {
      const correctPin = '1972'; // Sostituisci con il PIN corretto
      if (this.pin === correctPin) {
        this.isAuthenticated = true;
      } else {
        alert('PIN errato');
      }
    }
  },
  mounted() {
    this.fetchDishes();
  }
};
</script>


<template>
  <div v-if="!isAuthenticated" class="pin-auth-cont">
    <div class="pin-auth">
      <h2>Inserisci PIN per accedere</h2>
      <input v-model="pin" type="password" placeholder="PIN" />
      <button @click="authenticate" class="btn btn-auth">Autentica</button>
    </div>
  </div>
  <div v-else class="container">
    <div class="dish-management">
      <h2 class="titolo">Gestione Piatti</h2>
      <ul class="dish-list">
        <li v-for="dish in dishes" :key="dish.id" class="dish-item">
          <div class="dish-details">
            <h3>{{ dish.name }}</h3>
            <p>{{ dish.description }}</p>
            <p>Prezzo: {{ dish.price }}.00 &euro;</p>
            <p>Categoria: {{ dish.category }}</p>
          </div>
          <div class="dish-actions">
            <button @click="editDish(dish)" class="btn btn-edit">Modifica</button>
            <button @click="confirmDelete(dish.id)" class="btn btn-delete">Elimina</button>
          </div>
        </li>
      </ul>
    </div>
    <div class="dish-form-container">
      <h2>{{ currentDish ? 'Modifica' : 'Aggiungi' }} Piatto</h2>
      <form @submit.prevent="saveDish" ref="formContainer" class="dish-form">
        <div class="form-group">
          <label>Nome in Italiano:</label>
          <input v-model="form.name" required />
        </div>
        <div class="form-group">
          <label>Nome in Inglese:</label>
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

    <!-- Notifica Salvataggio Andato a Buon Fine -->
    <div v-if="showSuccessModal" class="modal">
      <div class="modal-content">
        <span class="close" @click="closeSuccessModal">&times;</span>
        <p>Piatto salvato con successo!</p>
      </div>
    </div>

    <!-- Modal Conferma Elimina -->
    <div v-if="showDeleteModal" class="modal">
      <div class="modal-content">
        <span class="close" @click="closeDeleteModal">&times;</span>
        <p>Sei sicuro di voler eliminare questo piatto?</p>
        <button @click="deleteDish(deletingDishId)" class="modal-btn">Sì</button>
        <button @click="closeDeleteModal" class="modal-btn btn-cancel">No</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  gap: 20px;
}

.dish-management,
.dish-form-container {
  flex: 1;
  padding: 20px;
}

.titolo {
  color: var(--title-color);
  margin: 2rem 0;
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
  background-color: #fff;
}

.dish-details {
  flex: 1;
}

.dish-actions {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.btn {
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}

.btn-edit {
  background-color: #4CAF50;
  color: white;
}

.btn-delete {
  background-color: #f44336;
  color: white;
}

.dish-form-container {
  position: sticky;
  top: 50%;
  transform: translateY(-50%);
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
  font-weight: bold;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
}

.form-group input:focus,
.form-group select:focus {
  border-color: #008CBA;
  outline: none;
}

.btn-save {
  background-color: #008CBA;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
}

.btn-save:hover {
  background-color: #007B9E;
}

.pin-auth-cont {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
}

.pin-auth {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 800px;
  padding: 20px;
}

.pin-auth input {
  margin: 10px;
  padding: 12px;
  width: 100%;
  max-width: 300px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
}

.btn-auth {
  background-color: #008CBA;
  color: white;
  font-size: 1.2rem;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 80%;
  max-width: 400px;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

.modal p {
  margin: 20px 0;
  font-size: 2rem;
}

.modal button {
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin: 10px;
  transition: background-color 0.3s;
}

.modal button:hover {
  background-color: #45a049;
}

.modal .btn-cancel {
  background-color: #f44336;
}

.modal .btn-cancel:hover {
  background-color: #d32f2f;
}

/* Media Queries for Responsive Design */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }

  .dish-management,
  .dish-form-container {
    width: 100%;
    margin-bottom: 20px;
  }

  .dish-form-container {
    position: static;
    transform: none;
  }
}
</style>