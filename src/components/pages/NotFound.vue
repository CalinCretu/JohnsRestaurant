<script>
export default {
  name: 'NotFound',
};
</script>

<template>
  <section class="nf">
    <div class="nf__inner">
      <p class="eyebrow">Errore 404</p>
      <h1 class="nf__title">{{ $t('notfound.title') }}</h1>
      <hr class="rule nf__rule" />
      <p class="nf__text">{{ $t('notfound.text') }}</p>
      <router-link class="btn btn--solid" :to="{ name: 'home' }">
        {{ $t('notfound.button') }}
      </router-link>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.nf {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  padding: 4rem 1.5rem;
  text-align: center;
  background: var(--bg);

  &__inner {
    max-width: 560px;
  }

  &__title {
    font-family: var(--font-display);
    font-size: clamp(2.6rem, 7vw, 4.2rem);
    font-weight: 500;
    margin-top: 0.6rem;
  }

  &__rule {
    margin: 1.4rem auto;
  }

  &__text {
    color: var(--muted);
    font-size: 1.15rem;
    margin-bottom: 2rem;
  }
}
</style>
