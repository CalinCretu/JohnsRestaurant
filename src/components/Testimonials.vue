<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default {
  name: 'Testimonials',
  components: { Swiper, SwiperSlide },
  data() {
    return {
      mapsUrl:
        'https://www.google.it/maps/place/John%E2%80%99s+Restaurant/@42.7834422,12.4249516,16.42z/data=!4m6!3m5!1s0x132ec190cb6c3913:0xab80f6745af94a36!8m2!3d42.7835275!4d12.4260127!16s%2Fg%2F11jvpn05d4?entry=ttu',
      modules: [Autoplay, Pagination],
      breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1100: { slidesPerView: 3 },
      },
      // Recensioni reali a 5 stelle da Google (mostrate nella lingua originale).
      reviews: [
        { text: "Outstanding from start to finish. John's Restaurant delivered one of our favourite meals of the trip, with excellent food, great service, and a warm atmosphere. If you visit, do yourself a favour and order the Cacio e Pepe—it was absolutely delicious and a real standout dish. A must-visit when you're in Todi.", author: "Tyler" },
        { text: "Absolutely incredible experience at John's Restaurant in Todi. The food was exquisite, every dish was beautifully prepared and full of flavour. Chef John even delivered our food and explained the dishes to us. The service from Elena was impeccable from start to finish, warm, attentive and genuinely welcoming, and she chose the perfect wine for us both. One of the best dining experiences we have had in Italy and we can't wait to return. Simply brilliant.", author: "Michelle Lacey" },
        { text: "This was one of the best restaurants on our 3 week trip. If you're in the area stop here for sure. The food, service and atmosphere was great. Very friendly, English speaking husband & wife team.", author: "Cindy Plachecki" },
        { text: "John, the chef, makes delicious and generous food paired together with a great regional wine list. Highly recommended.", author: "Uri Eshet" },
        { text: "We thoroughly enjoyed a delicious Easter lunch at John & Elena. Attention to detail from both the kitchen and the service. This restaurant just outside Todi is highly recommended, with a fantastic panoramic view of the Umbrian hills from the terrace.", author: "Richard & Minou" },
        { text: "One of the best meals I've ever had in Italy. John truly showcases the ingredients and food of the Umbrian region. Very professional and friendly service — a truly authentic experience not to be missed!", author: "Sam Bellestri" },
        { text: "Amazing restaurant with scenic view of Umbria. Great dishes from the prawn bruschetta to the various pasta. The panna cotta and cheesecake are a splendid finish.", author: "Oded Israeli" },
        { text: "Everything was delicious, I went for the first time and it was a great experience. It is a place to come back.", author: "Agostina Polo" },
        { text: "Quiet place up in the mountains. Excellent food and service. We ended up eating here twice — it was that good. We had to try other dishes.", author: "Nick" },
        { text: "Great place with amazing food. The view created the perfect atmosphere.", author: "Tim Charlton" },
        { text: "Il nostro ristorante più amato in Umbria. Cucina strepitosa, che dimostra come un piatto di alta qualità non debba necessariamente essere di poca quantità (provare i primi per credere). John ed Elena, simpaticissimi, ci hanno fatto sentire veramente a casa, e non vediamo l'ora di tornare per provare anche uno dei corsi di cucina!", author: "Leandro" },
        { text: "Scoperto per caso durante il viaggio verso Roma, John's a Todi si è rivelato una sosta davvero piacevole. Piatti gustosi, ricchi di sapori, ben impiattati e così abbondanti da non riuscire a finirli. Si percepisce subito qualità e cortesia superiori alla media. Senza dubbio un posto da tenere a mente.", author: "Enz A." },
        { text: "Posto elegante e intimo. Noi da Roma non abbiamo trovato una cacio e pepe con tartufo migliore della loro. Da provare assolutamente.", author: "Danilo" },
        { text: "Cacio e pepe spaziale! Non esiste più buona di quella cucinata da John. Parto da Roma solo per quella e il viaggio vale la pena. ❤️", author: "Lillo De Lillis" },
        { text: "Una bella scoperta, ristorante sulla salita verso Todi e Collevalenza, in posizione a mezza collina. Ho mangiato una chitarra cacio, pepe e tartufo e per secondo il filetto di maiale con gorgonzola e rucola. Tutto molto buono, anche il vino della casa. Consigliato!", author: "Gabriele" },
        { text: "9 amici motociclisti ci siamo fermati oggi: locale molto curato, servizio top, cibo buonissimo e abbondante, vino molto buono. Tutto perfetto, bravi!", author: "Massimo Baldisserri" },
        { text: "Ristorante veramente valido. La più buona cacio e pepe con tartufo. Eccezionale!", author: "Scilla Costanzo" },
        { text: "John's restaurant è il luogo giusto se cercate un ristorante che offre un bell'ambiente, buon servizio e buon cibo. I primi sono abbondanti e vale la pena provarli. Consigliato!", author: "Davide Conte" },
        { text: "Absolut fantastisch! Chef genial. Essen der Hammer. Gerne wieder!", author: "Samuel Deuschle" },
        { text: "Sous une ambiance jazz, une superbe soirée à déguster des plats magnifiques. Cave à vins splendide.", author: "Abdel D." },
      ],
    };
  },
};
</script>

<template>
  <section class="reviews">
    <div class="reviews__head container" data-aos="fade-up">
      <p class="eyebrow">{{ $t('testimonials.eyebrow') }}</p>
      <h2 class="section-title">{{ $t('testimonials.title') }}</h2>
      <hr class="rule" />
    </div>

    <div class="reviews__slider" data-aos="fade-up">
      <Swiper
        :modules="modules"
        :breakpoints="breakpoints"
        :space-between="24"
        :loop="true"
        :grab-cursor="true"
        :autoplay="{ delay: 5000, disableOnInteraction: false }"
        :pagination="{ clickable: true }"
      >
        <SwiperSlide v-for="(r, i) in reviews" :key="i">
          <figure class="quote">
            <div class="quote__stars" aria-label="5 stelle su 5">★★★★★</div>
            <blockquote class="quote__text">{{ r.text }}</blockquote>
            <figcaption class="quote__author">— {{ r.author }}</figcaption>
          </figure>
        </SwiperSlide>
      </Swiper>
    </div>

    <div class="reviews__cta container" data-aos="fade-up">
      <a class="btn btn--ghost" :href="mapsUrl" target="_blank" rel="noopener">
        {{ $i18n.locale === 'en' ? 'Read reviews on Google' : 'Leggi le recensioni su Google' }}
      </a>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.reviews {
  padding: clamp(4rem, 9vw, 8rem) 0;
  background: var(--dark);
  color: #e7ddc9;
  overflow: hidden;

  &__head {
    text-align: center;
    margin-bottom: 3.5rem;

    .eyebrow {
      color: var(--gold);
      margin-bottom: 0.8rem;
    }

    .section-title {
      color: #fff;
    }

    .rule {
      margin: 1.4rem auto 0;
    }
  }

  &__slider {
    padding: 0 clamp(1.5rem, 5vw, 4rem) 3rem;
  }

  &__cta {
    text-align: center;
  }
}

.quote {
  height: 100%;
  min-height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  padding: 2.4rem 2rem;
  text-align: center;

  &__stars {
    color: var(--gold);
    letter-spacing: 0.2em;
    font-size: 1.05rem;
    margin-bottom: 1.2rem;
  }

  &__text {
    font-family: var(--font-display);
    font-style: italic;
    font-size: 1.25rem;
    line-height: 1.6;
    color: #f1e9d8;
    display: -webkit-box;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &__author {
    margin-top: 1.4rem;
    font-family: var(--font-ui);
    letter-spacing: 0.1em;
    font-size: 0.82rem;
    color: var(--gold);
    text-transform: uppercase;
  }
}

.reviews .btn--ghost {
  color: #fff;
  border-color: rgba(255, 255, 255, 0.5);

  &:hover {
    background: #fff;
    color: var(--dark);
  }
}

// Slide ad altezza uniforme + bullet di paginazione dorati
.reviews__slider :deep(.swiper-slide) {
  height: auto;
}

.reviews__slider :deep(.swiper-pagination) {
  position: static;
  margin-top: 2rem;
}

.reviews__slider :deep(.swiper-pagination-bullet) {
  background: rgba(255, 255, 255, 0.4);
  opacity: 1;
}

.reviews__slider :deep(.swiper-pagination-bullet-active) {
  background: var(--gold);
}
</style>
