# Registro delle Modifiche — John's Restaurant Todi

Questo file funge da "GitHub offline": ogni volta che mi chiederai di fare un commit,
qui annoterò le modifiche effettuate per tenere traccia del lavoro svolto.

---

<!-- Le voci più recenti vanno in cima -->

## 2026-06-13 — Restyling grafico completo + modernizzazione + recensioni

**Redesign grafico (tutto il sito)**
- Nuovo **design system**: variabili CSS in `App.vue` (palette avorio/oro/vino), token
  SCSS in `_variables.scss`, utility in `general.scss` (`.container`, `.btn`, `.eyebrow`…).
- **Tipografia**: Cormorant Garamond (display), EB Garamond (corpo), Jost (UI). `index.html`.
- **AOS** per animazioni allo scroll (rispetta `prefers-reduced-motion`).
- Riscritti tutti i componenti: `Header` (navbar + menu mobile laterale "vetro liquido"),
  `Welcome` (hero a tutto schermo), `OurStory`, `Hero` (galleria), `Cards`,
  `ContactsAndHours`, `Footer`, e le pagine `Menu`, `Vini`, `School`, `SpecialMenus`,
  `Contacts` (con mappa interattiva).
- `SpecialMenus`: le foto aprono una **lightbox/carousel** (Swiper) con zoom pinch/doppio-tap.

**Recensioni**
- Nuova sezione `Testimonials.vue`: **carousel** con **20 recensioni Google reali a 5★**
  (testo curato, omessi i refusi e l'unico accenno critico).

**Modernizzazione**
- **Immagini** ottimizzate (`scripts/optimize-images.mjs`, sharp): **−67%** (20→6.6 MB).
- **SEO**: `lang="it"`, title/description, **Open Graph + Twitter** (`og-image.jpg`),
  **Schema.org Restaurant**, favicon corretta + `apple-touch-icon`. Dominio reale
  `johnpatersontodi.com` negli URL assoluti.
- **PWA** installabile (`vite-plugin-pwa`): manifest + service worker (esclude `/admin`).
- **Pagina 404** (`NotFound.vue`) con rotta catch-all.
- **Analytics**: snippet Plausible pronto e commentato in `index.html`.

**Pulizia**
- Rimossi: `/edit` + `DishEdit`/`DishForm`/`DishList`, `db.js`, `dishService.js`,
  `store.js`, `db.json`, `Rights.vue`; dipendenze `dexie`/`axios`/`vue3-carousel`.

**Pannello CMS**
- Tema brand al pannello Decap (`config.yml` `logo_url`, CSS in `admin/index.html`).
- Login navbar → `/admin/index.html` (funziona sia in dev che online).

---

## 2026-06-13 — Pulsante Login in navbar + modifica in locale

**Modifiche:**
- `src/components/Header.vue`: aggiunto pulsante **Login** nella barra di navigazione
  (desktop + menu mobile) che apre il pannello `/admin/` (Decap). Link con slash finale
  `/admin/` per servire la pagina statica e non finire sul router della SPA.
- `public/admin/config.yml`: abilitato `local_backend: true` per modificare piatti e vini
  **in locale** senza GitHub (richiede `npx decap-server` attivo; ignorato in produzione).

**Note d'uso (locale):** avviare `npx decap-server` + `npm run dev`, aprire
`http://localhost:5173/admin/`. In questa modalità "Pubblica" scrive direttamente nei
file `src/data/*.json` su disco (nessun push, nessun deploy, clienti non coinvolti).

---

## 2026-06-13 — Editor self-service menù e vini (Decap CMS)

**Obiettivo:** permettere al cuoco di modificare piatti e vini senza database, con
auto-pubblicazione ai clienti, protetto da login.

**Modifiche:**
- Estratti i dati in file JSON: `src/data/menu.json` (piatti, campi `it`/`en`/`price`) e
  `src/data/vini.json` (vini per cantina + birre/bevande).
- `src/components/pages/Menu.vue`: ora importa `menu.json`; mostra italiano + inglese
  insieme; rimosso `axios` inutilizzato.
- `src/components/pages/Vini.vue`: ora importa `vini.json`; struttura semplificata con
  `computed wineSections` (raggruppamento per cantina); rimosso `axios` inutilizzato.
- Aggiunto pannello CMS Decap: `public/admin/index.html` + `public/admin/config.yml`
  (login GitHub, commit automatico → rebuild Netlify).
- `public/_redirects`: regola per servire `/admin` senza dirottarlo sulla SPA.
- Documentazione: `docs/PROGETTO.md` (mappa completa del progetto), `docs/CMS-SETUP.md`
  (guida setup OAuth GitHub + Netlify), `docs/CHANGELOG.md` (questo registro).

**Verifica:** `npm run build` ok, JSON inclusi nel bundle, `dist/admin/` generato.

**Da fare (setup una tantum):** GitHub OAuth App + collegamento a Netlify — vedi
`docs/CMS-SETUP.md`.

**Nota:** la vecchia area `/edit` (Dexie: `DishEdit.vue`, `dishService.js`, `db.js`,
`DishForm.vue`, `DishList.vue`) è ancora presente ma **superata dal CMS**, da rimuovere
dopo il collaudo online.
