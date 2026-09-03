// Aggiornamento di <head> a ogni cambio pagina e a ogni cambio lingua.
//
// In una single-page application il markup di index.html resta quello della home:
// senza questo, /menu, /vini e /school mostrerebbero tutti titolo e descrizione
// della home, sia nei risultati di ricerca sia nell'anteprima dei link condivisi.

export const SITE_URL = 'https://johnpatersontodi.com'

/** Crea il tag se non esiste, poi ne aggiorna il contenuto. */
function setMeta(selector, attrs, content) {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v))
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/**
 * @param {object} route  rotta attiva (usa route.meta.titleKey / descKey)
 * @param {function} t    funzione di traduzione ($t del componente)
 * @param {string} locale lingua attiva ('it' | 'en')
 */
export function updateHead(route, t, locale) {
  const titleKey = route?.meta?.titleKey || 'seo.home_title'
  const descKey = route?.meta?.descKey || 'seo.home_desc'
  const title = t(titleKey)
  const description = t(descKey)
  const url = SITE_URL + (route.path === '/' ? '/' : route.path)

  document.title = title
  // L'attributo lang deve seguire la lingua scelta: conta per i motori di
  // ricerca e per la pronuncia degli screen reader.
  document.documentElement.setAttribute('lang', locale)

  setMeta('meta[name="description"]', { name: 'description' }, description)
  setCanonical(url)

  // La 404 non deve finire nell'indice: l'URL non esiste, ma il server della SPA
  // risponde comunque 200 e senza questo Google potrebbe indicizzarla.
  // Il valore viene riscritto a ogni cambio pagina, non serve rimuovere il tag.
  setMeta(
    'meta[name="robots"]',
    { name: 'robots' },
    route?.meta?.noindex ? 'noindex, follow' : 'index, follow'
  )

  setMeta('meta[property="og:title"]', { property: 'og:title' }, title)
  setMeta('meta[property="og:description"]', { property: 'og:description' }, description)
  setMeta('meta[property="og:url"]', { property: 'og:url' }, url)
  setMeta('meta[property="og:locale"]', { property: 'og:locale' }, locale === 'it' ? 'it_IT' : 'en_GB')

  setMeta('meta[name="twitter:title"]', { name: 'twitter:title' }, title)
  setMeta('meta[name="twitter:description"]', { name: 'twitter:description' }, description)
}
