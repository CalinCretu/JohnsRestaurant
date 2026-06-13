// Ottimizzazione immagini: ridimensiona (max 2000px) e ricomprime in-place,
// mantenendo nomi/percorsi. Genera anche le icone PWA e l'immagine social (OG).
// Uso: node scripts/optimize-images.mjs
import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const IMG_DIR = path.join(ROOT, 'public', 'imgs');
const PUBLIC_DIR = path.join(ROOT, 'public');
const MAX_W = 2000;

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
}

async function makeOgImage() {
  const src = path.join(IMG_DIR, 'photos', 'PanoramaTodi.png');
  await sharp(src)
    .resize(1200, 630, { fit: 'cover', position: 'centre' })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(path.join(IMG_DIR, 'og-image.jpg'));
  console.log('immagine social generata: imgs/og-image.jpg');
}

const files = await walk(IMG_DIR);
let totBefore = 0;
let totAfter = 0;
for (const f of files) {
  const r = await optimize(f);
  if (!r) continue;
  totBefore += r.before;
  totAfter += r.after;
  const rel = path.relative(ROOT, r.file);
  if (!r.skipped) {
    console.log(`${rel}: ${fmt(r.before)} -> ${fmt(r.after)}`);
  }
}
await makeIcons();
await makeOgImage();
console.log(`\nTOTALE immagini: ${fmt(totBefore)} -> ${fmt(totAfter)} (risparmio ${(100 - (totAfter / totBefore) * 100).toFixed(0)}%)`);
