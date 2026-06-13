# Registro delle Modifiche — John's Restaurant Todi

Questo file funge da "GitHub offline": ogni volta che mi chiederai di fare un commit,
qui annoterò le modifiche effettuate per tenere traccia del lavoro svolto.

---

<!-- Le voci più recenti vanno in cima -->

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
