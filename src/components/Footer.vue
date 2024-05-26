<script>
export default {
  name: 'Footer',
  data() {
    return {

    }
  },
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
  <div class="footer-content">
    <div class="footer-section contacts">
      <div class="cards">
        <div class="footer-title">
          {{ $t('contatti.title') }}
        </div>
        <div>
          <div class="description" @click="makeCall('tel: 3408184775')">
            <p>
              +(39) 340 8184775
            </p>
          </div>
          <div class="description" @click="makeCall('tel: 0758506684')">
            <p>
              +(39) 075 8506684
            </p>
          </div>
          <div class="description" @click="sendEmail('mailto:johncheftodi@gmail.com')">
            <p>
              johncheftodi@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-section location">
      <div class="footer-title">
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
    </div>
  </div>
  <div class="footer-bottom">
    <p>&copy; John's Restaurant. All rights reserved.</p>
  </div>
</template>

<style lang="scss" scoped>
.footer-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 2rem 2rem;
  border-top: 1px solid #ccc;
}

.footer-section {
  flex: 1;
  text-align: center;
}

.footer-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.cards {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contacts-card {
  margin-bottom: 1rem;
}

.description {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  cursor: pointer;
}

.description p {
  margin: 0;
  padding: 0 0.5rem;
}

.icon {
  font-size: 1.5rem;
  margin-right: 0.5rem;
}

.footer-bottom {
  background-color: #333;
  color: #fff;
  padding: 1rem 0;
  text-align: center;
  margin-top: 1rem;
}

.footer-bottom p {
  margin: 0;
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
  font-size: 14px;
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

@media screen and (min-width: 768px) {

  .footer-section .contacts {}

}
</style>
