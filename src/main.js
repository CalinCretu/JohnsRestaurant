import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret, faExpand, faCircleXmark, faDrum, faCompactDisc, faHeadphones, faMusic, faCloud, faGuitar, faRocket, faTrophy, faCalendarDays, faPhone, faEnvelope, faLocationDot, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faUser, faHeart, faCirclePlay, } from '@fortawesome/free-regular-svg-icons'
import { faOpencart, faSpotify, faYoutube, faSafari, faInstagram, faFacebook, faTwitter, faSquareFacebook } from '@fortawesome/free-brands-svg-icons'
library.add(faUserSecret, faUser, faHeart, faOpencart, faExpand, faCircleXmark, faCirclePlay, faDrum, faCompactDisc, faHeadphones, faSpotify, faYoutube, faSafari, faMusic, faCloud, faGuitar, faRocket, faTrophy, faCalendarDays, faInstagram, faFacebook, faTwitter, faPhone, faEnvelope, faLocationDot, faBars, faSquareFacebook, faXmark)
createApp(App)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
