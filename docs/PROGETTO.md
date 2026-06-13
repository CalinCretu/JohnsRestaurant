# Documentazione Progetto — John's Restaurant Todi

> Documento di riferimento tecnico-funzionale. Mappa completa di file, funzionalità e
> punti di attenzione del sito. Aggiornare quando l'architettura cambia.

---

## 1. Scopo del sito

Sito web del ristorante **John's Restaurant** (Todi, Umbria — Chef John Paterson).
Ha due funzioni principali:

1. **Biglietto da visita** — presentazione del locale, storia dello chef, contatti,
   orari, posizione (mappa), social, e prenotazione tavolo.
2. **Consultazione del menù da parte dei clienti** — menù alla carta, carta dei vini,
   menù speciali per eventi e offerte della scuola di cucina.

Sito **bilingue**: Italiano (default) con fallback Inglese. Pensato soprattutto per uso
da smartphone (i clienti lo aprono al tavolo / prima di prenotare).

---

## 2. Stack tecnologico

| Ambito | Tecnologia |
|---|---|
| Framework | **Vue 3** (Options API, **non** Composition API) |
| Build tool | **Vite 4** |
| Routing | **vue-router 4** (`createWebHistory`) |
| Traduzioni | **vue-i18n 9** |
| Stili | **SCSS** (`sass`), per lo più `<style scoped>` |
| Icone | **FontAwesome** (`@fortawesome/*`) |
| Carosello | **Swiper 11** (galleria foto in home) |
| DB locale | **Dexie 4** (IndexedDB) — solo area admin `/edit` |
| HTTP | **axios** (importato ma **non usato** — chiamate commentate) |
| Altri | `vue3-carousel` (installato, non utilizzato attivamente) |

Nessun test, linter o formatter configurato.

---

## 3. Comandi

```bash
npm install        # installa le dipendenze
npm run dev        # server di sviluppo Vite
npm run build      # build di produzione in dist/
npm run preview    # anteprima della build
npm run server     # json-server su db.json  (LEGACY — vedi §8, non usato dal sito)
```

---

## 4. Mappa dei file

```
index.html                  # entry HTML, monta #app, carica i font Google
vite.config.js              # config Vite (plugin vue)
db.json                     # dati menu/vini per json-server — LEGACY, non usato
public/
  _redirects                # fallback SPA: /* /index.html 200
  admin/                    # pannello CMS (Decap) — gestione menù/vini
    index.html              # carica Decap CMS
    config.yml              # definizione form e backend GitHub
  imgs/
    logos/                  # logo + favicon
    photos/                 # foto piatti (galleria home, card)
    menus/                  # immagini menù speciali (PNG)
    scuola/                 # immagini scuola di cucina
src/
  main.js                   # bootstrap app + TUTTE le traduzioni i18n + icone
  App.vue                   # layout: Header fisso + <router-view> + Footer
  router.js                 # definizione rotte
  store.js                  # store reactive() quasi vuoto (non usato realmente)
  data/
    menu.json               # DATI piatti (it/en/price) — editati dal CMS
    vini.json               # DATI vini/bevande (cantina/name/price) — editati dal CMS
  db.js                     # istanza Dexie (IndexedDB) — LEGACY, superato dal CMS
  services/dishService.js   # CRUD piatti su Dexie — LEGACY, superato dal CMS
  styles/
    general.scss            # stili globali (importato in App.vue)
    partials/_variables.scss# (attualmente VUOTO)
  components/
    Header.vue              # navbar + menu mobile (modale burger) + switch lingua
    Footer.vue              # contatti + mappa + copyright
    Home.vue                # composizione della landing page
    Hero.vue                # carosello Swiper foto piatti
    Welcome.vue             # titolo + immagine panoramica Todi
    OurStory.vue            # testo "La nostra storia"
    Cards.vue               # 2 card grandi: Menù e Vini
    ContactsAndHours.vue    # CTA prenota + contatti + orari + mappa
    Rights.vue              # credit "TemplateMela" — NON USATO (non importato)
    DishForm.vue            # CRUD piatti — NON USATO (vecchia iterazione)
    DishList.vue            # CRUD piatti — NON USATO (vecchia iterazione)
    pages/
      Menu.vue              # menù alla carta (importa src/data/menu.json)
      Vini.vue              # carta dei vini (importa src/data/vini.json)
      SpecialMenus.vue      # menù speciali (immagini)
      School.vue            # scuola di cucina (video + 3 card prezzo)
      Contacts.vue          # form prenotazione → WhatsApp
      DishEdit.vue          # vecchia area admin PIN (Dexie) — LEGACY, superato dal CMS
```

---

## 5. Architettura e flusso

- `index.html` monta `#app` e carica `src/main.js`.
- `main.js` crea l'app, registra **router**, **i18n** e il componente globale
  `font-awesome-icon`, poi monta `App.vue`.
- `App.vue` è il guscio: `Header` fisso in alto, `<router-view>` al centro, `Footer` in
  basso. Gestisce la classe `.small` dell'header allo scroll. Le classi `.no-print`
  nascondono header/footer in stampa.
- Ogni rotta carica una pagina da `components/pages/` (tranne la home, che usa
  `components/Home.vue` per comporre più sezioni).

### Routing (`src/router.js`)

| Path | Nome | Componente | Funzione |
|---|---|---|---|
| `/` | home | `Home.vue` | Landing (Welcome, Contatti/Orari, Hero, Cards, Storia) |
| `/menu` | menu | `pages/Menu.vue` | Menù alla carta |
| `/vini` | vini | `pages/Vini.vue` | Carta dei vini |
| `/specialmenus` | specialmenus | `pages/SpecialMenus.vue` | Menù speciali (immagini) |
| `/school` | school | `pages/School.vue` | Scuola di cucina |
| `/contacts` | contacts | `pages/Contacts.vue` | Form prenotazione (WhatsApp) |
| `/edit` | DishEdit | `pages/DishEdit.vue` | Admin piatti (PIN) |

`scrollBehavior` riporta in cima ad ogni cambio pagina (o ripristina la posizione salvata).

---

## 6. Internazionalizzazione (i18n)

- **Tutte le stringhe tradotte sono dentro `src/main.js`**, nell'oggetto `messages`
  (chiavi `it` ed `en`). Non esiste una cartella di locales separata.
- Locale di default: `it`; fallback: `en`.
- Il cambio lingua avviene in `Header.vue` (pulsante ITA/ENG) impostando
  `this.$i18n.locale`. Lo stesso metodo `toggleLanguage` è duplicato in molti componenti.
- Per aggiungere/modificare testo: agire su `main.js` e richiamarlo con `$t('chiave')`.
- `OurStory.vue` usa `v-html` sul testo della storia (consente HTML nella traduzione).

> ℹ️ **Bilinguismo nel menù:** i piatti (vedi §7) non usano i18n: ogni piatto ha un campo
> `it` (italiano) e `en` (inglese) **mostrati entrambi insieme**, sempre visibili a
> prescindere dal pulsante lingua. I vini sono in lingua unica (nomi propri).

---

## 7. Dati del menù e dei vini — IMPORTANTE

I dati di piatti e vini vivono in **file JSON dedicati** in `src/data/`, importati a
build-time dalle pagine. Sono modificabili tramite il pannello CMS (vedi §9) **oppure**
a mano editando i JSON.

- **`src/data/menu.json`** → oggetto con array `antipasti`, `primi`, `secondi`,
  `contorni`, `dolci`. Ogni piatto: `it` (italiano), `en` (inglese), `price`.
  `pages/Menu.vue` lo importa (`import menuData from '../../data/menu.json'`) e mostra
  **`it` + `en` + `price`** (entrambe le lingue sempre visibili).
- **`src/data/vini.json`** → array `al_calice`, `vini_rossi`, `vini_rosati`,
  `vini_bianchi`, `prosecco_e_spumante` (ognuno con `cantina`, `name`, `price`),
  più `birra` e `bevande` (`name`, `price`). `pages/Vini.vue` lo importa e raggruppa i
  vini per `cantina` (un computed `wineSections` gestisce ordine e sfondo delle sezioni).
- **`pages/SpecialMenus.vue`** → i menù speciali sono ancora **immagini PNG** in
  `public/imgs/menus/`, hardcodate nel template (non gestiti dal CMS).

### Come si aggiorna il menù

Via pannello CMS `/admin` (vedi §9) — è il modo previsto per il cuoco. In alternativa si
editano direttamente `src/data/menu.json` / `vini.json`.

> ⚠️ **Regola 2 (funzionalità):** se si edita il JSON a mano, una virgola o parentesi
> sbagliata rompe la pagina. Lanciare `npm run build` per verificare prima di pubblicare.
> (Il pannello CMS evita questo rischio perché genera JSON valido.)

---

## 8. Meccanismi dati legacy (NON in uso)

Esistono nel repo ma **non alimentano** il sito:

1. **`db.json` + `npm run server` (json-server)** e le chiamate `axios` a
   `https://johns-restaurant-todi-db.onrender.com/...`: rimosse/commentate. Eredità di
   un'architettura precedente.
2. **Dexie / IndexedDB** (`src/db.js`, `src/services/dishService.js`) e la vecchia area
   `/edit` (`DishEdit.vue`, PIN `1972`), più `DishForm.vue`/`DishList.vue`: store
   **locale del browser**, **superato dal CMS** (§9). Salvava solo nel browser del cuoco,
   quindi non pubblicava nulla ai clienti. Da rimuovere quando il CMS è operativo.

---

## 9. Editor contenuti — Decap CMS (`/admin`)

Sistema con cui il cuoco modifica piatti e vini **senza database**, in self-service.

- **Dove:** pannello web a `iltuosito.it/admin` (`public/admin/index.html` carica Decap;
  `public/admin/config.yml` definisce i form). Vite copia `public/admin/` in `dist/admin/`.
- **Login:** GitHub (backend `github` su repo `CalinCretu/JohnsRestaurant`, branch `main`).
- **Come funziona:** il cuoco modifica i form → Decap fa un **commit** sui file
  `src/data/menu.json` / `vini.json` → **Netlify ricostruisce** → i clienti vedono il
  nuovo menù. Nessun database, nessun server applicativo.
- **Collezioni configurate:** "Menù" (antipasti/primi/secondi/contorni/dolci, campi
  `it`/`en`/`price`) e "Vini e Bevande" (al calice, rossi, rosati, bianchi, prosecco/
  spumante, birre, bevande).
- **Setup una tantum** (GitHub OAuth App + Netlify): vedi **`docs/CMS-SETUP.md`**.

> ⚠️ Requisito: l'utente che modifica deve avere accesso **push** al repo. Con l'account
> del proprietario (CalinCretu) funziona già.

---

## 10. Pagine pubbliche — dettaglio funzionale

- **Home** (`Home.vue`): compone `Welcome` (titolo + foto panorama Todi),
  `ContactsAndHours` (CTA "Prenota Ora", telefoni, email, orari, mappa),
  `Hero` (carosello Swiper di foto piatti, autoplay, slide responsive 8 desktop / 2 mobile),
  `Cards` (due card verso Menù e Vini), `OurStory` (storia dello chef).
- **Contacts** (`Contacts.vue`): form prenotazione (nome, telefono, data, ora, persone).
  Al submit costruisce un messaggio precompilato e apre **WhatsApp** verso
  **+39 340 8184775** (`api.whatsapp.com/send?phone=393408184775`). Validazione numerica
  su telefono e numero persone.
- **School** (`School.vue`): titolo + descrizione (i18n), **video YouTube** incorporato
  (`uVBl0CqQlTQ`) e **3 card prezzo**: Giornata di Cucina €100, Corso Esclusivo €150,
  Pranzo con Amici €200.
- **SpecialMenus** (`SpecialMenus.vue`): griglia di immagini dei menù per eventi
  (Capodanno, Natale, Pasqua, San Valentino, asporto, ecc.).

### Contatti ufficiali (usati nel sito)
- Telefoni: **+39 340 8184775**, **+39 075 8506684**
- Email: **johncheftodi@gmail.com**
- Orari: **Martedì–Domenica**, pranzo e cena; **Lunedì chiuso**
- Maps / Instagram (`chef.johnpaterson`) / Facebook (`johnpatersonchef`) nell'header e footer.

---

## 11. Stili e tema

- Variabili colore come **CSS custom properties** definite nel `:root` di `App.vue`:
  `--background-color: #F9F3DE`, `--title-color: #333`, `--content-color: #666`,
  `--dark-bg-color: #e7e0c4`.
- `src/styles/general.scss` = reset + classi container condivise (`.container-sm`, ecc.).
- `src/styles/partials/_variables.scss` è **attualmente vuoto**.
- Font: EB Garamond / Cormorant / Oswald / Cabin (caricati in `index.html`).
- **Stampa:** classi `.no-print` e `*-print` (soprattutto in `Menu.vue`) per stampare un
  menù pulito senza header/footer.

---

## 12. Deploy

- Build statica Vite (`dist/`).
- `public/_redirects` (`/* /index.html 200`) indica un host stile **Netlify** con fallback
  SPA per le rotte client-side.

---

## 13. Punti di attenzione / debito tecnico

Da tenere presente per rispettare **funzionalità e usabilità** (regola 2):

1. **Percorsi immagini incoerenti** — coesistono 3 stili:
   - `/imgs/...` (corretto per Vite: `public/` è servito dalla root) → `Header.vue`, `Hero.vue`.
   - `/public/imgs/...` (31 occorrenze: `Cards`, `Welcome`, `SpecialMenus`, `Menu`, ecc.).
   - `../../../public/imgs/...` (import relativo, 3 occorrenze) → `School.vue`.
   In una build Vite standard i path `/public/...` **non** vengono riscritti (la cartella
   `public` è esposta alla root, non come `/public`). **Da verificare in produzione** se
   tutte le immagini caricano correttamente prima di considerarli sicuri.
2. **Menù non bilingue** — il pulsante lingua non traduce i piatti (§6/§7).
3. **PIN admin in chiaro** nel client (`'1972'`) — protezione solo simbolica.
4. **Codice duplicato** — `toggleLanguage` ripetuto in molti componenti; `Rights.vue`,
   `DishForm.vue`, `DishList.vue` non utilizzati.
5. **`store.js` vuoto** — nessuno state management reale; `db.json`/axios disattivati.
6. **Dati menù inline** — nessun CMS; ogni modifica richiede edit del codice e rideploy.

---

*Ultimo aggiornamento documento: 2026-06-13.*
