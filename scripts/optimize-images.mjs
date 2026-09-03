// Ottimizzazione immagini in due fasi:
//  1. ricompressione in-place (max 2000px) di loghi e immagine social, che devono
//     restare in JPG/PNG per compatibilita' (favicon, icone PWA, anteprime social);
//  2. conversione in WebP di foto, menu' e scuola: sono fotografie, e molte erano
//     salvate in PNG (formato per la grafica, non per le foto) pesando 5-10 volte tanto.
// Genera inoltre le icone PWA e l'immagine social (OG).
//
// Uso:
//   npm run optimize-images            converte e cancella gli originali sostituiti
//   npm run optimize-images -- --keep  converte ma tiene gli originali
import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const IMG_DIR = path.join(ROOT, 'public', 'imgs');
const PUBLIC_DIR = path.join(ROOT, 'public');
const MAX_W = 2000;
const KEEP = process.argv.includes('--keep');

// Cartelle convertite in WebP. `logos` e la radice di imgs restano fuori:
// da li' si generano favicon, icone PWA e og-image.jpg.
const WEBP_DIRS = ['photos', 'menus', 'scuola'];

// Qualita' piu' alta per i menu': sono fotografie di testo stampato e devono
// restare leggibili quando il cliente ingrandisce.
const WEBP_QUALITY = { menus: 84, photos: 80, scuola: 80 };

// Variante ridotta per telefoni e riquadri piccoli. Misurando le pagine, nessuna
// immagine viene mostrata piu' larga di ~610 px: 640 copre anche gli schermi a
// densita' doppia, mentre gli originali (fino a 1530 px) restano per i casi grandi.
const VARIANTE_W = 640;

// Immagini escluse dalla variante ridotta. PanoramaTodi e' lo sfondo dell'hero:
// e' un panorama largo e basso (2000x384) usato con background-size: cover in un
// riquadro alto, quindi il browser lo ingrandisce molto e una versione da 640 px
// risulterebbe sgranata. Meglio scaricare l'originale.
const NO_VARIANTE = ['PanoramaTodi'];

// Su Windows la cache di sharp tiene aperto il file e ne impedisce la cancellazione.
sharp.cache(false);

/** Cartella di primo livello sotto public/imgs (stringa vuota per la radice). */
function topFolder(file) {
  const rel = path.relative(IMG_DIR, file).split(path.sep);
  return rel.length > 1 ? rel[0] : '';
}

const fmt = (n) => `${(n / 1024).toFixed(0)} KB`;

async function walk(dir) {
  const out = [];
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else out.push(full);
  }
  return out;
}

async function optimize(file) {
  const ext = path.extname(file).toLowerCase();
  if (!['.png', '.jpg', '.jpeg'].includes(ext)) return null;

  const input = await fs.readFile(file);
  const img = sharp(input, { failOn: 'none' });
  const meta = await img.metadata();

  let pipeline = sharp(input, { failOn: 'none' }).rotate();
  if (meta.width && meta.width > MAX_W) {
    pipeline = pipeline.resize({ width: MAX_W, withoutEnlargement: true });
  }

  if (ext === '.png') {
    pipeline = pipeline.png({ quality: 80, compressionLevel: 9, palette: true, effort: 8 });
  } else {
    pipeline = pipeline.jpeg({ quality: 80, mozjpeg: true });
  }

  const out = await pipeline.toBuffer();
  if (out.length < input.length) {
    await fs.writeFile(file, out);
    return { file, before: input.length, after: out.length };
  }
  return { file, before: input.length, after: input.length, skipped: true };
}

/**
 * Converte un'immagine in WebP accanto all'originale e rimuove l'originale.
 * L'eventuale "&" nel nome viene tolto: negli URL crea problemi.
 */
async function toWebp(file) {
  const ext = path.extname(file).toLowerCase();
  if (!['.png', '.jpg', '.jpeg'].includes(ext)) return null;

  const folder = topFolder(file);
  const input = await fs.readFile(file);
  const meta = await sharp(input, { failOn: 'none' }).metadata();

  let pipeline = sharp(input, { failOn: 'none' }).rotate();
  if (meta.width && meta.width > MAX_W) {
    pipeline = pipeline.resize({ width: MAX_W, withoutEnlargement: true });
  }
  const out = await pipeline.webp({ quality: WEBP_QUALITY[folder] ?? 80, effort: 6 }).toBuffer();

  const dest = path.join(
    path.dirname(file),
    path.basename(file, path.extname(file)).replace(/&/g, '') + '.webp'
  );
  await fs.writeFile(dest, out);
  if (!KEEP) await fs.unlink(file);

  return { file, dest, before: input.length, after: out.length };
}

/**
 * Crea "nome-640.webp" accanto a "nome.webp" per le immagini piu' larghe di 640 px.
 * Serve al srcset: da telefono si scaricava una foto da 1440 px per mostrarla a 240.
 */
async function makeVariante(file) {
  const base = path.basename(file, '.webp');
  if (base.endsWith(`-${VARIANTE_W}`)) return null;   // e' gia' una variante
  if (NO_VARIANTE.includes(base)) return null;

  const dest = path.join(path.dirname(file), `${base}-${VARIANTE_W}.webp`);
  const input = await fs.readFile(file);
  const meta = await sharp(input).metadata();
  if (!meta.width || meta.width <= VARIANTE_W) return null;

  const folder = topFolder(file);
  const out = await sharp(input)
    .resize({ width: VARIANTE_W, withoutEnlargement: true })
    .webp({ quality: WEBP_QUALITY[folder] ?? 80, effort: 6 })
    .toBuffer();
  await fs.writeFile(dest, out);
  return { dest, before: input.length, after: out.length };
}

async function makeIcons() {
  const logo = path.join(IMG_DIR, 'logos', 'Logo_Johns.jpg');
  const sizes = [
    { name: 'pwa-192x192.png', size: 192 },
    { name: 'pwa-512x512.png', size: 512 },
    { name: 'apple-touch-icon.png', size: 180 },
  ];
  for (const { name, size } of sizes) {
    await sharp(logo)
      .resize(size, size, { fit: 'cover' })
      .png()
      .toFile(path.join(PUBLIC_DIR, name));
    console.log(`icona generata: ${name}`);
  }

  // Logo ridotto: nella barra e' alto 68 px e nella schermata di caricamento 200,
  // ma il file originale e' da 1457 px (29 KB scaricati su ogni pagina).
  await sharp(logo)
    .resize(320, 320, { fit: 'cover' })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(path.join(IMG_DIR, 'logos', 'Logo_Johns-320.jpg'));
  console.log('logo ridotto generato: imgs/logos/Logo_Johns-320.jpg');
}

/**
 * Favicon .ico multi-formato (16/32/48/64) a partire dal logo.
 *
 * Il file precedente conteneva una sola immagine 256x256 in bitmap NON compressa e
 * pesava 264 KB: piu' della foto di sfondo della home, scaricata a ogni visita.
 * Un .ico e' un contenitore: intestazione, un indice di 16 byte per immagine e poi
 * i dati. Qui dentro si mettono dei PNG (formato supportato da tutti i browser
 * attuali), cosi' il file scende a pochi KB.
 */
async function makeFavicon() {
  const src = path.join(IMG_DIR, 'logos', 'Logo_Johns.jpg');
  const sizes = [16, 32, 48, 64];
  const pngs = await Promise.all(
    sizes.map((s) =>
      sharp(src).resize(s, s, { fit: 'cover' }).png({ compressionLevel: 9 }).toBuffer()
    )
  );

  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);            // riservato
  header.writeUInt16LE(1, 2);            // tipo 1 = icona
  header.writeUInt16LE(sizes.length, 4); // quante immagini

  const indice = Buffer.alloc(16 * sizes.length);
  let offset = header.length + indice.length;
  sizes.forEach((s, i) => {
    const b = i * 16;
    indice[b] = s === 256 ? 0 : s;       // larghezza (0 significa 256)
    indice[b + 1] = s === 256 ? 0 : s;   // altezza
    indice[b + 2] = 0;                   // colori della palette (0 = truecolor)
    indice[b + 3] = 0;                   // riservato
    indice.writeUInt16LE(1, b + 4);      // piani
    indice.writeUInt16LE(32, b + 6);     // bit per pixel
    indice.writeUInt32LE(pngs[i].length, b + 8);
    indice.writeUInt32LE(offset, b + 12);
    offset += pngs[i].length;
  });

  const dest = path.join(IMG_DIR, 'logos', 'Logo_Johns_ico.ico');
  const prima = await fs.readFile(dest).then((b) => b.length).catch(() => 0);
  await fs.writeFile(dest, Buffer.concat([header, indice, ...pngs]));
  const dopo = (await fs.readFile(dest)).length;
  console.log(`favicon generata: ${fmt(prima)} -> ${fmt(dopo)} (${sizes.join('/')} px)`);
}

async function makeOgImage() {
  // Dopo la prima esecuzione l'originale e' gia' WebP: si usa quello.
  let src = null;
  for (const name of ['PanoramaTodi.png', 'PanoramaTodi.webp']) {
    const candidate = path.join(IMG_DIR, 'photos', name);
    try { await fs.access(candidate); src = candidate; break; } catch { /* prova il prossimo */ }
  }
  if (!src) {
    console.warn('og-image: sorgente PanoramaTodi non trovata, salto');
    return;
  }
  await sharp(src)
    .resize(1200, 630, { fit: 'cover', position: 'centre' })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(path.join(IMG_DIR, 'og-image.jpg'));
  console.log('immagine social generata: imgs/og-image.jpg');
}

// Icone PWA e immagine social per prime: leggono dagli originali,
// che la fase WebP puo' rimuovere.
await makeIcons();
await makeFavicon();
await makeOgImage();

const files = await walk(IMG_DIR);
let totBefore = 0;
let totAfter = 0;

// --- Fase 1: ricompressione in-place di cio' che deve restare PNG/JPG ---
console.log('\n1) Ricompressione (loghi, immagine social)');
for (const f of files) {
  if (WEBP_DIRS.includes(topFolder(f))) continue;
  const r = await optimize(f);
  if (!r) continue;
  totBefore += r.before;
  totAfter += r.after;
  if (!r.skipped) {
    console.log(`   ${path.relative(ROOT, r.file)}: ${fmt(r.before)} -> ${fmt(r.after)}`);
  }
}

// --- Fase 2: conversione in WebP di foto, menu e scuola ---
console.log('\n2) Conversione in WebP (foto, menu, scuola)');
for (const f of files) {
  if (!WEBP_DIRS.includes(topFolder(f))) continue;
  const r = await toWebp(f);
  if (!r) continue;
  totBefore += r.before;
  totAfter += r.after;
  const saved = (100 - (r.after / r.before) * 100).toFixed(0);
  console.log(
    `   ${path.relative(IMG_DIR, r.dest).padEnd(36)} ${fmt(r.before).padStart(8)} -> ${fmt(r.after).padStart(7)}  (-${saved}%)`
  );
}

// --- Fase 3: variante ridotta per il srcset ---
console.log(`\n3) Variante da ${VARIANTE_W} px (per telefoni e riquadri piccoli)`);
let nVarianti = 0;
for (const f of await walk(IMG_DIR)) {
  if (!f.endsWith('.webp') || !WEBP_DIRS.includes(topFolder(f))) continue;
  const r = await makeVariante(f);
  if (!r) continue;
  nVarianti++;
  console.log(
    `   ${path.relative(IMG_DIR, r.dest).padEnd(40)} ${fmt(r.before).padStart(8)} -> ${fmt(r.after).padStart(7)}`
  );
}
if (nVarianti === 0) console.log('   nessuna immagine sopra i 640 px da ridurre');

console.log(
  `\nTOTALE immagini: ${fmt(totBefore)} -> ${fmt(totAfter)} (risparmio ${(100 - (totAfter / totBefore) * 100).toFixed(0)}%)`
);
if (KEEP) console.log('Originali conservati (--keep).');
