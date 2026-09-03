# Registro delle Modifiche — John's Restaurant Todi

Questo file funge da "GitHub offline": ogni volta che mi chiederai di fare un commit,
qui annoterò le modifiche effettuate per tenere traccia del lavoro svolto.

---

<!-- Le voci più recenti vanno in cima -->

## 2026-09-03 — Immagini WebP, SEO per pagina, form di prenotazione

**Immagini convertite in WebP (`scripts/optimize-images.mjs`)**
- Lo script ora lavora in **due fasi**: (1) ricompressione in-place di `logos/` e
  dell'immagine social, che devono restare JPG/PNG perché da lì si generano favicon,
  icone PWA e anteprime dei link; (2) conversione in **WebP** di `photos/`, `menus/`
  e `scuola/`. Molte di quelle foto erano salvate in PNG — un formato pensato per la
  grafica, non per le fotografie — e pesavano diverse volte tanto.
- Qualità più alta per i menù (84 contro 80): sono fotografie di testo stampato e
  devono restare leggibili quando il cliente ingrandisce.
- `makeIcons()` e `makeOgImage()` spostati **prima** della conversione, perché leggono
  gli originali che la fase WebP rimuove; `makeOgImage()` ora accetta sia
  `PanoramaTodi.png` sia `.webp`, così è rieseguibile.
- `sharp.cache(false)`: su Windows la cache teneva aperto il file e impediva di
  cancellare l'originale.
- Nuovo flag: `npm run optimize-images -- --keep` converte senza rimuovere gli originali.
- **33 immagini convertite**, riferimenti aggiornati in `Cards.vue`, `Hero.vue`,
  `OurStory.vue`, `Welcome.vue`, `School.vue`, `SpecialMenus.vue`. Rimossi
  `Maps.png`, `ScuolaGruppi.png` e `ScuolaPer8.png`: non erano usati da nessuna parte.
- `public/imgs`: **6,6 MB → 2,6 MB** (−61%).

**SEO: titolo e descrizione per ogni pagina (`src/utils/head.js`, nuovo)**
- Problema: il sito è una single-page application, quindi `/menu`, `/vini` e `/school`
  mostravano tutti **titolo e descrizione della home**, sia nei risultati di ricerca
  sia nell'anteprima dei link condivisi su WhatsApp e social.
- `updateHead()` riscrive a ogni cambio pagina: `<title>`, `description`, `canonical`,
  `og:title`/`og:description`/`og:url`/`og:locale`, `twitter:title`/`twitter:description`
  e l'attributo `lang` di `<html>` (conta per i motori di ricerca e per la pronuncia
  degli screen reader). I tag vengono creati se mancano e poi solo aggiornati: nessun
  duplicato a furia di navigare.
- Testi in `main.js` sotto la chiave `seo` (**IT ed EN**), una coppia titolo/descrizione
  per ognuna delle 7 rotte; quelli della home ripetono `index.html` così non cambiano
  al primo caricamento.
- `router.js`: ogni rotta ha `meta: { titleKey, descKey }`.
- `App.vue`: `refreshHead()` richiamata al mount, a ogni cambio rotta e **a ogni cambio
  lingua** (prima il titolo sarebbe rimasto in italiano passando a inglese).
- Aggiunto `<meta name="robots">`: `noindex, follow` sulla pagina 404, `index, follow`
  altrove. Serve perché il server della SPA risponde 200 anche su URL inesistenti e
  Google potrebbe indicizzarli.

**Form di prenotazione (`Contacts.vue`)**
- Testi portati su i18n (nuova sezione `form`, IT/EN). Il messaggio WhatsApp resta in
  italiano: lo legge il ristorante, non il cliente.
- **Fix data**: `toISOString()` restituisce la data in UTC, quindi dopo mezzanotte
  proponeva il giorno precedente. Ora si usa la data locale, e `min` impedisce di
  scegliere una data già passata.
- Rimossa la validazione con `alert()` (bloccante e sgradevole), sostituita da
  `type="number"` con `min`/`max`/`step`. Il campo telefono usa `inputmode="tel"`:
  apre il tastierino sui cellulari ma continua ad accettare "+" e spazi.
- Accessibilità: `label for`/`id` su ogni campo, `autocomplete`, `role="status"` sul
  messaggio di conferma. Aggiunto `noopener` all'apertura di WhatsApp.

**Alleggerimento del caricamento**
- `main.js`: le icone Font Awesome importate erano **28, quelle usate 8** — le altre
  (chitarre, batteria, Spotify, YouTube…) erano rimaste dal template di partenza.
  Tenute solo quelle usate: bundle JS −12 KB.
- `router.js`: le pagine interne (menù, vini, speciali, scuola, contatti, 404) ora si
  caricano **solo quando servono**. Chi apre la home non scarica più anche il loro
  codice: **JS 421 → 371 KB, CSS 73 → 57 KB** (−17 KB gzip). Sulla home restano Vue,
  i18n, AOS e Swiper, che serve alle recensioni.

**Revisione generale: peso, SEO tecnica, accessibilità**

*Favicon* — conteneva una sola immagine 256×256 in bitmap non compressa: **264 KB**,
scaricati a ogni visita, più della foto di sfondo della home. Ora `optimize-images.mjs`
genera un `.ico` con quattro PNG (16/32/48/64 px): **3 KB**. L'immagine è la stessa,
verificata pixel per pixel contro quella precedente.

*Logo* — nella barra si vede a 68 px ma si scaricava il file da 1457 px (28 KB su ogni
pagina). Aggiunta una versione da 320 px: **5 KB**.

*Immagini responsive* — le foto arrivavano sempre a piena risoluzione: da telefono si
scaricava una foto da 1440 px per mostrarla in un riquadro da 240. Lo script genera ora
una variante `-640.webp` per ogni immagine sopra i 640 px (30 file), e i componenti usano
`srcset` + `sizes` (`src/utils/img.js`). Escluso il panorama dell'hero: è largo e basso
(2000×384) e usato con `cover` in un riquadro alto, quindi ridotto verrebbe sgranato.
Misurato su schermo da 390 px: home **1272 → 790 KB**, menù speciali **583 → 416 KB**,
scuola **183 → 62 KB**. Verificato a densità 1×, 2× e 3×: dove serve più risoluzione il
browser risale da solo all'originale, quindi la qualità non cala mai.

*Salti di layout (CLS)* — le rotte caricate su richiesta facevano comparire prima header
e footer e poi il contenuto: misurato **0,38 su /menu** (Google considera "scarso" oltre
0,25). Risolto montando l'app dopo `router.isReady()` in `main.js`: la pagina appare tutta
insieme. Sui menù speciali la griglia non riservava spazio perché le altezze dipendevano
dalle immagini: aggiunti `width`/`height` reali a ogni menù (**0,32 → 0,00**).
Valori finali su tutte le pagine: da 0,00 a 0,02.

*Preload dell'immagine dell'hero* — è uno sfondo CSS, quindi il browser la scopriva solo
dopo che Vue aveva creato l'elemento: partiva a **213 ms** invece di 15. Aggiunto un header
`Link: rel=preload` in `netlify.toml` **solo per `/`**, così le altre pagine non la
scaricano inutilmente. Aggiunta anche la cache lunga per `/assets/*` (file con hash nel
nome, non cambiano mai).

*robots.txt e sitemap.xml* (nuovi) — mancavano entrambi. La sitemap elenca le 6 pagine
indicizzabili (verificato che corrispondano alle rotte del router); `robots.txt` esclude
`/admin/` e indica la sitemap.

*Font* — si chiedevano a Google 15 varianti, ne servono 8: i pesi 300 e 600 non compaiono
in nessun punto del progetto. Il foglio di stile dei font, che blocca il rendering, passa
da **27,6 a 14,5 KB**. Aggiunto invece il peso 700 di Jost, che mancava: i prezzi della
scuola (`<strong>`) venivano ingrossati artificialmente dal browser.

*Testi alternativi* — le 16 foto della galleria avevano tutte lo stesso `alt` ("Specialità
di John's Restaurant") e gli 11 menù speciali "Menù speciale". Ora ognuna ha la propria
descrizione, scritta guardando le immagini una per una.

*Accessibilità e traduzioni* — il menu mobile ora si chiude con **Esc** (come già faceva la
lightbox) e dichiara `aria-expanded`/`aria-controls`; le etichette "Chiudi" e "Apri il menu"
e il suggerimento "tocca due volte per ingrandire" erano in italiano fisso anche in inglese,
ora sono tradotti; nel menù l'avviso celiachia usava un `<h3>` subito dopo l'`<h1>`,
saltando un livello (ora `<h2>`, resa grafica identica).

**Verifiche di questa revisione:** fotografia completa delle 7 pagine prima e dopo
(titolo, descrizione, canonical, robots, lingua, testo, intestazioni, link, immagini,
errori) con confronto riga per riga: **le uniche differenze sono quelle volute**. Inoltre:
CLS misurato pagina per pagina a cache fredda e calda; risoluzione delle immagini scelte a
densità 1×/2×/3×; apertura e chiusura con Esc di menu mobile e lightbox (confermate anche
con screenshot); stampa PDF di menù e vini rigenerata (4 e 7 pagine, solo testo, senza
navbar né footer); `robots.txt` e `sitemap.xml` serviti correttamente; `netlify.toml`
validato con un parser TOML.

**Restano aperti (non fatti):** le pagine in inglese non hanno URL propri, quindi Google
indicizza solo la versione italiana — risolverlo richiede URL tipo `/en/menu` con
`hreflang`. Inoltre in `Vini.vue` e `Menu.vue` alcune intestazioni ("Lista dei Vini",
"Al Calice", "Birre", "Bevande", "Caricamento...") sono in italiano fisso e non seguono il
cambio lingua.


**Verifiche:** `npm run build` ok; controllo in Chrome headless di tutte le rotte
(titolo, descrizione, canonical, robots, `lang`) in italiano e in inglese, del cambio
lingua a pagina aperta e della navigazione successiva.

---

## 2026-06-18 — Stampa PDF menù/vini, layout di stampa e privacy recensioni

**Pulsante "Scarica PDF" (menù e vini)**
- Stampa nativa del browser (`window.print()` → "Salva come PDF"): nessuna libreria
  aggiunta. Pulsante spostato nel **footer**, visibile solo su `/menu` e `/vini`
  (`Footer.vue`); etichetta dinamica ("Scarica menù (PDF)" / "Scarica lista vini (PDF)").

**Stile di stampa (`general.scss` + `Menu.vue` + `Vini.vue`)**
- `@media print`: sfondo bianco, navbar/footer/pulsante nascosti.
- Fix **AOS**: in stampa tutti gli elementi `[data-aos]` forzati visibili (prima
  sparivano piatti/vini non ancora scrollati → pagine bianche).
- `@page { margin: 18mm 16mm }`: margine su ogni pagina (serve deselezionare
  "Intestazioni e piè di pagina" nella finestra di stampa per togliere URL/data/n° pagina).
- **Menù**: i gruppi di portate possono spezzarsi tra pagine (così gli Antipasti
  partono già in prima pagina), ma titolo+1° piatto restano uniti (`course__lead`,
  `break-inside: avoid`) e ogni piatto resta intero.
- **Vini**: vini raggruppati per cantina in blocchi che non si spezzano
  (`cantina-group`); spaziatura compattata.
- `Vini.vue`: il vino senza prezzo non mostra più un "€" orfano.

**Recensioni (`Testimonials.vue`)**
- Autori mostrati con il **solo nome di battesimo** (no cognomi) per ridurre il
  profilo privacy/GDPR sulle recensioni Google ripubblicate.

**Pulizia**
- Rimosso il PDF sorgente da `src/data/`; aggiunta regola `.gitignore`
  (`src/data/*.pdf`) per non committare PDF generati/di lavoro.

---

## 2026-06-18 — Fix build Netlify (crypto is not defined)

**Problema:** il deploy su Netlify falliva con `ReferenceError: crypto is not defined`
(stack: `serialize-javascript` ← `@rollup/plugin-terser`, fase di minify). Causa: Netlify
usava **Node 18** (`Now using node v18.20.8`), dove la globale `crypto` non esiste; è
disponibile solo da **Node 20**. Il codice del sito non c'entra.

**Modifiche:**
- `netlify.toml` (nuovo): fissa `NODE_VERSION = "20"`; `command`/`publish` invariati
  rispetto alla UI Netlify (`npm run build` → `dist`). Risolve la causa alla radice.
- `vite.config.js`: aggiunto polyfill di `crypto` per il build (cintura di sicurezza,
  funziona anche se Netlify ignorasse `NODE_VERSION`). Guardia
  `if (typeof globalThis.crypto === 'undefined')` → su Node 20+ (dove è read-only) non
  tocca nulla.

**Verifica:** `npm run build` ok in locale.

---

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
