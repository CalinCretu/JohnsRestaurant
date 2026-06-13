# Documentazione Progetto — John's Restaurant Todi

> Documento di riferimento tecnico-funzionale. Mappa completa di file, funzionalità e
> punti di attenzione del sito. Aggiornare quando l'architettura cambia.

---

## 1. Scopo del sito

Sito di **John's Restaurant** (Todi, Umbria — Chef John Paterson). Doppia funzione:
1. **Biglietto da visita** — presentazione, storia, contatti, orari, mappa, prenotazione.
2. **Consultazione menù** — menù alla carta, carta dei vini, menù speciali, scuola di cucina.

Sito **bilingue** (Italiano default, Inglese), mobile-first, statico.

---

## 2. Stack tecnologico

| Ambito | Tecnologia |
|---|---|
| Framework | **Vue 3** (Options API) |
| Build | **Vite 4** |
| Routing | **vue-router 4** (`createWebHistory`) |
| Traduzioni | **vue-i18n 9** (it/en, stringhe in `main.js`) |
| Stili | **SCSS** + design system a variabili CSS |
| Carosello / lightbox | **Swiper 11** (galleria, lightbox menù con zoom) |
| Animazioni | **AOS** (fade/slide allo scroll, rispetta reduced-motion) |
| Icone | **FontAwesome** |
| PWA | **vite-plugin-pwa** (installabile, service worker) |
| CMS contenuti | **Decap CMS** (pannello `/admin`, backend GitHub) |
| Ottimizzazione immagini | **sharp** (dev, script `optimize-images`) |

Nessun test/linter configurato.

---

## 3. Comandi

```bash
npm install
npm run dev              # server di sviluppo
npm run build            # build di produzione in dist/
npm run preview          # anteprima della build (--host per accesso da telefono)
npm run optimize-images  # ricomprime le immagini in public/imgs + genera icone PWA e og-image
```

---

## 4. Mappa dei file

```
index.html                  # entry: SEO, Open Graph, Schema.org, favicon, font
vite.config.js              # Vite + vite-plugin-pwa (manifest, service worker)
scripts/optimize-images.mjs # ottimizzazione immagini (sharp)
public/
  _redirects                # SPA + esclusione /admin
  pwa-192x192.png / pwa-512x512.png / apple-touch-icon.png  # icone PWA (generate)
  admin/                    # pannello CMS Decap (index.html + config.yml)
  imgs/
    og-image.jpg            # immagine anteprime social (generata)
    logos/ photos/ menus/ scuola/
src/
  main.js                   # bootstrap: router, i18n (TUTTE le traduzioni), AOS, icone
  App.vue                   # layout + variabili :root (design tokens) + header fisso
  router.js                 # rotte + catch-all 404
  data/
    menu.json               # DATI piatti (it/en/price) — editati dal CMS
    vini.json               # DATI vini/bevande (cantina/name/price) — editati dal CMS
  styles/
    general.scss            # reset, tipografia, utility (.container, .btn, .eyebrow…)
    partials/_variables.scss# token SCSS + mixin breakpoint
  components/
    Header.vue              # navbar + menu mobile laterale "vetro liquido" + Login
    Footer.vue              # footer scuro (brand, contatti, social, mappa)
    Home.vue                # composizione landing
    Welcome.vue             # hero a tutto schermo
    Hero.vue                # galleria Swiper
    OurStory.vue            # sezione storia (foto + testo)
    Cards.vue               # card Menù / Vini
    Testimonials.vue        # recensioni (contenuti di esempio, da sostituire)
    ContactsAndHours.vue    # contatti, orari, mappa, CTA prenota
    pages/
      Menu.vue              # menù alla carta (importa menu.json)
      Vini.vue              # carta dei vini (importa vini.json)
      SpecialMenus.vue      # menù speciali (griglia + lightbox carousel con zoom)
      School.vue            # scuola di cucina (video + 3 card prezzo)
      Contacts.vue          # form prenotazione → WhatsApp + mappa interattiva
      NotFound.vue          # pagina 404
```

---

## 5. Routing (`src/router.js`)

| Path | Nome | Funzione |
|---|---|---|
| `/` | home | Landing |
| `/menu` | menu | Menù alla carta |
| `/vini` | vini | Carta dei vini |
| `/specialmenus` | specialmenus | Menù speciali (lightbox) |
| `/school` | school | Scuola di cucina |
| `/contacts` | contacts | Prenotazione (WhatsApp) + mappa |
| `/:pathMatch(.*)*` | notfound | Pagina 404 |

`/admin` è servito a parte (pagina statica Decap, non una rotta Vue).

---

## 6. i18n

Tutte le stringhe sono nell'oggetto `messages` in `src/main.js` (chiavi `it`/`en`).
Default `it`, fallback `en`. Cambio lingua in `Header.vue`. I **piatti** (menu.json)
mostrano `it` + `en` insieme, sempre visibili. I **vini** sono in lingua unica.

---

## 7. Dati menù/vini

In `src/data/menu.json` e `src/data/vini.json`, importati a build-time dalle pagine.
Modificabili dal **CMS** (§8) o a mano. Editando a mano, lanciare `npm run build` per
verificare il JSON prima di pubblicare.

---

## 8. CMS contenuti — Decap (`/admin`)

Il cuoco modifica piatti/vini **senza database**, in self-service.
- `public/admin/index.html` (carica Decap) + `public/admin/config.yml` (form + backend).
- Online: login **GitHub** → commit su `src/data/*.json` → **Netlify ricostruisce** → live.
- In locale: `local_backend: true` + `npx decap-server` → modifica i file su disco.
- **Setup OAuth una tantum**: vedi `docs/CMS-SETUP.md`. ⚠️ Ancora da completare per l'online.

---

## 9. Design system

- **Variabili CSS** in `App.vue :root`: palette (`--bg #FAF6EC`, `--ink`, `--gold #B08D57`,
  `--wine`, `--dark`…), spazi, ombre, `--ease`. Token SCSS in `_variables.scss`.
- **Tipografia**: Cormorant Garamond (display), EB Garamond (corpo), Jost (UI/nav).
- **Utility** in `general.scss`: `.container`, `.btn` (solid/ghost/light), `.eyebrow`, `.rule`.
- **AOS** per le animazioni allo scroll (disattivate con `prefers-reduced-motion`).
- Sezioni alternate chiaro/crema/scuro per ritmo visivo.

---

## 10. Mobile

- Header che si riduce allo scroll; **menu laterale "vetro liquido"** (frosted glass) che
  entra da destra (`<Teleport>` nel body per uscire dal `backdrop-filter` dell'header),
  con scroll di sfondo bloccato.
- Dal menu si raggiunge ogni pagina + Prenota + lingua + Login.
- Lightbox menù speciali con **pinch/doppio-tap zoom**, swipe, contatore.
- Guard `overflow-x: hidden`; tutte le griglie collassano a 1 colonna.

---

## 11. SEO / PWA / Performance

- **SEO**: `<html lang="it">`, title/description, **Open Graph + Twitter card**
  (`imgs/og-image.jpg`), **Schema.org `Restaurant`** (orari, geo, telefono, social).
- **PWA**: manifest + service worker (vite-plugin-pwa), installabile, icone generate.
  Il SW esclude `/admin` dal fallback SPA e fa cache-first delle immagini.
- **Immagini**: ottimizzate con `npm run optimize-images` (sharp) — ridotte ~67%.

---

## 12. Contatti ufficiali

- Tel: **+39 340 8184775**, **+39 075 8506684** · Email: **johncheftodi@gmail.com**
- Orari: **Mar–Dom** 12:30–14:30 e 19:30–21:30 · **Lunedì chiuso**
- Prenotazione: form → **WhatsApp** (`393408184775`). Social: IG `chef.johnpaterson`,
  FB `johnpatersonchef`.

---

## 13. Deploy

Build statica Vite (`dist/`) su **Netlify**. `public/_redirects` gestisce SPA + `/admin`.
Il deploy parte al **push su GitHub**; Netlify ricostruisce (anche dopo i commit del CMS).

---

## 14. In sospeso / da personalizzare

1. **Setup OAuth CMS** per l'online (`docs/CMS-SETUP.md`).
2. **Dominio reale** in `index.html` per Open Graph (ora path relativi) e nello Schema.org.
3. **Recensioni** in `Testimonials.vue`: contenuti di **esempio**, da sostituire con
   recensioni reali (Google/TripAdvisor).
4. **Analytics**: snippet Plausible pronto e commentato in `index.html` (inserire dominio).
5. **Indirizzo**: nello Schema.org manca lo `streetAddress` (aggiungere se desiderato).

---

*Ultimo aggiornamento documento: 2026-06-13.*
