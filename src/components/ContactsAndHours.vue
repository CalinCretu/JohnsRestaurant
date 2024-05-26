<script>
export default {
  name: 'ContactsAndHours',
  methods: {
    toggleLanguage() {
      const newLocale = this.$i18n.locale === 'it' ? 'en' : 'it';
      this.$i18n.locale = newLocale;
    },
    makeCall(phoneNumber) {
      window.location.href = phoneNumber;
    },
    sendEmail(emailAddress) {
      window.location.href = emailAddress;
    }
  }
}
</script>

<template>
  <div class="container-lg">
    <ul class="cards">
      <li class="contacts-card">
        <div class="title">
          {{ $t('contatti.title') }}
        </div>
        <div>
          <div class="description" @click="makeCall('tel: 3408184775')">
            <p class="d-none">
              <a class="icon" href="tel: 3408184775"><font-awesome-icon icon="phone" /></a>
            </p>
            <p>
              +(39) 340 8184775
            </p>
          </div>
          <div class="description" @click="makeCall('tel: 0758506684')">
            <p class="d-none">
              <a class="icon" href="tel: 0758506684"><font-awesome-icon icon="phone" /></a>
            </p>
            <p>
              +(39) 075 8506684
            </p>
          </div>
          <div class="description" @click="sendEmail('mailto:johncheftodi@gmail.com')">
            <p class="d-none">
              <a class="icon" href="mailto: johncheftodi@gmail.com"><font-awesome-icon icon="envelope" /></a>
            </p>
            <p>
              johncheftodi@gmail.com
            </p>
          </div>
        </div>
      </li>
      <li class="hours-card">
        <div class="title">
          {{ $t('orari.title') }}
        </div>
        <p>{{ $t('orari.paragraph') }}</p>
        <p>
          {{ $t('orari.days') }}
        </p>
        <p>12:30 am - 2:30 pm</p>
        <p>7:30 pm - 9:30 pm</p>
      </li>
      <li class="location-card">
        <div class="title">
          {{ $t('mappe.title') }}
        </div>
        <p>
          {{ $t('mappe.paragraph') }}
        </p>
        <p>
          <a
            href="https://www.google.it/maps/place/John%E2%80%99s+Restaurant/@42.7834422,12.4249516,16.42z/data=!4m6!3m5!1s0x132ec190cb6c3913:0xab80f6745af94a36!8m2!3d42.7835275!4d12.4260127!16s%2Fg%2F11jvpn05d4?entry=ttu">
            <button class="mappe-button">
              Maps
            </button>
          </a>
        </p>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.container-lg {
  margin-bottom: 50px;
  display: flex;
  justify-content: center;

  ul,
  ol,
  li {
    list-style: none;
  }

  .cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    font-size: 20px;
    max-width: 1000px;

    .icon {
      margin-right: 35px;
    }

    p {
      color: var(--content-color);
    }

    .title {
      color: var(--title-color);
      font-size: 25px;
      margin-bottom: 20px;
    }

    .description {
      display: flex;
      justify-content: space-between;
      max-width: 220px;
      margin-bottom: 5px;
      cursor: pointer;
      font-size: 22px;
    }

    .contacts-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: start;

      :hover {
        color: black;
      }
    }

    .hours-card {
      display: flex;
      flex-direction: column;
    }

    .location-card {
      border: none;
    }
  }

  .mappe-button {
    appearance: none;
    outline: none;
    border: none;
    cursor: pointer;

    padding: 15px 25px;
    background-color: var(--content-color);
    border-radius: 8px;
    margin-top: 20px;

    color: #FFF;
    font-size: 18px;
    font-weight: 700;

    box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
    transition: 0.2s ease-out;

    &:hover {
      box-shadow: 6px 6px rgba(0, 0, 0, 0.6);
    }

    &:active {
      box-shadow: none;
    }
  }

  .mappe-button:hover {
    color: white;
    background-color: black;
  }

  .mappe-button:active {
    transform: scale(0.95);
  }
}

@media screen and (max-width: 768px) {
  .container-lg {
    .d-none {
      display: none;
    }

    padding: 10px 20px;

    .cards {
      font-size: 20px;
      display: flex;
      flex-direction: column;
      gap: 25px;

      .contacts-card {
        margin: 0px;
        padding: 0px;

      }

      .location-card {
        grid-column: span 2; // Center the third card under the first two
        justify-self: center;
        max-width: 200px;
      }

      .icon {
        margin: 0px;
      }

      .description {
        font-size: 18px;
        align-items: center;
        flex-direction: column;
      }
    }

  }
}
</style>