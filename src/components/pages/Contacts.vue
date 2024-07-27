<script>
export default {
  data() {
    return {
      reservation: {
        name: '',
        phone: '',
        date: '',
        time: '',
        guests: '',
      },
      messageVisible: false
    };
  },
  methods: {
    submitReservation() {
      const message = `Buongiorno! Vorrei prenotare un tavolo presso il vostro ristorante. Ecco i dettagli:\n\nNome: ${this.reservation.name}\nTelefono: ${this.reservation.phone}\nData: ${this.reservation.date}\nOra: ${this.reservation.time}\nNumero di Persone: ${this.reservation.guests}\n\nGrazie!`;
      const whatsappUrl = `https://api.whatsapp.com/send?phone=3408184775&text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      this.messageVisible = true;
    },
    validateNumber(event) {
      const value = event.target.value;
      if (isNaN(value)) {
        alert("Inserisci un numero");
        event.target.value = '';
      }
    }
  }
};
</script>

<template>
  <div class="container">
    <div class="wrapper centered">
      <article class="letter">
        <div class="side">
          <h1 class="form-title">Prenota un Tavolo</h1>
          <form @submit.prevent="submitReservation">
            <p>
              <input type="text" placeholder="Nome" v-model="reservation.name" required>
            </p>
            <p>
              <input type="tel" placeholder="Telefono" v-model="reservation.phone" @input="validateNumber" required>
            </p>
            <p>
              <input type="date" placeholder="Data" v-model="reservation.date" required>
            </p>
            <p>
              <input type="time" placeholder="Ora" v-model="reservation.time" required>
            </p>
            <p>
              <input type="number" placeholder="Numero di Persone" v-model="reservation.guests" @input="validateNumber"
                required>
            </p>
            <p>
              <button id="sendLetter" type="submit">Prenota</button>
            </p>
          </form>
        </div>
      </article>
    </div>
  </div>

</template>

<style>
@import url(https://fonts.googleapis.com/css?family=Dancing+Script:400,700);

* {
  box-sizing: border-box;
}

.wrapper {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-grow: 1;
  width: 100%;
}

.letter {
  background: var(--background-color);
  padding: 20px 40px;
  max-width: 600px;
  width: 100%;
  margin-top: 50px;
}

.side {
  width: 100%;
}

.form-title {
  margin-bottom: 20px;
  font-size: 2rem;
  font-family: 'Dancing Script';
  color: #333;
}

form p {
  margin: 10px 0;
}

input[type="text"],
input[type="tel"],
input[type="date"],
input[type="time"],
input[type="number"] {
  width: 100%;
  padding: 10px;
  margin: 5px 0 10px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button[type="submit"] {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

button[type="submit"]:hover {
  background-color: #45a049;
}

.result-message {
  display: none;
  text-align: center;
  font-size: 18px;
  color: #4CAF50;
}

.centered {
  text-align: center;
}

input:invalid {
  border-color: red;
}

input:invalid:focus {
  border-color: red;
  outline: none;
  box-shadow: 0 0 5px red;
}
</style>