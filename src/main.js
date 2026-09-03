import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'
import { router } from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faExpand, faCalendarDays, faPhone, faLocationDot, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

import { faInstagram, faSquareFacebook } from '@fortawesome/free-brands-svg-icons'
library.add(faExpand, faCalendarDays, faPhone, faLocationDot, faBars, faXmark, faInstagram, faSquareFacebook)

const messages = {
  it: {
    // Titolo e descrizione di ogni pagina: il sito e' una single-page application,
    // quindi il <head> viene riscritto lato client da src/utils/head.js.
    // Il testo di "home" ripete quello di index.html: cosi' non cambia
    // al primo caricamento.
    seo: {
      home_title: "John's Restaurant · Todi — Cucina italiana e umbra dello Chef John Paterson",
      home_desc: "John's Restaurant a Todi (Umbria): cucina italiana e umbra dello Chef John Paterson. Menù, carta dei vini, menù speciali e scuola di cucina.",
      menu_title: "Menù · John's Restaurant, Todi",
      menu_desc: "Il menù di John's Restaurant a Todi: antipasti, primi, secondi e dolci della tradizione umbra e italiana, con materie prime del territorio.",
      vini_title: "Carta dei vini · John's Restaurant, Todi",
      vini_desc: "La carta dei vini di John's Restaurant a Todi: etichette dell'Umbria e del resto d'Italia, scelte per accompagnare i piatti dello Chef.",
      speciali_title: "Menù speciali · John's Restaurant, Todi",
      speciali_desc: "I menù per eventi e ricorrenze di John's Restaurant a Todi: Natale, Capodanno, Pasqua, San Valentino e proposte d'asporto.",
      school_title: "Scuola di cucina · John's Restaurant, Todi",
      school_desc: "Lezioni di cucina a Todi con lo Chef John Paterson: corsi per gruppi, per due persone o tra amici, con degustazione dei piatti preparati.",
      contacts_title: "Contatti e prenotazioni · John's Restaurant, Todi",
      contacts_desc: "Prenota un tavolo da John's Restaurant a Todi: modulo di prenotazione via WhatsApp, telefono, email, indirizzo e mappa.",
      notfound_title: "Pagina non trovata · John's Restaurant, Todi",
      notfound_desc: "La pagina che cerchi non esiste o è stata spostata. Torna alla home di John's Restaurant, Todi."
    },
    buttons: {
      prenotazioni: "Prenota Ora"
    },
    home: {
      gallery_eyebrow: "Galleria",
      gallery_title: "Le nostre specialità",
      cuisine_eyebrow: "La nostra cucina",
      cuisine_title: "Menù & Cantina",
      cuisine_text: "Piatti della tradizione umbra e italiana, materie prime locali e una selezione di vini del territorio.",
      reserve_eyebrow: "Vi aspettiamo",
      reserve_title: "Prenota un tavolo"
    },
    notfound: {
      title: "Pagina non trovata",
      text: "La pagina che cerchi non esiste o è stata spostata.",
      button: "Torna alla Home"
    },
    testimonials: {
      eyebrow: "Dicono di noi",
      title: "Le voci dei nostri ospiti"
    },
    header: {
      home: "Home",
      menu: "Menù",
      vini: "Vini",
      speciali: "Speciali",
      scuola: "Scuola di Cucina",
      scuola_button: "Scuola",
    },
    benvenuti: {
      title: "Benvenuti"
    },
    form: {
      title: "Prenota un Tavolo",
      lead: "Compila il modulo: verrai reindirizzato su WhatsApp con la richiesta già pronta.",
      name: "Nome",
      name_ph: "Il tuo nome",
      phone: "Telefono",
      phone_ph: "+39 340 000 0000",
      date: "Data",
      time: "Ora",
      guests: "Numero di persone",
      guests_ph: "Es. 2",
      submit: "Prenota",
      sent: "Ti abbiamo reindirizzato su WhatsApp per completare la prenotazione. A presto!"
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
      paragraph: "Benvenuto nella nostra sezione dedicata agli esempi di menù per eventi speciali! Qui potrai trovare ispirazione per creare il menu perfetto per qualsiasi occasione.",
      zoom_hint: "Tocca due volte o pizzica per ingrandire"
    },
    // Etichette lette solo dagli screen reader o mostrate al posto di un'icona.
    a11y: {
      close: "Chiudi",
      open_menu: "Apri il menu di navigazione"
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
    seo: {
      home_title: "John's Restaurant · Todi — Italian and Umbrian cooking by Chef John Paterson",
      home_desc: "John's Restaurant in Todi (Umbria): Italian and Umbrian cooking by Chef John Paterson. Menu, wine list, special menus and cooking school.",
      menu_title: "Menu · John's Restaurant, Todi",
      menu_desc: "The menu at John's Restaurant in Todi: starters, first and main courses and desserts from the Umbrian and Italian tradition, with local produce.",
      vini_title: "Wine list · John's Restaurant, Todi",
      vini_desc: "The wine list at John's Restaurant in Todi: labels from Umbria and the rest of Italy, chosen to match the Chef's dishes.",
      speciali_title: "Special menus · John's Restaurant, Todi",
      speciali_desc: "Menus for events and celebrations at John's Restaurant in Todi: Christmas, New Year's Eve, Easter, Valentine's Day and takeaway.",
      school_title: "Cooking school · John's Restaurant, Todi",
      school_desc: "Cooking lessons in Todi with Chef John Paterson: courses for groups, for two, or among friends, with a tasting of the dishes prepared.",
      contacts_title: "Contacts and bookings · John's Restaurant, Todi",
      contacts_desc: "Book a table at John's Restaurant in Todi: booking form via WhatsApp, phone, email, address and map.",
      notfound_title: "Page not found · John's Restaurant, Todi",
      notfound_desc: "The page you are looking for does not exist or has been moved. Go back to the John's Restaurant home page, Todi."
    },
    buttons: {
      prenotazioni: "Book Now"
    },
    home: {
      gallery_eyebrow: "Gallery",
      gallery_title: "Our Specialties",
      cuisine_eyebrow: "Our Cuisine",
      cuisine_title: "Menu & Wine",
      cuisine_text: "Umbrian and Italian classics made with local produce, paired with a curated selection of regional wines.",
      reserve_eyebrow: "We await you",
      reserve_title: "Book a table"
    },
    notfound: {
      title: "Page not found",
      text: "The page you're looking for doesn't exist or has been moved.",
      button: "Back to Home"
    },
    testimonials: {
      eyebrow: "Testimonials",
      title: "What our guests say"
    },
    header: {
      home: "Home",
      menu: "Menu",
      vini: "Wines",
      speciali: "Special",
      scuola: "Cooking School",
      scuola_button: "School",
    },
    benvenuti: {
      title: "Welcome"
    },
    form: {
      title: "Book a Table",
      lead: "Fill in the form: you will be redirected to WhatsApp with your request ready to send.",
      name: "Name",
      name_ph: "Your name",
      phone: "Phone",
      phone_ph: "+39 340 000 0000",
      date: "Date",
      time: "Time",
      guests: "Number of guests",
      guests_ph: "e.g. 2",
      submit: "Book",
      sent: "We have redirected you to WhatsApp to complete your booking. See you soon!"
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
      paragraph: "Welcome to our page dedicated to sample menus for special events! Here you can find inspiration for creating the perfect menu for any occasion.",
      zoom_hint: "Double-tap or pinch to zoom"
    },
    a11y: {
      close: "Close",
      open_menu: "Open the navigation menu"
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


// Animazioni allo scroll (fade/slide-up eleganti)
// Disattivate se l'utente preferisce ridurre il movimento (accessibilità)
AOS.init({
  duration: 800,
  easing: 'ease-out-cubic',
  once: true,
  offset: 80,
  disable: () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
});

const app = createApp(App)
  .use(router)
  .use(i18n)
  .component('font-awesome-icon', FontAwesomeIcon)

// Le pagine si caricano su richiesta (vedi router.js). Montando subito, comparirebbero
// prima header e footer e solo dopo il contenuto, con un salto visibile della pagina.
// Aspettando che il router abbia risolto la rotta iniziale, tutto appare insieme.
router.isReady().then(() => app.mount('#app'))
