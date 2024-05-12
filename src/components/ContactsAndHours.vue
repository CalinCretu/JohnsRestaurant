<script>
export default {
  name: 'ContactsAndHours',
  methods: {
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
          CONTATTI
        </div>
        <div>
          <div class="description" @click="makeCall('tel: 3408184775')">
            <p>
              <a class="icon" href="tel: 3408184775"><font-awesome-icon icon="phone" /></a>
            </p>
            <p>
              +(39) 340 8184775
            </p>
          </div>
          <div class="description" @click="makeCall('tel: 0758506684')">
            <p>
              <a class="icon" href="tel: 0758506684"><font-awesome-icon icon="phone" /></a>
            </p>
            <p>
              +(39) 075 8506684
            </p>
          </div>
          <div class="description" @click="sendEmail('mailto:jpatdot183@gmail.com')">
            <p>
              <a class="icon" href="mailto: jpatdot183@gmail.com"><font-awesome-icon icon="envelope" /></a>
            </p>
            <p>
              johncheftodi@gmail.com
            </p>
          </div>
        </div>
      </li>
      <li class="hours-card">
        <div class="title">
          ORARI
        </div>
        <p>Lunedì giorno di chiusura</p>
        <p>
          Martedì - Domenica
        </p>
        <p>12:30 am - 2:30 pm</p>
        <p>7:30 pm - 9:30 pm</p>
      </li>
      <li class="location-card">
        <div class="title">
          Mappe
        </div>
        <p>
          Puoi cliccare su questo pulsante per trovarci
        </p>
        <p>
          <a
            href="https://www.google.it/maps/place/John%E2%80%99s+Restaurant/@42.7834422,12.4249516,16.42z/data=!4m6!3m5!1s0x132ec190cb6c3913:0xab80f6745af94a36!8m2!3d42.7835275!4d12.4260127!16s%2Fg%2F11jvpn05d4?entry=ttu">
            <button class="mappe-button">
              Mappe
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
      color: black;
    }

    .title {
      font-size: 25px;
      margin-bottom: 20px;
    }

    .description {
      display: flex;
      justify-content: space-between;
      width: 220px;
      margin-bottom: 10px;
      cursor: pointer;
      font-size: 22px;
    }

    .contacts-card {

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: start;

      :hover {
        color: white;
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
    border: none;
    font-size: 20px;
    margin-top: 20px;
    padding: 10px 20px;
    border-radius: 25px;
    cursor: pointer;
  }

  .mappe-button:hover {
    color: white;
    background-color: black;
  }

  .mappe-button:active {
    transform: scale(0.9);
  }
}
</style>