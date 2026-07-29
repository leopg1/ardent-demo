import { useEffect } from 'react'

// TODO: de înlocuit cu domeniul final al clinicii (ardental.ro nu mai le aparține — vezi dosarul de research).
const BASE_URL = 'https://ardental-arad.ro'

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.content = content
}

/** Setează title + description + canonical + Open Graph per pagină (SPA). */
export function usePageMeta(title: string, description?: string, ogImage?: string) {
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

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = url
  }, [title, description, ogImage])
}
