// Immagini responsive.
//
// Le foto vengono mostrate molto più piccole di quanto sono: una da 1440 px finiva
// in un riquadro da 240 px sul telefono. `scripts/optimize-images.mjs` genera per
// ogni immagine sopra i 640 px una variante "nome-640.webp"; qui si costruisce il
// srcset che permette al browser di scegliere quella giusta.

export const VARIANTE_W = 640

/**
 * @param {string} src        percorso dell'immagine a piena risoluzione
 * @param {number} larghezza  sua larghezza reale in pixel
 * @returns {string} valore da mettere nell'attributo srcset
 *
 * Se l'immagine non supera i 640 px la variante non è stata generata e si
 * restituisce il solo originale: la regola qui deve restare allineata a quella
 * dello script.
 */
export function srcset(src, larghezza) {
  if (!larghezza || larghezza <= VARIANTE_W) return `${src} ${larghezza || VARIANTE_W}w`
  const ridotta = src.replace(/\.webp$/, `-${VARIANTE_W}.webp`)
  return `${ridotta} ${VARIANTE_W}w, ${src} ${larghezza}w`
}
