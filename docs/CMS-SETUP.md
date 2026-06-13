# Setup del pannello di gestione menù (Decap CMS)

Guida una tantum per attivare il login al pannello `/admin`. Il codice è già pronto nel
progetto (`public/admin/`); mancano solo due configurazioni da fare sui pannelli web di
**GitHub** e **Netlify**. Tempo stimato: ~10 minuti.

> Nota: i nomi esatti delle voci di menu su GitHub e Netlify possono cambiare nel tempo.
> Se una voce ha un nome leggermente diverso, cerca il termine chiave (es. "OAuth").

---

## Prerequisito

Il sito deve essere pubblicato su **Netlify** dal repository GitHub
`CalinCretu/JohnsRestaurant`, con deploy automatico sul branch `main` (così ad ogni
modifica salvata dal CMS il sito si ricostruisce da solo).

---

## Passo 1 — Crea una GitHub OAuth App

1. Vai su GitHub → **Settings** (del tuo account) → **Developer settings** →
   **OAuth Apps** → **New OAuth App**.
   Link diretto: https://github.com/settings/developers
2. Compila:
   - **Application name**: `John's Restaurant CMS` (un nome qualsiasi)
   - **Homepage URL**: l'indirizzo del sito (es. `https://johnsrestaurant.netlify.app`)
   - **Authorization callback URL**: `https://api.netlify.com/auth/done`
     (esatto così — è l'indirizzo di Netlify che gestisce il login)
3. Clicca **Register application**.
4. Nella pagina dell'app:
   - copia il **Client ID**
   - clicca **Generate a new client secret** e copia il **Client Secret**
     (mostrato una sola volta — salvalo subito)

---

## Passo 2 — Collega l'OAuth App a Netlify

1. Apri il sito su **Netlify** → **Site configuration** (o "Site settings").
2. Cerca la sezione **Access & security** → **OAuth**
   (in alcune versioni: "Access control" → "OAuth" → "Authentication providers").
3. Clicca **Install provider** (o "Add provider") e scegli **GitHub**.
4. Incolla il **Client ID** e il **Client Secret** copiati al Passo 1. Salva.

---

## Passo 3 — Prova il pannello

1. Vai su `https://iltuosito/admin` (es. `https://johnsrestaurant.netlify.app/admin`).
2. Clicca **Login with GitHub** e autorizza.
3. Dovresti vedere due sezioni: **Menù** e **Vini e Bevande**.
4. Prova a cambiare un prezzo e clicca **Publish** (in alto). Decap crea un commit;
   dopo ~1–2 minuti Netlify ricostruisce e la modifica è online.

---

## Uso quotidiano (per il cuoco)

- Entrare su `/admin`, login con GitHub.
- **Menù**: aprire "Menù del Ristorante", scegliere la portata, aggiungere/modificare/
  eliminare piatti (Nome italiano, Descrizione inglese, Prezzo). Le frecce riordinano.
- **Vini**: aprire "Carta dei Vini". Per i vini compilare la **Cantina**: i vini con la
  stessa cantina vengono raggruppati automaticamente sotto la stessa intestazione.
- Cliccare **Publish** per pubblicare. Le modifiche compaiono online dopo il rebuild.

---

## Note e alternative

- **Più persone**: per far accedere il cuoco con un suo account, aggiungilo come
  *collaboratore* del repo GitHub (Settings → Collaborators) con permesso di scrittura.
- **Login con email/password invece di GitHub**: è possibile con il servizio gestito
  **DecapBridge** (https://decapbridge.com) — cambia solo la sezione `backend` di
  `public/admin/config.yml`. Da valutare se il cuoco non vuole usare GitHub.
- **Editorial workflow (bozze)**: si può attivare `publish_mode: editorial_workflow` in
  `config.yml` per salvare come bozza e pubblicare in un secondo momento. Ora è disattivo:
  ogni Publish va subito online.
