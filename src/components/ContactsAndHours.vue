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
              jpatdot183@gmail.com
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
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.container-lg {
  margin-bottom: 30px;
  display: flex;
  justify-content: center;

  ul,
  ol,
  li {
    list-style: none;
  }

  .cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    font-size: 20px;
    width: 1000px;

    .icon {
      margin-right: 10px;
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
      margin: 10px 0px;
      cursor: pointer;
      font-size: 22px;
    }

    .contacts-card {

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: start;
    }

    .hours-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>