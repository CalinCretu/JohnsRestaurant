<script>
export default {
  name: 'ContactsAndHours'
}
</script>

<template>
  <div class="container-lg">
    <ul class="cards">
      <li class="contacts-card">
        <div class="title">
          I NOSTRI CONTATTI
        </div>
        <p>
          <a class="icon" href="tel: 340 8184775"><font-awesome-icon icon="phone" /></a>
        <p>+(39) 340 8184775</p>
        </p>
        <p>
          <a class="icon" href="tel: 075 8506684"><font-awesome-icon icon="phone" /></a>
          +(39) 075 8506684
        </p>
      </li>
      <li class="hours-card">
        <div class="title">
          I NOSTRI ORARI
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
