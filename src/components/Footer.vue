<script>
export default {
  name: 'Footer',
  data() {
    return {
      mapsUrl:
        'https://www.google.it/maps/place/John%E2%80%99s+Restaurant/@42.7834422,12.4249516,16.42z/data=!4m6!3m5!1s0x132ec190cb6c3913:0xab80f6745af94a36!8m2!3d42.7835275!4d12.4260127!16s%2Fg%2F11jvpn05d4?entry=ttu',
    };
  },
  computed: {
    year() {
      return new Date().getFullYear();
    },
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
  <div class="foot">
    <div class="foot__main container">
      <div class="foot__brand">
        <h2 class="foot__name">John's Restaurant</h2>
        <p class="foot__tag">Todi · Umbria</p>
        <div class="foot__social">
          <a href="https://www.instagram.com/chef.johnpaterson/?hl=en" target="_blank" rel="noopener" aria-label="Instagram">
            <font-awesome-icon icon="fa-brands fa-instagram" />
          </a>
          <a href="https://www.facebook.com/johnpatersonchef/" target="_blank" rel="noopener" aria-label="Facebook">
            <font-awesome-icon icon="fa-brands fa-square-facebook" />
          </a>
          <a :href="mapsUrl" target="_blank" rel="noopener" aria-label="Maps">
            <font-awesome-icon icon="location-dot" />
          </a>
        </div>
      </div>

      <div class="foot__col">
        <h3 class="foot__col-title">{{ $t('contatti.title') }}</h3>
        <button class="foot__line" @click="makeCall('tel:3408184775')">+(39) 340 8184775</button>
        <button class="foot__line" @click="makeCall('tel:0758506684')">+(39) 075 8506684</button>
        <button class="foot__line" @click="sendEmail('mailto:johncheftodi@gmail.com')">
          johncheftodi@gmail.com
        </button>
      </div>

      <div class="foot__col">
        <h3 class="foot__col-title">{{ $t('orari.title') }}</h3>
        <p class="foot__line foot__line--static">{{ $t('orari.days') }}</p>
        <p class="foot__line foot__line--static">12:30 – 14:30 · 19:30 – 21:30</p>
        <p class="foot__line foot__line--static">{{ $t('orari.paragraph') }}</p>
      </div>

      <div class="foot__col">
        <h3 class="foot__col-title">{{ $t('mappe.title') }}</h3>
        <a class="foot__line" :href="mapsUrl" target="_blank" rel="noopener">{{ $t('mappe.paragraph') }}</a>
        <a class="foot__maps-btn" :href="mapsUrl" target="_blank" rel="noopener">Google Maps</a>
      </div>
    </div>

    <div class="foot__bottom">
      <p>&copy; {{ year }} John's Restaurant — All rights reserved.</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.foot {
  background: var(--dark);
  color: #cabfa9;

  &__main {
    display: grid;
    grid-template-columns: 1.4fr 1fr 1fr 1fr;
    gap: 2.5rem;
    padding: clamp(3rem, 6vw, 5rem) 0 3rem;
  }

  &__name {
    font-family: var(--font-display);
    font-size: 2.2rem;
    color: #fff;
    font-weight: 500;
  }

  &__tag {
    font-family: var(--font-ui);
    text-transform: uppercase;
    letter-spacing: 0.3em;
    font-size: 0.72rem;
    color: var(--gold);
    margin-top: 0.5rem;
  }

  &__social {
    display: flex;
    gap: 1.2rem;
    margin-top: 1.6rem;
    font-size: 1.4rem;

    a {
      color: #cabfa9;
      transition: color 0.3s var(--ease), transform 0.3s var(--ease);

      &:hover {
        color: var(--gold);
        transform: translateY(-3px);
      }
    }
  }

  &__col-title {
    font-family: var(--font-display);
    font-size: 1.4rem;
    color: #fff;
    margin-bottom: 1.2rem;
  }

  &__line {
    display: block;
    width: 100%;
    text-align: left;
    margin: 0.4rem 0;
    color: #cabfa9;
    font-family: var(--font-body);
    font-size: 1.02rem;
    transition: color 0.3s var(--ease);

    &:hover {
      color: var(--gold);
    }

    &--static:hover {
      color: #cabfa9;
    }
  }

  &__maps-btn {
    display: inline-block;
    margin-top: 1rem;
    font-family: var(--font-ui);
    text-transform: uppercase;
    letter-spacing: 0.18em;
    font-size: 0.7rem;
    color: var(--gold);
    border: 1px solid rgba(176, 141, 87, 0.5);
    padding: 0.6rem 1.2rem;
    border-radius: 2px;
    transition: all 0.3s var(--ease);

    &:hover {
      background: var(--gold);
      color: #fff;
    }
  }

  &__bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding: 1.6rem 0;
    text-align: center;

    p {
      font-family: var(--font-ui);
      font-size: 0.78rem;
      letter-spacing: 0.08em;
      color: rgba(202, 191, 169, 0.7);
    }
  }
}

@media screen and (max-width: 768px) {
  .foot__main {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    text-align: left;
  }
}

@media screen and (max-width: 480px) {
  .foot__main {
    grid-template-columns: 1fr;
  }
}
</style>
