import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'
import { router } from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret, faExpand, faCircleXmark, faDrum, faCompactDisc, faHeadphones, faMusic, faCloud, faGuitar, faRocket, faTrophy, faCalendarDays, faPhone, faEnvelope, faLocationDot, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faUser, faHeart, faCirclePlay, } from '@fortawesome/free-regular-svg-icons'
import { faOpencart, faSpotify, faYoutube, faSafari, faInstagram, faFacebook, faTwitter, faSquareFacebook } from '@fortawesome/free-brands-svg-icons'
library.add(faUserSecret, faUser, faHeart, faOpencart, faExpand, faCircleXmark, faCirclePlay, faDrum, faCompactDisc, faHeadphones, faSpotify, faYoutube, faSafari, faMusic, faCloud, faGuitar, faRocket, faTrophy, faCalendarDays, faInstagram, faFacebook, faTwitter, faPhone, faEnvelope, faLocationDot, faBars, faSquareFacebook, faXmark)


const messages = {
  it: {
    header: {
      home: "Home",
      menu: "Menù",
      vini: "Vini",
      speciali: "Speciali",
      scuola: "Scuola di Cucina"
    },
    benvenuti: {
      title: "Benvenuti"
    },
    contatti: {
      title: "Contatti"
    },
    orari: {
      title: "Orari",
      paragraph: "Lunedì chiuso",
      days: "Martedì - Domenica"
    },
    mappe: {
      title: "Mappe",
      paragraph: "Clicca qui per trovarci"
    },
    storia: {
      title: "La nostra Storia",
      paragraph: "Ho iniziato a cucinare nel 1980 in Cumbria, al confine con la Scozia. È stato il posto perfetto per iniziare la mia carriera poiché la cucina locale è caratterizzata da una forte identità, mi ha insegnato l'uso di erbe selvatiche e spezie, cosa che ancora oggi amo fare nei nostri piatti locali in Umbria. Dopo aver lavorato a Londra per quindici anni, un'opportunità che mi ha cambiato la vita mi ha permesso di gestire una scuola di cucina in Umbria. Era l'anno 2000 ed insieme alla mia adorabile moglie Elena ho avuto l'opportunità di gestire ristoranti di successo a Todi, inclusa la mia Antica Osteria de la Valle (per 8 anni) ed infine La Cantina del Mercataccio dal 2017. Nove anni fa abbiamo iniziato la nostra avventura nel realizzare il sogno di aprire il nostro ristorante e scuola di cucina per condividere la mia conoscenza dei piatti e degli ingredienti locali. Non vedo l'ora di accogliere di nuovo i nostri clienti e, se è la vostra prima volta qui, desideriamo rendere l'esperienza indimenticabile."
    },
    menu: {
      title: "Benvenuti",
      paragraph: " Al momento dell'ordinazione si chiede alla gentile clientela di informare il cameriere sull'eventuale presenza di allergie o intolleranze ad ingredienti specifici. Lo chef provvederà poi a fornirvi un menù specifico.",
      secondTitle: "Nel caso di Celiachia",
      secondParagraph: "La nostra cucina non può garantire al 100% l'assenza di glutine."
    },
    speciali: {
      title: "Menù Speciali",
      subtitle: "(Solo per eventi)",
      paragraph: "Benvenuto nella nostra sezione dedicata agli esempi di menù per eventi speciali! Qui potrai trovare ispirazione per creare il menu perfetto per qualsiasi occasione."
    },
    cards: {
      menu: "Menù",
      vini: "Vini",
      click: "Clicca qui"
    },
    school: {
      school_title: "Scuola di Cucina",
      school_para_1: "Scopri il gusto dell'Italia con noi! Lezioni di cucina esclusive con degustazioni dei piatti preparati insieme al nostro Chef John Paterson.",
      school_para_2: "Puoi consultare le varie offerte che abbiamo a disposizione e chiamarci per avere altri dettagli o richieste.",
      note_1: "Max 20 Persone",
      note_2: "Max 2 persone",
      note_3: "Min 4 persone",
      price: "a persona",
      card_title_1: "Giornata di Cucina",
      card_title_2: "Corso di Cucina Esclusivo",
      card_title_3: "Pranzo con Amici",
      card_subtitle_1: "Per gruppi superiori a 8 Persone",
      card_subtitle_2: "Per 1 o 2 persone",
      card_subtitle_3: "Per minimo 4 persone",
      card_text_1: "La nostra offerta include una dimostrazione di preparazione del pranzo, che comprende un aperitivo di benvenuto con antipasti, primo, secondo e dolce, il tutto accompagnato da vino.",
      card_text_2: "Scopri il gusto del territorio con le nostre lezioni di cucina guidate dallo Chef John Paterson, che ti accompagnerà nella preparazione di deliziosi piatti locali.",
      card_text_3: "Unitevi ai vostri amici e familiari per un'esperienza di cucina unica e divertente! Lo Chef John Paterson vi guiderà nella preparazione di un menu completo, condiviso e gustato insieme. Una giornata da ricordare!",
    }
  },
  en: {
    header: {
      home: "Home",
      menu: "Menu",
      vini: "Wines",
      speciali: "Special",
      scuola: "Cooking School"
    },
    benvenuti: {
      title: "Welcome"
    },
    contatti: {
      title: "Contacts"
    },
    orari: {
      title: "Opening Hours",
      paragraph: "Closed on Monday",
      days: "Tuesday - Sunday"
    },
    mappe: {
      title: "Maps",
      paragraph: "Click here to find us"
    },
    storia: {
      title: "Our Story",
      paragraph: "I began my culinary journey in 1980 in Cumbria, near the Scottish border. It was the ideal place to start my career, as the local cuisine has a distinct identity. This experience taught me to use wild herbs and spices, a practice I continue to cherish in our local dishes in Umbria. After spending fifteen years working in London, a life-changing opportunity came my way, allowing me to manage a cooking school in Umbria. In 2000, alongside my wonderful wife Elena, I had the chance to run successful restaurants in Todi, including my Antica Osteria de la Valle for eight years and, since 2017, La Cantina del Mercataccio. Nine years ago, we embarked on the adventure of fulfilling our dream of opening our own restaurant and cooking school to share my knowledge of local dishes and ingredients. I eagerly look forward to welcoming our customers again, and if this is your first visit, we aim to make the experience unforgettable."
    },
    menu: {
      title: "Welcome",
      paragraph: "At the moment of ordering you are kindly requested to inform any waiter or waitress if you have any allergies and intolerance of any specific ingredients. We will provide you with a menu on request.",
      secondTitle: "In case of celiac disease",
      secondParagraph: "We cannot guarantee 100% the absence of gluten."
    },
    speciali: {
      title: "Special Menus",
      subtitle: "(Only for events)",
      paragraph: "Welcome to our page dedicated to sample menus for special events! Here you can find inspiration for creating the perfect menu for any occasion."
    },
    cards: {
      menu: "Menu",
      vini: "Wine List",
      click: "Click Here"
    },
    school: {
      school_title: "Cooking School",
      school_para_1: "Discover the flavors of Italy with us! Exclusive cooking lessons with tastings of the dishes prepared alongside our Chef John Paterson.",
      school_para_2: "You can browse our various offers and call us for more details or requests.",
      note_1: "Max 20 People",
      note_2: "Max 2 People",
      note_3: "Min 4 People",
      price: "per person",
      card_title_1: "Cooking Day",
      card_title_2: "Exclusive Cooking Course",
      card_title_3: "Lunch with Friends",
      card_subtitle_1: "For groups of 8 or more",
      card_subtitle_2: "For 1 or 2 people",
      card_subtitle_3: "For a minimum of 4 people",
      card_text_1: "Our offer includes a demonstration of lunch preparation, featuring a welcome aperitif with appetizers, first course, main course, and dessert, all paired with wine.",
      card_text_2: "Discover the flavors of the region with our cooking lessons guided by Chef John Paterson, who will accompany you in preparing delicious local dishes.",
      card_text_3: "Gather your friends and family for a unique and fun cooking experience! Chef John Paterson will guide you in preparing a complete menu, shared and savored together. A day to remember!"

    }
  }
};

const i18n = createI18n({
  locale: 'it', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
});


createApp(App)
  .use(router)
  .use(i18n)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
