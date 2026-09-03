<script>
export default {
  name: 'Contacts',
  data() {
    return {
      reservation: {
        name: '',
        phone: '',
        date: '',
        time: '20:00',
        guests: '2',
      },
      messageVisible: false,
    };
  },
  computed: {
    // Impedisce di selezionare una data gia' passata.
    today() {
      return this.toDateInput(new Date());
    },
  },
  created() {
    this.reservation.date = this.toDateInput(new Date());
  },
  methods: {
    // toISOString() restituisce la data in UTC: in Italia, dopo mezzanotte,
    // proporrebbe il giorno precedente. Qui si usa la data locale.
    toDateInput(d) {
      const pad = (n) => String(n).padStart(2, '0');
      return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
    },
    submitReservation() {
      const r = this.reservation;
      // Il messaggio resta in italiano: lo legge il ristorante, non il cliente.
      // Template literal su piu' righe: il messaggio arriva su WhatsApp
      // gia' formattato, senza sequenze di escape.
      const message = `Buongiorno! Vorrei prenotare un tavolo presso il vostro ristorante. Ecco i dettagli:

Nome: ${r.name}
Telefono: ${r.phone}
Data: ${r.date}
Ora: ${r.time}
Numero di Persone: ${r.guests}

Grazie!`;
      const whatsappUrl =
        'https://api.whatsapp.com/send?phone=393408184775&text=' + encodeURIComponent(message);
      window.open(whatsappUrl, '_blank', 'noopener');
      this.messageVisible = true;
    },
  },
};
</script>

<template>
  <section class="reserve">
    <div class="reserve__card" data-aos="fade-up">
      <p class="eyebrow">{{ $t('contatti.title') }}</p>
      <h1 class="reserve__title">{{ $t('form.title') }}</h1>
      <hr class="rule reserve__rule" />
      <p class="reserve__lead">
        {{ $t('form.lead') }}
      </p>

      <form class="reserve__form" @submit.prevent="submitReservation">
        <div class="field">
          <label for="res-name">{{ $t('form.name') }}</label>
          <input id="res-name" type="text" v-model.trim="reservation.name"
            :placeholder="$t('form.name_ph')" autocomplete="name" required />
        </div>
        <div class="field">
          <label for="res-phone">{{ $t('form.phone') }}</label>
          <!-- inputmode apre il tastierino sui telefoni ma accetta "+" e spazi -->
          <input id="res-phone" type="tel" inputmode="tel" v-model.trim="reservation.phone"
            :placeholder="$t('form.phone_ph')" autocomplete="tel" required />
        </div>
        <div class="field field--half">
          <label for="res-date">{{ $t('form.date') }}</label>
          <input id="res-date" type="date" v-model="reservation.date" :min="today" required />
        </div>
        <div class="field field--half">
          <label for="res-time">{{ $t('form.time') }}</label>
          <input id="res-time" type="time" v-model="reservation.time" required />
        </div>
        <div class="field">
          <label for="res-guests">{{ $t('form.guests') }}</label>
          <input id="res-guests" type="number" min="1" max="60" step="1"
            v-model="reservation.guests" :placeholder="$t('form.guests_ph')" required />
        </div>
        <button class="btn btn--solid reserve__submit" type="submit">
          {{ $t('form.submit') }}
        </button>
      </form>

      <transition name="fade">
        <p v-if="messageVisible" class="reserve__ok" role="status">
          {{ $t('form.sent') }}
        </p>
      </transition>
    </div>

    <div class="reserve__map" data-aos="fade-up">
      <iframe
        src="https://maps.google.com/maps?q=42.7835275,12.4260127&z=16&hl=it&output=embed"
        title="Mappa: John's Restaurant, Todi"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        allowfullscreen
      ></iframe>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.reserve {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  padding: clamp(3rem, 7vw, 6rem) 1.5rem;
  min-height: 70vh;
  background: var(--bg);

  &__map {
    width: min(900px, 100%);
    height: 360px;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: var(--shadow);

    iframe {
      width: 100%;
      height: 100%;
      border: 0;
      display: block;
      filter: grayscale(0.2) contrast(1.05);
    }
  }

  &__card {
    width: min(620px, 100%);
    background: #fff;
    border: 1px solid var(--line);
    border-radius: 4px;
    box-shadow: var(--shadow);
    padding: clamp(2rem, 5vw, 3.5rem);
    text-align: center;
  }

  &__title {
    font-family: var(--font-display);
    font-size: clamp(2.4rem, 6vw, 3.4rem);
    font-weight: 500;
    margin-top: 0.6rem;
  }

  &__rule {
    margin: 1.2rem auto;
  }

  &__lead {
    color: var(--muted);
    margin-bottom: 2rem;
  }

  &__form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.2rem;
    text-align: left;
  }

  &__submit {
    grid-column: 1 / -1;
    width: 100%;
    margin-top: 0.5rem;
  }

  &__ok {
    margin-top: 1.5rem;
    color: var(--gold-dark);
    font-style: italic;
  }
}

.field {
  display: flex;
  flex-direction: column;
  grid-column: 1 / -1;

  &--half {
    grid-column: span 1;
  }

  label {
    font-family: var(--font-ui);
    text-transform: uppercase;
    letter-spacing: 0.14em;
    font-size: 0.7rem;
    color: var(--muted);
    margin-bottom: 0.5rem;
  }

  input {
    font-family: var(--font-body);
    font-size: 1.05rem;
    padding: 0.85rem 1rem;
    border: 1px solid var(--line);
    border-radius: 2px;
    background: var(--bg);
    color: var(--ink);
    transition: border-color 0.3s var(--ease);

    &:focus {
      outline: none;
      border-color: var(--gold);
    }

    &::placeholder {
      color: #b3aa99;
    }
  }
}

@media screen and (max-width: 520px) {
  .reserve__form {
    grid-template-columns: 1fr;
  }

  .field--half {
    grid-column: 1 / -1;
  }
}
</style>
