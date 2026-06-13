<script>
export default {
  name: 'ContactsAndHours',
  data() {
    return {
      mapsUrl:
        'https://www.google.it/maps/place/John%E2%80%99s+Restaurant/@42.7834422,12.4249516,16.42z/data=!4m6!3m5!1s0x132ec190cb6c3913:0xab80f6745af94a36!8m2!3d42.7835275!4d12.4260127!16s%2Fg%2F11jvpn05d4?entry=ttu',
    };
  },
  methods: {
    makeCall(phoneNumber) {
      window.location.href = phoneNumber;
    },
    sendEmail(emailAddress) {
      window.location.href = emailAddress;
    },
  },
};
</script>

<template>
  <section class="visit">
    <div class="container">
      <div class="visit__head" data-aos="fade-up">
        <p class="eyebrow">{{ $t('home.reserve_eyebrow') }}</p>
        <h2 class="section-title">{{ $t('home.reserve_title') }}</h2>
        <hr class="rule" />
      </div>

      <div class="visit__grid">
        <div class="info" data-aos="fade-up">
          <font-awesome-icon icon="phone" class="info__icon" />
          <h3 class="info__title">{{ $t('contatti.title') }}</h3>
          <button class="info__line" @click="makeCall('tel:3408184775')">+(39) 340 8184775</button>
          <button class="info__line" @click="makeCall('tel:0758506684')">+(39) 075 8506684</button>
          <button class="info__line" @click="sendEmail('mailto:johncheftodi@gmail.com')">
            johncheftodi@gmail.com
          </button>
        </div>

        <div class="info" data-aos="fade-up" data-aos-delay="100">
          <font-awesome-icon icon="calendar-days" class="info__icon" />
          <h3 class="info__title">{{ $t('orari.title') }}</h3>
          <p class="info__line info__line--static">{{ $t('orari.days') }}</p>
          <p class="info__hours">12:30 – 14:30</p>
          <p class="info__hours">19:30 – 21:30</p>
          <p class="info__note">{{ $t('orari.paragraph') }}</p>
        </div>

        <div class="info" data-aos="fade-up" data-aos-delay="200">
          <font-awesome-icon icon="location-dot" class="info__icon" />
          <h3 class="info__title">{{ $t('mappe.title') }}</h3>
          <p class="info__line info__line--static">{{ $t('mappe.paragraph') }}</p>
          <a class="info__maps" :href="mapsUrl" target="_blank" rel="noopener">Google Maps</a>
        </div>
      </div>

      <div class="visit__cta" data-aos="fade-up">
        <router-link class="btn btn--solid" :to="{ name: 'contacts' }">
          {{ $t('buttons.prenotazioni') }}
        </router-link>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.visit {
  padding: clamp(4rem, 9vw, 8rem) 0;
  background: var(--bg-alt);

  &__head {
    text-align: center;
    margin-bottom: 3.5rem;

    .eyebrow {
      margin-bottom: 0.8rem;
    }

    .rule {
      margin: 1.4rem auto 0;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  &__cta {
    text-align: center;
    margin-top: 3.5rem;
  }
}

.info {
  text-align: center;
  padding: 2.4rem 1.5rem;
  background: var(--bg);
  border: 1px solid var(--line);
  border-radius: 2px;
  transition: transform 0.4s var(--ease), box-shadow 0.4s var(--ease);

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow);
  }

  &__icon {
    color: var(--gold);
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  &__title {
    font-family: var(--font-display);
    font-size: 1.7rem;
    margin-bottom: 1.2rem;
  }

  &__line {
    display: block;
    width: 100%;
    margin: 0.35rem 0;
    font-family: var(--font-body);
    font-size: 1.05rem;
    color: var(--muted);
    transition: color 0.3s var(--ease);

    &:hover {
      color: var(--gold-dark);
    }

    &--static {
      cursor: default;

      &:hover {
        color: var(--muted);
      }
    }
  }

  &__hours {
    font-family: var(--font-display);
    font-size: 1.4rem;
    color: var(--ink);
    margin: 0.2rem 0;
  }

  &__note {
    margin-top: 1rem;
    font-style: italic;
    font-size: 0.95rem;
    color: var(--muted);
  }

  &__maps {
    display: inline-block;
    margin-top: 1rem;
    font-family: var(--font-ui);
    text-transform: uppercase;
    letter-spacing: 0.18em;
    font-size: 0.72rem;
    color: var(--gold-dark);
    border-bottom: 1px solid var(--gold);
    padding-bottom: 4px;
  }
}

@media screen and (max-width: 768px) {
  .visit__grid {
    grid-template-columns: 1fr;
    gap: 1.4rem;
  }
}
</style>
