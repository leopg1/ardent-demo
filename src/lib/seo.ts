import { useEffect } from 'react'

/**
 * Domeniul canonic al site-ului.
 * TODO: de înlocuit cu domeniul final al clinicii (ardental.ro nu mai le aparține — vezi
 * dosarul de research). Setează VITE_SITE_URL la build ca să nu mai umbli prin cod:
 * el are prioritate față de valoarea implicită de mai jos.
 */
export const BASE_URL = (
  import.meta.env.VITE_SITE_URL || 'https://ardental-arad.ro'
).replace(/\/$/, '')

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.content = content
}

type PageMetaOptions = {
  /** Pagini care nu trebuie indexate (404). Adaugă robots=noindex și sare peste canonical. */
  noindex?: boolean
}

/** Setează title + description + canonical + Open Graph per pagină (SPA). */
export function usePageMeta(
  title: string,
  description?: string,
  ogImage?: string,
  options: PageMetaOptions = {},
) {
  const { noindex = false } = options

  useEffect(() => {
    document.title = title
    setMeta('property', 'og:title', title)
    if (description) {
      setMeta('name', 'description', description)
      setMeta('property', 'og:description', description)
    }
    const url = BASE_URL + window.location.pathname
    setMeta('property', 'og:url', url)
    if (ogImage) setMeta('property', 'og:image', BASE_URL + ogImage)

    const canonical =
      document.querySelector<HTMLLinkElement>('link[rel="canonical"]') ??
      document.head.appendChild(
        Object.assign(document.createElement('link'), { rel: 'canonical' }),
      )

    if (noindex) {
      // Pe 404 nu declarăm canonical (ar valida un URL inexistent) și cerem explicit neindexarea.
      canonical.remove()
      setMeta('name', 'robots', 'noindex, follow')
    } else {
      canonical.href = url
      document.querySelector('meta[name="robots"]')?.remove()
    }

    return () => {
      if (noindex) document.querySelector('meta[name="robots"]')?.remove()
    }
  }, [title, description, ogImage, noindex])
}

/**
 * Injectează un bloc JSON-LD pentru pagina curentă (FAQPage, BreadcrumbList etc.)
 * și îl scoate la demontare, ca să nu se acumuleze între rute.
 */
export function useJsonLd(data: object | null | undefined) {
  const json = data ? JSON.stringify(data) : null

  useEffect(() => {
    if (!json) return
    const el = document.createElement('script')
    el.type = 'application/ld+json'
    el.dataset.page = 'true'
    el.textContent = json
    document.head.appendChild(el)
    return () => el.remove()
  }, [json])
}

/** Structured data pentru o listă de întrebări frecvente. */
export function faqJsonLd(items: readonly { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  }
}

/** Structured data pentru firul Acasă › Servicii › Pagina curentă. */
export function breadcrumbJsonLd(trail: readonly { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((step, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: step.name,
      item: BASE_URL + step.path,
    })),
  }
}
